'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Menu, X, ArrowRight, Instagram, Facebook, Mail, MapPin, Phone, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [logoError, setLogoError] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    challenge: '',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Product data
  const products = [
    {
      name: 'Harmony',
      description: 'Our complete system. Everything your business needs to run smoothly—all connected and working together.',
      features: [
        'Client contact form',
        'Online booking system',
        'Payment processing',
        'Business dashboard',
        'Setup & training',
      ],
      imageText: 'AI Image: Complete Business Setup',
    },
    {
      name: 'Flow',
      description: 'Get organized emails instead of WhatsApp chaos. Know who\'s interested and never lose a lead again.',
      features: [
        'Contact form on your site',
        'Auto-organized inquiries',
        'Simple admin dashboard',
        'Email notifications',
      ],
      imageText: 'AI Image: Contact Management',
    },
    {
      name: 'Booked',
      description: 'Let clients book 24/7 without you managing messages. Automatic reminders. Organized calendar. Real peace of mind.',
      features: [
        '24/7 online booking',
        'Calendar sync',
        'Automatic reminders',
        'Client confirmations',
      ],
      imageText: 'AI Image: Online Booking Calendar',
    },
    {
      name: 'Paid',
      description: 'Accept payments directly online. No more chasing invoices or manual bank transfers. Get paid when work is done.',
      features: [
        'Online payments',
        'Invoicing',
        'Payment reminders',
        'Multiple payment options',
      ],
      imageText: 'AI Image: Online Payments',
    },
    {
      name: 'Care',
      description: 'Monthly support to keep everything running smoothly. Updates, fixes, and guidance—so you can focus on your business.',
      features: [
        'Monthly updates',
        'Quick fixes & changes',
        'Performance checks',
        'Expert guidance',
      ],
      imageText: 'AI Image: Ongoing Support',
    },
  ]

  // Why Different items
  const whyDifferent = [
    { title: 'Actually Simple', description: 'No confusing features you don\'t need. Just tools that work the way you work.', imageText: 'AI Image: Simple, Not Complex' },
    { title: 'Built for You', description: 'We understand small business. No fancy jargon. No enterprise overkill.', imageText: 'AI Image: Built for Small Businesses' },
    { title: 'Grows With You', description: 'Start small, expand later. Your tools scale as your business grows.', imageText: 'AI Image: Growing Together' },
    { title: 'Fair Price', description: 'No agency markups. No hidden fees. Affordable from day one.', imageText: 'AI Image: Fair Price' },
    { title: 'Real Support', description: 'You get help from a real person who understands your business.', imageText: 'AI Image: Human Support' },
    { title: 'Built Here', description: 'Made in South Africa, for South African businesses. We get your market.', imageText: 'AI Image: Made for Africa' },
  ]

  // Case Studies
  const caseStudies = [
    {
      business: 'Hair Salon',
      description: 'Using Booked to manage bookings. No more WhatsApp messages at 10pm. Clients love it. She loves it.',
      tag: 'Booked',
      outcome: '✓ 24/7 online booking | Automated reminders | Organized calendar',
    },
    {
      business: 'Wellness Coach',
      description: 'Using Harmony to handle inquiries and payments. Looks professional. Runs smoothly. Clients trust the process.',
      tag: 'Harmony',
      outcome: '✓ Structured enquiry flow | Lead tracking | Professional responses',
    },
    {
      business: 'Freelance Designer',
      description: 'Using Flow and Paid to get organized. Projects flow through the system. Invoices are on time. Cash is coming in.',
      tag: 'Paid',
      outcome: '✓ Online payments | Automated invoices | Time tracking',
    },
  ]

  // Track scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 400
      if (direction === 'left') {
        carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
      } else {
        carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      }
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className={`sticky top-0 z-50 border-b transition-all duration-300 bg-white`} style={{ borderColor: '#e7e2da' }}>
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="CEEDed"
              width={80}
              height={80}
              className="h-12 w-auto object-contain"
              priority
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {[
              { label: 'Our Products', id: 'products' },
              { label: 'Why Different', id: 'why-different' },
              { label: 'Our Work', id: 'work' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-800 hover:opacity-70 transition-colors text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:block px-4 py-2 rounded text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#8fa07a' }}
          >
            Book a Chat
          </button>

          {/* Mobile Menu */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu Items */}
        {isMenuOpen && (
          <div className="md:hidden border-t" style={{ borderColor: '#e7e2da' }}>
            <div className="px-4 py-4 space-y-3">
              {[
                { label: 'Our Products', id: 'products' },
                { label: 'Why Different', id: 'why-different' },
                { label: 'Our Work', id: 'work' },
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

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32" style={{ background: 'linear-gradient(135deg, #e7e2da 0%, #ffffff 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Stop managing your business through <span style={{ color: '#8fa07a' }}>WhatsApp</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-10 leading-relaxed max-w-2xl">
            Your customers want an easy way to reach you, book with you, and pay you. We build simple tools that make it happen—without the chaos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 rounded font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: '#8fa07a' }}
            >
              Book a Chat
            </button>
            <a
              href="#products"
              className="px-8 py-3 rounded font-semibold transition-all hover:opacity-70 flex items-center gap-2"
              style={{ color: '#8fa07a', border: '1px solid #8fa07a' }}
            >
              See our products <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-lg text-gray-700 max-w-2xl">
              We build tools that solve real problems. Start with what you need. Grow when you're ready.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
              style={{ scrollBehavior: 'smooth' }}
            >
              {products.map((product, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-96 p-8 rounded-lg transition-all hover:shadow-lg"
                  style={{ border: '1px solid #e7e2da' }}
                >
                  <div
                    className="w-full h-48 rounded mb-6 flex items-center justify-center text-white text-sm font-medium text-center p-4"
                    style={{ background: 'linear-gradient(135deg, #8fa07a 0%, #9aae8a 100%)' }}
                  >
                    {product.imageText}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed text-sm">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-800 text-sm">
                        <span style={{ color: '#8fa07a' }} className="font-bold">→</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            <button
              onClick={() => scrollCarousel('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 p-2 rounded-full text-white transition-all hover:opacity-80"
              style={{ backgroundColor: '#8fa07a' }}
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scrollCarousel('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 p-2 rounded-full text-white transition-all hover:opacity-80"
              style={{ backgroundColor: '#8fa07a' }}
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16" style={{ backgroundColor: '#e7e2da', borderTop: '1px solid #f0ede7', borderBottom: '1px solid #f0ede7' }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-900 font-semibold mb-6 text-center">We work with</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Coaches & Consultants', 'Fitness & Wellness', 'Designers & Creatives', 'Teachers & Tutors', 'Event Organizers', 'Service Providers'].map((specialty, i) => (
              <div
                key={i}
                className="p-4 bg-white rounded text-center text-sm font-medium text-gray-900 transition-all hover:opacity-80"
                style={{ border: '1px solid #e7e2da' }}
              >
                {specialty}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different Section */}
      <section id="why-different" className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Why Choose CEEDed</h2>
            <p className="text-lg text-gray-700">We do things differently because your business deserves better.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyDifferent.map((item, index) => (
              <div key={index} className="text-center">
                <div
                  className="w-full h-44 rounded-lg mb-6 flex items-center justify-center text-white text-sm font-medium p-4"
                  style={{ background: 'linear-gradient(135deg, #9aae8a 0%, #a8b598 100%)' }}
                >
                  {item.imageText}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="work" className="px-4 sm:px-6 lg:px-8 py-20" style={{ backgroundColor: '#e7e2da' }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Work</h2>
            <p className="text-lg text-gray-700 max-w-2xl">Real businesses using CEEDed to run better. See what we've built.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="p-8 bg-white rounded-lg transition-all hover:shadow-lg" style={{ border: '1px solid #e7e2da' }}>
                <div
                  className="inline-block px-3 py-1 rounded text-xs font-semibold mb-4 text-white"
                  style={{ backgroundColor: '#8fa07a' }}
                >
                  {study.tag}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{study.business}</h3>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">{study.description}</p>
                <div className="p-3 rounded mb-4" style={{ backgroundColor: '#e7e2da', borderLeft: '3px solid #8fa07a' }}>
                  <p className="text-gray-900 text-sm font-medium">{study.outcome}</p>
                </div>
                <a href="#" className="font-semibold text-sm transition-all hover:opacity-70" style={{ color: '#8fa07a' }}>
                  See their system →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 text-white text-center" style={{ background: 'linear-gradient(135deg, #3b3d3f 0%, #2a2c2e 100%)' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to bring clarity to your business?</h2>
          <p className="text-lg mb-10 leading-relaxed opacity-95">Every business is different. Let's chat about what you need and what's possible for you.</p>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 rounded font-semibold transition-all hover:opacity-90"
            style={{ backgroundColor: '#ffffff', color: '#8fa07a' }}
          >
            Schedule a Consultation
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Let's Talk</h2>
            <p className="text-lg text-gray-700">Tell us about your business and your biggest challenges. We'll reach out within 24 hours to discuss the right approach for you.</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 rounded-lg" style={{ backgroundColor: '#e7e2da' }}>
            {formSubmitted && (
              <div className="mb-6 p-4 rounded-lg text-center font-semibold text-white" style={{ backgroundColor: '#8fa07a' }}>
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
                className="w-full px-4 py-3 rounded bg-white text-gray-900 border"
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
                className="w-full px-4 py-3 rounded bg-white text-gray-900 border"
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
                className="w-full px-4 py-3 rounded bg-white text-gray-900 border"
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
                className="w-full px-4 py-3 rounded bg-white text-gray-900 border"
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
                className="w-full px-4 py-3 rounded bg-white text-gray-900 border resize-none h-24"
                style={{ borderColor: '#e7e2da' }}
                placeholder="Tell us what is slowing you down..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 rounded font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: '#8fa07a' }}
            >
              Book My Chat
            </button>
          </form>

          <p className="text-center text-gray-700 mt-6 text-sm">
            We will be in touch within 24 hours. This is a no-pressure conversation.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-12" style={{ borderTop: '1px solid #e7e2da' }}>
        <div className="max-w-6xl mx-auto px-4">
          <p className="font-semibold mb-2">CEEDed — Simple systems for growing businesses.</p>
          <p className="text-sm mb-6 opacity-80">Clarity over complexity. Systems that serve people. 🇿🇦</p>
          <p className="text-sm mb-6 font-semibold">Based in South Africa</p>

          <div className="flex justify-center gap-6 mb-6 flex-wrap">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition-all hover:opacity-70 text-sm font-medium flex items-center gap-2" style={{ color: '#8fa07a' }}>
              <Instagram size={18} /> Instagram
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition-all hover:opacity-70 text-sm font-medium flex items-center gap-2" style={{ color: '#8fa07a' }}>
              <Facebook size={18} /> Facebook
            </a>
            <a href="https://fiverr.com" target="_blank" rel="noopener noreferrer" className="transition-all hover:opacity-70 text-sm font-medium" style={{ color: '#8fa07a' }}>
              Fiverr
            </a>
            <a href="mailto:hello@ceeded.co.za" className="transition-all hover:opacity-70 text-sm font-medium flex items-center gap-2" style={{ color: '#8fa07a' }}>
              <Mail size={18} /> Email
            </a>
          </div>

          <p className="text-sm opacity-70">&copy; {new Date().getFullYear()} CEEDed. All rights reserved. | Based in South Africa 🇿🇦</p>
        </div>
      </footer>
    </div>
  )
}