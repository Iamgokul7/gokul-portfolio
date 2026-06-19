"use client"

import { motion } from "framer-motion"

export function TextReveal({
  text,
  className = "",
  tag: Tag = "p"
}: {
  text: string
  className?: string
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
}) {
  const words = text.split(" ")

  return (
    <Tag className={`flex flex-wrap overflow-hidden ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="relative overflow-hidden mr-[0.25em] inline-flex py-1">
          <motion.span
            initial={{ y: "105%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{
              duration: 0.6,
              delay: i * 0.015,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="inline-block"
          >
            {word === "" ? "\u00A0" : word}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
