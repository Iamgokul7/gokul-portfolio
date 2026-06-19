"use client"

import * as React from "react"
import { projects } from "@/data/projects"
import { notFound } from "next/navigation"
import { FadeIn } from "@/components/animations/fade-in"
import { PageTransition } from "@/components/animations/transitions/page-transition"
import { MagneticButton } from "@/components/animations/magnetic-button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { GithubIcon } from "@/components/ui/icons"
import { ImageGallery } from "@/components/projects/image-gallery"

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params)
  const project = projects.find((p) => p.id === slug)

  if (!project) {
    notFound()
  }

  return (
    <PageTransition>
      <div className="relative px-6 md:px-12 py-24 sm:py-32 max-w-screen-xl mx-auto min-h-screen">
        {/* Back Navigation */}
        <div className="mb-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <ArrowLeft size={14} />
            BACK TO WORKS
          </Link>
        </div>

        {/* 1. Hero Section */}
        <div className="border-b border-border/40 pb-12 mb-16">
          <FadeIn direction="up">
            <span className="text-xs font-mono text-muted-foreground/60 uppercase tracking-widest block mb-4">
              {project.typeLabel}
            </span>
            <h1 className="text-3xl sm:text-6xl font-bold tracking-tighter uppercase text-foreground leading-none break-words">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Case Study Content (Left) */}
          <div className="lg:col-span-8 space-y-16">
            {/* 2. Project Overview */}
            <FadeIn direction="up">
              <h2 className="text-lg font-mono uppercase tracking-widest text-foreground/80 border-b border-border/30 pb-2 mb-4">Project Overview</h2>
              <p className="whitespace-pre-line text-lg text-muted-foreground font-light leading-relaxed mb-6">
                {project.description}
              </p>
              {project.details.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-foreground font-semibold mb-3">
                    {project.id === "erpilot" ? "Key Achievements" : "Key Highlights"}
                  </h3>
                  <ul className="space-y-3 text-sm font-light text-muted-foreground/90 leading-relaxed">
                    {project.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground/60" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </FadeIn>

            {/* 3. Problem Statement */}
            <FadeIn direction="up">
              <h2 className="text-lg font-mono uppercase tracking-widest text-foreground/80 border-b border-border/30 pb-2 mb-4">Problem Statement</h2>
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                {project.problem}
              </p>
            </FadeIn>

            {/* 4. Solution Approach */}
            <FadeIn direction="up">
              <h2 className="text-lg font-mono uppercase tracking-widest text-foreground/80 border-b border-border/30 pb-2 mb-4">Solution Approach</h2>
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                {project.solution}
              </p>
            </FadeIn>

            {/* 5. Architecture Overview */}
            <FadeIn direction="up">
              <h2 className="text-lg font-mono uppercase tracking-widest text-foreground/80 border-b border-border/30 pb-2 mb-4">Architecture Overview</h2>
              <p className={`text-base text-muted-foreground font-light leading-relaxed ${project.architectureBullets ? "mb-6" : ""}`}>
                {project.architectureDescription}
              </p>
              {project.architectureBullets && (
                <ul className="space-y-3 text-sm font-light text-muted-foreground leading-relaxed">
                  {project.architectureBullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </FadeIn>

            {/* 6. Tech Stack */}
            <FadeIn direction="up">
              <h2 className="text-lg font-mono uppercase tracking-widest text-foreground/80 border-b border-border/30 pb-2 mb-6">Tech Stack</h2>
              {project.techStackGroups ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {project.techStackGroups.map((group, idx) => (
                    <div key={idx} className="space-y-3">
                      <h3 className="text-xs font-mono uppercase tracking-widest text-foreground font-semibold border-b border-border/20 pb-1.5">
                        {group.category}
                      </h3>
                      <ul className="space-y-1.5 text-sm font-light text-muted-foreground">
                        {group.technologies.map((tech, tIdx) => (
                          <li key={tIdx} className="flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-foreground/30" />
                            <span>{tech}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-border/80 bg-card/35 px-4 py-2 text-xs font-mono uppercase tracking-wider text-foreground hover:border-foreground/35 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </FadeIn>

            {/* 7. Features */}
            <FadeIn direction="up">
              <h2 className="text-lg font-mono uppercase tracking-widest text-foreground/80 border-b border-border/30 pb-2 mb-4">Key Features</h2>
              <ul className="space-y-3 text-sm font-light text-muted-foreground leading-relaxed">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* System Modules (Optional) */}
            {project.modules && (
              <FadeIn direction="up">
                <h2 className="text-lg font-mono uppercase tracking-widest text-foreground/80 border-b border-border/30 pb-2 mb-4">System Modules</h2>
                <ul className="space-y-3 text-sm font-light text-muted-foreground leading-relaxed">
                  {project.modules.map((module, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" />
                      <span>{module}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            )}

            {/* 8. Screenshot Gallery */}
            <FadeIn direction="up">
              <ImageGallery projectId={project.id} screenshots={project.screenshots} />
            </FadeIn>

            {/* 10. Lessons Learned */}
            <FadeIn direction="up">
              <h2 className="text-lg font-mono uppercase tracking-widest text-foreground/80 border-b border-border/30 pb-2 mb-4">Lessons Learned</h2>
              <div className="rounded-2xl border border-border/40 bg-muted/20 dark:bg-muted/10 p-6 sm:p-8 font-light text-muted-foreground leading-relaxed">
                <p className="text-xs font-mono uppercase tracking-widest text-foreground font-semibold mb-4">Retrospective</p>
                <p className="text-sm sm:text-base text-muted-foreground italic leading-relaxed">
                  &quot;{project.lessonsLearned}&quot;
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Project Sidebar metadata (Right) */}
          <div className="lg:col-span-4 space-y-8">
            <FadeIn direction="up" delay={0.2} className="border border-border/40 bg-card/25 dark:bg-card/10 rounded-2xl p-6 sm:p-8 sticky top-28">
              <h3 className="text-xs uppercase tracking-widest text-foreground font-mono font-bold mb-6">
                Project Details
              </h3>
              <ul className="space-y-4 text-xs font-mono text-muted-foreground leading-relaxed">
                {project.sidebarFields.map((field, idx) => (
                  <li key={idx} className={`flex justify-between items-start ${idx < project.sidebarFields.length - 1 ? 'border-b border-border/30 pb-2' : ''}`}>
                    <span className="shrink-0 mr-4">{field.label}</span>
                    <span className="text-foreground whitespace-pre-line text-right">{field.value}</span>
                  </li>
                ))}
              </ul>

              {/* 9. GitHub Repository Link */}
              <div className="mt-8 pt-6 border-t border-border/30 flex flex-col gap-4">
                {project.github && (
                  <MagneticButton>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 rounded-full border border-foreground bg-foreground text-background px-6 py-3 text-xs font-semibold hover:bg-background hover:text-foreground transition-colors duration-300 w-full"
                    >
                      <GithubIcon size={14} />
                      View Repository
                    </a>
                  </MagneticButton>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

