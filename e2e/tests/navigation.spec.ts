import { test, expect } from '@playwright/test'
import {
  navigateToQualification,
  fillQualification,
  fillAdminCommon,
  fillInsuranceFields,
  setOcrScenario,
  resetOcrScenario,
  screenshotStep,
} from '../helpers/flow'

test.describe('Navigation — back and session persistence', () => {
  test.beforeEach(async () => {
    await setOcrScenario('FIXED')
  })

  test.afterEach(async () => {
    await resetOcrScenario()
  })

  test('back from admin preserves qualification choices', async ({ page }, testInfo) => {
    const name = `nav-back-${testInfo.project.name}`
    await navigateToQualification(page, name)
    await fillQualification(page, name, {
      reason: 'accident',
      insurance: 'swiss',
      hasEmployer: true,
    })

    await page.waitForURL('**/admin', { timeout: 20_000 })
    await screenshotStep(page, name, 'admin-before-back')

    // Click back button
    await page.getByRole('button', { name: /back|retour/i }).click()
    await page.waitForURL('**/qualification', { timeout: 5_000 })

    // Assert: reason "Accident" is still selected (check icon visible = selected state)
    const accidentBtn = page.getByRole('button', { name: /^accident$/i })
    await expect(accidentBtn).toBeVisible()

    // Assert: insurance "LAMal" is still selected
    const swissBtn = page.getByRole('button', { name: /lamal/i })
    await expect(swissBtn).toBeVisible()

    // Assert: hasEmployer "Yes" is still selected
    const yesBtn = page.getByRole('button', { name: /^yes$|^oui$/i })
    await expect(yesBtn).toBeVisible()

    // Assert: identity card still uploaded
    await expect(page.getByText('identity-card.png')).toBeVisible()

    // Assert: consent still checked
    await expect(page.locator('#consentNLPD')).toBeChecked()

    await screenshotStep(page, name, 'qualification-preserved')

    // Can continue again to admin
    await page.getByRole('button', { name: /continue|continuer/i }).click()
    await page.waitForURL('**/loading', { timeout: 5_000 })
    await page.waitForURL('**/admin', { timeout: 20_000 })

    await screenshotStep(page, name, 'admin-returned')
  })

  test('refresh on admin preserves form data', async ({ page }, testInfo) => {
    const name = `nav-refresh-${testInfo.project.name}`
    await navigateToQualification(page, name)
    await fillQualification(page, name, {
      reason: 'illness',
      insurance: 'swiss',
    })

    await page.waitForURL('**/admin', { timeout: 20_000 })

    // Fill email before refresh
    await page.locator('#email').fill('persist@example.com')
    await screenshotStep(page, name, 'admin-before-refresh')

    // Refresh the page
    await page.reload()

    // Wait for admin page to re-render
    await expect(page.getByText(/administrative|administratives/i)).toBeVisible({ timeout: 10_000 })

    // Assert: OCR-prefilled fields are preserved (from sessionStorage)
    const firstName = page.locator('#first-name, #prénom').first()
    await expect(firstName).not.toHaveValue('')

    // Assert: email is preserved
    await expect(page.locator('#email')).toHaveValue('persist@example.com')

    await screenshotStep(page, name, 'admin-after-refresh')

    // Can still submit successfully
    await fillAdminCommon(page)
    await fillInsuranceFields(page, { reason: 'illness', insurance: 'swiss' })
    await page.getByRole('button', { name: /submit|soumettre/i }).click()
    await page.waitForURL('**/success', { timeout: 10_000 })
    await expect(page.getByRole('heading', { name: /succès|successfully/i })).toBeVisible()

    await screenshotStep(page, name, 'success-after-refresh')
  })
})
