'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'

const products = {
  'Sales Acceleration': [
    { name: 'AI Receptionist', description: '24/7 lead conversion', href: '/products/ai-receptionist' },
    { name: 'Lead Scorer', description: 'Smart lead prioritization', href: '/products/lead-scorer' },
    { name: 'Adaptive Follow-up', description: 'Personalized sequences', href: '/products/adaptive-follow-up' }
  ],
  'Engagement': [
    { name: 'Chat Automation', description: 'Intelligent conversations', href: '/products/chat-automation' },
    { name: 'Email Sequences', description: 'Automated nurturing', href: '/products/email-sequences' },
    { name: 'Social Media Bot', description: 'Multi-platform engagement', href: '/products/social-bot' }
  ],
  'SmartOps': [
    { name: 'Analytics Dashboard', description: 'Real-time insights', href: '/products/analytics' },
    { name: 'CRM Integration', description: 'Seamless data sync', href: '/products/crm-integration' },
    { name: 'Workflow Automation', description: 'Streamline processes', href: '/products/workflow-automation' }
  ],
  'Growth': [
    { name: 'Growth Hacking Suite', description: 'Complete growth toolkit', href: '/products/growth-suite' }
  ]
}

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Training', href: '/training' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Resources', href: '/resources' },
  { name: 'About', href: '/about' }
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isProductsMobileOpen, setIsProductsMobileOpen] = useState(false)
  
  const pathname = usePathname()
  const productsRef = useRef<HTMLDivElement>(null)
  const mobileRef = useRef<HTMLDivElement>(null)
  const productsButtonRef = useRef<HTMLButtonElement>(null)

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle products menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsProductsOpen(false)
        setIsMobileOpen(false)
        productsButtonRef.current?.focus()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  // Handle route changes
  useEffect(() => {
    setIsProductsOpen(false)
    setIsMobileOpen(false)
    setIsProductsMobileOpen(false)
  }, [pathname])

  // Focus trap for mobile menu
  useEffect(() => {
    if (isMobileOpen && mobileRef.current) {
      const focusableElements = mobileRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      const firstElement = focusableElements[0] as HTMLElement
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus()
              e.preventDefault()
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus()
              e.preventDefault()
            }
          }
        }
      }

      firstElement?.focus()
      document.addEventListener('keydown', handleTabKey)
      
      return () => document.removeEventListener('keydown', handleTabKey)
    }
  }, [isMobileOpen])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileOpen])

  const handleProductsKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setIsProductsOpen(!isProductsOpen)
    }
  }

  const handleProductsHover = () => {
    setIsProductsOpen(true)
  }

  const handleProductsLeave = () => {
    setIsProductsOpen(false)
  }

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-2 min-w-[40px] min-h-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">I</span>
              </div>
              <span className="font-bold text-xl text-gray-900">InnofyAI</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-6">
              {/* Products Menu */}
              <div className="relative" ref={productsRef}>
                <button
                  ref={productsButtonRef}
                  onMouseEnter={handleProductsHover}
                  onMouseLeave={handleProductsLeave}
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  onKeyDown={handleProductsKeyDown}
                  className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md transition-colors"
                  aria-expanded={isProductsOpen}
                  aria-controls="products-menu"
                >
                  <span>Products</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Products Mega Menu */}
                {isProductsOpen && (
                  <div
                    id="products-menu"
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[720px] bg-white rounded-lg shadow-lg border border-gray-200 py-6 px-8"
                    role="menu"
                    onMouseEnter={handleProductsHover}
                    onMouseLeave={handleProductsLeave}
                  >
                    <div className="grid grid-cols-4 gap-8">
                      {Object.entries(products).map(([category, items]) => (
                        <div key={category} className="space-y-3">
                          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            {category}
                          </h3>
                          <div className="space-y-2">
                            {items.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="block group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-1 -m-1"
                                role="menuitem"
                              >
                                <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                  {item.name}
                                </div>
                                <div className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors">
                                  {item.description}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-200 flex justify-between">
                      <Link
                        href="/products"
                        className="text-sm font-medium text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
                      >
                        View all products
                      </Link>
                      <Link
                        href="/integrations"
                        className="text-sm font-medium text-gray-600 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
                      >
                        Integrations
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Other Navigation Links */}
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md ${
                    pathname === item.href
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                  aria-current={pathname === item.href ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex lg:items-center lg:space-x-4">
              <Link
                href="/signin"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md transition-colors"
              >
                Sign in
              </Link>
              <Link
                href="/start"
                className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Start Free
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMobileOpen(false)}
          />
          
          {/* Drawer */}
          <div
            ref={mobileRef}
            className="fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-xl z-50 transform transition-transform duration-200 ease-out"
            id="mobile-menu"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <Link 
                  href="/" 
                  className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
                  onClick={() => setIsMobileOpen(false)}
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">I</span>
                  </div>
                  <span className="font-bold text-xl text-gray-900">InnofyAI</span>
                </Link>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Content */}
              <div className="flex-1 overflow-y-auto py-4">
                {/* Products Section */}
                <div className="px-4">
                  <button
                    onClick={() => setIsProductsMobileOpen(!isProductsMobileOpen)}
                    className="flex items-center justify-between w-full px-3 py-2 text-left text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
                    aria-expanded={isProductsMobileOpen}
                  >
                    <span>Products</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isProductsMobileOpen ? 'rotate-90' : ''}`} />
                  </button>
                  
                  {isProductsMobileOpen && (
                    <div className="mt-2 space-y-1 pl-4">
                      {Object.entries(products).map(([category, items]) => (
                        <div key={category} className="space-y-1">
                          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider pt-2">
                            {category}
                          </h4>
                          {items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
                              onClick={() => setIsMobileOpen(false)}
                            >
                              <div className="font-medium">{item.name}</div>
                              <div className="text-xs text-gray-500">{item.description}</div>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Other Navigation Links */}
                <div className="mt-4 space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block px-4 py-3 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                        pathname === item.href
                          ? 'text-blue-600 bg-blue-50 border-r-2 border-blue-600'
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                      onClick={() => setIsMobileOpen(false)}
                      aria-current={pathname === item.href ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="p-4 border-t border-gray-200 space-y-3">
                <Link
                  href="/signin"
                  className="block w-full px-4 py-2 text-sm font-medium text-gray-700 text-center border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Sign in
                </Link>
                <Link
                  href="/start"
                  className="block w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium text-center rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Start Free
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
