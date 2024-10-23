"use client";

import { TextGenerateEffect } from "@saasfly/ui/typewriter-effect";

export function TypewriterEffectSmooths() {
  const words = [
    {
      text: "The",
    },
    {
      text: "intersection",
    },
    {
      text: "of",
    },
    {
      text: "delivery",
    },
    {
      text: "and",
    },
    {
      text: "social",
    },
    {
      text: "media",
    },
    {
      text: "marketing.",
      className: "text-blue-500",
    },
  ];
  return (
    <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
      <TextGenerateEffect words={words} />
    </p>
  );
}
