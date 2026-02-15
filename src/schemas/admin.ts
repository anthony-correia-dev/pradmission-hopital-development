import { z } from 'zod'
import { isValidDate } from '@/utils/date'

export function createAdminSchema(
  reason: string | undefined,
  insurance: string | undefined,
  hasEmployer: boolean,
  t: {
    required: string
    invalidEmail: string
    invalidNpa: string
    invalidAvs: string
    invalidCardNumber: string
    invalidDate: string
  }
) {
  return z.object({
    // Identity — always required
    firstName: z.string().min(1, t.required),
    lastName: z.string().min(1, t.required),
    gender: z.string().min(1, t.required),
    nationality: z.string().min(1, t.required),

    // Contact — always required
    street: z.string().min(1, t.required),
    npa: z
      .string()
      .min(1, t.required)
      .regex(/^\d+$/, t.invalidNpa),
    city: z.string().min(1, t.required),
    country: z.string().min(1, t.required),
    email: z
      .string()
      .min(1, t.required)
      .email(t.invalidEmail),

    // Employer — conditional
    profession: hasEmployer
      ? z.string().min(1, t.required)
      : z.string().optional().default(''),
    employerName: hasEmployer
      ? z.string().min(1, t.required)
      : z.string().optional().default(''),
    employerAddress: hasEmployer
      ? z.string().min(1, t.required)
      : z.string().optional().default(''),

    // Doctors — always optional
    referringDoctor: z.string().optional().default(''),
    generalPractitioner: z.string().optional().default(''),

    // Accident — conditional
    accidentDate: reason === 'accident'
      ? z.string().min(1, t.required).refine(isValidDate, t.invalidDate)
      : z.string().optional().default(''),
    accidentInsurance: z.string().optional().default(''),
    claimNumber: z.string().optional().default(''),

    // Insurance — conditional
    avsNumber: insurance === 'swiss'
      ? z
          .string()
          .min(1, t.required)
          .refine(
            (val) => val.replace(/\D/g, '').length === 13,
            t.invalidAvs
          )
      : z.string().optional().default(''),
    basicInsurance:
      reason === 'accident' || insurance === 'swiss' || insurance === 'international'
        ? z.string().min(1, t.required)
        : z.string().optional().default(''),
    cardNumber:
      reason === 'accident' || insurance === 'swiss'
        ? z
            .string()
            .min(1, t.required)
            .refine(
              (val) => val.replace(/\D/g, '').length === 20,
              t.invalidCardNumber
            )
        : z.string().optional().default(''),
    policyNumber: insurance === 'international'
      ? z.string().min(1, t.required)
      : z.string().optional().default(''),
    complementaryInsurance: z.string().optional().default(''),
  })
}
