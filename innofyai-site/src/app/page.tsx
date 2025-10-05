import Link from 'next/link'
import { ArrowRight, Bot, Target, Zap, CheckCircle, Star, MessageSquare, FileText, Search, BarChart3, Calendar, CreditCard, Globe, Database, Settings, BookOpen, ChevronDown } from 'lucide-react'
import { AIReceptionistDemo } from '@/components/ai-receptionist-demo'

const products = [
  {
    id: 'ai-receptionist',
    name: 'AI Receptionist 2.0',
    description: 'Turn visitors into booked appointments on web + WhatsApp.',
    icon: Bot,
    kpi: '+38% bookings',
    href: '/products/ai-receptionist',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'lead-scorer',
    name: 'Predictive Lead Scorer',
    description: 'Focus on leads most likely to book.',
    icon: Target,
    kpi: 'Top-decile win rate ↑',
    href: '/products/lead-scorer',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'adaptive-follow-up',
    name: 'Adaptive Follow-up',
    description: 'Email/WhatsApp/SMS timing that actually gets replies.',
    icon: Zap,
    kpi: '−42% first-reply time',
    href: '/products/adaptive-follow-up',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'whatsapp-commerce',
    name: 'WhatsApp Commerce Brain',
    description: 'Menu → cart → reorder nudges in chat.',
    icon: MessageSquare,
    kpi: 'Higher order conversion',
    href: '/products/whatsapp-commerce',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'review-miner',
    name: 'Review Miner + Smart Reply',
    description: 'Grow ratings, deflect public complaints.',
    icon: Star,
    kpi: '+1.1★ avg',
    href: '/products/review-miner',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'document-ai',
    name: 'Document AI',
    description: 'Parse proposals/contracts and auto-fill your CRM/Notion.',
    icon: FileText,
    kpi: 'Minutes, not hours',
    href: '/products/document-ai',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'local-seo',
    name: 'Local SEO Page Generator',
    description: 'Rank for "service + city" at scale.',
    icon: Search,
    kpi: 'Impressions → clicks',
    href: '/products/local-seo-generator',
    color: 'from-teal-500 to-cyan-500'
  },
  {
    id: 'owners-copilot',
    name: 'Owner&apos;s Copilot',
    description: '&quot;What happened, why, what to do&quot; across GA4 + CRM.',
    icon: BarChart3,
    kpi: 'Actions per week ↑',
    href: '/products/owners-copilot',
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 'ticket-triage',
    name: 'Smart Ticket Triage',
    description: 'Route by topic/urgency and draft first replies.',
    icon: Settings,
    kpi: 'FCR ↑',
    href: '/products/ticket-triage',
    color: 'from-slate-500 to-gray-500'
  },
  {
    id: 'attribution-copilot',
    name: 'Attribution & Budget Copilot',
    description: 'See what truly drove bookings; adjust spend.',
    icon: CreditCard,
    kpi: 'Cost per booking ↓',
    href: '/products/attribution-copilot',
    color: 'from-emerald-500 to-green-500'
  }
]

const services = [
  {
    title: 'Website & Digital Presence',
    description: 'Conversion-ready, fast, and SEO-smart.',
    bullets: ['Landing pages that load fast', 'Clear offers', 'Analytics wired'],
    icon: Globe
  },
  {
    title: 'Brand & Marketing Strategy',
    description: 'Positioning that sells, content that compounds.',
    bullets: ['ICP & messaging', 'Content plan', 'Funnel & offers'],
    icon: Target
  },
  {
    title: 'Automation & CX',
    description: 'WhatsApp flows, CRM, and n8n workflows.',
    bullets: ['Lead routing', 'Nurtures', 'Alerts & SLAs'],
    icon: Settings
  },
  {
    title: 'Social Media Management',
    description: 'Consistent presence with real outcomes.',
    bullets: ['Calendar', 'Creation', 'Reporting'],
    icon: MessageSquare
  },
  {
    title: 'CRO & Local SEO',
    description: 'Turn traffic into leads, rank for "service + city."',
    bullets: ['Experiments', 'Heatmaps', 'Schema pages'],
    icon: Search
  },
  {
    title: 'CRM Implementation',
    description: 'HubSpot/Pipedrive fast, clean, and usable.',
    bullets: ['Pipelines', 'Dashboards', 'Playbooks'],
    icon: Database
  }
]

const integrations = [
  { name: 'HubSpot', icon: Database },
  { name: 'Pipedrive', icon: Database },
  { name: 'GA4', icon: BarChart3 },
  { name: 'WhatsApp', icon: MessageSquare },
  { name: 'Twilio', icon: Phone },
  { name: 'Calendly', icon: Calendar },
  { name: 'Stripe', icon: CreditCard },
  { name: 'Notion', icon: FileText },
  { name: 'Slack', icon: MessageSquare }
]

const resources = [
  {
    title: 'How we cut reply time by 42% with adaptive follow-ups',
    category: 'Case Study',
    readTime: '5 min read'
  },
  {
    title: 'A practical guide to WhatsApp ordering for restaurants',
    category: 'Guide',
    readTime: '8 min read'
  },
  {
    title: 'Attribution that sales actually trusts',
    category: 'Strategy',
    readTime: '6 min read'
  }
]

