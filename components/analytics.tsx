"use client"

import { usePathname } from "next/navigation"
import Script from "next/script"
import { useEffect } from "react"

export const GA_TRACKING_ID = "G-XXXXXXXXXX" // Replace with your Google Analytics tracking ID

export default function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname) {
      window.gtag("config", GA_TRACKING_ID, {
        page_path: pathname,
      })
    }
  }, [pathname])

  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}

