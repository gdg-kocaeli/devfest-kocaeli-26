import type { MetadataRoute } from "next";
import { siteUrl } from "@/features/devfest/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${siteUrl}/` }];
}
