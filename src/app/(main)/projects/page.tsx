"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FadeIn } from "@/components/animations/fade-in"
import { PageTransition } from "@/components/animations/transitions/page-transition"
import { StaggeredText } from "@/components/ui/staggered-text"
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { GithubIcon } from "@/components/ui/icons"

const featuredProjects = [
  {
    id: "resumetailor-ai",
    typeLabel: "Independent project",
    badge: "Personal initiative",
    timeline: "Jun 2026 – Jul 2026",
    title: "ResumeTailor AI",
    description: "AI-powered resume customization platform that transforms a master resume into an ATS-optimized, recruiter-ready version tailored to any job description. Combines semantic job analysis, intelligent keyword prioritization, AI-assisted content refinement, and secure PDF generation while enforcing strict factual accuracy through validation mechanisms.",
    tags: ["Python", "FastAPI", "Google Gemini", "Jinja2", "WeasyPrint", "Docker", "Render", "ATS Optimization"],
    github: "https://github.com/Iamgokul7/ResumeTailor-AI",
    link: "/projects/resumetailor-ai",
    liveDemo: "https://resume-tailor-j5zl.onrender.com/login",
    accentColor: "#FF8A5B",
    emoji: "🤖"
  },
  {
    id: "erpilot",
    typeLabel: "Independent project",
    badge: "Personal initiative",
    timeline: "Apr 2026 – Jun 2026",
    title: "ERPilot AI",
    description: "A multi-tenant ERP platform for small businesses that brings employees, inventory, suppliers, sales, and reports into one dashboard, with a Gemini-powered assistant that answers questions about a company's own data in plain English.",
    tags: ["Python", "Flask", "Gemini AI", "SQLite", "Multi-Tenant SaaS", "RBAC"],
    github: "https://github.com/Iamgokul7/ERPilot-AI",
    link: "/projects/erpilot",
    accentColor: "#A78BFA",
    emoji: "⚡"
  },
  {
    id: "graphical-password",
    typeLabel: "Final year project",
    badge: "Flagship project",
    timeline: "Jan 2025 – May 2025",
    title: "Graphical Password Auth",
    description: "A three-stage login (credentials, image check, image-based PIN) with DWT steganography and AES-encrypted file sharing, built as a final year project and published as a research paper.",
    tags: ["Python", "Flask", "OpenCV", "AES Encryption", "DWT Steganography", "MySQL"],
    github: "https://github.com/Iamgokul7/Graphical-Password-Authentication-With-Data-Hiding",
    link: "/projects/graphical-password",
    accentColor: "#34D399",
    emoji: "🔐"
  },
  {
    id: "real-estate",
    typeLabel: "Academic project",
    badge: "Mini project",
    timeline: "Apr 2024 – May 2024",
    title: "Real Estate Management",
    description: "A PHP and MySQL platform where visitors filter property listings, registered users manage their own, and an admin panel controls users, properties and messages. Built as a three-member academic project.",
    tags: ["PHP", "MySQL", "Bootstrap", "JavaScript", "XAMPP"],
    github: "https://github.com/Iamgokul7/Real-Estate-Management-System",
    link: "/projects/real-estate",
    accentColor: "#FBBF24",
    emoji: "🏠"
  }
]

function ProjectCarousel() {
  const [activeIdx, setActiveIdx] = useState(0)
  const total = featuredProjects.length

  const prev = () => setActiveIdx((i) => (i - 1 + total) % total)
  const next = () => setActiveIdx((i) => (i + 1) % total)

  return (
    <div className="relative w-full">
      {/* 3D Stage */}
      <div
        className="relative mx-auto" style={{ height: "440px", perspective: "1100px", maxWidth: "900px", borderRadius: "1.5rem" }}
      >
        {featuredProjects.map((project, idx) => {
          let offset = idx - activeIdx
          if (offset > total / 2) offset -= total
          if (offset < -total / 2) offset += total

          const absOffset = Math.abs(offset)
          const isActive = offset === 0

          return (
            <motion.div
              key={project.id}
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
                maxWidth: "680px",
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
                  border: isActive ? `1px solid ${project.accentColor}40` : "1px solid transparent",
                  boxShadow: isActive ? `0 0 40px ${project.accentColor}18` : "none",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
              >
                {/* Top meta row */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{project.emoji}</span>
                    <div>
                      <div className="text-sm font-medium" style={{ color: project.accentColor }}>
                        {project.typeLabel}
                      </div>
                      <div className="text-xs text-muted-foreground">{project.timeline}</div>
                    </div>
                  </div>
                  {project.badge && (
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground line-clamp-3 text-justify">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mb-8 flex flex-wrap gap-2">
                  {project.tags.slice(0, 6).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 6 && (
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
                      +{project.tags.length - 6} more
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                    style={{
                      backgroundColor: project.accentColor,
                      color: "#0A0A0B",
                    }}
                  >
                    View case study
                    <ArrowRight size={14} />
                  </Link>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-accent hover:text-accent active:scale-[0.98]"
                    >
                      <GithubIcon size={14} />
                      Repository
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-accent hover:text-accent active:scale-[0.98]"
                    >
                      <ExternalLink size={14} />
                      Live demo
                    </a>
                  )}
                </div>
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
          aria-label="Previous project"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex gap-2">
          {featuredProjects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActiveIdx(i)}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: i === activeIdx ? "24px" : "8px",
                backgroundColor: i === activeIdx ? featuredProjects[activeIdx].accentColor : "var(--border)",
              }}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
          aria-label="Next project"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="relative mx-auto min-h-[80vh] max-w-screen-2xl px-6 py-24 md:px-12">
        {/* Header */}
        <FadeIn direction="up" className="max-w-3xl mb-20">
          <StaggeredText
            text="Featured Projects"
            as="h1"
            className="text-glow text-5xl font-semibold tracking-tight text-foreground sm:text-7xl"
            
            segmentBy="chars" delay={45} duration={0.55} direction="bottom" blur={true}
          />
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-justify">
            A collection of academic, final year, and independent software engineering projects focused on secure authentication systems, full-stack web application development, enterprise software concepts, and AI-driven solutions.
          </p>
        </FadeIn>

        {/* 3D Carousel */}
        <ProjectCarousel />
      </div>
    </PageTransition>
  )
}
