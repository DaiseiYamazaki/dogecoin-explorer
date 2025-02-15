import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://dogescan.example.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://dogescan.example.com/credits",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://dogescan.example.com/search",
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 0.9,
    },
  ]
}

