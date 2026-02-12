export const REGEX = {
  OTP_CODE: /^\d{6}$/,
  AVS_NUMBER: /^\d{13}$/,
  CARD_NUMBER: /^\d{20}$/,
  DIGITS_ONLY: /^\d+$/,
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
} as const

export const FILE_LIMITS = {
  MAX_SIZE_BYTES: 10 * 1024 * 1024,
  MAX_SIZE_MB: 10,
} as const

export const ACCEPTED_FILE_FORMATS = [
  'application/pdf',
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/heic',
  'image/heif',
  'image/webp',
  'image/tiff',
  'image/tif',
] as const

export const ACCEPTED_FILE_EXTENSIONS = '.pdf,.jpg,.jpeg,.png,.heic,.heif,.webp,.tif,.tiff'
