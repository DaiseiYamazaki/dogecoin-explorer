"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const dogImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ahoinu-slSCEi35JBSrzsyIkHXQZBz6CmUPpi.png",
    alt: "Yellow dog illustration",
    width: 200,
    height: 200,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nurepome-HhRPahYE8UlSid6IFo0jrekJVapTyR.png",
    alt: "Fluffy Pomeranian illustration",
    width: 200,
    height: 200,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/taifu-pome-lxCUVc994YEOklhuCRGqlLGI2JeXuR.png",
    alt: "Pomeranian in wind illustration",
    width: 200,
    height: 200,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/darumeshian-PID9w7W0zP3pYpMTzsMzpCu5qoKhQl.png",
    alt: "Dalmatian illustration",
    width: 200,
    height: 200,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pug-duIDCGY4EPdO3XG3YStj3PGB2thHbb.png",
    alt: "Pug illustration",
    width: 200,
    height: 200,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mniature-Pinscher-Hpe9MJvAHGrsLvVTDQYta69eTNQvcV.png",
    alt: "Miniature Pinscher illustration",
    width: 200,
    height: 200,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yorkshire-terrier-xFodRXjuQ9kN2ID8LUJFRMnuHBrqcq.png",
    alt: "Yorkshire terrier illustration",
    width: 200,
    height: 200,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/frenchbull-3LJPjvoEbZdwXlq3qnAFM3iModVnzT.png",
    alt: "French Bulldog illustration",
    width: 200,
    height: 200,
  },
]

const messages = ["Much loading...", "Very wait...", "So patience...", "Wow...", "Many data...", "Such blockchain..."]

export function LoadingScreen() {
  const [currentImage, setCurrentImage] = useState(0)
  const [currentMessage, setCurrentMessage] = useState(0)

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % dogImages.length)
    }, 2000)

    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length)
    }, 1000)

    return () => {
      clearInterval(imageInterval)
      clearInterval(messageInterval)
    }
  }, [])

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-white/90 backdrop-blur-sm z-50"
      aria-label="Loading"
    >
      <div className="text-center">
        <div className="relative w-[200px] h-[200px] mx-auto mb-8">
          {dogImages.map((image, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 transition-opacity duration-500 ${
                currentImage === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#c2a633]">{messages[currentMessage]}</h2>
          <div className="flex justify-center gap-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-[#c2a633] animate-bounce"
                style={{
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

