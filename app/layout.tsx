import "@/styles/globals.css"
import { Outfit } from "next/font/google"
import { Roboto } from "next/font/google"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import Analytics from "@/components/analytics"
import type React from "react" // Import React

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: {
    default: "DogeScan - Dogecoin Blockchain Explorer",
    template: "%s | DogeScan",
  },
  description: "Explore the Dogecoin blockchain with DogeScan. View transactions, blocks, and addresses in real-time.",
  keywords: ["Dogecoin", "blockchain", "explorer", "cryptocurrency", "DOGE", "transactions", "blocks"],
  authors: [{ name: "DogeScan Team" }],
  openGraph: {
    title: "DogeScan - Dogecoin Blockchain Explorer",
    description:
      "Explore the Dogecoin blockchain with DogeScan. View transactions, blocks, and addresses in real-time.",
    url: "https://dogescan.example.com",
    siteName: "DogeScan",
    images: [
      {
        url: "https://dogescan.example.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "DogeScan - Dogecoin Blockchain Explorer",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(outfit.variable, roboto.variable, "antialiased")}>
      <body className="min-h-screen bg-white text-gray-900">
        {children}
        <Analytics />
      </body>
    </html>
  )
}



import './globals.css'