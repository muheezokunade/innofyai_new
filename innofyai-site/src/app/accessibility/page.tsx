export default function AccessibilityPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Accessibility Statement</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Commitment</h2>
        <p className="text-gray-700 mb-6">
          InnofyAI is committed to ensuring digital accessibility for all users. We strive 
          to provide an inclusive experience that meets or exceeds the Web Content 
          Accessibility Guidelines (WCAG) 2.1 AA standards.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Accessibility Features</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Keyboard navigation support throughout the website</li>
          <li>Screen reader compatibility with proper ARIA labels</li>
          <li>High contrast color schemes and readable fonts</li>
          <li>Alternative text for all images and visual content</li>
          <li>Focus indicators for all interactive elements</li>
          <li>Semantic HTML structure for better navigation</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Assistive Technologies</h2>
        <p className="text-gray-700 mb-6">
          Our website is designed to work with various assistive technologies including:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Screen readers (NVDA, JAWS, VoiceOver)</li>
          <li>Voice control software</li>
          <li>Switch navigation devices</li>
          <li>Magnification software</li>
          <li>Text-to-speech tools</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Ongoing Improvements</h2>
        <p className="text-gray-700 mb-6">
          We continuously work to improve the accessibility of our website through:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Regular accessibility audits and testing</li>
          <li>User feedback and testing with disabled users</li>
          <li>Staff training on accessibility best practices</li>
          <li>Implementation of new accessibility standards</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Feedback and Support</h2>
        <p className="text-gray-700 mb-6">
          If you encounter any accessibility barriers or have suggestions for improvement, 
          please contact us:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Email: accessibility@innofyai.com</li>
          <li>Phone: +1 (555) 123-4567</li>
          <li>Contact form: <a href="/contact" className="text-blue-600 hover:text-blue-700">/contact</a></li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Standards Compliance</h2>
        <p className="text-gray-700 mb-6">
          This website aims to conform to the following accessibility standards:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>WCAG 2.1 AA (Web Content Accessibility Guidelines)</li>
          <li>Section 508 of the Rehabilitation Act</li>
          <li>Americans with Disabilities Act (ADA)</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Third-Party Content</h2>
        <p className="text-gray-700 mb-6">
          Some content on our website may be provided by third parties. While we strive 
          to ensure all content meets accessibility standards, we cannot guarantee the 
          accessibility of third-party content.
        </p>
      </div>
    </div>
  )
}
