"use client"

import { siteConfig } from "@/data/site-config"
import { FadeIn } from "@/components/animations/fade-in"
import { MagneticButton } from "@/components/animations/magnetic-button"
import { Mail } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative px-6 md:px-12 py-32 sm:py-48 max-w-screen-2xl mx-auto text-center border-t border-border/40 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <span className="text-xs uppercase tracking-widest text-muted-label font-mono font-semibold mb-10">
          // 06 / ENGAGEMENT
        </span>
        
        <FadeIn direction="up">
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase leading-[0.9] text-foreground select-none mb-12 break-words">
            Let&apos;s build<br />together.
          </h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2} className="max-w-lg mb-12">
          <p className="text-muted-foreground font-light text-base sm:text-lg leading-relaxed text-balance">
            Interested in high-security authentication systems, AI ERP integrations, or custom backend services? Get in touch.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.35}>
          <MagneticButton>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 rounded-full bg-accent text-white px-8 py-4 text-sm font-semibold shadow-[0_4px_14px_rgba(201,106,61,0.15)] hover:bg-[#b85e34] hover:shadow-[0_8px_20px_rgba(201,106,61,0.25)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
            >
              <Mail size={16} />
              Get In Touch
            </a>
          </MagneticButton>
        </FadeIn>
      </div>
    </section>
  )
}
