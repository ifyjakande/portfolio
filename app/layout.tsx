import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import StructuredData from './components/StructuredData'
import Analytics from './components/Analytics'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Ife Akande - Data Engineer & ML Solutions Architect',
  description: 'Ife Akande is a Data Engineer and Machine Learning Solutions Architect specializing in building scalable data solutions and ML systems.',
  metadataBase: new URL('https://ifeakande.com'),
  verification: {
    google: 'FEfqHwI9M4eIOEj-uW4VTk9oeR7JP1BRQrO1yd9fA8s',
  },
  keywords: [
    'Data Engineer',
    'Machine Learning',
    'ML Solutions Architect',
    'AWS',
    'Big Query',
    'Azure',
    'Databricks',
    'Python',
    'PySpark',
    'Data Engineering',
    'Big Data',
    'Data Pipeline',
    'ETL',
    'Data Warehouse',
    'Data Analytics',
    'AI/ML',
    'Database Design',
    'Data Modeling',
    'SQL',
    'NoSQL',
    'Serverless',
    'Data Infrastructure',
    'Data Science',
    'Data Strategy',
    'Business Intelligence',
    'Data Visualization'
  ],
  authors: [{ name: 'Ife Akande' }],
  creator: 'Ife Akande',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ifeakande.com',
    title: 'Ife Akande - Data Engineer & ML Solutions Architect',
    description: 'Data Engineer and Machine Learning Solutions Architect',
    siteName: 'Ife Akande',
    images: [{
      url: '/profile.jpg',
      width: 1200,
      height: 630,
      alt: 'Ife Akande'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ife Akande - Data Engineer & ML Solutions Architect',
    description: 'Data Engineer and Machine Learning Solutions Architect',
    images: ['/profile.jpg'],
    creator: '@ladi_akande' // Add your Twitter handle if you have one
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/profile.jpg"
          as="image"
        />
        <StructuredData />
        <Analytics />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

