"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/animations/fade-in"
import { MagneticButton } from "@/components/animations/magnetic-button"
import { ResumeButton } from "@/components/shared/resume-button"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen px-6 md:px-12 max-w-screen-2xl mx-auto overflow-hidden flex flex-col justify-center items-center"
    >
      {/* Hero Content Block - Centered horizontally, left-aligned text with generous spacing */}
      <div className="w-full max-w-3xl sm:max-w-4xl z-10 flex flex-col justify-center items-start pt-16">
        {/* Eyebrow Label */}
        <FadeIn direction="up" delay={0.1}>
          <div className="flex items-center gap-2 text-accent text-[10px] sm:text-xs font-mono uppercase tracking-widest mb-8 font-semibold">
            <span className="w-8 h-[1px] bg-accent/40" />
            <span>Software Engineer</span>
          </div>
        </FadeIn>

        {/* Balanced Headline (Exactly 3 lines) - Bold, Editorial and elevated */}
        <h1 className="text-[clamp(2.2rem,5vw,5.5rem)] font-extrabold tracking-tighter uppercase leading-[1.02] select-none text-foreground w-full filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.015)]">
          <span className="block overflow-hidden py-1">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block"
            >
              SOFTWARE ENGINEERING,
            </motion.span>
          </span>
          <span className="block overflow-hidden py-1">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block"
            >
              BUILDING RELIABLE
            </motion.span>
          </span>
          <span className="block overflow-hidden py-1">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block text-decorative"
            >
              DIGITAL PRODUCTS.
            </motion.span>
          </span>
        </h1>

        {/* Supporting Text */}
        <FadeIn direction="up" delay={0.3}>
          <p className="mt-8 text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-[600px]">
            Computer Science Engineering graduate passionate about building reliable software, enterprise applications, and secure digital solutions. Seeking an entry-level Software Engineer, ERP, QA, or Application Support role where I can contribute, learn, and grow while solving real-world engineering challenges.
          </p>
        </FadeIn>

        {/* Technology Tags */}
        <FadeIn direction="up" delay={0.35} className="mt-10 text-[9px] sm:text-xs font-bold tracking-widest text-muted-label flex flex-wrap items-center gap-x-3 gap-y-1.5 uppercase font-mono">
          <span>Python</span>
          <span className="text-foreground/20 font-normal text-[8px]">+</span>
          <span>Web Development</span>
          <span className="text-foreground/20 font-normal text-[8px]">+</span>
          <span>Enterprise Software</span>
          <span className="text-foreground/20 font-normal text-[8px]">+</span>
          <span>ERP Fundamentals</span>
        </FadeIn>

        {/* Action Buttons (Only Download Resume remains) - Primary accent styled */}
        <FadeIn direction="up" delay={0.4} className="mt-12 flex flex-wrap gap-4">
          <MagneticButton>
            <ResumeButton variant="primary" className="px-8 py-4 text-xs sm:text-sm font-semibold" />
          </MagneticButton>
        </FadeIn>
      </div>
    </section>
  )
}

