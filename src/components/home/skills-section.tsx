"use client"
import { StaggeredText } from "@/components/ui/staggered-text"
import { skillGroups } from "@/data/skills"
import { FadeIn } from "@/components/animations/fade-in"

// Flatten all skills into one array with their accent colour
const ACCENT_COLORS = ["#FF8A5B", "#A78BFA", "#34D399", "#FBBF24"]

const allSkills = skillGroups.flatMap((g, gi) =>
  g.items.map((item) => ({ label: item, color: ACCENT_COLORS[gi % ACCENT_COLORS.length] }))
)

// Split into two rows
const rowA = allSkills.slice(0, Math.ceil(allSkills.length / 2))
const rowB = allSkills.slice(Math.ceil(allSkills.length / 2))

function MarqueeRow({ items, reverse = false }: { items: typeof allSkills; reverse?: boolean }) {
  // Duplicate for seamless loop
  const doubled = [...items, ...items]
  return (
    <div className="relative overflow-hidden w-full">
      <div
        className="flex gap-3"
        style={{
          animation: `marquee${reverse ? "Rev" : "Fwd"} 28s linear infinite`,
          width: "max-content",
        }}
      >
        {doubled.map((skill, i) => (
          <span
            key={i}
            className="inline-flex shrink-0 items-center rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap"
            style={{
              backgroundColor: `${skill.color}18`,
              color: skill.color,
              border: `1px solid ${skill.color}30`,
            }}
          >
            {skill.label}
          </span>
        ))}
      </div>
    </div>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto w-full max-w-screen-2xl scroll-mt-24 px-6 py-28 md:px-12">
      <style>{`
        @keyframes marqueeFwd {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRev {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <FadeIn direction="up">
        <StaggeredText
          text="Skills"
          as="h2"
          className="text-glow text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
          segmentBy="words"
          delay={50}
          duration={0.6}
          direction="bottom"
          blur={true}
        />
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          The languages, frameworks, and platforms I use to build and ship software.
        </p>
      </FadeIn>

      <div className="mt-14 flex flex-col gap-4 rounded-2xl py-6">
        <MarqueeRow items={rowA} reverse={false} />
        <MarqueeRow items={rowB} reverse={true} />
      </div>
    </section>
  )
}
