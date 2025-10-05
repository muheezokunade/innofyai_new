export function TrustStrip() {
  const partners = [
    { name: 'techflow', logo: 'TechFlow', width: 'w-20' },
    { name: 'dentalcare', logo: 'DentalCare', width: 'w-24' },
    { name: 'localbiz', logo: 'LocalBiz', width: 'w-18' },
    { name: 'growthco', logo: 'GrowthCo', width: 'w-20' },
    { name: 'servicehub', logo: 'ServiceHub', width: 'w-22' },
    { name: 'scaleup', logo: 'ScaleUp', width: 'w-16' },
    { name: 'bizflow', logo: 'BizFlow', width: 'w-18' }
  ]

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-500 mb-6">
          Trusted by 500+ growing businesses
        </p>
        <div className="flex justify-center items-center space-x-4 sm:space-x-6 lg:space-x-12 opacity-50 overflow-x-auto pb-2">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className={`flex items-center justify-center ${partner.width} h-10 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg grayscale hover:grayscale-0 transition-all duration-300 shadow-sm flex-shrink-0`}
            >
              <div className="text-sm font-bold text-white text-center px-2">
                {partner.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
