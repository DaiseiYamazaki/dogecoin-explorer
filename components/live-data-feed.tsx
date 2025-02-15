"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRightLeft, CuboidIcon as Cube } from "lucide-react"

export function LiveDataFeed() {
  const [latestTransaction, setLatestTransaction] = useState<string | null>(null)
  const [latestBlock, setLatestBlock] = useState<number | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate fetching latest data
      setLatestTransaction(`DG${Math.random().toString(36).substr(2, 8)}`)
      setLatestBlock((prev) => (prev || 4859910) + 1)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="mb-8 bg-white/50 dark:bg-gray-800/50 border-[#c2a633]/20 dark:border-[#f4d67a]/20">
      <CardContent className="p-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-4 sm:mb-0">
            <ArrowRightLeft className="h-5 w-5 mr-2 text-[#c2a633] dark:text-[#f4d67a]" />
            <span className="text-sm text-gray-600 dark:text-gray-300">Latest Transaction:</span>
            <span className="ml-2 font-mono text-[#c2a633] dark:text-[#f4d67a]">
              {latestTransaction || "Loading..."}
            </span>
          </div>
          <div className="flex items-center">
            <Cube className="h-5 w-5 mr-2 text-[#c2a633] dark:text-[#f4d67a]" />
            <span className="text-sm text-gray-600 dark:text-gray-300">Latest Block:</span>
            <span className="ml-2 font-mono text-[#c2a633] dark:text-[#f4d67a]">{latestBlock || "Loading..."}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

