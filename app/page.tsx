'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight, Check, Sprout, Heart, Users, Phone, Mail, MapPin, Leaf } from 'lucide-react'
import PortfolioSection from '@/components/PortfolioSection'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  
  const [logoError, setLogoError] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
  })

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', businessName: '', phone: '' })
    alert('Thank you! We\'ll be in touch within 24 hours.')
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-offWhite text-textDark">
      {/* Navbar */}
      <nav className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'bg-bone border-borderGrey shadow-lg'
          : 'bg-bone border-borderGrey'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 group cursor-pointer">
              {!logoError ? (
                <img
                  src="/logo.png"
                  alt="CEEDed"
                  className="h-8 w-auto object-contain"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <Leaf className="text-accent group-hover:animate-float transition-all" size={28} />
              )}
              <div className="text-xl font-black text-black hover:text-accent transition-colors duration-300">CEEDed</div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {[
                { label: 'Who We Are', id: 'mission' },
                { label: 'What We Do', id: 'services' },
                { label: 'Pricing', id: 'pricing' },
                { label: 'Who We Serve', id: 'who-we-serve' },
                { label: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-textDark hover:text-accent transition-colors duration-300 font-semibold relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="hidden md:block bg-accent text-black px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 font-bold transform hover:scale-105"
            >
              Let's Talk
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-accent transition-transform duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} className="animate-fadeIn" /> : <Menu size={24} className="animate-fadeIn" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-3 border-t border-borderGrey pt-4 animate-fadeInDown">
              {[
                { label: 'Who We Are', id: 'mission' },
                { label: 'What We Do', id: 'services' },
                { label: 'Pricing', id: 'pricing' },
                { label: 'Who We Serve', id: 'who-we-serve' },
                { label: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-textDark hover:text-accent py-2 font-semibold transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-accent text-black px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 font-bold"
              >
                Let's Talk
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 animate-float"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-bone mb-6 leading-tight animate-fadeInDown">
            Simple systems for <span className="text-accent animate-glow">growing businesses</span>
          </h1>
          <p className="text-lg sm:text-xl text-textGrey mb-10 leading-relaxed max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            CEEDed is a small digital studio helping service-based entrepreneurs bring structure to their businesses. We design and build simple, integrated systems—so you can move from chaos to clarity.
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-accent text-black px-10 py-4 rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 font-bold text-lg inline-flex items-center gap-3 group shadow-lg shadow-accent/30 animate-fadeInUp transform hover:scale-105"
            style={{ animationDelay: '0.4s' }}
          >
            Let's Talk
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </section>

      {/* Mission Section - Who We Are */}
      <section id="mission" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-offWhite">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black text-center mb-4 animate-fadeInDown">
            Who We Are
          </h2>
          <p className="text-textGrey text-center text-lg mb-12 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            A small, modern digital studio focused on clarity—not complexity.
          </p>

          <div className="bg-charcoal border border-accent/20 rounded-lg p-8 sm:p-12 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <p className="text-bone text-lg leading-relaxed mb-6">
              CEEDed helps service-based entrepreneurs bring structure to their businesses. We are builders, thinkers, and problem-solvers who believe that small businesses deserve the same operational clarity as larger ones—without the complexity, cost, or overwhelm.
            </p>
            <p className="text-bone text-lg leading-relaxed mb-6">
              <span className="text-accent font-bold">CEEDed was founded with a simple intention: to make digital systems feel human again.</span>
            </p>
            <p className="text-bone text-lg leading-relaxed">
              We work closely with founders, freelancers, and small teams who are doing meaningful work but are often held back by messy admin, endless messages, and disconnected tools.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section - What We Do */}
      <section id="services" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-offWhite">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black text-center mb-4 animate-fadeInDown" data-animate="services">
            What We Do
          </h2>
          <p className="text-textGrey text-center mb-12 text-lg animate-fadeInUp" data-animate="services" style={{ animationDelay: '0.1s' }}>
            We design and build simple, integrated business systems that help you move from chaos to clarity. Not just websites—working systems that help your business run more smoothly behind the scenes.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* CEEDed Service System - Core */}
            <div className="p-8 bg-charcoal border-2 border-accent rounded-lg hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group cursor-pointer transform hover:scale-105 hover:-translate-y-2" data-animate="services">
              <Sprout size={48} className="text-accent mb-6 group-hover:animate-float transition-transform" />
              <h3 className="text-2xl font-bold text-bone mb-2 group-hover:text-accent transition-colors duration-300">🌱 CEEDed Service System</h3>
              <p className="text-textGrey text-sm mb-4 font-semibold">Our core offering—a complete, lightweight system for service-based businesses</p>
              <p className="text-bone mb-6">
                Structured contact flow, booking or enquiry process, optional online payments, and simple admin visibility. Includes setup, testing, and handover.
              </p>
              <ul className="space-y-3 text-bone text-sm">
                <li className="flex items-start gap-3 group/item">
                  <Check size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Enquiry and contact flows</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <Check size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Booking or scheduling</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <Check size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Simple online payment options</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <Check size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Clear admin view of your business</span>
                </li>
              </ul>
              <p className="text-bone text-sm mt-4 border-t border-accent/20 pt-4">
                <span className="text-accent font-semibold">Ideal for:</span> Businesses that operate mainly through social media, want to look more professional, need better organisation, and are not ready for full ecommerce.
              </p>
            </div>

            {/* Modular Systems - Entry */}
            <div className="p-8 bg-charcoal border-2 border-accent/30 rounded-lg hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group cursor-pointer transform hover:scale-105 hover:-translate-y-2" data-animate="services" style={{ animationDelay: '0.1s' }}>
              <Leaf size={48} className="text-accent mb-6 group-hover:animate-float transition-transform" />
              <h3 className="text-2xl font-bold text-bone mb-2 group-hover:text-accent transition-colors duration-300">🌿 Modular Systems</h3>
              <p className="text-textGrey text-sm mb-4 font-semibold">Start smaller and expand later</p>
              <p className="text-bone mb-6">
                For businesses that want to start with one piece at a time:
              </p>
              <ul className="space-y-3 text-bone text-sm">
                <li className="flex items-start gap-3 group/item">
                  <Check size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Contact / Enquiry systems</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <Check size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Booking systems</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <Check size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Payment integrations</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <Check size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Simple landing pages</span>
                </li>
              </ul>
              <p className="text-bone text-sm mt-4 border-t border-accent/20 pt-4">
                These can be implemented independently and expanded later.
              </p>
            </div>
          </div>

          <div className="bg-charcoal border border-accent/20 rounded-lg p-6 text-center">
            <p className="text-bone font-semibold mb-2">We specialise in service-driven businesses</p>
            <p className="text-textGrey text-sm">Consultants & coaches · Wellness & fitness · Creatives & freelancers · Tutors & educators · Small programme or event hosts</p>
          </div>

          <div className="mt-12 text-center">
            <p className="text-textGrey text-lg animate-fadeInUp" data-animate="services">
              The result is not just an online presence—it's a more organised way of operating.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-offWhite">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 animate-fadeInDown" data-animate="pricing">
              Pricing
            </h2>
            <p className="text-textGrey text-lg max-w-2xl mx-auto animate-fadeInUp" data-animate="pricing" style={{ animationDelay: '0.1s' }}>
              Accessible, fair, and transparent. More affordable than agencies, more guided than DIY—flexible for growing businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* CEEDed Service System - Integrated */}
            <div className="bg-charcoal border-2 border-accent rounded-lg p-8 hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer group relative" data-animate="pricing">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-black px-4 py-1 rounded-full text-sm font-bold">
                Core offering
              </div>
              <div className="text-4xl mb-2 group-hover:animate-float">🌱</div>
              <h3 className="text-2xl font-bold text-bone mb-2">CEEDed Service System</h3>
              <p className="text-textGrey text-sm mb-4">Integrated system for service-based businesses</p>
              
              <div className="bg-accent/20 rounded p-4 mb-6">
                <div className="text-2xl font-black text-accent">R5,000 – R6,000</div>
                <p className="text-bone text-sm">Once-off</p>
              </div>

              <ul className="space-y-3 mb-6 text-bone text-sm">
                <li className="flex items-start gap-3"><Check size={16} className="text-accent flex-shrink-0 mt-0.5" /><span>Full setup</span></li>
                <li className="flex items-start gap-3"><Check size={16} className="text-accent flex-shrink-0 mt-0.5" /><span>Integrated system build</span></li>
                <li className="flex items-start gap-3"><Check size={16} className="text-accent flex-shrink-0 mt-0.5" /><span>Testing and handover</span></li>
                <li className="flex items-start gap-3"><Check size={16} className="text-accent flex-shrink-0 mt-0.5" /><span>Onboarding walkthrough</span></li>
              </ul>

              <p className="text-bone text-sm border-t border-accent/30 pt-4">
                <span className="font-semibold text-accent">Flexible option:</span> R3,000 setup + R1,000/month (6 months)
              </p>
            </div>

            {/* Entry Systems - Modular */}
            <div className="bg-charcoal border-2 border-accent/30 rounded-lg p-8 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 transform hover:scale-105 hover:-translate-y-2 cursor-pointer group" data-animate="pricing" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl mb-2 group-hover:animate-float">🌿</div>
              <h3 className="text-2xl font-bold text-bone mb-2">Entry Systems</h3>
              <p className="text-textGrey text-sm mb-6">Modular—start small, expand later</p>
              
              <ul className="space-y-4 text-bone text-sm">
                <li className="flex justify-between items-center">
                  <span>Contact / Enquiry</span>
                  <span className="font-semibold text-accent">R1,000 – R3,000</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Booking system</span>
                  <span className="font-semibold text-accent">R2,000 – R3,000</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Payment integration</span>
                  <span className="font-semibold text-accent">R2,000 – R3,000</span>
                </li>
              </ul>
            </div>

            {/* Optional Support */}
            <div className="bg-charcoal border-2 border-accent/30 rounded-lg p-8 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 transform hover:scale-105 hover:-translate-y-2 cursor-pointer group" data-animate="pricing" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl mb-2 group-hover:animate-float">🤍</div>
              <h3 className="text-2xl font-bold text-bone mb-2">Ongoing support</h3>
              <p className="text-textGrey text-sm mb-6">Optional—updates, tweaks, peace of mind</p>
              
              <div className="bg-black rounded p-4">
                <div className="text-2xl font-black text-accent">R500 – R1,000</div>
                <p className="text-bone text-sm">Per month</p>
              </div>
            </div>
          </div>

          {/* Closing Note */}
          <div className="bg-charcoal border-2 border-accent rounded-lg p-8 text-center transition-all duration-300 hover:shadow-lg hover:shadow-accent/30" data-animate="pricing">
            <p className="text-bone text-lg leading-relaxed">
              We aim to deliver strong value without creating financial pressure for early-stage founders.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section id="who-we-serve" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-offWhite">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black text-center mb-4 animate-fadeInDown" data-animate="who-serve">
            Who CEEDed Is For
          </h2>
          <p className="text-textGrey text-center mb-12 text-lg animate-fadeInUp" data-animate="who-serve" style={{ animationDelay: '0.1s' }}>
            Founders who are growing beyond informal systems and want structure—not complexity.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              { icon: Sprout, title: 'Growing beyond informal systems', description: 'You want to look more professional online and value simplicity—without overbuilt solutions.' },
              { icon: Users, title: 'Service providers & solo founders', description: 'You\'re ready for structure but not complexity. You need systems that serve people.' },
              { icon: Heart, title: 'Small creative brands', description: 'You do meaningful work and deserve operational clarity that fits your stage.' },
              { icon: Leaf, title: 'Early-stage entrepreneurs', description: 'You need better organisation and a clear admin view—not more tools, but better structure.' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="p-8 bg-charcoal border border-accent/20 rounded-lg hover:border-accent transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group cursor-pointer" data-animate="who-serve">
                  <Icon size={40} className="text-accent mb-4 group-hover:animate-float" />
                  <h3 className="text-xl font-bold text-bone mb-3 group-hover:text-accent transition-colors duration-300">{item.title}</h3>
                  <p className="text-bone leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>

          <div className="bg-charcoal border border-accent/20 rounded-lg p-6 text-center">
            <p className="text-textGrey text-sm">CEEDed is not designed for large enterprise builds, complex ecommerce platforms, or heavy custom software. In those cases we're happy to recommend specialist partners.</p>
          </div>
        </div>
      </section>

      {/* Values Section - What Makes CEEDed Different */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-offWhite">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black text-center mb-4 animate-fadeInDown" data-animate="values">
            What Makes CEEDed Different
          </h2>
          <p className="text-textGrey text-center mb-16 animate-fadeInUp" data-animate="values" style={{ animationDelay: '0.1s' }}>
            Our biggest differentiator is restraint. We build only what's necessary—clarity over cleverness.
          </p>

          <div className="space-y-8">
            {[
              { title: 'Systems, not just websites', body: 'We design operational flows that support how a business actually works day-to-day—not just online pages.' },
              { title: 'Built for real founders', body: 'We work with early-stage and growing entrepreneurs. Our approach is practical, grounded, and accessible.' },
              { title: 'Human-first approach', body: 'We prioritise clarity over cleverness. Our systems are designed to be understood, not managed by experts.' },
              { title: 'Right-sized solutions', body: 'We sit intentionally between DIY chaos and expensive agencies—a right-sized solution for where you are today.' },
              { title: 'Designed to grow with you', body: 'Many clients start with a simple system and expand over time. CEEDed solutions are modular and adaptable.' },
            ].map((item, num) => (
              <div key={num} className="flex items-start gap-6 animate-fadeInUp" data-animate="values" style={{ animationDelay: `${(num + 1) * 0.1}s` }}>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold text-lg">{num + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-textGrey leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-charcoal border border-accent/20 rounded-lg p-8 text-center">
            <p className="text-bone text-lg">Every CEEDed system is designed around one question: <span className="text-accent font-bold">Does this make the business easier to run?</span> If the answer is no, we don't build it.</p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Contact Section */}
      <section id="contact" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-black relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10 animate-float"></div>
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-bone text-center mb-4 animate-fadeInDown" data-animate="contact">
            Let's Talk
          </h2>
          <p className="text-textGrey text-center mb-12 text-lg animate-fadeInUp" data-animate="contact" style={{ animationDelay: '0.1s' }}>
            A conversation about your vision—no sales pitch. We'll be in touch within 24 hours.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Phone, title: 'Call or WhatsApp', value: '+27 (0) XX XXX XXXX' },
              { icon: Mail, title: 'Email', value: 'hello@ceeded.co.za' },
              { icon: MapPin, title: 'Based In', value: 'South Africa' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="text-center p-6 bg-charcoal rounded-lg border border-accent/20 transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transform hover:scale-105 hover:-translate-y-2 cursor-pointer group" data-animate="contact">
                  <Icon size={32} className="mx-auto text-accent mb-4 group-hover:animate-float" />
                  <h3 className="font-bold text-bone mb-2 group-hover:text-accent transition-colors duration-300">{item.title}</h3>
                  <p className="text-textGrey group-hover:text-bone transition-colors duration-300">{item.value}</p>
                </div>
              )
            })}
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-charcoal p-8 rounded-lg border border-accent/20 transition-all duration-300 hover:border-accent/40" data-animate="contact">
            <div className="mb-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <label className="block text-bone font-bold mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded bg-black text-bone border border-accent/20 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 placeholder-textGrey transition-all duration-300"
                placeholder="John Smith"
              />
            </div>

            <div className="mb-6 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <label className="block text-bone font-bold mb-2">Business / Organisation Name</label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded bg-black text-bone border border-accent/20 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 placeholder-textGrey transition-all duration-300"
                placeholder="Your Business Name"
              />
            </div>

            <div className="mb-6 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <label className="block text-bone font-bold mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded bg-black text-bone border border-accent/20 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 placeholder-textGrey transition-all duration-300"
                placeholder="+27 (555) 123-4567"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent text-black font-bold py-3 rounded hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 text-lg transform hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: '0.5s' }}
            >
              Send My Information
            </button>
          </form>

          <p className="text-center text-textGrey mt-6 text-sm animate-fadeInUp" data-animate="contact" style={{ animationDelay: '0.6s' }}>
            We'll be in touch within 24 hours. This is a no-pressure conversation.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bone border-t border-borderGrey text-textGrey text-center py-8">
        <p className="font-semibold text-textDark">CEEDed — Simple systems for growing businesses.</p>
        <p className="mt-2 text-sm">Clarity over complexity. Systems that serve people. &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}
