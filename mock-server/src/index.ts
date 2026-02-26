import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { cors } from 'hono/cors'
import { serve } from '@hono/node-server'
import { csrf } from './routes/csrf.js'
import { serverLogics } from './routes/server-logics.js'
import { getOcrScenario, setRuntimeOcrScenario } from './helpers.js'
import type { OcrScenario } from './helpers.js'

const app = new Hono()

app.use('*', logger())
app.use('*', cors({ origin: '*' }))

// ---------- Test-only endpoints ----------
app.post('/_test/scenario', async (c) => {
  const body = await c.req.json<{ ocrScenario?: string }>()
  const scenario = (body.ocrScenario?.toUpperCase() ?? 'SUCCESS') as OcrScenario
  setRuntimeOcrScenario(scenario === 'SUCCESS' ? null : scenario)
  console.log(`[test] OCR scenario set to: ${scenario}`)
  return c.json({ success: true, scenario })
})

app.post('/_test/reset', (c) => {
  setRuntimeOcrScenario(null)
  console.log('[test] OCR scenario reset to default')
  return c.json({ success: true })
})

// Mount routes
app.route('/_layout', csrf)
app.route('/_api/serverlogics', serverLogics)

// Cloud Flow trigger endpoint (for sendOtp/verifyOtp fallback path)
app.post('/_api/cloudflow/v1.0/trigger/:triggerId', async (c) => {
  const triggerId = c.req.param('triggerId')
  const body = await c.req.text()
  const params = new URLSearchParams(body)
  const eventData = params.get('eventData')
  const payload = eventData ? JSON.parse(eventData) : {}
  console.log(`[cloudflow] triggerId=${triggerId}`, payload)
  return c.json({ status: 'success', data: payload })
})

const port = Number(process.env.MOCK_PORT) || 3001
const scenario = getOcrScenario()

// Collect active MOCK_* overrides
const overrides = Object.entries(process.env)
  .filter(([k, v]) => k.startsWith('MOCK_') && v?.toLowerCase() === 'fail')
  .map(([k]) => k)

console.log(`\n  Mock server running on http://localhost:${port}`)
console.log(`  OCR scenario: ${scenario}`)
if (overrides.length > 0) {
  console.log(`  Forced failures: ${overrides.join(', ')}`)
}
console.log()

serve({ fetch: app.fetch, port })
