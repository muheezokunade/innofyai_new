import { CheckCircle, Settings, Users, Zap } from 'lucide-react'

const features = [
  {
    icon: Settings,
    title: 'Complete Automation Setup',
    description: 'We design and implement end-to-end customer experience automation that works seamlessly across all touchpoints.'
  },
  {
    icon: Users,
    title: 'Customer Journey Mapping',
    description: 'We map your entire customer journey and identify automation opportunities that improve experience and efficiency.'
  },
  {
    icon: Zap,
    title: 'AI Integration',
    description: 'We integrate advanced AI capabilities into your existing systems to provide intelligent, personalized experiences.'
  }
]

const process = [
  {
    step: 1,
    title: 'Discovery & Analysis',
    description: 'We analyze your current customer experience, identify pain points, and map automation opportunities.'
  },
  {
    step: 2,
    title: 'Strategy & Design',
    description: 'We design a comprehensive automation strategy tailored to your business goals and customer needs.'
  },
  {
    step: 3,
    title: 'Implementation',
    description: 'We implement the automation solutions, integrate with your systems, and ensure smooth operation.'
  },
  {
    step: 4,
    title: 'Optimization',
    description: 'We continuously monitor and optimize the automation to maximize results and ROI.'
  }
]

const benefits = [
  'Reduce manual work by up to 80%',
  'Improve customer response time by 90%',
  'Increase customer satisfaction scores',
  'Scale operations without scaling headcount',
  '24/7 customer support availability',
  'Consistent, high-quality customer interactions'
]

export default function AutomationCXPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Customer Experience
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.05]">
                Automation CX
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed" style={{ maxWidth: '62ch' }}>
                Transform your customer experience with intelligent automation. We design and implement 
                end-to-end CX automation that reduces costs, improves satisfaction, and scales with your business.
              </p>
              
              <div className="flex items-center mb-8">
                <div className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-lg font-bold mr-4">
                  +80% Efficiency
                </div>
                <span className="text-gray-600 font-medium">operational efficiency improvement</span>
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
                      <Settings className="w-12 h-12 text-blue-600" strokeWidth={1.5} />
                    </div>
                    <div className="text-center mt-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Automation CX</h3>
                      <p className="text-gray-600 text-sm">Complete customer experience automation</p>
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
              What We Deliver
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive automation solutions that transform your customer experience.
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

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology to deliver exceptional automation results.
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

      {/* Benefits */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your customer experience with measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Automate Your CX?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s discuss how we can transform your customer experience with intelligent automation.
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
