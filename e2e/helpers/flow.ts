import { type Page, expect } from '@playwright/test'
import path from 'path'

const FIXTURES_DIR = path.resolve('e2e/fixtures')
const SCREENSHOTS_DIR = path.resolve('e2e/screenshots')

/** Pause for video visibility + take a named screenshot */
export async function screenshotStep(page: Page, testName: string, stepName: string, delayMs = 500) {
  await page.waitForTimeout(delayMs)
  await page.screenshot({
    path: path.join(SCREENSHOTS_DIR, testName, `${stepName}.png`),
    fullPage: true,
  })
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
  // OTP page uses "Verify"/"Vérifier" instead of "Continue"
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
