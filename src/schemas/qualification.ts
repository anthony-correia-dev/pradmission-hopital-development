import { z } from 'zod'

export function createQualificationSchema(
  insurance: string | undefined,
  _reason: string | undefined,
  t: {
    reasonRequired: string
    insuranceRequired: string
    consentRequired: string
    identityRequired: string
    insuranceCardRequired: string
  }
) {
  return z.object({
    reason: z.enum(['illness', 'accident'], {
      required_error: t.reasonRequired,
    }),
    insurance: z.enum(['swiss', 'international', 'auto'], {
      required_error: t.insuranceRequired,
    }),
    hasEmployer: z.boolean(),
    consentNLPD: z.boolean().refine((val) => val === true, t.consentRequired),
    consentMarketing: z.boolean(),
    identityCard: z
      .instanceof(File, { message: t.identityRequired })
      .nullable()
      .refine((file) => file !== null, t.identityRequired),
    insuranceCard: z
      .instanceof(File)
      .nullable()
      .optional()
      .refine(
        (file) => {
          if (insurance === 'swiss') return file !== null && file !== undefined
          return true
        },
        t.insuranceCardRequired
      ),
  })
}
