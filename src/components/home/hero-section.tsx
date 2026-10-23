"use client"

import Link from "next/link"
import { FadeIn } from "@/components/animations/fade-in"
import { SplitText } from "@/components/ui/split-text"
import { ResumeButton } from "@/components/shared/resume-button"
import { siteConfig } from "@/data/site-config"

export function HeroSection() {
  return (
    <section id="hero" className="mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-screen-2xl flex-col items-center justify-center px-6 py-24 text-center md:px-12">
      <SplitText
        text="Full Stack & AI Engineer Open to Work"
        tag="h1"
        className="max-w-5xl text-balance text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-[5rem]"
        staggerDelay={0.025}
        duration={0.7}
      />

      <FadeIn direction="up" delay={0.2}>
        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          CSE graduate with 4 internships, 6 projects, and a peer-reviewed publication.
          Skilled in Python, FastAPI, Flask, JavaScript, and AI/LLM integration.
          Seeking entry-level roles in Software Development, QA, ERP, or Application Support.
        </p>
      </FadeIn>

      <FadeIn direction="up" delay={0.3} className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <ResumeButton variant="primary" />
        <Link
          href="/projects"
          className="inline-flex items-center rounded-full px-0 py-3.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:text-accent sm:px-4"
        >
          View featured projects
        </Link>
      </FadeIn>

      <FadeIn direction="up" delay={0.4} className="mt-16 flex flex-col items-center gap-4 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8">
        <span>{siteConfig.location}</span>
        <span>Open to Software Engineer, ERP, QA &amp; Application Support roles</span>
      </FadeIn>
    </section>
  )
}
