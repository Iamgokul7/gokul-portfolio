"use client"

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ZoomIn } from "lucide-react"

interface ImageGalleryProps {
  projectId: string
  screenshots: { src: string; alt: string; label: string }[]
}

export function ImageGallery({ projectId, screenshots }: ImageGalleryProps) {
  const [activeImage, setActiveImage] = React.useState<string | null>(null)
  const [imageErrors, setImageErrors] = React.useState<Record<string, boolean>>({})

  const handleImageError = (src: string) => {
    setImageErrors((prev) => ({ ...prev, [src]: true }))
  }

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-mono uppercase tracking-widest text-foreground/80 border-b border-border/30 pb-2 mb-6">
        System Screenshots & Wireframes
      </h3>

      {/* Grid View */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {screenshots.map((img, idx) => {
          const hasError = !!imageErrors[img.src]

          return (
            <div
              key={idx}
              className={`group relative aspect-[16/10] rounded-2xl border border-border/40 bg-card/25 dark:bg-card/15 overflow-hidden transition-all duration-300 ${
                hasError ? "cursor-default" : "cursor-zoom-in hover:border-foreground/25"
              }`}
              onClick={() => {
                if (!hasError) {
                  setActiveImage(img.src)
                }
              }}
            >
              {hasError ? (
                /* Fallback Visual Blueprint Card */
                <div className="absolute inset-0 flex flex-col justify-between p-6 font-mono text-[10px] sm:text-xs text-muted-foreground/60 select-none">
                  <div className="flex justify-between items-center border-b border-border/20 pb-2">
                    <span className="font-bold text-foreground">SCREENSHOT_0{idx + 1}</span>
                    <span className="text-[9px] border border-border/30 px-1 bg-card/40">{projectId.toUpperCase()}</span>
                  </div>
                  <div className="text-[10px] text-center my-auto px-4 leading-relaxed text-muted-foreground/85">
                    {img.label}
                    <span className="block text-[8px] text-muted-foreground/45 mt-2">
                      [Wireframe Blueprint Fallback]
                    </span>
                  </div>
                  <div className="text-[8px] uppercase tracking-widest opacity-40">
                    {img.alt}
                  </div>
                </div>
              ) : (
                <>
                  {/* Next.js Image Component */}
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={() => handleImageError(img.src)}
                    unoptimized
                  />

                  {/* Hover overlay element */}
                  <div className="absolute inset-0 bg-background/25 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <div className="rounded-full bg-background/80 backdrop-blur-sm p-3 border border-border">
                      <ZoomIn size={18} />
                    </div>
                  </div>
                </>
              )}
            </div>
          )
        })}
      </div>

      {/* Lightbox View */}
      <AnimatePresence>
        {activeImage && (
          <>
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImage(null)}
              className="fixed inset-0 z-[150] bg-black/90 backdrop-blur-md cursor-zoom-out"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-6 sm:inset-12 lg:inset-20 z-[160] flex items-center justify-center pointer-events-none"
            >
              <div className="relative w-full h-full max-w-5xl max-h-[80vh] pointer-events-auto rounded-3xl border border-border bg-card overflow-hidden flex items-center justify-center p-8">
                {/* Close Button */}
                <button
                  onClick={() => setActiveImage(null)}
                  className="absolute top-6 right-6 z-20 rounded-full border border-border bg-background p-2.5 hover:bg-foreground hover:text-background transition-colors duration-300"
                >
                  <X size={16} />
                </button>

                {/* Displaying Expanded Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={activeImage}
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
