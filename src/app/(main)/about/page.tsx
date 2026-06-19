"use client"

import { FadeIn } from "@/components/animations/fade-in"
import { PageTransition } from "@/components/animations/transitions/page-transition"
import { ResumeButton } from "@/components/shared/resume-button"
import { siteConfig } from "@/data/site-config"
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons"
import { Mail } from "lucide-react"

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="relative px-6 md:px-12 py-24 sm:py-32 max-w-screen-xl mx-auto min-h-[80vh] flex flex-col justify-center">
        {/* Page Header */}
        <div className="border-b border-border/40 pb-12 mb-16">
          <FadeIn direction="up">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono font-medium block">
              BIOGRAPHY
            </span>
            <h1 className="mt-4 text-5xl sm:text-7xl font-bold tracking-tighter uppercase text-foreground">
              Gokul P
            </h1>
            <p className="mt-4 text-muted-foreground uppercase tracking-widest text-xs font-mono">
              COMPUTER SCIENCE GRADUATE (2025)
            </p>
          </FadeIn>
        </div>

        {/* Grid Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Summary, Goals, Certifications */}
          <div className="lg:col-span-8 space-y-16">
            {/* Professional Summary */}
            <FadeIn direction="up" delay={0.2}>
              <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground border-b border-border/40 pb-2 mb-6">
                Professional Summary
              </h2>
              <div className="space-y-4 text-base sm:text-lg font-light text-muted-foreground leading-relaxed">
                <p>
                  Computer Science Engineering graduate and Entry-Level Software Engineer with a strong foundation in software development, web application development, and full-stack software solutions.
                </p>
                <p>
                  Skilled in building responsive applications using HTML, CSS, JavaScript, Python, and Flask, with hands-on experience in authentication systems, database integration, secure web applications, and enterprise software concepts through academic projects and internships.
                </p>
                <p>
                  Possess working knowledge of REST API integration, deployment concepts, Oracle Cloud Infrastructure (OCI), and SAP/ERP fundamentals. Strong problem-solving ability with adaptability to modern software development environments and emerging technologies.
                </p>
              </div>
            </FadeIn>

            {/* Career Goals */}
            <FadeIn direction="up" delay={0.3}>
              <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground border-b border-border/40 pb-2 mb-6">
                Career Goals
              </h2>
              <div className="space-y-4 text-base text-muted-foreground font-light leading-relaxed">
                <p>
                  Seeking opportunities to contribute, learn, and grow as a Software Engineer, Application Support Engineer, ERP Associate, QA Engineer, or technology professional.
                </p>
                <p>
                  My goal is to build reliable software systems, develop secure web applications, strengthen enterprise technology expertise, and contribute to impactful products while continuously expanding technical and professional skills.
                </p>
              </div>
            </FadeIn>

            {/* Certifications Section */}
            <FadeIn direction="up" delay={0.4}>
              <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground border-b border-border/40 pb-2 mb-6">
                Certifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Oracle Cloud Infrastructure 2023 Certified Foundations Associate",
                    issuer: "Oracle University",
                    date: "April 2024",
                    pdf: "/certificates/Gokul eCertificate.pdf"
                  },
                  {
                    title: "Networking Essentials",
                    issuer: "Cisco Networking Academy",
                    date: "May 2023",
                    pdf: ""
                  },
                  {
                    title: "Journey to Cloud Computing",
                    issuer: "IBM SkillsBuild",
                    date: "September 2024",
                    pdf: "/certificates/JourneytoCloudEnvisioningYourSolution_Badge20240914-7-4uzv0r.pdf"
                  },
                  {
                    title: "Figma UI/UX Design Masterclass",
                    issuer: "Figma UI/UX",
                    date: "November 2024",
                    pdf: "/certificates/Gokul_UI_UX_Designing_Certificate.pdf"
                  },
                  {
                    title: "MongoDB Node.js Developer Path for SmartBridge",
                    issuer: "MongoDB",
                    date: "September 2024",
                    pdf: "/certificates/gokul-p-0ced2c89-ce8d-4e35-972a-5c22632e1ecb-certificate.pdf"
                  }
                ].map((cert, cIdx) => {
                  const cardContent = (
                    <>
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-tight text-foreground transition-colors group-hover:text-foreground">
                          {cert.title}
                        </h4>
                        {cert.issuer && (
                          <p className="text-xs text-muted-foreground font-mono mt-1">
                            {cert.issuer}
                          </p>
                        )}
                      </div>
                      <span className="text-[10px] text-muted-foreground/50 font-mono mt-4 block">
                        {cert.date}
                      </span>
                    </>
                  )

                  const cardClass = "group block border border-border/40 bg-card/25 dark:bg-card/10 p-5 rounded-xl flex flex-col justify-between hover:border-foreground/30 hover:bg-card/45 dark:hover:bg-card/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md text-left"

                  if (cert.pdf) {
                    return (
                      <a
                        key={cIdx}
                        href={cert.pdf}
                        target="_blank"
                        rel="noreferrer"
                        className={cardClass}
                      >
                        {cardContent}
                      </a>
                    )
                  }

                  return (
                    <div
                      key={cIdx}
                      className={cardClass}
                    >
                      {cardContent}
                    </div>
                  )
                })}
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Education, Technical Skills, Buttons */}
          <div className="lg:col-span-4 space-y-12">
            {/* Education Block */}
            <FadeIn direction="up" delay={0.35}>
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-mono font-medium border-b border-border/40 pb-2 mb-4">
                Education
              </h3>
              <div className="font-mono text-xs text-foreground space-y-6">
                <div className="space-y-1">
                  <div className="font-bold uppercase tracking-tight text-foreground">B.E. COMPUTER SCIENCE & ENGINEERING</div>
                  <div className="text-muted-foreground">Anand Institute of Higher Technology</div>
                  <div className="text-muted-foreground/60 font-semibold mt-1">2021 – 2025</div>
                  <div className="text-foreground/90 font-semibold">CGPA: 7.84 / 10</div>
                </div>
                <div className="space-y-1 border-t border-border/20 pt-4">
                  <div className="font-bold uppercase tracking-tight text-foreground">HIGHER SECONDARY (XII)</div>
                  <div className="text-muted-foreground">A.V.Rm.V Matric Higher Secondary School</div>
                  <div className="text-muted-foreground/60 font-semibold mt-1">2020 – 2021</div>
                  <div className="text-foreground/90 font-semibold">Score: 81.93%</div>
                </div>
                <div className="space-y-1 border-t border-border/20 pt-4">
                  <div className="font-bold uppercase tracking-tight text-foreground">SECONDARY SCHOOL (X)</div>
                  <div className="text-muted-foreground">A.V.Rm.V Matric Higher Secondary School</div>
                  <div className="text-muted-foreground/60 font-semibold mt-1">2018 – 2019</div>
                  <div className="text-foreground/90 font-semibold">Score: 71.6%</div>
                </div>
              </div>
            </FadeIn>

            {/* Technical Skills Block */}
            <FadeIn direction="up" delay={0.4}>
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-mono font-medium border-b border-border/40 pb-2 mb-4">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python", "C", "JavaScript", "HTML", "CSS", "Flask", "PHP",
                  "MySQL", "Git", "OpenCV", "Figma", "Oracle Cloud Infrastructure",
                  "SAP / ERP Fundamentals", "REST API Integration", "Authentication Systems",
                  "Full Stack Development", "AES Encryption", "Steganography", "Database Integration"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-card/25 dark:bg-card/10 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-foreground hover:border-foreground/20 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </FadeIn>

            {/* Portals & Resume */}
            <FadeIn direction="up" delay={0.45}>
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-mono font-medium border-b border-border/40 pb-2 mb-4">
                Credentials & Portals
              </h3>
              <div className="space-y-3">
                <ResumeButton variant="secondary" className="w-full text-xs font-mono py-2.5 justify-center border-border bg-card hover:bg-foreground hover:text-background" />
                
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full group relative inline-flex items-center justify-center overflow-hidden rounded-full font-mono text-xs font-medium border border-border bg-card text-foreground hover:bg-foreground hover:text-background px-6 py-2.5 transition-all duration-300 active:scale-95 cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon size={12} />
                    GitHub
                  </span>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/gokulp0807/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full group relative inline-flex items-center justify-center overflow-hidden rounded-full font-mono text-xs font-medium border border-border bg-card text-foreground hover:bg-foreground hover:text-background px-6 py-2.5 transition-all duration-300 active:scale-95 cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <LinkedinIcon size={12} />
                    LinkedIn
                  </span>
                </a>
                
                <a
                  href="mailto:gokul.p0807@gmail.com"
                  className="w-full group relative inline-flex items-center justify-center overflow-hidden rounded-full font-mono text-xs font-medium border border-border bg-card text-foreground hover:bg-foreground hover:text-background px-6 py-2.5 transition-all duration-300 active:scale-95 cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Mail size={12} />
                    Email
                  </span>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
