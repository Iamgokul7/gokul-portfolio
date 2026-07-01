"use client"

import { siteConfig } from "@/data/site-config"
import { ResumeButton } from "./resume-button"

export function Footer() {
  return (
    <footer className="w-full bg-background pb-12 pt-24 sm:pt-32 border-t border-border mt-24">
      <div className="mx-auto max-w-screen-2xl px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h2 className="text-xl font-bold uppercase tracking-widest text-foreground font-mono">
              Gokul P
            </h2>
            <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground font-mono">
              Software Engineer
            </p>
          </div>

          <div className="flex flex-wrap gap-6 items-center">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              GitHub
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              Email
            </a>
            <ResumeButton
              variant="link"
              className="text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors duration-300 p-0 h-auto"
            />
          </div>
        </div>

        <div className="mt-16 border-t border-border/30 pt-6 flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-muted-label font-semibold">
          <span>&copy; {new Date().getFullYear()} Gokul P</span>
        </div>
      </div>
    </footer>
  )
}
