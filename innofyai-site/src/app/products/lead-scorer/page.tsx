import { ProductPageTemplate } from '@/components/product-page-template'

const product = {
  id: 'lead-scorer',
  name: 'Lead Scorer',
  summary: 'Intelligent lead prioritization',
  description: 'Never miss a hot lead again. Our AI analyzes visitor behavior, engagement patterns, and demographic data to automatically score and prioritize leads in real-time.',
  kpi: 'response-time',
  kpiValue: 80,
  category: 'Lead Management',
  icon: '🎯'
}

const features = [
  {
    title: 'Real-Time Scoring',
    description: 'Continuously analyzes visitor behavior and engagement to provide up-to-the-minute lead scores.'
  },
  {
    title: 'Behavioral Analysis',
    description: 'Tracks page views, time on site, content engagement, and interaction patterns to identify buying signals.'
  },
  {
    title: 'Demographic Intelligence',
    description: 'Analyzes company size, industry, location, and role to determine lead quality and fit.'
  },
  {
    title: 'Predictive Insights',
    description: 'Uses machine learning to predict which leads are most likely to convert based on historical data.'
  },
  {
    title: 'Custom Scoring Rules',
    description: 'Configure your own scoring criteria and weights to match your specific sales process and ideal customer profile.'
  },
  {
    title: 'Sales Team Alerts',
    description: 'Instant notifications when high-scoring leads are identified, ensuring immediate follow-up.'
  }
]

const howItWorks = [
  {
    step: 1,
    title: 'Data Collection',
    description: 'Automatically collects visitor behavior data, demographic information, and engagement patterns across all touchpoints.'
  },
  {
    step: 2,
    title: 'AI Analysis',
    description: 'Our machine learning algorithms analyze the data to identify patterns and predict conversion likelihood.'
  },
  {
    step: 3,
    title: 'Priority Delivery',
    description: 'High-scoring leads are immediately flagged and delivered to your sales team with detailed scoring rationale.'
  }
]

const testimonial = {
  quote: "Lead Scorer has transformed our sales process. We now respond to hot leads within minutes instead of hours, and our conversion rate has increased by 80%.",
  author: "Michael Chen",
  role: "VP of Sales",
  company: "GrowthCorp"
}

const metrics = [
  {
    icon: '⚡',
    value: '80%',
    label: 'Faster Response',
    description: 'Reduction in average response time to hot leads'
  },
  {
    icon: '🎯',
    value: '92%',
    label: 'Accuracy',
    description: 'Lead scoring accuracy rate'
  },
  {
    icon: '📊',
    value: '2.5x',
    label: 'Conversion',
    description: 'Increase in lead-to-customer conversion'
  }
]

export default function LeadScorerPage() {
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
