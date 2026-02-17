'use client'

import { useState, useEffect, useRef } from 'react'

/**
 * Hook for scroll-triggered visibility animations using IntersectionObserver
 * @param threshold - Percentage of element visibility required to trigger (0-1)
 * @returns [ref, isVisible] - Ref to attach to element and visibility state
 */
export function useScrollAnimation(threshold: number = 0.1) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Disconnect observer after animation triggers (animate once)
          observer.disconnect()
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [threshold])

  return [ref, isVisible] as const
}
