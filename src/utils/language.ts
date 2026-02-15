import type { Language } from '@/types/form'

export function detectBrowserLanguage(): Language {
  if (typeof navigator === 'undefined') return 'en'
  return navigator.language.startsWith('fr') ? 'fr' : 'en'
}
