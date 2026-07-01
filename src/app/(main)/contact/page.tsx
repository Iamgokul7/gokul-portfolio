"use client"

import { useState } from "react"
import { siteConfig } from "@/data/site-config"
import { FadeIn } from "@/components/animations/fade-in"
import { MagneticButton } from "@/components/animations/magnetic-button"
import { PageTransition } from "@/components/animations/transitions/page-transition"
import { Mail, Copy, Check } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons"

export default function ContactPage() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <PageTransition>
      <div className="relative px-6 md:px-12 py-24 sm:py-32 max-w-screen-xl mx-auto min-h-[80vh] flex flex-col justify-center">
        {/* Header */}
        <div className="border-b border-border/40 pb-12 mb-16 max-w-3xl">
          <FadeIn direction="up">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono font-medium block">
              // COMMUNICATIONS
            </span>
            <h1 className="mt-4 text-5xl sm:text-7xl font-bold tracking-tighter uppercase text-foreground">
              Get In Touch
            </h1>
            <p className="mt-6 text-lg text-muted-foreground font-light leading-relaxed">
              If you are a recruiter, hiring manager, or software engineer looking to discuss technical opportunities, cloud architectures, or backend systems, reach out.
            </p>
          </FadeIn>
        </div>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Email Copy Card */}
          <FadeIn
            direction="up"
            delay={0.2}
            className="group border border-border/80 bg-card p-8 rounded-3xl flex flex-col justify-between min-h-[220px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:border-accent/40 hover:-translate-y-1.5 transition-all duration-300"
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-accent font-mono font-bold block mb-6">
                PRIMARY EMAIL
              </span>
              <h2 className="text-2xl font-mono text-foreground font-semibold break-all">
                {siteConfig.email}
              </h2>
            </div>

            <div className="mt-8">
              <MagneticButton>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-2 rounded-full bg-accent text-white px-6 py-3 text-xs font-semibold shadow-[0_4px_14px_rgba(201,106,61,0.15)] hover:bg-[#b85e34] hover:shadow-[0_8px_20px_rgba(201,106,61,0.25)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
                >
                  {copied ? (
                    <>
                      <Check size={14} />
                      COPIED!
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      COPY EMAIL
                    </>
                  )}
                </button>
              </MagneticButton>
            </div>
          </FadeIn>

          {/* Social vectors */}
          <FadeIn
            direction="up"
            delay={0.3}
            className="group border border-border/80 bg-card p-8 rounded-3xl flex flex-col justify-between min-h-[220px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:border-accent/40 hover:-translate-y-1.5 transition-all duration-300"
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-accent font-mono font-bold block mb-6">
                PROFESSIONAL PORTALS
              </span>
              <div className="space-y-4">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors font-mono text-sm border-b border-border/40 pb-2.5"
                >
                  <GithubIcon size={16} />
                  <span>github.com/Iamgokul7</span>
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors font-mono text-sm pb-1"
                >
                  <LinkedinIcon size={16} />
                  <span>linkedin.com/in/gokulp0807</span>
                </a>
              </div>
            </div>

            <div className="text-[10px] font-mono text-muted-label mt-8 select-none font-semibold">
              SECURE ENVELOPE ENCRYPTION ACTIVE
            </div>
          </FadeIn>
        </div>
      </div>
    </PageTransition>
  )
}
