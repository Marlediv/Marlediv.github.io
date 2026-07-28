import Link from "next/link";
import { FileDown } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { NavLinks } from "./nav-links";
import { MobileNavigation } from "./mobile-navigation";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-display text-[15px] font-semibold tracking-tight text-foreground"
        >
          {siteConfig.name}
          <span className="ml-2 hidden text-muted-foreground sm:inline">/ Data Engineer</span>
        </Link>

        <div className="relative flex items-center gap-2">
          <NavLinks />
          <div className="mx-2 hidden h-5 w-px bg-border md:block" aria-hidden="true" />
          <Link
            href={siteConfig.resumeUrl}
            className="hidden items-center gap-1.5 rounded-[var(--radius-sm)] border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover md:inline-flex"
          >
            <FileDown size={15} />
            Lebenslauf
          </Link>
          <ThemeToggle />
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
