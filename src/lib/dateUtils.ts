import { parse, isValid, isBefore, startOfToday, format, isAfter } from 'date-fns'

/**
 * Formats a date string input with dots (DD.MM.YYYY)
 * Automatically adds separators and limits to 8 digits
 * @param value - Raw input value
 * @returns Formatted string with max 10 characters (DD.MM.YYYY)
 * @example
 * formatDateInput('15011995') // '15.01.1995'
 * formatDateInput('1.1.1995') // '1.1.1995'
 */
export function formatDateInput(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 8)
  const parts: string[] = []
  
  // Day (max 2 digits)
  if (digits.length > 0) parts.push(digits.slice(0, 2))
  // Month (max 2 digits)
  if (digits.length > 2) parts.push(digits.slice(2, 4))
  // Year (max 4 digits)
  if (digits.length > 4) parts.push(digits.slice(4, 8))
  
  return parts.join('.')
}

/**
 * Parses a DD.MM.YYYY string to ISO date with strict validation
 * @param dateString - Date in DD.MM.YYYY format
 * @param options - Validation options
 * @returns ISO date string (YYYY-MM-DD) or null if invalid
 * @example
 * parseDisplayDate('15.01.1995') // '1995-01-15'
 * parseDisplayDate('31.02.2024') // null (invalid date)
 * parseDisplayDate('15.01.2099') // null (future date)
 */
export function parseDisplayDate(
  dateString: string,
  options: { allowFuture?: boolean } = {}
): string | null {
  if (!dateString || dateString.length !== 10) return null
  
  const parsedDate = parse(dateString, 'dd.MM.yyyy', new Date())
  
  if (!isValid(parsedDate)) return null
  
  // Validate it's not in the future (unless explicitly allowed)
  if (!options.allowFuture && isAfter(parsedDate, startOfToday())) {
    return null
  }
  
  // Additional validation: ensure parsed date matches input
  // This catches edge cases like '31.02.2024' which would be auto-corrected to '03.03.2024'
  const formatted = format(parsedDate, 'dd.MM.yyyy')
  if (formatted !== dateString) return null
  
  return format(parsedDate, 'yyyy-MM-dd')
}

/**
 * Converts ISO date to display format
 * @param isoDate - Date in YYYY-MM-DD format
 * @returns Date in DD.MM.YYYY format or empty string if invalid
 * @example
 * formatDisplayDate('1995-01-15') // '15.01.1995'
 * formatDisplayDate('invalid') // ''
 */
export function formatDisplayDate(isoDate: string): string {
  if (!isoDate) return ''
  const parsedDate = parse(isoDate, 'yyyy-MM-dd', new Date())
  return isValid(parsedDate) ? format(parsedDate, 'dd.MM.yyyy') : ''
}

/**
 * Validates if a date string in DD.MM.YYYY format is valid
 * @param dateString - Date in DD.MM.YYYY format
 * @returns true if valid date, false otherwise
 * @example
 * isValidDisplayDate('15.01.1995') // true
 * isValidDisplayDate('31.02.2024') // false
 */
export function isValidDisplayDate(dateString: string): boolean {
  return parseDisplayDate(dateString) !== null
}
