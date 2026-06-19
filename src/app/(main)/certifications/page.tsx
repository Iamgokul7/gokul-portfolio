"use client"

import { certifications } from "@/data/certifications"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { PageTransition } from "@/components/animations/transitions/page-transition"
import { Award, ShieldCheck, CheckCircle } from "lucide-react"

export default function CertificationsPage() {
  return (
    <PageTransition>
      <div className="relative px-6 md:px-12 py-24 sm:py-32 max-w-screen-xl mx-auto min-h-[80vh]">
        {/* Header */}
        <div className="border-b border-border/40 pb-12 mb-16 max-w-3xl">
          <FadeIn direction="up">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono font-medium block">
              // VERIFICATION
            </span>
            <h1 className="mt-4 text-5xl sm:text-7xl font-bold tracking-tighter uppercase text-foreground">
              Technical Credentials
            </h1>
            <p className="mt-6 text-lg text-muted-foreground font-light leading-relaxed">
              Academic certifications and technical credentials validating skills in cloud architectures, networking configurations, software design, and user interfaces.
            </p>
          </FadeIn>
        </div>

        {/* Certifications Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <FadeIn
              key={cert.name}
              direction="up"
              className="group border border-border/40 bg-card/20 dark:bg-card/10 hover:bg-card hover:border-foreground/20 rounded-2xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between min-h-[180px]"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 border border-border/40 rounded-xl bg-background text-muted-foreground group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                  <Award size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-tight text-foreground leading-snug">
                    {cert.name}
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground block mt-1.5">
                    ISSUED BY: {cert.issuer}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/30 flex justify-between items-center text-xs font-mono text-muted-foreground/60">
                <span>YEAR: {cert.year}</span>
                <span className="flex items-center gap-1.5 text-foreground/70">
                  <ShieldCheck size={14} className="text-muted-foreground/60" />
                  VERIFIED ACTIVE
                </span>
              </div>
            </FadeIn>
          ))}
        </StaggerContainer>
      </div>
    </PageTransition>
  )
}
