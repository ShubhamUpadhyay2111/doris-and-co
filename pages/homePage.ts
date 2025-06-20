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

  readonly faqs1: Locator;
  readonly faqs2: Locator;
  readonly faqs3: Locator;
  readonly faqs4: Locator;
  readonly faqs5: Locator;

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

    this.faqs1 = page.locator(
      '//*[contains(text(), "How do I apply the PHOFAY Mousse Liquid Blush?")]'
    );
    this.faqs2 = page.locator(
      '//*[contains(text(), "Does it contain SPF protection?")]'
    );
    this.faqs3 = page.locator(
      '//*[contains(text(), "Is PHOFAY Moisturizing Lipstick suitable for sensitive lips?")]'
    );
    this.faqs4 = page.locator(
      '//*[contains(text(), "How do I apply the PHOFAY Highlighter Wand?")]'
    );
    this.faqs5 = page.locator(
      '//*[contains(text(), "How often should I use the Deep Collagen Overnight Mask?")]'
    );
  }

  // Method to navigate to the example page
  async goto() {
    await this.page.goto("");
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


  async scrollToAndClickAllFAQs () {
    const faqs = [this.faqs1, this.faqs2, this.faqs3, this.faqs4, this.faqs5];

    for (const faq of faqs) {
      await faq.scrollIntoViewIfNeeded();
      await faq.click();
    }
  }
}
