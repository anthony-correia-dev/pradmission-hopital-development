import { z } from 'zod'

export const createQualificationSchema = (
  insurance: 'swiss' | 'international' | 'auto' | '',
  reason: 'illness' | 'accident' | '',
  t: {
    reasonRequired: string
    insuranceRequired: string
    identityCardRequired: string
    insuranceCardRequired: string
    consentNLPDRequired: string
  }
) => {
  const isInsuranceCardRequired = (reason === 'accident' && insurance === 'swiss') || (reason === 'illness' && insurance === 'swiss')
  
  return z.object({
    reason: z.enum(['illness', 'accident'], { 
      errorMap: () => ({ message: t.reasonRequired })
    }),
    insurance: z.enum(['swiss', 'international', 'auto'], { 
      errorMap: () => ({ message: t.insuranceRequired })
    }),
    hasEmployer: z.boolean(),
    consentNLPD: z.boolean().refine(val => val === true, t.consentNLPDRequired),
    consentMarketing: z.boolean(),
    identityCard: z.instanceof(File, { message: t.identityCardRequired }),
    insuranceCard: isInsuranceCardRequired 
      ? z.instanceof(File, { message: t.insuranceCardRequired })
      : z.instanceof(File).optional().nullable()
  })
}

export type QualificationFormData = z.infer<ReturnType<typeof createQualificationSchema>>
