export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Acceptance of Terms</h2>
        <p className="text-gray-700 mb-6">
          By accessing and using InnofyAI services, you accept and agree to be bound by the 
          terms and provision of this agreement.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Use License</h2>
        <p className="text-gray-700 mb-6">
          Permission is granted to temporarily use InnofyAI services for personal, 
          non-commercial transitory viewing only.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Disclaimer</h2>
        <p className="text-gray-700 mb-6">
          The materials on InnofyAI are provided on an &apos;as is&apos; basis. InnofyAI makes no 
          warranties, expressed or implied, and hereby disclaims and negates all other warranties.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Limitations</h2>
        <p className="text-gray-700 mb-6">
          In no event shall InnofyAI or its suppliers be liable for any damages arising out of 
          the use or inability to use the materials on InnofyAI.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Information</h2>
        <p className="text-gray-700 mb-6">
          If you have any questions about these Terms of Service, please contact us at 
          <a href="mailto:legal@innofyai.com" className="text-blue-600 hover:text-blue-700">
            legal@innofyai.com
          </a>
        </p>
      </div>
    </div>
  )
}
