'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  story: string
  challenge: string
  solution: string
  category: string
  image: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Hair Salon - Getting Booked',
    story: 'A hair salon owner was managing all bookings via WhatsApp. Clients would message at odd hours, she\'d lose track of appointments, and she had no time to focus on running the business.',
    challenge: 'No online booking. Manual admin eating up hours every week. Lost sales because clients couldn\'t book easily.',
    solution: 'Built a simple online booking system connected to her website. Clients can book 24/7. She gets automatic reminders. Her calendar is organized.',
    category: 'Websites',
    image: 'https://placehold.co/600x400/1E1E1E/00E5C4?text=Hair+Salon+Booking',
  },
  {
    id: 2,
    title: 'Spaza Shop - Inventory Made Simple',
    story: 'A spaza shop owner was tracking stock with a notebook and WhatsApp voice notes. He\'d over-order, miss slow-moving items, and spend hours counting shelves.',
    challenge: 'No visibility into what\'s selling. Inventory chaos. Time wasted on manual counting.',
    solution: 'Created a simple inventory dashboard. He logs sales once a day. The system shows what\'s moving, what\'s stale, and what to reorder. He saves 2+ hours weekly.',
    category: 'Systems',
    image: 'https://placehold.co/600x400/1E1E1E/00E5C4?text=Spaza+Inventory',
  },
  {
    id: 3,
    title: 'Construction Company - Building Credibility',
    story: 'A construction company had strong work but no online presence. Potential clients couldn\'t see their portfolio, and they relied entirely on word-of-mouth referrals.',
    challenge: 'Invisible online. Missing opportunities. No way to showcase quality work to new markets.',
    solution: 'Built a professional site showcasing their projects, team, and services. Added a contact form. Within 3 months, 200+ qualified inquiries. Now 30% of revenue comes from online leads.',
    category: 'Websites',
    image: 'https://placehold.co/600x400/1E1E1E/00E5C4?text=Construction+Work',
  },
]

const categories = ['All', 'Websites', 'Systems']

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-project-id') || '0')
            setVisibleProjects((prev) => new Set([...prev, id]))
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[data-project-id]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'All') return true
    return project.category === activeCategory
  })

  return (
    <section id="portfolio" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-offWhite">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 animate-fadeInDown">
            Businesses We've Helped
          </h2>
          <p className="text-textGrey text-lg max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            Real challenges, real solutions—structure that makes the business easier to run.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base transform hover:scale-105 ${
                activeCategory === category
                  ? 'bg-accent text-black shadow-lg shadow-accent/30'
                  : 'bg-charcoal text-bone border border-accent/30 hover:border-accent'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              data-project-id={project.id}
              className={`group bg-charcoal rounded-lg overflow-hidden border border-accent/30 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 transform hover:scale-105 hover:-translate-y-2 cursor-pointer ${
                visibleProjects.has(project.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transition: 'all 0.6s ease-out',
                transitionDelay: `${idx * 0.15}s`,
              }}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-black">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-bone mb-4 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>

                <div className="space-y-4">
                  <div className="opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-textGrey text-sm font-semibold text-accent mb-1">Their Story</p>
                    <p className="text-bone leading-relaxed">
                      {project.story}
                    </p>
                  </div>

                  <div className="opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-textGrey text-sm font-semibold text-accent mb-1">The Challenge</p>
                    <p className="text-bone leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>

                  <div className="opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-textGrey text-sm font-semibold text-accent mb-1">What We Built</p>
                    <p className="text-bone leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <p className="text-textGrey mb-6 text-lg">
            Your story could be next. Let's talk about your challenges.
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact')
              contactSection?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-accent text-black px-8 py-4 rounded-lg font-bold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 text-lg shadow-lg shadow-accent/30 transform hover:scale-105"
          >
            Start a Conversation
          </button>
        </div>
      </div>
    </section>
  )
}