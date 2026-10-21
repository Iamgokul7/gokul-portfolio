"use client"

import * as React from "react"
import { projects } from "@/data/projects"
import { notFound } from "next/navigation"
import { FadeIn } from "@/components/animations/fade-in"
import { PageTransition } from "@/components/animations/transitions/page-transition"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { GithubIcon } from "@/components/ui/icons"
import { ImageGallery } from "@/components/projects/image-gallery"

const sectionHeading = "text-2xl font-semibold tracking-tight text-foreground mb-6"

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params)
  const project = projects.find((p) => p.id === slug)

  if (!project) {
    notFound()
  }

  return (
    <PageTransition>
      <div className="relative mx-auto min-h-screen max-w-screen-xl px-6 py-24 md:px-12">
        {/* Back Navigation */}
        <div className="mb-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
          >
            <ArrowLeft size={14} />
            Back to work
          </Link>
        </div>

        {/* 1. Hero Section */}
        <FadeIn direction="up" className="pb-16">
          <span className="block text-sm font-medium text-accent">
            {project.typeLabel}
          </span>
          <h1 className="mt-4 break-words text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
            {project.title}
          </h1>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-secondary px-3 py-1.5 text-xs text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Content Columns */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Main Case Study Content (Left) */}
          <div className="space-y-20 lg:col-span-8">
            {/* 2. Project Overview */}
            <FadeIn direction="up">
              <h2 className={sectionHeading}>Project Overview</h2>
              <p className="mb-8 whitespace-pre-line text-lg font-light leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              {project.details.length > 0 && (
                <div>
                  <h3 className="mb-4 text-sm font-semibold text-foreground">
                    {project.id === "erpilot" ? "Key achievements" : "Key highlights"}
                  </h3>
                  <ul className="space-y-3 text-base leading-relaxed text-muted-foreground">
                    {project.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </FadeIn>

            {/* 3. Problem Statement */}
            <FadeIn direction="up">
              <h2 className={sectionHeading}>Problem Statement</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {project.problem}
              </p>
            </FadeIn>

            {/* 4. Solution Approach */}
            <FadeIn direction="up">
              <h2 className={sectionHeading}>Solution Approach</h2>
              <p className="whitespace-pre-line text-base leading-relaxed text-muted-foreground">
                {project.solution}
              </p>
            </FadeIn>

            {/* 5. Architecture Overview */}
            <FadeIn direction="up">
              <h2 className={sectionHeading}>Architecture Overview</h2>
              <p className={`whitespace-pre-line text-base leading-relaxed text-muted-foreground ${project.architectureBullets ? "mb-6" : ""}`}>
                {project.architectureDescription}
              </p>
              {project.architectureBullets && (
                <ul className="space-y-3 text-base leading-relaxed text-muted-foreground">
                  {project.architectureBullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </FadeIn>

            {/* 6. Tech Stack */}
            <FadeIn direction="up">
              <h2 className={sectionHeading}>Tech Stack</h2>
              {project.techStackGroups ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {project.techStackGroups.map((group, idx) => (
                    <div key={idx} className="space-y-4 rounded-2xl bg-card p-6">
                      <h3 className="text-sm font-semibold text-foreground">
                        {group.category}
                      </h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {group.technologies.map((tech, tIdx) => (
                          <li key={tIdx} className="flex items-center gap-3">
                            <span className="h-1 w-1 rounded-full bg-accent" />
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
                      className="rounded-full bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </FadeIn>

            {/* 7. Features */}
            <FadeIn direction="up">
              <h2 className={sectionHeading}>Key Features</h2>
              <ul className="space-y-3 text-base leading-relaxed text-muted-foreground">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* System Modules (Optional) */}
            {project.modules && (
              <FadeIn direction="up">
                <h2 className={sectionHeading}>System Modules</h2>
                <ul className="space-y-3 text-base leading-relaxed text-muted-foreground">
                  {project.modules.map((module, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
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
              <h2 className={sectionHeading}>Lessons Learned</h2>
              <div className="rounded-3xl bg-card p-6 sm:p-10">
                <p className="mb-4 text-sm font-medium text-accent">Retrospective</p>
                <p className="whitespace-pre-line text-base leading-relaxed text-muted-foreground">
                  {project.lessonsLearned}
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Project Sidebar metadata (Right) */}
          <div className="lg:col-span-4">
            <FadeIn direction="up" delay={0.2} className="sticky top-28 rounded-3xl bg-card p-6 sm:p-8">
              <h3 className="mb-6 text-lg font-semibold tracking-tight text-foreground">
                Project Details
              </h3>
              <ul className="space-y-4 text-sm text-muted-foreground">
                {project.sidebarFields.map((field, idx) => (
                  <li
                    key={idx}
                    className={`flex items-start justify-between gap-6 ${idx < project.sidebarFields.length - 1 ? "border-b border-border pb-4" : ""}`}
                  >
                    <span className="shrink-0 text-muted-label">{field.label}</span>
                    <span className="whitespace-pre-line text-right text-foreground">{field.value}</span>
                  </li>
                ))}
              </ul>

              {/* 9. GitHub Repository Link */}
              <div className="mt-8 flex flex-col gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors duration-200 hover:bg-accent-hover active:scale-[0.98]"
                  >
                    <GithubIcon size={14} />
                    View repository
                  </a>
                )}
                {project.liveDemo && (
                  <div className="flex flex-col items-center gap-3">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-accent hover:text-accent active:scale-[0.98]"
                    >
                      Live demo
                    </a>
                    {project.demoBadge && (
                      <span className="rounded-full bg-secondary px-3 py-1 text-center text-xs text-muted-foreground">
                        {project.demoBadge}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
