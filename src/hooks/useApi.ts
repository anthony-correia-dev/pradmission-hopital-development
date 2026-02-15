import { API_ENDPOINTS } from '@/constants/api'
import { WIZARD_STAGES } from '@/constants/wizard'
import { capitalizeName, capitalizeFirstNames } from '@/utils/format'
import type {
  MappedIdentityData,
  MappedInsuranceData,
  CloudFlowConfig,
  SubmitResponse,
} from '@/types/api'
import type { WizardFormData } from '@/types/form'
import { mockApi } from './mockApi'

// ---------- Module-level state ----------
let csrfToken: string | null = null
let cloudFlowConfig: CloudFlowConfig | null = null

function isDevMode(): boolean {
  const host = window.location.hostname
  return host === 'localhost' || host === '127.0.0.1' || host.startsWith('192.168.') || host.startsWith('10.')
}

// ---------- CSRF Token ----------
async function fetchCsrfToken(): Promise<string> {
  if (csrfToken) return csrfToken

  const res = await fetch(API_ENDPOINTS.CSRF_TOKEN)
  const html = await res.text()
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')
  const input = doc.querySelector('input[name="__RequestVerificationToken"]')
  const token = input?.getAttribute('value') ?? ''
  csrfToken = token
  return token
}

// ---------- safeAjax ----------
async function safeAjax<T>(
  url: string,
  method: string,
  body?: Record<string, unknown>
): Promise<T> {
  const token = await fetchCsrfToken()
  const options: RequestInit = {
    method,
    headers: {
      __RequestVerificationToken: token,
      'content-type': 'application/json',
      'x-requested-with': 'XMLHttpRequest',
    },
  }
  if (body) {
    options.body = JSON.stringify(body)
  }

  const res = await fetch(url, options)
  const json = (await res.json()) as { success: boolean; data: string }

  if (!json.success) {
    throw new Error('API call failed')
  }

  return JSON.parse(json.data) as T
}

// ---------- safeAjaxCloudFlow ----------
async function safeAjaxCloudFlow<T>(
  triggerId: string,
  payload: Record<string, unknown>
): Promise<T> {
  const token = await fetchCsrfToken()
  const url = `${API_ENDPOINTS.CLOUD_FLOW}/${triggerId}`
  const body = `eventData=${encodeURIComponent(JSON.stringify(payload))}`

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      __RequestVerificationToken: token,
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'x-requested-with': 'XMLHttpRequest',
    },
    body,
  })

  const data = (await res.json()) as T | { json: string }

  // Handle double-wrapped responses
  if (data && typeof data === 'object' && 'json' in data && typeof data.json === 'string') {
    return JSON.parse(data.json) as T
  }

  return data as T
}

// ---------- Cloud Flow Config ----------
async function getCloudFlowConfig(): Promise<CloudFlowConfig> {
  if (cloudFlowConfig) return cloudFlowConfig

  if (isDevMode()) {
    cloudFlowConfig = {
      identityDoc: import.meta.env.VITE_OCR_IDENTITY_TRIGGER_ID ?? '',
      insuranceDoc: import.meta.env.VITE_OCR_INSURANCE_TRIGGER_ID ?? '',
      submitflow: '',
    }
    return cloudFlowConfig
  }

  const config = await safeAjax<CloudFlowConfig>(
    API_ENDPOINTS.GET_FLOWS,
    'GET'
  )
  cloudFlowConfig = config
  return config
}

// ---------- OCR Mapping ----------
function mapCloudFlowResponse(raw: {
  last_name?: string
  first_names?: string
  gender?: string
  nationality?: string
}): MappedIdentityData {
  const lastName = capitalizeName(raw.last_name ?? '')
  const firstNames = capitalizeFirstNames(raw.first_names ?? '')
  return {
    lastName,
    firstNames,
    firstName: firstNames,
    gender: raw.gender ?? '',
    nationality: raw.nationality ?? '',
  }
}

function mapInsuranceCloudFlowResponse(raw: {
  rue?: string
  ville?: string
  zip?: string
  country?: string
  avs?: string
  kvg_carte_no?: string
  kvg_insurance?: string
  vvg_carte_no?: string
}): MappedInsuranceData {
  return {
    street: raw.rue ?? '',
    city: capitalizeName(raw.ville ?? ''),
    zipCode: raw.zip ?? '',
    country: raw.country ?? '',
    avsNumber: raw.avs ?? '',
    kvgCardNumber: raw.kvg_carte_no ?? '',
    kvgInsuranceName: capitalizeName(raw.kvg_insurance ?? ''),
    vvgCardNumber: raw.vvg_carte_no ?? '',
  }
}

// ---------- Production API ----------
const prodApi = {
  async validatePreadmissionLink(id: string) {
    return safeAjax<{ isValid: boolean }>(
      `${API_ENDPOINTS.VALIDATE_LINK}?preadmissionId=${id}`,
      'GET'
    )
  },

  async verifyBirthDate(id: string, date: string) {
    // Convert ISO to DD/MM/YYYY
    const [year, month, day] = date.split('-')
    const formatted = `${day}/${month}/${year}`
    return safeAjax<{ isValid: boolean }>(
      `${API_ENDPOINTS.VERIFY_BIRTH}?preadmissionId=${id}`,
      'POST',
      { birthdate: formatted }
    )
  },

  async getPhoneLastDigits(id: string) {
    return safeAjax<{ lastDigits: string }>(
      `${API_ENDPOINTS.GET_PHONE}?preadmissionId=${id}`,
      'GET'
    )
  },

  async sendOtp(id: string, language?: string) {
    const triggerId = import.meta.env.VITE_OCR_SENDOTP_TRIGGER_ID as string
    return safeAjaxCloudFlow<{ success: boolean }>(triggerId, {
      number: id,
      language: language ?? 'fr',
    })
  },

  async verifyOTP(id: string, code: string) {
    const triggerId = import.meta.env.VITE_OCR_VERIFYOTP_TRIGGER_ID as string
    const result = await safeAjaxCloudFlow<string | { isValid: boolean }>(
      triggerId,
      { number: id, code }
    )

    if (typeof result === 'string') {
      return { isValid: result === 'True' }
    }
    return result
  },

  async extractDocumentData(
    base64: string,
    type: 'identity' | 'insurance'
  ): Promise<MappedIdentityData | MappedInsuranceData> {
    const config = await getCloudFlowConfig()
    const triggerId =
      type === 'identity' ? config.identityDoc : config.insuranceDoc
    const docType = type === 'identity' ? 'identityid' : 'insuranceid'

    const raw = await safeAjaxCloudFlow<Record<string, string>>(triggerId, {
      doc: docType,
      base64,
    })

    if (type === 'identity') {
      return mapCloudFlowResponse(raw)
    }
    return mapInsuranceCloudFlowResponse(raw)
  },

  async submitPreadmission(formData: WizardFormData) {
    const config = await getCloudFlowConfig()
    return safeAjaxCloudFlow<SubmitResponse>(config.submitflow, {
      json: JSON.stringify(formData),
    })
  },
}

// ---------- setStep (same for both) ----------
async function setStep(id: string, step: string) {
  const stageCode = WIZARD_STAGES[step]
  if (stageCode === undefined) return

  if (isDevMode()) return

  await safeAjax(
    `${API_ENDPOINTS.SET_STEP}?preadmissionId=${id}`,
    'PUT',
    { Stage: stageCode }
  )
}

// ---------- Exported hook ----------
export function useApi() {
  const api = isDevMode() ? mockApi : prodApi
  return { ...api, setStep }
}
