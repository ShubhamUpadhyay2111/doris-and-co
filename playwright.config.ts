// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';


// // Define environment variables for different base URLs
// const BASE_URL_PROD = 'https://doriscosmetics.com';
// const BASE_URL_DEV = 'http://localhost:3000'; // not valid url
// const BASE_URL_STAGING = 'https://staging.your-app.com'; // not valid url

// // Determine the base URL based on an environment variable, e.g., TEST_ENV
// const selectedBaseUrl = process.env.TEST_ENV === 'staging'
//   ? BASE_URL_STAGING
//   : process.env.TEST_ENV === 'development'
//     ? BASE_URL_DEV
//     : BASE_URL_PROD; // Default to production URL if TEST_ENV is not set or recognized


export default defineConfig({
  testDir: './tests', // Specifies where your tests are located
  fullyParallel: true, // Run tests in files in parallel
  // forbidOnly: !!process.env.CI, // Disallow .only on CI
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
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],

  // Add the 'use' object for general Playwright options applicable to all projects
  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: 'https://doriscosmetics.com',

    // Setting the slowMo for local debugging
    // This value is in milliseconds. 1000 means 1 second delay.
    launchOptions: {
      slowMo: 1000, // Add slowMo here for debugging
    },
    
    // To run in headful mode for local debugging:
    // headless: process.env.CI ? false : true,
    
    // Collect trace when retrying the failed test.
    trace: 'on',

    video: 'on',
    screenshot: 'on'
  },
});