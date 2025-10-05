import Link from 'next/link'
import { CheckCircle, Star, Target, Zap, TrendingUp, Bot, ShoppingCart, FileText, MapPin, DollarSign, Ticket } from 'lucide-react'
import { AIReceptionistDemo } from './ai-receptionist-demo'
import { LeadScorerDemo } from './lead-scorer-demo'

const iconMap = {
  '🤖': Bot,
  '🎯': Target,
  '🔄': Zap,
  '🛒': ShoppingCart,
  '⭐': Star,
  '📄': FileText,
  '📍': MapPin,
  '📈': TrendingUp,
  '🎫': Ticket,
  '💰': DollarSign,
}

interface ProductPageTemplateProps {
  product: {
    id: string
    name: string
    summary: string
    description: string
    kpi: string
    kpiValue: number
    category: string
    icon: string
  }
  features: Array<{
    title: string
    description: string
  }>
  howItWorks: Array<{
    step: number
    title: string
    description: string
  }>
  testimonial: {
    quote: string
    author: string
    role: string
    company: string
  }
  metrics: Array<{
    icon: string
    value: string
    label: string
    description: string
  }>
}

export function ProductPageTemplate({ 
  product, 
  features, 
  howItWorks, 
  testimonial, 
  metrics 
}: ProductPageTemplateProps) {
  const IconComponent = iconMap[product.icon as keyof typeof iconMap] || Bot
  
  const getKpiDisplay = (kpi: string, value: number) => {
    if (kpi === 'rating improvement') {
      return `+${value} pts`
    }
    return `+${value}%`
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Copy */}
            <div className="order-2 lg:order-1 lg:pr-8">
              <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                {product.category}
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.05]">
                {product.name}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed" style={{ maxWidth: '62ch' }}>
                {product.description}
              </p>
              
              <div className="flex items-center mb-8">
                <div className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-lg font-bold mr-4">
                  {getKpiDisplay(product.kpi, product.kpiValue)}
                </div>
                <span className="text-gray-600 font-medium">{product.kpi.replace('-', ' ')} improvement</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/start"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg text-gray-700 bg-white border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Book a Demo
                </Link>
              </div>
            </div>
            
            {/* Right Column - Product Demo/Icon */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-md"></div>
                <div className="relative border border-white/60 dark:border-white/10 rounded-2xl overflow-hidden shadow-xl">
                  {product.id === 'ai-receptionist' ? (
                    <AIReceptionistDemo />
                  ) : product.id === 'lead-scorer' ? (
                    <LeadScorerDemo />
                  ) : (
                    <div className="bg-white border border-gray-200 rounded-2xl p-12 shadow-xl">
                      <div className="w-24 h-24 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto">
                        <IconComponent className="w-12 h-12 text-blue-600" strokeWidth={1.5} />
                      </div>
                      <div className="text-center mt-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                        <p className="text-gray-600 text-sm">{product.summary}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how {product.name} delivers measurable improvements for businesses like yours.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => {
              const MetricIcon = iconMap[metric.icon as keyof typeof iconMap] || Target
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <MetricIcon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                  <div className="text-lg font-semibold text-gray-700 mb-2">{metric.label}</div>
                  <div className="text-gray-600">{metric.description}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to get started with {product.name} and see results immediately.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to succeed with {product.name}.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900 text-lg">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join 500+ businesses already using {product.name} to accelerate their growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Link
              href="/start"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg text-blue-600 bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              Start Free Trial
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg text-white border-2 border-blue-200 hover:bg-blue-700 hover:border-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              Book a Demo
            </Link>
          </div>
          <p className="text-sm text-blue-200 mt-6">No credit card required. Cancel anytime.</p>
        </div>
      </section>
    </div>
  )
}
