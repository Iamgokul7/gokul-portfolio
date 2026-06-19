"use client"

export function GridOverlay() {
  return (
    <div 
      className="pointer-events-none fixed inset-0 z-0 opacity-[0.012] dark:opacity-[0.018]"
      style={{
        backgroundImage: `
          linear-gradient(to right, var(--border) 1px, transparent 1px),
          linear-gradient(to bottom, var(--border) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }}
    />
  )
}
