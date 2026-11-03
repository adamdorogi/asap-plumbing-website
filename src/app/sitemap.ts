import type { MetadataRoute } from "next";
import { business } from "@/lib/business";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: business.site, changeFrequency: "monthly", priority: 1 }, { url: `${business.site}/privacy`, changeFrequency: "yearly", priority: .2 }];
}
