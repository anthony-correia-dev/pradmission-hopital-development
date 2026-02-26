export interface ServerLogicResponse {
  success: boolean
  data: string
}

export interface GetPreadResponse {
  isValid: boolean
}

export interface GetBirthResponse {
  isValid: boolean
}

export interface GetPhoneResponse {
  lastDigits: string
}

export interface CloudFlowConfig {
  identityDoc: string
  insuranceDoc: string
  submitflow: string
  sendOtp: string
  verifyOtp: string
}

export interface OCRIdentityResponse {
  last_name: string
  first_names: string
  gender: string
  nationality: string
}

export interface OCRInsuranceResponse {
  rue: string
  ville: string
  zip: string
  country: string
  avs: string
  kvg_carte_no: string
  kvg_insurance: string
  vvg_carte_no: string
}

export interface MappedIdentityData {
  lastName: string
  firstNames: string
  firstName: string
  gender: string
  nationality: string
}

export interface MappedInsuranceData {
  street: string
  city: string
  zipCode: string
  country: string
  avsNumber: string
  kvgCardNumber: string
  kvgInsuranceName: string
  vvgCardNumber: string
}

export interface SubmitPayload {
  json: string
}

export interface SubmitResponse {
  status: string
  message?: string
  confirmationNumber?: string
}
