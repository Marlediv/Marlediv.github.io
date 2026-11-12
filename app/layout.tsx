import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SkipLink } from "@/components/layout/skip-link";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { BackToTop } from "@/components/layout/back-to-top";
import { JsonLd } from "@/components/layout/json-ld";
import { siteConfig, siteMetadata } from "@/content/site-config";
import { ogImage } from "@/lib/metadata";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.baseUrl),
  title: {
    default: siteMetadata.defaultTitle,
    template: siteMetadata.titleTemplate,
  },
  description: siteMetadata.defaultDescription,
  authors: [{ name: siteConfig.fullName, url: siteMetadata.baseUrl }],
  creator: siteConfig.fullName,
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: siteMetadata.siteName,
    title: siteMetadata.defaultTitle,
    description: siteMetadata.defaultDescription,
    url: "/",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
  },
  // Canonical-URLs werden bewusst pro Seite gesetzt (siehe lib/metadata.ts) –
  // ein Canonical im Root-Layout würde an alle Unterseiten vererbt.
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef4f5" },
    { media: "(prefers-color-scheme: dark)", color: "#11191c" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.fullName,
  jobTitle: siteConfig.title,
  description: siteConfig.description,
  url: siteMetadata.baseUrl,
  sameAs: [siteConfig.githubUrl, siteConfig.linkedinUrl],
  address: {
    "@type": "PostalAddress",
    addressRegion: siteConfig.region,
    addressCountry: "DE",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteMetadata.siteName,
  url: siteMetadata.baseUrl,
  inLanguage: "de-DE",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <SkipLink />
          <ScrollProgress />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
        <JsonLd data={personJsonLd} />
        <JsonLd data={websiteJsonLd} />
      </body>
    </html>
  );
}
