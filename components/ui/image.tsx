"use client"

import { useState } from "react"
import NextImage from "next/image"
import { cn } from "@/lib/utils"

interface ImageProps extends React.ComponentProps<typeof NextImage> {
  containerClassName?: string
}

export function Image({ className, containerClassName, onLoadingComplete, ...props }: ImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={cn("overflow-hidden", containerClassName)}>
      <NextImage
        className={cn(
          "duration-700 ease-in-out",
          isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0",
          className
        )}
        onLoadingComplete={(result) => {
          setIsLoading(false)
          onLoadingComplete?.(result)
        }}
        {...props}
      />
    </div>
  )
} 