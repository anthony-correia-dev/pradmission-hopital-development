import { defineConfig, devices } from '@playwright/test'

const E2E_PORT = 5174
const MOCK_PORT = 3002

export default defineConfig({
  testDir: './e2e/tests',
  timeout: 60_000,
  expect: { timeout: 10_000 },
  fullyParallel: false,
  workers: 1,
  retries: 0,
  use: {
    baseURL: `http://localhost:${E2E_PORT}`,
    video: 'on',
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'desktop',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 720 } },
    },
    {
      name: 'tablet',
      use: { viewport: { width: 720, height: 1024 }, isMobile: false },
    },
    {
      name: 'mobile',
      use: { viewport: { width: 320, height: 568 }, isMobile: true },
    },
  ],
  webServer: [
    {
      command: `npm --prefix mock-server run dev`,
      url: `http://localhost:${MOCK_PORT}/_api/serverlogics/getflows`,
      reuseExistingServer: !process.env.CI,
      timeout: 15_000,
      env: {
        MOCK_PORT: String(MOCK_PORT),
      },
    },
    {
      command: `npx vite --port ${E2E_PORT} --strictPort`,
      url: `http://localhost:${E2E_PORT}`,
      reuseExistingServer: !process.env.CI,
      timeout: 30_000,
      env: {
        API_TARGET: `http://localhost:${MOCK_PORT}`,
      },
    },
  ],
  outputDir: 'e2e/test-results',
})
