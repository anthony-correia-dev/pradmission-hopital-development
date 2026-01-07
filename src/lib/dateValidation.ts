/**
 * Validates a date string in ISO format (YYYY-MM-DD)
 * Ensures the date is valid and corresponds to the actual calendar date
 */
export const isValidDate = (dateString: string): boolean => {
  if (!dateString || dateString.length !== 10) return false
  const [year, month, day] = dateString.split('-')
  const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
  return !isNaN(date.getTime()) && 
         date.getDate() === parseInt(day) &&
         date.getMonth() === parseInt(month) - 1 &&
         date.getFullYear() === parseInt(year)
}
