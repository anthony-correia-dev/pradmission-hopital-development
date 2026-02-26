import nationalities from 'i18n-nationality'
import enLocale from 'i18n-nationality/langs/en.json'
import frLocale from 'i18n-nationality/langs/fr.json'
import type { Language } from '@/types/form'

nationalities.registerLocale(enLocale)
nationalities.registerLocale(frLocale)

interface Country {
  code: string
  code2: string
  nameFr: string
  nameEn: string
}

const COUNTRIES: Country[] = [
  { code: 'CHE', code2: 'CH', nameFr: 'Suisse', nameEn: 'Switzerland' },
  { code: 'FRA', code2: 'FR', nameFr: 'France', nameEn: 'France' },
  { code: 'AFG', code2: 'AF', nameFr: 'Afghanistan', nameEn: 'Afghanistan' },
  { code: 'ZAF', code2: 'ZA', nameFr: 'Afrique du Sud', nameEn: 'South Africa' },
  { code: 'ALB', code2: 'AL', nameFr: 'Albanie', nameEn: 'Albania' },
  { code: 'DZA', code2: 'DZ', nameFr: 'Algérie', nameEn: 'Algeria' },
  { code: 'DEU', code2: 'DE', nameFr: 'Allemagne', nameEn: 'Germany' },
  { code: 'AND', code2: 'AD', nameFr: 'Andorre', nameEn: 'Andorra' },
  { code: 'AGO', code2: 'AO', nameFr: 'Angola', nameEn: 'Angola' },
  { code: 'SAU', code2: 'SA', nameFr: 'Arabie saoudite', nameEn: 'Saudi Arabia' },
  { code: 'ARG', code2: 'AR', nameFr: 'Argentine', nameEn: 'Argentina' },
  { code: 'ARM', code2: 'AM', nameFr: 'Arménie', nameEn: 'Armenia' },
  { code: 'AUS', code2: 'AU', nameFr: 'Australie', nameEn: 'Australia' },
  { code: 'AUT', code2: 'AT', nameFr: 'Autriche', nameEn: 'Austria' },
  { code: 'AZE', code2: 'AZ', nameFr: 'Azerbaïdjan', nameEn: 'Azerbaijan' },
  { code: 'BEL', code2: 'BE', nameFr: 'Belgique', nameEn: 'Belgium' },
  { code: 'BEN', code2: 'BJ', nameFr: 'Bénin', nameEn: 'Benin' },
  { code: 'BLR', code2: 'BY', nameFr: 'Biélorussie', nameEn: 'Belarus' },
  { code: 'BOL', code2: 'BO', nameFr: 'Bolivie', nameEn: 'Bolivia' },
  { code: 'BIH', code2: 'BA', nameFr: 'Bosnie-Herzégovine', nameEn: 'Bosnia and Herzegovina' },
  { code: 'BWA', code2: 'BW', nameFr: 'Botswana', nameEn: 'Botswana' },
  { code: 'BRA', code2: 'BR', nameFr: 'Brésil', nameEn: 'Brazil' },
  { code: 'BGR', code2: 'BG', nameFr: 'Bulgarie', nameEn: 'Bulgaria' },
  { code: 'BFA', code2: 'BF', nameFr: 'Burkina Faso', nameEn: 'Burkina Faso' },
  { code: 'BDI', code2: 'BI', nameFr: 'Burundi', nameEn: 'Burundi' },
  { code: 'KHM', code2: 'KH', nameFr: 'Cambodge', nameEn: 'Cambodia' },
  { code: 'CMR', code2: 'CM', nameFr: 'Cameroun', nameEn: 'Cameroon' },
  { code: 'CAN', code2: 'CA', nameFr: 'Canada', nameEn: 'Canada' },
  { code: 'CHL', code2: 'CL', nameFr: 'Chili', nameEn: 'Chile' },
  { code: 'CHN', code2: 'CN', nameFr: 'Chine', nameEn: 'China' },
  { code: 'CYP', code2: 'CY', nameFr: 'Chypre', nameEn: 'Cyprus' },
  { code: 'COL', code2: 'CO', nameFr: 'Colombie', nameEn: 'Colombia' },
  { code: 'KOR', code2: 'KR', nameFr: 'Corée du Sud', nameEn: 'South Korea' },
  { code: 'CRI', code2: 'CR', nameFr: 'Costa Rica', nameEn: 'Costa Rica' },
  { code: 'CIV', code2: 'CI', nameFr: "Côte d'Ivoire", nameEn: 'Ivory Coast' },
  { code: 'HRV', code2: 'HR', nameFr: 'Croatie', nameEn: 'Croatia' },
  { code: 'CUB', code2: 'CU', nameFr: 'Cuba', nameEn: 'Cuba' },
  { code: 'DNK', code2: 'DK', nameFr: 'Danemark', nameEn: 'Denmark' },
  { code: 'EGY', code2: 'EG', nameFr: 'Égypte', nameEn: 'Egypt' },
  { code: 'ARE', code2: 'AE', nameFr: 'Émirats arabes unis', nameEn: 'United Arab Emirates' },
  { code: 'ECU', code2: 'EC', nameFr: 'Équateur', nameEn: 'Ecuador' },
  { code: 'ESP', code2: 'ES', nameFr: 'Espagne', nameEn: 'Spain' },
  { code: 'EST', code2: 'EE', nameFr: 'Estonie', nameEn: 'Estonia' },
  { code: 'USA', code2: 'US', nameFr: 'États-Unis', nameEn: 'United States' },
  { code: 'ETH', code2: 'ET', nameFr: 'Éthiopie', nameEn: 'Ethiopia' },
  { code: 'FIN', code2: 'FI', nameFr: 'Finlande', nameEn: 'Finland' },
  { code: 'GAB', code2: 'GA', nameFr: 'Gabon', nameEn: 'Gabon' },
  { code: 'GEO', code2: 'GE', nameFr: 'Géorgie', nameEn: 'Georgia' },
  { code: 'GHA', code2: 'GH', nameFr: 'Ghana', nameEn: 'Ghana' },
  { code: 'GRC', code2: 'GR', nameFr: 'Grèce', nameEn: 'Greece' },
  { code: 'GTM', code2: 'GT', nameFr: 'Guatemala', nameEn: 'Guatemala' },
  { code: 'GIN', code2: 'GN', nameFr: 'Guinée', nameEn: 'Guinea' },
  { code: 'HTI', code2: 'HT', nameFr: 'Haïti', nameEn: 'Haiti' },
  { code: 'HND', code2: 'HN', nameFr: 'Honduras', nameEn: 'Honduras' },
  { code: 'HUN', code2: 'HU', nameFr: 'Hongrie', nameEn: 'Hungary' },
  { code: 'IND', code2: 'IN', nameFr: 'Inde', nameEn: 'India' },
  { code: 'IDN', code2: 'ID', nameFr: 'Indonésie', nameEn: 'Indonesia' },
  { code: 'IRQ', code2: 'IQ', nameFr: 'Irak', nameEn: 'Iraq' },
  { code: 'IRN', code2: 'IR', nameFr: 'Iran', nameEn: 'Iran' },
  { code: 'IRL', code2: 'IE', nameFr: 'Irlande', nameEn: 'Ireland' },
  { code: 'ISL', code2: 'IS', nameFr: 'Islande', nameEn: 'Iceland' },
  { code: 'ISR', code2: 'IL', nameFr: 'Israël', nameEn: 'Israel' },
  { code: 'ITA', code2: 'IT', nameFr: 'Italie', nameEn: 'Italy' },
  { code: 'JAM', code2: 'JM', nameFr: 'Jamaïque', nameEn: 'Jamaica' },
  { code: 'JPN', code2: 'JP', nameFr: 'Japon', nameEn: 'Japan' },
  { code: 'JOR', code2: 'JO', nameFr: 'Jordanie', nameEn: 'Jordan' },
  { code: 'KAZ', code2: 'KZ', nameFr: 'Kazakhstan', nameEn: 'Kazakhstan' },
  { code: 'KEN', code2: 'KE', nameFr: 'Kenya', nameEn: 'Kenya' },
  { code: 'UNK', code2: 'XK', nameFr: 'Kosovo', nameEn: 'Kosovo' },
  { code: 'KWT', code2: 'KW', nameFr: 'Koweït', nameEn: 'Kuwait' },
  { code: 'LVA', code2: 'LV', nameFr: 'Lettonie', nameEn: 'Latvia' },
  { code: 'LBN', code2: 'LB', nameFr: 'Liban', nameEn: 'Lebanon' },
  { code: 'LBR', code2: 'LR', nameFr: 'Liberia', nameEn: 'Liberia' },
  { code: 'LBY', code2: 'LY', nameFr: 'Libye', nameEn: 'Libya' },
  { code: 'LIE', code2: 'LI', nameFr: 'Liechtenstein', nameEn: 'Liechtenstein' },
  { code: 'LTU', code2: 'LT', nameFr: 'Lituanie', nameEn: 'Lithuania' },
  { code: 'LUX', code2: 'LU', nameFr: 'Luxembourg', nameEn: 'Luxembourg' },
  { code: 'MKD', code2: 'MK', nameFr: 'Macédoine du Nord', nameEn: 'North Macedonia' },
  { code: 'MDG', code2: 'MG', nameFr: 'Madagascar', nameEn: 'Madagascar' },
  { code: 'MYS', code2: 'MY', nameFr: 'Malaisie', nameEn: 'Malaysia' },
  { code: 'MLI', code2: 'ML', nameFr: 'Mali', nameEn: 'Mali' },
  { code: 'MLT', code2: 'MT', nameFr: 'Malte', nameEn: 'Malta' },
  { code: 'MAR', code2: 'MA', nameFr: 'Maroc', nameEn: 'Morocco' },
  { code: 'MEX', code2: 'MX', nameFr: 'Mexique', nameEn: 'Mexico' },
  { code: 'MDA', code2: 'MD', nameFr: 'Moldavie', nameEn: 'Moldova' },
  { code: 'MCO', code2: 'MC', nameFr: 'Monaco', nameEn: 'Monaco' },
  { code: 'MNG', code2: 'MN', nameFr: 'Mongolie', nameEn: 'Mongolia' },
  { code: 'MNE', code2: 'ME', nameFr: 'Monténégro', nameEn: 'Montenegro' },
  { code: 'MOZ', code2: 'MZ', nameFr: 'Mozambique', nameEn: 'Mozambique' },
  { code: 'MMR', code2: 'MM', nameFr: 'Myanmar', nameEn: 'Myanmar' },
  { code: 'NAM', code2: 'NA', nameFr: 'Namibie', nameEn: 'Namibia' },
  { code: 'NPL', code2: 'NP', nameFr: 'Népal', nameEn: 'Nepal' },
  { code: 'NIC', code2: 'NI', nameFr: 'Nicaragua', nameEn: 'Nicaragua' },
  { code: 'NER', code2: 'NE', nameFr: 'Niger', nameEn: 'Niger' },
  { code: 'NGA', code2: 'NG', nameFr: 'Nigeria', nameEn: 'Nigeria' },
  { code: 'NOR', code2: 'NO', nameFr: 'Norvège', nameEn: 'Norway' },
  { code: 'NZL', code2: 'NZ', nameFr: 'Nouvelle-Zélande', nameEn: 'New Zealand' },
  { code: 'OMN', code2: 'OM', nameFr: 'Oman', nameEn: 'Oman' },
  { code: 'UGA', code2: 'UG', nameFr: 'Ouganda', nameEn: 'Uganda' },
  { code: 'UZB', code2: 'UZ', nameFr: 'Ouzbékistan', nameEn: 'Uzbekistan' },
  { code: 'PAK', code2: 'PK', nameFr: 'Pakistan', nameEn: 'Pakistan' },
  { code: 'PAN', code2: 'PA', nameFr: 'Panama', nameEn: 'Panama' },
  { code: 'PRY', code2: 'PY', nameFr: 'Paraguay', nameEn: 'Paraguay' },
  { code: 'NLD', code2: 'NL', nameFr: 'Pays-Bas', nameEn: 'Netherlands' },
  { code: 'PER', code2: 'PE', nameFr: 'Pérou', nameEn: 'Peru' },
  { code: 'PHL', code2: 'PH', nameFr: 'Philippines', nameEn: 'Philippines' },
  { code: 'POL', code2: 'PL', nameFr: 'Pologne', nameEn: 'Poland' },
  { code: 'PRT', code2: 'PT', nameFr: 'Portugal', nameEn: 'Portugal' },
  { code: 'QAT', code2: 'QA', nameFr: 'Qatar', nameEn: 'Qatar' },
  { code: 'CZE', code2: 'CZ', nameFr: 'République tchèque', nameEn: 'Czech Republic' },
  { code: 'ROU', code2: 'RO', nameFr: 'Roumanie', nameEn: 'Romania' },
  { code: 'GBR', code2: 'GB', nameFr: 'Royaume-Uni', nameEn: 'United Kingdom' },
  { code: 'RUS', code2: 'RU', nameFr: 'Russie', nameEn: 'Russia' },
  { code: 'RWA', code2: 'RW', nameFr: 'Rwanda', nameEn: 'Rwanda' },
  { code: 'SEN', code2: 'SN', nameFr: 'Sénégal', nameEn: 'Senegal' },
  { code: 'SRB', code2: 'RS', nameFr: 'Serbie', nameEn: 'Serbia' },
  { code: 'SGP', code2: 'SG', nameFr: 'Singapour', nameEn: 'Singapore' },
  { code: 'SVK', code2: 'SK', nameFr: 'Slovaquie', nameEn: 'Slovakia' },
  { code: 'SVN', code2: 'SI', nameFr: 'Slovénie', nameEn: 'Slovenia' },
  { code: 'SOM', code2: 'SO', nameFr: 'Somalie', nameEn: 'Somalia' },
  { code: 'SDN', code2: 'SD', nameFr: 'Soudan', nameEn: 'Sudan' },
  { code: 'LKA', code2: 'LK', nameFr: 'Sri Lanka', nameEn: 'Sri Lanka' },
  { code: 'SWE', code2: 'SE', nameFr: 'Suède', nameEn: 'Sweden' },
  { code: 'SYR', code2: 'SY', nameFr: 'Syrie', nameEn: 'Syria' },
  { code: 'TZA', code2: 'TZ', nameFr: 'Tanzanie', nameEn: 'Tanzania' },
  { code: 'TCD', code2: 'TD', nameFr: 'Tchad', nameEn: 'Chad' },
  { code: 'THA', code2: 'TH', nameFr: 'Thaïlande', nameEn: 'Thailand' },
  { code: 'TGO', code2: 'TG', nameFr: 'Togo', nameEn: 'Togo' },
  { code: 'TUN', code2: 'TN', nameFr: 'Tunisie', nameEn: 'Tunisia' },
  { code: 'TUR', code2: 'TR', nameFr: 'Turquie', nameEn: 'Turkey' },
  { code: 'UKR', code2: 'UA', nameFr: 'Ukraine', nameEn: 'Ukraine' },
  { code: 'URY', code2: 'UY', nameFr: 'Uruguay', nameEn: 'Uruguay' },
  { code: 'VEN', code2: 'VE', nameFr: 'Venezuela', nameEn: 'Venezuela' },
  { code: 'VNM', code2: 'VN', nameFr: 'Viêt Nam', nameEn: 'Vietnam' },
  { code: 'YEM', code2: 'YE', nameFr: 'Yémen', nameEn: 'Yemen' },
  { code: 'ZMB', code2: 'ZM', nameFr: 'Zambie', nameEn: 'Zambia' },
  { code: 'ZWE', code2: 'ZW', nameFr: 'Zimbabwe', nameEn: 'Zimbabwe' },
]

