"use client"

import * as React from "react"
import { Download } from "lucide-react"
import { trackDownload } from "@/lib/analytics"

interface ResumeButtonProps {
  className?: string
  variant?: "primary" | "secondary" | "link"
}

export function ResumeButton({ className = "", variant = "primary" }: ResumeButtonProps) {
  const handleDownload = () => {
    trackDownload("Gokul_P_Resume.pdf")
    window.open("/resume/Gokul_P_Resume.pdf", "_blank")
  }

  if (variant === "link") {
    return (
      <button
        onClick={handleDownload}
        className={`group inline-flex items-center gap-1.5 cursor-pointer text-muted-foreground transition-colors duration-200 hover:text-foreground text-sm font-medium ${className}`}
      >
        <span>Resume</span>
        <Download size={14} className="transition-transform duration-200 group-hover:translate-y-0.5" />
      </button>
    )
  }

  const baseClasses =
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 active:scale-[0.98] cursor-pointer"
  const variantClasses =
    variant === "primary"
      ? "bg-accent text-accent-foreground px-7 py-3.5 text-sm hover:bg-accent-hover"
      : "border border-border text-foreground px-6 py-3 text-sm hover:border-accent hover:text-accent"

  return (
    <button onClick={handleDownload} className={`${baseClasses} ${variantClasses} ${className}`}>
      Download Resume
      <Download size={16} className="transition-transform duration-200 group-hover:translate-y-0.5" />
    </button>
  )
}
