import { HeroSection } from "@/components/home/hero-section"
import { AboutSnapshot } from "@/components/home/about-snapshot"
import { SkillsMarquee } from "@/components/home/skills-marquee"
import { PageTransition } from "@/components/animations/transitions/page-transition"

export default function HomePage() {
  return (
    <PageTransition>
      <div className="relative flex flex-col w-full overflow-hidden">
        <HeroSection />
        <AboutSnapshot />
        <SkillsMarquee />
      </div>
    </PageTransition>
  )
}
