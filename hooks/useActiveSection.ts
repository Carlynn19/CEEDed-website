'use client'

import { useState, useEffect } from 'react'

/**
 * Hook for detecting which section is currently active based on scroll position
 * Useful for highlighting navigation links as user scrolls through page sections
 * @param headerOffset - Offset for sticky header (default 73px)
 * @returns activeSection - ID of the currently active section
 */
export function useActiveSection(headerOffset: number = 73) {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      const scrollPos = window.scrollY + headerOffset

      sections.forEach((section) => {
        const sectionElement = section as HTMLElement
        const sectionTop = sectionElement.offsetTop
        const sectionHeight = sectionElement.offsetHeight

        // Check if current scroll position is within this section
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          setActiveSection(section.id)
        }
      })
    }

    // Initial check
    handleScroll()

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [headerOffset])

  return activeSection
}
