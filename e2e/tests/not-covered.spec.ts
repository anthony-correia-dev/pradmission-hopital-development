import { test, expect } from '@playwright/test'
import path from 'path'
import { navigateToQualification, screenshotStep, setOcrScenario, resetOcrScenario } from '../helpers/flow'

const FIXTURES_DIR = path.resolve('e2e/fixtures')

test.describe('Not covered — US-001: inline error on upload', () => {
  test('shows inline error when insurance is not covered', async ({ page }, testInfo) => {
    const name = `not-covered-${testInfo.project.name}`

    // Navigate to qualification
    await navigateToQualification(page, name)

    // Set mock server to return NOT_COVERED for insurance OCR
    await setOcrScenario('NOT_COVERED')

    // Select reason: Illness
    await page.getByRole('button', { name: /illness|maladie/i }).click()

    // Select insurance: Swiss/LAMal
    await page.getByRole('button', { name: /lamal/i }).click()

    // Upload identity card (first file input)
    await page.locator('input[type="file"]').first().setInputFiles(
      path.join(FIXTURES_DIR, 'identity-card.png')
    )
    await page.getByText('identity-card.png').waitFor({ timeout: 5_000 })

    // Upload insurance card
    await page.locator('input[type="file"]').first().setInputFiles(
      path.join(FIXTURES_DIR, 'insurance-card.png')
    )

    // Check NLPD consent
    await page.locator('#consentNLPD').click()

    await screenshotStep(page, name, '08-qualification-filled')

    // Continue — button is NOT blocked by not_covered
    const continueBtn = page.getByRole('button', { name: /continue|continuer/i })
    await continueBtn.click()

    // Goes to loading, OCR returns NOT_COVERED, redirects back to qualification
    await page.waitForURL('**/loading', { timeout: 5_000 })
    await page.waitForURL('**/qualification', { timeout: 20_000 })

    // Assert: error message about not_covered is visible
    await expect(
      page.getByText(/does not cover|ne couvre pas/i)
    ).toBeVisible({ timeout: 5_000 })

    // Assert: insurance card file is cleared (upload zone has a file input again)
    const insuranceInput = page.locator('input[type="file"]').first()
    await expect(insuranceInput).toBeAttached()

    await screenshotStep(page, name, '09-qualification-not-covered-error')

    // Reset mock server to SUCCESS so next upload succeeds
    await resetOcrScenario()

    // Upload a new insurance card
    await insuranceInput.setInputFiles(path.join(FIXTURES_DIR, 'insurance-card.png'))

    await screenshotStep(page, name, '10-qualification-new-card-uploaded')

    // Continue again
    await continueBtn.click()

    // Should proceed through loading → admin
    await page.waitForURL('**/loading', { timeout: 5_000 })
    await page.waitForURL('**/admin', { timeout: 20_000 })

    // Assert: arrived at admin page successfully
    await expect(page.getByText(/administrative|administratives/i)).toBeVisible()

    await screenshotStep(page, name, '11-admin-after-retry')
  })
})
