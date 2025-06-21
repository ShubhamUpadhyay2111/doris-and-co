// pages/pageData/home.ts

export const BUCKS_DISPLAYED = [
  "Auto Location",
  "US Dollar (USD)",
  "Euro (EUR)",
  "British Pound (GBP)",
  "Canadian Dollar (CAD)",
] as const;

export type Buck = (typeof BUCKS_DISPLAYED)[number];

export const homeTopSlides = [
  {
    heading: "Glow Naturally, Blush Beautifully",
    subHeading: "Flawless Color, Lightweight Feel",
    button: "Shop Now",
  },
  {
    heading: "Lipstick That Speaks Volumes",
    subHeading: "Wear Your Mood On Your Lips",
    button: "Shop Now",
  },
] as const;

export const homeFAQs = [
  {
    faq1: "How do I apply the PHOFAY Mousse Liquid Blush?",
    ans1: "To apply, dip the sponge applicator into the product, then dab it onto your cheekbones and other sun-kissed areas. Blend using your fingers or a brush for a flawless, streak-free finish.",
  },
  {
    faq2: "Does it contain SPF protection?",
    ans2: "Yes, it includes SPF to help protect your lips from harmful sun damage while keeping them moisturized.",
  },
  {
    faq3: "Is PHOFAY Moisturizing Lipstick suitable for sensitive lips?",
    ans3: "Yes, it’s formulated with nourishing ingredients to keep even sensitive lips soft and hydrated.",
  },
  {
    faq4: "How do I apply the PHOFAY Highlighter Wand?",
    ans4: "To use, twist open the applicator, squeeze the desired amount onto the sponge, and lock it back in place. Apply 1-2 dots to the high points of your face, such as the cheekbones, brow bones, and cupid's bow. Blend with your fingers or a brush for a seamless finish.",
  },
  {
    faq5: "How often should I use the Deep Collagen Overnight Mask?",
    ans5: "Use it 2-3 times a week for best results, or whenever your skin needs extra hydration and firmness.",
  },
];

export const aboutDorisAndCo = {
  title: "About Doris & Co.",
  description: "At Doris & Co., we provide you with an excellent shopping experience as our clients’ satisfaction matter a lot. We have the perfect combination Makeup Products that are tailored to meet your needs through our standard shopping practice. Even if you are not sure of what you want, our e-shop has got several ways to help you identify your needs.",
}

export const efforLessElegance = {
  title: "Effortless Elegance for Every Look",
  description: "Experience the beauty of simplicity with our Plain Face White Good-looking Lip Lacquer. This lightweight formula delivers a smooth, glossy finish that enhances your natural lip color with a subtle, elegant shine. Perfect for everyday wear or special occasions, it keeps your lips hydrated and radiant without feeling sticky or heavy. Elevate your makeup routine with a lacquer that’s as versatile as you are."
}

export const allStaticTexts = [
  "Instant Radiance Boost",
  "Experience a luminous glow in seconds with the PHOFAY Highlighter Wand. Its creamy formula glides smoothly onto your skin, delivering a natural, radiant finish.",

  "Lightweight & Blendable",
  "This highlighter wand is ultra-lightweight and blends effortlessly for a seamless, airbrushed look. Perfect for all skin types, it enhances your features without feeling heavy.",

  "Long-Lasting Glow",
  "Enjoy a bright, dewy finish that lasts all day. The PHOFAY Highlighter Wand stays put through busy days and special nights without fading or smudging.",

  "Suitable for All Skin Tones",
  "Available in universally flattering shades, the PHOFAY Highlighter Wand complements every skin tone, giving you a customizable glow that feels truly your own.",

  "Why Doris & Co Stands Out In Cosmetics",
  "At Doris & Co, we combine premium-quality ingredients with innovative formulas to deliver cosmetics that not only enhance your natural beauty but also care for your skin. Our products are cruelty-free, long-lasting, and designed for every skin type, making Doris & Co the trusted choice for those who want radiant, healthy, and confident beauty every day.",

  "Illuminate Your Natural Glow With PHOFAY Highlighter Wand",
  "Experience the magic of radiant, glowing skin with the PHOFAY Highlighter Wand — your ultimate beauty essential for a luminous finish. This highlighter wand is expertly crafted to deliver a silky-smooth, blendable formula that effortlessly enhances your natural features. Whether you want a subtle sheen or a bold glow, the lightweight texture glides on easily, leaving no cakey residue or harsh lines. Perfect for highlighting cheekbones, brow bones, the bridge of your nose, and cupid’s bow, the PHOFAY Highlighter Wand adds dimension and brightness to any makeup look.",

  "Deep Hydration And Collagen Boost For Youthful Glow",
  "Wake up to beautifully revitalized skin with the Deep Collagen Overnight Mask. Infused with potent collagen-boosting peptides and hydrating botanicals, this mask provides intense moisture that locks in hydration throughout the night. It strengthens your skin’s natural barrier while improving texture and tone, making your skin look firmer, brighter, and more resilient. Ideal for anyone looking to combat aging signs, this mask delivers long-lasting anti-aging benefits and a glowing, healthy complexion that lasts all day.",

  "What Our Customer Says"
]
