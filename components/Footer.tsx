"use client"

import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { useEffect, useState } from 'react'

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
            <a href="https://twitter.com/ladi_akande" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-6 w-6" />
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

