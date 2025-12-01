import type { MetadataRoute } from "next";

import { aiTools } from "@/data/tools";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://toolify-website-7upf.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const toolPages: MetadataRoute.Sitemap = aiTools.map((tool) => ({
    url: `${BASE_URL}/tool/${tool.id}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    ...toolPages,
  ];
}

