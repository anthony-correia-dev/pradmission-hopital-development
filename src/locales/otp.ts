/**
 * Traductions pour la page OTP
 * @module locales/otp
 */

export const otpTranslations = {
  fr: {
    title: 'Code de vérification',
    subtitle: 'Un code à 6 chiffres vous a été envoyé par SMS au numéro se terminant par XXXX',
    label: 'Code de vérification',
    placeholder: '000000',
    continue: 'Vérifier',
    back: 'Retour',
    required: 'Le code est requis',
    invalid: 'Code invalide (6 chiffres requis)',
    verifying: 'Vérification...',
    resend: 'Renvoyer le code'
  },
  en: {
    title: 'Verification Code',
    subtitle: 'A 6-digit code has been sent by SMS to the number ending in XXXX',
    label: 'Verification code',
    placeholder: '000000',
    continue: 'Verify',
    back: 'Back',
    required: 'Code is required',
    invalid: 'Invalid code (6 digits required)',
    verifying: 'Verifying...',
    resend: 'Resend code'
  }
} as const

export type OTPTranslations = typeof otpTranslations.fr
