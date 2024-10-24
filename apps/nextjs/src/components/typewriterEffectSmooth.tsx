"use client";

import { TextGenerateEffect } from "@saasfly/ui/typewriter-effect";

export function TypewriterEffectSmooths() {
  const words = [
    {
      text: "Experience",
    },
    {
      text: "the",
    },
    {
      text: "next",
    },
    {
      text: "era",
    },
    {
      text: "of",
    },
    {
      text: "delivery",
    },
    {
      text: "with",
    },
    {
      text: "w3w.delivery.",
      className: "text-blue-500",
    },
  ];
  return (
    <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
      <TextGenerateEffect words={words} />
    </p>
  );
}
