import Link from 'next/link'

export function SlimCtaBand() {
  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Ready to see these results in your business?
        </h3>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          Join 500+ businesses already using AI to convert more leads and accelerate growth.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
          <Link
            href="/start"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg text-blue-600 bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
          >
            Start Free Trial
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg text-white border-2 border-white hover:bg-white hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
          >
            Book Strategy Call
          </Link>
        </div>
      </div>
    </section>
  )
}
