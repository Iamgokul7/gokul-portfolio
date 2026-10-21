"use client"

import { certifications } from "@/data/certifications"
import { FadeIn } from "@/components/animations/fade-in"
import { PageTransition } from "@/components/animations/transitions/page-transition"
import { Award, ShieldCheck } from "lucide-react"

export default function CertificationsPage() {
  return (
    <PageTransition>
      <div className="relative mx-auto min-h-[80vh] max-w-screen-xl px-6 py-24 md:px-12">
        {/* Header */}
        <FadeIn direction="up" className="max-w-3xl pb-16">
          <span className="text-sm font-medium text-muted-label">Verification</span>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">
            Technical Credentials
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Academic certifications and technical credentials validating skills in cloud architectures, networking configurations, software design, and user interfaces.
          </p>
        </FadeIn>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {certifications.map((cert) => (
            <FadeIn
              key={cert.name}
              direction="up"
              className="flex min-h-[200px] flex-col justify-between rounded-3xl bg-card p-8"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 rounded-xl bg-secondary p-3 text-accent">
                  <Award size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold leading-snug tracking-tight text-foreground">
                    {cert.name}
                  </h3>
                  <span className="mt-2 block text-sm text-muted-foreground">
                    Issued by {cert.issuer}
                  </span>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between text-sm text-muted-label">
                <span>Year {cert.year}</span>
                <span className="flex items-center gap-1.5 font-medium text-accent">
                  <ShieldCheck size={14} />
                  Verified active
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}
