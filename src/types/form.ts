export type Language = 'fr' | 'en'

export type WizardStep = 'landing' | 'security' | 'otp' | 'qualification' | 'loading' | 'admin' | 'success'

export interface WizardFormData {
  language: Language
  preadmissionId: string
  birthDate: string
  otpCode: string
  reason: 'illness' | 'accident' | ''
  insurance: 'swiss' | 'international' | 'auto' | ''
  hasEmployer: boolean
  consentNLPD: boolean
  consentMarketing: boolean
  identityCard: File | null
  insuranceCard: File | null
  identityCardBase64: string
  identityCardMimeType: string
  insuranceCardBase64: string
  insuranceCardMimeType: string
  firstName: string
  lastName: string
  birthDatePersonal: string
  gender: string
  nationality: string
  avsNumber: string
  street: string
  npa: string
  city: string
  country: string
  email: string
  profession: string
  employerName: string
  employerAddress: string
  referringDoctor: string
  generalPractitioner: string
  accidentDate: string
  accidentInsurance: string
  claimNumber: string
  basicInsurance: string
  cardNumber: string
  policyNumber: string
  complementaryInsurance: string
}

export const DEFAULT_FORM_DATA: WizardFormData = {
  language: 'fr',
  preadmissionId: '',
  birthDate: '',
  otpCode: '',
  reason: 'illness',
  insurance: 'swiss',
  hasEmployer: false,
  consentNLPD: false,
  consentMarketing: false,
  identityCard: null,
  insuranceCard: null,
  identityCardBase64: '',
  identityCardMimeType: '',
  insuranceCardBase64: '',
  insuranceCardMimeType: '',
  firstName: '',
  lastName: '',
  birthDatePersonal: '',
  gender: '',
  nationality: '',
  avsNumber: '',
  street: '',
  npa: '',
  city: '',
  country: '',
  email: '',
  profession: '',
  employerName: '',
  employerAddress: '',
  referringDoctor: '',
  generalPractitioner: '',
  accidentDate: '',
  accidentInsurance: '',
  claimNumber: '',
  basicInsurance: '',
  cardNumber: '',
  policyNumber: '',
  complementaryInsurance: '',
}
