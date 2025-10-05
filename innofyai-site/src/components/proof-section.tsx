'use client'

import { TrendingUp, Clock, Star, Users } from 'lucide-react'

const stats = [
  {
    icon: TrendingUp,
    value: '+127%',
    label: 'Average Booking Increase',
    subtext: 'vs. manual processes'
  },
  {
    icon: Clock,
    value: '18min',
    label: 'Average Response Time',
    subtext: 'down from 4.2 hours'
  },
  {
    icon: Star,
    value: '4.8★',
    label: 'Customer Rating',
    subtext: 'across 500+ businesses'
  },
  {
    icon: Users,
    value: '340k+',
    label: 'Leads Processed',
    subtext: 'monthly across platform'
  }
]

export function ProofSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                The Numbers Don&apos;t Lie
              </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real businesses using our AI tools.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Before/After Chart */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Lead Conversion Funnel</h3>
            
            <div className="space-y-6">
              {/* Before */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-700">Before InnofyAI</span>
                  <span className="text-sm text-gray-500">Manual Process</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">Website Visitors</span>
                    <span className="text-xs font-medium">1,000</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-400 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">Leads Captured</span>
                    <span className="text-xs font-medium">87</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-400 h-2 rounded-full" style={{ width: '8.7%' }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">Bookings</span>
                    <span className="text-xs font-medium">12</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-400 h-2 rounded-full" style={{ width: '1.2%' }}></div>
                  </div>
                </div>
              </div>

              {/* After */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">After InnofyAI</span>
                  <span className="text-sm text-blue-600">AI-Powered</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">Website Visitors</span>
                    <span className="text-xs font-medium">1,000</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">Leads Captured</span>
                    <span className="text-xs font-medium">234</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '23.4%' }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">Bookings</span>
                    <span className="text-xs font-medium">89</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '8.9%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">+642%</div>
                <div className="text-sm text-green-600">Booking improvement</div>
              </div>
            </div>
          </div>

          {/* Stat Tiles */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-gray-700 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.subtext}</div>
                  <div className="text-xs text-gray-400 mt-2">*avg. result</div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-gray-500">
            * Results based on average performance across 500+ businesses over 12 months.
            Individual results may vary.
          </p>
        </div>
      </div>
    </section>
  )
}
