"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-4xl font-bold text-[#c2a633] mb-4">Oops! Something went wrong</h1>
      <p className="text-xl mb-8 text-gray-600">Don't worry, it's not you, it's us. Please try again.</p>
      <Button onClick={reset} className="bg-[#c2a633] hover:bg-[#c2a633]/90 text-white">
        Try again
      </Button>
    </div>
  )
}

