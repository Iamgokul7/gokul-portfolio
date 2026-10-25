import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { LenisProvider } from "@/lib/lenis"
import { CursorSpotlight } from "@/components/effects/cursor-spotlight"
import { ScrollProgress } from "@/components/effects/scroll-progress"
import { CustomCursor } from "@/components/effects/custom-cursor"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Gokul P | Software Engineer",
  description: "Architecting secure enterprise systems and AI-driven platforms that scale with precision.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground cursor-none`}
      >
        <LenisProvider>
          <CustomCursor />
          <ScrollProgress />
          <CursorSpotlight />
          {children}
        </LenisProvider>
      </body>
    </html>
  )
}
