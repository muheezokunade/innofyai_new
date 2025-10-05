import { CheckCircle, Code, Smartphone, Zap } from 'lucide-react'

const features = [
  {
    icon: Code,
    title: 'Custom Development',
    description: 'We build custom web solutions tailored to your specific business needs and requirements.'
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Mobile-first, responsive designs that work perfectly across all devices and screen sizes.'
  },
  {
    icon: Zap,
    title: 'Performance Optimized',
    description: 'Lightning-fast websites built for speed, SEO, and conversion optimization.'
  }
]

const services = [
  'Custom website development',
  'E-commerce solutions',
  'Web application development',
  'Mobile-responsive design',
  'SEO optimization',
  'Performance optimization',
  'Security implementation',
  'Maintenance and support'
]

const technologies = [
  'React & Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'PostgreSQL',
  'AWS & Vercel',
  'Stripe Integration',
  'Analytics & Tracking'
]

const process = [
  {
    step: 1,
    title: 'Discovery & Planning',
    description: 'We understand your business goals, target audience, and technical requirements.'
  },
  {
    step: 2,
    title: 'Design & Prototyping',
    description: 'Create wireframes, mockups, and prototypes to visualize your solution.'
  },
  {
    step: 3,
    title: 'Development',
    description: 'Build your solution using modern technologies and best practices.'
  },
  {
    step: 4,
    title: 'Testing & Launch',
    description: 'Thorough testing, optimization, and smooth deployment to production.'
  }
]

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Web Development
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.05]">
                Web Development
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed" style={{ maxWidth: '62ch' }}>
                Build high-performance websites and web applications that drive business growth. 
                We create modern, scalable solutions using cutting-edge technologies.
              </p>
              
              <div className="flex items-center mb-8">
                <div className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-lg font-bold mr-4">
                  +200% Speed
                </div>
                <span className="text-gray-600 font-medium">average page load improvement</span>
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
                      <Code className="w-12 h-12 text-blue-600" strokeWidth={1.5} />
                    </div>
                    <div className="text-center mt-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Web Development</h3>
                      <p className="text-gray-600 text-sm">Custom web solutions for growth</p>
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
              What We Build
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern web solutions that perform, convert, and scale with your business.
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
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive web development services to bring your vision to life.
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

      {/* Technologies */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern, proven technologies for reliable, scalable solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <span className="text-gray-900 font-medium">{tech}</span>
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
              A proven development process that ensures quality and success.
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
            Ready to Build Your Website?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's create a web solution that drives your business forward with modern technology and design.
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
