'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

export interface Testimonial {
  quote: string
  author: string
  role: string
  company?: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  autoPlay?: boolean
  interval?: number
  className?: string
}

export default function TestimonialCarousel({
  testimonials,
  autoPlay = true,
  interval = 5000,
  className = ''
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [testimonials.length])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isPaused) return

    const timer = setInterval(nextSlide, interval)
    return () => clearInterval(timer)
  }, [autoPlay, isPaused, interval, nextSlide])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide()
      if (e.key === 'ArrowRight') nextSlide()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [prevSlide, nextSlide])

  // Touch/swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      nextSlide()
    }
    if (touchStart - touchEnd < -75) {
      // Swipe right
      prevSlide()
    }
  }

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Testimonial Cards */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-4"
            >
              <div className="max-w-3xl mx-auto text-center p-10 sm:p-16 rounded-lg bg-dark-3 card-hover">
                <Quote className="w-14 h-14 mx-auto mb-8 text-primary opacity-50" />
                <p className="text-lg sm:text-xl text-white mb-8 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-primary">{testimonial.author}</p>
                  <p className="text-sm text-gray-dark">
                    {testimonial.role}
                    {testimonial.company && ` at ${testimonial.company}`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Next testimonial"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-primary ${
              index === currentIndex
                ? 'bg-primary w-8'
                : 'bg-gray-dark hover:bg-primary/50'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
