"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { mainNavigation } from "@/content/navigation";
import { cn } from "@/lib/utils";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="absolute left-0 right-0 top-16 z-40 border-b border-border bg-background px-6 py-6"
        >
          <nav className="flex flex-col gap-1">
            {mainNavigation.map((item) => {
              const active = pathname === item.href;
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
          </nav>
        </div>
      )}
    </div>
  );
}
