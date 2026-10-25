"use client"

import * as React from "react"
import { projects } from "@/data/projects"
import { notFound } from "next/navigation"
import { FadeIn } from "@/components/animations/fade-in"
import { PageTransition } from "@/components/animations/transitions/page-transition"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { GithubIcon } from "@/components/ui/icons"
import { StaggeredText } from "@/components/ui/staggered-text"
import { ImageGallery } from "@/components/projects/image-gallery"

const sectionHeading = "text-2xl font-semibold tracking-tight text-foreground mb-6 text-glow-sm"
const bodyText = "text-base leading-relaxed text-muted-foreground text-justify"

export function ProjectDetail({ slug }: { slug: string }) {
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
        <FadeIn direction="up" className="pb-10">
          <span className="block text-sm font-medium text-accent">
            {project.typeLabel}
          </span>
          <StaggeredText
            text={project.title}
            as="h1"
            className={`mt-4 font-semibold leading-[1.05] tracking-tight text-foreground text-glow ${project.title.length > 28 ? "text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl xl:whitespace-nowrap" : "break-words text-4xl sm:text-6xl"}`}
            segmentBy="chars"
            delay={45}
            duration={0.55}
            direction="bottom"
            blur={true}
          />
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

        {/* 2. Project Details Card — full width, stacked */}
        <FadeIn direction="up" delay={0.1} className="pb-16">
          <div className="rounded-3xl bg-card p-6 sm:p-10 card-depth flex flex-col items-center gap-8">
            {/* Top row: fields centered */}
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-5">
              {project.sidebarFields.map((field, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground/60 mb-1">{field.label}</p>
                  <p className="text-sm text-foreground whitespace-pre-line">{field.value}</p>
                </div>
              ))}
            </div>
            {/* Bottom row: buttons + badge centered */}
            {(project.github || project.liveDemo) && (
              <div className="flex flex-col items-center gap-3">
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors duration-200 hover:bg-accent-hover active:scale-[0.98]"
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
                      Live demo
                    </a>
                  )}
                </div>
                {project.demoBadge && (
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground text-center">
                    {project.demoBadge}
                  </span>
                )}
              </div>
            )}
          </div>
        </FadeIn>

        {/* Full-width content sections */}
        <div className="space-y-20">

          {/* 3. Project Overview */}
          <FadeIn direction="up">
            <h2 className={sectionHeading}>Project Overview</h2>
            <p className={`mb-8 whitespace-pre-line text-lg font-light leading-relaxed text-muted-foreground text-justify`}>
              {project.description}
            </p>
            {project.details.length > 0 && (
              <div>
                <h3 className="mb-4 text-sm font-semibold text-foreground">
                  {project.id === "erpilot" ? "Key achievements" : "Key highlights"}
                </h3>
                <ul className="grid grid-cols-1 gap-x-12 gap-y-3 sm:grid-cols-2 text-base leading-relaxed text-muted-foreground">
                  {project.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span className="text-justify">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </FadeIn>

          {/* 4. Problem Statement */}
          <FadeIn direction="up">
            <h2 className={sectionHeading}>Problem Statement</h2>
            <p className={bodyText}>
              {project.problem}
            </p>
          </FadeIn>

          {/* 5. Solution Approach */}
          <FadeIn direction="up">
            <h2 className={sectionHeading}>Solution Approach</h2>
            <p className={`whitespace-pre-line ${bodyText}`}>
              {project.solution}
            </p>
          </FadeIn>

          {/* 6. Architecture Overview */}
          <FadeIn direction="up">
            <h2 className={sectionHeading}>Architecture Overview</h2>
            <p className={`whitespace-pre-line ${bodyText} ${project.architectureBullets ? "mb-6" : ""}`}>
              {project.architectureDescription}
            </p>
            {project.architectureBullets && (
              <ul className="grid grid-cols-1 gap-x-12 gap-y-3 sm:grid-cols-2 text-base leading-relaxed text-muted-foreground">
                {project.architectureBullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span className="text-justify">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </FadeIn>

          {/* 7. Tech Stack */}
          <FadeIn direction="up">
            <h2 className={sectionHeading}>Tech Stack</h2>
            {project.techStackGroups ? (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {project.techStackGroups.map((group, idx) => (
                  <div key={idx} className="space-y-4 rounded-2xl bg-card p-5 card-depth">
                    <h3 className="text-sm font-semibold text-foreground">
                      {group.category}
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {group.technologies.map((tech, tIdx) => (
                        <li key={tIdx} className="flex items-center gap-2">
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

          {/* 8. Key Features */}
          <FadeIn direction="up">
            <h2 className={sectionHeading}>Key Features</h2>
            <ul className="grid grid-cols-1 gap-x-12 gap-y-3 sm:grid-cols-2 lg:grid-cols-3 text-base leading-relaxed text-muted-foreground">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span className="text-justify">{feature}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* System Modules (Optional) */}
          {project.modules && (
            <FadeIn direction="up">
              <h2 className={sectionHeading}>System Modules</h2>
              <ul className="grid grid-cols-1 gap-x-12 gap-y-3 sm:grid-cols-2 lg:grid-cols-4 text-base leading-relaxed text-muted-foreground">
                {project.modules.map((module, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span className="text-justify">{module}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          )}

          {/* 9. Lessons Learned */}
          <FadeIn direction="up">
            <h2 className={sectionHeading}>Lessons Learned</h2>
            <div className="rounded-3xl bg-card p-6 sm:p-10 card-depth">
              <p className="mb-4 text-sm font-medium text-accent">Retrospective</p>
              <p className={`whitespace-pre-line ${bodyText}`}>
                {project.lessonsLearned}
              </p>
            </div>
          </FadeIn>

        </div>

        {/* Screenshot Gallery — full width */}
        {project.screenshots && project.screenshots.length > 0 && (
          <FadeIn direction="up" className="mt-24">
            <ImageGallery projectId={project.id} screenshots={project.screenshots} />
          </FadeIn>
        )}
      </div>
    </PageTransition>
  )
}
