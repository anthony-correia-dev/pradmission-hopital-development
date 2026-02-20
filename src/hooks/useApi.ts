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

// ---------- Module-level state ----------
let csrfToken: string | null = null
let cloudFlowConfig: CloudFlowConfig | null = null

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

  let data = (await res.json()) as
    | T
    | { json: string }
    | { data: T; status: string }

  // Handle double-wrapped responses ({ json: "..." })
  if (data && typeof data === 'object' && 'json' in data && typeof data.json === 'string') {
    data = JSON.parse(data.json) as T | { data: T; status: string }
  }

  // Cloud flows wrap payload in { status, data }
  if (data && typeof data === 'object' && 'data' in data && 'status' in data) {
    return (data as { data: T }).data
  }

  return data as T
}

// ---------- Server Logic with Cloud Flow fallback ----------
async function withServerLogicFallback<TServerLogic, TCloudFlow = TServerLogic>(
  label: string,
  serverLogicUrl: string,
  payload: Record<string, unknown>,
  cloudFlowTriggerId: string,
  mapServerLogic: (data: TServerLogic) => TCloudFlow
): Promise<TCloudFlow> {
  console.log(`[${label}] Fetching via Server Logic...`)
  try {
    const result = await safeAjax<TServerLogic>(serverLogicUrl, 'POST', payload)
    console.log(`[${label}] Server Logic success:`, result)
    return mapServerLogic(result)
  } catch (err) {
    console.warn(`[${label}] Server Logic failed, falling back to Cloud Flow...`, err)
    const result = await safeAjaxCloudFlow<TCloudFlow>(cloudFlowTriggerId, payload)
    console.log(`[${label}] Cloud Flow fallback success:`, result)
    return result
  }
}

// ---------- Cloud Flow Config ----------
async function getCloudFlowConfig(): Promise<CloudFlowConfig> {
  if (cloudFlowConfig) return cloudFlowConfig

  const raw = await safeAjax<{
    data: Record<string, string>
  }>(API_ENDPOINTS.GET_FLOWS, 'GET')
  console.log('[getCloudFlowConfig] getflows response:', raw)
  const flows = raw.data
  cloudFlowConfig = {
    identityDoc: flows.identityDoc ?? flows.identitydoc ?? '',
    insuranceDoc: flows.insuranceDoc ?? flows.insurancedoc ?? '',
    submitflow: flows.submitflow ?? flows.submitFlow ?? '',
    sendOtp: flows.sendOtp ?? flows.sendotp ?? '',
    verifyOtp: flows.verifyOtp ?? flows.verifyotp ?? '',
  }
  return cloudFlowConfig
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

// ---------- API ----------
const api = {
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
    const config = await getCloudFlowConfig()
    const payload = { number: id, language: language ?? 'fr' }
    return withServerLogicFallback<
      { status: string; last4Digits?: string },
      { success: boolean }
    >(
      'sendOtp',
      API_ENDPOINTS.SEND_OTP,
      payload,
      config.sendOtp,
      (data) => ({ success: data.status === 'success' })
    )
  },

  async verifyOTP(id: string, code: string) {
    const config = await getCloudFlowConfig()
    const payload = { number: id, code }
    return withServerLogicFallback<
      { isValid: boolean },
      { isValid: boolean }
    >(
      'verifyOtp',
      API_ENDPOINTS.VERIFY_OTP,
      payload,
      config.verifyOtp,
      (data) => ({ isValid: data.isValid })
    )
  },

  async extractDocumentData(
    base64: string,
    type: 'identity' | 'insurance'
  ): Promise<MappedIdentityData | MappedInsuranceData> {
    const config = await getCloudFlowConfig()
    const triggerId =
      type === 'identity' ? config.identityDoc : config.insuranceDoc
    const docType = type === 'identity' ? 'identityid' : 'insuranceid'
    const payload = { doc: docType, base64 }
    const mapper = type === 'identity' ? mapCloudFlowResponse : mapInsuranceCloudFlowResponse

    // Server Logic wraps OCR result in { status, data }, Cloud Flow is already
    // unwrapped by safeAjaxCloudFlow — both paths return raw snake_case fields,
    // then we apply the mapper once at the end.
    const raw = await withServerLogicFallback<
      Record<string, unknown>,
      Record<string, string>
    >(
      `extractDocument:${type}`,
      API_ENDPOINTS.EXTRACT_DOCUMENT,
      payload,
      triggerId,
      (result) => {
        // Production wraps in { status, data }, mock returns flat fields
        const fields = result.data && typeof result.data === 'object'
          ? result.data as Record<string, string>
          : result as unknown as Record<string, string>
        return fields
      }
    )

    return mapper(raw)
  },

  async submitPreadmission(formData: WizardFormData) {
    const config = await getCloudFlowConfig()
    const payload = { json: JSON.stringify(formData) }
    return withServerLogicFallback<SubmitResponse>(
      'submit',
      API_ENDPOINTS.SUBMIT,
      payload,
      config.submitflow,
      (data) => data
    )
  },

  async setStep(id: string, step: string) {
    const stageCode = WIZARD_STAGES[step]
    if (stageCode === undefined) return

    await safeAjax(
      `${API_ENDPOINTS.SET_STEP}?preadmissionId=${id}`,
      'PUT',
      { Stage: stageCode }
    )
  },
}

// ---------- Exported hook ----------
export function useApi() {
  return api
}
