/**
 * Traductions pour la page Landing
 * @module locales/landing
 */

export const landingTranslations = {
  fr: {
    welcome: 'Accélérez votre prise en charge.',
    subtitle: 'Notre admission en ligne permet de préparer votre venue à l\'Hôpital de La Tour.',
    description: 'Vos données sont traitées de façon confidentielle.',
    selectLanguage: 'Choisissez votre langue',
    start: 'Démarrer l\'admission',
    secure: 'Vos données sont protégées',
    fast: 'Rapide et simple',
    minutes: 'Seulement 5 minutes'
  },
  en: {
    welcome: 'Speed up your care.',
    subtitle: 'Our online admission allows you to prepare your visit to La Tour Hospital.',
    description: 'Your data is treated confidentially.',
    selectLanguage: 'Choose your language',
    start: 'Start online admission',
    secure: 'Your data is protected',
    fast: 'Quick and simple',
    minutes: 'Only 5 minutes'
  }
} as const

export type LandingTranslations = typeof landingTranslations.fr
