import { HeroSection } from "@/components/home/hero-section"
import { AboutSnapshot } from "@/components/home/about-snapshot"
import { FeaturedProjects } from "@/components/home/featured-projects"
import { SkillsSection } from "@/components/home/skills-section"
import { CTASection } from "@/components/home/cta-section"
import { PageTransition } from "@/components/animations/transitions/page-transition"

export default function HomePage() {
  return (
    <PageTransition>
      <div className="flex w-full flex-col">
        <HeroSection />
        <AboutSnapshot />
        <FeaturedProjects />
        <SkillsSection />
        <CTASection />
      </div>
    </PageTransition>
  )
}
