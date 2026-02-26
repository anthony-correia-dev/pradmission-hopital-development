export const API_ENDPOINTS = {
  VALIDATE_LINK: '/_api/serverlogics/getpread',
  VERIFY_BIRTH: '/_api/serverlogics/getbirth',
  SET_STEP: '/_api/serverlogics/setstep',
  GET_PHONE: '/_api/serverlogics/getphone',
  GET_FLOWS: '/_api/serverlogics/getflows',
  CLOUD_FLOW: '/_api/cloudflow/v1.0/trigger',
  SEND_OTP: '/_api/serverlogics/sendotp',
  VERIFY_OTP: '/_api/serverlogics/verifyotp',
  EXTRACT_DOCUMENT: '/_api/serverlogics/extractdocument',
  SUBMIT: '/_api/serverlogics/submit',
  GET_DOCTORS: '/_api/serverlogics/getdoctors',
  CSRF_TOKEN: '/_layout/tokenhtml',
} as const

export const ENV_VARS = {
  IDENTITY_TRIGGER: 'VITE_OCR_IDENTITY_TRIGGER_ID',
  INSURANCE_TRIGGER: 'VITE_OCR_INSURANCE_TRIGGER_ID',
  SENDOTP_TRIGGER: 'VITE_OCR_SENDOTP_TRIGGER_ID',
  VERIFYOTP_TRIGGER: 'VITE_OCR_VERIFYOTP_TRIGGER_ID',
  ENVIRONMENT: 'VITE_ENVIRONMENT',
} as const
