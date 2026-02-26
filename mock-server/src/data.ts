import { faker } from '@faker-js/faker/locale/fr_CH'
import type { OcrScenario } from './helpers.js'

const SWISS_INSURANCES = [
  'Helsana', 'CSS', 'Groupe Mutuel', 'Swica', 'Concordia',
  'Visana', 'Sanitas', 'Assura', 'KPT', 'Atupri',
  'ÖKK', 'EGK', 'Sympany', 'Aquilana', 'Agrisano',
]

const NATIONALITIES = ['CHE', 'FRA', 'DEU', 'ITA', 'PRT', 'ESP', 'GBR', 'BRA', 'TUR', 'SRB']

const SWISS_CITIES = [
  { ville: 'Genève', zip: '1202' },
  { ville: 'Lausanne', zip: '1003' },
  { ville: 'Bern', zip: '3011' },
  { ville: 'Zürich', zip: '8001' },
  { ville: 'Fribourg', zip: '1700' },
  { ville: 'Neuchâtel', zip: '2000' },
  { ville: 'Montreux', zip: '1820' },
  { ville: 'Nyon', zip: '1260' },
  { ville: 'Morges', zip: '1110' },
  { ville: 'Vevey', zip: '1800' },
]

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

function randomDigits(n: number): string {
  return Array.from({ length: n }, () => Math.floor(Math.random() * 10)).join('')
}

function generateAvs(): string {
  return `756${randomDigits(10)}`
}

function generateCardNumber(): string {
  return `8075601${randomDigits(13)}`
}

function generateIdentity(): Record<string, string> {
  const gender = faker.helpers.arrayElement(['male', 'female'])
  const sex = gender === 'male' ? 'male' as const : 'female' as const
  return {
    last_name: faker.person.lastName(sex).toUpperCase(),
    first_names: faker.person.firstName(sex),
    gender,
    nationality: pick(NATIONALITIES),
  }
}

function generateInsurance(): Record<string, string> {
  const city = pick(SWISS_CITIES)
  const insurance = pick(SWISS_INSURANCES)
  const cardNo = generateCardNumber()
  return {
    rue: `${faker.location.street()} ${faker.number.int({ min: 1, max: 120 })}`,
    ville: city.ville,
    zip: city.zip,
    country: 'CH',
    avs: generateAvs(),
    kvg_carte_no: cardNo,
    kvg_insurance: insurance,
    vvg_carte_no: cardNo,
  }
}

/**
 * Generate OCR identity data per scenario.
 * Called fresh each request so values are randomized.
 */
export function getIdentityOcr(scenario: OcrScenario): Record<string, string> {
  if (scenario === 'ERROR') return {}
  if (scenario === 'PARTIAL') {
    const id = generateIdentity()
    return { last_name: id.last_name, first_names: '', gender: '', nationality: '' }
  }
  return generateIdentity()
}

/**
 * Generate OCR insurance data per scenario.
 * Called fresh each request so values are randomized.
 */
export function getInsuranceOcr(scenario: OcrScenario): Record<string, string> {
  if (scenario === 'ERROR') return {}
  if (scenario === 'NOT_COVERED') {
    const ins = generateInsurance()
    return { ...ins, kvg_carte_no: 'not_covered', kvg_insurance: '', vvg_carte_no: '' }
  }
  if (scenario === 'PARTIAL') {
    const ins = generateInsurance()
    return { rue: ins.rue, ville: ins.ville, zip: ins.zip, country: ins.country, avs: '', kvg_carte_no: '', kvg_insurance: '', vvg_carte_no: '' }
  }
  return generateInsurance()
}
