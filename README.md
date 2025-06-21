# Doris & Co.

A simple automation framework using TypeScript and Playwright for end-to-end testing of the Doris & Co. website.

## Table of Contents
- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Test Reports](#test-reports)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Writing Tests](#writing-tests)
- [Troubleshooting](#troubleshooting)

## Project Overview
This repository contains automated tests for the Doris & Co. website using Playwright and TypeScript. It covers UI flows such as navigation, dropdowns, slides, and FAQ interactions.

## Prerequisites
- Node.js (v16 or above recommended)
- npm (v8 or above)

## Installation
1. Clone the repository:
    ```bash
    git clone <repo-url>
    cd doris-and-co
    ```
2. Install dependencies:
    ```bash
    npm ci
    ```

## Running Tests
- To run all tests in headless mode (default):
    ```bash
    npm test
    ```
- To run tests with UI (for debugging):
    ```bash
    npx playwright test --headed
    ```
- To run tests for a specific browser:
    ```bash
    npx playwright test --project=chromium
    npx playwright test --project=firefox
    npx playwright test --project=webkit
    ```
- To run a specific test file:
    ```bash
    npx playwright test tests/home.spec.ts
    ```

## Test Reports
- After running tests, an HTML report is generated. To view it:
    ```bash
    npx playwright show-report
    ```
- JUnit XML reports are also generated for CI/CD integration (`junit-results.xml`).

## Project Structure
```
├── pages/           # Page Object Models
│   ├── homePage.ts
│   └── pageData/
├── tests/           # Test files
│   └── home.spec.ts
├── utils/           # Utility functions
│   └── arrayUtils.ts
├── playwright.config.ts # Playwright configuration
├── package.json
├── tsconfig.json
└── README.md
```

## Configuration
- The base URL and browser settings are managed in `playwright.config.ts`.
- By default, tests run against `https://doriscosmetics.com`.
- To adjust timeouts, retries, or add more browsers, edit the config file.

## Writing Tests
- Test files are located in the `tests/` directory and use Playwright's test runner.
- Page Object Models are in the `pages/` directory for maintainability.
- Example test usage:
    ```typescript
    import { test, expect } from '@playwright/test';
    import { HomePage } from '../pages/homePage';
    test('example', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      await homePage.checkHeadingVisibility();
    });
    ```

## Troubleshooting
- If tests fail, check the Playwright HTML report for details.
- Ensure all dependencies are installed and Node.js is up to date.
- For debugging, use `--headed` and `--debug` flags.

## Resources
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
