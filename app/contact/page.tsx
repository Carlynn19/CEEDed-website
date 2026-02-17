'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X, Instagram, Facebook, Mail } from 'lucide-react'
import ScrollToTop from '@/components/ScrollToTop'
import ScrollProgress from '@/components/ScrollProgress'

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const currentPath = '/contact'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    building: '',
    messy: '',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', building: '', messy: '' })
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
  }

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

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #2a2c2e 0%, #3b3d3f 30%, #4a4d4f 60%, #3b3d3f 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #a8b598 0%, transparent 50%), radial-gradient(circle at 80% 50%, #768760 0%, transparent 50%)' }}></div>
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fadeInUp" style={{ color: '#e7e2da' }}>
              Let's talk
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed animate-fadeInUp" style={{ color: '#d4c5a9', animationDelay: '0.1s' }}>
              Tell us where you are in your journey.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: '#e7e2da' }}>
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded transition-all focus:outline-none focus:ring-2"
                style={{
                  background: 'rgba(74, 77, 79, 0.5)',
                  border: '2px solid #a8b598',
                  color: '#e7e2da',
                }}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#e7e2da' }}>
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded transition-all focus:outline-none focus:ring-2"
                style={{
                  background: 'rgba(74, 77, 79, 0.5)',
                  border: '2px solid #a8b598',
                  color: '#e7e2da',
                }}
              />
            </div>

            <div>
              <label htmlFor="building" className="block text-sm font-medium mb-2" style={{ color: '#e7e2da' }}>
                What are you building? *
              </label>
              <textarea
                id="building"
                name="building"
                value={formData.building}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-4 py-3 rounded transition-all focus:outline-none focus:ring-2 resize-none"
                style={{
                  background: 'rgba(74, 77, 79, 0.5)',
                  border: '2px solid #a8b598',
                  color: '#e7e2da',
                }}
              />
            </div>

            <div>
              <label htmlFor="messy" className="block text-sm font-medium mb-2" style={{ color: '#e7e2da' }}>
                Where do things feel messy right now? *
              </label>
              <textarea
                id="messy"
                name="messy"
                value={formData.messy}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded transition-all focus:outline-none focus:ring-2 resize-none"
                style={{
                  background: 'rgba(74, 77, 79, 0.5)',
                  border: '2px solid #a8b598',
                  color: '#e7e2da',
                }}
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 rounded font-semibold gradient-button transition-all hover:scale-105 hover:shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #a8b598 0%, #768760 100%)', color: '#2a2c2e' }}
            >
              Let's simplify it
            </button>

            {formSubmitted && (
              <div className="text-center p-4 rounded animate-fadeIn" style={{ background: 'rgba(168, 181, 152, 0.2)', border: '2px solid #a8b598' }}>
                <p className="font-semibold" style={{ color: '#a8b598' }}>Thanks for reaching out! We'll be in touch soon.</p>
              </div>
            )}
          </form>
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
