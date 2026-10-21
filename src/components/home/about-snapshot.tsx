"use client"

import { FadeIn } from "@/components/animations/fade-in"

export function AboutSnapshot() {
  return (
    <section id="about" className="mx-auto w-full max-w-screen-2xl scroll-mt-24 px-6 py-24 md:px-12">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <FadeIn direction="up">
            <h2 className="text-sm font-medium text-muted-label">About</h2>
          </FadeIn>
        </div>

        <div className="lg:col-span-8">
          <FadeIn direction="up" delay={0.1} className="max-w-3xl space-y-6">
            <p className="text-2xl font-medium leading-snug tracking-tight text-foreground text-balance sm:text-3xl">
              Computer Science Engineering graduate with practical experience gained through software development internships and academic projects.
            </p>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
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
