"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileDown, Menu, X } from "lucide-react";
import { mainNavigation } from "@/content/navigation";
import { siteConfig } from "@/content/site-config";
import { isActivePath } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] border border-border text-foreground"
      >
        {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-16 z-40 border-b border-border bg-background px-6 py-6 shadow-[0_24px_48px_rgba(0,0,0,0.25)]"
        >
          <nav aria-label="Hauptnavigation mobil" className="flex flex-col gap-1">
            {mainNavigation.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-[var(--radius-sm)] px-3 py-3 text-base font-medium transition-colors",
                    active ? "bg-surface text-accent-blue" : "text-foreground hover:bg-surface",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={siteConfig.resumeUrl}
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center gap-2 rounded-[var(--radius-sm)] border border-border px-3 py-3 text-base font-medium text-foreground hover:bg-surface"
            >
              <FileDown size={16} aria-hidden="true" /> Lebenslauf (PDF)
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
