# Test info

- Name: Launch to Doris and Co >> should verify the top slide heading, subheading and button
- Location: /home/shubhamupadhyay/Desktop/ workspace-practice/play-automation-framework/tests/home.spec.ts:34:8

# Error details

```
Error: locator.textContent: Unexpected token "locator(" while parsing css selector "locator('//div[@aria-roledescription="Slide" and contains(@aria-label, "of 2") and @aria-hidden = "false"]')//*[contains(@class,"banner__heading")]". Did you mean to CSS.escape it?
Call log:
  - waiting for locator('//div[@aria-roledescription="Slide" and contains(@aria-label, "of 2") and @aria-hidden = "false"]')//*[contains(@class,"banner__heading")]

    at HomePage.getCurrentActiveSlideText (/home/shubhamupadhyay/Desktop/ workspace-practice/play-automation-framework/pages/homePage.ts:77:54)
    at /home/shubhamupadhyay/Desktop/ workspace-practice/play-automation-framework/tests/home.spec.ts:35:26
```

# Page snapshot

```yaml
- link "Skip to content":
  - /url: "#MainContent"
- region "Announcement bar":
  - button "Previous announcement":
    - img
  - group "1 of 2":
    - region "Announcement":
      - paragraph: Free Shipping After $60
  - button "Next announcement":
    - img
- banner:
  - heading "Doris & Co. Doris & Co." [level=1]:
    - link "Doris & Co. Doris & Co.":
      - /url: /
      - img "Doris & Co."
      - img "Doris & Co."
  - navigation:
    - list:
      - listitem:
        - link "HOME":
          - /url: /
      - listitem:
        - link "SHOP":
          - /url: /collections/all
      - listitem:
        - link "ABOUT US":
          - /url: /pages/about-us
      - listitem:
        - link "CONTACT US":
          - /url: /pages/contact
      - listitem:
        - link "FAQ's":
          - /url: /pages/faqs
  - link "Log in":
    - /url: https://shopify.com/58373668997/account?locale=en&region_country=IN
  - button "Cart":
    - img
    - text: Cart
  - text: INR
  - img
  - list:
    - listitem: Auto Location
    - listitem: US Dollar (USD)
    - listitem: Euro (EUR)
    - listitem: British Pound (GBP)
    - listitem: Canadian Dollar (CAD)
- main:
  - region "Slideshow about our brand":
    - group "1 of 2":
      - img
      - paragraph: Wear Your Mood On Your Lips
      - heading "Lipstick That Speaks Volumes" [level=2]
      - link "SHOP NOW":
        - /url: /collections/all
  - paragraph: Best-Sellers from Every Corner of the Globe.
  - paragraph: Best-Sellers from Every Corner of the Globe.
  - paragraph: Best-Sellers from Every Corner of the Globe.
  - paragraph: Best-Sellers from Every Corner of the Globe.
  - paragraph: Best-Sellers from Every Corner of the Globe.
  - paragraph: Best-Sellers from Every Corner of the Globe.
  - paragraph: Best-Sellers from Every Corner of the Globe.
  - paragraph: Best-Sellers from Every Corner of the Globe.
  - paragraph: Best-Sellers from Every Corner of the Globe.
  - paragraph: Best-Sellers from Every Corner of the Globe.
  - paragraph: Best-Sellers from Every Corner of the Globe.
  - paragraph: Best-Sellers from Every Corner of the Globe.
  - paragraph: Best-Sellers from Every Corner of the Globe.
  - paragraph: Best-Sellers from Every Corner of the Globe.
  - paragraph: Best-Sellers from Every Corner of the Globe.
  - heading "About Doris & Co." [level=2]
  - paragraph: At Doris & Co., we provide you with an excellent shopping experience as our clients’ satisfaction matter a lot. We have the perfect combination Makeup Products that are tailored to meet your needs through our standard shopping practice. Even if you are not sure of what you want, our e-shop has got several ways to help you identify your needs.
  - link "READ MORE":
    - /url: /pages/about-us
  - img
  - heading "OUR PRODUCTS" [level=2]
  - list "Slider":
    - listitem:
      - img "PHOFAY Mousse Liquid Blush"
      - list
      - heading "PHOFAY Mousse Liquid Blush" [level=3]:
        - link "PHOFAY Mousse Liquid Blush":
          - /url: /products/phofay-mousse-liquid-blush
      - text: Regular price ₹ 1,702.74
      - button "Choose options PHOFAY Mousse Liquid Blush": Choose options
    - listitem:
      - img "Waterproof Long Lasting Glaze Lip Gloss"
      - list
      - heading "Waterproof Long Lasting Glaze Lip Gloss" [level=3]:
        - link "Waterproof Long Lasting Glaze Lip Gloss":
          - /url: /products/glossy-lip-glaze-waterproof-long-lasting-lip-gloss-glossy-mirror-tea-red-liquid-lipstick-doodle-lip-korean-makeup
      - text: Regular price From ₹ 1,021.64
      - button "Choose options Waterproof Long Lasting Glaze Lip Gloss": Choose options
    - listitem:
      - img "Ultra-Glossy Lip Gloss"
      - list
      - heading "Ultra-Glossy Lip Gloss" [level=3]:
        - link "Ultra-Glossy Lip Gloss":
          - /url: /products/ultra-glossy-lip-gloss
      - text: Regular price ₹ 1,361.34
      - button "Choose options Ultra-Glossy Lip Gloss": Choose options
    - listitem:
      - img "Face Night Mask Collagen Wrapping Mask Natural Ingredients Firming Elasticity & Hydration Anti-wrinkle For Skin Care"
      - list
      - heading "Face Night Mask Collagen Wrapping Mask Natural Ingredients Firming Elasticity & Hydration Anti-wrinkle For Skin Care" [level=3]:
        - link "Face Night Mask Collagen Wrapping Mask Natural Ingredients Firming Elasticity & Hydration Anti-wrinkle For Skin Care":
          - /url: /products/face-night-mask-collagen-wrapping-mask-natural-ingredients-firming-elasticity-hydration-anti-wrinkle-for-skin-care
      - text: Regular price ₹ 2,128.42
      - button "Choose options Face Night Mask Collagen Wrapping Mask Natural Ingredients Firming Elasticity & Hydration Anti-wrinkle For Skin Care": Choose options
    - listitem:
      - img "Tinted Eyebrow Gel"
      - list
      - heading "Tinted Eyebrow Gel" [level=3]:
        - link "Tinted Eyebrow Gel":
          - /url: /products/phofay-tinted-eyebrow-gel
      - text: Regular price ₹ 1,701.88
      - button "Choose options Tinted Eyebrow Gel": Choose options
    - listitem:
      - img "Antioxidant Ginkgo Gel Booster"
      - list:
        - listitem:
          - img
          - text: Save 14%
      - heading "Antioxidant Ginkgo Gel Booster Save [%]" [level=3]:
        - link "Antioxidant Ginkgo Gel Booster Save [%]":
          - /url: /products/antioxidant-ginkgo-gel-booster
          - text: Antioxidant Ginkgo Gel Booster
      - text: Regular price ₹ 2,979.79 Sale price ₹ 2,553.25
      - button "Add to cart Antioxidant Ginkgo Gel Booster": Add to cart
    - listitem:
      - img "Sun Protection SPF50 Stick, with tint"
      - list:
        - listitem:
          - img
          - text: Save 30%
      - heading "Sun Protection SPF50 Stick, with tint Save [%]" [level=3]:
        - link "Sun Protection SPF50 Stick, with tint Save [%]":
          - /url: /products/sun-protection-spf50-stick-with-tint-1
          - text: Sun Protection SPF50 Stick, with tint
      - text: Regular price ₹ 4,256.84 Sale price ₹ 2,979.79
      - button "Add to cart Sun Protection SPF50 Stick, with tint": Add to cart
    - listitem:
      - img "Sun Protection SPF50 Stick, with tint"
      - list:
        - listitem:
          - img
          - text: Save 40%
      - heading "Sun Protection SPF50 Stick, with tint Save [%]" [level=3]:
        - link "Sun Protection SPF50 Stick, with tint Save [%]":
          - /url: /products/sun-protection-spf50-stick-with-tint
          - text: Sun Protection SPF50 Stick, with tint
      - text: Regular price ₹ 4,256.84 Sale price ₹ 2,553.25
      - button "Add to cart Sun Protection SPF50 Stick, with tint": Add to cart
  - img
  - img
  - heading [level=2]
  - paragraph
  - heading "Effortless Elegance for Every Look" [level=2]
  - paragraph: Experience the beauty of simplicity with our Plain Face White Good-looking Lip Lacquer. This lightweight formula delivers a smooth, glossy finish that enhances your natural lip color with a subtle, elegant shine. Perfect for everyday wear or special occasions, it keeps your lips hydrated and radiant without feeling sticky or heavy. Elevate your makeup routine with a lacquer that’s as versatile as you are.
  - link "VIEW PRODUCT":
    - /url: /products/plain-face-white-good-looking-lip-lacquer
  - img
  - heading [level=2]
  - paragraph
  - heading "Instant Radiance Boost" [level=4]
  - paragraph: Experience a luminous glow in seconds with the PHOFAY Highlighter Wand. Its creamy formula glides smoothly onto your skin, delivering a natural, radiant finish.
  - heading "Long-Lasting Glow" [level=4]
  - paragraph: Enjoy a bright, dewy finish that lasts all day. The PHOFAY Highlighter Wand stays put through busy days and special nights without fading or smudging.
  - heading "Lightweight & Blendable" [level=4]
  - paragraph: This highlighter wand is ultra-lightweight and blends effortlessly for a seamless, airbrushed look. Perfect for all skin types, it enhances your features without feeling heavy.
  - heading "Suitable for All Skin Tones" [level=4]
  - paragraph: Available in universally flattering shades, the PHOFAY Highlighter Wand complements every skin tone, giving you a customizable glow that feels truly your own.
  - region "Slideshow about our brand":
    - group "1 of 1":
      - img
      - paragraph: Long-Lasting Shine, No Compromise
      - heading "Waterproof Beauty, On Your Terms" [level=2]
      - link "SHOP NOW":
        - /url: /collections/all
  - region "Announcement":
    - paragraph: Smudge-Proof Shine, Anytime
  - region "Announcement":
    - paragraph: Shine That Won’t Wash Away
  - region "Announcement":
    - paragraph: Smudge-Proof Shine, Anytime
  - region "Announcement":
    - paragraph: Shine That Won’t Wash Away
  - region "Announcement":
    - paragraph: Smudge-Proof Shine, Anytime
  - region "Announcement":
    - paragraph: Shine That Won’t Wash Away
  - region "Announcement":
    - paragraph: Smudge-Proof Shine, Anytime
  - region "Announcement":
    - paragraph: Shine That Won’t Wash Away
  - region "Announcement":
    - paragraph: Smudge-Proof Shine, Anytime
  - region "Announcement":
    - paragraph: Shine That Won’t Wash Away
  - region "Announcement":
    - paragraph: Smudge-Proof Shine, Anytime
  - region "Announcement":
    - paragraph: Shine That Won’t Wash Away
  - region "Announcement":
    - paragraph: Smudge-Proof Shine, Anytime
  - region "Announcement":
    - paragraph: Shine That Won’t Wash Away
  - region "Announcement":
    - paragraph: Smudge-Proof Shine, Anytime
  - region "Announcement":
    - paragraph: Shine That Won’t Wash Away
  - region "Announcement":
    - paragraph: Smudge-Proof Shine, Anytime
  - region "Announcement":
    - paragraph: Shine That Won’t Wash Away
  - region "Announcement":
    - paragraph: Smudge-Proof Shine, Anytime
  - region "Announcement":
    - paragraph: Shine That Won’t Wash Away
  - heading "Why Doris & Co Stands Out In Cosmetics" [level=2]
  - paragraph: At Doris & Co, we combine premium-quality ingredients with innovative formulas to deliver cosmetics that not only enhance your natural beauty but also care for your skin. Our products are cruelty-free, long-lasting, and designed for every skin type, making Doris & Co the trusted choice for those who want radiant, healthy, and confident beauty every day.
  - table:
    - rowgroup:
      - row "Doris & Co. Others":
        - cell
        - cell "Doris & Co."
        - cell "Others"
    - rowgroup:
      - row "Paraben-Free":
        - cell "Paraben-Free":
          - heading "Paraben-Free" [level=3]
        - cell:
          - img
        - cell
      - row "Dermatologically Tested":
        - cell "Dermatologically Tested":
          - heading "Dermatologically Tested" [level=3]
        - cell:
          - img
        - cell
      - row "Sulfate-Free":
        - cell "Sulfate-Free":
          - heading "Sulfate-Free" [level=3]
        - cell:
          - img
        - cell
      - row "Hypoallergenic (Suitable for Sensitive Skin)":
        - cell "Hypoallergenic (Suitable for Sensitive Skin)":
          - heading "Hypoallergenic (Suitable for Sensitive Skin)" [level=3]
        - cell:
          - img
        - cell
      - row "Phthalate-Free":
        - cell "Phthalate-Free":
          - heading "Phthalate-Free" [level=3]
        - cell:
          - img
        - cell
      - row "Cruelty-Free (Not Tested on Animals)":
        - cell "Cruelty-Free (Not Tested on Animals)":
          - heading "Cruelty-Free (Not Tested on Animals)" [level=3]
        - cell:
          - img
        - cell
  - heading "Illuminate Your Natural Glow With PHOFAY Highlighter Wand" [level=2]
  - paragraph: Experience the magic of radiant, glowing skin with the PHOFAY Highlighter Wand — your ultimate beauty essential for a luminous finish. This highlighter wand is expertly crafted to deliver a silky-smooth, blendable formula that effortlessly enhances your natural features. Whether you want a subtle sheen or a bold glow, the lightweight texture glides on easily, leaving no cakey residue or harsh lines. Perfect for highlighting cheekbones, brow bones, the bridge of your nose, and cupid’s bow, the PHOFAY Highlighter Wand adds dimension and brightness to any makeup look.
  - link "SHOP NOW":
    - /url: /products/phofay-highlighter-wand
  - heading "Deep Hydration And Collagen Boost For Youthful Glow" [level=2]
  - paragraph: Wake up to beautifully revitalized skin with the Deep Collagen Overnight Mask. Infused with potent collagen-boosting peptides and hydrating botanicals, this mask provides intense moisture that locks in hydration throughout the night. It strengthens your skin’s natural barrier while improving texture and tone, making your skin look firmer, brighter, and more resilient. Ideal for anyone looking to combat aging signs, this mask delivers long-lasting anti-aging benefits and a glowing, healthy complexion that lasts all day.
  - link "SHOP NOW":
    - /url: /products/deep-collagen-overnight-mask-the-real-collagen-facial-sheet-masks-with-low-molecular-weight-collagen-for-elasticity-firming
  - heading "Frequently Asked Questions" [level=2]
  - group:
    - button "How do I apply the PHOFAY Mousse Liquid Blush?":
      - heading "How do I apply the PHOFAY Mousse Liquid Blush?" [level=3]
      - img
  - group:
    - button "Does it contain SPF protection?":
      - heading "Does it contain SPF protection?" [level=3]
      - img
  - group:
    - button "Is PHOFAY Moisturizing Lipstick suitable for sensitive lips?":
      - heading "Is PHOFAY Moisturizing Lipstick suitable for sensitive lips?" [level=3]
      - img
  - group:
    - button "How do I apply the PHOFAY Highlighter Wand?":
      - heading "How do I apply the PHOFAY Highlighter Wand?" [level=3]
      - img
  - group:
    - button "How often should I use the Deep Collagen Overnight Mask?":
      - heading "How often should I use the Deep Collagen Overnight Mask?" [level=3]
      - img
  - img
  - heading "What Our Customer Says" [level=2]
  - list:
    - listitem:
      - img
      - img
      - img
      - img
      - img
      - paragraph: I absolutely love the PHOFAY Mousse Liquid Blush! The texture is so light and airy, it blends effortlessly into my skin without feeling heavy or cakey. The color stays vibrant all day, and it gives my cheeks a natural, healthy glow.
      - text: Anna L
    - listitem:
      - img
      - img
      - img
      - img
      - img
      - paragraph: This lipstick is amazing for dry lips. I noticed a big difference in how moisturized my lips feel after wearing it. The shades are beautiful and perfect for everyday wear. I only wish it had a little more staying power, but overall, it’s a great product.
      - text: Emily R
    - listitem:
      - img
      - img
      - img
      - img
      - img
      - paragraph: This highlighter wand is a game-changer. I use it for both subtle daytime shimmer and a more intense glow for nights out. Plus, it doesn’t feel greasy or heavy. Highly recommend for anyone who wants a natural-looking highlight.
      - text: Sarah L
  - img
- img
- strong: FAST SHIPPING
- img
- strong: RETURN POLICY
- img
- strong: CUSTOMER CARE
- img "feature-item-4"
- strong: SECURE PAYMENTS
- heading "Subscribe to our emails" [level=2]
- paragraph: Be the first to know about new collections and exclusive offers.
- textbox "Email"
- text: Email
- button "Subscribe"
- paragraph:
  - strong: Free Shipping
- paragraph:
  - strong: Best Price
- paragraph:
  - strong: 24/7 Customer Support
- paragraph:
  - strong: Free Shipping
- paragraph:
  - strong: Best Price
- paragraph:
  - strong: 24/7 Customer Support
- paragraph:
  - strong: Free Shipping
- paragraph:
  - strong: Best Price
- paragraph:
  - strong: 24/7 Customer Support
- paragraph:
  - strong: Free Shipping
- paragraph:
  - strong: Best Price
- paragraph:
  - strong: 24/7 Customer Support
- paragraph:
  - strong: Free Shipping
- paragraph:
  - strong: Best Price
- paragraph:
  - strong: 24/7 Customer Support
- paragraph:
  - strong: Free Shipping
- paragraph:
  - strong: Best Price
- paragraph:
  - strong: 24/7 Customer Support
- paragraph:
  - strong: Free Shipping
- paragraph:
  - strong: Best Price
- paragraph:
  - strong: 24/7 Customer Support
- paragraph:
  - strong: Free Shipping
- paragraph:
  - strong: Best Price
- paragraph:
  - strong: 24/7 Customer Support
- paragraph:
  - strong: Free Shipping
- paragraph:
  - strong: Best Price
- paragraph:
  - strong: 24/7 Customer Support
- paragraph:
  - strong: Free Shipping
- paragraph:
  - strong: Best Price
- paragraph:
  - strong: 24/7 Customer Support
- paragraph:
  - strong: Free Shipping
- paragraph:
  - strong: Best Price
- paragraph:
  - strong: 24/7 Customer Support
- paragraph:
  - strong: Free Shipping
- paragraph:
  - strong: Best Price
- paragraph:
  - strong: 24/7 Customer Support
- paragraph:
  - strong: Free Shipping
- paragraph:
  - strong: Best Price
- paragraph:
  - strong: 24/7 Customer Support
- paragraph:
  - strong: Free Shipping
- paragraph:
  - strong: Best Price
- paragraph:
  - strong: 24/7 Customer Support
- paragraph:
  - strong: Free Shipping
- paragraph:
  - strong: Best Price
- paragraph:
  - strong: 24/7 Customer Support
- contentinfo:
  - button "Contact Us"
  - paragraph:
    - link "sales@doriscosmetics.com":
      - /url: mailto:sales@doriscosmetics.com
  - button "Customer Care"
  - list:
    - listitem:
      - link "About Us":
        - /url: /pages/about-us
    - listitem:
      - link "Contact Us":
        - /url: /pages/contact
    - listitem:
      - link "FAQ's":
        - /url: /pages/faqs
    - listitem:
      - link "Track Order":
        - /url: /apps/parcelpanel
  - button "Our Policies"
  - list:
    - listitem:
      - link "Privacy Policy":
        - /url: /pages/privacy-policy
    - listitem:
      - link "Refund Policy":
        - /url: /pages/refund-policy
    - listitem:
      - link "Shipping Policy":
        - /url: /pages/shipping-policy
    - listitem:
      - link "Terms Of Service":
        - /url: /pages/terms-of-service
  - button "About Doris & Co."
  - paragraph: At Doris & Co. we provide you with an excellent shopping experience as our clients’ satisfaction matter a lot. We have the perfect combination Makeup Products that are tailored to meet your needs through our standard shopping practice.
  - text: Payment methods
  - list:
    - listitem:
      - img "Visa"
    - listitem:
      - img "Mastercard"
    - listitem:
      - img "PayPal"
    - listitem:
      - img "Apple Pay"
    - listitem:
      - img "Shop Pay"
    - listitem:
      - img "Google Pay"
  - text: © 2025,
  - link "Doris & Co.":
    - /url: /
  - text: "- Theme by"
  - link "LuminTheme":
    - /url: https://lumintheme.com/
    - text: Lumin
    - emphasis: Theme
  - text: © 2024
- button "Chat window" [expanded]:
  - img
  - text: Chat
```

