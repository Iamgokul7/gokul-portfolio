"use client"

import { cn } from "@/lib/utils"

interface ShinyTextProps {
  text: string
  className?: string
  speed?: number
}

export function ShinyText({ text, className, speed = 3 }: ShinyTextProps) {
  return (
    <span
      className={cn("inline-block bg-clip-text text-transparent", className)}
      style={{
        backgroundImage:
          "linear-gradient(120deg, #F4F4F5 30%, #FF8A5B 50%, #F4F4F5 70%)",
        backgroundSize: "200% auto",
        animation: `shiny-text ${speed}s linear infinite`,
      }}
    >
      {text}
    </span>
  )
}
