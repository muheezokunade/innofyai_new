'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ExternalLink, Mail, MapPin, Phone } from 'lucide-react'

const footerSections = {
  Products: [
    { name: 'AI Receptionist', href: '/products/ai-receptionist' },
    { name: 'Lead Scorer', href: '/products/lead-scorer' },
    { name: 'Adaptive Follow-up', href: '/products/adaptive-follow-up' },
    { name: 'WhatsApp Commerce', href: '/products/whatsapp-commerce' },
    { name: 'Review Miner', href: '/products/review-miner' },
    { name: 'Document AI', href: '/products/document-ai' },
    { name: 'Local SEO Generator', href: '/products/local-seo-generator' },
    { name: 'Owner\'s Copilot', href: '/products/owners-copilot' },
    { name: 'Ticket Triage', href: '/products/ticket-triage' },
    { name: 'Attribution Copilot', href: '/products/attribution-copilot' },
    { name: 'View all', href: '/products' }
  ],
  Services: [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Brand & Marketing', href: '/services/brand-marketing' },
    { name: 'Automation & CX', href: '/services/automation-cx' },
    { name: 'Social Media', href: '/services/social-media' },
    { name: 'CRO & Local SEO', href: '/services/cro-local-seo' },
    { name: 'CRM Implementation', href: '/services/crm-implementation' }
  ],
  Resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Templates', href: '/templates' },
    { name: 'Integrations', href: '/integrations' },
    { name: 'Docs', href: '/docs', external: true },
    { name: 'Changelog', href: '/changelog' },
    { name: 'Roadmap', href: '/roadmap' }
  ],
  Company: [
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Security', href: '/security' },
    { name: 'Press', href: '/press' },
    { name: 'Status', href: 'https://status.innofyai.com', external: true }
  ]
}

const legalLinks = [
  { name: 'Terms', href: '/terms' },
  { name: 'Privacy', href: '/privacy' },
  { name: 'DPA', href: '/dpa' },
  { name: 'Cookies', href: '/cookies' },
  { name: 'Accessibility', href: '/accessibility' },
  { name: 'SLA', href: '/sla' },
  { name: 'Refunds', href: '/refunds' }
]

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/innofyai', icon: 'LinkedIn' },
  { name: 'X (Twitter)', href: 'https://x.com/innofyai', icon: 'X' },
  { name: 'YouTube', href: 'https://youtube.com/@innofyai', icon: 'YouTube' }
]

export function Footer() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})
  const [email, setEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setNewsletterStatus('loading')
    
    // Simulate API call
    setTimeout(() => {
      setNewsletterStatus('success')
      setEmail('')
      setTimeout(() => setNewsletterStatus('idle'), 3000)
    }, 1000)
  }

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Newsletter Section (Optional) */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Weekly AI insights delivered to your inbox
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Practical tips, case studies, and industry updates. No spam. Unsubscribe anytime.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <button
                  type="submit"
                  disabled={newsletterStatus === 'loading'}
                  className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm transition-colors"
                >
                  {newsletterStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              {newsletterStatus === 'success' && (
                <p className="mt-2 text-sm text-green-600">Thanks for subscribing!</p>
              )}
              {newsletterStatus === 'error' && (
                <p className="mt-2 text-sm text-red-600">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(footerSections).map(([sectionName, links]) => (
            <div key={sectionName} className="space-y-4">
              {/* Desktop/Tablet Header */}
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide lg:block hidden">
                {sectionName}
              </h3>
              
              {/* Mobile Accordion Header */}
              <button
                onClick={() => toggleSection(sectionName)}
                className="flex items-center justify-between w-full text-sm font-semibold text-gray-900 uppercase tracking-wide lg:hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md py-2"
                aria-expanded={openSections[sectionName]}
                aria-controls={`footer-${sectionName.toLowerCase()}`}
              >
                <span>{sectionName}</span>
                <ChevronDown 
                  className={`w-4 h-4 transition-transform ${
                    openSections[sectionName] ? 'rotate-180' : ''
                  }`} 
                />
              </button>

              {/* Links */}
              <div 
                id={`footer-${sectionName.toLowerCase()}`}
                className={`space-y-3 ${
                  openSections[sectionName] ? 'block' : 'hidden'
                } lg:block`}
              >
                {links.map((link) => (
                  <div key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md transition-colors"
                      >
                        <span>{link.name}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="block text-sm text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} InnofyAI. All rights reserved.
              </p>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">Status: Operational</span>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-4 lg:gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md transition-colors"
                  aria-label={social.name}
                >
                  <span className="sr-only">{social.name}</span>
                  <div className="w-5 h-5 bg-gray-400 rounded-sm flex items-center justify-center text-white text-xs font-bold">
                    {social.icon.charAt(0)}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Company Info */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>123 AI Street, Tech City, TC 12345</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span>hello@innofyai.com</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>SOC2 Compliant</span>
                <span>•</span>
                <span>GDPR Ready</span>
                <span>•</span>
                <span>NDPR Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
