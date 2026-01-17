/**
 * Traductions pour la page InvalidLink
 * @module locales/invalidLink
 */

export const invalidLinkTranslations = {
  fr: {
    title: 'Lien invalide',
    message: 'Ce lien de préadmission n\'est plus valide ou a expiré.',
    contact: 'Si vous pensez qu\'il s\'agit d\'une erreur, veuillez contacter l\'hôpital.',
    emailLabel: 'Email',
    emailAddress: 'digital@latour.ch',
    emailLink: 'mailto:digital@latour.ch',
    selectLanguage: 'Choisissez votre langue'
  },
  en: {
    title: 'Invalid Link',
    message: 'This pre-admission link is no longer valid or has expired.',
    contact: 'If you believe this is an error, please contact the hospital.',
    emailLabel: 'Email',
    emailAddress: 'digital@latour.ch',
    emailLink: 'mailto:digital@latour.ch',
    selectLanguage: 'Choose your language'
  }
} as const

export type InvalidLinkTranslations = typeof invalidLinkTranslations.fr
