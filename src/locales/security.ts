export const securityTranslations = {
  fr: {
    title: 'Vérification de sécurité',
    subtitle: 'Pour accéder à votre dossier, veuillez confirmer votre date de naissance',
    label: 'Date de naissance',
    placeholder: 'JJ.MM.YYYY',
    continue: 'Continuer',
    back: 'Retour',
    required: 'La date de naissance est requise',
    invalid: 'Date invalide',
    futureDate: 'La date de naissance ne peut pas être dans le futur',
    verifying: 'Vérification...',
    invalidBirthDate: 'Date de naissance invalide',
    wrongDate: 'La date de naissance ne correspond pas à celle enregistrée dans votre dossier',
    connectionError: 'Erreur de connexion, veuillez réessayer'
  },
  en: {
    title: 'Security Verification',
    subtitle: 'To access your file, please confirm your date of birth',
    label: 'Date of birth',
    placeholder: 'DD.MM.YYYY',
    continue: 'Continue',
    back: 'Back',
    required: 'Date of birth is required',
    invalid: 'Invalid date',
    futureDate: 'Date of birth cannot be in the future',
    verifying: 'Verifying...',
    invalidBirthDate: 'Invalid birth date',
    wrongDate: 'The date of birth does not match the one in your file',
    connectionError: 'Connection error, please try again'
  }
} as const
