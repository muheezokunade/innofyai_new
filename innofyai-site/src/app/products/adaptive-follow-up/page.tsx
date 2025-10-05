import { ProductPageTemplate } from '@/components/product-page-template'

const product = {
  id: 'adaptive-follow-up',
  name: 'Adaptive Follow-up',
  summary: 'Personalized follow-up sequences',
  description: 'Stop sending generic follow-up emails. Our AI creates personalized follow-up sequences that adapt to each prospect\'s behavior, interests, and engagement level.',
  kpi: 'engagement-rate',
  kpiValue: 65,
  category: 'Email Automation',
  icon: '🔄'
}

const features = [
  {
    title: 'Behavior-Based Adaptation',
    description: 'Automatically adjusts messaging, timing, and content based on how prospects engage with your communications.'
  },
  {
    title: 'Personalized Content',
    description: 'Creates unique, relevant content for each prospect based on their interests, role, and company information.'
  },
  {
    title: 'Optimal Timing',
    description: 'Sends messages at the perfect time for each prospect based on their activity patterns and timezone.'
  },
  {
    title: 'Multi-Channel Sequences',
    description: 'Coordinates follow-up across email, SMS, LinkedIn, and other channels for maximum impact.'
  },
  {
    title: 'A/B Testing Built-in',
    description: 'Continuously tests different approaches and automatically optimizes for the best performing strategies.'
  },
  {
    title: 'Sales Team Integration',
    description: 'Seamlessly hands off engaged prospects to your sales team with full context and conversation history.'
  }
]

const howItWorks = [
  {
    step: 1,
    title: 'Prospect Analysis',
    description: 'Analyzes prospect data, behavior patterns, and engagement history to understand their preferences and interests.'
  },
  {
    step: 2,
    title: 'Sequence Generation',
    description: 'Creates personalized follow-up sequences with custom messaging, timing, and content for each prospect.'
  },
  {
    step: 3,
    title: 'Continuous Optimization',
    description: 'Monitors engagement and automatically adjusts the sequence to maximize response rates and conversions.'
  }
]

const testimonial = {
  quote: "Adaptive Follow-up has revolutionized our email marketing. We've seen a 65% increase in engagement and our sales team is closing more deals than ever.",
  author: "Emily Rodriguez",
  role: "Marketing Director",
  company: "InnovateLabs"
}

const metrics = [
  {
    icon: '📧',
    value: '65%',
    label: 'Engagement Rate',
    description: 'Increase in email open and response rates'
  },
  {
    icon: '🎯',
    value: '40%',
    label: 'Personalization',
    description: 'Improvement in message relevance and personalization'
  },
  {
    icon: '⏰',
    value: '3x',
    label: 'Efficiency',
    description: 'Reduction in manual follow-up time for sales team'
  }
]

export default function AdaptiveFollowUpPage() {
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
