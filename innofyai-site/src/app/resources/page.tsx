import { FileText, Video, Download, Book } from 'lucide-react'

const resources = [
  {
    icon: FileText,
    title: 'AI Implementation Guide',
    description: 'Step-by-step guide to implementing AI in your business processes.',
    type: 'PDF Guide',
    downloadCount: '2.3k downloads'
  },
  {
    icon: Video,
    title: 'Customer Success Stories',
    description: 'Watch how businesses transformed their operations with our AI solutions.',
    type: 'Video Series',
    downloadCount: '1.8k views'
  },
  {
    icon: Download,
    title: 'AI Templates & Checklists',
    description: 'Ready-to-use templates for common AI automation tasks.',
    type: 'Templates',
    downloadCount: '3.1k downloads'
  },
  {
    icon: Book,
    title: 'AI Best Practices Handbook',
    description: 'Comprehensive guide to AI implementation best practices and pitfalls.',
    type: 'E-book',
    downloadCount: '1.5k downloads'
  }
]

const blogPosts = [
  {
    title: 'How to Choose the Right AI Tool for Your Business',
    excerpt: 'A comprehensive guide to evaluating and selecting AI solutions that fit your specific needs.',
    date: 'Dec 15, 2024',
    readTime: '5 min read'
  },
  {
    title: '5 AI Automation Mistakes to Avoid',
    excerpt: 'Common pitfalls in AI implementation and how to steer clear of them.',
    date: 'Dec 10, 2024',
    readTime: '4 min read'
  },
  {
    title: 'The Future of AI in Customer Service',
    excerpt: 'Exploring emerging trends and technologies in AI-powered customer support.',
    date: 'Dec 5, 2024',
    readTime: '6 min read'
  }
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-50 to-pink-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Resources & Learning
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Everything you need to succeed with AI. From guides and templates to 
              success stories and best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Free Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download our free guides, templates, and tools to accelerate your AI journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <resource.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div className="space-y-2">
                  <div className="text-sm text-purple-600 font-medium">{resource.type}</div>
                  <div className="text-sm text-gray-500">{resource.downloadCount}</div>
                </div>
                <button className="w-full mt-4 px-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, tips, and strategies in AI automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-2xl p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <button className="mt-4 text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  Read more →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Get the latest AI insights, tips, and resources delivered to your inbox weekly.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
