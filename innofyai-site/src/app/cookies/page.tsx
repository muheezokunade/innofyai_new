export default function CookiesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What Are Cookies?</h2>
        <p className="text-gray-700 mb-6">
          Cookies are small text files that are placed on your device when you visit our website. 
          They help us provide you with a better experience by remembering your preferences and 
          analyzing how you use our site.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Types of Cookies We Use</h2>
        
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Essential Cookies</h3>
        <p className="text-gray-700 mb-6">
          These cookies are necessary for the website to function properly. They enable basic 
          functions like page navigation and access to secure areas of the website.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Analytics Cookies</h3>
        <p className="text-gray-700 mb-6">
          We use analytics cookies to understand how visitors interact with our website. 
          This helps us improve our services and user experience.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Marketing Cookies</h3>
        <p className="text-gray-700 mb-6">
          These cookies are used to track visitors across websites to display relevant 
          advertisements and measure the effectiveness of our marketing campaigns.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Managing Your Cookie Preferences</h2>
        <p className="text-gray-700 mb-6">
          You can control and manage cookies through your browser settings. Most browsers 
          allow you to refuse cookies or delete them. However, disabling cookies may 
          affect the functionality of our website.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Third-Party Cookies</h2>
        <p className="text-gray-700 mb-6">
          We may use third-party services that set their own cookies. These include 
          analytics providers and advertising networks. We do not control these cookies.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Updates to This Policy</h2>
        <p className="text-gray-700 mb-6">
          We may update this Cookie Policy from time to time. We will notify you of any 
          changes by posting the new policy on this page.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-6">
          If you have any questions about our use of cookies, please contact us at 
          privacy@innofyai.com or through our contact page.
        </p>
      </div>
    </div>
  )
}
