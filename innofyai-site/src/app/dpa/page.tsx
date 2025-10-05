export default function DPAPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Data Processing Addendum</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Definitions</h2>
        <p className="text-gray-700 mb-6">
          This Data Processing Addendum (&quot;DPA&quot;) forms part of the Terms of Service between 
          InnofyAI (&quot;Company&quot;) and the customer (&quot;Customer&quot;) for the provision of AI services.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Data Processing</h2>
        <p className="text-gray-700 mb-6">
          InnofyAI processes personal data on behalf of the Customer in accordance with applicable 
          data protection laws, including GDPR and NDPR. The Company acts as a data processor 
          and the Customer remains the data controller.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Security Measures</h2>
        <p className="text-gray-700 mb-6">
          We implement appropriate technical and organizational measures to ensure the security 
          of personal data, including encryption, access controls, and regular security assessments.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Data Subject Rights</h2>
        <p className="text-gray-700 mb-6">
          We assist the Customer in fulfilling data subject requests and provide necessary 
          information to demonstrate compliance with data protection obligations.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Data Breach Notification</h2>
        <p className="text-gray-700 mb-6">
          In the event of a personal data breach, we will notify the Customer without undue 
          delay and provide all necessary information to assist with breach notification requirements.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. International Transfers</h2>
        <p className="text-gray-700 mb-6">
          Any international transfers of personal data are conducted in accordance with 
          applicable data protection laws and appropriate safeguards.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Contact Information</h2>
        <p className="text-gray-700 mb-6">
          For questions regarding this DPA, please contact us at privacy@innofyai.com 
          or through our contact page.
        </p>
      </div>
    </div>
  )
}
