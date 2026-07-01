"use client"

import { experienceTimeline } from "@/data/experience"
import { FadeIn } from "@/components/animations/fade-in"
import { PageTransition } from "@/components/animations/transitions/page-transition"
import { Briefcase, FileText } from "lucide-react"

export default function ExperiencePage() {
  return (
    <PageTransition>
      <div className="relative px-6 md:px-12 py-24 sm:py-32 max-w-screen-xl mx-auto min-h-[80vh]">
        {/* Header */}
        <div className="border-b border-border/40 pb-12 mb-16 max-w-3xl">
          <FadeIn direction="up">
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter uppercase text-foreground">
              Professional Experience
            </h1>
            <p className="mt-6 text-lg text-muted-foreground font-light leading-relaxed">
              A chronological timeline of my professional software engineering internships, technical roles, and verified industry credentials.
            </p>
          </FadeIn>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl">
          <div className="relative pl-6 border-l border-l-border/80 space-y-16">
            {experienceTimeline.map((milestone, idx) => (
              <div key={milestone.id} className="relative group">
                {/* Timeline bullet */}
                <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border border-accent bg-accent shadow-[0_0_10px_rgba(201,106,61,0.2)] flex items-center justify-center text-[8px]" />
                
                <FadeIn direction="up" delay={idx * 0.08}>
                  <span className="text-xs font-mono font-bold text-accent block mb-2">
                    {milestone.period}
                  </span>
                  <div className="flex items-start gap-4">
                    <div className="p-2 border border-border/80 rounded-lg bg-[#F5F2EC]/40 text-accent shrink-0 mt-1">
                      <Briefcase size={16} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground">
                        {milestone.role}
                      </h3>
                      <span className="text-xs font-mono text-muted-label block mt-1.5 uppercase tracking-wider font-semibold">
                        {milestone.company} &bull; {milestone.location}
                      </span>
                      
                      <ul className="mt-4 space-y-2.5 text-sm font-light text-muted-foreground leading-relaxed">
                        {milestone.description.map((desc, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      {/* View Certificate Button */}
                      <div className="mt-6">
                        <a
                          href={milestone.certificate}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-foreground bg-white text-foreground px-5 py-2.5 text-xs font-mono uppercase tracking-wider hover:border-accent hover:text-accent hover:-translate-y-0.5 active:scale-95 transition-all duration-300 shadow-sm"
                        >
                          <FileText size={12} />
                          View Certificate
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
