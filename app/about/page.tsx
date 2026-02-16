'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X, Instagram, Facebook, Mail } from 'lucide-react'

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Our Edge points
  const ourEdgePoints = [
    {
      title: "No upselling",
      description: "We'll tell you what you actually need — even if that means a smaller project.",
    },
    {
      title: "Simple setups",
      description: "We use tools that make sense, not tools that make us look fancy.",
    },
    {
      title: "Real support",
      description: "We don't disappear after delivery. You get walk-throughs, documentation, and follow-up.",
    },
  ]

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #3b3d3f 0%, #2a2c2e 50%, #3b3d3f 100%)', color: '#e7e2da' }}>
      {/* Header */}
      <header className={`sticky top-0 z-50 border-b transition-all duration-300 backdrop-blur-sm`} style={{ background: 'linear-gradient(90deg, rgba(59, 61, 63, 0.95) 0%, rgba(74, 77, 79, 0.95) 100%)', borderColor: '#a8b598' }}>
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <a href="/">
              <Image
                src="/logo_only_nobackground.png"
                alt="CEEDed"
                width={80}
                height={80}
                className="h-12 w-auto object-contain"
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
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-all text-sm font-medium hover:scale-105"
                style={{ color: '#e7e2da' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#a8b598'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#e7e2da'}
              >
                {item.label}
              </a>
            ))}
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
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block w-full text-left text-sm font-medium py-2 transition-all hover:translate-x-2"
                  style={{ color: '#e7e2da' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#a8b598'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#e7e2da'}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #2a2c2e 0%, #3b3d3f 30%, #4a4d4f 60%, #3b3d3f 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #a8b598 0%, transparent 50%), radial-gradient(circle at 80% 50%, #768760 0%, transparent 50%)' }}></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fadeInUp" style={{ color: '#e7e2da' }}>
            A small studio built for entrepreneurs.
          </h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 relative" style={{ background: 'linear-gradient(180deg, #3b3d3f 0%, #2a2c2e 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8" style={{ color: '#e7e2da' }}>The story</h2>
          <div className="space-y-6 text-lg sm:text-xl leading-relaxed" style={{ color: '#d4c5a9' }}>
            <p>
              CEEDed was created for people buidling meaningful businesses, often from stratch, ofthen while wearing too many hats.
            </p>
            <p>
              We saw a pattern.
            </p>
            <p>
              Talented entrepreneurs doing great work...
            </p>
              Held back by messy admin, scattered tools, and constant mental load. 
              Not because they lacked ambition. Because they lacked structure.
              So we built CEEDed.
              A simple studio focused on helping entrepreneurs move from chaos to clarity, without the overwhelm that comes with going digital.
          </div>
        </div>
      </section>

      {/* Our Edge Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 relative" style={{ background: 'linear-gradient(90deg, #2a2c2e 0%, #3b3d3f 50%, #2a2c2e 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center" style={{ color: '#e7e2da' }}>Our edge</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {ourEdgePoints.map((point, index) => (
              <div
                key={index}
                className="p-8 rounded-lg transition-all hover:translate-y-[-4px] animate-fadeInUp"
                style={{
                  background: 'linear-gradient(135deg, #4a4d4f 0%, #3b3d3f 100%)',
                  border: '2px solid #a8b598',
                  animationDelay: `${index * 0.15}s`
                }}
              >
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#a8b598' }}>{point.title}</h3>
                <p className="text-base leading-relaxed" style={{ color: '#d4c5a9' }}>{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 relative" style={{ background: 'linear-gradient(180deg, #3b3d3f 0%, #2a2c2e 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8" style={{ color: '#e7e2da' }}>Who we work with</h2>
          <p className="text-lg sm:text-xl leading-relaxed mb-6" style={{ color: '#d4c5a9' }}>
            We're built for service-based businesses and consultants in South Africa (and beyond) who are past the "winging it" stage but not quite ready for full-scale automation or custom software.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed" style={{ color: '#d4c5a9' }}>
            If you're spending more time managing tools than serving clients—or if you know your setup should be smoother but don't know where to start—you're in the right place.
          </p>
        </div>
      </section>

      {/* Closing Line Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 text-center relative" style={{ background: 'linear-gradient(90deg, #2a2c2e 0%, #3b3d3f 50%, #2a2c2e 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-relaxed" style={{ color: '#e7e2da' }}>
            So you can focus more on the work you actually care about.
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
    </div>
  )
}
