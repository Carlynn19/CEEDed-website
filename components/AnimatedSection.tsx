'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'none'

interface AnimatedSectionProps {
  children: React.ReactNode
  animation?: AnimationType
  delay?: number
  threshold?: number
  className?: string
}

/**
 * Wrapper component for scroll-triggered element animations
 * Animates children when they enter the viewport using IntersectionObserver
 */
export default function AnimatedSection({
  children,
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1,
  className = ''
}: AnimatedSectionProps) {
  const [ref, isVisible] = useScrollAnimation(threshold)

  // Map animation types to initial state classes
  const animationClasses: Record<AnimationType, string> = {
    'fade-up': 'opacity-0 translate-y-10',
    'fade-down': 'opacity-0 -translate-y-10',
    'fade-left': 'opacity-0 -translate-x-10',
    'fade-right': 'opacity-0 translate-x-10',
    'scale': 'opacity-0 scale-95',
    'none': ''
  }

  // Final visible state (all animations end here)
  const visibleClass = 'opacity-100 translate-y-0 translate-x-0 scale-100'

  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ease-out ${
        isVisible ? visibleClass : animationClasses[animation]
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
