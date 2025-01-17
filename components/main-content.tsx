"use client"

import { Suspense } from 'react'
import dynamic from 'next/dynamic'

// Loading components
const LoadingSpinner = () => <div className="h-20 w-full animate-pulse bg-muted" />

// Dynamic imports with loading states
const Header = dynamic(() => import('@/components/Header'), {
  loading: () => <LoadingSpinner />,
  ssr: false
})

const Hero = dynamic(() => import('@/components/Hero'), {
  loading: () => <LoadingSpinner />,
  ssr: false
})

const Skills = dynamic(() => import('@/components/Skills'), {
  loading: () => <LoadingSpinner />,
  ssr: false
})

const Projects = dynamic(() => import('@/components/Projects'), {
  loading: () => <LoadingSpinner />,
  ssr: false
})

const Experience = dynamic(() => import('@/components/Experience'), {
  loading: () => <LoadingSpinner />,
  ssr: false
})

const Education = dynamic(() => import('@/components/Education'), {
  loading: () => <LoadingSpinner />,
  ssr: false
})

const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <LoadingSpinner />,
  ssr: false
})

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <LoadingSpinner />,
  ssr: false
})

export default function MainContent() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </Suspense>
  )
} 