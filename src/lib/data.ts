export interface FeatureItem {
  id: number;
  img: string;
  heading: string;
  desc: string;
}

export interface WorkItem {
  no: number;
  img: string;
  heading: string;
  desc: string;
}

export interface PricingPlan {
  id: number;
  isPopular: boolean;
  planName: string;
  price: number;
  buttonText: string;
  benefits: string[];
  variantId: string | null;
}

export interface FooterLink {
  text: string;
  href: string;
}

export interface NavLink {
  text: string;
  link: string;
}

export const featureData: FeatureItem[] = [
  {
    id: 1,
    img: "/images/features/organizing-data.svg",
    heading: "スマートタスク整理",
    desc: "Thinklyは優先度・締め切り・重要度に基づいてタスクを自動整理します",
  },
  {
    id: 2,
    img: "/images/features/key-insights.svg",
    heading: "AIによる計画立案",
    desc: "Thinklyがあなたの1日を最適化し、より速く賢く働けるプランを作成します",
  },
  {
    id: 3,
    img: "/images/features/programming.svg",
    heading: "集中モード",
    desc: "Thinklyが余分な通知を排除し、本当に重要なことへの深い集中をサポートします",
  },
  {
    id: 4,
    img: "/images/features/server-status.svg",
    heading: "クラウド同期",
    desc: "どのデバイスからでも、いつでもどこでも作業にアクセスできます",
  },
];

export const workData: WorkItem[] = [
  {
    no: 1,
    img: "/images/works/deep-work.svg",
    heading: "タスクを入力する",
    desc: "やること・目標・タスクをThinklyに入力するだけ",
  },
  {
    no: 2,
    img: "/images/works/artificial-intelligence.svg",
    heading: "AIに考えさせる",
    desc: "AIが分析・優先順位付け・整理をすべて自動で行います",
  },
  {
    no: 3,
    img: "/images/works/success.svg",
    heading: "成果を出す",
    desc: "スマートプランに従って、1日中生産的に動き続けましょう",
  },
];

export const pricingData: PricingPlan[] = [
  {
    id: 1,
    isPopular: false,
    planName: "スタータープラン",
    price: 0,
    buttonText: "無料で始める",
    benefits: [
      "基本タスク整理",
      "1日のプランニング",
      "AI提案（制限あり）",
      "シングルワークスペース",
    ],
    variantId: null,
  },
  {
    id: 2,
    isPopular: true,
    planName: "プロプラン",
    price: 1800,
    buttonText: "プロにアップグレード",
    benefits: [
      "タスク無制限",
      "高度なAIプランニング",
      "スマートリマインダー",
      "集中モード",
      "優先サポート",
    ],
    variantId: process.env.NEXT_PUBLIC_LS_PRO_VARIANT_ID ?? null,
  },
  {
    id: 3,
    isPopular: false,
    planName: "チームプラン",
    price: 4400,
    buttonText: "チームで始める",
    benefits: [
      "プロの全機能",
      "チームコラボレーション",
      "共有ダッシュボード",
      "管理者コントロール",
      "チーム分析",
    ],
    variantId: process.env.NEXT_PUBLIC_LS_TEAM_VARIANT_ID ?? null,
  },
];

export const footerLinks: FooterLink[] = [
  {
    text: "機能",
    href: "features",
  },
  {
    text: "使い方",
    href: "howitworks",
  },
  {
    text: "料金プラン",
    href: "pricing",
  },
  {
    text: "プライバシーポリシー",
    href: "/privacy-policy",
  },
  {
    text: "利用規約",
    href: "/terms-of-service",
  },
];

export const desktopNavLinks: NavLink[] = [
  {
    text: "ホーム",
    link: "#",
  },
  {
    text: "機能",
    link: "features",
  },
  {
    text: "使い方",
    link: "howitworks",
  },
  {
    text: "料金プラン",
    link: "pricing",
  },
];
