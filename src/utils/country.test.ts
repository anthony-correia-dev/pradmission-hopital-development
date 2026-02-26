import { describe, it, expect } from 'vitest'
import { getCountries, getCountryNameByCode } from './country'

describe('getCountries', () => {
  it('returns CH and FR as the first two entries', () => {
    const countries = getCountries('fr')
    expect(countries[0]?.code).toBe('CH')
    expect(countries[1]?.code).toBe('FR')
  })

  it('returns French names when language is fr', () => {
    const countries = getCountries('fr')
    const ch = countries.find((c) => c.code === 'CH')
    expect(ch?.name).toBe('Suisse')
  })

  it('returns English names when language is en', () => {
    const countries = getCountries('en')
    const ch = countries.find((c) => c.code === 'CH')
    expect(ch?.name).toBe('Switzerland')
  })

  it('sorts remaining countries alphabetically', () => {
    const countries = getCountries('fr')
    const others = countries.slice(2)
    for (let i = 1; i < others.length; i++) {
      expect(others[i - 1]!.name.localeCompare(others[i]!.name)).toBeLessThanOrEqual(0)
    }
  })
})

describe('getCountryNameByCode', () => {
  it('returns French name for known country', () => {
    expect(getCountryNameByCode('CH', 'fr')).toBe('Suisse')
  })

  it('returns English name for known country', () => {
    expect(getCountryNameByCode('CH', 'en')).toBe('Switzerland')
  })

  it('is case-insensitive for code lookup', () => {
    expect(getCountryNameByCode('ch', 'fr')).toBe('Suisse')
  })

  it('returns the code itself for unknown country', () => {
    expect(getCountryNameByCode('XX', 'fr')).toBe('XX')
  })
})
