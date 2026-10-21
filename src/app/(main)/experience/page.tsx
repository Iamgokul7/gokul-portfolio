"use client"

import { experienceTimeline } from "@/data/experience"
import { FadeIn } from "@/components/animations/fade-in"
import { PageTransition } from "@/components/animations/transitions/page-transition"
import { Briefcase, FileText } from "lucide-react"

export default function ExperiencePage() {
  return (
    <PageTransition>
      <div className="relative mx-auto min-h-[80vh] max-w-screen-xl px-6 py-24 md:px-12">
        {/* Header */}
        <FadeIn direction="up" className="max-w-3xl pb-16">
          <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">
            Professional Experience
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            A chronological timeline of my professional software engineering internships, technical roles, and verified industry credentials.
          </p>
        </FadeIn>

        {/* Timeline Layout */}
        <div className="max-w-4xl">
          <div className="relative space-y-12 border-l border-border pl-8">
            {experienceTimeline.map((milestone, idx) => (
              <div key={milestone.id} className="relative">
                {/* Timeline node */}
                <div className="absolute -left-[37px] top-2 h-3 w-3 rounded-full bg-accent" />

                <FadeIn direction="up" delay={idx * 0.08} className="rounded-3xl bg-card p-6 sm:p-10">
                  <span className="block text-sm font-medium text-accent">
                    {milestone.period}
                  </span>
                  <div className="mt-4 flex items-start gap-4">
                    <div className="mt-1 shrink-0 rounded-xl bg-secondary p-2.5 text-accent">
                      <Briefcase size={18} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                        {milestone.role}
                      </h3>
                      <span className="mt-2 block text-sm text-muted-label">
                        {milestone.company} &bull; {milestone.location}
                      </span>

                      <ul className="mt-6 space-y-3 text-base leading-relaxed text-muted-foreground">
                        {milestone.description.map((desc, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-3">
                            <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      {/* View Certificate Button */}
                      <div className="mt-8">
                        <a
                          href={milestone.certificate}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-accent hover:text-accent active:scale-[0.98]"
                        >
                          <FileText size={14} />
                          View certificate
                        </a>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
