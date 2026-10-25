"use client"

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"

interface ImageGalleryProps {
  projectId: string
  screenshots: { src: string; alt: string; label: string }[]
}

export function ImageGallery({ projectId, screenshots }: ImageGalleryProps) {
  const [activeIdx, setActiveIdx] = React.useState(0)
  const [lightboxSrc, setLightboxSrc] = React.useState<string | null>(null)
  const [imageErrors, setImageErrors] = React.useState<Record<string, boolean>>({})
  const total = screenshots.length

  const handleImageError = (src: string) => {
    setImageErrors((prev) => ({ ...prev, [src]: true }))
  }

  const prev = () => setActiveIdx((i) => (i - 1 + total) % total)
  const next = () => setActiveIdx((i) => (i + 1) % total)

  if (!screenshots || screenshots.length === 0) return null

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-mono uppercase tracking-widest text-foreground/80 border-b border-border/30 pb-2 mb-6 text-glow-sm">
        System Screenshots &amp; Wireframes
      </h3>

      {/* 3D Carousel Stage */}
      <div className="relative w-full flex justify-center">
        <div className="relative w-full">
          <div
            className="relative mx-auto"
            style={{ height: "440px", perspective: "1100px", maxWidth: "900px", borderRadius: "1.5rem" }}
          >
          {screenshots.map((shot, i) => {
            const offset = i - activeIdx
            const absOffset = Math.abs(offset)
            const isActive = offset === 0
            const hasError = !!imageErrors[shot.src]

            return (
              <motion.div
                key={shot.src}
                animate={{
                  x: `${offset * 52}%`,
                  z: -absOffset * 90,
                  rotateY: offset * 20,
                  opacity: absOffset > 1 ? 0 : isActive ? 1 : 0.55,
                  scale: isActive ? 1 : 0.88,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{
                  transformStyle: "preserve-3d",
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  marginLeft: "-46%",
                  width: "92%",
                  height: "100%",
                  borderRadius: "1.25rem",
                  overflow: "hidden",
                  cursor: isActive ? "zoom-in" : "pointer",
                  zIndex: isActive ? 10 : 5 - absOffset,
                }}
                onClick={() => {
                  if (!isActive) {
                    setActiveIdx(i)
                  } else if (!hasError) {
                    setLightboxSrc(shot.src)
                  }
                }}
              >
                <div className="relative w-full h-full bg-card/25 border border-border/40 rounded-[1.25rem] overflow-hidden card-depth">
                  {/* Counter badge */}
                  {isActive && (
                    <div className="absolute top-3 right-3 z-10 rounded-full bg-background/80 backdrop-blur-sm px-3 py-1 text-xs font-mono text-muted-foreground border border-border/40">
                      {activeIdx + 1} / {total}
                    </div>
                  )}

                  {hasError ? (
                    <div className="absolute inset-0 flex flex-col justify-between p-6 font-mono text-[10px] sm:text-xs text-muted-foreground/60 select-none">
                      <div className="flex justify-between items-center border-b border-border/20 pb-2">
                        <span className="font-bold text-foreground">SCREENSHOT_0{i + 1}</span>
                        <span className="text-[9px] border border-border/30 px-1 bg-card/40">{projectId.toUpperCase()}</span>
                      </div>
                      <div className="text-[10px] text-center my-auto px-4 leading-relaxed text-muted-foreground/85">
                        {shot.label}
                        <span className="block text-[8px] text-muted-foreground/45 mt-2">[Wireframe Blueprint Fallback]</span>
                      </div>
                      <div className="text-[8px] uppercase tracking-widest opacity-40">{shot.alt}</div>
                    </div>
                  ) : (
                    <>
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 75vw"
                        className="object-cover"
                        onError={() => handleImageError(shot.src)}
                        unoptimized
                      />
                      {isActive && (
                        <div className="absolute inset-0 bg-background/0 hover:bg-background/10 flex items-center justify-center transition-colors duration-300 group">
                          <div className="rounded-full bg-background/80 backdrop-blur-sm p-3 border border-border opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ZoomIn size={18} />
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </motion.div>
            )
          })}
          </div>

          {/* Arrows */}
        {total > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
              aria-label="Previous screenshot"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
              aria-label="Next screenshot"
            >
              <ChevronRight size={18} />
            </button>
          </>
          )}
        </div>
      </div>

      {/* Label */}
      <p className="mt-3 text-center text-sm text-muted-foreground">
        {screenshots[activeIdx]?.label}
      </p>

      {/* Dot indicators */}
      {total > 1 && (
        <div className="mt-4 flex justify-center gap-1.5">
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              aria-label={`Go to screenshot ${i + 1}`}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === activeIdx ? "24px" : "6px",
                backgroundColor: i === activeIdx ? "var(--accent)" : "var(--border)",
              }}
            />
          ))}
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxSrc && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxSrc(null)}
              className="fixed inset-0 z-[150] bg-black/90 backdrop-blur-md cursor-zoom-out"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-6 sm:inset-12 lg:inset-20 z-[160] flex items-center justify-center pointer-events-none"
            >
              <div className="relative w-full h-full max-w-5xl max-h-[80vh] pointer-events-auto rounded-3xl border border-border bg-card overflow-hidden flex items-center justify-center p-8 card-depth">
                <button
                  onClick={() => setLightboxSrc(null)}
                  className="absolute top-6 right-6 z-20 rounded-full border border-border bg-background p-2.5 hover:bg-foreground hover:text-background transition-colors duration-300"
                >
                  <X size={16} />
                </button>
                <div className="relative w-full h-full">
                  <Image
                    src={lightboxSrc}
                    alt="Expanded project screenshot"
                    fill
                    sizes="100vw"
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
