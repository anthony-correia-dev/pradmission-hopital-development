import { describe, it, expect } from 'vitest'
import { capitalizeName, capitalizeFirstNames, extractFirstName, formatAvsNumber, formatCardNumber } from './format'

describe('capitalizeName', () => {
  it('capitalizes a simple name', () => {
    expect(capitalizeName('dupont')).toBe('Dupont')
  })

  it('capitalizes hyphenated names', () => {
    expect(capitalizeName('jean-pierre')).toBe('Jean-Pierre')
  })

  it('capitalizes space-separated names', () => {
    expect(capitalizeName('van der berg')).toBe('Van Der Berg')
  })

  it('handles already capitalized names', () => {
    expect(capitalizeName('DUPONT')).toBe('Dupont')
  })

  it('returns empty string for empty input', () => {
    expect(capitalizeName('')).toBe('')
  })
})

describe('capitalizeFirstNames', () => {
  it('capitalizes a single first name', () => {
    expect(capitalizeFirstNames('jean')).toBe('Jean')
  })

  it('capitalizes multiple first names', () => {
    expect(capitalizeFirstNames('jean marc')).toBe('Jean Marc')
  })

  it('capitalizes hyphenated first names', () => {
    expect(capitalizeFirstNames('jean-pierre')).toBe('Jean-Pierre')
  })

  it('handles mixed hyphenated and space-separated', () => {
    expect(capitalizeFirstNames('jean-pierre marc')).toBe('Jean-Pierre Marc')
  })

  it('returns empty string for empty input', () => {
    expect(capitalizeFirstNames('')).toBe('')
  })
})

describe('extractFirstName', () => {
  it('extracts and capitalizes the first name', () => {
    expect(extractFirstName('jean marc')).toBe('Jean')
  })

  it('handles a single name', () => {
    expect(extractFirstName('jean')).toBe('Jean')
  })

  it('handles hyphenated first name', () => {
    expect(extractFirstName('jean-pierre marc')).toBe('Jean-Pierre')
  })

  it('returns empty string for empty input', () => {
    expect(extractFirstName('')).toBe('')
  })
})

describe('formatAvsNumber', () => {
  it('formats a full 13-digit AVS number', () => {
    expect(formatAvsNumber('7561234567890')).toBe('756.1234.5678.90')
  })

  it('formats partial input progressively', () => {
    expect(formatAvsNumber('756')).toBe('756')
    expect(formatAvsNumber('7561')).toBe('756.1')
    expect(formatAvsNumber('7561234')).toBe('756.1234')
    expect(formatAvsNumber('75612345')).toBe('756.1234.5')
    expect(formatAvsNumber('75612345678')).toBe('756.1234.5678')
    expect(formatAvsNumber('756123456789')).toBe('756.1234.5678.9')
  })

  it('strips non-digit characters', () => {
    expect(formatAvsNumber('756.1234.5678.90')).toBe('756.1234.5678.90')
  })

  it('limits to 13 digits', () => {
    expect(formatAvsNumber('75612345678901234')).toBe('756.1234.5678.90')
  })
})

describe('formatCardNumber', () => {
  it('keeps only digits', () => {
    expect(formatCardNumber('1234-5678')).toBe('12345678')
  })

  it('limits to 20 digits', () => {
    expect(formatCardNumber('123456789012345678901234')).toBe('12345678901234567890')
  })
})
