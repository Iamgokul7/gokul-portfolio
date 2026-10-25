"use client"

import { useEffect, useRef } from "react"

export function CursorSpotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = spotlightRef.current
    if (!el) return

    let x = 0
    let y = 0
    let raf = 0

    const paint = () => {
      raf = 0
      el.style.transform = `translate3d(${x - 300}px, ${y - 300}px, 0)`
    }

    const handleMouseMove = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
      el.style.opacity = "1"
      if (!raf) raf = requestAnimationFrame(paint)
    }

    const handleMouseLeave = () => {
      el.style.opacity = "0"
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={spotlightRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-30 h-[600px] w-[600px] opacity-0 transition-opacity duration-300 will-change-transform"
      style={{
        background:
          "radial-gradient(circle at center, rgba(255,138,91,0.07) 0%, transparent 70%)",
      }}
    />
  )
}
