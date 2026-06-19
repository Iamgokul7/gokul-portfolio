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
            className="group border border-border/40 bg-card/20 dark:bg-card/10 p-8 rounded-3xl flex flex-col justify-between min-h-[220px]"
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono font-medium block mb-6">
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
                  className="flex items-center gap-2 rounded-full border border-foreground bg-foreground text-background px-6 py-3 text-xs font-semibold hover:bg-background hover:text-foreground transition-colors duration-300 shadow-xl"
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
            className="border border-border/40 bg-card/20 dark:bg-card/10 p-8 rounded-3xl flex flex-col justify-between min-h-[220px]"
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono font-medium block mb-6">
                PROFESSIONAL PORTALS
              </span>
              <div className="space-y-4">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors font-mono text-sm border-b border-border/40 pb-2.5"
                >
                  <GithubIcon size={16} />
                  <span>github.com/Iamgokul7</span>
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors font-mono text-sm pb-1"
                >
                  <LinkedinIcon size={16} />
                  <span>linkedin.com/in/gokulp0807</span>
                </a>
              </div>
            </div>

            <div className="text-[10px] font-mono text-muted-foreground/45 mt-8 select-none">
              SECURE ENVELOPE ENCRYPTION ACTIVE
            </div>
          </FadeIn>
        </div>
      </div>
    </PageTransition>
  )
}
