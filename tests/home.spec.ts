import { test as base, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { allStaticTexts, homeTopSlides } from "../pages/pageData/home";

// Extend base test with a HomePage fixture
const test = base.extend<{ homePage: HomePage }>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await use(homePage);
  },
});

// Test suite for Doris and Co homepage

test.describe("Launch to Doris and Co", () => {
  test("should display Doris and Co logo", async ({ homePage }) => {
    await homePage.checkHeadingVisibility();
  });

  test("should show dropdown menu options when clicked", async ({ homePage }) => {
    await homePage.clickDropdownMenuAndVerifyOptionsDisplayed();
  });

  test("should select a random buck and verify selection", async ({ homePage }) => {
    await homePage.clickDropdownMenuAndVerifyOptionsDisplayed();
    const selectedBuck = await homePage.selectRandomBuckOption();
    // Extract short form from selected buck
    let buckSelectShortForm = selectedBuck === "Auto Location"
      ? "INR"
      : selectedBuck.match(/\(([^)]+)\)/)?.[1] ?? "";
    await expect(homePage.buckSelected).toHaveText(buckSelectShortForm);
  });

  test("should verify the top slide heading, subheading and button", async ({ homePage }) => {
  const topSlideData = await homePage.getCurrentActiveSlideText();
  console.log("topSlideData:", topSlideData);

  const match = homeTopSlides.find(
    (slide) =>
      slide.heading === topSlideData.slideHeading &&
      slide.subHeading === topSlideData.slideSubHeading &&
      slide.button === topSlideData.shopNowButtonText
  );

  expect(match).toBeDefined(); // At least one known slide should match current content
});


  test.only("should verify all static texts", async ({ homePage }) => {
    for (const text of allStaticTexts) {
      const locator = homePage.page.getByText(text, { exact: false });
      // Scroll to the first occurrence and check visibility
      if (await locator.count() > 0) {
        await locator.first().scrollIntoViewIfNeeded();
        await expect(locator.first()).toBeVisible();
      } else {
        throw new Error(`Text not found on page: ${text}`);
      }
    }
    await homePage.verifyFaqsAndTexts();
  });
});
