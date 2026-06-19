"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Download } from "lucide-react"
import { trackDownload } from "@/lib/analytics"

interface ResumeButtonProps {
  className?: string
  variant?: "primary" | "secondary" | "link"
}

export function ResumeButton({ className = "", variant = "primary" }: ResumeButtonProps) {
  const handleDownload = () => {
    trackDownload("Gokul_P_Resume.pdf")
    // In reality, this would be an actual file link:
    window.open("/resume/Gokul_P_Resume.pdf", "_blank")
  }

  if (variant === "link") {
    return (
      <button
        onClick={handleDownload}
        className={`group inline-flex items-center gap-1.5 transition-colors cursor-pointer text-muted-foreground hover:text-foreground text-sm font-medium ${className}`}
      >
        <span>Resume</span>
        <Download size={14} className="transition-transform group-hover:translate-y-0.5" />
      </button>
    )
  }

  const baseClasses = "group relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium transition-transform duration-300 active:scale-95 cursor-pointer"
  const variantClasses = variant === "primary" 
    ? "bg-foreground text-background px-8 py-4 text-base"
    : "border border-border bg-transparent text-foreground hover:border-foreground/50 px-6 py-3 text-sm"

  return (
    <button onClick={handleDownload} className={`${baseClasses} ${variantClasses} ${className}`}>
      <span className="relative z-10 flex items-center gap-2">
        Download Resume
        <Download size={16} className="transition-transform group-hover:translate-y-0.5" />
      </span>
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 z-0 bg-muted-foreground/20"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.5, opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ borderRadius: "50%" }}
        />
      )}
    </button>
  )
}
