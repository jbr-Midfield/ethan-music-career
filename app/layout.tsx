import './globals.css'
import type { Metadata } from 'next'
import { ThemeToggle } from './components/ThemeToggle'

export const metadata: Metadata = {
  title: 'Ethan - Music Industry Career Resources',
  description: 'Personalised career resources for breaking into the music industry',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ThemeToggle />
        {children}
      </body>
    </html>
  )
}