export function getCountries(language: Language): { code: string; name: string }[] {
  const priority = ['CH', 'FR']
  const priorityCountries = COUNTRIES.filter((c) => priority.includes(c.code))
  const otherCountries = COUNTRIES.filter((c) => !priority.includes(c.code))
  const getName = (c: Country) => (language === 'fr' ? c.nameFr : c.nameEn)
  const toEntry = (c: Country) => ({ code: c.code, name: getName(c) })
  return [
    ...priorityCountries.map(toEntry),
    ...otherCountries.map(toEntry).sort((a, b) => a.name.localeCompare(b.name)),
  ]
}

export function getNationalities(language: Language): { code: string; name: string }[] {
  const lang = language === 'fr' ? 'fr' : 'en'
  const priority = ['CH', 'FR']
  const allCodes = COUNTRIES.map((c) => c.code)

  const entries = allCodes
    .map((code) => ({
      code,
      name: nationalities.getName(code, lang) || code,
    }))

  const priorityEntries = entries.filter((e) => priority.includes(e.code))
  const otherEntries = entries
    .filter((e) => !priority.includes(e.code))
    .sort((a, b) => a.name.localeCompare(b.name))

  return [...priorityEntries, ...otherEntries]
}

export function getCountryNameByCode(isoCode: string, language: Language): string {
  const country = COUNTRIES.find((c) => c.code === isoCode.toUpperCase())
  if (!country) return isoCode
  return language === 'fr' ? country.nameFr : country.nameEn
}

