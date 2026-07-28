import type { Metadata } from "next";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SkipLink } from "@/components/layout/skip-link";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { BackToTop } from "@/components/layout/back-to-top";
import { siteConfig, siteMetadata } from "@/content/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.baseUrl),
  title: {
    default: siteMetadata.defaultTitle,
    template: siteMetadata.titleTemplate,
  },
  description: siteMetadata.defaultDescription,
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteMetadata.baseUrl,
    siteName: siteMetadata.siteName,
    title: siteMetadata.defaultTitle,
    description: siteMetadata.defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.defaultTitle,
    description: siteMetadata.defaultDescription,
  },
  alternates: {
    canonical: siteMetadata.baseUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.title,
  url: siteMetadata.baseUrl,
  sameAs: [siteConfig.githubUrl, siteConfig.linkedinUrl],
  address: {
    "@type": "PostalAddress",
    addressCountry: "DE",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteMetadata.siteName,
  url: siteMetadata.baseUrl,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
