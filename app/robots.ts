import type { MetadataRoute } from "next";
import { siteMetadata } from "@/content/site-config";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteMetadata.baseUrl}/sitemap.xml`,
  };
}
