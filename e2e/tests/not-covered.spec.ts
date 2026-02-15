import { test, expect } from '@playwright/test'
import path from 'path'
import { navigateToQualification, fillQualificationAndContinue, screenshotStep } from '../helpers/flow'

const FIXTURES_DIR = path.resolve('e2e/fixtures')

test.describe('Not covered — US-001: redirect to qualification', () => {
  test('redirects back to qualification when insurance is not covered', async ({ page }, testInfo) => {
    const name = `not-covered-${testInfo.project.name}`

    // Navigate to qualification
    await navigateToQualification(page, name)

    // Set sessionStorage override for not_covered scenario
    await page.evaluate(() => {
      sessionStorage.setItem('__test_ocr_not_covered', 'true')
    })

    // Fill qualification form and proceed
    await fillQualificationAndContinue(page, name)

    // Loading page starts
    await page.waitForURL('**/loading', { timeout: 5_000 })
    await screenshotStep(page, name, '08-loading')

    // Should redirect BACK to /qualification (not /admin)
    await page.waitForURL('**/qualification', { timeout: 15_000 })

    // Assert: insurance card error message about not_covered
    await expect(
      page.getByText(/does not cover|ne couvre pas/i)
    ).toBeVisible()

    // Assert: insurance card file is cleared (upload zone has a file input again)
    // Identity card is still uploaded, so there's only 1 file input (insurance)
    const insuranceInput = page.locator('input[type="file"]').first()
    await expect(insuranceInput).toBeAttached()

    await screenshotStep(page, name, '09-qualification-not-covered-error')

    // Remove the sessionStorage override so next attempt succeeds
    await page.evaluate(() => {
      sessionStorage.removeItem('__test_ocr_not_covered')
    })

    // Upload a new insurance card (the only file input remaining)
    await insuranceInput.setInputFiles(path.join(FIXTURES_DIR, 'insurance-card.png'))

    await screenshotStep(page, name, '10-qualification-new-card-uploaded')

    // Continue again → loading → admin (normal flow)
    const continueBtn = page.getByRole('button', { name: /continue|continuer/i })
    await expect(continueBtn).toBeEnabled({ timeout: 10_000 })
    await continueBtn.click()

    await page.waitForURL('**/loading', { timeout: 5_000 })
    await page.waitForURL('**/admin', { timeout: 15_000 })

    // Assert: arrived at admin page successfully
    await expect(page.getByText(/administrative|administratives/i)).toBeVisible()

    await screenshotStep(page, name, '11-admin-after-retry')
  })
})
