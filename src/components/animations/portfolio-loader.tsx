"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function PortfolioLoader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate a fast, premium loading sequence
    const duration = 1200 // 1.2s total
    const intervalTime = 20
    const steps = duration / intervalTime
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      // Custom easing function for loading percentage
      const newProgress = Math.min(
        100,
        Math.floor(100 * (1 - Math.pow(1 - currentStep / steps, 3)))
      )
      
      setProgress(newProgress)

      if (currentStep >= steps) {
        clearInterval(timer)
        setTimeout(() => {
          onComplete()
        }, 200) // Brief pause at 100%
      }
    }, intervalTime)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }}
        className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
      >
        <div className="flex flex-col items-center gap-4 overflow-hidden">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-8xl md:text-9xl font-semibold tracking-tighter"
          >
            {progress}
          </motion.div>
          <motion.div
            className="h-[1px] bg-foreground w-full max-w-[200px]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress / 100 }}
            transition={{ ease: "linear", duration: 0.05 }}
            style={{ transformOrigin: "left" }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
