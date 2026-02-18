import nationalities from 'i18n-nationality'
import enLocale from 'i18n-nationality/langs/en.json'
import frLocale from 'i18n-nationality/langs/fr.json'
import type { Language } from '@/types/form'

nationalities.registerLocale(enLocale)
nationalities.registerLocale(frLocale)

interface Country {
  code: string
  nameFr: string
  nameEn: string
}

const COUNTRIES: Country[] = [
  { code: 'CHE', nameFr: 'Suisse', nameEn: 'Switzerland' },
  { code: 'FRA', nameFr: 'France', nameEn: 'France' },
  { code: 'AFG', nameFr: 'Afghanistan', nameEn: 'Afghanistan' },
  { code: 'ZAF', nameFr: 'Afrique du Sud', nameEn: 'South Africa' },
  { code: 'ALB', nameFr: 'Albanie', nameEn: 'Albania' },
  { code: 'DZA', nameFr: 'Algérie', nameEn: 'Algeria' },
  { code: 'DEU', nameFr: 'Allemagne', nameEn: 'Germany' },
  { code: 'AND', nameFr: 'Andorre', nameEn: 'Andorra' },
  { code: 'AGO', nameFr: 'Angola', nameEn: 'Angola' },
  { code: 'SAU', nameFr: 'Arabie saoudite', nameEn: 'Saudi Arabia' },
  { code: 'ARG', nameFr: 'Argentine', nameEn: 'Argentina' },
  { code: 'ARM', nameFr: 'Arménie', nameEn: 'Armenia' },
  { code: 'AUS', nameFr: 'Australie', nameEn: 'Australia' },
  { code: 'AUT', nameFr: 'Autriche', nameEn: 'Austria' },
  { code: 'AZE', nameFr: 'Azerbaïdjan', nameEn: 'Azerbaijan' },
  { code: 'BEL', nameFr: 'Belgique', nameEn: 'Belgium' },
  { code: 'BEN', nameFr: 'Bénin', nameEn: 'Benin' },
  { code: 'BLR', nameFr: 'Biélorussie', nameEn: 'Belarus' },
  { code: 'BOL', nameFr: 'Bolivie', nameEn: 'Bolivia' },
  { code: 'BIH', nameFr: 'Bosnie-Herzégovine', nameEn: 'Bosnia and Herzegovina' },
  { code: 'BWA', nameFr: 'Botswana', nameEn: 'Botswana' },
  { code: 'BRA', nameFr: 'Brésil', nameEn: 'Brazil' },
  { code: 'BGR', nameFr: 'Bulgarie', nameEn: 'Bulgaria' },
  { code: 'BFA', nameFr: 'Burkina Faso', nameEn: 'Burkina Faso' },
  { code: 'BDI', nameFr: 'Burundi', nameEn: 'Burundi' },
  { code: 'KHM', nameFr: 'Cambodge', nameEn: 'Cambodia' },
  { code: 'CMR', nameFr: 'Cameroun', nameEn: 'Cameroon' },
  { code: 'CAN', nameFr: 'Canada', nameEn: 'Canada' },
  { code: 'CHL', nameFr: 'Chili', nameEn: 'Chile' },
  { code: 'CHN', nameFr: 'Chine', nameEn: 'China' },
  { code: 'CYP', nameFr: 'Chypre', nameEn: 'Cyprus' },
  { code: 'COL', nameFr: 'Colombie', nameEn: 'Colombia' },
  { code: 'KOR', nameFr: 'Corée du Sud', nameEn: 'South Korea' },
  { code: 'CRI', nameFr: 'Costa Rica', nameEn: 'Costa Rica' },
  { code: 'CIV', nameFr: "Côte d'Ivoire", nameEn: 'Ivory Coast' },
  { code: 'HRV', nameFr: 'Croatie', nameEn: 'Croatia' },
  { code: 'CUB', nameFr: 'Cuba', nameEn: 'Cuba' },
  { code: 'DNK', nameFr: 'Danemark', nameEn: 'Denmark' },
  { code: 'EGY', nameFr: 'Égypte', nameEn: 'Egypt' },
  { code: 'ARE', nameFr: 'Émirats arabes unis', nameEn: 'United Arab Emirates' },
  { code: 'ECU', nameFr: 'Équateur', nameEn: 'Ecuador' },
  { code: 'ESP', nameFr: 'Espagne', nameEn: 'Spain' },
  { code: 'EST', nameFr: 'Estonie', nameEn: 'Estonia' },
  { code: 'USA', nameFr: 'États-Unis', nameEn: 'United States' },
  { code: 'ETH', nameFr: 'Éthiopie', nameEn: 'Ethiopia' },
  { code: 'FIN', nameFr: 'Finlande', nameEn: 'Finland' },
  { code: 'GAB', nameFr: 'Gabon', nameEn: 'Gabon' },
  { code: 'GEO', nameFr: 'Géorgie', nameEn: 'Georgia' },
  { code: 'GHA', nameFr: 'Ghana', nameEn: 'Ghana' },
  { code: 'GRC', nameFr: 'Grèce', nameEn: 'Greece' },
  { code: 'GTM', nameFr: 'Guatemala', nameEn: 'Guatemala' },
  { code: 'GIN', nameFr: 'Guinée', nameEn: 'Guinea' },
  { code: 'HTI', nameFr: 'Haïti', nameEn: 'Haiti' },
  { code: 'HND', nameFr: 'Honduras', nameEn: 'Honduras' },
  { code: 'HUN', nameFr: 'Hongrie', nameEn: 'Hungary' },
  { code: 'IND', nameFr: 'Inde', nameEn: 'India' },
  { code: 'IDN', nameFr: 'Indonésie', nameEn: 'Indonesia' },
  { code: 'IRQ', nameFr: 'Irak', nameEn: 'Iraq' },
  { code: 'IRN', nameFr: 'Iran', nameEn: 'Iran' },
  { code: 'IRL', nameFr: 'Irlande', nameEn: 'Ireland' },
  { code: 'ISL', nameFr: 'Islande', nameEn: 'Iceland' },
  { code: 'ISR', nameFr: 'Israël', nameEn: 'Israel' },
  { code: 'ITA', nameFr: 'Italie', nameEn: 'Italy' },
  { code: 'JAM', nameFr: 'Jamaïque', nameEn: 'Jamaica' },
  { code: 'JPN', nameFr: 'Japon', nameEn: 'Japan' },
  { code: 'JOR', nameFr: 'Jordanie', nameEn: 'Jordan' },
  { code: 'KAZ', nameFr: 'Kazakhstan', nameEn: 'Kazakhstan' },
  { code: 'KEN', nameFr: 'Kenya', nameEn: 'Kenya' },
  { code: 'UNK', nameFr: 'Kosovo', nameEn: 'Kosovo' }, // Kosovo n'a pas de code ISO-3 officiel
  { code: 'KWT', nameFr: 'Koweït', nameEn: 'Kuwait' },
  { code: 'LVA', nameFr: 'Lettonie', nameEn: 'Latvia' },
  { code: 'LBN', nameFr: 'Liban', nameEn: 'Lebanon' },
  { code: 'LBR', nameFr: 'Liberia', nameEn: 'Liberia' },
  { code: 'LBY', nameFr: 'Libye', nameEn: 'Libya' },
  { code: 'LIE', nameFr: 'Liechtenstein', nameEn: 'Liechtenstein' },
  { code: 'LTU', nameFr: 'Lituanie', nameEn: 'Lithuania' },
  { code: 'LUX', nameFr: 'Luxembourg', nameEn: 'Luxembourg' },
  { code: 'MKD', nameFr: 'Macédoine du Nord', nameEn: 'North Macedonia' },
  { code: 'MDG', nameFr: 'Madagascar', nameEn: 'Madagascar' },
  { code: 'MYS', nameFr: 'Malaisie', nameEn: 'Malaysia' },
  { code: 'MLI', nameFr: 'Mali', nameEn: 'Mali' },
  { code: 'MLT', nameFr: 'Malte', nameEn: 'Malta' },
  { code: 'MAR', nameFr: 'Maroc', nameEn: 'Morocco' },
  { code: 'MEX', nameFr: 'Mexique', nameEn: 'Mexico' },
  { code: 'MDA', nameFr: 'Moldavie', nameEn: 'Moldova' },
  { code: 'MCO', nameFr: 'Monaco', nameEn: 'Monaco' },
  { code: 'MNG', nameFr: 'Mongolie', nameEn: 'Mongolia' },
  { code: 'MNE', nameFr: 'Monténégro', nameEn: 'Montenegro' },
  { code: 'MOZ', nameFr: 'Mozambique', nameEn: 'Mozambique' },
  { code: 'MMR', nameFr: 'Myanmar', nameEn: 'Myanmar' },
  { code: 'NAM', nameFr: 'Namibie', nameEn: 'Namibia' },
  { code: 'NPL', nameFr: 'Népal', nameEn: 'Nepal' },
  { code: 'NIC', nameFr: 'Nicaragua', nameEn: 'Nicaragua' },
  { code: 'NER', nameFr: 'Niger', nameEn: 'Niger' },
  { code: 'NGA', nameFr: 'Nigeria', nameEn: 'Nigeria' },
  { code: 'NOR', nameFr: 'Norvège', nameEn: 'Norway' },
  { code: 'NZL', nameFr: 'Nouvelle-Zélande', nameEn: 'New Zealand' },
  { code: 'OMN', nameFr: 'Oman', nameEn: 'Oman' },
  { code: 'UGA', nameFr: 'Ouganda', nameEn: 'Uganda' },
  { code: 'UZB', nameFr: 'Ouzbékistan', nameEn: 'Uzbekistan' },
  { code: 'PAK', nameFr: 'Pakistan', nameEn: 'Pakistan' },
  { code: 'PAN', nameFr: 'Panama', nameEn: 'Panama' },
  { code: 'PRY', nameFr: 'Paraguay', nameEn: 'Paraguay' },
  { code: 'NLD', nameFr: 'Pays-Bas', nameEn: 'Netherlands' },
  { code: 'PER', nameFr: 'Pérou', nameEn: 'Peru' },
  { code: 'PHL', nameFr: 'Philippines', nameEn: 'Philippines' },
  { code: 'POL', nameFr: 'Pologne', nameEn: 'Poland' },
  { code: 'PRT', nameFr: 'Portugal', nameEn: 'Portugal' },
  { code: 'QAT', nameFr: 'Qatar', nameEn: 'Qatar' },
  { code: 'CZE', nameFr: 'République tchèque', nameEn: 'Czech Republic' },
  { code: 'ROU', nameFr: 'Roumanie', nameEn: 'Romania' },
  { code: 'GBR', nameFr: 'Royaume-Uni', nameEn: 'United Kingdom' },
  { code: 'RUS', nameFr: 'Russie', nameEn: 'Russia' },
  { code: 'RWA', nameFr: 'Rwanda', nameEn: 'Rwanda' },
  { code: 'SEN', nameFr: 'Sénégal', nameEn: 'Senegal' },
  { code: 'SRB', nameFr: 'Serbie', nameEn: 'Serbia' },
  { code: 'SGP', nameFr: 'Singapour', nameEn: 'Singapore' },
  { code: 'SVK', nameFr: 'Slovaquie', nameEn: 'Slovakia' },
  { code: 'SVN', nameFr: 'Slovénie', nameEn: 'Slovenia' },
  { code: 'SOM', nameFr: 'Somalie', nameEn: 'Somalia' },
  { code: 'SDN', nameFr: 'Soudan', nameEn: 'Sudan' },
  { code: 'LKA', nameFr: 'Sri Lanka', nameEn: 'Sri Lanka' },
  { code: 'SWE', nameFr: 'Suède', nameEn: 'Sweden' },
  { code: 'SYR', nameFr: 'Syrie', nameEn: 'Syria' },
  { code: 'TZA', nameFr: 'Tanzanie', nameEn: 'Tanzania' },
  { code: 'TCD', nameFr: 'Tchad', nameEn: 'Chad' },
  { code: 'THA', nameFr: 'Thaïlande', nameEn: 'Thailand' },
  { code: 'TGO', nameFr: 'Togo', nameEn: 'Togo' },
  { code: 'TUN', nameFr: 'Tunisie', nameEn: 'Tunisia' },
  { code: 'TUR', nameFr: 'Turquie', nameEn: 'Turkey' },
  { code: 'UKR', nameFr: 'Ukraine', nameEn: 'Ukraine' },
  { code: 'URY', nameFr: 'Uruguay', nameEn: 'Uruguay' },
  { code: 'VEN', nameFr: 'Venezuela', nameEn: 'Venezuela' },
  { code: 'VNM', nameFr: 'Viêt Nam', nameEn: 'Vietnam' },
  { code: 'YEM', nameFr: 'Yémen', nameEn: 'Yemen' },
  { code: 'ZMB', nameFr: 'Zambie', nameEn: 'Zambia' },
  { code: 'ZWE', nameFr: 'Zimbabwe', nameEn: 'Zimbabwe' },
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
