import { describe, it, expect, vi } from 'vitest'
import { detectBrowserLanguage } from './language'

describe('detectBrowserLanguage', () => {
  it('returns "fr" when browser language starts with "fr"', () => {
    vi.stubGlobal('navigator', { language: 'fr-FR' })
    expect(detectBrowserLanguage()).toBe('fr')
    vi.unstubAllGlobals()
  })

  it('returns "en" for non-French language', () => {
    vi.stubGlobal('navigator', { language: 'en-US' })
    expect(detectBrowserLanguage()).toBe('en')
    vi.unstubAllGlobals()
  })

  it('returns "en" for German language', () => {
    vi.stubGlobal('navigator', { language: 'de-DE' })
    expect(detectBrowserLanguage()).toBe('en')
    vi.unstubAllGlobals()
  })
})
