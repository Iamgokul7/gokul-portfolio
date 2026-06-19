export interface SocialLink {
  name: string
  href: string
  iconName?: string
}

export const socials: SocialLink[] = [
  { name: "GitHub", href: "https://github.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
  { name: "Twitter / X", href: "https://x.com" },
  { name: "Email", href: "mailto:gokulp@example.com" }
]
