"use client"

import { Github, Linkedin, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'

// Add X icon component
const XIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

export default function Footer() {
  const [year, setYear] = useState<string>("")

  useEffect(() => {
    setYear(new Date().getFullYear().toString())
  }, [])

  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {year || "2024"} Ife Akande. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://linkedin.com/in/akande-ifeoluwa" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:akandeifeoluwa@gmail.com" aria-label="Email">
              <Mail className="h-6 w-6" />
            </a>
            <a href="https://twitter.com/ladi_akande" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)">
              <XIcon />
            </a>
            <a href="https://github.com/ifyjakande" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

