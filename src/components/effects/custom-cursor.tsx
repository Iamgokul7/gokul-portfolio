"use client"

import { useEffect, useRef } from "react"

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    if (!dot) return

    let mouseX = -100
    let mouseY = -100
    let rafId: number

    const move = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    let scale = 1
    const sel = "a, button, [role='button'], input, textarea, select"
    const onOver = (e: MouseEvent) => {
      const hit = (e.target as Element | null)?.closest?.(sel)
      const next = hit ? 2.2 : 1
      if (next !== scale) {
        scale = next
        dot.style.opacity = hit ? "0.6" : "1"
      }
    }

    const animate = () => {
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${scale})`
      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", move, { passive: true })
    document.addEventListener("mouseover", onOver, { passive: true })
    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", move)
      cancelAnimationFrame(rafId)
      document.removeEventListener("mouseover", onOver)
    }
  }, [])

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-2.5 w-2.5 rounded-full bg-accent will-change-transform"
      style={{ boxShadow: "0 0 8px rgba(255,138,91,0.8)" }}
    />
  )
}
