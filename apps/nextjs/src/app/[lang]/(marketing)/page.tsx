import Link from "next/link";

import * as Icons from "@saasfly/ui/icons";

import { XBlogArticle } from "~/components/blog-card";
import { Comments } from "~/components/comments";
import { DocumentGuide } from "~/components/document-guide";
import { FeaturesCard } from "~/components/features-card";
import { Meteorss } from "~/components/meteors-card";
import { Questions } from "~/components/questions";
import ShimmerButton from "~/components/shimmer-button";
import { TypewriterEffectSmooths } from "~/components/typewriterEffectSmooth";
import { WobbleCardShow } from "~/components/wobble";
import { WordReveal } from "~/components/word-reveal";
import type { Locale } from "~/config/i18n-config";
import { getDictionary } from "~/lib/get-dictionary";
import type { Meteor } from "~/types/meteors";

const meteors_data: Meteor = {
  name: "Join our Discord",
  description:
    "Join our Discord server to chat about your delivery needs.",
  button_content: "Chat with us",
  url: "https://discord.gg/YEQCwtSHzb",
};

export default async function IndexPage({
  params: { lang },
}: {
  params: {
    lang: Locale;
  };
}) {
  const dict = await getDictionary(lang);

  return (
    <>
      <section className="w-full px-8 sm:px-48 md:px-48 xl:h-[100vh] xl:px-48">
        <div className="grid grid-cols-1 gap-10 pb-10 md:pb-40 xl:grid-cols-2">
          <div className="flex flex-col items-start">
            <div className="flex flex-col pt-4 md:pt-28 lg:pt-28 xl:pt-28">
              <Link href="https://tiktok.com/@deliv3ry" target="_blank">
                <DocumentGuide>
                  {dict.marketing.introducing || "Follow @DELIV3RY on TikTok"}
                </DocumentGuide>
              </Link>

              <div className="mt-6">
                <h1 className="relative max-w-4xl mb-6 text-4xl font-bold text-left dark:text-zinc-100 sm:text-7xl md:text-7xl xl:text-7xl">
                  {dict.marketing.title ||
                    "W3W.delivery: A 3-word delivery service powered by social media influencers and What3Words."}
                </h1>
              </div>

              <div>
                <span className="text-zinc-500 sm:text-xl">
                  {dict.marketing.sub_title ||
                    "Showcasing deliveries on social media with images, videos, or live feeds"}
                </span>
                <TypewriterEffectSmooths />
              </div>

              <div className="flex flex-col justify-center w-full mt-6 mb-4 space-y-4 sm:flex-row sm:justify-start sm:space-x-8 sm:space-y-0">
                <Link href="https://solvice.w3w.delivery" target="_blank">
                  <ShimmerButton className="flex justify-center mx-auto">
                    <span className="z-10 w-48 whitespace-pre bg-gradient-to-b from-black from-30% to-gray-300/80 bg-clip-text text-center text-sm font-semibold leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 dark:text-transparent">
                      {dict.marketing.get_started}
                    </span>
                  </ShimmerButton>
                </Link>

                <Link href="https://tiktok.com/@deliv3ry" target="_blank">
                  <div className="flex items-center justify-center h-full">
                    <span className="text-base font-semibold">
                      {dict.marketing.view_on_github || "DM @Deliv3ry To Order"}
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden w-full h-full xl:block">
            <div className="flex flex-col pt-28">
              <Meteorss meteor={meteors_data} />
              <div className="flex justify-between w-full mt-4">
                <XBlogArticle />
                <div className="ml-4">
                  <FeaturesCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hidden h-[100vh] w-full xl:block">
        <div className="flex h-full w-full justify-between px-[220px]">
          <div className="flex w-[60%] flex-col pr-4 pt-40">
            <WobbleCardShow />
          </div>
          <div className="h-full w-[40%]">
            <div className="flex flex-col pl-[120px]">
              <WordReveal />
            </div>
          </div>
        </div>
      </section>

      <section className="hidden h-[100vh] w-full xl:block">
        <div className="flex h-full w-full justify-between px-[220px]">
          <div className="flex w-[60%] flex-col pr-4 pt-40">
            <div className="px-[120px]">
              <Questions />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-8 xl:hidden">
        <Questions />
      </section>

      <section className="w-full px-8 pt-10 sm:px-0 sm:pt-0 md:px-0 md:pt-0 xl:px-0 xl:pt-0">
        <div className="flex h-full w-full flex-col items-center pb-[100px] pt-10">
          <div>
            <h1 className="mb-6 text-3xl font-bold text-center dark:text-zinc-100 md:text-5xl">
              What People Are Saying
            </h1>
          </div>
          <div className="mb-6 text-xl dark:text-zinc-100 md:text-xl">
            Don’t just take our word for it. Here’s what{" "}
            <span className="font-bold">real people</span> are saying about
            W3W.delivery.
          </div>

          <div className="w-full overflow-x-hidden">
            <Comments />
          </div>
        </div>
      </section>
    </>
  );
}
