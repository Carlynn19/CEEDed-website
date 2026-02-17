'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X, ArrowRight, Instagram, Facebook, Mail } from 'lucide-react'
import ScrollToTop from '@/components/ScrollToTop'
import ScrollProgress from '@/components/ScrollProgress'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const currentPath = '/'

  // Relatability cards
  const relatabilityCards = [
    'Everything lives in DMs',
    'You\'re the admin system',
    'Too many tools',
    'No clear flow',
  ]

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #3b3d3f 0%, #2a2c2e 50%, #3b3d3f 100%)', color: '#e7e2da' }}>
      {/* Header */}
      <header className={`sticky top-0 z-50 border-b transition-all duration-300 backdrop-blur-sm`} style={{ background: 'linear-gradient(90deg, rgba(59, 61, 63, 0.95) 0%, rgba(74, 77, 79, 0.95) 100%)', borderColor: '#a8b598' }}>
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <a href="/" className="transition-all hover:scale-105 p-2 rounded-lg" style={{ background: 'rgba(168, 181, 152, 0.1)' }}>
              <Image
                src="/logo_only_nobackground.png"
                alt="CEEDed"
                width={120}
                height={120}
                className="h-16 w-auto object-contain"
                priority
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {[
              { label: 'Home', href: '/' },
              { label: 'Our Products', href: '/products' },
              { label: 'Who We Are', href: '/about' },
              { label: 'Contact Us', href: '/contact' },
            ].map((item) => {
              const isActive = currentPath === item.href
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`transition-all text-sm font-medium hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded px-2 py-1 ${isActive ? 'border-b-2' : ''}`}
                  style={{
                    color: isActive ? '#a8b598' : '#e7e2da',
                    borderColor: isActive ? '#a8b598' : 'transparent'
                  }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = '#a8b598' }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = '#e7e2da' }}
                >
                  {item.label}
                </a>
              )
            })}
          </div>

          <a
            href="/contact"
            className="hidden md:block px-4 py-2 rounded text-sm font-semibold gradient-button transition-all hover:scale-105 hover:shadow-lg"
            style={{ background: 'linear-gradient(135deg, #a8b598 0%, #768760 100%)', color: '#2a2c2e' }}
          >
            Let's chat
          </a>

          {/* Mobile Menu */}
          <button
            className="md:hidden transition-transform hover:scale-110"
            style={{ color: '#e7e2da' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu Items */}
        {isMenuOpen && (
          <div className="md:hidden border-t animate-fadeInDown" style={{ borderColor: '#a8b598', background: 'linear-gradient(180deg, #3b3d3f 0%, #2a2c2e 100%)' }}>
            <div className="px-4 py-4 space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Our Products', href: '/products' },
                { label: 'Who We Are', href: '/about' },
                { label: 'Contact Us', href: '/contact' },
              ].map((item) => {
                const isActive = currentPath === item.href
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block w-full text-left text-sm font-medium py-2 px-3 rounded transition-all hover:translate-x-2 focus:outline-none focus:ring-2 ${isActive ? 'bg-opacity-10' : ''}`}
                    style={{
                      color: isActive ? '#a8b598' : '#e7e2da',
                      backgroundColor: isActive ? 'rgba(168, 181, 152, 0.1)' : 'transparent'
                    }}
                    onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = '#a8b598' }}
                    onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = '#e7e2da' }}
                  >
                    {item.label}
                  </a>
                )
              })}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #2a2c2e 0%, #3b3d3f 30%, #4a4d4f 60%, #3b3d3f 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #a8b598 0%, transparent 50%), radial-gradient(circle at 80% 50%, #768760 0%, transparent 50%)' }}></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Side - Logo with Slogan */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start animate-fadeIn">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-sageGreen to-oliveGreen rounded-lg opacity-20 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
                <Image
                  src="/logo_nobackground.png"
                  alt="CEEDed - Simple systems for growing businesses"
                  width={500}
                  height={500}
                  className="relative w-full max-w-md h-auto object-contain animate-float"
                  priority
                />
              </div>
            </div>

            {/* Right Side - Heading and Text */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-fadeInUp" style={{ color: '#e7e2da' }}>
                Your business shouldn't feel this messy.
              </h1>
              <p className="text-xl sm:text-2xl mb-6 font-semibold animate-fadeInUp" style={{ color: '#a8b598', animationDelay: '0.1s' }}>
                You've outgrown the chaos.
              </p>
              <p className="text-lg sm:text-xl mb-10 leading-relaxed animate-fadeInUp" style={{ color: '#d4c5a9', animationDelay: '0.2s' }}>
                We help you replace scattered tools and constant admin with simple structure that just works.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                <a
                  href="/contact"
                  className="px-8 py-3 rounded font-semibold gradient-button transition-all hover:scale-105 hover:shadow-2xl text-center"
                  style={{ background: 'linear-gradient(135deg, #a8b598 0%, #768760 100%)', color: '#2a2c2e' }}
                >
                  Let's chat
                </a>
                <a
                  href="/products"
                  className="px-8 py-3 rounded font-semibold transition-all hover:scale-105 hover:bg-opacity-10 flex items-center justify-center gap-2"
                  style={{ border: '2px solid #a8b598', color: '#a8b598', backgroundColor: 'rgba(168, 181, 152, 0.05)' }}
                >
                  See our products <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relatability Strip */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 relative" style={{ background: 'linear-gradient(180deg, #3b3d3f 0%, #2a2c2e 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center" style={{ color: '#e7e2da' }}>Sound familiar?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatabilityCards.map((card, index) => (
              <div
                key={index}
                className="p-8 rounded-lg text-center transition-all hover:scale-105 animate-fadeIn"
                style={{
                  background: 'linear-gradient(135deg, #4a4d4f 0%, #3b3d3f 100%)',
                  border: '2px solid #a8b598',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <p className="text-lg font-medium" style={{ color: '#e7e2da' }}>{card}</p>
              </div>
              
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl p-20 text-center leading-tight" style={{ color: '#e7e2da' }}>
            If this feels too familiar, let's get you{' '}
            <a
              href="/products"
              className="transition-all hover:scale-105 inline-block"
              style={{
                background: 'linear-gradient(135deg, #a8b598 0%, #c5d1ba 50%, #768760 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textDecoration: 'underline',
                textDecorationColor: '#a8b598'
              }}
            >
              CEEDed
            </a>
            .
          </h2>
        </div>
      </section>

      {/* What We Do */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 relative" style={{ background: 'linear-gradient(180deg, #3b3d3f 0%, #2a2c2e 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#e7e2da' }}>
            What We Do
          </h2>
          <p className="text-lg sm:text-xl mb-12 leading-relaxed" style={{ color: '#d4c5a9' }}>
            We design simple digital setups that help your business feel organised and professional.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Enquiry flows',
              'Booking setups',
              'Payment integrations'
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-lg transition-all hover:translate-y-[-4px] animate-fadeInUp"
                style={{
                  background: 'linear-gradient(135deg, #4a4d4f 0%, #3b3d3f 100%)',
                  border: '2px solid #a8b598',
                  animationDelay: `${index * 0.15}s`
                }}
              >
                <div className="flex items-center gap-3">
                  <p className="text-lg font-medium" style={{ color: '#e7e2da' }}>{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Signature */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 text-center relative" style={{ background: 'linear-gradient(180deg, #3b3d3f 0%, #2a2c2e 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-relaxed" style={{ color: '#e7e2da' }}>
            <span
              className="transition-all hover:scale-105 inline-block"
              style={{
                background: 'linear-gradient(135deg, #a8b598 0%, #c5d1ba 50%, #768760 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              So your business runs, not just you.
            </span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-12 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #2a2c2e 0%, #1a1c1e 100%)', borderTop: '2px solid #a8b598' }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(45deg, #a8b598 25%, transparent 25%, transparent 75%, #a8b598 75%), linear-gradient(45deg, #a8b598 25%, transparent 25%, transparent 75%, #a8b598 75%)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' }}></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <p className="font-semibold mb-2" style={{ color: '#e7e2da' }}>CEEDed</p>
          <p className="text-sm mb-6" style={{ color: '#d4c5a9' }}>Clarity over complexity. Systems that serve people. </p>
          <p className="text-sm mb-6 font-semibold" style={{ color: '#e7e2da' }}>Based in South Africa 🇿🇦</p>

          <div className="flex justify-center gap-6 mb-6 flex-wrap">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition-all hover:scale-110 text-sm font-medium flex items-center gap-2" style={{ color: '#a8b598' }}>
              <Instagram size={18} /> Instagram
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition-all hover:scale-110 text-sm font-medium flex items-center gap-2" style={{ color: '#a8b598' }}>
              <Facebook size={18} /> Facebook
            </a>
            <a href="https://fiverr.com" target="_blank" rel="noopener noreferrer" className="transition-all hover:scale-110 text-sm font-medium" style={{ color: '#a8b598' }}>
              Fiverr
            </a>
            <a href="mailto:hello@ceeded.co.za" className="transition-all hover:scale-110 text-sm font-medium flex items-center gap-2" style={{ color: '#a8b598' }}>
              <Mail size={18} /> Email
            </a>
          </div>

          <p className="text-sm" style={{ color: '#768760' }}>&copy; {new Date().getFullYear()} CEEDed. All rights reserved.</p>
        </div>
      </footer>

      {/* Navigation Enhancements */}
      <ScrollProgress />
      <ScrollToTop />
    </div>
  )
}