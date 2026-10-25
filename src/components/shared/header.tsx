"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Work", path: "/experience" },
]

const SETTLE_DISTANCE = 100

export function Header() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const { scrollY } = useScroll()
  const [hovered, setHovered] = useState<string | null>(null)
  const [blobPos, setBlobPos] = useState({ x: 0, width: 0 })
  const navRef = useRef<HTMLUListElement>(null)

  const background = useTransform(
    scrollY,
    [0, SETTLE_DISTANCE],
    isHome ? ["rgba(10, 10, 10, 0.25)", "rgba(10, 10, 10, 0.6)"] : ["rgba(10, 10, 10, 0.6)", "rgba(10, 10, 10, 0.6)"]
  )
  const shadowAlpha = useTransform(scrollY, [0, SETTLE_DISTANCE], isHome ? [0, 0.4] : [0.4, 0.4])
  const boxShadow = useTransform(shadowAlpha, (a) => `0 8px 32px rgba(0, 0, 0, ${a})`)
  const borderColor = useTransform(
    scrollY,
    [0, SETTLE_DISTANCE],
    isHome
      ? ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.08)"]
      : ["rgba(255, 255, 255, 0.08)", "rgba(255, 255, 255, 0.08)"]
  )

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    const el = e.currentTarget
    const navEl = navRef.current
    if (!navEl) return
    const navRect = navEl.getBoundingClientRect()
    const elRect = el.getBoundingClientRect()
    setBlobPos({ x: elRect.left - navRect.left, width: elRect.width })
    setHovered(path)
  }

  return (
    <>
      {/* SVG gooey filter — hidden, just defines the filter */}
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <defs>
          <filter id="gooey-nav">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -8"
              result="gooey"
            />
            <feBlend in="SourceGraphic" in2="gooey" />
          </filter>
        </defs>
      </svg>

      <motion.header className="fixed left-1/2 top-6 z-50 -translate-x-1/2">
        <nav
          aria-label="Primary"
          className="relative flex w-[calc(100vw-2rem)] items-center justify-center rounded-full px-3 py-3 md:w-auto md:px-6"
        >
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 rounded-full border backdrop-blur-[20px] backdrop-saturate-[180%]"
            style={{ backgroundColor: background, boxShadow, borderColor }}
          />

          <ul
            ref={navRef}
            className="relative flex w-max items-center gap-1 md:gap-2"
            style={{ filter: "url(#gooey-nav)" }}
          >
            {/* Gooey blob that slides between items */}
            {hovered && (
              <motion.div
                className="absolute top-0 h-full rounded-full bg-accent/25"
                animate={{ x: blobPos.x, width: blobPos.width }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                style={{ originX: 0 }}
              />
            )}

            {navItems.map((item) => {
              const isActive = pathname === item.path
              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    aria-current={isActive ? "page" : undefined}
                    onMouseEnter={(e) => handleMouseEnter(e, item.path)}
                    onMouseLeave={() => setHovered(null)}
                    className={`relative block whitespace-nowrap rounded-full px-3 py-2 text-xs transition-colors duration-200 sm:text-sm md:px-4 ${
                      isActive ? "text-white" : hovered === item.path ? "text-accent" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </motion.header>
    </>
  )
}
