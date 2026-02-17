'use client'

import { type LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon?: LucideIcon
  title: string
  description: string
  className?: string
  iconColor?: string
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  className = '',
  iconColor = 'text-primary'
}: FeatureCardProps) {
  return (
    <div
      className={`p-8 sm:p-10 rounded-lg bg-dark-3 card-hover-lift transition-all ${className}`}
    >
      {Icon && (
        <div className={`mb-6 ${iconColor}`}>
          <Icon size={44} />
        </div>
      )}
      <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white">
        {title}
      </h3>
      <p className="text-gray-dark leading-relaxed">
        {description}
      </p>
    </div>
  )
}
