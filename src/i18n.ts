import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { detectBrowserLanguage } from '@/utils/language'
import { landingTranslations } from '@/locales/landing'
import { securityTranslations } from '@/locales/security'
import { otpTranslations } from '@/locales/otp'
import { qualificationTranslations } from '@/locales/qualification'
import { adminTranslations } from '@/locales/admin'
import { successTranslations } from '@/locales/success'
import { invalidLinkTranslations } from '@/locales/invalidLink'
import { loadingTranslations } from '@/locales/loading'
import { errorFallbackTranslations } from '@/locales/errorFallback'
import { progressTranslations } from '@/locales/progress'
import { notFoundTranslations } from '@/locales/notFound'

const resources = {
  fr: {
    landing: landingTranslations.fr,
    security: securityTranslations.fr,
    otp: otpTranslations.fr,
    qualification: qualificationTranslations.fr,
    admin: adminTranslations.fr,
    success: successTranslations.fr,
    invalidLink: invalidLinkTranslations.fr,
    loading: loadingTranslations.fr,
    errorFallback: errorFallbackTranslations.fr,
    progress: progressTranslations.fr,
    notFound: notFoundTranslations.fr,
  },
  en: {
    landing: landingTranslations.en,
    security: securityTranslations.en,
    otp: otpTranslations.en,
    qualification: qualificationTranslations.en,
    admin: adminTranslations.en,
    success: successTranslations.en,
    invalidLink: invalidLinkTranslations.en,
    loading: loadingTranslations.en,
    errorFallback: errorFallbackTranslations.en,
    progress: progressTranslations.en,
    notFound: notFoundTranslations.en,
  },
} as const

i18n.use(initReactI18next).init({
  resources,
  lng: detectBrowserLanguage(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
