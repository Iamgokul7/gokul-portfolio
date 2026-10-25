"use client"
import { StaggeredText } from "@/components/ui/staggered-text"

import { FadeIn } from "@/components/animations/fade-in"
import Link from "next/link"

export function AboutSnapshot() {
  return (
    <section id="about" className="mx-auto w-full max-w-screen-2xl scroll-mt-24 px-6 py-36 md:px-12">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <FadeIn direction="up">
            <StaggeredText text="About" as="h2" className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl text-glow" segmentBy="words" delay={50} duration={0.6} direction="bottom" blur={true} />
          </FadeIn>
        </div>

        <div className="lg:col-span-8">
          <FadeIn direction="up" delay={0.1} className="max-w-3xl space-y-8">
            <p className="text-3xl font-semibold leading-[1.15] tracking-[-0.03em] text-foreground text-balance sm:text-4xl text-glow-sm">
              Computer Science Engineering graduate with practical experience gained through software development internships and academic projects.
            </p>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                Graduated from Anand Institute of Higher Technology (Anna University, 2025) with four internships spanning web design, frontend development, and Android development across companies like Mitsogo Technologies and MotionCut.
              </p>
              <p>
                My work ranges from AI-powered resume tools (ResumeTailor AI) to graphical authentication systems with AES encryption and DWT steganography — published in IJARCCE Vol. 14 Issue 4.
              </p>
              <p>
                Currently seeking entry-level roles in Software Engineering, ERP, QA, or Application Support in Chennai and beyond.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline underline-offset-4"
            >
              View full profile →
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
