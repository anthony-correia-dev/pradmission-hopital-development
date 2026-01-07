import { z } from 'zod'

export const createOTPSchema = (t: {
  required: string
  invalid: string
}) => {
  return z.object({
    otpCode: z.string()
      .min(1, t.required)
      .regex(/^\d{6}$/, t.invalid)
  })
}

export type OTPFormData = z.infer<ReturnType<typeof createOTPSchema>>
