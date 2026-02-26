import { type Page, expect, request as playwrightRequest } from '@playwright/test'
import path from 'path'

const FIXTURES_DIR = path.resolve('e2e/fixtures')
const SCREENSHOTS_DIR = path.resolve('e2e/screenshots')
const MOCK_SERVER_URL = 'http://localhost:3002'

/** Pause for video visibility + take a named screenshot */
export async function screenshotStep(page: Page, testName: string, stepName: string, delayMs = 500) {
  await page.waitForTimeout(delayMs)
  await page.screenshot({
    path: path.join(SCREENSHOTS_DIR, testName, `${stepName}.png`),
    fullPage: true,
  })
}

/**
 * Set the OCR scenario on the mock server at runtime.
 * Calls the mock server directly (not through Vite proxy).
 */
export async function setOcrScenario(scenario: string) {
  const ctx = await playwrightRequest.newContext()
  await ctx.post(`${MOCK_SERVER_URL}/_test/scenario`, {
    data: { ocrScenario: scenario },
  })
  await ctx.dispose()
}

/**
 * Reset the mock server OCR scenario to default (SUCCESS).
 */
export async function resetOcrScenario() {
  const ctx = await playwrightRequest.newContext()
  await ctx.post(`${MOCK_SERVER_URL}/_test/reset`)
  await ctx.dispose()
}

/**
 * Navigate from landing through OTP to qualification page.
 * Takes screenshots at each route for visual verification.
 */
export async function navigateToQualification(page: Page, testName: string) {
  await page.goto('/?preadmissionId=test123')

  // Wait for validation to complete (~2.8s: 2s Power Pages init + 800ms API)
  // and landing page to appear
  const startButton = page.getByRole('button', { name: /start|démarrer/i })
  await startButton.waitFor({ timeout: 15_000 })
  await screenshotStep(page, testName, '01-landing')
  await startButton.click()

  // Security page — fill birth date DD.MM.YYYY
  await page.waitForURL('**/security')
  await screenshotStep(page, testName, '02-security-empty')
  await page.locator('input').first().fill('12.06.1989')
  await screenshotStep(page, testName, '03-security-filled')
  await page.getByRole('button', { name: /continue|continuer/i }).click()

  // OTP page — fill 6-digit code
  await page.waitForURL('**/otp')
  await screenshotStep(page, testName, '04-otp-empty')
  // The input-otp library renders an absolute-positioned input over the slots
  await page.locator('[data-input-otp]').fill('123456')
  await screenshotStep(page, testName, '05-otp-filled')

  // Wait for verify button to be enabled (requires 6 digits)
  // OTP page uses "Vérifier"/"Verify"
  const otpVerify = page.getByRole('button', { name: /verify|vérifier/i })
  await expect(otpVerify).toBeEnabled({ timeout: 5_000 })
  await otpVerify.click()

  // Arrive at qualification
  await page.waitForURL('**/qualification')
  await screenshotStep(page, testName, '06-qualification-empty')
}

/**
 * Fill the qualification form (illness + swiss insurance + files + consent) and submit.
 * Takes screenshots at key moments.
 */
export async function fillQualificationAndContinue(page: Page, testName: string) {
  // Select reason: Illness
  await page.getByRole('button', { name: /illness|maladie/i }).click()

  // Select insurance: Swiss/LAMal
  await page.getByRole('button', { name: /lamal/i }).click()

  // Upload identity card (first file input)
  await page.locator('input[type="file"]').first().setInputFiles(
    path.join(FIXTURES_DIR, 'identity-card.png')
  )
  // Wait for identity card to show as uploaded (file input gets replaced by success state)
  await page.getByText('identity-card.png').waitFor({ timeout: 5_000 })

  // Upload insurance card (now the only remaining file input)
  await page.locator('input[type="file"]').first().setInputFiles(
    path.join(FIXTURES_DIR, 'insurance-card.png')
  )

  // Check NLPD consent
  await page.locator('#consentNLPD').click()

  await screenshotStep(page, testName, '07-qualification-filled')

  // Button is always enabled — click immediately
  const continueBtn = page.getByRole('button', { name: /continue|continuer/i })
  await continueBtn.click()
}

// ---- Flexible qualification fill ----

export interface QualificationOptions {
  reason: 'illness' | 'accident'
  insurance: 'swiss' | 'international' | 'auto'
  hasEmployer?: boolean
  uploadInsuranceCard?: boolean // default: true
}

/**
 * Fill the qualification form with flexible options and submit.
 */
