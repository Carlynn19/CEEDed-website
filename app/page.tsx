'use client'

import Image from 'next/image'
import { ArrowRight, Zap, Calendar, CreditCard, Search, Settings, Rocket } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import ScrollProgress from '@/components/ScrollProgress'
import AnimatedSection from '@/components/AnimatedSection'
import FeatureCard from '@/components/FeatureCard'
import TestimonialCarousel, { type Testimonial } from '@/components/TestimonialCarousel'

export default function Home() {
  const currentPath = '/'

  // Relatability cards
  const relatabilityCards = [
    'Everything lives in DMs',
    'You\'re the admin system',
    'Too many tools',
    'No clear flow',
  ]

  // How It Works steps
  const howItWorksSteps = [
    {
      icon: Search,
      title: 'Discovery Call',
      description: 'Tell us where you are and what feels messy'
    },
    {
      icon: Settings,
      title: 'Tailored Setup',
      description: 'We design your structure, no guesswork'
    },
    {
      icon: Rocket,
      title: 'Launch & Support',
      description: 'You get clarity and control that actually works'
    }
  ]

  // Testimonials
  const testimonials: Testimonial[] = [
    {
      quote: "CEEDed transformed how I manage client enquiries. What used to be chaos in my inbox is now a smooth, professional process. I actually feel in control of my business for the first time.",
      author: "Sarah M.",
      role: "Consultant",
      company: "Independent"
    },
    {
      quote: "The booking system they set up has saved me hours every week. No more back-and-forth emails trying to find a time. My clients book directly and everything just flows.",
      author: "David K.",
      role: "Business Coach"
    },
    {
      quote: "I was drowning in spreadsheets and sticky notes. Now everything is in one place, automated, and actually makes sense. This is exactly what my business needed.",
      author: "Lisa P.",
      role: "Creative Director",
      company: "Studio LP"
    }
  ]

  return (
    <div className="min-h-screen bg-dark">
      <Navigation currentPath={currentPath} />

      {/* Hero Section */}
      <section id="hero" className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32 relative overflow-hidden bg-dark">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" style={{ backgroundImage: "url('/hero-image.png')" }}></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_50%,_rgba(36,130,50,0.15)_0%,_transparent_50%),radial-gradient(circle_at_80%_50%,_rgba(43,168,74,0.1)_0%,_transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="flex flex-col items-center space-y-8">
              <AnimatedSection animation="fade-up">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-white" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)' }}>
                  Your business shouldn't feel this messy.
                </h1>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={100}>
                <p className="text-xl sm:text-2xl mb-10 font-semibold text-primary-light" style={{ textShadow: '0 3px 6px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.5)' }}>
                  You've outgrown the chaos.
                </p>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={200}>
                <p className="text-lg sm:text-xl mb-16 leading-relaxed text-white" style={{ textShadow: '0 3px 6px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.5)' }}>
                  We help you replace scattered tools and constant admin with simple structure that just works.
                </p>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={300}>
                <div className="flex flex-col sm:flex-row gap-6">
                  <a
                    href="/contact"
                    className="px-8 py-3 rounded-2xl font-semibold gradient-button transition-all hover:scale-105 hover:shadow-2xl text-center bg-primary hover:bg-primary-dark text-white"
                  >
                    Let's chat
                  </a>
                  <a
                    href="/products"
                    className="px-8 py-3 rounded-2xl font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2 text-primary hover:bg-primary/10 backdrop-blur-sm"
                  >
                    See our products <ArrowRight size={20} />
                  </a>
                </div>
              </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Relatability Strip */}
      <section id="relatable" className="px-4 sm:px-6 lg:px-8 py-20 relative bg-dark">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-down">
            <h2 className="text-4xl sm:text-5xl font-bold mb-20 text-center text-white">Sound familiar?</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatabilityCards.map((card, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="p-8 rounded-lg text-center bg-dark-3 card-hover h-full flex flex-col items-center justify-center min-h-[280px] gap-4">
                  <div className="w-full h-32 bg-dark-2 rounded-lg flex items-center justify-center">
                    <span className="text-gray-dark text-sm">Image</span>
                  </div>
                  <p className="text-lg font-medium text-white">{card}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection animation="fade-up" delay={400}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl p-20 text-center leading-tight text-white">
              If yes, let's get you{' '}
              <a
                href="/products"
                className="transition-all hover:scale-105 inline-block bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent decoration-primary"
              >
                CEEDed
              </a>
            </h2>
          </AnimatedSection>
        </div>
      </section>

      {/* What We Do */}
      <section id="what-we-do" className="px-4 sm:px-6 lg:px-8 py-20 relative bg-dark">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white">
              What We Do
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <p className="text-lg sm:text-xl mb-16 leading-relaxed text-gray-dark">
              We design simple digital setups that help your business feel organised and professional.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-10">
            <AnimatedSection animation="fade-up" delay={150}>
              <FeatureCard
                icon={Zap}
                title="Enquiry flows"
                description="Capture and manage leads professionally, from first contact to conversion."
              />
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={250}>
              <FeatureCard
                icon={Calendar}
                title="Booking setups"
                description="Let clients book directly with automated scheduling that just works."
              />
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={350}>
              <FeatureCard
                icon={CreditCard}
                title="Payment integrations"
                description="Streamline invoicing and payments so you get paid faster."
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="px-4 sm:px-6 lg:px-8 py-20 relative bg-dark">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-center text-white">
              How It Works
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <p className="text-lg sm:text-xl mb-16 text-center leading-relaxed text-gray-dark">
              Simple, structured, effective.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-10">
            {howItWorksSteps.map((step, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={(index + 1) * 150}>
                <div className="relative">
                  {index < howItWorksSteps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-primary/30 z-0"></div>
                  )}
                  <FeatureCard
                    icon={step.icon}
                    title={`${index + 1}. ${step.title}`}
                    description={step.description}
                    className="relative z-10"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="px-4 sm:px-6 lg:px-8 py-20 relative bg-dark">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-center text-white">
              What Founders Say
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <p className="text-lg sm:text-xl mb-16 text-center leading-relaxed text-gray-dark">
              Real results from people who chose clarity.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <TestimonialCarousel testimonials={testimonials} />
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
