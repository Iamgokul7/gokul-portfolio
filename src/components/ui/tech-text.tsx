"use client"

import { useEffect, useRef, useState } from "react"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*<>/"

interface TechTextProps {
  text: string
  className?: string
  tag?: "h1" | "h2" | "h3" | "span" | "p"
  delay?: number // ms before animation starts
  speed?: number // ms per char cycle
}

export function TechText({ text, className = "", tag: Tag = "h1", delay = 0, speed = 30 }: TechTextProps) {
  const [displayed, setDisplayed] = useState<string[]>(text.split("").map(() => " "))
  const frameRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const mountRef = useRef(false)

  useEffect(() => {
    mountRef.current = true
    const chars = text.split("")
    const resolved = new Array(chars.length).fill(false)
    let iteration = 0

    const timeout = setTimeout(() => {
      const step = () => {
        if (!mountRef.current) return
        setDisplayed(
          chars.map((char, i) => {
            if (char === " ") return " "
            if (resolved[i]) return char
            if (i <= Math.floor(iteration / 3)) {
              resolved[i] = true
              return char
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
        )
        iteration++
        if (iteration <= chars.length * 3 + 10) {
          frameRef.current = setTimeout(step, speed)
        }
      }
      step()
    }, delay)

    return () => {
      mountRef.current = false
      clearTimeout(timeout)
      if (frameRef.current) clearTimeout(frameRef.current)
    }
  }, [text, delay, speed])

  return (
    <Tag className={className}>
      {displayed.map((char, i) => (
        <span
          key={i}
          style={{
            display: "inline",
            color: char !== text[i] && char !== " " ? "var(--accent)" : undefined,
            transition: "color 0.05s",
          }}
        >
          {char}
        </span>
      ))}
    </Tag>
  )
}
