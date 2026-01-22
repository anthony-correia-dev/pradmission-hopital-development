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
    resend: 'Renvoyer le code',
    resendIn: 'Renvoyer le code dans {seconds}s',
    invalidCode: 'Le code est incorrect',
    connectionError: 'Erreur de connexion, veuillez réessayer'
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
    resend: 'Resend code',
    resendIn: 'Resend code in {seconds}s',
    invalidCode: 'The code is incorrect',
    connectionError: 'Connection error, please try again'
  }
} as const

export type OTPTranslations = typeof otpTranslations.fr
