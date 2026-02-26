import { parse, isValid, isAfter, startOfToday, format } from 'date-fns'

export function formatDateInput(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 8)
  if (digits.length <= 2) return digits
  if (digits.length <= 4) return `${digits.slice(0, 2)}.${digits.slice(2)}`
  return `${digits.slice(0, 2)}.${digits.slice(2, 4)}.${digits.slice(4)}`
}

export function parseDisplayDate(
  dateString: string,
  options?: { allowFuture?: boolean }
): string | null {
  if (!dateString || dateString.length !== 10) return null

  const parsed = parse(dateString, 'dd.MM.yyyy', new Date())
  if (!isValid(parsed)) return null

  if (!options?.allowFuture && isAfter(parsed, startOfToday())) return null

  return format(parsed, 'yyyy-MM-dd')
}

export function formatDisplayDate(isoDate: string): string {
  if (!isoDate) return ''
  const [year, month, day] = isoDate.split('-')
  return `${day}.${month}.${year}`
}

export function isValidDate(dateString: string): boolean {
  if (!dateString || dateString.length !== 10) return false
  const [yearStr, monthStr, dayStr] = dateString.split('-')
  const year = parseInt(yearStr ?? '', 10)
  const month = parseInt(monthStr ?? '', 10)
  const day = parseInt(dayStr ?? '', 10)

  if (isNaN(year) || isNaN(month) || isNaN(day)) return false

  const date = new Date(year, month - 1, day)
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  )
}

export function isValidDisplayDate(dateString: string): boolean {
  return parseDisplayDate(dateString) !== null
}
