import { Page, Locator, expect } from "@playwright/test";
import { BUCKS_DISPLAYED } from "./pageData/home";
import { ArrayUtils } from "../utils/arrayUtils";

export class HomePage {
  readonly page: Page;
  readonly heading: Locator;
  readonly dropDownMenuButton: Locator;
  readonly buckSelected: Locator;
  readonly buckDropDownOptions: Locator;

  readonly topSlide: Locator;
  readonly slideHeading: Locator;
  readonly slideButtonShopNow: Locator;
  readonly slideSubHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('//img[@alt="Doris & Co."][last()]');

    this.buckSelected = page.locator('//span[@class="bucks-selected"]');
    this.dropDownMenuButton = page.locator(
      '//div[@class="bucks__folder-collapse_btn"]'
    );
    this.buckDropDownOptions = page.locator(
      '//ul[@class="buckscc-select-options"]//li/span'
    );

    this.topSlide = page.locator(
      '//div[@aria-roledescription="Slide" and contains(@aria-label, "of 2") and @aria-hidden = "false"]'
    );
    this.slideHeading = page.locator(
      `${this.topSlide}//*[contains(@class,"banner__heading")]`
    );
    this.slideButtonShopNow = page.locator(
      `${this.topSlide}//*[@class = "banner__buttons"]/a`
    );
    this.slideSubHeading = page.locator(
      `${this.topSlide}//p[@class="inline-richtext h2"]`
    );
  }

  // Method to navigate to the example page
  async goto() {
    await this.page.goto("./");
  }

  // Method to check if the page title matches
  async checkHeadingVisibility(): Promise<void> {
    await expect(this.heading).toBeVisible();
  }

  async clickDropdownMenuAndverifyOptionsDisplayed(): Promise<void> {
    await this.dropDownMenuButton.click();

    await expect(this.buckDropDownOptions).toHaveText(BUCKS_DISPLAYED);
  }

  async selectRandomBuckOption(): Promise<string> {
    const randomBuckToBeSelected: string =
      ArrayUtils.getRandomElement(BUCKS_DISPLAYED);

    console.log("randomBuckToBeSelected: " + randomBuckToBeSelected);
    await this.page
      .locator("span.bucksItem", { hasText: randomBuckToBeSelected })
      .click();

    return randomBuckToBeSelected;
  }

  async getCurrentActiveSlideText(): Promise<{
    slideHeading: string;
    slideSubHeading: string;
    shopNowButtonText: string;
  }> {
    // first hover over the top slide so that auto animation stops
    await this.topSlide.hover();

    // get all text
    const slideHeadingText = await this.slideHeading.textContent();
    const slideSubHeadingText = await this.slideSubHeading.textContent();
    const shopNowButtonText = await this.slideButtonShopNow.textContent();

    return {
      slideHeading: slideHeadingText || "",
      slideSubHeading: slideSubHeadingText || "",
      shopNowButtonText: shopNowButtonText || "",
    };
  }
}
