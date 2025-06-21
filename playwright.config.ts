// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Specifies where your tests are located
  fullyParallel: true, // Run tests in files in parallel
  forbidOnly: !!process.env.CI, // Disallow .only on CI
  retries: process.env.CI ? 2 : 0, // Retry on CI
  workers: process.env.CI ? 1 : undefined, // Opt for one worker on CI, default on local
  reporter:  [
    ['html'], // For local interactive reports
    ['junit', { outputFile: 'junit-results.xml' }] // For CI/CD tools
  ], // Use the HTML reporter by default

  // Configure projects for major browsers
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

  // General Playwright options applicable to all projects
  use: {
    baseURL: 'https://doriscosmetics.com',
    launchOptions: {
      slowMo: process.env.CI ? 0 : 1000, // SlowMo only for local debugging
    },
    // headless: process.env.CI ? true : false, // Uncomment to control headless mode
    trace: 'on',
    video: 'on',
    screenshot: 'on',
  },
});