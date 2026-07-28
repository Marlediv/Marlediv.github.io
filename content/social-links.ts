import { siteConfig } from "./site-config";

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: siteConfig.githubUrl, icon: "github" },
  { label: "LinkedIn", href: siteConfig.linkedinUrl, icon: "linkedin" },
  { label: "E-Mail", href: `mailto:${siteConfig.email}`, icon: "mail" },
];
