import Link from "next/link";
import { Mail } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { footerNavigation, mainNavigation } from "@/content/navigation";
import { socialLinks } from "@/content/social-links";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

const iconMap = { github: GithubIcon, linkedin: LinkedinIcon, mail: Mail };

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-base font-semibold text-foreground">{siteConfig.fullName}</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] border border-border text-muted-foreground transition-colors hover:text-foreground hover:bg-surface-hover"
                  >
                    <Icon size={16} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Navigation</p>
            <ul className="mt-3 space-y-2">
              {mainNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Rechtliches</p>
            <ul className="mt-3 space-y-2">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.fullName}</p>
          <p>
            {siteConfig.region}, {siteConfig.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