# Test source

```ts
   1 | import { Page, Locator, expect } from "@playwright/test";
   2 | import { BUCKS_DISPLAYED } from "./pageData/home";
   3 | import { ArrayUtils } from "../utils/arrayUtils";
   4 |
   5 | export class HomePage {
   6 |   readonly page: Page;
   7 |   readonly url: string = "https://doriscosmetics.com";
   8 |   readonly heading: Locator;
   9 |   readonly dropDownMenuButton: Locator;
  10 |   readonly buckSelected: Locator;
  11 |   readonly buckDropDownOptions: Locator;
  12 |
  13 |   readonly topSlide: Locator;
  14 |   readonly slideHeading: Locator;
  15 |   readonly slideButtonShopNow: Locator;
  16 |   readonly slideSubHeading: Locator;
  17 |
  18 |   constructor(page: Page) {
  19 |     this.page = page;
  20 |     this.heading = page.locator('//img[@alt="Doris & Co."][last()]');
  21 |
  22 |     this.buckSelected = page.locator('//span[@class="bucks-selected"]');
  23 |     this.dropDownMenuButton = page.locator(
  24 |       '//div[@class="bucks__folder-collapse_btn"]'
  25 |     );
  26 |     this.buckDropDownOptions = page.locator(
  27 |       '//ul[@class="buckscc-select-options"]//li/span'
  28 |     );
  29 |
  30 |     this.topSlide = page.locator(
  31 |       '//div[@aria-roledescription="Slide" and contains(@aria-label, "of 2") and @aria-hidden = "false"]'
  32 |     );
  33 |     this.slideHeading = page.locator(`${this.topSlide}//*[contains(@class,"banner__heading")]`);
  34 |
  35 |     this.slideButtonShopNow = page.locator(`${this.topSlide}//*[@class = "banner__buttons"]/a`);
  36 |     this.slideSubHeading = page.locator(`${this.topSlide}//p[@class="inline-richtext h2"]`);
  37 |   }
  38 |
  39 |   // Method to navigate to the example page
  40 |   async goto() {
  41 |     await this.page.goto(this.url);
  42 |   }
  43 |
  44 |   // Method to check if the page title matches
  45 |   async checkHeadingVisibility(): Promise<void> {
  46 |     await expect(this.heading).toBeVisible();
  47 |   }
  48 |
  49 |   async clickDropdownMenuAndverifyOptionsDisplayed(): Promise<void> {
  50 |     await this.dropDownMenuButton.click();
  51 |
  52 |     await expect(this.buckDropDownOptions).toHaveText(BUCKS_DISPLAYED);
  53 |   }
  54 |
  55 |   async selectRandomBuckOption(): Promise<string> {
  56 |     const randomBuckToBeSelected: string =
  57 |       ArrayUtils.getRandomElement(BUCKS_DISPLAYED);
  58 |
  59 |     console.log("randomBuckToBeSelected: " + randomBuckToBeSelected);
  60 |     await this.page
  61 |       .locator("span.bucksItem", { hasText: randomBuckToBeSelected })
  62 |       .click();
  63 |
  64 |     return randomBuckToBeSelected;
  65 |   }
  66 |
  67 |   async getCurrentActiveSlideText(): Promise<{
  68 |     slideHeading: string;
  69 |     slideSubHeading: string;
  70 |     shopNowButtonText: string;
  71 |   }> {
  72 |
  73 |     // first hover over the top slide so that auto animation stops
  74 |     await this.topSlide.hover();
  75 |
  76 |     // get all text
> 77 |     const slideHeadingText = await this.slideHeading.textContent();
     |                                                      ^ Error: locator.textContent: Unexpected token "locator(" while parsing css selector "locator('//div[@aria-roledescription="Slide" and contains(@aria-label, "of 2") and @aria-hidden = "false"]')//*[contains(@class,"banner__heading")]". Did you mean to CSS.escape it?
  78 |     const slideSubHeadingText = await this.slideSubHeading.textContent();
  79 |     const shopNowButtonText = await this.slideButtonShopNow.textContent();
  80 |
  81 |     return {
  82 |       slideHeading: slideHeadingText || "",
  83 |       slideSubHeading: slideSubHeadingText || "",
  84 |       shopNowButtonText: shopNowButtonText || "",
  85 |     };
  86 |   }
  87 | }
  88 |
```