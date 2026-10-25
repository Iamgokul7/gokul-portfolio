"use client"

import { useRef } from "react"
import { motion, useInView, Variants, MotionStyle, Easing } from "framer-motion"

type SegmentBy = "chars" | "words" | "lines"
type Direction = "top" | "bottom" | "left" | "right" | "none"
type StaggerDir = "forward" | "reverse" | "center"
type Tag = "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div"

interface StaggeredTextProps {
  text: string
  className?: string
  as?: Tag
  segmentBy?: SegmentBy
  separator?: string
  delay?: number          // ms before stagger starts (converted to seconds internally)
  duration?: number       // s per segment
  easing?: Easing
  direction?: Direction
  blur?: boolean
  staggerDirection?: StaggerDir
  from?: MotionStyle
  to?: MotionStyle
  threshold?: number
  rootMargin?: string
  exitOnScrollOut?: boolean
  respectReducedMotion?: boolean
  onAnimationComplete?: () => void
}

function getInitial(direction: Direction, blur: boolean): MotionStyle {
  const base: MotionStyle = { opacity: 0 }
  if (blur) base.filter = "blur(8px)"
  switch (direction) {
    case "top":    return { ...base, y: -24 }
    case "bottom": return { ...base, y: 24 }
    case "left":   return { ...base, x: -20 }
    case "right":  return { ...base, x: 20 }
    default:       return base
  }
}

function getActive(blur: boolean): MotionStyle {
  const base: MotionStyle = { opacity: 1, y: 0, x: 0 }
  if (blur) base.filter = "blur(0px)"
  return base
}

function splitText(text: string, segmentBy: SegmentBy, separator?: string): string[] {
  if (segmentBy === "lines") return text.split(separator ?? "\n")
  if (segmentBy === "words") return text.split(" ")
  // chars — preserve spaces as their own segments
  return text.split("")
}

function getStaggerDelays(count: number, baseDelay: number, dir: StaggerDir): number[] {
  const delays = Array.from({ length: count }, (_, i) => i * baseDelay)
  if (dir === "reverse") return delays.reverse()
  if (dir === "center") {
    const mid = (count - 1) / 2
    return delays.map((_, i) => Math.abs(i - mid) * baseDelay)
  }
  return delays
}

export function StaggeredText({
  text,
  className,
  as: Tag = "h1",
  segmentBy = "chars",
  separator,
  delay = 30,
  duration = 0.55,
  easing = [0.25, 0.1, 0.25, 1],
  direction = "bottom",
  blur = true,
  staggerDirection = "forward",
  from,
  to,
  threshold = 0.2,
  rootMargin = "0px",
  exitOnScrollOut = false,
  respectReducedMotion = true,
  onAnimationComplete,
}: StaggeredTextProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, {
    once: !exitOnScrollOut,
    margin: rootMargin as any,
    amount: threshold,
  })

  const segments = splitText(text, segmentBy, separator)
  const delaySeconds = delay / 1000
  const staggerDelays = getStaggerDelays(segments.length, delaySeconds, staggerDirection)

  const initial = from ?? getInitial(direction, blur)
  const animate = to ?? getActive(blur)

  const isChar = segmentBy === "chars"
  const isWord = segmentBy === "words"

  // Render
  const Comp = Tag as any

  return (
    <Comp
      ref={ref}
      className={className}
      aria-label={text}
      style={{ display: "block" }}
    >
      {segments.map((segment, i) => {
        const isSpace = segment === " " && isChar

        return (
          <motion.span
            key={i}
            aria-hidden="true"
            initial={isSpace ? {} : initial as any}
            animate={isSpace ? {} : isInView ? animate as any : initial as any}
            transition={
              isSpace
                ? {}
                : {
                    duration,
                    delay: staggerDelays[i],
                    ease: easing,
                  }
            }
            onAnimationComplete={i === segments.length - 1 ? onAnimationComplete : undefined}
            style={{
              display: isChar ? "inline" : "inline-block",
              whiteSpace: isSpace ? "pre" : undefined,
              transformOrigin: "center bottom",
            }}
          >
            {isSpace ? " " : segment}
            {isWord && i < segments.length - 1 ? " " : ""}
          </motion.span>
        )
      })}
    </Comp>
  )
}
