import Link from 'next/link'
import { ArrowRight, Target, Zap, Shield, Users, CheckCircle, Linkedin } from 'lucide-react'

const missionPrinciples = [
  {
    icon: Target,
    title: 'Outcome first',
    description: 'Bookings, replies, revenue.'
  },
  {
    icon: Zap,
    title: 'Simple beats clever',
    description: 'Fewer clicks, faster wins.'
  },
  {
    icon: CheckCircle,
    title: 'Proof over promises',
    description: 'Publish results, not adjectives.'
  },
  {
    icon: Shield,
    title: 'Privacy by default',
    description: 'Least data, clear controls.'
  }
]

const timeline = [
  {
    year: '2019–2022',
    title: 'Foundation',
    description: 'Delivered websites and automations for small businesses across multiple regions; learned what actually moves KPIs.',
    metric: '120+ projects'
  },
  {
    year: '2023',
    title: 'First micro tool',
    description: 'An AI receptionist that booked real appointments from site and WhatsApp—no human needed for the first response.',
    metric: '+27% bookings'
  },
  {
    year: '2024',
    title: 'Suite emerges',
    description: 'Ten focused tools for conversion, engagement, smart ops, and growth. Corporate training launches to skill up teams.',
    metric: '10 micro tools'
  },
  {
    year: 'Today',
    title: 'Platform + services',
    description: 'A Micro AI SaaS suite with expert services and workshops so owners get value fast—and keep compounding it.',
    metric: 'Multi-region'
  }
]

const pillars = [
  {
    title: 'Micro AI SaaS',
    description: 'Ten plug-and-play tools that convert visitors, speed replies, and reveal what works.',
    link: '/products',
    linkText: 'Explore the suite'
  },
  {
    title: 'Expert Services',
    description: 'Website, brand/marketing, automation, social—delivered by the team that builds the tools.',
    link: '/services',
    linkText: 'See services'
  },
  {
    title: 'Corporate Training',
    description: 'Workshops and enablement programs that make AI practical across sales, support, and ops.',
    link: '/training',
    linkText: 'View training'
  }
]

const proofMetrics = [
  {
    value: '+38%',
    label: 'average lift in booked appointments',
    footnote: 'After deploying AI Receptionist'
  },
  {
    value: '−42%',
    label: 'time-to-first-reply',
    footnote: 'With Follow-up Orchestrator across channels'
  },
  {
    value: '+1.1★',
    label: 'average rating improvement',
    footnote: 'With Review Miner + Smart Reply'
  },
  {
    value: '14-day',
    label: 'uplift reports and before/after funnels',
    footnote: 'On every engagement'
  }
]

const teamMembers = [
  {
    name: 'Product & Engineering',
    role: 'Ships practical AI and keeps it fast',
    image: '/team/engineering.jpg',
    linkedin: 'https://linkedin.com/company/innofyai'
  },
  {
    name: 'Growth & Services',
    role: 'Positions offers, fixes funnels, proves uplift',
    image: '/team/growth.jpg',
    linkedin: 'https://linkedin.com/company/innofyai'
  },
  {
    name: 'Enablement & Training',
    role: 'Turns playbooks into team muscle',
    image: '/team/training.jpg',
    linkedin: 'https://linkedin.com/company/innofyai'
  }
]

const processSteps = [
  {
    step: '1',
    title: 'Find the quick win',
    description: '15-minute audit to pick the highest-leverage tool.'
  },
  {
    step: '2',
    title: 'Plug it in',
    description: 'Sandbox + template; connect your calendar, CRM, or WhatsApp.'
  },
  {
    step: '3',
    title: 'Prove it',
    description: 'Two-week KPI check with a simple before/after chart.'
  },
  {
    step: '4',
    title: 'Scale',
    description: 'Add services, templates, and training where the data says it\'s worth it.'
  }
]

const securityFeatures = [
  'Encryption in transit and at rest',
  'PII redaction for logs and prompts',
  'Clear retention windows and data export',
  'Data Processing Addendum available',
  'Live status and incident history'
]

const careerValues = [
  'Bias for shipping',
  'Kindness as a default',
  'Measure what matters'
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              We build micro AI tools that make small businesses unstoppable.
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              InnofyAI turns visitors into bookings, speeds up replies, and shows what actually works—without hiring a tech team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/start"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start free
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Book a call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Principles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Put production-ready AI in every owner&apos;s hands—simple, affordable, and outcome-driven.
            </p>
          </div>
          
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">How we build</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {missionPrinciples.map((principle, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <principle.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{principle.title}</h4>
                  <p className="text-gray-600 text-sm">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">From services → Micro SaaS</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We started as a hands-on team building websites, automations, and growth systems for SMEs. 
              The patterns were obvious: owners needed fast replies, clean attribution, and less manual follow-up. 
              We turned those patterns into tools.
            </p>
          </div>
          
          <div className="space-y-8">
            {timeline.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-20 text-right">
                  <div className="text-sm font-semibold text-blue-600">{milestone.year}</div>
                  <div className="text-xs text-gray-500 mt-1">{milestone.metric}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we offer now */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">What we offer now</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{pillar.title}</h3>
                <p className="text-gray-600 mb-6">{pillar.description}</p>
                <Link
                  href={pillar.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  {pillar.linkText}
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof of impact */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Proof of impact</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {proofMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{metric.value}</div>
                <div className="text-gray-600 mb-1">{metric.label}</div>
                <div className="text-xs text-gray-500">{metric.footnote}</div>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <blockquote className="text-lg text-gray-700 italic mb-4">
              &quot;InnofyAI recovered leads we were losing every day. Bookings up in weeks, not months.&quot;
            </blockquote>
            <div className="text-sm text-gray-500">— Customer testimonial</div>
          </div>
        </div>
      </section>

      {/* Leadership & team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Leadership & team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re operators and builders. We keep the stack lean, the metrics honest, and the roadmap public.
              Small team, senior craft, shipping weekly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm"
                >
                  <Linkedin className="w-4 h-4 mr-1" />
                  Connect
                </a>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Connect on LinkedIn · Read our roadmap · See the changelog
            </p>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">How we work</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & privacy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Security & privacy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We keep data minimal, encrypted, and under your control.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <ul className="space-y-3">
              {securityFeatures.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/security"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Read our Security page
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
              <Link
                href="/status"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Check status
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-sm text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Careers</h2>
            <p className="text-xl text-gray-600 mb-8">
              We hire for craft, kindness, and bias for shipping.
              If you love making complex things feel simple—and you enjoy proof more than hype—let&apos;s talk.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {careerValues.map((value, index) => (
                <span key={index} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  {value}
                </span>
              ))}
            </div>
            
            <Link
              href="/careers"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              See open roles
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to try practical AI?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Start free and see value in days. Or book a strategy call and we&apos;ll map the quickest win for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/start"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Start free
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Book a call
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
