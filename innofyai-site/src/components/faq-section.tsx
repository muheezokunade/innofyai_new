'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "How quickly can I see results?",
    answer: "Most businesses see improvements within the first 30 days. Lead capture typically increases within the first week, and booking conversions improve as the AI learns your customer patterns."
  },
  {
    question: "Do I need technical knowledge to use these tools?",
    answer: "Not at all. Our tools are designed for business owners, not developers. Setup takes minutes, and our team provides full onboarding and ongoing support to ensure your success."
  },
  {
    question: "Can these tools integrate with my existing systems?",
    answer: "Yes. Our AI tools work with popular CRMs, scheduling systems, payment processors, and communication platforms. We also offer custom integrations for enterprise clients."
  },
  {
    question: "What if the AI doesn't understand my industry?",
    answer: "Our AI is trained on industry-specific data and can be customized for your business. We work with you during setup to ensure the AI understands your services, pricing, and customer communication style."
  },
  {
    question: "Is there a long-term contract required?",
    answer: "No. We offer month-to-month plans because we're confident in our results. You can upgrade, downgrade, or cancel anytime. Most clients expand their usage as they see the ROI."
  }
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about getting started with InnofyAI.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5" id={`faq-answer-${index}`} aria-labelledby={`faq-question-${index}`}>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
