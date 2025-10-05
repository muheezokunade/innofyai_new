'use client'

import { useState, useEffect, useRef } from 'react'

const aiReceptionistConversation = [
  { type: 'visitor', message: "Hi, I'm interested in AI solutions for my business." },
  { type: 'ai', message: "Hello! I'm Alex, your AI assistant at InnofyAI. I'd love to help you find the right AI solution. What type of business challenges are you looking to solve?" },
  { type: 'visitor', message: "We're struggling with lead generation and customer engagement." },
  { type: 'ai', message: "Perfect! That's exactly what we specialize in. We have three powerful AI products: our AI Receptionist for 24/7 customer engagement, Lead Scorer for prioritizing prospects, and Adaptive Follow-up for personalized sequences." },
  { type: 'visitor', message: "How does the AI Receptionist work?" },
  { type: 'ai', message: "Our AI Receptionist engages visitors instantly, qualifies leads, and converts them into sales opportunities. It works 24/7, never sleeps, and can handle multiple conversations simultaneously. It's like having your best salesperson available around the clock." },
  { type: 'visitor', message: "What about pricing?" },
  { type: 'ai', message: "We offer flexible pricing starting with a free trial. Our plans are designed to scale with your business. Would you like to see a demo or schedule a call with our team to discuss your specific needs?" },
  { type: 'visitor', message: "Yes, I'd like to see a demo." },
  { type: 'ai', message: "Excellent! I can set up a personalized demo for you. What's your email address, and would you prefer a call this week or next week?" },
  { type: 'visitor', message: "john@company.com, this week works." },
  { type: 'ai', message: "Perfect! I've scheduled a demo for you. You'll receive a calendar invite shortly. In the meantime, I'll send you our product overview and case studies. Is there anything specific you'd like to see in the demo?" },
  { type: 'visitor', message: "Integration with our CRM would be important." },
  { type: 'ai', message: "Great point! We integrate seamlessly with popular CRMs like Salesforce, HubSpot, and Pipedrive. I'll make sure our integration specialist joins the demo to show you exactly how it works with your setup." },
  { type: 'visitor', message: "Thanks, this sounds promising." },
  { type: 'ai', message: "You're very welcome! I'm excited to show you how InnofyAI can transform your lead generation. You'll receive the demo details within the hour. Looking forward to helping your business grow! 🚀" }
]

export function AIReceptionistDemo() {
  const [visibleMessages, setVisibleMessages] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const rootRef = useRef<HTMLDivElement | null>(null)
  const listRef = useRef<HTMLDivElement | null>(null)

  const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value))

  useEffect(() => {
    if (visibleMessages < aiReceptionistConversation.length) {
      const current = aiReceptionistConversation[visibleMessages]
      const charCount = current.message.length
      const totalMs = clamp(2000 + charCount * 35, 2600, 6200)
      const typingMs = clamp(Math.floor(totalMs * 0.6), 900, 3200)

      setIsTyping(true)
      const typingTimer = setTimeout(() => setIsTyping(false), typingMs)
      const advanceTimer = setTimeout(() => setVisibleMessages(prev => prev + 1), totalMs)

      // On first reveal, ensure the card is in view
      if (visibleMessages === 0 && rootRef.current) {
        rootRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }

      return () => {
        clearTimeout(typingTimer)
        clearTimeout(advanceTimer)
      }
    }
  }, [visibleMessages])

  // Auto-scroll the chat list to bottom on new content or typing updates
  useEffect(() => {
    if (!listRef.current) return
    // Next frame to ensure DOM updated
    requestAnimationFrame(() => {
      listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
    })
  }, [visibleMessages, isTyping])

  const getStepDescription = (step: number) => {
    switch(step) {
      case 0: return "Visitor inquires about AI solutions"
      case 1: return "AI identifies business challenges and introduces products"
      case 2: return "AI explains AI Receptionist capabilities"
      case 3: return "AI discusses pricing and offers demo"
      case 4: return "AI schedules personalized demo"
      case 5: return "AI confirms demo details and gathers requirements"
      case 6: return "AI addresses integration concerns"
      case 7: return "AI confirms next steps and follow-up"
      case 8: return "AI provides closing and next steps"
      case 9: return "AI confirms demo scheduling and support"
      default: return ""
    }
  }

  return (
    <div ref={rootRef} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-4 sm:p-6 w-full max-w-sm mx-auto border border-gray-100">
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-sm font-medium text-gray-700">AI Live Chat</span>
        <div className="ml-auto text-xs text-gray-500">Online</div>
      </div>

      <div ref={listRef} className="space-y-4 mb-4 max-h-96 overflow-y-auto">
        {aiReceptionistConversation.slice(0, visibleMessages).map((msg, index) => (
          <div key={index} className={`flex ${msg.type === 'visitor' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${
              msg.type === 'visitor' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-800'
            }`}>
              <p className="text-sm leading-relaxed">{msg.message}</p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-2xl px-4 py-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-gray-100 pt-4">
        <div className="text-center">
          <div className="text-xs text-gray-500 mb-2">
            {visibleMessages > 0 && getStepDescription(Math.min(visibleMessages - 1, 9))}
          </div>
          <div className="flex justify-center space-x-1">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((step) => (
              <div
                key={step}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  step < visibleMessages ? 'bg-green-500' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 text-center">
        <button 
          onClick={() => {
            setVisibleMessages(0)
          }}
          className="text-xs text-blue-600 hover:text-blue-700 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
        >
          Restart Demo
        </button>
      </div>
    </div>
  )
}
