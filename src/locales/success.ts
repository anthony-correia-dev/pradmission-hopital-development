/**
 * Traductions pour la page Success
 * @module locales/success
 */

export const successTranslations = {
  fr: {
    title: 'Admission en ligne envoyée avec succès',
    message: 'Merci d\'avoir soumis votre demande. Elle sera traitée afin de préparer votre arrivée.',
    button: 'Comment se rendre à l\'hôpital?',
    link: 'https://www.la-tour.ch/fr/hopital-de-la-tour/se-rendre-lhopital-de-la-tour'
  },
  en: {
    title: 'Online admission submitted successfully',
    message: 'Thank you for submitting your request. It will be processed to prepare your arrival.',
    button: 'How to get to the hospital?',
    link: 'https://www.la-tour.ch/en/hopital-de-la-tour/getting-hopital-de-la-tour'
  }
} as const

export type SuccessTranslations = typeof successTranslations.fr
