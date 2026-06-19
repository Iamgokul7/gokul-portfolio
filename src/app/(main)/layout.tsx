"use client"

import { useState } from "react"
import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"
import { PortfolioLoader } from "@/components/animations/portfolio-loader"
import { AnalyticsProvider } from "@/components/analytics/analytics-provider"
import { GridOverlay } from "@/components/effects/grid-overlay"
import { NoiseOverlay } from "@/components/effects/noise-overlay"
import { GradientBackground } from "@/components/effects/gradient-background"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <AnalyticsProvider>
      {isLoading && <PortfolioLoader onComplete={() => setIsLoading(false)} />}
      
      {/* Visual background overlays */}
      <GradientBackground />
      <GridOverlay />
      <NoiseOverlay />
      
      <div className={`flex min-h-screen flex-col transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </div>
    </AnalyticsProvider>
  )
}
