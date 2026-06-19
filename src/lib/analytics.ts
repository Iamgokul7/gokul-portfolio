export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  // Console logging for development; replace with Vercel Analytics tracking
  console.log(`[Analytics Event Tracked]: ${eventName}`, properties)
}

export const trackDownload = (fileName: string) => {
  trackEvent("File Downloaded", { file: fileName })
}

export const trackOutboundLink = (url: string) => {
  trackEvent("Outbound Link Clicked", { url })
}
