'use client'

import { useState, useEffect } from 'react'

const mockConversation = [
  { type: 'visitor', message: "Hi, I'm interested in your services" },
  { type: 'ai', message: "Great! I'm Sarah, your AI assistant. What type of business are you looking to grow?" },
  { type: 'visitor', message: "I run a dental practice" },
  { type: 'ai', message: "Perfect! I can help you increase bookings by 38% on average. Would you like to see how our AI Receptionist works for dental practices?" },
  { type: 'visitor', message: "Yes, definitely" },
  { type: 'ai', message: "I'll book you a 15-min demo with Dr. Martinez who grew from 200 to 340 monthly patients. What's your preferred time?" },
  { type: 'visitor', message: "Tomorrow at 2pm works" },
  { type: 'ai', message: "Perfect! I've sent you a calendar invite. You'll love the results!" }
]

export function ChatDemo() {
  const [visibleMessages, setVisibleMessages] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (visibleMessages < mockConversation.length) {
        setIsTyping(true)
        setTimeout(() => {
          setVisibleMessages(prev => prev + 1)
          setIsTyping(false)
        }, 1200)
      } else {
        // Reset animation after a pause
        setTimeout(() => {
          setVisibleMessages(0)
        }, 3000)
      }
    }, 1500)

    return () => clearTimeout(timer)
  }, [visibleMessages])

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-4 sm:p-6 w-full max-w-sm mx-auto border border-gray-100">
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-sm font-medium text-gray-700">Live AI Chat</span>
        <div className="ml-auto text-xs text-gray-500">Online</div>
      </div>
      
      <div className="space-y-3 h-80 overflow-hidden">
        {mockConversation.slice(0, visibleMessages).map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.type === 'visitor' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                msg.type === 'visitor'
                  ? 'bg-blue-600 text-white rounded-br-md'
                  : 'bg-gray-100 text-gray-800 rounded-bl-md'
              }`}
            >
              {msg.message}
            </div>
          </div>
        ))}
        
        {isTyping && visibleMessages < mockConversation.length && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-800 p-3 rounded-2xl rounded-bl-md">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          <span>+38% booking rate increase</span>
        </div>
      </div>
    </div>
  )
}
