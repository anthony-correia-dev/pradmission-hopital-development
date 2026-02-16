export const WIZARD_STEPS = ['landing', 'security', 'otp', 'qualification', 'loading', 'admin', 'success'] as const

export type WizardStep = typeof WIZARD_STEPS[number]

export const WIZARD_STAGES: Record<string, number> = {
  landing: 100_000_001,
  security: 100_000_002,
  otp: 100_000_003,
  qualification: 100_000_004,
  admin: 100_000_005,
  success: 100_000_006,
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
