"use client";

import React, { useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

import { Button } from "@saasfly/ui/button";
import * as Icons from "@saasfly/ui/icons";

import { Modal } from "~/components/modal";
import { siteConfig } from "~/config/site";
import { useSigninModal } from "~/hooks/use-signin-modal";

export const SignInModal = ({ dict }: { dict: Record<string, string> }) => {
  const signInModal = useSigninModal();
  const [signInClicked, setSignInClicked] = useState(false);

  return (
    <Modal showModal={signInModal.isOpen} setShowModal={signInModal.onClose}>
      <div className="w-full">
        <div className="flex flex-col items-center justify-center px-4 py-6 pt-8 space-y-3 text-center border-b border-neutral-200 dark:border-neutral-800 bg-background md:px-16">
          <a href={siteConfig.url}>
            <Image
              src="/images/avatars/w3wdelivery-logo.svg"
              className="mx-auto"
              width="64"
              height="64"
              alt=""
            />
          </a>
          <h3 className="text-2xl font-bold font-urban">{dict.signup}</h3>
          <p className="text-sm text-gray-500 dark:text-zinc-400">{dict.privacy}</p>
        </div>

        <div className="flex flex-col px-4 py-8 space-y-4 md:px-16">
          <Button
            variant="default"
            disabled={signInClicked}
            onClick={() => {
              setSignInClicked(true);
              signIn("github", { redirect: false })
                .then(() =>
                  setTimeout(() => {
                    signInModal.onClose();
                  }, 1000),
                )
                .catch((error) => {
                  console.error("signUp failed:", error);
                });
            }}
          >
            {signInClicked ? (
              <Icons.Spinner className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <Icons.GitHub className="w-4 h-4 mr-2" />
            )}{" "}
            {dict.signup_github}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
