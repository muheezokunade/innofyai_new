import Link from 'next/link'
import { Settings, Palette, Code } from 'lucide-react'

const services = [
  {
    id: 'automation-cx',
    name: 'Automation CX',
    description: 'Complete customer experience automation from first touch to conversion.',
    icon: '⚙️',
    href: '/services/automation-cx'
  },
  {
    id: 'brand-marketing',
    name: 'Brand Marketing',
    description: 'Strategic brand positioning and marketing campaigns that drive growth.',
    icon: '🎨',
    href: '/services/brand-marketing'
  },
  {
    id: 'web-development',
    name: 'Web Development',
    description: 'Custom web solutions built for performance, conversion, and scale.',
    icon: '💻',
    href: '/services/web-development'
  }
]

const iconMap = {
  '⚙️': Settings,
  '🎨': Palette,
  '💻': Code,
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Professional Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert services to accelerate your business growth with AI-powered solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Settings
              return (
                <Link
                  key={service.id}
                  href={service.href}
                  className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-blue-300"
                >
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-end">
                    <span className="text-blue-600 font-medium group-hover:text-blue-700">
                      Learn more →
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
