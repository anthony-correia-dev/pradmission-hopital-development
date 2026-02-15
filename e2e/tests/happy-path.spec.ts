import { test, expect } from '@playwright/test'
import { navigateToQualification, fillQualificationAndContinue, screenshotStep } from '../helpers/flow'

test.describe('Happy path — full flow (US-003: early OCR finish)', () => {
  test('completes preadmission from landing to success', async ({ page }, testInfo) => {
    const name = `happy-path-${testInfo.project.name}`

    // Navigate through landing → security → OTP → qualification
    await navigateToQualification(page, name)

    // Fill qualification form and proceed to loading
    await fillQualificationAndContinue(page, name)

    // Loading page → should auto-navigate to /admin
    // OCR completes in ~2s (early finish, not 8s timeout)
    await page.waitForURL('**/admin', { timeout: 15_000 })

    // Assert: no OCR timeout banner
    await expect(page.locator('[aria-label="Dismiss"]')).not.toBeVisible()

    // Assert: identity fields pre-filled by OCR
    // FormInput generates id from label: "First name" → "first-name", "Prénom" → "prénom"
    await expect(page.locator('#first-name, #prénom')).toHaveValue('Jean Pierre')
    await expect(page.locator('#last-name, #nom')).toHaveValue('Dupont')

    await screenshotStep(page, name, '08-admin-prefilled')

    // Fill remaining required field: email
    await page.locator('#email').fill('test@example.com')

    await screenshotStep(page, name, '09-admin-email-filled')

    // Submit the form
    await page.getByRole('button', { name: /submit|soumettre/i }).click()

    // Assert: success page
    await page.waitForURL('**/success', { timeout: 10_000 })
    await expect(page.getByRole('heading', { name: /successfully|succès/i })).toBeVisible()

    await screenshotStep(page, name, '10-success')
  })
})
