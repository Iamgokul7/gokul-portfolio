"use client"

import { siteConfig } from "@/data/site-config"
import { ResumeButton } from "./resume-button"

export function Footer() {
  return (
    <footer className="w-full bg-card">
      <div className="mx-auto max-w-screen-2xl px-6 py-16 md:px-12 md:py-20">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Gokul P
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">Software Engineer</p>
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

        <p className="mt-16 text-xs text-muted-label">&copy; {new Date().getFullYear()} Gokul P</p>
      </div>
    </footer>
  )
}
