import { ProductPageTemplate } from '@/components/product-page-template'

const product = {
  id: 'ai-receptionist',
  name: 'AI Receptionist',
  summary: '24/7 intelligent customer engagement',
  description: 'Transform your website visitors into qualified leads with our AI receptionist. It engages visitors instantly, answers questions, qualifies leads, and books appointments - all while you sleep.',
  kpi: 'conversion-rate',
  kpiValue: 45,
  category: 'Customer Engagement',
  icon: '🤖'
}

const features = [
  {
    title: '24/7 Availability',
    description: 'Never miss a lead again. Our AI receptionist works around the clock to engage visitors and capture every opportunity.'
  },
  {
    title: 'Intelligent Qualification',
    description: 'Automatically qualifies leads based on behavior, budget, timeline, and decision-making authority.'
  },
  {
    title: 'Natural Conversations',
    description: 'Advanced NLP ensures conversations feel natural and human-like, building trust with your prospects.'
  },
  {
    title: 'Seamless Handoff',
    description: 'Smoothly transfers qualified leads to your sales team with complete context and conversation history.'
  },
  {
    title: 'Multi-Channel Support',
    description: 'Works across website chat, WhatsApp, email, and social media platforms.'
  },
  {
    title: 'Custom Training',
    description: 'Train the AI on your specific products, services, and company knowledge for accurate responses.'
  }
]

const howItWorks = [
  {
    step: 1,
    title: 'Install & Configure',
    description: 'Add our widget to your website and configure your AI receptionist with your business information and goals.'
  },
  {
    step: 2,
    title: 'AI Engages Visitors',
    description: 'When visitors arrive, the AI immediately greets them and starts qualifying based on their behavior and responses.'
  },
  {
    step: 3,
    title: 'Qualified Leads Delivered',
    description: 'Hot leads are instantly delivered to your sales team with full context and conversation history.'
  }
]

const testimonial = {
  quote: "Our AI receptionist has been a game-changer. We've seen a 45% increase in qualified leads and our sales team can focus on closing instead of qualifying.",
  author: "Sarah Johnson",
  role: "Sales Director",
  company: "TechStart Solutions"
}

const metrics = [
  {
    icon: '📈',
    value: '45%',
    label: 'Conversion Rate',
    description: 'Average increase in visitor-to-lead conversion'
  },
  {
    icon: '⏱️',
    value: '< 2s',
    label: 'Response Time',
    description: 'Instant engagement with every visitor'
  },
  {
    icon: '💰',
    value: '3.2x',
    label: 'ROI',
    description: 'Return on investment within first quarter'
  }
]

export default function AIReceptionistPage() {
  return (
    <ProductPageTemplate
      product={product}
      features={features}
      howItWorks={howItWorks}
      testimonial={testimonial}
      metrics={metrics}
    />
  )
}
