import { describe, it, expect } from 'vitest'
import { getPhoneCodes, formatPhoneNumber } from './phone'

describe('getPhoneCodes', () => {
  it('returns CH, FR, DE, IT, AT as the first 5 entries', () => {
    const codes = getPhoneCodes()
    const firstFive = codes.slice(0, 5).map((c) => c.code)
    expect(firstFive).toEqual(['CH', 'FR', 'DE', 'IT', 'AT'])
  })

  it('sorts remaining countries alphabetically by name', () => {
    const codes = getPhoneCodes()
    const others = codes.slice(5)
    for (let i = 1; i < others.length; i++) {
      expect(others[i - 1]!.country.localeCompare(others[i]!.country)).toBeLessThanOrEqual(0)
    }
  })

  it('includes Switzerland with correct dial code', () => {
    const ch = getPhoneCodes().find((c) => c.code === 'CH')
    expect(ch?.dialCode).toBe('+41')
  })
})

describe('formatPhoneNumber', () => {
  it('formats a Swiss phone number', () => {
    expect(formatPhoneNumber('791234567', 'CH')).toBe('79 123 45 67')
  })

  it('formats a French phone number', () => {
    expect(formatPhoneNumber('612345678', 'FR')).toBe('6 12 34 56 78')
  })

  it('returns number as-is for country without format', () => {
    expect(formatPhoneNumber('12345', 'AF')).toBe('12345')
  })

  it('returns number as-is for unknown country', () => {
    expect(formatPhoneNumber('12345', 'XX')).toBe('12345')
  })

  it('handles digits longer than format template', () => {
    const result = formatPhoneNumber('7912345678', 'CH')
    expect(result).toBe('79 123 45 678')
  })
})
