import type { Metadata } from "next";
import { siteMetadata } from "@/content/site-config";

/** Absolute URL zu einem internen Pfad – passend zu `trailingSlash: true`. */
export function absoluteUrl(path = "/") {
  const normalized = path === "/" ? "/" : `/${path.replace(/^\/|\/$/g, "")}/`;
  return `${siteMetadata.baseUrl}${normalized}`;
}

/** Gemeinsames Vorschaubild für Open Graph (erzeugt in app/og-image.png/route.tsx). */
export const ogImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: siteMetadata.siteName,
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  index?: boolean;
};

/**
 * Einheitliche Seiten-Metadaten inkl. eigener Canonical-URL und Open-Graph-Angaben.
 * Open Graph wird in Next.js nicht feldweise mit dem Layout zusammengeführt,
 * deshalb werden Titel, Beschreibung und URL hier vollständig gesetzt.
 */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  index = true,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      locale: "de_DE",
      siteName: siteMetadata.siteName,
      title,
      description,
      url,
      images: [ogImage],
      ...(publishedTime ? { publishedTime } : {}),
    },
    ...(index ? {} : { robots: { index: false, follow: true } }),
  };
}
