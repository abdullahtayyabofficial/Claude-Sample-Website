import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#010738',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://abdullahtayyab.com'),
  title: {
    default: 'Abdullah Tayyab | AI-Powered Marketing Systems & Performance Growth',
    template: '%s | Abdullah Tayyab',
  },
  description:
    'I build and scale AI-powered marketing systems that drive predictable business growth. Explore real case studies, results, and strategies.',
  keywords: [
    'performance marketing',
    'AI marketing systems',
    'media buying',
    'growth marketing',
    'Meta Ads',
    'Google Ads',
    'marketing automation',
    'Abdullah Tayyab',
  ],
  authors: [{ name: 'Abdullah Tayyab', url: 'https://abdullahtayyab.com' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abdullahtayyab.com',
    siteName: 'Abdullah Tayyab',
    title: 'Abdullah Tayyab | AI-Powered Marketing Systems & Performance Growth',
    description:
      'I build and scale AI-powered marketing systems that drive predictable business growth.',
    images: [
      {
        url: '/images/og/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Abdullah Tayyab, AI-Powered Marketing Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdullah Tayyab | AI-Powered Marketing Systems & Performance Growth',
    description:
      'I build and scale AI-powered marketing systems that drive predictable business growth.',
    images: ['/images/og/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} overflow-x-hidden`}
      suppressHydrationWarning
    >
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
