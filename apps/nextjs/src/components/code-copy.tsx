"use client"

import { useState } from "react"
import * as Icons from "@saasfly/ui/icons";

export function CodeCopy() {
  const [copied, setCopied] = useState(false)
  const walletAddress = "w3wdelivery.fun"
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(walletAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <div className="space-y-2">
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Send crypto for deliveries or tip your driver 🚗💨
      </p>
      <div className="flex items-center justify-between max-w-xs px-3 border rounded-lg h-14 bg-neutral-200 dark:bg-neutral-700/40 border-neutral-300 dark:border-neutral-600">
        <div className="flex items-center flex-1 min-w-0 space-x-2 font-mono text-neutral-700 dark:text-neutral-300">
          <span className="flex-shrink-0 text-sm">👛</span>
          <span className="overflow-hidden text-xs truncate select-all">
            {walletAddress}
          </span>
        </div>
        <button 
          onClick={copyToClipboard} 
          className="flex-shrink-0 p-2 ml-2 transition-colors rounded-md hover:bg-gray-200 dark:hover:bg-neutral-800"
          aria-label="Copy wallet address"
        >
          {copied ? (
            <Icons.Check className="w-4 h-4 text-green-500" />
          ) : (
            <Icons.Copy className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
          )}
        </button>
      </div>
    </div>
  )
}