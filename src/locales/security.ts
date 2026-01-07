/**
 * Traductions pour la page Security
 * @module locales/security
 */

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
    verifying: 'Vérification...'
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
    verifying: 'Verifying...'
  }
} as const

export type SecurityTranslations = typeof securityTranslations.fr
