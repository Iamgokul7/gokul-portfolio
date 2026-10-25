"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { experienceTimeline } from "@/data/experience"
import { FadeIn } from "@/components/animations/fade-in"
import { PageTransition } from "@/components/animations/transitions/page-transition"
import { StaggeredText } from "@/components/ui/staggered-text"
import { FileText, ChevronLeft, ChevronRight } from "lucide-react"

const accentColors = ["#FF8A5B", "#A78BFA", "#34D399", "#FBBF24"]
const emojis = ["💼", "🎬", "🔒", "💻"]

function ExperienceCarousel() {
  const [activeIdx, setActiveIdx] = useState(0)
  const total = experienceTimeline.length

  const prev = () => setActiveIdx((i) => (i - 1 + total) % total)
  const next = () => setActiveIdx((i) => (i + 1) % total)

  return (
    <div className="relative w-full">
      <div
        className="relative mx-auto" style={{ height: "480px", perspective: "1100px", maxWidth: "900px", borderRadius: "1.5rem" }}
      >
        {experienceTimeline.map((exp, idx) => {
          let offset = idx - activeIdx
          if (offset > total / 2) offset -= total
          if (offset < -total / 2) offset += total

          const absOffset = Math.abs(offset)
          const isActive = offset === 0
          const color = accentColors[idx % accentColors.length]

          return (
            <motion.div
              key={exp.id}
              animate={{
                x: `${offset * 52}%`,
                z: -absOffset * 90,
                rotateY: offset * 20,
                opacity: absOffset > 1 ? 0 : isActive ? 1 : 0.55,
                scale: isActive ? 1 : 0.88,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                margin: "0 auto",
                width: "100%",
                maxWidth: "720px",
                transformStyle: "preserve-3d",
                cursor: isActive ? "default" : "pointer",
                zIndex: isActive ? 10 : 10 - absOffset,
                pointerEvents: absOffset > 1 ? "none" : "auto",
              }}
              onClick={() => !isActive && setActiveIdx(idx)}
            >
              <div
                className="rounded-3xl bg-card p-8 sm:p-10 card-depth"
                style={{
                  border: isActive ? `1px solid ${color}40` : "1px solid transparent",
                  boxShadow: isActive ? `0 0 40px ${color}18` : "none",
                }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{emojis[idx % emojis.length]}</span>
                    <div>
                      <div className="text-sm font-medium" style={{ color }}>
                        {exp.period}
                      </div>
                      <div className="text-xs text-muted-foreground">{exp.location}</div>
                    </div>
                  </div>
                </div>

                <h2 className="mb-1 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {exp.role}
                </h2>
                <p className="mb-5 text-sm font-medium text-muted-foreground">{exp.company}</p>

                <ul className="space-y-2">
                  {exp.description.map((desc, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: color }} />
                      <span className="text-justify">{desc}</span>
                    </li>
                  ))}
                </ul>

                {exp.certificate && (
                  <a
                    href={exp.certificate}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    <FileText size={12} />
                    View certificate
                  </a>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-center gap-6">
        <button
          onClick={prev}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
          aria-label="Previous"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex gap-2">
          {experienceTimeline.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: i === activeIdx ? "24px" : "8px",
                backgroundColor: i === activeIdx ? accentColors[activeIdx % accentColors.length] : "var(--border)",
              }}
              aria-label={`Go to entry ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
          aria-label="Next"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}

export default function ExperiencePage() {
  return (
    <PageTransition>
      <div className="relative mx-auto min-h-[80vh] max-w-screen-xl px-6 py-24 md:px-12">
        {/* Header */}
        <FadeIn direction="up" className="max-w-3xl mb-20">
          <StaggeredText
            text="Professional Experience"
            as="h1"
            className="text-glow text-5xl font-semibold tracking-tight text-foreground sm:text-7xl"
            
            segmentBy="chars" delay={45} duration={0.55} direction="bottom" blur={true}
          />
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            A chronological timeline of my professional software engineering internships, technical roles, and verified industry credentials.
          </p>
        </FadeIn>

        {/* 3D Carousel */}
        <ExperienceCarousel />

      </div>
    </PageTransition>
  )
}
