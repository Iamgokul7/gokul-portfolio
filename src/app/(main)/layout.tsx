"use client"

import { MotionConfig } from "framer-motion"
import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"
import { GradientBackground } from "@/components/effects/gradient-background"
import { VantaBackgroundLight } from "@/components/effects/vanta-background-light"
import { AnalyticsProvider } from "@/components/analytics/analytics-provider"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AnalyticsProvider>
      <MotionConfig reducedMotion="user">
        <div className="flex min-h-screen flex-col overflow-x-hidden">
          <GradientBackground />
          <VantaBackgroundLight />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </MotionConfig>
    </AnalyticsProvider>
  )
}
