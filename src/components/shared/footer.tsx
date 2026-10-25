"use client"

import { siteConfig } from "@/data/site-config"
import { ResumeButton } from "./resume-button"
import { ShinyText } from "@/components/ui/shiny-text"
import { DotGrid } from "@/components/effects/dot-grid"

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-border/40 bg-card">
      <DotGrid />

      <div className="relative z-10 mx-auto max-w-screen-2xl px-6 py-10 md:px-12 md:py-14">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              <ShinyText text="Gokul P" speed={4} />
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">Full Stack & AI Engineer</p>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors duration-200 hover:text-accent"
            >
              GitHub
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors duration-200 hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-muted-foreground transition-colors duration-200 hover:text-accent"
            >
              Email
            </a>
            <ResumeButton
              variant="link"
              className="text-sm text-muted-foreground hover:text-accent"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-border/30 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground/50">
            &copy; {new Date().getFullYear()} Gokul P. Built with Next.js & Framer Motion.
          </p>
          <p className="text-xs text-muted-foreground/50">Chennai, India</p>
        </div>
      </div>
    </footer>
  )
}
