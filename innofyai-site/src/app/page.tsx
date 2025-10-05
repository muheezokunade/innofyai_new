import Link from 'next/link'
import { ArrowRight, CheckCircle, Star, Bot, Target, Zap, Sparkles, TrendingUp, Users, Clock } from 'lucide-react'
import { AIReceptionistDemo } from '@/components/ai-receptionist-demo'
import { LeadScorerDemo } from '@/components/lead-scorer-demo'

const products = [
  {
    id: 'ai-receptionist',
    name: 'AI Receptionist',
    description: '24/7 intelligent customer engagement that converts visitors into qualified leads.',
    icon: Bot,
    kpi: 'conversion-rate',
    kpiValue: 45,
    href: '/products/ai-receptionist',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'lead-scorer',
    name: 'Lead Scorer',
    description: 'Automatically prioritize leads based on engagement and behavior patterns.',
    icon: Target,
    kpi: 'response-time',
    kpiValue: 80,
    href: '/products/lead-scorer',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'adaptive-follow-up',
    name: 'Adaptive Follow-up',
    description: 'Personalized follow-up sequences that adapt to customer behavior.',
    icon: Zap,
    kpi: 'engagement-rate',
    kpiValue: 65,
    href: '/products/adaptive-follow-up',
    color: 'from-green-500 to-emerald-500'
  }
]

const features = [
  {
    icon: Sparkles,
    title: 'AI-Powered Intelligence',
    description: 'Advanced machine learning algorithms that understand context and deliver personalized experiences.'
  },
  {
    icon: TrendingUp,
    title: 'Real-Time Analytics',
    description: 'Comprehensive insights and performance metrics to optimize your customer engagement strategy.'
  },
  {
    icon: Users,
    title: 'Seamless Integration',
    description: 'Works with your existing CRM, email tools, and business systems without disruption.'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Never miss a lead again with round-the-clock customer engagement and support.'
  }
]

const stats = [
  { label: 'Businesses Helped', value: '500+', icon: Users },
  { label: 'Conversations Automated', value: '1M+', icon: Bot },
  { label: 'Conversion Improvement', value: '45%', icon: TrendingUp }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                Micro AI SaaS for
                <span className="block text-blue-600">
                  real business growth
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Tools and services that convert visitors, speed replies, and reveal what works. 
                Turn your business into a lead-generating machine with AI that never sleeps.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/start"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Start Free
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Book a Call
                </Link>
              </div>
              
              <div className="pt-4">
                <Link href="/security" className="text-sm text-gray-500 underline hover:text-gray-700">
                  Security & Privacy
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-2xl">
                <AIReceptionistDemo />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              AI Products That Work
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Powerful, focused AI tools that solve real business problems without the complexity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                href={product.href}
                className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{product.name}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      +{product.kpiValue}% {product.kpi.replace('-', ' ')}
                    </div>
                    <span className="text-blue-600 font-medium group-hover:text-blue-700 flex items-center">
                      Learn more
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Why Choose InnofyAI?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Built for modern businesses that need results, not complexity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              See It In Action
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Watch our AI tools work in real-time to engage visitors and score leads.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">AI Receptionist Demo</h3>
              <p className="text-slate-600 mb-6">Watch how our AI engages visitors and converts them into qualified leads.</p>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <AIReceptionistDemo />
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Lead Scorer Demo</h3>
              <p className="text-slate-600 mb-6">See how we automatically score and prioritize leads in real-time.</p>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <LeadScorerDemo />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join 500+ businesses already using InnofyAI to accelerate their growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/start"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Book a Demo
            </Link>
          </div>
          <p className="text-gray-500 text-sm mt-6">No credit card required. Cancel anytime.</p>
        </div>
      </section>
    </div>
  )
}
