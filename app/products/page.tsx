'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X, Instagram, Facebook, Mail } from 'lucide-react'
import ScrollToTop from '@/components/ScrollToTop'
import ScrollProgress from '@/components/ScrollProgress'

export default function Products() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const currentPath = '/products'

  // Start Smaller cards
  const startSmallerCards = [
    'Enquiry flow',
    'Booking setup',
    'Payment setup',
    'Landing page',
  ]

  // Why CEEDed bullets
  const whyCeededPoints = [
    'No tech overwhelm',
    'Built for entrepreneurs',
    'Right-sized solutions',
    'Simplicity',
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
            className="hidden md:block px-4 py-2 rounded text-sm font-semibold gradient-button transition-all hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2"
            style={{ background: 'linear-gradient(135deg, #a8b598 0%, #768760 100%)', color: '#2a2c2e' }}
          >
            Let's chat
          </a>

          {/* Mobile Menu */}
          <button
            className="md:hidden transition-transform hover:scale-110 focus:outline-none focus:ring-2 rounded"
            style={{ color: '#e7e2da' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
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

      {/* Signature Offer Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #2a2c2e 0%, #3b3d3f 30%, #4a4d4f 60%, #3b3d3f 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #a8b598 0%, transparent 50%), radial-gradient(circle at 80% 50%, #768760 0%, transparent 50%)' }}></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fadeInUp" style={{ color: '#e7e2da' }}>
            CEEDed Signature Offer
          </h1>
          <p className="text-xl sm:text-2xl mb-8 leading-relaxed animate-fadeInUp" style={{ color: '#d4c5a9', animationDelay: '0.1s' }}>
            Your complete digital foundation, designed to make your business run smoother behind the scenes.
          </p>
          <div className="text-left max-w-3xl mx-auto mb-10 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#a8b598' }}>What you get:</h2>
            <ul className="space-y-4 text-lg" style={{ color: '#d4c5a9' }}>
              <li className="flex items-start gap-3">
                <span style={{ color: '#a8b598', fontSize: '24px' }}>•</span>
                <span>A full enquiry flow — from first contact to onboarding</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: '#a8b598', fontSize: '24px' }}>•</span>
                <span>Intake forms and automated booking</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: '#a8b598', fontSize: '24px' }}>•</span>
                <span>Payment links, invoicing, or basic client portals</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: '#a8b598', fontSize: '24px' }}>•</span>
                <span>Simple client management so nothing slips through the cracks</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: '#a8b598', fontSize: '24px' }}>•</span>
                <span>Integration of what you already use (where possible)</span>
              </li>
            </ul>
          </div>
          <p className="text-xl mb-8 font-semibold animate-fadeInUp" style={{ color: '#e7e2da', animationDelay: '0.3s' }}>
            This is designed for service-based businesses, consultants, and solo founders who need solid structure without the complexity.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 rounded font-semibold gradient-button transition-all hover:scale-105 hover:shadow-2xl animate-fadeInUp"
            style={{ background: 'linear-gradient(135deg, #a8b598 0%, #768760 100%)', color: '#2a2c2e', animationDelay: '0.4s' }}
          >
            Learn more
          </a>
        </div>
      </section>

      {/* Start Smaller Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 relative" style={{ background: 'linear-gradient(180deg, #3b3d3f 0%, #2a2c2e 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center" style={{ color: '#e7e2da' }}>Start simple. Grow later.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {startSmallerCards.map((card, index) => (
              <div
                key={index}
                className="p-8 rounded-lg text-center transition-all hover:scale-105 animate-fadeInUp"
                style={{
                  background: 'linear-gradient(135deg, #4a4d4f 0%, #3b3d3f 100%)',
                  border: '2px solid #a8b598',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <p className="text-lg font-semibold" style={{ color: '#a8b598' }}>{card}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why CEEDed Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 relative" style={{ background: 'linear-gradient(90deg, #2a2c2e 0%, #3b3d3f 50%, #2a2c2e 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center" style={{ color: '#e7e2da' }}>Why founders choose us</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {whyCeededPoints.map((point, index) => (
              <div
                key={index}
                className="p-8 rounded-lg text-center transition-all hover:scale-105 animate-fadeInUp"
                style={{
                  background: 'linear-gradient(135deg, #4a4d4f 0%, #3b3d3f 100%)',
                  border: '2px solid #a8b598',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <p className="text-xl font-semibold" style={{ color: '#e7e2da' }}>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 text-center relative" style={{ background: 'linear-gradient(180deg, #3b3d3f 0%, #2a2c2e 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl sm:text-2xl mb-4" style={{ color: '#a8b598' }}>Ready for more clarity?</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight" style={{ color: '#e7e2da' }}>
            Let's build something simple. Something CEEDed.
          </h2>
          <a
            href="/contact"
            className="inline-block px-8 py-3 rounded font-semibold gradient-button transition-all hover:scale-105 hover:shadow-2xl"
            style={{ background: 'linear-gradient(135deg, #a8b598 0%, #768760 100%)', color: '#2a2c2e' }}
          >
            Start the conversation
          </a>
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
          <p className="font-semibold mb-2" style={{ color: '#e7e2da' }}>CEEDed — Simple systems for growing businesses.</p>
          <p className="text-sm mb-6" style={{ color: '#d4c5a9' }}>Clarity over complexity. Systems that serve people. 🇿🇦</p>
          <p className="text-sm mb-6 font-semibold" style={{ color: '#e7e2da' }}>Based in South Africa</p>

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

          <p className="text-sm" style={{ color: '#768760' }}>&copy; {new Date().getFullYear()} CEEDed. All rights reserved. | Based in South Africa 🇿🇦</p>
        </div>
      </footer>

      {/* Navigation Enhancements */}
      <ScrollProgress />
      <ScrollToTop />
    </div>
  )
}
