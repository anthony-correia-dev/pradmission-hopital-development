import { Hono } from 'hono'
import { wrapResponse, getOcrScenario, delay, shouldFail } from '../helpers.js'
import { IDENTITY_OCR, INSURANCE_OCR } from '../data.js'

const serverLogics = new Hono()

/**
 * GET /getpread — Validate preadmission link
 * MOCK_GETPREAD=fail → always invalid
 */
serverLogics.get('/getpread', (c) => {
  const id = c.req.query('preadmissionId') ?? ''
  if (shouldFail('GETPREAD')) {
    console.log(`[getpread] id=${id} → FORCED FAIL`)
    return c.json(wrapResponse({ isValid: false }))
  }
  const isValid = !!id && id !== 'invalid'
  console.log(`[getpread] id=${id} → isValid=${isValid}`)
  return c.json(wrapResponse({ isValid }))
})

/**
 * POST /getbirth — Verify birth date
 * MOCK_GETBIRTH=fail → always invalid
 */
serverLogics.post('/getbirth', async (c) => {
  const body = await c.req.json<{ birthdate?: string }>()
  if (shouldFail('GETBIRTH')) {
    console.log(`[getbirth] birthdate=${body.birthdate} → FORCED FAIL`)
    return c.json(wrapResponse({ isValid: false }))
  }
  const isValid = body.birthdate === '12/06/1989'
  console.log(`[getbirth] birthdate=${body.birthdate} → isValid=${isValid}`)
  return c.json(wrapResponse({ isValid }))
})

/**
 * GET /getphone — Get phone last digits
 * MOCK_GETPHONE=fail → API error
 */
serverLogics.get('/getphone', (c) => {
  const id = c.req.query('preadmissionId') ?? ''
  if (shouldFail('GETPHONE')) {
    console.log(`[getphone] id=${id} → FORCED FAIL`)
    return c.json({ success: false, data: '{}' })
  }
  console.log(`[getphone] id=${id}`)
  return c.json(wrapResponse({ lastDigits: '1234' }))
})

/**
 * POST /sendotp — Send OTP code
 * MOCK_SENDOTP=fail → API error
 */
serverLogics.post('/sendotp', async (c) => {
  const body = await c.req.json<{ number?: string; language?: string }>()
  if (shouldFail('SENDOTP')) {
    console.log(`[sendotp] number=${body.number} → FORCED FAIL`)
    return c.json({ success: false, data: '{}' })
  }
  console.log(`[sendotp] number=${body.number} language=${body.language}`)
  return c.json(wrapResponse({ status: 'success', last4Digits: '1234' }))
})

/**
 * POST /verifyotp — Verify OTP code
 * MOCK_VERIFYOTP=fail → always invalid
 */
serverLogics.post('/verifyotp', async (c) => {
  const body = await c.req.json<{ number?: string; code?: string }>()
  if (shouldFail('VERIFYOTP')) {
    console.log(`[verifyotp] code=${body.code} → FORCED FAIL`)
    return c.json(wrapResponse({ isValid: false }))
  }
  const isValid = body.code === '123456'
  console.log(`[verifyotp] code=${body.code} → isValid=${isValid}`)
  return c.json(wrapResponse({ isValid }))
})

/**
 * POST /extractdocument — OCR document extraction
 * Controlled by OCR_SCENARIO env var (SUCCESS/TIMEOUT/NOT_COVERED/PARTIAL/ERROR)
 */
serverLogics.post('/extractdocument', async (c) => {
  const scenario = getOcrScenario()
  const body = await c.req.json<{ doc?: string; base64?: string }>()
  const docType = body.doc === 'identityid' ? 'identity' : 'insurance'
  console.log(`[extractdocument] type=${docType} scenario=${scenario}`)

  // Simulate delays
  if (scenario === 'TIMEOUT') {
    await delay(15_000)
  } else {
    await delay(2_000)
  }

  // Error scenario returns a failure
  if (scenario === 'ERROR') {
    return c.json({ success: false, data: JSON.stringify({ error: 'OCR extraction failed' }) })
  }

  const data = docType === 'identity' ? IDENTITY_OCR[scenario] : INSURANCE_OCR[scenario]
  return c.json(wrapResponse(data))
})

/**
 * POST /submit — Submit preadmission form
 * MOCK_SUBMIT=fail → API error
 */
serverLogics.post('/submit', async (c) => {
  const body = await c.req.json()
  if (shouldFail('SUBMIT')) {
    console.log(`[submit] → FORCED FAIL`)
    return c.json({ success: false, data: '{}' })
  }
  console.log(`[submit] Received submission`, Object.keys(body))
  await delay(1_500)
  return c.json(
    wrapResponse({
      status: 'success',
      confirmationNumber: `PREAD-MOCK-${Date.now()}`,
    })
  )
})

/**
 * PUT /setstep — Update wizard step
 */
serverLogics.put('/setstep', async (c) => {
  const id = c.req.query('preadmissionId') ?? ''
  const body = await c.req.json<{ Stage?: number }>()
  console.log(`[setstep] id=${id} stage=${body.Stage}`)
  return c.json(wrapResponse({ success: true }))
})

/**
 * GET /getflows — Get Cloud Flow trigger IDs
 */
serverLogics.get('/getflows', (c) => {
  console.log('[getflows] Returning mock trigger IDs')
  return c.json(
    wrapResponse({
      data: {
        identityDoc: 'mock-identity-trigger-id',
        insuranceDoc: 'mock-insurance-trigger-id',
        submitflow: 'mock-submit-trigger-id',
        sendOtp: 'mock-sendotp-trigger-id',
        verifyOtp: 'mock-verifyotp-trigger-id',
      },
    })
  )
})

export { serverLogics }
