"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

interface StaggerContainerProps {
  children: ReactNode
  delay?: number
  staggerDelay?: number
  className?: string
}

export function StaggerContainer({
  children,
  delay = 0,
  staggerDelay = 0.08,
  className = ""
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
