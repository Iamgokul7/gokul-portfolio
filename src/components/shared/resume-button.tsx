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

  const baseClasses = "group relative inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 active:scale-95 cursor-pointer"
  const variantClasses = variant === "primary" 
    ? "bg-accent text-white px-8 py-4 text-base shadow-[0_4px_14px_rgba(201,106,61,0.15)] hover:bg-[#b85e34] hover:shadow-[0_8px_20px_rgba(201,106,61,0.25)] hover:-translate-y-0.5"
    : "border border-foreground bg-white text-foreground hover:border-accent hover:text-accent px-6 py-3 text-sm hover:-translate-y-0.5"

  return (
    <button onClick={handleDownload} className={`${baseClasses} ${variantClasses} ${className}`}>
      <span className="relative z-10 flex items-center gap-2">
        Download Resume
        <Download size={16} className="transition-transform group-hover:translate-y-0.5" />
      </span>
    </button>
  )
}
