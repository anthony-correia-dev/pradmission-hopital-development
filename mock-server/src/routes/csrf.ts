import { Hono } from 'hono'

const csrf = new Hono()

/**
 * GET /_layout/tokenhtml
 * Returns an HTML snippet with a CSRF token, matching the Power Pages format.
 */
csrf.get('/tokenhtml', (c) => {
  const token = 'mock-csrf-token-' + Date.now()
  return c.html(
    `<input name="__RequestVerificationToken" type="hidden" value="${token}" />`
  )
})

export { csrf }
