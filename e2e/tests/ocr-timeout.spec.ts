import { test, expect } from '@playwright/test'
import { navigateToQualification, fillQualificationAndContinue, screenshotStep, setOcrScenario, resetOcrScenario } from '../helpers/flow'

test.describe('OCR timeout — US-002: timeout on admin', () => {
  test('shows empty fields when OCR times out', async ({ page }, testInfo) => {
    const name = `ocr-timeout-${testInfo.project.name}`

    // Set mock server to TIMEOUT (15s delay, exceeds 8s client timeout)
    await setOcrScenario('TIMEOUT')

    // Navigate to qualification
    await navigateToQualification(page, name)

    // Fill qualification form and proceed
    // Both file OCRs fire in background (fire-and-forget), button is never disabled
    await fillQualificationAndContinue(page, name)

    // Should proceed through loading → admin
    await page.waitForURL('**/loading', { timeout: 5_000 })
    await page.waitForURL('**/admin', { timeout: 25_000 })

    // Assert: identity fields are empty (OCR didn't return in time)
    await expect(page.locator('#first-name, #prénom')).toHaveValue('')
    await expect(page.locator('#last-name, #nom')).toHaveValue('')

    await screenshotStep(page, name, '08-admin-empty-fields')

    // Cleanup
    await resetOcrScenario()
  })
})
