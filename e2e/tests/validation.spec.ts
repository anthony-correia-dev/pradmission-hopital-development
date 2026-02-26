import { test, expect } from '@playwright/test'
import path from 'path'
import {
  navigateToQualification,
  fillQualification,
  fillAdminCommon,
  fillInsuranceFields,
  setOcrScenario,
  resetOcrScenario,
  screenshotStep,
} from '../helpers/flow'

const FIXTURES_DIR = path.resolve('e2e/fixtures')

test.describe('Qualification page validation', () => {
  test('shows errors when submitting empty form', async ({ page }, testInfo) => {
    const name = `val-qual-empty-${testInfo.project.name}`
    await navigateToQualification(page, name)

    // Click continue without filling anything
    await page.getByRole('button', { name: /continue|continuer/i }).click()

    // Assert: reason error
    await expect(page.getByText(/please select a reason|veuillez sélectionner une raison/i)).toBeVisible()

    // Assert: insurance error
    await expect(page.getByText(/please select an insurance|veuillez sélectionner un type/i)).toBeVisible()

    // Assert: identity card error
    await expect(page.getByText(/identity card is required|carte d'identité est obligatoire/i)).toBeVisible()

    // Assert: consent error
    await expect(page.getByText(/consent is required|consentement est obligatoire/i)).toBeVisible()

    await screenshotStep(page, name, 'qualification-validation-errors')

    // Assert: stays on qualification page
    await expect(page).toHaveURL(/qualification/)
  })

  test('shows error when insurance card missing for swiss', async ({ page }, testInfo) => {
    const name = `val-qual-noinscard-${testInfo.project.name}`
    await navigateToQualification(page, name)

    // Fill everything EXCEPT insurance card
    await page.getByRole('button', { name: /illness|maladie/i }).click()
    await page.getByRole('button', { name: /lamal/i }).click()

    // Upload identity card only
    await page.locator('input[type="file"]').first().setInputFiles(
      path.join(FIXTURES_DIR, 'identity-card.png')
    )
    await page.getByText('identity-card.png').waitFor({ timeout: 5_000 })

    // Check consent
    await page.locator('#consentNLPD').click()

    // Try to continue
    await page.getByRole('button', { name: /continue|continuer/i }).click()

    // Assert: insurance card error
    await expect(page.getByText(/insurance card is required|carte d'assurance est obligatoire/i)).toBeVisible()

    await screenshotStep(page, name, 'qualification-insurance-card-required')

    // Assert: stays on qualification page
    await expect(page).toHaveURL(/qualification/)
  })

  test('no insurance card error for international', async ({ page }, testInfo) => {
    const name = `val-qual-intl-nocard-${testInfo.project.name}`
    await navigateToQualification(page, name)

    // Fill with international insurance (card is optional)
    await page.getByRole('button', { name: /illness|maladie/i }).click()
    await page.getByRole('button', { name: /other insurance|autre assurance/i }).click()

    // Upload identity card only
    await page.locator('input[type="file"]').first().setInputFiles(
      path.join(FIXTURES_DIR, 'identity-card.png')
    )
    await page.getByText('identity-card.png').waitFor({ timeout: 5_000 })

    // Check consent
    await page.locator('#consentNLPD').click()

    // Continue should work without insurance card
    await page.getByRole('button', { name: /continue|continuer/i }).click()

    // Assert: navigates to loading (no insurance card error)
    await page.waitForURL('**/loading', { timeout: 5_000 })

    await screenshotStep(page, name, 'qualification-intl-no-card-ok')
  })
})

test.describe('Admin page validation', () => {
  test.beforeEach(async () => {
    await setOcrScenario('FIXED')
  })

  test.afterEach(async () => {
    await resetOcrScenario()
  })

  test('shows errors when submitting with empty email', async ({ page }, testInfo) => {
    const name = `val-admin-noemail-${testInfo.project.name}`
    await navigateToQualification(page, name)
    await fillQualification(page, name, {
      reason: 'illness',
      insurance: 'swiss',
    })

    await page.waitForURL('**/admin', { timeout: 20_000 })

    // Don't fill email — try to submit
    await page.getByRole('button', { name: /submit|soumettre/i }).click()

    // Assert: email error visible
    await expect(page.getByText(/this field is required|ce champ est requis/i).first()).toBeVisible()

    await screenshotStep(page, name, 'admin-email-error')

    // Assert: stays on admin page
    await expect(page).toHaveURL(/admin/)
  })

  test('shows error for invalid email format', async ({ page }, testInfo) => {
    const name = `val-admin-bademail-${testInfo.project.name}`
    await navigateToQualification(page, name)
    await fillQualification(page, name, {
      reason: 'illness',
      insurance: 'swiss',
    })

    await page.waitForURL('**/admin', { timeout: 20_000 })

    // Fill invalid email
    await page.locator('#email').fill('not-an-email')

    await page.getByRole('button', { name: /submit|soumettre/i }).click()

    // Assert: email format error
    await expect(page.getByText(/invalid email|format email invalide/i)).toBeVisible()

    await screenshotStep(page, name, 'admin-invalid-email')

    // Assert: stays on admin page
    await expect(page).toHaveURL(/admin/)
  })

  test('shows error for missing employer fields when required', async ({ page }, testInfo) => {
    const name = `val-admin-employer-${testInfo.project.name}`
    await navigateToQualification(page, name)
    await fillQualification(page, name, {
      reason: 'accident',
      insurance: 'swiss',
      hasEmployer: true,
    })

    await page.waitForURL('**/admin', { timeout: 20_000 })

    // Fill common fields + accident + insurance but NOT employer
    await fillAdminCommon(page)
    await page.locator(`#accident-date, [id="date-de-l'accident"]`).first().fill('15.01.2025')
    await fillInsuranceFields(page, { reason: 'accident', insurance: 'swiss' })

    await page.getByRole('button', { name: /submit|soumettre/i }).click()

    // Assert: employer error visible (profession is required)
    await expect(page.getByText(/this field is required|ce champ est requis/i).first()).toBeVisible()

    await screenshotStep(page, name, 'admin-employer-required-error')

    // Assert: stays on admin page
    await expect(page).toHaveURL(/admin/)
  })
})
