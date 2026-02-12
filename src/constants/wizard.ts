export const WIZARD_STEPS = ['landing', 'security', 'otp', 'qualification', 'loading', 'admin', 'success'] as const

export type WizardStep = typeof WIZARD_STEPS[number]

export const WIZARD_STAGES: Record<string, number> = {
  landing: 100000001,
  security: 100000002,
  otp: 100000003,
  qualification: 100000004,
  admin: 100000005,
  success: 100000006,
}

export const STEP_ORDER: Record<WizardStep, number> = {
  landing: 0,
  security: 1,
  otp: 2,
  qualification: 3,
  loading: 4,
  admin: 5,
  success: 6,
}
