'use client'

import { Users, Briefcase, Palette, MessageSquare, Lightbulb, Target } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import ScrollProgress from '@/components/ScrollProgress'
import AnimatedSection from '@/components/AnimatedSection'

export default function About() {
  const currentPath = '/about'

  // Who we work with personas
  const personas = [
    { icon: Users, title: 'Solo founders', description: 'Building from scratch with big vision' },
    { icon: Palette, title: 'Creatives', description: 'Designers, writers, and makers' },
    { icon: Briefcase, title: 'Service providers', description: 'Consultants and professionals' },
    { icon: MessageSquare, title: 'Coaches', description: 'Guiding others to success' },
    { icon: Lightbulb, title: 'Consultants', description: 'Expert advice, smooth delivery' },
    { icon: Target, title: 'Early-stage brands', description: 'Finding their footing and scaling' },
  ]

  return (
    <div className="min-h-screen bg-dark">
      <Navigation currentPath={currentPath} />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32 relative overflow-hidden bg-dark">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" style={{ backgroundImage: "url('/hero2.png')" }}></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_50%,_rgba(36,130,50,0.15)_0%,_transparent_50%),radial-gradient(circle_at_80%_50%,_rgba(43,168,74,0.1)_0%,_transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              A small studio built for entrepreneurs.
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section with Timeline */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 relative bg-dark">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-white">The story</h2>
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedSection animation="fade-left" delay={100}>
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                <p className="text-lg sm:text-xl leading-relaxed text-gray-dark">
                  CEEDed was created for people building meaningful businesses, often from scratch, often while wearing too many hats.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={200}>
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary-light"></div>
                <p className="text-lg sm:text-xl leading-relaxed text-gray-dark">
                  We saw a pattern.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={300}>
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                <p className="text-lg sm:text-xl leading-relaxed text-gray-dark">
                  Talented entrepreneurs doing great work…
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={400}>
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary-light"></div>
                <p className="text-lg sm:text-xl leading-relaxed text-gray-dark">
                  Held back by messy admin, scattered tools, and constant mental load.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={500}>
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                <p className="text-lg sm:text-xl leading-relaxed text-gray-dark">
                  Not because they lacked ambition. Because they lacked structure.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={600}>
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent"></div>
                <p className="text-lg sm:text-xl leading-relaxed text-white font-semibold">
                  So we built CEEDed.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={700}>
              <div className="relative pl-8">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary-light"></div>
                <p className="text-lg sm:text-xl leading-relaxed text-gray-dark">
                  A simple studio focused on helping entrepreneurs move from chaos to clarity, without the overwhelm that comes with going digital.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Edge Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 relative bg-dark">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white">Our edge</h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <p className="text-2xl sm:text-3xl mb-4 font-semibold text-primary">We sit between:</p>
          </AnimatedSection>
          <AnimatedSection animation="scale" delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <div className="px-8 py-6 rounded-lg bg-dark-3 card-hover">
                <p className="text-xl font-semibold text-white">DIY chaos</p>
              </div>
              <div className="text-primary text-2xl font-bold">and</div>
              <div className="px-8 py-6 rounded-lg bg-dark-3 card-hover">
                <p className="text-xl font-semibold text-white">Overpriced agencies</p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={300}>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-dark">
              Offering something intentional: <span className="text-primary font-semibold">Focused digital foundations for growing businesses.</span>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 relative bg-dark">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-white">Who we work with</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personas.map((persona, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={(index + 1) * 100}>
                <div className="p-6 rounded-lg bg-dark-3 card-hover-lift text-center">
                  <persona.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2 text-white">{persona.title}</h3>
                  <p className="text-sm text-gray-dark">{persona.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Line Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 text-center relative bg-dark">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="scale">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-relaxed text-white">
              So you can focus more on the work you actually care about.
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
