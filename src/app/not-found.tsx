import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center select-none">
      <h1 className="text-8xl font-bold tracking-tighter uppercase mb-4 text-foreground">404</h1>
      <p className="text-muted-foreground uppercase tracking-widest text-xs mb-8">Page Not Found</p>
      <Link
        href="/"
        className="rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition-colors duration-300"
      >
        Return Home
      </Link>
    </div>
  )
}
