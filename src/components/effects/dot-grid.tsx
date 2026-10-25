"use client"

import { useEffect, useRef } from "react"

interface Dot {
  baseX: number
  baseY: number
  baseOpacity: number
  glowPhase: number
  glowSpeed: number
}

export function DotGrid({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const SPACING = 28
    const DOT_R = 1.2
    const ACCENT = { r: 255, g: 138, b: 91 }
    const BASE = { r: 255, g: 255, b: 255 }
    // Wave params
    const WAVE_AMP = 6        // max vertical displacement in px
    const WAVE_FREQ = 0.022   // spatial frequency
    const WAVE_SPEED = 0.018  // time speed
    const WAVE2_AMP = 3
    const WAVE2_FREQ = 0.035
    const WAVE2_SPEED = 0.011

    let dots: Dot[] = []
    let rafId = 0
    let visible = false
    let W = 0
    let H = 0

    const build = () => {
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width = W
      canvas.height = H
      dots = []
      for (let x = SPACING / 2; x < W; x += SPACING) {
        for (let y = SPACING / 2; y < H; y += SPACING) {
          dots.push({
            baseX: x,
            baseY: y,
            baseOpacity: 0.06 + Math.random() * 0.06,
            glowPhase: Math.random() * Math.PI * 2,
            glowSpeed: 0.004 + Math.random() * 0.006,
          })
        }
      }
    }

    const draw = () => {
      timeRef.current += 1
      const t = timeRef.current
      ctx.clearRect(0, 0, W, H)
      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      dots.forEach((d) => {
        d.glowPhase += d.glowSpeed
        const pulse = (Math.sin(d.glowPhase) + 1) / 2

        // Wave fabric displacement
        const wave1 = Math.sin(d.baseX * WAVE_FREQ + t * WAVE_SPEED) * WAVE_AMP
        const wave2 = Math.sin(d.baseX * WAVE2_FREQ - t * WAVE2_SPEED + d.baseY * 0.01) * WAVE2_AMP
        const dx = Math.cos(d.baseY * 0.02 + t * 0.009) * 1.5
        const dy = wave1 + wave2
        const x = d.baseX + dx
        const y = d.baseY + dy

        const dist = Math.hypot(x - mx, y - my)
        const prox = Math.max(0, 1 - dist / 180)

        const r = Math.round(BASE.r + (ACCENT.r - BASE.r) * prox)
        const g = Math.round(BASE.g + (ACCENT.g - BASE.g) * prox)
        const b = Math.round(BASE.b + (ACCENT.b - BASE.b) * prox)
        const opacity = d.baseOpacity + pulse * 0.06 + prox * 0.45
        const dotR = DOT_R + prox * 1.4

        if (prox > 0.05) {
          const grd = ctx.createRadialGradient(x, y, 0, x, y, dotR * 6)
          grd.addColorStop(0, `rgba(${ACCENT.r},${ACCENT.g},${ACCENT.b},${prox * 0.25})`)
          grd.addColorStop(1, `rgba(${ACCENT.r},${ACCENT.g},${ACCENT.b},0)`)
          ctx.beginPath()
          ctx.arc(x, y, dotR * 6, 0, Math.PI * 2)
          ctx.fillStyle = grd
          ctx.fill()
        }

        ctx.beginPath()
        ctx.arc(x, y, dotR, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r},${g},${b},${Math.min(1, opacity)})`
        ctx.fill()
      })

      rafId = visible ? requestAnimationFrame(draw) : 0
    }

    const io = new IntersectionObserver(([entry]) => {
      const was = visible
      visible = entry.isIntersecting
      if (visible && !was && !rafId) rafId = requestAnimationFrame(draw)
    })
    io.observe(canvas)

    const onMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const onLeave = () => { mouseRef.current = { x: -9999, y: -9999 } }

    const ro = new ResizeObserver(() => { build() })
    ro.observe(canvas)
    canvas.addEventListener("mousemove", onMouse)
    canvas.addEventListener("mouseleave", onLeave)
    build()

    return () => {
      cancelAnimationFrame(rafId)
      io.disconnect()
      ro.disconnect()
      canvas.removeEventListener("mousemove", onMouse)
      canvas.removeEventListener("mouseleave", onLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-auto absolute inset-0 h-full w-full ${className}`}
    />
  )
}
