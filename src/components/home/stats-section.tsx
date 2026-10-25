"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

const stats = [
  { value: 6, suffix: "+", label: "Projects Shipped" },
  { value: 4, suffix: "", label: "Internships" },
  { value: 1, suffix: "", label: "Published Paper" },
  { value: 2, suffix: "+", label: "Years Building" },
]

function CountUp({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1400
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [inView, target])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="mx-auto w-full max-w-screen-2xl px-6 py-6 md:px-12">
      <div
        ref={ref}
        className="grid grid-cols-2 divide-x divide-y divide-border rounded-3xl border border-border bg-card md:grid-cols-4 md:divide-y-0 card-depth"
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center px-6 py-10"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <span className="text-5xl font-semibold tracking-[-0.04em] text-foreground sm:text-6xl text-glow-sm">
              <CountUp target={stat.value} suffix={stat.suffix} inView={inView} />
            </span>
            <span className="mt-2 text-sm text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
