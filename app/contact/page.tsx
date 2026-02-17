'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, ChevronDown } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import ScrollProgress from '@/components/ScrollProgress'
import AnimatedSection from '@/components/AnimatedSection'

export default function Contact() {
  const currentPath = '/contact'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    building: '',
    messy: '',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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

  const faqs = [
    {
      question: 'How long does setup take?',
      answer: 'Most projects are completed within 2-4 weeks, depending on complexity. We work at your pace and keep you involved throughout the process.'
    },
    {
      question: 'What tools do you use?',
      answer: 'We choose tools based on your specific needs—popular options include Notion, Airtable, Zapier, and booking platforms like Calendly. We prioritize simplicity and what actually works for you.'
    },
    {
      question: 'Do you offer ongoing support?',
      answer: 'Yes! After setup, we offer training and optional ongoing support packages. You\'ll never be left figuring things out alone.'
    },
    {
      question: 'What if I already have some systems?',
      answer: 'Perfect! We can integrate with what you have or help you transition to better solutions. We build around your existing workflow whenever possible.'
    },
    {
      question: 'How much does it cost?',
      answer: 'Every business is different, so we create custom quotes based on your specific needs. Book a discovery call to discuss your requirements and budget.'
    }
  ]

  const contactMethods = [
    { icon: Mail, title: 'Email', value: 'hello@ceeded.co.za', href: 'mailto:hello@ceeded.co.za' },
    { icon: MapPin, title: 'Location', value: 'Based in South Africa 🇿🇦', href: null },
  ]

  return (
    <div className="min-h-screen bg-dark">
      <Navigation currentPath={currentPath} />

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32 relative overflow-hidden bg-dark">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_50%,_rgba(48,86,211,0.15)_0%,_transparent_50%),radial-gradient(circle_at_80%_50%,_rgba(74,108,247,0.1)_0%,_transparent_50%)]"></div>
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <AnimatedSection animation="fade-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                Let's talk
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={100}>
              <p className="text-lg sm:text-xl leading-relaxed text-gray-dark">
                Tell us where you are in your journey.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-up" delay={200}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded transition-all bg-dark-3  text-white focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded transition-all bg-dark-3  text-white focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="building" className="block text-sm font-medium mb-2 text-white">
                  What are you building? *
                </label>
                <textarea
                  id="building"
                  name="building"
                  value={formData.building}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 rounded transition-all bg-dark-3  text-white resize-none focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="messy" className="block text-sm font-medium mb-2 text-white">
                  Where do things feel messy right now? *
                </label>
                <textarea
                  id="messy"
                  name="messy"
                  value={formData.messy}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded transition-all bg-dark-3  text-white resize-none focus:border-primary focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 rounded-2xl font-semibold gradient-button transition-all hover:scale-105 hover:shadow-2xl bg-primary hover:bg-primary-dark text-white"
              >
                Let's simplify it
              </button>

              {formSubmitted && (
                <div className="text-center p-4 rounded animate-scaleIn bg-primary/20">
                  <p className="font-semibold text-accent">Thanks for reaching out! We'll be in touch soon.</p>
                </div>
              )}
            </form>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 relative bg-dark">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-white">
              Common questions
            </h2>
          </AnimatedSection>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={(index + 1) * 50}>
                <div className="rounded-lg bg-dark-3  overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-primary/5 transition-all"
                  >
                    <span className="font-semibold text-white">{faq.question}</span>
                    <ChevronDown
                      className={`text-primary transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                      size={20}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-4 text-gray-dark">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 relative bg-dark">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-white">
              Other ways to reach us
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={(index + 1) * 100}>
                {method.href ? (
                  <a
                    href={method.href}
                    className="p-8 rounded-lg bg-dark-3 card-hover-lift text-center block"
                  >
                    <method.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-lg font-semibold mb-2 text-white">{method.title}</h3>
                    <p className="text-gray-dark">{method.value}</p>
                  </a>
                ) : (
                  <div className="p-8 rounded-lg bg-dark-3 text-center">
                    <method.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-lg font-semibold mb-2 text-white">{method.title}</h3>
                    <p className="text-gray-dark">{method.value}</p>
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Navigation Enhancements */}
      <ScrollProgress />
      <ScrollToTop />
    </div>
  )
}
