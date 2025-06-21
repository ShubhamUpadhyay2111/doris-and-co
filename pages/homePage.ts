import { Page, Locator, expect } from "@playwright/test";
import { aboutDorisAndCo, BUCKS_DISPLAYED, homeFAQs } from "./pageData/home";
import { ArrayUtils } from "../utils/arrayUtils";

/**
 * HomePage class encapsulates all Playwright interactions and assertions for the Doris & Co. homepage.
 */
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
  readonly faqs: { question: Locator; answer: Locator }[];
  readonly aboutSection: { title: Locator; description: Locator };

  /**
   * Constructs a HomePage instance and initializes all locators.
   * @param page Playwright Page object
   */
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
      {
        question: page.locator(`//*[contains(text(), "${homeFAQs[0].faq1}")]`),
        answer: page.locator(`//*[contains(text(), "${homeFAQs[0].ans1}")]`),
      },
      {
        question: page.locator(`//*[contains(text(), "${homeFAQs[1].faq2}")]`),
        answer: page.locator(`//*[contains(text(), "${homeFAQs[1].ans2}")]`),
      },
      {
        question: page.locator(`//*[contains(text(), "${homeFAQs[2].faq3}")]`),
        answer: page.locator(`//*[contains(text(), "${homeFAQs[2].ans3}")]`),
      },
      {
        question: page.locator(`//*[contains(text(), "${homeFAQs[3].faq4}")]`),
        answer: page.locator(`//*[contains(text(), "${homeFAQs[3].ans4}")]`),
      },
      {
        question: page.locator(`//*[contains(text(), "${homeFAQs[4].faq5}")]`),
        answer: page.locator(`//*[contains(text(), "${homeFAQs[4].ans5}")]`),
      },
    ];

    this.aboutSection = {
      title: page.locator(`//h2[contains(text(), "${aboutDorisAndCo.title}")]`),
      description: page.locator(
        `//p[contains(text(), "${aboutDorisAndCo.description}")]`
      ),
    }
  }

  /**
   * Navigates to the homepage (base URL).
   */
  async goto(): Promise<void> {
    await this.page.goto("");
  }

  /**
   * Asserts that the Doris & Co. logo heading is visible.
   */
  async checkHeadingVisibility(): Promise<void> {
    await expect(this.heading).toBeVisible();
  }

  /**
   * Clicks the dropdown menu and verifies all buck options are displayed.
   */
  async clickDropdownMenuAndVerifyOptionsDisplayed(): Promise<void> {
    await this.dropDownMenuButton.click();
    await expect(this.buckDropDownOptions).toHaveText(BUCKS_DISPLAYED);
  }

  /**
   * Selects a random buck option from the dropdown and returns its name.
   * @returns The name of the randomly selected buck option.
   */
  async selectRandomBuckOption(): Promise<string> {
    const randomBuckToBeSelected = ArrayUtils.getRandomElement(
      BUCKS_DISPLAYED.slice()
    );
    await this.page
      .locator("span.bucksItem", { hasText: randomBuckToBeSelected })
      .click();
    return randomBuckToBeSelected;
  }

  /**
   * Gets the text content of the current active slide (heading, subheading, button).
   * @returns An object containing the slide heading, subheading, and button text.
   */
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

  /**
   * Iterates through all FAQs, asserts their visibility, clicks them, and checks their answers are visible.
   */
  async verifyFaqsAndTexts(): Promise<void> {
    for (const faq of this.faqs) {
      await expect(faq.question).toBeVisible();
      await faq.question.click();
      await expect(faq.answer).toBeVisible();
    }
  }
}
