import { test as base, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { homeTopSlide } from "../pages/pageData/home";

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

  test("should verify top slide heading, subheading, and button", async ({ homePage }) => {
    const topSlideData = await homePage.getCurrentActiveSlideText();
    expect(homeTopSlide.heading).toEqual(
      expect.arrayContaining([topSlideData.slideHeading])
    );
    expect(homeTopSlide.subHeading).toEqual(
      expect.arrayContaining([topSlideData.slideSubHeading])
    );
    expect(homeTopSlide.button).toEqual(topSlideData.shopNowButtonText);
  });

  test("should click all FAQs", async ({ homePage }) => {
    await homePage.scrollToAndClickAllFAQs();
  });
});
