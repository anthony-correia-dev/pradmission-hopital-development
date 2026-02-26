export const otpTranslations = {
  fr: {
    title: 'Code de vérification',
    subtitle: 'Un code à 6 chiffres vous a été envoyé par SMS au numéro se terminant par {{digits}}',
    label: 'Code de vérification',
    placeholder: '000000',
    continue: 'Vérifier',
    back: 'Retour',
    required: 'Le code est requis',
    invalid: 'Code invalide (6 chiffres requis)',
    verifying: 'Vérification...',
    resend: 'Renvoyer le code',
    resendIn_one: 'Renvoyer le code dans {{count}} seconde',
    resendIn_other: 'Renvoyer le code dans {{count}} secondes',
    invalidCode: 'Le code est incorrect',
    connectionError: 'Erreur de connexion, veuillez réessayer'
  },
  en: {
    title: 'Verification Code',
    subtitle: 'A 6-digit code has been sent by SMS to the number ending in {{digits}}',
    label: 'Verification code',
    placeholder: '000000',
    continue: 'Verify',
    back: 'Back',
    required: 'Code is required',
    invalid: 'Invalid code (6 digits required)',
    verifying: 'Verifying...',
    resend: 'Resend code',
    resendIn_one: 'Resend code in {{count}} second',
    resendIn_other: 'Resend code in {{count}} seconds',
    invalidCode: 'The code is incorrect',
    connectionError: 'Connection error, please try again'
  }
} as const
