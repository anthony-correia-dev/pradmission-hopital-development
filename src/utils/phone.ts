interface PhoneCode {
  code: string
  country: string
  dialCode: string
  format?: string
}

const PHONE_CODES: PhoneCode[] = [
  { code: 'CH', country: 'Switzerland', dialCode: '+41', format: '## ### ## ##' },
  { code: 'FR', country: 'France', dialCode: '+33', format: '# ## ## ## ##' },
  { code: 'DE', country: 'Germany', dialCode: '+49', format: '### #######' },
  { code: 'IT', country: 'Italy', dialCode: '+39', format: '### ### ####' },
  { code: 'AT', country: 'Austria', dialCode: '+43', format: '### #######' },
  { code: 'AF', country: 'Afghanistan', dialCode: '+93' },
  { code: 'AL', country: 'Albania', dialCode: '+355' },
  { code: 'DZ', country: 'Algeria', dialCode: '+213' },
  { code: 'AD', country: 'Andorra', dialCode: '+376' },
  { code: 'AO', country: 'Angola', dialCode: '+244' },
  { code: 'AR', country: 'Argentina', dialCode: '+54' },
  { code: 'AM', country: 'Armenia', dialCode: '+374' },
  { code: 'AU', country: 'Australia', dialCode: '+61' },
  { code: 'AZ', country: 'Azerbaijan', dialCode: '+994' },
  { code: 'BH', country: 'Bahrain', dialCode: '+973' },
  { code: 'BD', country: 'Bangladesh', dialCode: '+880' },
  { code: 'BY', country: 'Belarus', dialCode: '+375' },
  { code: 'BE', country: 'Belgium', dialCode: '+32' },
  { code: 'BJ', country: 'Benin', dialCode: '+229' },
  { code: 'BO', country: 'Bolivia', dialCode: '+591' },
  { code: 'BA', country: 'Bosnia', dialCode: '+387' },
  { code: 'BR', country: 'Brazil', dialCode: '+55' },
  { code: 'BG', country: 'Bulgaria', dialCode: '+359' },
  { code: 'BF', country: 'Burkina Faso', dialCode: '+226' },
  { code: 'KH', country: 'Cambodia', dialCode: '+855' },
  { code: 'CM', country: 'Cameroon', dialCode: '+237' },
  { code: 'CA', country: 'Canada', dialCode: '+1' },
  { code: 'CL', country: 'Chile', dialCode: '+56' },
  { code: 'CN', country: 'China', dialCode: '+86' },
  { code: 'CO', country: 'Colombia', dialCode: '+57' },
  { code: 'CR', country: 'Costa Rica', dialCode: '+506' },
  { code: 'HR', country: 'Croatia', dialCode: '+385' },
  { code: 'CU', country: 'Cuba', dialCode: '+53' },
  { code: 'CY', country: 'Cyprus', dialCode: '+357' },
  { code: 'CZ', country: 'Czech Republic', dialCode: '+420' },
  { code: 'DK', country: 'Denmark', dialCode: '+45' },
  { code: 'EC', country: 'Ecuador', dialCode: '+593' },
  { code: 'EG', country: 'Egypt', dialCode: '+20' },
  { code: 'EE', country: 'Estonia', dialCode: '+372' },
  { code: 'ET', country: 'Ethiopia', dialCode: '+251' },
  { code: 'FI', country: 'Finland', dialCode: '+358' },
  { code: 'GE', country: 'Georgia', dialCode: '+995' },
  { code: 'GH', country: 'Ghana', dialCode: '+233' },
  { code: 'GR', country: 'Greece', dialCode: '+30' },
  { code: 'GT', country: 'Guatemala', dialCode: '+502' },
  { code: 'HN', country: 'Honduras', dialCode: '+504' },
  { code: 'HU', country: 'Hungary', dialCode: '+36' },
  { code: 'IS', country: 'Iceland', dialCode: '+354' },
  { code: 'IN', country: 'India', dialCode: '+91' },
  { code: 'ID', country: 'Indonesia', dialCode: '+62' },
  { code: 'IR', country: 'Iran', dialCode: '+98' },
  { code: 'IQ', country: 'Iraq', dialCode: '+964' },
  { code: 'IE', country: 'Ireland', dialCode: '+353' },
  { code: 'IL', country: 'Israel', dialCode: '+972' },
  { code: 'CI', country: 'Ivory Coast', dialCode: '+225' },
  { code: 'JM', country: 'Jamaica', dialCode: '+1876' },
  { code: 'JP', country: 'Japan', dialCode: '+81' },
  { code: 'JO', country: 'Jordan', dialCode: '+962' },
  { code: 'KZ', country: 'Kazakhstan', dialCode: '+7' },
  { code: 'KE', country: 'Kenya', dialCode: '+254' },
  { code: 'KW', country: 'Kuwait', dialCode: '+965' },
  { code: 'LV', country: 'Latvia', dialCode: '+371' },
  { code: 'LB', country: 'Lebanon', dialCode: '+961' },
  { code: 'LY', country: 'Libya', dialCode: '+218' },
  { code: 'LI', country: 'Liechtenstein', dialCode: '+423' },
  { code: 'LT', country: 'Lithuania', dialCode: '+370' },
  { code: 'LU', country: 'Luxembourg', dialCode: '+352' },
  { code: 'MG', country: 'Madagascar', dialCode: '+261' },
  { code: 'MY', country: 'Malaysia', dialCode: '+60' },
  { code: 'ML', country: 'Mali', dialCode: '+223' },
  { code: 'MT', country: 'Malta', dialCode: '+356' },
  { code: 'MA', country: 'Morocco', dialCode: '+212' },
  { code: 'MX', country: 'Mexico', dialCode: '+52' },
  { code: 'MD', country: 'Moldova', dialCode: '+373' },
  { code: 'MC', country: 'Monaco', dialCode: '+377' },
  { code: 'MN', country: 'Mongolia', dialCode: '+976' },
  { code: 'ME', country: 'Montenegro', dialCode: '+382' },
  { code: 'MZ', country: 'Mozambique', dialCode: '+258' },
  { code: 'NP', country: 'Nepal', dialCode: '+977' },
  { code: 'NL', country: 'Netherlands', dialCode: '+31' },
  { code: 'NZ', country: 'New Zealand', dialCode: '+64' },
  { code: 'NG', country: 'Nigeria', dialCode: '+234' },
  { code: 'NO', country: 'Norway', dialCode: '+47' },
  { code: 'OM', country: 'Oman', dialCode: '+968' },
  { code: 'PK', country: 'Pakistan', dialCode: '+92' },
  { code: 'PA', country: 'Panama', dialCode: '+507' },
  { code: 'PY', country: 'Paraguay', dialCode: '+595' },
  { code: 'PE', country: 'Peru', dialCode: '+51' },
  { code: 'PH', country: 'Philippines', dialCode: '+63' },
  { code: 'PL', country: 'Poland', dialCode: '+48' },
  { code: 'PT', country: 'Portugal', dialCode: '+351' },
  { code: 'QA', country: 'Qatar', dialCode: '+974' },
  { code: 'RO', country: 'Romania', dialCode: '+40' },
  { code: 'RU', country: 'Russia', dialCode: '+7' },
  { code: 'RW', country: 'Rwanda', dialCode: '+250' },
  { code: 'SA', country: 'Saudi Arabia', dialCode: '+966' },
  { code: 'SN', country: 'Senegal', dialCode: '+221' },
  { code: 'RS', country: 'Serbia', dialCode: '+381' },
  { code: 'SG', country: 'Singapore', dialCode: '+65' },
  { code: 'SK', country: 'Slovakia', dialCode: '+421' },
  { code: 'SI', country: 'Slovenia', dialCode: '+386' },
  { code: 'ZA', country: 'South Africa', dialCode: '+27' },
  { code: 'KR', country: 'South Korea', dialCode: '+82' },
  { code: 'ES', country: 'Spain', dialCode: '+34' },
  { code: 'LK', country: 'Sri Lanka', dialCode: '+94' },
  { code: 'SE', country: 'Sweden', dialCode: '+46' },
  { code: 'SY', country: 'Syria', dialCode: '+963' },
  { code: 'TW', country: 'Taiwan', dialCode: '+886' },
  { code: 'TZ', country: 'Tanzania', dialCode: '+255' },
  { code: 'TH', country: 'Thailand', dialCode: '+66' },
  { code: 'TN', country: 'Tunisia', dialCode: '+216' },
  { code: 'TR', country: 'Turkey', dialCode: '+90' },
  { code: 'UA', country: 'Ukraine', dialCode: '+380' },
  { code: 'AE', country: 'United Arab Emirates', dialCode: '+971' },
  { code: 'GB', country: 'United Kingdom', dialCode: '+44' },
  { code: 'US', country: 'United States', dialCode: '+1' },
  { code: 'UY', country: 'Uruguay', dialCode: '+598' },
  { code: 'VE', country: 'Venezuela', dialCode: '+58' },
  { code: 'VN', country: 'Vietnam', dialCode: '+84' },
  { code: 'ZM', country: 'Zambia', dialCode: '+260' },
  { code: 'ZW', country: 'Zimbabwe', dialCode: '+263' },
]

export function getPhoneCodes(): PhoneCode[] {
  const priority = ['CH', 'FR', 'DE', 'IT', 'AT']
  const priorityCodes = PHONE_CODES.filter((c) => priority.includes(c.code))
  const otherCodes = PHONE_CODES.filter((c) => !priority.includes(c.code))
  return [...priorityCodes, ...otherCodes.sort((a, b) => a.country.localeCompare(b.country))]
}

export function formatPhoneNumber(number: string, countryCode: string): string {
  const phoneCode = PHONE_CODES.find((c) => c.code === countryCode)
  if (!phoneCode?.format) return number
  const digits = number.replace(/\D/g, '')
  let formatted = ''
  let digitIndex = 0
  for (const char of phoneCode.format) {
    if (digitIndex >= digits.length) break
    if (char === '#') {
      formatted += digits[digitIndex]
      digitIndex++
    } else {
      formatted += char
    }
  }
  if (digitIndex < digits.length) formatted += digits.slice(digitIndex)
  return formatted
}
