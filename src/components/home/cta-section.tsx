"use client"

import { siteConfig } from "@/data/site-config"
import { FadeIn } from "@/components/animations/fade-in"
import { Mail } from "lucide-react"

export function CTASection() {
  return (
    <section id="cta" className="mx-auto w-full max-w-screen-2xl px-6 py-24 md:px-12">
      <div className="rounded-3xl bg-card px-8 py-16 sm:px-16 sm:py-24">
        <FadeIn direction="up">
          <h2 className="text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-foreground sm:text-7xl">
            Let&apos;s build<br />together.
          </h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.1} className="mt-8 max-w-lg">
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Interested in high-security authentication systems, AI ERP integrations, or custom backend services? Get in touch.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.2} className="mt-10">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground transition-colors duration-200 hover:bg-accent-hover active:scale-[0.98]"
          >
            <Mail size={16} />
            Get in touch
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
