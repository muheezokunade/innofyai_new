export default function RefundsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund Policy</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Refund Eligibility</h2>
        <p className="text-gray-700 mb-6">
          InnofyAI offers refunds under the following conditions within 30 days of purchase:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Service does not function as described</li>
          <li>Technical issues that cannot be resolved by our support team</li>
          <li>Duplicate charges or billing errors</li>
          <li>Service cancellation within the first 7 days of subscription</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Refund Process</h2>
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">How to Request a Refund</h3>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Contact our support team at refunds@innofyai.com</li>
            <li>Provide your account information and reason for refund</li>
            <li>Our team will review your request within 2 business days</li>
            <li>If approved, refunds are processed within 5-10 business days</li>
          </ol>
        </div>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Non-Refundable Items</h2>
        <p className="text-gray-700 mb-6">
          The following are not eligible for refunds:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Custom development work that has been completed</li>
          <li>Services used beyond the trial period</li>
          <li>Third-party integrations or add-ons</li>
          <li>Training sessions that have been attended</li>
          <li>Refunds requested after 30 days from purchase</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Processing Time</h2>
        <p className="text-gray-700 mb-6">
          Approved refunds will be processed within 5-10 business days. The refund will 
          appear on your original payment method. Processing time may vary depending on 
          your bank or payment provider.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Partial Refunds</h2>
        <p className="text-gray-700 mb-6">
          In some cases, we may offer partial refunds based on:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Amount of service used</li>
          <li>Time remaining in the billing period</li>
          <li>Specific circumstances of the refund request</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Dispute Resolution</h2>
        <p className="text-gray-700 mb-6">
          If you disagree with our refund decision, you may:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Request a review by our management team</li>
          <li>Provide additional documentation or evidence</li>
          <li>Contact us at disputes@innofyai.com</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Subscription Cancellations</h2>
        <p className="text-gray-700 mb-6">
          You can cancel your subscription at any time through your account dashboard. 
          Cancellations take effect at the end of your current billing period. No 
          refunds are provided for unused time in the current billing period.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Information</h2>
        <p className="text-gray-700 mb-6">
          For refund-related questions or to request a refund:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Email: refunds@innofyai.com</li>
          <li>Phone: +1 (555) 123-4567</li>
          <li>Contact form: <a href="/contact" className="text-blue-600 hover:text-blue-700">/contact</a></li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Policy Updates</h2>
        <p className="text-gray-700 mb-6">
          We may update this refund policy from time to time. Changes will be posted 
          on this page with an updated revision date. Continued use of our services 
          constitutes acceptance of any changes.
        </p>
      </div>
    </div>
  )
}
