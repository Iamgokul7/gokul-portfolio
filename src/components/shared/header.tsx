"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, useScroll, useTransform } from "framer-motion"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Work", path: "/experience" },
]

// Scroll distance over which the pill settles from its top state to its scrolled state
const SETTLE_DISTANCE = 100

export function Header() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const { scrollY } = useScroll()

  // Pill is more transparent at the top and darkens once the page has scrolled
  const background = useTransform(
    scrollY,
    [0, SETTLE_DISTANCE],
    isHome ? ["rgba(10, 10, 10, 0.25)", "rgba(10, 10, 10, 0.6)"] : ["rgba(10, 10, 10, 0.6)", "rgba(10, 10, 10, 0.6)"]
  )
  const shadowAlpha = useTransform(scrollY, [0, SETTLE_DISTANCE], isHome ? [0, 0.4] : [0.4, 0.4])
  const boxShadow = useTransform(shadowAlpha, (a) => `0 8px 32px rgba(0, 0, 0, ${a})`)

  // The outline fades in with the pill, so the empty shell at the top doesn't read as a stray box
  const borderColor = useTransform(
    scrollY,
    [0, SETTLE_DISTANCE],
    isHome ? ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.08)"] : ["rgba(255, 255, 255, 0.08)", "rgba(255, 255, 255, 0.08)"]
  )

  return (
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

        <ul className="relative flex w-max items-center gap-1 md:gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.path
            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  aria-current={isActive ? "page" : undefined}
                  className={`block whitespace-nowrap rounded-full px-3 py-2 text-xs transition-colors duration-200 hover:text-foreground sm:text-sm md:px-4 ${
                    isActive ? "text-white" : "text-muted-foreground"
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
  )
}
