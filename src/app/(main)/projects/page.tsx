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
      id: "resumetailor-ai",
      typeLabel: "INDEPENDENT PROJECT",
      badge: "PERSONAL INITIATIVE",
      timeline: "TIMELINE:\nJUN 2026 – JUL 2026",
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
      typeLabel: "INDEPENDENT PROJECT",
      badge: "PERSONAL INITIATIVE",
      timeline: "TIMELINE:\nAPR 2026 – JUN 2026",
      title: "ERPilot AI",
      description: "An AI-powered ERP assistant designed to explore how intelligent agents can streamline enterprise workflows, automate information retrieval, and assist business operations through conversational interfaces. The project focuses on integrating modern AI concepts with ERP-inspired data management and workflow automation.",
      tags: ["Python", "Flask", "LangChain", "AI Agents", "SQLite", "Enterprise Workflows"],
      github: "https://github.com/Iamgokul7/ERPilot-AI",
      link: "/projects/erpilot"
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
              className="group border border-border/80 bg-card rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:border-accent/40 hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Meta details */}
                <div className="lg:col-span-3 font-mono text-xs text-muted-label space-y-2 uppercase font-semibold">
                  <div className="font-bold text-accent">{project.typeLabel}</div>
                  <div className="whitespace-pre-line leading-relaxed">{project.timeline}</div>
                  {project.badge && (
                    <div className="inline-block pt-2">
                      <span className="rounded-full bg-white border border-border text-accent text-[9px] font-bold tracking-wider px-2.5 py-1 shadow-sm">
                        {project.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Specs */}
                <div className="lg:col-span-6 space-y-6">
                  <h2 className="text-3xl font-bold uppercase tracking-tight text-foreground transition-colors duration-200">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground text-base font-light leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-white px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-muted-foreground hover:border-accent hover:text-accent transition-colors duration-200 cursor-default shadow-sm"
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
                      className="group flex items-center gap-2 rounded-full bg-accent text-white px-5 py-2.5 text-xs font-semibold shadow-[0_4px_14px_rgba(201,106,61,0.15)] hover:bg-[#b85e34] hover:shadow-[0_8px_20px_rgba(201,106,61,0.25)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
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
                        className="group flex items-center gap-2 rounded-full border border-foreground bg-white text-foreground hover:border-accent hover:text-accent px-5 py-2.5 text-xs font-semibold hover:-translate-y-0.5 active:scale-95 transition-all duration-300 shadow-sm"
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
