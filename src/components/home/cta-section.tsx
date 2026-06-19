"use client"

import { siteConfig } from "@/data/site-config"
import { FadeIn } from "@/components/animations/fade-in"
import { MagneticButton } from "@/components/animations/magnetic-button"
import { Mail } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative px-6 md:px-12 py-32 sm:py-48 max-w-screen-2xl mx-auto text-center border-t border-border/40 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono font-medium mb-10">
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
              className="flex items-center gap-3 rounded-full bg-foreground text-background border border-foreground px-8 py-4 text-sm font-semibold hover:bg-background hover:text-foreground transition-colors duration-300 shadow-xl"
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
