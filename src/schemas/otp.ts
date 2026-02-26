import { z } from 'zod'

export function createOTPSchema(t: {
  required: string
  invalid: string
}) {
  return z.object({
    otpCode: z
      .string()
      .min(1, t.required)
      .regex(/^\d{6}$/, t.invalid),
  })
}
