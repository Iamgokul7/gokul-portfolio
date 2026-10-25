"use client"

import { useState, useEffect, useRef } from "react"
import { FadeIn } from "@/components/animations/fade-in"
import { PageTransition } from "@/components/animations/transitions/page-transition"
import { ResumeButton } from "@/components/shared/resume-button"
import { MagneticButton } from "@/components/animations/magnetic-button"
import { StaggeredText } from "@/components/ui/staggered-text"
import { siteConfig } from "@/data/site-config"
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons"
import { Mail, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

const headingClass = "mb-6 border-b border-border pb-4 text-2xl font-semibold tracking-tight text-foreground text-glow-sm"

const certificates = [
  {
    title: "Oracle Cloud Infrastructure 2023 Certified Foundations Associate",
    issuer: "Oracle University",
    date: "April 2024",
    pdf: "/certificates/Gokul eCertificate.pdf",
    accent: "#F97316",
    icon: "☁️"
  },
  {
    title: "Networking Essentials",
    issuer: "Cisco Networking Academy",
    date: "May 2023",
    pdf: "",
    accent: "#06B6D4",
    icon: "🌐"
  },
  {
    title: "Journey to Cloud Computing",
    issuer: "IBM SkillsBuild",
    date: "September 2024",
    pdf: "/certificates/JourneytoCloudEnvisioningYourSolution_Badge20240914-7-4uzv0r.pdf",
    accent: "#6366F1",
    icon: "🔵"
  },
  {
    title: "Figma UI/UX Design Masterclass",
    issuer: "Figma UI/UX (Udemy)",
    date: "November 2024",
    pdf: "/certificates/Gokul_UI_UX_Designing_Certificate.pdf",
    accent: "#A855F7",
    icon: "🎨"
  },
  {
    title: "MongoDB Node.js Developer Path",
    issuer: "MongoDB (SmartBridge)",
    date: "September 2024",
    pdf: "/certificates/gokul-p-0ced2c89-ce8d-4e35-972a-5c22632e1ecb-certificate.pdf",
    accent: "#22C55E",
    icon: "🍃"
  }
]

const technicalSkills = [
  "Python", "C", "JavaScript", "HTML", "CSS", "Flask", "PHP",
  "MySQL", "Git", "OpenCV", "Figma", "Oracle Cloud Infrastructure",
  "SAP / ERP Fundamentals", "REST API Integration", "Authentication Systems",
  "Full Stack Development", "AES Encryption", "Steganography", "Database Integration"
]

const education = [
  {
    degree: "B.E. Computer Science & Engineering",
    school: "Anand Institute of Higher Technology",
    university: "Anna University",
    period: "2021 – 2025",
    score: "CGPA: 7.84 / 10",
  },
  {
    degree: "Higher Secondary Certificate (XII)",
    school: "A.V.Rm.V Matric Higher Secondary School",
    university: "",
    period: "2020 – 2021",
    score: "Score: 81.93%",
  },
  {
    degree: "Secondary School Certificate (X)",
    school: "A.V.Rm.V Matric Higher Secondary School",
    university: "",
    period: "2018 – 2019",
    score: "Score: 71.6%",
  },
]

// 3D Cert Carousel
function CertCarousel() {
  const [active, setActive] = useState(0)
  const total = certificates.length
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setActive((a) => (a + 1) % total), 3000)
  }

  useEffect(() => {
    resetTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [])

  const prev = () => { setActive((a) => (a - 1 + total) % total); resetTimer() }
  const next = () => { setActive((a) => (a + 1) % total); resetTimer() }
  const goTo = (i: number) => { setActive(i); resetTimer() }

  return (
    <div className="relative w-full">
      <div
        className="relative mx-auto h-56 sm:h-64"
        style={{ perspective: "900px" }}
      >
        {certificates.map((cert, i) => {
          const offset = ((i - active + total) % total)
          const normOffset = offset > total / 2 ? offset - total : offset

          let translateX = normOffset * 55
          let translateZ = -Math.abs(normOffset) * 80
          let rotateY = normOffset * 18
          let opacity = Math.abs(normOffset) > 2 ? 0 : 1 - Math.abs(normOffset) * 0.3
          let scale = 1 - Math.abs(normOffset) * 0.12
          let zIndex = total - Math.abs(normOffset)

          return (
            <motion.div
              key={cert.title}
              className="absolute top-0 cursor-pointer"
              style={{ left: 0, right: 0, margin: "0 auto", width: "280px", maxWidth: "320px", transformStyle: "preserve-3d" }}
              animate={{
                x: `${translateX}%`,
                z: translateZ,
                rotateY,
                opacity,
                scale,
                zIndex,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              onClick={() => goTo(i)}
            >
              {cert.pdf ? (
                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                  onClick={(e) => normOffset !== 0 && e.preventDefault()}
                >
                  <CertCard cert={cert} isActive={normOffset === 0} />
                </a>
              ) : (
                <CertCard cert={cert} isActive={normOffset === 0} />
              )}
            </motion.div>
          )
        })}
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-1.5">
          {certificates.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-accent" : "w-1.5 bg-border"}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}

function CertCard({ cert, isActive }: { cert: typeof certificates[0]; isActive: boolean }) {
  return (
    <div
      className="flex flex-col justify-between rounded-2xl bg-card p-6 h-48 sm:h-56 border transition-all duration-300 card-depth"
      style={{
        borderColor: isActive ? cert.accent + "80" : "rgba(255,255,255,0.06)",
        boxShadow: isActive ? `0 0 24px ${cert.accent}25` : "none",
      }}
    >
      <div className="flex items-start justify-between">
        <span className="text-2xl">{cert.icon}</span>
        {cert.pdf && isActive && (
          <ExternalLink size={14} className="text-muted-foreground" />
        )}
      </div>
      <div>
        <h4 className="text-sm font-semibold leading-snug tracking-tight text-foreground line-clamp-2">
          {cert.title}
        </h4>
        <p className="mt-2 text-xs text-muted-foreground">{cert.issuer}</p>
        <span className="mt-3 block text-xs font-medium" style={{ color: cert.accent }}>{cert.date}</span>
      </div>
    </div>
  )
}

function EducationTimeline() {
  return (
    <div className="flex flex-col gap-0">
      {education.map((edu, idx) => (
        <FadeIn key={edu.degree} direction="left" delay={idx * 0.12}>
          <div className="flex gap-4">
            <div className="flex flex-col items-center" style={{ minWidth: "20px" }}>
              <div className="mt-[18px] h-3 w-3 shrink-0 rounded-full border-2 border-accent bg-background" />
              {idx < education.length - 1 && (
                <div className="mt-1 flex-1 w-px bg-border" />
              )}
            </div>
            <div className="rounded-xl bg-card/50 p-4 mb-6 flex-1 card-depth">
              <div className="text-sm font-semibold text-foreground">{edu.degree}</div>
              <div className="mt-1 text-xs text-muted-foreground">{edu.school}</div>
              {edu.university && <div className="text-xs text-muted-foreground/60">{edu.university}</div>}
              <div className="mt-2 flex items-center gap-3">
                <span className="text-xs text-muted-label">{edu.period}</span>
                <span className="text-xs font-medium text-accent">{edu.score}</span>
              </div>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  )
}

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="relative mx-auto flex min-h-[80vh] max-w-screen-xl flex-col justify-center px-6 py-24 md:px-12">
        {/* Page Header */}
        <FadeIn direction="up" className="pb-16">
          <span className="text-sm font-medium text-muted-foreground/60">Biography</span>
          <StaggeredText
            text="Gokul P"
            as="h1"
            className="text-glow mt-4 text-5xl font-semibold tracking-tight text-foreground sm:text-7xl"
            
            segmentBy="chars" delay={45} duration={0.55} direction="bottom" blur={true}
          />
          <p className="mt-4 text-base text-muted-foreground">Computer Science Graduate (2025)</p>
        </FadeIn>

        {/* Grid Details */}
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-20 lg:col-span-8">
            {/* Professional Summary */}
            <FadeIn direction="up" delay={0.1}>
              <h2 className={headingClass}>Professional Summary</h2>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg text-justify">
                <p>
                  Computer Science Engineering graduate with hands-on experience across AI-powered application development,
                  full-stack web development, secure authentication systems, and enterprise resource planning — built through
                  six independent projects (including two AI-integrated platforms), four structured internships, and a
                  peer-reviewed journal publication.
                </p>
                <p>
                  Proficient in Python, FastAPI/Flask, JavaScript, REST API design, and relational database modeling, with
                  practical exposure to LLM/AI API integration (Gemini), role-based access control, encryption, multi-tenant
                  architecture, and PDF/document generation pipelines.
                </p>
                <p>
                  Open to entry-level roles across Software Development, Full Stack/Web Development, AI/LLM Application
                  Development, QA/Application Support, Data Analytics, Cybersecurity/SOC, SAP/ERP, and IT Analyst tracks.
                </p>
              </div>
            </FadeIn>

            {/* Career Goals */}
            <FadeIn direction="up" delay={0.1}>
              <h2 className={headingClass}>Career Goals</h2>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg text-justify">
                <p>
                  Seeking opportunities to contribute, learn, and grow as a Software Engineer, Application Support Engineer,
                  ERP Associate, QA Engineer, or technology professional.
                </p>
                <p>
                  My goal is to build reliable software systems, develop secure web applications, strengthen enterprise
                  technology expertise, and contribute to impactful products while continuously expanding technical and
                  professional skills.
                </p>
              </div>
            </FadeIn>

            {/* Certifications — 3D carousel */}
            <FadeIn direction="up" delay={0.1}>
              <h2 className={headingClass}>Certifications</h2>
              <CertCarousel />
            </FadeIn>
          </div>

          {/* Right Column */}
          <div className="space-y-16 lg:col-span-4">
            {/* Education timeline */}
            <FadeIn direction="up" delay={0.15}>
              <h3 className="mb-6 border-b border-border pb-4 text-lg font-semibold tracking-tight text-foreground text-glow-sm">
                Education
              </h3>
              <EducationTimeline />
            </FadeIn>

            {/* Technical Skills */}
            <FadeIn direction="up" delay={0.2}>
              <h3 className="mb-6 border-b border-border pb-4 text-lg font-semibold tracking-tight text-foreground text-glow-sm">
                Technical Skills
              </h3>
              <motion.div
                className="flex flex-wrap gap-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04 } } }}
              >
                {technicalSkills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={{
                      hidden: { opacity: 0, scale: 0.85 },
                      visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 260, damping: 20 } },
                    }}
                    className="rounded-full bg-secondary px-3 py-1.5 text-sm text-secondary-foreground transition-colors hover:bg-accent/20 hover:text-accent"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </FadeIn>

            {/* Credentials & Portals — magnetic cards */}
            <FadeIn direction="up" delay={0.25}>
              <h3 className="mb-6 border-b border-border pb-4 text-lg font-semibold tracking-tight text-foreground text-glow-sm">
                Credentials &amp; Portals
              </h3>
              <div className="space-y-3">
                <MagneticButton className="w-full">
                  <ResumeButton variant="secondary" className="w-full justify-center" />
                </MagneticButton>

                <MagneticButton className="w-full">
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
                  >
                    <GithubIcon size={14} />
                    GitHub
                  </a>
                </MagneticButton>

                <MagneticButton className="w-full">
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
                  >
                    <LinkedinIcon size={14} />
                    LinkedIn
                  </a>
                </MagneticButton>

                <MagneticButton className="w-full">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
                  >
                    <Mail size={14} />
                    Email
                  </a>
                </MagneticButton>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
