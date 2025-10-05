import { Users, Target, Zap } from 'lucide-react'

const stats = [
  { label: 'Businesses Helped', value: '500+' },
  { label: 'Conversations Automated', value: '1M+' },
  { label: 'Conversion Rate Improvement', value: '45%' }
]

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We focus on measurable outcomes that directly impact your bottom line.'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We leverage cutting-edge AI technology to solve real business problems.'
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We work closely with our clients to understand their unique challenges and goals.'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About InnofyAI
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to democratize AI for businesses of all sizes, 
              making powerful automation accessible and affordable.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Our Story */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Founded in 2024, InnofyAI was born from a simple observation: most businesses 
                struggle with customer engagement and lead conversion, but AI solutions were either 
                too complex or too expensive for small to medium businesses.
              </p>
              <p className="mb-6">
                We set out to create "micro AI SaaS" solutions - powerful, focused tools that 
                solve specific business problems without the complexity or cost of enterprise AI platforms.
              </p>
              <p>
                Today, we help hundreds of businesses automate their customer interactions, 
                score and prioritize leads, and follow up with prospects more effectively - 
                all while maintaining the personal touch that builds lasting customer relationships.
              </p>
            </div>
          </div>
          
          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
