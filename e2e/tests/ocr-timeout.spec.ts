import { test, expect } from '@playwright/test'
import { navigateToQualification, fillQualificationAndContinue, screenshotStep } from '../helpers/flow'

test.describe('OCR timeout — US-002: timeout banner on admin', () => {
  test('shows warning banner when OCR times out', async ({ page }, testInfo) => {
    const name = `ocr-timeout-${testInfo.project.name}`

    // Navigate to qualification
    await navigateToQualification(page, name)

    // Set sessionStorage override BEFORE uploading files
    // This makes the mock OCR delay 15s, which exceeds the 8s timeout
    await page.evaluate(() => {
      sessionStorage.setItem('__test_ocr_timeout', 'true')
    })

    // Fill qualification form and proceed
    // Both file OCRs fire in background (fire-and-forget), button is never disabled
    await fillQualificationAndContinue(page, name)

    // Should proceed through loading → admin
    await page.waitForURL('**/loading', { timeout: 5_000 })
    await page.waitForURL('**/admin', { timeout: 20_000 })

    // Assert: amber warning banner is visible with timeout message
    const banner = page.locator('.border-amber-300')
    await expect(banner).toBeVisible()
    await expect(banner.getByText(/recognition|reconnaissance/i)).toBeVisible()

    // Assert: identity fields are empty (OCR didn't return in time)
    await expect(page.getByLabel(/first name|prénom/i)).toHaveValue('')

    await screenshotStep(page, name, '08-admin-with-banner')

    // Dismiss the banner
    await page.locator('[aria-label="Dismiss"]').click()

    // Assert: banner disappears
    await expect(banner).not.toBeVisible()

    await screenshotStep(page, name, '09-admin-banner-dismissed')
  })
})
