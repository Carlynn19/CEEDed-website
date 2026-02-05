'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight, Check, Sprout, Heart, Users, Phone, Mail, MapPin, Leaf } from 'lucide-react'
import PortfolioSection from '@/components/PortfolioSection'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  
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
              <Leaf className="text-accent group-hover:animate-float transition-all" size={28} />
              <div className="text-xl font-black text-black hover:text-accent transition-colors duration-300">CEEDed</div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {[
                { label: 'Our Mission', id: 'mission' },
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
                { label: 'Our Mission', id: 'mission' },
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
            Your Business Deserves <span className="text-accent animate-glow">to Be Online</span>
          </h1>
          <p className="text-lg sm:text-xl text-textGrey mb-10 leading-relaxed max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            If you have a great idea, a real service, or a genuine mission — but you're overwhelmed by the tech side — we're here to help. We build simple, affordable digital systems so you can focus on what you do best.
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-accent text-black px-10 py-4 rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 font-bold text-lg inline-flex items-center gap-3 group shadow-lg shadow-accent/30 animate-fadeInUp transform hover:scale-105"
            style={{ animationDelay: '0.4s' }}
          >
            Let's Start a Conversation
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-offWhite">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black text-center mb-4 animate-fadeInDown">
            Why We Do This
          </h2>
          <p className="text-textGrey text-center text-lg mb-12 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            We believe great ideas shouldn't stay offline.
          </p>

          <div className="bg-charcoal border border-accent/20 rounded-lg p-8 sm:p-12 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <p className="text-bone text-lg leading-relaxed mb-6">
              Across South Africa, there are brilliant entrepreneurs, passionate women-led businesses, and organisations doing meaningful work — yet many remain stuck offline or trapped in manual, inefficient processes.
            </p>
            <p className="text-bone text-lg leading-relaxed mb-6">
              Not because they lack ambition or capability. But because technology feels intimidating, inaccessible, or unaffordable.
            </p>
            <p className="text-bone text-lg leading-relaxed mb-6">
              <span className="text-accent font-bold">We're here to change that.</span> We help aspiring entrepreneurs, women-led businesses, small teams, and community organisations get online and grow — without needing to be tech-savvy.
            </p>
            <p className="text-bone text-lg leading-relaxed">
              We do this by listening first, understanding your real challenges, and building simple systems that actually work for your life and business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-offWhite">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black text-center mb-4 animate-fadeInDown" data-animate="services">
            How We Help
          </h2>
          <p className="text-textGrey text-center mb-16 text-lg animate-fadeInUp" data-animate="services" style={{ animationDelay: '0.1s' }}>
            Three ways to build your digital foundation.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Foundation Service */}
            <div className="p-8 bg-charcoal border-2 border-accent/30 rounded-lg hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group cursor-pointer transform hover:scale-105 hover:-translate-y-2" data-animate="services">
              <Sprout size={48} className="text-accent mb-6 group-hover:animate-float transition-transform" />
              <h3 className="text-2xl font-bold text-bone mb-2 group-hover:text-accent transition-colors duration-300">🌱 Foundation</h3>
              <p className="text-textGrey text-sm mb-4 font-semibold">Get credible and discoverable online</p>
              <p className="text-bone mb-6">
                A professional website that tells your story, shows what you offer, and helps customers find you.
              </p>
              <ul className="space-y-3 text-bone text-sm">
                <li className="flex items-start gap-3 group/item">
                  <Check size={18} className="text-accent flex-shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform duration-300" />
                  <span>Professional, trustworthy site</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <Check size={18} className="text-accent flex-shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform duration-300" />
                  <span>Easy to find on Google</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <Check size={18} className="text-accent flex-shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform duration-300" />
                  <span>Works perfectly on phones</span>
                </li>
              </ul>
            </div>

            {/* Simplify Service */}
            <div className="p-8 bg-charcoal border-2 border-accent/30 rounded-lg hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group cursor-pointer transform hover:scale-105 hover:-translate-y-2" data-animate="services" style={{ animationDelay: '0.1s' }}>
              <Leaf size={48} className="text-accent mb-6 group-hover:animate-float transition-transform" />
              <h3 className="text-2xl font-bold text-bone mb-2 group-hover:text-accent transition-colors duration-300">🌿 Simplify</h3>
              <p className="text-textGrey text-sm mb-4 font-semibold">Replace chaos with simple systems</p>
              <p className="text-bone mb-6">
                Stop managing clients with WhatsApp, Excel, and notebooks. Get simple systems that save time every day.
              </p>
              <ul className="space-y-3 text-bone text-sm">
                <li className="flex items-start gap-3 group/item">
                  <Check size={18} className="text-accent flex-shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform duration-300" />
                  <span>Online booking system</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <Check size={18} className="text-accent flex-shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform duration-300" />
                  <span>Manage inventory or clients easily</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <Check size={18} className="text-accent flex-shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform duration-300" />
                  <span>Automatic reminders</span>
                </li>
              </ul>
            </div>

            {/* Sustain Service */}
            <div className="p-8 bg-charcoal border-2 border-accent/30 rounded-lg hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group cursor-pointer transform hover:scale-105 hover:-translate-y-2" data-animate="services" style={{ animationDelay: '0.2s' }}>
              <Heart size={48} className="text-accent mb-6 group-hover:animate-float transition-transform" />
              <h3 className="text-2xl font-bold text-bone mb-2 group-hover:text-accent transition-colors duration-300">🌳 Sustain</h3>
              <p className="text-textGrey text-sm mb-4 font-semibold">We're here if you need help</p>
              <p className="text-bone mb-6">
                No pressure. Optional ongoing support so you can focus on running your business while we handle the tech.
              </p>
              <ul className="space-y-3 text-bone text-sm">
                <li className="flex items-start gap-3 group/item">
                  <Check size={18} className="text-accent flex-shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform duration-300" />
                  <span>Monthly or quarterly check-ins</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <Check size={18} className="text-accent flex-shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform duration-300" />
                  <span>Help when you need it</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <Check size={18} className="text-accent flex-shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform duration-300" />
                  <span>Updates and maintenance</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-textGrey text-lg animate-fadeInUp" data-animate="services">
              All work comes with clear pricing, fixed scope, and transparent timelines. No surprises.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-offWhite">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 animate-fadeInDown" data-animate="pricing">
              Transparent, Accessible Pricing
            </h2>
            <p className="text-textGrey text-lg max-w-2xl mx-auto animate-fadeInUp" data-animate="pricing" style={{ animationDelay: '0.1s' }}>
              Fixed prices. Clear scope. No hidden costs. We're not the cheapest, but we're intentional and transparent.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Foundation Card */}
            <div className="bg-charcoal border-2 border-accent/30 rounded-lg p-8 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 transform hover:scale-105 hover:-translate-y-2 cursor-pointer group" data-animate="pricing">
              <div className="text-4xl mb-2 group-hover:animate-float">🌱</div>
              <h3 className="text-2xl font-bold text-bone mb-2">Foundation</h3>
              <p className="text-textGrey text-sm mb-4">Professional online presence</p>
              
              <div className="bg-black rounded p-4 mb-6 group-hover:bg-accent/10 transition-colors duration-300">
                <div className="text-3xl font-black text-accent">R3,500 – R7,000</div>
                <p className="text-bone text-sm">Once-off build</p>
              </div>

              <p className="text-bone text-sm font-semibold mb-4">Includes:</p>
              <ul className="space-y-3 mb-6 text-bone text-sm">
                <li className="flex items-start gap-3 opacity-90 group-hover:opacity-100 transition-opacity">
                  <Check size={16} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>1–3 page website</span>
                </li>
                <li className="flex items-start gap-3 opacity-90 group-hover:opacity-100 transition-opacity">
                  <Check size={16} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Mobile-friendly design</span>
                </li>
                <li className="flex items-start gap-3 opacity-90 group-hover:opacity-100 transition-opacity">
                  <Check size={16} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Contact form</span>
                </li>
                <li className="flex items-start gap-3 opacity-90 group-hover:opacity-100 transition-opacity">
                  <Check size={16} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Basic SEO setup</span>
                </li>
                <li className="flex items-start gap-3 opacity-90 group-hover:opacity-100 transition-opacity">
                  <Check size={16} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Website deployment</span>
                </li>
              </ul>

              <p className="text-bone text-sm border-t border-accent/30 pt-4">
                <span className="font-semibold text-accent">For:</span> Aspiring entrepreneurs and small businesses needing a credible starting point.
              </p>
            </div>

            {/* Simplify Card - Featured */}
            <div className="bg-charcoal border-2 border-accent rounded-lg p-8 hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 scale-105 transform hover:scale-110 hover:-translate-y-4 cursor-pointer group relative" data-animate="pricing" style={{ animationDelay: '0.1s' }}>
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-black px-4 py-1 rounded-full text-sm font-bold animate-fadeInDown">
                Most Popular
              </div>
              <div className="text-4xl mb-2 group-hover:animate-bounce">🌿</div>
              <h3 className="text-2xl font-bold text-bone mb-2">Simplify</h3>
              <p className="text-textGrey text-sm mb-4">Admin & workflow systems</p>
              
              <div className="bg-accent/20 rounded p-4 mb-6 group-hover:bg-accent/30 transition-colors duration-300">
                <div className="text-3xl font-black text-accent">R8,000 – R20,000</div>
                <p className="text-bone text-sm">Once-off build (scope-dependent)</p>
              </div>

              <p className="text-bone text-sm font-semibold mb-4">Examples:</p>
              <ul className="space-y-2 mb-6 text-bone text-sm">
                <li className="flex items-start gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
                  <span className="text-accent">•</span>
                  <span>Booking or appointment systems</span>
                </li>
                <li className="flex items-start gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
                  <span className="text-accent">•</span>
                  <span>Application or registration forms</span>
                </li>
                <li className="flex items-start gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
                  <span className="text-accent">•</span>
                  <span>Internal admin dashboards</span>
                </li>
                <li className="flex items-start gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
                  <span className="text-accent">•</span>
                  <span>Simple workflow automation</span>
                </li>
              </ul>

              <p className="text-bone text-sm font-semibold mb-4">Includes:</p>
              <ul className="space-y-3 mb-6 text-bone text-sm">
                <li className="flex items-start gap-3 opacity-90 group-hover:opacity-100 transition-opacity">
                  <Check size={16} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Custom web-based system</span>
                </li>
                <li className="flex items-start gap-3 opacity-90 group-hover:opacity-100 transition-opacity">
                  <Check size={16} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Secure database setup</span>
                </li>
                <li className="flex items-start gap-3 opacity-90 group-hover:opacity-100 transition-opacity">
                  <Check size={16} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Simple admin interface</span>
                </li>
                <li className="flex items-start gap-3 opacity-90 group-hover:opacity-100 transition-opacity">
                  <Check size={16} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Email notifications</span>
                </li>
                <li className="flex items-start gap-3 opacity-90 group-hover:opacity-100 transition-opacity">
                  <Check size={16} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Testing and handover</span>
                </li>
              </ul>

              <p className="text-bone text-sm border-t border-accent/30 pt-4">
                <span className="font-semibold text-accent">For:</span> Non-technical founders overwhelmed by manual processes.
              </p>
            </div>

            {/* Sustain Card */}
            <div className="bg-charcoal border-2 border-accent/30 rounded-lg p-8 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 transform hover:scale-105 hover:-translate-y-2 cursor-pointer group" data-animate="pricing" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl mb-2 group-hover:animate-float">🌳</div>
              <h3 className="text-2xl font-bold text-bone mb-2">Sustain</h3>
              <p className="text-textGrey text-sm mb-4">Hosting & ongoing support</p>
              
              <div className="bg-black rounded p-4 mb-6 group-hover:bg-accent/10 transition-colors duration-300">
                <div className="text-2xl font-black text-accent">R500 – R1,500</div>
                <p className="text-bone text-sm mb-2">Monthly</p>
                <div className="text-2xl font-black text-accent">R3,000 – R7,000</div>
                <p className="text-bone text-sm">Yearly</p>
              </div>

              <p className="text-bone text-sm font-semibold mb-4">Includes:</p>
              <ul className="space-y-3 mb-6 text-bone text-sm">
                <li className="flex items-start gap-3 opacity-90 group-hover:opacity-100 transition-opacity">
                  <Check size={16} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Hosting management</span>
                </li>
                <li className="flex items-start gap-3 opacity-90 group-hover:opacity-100 transition-opacity">
                  <Check size={16} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>SSL certificate</span>
                </li>
                <li className="flex items-start gap-3 opacity-90 group-hover:opacity-100 transition-opacity">
                  <Check size={16} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Regular backups</span>
                </li>
                <li className="flex items-start gap-3 opacity-90 group-hover:opacity-100 transition-opacity">
                  <Check size={16} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Minor updates & fixes</span>
                </li>
                <li className="flex items-start gap-3 opacity-90 group-hover:opacity-100 transition-opacity">
                  <Check size={16} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Email support</span>
                </li>
              </ul>

              <p className="text-bone text-sm border-t border-accent/30 pt-4">
                <span className="font-semibold text-accent">Optional:</span> You can also manage hosting independently.
              </p>
            </div>
          </div>

          {/* Add-Ons Section */}
          <div className="bg-charcoal border border-accent/20 rounded-lg p-8 mb-12 transition-all duration-300 hover:border-accent/40" data-animate="pricing">
            <h3 className="text-2xl font-bold text-bone mb-6 animate-fadeInDown">🔧 Optional Add-Ons</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: 'Additional pages', price: 'R500 – R1,000' },
                { name: 'Extra forms / workflows', price: 'R1,000 – R3,000' },
                { name: 'Payment integration', price: 'R2,000 – R5,000' },
                { name: 'Data exports / reports', price: 'R1,000 – R2,500' },
                { name: 'Hosting setup only', price: 'R500 – R1,000' },
              ].map((addon, idx) => (
                <div key={idx} className="flex justify-between items-center pb-4 border-b border-accent/20 hover:border-accent/40 transition-colors group cursor-pointer" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <span className="text-bone group-hover:text-accent transition-colors duration-300">{addon.name}</span>
                  <span className="font-semibold text-accent">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Terms */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-charcoal border border-accent/20 rounded-lg p-8 transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10" data-animate="pricing">
              <h3 className="text-xl font-bold text-bone mb-4">💳 Payment Terms</h3>
              <ul className="space-y-3 text-bone">
                <li className="flex items-start gap-3 opacity-90 hover:opacity-100 transition-opacity">
                  <Check size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>50% deposit upfront</span>
                </li>
                <li className="flex items-start gap-3 opacity-90 hover:opacity-100 transition-opacity">
                  <Check size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>50% payable on completion</span>
                </li>
                <li className="flex items-start gap-3 opacity-90 hover:opacity-100 transition-opacity">
                  <Check size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Ongoing services billed monthly or annually</span>
                </li>
              </ul>
            </div>

            <div className="bg-charcoal border border-accent/20 rounded-lg p-8 transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10" data-animate="pricing">
              <h3 className="text-xl font-bold text-bone mb-4">🤍 Support for NPOs & Women-Led Businesses</h3>
              <p className="text-bone leading-relaxed">
                We offer discounted rates for registered NPOs and selected women-led businesses where possible, subject to scope and capacity.
              </p>
              <p className="text-bone leading-relaxed mt-4">
                This reflects our commitment to access, dignity, and inclusion — without compromising quality or sustainability.
              </p>
            </div>
          </div>

          {/* Closing Note */}
          <div className="bg-charcoal border-2 border-accent rounded-lg p-8 text-center transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 transform hover:scale-105" data-animate="pricing">
            <p className="text-bone text-lg leading-relaxed">
              <span className="font-bold">We are not the cheapest, and we are not the fastest.</span> We are intentional, transparent, and deeply invested in helping small organisations succeed without overwhelm.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section id="who-we-serve" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-offWhite">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black text-center mb-4 animate-fadeInDown" data-animate="who-serve">
            Who We Serve
          </h2>
          <p className="text-textGrey text-center mb-16 text-lg animate-fadeInUp" data-animate="who-serve" style={{ animationDelay: '0.1s' }}>
            If this sounds like you, let's talk.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Sprout,
                title: 'Aspiring Entrepreneurs',
                description: 'You have an idea and want to test it. You need a professional presence without the cost.'
              },
              {
                icon: Users,
                title: 'Women-Led Businesses',
                description: 'You\'re building something meaningful. You deserve support that respects your vision and values.'
              },
              {
                icon: Heart,
                title: 'Community Organisations',
                description: 'You do important work. You need simple systems to reach more people and operate smoothly.'
              },
              {
                icon: Leaf,
                title: 'Small Teams (1–10 people)',
                description: 'You\'re overwhelmed by admin. You want to focus on your core work, not spreadsheets.'
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="p-8 bg-charcoal border border-accent/20 rounded-lg hover:border-accent transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group cursor-pointer" data-animate="who-serve">
                  <Icon size={40} className="text-accent mb-4 group-hover:animate-float" />
                  <h3 className="text-xl font-bold text-bone mb-3 group-hover:text-accent transition-colors duration-300">{item.title}</h3>
                  <p className="text-bone leading-relaxed group-hover:text-bone/90 transition-colors">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-offWhite">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black text-center mb-16 animate-fadeInDown" data-animate="values">
            What Makes Us Different
          </h2>

          <div className="space-y-8">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="flex items-start gap-6 animate-fadeInUp" data-animate="values" style={{ animationDelay: `${num * 0.1}s` }}>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                  <span className="text-accent font-bold text-lg">{num}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    {num === 1 && 'We Listen First'}
                    {num === 2 && 'Simplicity by Design'}
                    {num === 3 && 'Built for Handover, Not Dependency'}
                    {num === 4 && 'Access with Dignity'}
                  </h3>
                  <p className="text-textGrey leading-relaxed">
                    {num === 1 && 'Before we build anything, we understand your real challenges. What\'s draining your time? What\'s holding you back? Then we design only what you actually need.'}
                    {num === 2 && 'We deliberately avoid over-engineering. Every feature must earn its place. You shouldn\'t need a tech degree to use what we build.'}
                    {num === 3 && 'We design systems you can understand, manage, and grow with. You\'re not locked in. You own your business and your digital foundation.'}
                    {num === 4 && 'Fair pricing. Clear communication. No intimidating jargon. No unnecessary upselling. We\'re a partner, not a vendor.'}
                  </p>
                </div>
              </div>
            ))}
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
            Let's Talk About Your Business
          </h2>
          <p className="text-textGrey text-center mb-12 text-lg animate-fadeInUp" data-animate="contact" style={{ animationDelay: '0.1s' }}>
            No sales pitch. Just a conversation about your vision and how we can help.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Phone, title: 'Call or WhatsApp', value: '+1 (555) 123-4567' },
              { icon: Mail, title: 'Email', value: 'hello@rooted.co.za' },
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
        <p>&copy; 2026 Ceeded Digital. Building digital foundations with intention.</p>
      </footer>
    </div>
  )
}
