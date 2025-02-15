"use client"

import { useState } from "react"
import { LoadingScreen } from "@/components/loading-screen"
import { Button } from "@/components/ui/button"

export default function TestLoadingPage() {
  const [showLoading, setShowLoading] = useState(false)

  const simulateLoading = () => {
    setShowLoading(true)
    // 5秒後に自動的にローディングを終了
    setTimeout(() => {
      setShowLoading(false)
    }, 5000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-[#c2a633]">Loading Screen Test</h1>

      <Button onClick={simulateLoading} className="bg-[#c2a633] hover:bg-[#c2a633]/90 text-white">
        Show Loading Screen (5 seconds)
      </Button>

      {showLoading && <LoadingScreen />}
    </div>
  )
}

