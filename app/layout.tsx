import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CEEDed — Simple systems for growing businesses',
  description: 'A small digital studio helping service-based entrepreneurs bring structure to their businesses. Enquiry flows, booking, payments, and clarity—without the complexity.',
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
