import { describe, it, expect } from 'vitest'
import { formatDateInput, parseDisplayDate, formatDisplayDate, isValidDate, isValidDisplayDate } from './date'

describe('formatDateInput', () => {
  it('returns digits as-is when <= 2', () => {
    expect(formatDateInput('1')).toBe('1')
    expect(formatDateInput('12')).toBe('12')
  })

  it('adds first dot after 2 digits', () => {
    expect(formatDateInput('123')).toBe('12.3')
    expect(formatDateInput('1234')).toBe('12.34')
  })

  it('adds second dot after 4 digits', () => {
    expect(formatDateInput('12345')).toBe('12.34.5')
    expect(formatDateInput('01011990')).toBe('01.01.1990')
  })

  it('strips non-digit characters', () => {
    expect(formatDateInput('12.03.19')).toBe('12.03.19')
    expect(formatDateInput('ab12cd')).toBe('12')
  })

  it('limits to 8 digits', () => {
    expect(formatDateInput('010119901234')).toBe('01.01.1990')
  })
})

describe('parseDisplayDate', () => {
  it('parses DD.MM.YYYY to ISO format', () => {
    expect(parseDisplayDate('01.01.1990')).toBe('1990-01-01')
  })

  it('returns null for invalid dates', () => {
    expect(parseDisplayDate('32.13.2000')).toBeNull()
    expect(parseDisplayDate('')).toBeNull()
    expect(parseDisplayDate('abc')).toBeNull()
  })

  it('returns null for short strings', () => {
    expect(parseDisplayDate('01.01.20')).toBeNull()
  })

  it('rejects future dates by default', () => {
    expect(parseDisplayDate('01.01.2099')).toBeNull()
  })

  it('allows future dates when option is set', () => {
    expect(parseDisplayDate('01.01.2099', { allowFuture: true })).toBe('2099-01-01')
  })
})

describe('formatDisplayDate', () => {
  it('converts ISO date to DD.MM.YYYY', () => {
    expect(formatDisplayDate('1990-01-15')).toBe('15.01.1990')
  })

  it('returns empty string for empty input', () => {
    expect(formatDisplayDate('')).toBe('')
  })
})

describe('isValidDate', () => {
  it('validates correct ISO dates', () => {
    expect(isValidDate('2000-06-15')).toBe(true)
    expect(isValidDate('1990-01-01')).toBe(true)
  })

  it('rejects invalid dates', () => {
    expect(isValidDate('2000-13-01')).toBe(false)
    expect(isValidDate('2000-02-30')).toBe(false)
    expect(isValidDate('')).toBe(false)
    expect(isValidDate('abc')).toBe(false)
  })

  it('rejects short strings', () => {
    expect(isValidDate('2000-01')).toBe(false)
  })
})

describe('isValidDisplayDate', () => {
  it('validates correct display dates', () => {
    expect(isValidDisplayDate('01.01.1990')).toBe(true)
  })

  it('rejects invalid display dates', () => {
    expect(isValidDisplayDate('32.13.2000')).toBe(false)
    expect(isValidDisplayDate('')).toBe(false)
  })
})
