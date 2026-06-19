"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  containerClassName?: string
  offset?: number
}

export function ParallaxImage({
  src,
  alt,
  className = "",
  containerClassName = "",
  offset = 12
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [`-${offset}%`, `${offset}%`])

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${containerClassName}`}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale: 1.1 + offset / 100 }}
        className={`absolute inset-0 h-[124%] w-full object-cover ${className}`}
      />
    </div>
  )
}
