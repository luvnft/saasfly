"use client";

import Link from "next/link";
import Image from "next/image";

import { ContainerScroll } from "@saasfly/ui/container-scroll-animation";
import { ColourfulText } from "@saasfly/ui/colorful-text";

export function VideoScroll({ dict } : { dict: Record<string, string> | undefined }) {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              {dict?.first_text}<br />
              <span className="mt-1 text-4xl font-bold leading-none md:text-6xl">
                {dict?.second_text1}<ColourfulText text={dict?.time_text ?? ''} />{dict?.second_text2}
              </span>
            </h1>
          </>
        }
      >
        <Link href="https://www.youtube.com/watch?v=FiamD3c2NSY" target="_blank">
          <Image
            src={`https://app.w3w.delivery/wp-content/uploads/2025/09/crypto-bitcoin-deliveries.jpg`}
            alt="hero"
            height={720}
            width={1400}
            className="object-cover object-left-top h-full mx-auto rounded-2xl"
            draggable={false}
          />
        </Link>
      </ContainerScroll>
    </div>
  );
}
