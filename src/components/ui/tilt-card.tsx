"use client"

import { useRef, MouseEvent } from "react"

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  maxTilt?: number    // degrees
  scale?: number
}

export function TiltCard({
  children,
  className,
  maxTilt = 8,
  scale = 1.02,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const card = ref.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -maxTilt
    const rotateY = ((x - centerX) / centerX) * maxTilt

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`
  }

  function handleMouseLeave() {
    const card = ref.current
    if (!card) return
    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)"
  }

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.15s ease-out", willChange: "transform" }}
    >
      {children}
    </div>
  )
}
