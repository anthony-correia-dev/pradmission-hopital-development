import { z } from 'zod'
import { isValidDate } from '@/utils/date'

export function createSecuritySchema(t: {
  required: string
  invalid: string
  futureDate: string
}) {
  return z.object({
    birthDate: z
      .string()
      .min(1, t.required)
      .refine(isValidDate, t.invalid)
      .refine((date) => {
        const d = new Date(date)
        return d <= new Date()
      }, t.futureDate),
  })
}
