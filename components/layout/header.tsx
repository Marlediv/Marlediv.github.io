import Link from "next/link";
import { FileDown } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { NavLinks } from "./nav-links";
import { MobileNavigation } from "./mobile-navigation";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/68 shadow-[0_8px_36px_rgba(0,0,0,0.16)] backdrop-blur-xl">
      <div className="accent-rule absolute inset-x-0 bottom-0 opacity-60" aria-hidden="true" />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="group font-display text-[15px] font-semibold tracking-tight text-foreground"
        >
          <span className="transition-colors group-hover:text-accent-blue">{siteConfig.fullName}</span>
          <span className="ml-2 hidden font-normal text-muted-foreground sm:inline">/ {siteConfig.title}</span>
        </Link>

        <div className="relative flex items-center gap-2">
          <NavLinks />
          <div className="mx-2 hidden h-5 w-px bg-border md:block" aria-hidden="true" />
          <a
            href={siteConfig.resumeUrl}
            className="hidden items-center gap-1.5 rounded-[var(--radius-sm)] border border-border bg-surface/40 px-3 py-2 text-sm font-medium text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-md transition-[color,border-color,box-shadow] hover:border-border-strong hover:text-accent-blue hover:shadow-[0_0_20px_rgba(32,220,229,0.1)] md:inline-flex"
          >
            <FileDown size={15} aria-hidden="true" />
            Lebenslauf
          </a>
          <ThemeToggle />
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
