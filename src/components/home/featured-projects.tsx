"use client"
import { StaggeredText } from "@/components/ui/staggered-text"

import Link from "next/link"
import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FadeIn } from "@/components/animations/fade-in"

const homeProjects = [
  {
    id: 0,
    name: "ResumeTailor AI",
    description: "AI-powered resume customization engine with ATS-safe PDF generation and hallucination prevention.",
    tags: ["Python", "FastAPI", "Gemini API", "WeasyPrint"],
    href: "/projects/resumetailor-ai",
    accent: "#FF8A5B",
    number: "01",
  },
  {
    id: 1,
    name: "ERPilot AI",
    description: "Multi-tenant ERP SaaS with AI assistant, role-based access control, and Docker deployment.",
    tags: ["Python", "Flask", "SQLite", "Docker"],
    href: "/projects/erpilot",
    accent: "#7B8FF5",
    number: "02",
  },
  {
    id: 2,
    name: "Graphical Password Auth",
    description: "3-factor auth system with AES encryption and DWT steganography. Peer-reviewed & published.",
    tags: ["Python", "Flask", "OpenCV", "AES"],
    href: "/projects/graphical-password",
    accent: "#5BDA8A",
    number: "03",
  },
  {
    id: 3,
    name: "Real Estate Platform",
    description: "Full-stack property management platform with booking workflows and admin dashboard.",
    tags: ["PHP", "MySQL", "JavaScript", "HTML"],
    href: "/projects/real-estate",
    accent: "#F5C842",
    number: "04",
  },
]

function getSlotStyle(offset: number): React.CSSProperties {
  // offset: 0 = active, ±1 = side, ±2 = far
  const absOff = Math.abs(offset)
  if (absOff === 0) {
    return {
      transform: "translateX(0%) translateZ(0px) rotateY(0deg) scale(1)",
      zIndex: 10,
      opacity: 1,
      filter: "brightness(1)",
    }
  }
  if (absOff === 1) {
    const dir = offset > 0 ? 1 : -1
    return {
      transform: `translateX(${dir * 62}%) translateZ(-120px) rotateY(${dir * -18}deg) scale(0.88)`,
      zIndex: 5,
      opacity: 0.7,
      filter: "brightness(0.6)",
    }
  }
  // hidden
  const dir = offset > 0 ? 1 : -1
  return {
    transform: `translateX(${dir * 110}%) translateZ(-240px) rotateY(${dir * -28}deg) scale(0.7)`,
    zIndex: 1,
    opacity: 0,
    filter: "brightness(0.3)",
    pointerEvents: "none" as const,
  }
}

export function FeaturedProjects() {
  const [active, setActive] = useState(0)

  const prev = useCallback(() => setActive((a) => (a - 1 + homeProjects.length) % homeProjects.length), [])
  const next = useCallback(() => setActive((a) => (a + 1) % homeProjects.length), [])

  return (
    <section id="projects" className="mx-auto w-full max-w-screen-2xl scroll-mt-24 px-6 py-32 md:px-12">
      <FadeIn direction="up">
        <StaggeredText text="Selected work" as="h2" className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl text-glow" segmentBy="words" delay={50} duration={0.6} direction="bottom" blur={true} />
        <p className="mt-5 text-lg md:whitespace-nowrap leading-relaxed text-muted-foreground">
          Detailed case studies of engineered systems, cybersecurity protocols, and AI-driven platforms.
        </p>
      </FadeIn>

      {/* 3D Carousel */}
      <div className="relative mt-20 flex flex-col items-center">
        {/* Stage */}
        <div
          className="relative h-[340px] w-full max-w-2xl"
          style={{ perspective: "1200px", perspectiveOrigin: "50% 50%" }}
        >
          {homeProjects.map((project) => {
            const offset = ((project.id - active + homeProjects.length) % homeProjects.length)
            const normalizedOffset = offset > homeProjects.length / 2 ? offset - homeProjects.length : offset
            const slotStyle = getSlotStyle(normalizedOffset)

            return (
              <div
                key={project.id}
                className="absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                style={slotStyle}
              >
                <article
                  className="relative flex h-full w-full flex-col overflow-hidden rounded-3xl bg-card p-8 ring-1 ring-border card-depth"
                  style={{
                    boxShadow:
                      normalizedOffset === 0
                        ? `0 0 0 1px ${project.accent}22, 0 24px 64px rgba(0,0,0,0.5), 0 0 48px ${project.accent}18`
                        : "0 8px 32px rgba(0,0,0,0.3)",
                  }}
                >
                  {/* Accent stripe */}
                  <div
                    className="absolute left-0 top-0 h-1 rounded-t-3xl transition-all duration-500"
                    style={{ width: normalizedOffset === 0 ? "100%" : "0%", background: project.accent }}
                  />

                  <div className="flex items-start justify-between">
                    <span
                      className="text-xs font-mono font-semibold tracking-[0.15em]"
                      style={{ color: project.accent }}
                    >
                      {project.number}
                    </span>
                    <Link
                      href={project.href}
                      tabIndex={normalizedOffset === 0 ? 0 : -1}
                      className="text-xs text-muted-foreground transition-colors duration-200 hover:text-accent"
                    >
                      View case study →
                    </Link>
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl text-glow-sm">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{project.description}</p>

                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </div>
            )
          })}
        </div>

        {/* Controls */}
        <div className="mt-10 flex items-center gap-6">
          <button
            onClick={prev}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all duration-200 hover:border-accent hover:text-accent hover:shadow-[0_0_16px_rgba(255,138,91,0.2)] cursor-none"
            aria-label="Previous project"
          >
            ←
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {homeProjects.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                aria-label={`Go to ${p.name}`}
                className="cursor-none rounded-full transition-all duration-300"
                style={{
                  width: active === p.id ? 24 : 8,
                  height: 8,
                  background: active === p.id ? "#FF8A5B" : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all duration-200 hover:border-accent hover:text-accent hover:shadow-[0_0_16px_rgba(255,138,91,0.2)] cursor-none"
            aria-label="Next project"
          >
            →
          </button>
        </div>

        {/* Project counter */}
        <AnimatePresence mode="wait">
          <motion.p
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mt-4 text-xs text-muted-foreground"
          >
            {active + 1} / {homeProjects.length}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  )
}
