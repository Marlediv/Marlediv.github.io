import Link from "next/link";
import { ArrowRight, FileDown } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { HeroBackground } from "./hero-background";

export function HeroSection() {
  return (
    <section className="relative min-h-[680px] overflow-hidden border-b border-border">
      <HeroBackground />
      <PageContainer className="relative flex min-h-[680px] items-center py-24 sm:py-32">
        <div className="max-w-4xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-accent-blue/20 bg-accent-violet-soft px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-accent-blue shadow-[0_0_24px_rgba(32,220,229,0.08)] backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-blue shadow-[0_0_10px_var(--accent-blue)]" />
            {siteConfig.title} · {siteConfig.location}
          </p>

          <h1 className="mt-7 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {siteConfig.headlineDe}
          </h1>

          <div className="mt-7 h-px w-32 bg-gradient-to-r from-accent-blue via-accent-blue/50 to-transparent shadow-[0_0_16px_rgba(32,220,229,0.5)]" />

          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
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
            <Link href={siteConfig.resumeUrl} className="inline-flex items-center gap-1.5 transition-colors hover:text-accent-blue">
              <FileDown size={15} /> Lebenslauf (PDF)
            </Link>
            <Link
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent-blue"
            >
              <GithubIcon width={15} height={15} /> GitHub
            </Link>
            <Link
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent-blue"
            >
              <LinkedinIcon width={15} height={15} /> LinkedIn
            </Link>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
