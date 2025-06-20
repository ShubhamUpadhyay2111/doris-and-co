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
  readonly faqs: Locator[];

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
    this.slideHeading = this.topSlide.locator(
      '//*[contains(@class,"banner__heading")]'
    );
    this.slideButtonShopNow = this.topSlide.locator(
      '//*[@class = "banner__buttons"]/a'
    );
    this.slideSubHeading = this.topSlide.locator("p.inline-richtext.h2");
    this.faqs = [
      page.locator(
        '//*[contains(text(), "How do I apply the PHOFAY Mousse Liquid Blush?")]'
      ),
      page.locator('//*[contains(text(), "Does it contain SPF protection?")]'),
      page.locator(
        '//*[contains(text(), "Is PHOFAY Moisturizing Lipstick suitable for sensitive lips?")]'
      ),
      page.locator(
        '//*[contains(text(), "How do I apply the PHOFAY Highlighter Wand?")]'
      ),
      page.locator(
        '//*[contains(text(), "How often should I use the Deep Collagen Overnight Mask?")]'
      ),
    ];
  }

  async goto(): Promise<void> {
    await this.page.goto("");
  }

  async checkHeadingVisibility(): Promise<void> {
    await expect(this.heading).toBeVisible();
  }

  async clickDropdownMenuAndVerifyOptionsDisplayed(): Promise<void> {
    await this.dropDownMenuButton.click();
    await expect(this.buckDropDownOptions).toHaveText(BUCKS_DISPLAYED);
  }

  async selectRandomBuckOption(): Promise<string> {
    const randomBuckToBeSelected = ArrayUtils.getRandomElement(BUCKS_DISPLAYED);
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
    await this.topSlide.hover();
    const slideHeadingText = await this.slideHeading.textContent();
    const slideSubHeadingText = await this.slideSubHeading.textContent();
    const shopNowButtonText = await this.slideButtonShopNow.textContent();
    return {
      slideHeading: slideHeadingText || "",
      slideSubHeading: slideSubHeadingText || "",
      shopNowButtonText: shopNowButtonText || "",
    };
  }

  async scrollToAndClickAllFAQs(): Promise<void> {
    for (const faq of this.faqs) {
      await faq.scrollIntoViewIfNeeded();
      await faq.click();
    }
  }
}
