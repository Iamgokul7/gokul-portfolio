"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { FadeIn } from "@/components/animations/fade-in"
import { MagneticButton } from "@/components/animations/magnetic-button"
import { ResumeButton } from "@/components/shared/resume-button"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Scroll parallax effects for the background orbital shapes
  const orbY1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const orbY2 = useTransform(scrollYProgress, [0, 1], [0, 30])
  const orbRotate = useTransform(scrollYProgress, [0, 1], [0, 20])

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[600px] pt-36 pb-20 sm:pt-44 sm:pb-32 px-6 md:px-12 max-w-screen-2xl mx-auto overflow-hidden border-b border-border/20 flex flex-col justify-start items-center"
    >
      {/* Background Orbital Visual Layer */}
      <div className="absolute right-[-10%] sm:right-[5%] lg:right-[10%] top-[45%] -translate-y-1/2 opacity-[0.25] dark:opacity-[0.35] pointer-events-none z-0">
        <motion.div
          style={{ y: orbY1, rotate: orbRotate }}
          className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] flex items-center justify-center"
        >
          {/* Background Grid Accent */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
            style={{
              backgroundImage: `radial-gradient(var(--foreground) 1px, transparent 1px)`,
              backgroundSize: "24px 24px"
            }}
          />

          {/* Large Eclipse Orb */}
          <div className="absolute inset-0 rounded-full border-l border-white/10 dark:border-l border-white/20 bg-gradient-to-tr from-black/95 to-black/10 shadow-[-30px_0_60px_-15px_rgba(255,255,255,0.06)]" />

          {/* Inner Nested Eclipse Orb */}
          <motion.div
            style={{ y: orbY2 }}
            className="absolute w-[60%] h-[60%] rounded-full border-l border-white/20 dark:border-l border-white/30 bg-gradient-to-tr from-black/90 to-black/5 shadow-[-20px_0_40px_-8px_rgba(255,255,255,0.1)] right-[-8%] top-[20%]"
          />

          {/* Vertical Geometry Line passing exactly through the inner crescent intersection */}
          <div className="absolute right-[50%] top-[-15%] bottom-[-15%] w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent z-10" />

          {/* Glowing Intersecting Dot */}
          <div className="absolute right-[49.1%] top-[50%] -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white] z-20" />
        </motion.div>
      </div>

      {/* Hero Content Block - Centered horizontally, left-aligned text */}
      <div className="w-full max-w-3xl sm:max-w-4xl z-10 flex flex-col justify-start items-start">
        {/* Eyebrow Label */}
        <FadeIn direction="up" delay={0.1}>
          <div className="flex items-center gap-2 text-muted-foreground/60 text-[10px] sm:text-xs font-mono uppercase tracking-widest mb-6 font-medium">
            <span className="w-8 h-[1px] bg-border/40" />
            <span>Software Engineer</span>
          </div>
        </FadeIn>

        {/* Balanced Headline (Exactly 3 lines) */}
        <h1 className="text-[clamp(1.8rem,3.3vw,3rem)] font-bold tracking-tight uppercase leading-[1.15] select-none text-foreground w-full">
          <span className="block overflow-hidden py-0.5">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block"
            >
              Software engineering,
            </motion.span>
          </span>
          <span className="block overflow-hidden py-0.5">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block"
            >
              web applications,
            </motion.span>
          </span>
          <span className="block overflow-hidden py-0.5">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block text-muted-foreground/45"
            >
              and secure digital solutions.
            </motion.span>
          </span>
        </h1>

        {/* Supporting Text */}
        <FadeIn direction="up" delay={0.3}>
          <p className="mt-6 text-sm sm:text-base text-muted-foreground font-light leading-relaxed max-w-2xl">
            Computer Science Engineering graduate with hands-on experience in Python, Flask, Web Development, Authentication Systems, and Enterprise Software concepts through internships and real-world projects.
          </p>
        </FadeIn>

        {/* Technology Tags */}
        <FadeIn direction="up" delay={0.35} className="mt-8 text-[9px] sm:text-xs font-semibold tracking-widest text-muted-foreground/60 flex flex-wrap items-center gap-x-3 gap-y-1.5 uppercase font-mono">
          <span>Python</span>
          <span className="text-foreground/20 font-normal text-[8px]">+</span>
          <span>Web Development</span>
          <span className="text-foreground/20 font-normal text-[8px]">+</span>
          <span>Enterprise Software</span>
          <span className="text-foreground/20 font-normal text-[8px]">+</span>
          <span>ERP Fundamentals</span>
        </FadeIn>

        {/* Action Buttons (Only Download Resume remains) */}
        <FadeIn direction="up" delay={0.4} className="mt-10 flex flex-wrap gap-4">
          <MagneticButton>
            <ResumeButton variant="secondary" className="px-6 py-3.5 text-xs sm:text-sm font-semibold border-border bg-background hover:bg-foreground hover:text-background" />
          </MagneticButton>
        </FadeIn>
      </div>
    </section>
  )
}
