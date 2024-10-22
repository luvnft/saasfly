"use client";

import React from "react";

import { WobbleCard } from "@saasfly/ui/wobble-card";

export function WobbleCardShow() {
  return (
    <div className="grid w-full grid-cols-1 gap-4 mx-auto max-w-7xl lg:grid-cols-3">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
            Stay Tapped In
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Our drivers keep your branded Discord channel package delivery
            updates to keep you informed and streamline the process.
          </p>
        </div>
        <img
          src="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1080&q=75"
          width={500}
          height={500}
          alt="linear demo"
          className="absolute -bottom-10 -right-4 rounded-2xl object-contain grayscale filter lg:-right-[40%]"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
          Content 
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Reward your customers with delivery content the can share on social
          media.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm text-balance  text-left text-base font-semibold tracking-[-0.015em] text-white md:max-w-lg md:text-xl lg:text-3xl">
            Streamline your social media content starting with deliveries.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            @DELIV3RY content is the new unboxing, make every delivery an event.
          </p>
        </div>
        <img
          src="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1080&q=75"
          width={500}
          height={500}
          alt="linear demo"
          className="absolute -bottom-10 -right-10 rounded-2xl object-contain md:-right-[40%] lg:-right-[20%]"
        />
      </WobbleCard>
    </div>
  );
}
