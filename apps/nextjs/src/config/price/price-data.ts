import { env } from "~/env.mjs";

interface SubscriptionPlanTranslation {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  limitations: string[];
  prices: {
    monthly: number;
    yearly: number;
  };
  stripeIds: {
    monthly: string | null;
    yearly: string | null;
  };
}

export const priceDataMap: Record<string, SubscriptionPlanTranslation[]> = {
  zh: [
    {
      id: "basic",
      title: "基础版",
      description: "适合初学者",
      benefits: ["Discord更新", "每月30次交付", "捐赠产品获得免费交付"],
      limitations: [
        "基于区块链的交付证明",
        "实时交付跟踪",
        "品牌交付证明内容",
        "无影响者交付",
      ],
      prices: {
        monthly: 1111,
        yearly: 12999,
      },
      stripeIds: {
        monthly: null,
        yearly: null,
      },
    },
    {
      id: "influencer",
      title: "影响者版",
      description: "解锁高级功能",
      benefits: [
        "包含基础版所有内容",
        "每月75次交付",
        "5次中级影响者交付（50K-250K粉丝）",
        "优先客户支持",
        "专属网络研讨会和培训",
      ],
      limitations: [
        "无品牌交付证明内容",
        "无实时交付跟踪",
      ],
      prices: {
        monthly: 3333,
        yearly: 38999,
      },
      stripeIds: {
        monthly: env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PRICE_ID,
        yearly: env.NEXT_PUBLIC_STRIPE_PRO_YEARLY_PRICE_ID,
      },
    },
    {
      id: "enterprise",
      title: "企业版",
      description: "适合高级用户",
      benefits: [
        "包含基础版和影响者版所有内容",
        "实时交付跟踪",
        "每月150次交付",
        "区块链交付证明",
        "品牌交付证明内容",
        "每月1次超大影响者交付（1M+粉丝）",
        "直播突袭交付活动",
      ],
      limitations: [],
      prices: {
        monthly: 6666,
        yearly: 77999,
      },
      stripeIds: {
        monthly: env.NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PRICE_ID,
        yearly: env.NEXT_PUBLIC_STRIPE_BUSINESS_YEARLY_PRICE_ID,
      },
    },
  ],
  en: [
    {
      id: "basic",
      title: "Basic",
      description: "For Beginners",
      benefits: [
        "Discord channel for driver updates",
        "30 deliveries a month",
        "Donate a product for a free delivery",
      ],
      limitations: [
        "Blockchain POD (proof of delivery)",
        "Live delivery tracking",
        "Branded POD content",
        "Influencer delivery",
      ],
      prices: {
        monthly: 1111,
        yearly: 12999,
      },
      stripeIds: {
        monthly: null,
        yearly: null,
      },
    },
    {
      id: "influencer",
      title: "Influencer",
      description: "Unlock Advanced Features",
      benefits: [
        "Everything in Basic",
        "75 deliveries a month",
        "5 mid (50K–250K followers) influencer deliveries",
        "Priority customer support",
        "Exclusive webinars and training",
      ],
      limitations: [
        "Branded POD content",
        "Live delivery tracking",
      ],
      prices: {
        monthly: 3333,
        yearly: 38999,
      },
      stripeIds: {
        monthly: env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PRICE_ID,
        yearly: env.NEXT_PUBLIC_STRIPE_PRO_YEARLY_PRICE_ID,
      },
    },
    {
      id: "enterprise",
      title: "Enterprise",
      description: "For Power Users",
      benefits: [
        "Everything in Basic and Influencer.",
        "Live delivery tracking",
        "150 deliveries a month",
        "Blockchain POD (Proof of delivery)",
        "Branded POD",
        "1 mega-influencer delivery (1M+ followers) per month",
        "Live streamed surprise delivery event",
      ],
      limitations: [],
      prices: {
        monthly: 6666,
        yearly: 77999,
      },
      stripeIds: {
        monthly: env.NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PRICE_ID,
        yearly: env.NEXT_PUBLIC_STRIPE_BUSINESS_YEARLY_PRICE_ID,
      },
    },
  ],
  ja: [
    {
      id: "basic",
      title: "ベーシック",
      description: "初心者向け",
      benefits: [
        "Discordでのドライバーアップデート",
        "月に30回の配達",
        "製品を寄付すると無料配達",
      ],
      limitations: [
        "ブロックチェーン配達証明",
        "ライブ配達追跡",
        "ブランド付き配達証明コンテンツ",
        "インフルエンサー配達なし",
      ],
      prices: {
        monthly: 1111,
        yearly: 12999,
      },
      stripeIds: {
        monthly: null,
        yearly: null,
      },
    },
    {
      id: "influencer",
      title: "インフルエンサー",
      description: "高度な機能を解除",
      benefits: [
        "ベーシック版のすべての内容",
        "月に75回の配達",
        "中級インフルエンサー配達5回 (50K–250Kフォロワー)",
        "優先顧客サポート",
        "限定ウェビナーとトレーニング",
      ],
      limitations: [
        "ブランド付き配達証明コンテンツなし",
        "ライブ配達追跡なし",
      ],
      prices: {
        monthly: 3333,
        yearly: 38999,
      },
      stripeIds: {
        monthly: env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PRICE_ID,
        yearly: env.NEXT_PUBLIC_STRIPE_PRO_YEARLY_PRICE_ID,
      },
    },
    {
      id: "enterprise",
      title: "エンタープライズ",
      description: "パワーユーザー向け",
      benefits: [
        "ベーシック版とインフルエンサー版のすべての内容",
        "ライブ配達追跡",
        "月に150回の配達",
        "ブロックチェーン配達証明",
        "ブランド付き配達証明",
        "毎月1回のメガインフルエンサー配達 (1M+フォロワー)",
        "ライブ配信サプライズ配達イベント",
      ],
      limitations: [],
      prices: {
        monthly: 6666,
        yearly: 77999,
      },
      stripeIds: {
        monthly: env.NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PRICE_ID,
        yearly: env.NEXT_PUBLIC_STRIPE_BUSINESS_YEARLY_PRICE_ID,
      },
    },
  ],
  ko: [
    {
      id: "basic",
      title: "베이직",
      description: "초보자를 위한",
      benefits: [
        "Discord에서 드라이버 업데이트",
        "월 30회의 배송",
        "제품 기부 시 무료 배송",
      ],
      limitations: [
        "블록체인 배송 증명 (POD)",
        "실시간 배송 추적",
        "브랜드 배송 증명 콘텐츠",
        "인플루언서 배송 없음",
      ],
      prices: {
        monthly: 1111,
        yearly: 12999,
      },
      stripeIds: {
        monthly: null,
        yearly: null,
      },
    },
    {
      id: "influencer",
      title: "인플루언서",
      description: "고급 기능 잠금 해제",
      benefits: [
        "베이직의 모든 기능",
        "월 75회의 배송",
        "중급 인플루언서 배송 5회 (50K–250K 팔로워)",
        "우선 고객 지원",
        "독점 웨비나 및 교육",
      ],
      limitations: [
        "브랜드 배송 증명 콘텐츠 없음",
        "실시간 배송 추적 없음",
      ],
      prices: {
        monthly: 3333,
        yearly: 38999,
      },
      stripeIds: {
        monthly: env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PRICE_ID,
        yearly: env.NEXT_PUBLIC_STRIPE_PRO_YEARLY_PRICE_ID,
      },
    },
    {
      id: "enterprise",
      title: "엔터프라이즈",
      description: "파워 유저를 위한",
      benefits: [
        "베이직 및 인플루언서의 모든 기능",
        "실시간 배송 추적",
        "월 150회의 배송",
        "블록체인 배송 증명",
        "브랜드 배송 증명",
        "매월 1회의 메가 인플루언서 배송 (1M+ 팔로워)",
        "라이브 스트림 깜짝 배송 이벤트",
      ],
      limitations: [],
      prices: {
        monthly: 6666,
        yearly: 77999,
      },
      stripeIds: {
        monthly: env.NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PRICE_ID,
        yearly: env.NEXT_PUBLIC_STRIPE_BUSINESS_YEARLY_PRICE_ID,
      },
    },
  ],
};
