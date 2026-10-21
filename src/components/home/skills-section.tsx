"use client"

import { skillGroups } from "@/data/skills"
import { FadeIn } from "@/components/animations/fade-in"

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto w-full max-w-screen-2xl scroll-mt-24 px-6 py-24 md:px-12">
      <FadeIn direction="up">
        <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Skills</h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          The languages, frameworks, and platforms I use to build and ship software.
        </p>
      </FadeIn>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
        {skillGroups.map((group, idx) => (
          <FadeIn key={group.category} direction="up" delay={idx * 0.08} className="flex flex-col rounded-3xl bg-card p-8">
            <span className="block h-1 w-10 rounded-full bg-accent" />
            <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground">{group.category}</h3>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-xl bg-secondary px-4 py-2.5 text-sm font-medium text-secondary-foreground transition-colors duration-200 hover:bg-accent hover:text-accent-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
