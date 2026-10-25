"use client"
import { StaggeredText } from "@/components/ui/staggered-text"

import { useState } from "react"
import { siteConfig } from "@/data/site-config"
import { FadeIn } from "@/components/animations/fade-in"
import { PageTransition } from "@/components/animations/transitions/page-transition"
import { Copy, Check } from "lucide-react"
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
      <div className="relative mx-auto flex min-h-[80vh] max-w-screen-xl flex-col justify-center px-6 py-24 md:px-12">
        {/* Header */}
        <FadeIn direction="up" className="max-w-3xl pb-16">
          <span className="text-sm font-medium text-muted-label">Communications</span>
          <StaggeredText text="Get In Touch" as="h1" className="mt-4 text-5xl font-semibold tracking-tight text-foreground sm:text-7xl" segmentBy="chars" delay={45} duration={0.55} direction="bottom" blur={true} />
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            If you are a recruiter, hiring manager, or software engineer looking to discuss technical opportunities, cloud architectures, or backend systems, reach out.
          </p>
        </FadeIn>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
          {/* Email Copy Card */}
          <FadeIn direction="up" delay={0.1} className="flex min-h-[240px] flex-col justify-between rounded-3xl bg-card p-8 sm:p-10">
            <div>
              <span className="block text-sm font-medium text-accent">Primary email</span>
              <h2 className="mt-6 break-all text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {siteConfig.email}
              </h2>
            </div>

            <div className="mt-10">
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors duration-200 hover:bg-accent-hover active:scale-[0.98] cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check size={14} />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    Copy email
                  </>
                )}
              </button>
            </div>
          </FadeIn>

          {/* Social links */}
          <FadeIn direction="up" delay={0.2} className="flex min-h-[240px] flex-col justify-between rounded-3xl bg-card p-8 sm:p-10">
            <div>
              <span className="block text-sm font-medium text-accent">Professional portals</span>
              <div className="mt-6 space-y-3">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-secondary px-5 py-4 text-foreground transition-colors duration-200 hover:text-accent"
                >
                  <GithubIcon size={16} />
                  <span>github.com/Iamgokul7</span>
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-secondary px-5 py-4 text-foreground transition-colors duration-200 hover:text-accent"
                >
                  <LinkedinIcon size={16} />
                  <span>linkedin.com/in/gokulp0807</span>
                </a>
              </div>
            </div>

            <div className="mt-10 text-sm text-muted-label">
              Secure envelope encryption active
            </div>
          </FadeIn>
        </div>
      </div>
    </PageTransition>
  )
}
