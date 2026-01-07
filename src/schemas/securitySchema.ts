import { z } from 'zod'
import { isValidDate } from '../lib/dateValidation'

export const createSecuritySchema = (t: {
  required: string
  invalid: string
  futureDate: string
}) => {
  return z.object({
    birthDate: z.string()
      .min(1, t.required)
      .refine(isValidDate, t.invalid)
      .refine((dateString) => {
        const [year, month, day] = dateString.split('-')
        const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
        const now = new Date()
        return date <= now
      }, t.futureDate)
  })
}

export type SecurityFormData = z.infer<ReturnType<typeof createSecuritySchema>>
