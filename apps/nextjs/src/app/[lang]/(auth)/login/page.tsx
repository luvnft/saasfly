import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@saasfly/ui";
import { buttonVariants } from "@saasfly/ui/button";
import * as Icons from "@saasfly/ui/icons";

import { UserAuthForm } from "~/components/user-auth-form";
import type { Locale } from "~/config/i18n-config";
import { getDictionary } from "~/lib/get-dictionary";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default async function LoginPage({
  params: { lang },
}: {
  params: {
    lang: Locale;
  };
}) {
  const dict = await getDictionary(lang);
  return (
    <div className="container flex flex-col items-center justify-center w-screen h-screen">
      <Link
        href="https://solvice.w3w.delivery"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8",
        )}
      >
        <>
          <Icons.ChevronLeft className="w-4 h-4 mr-2" />
          Service
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Image
            src="/images/avatars/saasfly-logo.svg"
            className="mx-auto"
            width="64"
            height="64"
            alt=""
          />
          <h1 className="text-2xl font-semibold tracking-tight">
            {dict.login.welcome_back}
          </h1>
          <p className="text-sm text-muted-foreground">
            {dict.login.signin_title}
          </p>
        </div>
        <UserAuthForm lang={lang} dict={dict.login} />
        <p className="px-8 text-sm text-center text-muted-foreground">
          <Link
            href="https://discord.gg/YEQCwtSHzb"
            className="underline hover:text-brand underline-offset-4"
          >
            Driver
          </Link>
        </p>
      </div>
    </div>
  );
}
