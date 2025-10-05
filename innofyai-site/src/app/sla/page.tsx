export default function SLAPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Service Level Agreement</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Service Availability</h2>
        <p className="text-gray-700 mb-6">
          InnofyAI commits to maintaining 99.9% uptime for our core services. This means 
          our services will be available for at least 99.9% of the time in any given month.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Response Times</h2>
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Support Response Times</h3>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Critical Issues:</strong> 2 hours during business hours</li>
            <li><strong>High Priority:</strong> 4 hours during business hours</li>
            <li><strong>Medium Priority:</strong> 24 hours</li>
            <li><strong>Low Priority:</strong> 72 hours</li>
          </ul>
        </div>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Performance Metrics</h2>
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">System Performance</h3>
          <ul className="space-y-2 text-gray-700">
            <li><strong>API Response Time:</strong> 95% of requests under 200ms</li>
            <li><strong>Page Load Time:</strong> 95% of pages under 2 seconds</li>
            <li><strong>Data Processing:</strong> Real-time processing with <1 second latency</li>
          </ul>
        </div>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Maintenance Windows</h2>
        <p className="text-gray-700 mb-6">
          Scheduled maintenance will be performed during low-traffic hours, typically 
          on weekends between 2:00 AM and 6:00 AM EST. We will provide at least 48 
          hours notice for planned maintenance.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Service Credits</h2>
        <p className="text-gray-700 mb-6">
          If we fail to meet our SLA commitments, customers may be eligible for service 
          credits based on the severity and duration of the service interruption.
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Credit Schedule</h3>
          <ul className="space-y-2 text-gray-700">
            <li><strong>99.0% - 99.8% uptime:</strong> 5% service credit</li>
            <li><strong>95.0% - 99.0% uptime:</strong> 10% service credit</li>
            <li><strong>Below 95% uptime:</strong> 25% service credit</li>
          </ul>
        </div>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Exclusions</h2>
        <p className="text-gray-700 mb-6">
          The following are excluded from our SLA calculations:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Scheduled maintenance windows</li>
          <li>Third-party service outages</li>
          <li>Customer-caused issues</li>
          <li>Force majeure events</li>
          <li>Network issues outside our control</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Monitoring and Reporting</h2>
        <p className="text-gray-700 mb-6">
          We continuously monitor our services and provide monthly SLA reports to 
          customers. Our status page at <a href="https://status.innofyai.com" className="text-blue-600 hover:text-blue-700">status.innofyai.com</a> 
          provides real-time service status updates.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Information</h2>
        <p className="text-gray-700 mb-6">
          For SLA-related questions or to report service issues:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Email: support@innofyai.com</li>
          <li>Phone: +1 (555) 123-4567</li>
          <li>Status Page: <a href="https://status.innofyai.com" className="text-blue-600 hover:text-blue-700">status.innofyai.com</a></li>
        </ul>
      </div>
    </div>
  )
}
