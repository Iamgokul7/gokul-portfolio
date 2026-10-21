"use client"

import { FadeIn } from "@/components/animations/fade-in"
import { PageTransition } from "@/components/animations/transitions/page-transition"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { GithubIcon } from "@/components/ui/icons"

export default function ProjectsPage() {
  const featuredProjects = [
    {
      id: "resumetailor-ai",
      typeLabel: "Independent project",
      badge: "Personal initiative",
      timeline: "Jun 2026 – Jul 2026",
      title: "ResumeTailor AI",
      description: "ResumeTailor AI is an AI-powered resume customization platform that transforms a master resume into an ATS-optimized, recruiter-ready version tailored to any job description. The application combines semantic job analysis, intelligent keyword prioritization, AI-assisted content refinement, and secure PDF generation while enforcing strict factual accuracy through validation mechanisms that prevent unsupported information from being introduced. The result is a professional, ATS-safe resume that preserves the candidate's original experience while improving relevance for the target role.",
      tags: ["Python", "FastAPI", "Google Gemini", "Jinja2", "WeasyPrint", "HTML", "CSS", "JavaScript", "Docker", "Render", "ATS Optimization"],
      github: "https://github.com/Iamgokul7/ResumeTailor-AI",
      link: "/projects/resumetailor-ai",
      liveDemo: "https://resume-tailor-j5zl.onrender.com/login",
      demoBadge: "Password Protected (to prevent API abuse)"
    },
    {
      id: "erpilot",
      typeLabel: "Independent project",
      badge: "Personal initiative",
      timeline: "Apr 2026 – Jun 2026",
      title: "ERPilot AI",
      description: "An AI-powered ERP assistant designed to explore how intelligent agents can streamline enterprise workflows, automate information retrieval, and assist business operations through conversational interfaces. The project focuses on integrating modern AI concepts with ERP-inspired data management and workflow automation.",
      tags: ["Python", "Flask", "LangChain", "AI Agents", "SQLite", "Enterprise Workflows"],
      github: "https://github.com/Iamgokul7/ERPilot-AI",
      link: "/projects/erpilot"
    },
    {
      id: "graphical-password",
      typeLabel: "Final year project",
      badge: "Flagship project",
      timeline: "Jan 2025 – May 2025",
      title: "Graphical Password Authentication With Data Hiding",
      description: "A multi-layer authentication platform developed as my final year project. The system combines credential validation, image-based verification, graphical password authentication, AES-secured file storage, and DWT steganography to deliver enhanced access control and secure data protection.",
      tags: ["Python", "Flask", "OpenCV", "AES Encryption", "DWT Steganography", "MySQL"],
      github: "https://github.com/Iamgokul7/Graphical-Password-Authentication-With-Data-Hiding",
      link: "/projects/graphical-password"
    },
    {
      id: "real-estate",
      typeLabel: "Academic project",
      badge: "Mini project",
      timeline: "Apr 2024 – May 2024",
      title: "Real Estate Management System",
      description: "A full-stack real estate management platform developed as a mini team project. The application enables property listing, booking management, client interaction, administrative control, and database-driven property operations through an integrated web-based system.",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "XAMPP"],
      github: "https://github.com/Iamgokul7/Real-Estate-Management-System",
      link: "/projects/real-estate"
    }
  ]

  return (
    <PageTransition>
      <div className="relative mx-auto min-h-[80vh] max-w-screen-2xl px-6 py-24 md:px-12">
        {/* Header */}
        <FadeIn direction="up" className="max-w-3xl">
          <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">
            Featured Projects
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            A collection of academic, final year, and independent software engineering projects focused on secure authentication systems, full-stack web application development, enterprise software concepts, and AI-driven solutions.
          </p>
        </FadeIn>

        {/* Projects list */}
        <div className="mt-20 space-y-6">
          {featuredProjects.map((project) => (
            <FadeIn
              key={project.id}
              direction="up"
              className="rounded-3xl bg-card p-8 sm:p-12"
            >
              <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
                {/* Meta details */}
                <div className="space-y-2 text-sm lg:col-span-3">
                  <div className="font-medium text-accent">{project.typeLabel}</div>
                  <div className="leading-relaxed text-muted-label">{project.timeline}</div>
                  {project.badge && (
                    <div className="pt-3">
                      <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                        {project.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Specs */}
                <div className="space-y-6 lg:col-span-6">
                  <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                    {project.title}
                  </h2>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary px-3 py-1.5 text-xs text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-row flex-wrap items-center gap-3 lg:col-span-3 lg:flex-col lg:items-end">
                  <Link
                    href={project.link}
                    className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors duration-200 hover:bg-accent-hover active:scale-[0.98]"
                  >
                    View case study
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-accent hover:text-accent active:scale-[0.98]"
                    >
                      <GithubIcon size={14} />
                      View repository
                    </a>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}
