"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"

export default function Hero() {
  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold animate-slide-up">
              Data Engineer & ML Solutions Architect
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-slide-up delay-200">
              Building scalable data pipelines and ML solutions with measurable business impact. 
              5+ years of experience in data engineering and machine learning.
            </p>
            <Button 
              asChild 
              size="lg" 
              onClick={() => {
                // Track the download event in GA4
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'resume_download', {
                    event_category: 'Resume',
                    event_label: 'Resume Download'
                  });
                }
              }}
              className="animate-slide-up delay-300"
            >
              <a href="/ifeoluwa_resume.pdf" download className="flex items-center gap-2">
                <FileDown className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 animate-fade-in">
            <Image
              src="/profile.jpg"
              alt="Ife Akande"
              fill
              priority
              className="rounded-full object-cover shadow-lg"
              sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 256px, 320px"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

