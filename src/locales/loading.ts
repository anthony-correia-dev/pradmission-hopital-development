/**
 * Traductions pour l'écran de chargement
 * @module locales/loading
 */

export const loadingTranslations = {
  fr: {
    message: 'Veuillez patienter, vos documents sont en cours de traitement'
  },
  en: {
    message: 'Please wait, your documents are being processed'
  }
} as const

export type LoadingTranslations = typeof loadingTranslations.fr
