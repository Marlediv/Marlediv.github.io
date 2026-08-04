import { HeroSection } from "@/components/sections/hero-section";
import { TrustBar } from "@/components/sections/trust-bar";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { AboutPreview } from "@/components/sections/about-preview";
import { SkillsSection } from "@/components/sections/skills-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { GithubSection } from "@/components/sections/github-section";
import { ContactCta } from "@/components/sections/contact-cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <TrustBar />
      <FeaturedProjects />
      <AboutPreview />
      <ExperienceSection />
      <GithubSection />
      <ContactCta />
    </>
  );
}