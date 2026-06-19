"use client"

import { skills } from "@/data/skills"
import { motion } from "framer-motion"

export function SkillsMarquee() {
  const marqueeSkills = [...skills, ...skills]

  return (
    <section className="relative py-20 bg-card/20 dark:bg-card/10 border-y border-border/40 overflow-hidden">
      <div className="flex flex-col gap-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-mono tracking-wider uppercase text-foreground">
            SKILLS
          </h2>
        </div>
        
        <div className="relative w-full overflow-hidden flex py-4">
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-16 whitespace-nowrap w-max"
            animate={{
              x: ["0%", "-50%"]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear"
              }
            }}
          >
            {marqueeSkills.map((skill, index) => (
              <span
                key={index}
                className="text-4xl sm:text-6xl font-bold uppercase tracking-tighter text-muted-foreground/35 hover:text-foreground transition-colors duration-300 select-none"
              >
                {skill.toUpperCase()}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
