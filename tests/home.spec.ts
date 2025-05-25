import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { homeTopSlide } from "../pages/pageData/home";

test.describe("Launch to Doris and Co", () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    homePage.goto();
  });

  test("should navigate to Doris and Co and verify title", async ({ page }) => {
    await homePage.checkHeadingVisibility();
  });

  test("should click on the dropdown menu and verify options displayed", async () => {
    await homePage.clickDropdownMenuAndverifyOptionsDisplayed();
  });

  test("should select a random buck and verify it is selected", async () => {
    await homePage.clickDropdownMenuAndverifyOptionsDisplayed();
    const selectedBuck = await homePage.selectRandomBuckOption();

    let buckSelectShortForm;
    if (selectedBuck === "Auto Location") {
      buckSelectShortForm = "INR";
    }
    buckSelectShortForm = selectedBuck.match(/\(([^)]+)\)/)?.[1] ?? "";
    console.log("buckSelectShortForm: " + buckSelectShortForm);
    await expect(homePage.buckSelected).toHaveText(buckSelectShortForm);
  });

  test.only("should verify the top slide heading, subheading and button", async () => {
    const topSlideData = await homePage.getCurrentActiveSlideText();
    console.log("topSlideData: " + JSON.stringify(topSlideData));

    expect(homeTopSlide.heading).toEqual(
      expect.arrayContaining([topSlideData.slideHeading])
    );
    expect(homeTopSlide.subHeading).toEqual(
      expect.arrayContaining([topSlideData.slideSubHeading])
    );
    expect(homeTopSlide.button).toEqual(topSlideData.slideHeading);
  });
});
