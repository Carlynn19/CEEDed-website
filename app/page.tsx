'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, ArrowRight, Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [logoError, setLogoError] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    challenge: '',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Track mouse position for parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

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
    setFormData({ name: '', businessName: '', email: '', phone: '', challenge: '' })
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  // Combined products with benefits
  const products = [
    {
      name: 'Harmony',
      description: 'Our complete system. Everything your business needs to run smoothly—all connected and working together.',
      features: ['Client contact form', 'Online booking system', 'Payment processing', 'Business dashboard', 'Setup & training'],
      benefit: 'Actually Simple',
      benefitDesc: 'No confusing features you don\'t need. Just tools that work the way you work.',
    },
    {
      name: 'Flow',
      description: 'Get organized emails instead of WhatsApp chaos. Know who\'s interested and never lose a lead again.',
      features: ['Contact form on your site', 'Auto-organized inquiries', 'Simple admin dashboard', 'Email notifications'],
      benefit: 'Built for You',
      benefitDesc: 'We understand small business. No fancy jargon. No enterprise overkill.',
    },
    {
      name: 'Booked',
      description: 'Let clients book 24/7 without you managing messages. Automatic reminders. Organized calendar. Real peace of mind.',
      features: ['24/7 online booking', 'Calendar sync', 'Automatic reminders', 'Client confirmations'],
      benefit: 'Grows With You',
      benefitDesc: 'Start small, expand later. Your tools scale as your business grows.',
    },
    {
      name: 'Paid',
      description: 'Accept payments directly online. No more chasing invoices or manual bank transfers. Get paid when work is done.',
      features: ['Online payments', 'Invoicing', 'Payment reminders', 'Multiple payment options'],
      benefit: 'Fair Price',
      benefitDesc: 'No agency markups. No hidden fees. Affordable from day one.',
    },
    {
      name: 'Care',
      description: 'Monthly support to keep everything running smoothly. Updates, fixes, and guidance—so you can focus on your business.',
      features: ['Monthly updates', 'Quick fixes & changes', 'Performance checks', 'Expert guidance'],
      benefit: 'Real Support',
      benefitDesc: 'You get help from a real person who understands your business.',
    },
  ]

  // Case studies integrated
  const caseStudies = [
    { business: 'Hair Salon', product: 'Booked', outcome: '24/7 online booking | Automated reminders | Organized calendar' },
    { business: 'Wellness Coach', product: 'Harmony', outcome: 'Structured enquiry flow | Lead tracking | Professional responses' },
    { business: 'Freelance Designer', product: 'Paid', outcome: 'Online payments | Automated invoices | Time tracking' },
  ]

  return (
    <div className="min-h-screen text-gray-800 relative overflow-x-hidden">
      {/* Floating background orbs that follow mouse */}
      <div
        className="fixed pointer-events-none -z-10"
        style={{
          left: `calc(50% + ${mousePosition.x * 2}px)`,
          top: `calc(50% + ${mousePosition.y * 2}px)`,
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(143, 160, 122, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          transition: 'all 0.3s ease-out',
        }}
      />

      {/* Header */}
      <header className={`sticky top-0 z-50 border-b transition-all duration-300 bg-white/80 backdrop-blur-md`} style={{ borderColor: '#e7e2da' }}>
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2">
            {!logoError ? (
              <img
                src="/logo-slogan.png"
                alt="CEEDed"
                className="h-10 w-auto transition-transform duration-300 hover:scale-110"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="text-lg font-semibold">CEEDed</div>
            )}
          </div>

          <div className="hidden md:flex gap-8">
            {[
              { label: 'Products', id: 'products' },
              { label: 'Work', id: 'work' },
              { label: 'Contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-800 hover:text-[#8fa07a] transition-all duration-300 text-sm font-medium glow-on-hover"
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:block px-4 py-2 rounded text-sm font-semibold text-white transition-all hover:opacity-90 glow-on-hover"
            style={{ backgroundColor: '#8fa07a' }}
          >
            Book a Chat
          </button>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden border-t bg-white" style={{ borderColor: '#e7e2da' }}>
            <div className="px-4 py-4 space-y-3">
              {[
                { label: 'Products', id: 'products' },
                { label: 'Work', id: 'work' },
                { label: 'Contact', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-800 text-sm font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section - Flowing */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
        <div className="relative max-w-5xl mx-auto text-center">
          <h1
            className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight parallax-slow"
            style={{
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            }}
          >
            Stop managing your business through{' '}
            <span className="glow-on-hover inline-block" style={{ color: '#8fa07a' }}>
              WhatsApp
            </span>
          </h1>
          <p
            className="text-xl sm:text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto parallax-slow"
            style={{
              transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
            }}
          >
            Your customers want an easy way to reach you, book with you, and pay you. We build simple tools that make it happen—without the chaos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-10 py-4 rounded-lg font-semibold text-white transition-all glow-on-hover floating-card"
              style={{ backgroundColor: '#8fa07a' }}
            >
              Book a Chat
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="px-10 py-4 rounded-lg font-semibold transition-all glow-on-hover floating-card flex items-center gap-2 justify-center"
              style={{ color: '#8fa07a', border: '2px solid #8fa07a', backgroundColor: 'transparent' }}
            >
              See our products <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Products Section - Flowing Cards */}
      <section id="products" className="px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 text-center parallax-slow"
            style={{
              transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
            }}
          >
            Our Products
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center mb-16">
            We build tools that solve real problems. Start with what you need. Grow when you're ready.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {products.map((product, index) => (
              <div
                key={index}
                className="floating-card p-8 rounded-2xl bg-white"
                style={{
                  border: '1px solid #e7e2da',
                  transform: `translate(${mousePosition.x * (0.1 + index * 0.05)}px, ${mousePosition.y * (0.1 + index * 0.05)}px)`,
                }}
              >
                <div
                  className="w-full h-40 rounded-xl mb-6 flex items-center justify-center text-white text-sm font-medium text-center p-4 transition-transform duration-500"
                  style={{ background: 'linear-gradient(135deg, #8fa07a 0%, #9aae8a 100%)' }}
                >
                  {product.name}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed text-sm">{product.description}</p>
                <div className="mb-4 p-3 rounded-lg" style={{ backgroundColor: '#f5f2ec' }}>
                  <p className="text-xs font-semibold text-[#8fa07a] mb-1">{product.benefit}</p>
                  <p className="text-xs text-gray-700">{product.benefitDesc}</p>
                </div>
                <ul className="space-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-800 text-sm">
                      <span style={{ color: '#8fa07a' }} className="font-bold">→</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Integrated Case Studies */}
          <div className="mt-32">
            <h3 className="text-4xl font-bold text-gray-900 mb-8 text-center">Real businesses using CEEDed</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="floating-card p-6 rounded-xl bg-white"
                  style={{
                    border: '1px solid #e7e2da',
                    transform: `translate(${mousePosition.x * (0.05 + index * 0.03)}px, ${mousePosition.y * (0.05 + index * 0.03)}px)`,
                  }}
                >
                  <div className="inline-block px-3 py-1 rounded text-xs font-semibold mb-3 text-white" style={{ backgroundColor: '#8fa07a' }}>
                    {study.product}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{study.business}</h4>
                  <p className="text-gray-900 text-sm font-medium">{study.outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Flowing */}
      <section id="contact" className="px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 text-center parallax-slow"
            style={{
              transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
            }}
          >
            Let's Talk
          </h2>
          <p className="text-xl text-gray-700 mb-12 text-center">
            Tell us about your business and your biggest challenges. We'll reach out within 24 hours.
          </p>

          <form
            onSubmit={handleSubmit}
            className="floating-card p-10 rounded-2xl bg-white"
            style={{ border: '1px solid #e7e2da' }}
          >
            {formSubmitted && (
              <div className="mb-6 p-4 rounded-lg text-center font-semibold text-white glow-on-hover" style={{ backgroundColor: '#8fa07a' }}>
                ✓ Thank you! We will be in touch within 24 hours.
              </div>
            )}

            <div className="mb-6">
              <label className="block text-gray-900 font-semibold mb-2 text-sm">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border transition-all hover:border-[#8fa07a] focus:border-[#8fa07a] focus:ring-2 focus:ring-[#8fa07a]/20"
                style={{ borderColor: '#e7e2da' }}
                placeholder="John Smith"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-900 font-semibold mb-2 text-sm">Business Name</label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border transition-all hover:border-[#8fa07a] focus:border-[#8fa07a] focus:ring-2 focus:ring-[#8fa07a]/20"
                style={{ borderColor: '#e7e2da' }}
                placeholder="Your Business Name"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-900 font-semibold mb-2 text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border transition-all hover:border-[#8fa07a] focus:border-[#8fa07a] focus:ring-2 focus:ring-[#8fa07a]/20"
                style={{ borderColor: '#e7e2da' }}
                placeholder="your@email.com"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-900 font-semibold mb-2 text-sm">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border transition-all hover:border-[#8fa07a] focus:border-[#8fa07a] focus:ring-2 focus:ring-[#8fa07a]/20"
                style={{ borderColor: '#e7e2da' }}
                placeholder="+27 (555) 123-4567"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-900 font-semibold mb-2 text-sm">What is your biggest challenge right now?</label>
              <textarea
                name="challenge"
                value={formData.challenge}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border resize-none h-24 transition-all hover:border-[#8fa07a] focus:border-[#8fa07a] focus:ring-2 focus:ring-[#8fa07a]/20"
                style={{ borderColor: '#e7e2da' }}
                placeholder="Tell us what is slowing you down..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 rounded-lg font-semibold text-white transition-all glow-on-hover floating-card"
              style={{ backgroundColor: '#8fa07a' }}
            >
              Book My Chat
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-12 relative">
        <div className="max-w-6xl mx-auto px-4">
          <p className="font-semibold mb-2">CEEDed — Simple systems for growing businesses.</p>
          <p className="text-sm mb-6 opacity-80">Clarity over complexity. Systems that serve people. 🇿🇦</p>

          <div className="flex justify-center gap-6 mb-6 flex-wrap">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition-all hover:opacity-70 text-sm font-medium flex items-center gap-2 glow-on-hover" style={{ color: '#8fa07a' }}>
              <Instagram size={18} /> Instagram
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition-all hover:opacity-70 text-sm font-medium flex items-center gap-2 glow-on-hover" style={{ color: '#8fa07a' }}>
              <Facebook size={18} /> Facebook
            </a>
            <a href="mailto:hello@ceeded.co.za" className="transition-all hover:opacity-70 text-sm font-medium flex items-center gap-2 glow-on-hover" style={{ color: '#8fa07a' }}>
              <Mail size={18} /> Email
            </a>
          </div>

          <p className="text-sm opacity-70">&copy; {new Date().getFullYear()} CEEDed. All rights reserved. | Based in South Africa 🇿🇦</p>
        </div>
      </footer>
    </div>
  )
}
