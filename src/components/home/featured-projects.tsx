"use client"

import { projects } from "@/data/projects"
import { FadeIn } from "@/components/animations/fade-in"
import { MagneticButton } from "@/components/animations/magnetic-button"
import { ArrowRight } from "lucide-react"
import { GithubIcon } from "@/components/ui/icons"

export function FeaturedProjects() {
  return (
    <section id="projects" className="relative px-6 md:px-12 py-32 sm:py-48 max-w-screen-2xl mx-auto scroll-mt-24">
      {/* Title */}
      <div className="mb-20 sm:mb-28 max-w-3xl">
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono font-medium block">
          02 / SELECTED WORK
        </span>
        <h2 className="mt-4 text-4xl sm:text-6xl font-bold tracking-tighter uppercase leading-none text-foreground select-none">
          Product Launch
        </h2>
        <p className="mt-6 text-lg text-muted-foreground font-light max-w-lg leading-relaxed text-balance">
          Detailed case studies of engineered systems, custom cybersecurity protocols, and cloud-native integrations.
        </p>
      </div>

      <div className="space-y-16">
        {projects.map((project, index) => {
          return (
            <FadeIn
              key={project.id}
              direction="up"
              className="group relative w-full rounded-3xl border border-border/50 bg-card/20 dark:bg-card/10 overflow-hidden hover:border-foreground/20 transition-all duration-500 flex flex-col min-h-[580px]"
            >
              {/* Apple-style landscape layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 p-8 sm:p-12 items-center flex-1">
                
                {/* Left Side: Product Specs */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full">
                  <div>
                    {/* Project Number */}
                    <div className="text-xs font-mono text-muted-foreground/60 uppercase tracking-widest mb-6 block">
                      CASE STUDY // 0{index + 1}
                    </div>

                    {/* Project Name */}
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter uppercase text-foreground leading-tight select-none mb-4">
                      {project.title}
                    </h3>

                    {/* One-line Summary */}
                    <p className="text-muted-foreground text-base sm:text-lg font-light leading-relaxed mb-6 text-balance">
                      {project.description}
                    </p>

                    {/* Key features lists */}
                    <ul className="space-y-3 mb-8 text-xs sm:text-sm font-light text-muted-foreground/85">
                      {project.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground/50" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-6 mt-6">
                    <MagneticButton>
                      <a
                        href={project.link || "#"}
                        className="group flex items-center gap-2 rounded-full border border-foreground bg-foreground text-background px-5 py-2.5 text-xs font-semibold hover:bg-background hover:text-foreground transition-colors duration-300"
                      >
                        View Case Study
                        <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                      </a>
                    </MagneticButton>

                    <a
                      href={project.github || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      <GithubIcon size={14} />
                      View Repository
                    </a>
                  </div>
                </div>

                {/* Right Side: Mockup / Schematic Representation */}
                <div className="lg:col-span-7 w-full h-full min-h-[300px] sm:min-h-[360px] rounded-2xl border border-border/40 bg-background/55 backdrop-blur-sm relative overflow-hidden flex items-center justify-center p-6 group-hover:scale-[1.01] transition-transform duration-500 select-none">
                  
                  {/* Backdrop subtle wireframe grid lines */}
                  <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                       style={{
                         backgroundImage: `radial-gradient(var(--foreground) 1px, transparent 1px)`,
                         backgroundSize: "20px 20px"
                       }} 
                  />

                  {/* ERPilot AI mock visual: agent routing map & sync chart */}
                  {project.id === "erpilot" && (
                    <div className="w-full max-w-md font-mono text-[10px] sm:text-xs text-muted-foreground/75 space-y-4">
                      <div className="border border-border/50 rounded-lg p-4 bg-card/60 space-y-3">
                        <div className="flex items-center justify-between border-b border-border/30 pb-2">
                          <span className="font-bold text-foreground">ERP_AGENT_ENGINE</span>
                          <span className="text-foreground/80 font-semibold uppercase tracking-wider text-[8px] border border-border/30 px-1 bg-foreground/5">Active</span>
                        </div>
                        <div className="space-y-1 text-foreground/80">
                          <div>[14:21:05] QUERY: &quot;Forecast stock for SAP_W_12&quot;</div>
                          <div>[14:21:06] MODEL: Using tools [ReadInventory, RunRegression]</div>
                          <div>[14:21:08] SYNC: Pushing inventory metrics to OCI Autonomous DB...</div>
                          <div className="text-foreground">[14:21:09] RESULT: Output 14,020 units. Error margin: 0.04%</div>
                        </div>
                      </div>
                      
                      {/* Diagrammatic nodes */}
                      <div className="flex items-center justify-between px-6 py-2 relative">
                        {/* Horizontal connecting lines */}
                        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-4/5 h-[1px] bg-border/40 -translate-x-1/2 z-0" />
                        
                        <div className="border border-border bg-card px-3 py-1.5 rounded relative z-10 font-bold text-foreground">SAP / ODOO</div>
                        <div className="border border-border bg-foreground text-background px-3 py-1.5 rounded relative z-10 font-bold">LLM AGENT</div>
                        <div className="border border-border bg-card px-3 py-1.5 rounded relative z-10 font-bold text-foreground">FORECAST</div>
                      </div>
                    </div>
                  )}

                  {/* Graphical Password mock visual: grid interface & LSB streams */}
                  {project.id === "graphical-password" && (
                    <div className="flex flex-col items-center gap-6 w-full max-w-sm font-mono">
                      {/* Grid lock overlay */}
                      <div className="grid grid-cols-4 gap-2.5 p-3.5 border border-border/40 bg-card/50 rounded-xl">
                        {Array.from({ length: 16 }).map((_, i) => {
                          const isActive = [2, 5, 8, 15].includes(i)
                          return (
                            <div
                              key={i}
                              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg border flex items-center justify-center transition-colors duration-300 ${
                                isActive 
                                  ? "bg-foreground text-background border-foreground font-bold" 
                                  : "border-border/60 hover:bg-muted"
                              }`}
                            >
                              {isActive ? "★" : ""}
                            </div>
                          )
                        })}
                      </div>
                      <div className="text-[10px] text-muted-foreground/60 text-center tracking-wide leading-relaxed">
                        STABILITY: REPLAY PROTECTION ACTIVE <br />
                        IMAGE FREQUENCY DE-MASKING: DWT DECRYPTED
                      </div>
                    </div>
                  )}

                  {/* Real Estate Management system mock: property nodes */}
                  {project.id === "real-estate" && (
                    <div className="w-full max-w-md font-mono text-[10px] sm:text-xs text-muted-foreground/75 space-y-4">
                      {/* Mock Dashboard metrics */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="border border-border/40 p-4 rounded-xl bg-card/45">
                          <span className="text-[9px] uppercase tracking-wider text-muted-foreground/60 block">RENTAL OCCUPANCY</span>
                          <span className="text-2xl font-bold text-foreground mt-2 block">94.8%</span>
                        </div>
                        <div className="border border-border/40 p-4 rounded-xl bg-card/45">
                          <span className="text-[9px] uppercase tracking-wider text-muted-foreground/60 block">REVENUE SYNCED (MYSQL)</span>
                          <span className="text-2xl font-bold text-foreground mt-2 block">99.9%</span>
                        </div>
                      </div>
                      
                      {/* Mock invoice generator stream */}
                      <div className="border border-border/40 p-3 rounded-lg bg-card/40 space-y-2">
                        <div className="flex justify-between items-center text-[9px] uppercase border-b border-border/20 pb-1.5">
                          <span>Billing Stream</span>
                          <span className="text-foreground/70">PHP Backend</span>
                        </div>
                        <div className="space-y-1 text-foreground/80 leading-relaxed text-[9px] sm:text-xs">
                          <div>[SYS]: Generating monthly invoice for Unit 402B...</div>
                          <div>[DB]: MySQL Transaction Commit: OK</div>
                          <div>[MAIL]: Invoice emailed to tenant: OK</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Aesthetic visual label */}
                  <span className="absolute bottom-3 right-4 text-[9px] uppercase tracking-widest font-mono text-muted-foreground/35">
                    SPEC_VISUAL_{project.id.toUpperCase()}_v1.0.2
                  </span>
                </div>
              </div>
            </FadeIn>
          )
        })}
      </div>
    </section>
  )
}
