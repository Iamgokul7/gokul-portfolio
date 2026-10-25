"use client"

import { siteConfig } from "@/data/site-config"
import { FadeIn } from "@/components/animations/fade-in"
import { MagneticButton } from "@/components/animations/magnetic-button"
import { Mail } from "lucide-react"

export function CTASection() {
  return (
    <section id="cta" className="mx-auto w-full max-w-screen-2xl px-6 py-36 md:px-12">
      <div className="relative overflow-hidden rounded-3xl bg-card px-8 py-16 sm:px-16 sm:py-24 card-depth">
        {/* Accent glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-accent opacity-10 blur-[80px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-12 -top-12 h-48 w-48 rounded-full bg-accent opacity-5 blur-[60px]"
        />
        {/* Subtle border glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-accent/10"
        />

        <FadeIn direction="up">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            Available for opportunities
          </p>
          <h2 className="text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-foreground sm:text-7xl text-glow">
            Let&apos;s build<br />together.
          </h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.1} className="mt-8 max-w-lg">
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Interested in high-security authentication systems, AI ERP integrations, or custom backend services? Get in touch.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.2} className="mt-10">
          <MagneticButton>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground transition-all duration-200 hover:bg-accent/90 hover:shadow-[0_0_24px_rgba(255,138,91,0.35)] active:scale-[0.98]"
            >
              <Mail size={16} />
              Get in touch
            </a>
          </MagneticButton>
        </FadeIn>
      </div>
    </section>
  )
}
