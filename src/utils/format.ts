export function capitalizeName(name: string): string {
  if (!name) return ''
  return name
    .toLowerCase()
    .split(/[-\s]/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(name.includes('-') ? '-' : ' ')
}

export function capitalizeFirstNames(firstNames: string): string {
  if (!firstNames) return ''
  return firstNames
    .toLowerCase()
    .split(/\s+/)
    .map((name) => {
      if (name.includes('-')) {
        return name
          .split('-')
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
          .join('-')
      }
      return name.charAt(0).toUpperCase() + name.slice(1)
    })
    .join(' ')
}

export function extractFirstName(firstNames: string): string {
  if (!firstNames) return ''
  const first = firstNames.split(/\s+/)[0]
  return first ? capitalizeName(first) : ''
}

export function formatAvsNumber(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 13)
  if (digits.length <= 3) return digits
  if (digits.length <= 7) return `${digits.slice(0, 3)}.${digits.slice(3)}`
  if (digits.length <= 11) return `${digits.slice(0, 3)}.${digits.slice(3, 7)}.${digits.slice(7)}`
  return `${digits.slice(0, 3)}.${digits.slice(3, 7)}.${digits.slice(7, 11)}.${digits.slice(11)}`
}

export function formatCardNumber(value: string): string {
  return value.replace(/\D/g, '').slice(0, 20)
}
