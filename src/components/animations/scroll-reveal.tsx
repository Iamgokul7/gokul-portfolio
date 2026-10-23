"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "left" | "right" | "none"
  delay?: number
  duration?: number
  stagger?: number        // set this if children is a list
}

export function ScrollReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.7,
  stagger = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = stagger > 0 ? Array.from(el.children) : [el]

    const fromVars: gsap.TweenVars = {
      opacity: 0,
      y: direction === "up" ? 50 : 0,
      x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
    }

    const toVars: gsap.TweenVars = {
      opacity: 1,
      y: 0,
      x: 0,
      duration,
      delay,
      ease: "power3.out",
      stagger: stagger || 0,
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        once: true,
      },
    }

    gsap.fromTo(targets, fromVars, toVars)

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [direction, delay, duration, stagger])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
