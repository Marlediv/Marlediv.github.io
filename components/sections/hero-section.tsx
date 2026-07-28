import Link from "next/link";
import { ArrowRight, FileDown } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { HeroBackground } from "./hero-background";

export function HeroSection() {
  return (
    <section className="relative border-b border-border">
      <HeroBackground />
      <PageContainer className="relative py-24 sm:py-32">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-blue">
          {siteConfig.title} · {siteConfig.location}
        </p>

        <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-6xl">
          {siteConfig.headlineDe}
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {siteConfig.shortDescription}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button href="/projekte" size="lg">
            Projekte ansehen
            <ArrowRight size={16} />
          </Button>
          <Button href="/kontakt" variant="secondary" size="lg">
            Kontakt aufnehmen
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
          <Link href={siteConfig.resumeUrl} className="inline-flex items-center gap-1.5 hover:text-foreground">
            <FileDown size={15} /> Lebenslauf (PDF)
          </Link>
          <Link
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-foreground"
          >
            <GithubIcon width={15} height={15} /> GitHub
          </Link>
          <Link
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-foreground"
          >
            <LinkedinIcon width={15} height={15} /> LinkedIn
          </Link>
        </div>
      </PageContainer>
    </section>
  );
}
