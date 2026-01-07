import { z } from 'zod'
import { isValidDate } from '../lib/dateValidation'

export const createAdminSchema = (
  reason: 'illness' | 'accident' | '',
  insurance: 'swiss' | 'international' | 'auto' | '',
  hasEmployer: boolean,
  t: {
    required: string
    invalidEmail: string
    invalidNpa: string
    invalidDate: string
    invalidCardNumber: string
    invalidAvsNumber: string
  }
) => {
  return z.object({
    firstName: z.string().min(1, t.required),
    lastName: z.string().min(1, t.required),
    gender: z.string().min(1, t.required),
    nationality: z.string().min(1, t.required),
    street: z.string().min(1, t.required),
    npa: z.string().min(1, t.required).regex(/^\d+$/, t.invalidNpa),
    city: z.string().min(1, t.required),
    country: z.string().min(1, t.required),
    email: z.string().min(1, t.required).email(t.invalidEmail),
    profession: hasEmployer ? z.string().min(1, t.required) : z.string(),
    employerName: hasEmployer ? z.string().min(1, t.required) : z.string(),
    employerAddress: hasEmployer ? z.string().min(1, t.required) : z.string(),
    referringDoctor: z.string().optional(),
    generalPractitioner: z.string().optional(),
    accidentDate: reason === 'accident' 
      ? z.string().min(1, t.required).refine(isValidDate, t.invalidDate)
      : z.string().optional(),
    accidentInsurance: z.string().optional(),
    claimNumber: z.string().optional(),
    avsNumber: insurance === 'swiss'
      ? z.string().min(1, t.required).refine(
          (val) => /^\d{13}$/.test(val.replace(/\./g, '')),
          t.invalidAvsNumber
        )
      : z.string().optional(),
    basicInsurance: 
      (reason === 'accident' || insurance === 'swiss' || insurance === 'international')
        ? z.string().min(1, t.required)
        : z.string().optional(),
    cardNumber: 
      (reason === 'accident' || insurance === 'swiss')
        ? z.string().min(1, t.required).refine(
            (val) => /^\d{20}$/.test(val.replace(/\s/g, '')),
            t.invalidCardNumber
          )
        : z.string().optional(),
    policyNumber: insurance === 'international'
      ? z.string().min(1, t.required)
      : z.string().optional(),
    complementaryInsurance: z.string().optional()
  })
}

export type AdminFormData = z.infer<ReturnType<typeof createAdminSchema>>
