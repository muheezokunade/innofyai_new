import { CheckCircle, Palette, Target, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Palette,
    title: 'Brand Strategy',
    description: 'We develop comprehensive brand strategies that position your business for growth and market leadership.'
  },
  {
    icon: Target,
    title: 'Targeted Campaigns',
    description: 'Create and execute marketing campaigns that reach your ideal customers with precision and impact.'
  },
  {
    icon: TrendingUp,
    title: 'Growth Marketing',
    description: 'Implement data-driven marketing strategies that scale your business and maximize ROI.'
  }
]

const services = [
  'Brand positioning and messaging',
  'Marketing strategy development',
  'Content marketing and creation',
  'Social media marketing',
  'Email marketing automation',
  'SEO and digital marketing',
  'Paid advertising campaigns',
  'Marketing analytics and reporting'
]

const process = [
  {
    step: 1,
    title: 'Brand Discovery',
    description: 'We analyze your market, competitors, and unique value proposition to develop your brand strategy.'
  },
  {
    step: 2,
    title: 'Strategy Development',
    description: 'Create a comprehensive marketing strategy tailored to your goals and target audience.'
  },
  {
    step: 3,
    title: 'Campaign Execution',
    description: 'Implement and manage marketing campaigns across multiple channels for maximum impact.'
  },
  {
    step: 4,
    title: 'Optimization',
    description: 'Continuously monitor, analyze, and optimize campaigns for better performance and ROI.'
  }
]

export default function BrandMarketingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Brand Marketing
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.05]">
                Brand Marketing
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed" style={{ maxWidth: '62ch' }}>
                Build a powerful brand that resonates with your audience and drives business growth. 
                We create strategic marketing campaigns that connect, convert, and scale.
              </p>
              
              <div className="flex items-center mb-8">
                <div className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-lg font-bold mr-4">
                  +150% Growth
                </div>
                <span className="text-gray-600 font-medium">average brand awareness increase</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Get Started
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg text-gray-700 bg-white border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Book a Demo
                </a>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-md"></div>
                <div className="relative border border-white/60 dark:border-white/10 rounded-2xl overflow-hidden shadow-xl">
                  <div className="bg-white border border-gray-200 rounded-2xl p-12 shadow-xl">
                    <div className="w-24 h-24 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto">
                      <Palette className="w-12 h-12 text-blue-600" strokeWidth={1.5} />
                    </div>
                    <div className="text-center mt-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Brand Marketing</h3>
                      <p className="text-gray-600 text-sm">Strategic brand positioning and growth</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Data-driven marketing strategies that build brands and drive growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive marketing services to build your brand and grow your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology to build your brand and drive marketing success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
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

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Build Your Brand?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's create a marketing strategy that builds your brand and drives sustainable growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg text-blue-600 bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              Get Started
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg text-white border-2 border-blue-200 hover:bg-blue-700 hover:border-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
