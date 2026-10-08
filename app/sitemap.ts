import type { MetadataRoute } from "next";
import { events } from "@/data/events";
import { montajes } from "@/data/montajes";
import { siteConfig } from "@/data/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: siteConfig.url, lastModified: now, priority: 1 },
    { url: `${siteConfig.url}/eventos`, lastModified: now, priority: 0.8 },
    { url: `${siteConfig.url}/privacidad`, lastModified: now, priority: 0.3 },
    ...montajes.map((montaje) => ({
      url: `${siteConfig.url}/montajes/${montaje.slug}`,
      lastModified: now,
      priority: 0.7,
    })),
    ...events.map((event) => ({
      url: `${siteConfig.url}/eventos/${event.slug}`,
      lastModified: now,
      priority: 0.7,
    })),
  ];
}
