"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

export function Header() {
  const pathname = usePathname()

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Work", path: "/experience" },
    { name: "Projects", path: "/projects" },
  ]

  return (
    <header className="fixed top-6 left-1/2 z-40 -translate-x-1/2">
      <nav className="glass flex items-center gap-1 rounded-full px-2 py-2 shadow-2xl">
        {navItems.map((item) => {
          const isActive = pathname === item.path
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-0 rounded-full bg-muted"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
