'use client'

import { useState, useEffect, useRef } from 'react'

export interface Tab {
  id: string
  label: string
  content: React.ReactNode
}

interface TabSystemProps {
  tabs: Tab[]
  defaultTab?: string
  className?: string
}

export default function TabSystem({ tabs, defaultTab, className = '' }: TabSystemProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 })
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  // Update underline position when active tab changes
  useEffect(() => {
    const activeButton = tabRefs.current[activeTab]
    if (activeButton) {
      setUnderlineStyle({
        left: activeButton.offsetLeft,
        width: activeButton.offsetWidth
      })
    }
  }, [activeTab])

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowLeft' && index > 0) {
      setActiveTab(tabs[index - 1].id)
      tabRefs.current[tabs[index - 1].id]?.focus()
    } else if (e.key === 'ArrowRight' && index < tabs.length - 1) {
      setActiveTab(tabs[index + 1].id)
      tabRefs.current[tabs[index + 1].id]?.focus()
    }
  }

  return (
    <div className={className}>
      {/* Tab Buttons */}
      <div className="relative border-b border-stroke">
        <div className="flex gap-2 sm:gap-4 overflow-x-auto scrollbar-hide">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              ref={(el) => { tabRefs.current[tab.id] = el }}
              onClick={() => setActiveTab(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`px-4 py-3 text-sm sm:text-base font-medium whitespace-nowrap transition-all focus:outline-none focus:ring-2 focus:ring-primary rounded-t ${
                activeTab === tab.id
                  ? 'text-primary'
                  : 'text-body hover:text-primary'
              }`}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              tabIndex={activeTab === tab.id ? 0 : -1}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Animated Underline */}
        <div
          className="absolute bottom-0 h-0.5 bg-primary transition-all duration-300 ease-out"
          style={{
            left: `${underlineStyle.left}px`,
            width: `${underlineStyle.width}px`
          }}
        />
      </div>

      {/* Tab Panels */}
      <div className="mt-6">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={`panel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={tab.id}
            className={`transition-all duration-300 ${
              activeTab === tab.id
                ? 'opacity-100 block animate-fadeIn'
                : 'opacity-0 hidden'
            }`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  )
}
