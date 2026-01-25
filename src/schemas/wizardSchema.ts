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

    // --- Admin validation ---
    // Champs obligatoires de base
    if (!data.firstName) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['firstName'], message: t.admin.required })
    }
    if (!data.lastName) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['lastName'], message: t.admin.required })
    }
    if (!data.gender) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['gender'], message: t.admin.required })
    }
    if (!data.nationality) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['nationality'], message: t.admin.required })
    }
    if (!data.street) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['street'], message: t.admin.required })
    }
    if (!data.npa) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['npa'], message: t.admin.required })
    } else if (!/^\d+$/.test(data.npa)) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['npa'], message: t.admin.invalidNpa })
    }
    if (!data.city) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['city'], message: t.admin.required })
    }
    if (!data.country) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['country'], message: t.admin.required })
    }
    if (!data.email) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['email'], message: t.admin.required })
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['email'], message: t.admin.invalidEmail })
    }

    // Champs conditionnels: Employeur (si hasEmployer === true)
    if (data.hasEmployer) {
      if (!data.profession) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['profession'], message: t.admin.required })
      }
      if (!data.employerName) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['employerName'], message: t.admin.required })
      }
      if (!data.employerAddress) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['employerAddress'], message: t.admin.required })
      }
    }

    // Champs conditionnels: Accident (si reason === 'accident')
    if (data.reason === 'accident') {
      if (!data.accidentDate) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['accidentDate'], message: t.admin.required })
      } else if (!isValidDate(data.accidentDate)) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['accidentDate'], message: t.admin.invalidDate })
      }
    }

    // Champs conditionnels: AVS (si insurance === 'swiss')
    if (data.insurance === 'swiss') {
      if (!data.avsNumber) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['avsNumber'], message: t.admin.required })
      } else if (!/^\d{13}$/.test(data.avsNumber.replace(/\./g, ''))) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['avsNumber'], message: t.admin.invalidAvsNumber })
      }
    }

    // Champs conditionnels: Assurance de base (si swiss, international, ou accident+auto)
    const needsBasicInsurance = data.insurance === 'swiss' || data.insurance === 'international' || (data.reason === 'accident' && data.insurance === 'auto')
    if (needsBasicInsurance && !data.basicInsurance) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['basicInsurance'], message: t.admin.required })
    }

    // Champs conditionnels: Numéro de carte (si swiss, international, ou accident+auto)
    const needsCardNumber = data.insurance === 'swiss' || data.insurance === 'international' || (data.reason === 'accident' && data.insurance === 'auto')
    if (needsCardNumber) {
      if (!data.cardNumber) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['cardNumber'], message: t.admin.required })
      } else if (!/^\d{20}$/.test(data.cardNumber.replace(/\s/g, '').replace(/\./g, ''))) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['cardNumber'], message: t.admin.invalidCardNumber })
      }
    }

    // Champs conditionnels: Numéro de police (si international)
    if (data.insurance === 'international' && !data.policyNumber) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['policyNumber'], message: t.admin.required })
    }
  })
}

export type WizardFormData = z.infer<ReturnType<typeof createWizardSchema>>
