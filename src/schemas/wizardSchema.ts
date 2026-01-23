import { z } from 'zod'
import { isValidDate } from '@/lib/dateValidation'

export const createWizardSchema = (t: {
  qualification: {
    reasonRequired: string
    insuranceRequired: string
    identityCardRequired: string
    insuranceCardRequired: string
    consentNLPDRequired: string
  }
  admin: {
    required: string
    invalidEmail: string
    invalidNpa: string
    invalidDate: string
    invalidCardNumber: string
    invalidAvsNumber: string
  }
  security: {
    required: string
    invalid: string
    futureDate: string
  }
  otp?: {
    required: string
    invalid: string
  }
}) => {
  return z.object({
    language: z.enum(['fr', 'en']).default('fr'),
    preadmissionId: z.string().optional().default(''),

    // Security
    birthDate: z.string().optional().default(''),

    // OTP
    otpCode: z.string().optional().default(''),

    // Qualification
    reason: z.union([
      z.literal(''),
      z.enum(['illness', 'accident'], { errorMap: () => ({ message: t.qualification.reasonRequired }) })
    ]).default(''),
    insurance: z.union([
      z.literal(''),
      z.enum(['swiss', 'international', 'auto'], { errorMap: () => ({ message: t.qualification.insuranceRequired }) })
    ]).default(''),
    hasEmployer: z.boolean().default(false),
    consentNLPD: z.boolean().default(false),
    consentMarketing: z.boolean().default(false),
    identityCard: z.instanceof(File).nullable().default(null),
    insuranceCard: z.instanceof(File).nullable().default(null),
    
    // 🎯 Documents Base64 (pré-calculés lors de l'OCR pour éviter double conversion)
    identityCardBase64: z.string().optional().default(''),
    identityCardMimeType: z.string().optional().default(''),
    insuranceCardBase64: z.string().optional().default(''),
    insuranceCardMimeType: z.string().optional().default(''),

    // Admin: non-bloquant par défaut (validé à l'étape Admin)
    firstName: z.string().optional().default(''),
    lastName: z.string().optional().default(''),
    birthDatePersonal: z.string().optional().default(''),
    gender: z.string().optional().default(''),
    nationality: z.string().optional().default(''),
    avsNumber: z.string().optional().default(''),
    street: z.string().optional().default(''),
    npa: z.string().optional().default(''),
    city: z.string().optional().default(''),
    country: z.string().optional().default(''),
    email: z.string().optional().default(''),
    profession: z.string().optional().default(''),
    employerName: z.string().optional().default(''),
    employerAddress: z.string().optional().default(''),
    referringDoctor: z.string().optional().default(''),
    generalPractitioner: z.string().optional().default(''),
    accidentDate: z.string().optional().default(''),
    accidentInsurance: z.string().optional().default(''),
    claimNumber: z.string().optional().default(''),
    basicInsurance: z.string().optional().default(''),
    cardNumber: z.string().optional().default(''),
    policyNumber: z.string().optional().default(''),
    complementaryInsurance: z.string().optional().default('')
  }).superRefine((data, ctx) => {
    // --- Security step-level validation (only surfaces when trigger('birthDate') is called) ---
    if (!data.birthDate) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['birthDate'], message: t.security.required })
    } else {
      if (!isValidDate(data.birthDate)) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['birthDate'], message: t.security.invalid })
      } else {
        // future date check (same logic as securitySchema)
        const [year, month, day] = data.birthDate.split('-')
        const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
        const now = new Date()
        if (date > now) {
          ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['birthDate'], message: t.security.futureDate })
        }
      }
    }

    // --- OTP step-level validation ---
    // Backwards compatible: if otp messages are not wired, fall back to security.invalid as generic invalid.
    const otpRequired = t.otp?.required ?? t.security.required
    const otpInvalid = t.otp?.invalid ?? t.security.invalid

    if (!data.otpCode) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['otpCode'], message: otpRequired })
    } else if (!/^\d{6}$/.test(data.otpCode)) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['otpCode'], message: otpInvalid })
    }

    // --- Qualification required ---
    if (!data.reason) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['reason'], message: t.qualification.reasonRequired })
    }
    if (!data.insurance) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['insurance'], message: t.qualification.insuranceRequired })
    }

    // On ne valide le reste de Qualification que si reason/insurance sont présents
    if (data.reason && data.insurance) {
      if (data.consentNLPD !== true) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['consentNLPD'], message: t.qualification.consentNLPDRequired })
      }

      if (!data.identityCard) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['identityCard'], message: t.qualification.identityCardRequired })
      }

      const insuranceCardRequired = data.insurance === 'swiss'
      if (insuranceCardRequired && !data.insuranceCard) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['insuranceCard'], message: t.qualification.insuranceCardRequired })
      }
    }

    // --- Admin validation: uniquement quand on est à l'étape Admin ---
    // (Déclenché par trigger([...]) dans Admin, pas ici globalement)
  })
}

export type WizardFormData = z.infer<ReturnType<typeof createWizardSchema>>
