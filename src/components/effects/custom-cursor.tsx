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

    const onEnterLink = () => {
      dot.style.transform = `translate(-50%, -50%) scale(2.2)`
      dot.style.opacity = "0.6"
    }
    const onLeaveLink = () => {
      dot.style.transform = `translate(-50%, -50%) scale(1)`
      dot.style.opacity = "1"
    }

    const animate = () => {
      dot.style.left = `${mouseX}px`
      dot.style.top = `${mouseY}px`
      rafId = requestAnimationFrame(animate)
    }

    const addListeners = () => {
      document.querySelectorAll("a, button, [role='button'], input, textarea, select").forEach((el) => {
        el.addEventListener("mouseenter", onEnterLink)
        el.addEventListener("mouseleave", onLeaveLink)
      })
    }

    window.addEventListener("mousemove", move)
    rafId = requestAnimationFrame(animate)
    addListeners()
    const interval = setInterval(addListeners, 2000)

    return () => {
      window.removeEventListener("mousemove", move)
      cancelAnimationFrame(rafId)
      clearInterval(interval)
    }
  }, [])

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed z-[9999] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent transition-[transform,opacity] duration-150"
      style={{ left: -100, top: -100, boxShadow: "0 0 8px rgba(255,138,91,0.8)" }}
    />
  )
}