export async function fillQualification(page: Page, testName: string, options: QualificationOptions) {
  // Select reason
  if (options.reason === 'illness') {
    await page.getByRole('button', { name: /illness|maladie/i }).click()
  } else {
    await page.getByRole('button', { name: /^accident$/i }).click()
    // Wait for hasEmployer section to animate in
    await page.waitForTimeout(400)
    if (options.hasEmployer === true) {
      await page.getByRole('button', { name: /^yes$|^oui$/i }).click()
    } else if (options.hasEmployer === false) {
      await page.getByRole('button', { name: /^no$|^non$/i }).click()
    }
  }

  // Select insurance
  if (options.insurance === 'swiss') {
    await page.getByRole('button', { name: /lamal/i }).click()
  } else if (options.insurance === 'international') {
    await page.getByRole('button', { name: /other insurance|autre assurance/i }).click()
  } else {
    await page.getByRole('button', { name: /self-payer|autopayeur/i }).click()
  }

  // Upload identity card (always required)
  await page.locator('input[type="file"]').first().setInputFiles(
    path.join(FIXTURES_DIR, 'identity-card.png')
  )
  await page.getByText('identity-card.png').waitFor({ timeout: 5_000 })

  // Upload insurance card (optional for international/auto)
  const uploadInsurance = options.uploadInsuranceCard ?? true
  if (uploadInsurance) {
    await page.locator('input[type="file"]').first().setInputFiles(
      path.join(FIXTURES_DIR, 'insurance-card.png')
    )
  }

  // Check NLPD consent
  await page.locator('#consentNLPD').click()

  await screenshotStep(page, testName, '07-qualification-filled')

  // Click continue
  await page.getByRole('button', { name: /continue|continuer/i }).click()
}

// ---- Admin page helpers ----

/** Fill an input only if it's currently empty */
async function fillIfEmpty(page: Page, selector: string, value: string) {
  const el = page.locator(selector).first()
  if (await el.inputValue() === '') {
    await el.fill(value)
  }
}

/** Fill the country combobox if not already set */
async function fillCountryIfEmpty(page: Page) {
  const input = page.locator('#country')
  const currentValue = await input.inputValue()
  if (!currentValue) {
    await input.click()
    await input.fill('Switz')
    await page.locator('.absolute.z-50').getByText(/Switzerland|Suisse/).first().click()
  }
}

/**
 * Fill common admin fields (identity assumed OCR-prefilled, fills contact + email).
 */
export async function fillAdminCommon(page: Page) {
  // Identity: pre-filled by FIXED OCR (firstName, lastName, gender, nationality)
  // Contact: may or may not be pre-filled by insurance OCR
  await fillIfEmpty(page, '#street, #rue', 'Rue de Test 1')
  await fillIfEmpty(page, '#postal-code, [id="npa-(code-postal)"]', '1200')
  await fillIfEmpty(page, '#city, #ville', 'Genève')
  await fillCountryIfEmpty(page)

  // Email (never pre-filled by OCR)
  await page.locator('#email').fill('test@example.com')
}

/**
 * Fill employer fields (required for accident + hasEmployer).
 */
export async function fillEmployerFields(page: Page) {
  await page.locator('#profession').fill('Engineer')
  await fillIfEmpty(page, `#employer-name, [id="nom-de-l'employeur"]`, 'ACME Corp')
  await fillIfEmpty(page, `#employer-address, [id="adresse-de-l'employeur"]`, '123 Business St')
}

/**
 * Fill accident section fields.
 */
export async function fillAccidentFields(page: Page) {
  await page.locator(`#accident-date, [id="date-de-l'accident"]`).first().fill('15.01.2025')
}

/**
 * Fill insurance fields based on combination.
 */
export async function fillInsuranceFields(page: Page, options: { reason: string; insurance: string }) {
  if (options.insurance === 'swiss') {
    await fillIfEmpty(page, `#ahv-number, [id="numéro-avs"]`, '7561234567890')
    await fillIfEmpty(page, `#basic-insurance-name, [id="nom-de-l'assurance-de-base"]`, 'CSS')
    await fillIfEmpty(page, `#basic-insurance-card-number, [id="n°-de-carte-d'assurance-de-base"]`, '80756012345678901234')
  } else if (options.insurance === 'international') {
    await fillIfEmpty(page, `#basic-insurance-name, [id="nom-de-l'assurance-de-base"]`, 'Allianz Intl')
    await page.locator(`#basic-insurance----policy-number, [id="assurance-de-base---n°-de-police"]`).first().fill('POL-12345')
  }

  // For accident: basicInsurance is always required, cardNumber required (except international)
  if (options.reason === 'accident' && options.insurance !== 'swiss' && options.insurance !== 'international') {
    await fillIfEmpty(page, `#basic-insurance-name, [id="nom-de-l'assurance-de-base"]`, 'Some Insurance')
    await fillIfEmpty(page, `#basic-insurance-card-number, [id="n°-de-carte-d'assurance-de-base"]`, '80756012345678901234')
  }
  if (options.reason === 'accident' && options.insurance === 'international') {
    await fillIfEmpty(page, `#basic-insurance-name, [id="nom-de-l'assurance-de-base"]`, 'Allianz Intl')
  }
}

/**
 * Submit the admin form and verify success page.
 */
export async function submitAdminAndVerifySuccess(page: Page, testName: string) {
  await screenshotStep(page, testName, 'admin-filled')
  await page.getByRole('button', { name: /submit|soumettre/i }).click()
  await page.waitForURL('**/success', { timeout: 10_000 })
  await expect(page.getByRole('heading', { name: /succès|successfully/i })).toBeVisible()
  await screenshotStep(page, testName, 'success')
}
