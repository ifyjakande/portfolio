import { Suspense } from 'react'
import MainContent from '@/components/main-content'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Suspense>
        <MainContent />
      </Suspense>
    </div>
  )
}

