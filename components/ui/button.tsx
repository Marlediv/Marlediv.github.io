import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-accent-blue/55 bg-accent-blue text-accent-blue-foreground shadow-[0_0_24px_rgba(32,220,229,0.18),inset_0_1px_0_rgba(255,255,255,0.25)] hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_0_34px_rgba(32,220,229,0.3)]",
  secondary:
    "border border-border-strong bg-surface/55 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md hover:-translate-y-0.5 hover:border-accent-blue/60 hover:bg-surface-hover hover:shadow-[0_0_24px_rgba(32,220,229,0.1)]",
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
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({ variant = "primary", size = "md", className, children, ...props }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] font-medium transition-[color,background-color,border-color,box-shadow,transform,filter] duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if ("href" in props && props.href) {
    const isExternal = props.href.startsWith("http");
    return (
      <Link
        href={props.href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
