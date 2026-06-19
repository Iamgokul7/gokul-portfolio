"use client"

export function GradientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden bg-background">
      <div className="absolute -left-[10%] -top-[10%] h-[70%] w-[70%] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_0,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.012)_0,transparent_70%)] blur-2xl" />
      <div className="absolute -bottom-[10%] -right-[10%] h-[70%] w-[70%] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_0,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.01)_0,transparent_70%)] blur-2xl" />
    </div>
  )
}
