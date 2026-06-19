"use client"

import { experienceTimeline } from "@/data/experience"
import { certifications } from "@/data/certifications"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { Award, Calendar, MapPin } from "lucide-react"

export function TimelineSection() {
  return (
    <section className="relative px-6 md:px-12 py-32 sm:py-48 max-w-screen-2xl mx-auto border-t border-border/40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Left Column: Experience Timeline */}
        <div className="lg:col-span-7">
          <FadeIn direction="up">
            <span className="text-4xl sm:text-6xl font-bold font-mono tracking-tighter text-foreground/40 block select-none">
              03
            </span>
            <span className="text-xs uppercase tracking-widest font-mono font-bold text-foreground mt-2 block mb-16">
              EXPERIENCE
            </span>
          </FadeIn>

          <div className="relative pl-6 border-l border-border/40 space-y-20">
            {experienceTimeline.map((event, idx) => (
              <div key={event.id} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border border-border bg-background group-hover:bg-foreground transition-colors duration-300" />
                
                <FadeIn direction="up" delay={idx * 0.08}>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold uppercase tracking-tight text-foreground">{event.role}</h3>
                      <span className="text-sm font-mono text-muted-foreground mt-1.5 block">{event.company}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground font-mono mt-1">
                      <span className="flex items-center gap-1.5"><Calendar size={12} /> {event.period}</span>
                      <span className="flex items-center gap-1.5"><MapPin size={12} /> {event.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-3.5 text-sm font-light text-muted-foreground leading-relaxed">
                    {event.description.map((desc, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/60" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Certifications */}
        <div className="lg:col-span-5">
          <FadeIn direction="up">
            <span className="text-4xl sm:text-6xl font-bold font-mono tracking-tighter text-foreground/40 block select-none">
              04
            </span>
            <span className="text-xs uppercase tracking-widest font-mono font-bold text-foreground mt-2 block mb-16">
              CERTIFICATIONS
            </span>
          </FadeIn>

          <StaggerContainer className="space-y-6">
            {certifications.map((cert, idx) => (
              <FadeIn key={cert.name} direction="up" className="group rounded-2xl border border-border/40 bg-card/20 dark:bg-card/10 hover:bg-card hover:border-foreground/20 p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 border border-border/40 rounded-xl bg-background group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                      <Award size={18} />
                    </div>
                    <div>
                      <h3 className="font-bold uppercase tracking-tight text-sm text-foreground mb-1">
                        {cert.name}
                      </h3>
                      <p className="text-xs text-muted-foreground font-mono">{cert.issuer}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{cert.year}</span>
                </div>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
