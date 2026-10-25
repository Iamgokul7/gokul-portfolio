export function GradientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      {/* Static soft glows: no animation, so nothing repaints while scrolling */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(600px circle at 0% 0%, rgba(255,138,91,0.05), transparent 70%), radial-gradient(500px circle at 100% 100%, rgba(255,138,91,0.04), transparent 70%)",
        }}
      />
    </div>
  )
}
