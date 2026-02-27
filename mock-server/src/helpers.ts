/**
 * Wraps a payload in the format expected by safeAjax:
 * { success: true, data: JSON.stringify(payload) }
 */
export function wrapResponse(payload: unknown) {
  return { success: true, data: JSON.stringify(payload) }
}

export type OcrScenario = 'SUCCESS' | 'TIMEOUT' | 'NOT_COVERED' | 'PARTIAL' | 'ERROR' | 'FIXED'

/** Runtime override set by /_test/scenario endpoint (takes precedence over env var) */
let runtimeScenario: OcrScenario | null = null

export function setRuntimeOcrScenario(scenario: OcrScenario | null) {
  runtimeScenario = scenario
}

export function getOcrScenario(): OcrScenario {
  if (runtimeScenario) return runtimeScenario
  const env = process.env.OCR_SCENARIO?.toUpperCase()
  if (env === 'TIMEOUT' || env === 'NOT_COVERED' || env === 'PARTIAL' || env === 'ERROR' || env === 'FIXED') {
    return env
  }
  return 'SUCCESS'
}

export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Check if an endpoint should fail based on MOCK_<NAME>=fail env var.
 * Example: MOCK_VERIFYOTP=fail → shouldFail('VERIFYOTP') returns true
 */
export function shouldFail(endpoint: string): boolean {
  return process.env[`MOCK_${endpoint.toUpperCase()}`]?.toLowerCase() === 'fail'
}
