'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

interface NavigationProps {
  currentPath: string
}

const navItems = [
  { label: 'System', href: '/' },
  { label: 'Modules', href: '/products' },
  { label: 'About', href: '/about' },
]

export default function Navigation({ currentPath }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 backdrop-blur-md bg-dark/50 shadow-lg">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="transition-all hover:scale-105 mt-6">
            <Image
              src="/logo4.png"
              alt="CEEDed"
              width={840}
              height={280}
              className="h-56 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-24">
          {navItems.map((item) => {
            const isActive = currentPath === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-all text-sm font-medium hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1 ${
                  isActive ? 'border-b-2 border-primary text-primary opacity-100' : 'text-white opacity-80 hover:opacity-100 hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        <Link
          href="/contact"
          className="hidden md:block px-4 py-2 rounded-2xl text-sm font-semibold gradient-button transition-all hover:scale-105 hover:shadow-lg bg-primary hover:bg-primary-dark text-white"
        >
          Start a project
        </Link>

        {/* Mobile Menu */}
        <button
          className="md:hidden transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary rounded text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Items */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark/70 backdrop-blur-md animate-fadeInDown">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => {
              const isActive = currentPath === item.href
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left text-sm font-medium py-2 px-3 rounded transition-all hover:translate-x-2 focus:outline-none focus:ring-2 focus:ring-primary ${
                    isActive ? 'bg-primary/10 text-primary' : 'text-white hover:text-primary'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