/** ISO 3166-1 alpha-2 → alpha-3 lookup for OCR results */
const ALPHA2_TO_ALPHA3: Record<string, string> = {
  CH: 'CHE', FR: 'FRA', AF: 'AFG', ZA: 'ZAF', AL: 'ALB', DZ: 'DZA', DE: 'DEU',
  AD: 'AND', AO: 'AGO', SA: 'SAU', AR: 'ARG', AM: 'ARM', AU: 'AUS', AT: 'AUT',
  AZ: 'AZE', BE: 'BEL', BJ: 'BEN', BY: 'BLR', BO: 'BOL', BA: 'BIH', BW: 'BWA',
  BR: 'BRA', BG: 'BGR', BF: 'BFA', BI: 'BDI', KH: 'KHM', CM: 'CMR', CA: 'CAN',
  CL: 'CHL', CN: 'CHN', CY: 'CYP', CO: 'COL', KR: 'KOR', CR: 'CRI', CI: 'CIV',
  HR: 'HRV', CU: 'CUB', DK: 'DNK', EG: 'EGY', AE: 'ARE', EC: 'ECU', ES: 'ESP',
  EE: 'EST', US: 'USA', ET: 'ETH', FI: 'FIN', GA: 'GAB', GE: 'GEO', GH: 'GHA',
  GR: 'GRC', GT: 'GTM', GN: 'GIN', HT: 'HTI', HN: 'HND', HU: 'HUN', IN: 'IND',
  ID: 'IDN', IQ: 'IRQ', IR: 'IRN', IE: 'IRL', IS: 'ISL', IL: 'ISR', IT: 'ITA',
  JM: 'JAM', JP: 'JPN', JO: 'JOR', KZ: 'KAZ', KE: 'KEN', XK: 'UNK', KW: 'KWT',
  LV: 'LVA', LB: 'LBN', LR: 'LBR', LY: 'LBY', LI: 'LIE', LT: 'LTU', LU: 'LUX',
  MK: 'MKD', MG: 'MDG', MY: 'MYS', ML: 'MLI', MT: 'MLT', MA: 'MAR', MX: 'MEX',
  MD: 'MDA', MC: 'MCO', MN: 'MNG', ME: 'MNE', MZ: 'MOZ', MM: 'MMR', NA: 'NAM',
  NP: 'NPL', NI: 'NIC', NE: 'NER', NG: 'NGA', NO: 'NOR', NZ: 'NZL', OM: 'OMN',
  UG: 'UGA', UZ: 'UZB', PK: 'PAK', PA: 'PAN', PY: 'PRY', NL: 'NLD', PE: 'PER',
  PH: 'PHL', PL: 'POL', PT: 'PRT', QA: 'QAT', CZ: 'CZE', RO: 'ROU', GB: 'GBR',
  RU: 'RUS', RW: 'RWA', SN: 'SEN', RS: 'SRB', SG: 'SGP', SK: 'SVK', SI: 'SVN',
  SO: 'SOM', SD: 'SDN', LK: 'LKA', SE: 'SWE', SY: 'SYR', TZ: 'TZA', TD: 'TCD',
  TH: 'THA', TG: 'TGO', TN: 'TUN', TR: 'TUR', UA: 'UKR', UY: 'URY', VE: 'VEN',
  VN: 'VNM', YE: 'YEM', ZM: 'ZMB', ZW: 'ZWE',
}

/** Reverse lookup: alpha-3 → alpha-2 (for flag-icons CSS classes) */
const ALPHA3_TO_ALPHA2: Record<string, string> = Object.fromEntries(
  Object.entries(ALPHA2_TO_ALPHA3).map(([a2, a3]) => [a3, a2])
)

/** Normalize a nationality code to alpha-3. Accepts alpha-2 or alpha-3 input. */
export function normalizeNationality(code: string): string {
  const upper = code.trim().toUpperCase()
  if (upper.length === 2) return ALPHA2_TO_ALPHA3[upper] ?? ''
  if (upper.length === 3 && COUNTRIES.some((c) => c.code === upper)) return upper
  return ''
}

/** Convert alpha-3 code to alpha-2 for flag-icons CSS classes. */
export function toAlpha2(alpha3: string): string {
  return ALPHA3_TO_ALPHA2[alpha3.toUpperCase()] ?? ''
}
