import type { MappedIdentityData, MappedInsuranceData } from '@/types/api'
import type { WizardFormData } from '@/types/form'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

function getTestOverride(key: string): string | null {
  try { return sessionStorage.getItem(`__test_${key}`) } catch { return null }
}

function getMockOcrDelay(): number {
  if (getTestOverride('ocr_timeout') === 'true') return 15000
  if (import.meta.env.VITE_MOCK_OCR_TIMEOUT === 'true') return 15000
  const custom = getTestOverride('ocr_delay') ?? import.meta.env.VITE_MOCK_OCR_DELAY_MS
  return custom ? Number(custom) : 2000
}

export const mockApi = {
  async validatePreadmissionLink(id: string) {
    await delay(800)
    return { isValid: !!id && id !== 'invalid' }
  },

  async verifyBirthDate(_id: string, date: string) {
    await delay(800)
    return { isValid: date === '1989-06-12' }
  },

  async getPhoneLastDigits(_id: string) {
    await delay(300)
    return { lastDigits: '1234' }
  },

  async sendOtp(_id: string) {
    await delay(500)
    return { success: true }
  },

  async verifyOTP(_id: string, code: string) {
    await delay(800)
    return { isValid: code === '123456' }
  },

  async extractDocumentData(
    _file: string,
    type: 'identity' | 'insurance'
  ): Promise<MappedIdentityData | MappedInsuranceData> {
    await delay(getMockOcrDelay())
    if (type === 'identity') {
      return {
        lastName: 'Dupont',
        firstNames: 'Jean Pierre',
        firstName: 'Jean Pierre',
        gender: 'male',
        nationality: 'CH',
      }
    }
    const notCovered = getTestOverride('ocr_not_covered') === 'true'
      || import.meta.env.VITE_MOCK_OCR_NOT_COVERED === 'true'
    return {
      street: 'Rue du Lac 15',
      city: 'Geneve',
      zipCode: '1200',
      country: 'CH',
      avsNumber: '756.1234.5678.90',
      kvgCardNumber: notCovered ? 'not_covered' : '80756012345678901234',
      kvgInsuranceName: 'CSS Assurance',
      vvgCardNumber: '80756098765432109876',
    }
  },

  async submitPreadmission(_formData: WizardFormData) {
    await delay(1500)
    return {
      status: 'success',
      confirmationNumber: `PREAD-MOCK-${Date.now()}`,
    }
  },
}
