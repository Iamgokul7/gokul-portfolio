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
            <span className="text-xs uppercase tracking-widest text-muted-label font-mono font-semibold block">
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
              className="group border border-border/80 bg-card rounded-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:border-accent/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[180px]"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 border border-border/60 rounded-xl bg-[#F5F2EC]/50 text-accent transition-colors duration-300">
                  <Award size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-tight text-foreground leading-snug">
                    {cert.name}
                  </h3>
                  <span className="text-xs font-mono text-muted-label block mt-1.5 font-semibold">
                    ISSUED BY: {cert.issuer}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/30 flex justify-between items-center text-xs font-mono text-muted-label font-semibold">
                <span>YEAR: {cert.year}</span>
                <span className="flex items-center gap-1.5 text-accent font-bold">
                  <ShieldCheck size={14} className="text-accent" />
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
