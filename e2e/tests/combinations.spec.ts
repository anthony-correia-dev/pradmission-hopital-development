import { test, expect } from '@playwright/test'
import {
  navigateToQualification,
  fillQualification,
  fillAdminCommon,
  fillEmployerFields,
  fillAccidentFields,
  fillInsuranceFields,
  submitAdminAndVerifySuccess,
  setOcrScenario,
  resetOcrScenario,
  screenshotStep,
} from '../helpers/flow'

test.describe('Form combinations — all reason x insurance', () => {
  test.beforeEach(async () => {
    await setOcrScenario('FIXED')
  })

  test.afterEach(async () => {
    await resetOcrScenario()
  })

  // ---- Illness combinations ----
  // (illness + swiss is covered by happy-path.spec.ts)

  test('illness + international', async ({ page }, testInfo) => {
    const name = `illness-intl-${testInfo.project.name}`
    await navigateToQualification(page, name)
    await fillQualification(page, name, {
      reason: 'illness',
      insurance: 'international',
    })

    await page.waitForURL('**/admin', { timeout: 20_000 })
    await screenshotStep(page, name, 'admin-initial')

    // Assert: accident section NOT visible
    await expect(page.getByText(/accident data|données accident/i)).not.toBeVisible()

    // Assert: policy number IS visible (international only)
    await expect(page.locator(`#basic-insurance----policy-number, [id="assurance-de-base---n°-de-police"]`).first()).toBeVisible()

    // Assert: card number is NOT visible (hidden for international)
    await expect(page.locator(`#basic-insurance-card-number, [id="n°-de-carte-d'assurance-de-base"]`).first()).not.toBeVisible()

    await fillAdminCommon(page)
    await fillInsuranceFields(page, { reason: 'illness', insurance: 'international' })
    await submitAdminAndVerifySuccess(page, name)
  })

  test('illness + auto (self-payer)', async ({ page }, testInfo) => {
    const name = `illness-auto-${testInfo.project.name}`
    await navigateToQualification(page, name)
    await fillQualification(page, name, {
      reason: 'illness',
      insurance: 'auto',
    })

    await page.waitForURL('**/admin', { timeout: 20_000 })
    await screenshotStep(page, name, 'admin-initial')

    // Assert: accident section NOT visible
    await expect(page.getByText(/accident data|données accident/i)).not.toBeVisible()

    // Assert: policy number NOT visible
    await expect(page.locator(`#basic-insurance----policy-number, [id="assurance-de-base---n°-de-police"]`).first()).not.toBeVisible()

    await fillAdminCommon(page)
    // Auto: most insurance fields optional, minimal filling needed
    await fillInsuranceFields(page, { reason: 'illness', insurance: 'auto' })
    await submitAdminAndVerifySuccess(page, name)
  })

  // ---- Accident combinations ----

  test('accident + swiss + employer', async ({ page }, testInfo) => {
    const name = `accident-swiss-emp-${testInfo.project.name}`
    await navigateToQualification(page, name)
    await fillQualification(page, name, {
      reason: 'accident',
      insurance: 'swiss',
      hasEmployer: true,
    })

    await page.waitForURL('**/admin', { timeout: 20_000 })
    await screenshotStep(page, name, 'admin-initial')

    // Assert: accident section IS visible
    await expect(page.getByText(/accident data|données accident/i)).toBeVisible()

    // Assert: employer fields show required (no "Optional" label on profession)
    await expect(page.locator('#profession')).toBeVisible()

    await fillAdminCommon(page)
    await fillEmployerFields(page)
    await fillAccidentFields(page)
    await fillInsuranceFields(page, { reason: 'accident', insurance: 'swiss' })
    await submitAdminAndVerifySuccess(page, name)
  })

  test('accident + international + no employer', async ({ page }, testInfo) => {
    const name = `accident-intl-noemp-${testInfo.project.name}`
    await navigateToQualification(page, name)
    await fillQualification(page, name, {
      reason: 'accident',
      insurance: 'international',
      hasEmployer: false,
    })

    await page.waitForURL('**/admin', { timeout: 20_000 })
    await screenshotStep(page, name, 'admin-initial')

    // Assert: accident section IS visible
    await expect(page.getByText(/accident data|données accident/i)).toBeVisible()

    // Assert: policy number IS visible (international)
    await expect(page.locator(`#basic-insurance----policy-number, [id="assurance-de-base---n°-de-police"]`).first()).toBeVisible()

    // Assert: card number NOT visible (international)
    await expect(page.locator(`#basic-insurance-card-number, [id="n°-de-carte-d'assurance-de-base"]`).first()).not.toBeVisible()

    await fillAdminCommon(page)
    await fillAccidentFields(page)
    await fillInsuranceFields(page, { reason: 'accident', insurance: 'international' })
    await submitAdminAndVerifySuccess(page, name)
  })

  test('accident + auto + employer', async ({ page }, testInfo) => {
    const name = `accident-auto-emp-${testInfo.project.name}`
    await navigateToQualification(page, name)
    await fillQualification(page, name, {
      reason: 'accident',
      insurance: 'auto',
      hasEmployer: true,
    })

    await page.waitForURL('**/admin', { timeout: 20_000 })
    await screenshotStep(page, name, 'admin-initial')

    // Assert: accident section IS visible
    await expect(page.getByText(/accident data|données accident/i)).toBeVisible()

    await fillAdminCommon(page)
    await fillEmployerFields(page)
    await fillAccidentFields(page)
    await fillInsuranceFields(page, { reason: 'accident', insurance: 'auto' })
    await submitAdminAndVerifySuccess(page, name)
  })
})

test.describe('Insurance card optional — skip upload', () => {
  test.beforeEach(async () => {
    await setOcrScenario('FIXED')
  })

  test.afterEach(async () => {
    await resetOcrScenario()
  })

  test('illness + international without insurance card', async ({ page }, testInfo) => {
    const name = `illness-intl-nocard-${testInfo.project.name}`
    await navigateToQualification(page, name)

    // Verify insurance card shows "(Optional)" for international
    await page.getByRole('button', { name: /illness|maladie/i }).click()
    await page.getByRole('button', { name: /other insurance|autre assurance/i }).click()
    await expect(page.getByText(/optional|optionnel/i).first()).toBeVisible()

    await fillQualification(page, name, {
      reason: 'illness',
      insurance: 'international',
      uploadInsuranceCard: false,
    })

    await page.waitForURL('**/admin', { timeout: 20_000 })

    // Contact fields should NOT be pre-filled (no insurance OCR ran)
    const street = page.locator('#street, #rue').first()
    await expect(street).toHaveValue('')

    await fillAdminCommon(page)
    await fillInsuranceFields(page, { reason: 'illness', insurance: 'international' })
    await submitAdminAndVerifySuccess(page, name)
  })
})
