import Link from 'next/link'
import { ArrowRight, Code, Megaphone, Cog } from 'lucide-react'

const services = [
  {
    id: 'web-development',
    name: 'Web Development',
    description: 'Modern, fast websites that convert visitors into customers.',
    icon: Code,
    color: 'blue'
  },
  {
    id: 'brand-marketing',
    name: 'Brand & Marketing',
    description: 'Strategic marketing that builds your brand and drives growth.',
    icon: Megaphone,
    color: 'purple'
  },
  {
    id: 'automation-cx',
    name: 'Automation & CX',
    description: 'Streamline operations and deliver exceptional customer experiences.',
    icon: Cog,
    color: 'green'
  }
]

export function ServicesTeaser() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Full-Service Growth Partner
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond AI tools, we offer complete business growth services to accelerate your success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-center text-blue-600 font-medium group-hover:text-blue-700">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold rounded-lg text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
