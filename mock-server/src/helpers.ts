/**
 * Wraps a payload in the format expected by safeAjax:
 * { success: true, data: JSON.stringify(payload) }
 */
export function wrapResponse(payload: unknown) {
  return { success: true, data: JSON.stringify(payload) }
}

export type OcrScenario = 'SUCCESS' | 'TIMEOUT' | 'NOT_COVERED' | 'PARTIAL' | 'ERROR'

export function getOcrScenario(): OcrScenario {
  const env = process.env.OCR_SCENARIO?.toUpperCase()
  if (env === 'TIMEOUT' || env === 'NOT_COVERED' || env === 'PARTIAL' || env === 'ERROR') {
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
