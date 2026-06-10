/**
 * =============================================
 *  SITE-WIDE CONFIGURATION
 *  Edit values here — they propagate everywhere.
 * =============================================
 */

export const siteConfig = {
  // ── Brand ──────────────────────────────────
  name: "WizardZ",
  tagline: "デジタルの世界を切り拓き、貴社の成功を全力でサポートします。",

  // ── Contact ────────────────────────────────
  email: {
    info: "info@wizardz.jp",
    support: "support@wizardz.jp",
    privacy: "privacy@wizardz.jp",
    legal: "legal@wizardz.jp",
  },
  phone: "03-0000-0000",
  hours: "平日 10:00〜18:00（祝日・年末年始を除く）",
  hoursShort: "月〜金：10:00〜18:00",

  // ── Address ────────────────────────────────
  address: {
    zip: "〒150-0001",
    prefecture: "東京都",
    city: "渋谷区神宮前1-1-1",
    building: "WizardZビル5F",
    /** Single-line version for inline use */
    full: "〒150-0001 東京都渋谷区神宮前1-1-1 WizardZビル5F",
    /** Map display label */
    mapLabel: "東京都渋谷区神宮前1-1-1",
  },

  // ── Pages / URLs ───────────────────────────
  links: {
    home: "/",
    contact: "/contact",
    privacyPolicy: "/privacy-policy",
    termsOfService: "/terms-of-service",
    services: "/#services-section",
    caseStudy: "/#caseStudy-section",
  },

  // ── Legal doc versions ─────────────────────
  legal: {
    privacyVersion: "2.0",
    privacyUpdated: "2024年10月1日",
    termsVersion: "3.1",
    termsUpdated: "2024年10月1日",
  },

  // ── SEO metadata ───────────────────────────
  metadata: {
    titleTemplate: "%s | WizardZ",
    defaultTitle: "WizardZ — デジタル成功への道",
    defaultDescription:
      "WizardZは最先端のデジタルマーケティング戦略でお客様のビジネスを成長させます。",
  },
} as const;
