"use client"

import { FadeIn } from "@/components/animations/fade-in"

export function AboutSnapshot() {
  return (
    <section className="relative px-6 md:px-12 py-32 sm:py-48 max-w-screen-2xl mx-auto border-t border-border/40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Number & Label */}
        <div className="lg:col-span-4 flex flex-col justify-start">
          <FadeIn direction="up">
            <h2 className="text-2xl sm:text-3xl font-bold font-mono tracking-wider uppercase text-foreground">
              ABOUT
            </h2>
          </FadeIn>
        </div>

        {/* Right Column: Editorial Text (No Stats cards) */}
        <div className="lg:col-span-8">
          <FadeIn direction="up" delay={0.2} className="max-w-3xl space-y-6">
            <p className="text-2xl sm:text-3xl font-light text-foreground leading-snug tracking-tight text-balance">
              Computer Science Engineering graduate with practical experience gained through software development internships and academic projects.
            </p>
            <div className="space-y-4 text-base sm:text-lg font-light text-muted-foreground leading-relaxed">
              <p>
                Skilled in Python, Flask, JavaScript, HTML, CSS, PHP, MySQL, OpenCV, and enterprise software fundamentals.
              </p>
              <p>
                Built projects including a Graphical Password Authentication System using AES encryption and DWT steganography, a Real Estate Management System, and ERPilot AI, an AI-assisted ERP concept platform.
              </p>
              <p>
                Seeking opportunities to contribute, learn, and grow in software engineering, application support, ERP, QA, and technology-driven environments.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
