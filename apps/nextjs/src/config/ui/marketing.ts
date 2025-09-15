import type { Locale } from "~/config/i18n-config";
import { getDictionary } from "~/lib/get-dictionary";
import type { MarketingConfig } from "~/types";

export const getMarketingConfig = async ({
  params: { lang },
}: {
  params: {
    lang: Locale;
  };
}): Promise<MarketingConfig> => {
  const dict = await getDictionary(lang);
  return {
    mainNav: [
      {
        title: "Delivery Calculator",
        href: "https://math.w3w.delivery",
      },
      {
        title: dict.marketing.main_nav_features,
        href: `/#features`,
      },
    ],
  };
};
