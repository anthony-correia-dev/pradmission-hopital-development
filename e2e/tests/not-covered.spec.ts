import { test, expect } from '@playwright/test'
import path from 'path'
import { navigateToQualification, screenshotStep } from '../helpers/flow'

const FIXTURES_DIR = path.resolve('e2e/fixtures')

test.describe('Not covered — US-001: inline error on upload', () => {
  test('shows inline error when insurance is not covered', async ({ page }, testInfo) => {
    const name = `not-covered-${testInfo.project.name}`

    // Navigate to qualification
    await navigateToQualification(page, name)

    // Set sessionStorage override BEFORE uploading files
    await page.evaluate(() => {
      sessionStorage.setItem('__test_ocr_not_covered', 'true')
    })

    // Select reason: Illness
    await page.getByRole('button', { name: /illness|maladie/i }).click()

    // Select insurance: Swiss/LAMal
    await page.getByRole('button', { name: /lamal/i }).click()

    // Upload identity card (first file input)
    await page.locator('input[type="file"]').first().setInputFiles(
      path.join(FIXTURES_DIR, 'identity-card.png')
    )
    await page.getByText('identity-card.png').waitFor({ timeout: 5_000 })

    // Upload insurance card — OCR detects not_covered inline
    await page.locator('input[type="file"]').first().setInputFiles(
      path.join(FIXTURES_DIR, 'insurance-card.png')
    )

    // Assert: inline error message about not_covered (wait for OCR to complete)
    await expect(
      page.getByText(/does not cover|ne couvre pas/i)
    ).toBeVisible({ timeout: 10_000 })

    // Assert: insurance card file is cleared (upload zone has a file input again)
    const insuranceInput = page.locator('input[type="file"]').first()
    await expect(insuranceInput).toBeAttached()

    await screenshotStep(page, name, '08-qualification-not-covered-error')

    // Remove the sessionStorage override so next attempt succeeds
    await page.evaluate(() => {
      sessionStorage.removeItem('__test_ocr_not_covered')
    })

    // Upload a new insurance card (the only file input remaining)
    await insuranceInput.setInputFiles(path.join(FIXTURES_DIR, 'insurance-card.png'))

    await screenshotStep(page, name, '09-qualification-new-card-uploaded')

    // Check NLPD consent
    await page.locator('#consentNLPD').click()

    // Continue — button is always enabled
    const continueBtn = page.getByRole('button', { name: /continue|continuer/i })
    await continueBtn.click()

    // Should proceed through loading → admin
    await page.waitForURL('**/loading', { timeout: 5_000 })
    await page.waitForURL('**/admin', { timeout: 15_000 })

    // Assert: arrived at admin page successfully
    await expect(page.getByText(/administrative|administratives/i)).toBeVisible()

    await screenshotStep(page, name, '10-admin-after-retry')
  })
})
