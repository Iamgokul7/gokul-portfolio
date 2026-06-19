"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { siteConfig } from "@/data/site-config"

export function EngineeringStatement() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0.1, 0.35, 0.65, 0.9], [0.3, 1, 1, 0.3])
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section ref={containerRef} className="relative px-6 md:px-12 py-32 sm:py-48 bg-card/45 dark:bg-card/25 border-y border-border/40 overflow-hidden">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center">
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono mb-10 block">02 // PHILOSOPHY</span>
        
        <motion.div style={{ opacity, y }} className="max-w-5xl">
          <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground leading-tight text-balance">
            “{siteConfig.philosophy}”
          </p>
        </motion.div>
      </div>
    </section>
  )
}
