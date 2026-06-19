"use client"

import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { MagneticButton } from "@/components/animations/magnetic-button"
import { PageTransition } from "@/components/animations/transitions/page-transition"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { GithubIcon } from "@/components/ui/icons"

export default function ProjectsPage() {
  const featuredProjects = [
    {
      id: "erpilot",
      typeLabel: "INDEPENDENT PROJECT",
      badge: "PERSONAL INITIATIVE",
      timeline: "TIMELINE:\nAPR 2026 – JUN 2026",
      title: "ERPilot AI",
      description: "An AI-powered ERP assistant designed to explore how intelligent agents can streamline enterprise workflows, automate information retrieval, and assist business operations through conversational interfaces. The project focuses on integrating modern AI concepts with ERP-inspired data management and workflow automation.",
      tags: ["Python", "Flask", "LangChain", "AI Agents", "SQLite", "Enterprise Workflows"],
      github: "https://github.com/Iamgokul7/ERPilot-AI",
      link: "/projects/erpilot"
    },
    {
      id: "graphical-password",
      typeLabel: "FINAL YEAR PROJECT",
      badge: "FLAGSHIP PROJECT",
      timeline: "TIMELINE:\nJAN 2025 – MAY 2025",
      title: "Graphical Password Authentication With Data Hiding",
      description: "A multi-layer authentication platform developed as my final year project. The system combines credential validation, image-based verification, graphical password authentication, AES-secured file storage, and DWT steganography to deliver enhanced access control and secure data protection.",
      tags: ["Python", "Flask", "OpenCV", "AES Encryption", "DWT Steganography", "MySQL"],
      github: "https://github.com/Iamgokul7/Graphical-Password-Authentication-With-Data-Hiding",
      link: "/projects/graphical-password"
    },
    {
      id: "real-estate",
      typeLabel: "ACADEMIC PROJECT",
      badge: "MINI PROJECT",
      timeline: "TIMELINE:\nAPR 2024 – MAY 2024",
      title: "Real Estate Management System",
      description: "A full-stack real estate management platform developed as a mini team project. The application enables property listing, booking management, client interaction, administrative control, and database-driven property operations through an integrated web-based system.",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "XAMPP"],
      github: "https://github.com/Iamgokul7/Real-Estate-Management-System",
      link: "/projects/real-estate"
    }
  ]

  return (
    <PageTransition>
      <div className="relative px-6 md:px-12 py-24 sm:py-32 max-w-screen-2xl mx-auto min-h-[80vh]">
        {/* Header */}
        <div className="border-b border-border/40 pb-12 mb-16 max-w-3xl">
          <FadeIn direction="up">
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter uppercase text-foreground leading-none">
              Featured Projects
            </h1>
            <p className="mt-6 text-lg text-muted-foreground font-light leading-relaxed">
              A collection of academic, final year, and independent software engineering projects focused on secure authentication systems, full-stack web application development, enterprise software concepts, and AI-driven solutions.
            </p>
          </FadeIn>
        </div>

        {/* Projects list */}
        <StaggerContainer className="space-y-12">
          {featuredProjects.map((project) => (
            <FadeIn
              key={project.id}
              direction="up"
              className="group border border-border/40 bg-card/25 dark:bg-card/10 hover:border-foreground/20 rounded-3xl p-8 sm:p-12 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Meta details */}
                <div className="lg:col-span-3 font-mono text-xs text-muted-foreground/60 space-y-2 uppercase">
                  <div className="font-bold text-foreground/80">{project.typeLabel}</div>
                  <div className="whitespace-pre-line leading-relaxed">{project.timeline}</div>
                  {project.badge && (
                    <div className="inline-block pt-2">
                      <span className="rounded-full bg-foreground/10 dark:bg-foreground/15 border border-foreground/20 text-foreground text-[9px] font-bold tracking-wider px-2.5 py-1">
                        {project.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Specs */}
                <div className="lg:col-span-6 space-y-6">
                  <h2 className="text-3xl font-bold uppercase tracking-tight text-foreground group-hover:text-muted-foreground/80 transition-colors duration-200">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground text-base font-light leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="lg:col-span-3 flex flex-row lg:flex-col items-center lg:items-end justify-start gap-3 h-full mt-6 lg:mt-0">
                  <MagneticButton>
                    <Link
                      href={project.link}
                      className="group flex items-center gap-2 rounded-full border border-foreground bg-foreground text-background px-5 py-2.5 text-xs font-semibold hover:bg-background hover:text-foreground transition-colors duration-300"
                    >
                      View Case Study
                      <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                    </Link>
                  </MagneticButton>

                  {project.github && (
                    <MagneticButton>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-2 rounded-full border border-border bg-card text-foreground hover:bg-foreground hover:text-background px-5 py-2.5 text-xs font-semibold transition-colors duration-300"
                      >
                        <GithubIcon size={13} />
                        View Repository
                      </a>
                    </MagneticButton>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </StaggerContainer>
      </div>
    </PageTransition>
  )
}
