/**
 * Point d'entrée centralisé pour toutes les traductions
 * @module locales
 */

export { landingTranslations } from './landing'
export { securityTranslations } from './security'
export { otpTranslations } from './otp'
export { qualificationTranslations } from './qualification'
export { adminTranslations } from './admin'
export { successTranslations } from './success'
export { loadingTranslations } from './loading'
export { progressSteps, progressTranslations } from './progress'

// Type utilitaire pour les langues supportées
export type SupportedLanguage = 'fr' | 'en'
