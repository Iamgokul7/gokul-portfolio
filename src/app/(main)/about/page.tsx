"use client"

import { FadeIn } from "@/components/animations/fade-in"
import { PageTransition } from "@/components/animations/transitions/page-transition"
import { ResumeButton } from "@/components/shared/resume-button"
import { siteConfig } from "@/data/site-config"
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons"
import { Mail } from "lucide-react"

const headingClass = "mb-6 border-b border-border pb-4 text-2xl font-semibold tracking-tight text-foreground"

const certificates = [
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
]

const technicalSkills = [
  "Python", "C", "JavaScript", "HTML", "CSS", "Flask", "PHP",
  "MySQL", "Git", "OpenCV", "Figma", "Oracle Cloud Infrastructure",
  "SAP / ERP Fundamentals", "REST API Integration", "Authentication Systems",
  "Full Stack Development", "AES Encryption", "Steganography", "Database Integration"
]

const outlineLink =
  "flex w-full items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-accent hover:text-accent active:scale-[0.98]"

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="relative mx-auto flex min-h-[80vh] max-w-screen-xl flex-col justify-center px-6 py-24 md:px-12">
        {/* Page Header */}
        <FadeIn direction="up" className="pb-16">
          <span className="text-sm font-medium text-muted-label">Biography</span>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">
            Gokul P
          </h1>
          <p className="mt-4 text-base text-muted-foreground">
            Computer Science Graduate (2025)
          </p>
        </FadeIn>

        {/* Grid Details */}
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Summary, Goals, Certifications */}
          <div className="space-y-20 lg:col-span-8">
            {/* Professional Summary */}
            <FadeIn direction="up" delay={0.1}>
              <h2 className={headingClass}>Professional Summary</h2>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
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
            <FadeIn direction="up" delay={0.1}>
              <h2 className={headingClass}>Career Goals</h2>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  Seeking opportunities to contribute, learn, and grow as a Software Engineer, Application Support Engineer, ERP Associate, QA Engineer, or technology professional.
                </p>
                <p>
                  My goal is to build reliable software systems, develop secure web applications, strengthen enterprise technology expertise, and contribute to impactful products while continuously expanding technical and professional skills.
                </p>
              </div>
            </FadeIn>

            {/* Certifications Section */}
            <FadeIn direction="up" delay={0.1}>
              <h2 className={headingClass}>Certifications</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {certificates.map((cert, cIdx) => {
                  const cardContent = (
                    <>
                      <div>
                        <h4 className="text-base font-semibold leading-snug tracking-tight text-foreground">
                          {cert.title}
                        </h4>
                        {cert.issuer && (
                          <p className="mt-2 text-sm text-muted-foreground">
                            {cert.issuer}
                          </p>
                        )}
                      </div>
                      <span className="mt-6 block text-xs text-muted-label">
                        {cert.date}
                      </span>
                    </>
                  )

                  const cardClass = "group flex flex-col justify-between rounded-2xl bg-card p-6 transition-colors duration-200 hover:bg-secondary"

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
                    <div key={cIdx} className={cardClass}>
                      {cardContent}
                    </div>
                  )
                })}
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Education, Technical Skills, Buttons */}
          <div className="space-y-16 lg:col-span-4">
            {/* Education Block */}
            <FadeIn direction="up" delay={0.15}>
              <h3 className="mb-6 border-b border-border pb-4 text-lg font-semibold tracking-tight text-foreground">
                Education
              </h3>
              <div className="space-y-8 text-sm">
                <div className="space-y-1">
                  <div className="font-semibold text-foreground">B.E. Computer Science &amp; Engineering</div>
                  <div className="text-muted-foreground">Anand Institute of Higher Technology</div>
                  <div className="text-muted-label">2021 – 2025</div>
                  <div className="font-medium text-foreground">CGPA: 7.84 / 10</div>
                </div>
                <div className="space-y-1">
                  <div className="font-semibold text-foreground">Higher Secondary (XII)</div>
                  <div className="text-muted-foreground">A.V.Rm.V Matric Higher Secondary School</div>
                  <div className="text-muted-label">2020 – 2021</div>
                  <div className="font-medium text-foreground">Score: 81.93%</div>
                </div>
                <div className="space-y-1">
                  <div className="font-semibold text-foreground">Secondary School (X)</div>
                  <div className="text-muted-foreground">A.V.Rm.V Matric Higher Secondary School</div>
                  <div className="text-muted-label">2018 – 2019</div>
                  <div className="font-medium text-foreground">Score: 71.6%</div>
                </div>
              </div>
            </FadeIn>

            {/* Technical Skills Block */}
            <FadeIn direction="up" delay={0.2}>
              <h3 className="mb-6 border-b border-border pb-4 text-lg font-semibold tracking-tight text-foreground">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </FadeIn>

            {/* Portals & Resume */}
            <FadeIn direction="up" delay={0.25}>
              <h3 className="mb-6 border-b border-border pb-4 text-lg font-semibold tracking-tight text-foreground">
                Credentials &amp; Portals
              </h3>
              <div className="space-y-3">
                <ResumeButton variant="secondary" className="w-full justify-center" />

                <a href={siteConfig.github} target="_blank" rel="noreferrer" className={outlineLink}>
                  <GithubIcon size={14} />
                  GitHub
                </a>

                <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className={outlineLink}>
                  <LinkedinIcon size={14} />
                  LinkedIn
                </a>

                <a href={`mailto:${siteConfig.email}`} className={outlineLink}>
                  <Mail size={14} />
                  Email
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