const faqs = [
  {
    question: 'Do I need a developer?',
    answer: 'No—most tools connect with your calendar, CRM, or WhatsApp in minutes.'
  },
  {
    question: 'Can I start free?',
    answer: 'Yes, the Free plan lets you try the tools with usage caps.'
  },
  {
    question: 'How do you handle privacy?',
    answer: 'Least-data approach, encryption at rest/in transit, optional redaction, and a clear DPA.'
  },
  {
    question: 'Will you help us implement?',
    answer: 'Absolutely. Our services team can launch end-to-end in days, not months.'
  },
  {
    question: 'What if it doesn\'t work for us?',
    answer: 'We publish 14-day uplift reports. If a tool isn\'t moving the metric, we adjust or stop.'
  }
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
                InnofyAI gives owners simple tools that convert visitors, speed replies, and show what actually works—without hiring a tech team.
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
              
              <p className="text-sm text-gray-500">No credit card needed · Setup in minutes</p>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-2xl">
                <div className="text-center mb-4">
                  <p className="text-sm text-gray-600">AI Receptionist · Live booking demo</p>
                </div>
                <AIReceptionistDemo />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Logos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Trusted by teams and owners</p>
          </div>
          <div className="flex items-center justify-center space-x-12 opacity-60">
            <div className="text-2xl font-bold text-gray-400">Company A</div>
            <div className="text-2xl font-bold text-gray-400">Company B</div>
            <div className="text-2xl font-bold text-gray-400">Company C</div>
            <div className="text-2xl font-bold text-gray-400">Company D</div>
            <div className="text-2xl font-bold text-gray-400">Company E</div>
          </div>
        </div>
      </section>

      {/* Products Rail */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              10 micro tools that work while you sleep
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each tool solves one job end-to-end. Plug in, prove the lift, then scale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                href={product.href}
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <product.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                    {product.kpi}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Tools
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Proof over promises
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Before → After funnel</h3>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Site visitor</span>
                    <div className="w-32 h-3 bg-gray-200 rounded-full">
                      <div className="w-24 h-3 bg-gray-400 rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-500">100%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Lead</span>
                    <div className="w-32 h-3 bg-gray-200 rounded-full">
                      <div className="w-16 h-3 bg-blue-400 rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-500">25%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Booked call</span>
                    <div className="w-32 h-3 bg-gray-200 rounded-full">
                      <div className="w-20 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-500">38%</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">Median of recent deployments; sample ≥ 20 accounts; 14-day window.</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">KPI tiles</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">+38%</div>
                  <div className="text-sm text-gray-600">average lift in bookings</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">−42%</div>
                  <div className="text-sm text-gray-600">time-to-first-reply</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">+1.1★</div>
                  <div className="text-sm text-gray-600">rating improvement</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="text-3xl font-bold text-purple-600 mb-2">14-day</div>
                  <div className="text-sm text-gray-600">uplift reports, always</div>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/case-studies"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  See case studies →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Expert services to amplify your tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When you need hands-on help, our team ships the fastest path to impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {bullet}
          </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Book a Discovery Call
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Training Teaser */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Make AI practical for your team
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Role-based workshops for owners, marketing, support, and analysts—using your data and our playbooks.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Live, hands-on sessions</h3>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Templates you'll actually use</h3>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Certificates and badges</h3>
            </div>
          </div>
          
          <Link
            href="/training"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Schedule a Training
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Integrations Strip */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Works with your stack</p>
          </div>
          <div className="flex items-center justify-center space-x-8 opacity-60">
            {integrations.map((integration, index) => (
              <div key={index} className="flex items-center space-x-2">
                <integration.icon className="w-6 h-6 text-gray-400" />
                <span className="text-gray-600 font-medium">{integration.name}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">Use our library of ready-to-run n8n recipes.</p>
        </div>
      </section>

      {/* Templates Gallery Teaser */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Start fast with proven templates
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Receptionist scripts, follow-up cadences, review replies, SEO page blueprints, and more.
          </p>
          
          <Link
            href="/templates"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Browse Templates
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <blockquote className="text-2xl font-medium text-gray-900 italic mb-6">
              &quot;InnofyAI recovered leads we were losing every day. Bookings up in weeks, not months.&quot;
            </blockquote>
            <p className="text-gray-600">— Founder, Local Services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 italic mb-4">&quot;Setup took minutes. The 2-week report made the ROI obvious.&quot;</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 italic mb-4">&quot;Support automation cut our first reply to under 5 minutes.&quot;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources & Newsletter */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Playbooks, case studies, and updates
              </h2>
              <div className="space-y-6">
                {resources.map((resource, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full">{resource.category}</span>
                          <span>{resource.readTime}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get one practical playbook each week</h3>
              <p className="text-gray-600 mb-6">No fluff.</p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Questions, answered
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl">
                <button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors">
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to try practical AI?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Start free and see value this week—or book a strategy call and we&apos;ll map the quickest win.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/start"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Start Free
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
