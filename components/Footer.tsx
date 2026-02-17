'use client'

import { Instagram, Facebook, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="text-center py-12 relative overflow-hidden bg-dark">
      <div className="max-w-6xl mx-auto px-4">
        <p className="font-semibold mb-2 text-white">CEEDed</p>
        <p className="text-sm mb-6 text-gray-dark">Systems that serve people.</p>
        <p className="text-sm mb-6 font-semibold text-white">Based in South Africa 🇿🇦</p>

        <div className="flex justify-center gap-6 mb-6 flex-wrap">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:scale-110 text-sm font-medium flex items-center gap-2 text-primary hover:text-primary-light"
          >
            <Instagram size={18} /> Instagram
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:scale-110 text-sm font-medium flex items-center gap-2 text-primary hover:text-primary-light"
          >
            <Facebook size={18} /> Facebook
          </a>
          <a
            href="https://fiverr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:scale-110 text-sm font-medium text-primary hover:text-primary-light"
          >
            Fiverr
          </a>
          <a
            href="mailto:hello@ceeded.co.za"
            className="transition-all hover:scale-110 text-sm font-medium flex items-center gap-2 text-primary hover:text-primary-light"
          >
            <Mail size={18} /> Email
          </a>
        </div>

        <p className="text-sm text-body">
          &copy; {new Date().getFullYear()} CEEDed. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
