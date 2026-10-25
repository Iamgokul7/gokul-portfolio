"use client"

import Link from "next/link"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggeredText } from "@/components/ui/staggered-text"
import { ResumeButton } from "@/components/shared/resume-button"
import { MagneticButton } from "@/components/animations/magnetic-button"
import { siteConfig } from "@/data/site-config"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-[100svh] w-full max-w-screen-2xl flex-col items-center justify-center px-6 py-32 text-center md:px-12"
    >

      {/* Eyebrow */}
      <FadeIn direction="up" delay={0}>
        <p className="mb-8 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Full Stack · AI Engineering · Open to Work
        </p>
      </FadeIn>

      {/* Giant headline */}
      <StaggeredText
        text="Full Stack & AI Engineer Open to Work"
        as="h1"
        className="text-glow max-w-5xl text-balance text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-6xl lg:text-[5.5rem]"
        segmentBy="words"
        delay={60}
        duration={0.65}
        direction="bottom"
        blur={true}
        staggerDirection="forward"
      />

      {/* Description */}
      <FadeIn direction="up" delay={0.3}>
        <p className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          CSE graduate with hands-on experience across AI-powered application development, full-stack web development,
          secure authentication systems, and ERP — built through 6 projects (2 AI-integrated), 4 internships, and a
          peer-reviewed journal publication. Open to Software Development, Full Stack, AI/LLM, QA, SAP/ERP, and IT
          Analyst roles.
        </p>
      </FadeIn>

      {/* CTAs */}
      <FadeIn direction="up" delay={0.45} className="mt-14 flex flex-wrap items-center justify-center gap-5">
        <MagneticButton>
          <ResumeButton variant="primary" />
        </MagneticButton>
        <MagneticButton>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 py-3.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:text-accent sm:px-4"
          >
            View featured projects →
          </Link>
        </MagneticButton>
      </FadeIn>

      {/* Location line */}
      <FadeIn
        direction="up"
        delay={0.6}
        className="mt-20 flex flex-col items-center gap-3 text-xs text-muted-foreground/60 sm:flex-row sm:gap-8"
      >
        <span>{siteConfig.location}</span>
        <span className="hidden sm:block">·</span>
        <span>Available for Software Engineer · ERP · QA · Application Support</span>
      </FadeIn>
    </section>
  )
}
