import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Your Digital Presence Agency',
  description: 'Simple web design, booking systems, and hosting for small businesses.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
