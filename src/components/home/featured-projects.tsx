"use client"

import Link from "next/link"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { TiltCard } from "@/components/ui/tilt-card"

const homeProjects = [
  {
    name: "ResumeTailor AI",
    description: "AI-powered resume customization engine with ATS-safe PDF generation.",
    tags: ["Python", "FastAPI", "Gemini API", "WeasyPrint"],
    href: "/projects/resumetailor-ai",
  },
  {
    name: "ERPilot AI",
    description: "Multi-tenant ERP SaaS with AI assistant and role-based access control.",
    tags: ["Python", "Flask", "SQLite", "Docker"],
    href: "/projects/erpilot",
  },
  {
    name: "Graphical Password Auth",
    description: "3-factor auth system with AES encryption and DWT steganography. Published.",
    tags: ["Python", "Flask", "OpenCV", "AES"],
    href: "/projects/graphical-password",
  },
  {
    name: "Real Estate Management System",
    description: "Full-stack property platform with booking and admin workflows.",
    tags: ["PHP", "MySQL", "JavaScript", "HTML"],
    href: "/projects/real-estate",
  },
]

export function FeaturedProjects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-screen-2xl scroll-mt-24 px-6 py-24 md:px-12">
      <ScrollReveal direction="up">
        <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Selected work</h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Detailed case studies of engineered systems, custom cybersecurity protocols, and cloud-native integrations.
        </p>
      </ScrollReveal>

      <ScrollReveal direction="up" stagger={0.12} className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
        {homeProjects.map((project) => (
          <TiltCard key={project.name} className="flex">
            <article className="group flex w-full flex-col rounded-3xl bg-card p-8">
              <h3 className="text-2xl font-semibold tracking-tight text-foreground">{project.name}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <Link
                  href={project.href}
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors duration-200 hover:text-accent"
                >
                  View case study →
                </Link>
              </div>
            </article>
          </TiltCard>
        ))}
      </ScrollReveal>
    </section>
  )
}
