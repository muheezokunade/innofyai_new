import Link from 'next/link'
import { Bot, Target, Zap } from 'lucide-react'

const products = [
  {
    id: 'ai-receptionist',
    name: 'AI Receptionist',
    description: '24/7 intelligent customer engagement that converts visitors into qualified leads.',
    icon: '🤖',
    kpi: 'conversion-rate',
    kpiValue: 45,
    href: '/products/ai-receptionist'
  },
  {
    id: 'lead-scorer',
    name: 'Lead Scorer',
    description: 'Automatically prioritize leads based on engagement and behavior patterns.',
    icon: '🎯',
    kpi: 'response-time',
    kpiValue: 80,
    href: '/products/lead-scorer'
  },
  {
    id: 'adaptive-follow-up',
    name: 'Adaptive Follow-up',
    description: 'Personalized follow-up sequences that adapt to customer behavior.',
    icon: '🔄',
    kpi: 'engagement-rate',
    kpiValue: 65,
    href: '/products/adaptive-follow-up'
  }
]

const iconMap = {
  '🤖': Bot,
  '🎯': Target,
  '🔄': Zap,
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              AI-Powered Products
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Micro AI SaaS solutions that convert visitors, speed replies, and reveal what works for real business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => {
              const IconComponent = iconMap[product.icon as keyof typeof iconMap] || Bot
              return (
                <Link
                  key={product.id}
                  href={product.href}
                  className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-blue-300"
                >
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{product.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      +{product.kpiValue}% {product.kpi.replace('-', ' ')}
                    </div>
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
