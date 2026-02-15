import type { landingTranslations } from '@/locales/landing'
import type { securityTranslations } from '@/locales/security'
import type { otpTranslations } from '@/locales/otp'
import type { qualificationTranslations } from '@/locales/qualification'
import type { adminTranslations } from '@/locales/admin'
import type { successTranslations } from '@/locales/success'
import type { invalidLinkTranslations } from '@/locales/invalidLink'
import type { loadingTranslations } from '@/locales/loading'
import type { errorFallbackTranslations } from '@/locales/errorFallback'
import type { progressTranslations } from '@/locales/progress'

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      landing: (typeof landingTranslations)['en']
      security: (typeof securityTranslations)['en']
      otp: (typeof otpTranslations)['en']
      qualification: (typeof qualificationTranslations)['en']
      admin: (typeof adminTranslations)['en']
      success: (typeof successTranslations)['en']
      invalidLink: (typeof invalidLinkTranslations)['en']
      loading: (typeof loadingTranslations)['en']
      errorFallback: (typeof errorFallbackTranslations)['en']
      progress: (typeof progressTranslations)['en']
    }
  }
}
