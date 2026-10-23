"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  staggerDelay?: number
  tag?: "h1" | "h2" | "h3" | "p" | "span"
}

export function SplitText({
  text,
  className,
  delay = 0,
  duration = 0.6,
  staggerDelay = 0.04,
  tag: Tag = "span",
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const chars = el.querySelectorAll(".char-inner")
    gsap.fromTo(
      chars,
      { y: "110%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration,
        delay,
        stagger: staggerDelay,
        ease: "power3.out",
      }
    )
  }, [delay, duration, staggerDelay])

  const words = text.split(" ")

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap" aria-hidden="true">
          {word.split("").map((char, ci) => (
            <span
              key={ci}
              className="char inline-block overflow-hidden pb-[0.15em] mb-[-0.15em]"
            >
              <span className="char-inner inline-block">
                {char}
              </span>
            </span>
          ))}
          {wi < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </Tag>
  )
}
