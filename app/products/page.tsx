'use client'

import Link from 'next/link'
import { Zap, Calendar, CreditCard, Layout, Check, Shield, Lightbulb, Target } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import ScrollProgress from '@/components/ScrollProgress'
import AnimatedSection from '@/components/AnimatedSection'
import FeatureCard from '@/components/FeatureCard'
import TabSystem, { type Tab } from '@/components/TabSystem'

export default function Products() {
  const currentPath = '/products'

  // Start Smaller cards with icons
  const startSmallerCards = [
    { icon: Zap, title: 'Enquiry flow', description: 'Capture leads professionally' },
    { icon: Calendar, title: 'Booking setup', description: 'Automated scheduling' },
    { icon: CreditCard, title: 'Payment setup', description: 'Streamlined invoicing' },
    { icon: Layout, title: 'Landing page', description: 'Professional web presence' },
  ]

  // Why CEEDed tabs
  const whyCeededTabs: Tab[] = [
    {
      id: 'no-overwhelm',
      label: 'No tech overwhelm',
      content: (
        <div className="text-left space-y-4">
          <p className="text-lg text-gray-dark leading-relaxed">
            We translate your business needs into the right tools, configured the right way. No jargon, no endless options—just clear, functional systems that work for you.
          </p>
          <ul className="space-y-2 text-gray-dark">
            <li className="flex items-start gap-2">
              <Check className="text-accent mt-1 flex-shrink-0" size={20} />
              <span>Plain language explanations, not technical manuals</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-accent mt-1 flex-shrink-0" size={20} />
              <span>We handle the setup, you focus on your work</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-accent mt-1 flex-shrink-0" size={20} />
              <span>Support when you need it, not when you don't</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'built-for-entrepreneurs',
      label: 'Built for entrepreneurs',
      content: (
        <div className="text-left space-y-4">
          <p className="text-lg text-gray-dark leading-relaxed">
            We understand you're not a corporation. You need systems that fit your reality—flexible, affordable, and built for how you actually work.
          </p>
          <ul className="space-y-2 text-gray-dark">
            <li className="flex items-start gap-2">
              <Check className="text-accent mt-1 flex-shrink-0" size={20} />
              <span>Designed for solo founders and small teams</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-accent mt-1 flex-shrink-0" size={20} />
              <span>Scalable as you grow, not before you need it</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-accent mt-1 flex-shrink-0" size={20} />
              <span>Built around your existing workflow</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'right-sized',
      label: 'Right-sized solutions',
      content: (
        <div className="text-left space-y-4">
          <p className="text-lg text-gray-dark leading-relaxed">
            Not too basic, not overcomplicated. We build what you need now, with room to grow when you're ready—nothing more, nothing less.
          </p>
          <ul className="space-y-2 text-gray-dark">
            <li className="flex items-start gap-2">
              <Check className="text-accent mt-1 flex-shrink-0" size={20} />
              <span>No feature bloat or unnecessary complexity</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-accent mt-1 flex-shrink-0" size={20} />
              <span>Start small, add more as you need it</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-accent mt-1 flex-shrink-0" size={20} />
              <span>Pay for what you use, not enterprise features</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'simplicity',
      label: 'Simplicity',
      content: (
        <div className="text-left space-y-4">
          <p className="text-lg text-gray-dark leading-relaxed">
            Simple doesn't mean basic. It means intentional—every part serves a purpose, and everything just makes sense. That's how good systems should feel.
          </p>
          <ul className="space-y-2 text-gray-dark">
            <li className="flex items-start gap-2">
              <Check className="text-accent mt-1 flex-shrink-0" size={20} />
              <span>Intuitive interfaces that don't need training</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-accent mt-1 flex-shrink-0" size={20} />
              <span>Clear workflows that reduce mental load</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-accent mt-1 flex-shrink-0" size={20} />
              <span>Less time managing tools, more time on your business</span>
            </li>
          </ul>
        </div>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-dark">
      <Navigation currentPath={currentPath} />

      {/* Signature Offer Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32 relative overflow-hidden bg-dark">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_50%,_rgba(48,86,211,0.15)_0%,_transparent_50%),radial-gradient(circle_at_80%_50%,_rgba(74,108,247,0.1)_0%,_transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Signature Offer
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <p className="text-xl sm:text-2xl mb-8 leading-relaxed text-gray-dark">
              Your complete digital foundation, designed to make your business run smoother behind the scenes.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="text-left max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl font-bold mb-6 text-primary">What you get:</h2>
              <ul className="space-y-4 text-lg text-gray-dark">
                <li className="flex items-start gap-3">
                  <Check className="text-accent mt-1 flex-shrink-0" size={24} />
                  <span>A full enquiry flow — from first contact to onboarding</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-accent mt-1 flex-shrink-0" size={24} />
                  <span>Intake forms and automated booking</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-accent mt-1 flex-shrink-0" size={24} />
                  <span>Payment links, invoicing, or basic client portals</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-accent mt-1 flex-shrink-0" size={24} />
                  <span>Simple client management so nothing slips through the cracks</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-accent mt-1 flex-shrink-0" size={24} />
                  <span>Integration of what you already use (where possible)</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={300}>
            <p className="text-xl mb-8 font-semibold text-white">
              This is designed for service-based businesses, consultants, and solo founders who need solid structure without the complexity.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={400}>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 rounded-2xl font-semibold gradient-button transition-all hover:scale-105 hover:shadow-2xl bg-primary hover:bg-primary-dark text-white"
            >
              Learn more
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Start Smaller Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 relative bg-dark">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-white">Start simple. Grow later.</h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <p className="text-lg sm:text-xl mb-12 text-center leading-relaxed text-gray-dark">
              Not ready for the full package? Build modularly with individual services.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {startSmallerCards.map((card, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={(index + 1) * 100}>
                <div className="p-8 rounded-lg text-center bg-dark-3  card-hover">
                  <card.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
                  <p className="text-lg font-semibold mb-2 text-white">{card.title}</p>
                  <p className="text-sm text-gray-dark">{card.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why CEEDed Section with Tabs */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 relative bg-dark">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-white">Why founders choose us</h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <TabSystem tabs={whyCeededTabs} defaultTab="no-overwhelm" />
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 relative bg-dark">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Simple, transparent pricing</h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <p className="text-lg sm:text-xl mb-10 leading-relaxed text-gray-dark">
              Every business is different. Let's talk about what you actually need.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="scale" delay={200}>
            <div className="p-10 rounded-lg bg-dark-3 card-hover-lift">
              <Shield className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h3 className="text-2xl font-bold mb-4 text-white">Custom Quote</h3>
              <p className="text-lg text-gray-dark mb-6 leading-relaxed">
                We'll build a package based on your specific needs and budget. No hidden fees, no surprises.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 rounded-2xl font-semibold gradient-button transition-all hover:scale-105 hover:shadow-2xl bg-primary hover:bg-primary-dark text-white"
              >
                Get your quote
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 text-center relative bg-dark">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <p className="text-xl sm:text-2xl mb-4 text-primary">Ready for more clarity?</p>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight text-white">
              Let's build something simple. Something CEEDed.
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 rounded-2xl font-semibold gradient-button transition-all hover:scale-105 hover:shadow-2xl bg-primary hover:bg-primary-dark text-white"
            >
              Start the conversation
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Brand Signature */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 text-center relative bg-dark">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="scale">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-relaxed">
              <span className="transition-all hover:scale-105 inline-block bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent">
                So your business runs, not just you.
              </span>
            </p>
          </AnimatedSection>
        </div>
      </section>

      <Footer />

      {/* Navigation Enhancements */}
      <ScrollProgress />
      <ScrollToTop />
    </div>
  )
}
