/**
 * Traductions pour l'indicateur de progression
 * @module locales/progress
 */

export const progressSteps = [
  { key: 'qualification', labelFr: 'Identification', labelEn: 'Identification' },
  { key: 'admin', labelFr: 'Informations', labelEn: 'Information' },
  { key: 'success', labelFr: 'Terminé', labelEn: 'Complete' }
] as const

export const progressTranslations = {
  fr: {
    qualification: 'Identification',
    admin: 'Informations',
    success: 'Terminé'
  },
  en: {
    qualification: 'Identification',
    admin: 'Information',
    success: 'Complete'
  }
} as const

export type ProgressTranslations = typeof progressTranslations.fr
