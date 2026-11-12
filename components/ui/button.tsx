import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-accent-blue/55 bg-accent-blue text-accent-blue-foreground shadow-[0_0_24px_rgba(32,220,229,0.18),inset_0_1px_0_rgba(255,255,255,0.25)] hover:brightness-110 hover:shadow-[0_0_34px_rgba(32,220,229,0.3)]",
  secondary:
    "border border-border-strong bg-surface/55 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md hover:border-accent-blue/60 hover:bg-surface-hover hover:shadow-[0_0_24px_rgba(32,220,229,0.1)]",
  ghost:
    "border border-transparent text-foreground hover:border-border hover:bg-surface/60 hover:text-accent-blue",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & { href?: undefined };

type ButtonAsLink = BaseProps & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/** Interne Seiten laufen über den Next.js-Router; externe Ziele und Dateien (z. B. PDF) sind normale Links. */
function isPageHref(href: string) {
  return href.startsWith("/") && !/\.[a-z0-9]+$/i.test(href);
}

export function Button({ variant = "primary", size = "md", className, children, ...props }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] font-medium transition-[filter,box-shadow,border-color,background-color,color] duration-200",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (props.href !== undefined) {
    const { href } = props;

    if (isPageHref(href)) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    const isExternal = /^https?:\/\//.test(href);
    return (
      <a href={href} className={classes} {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
