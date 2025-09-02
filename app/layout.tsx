import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SquibTurf - Connect with Your Local Community',
  description: 'SquibTurf combines the fun of social networking with geo-tagging to bring you live updates about your surroundings. Connect with people around you!',
  keywords: 'social networking, local community, geo-tagging, location-based social media',
  authors: [{ name: 'SquibTurf Team' }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'SquibTurf - Connect with Your Local Community',
    description: 'Connect with people around you through location-based social networking',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
