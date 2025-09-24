import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
                <p className="text-gray-600">
                  Last Updated: December 2024
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                  <p className="text-gray-700 mb-4">
                    Welcome to SquibTurf ("we," "our," or "us"). We are committed to protecting your privacy 
                    and ensuring the security of your personal information. This Privacy Policy explains how we 
                    collect, use, disclose, and safeguard your information when you use our mobile application.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
                  
                  <h3 className="text-xl font-medium text-gray-800 mb-3">2.1 Personal Information</h3>
                  <p className="text-gray-700 mb-3">We may collect the following personal information:</p>
                  <ul className="list-disc pl-6 text-gray-700 mb-4">
                    <li><strong>Account Information:</strong> Email address, name, and profile information when you create an account or sign in using Google Sign-In</li>
                    <li><strong>Location Data:</strong> Your device's location information when you use location-based features</li>
                    <li><strong>Content:</strong> Posts, comments, and other content you create within the app</li>
                    <li><strong>Device Information:</strong> Device type, operating system, and unique device identifiers</li>
                  </ul>

                  <h3 className="text-xl font-medium text-gray-800 mb-3">2.2 Automatically Collected Information</h3>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Usage data and analytics</li>
                    <li>App performance and crash reports</li>
                    <li>Network information and connection details</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
                  <p className="text-gray-700 mb-3">We use the collected information for the following purposes:</p>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Provide and maintain the SquibTurf service</li>
                    <li>Process and display your posts and content</li>
                    <li>Enable location-based features and content discovery</li>
                    <li>Improve app functionality and user experience</li>
                    <li>Send important updates and notifications</li>
                    <li>Ensure app security and prevent fraud</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
                  
                  <h3 className="text-xl font-medium text-gray-800 mb-3">4.1 Public Content</h3>
                  <p className="text-gray-700 mb-4">
                    Posts and content you create may be visible to other users of the app. Please be mindful 
                    of the information you share publicly.
                  </p>

                  <h3 className="text-xl font-medium text-gray-800 mb-3">4.2 Service Providers</h3>
                  <p className="text-gray-700 mb-3">We may share information with trusted third-party service providers who assist us in:</p>
                  <ul className="list-disc pl-6 text-gray-700 mb-4">
                    <li>Hosting and data storage (AWS)</li>
                    <li>Authentication services (Google Sign-In)</li>
                    <li>Analytics and performance monitoring</li>
                    <li>Customer support services</li>
                  </ul>

                  <h3 className="text-xl font-medium text-gray-800 mb-3">4.3 Legal Requirements</h3>
                  <p className="text-gray-700">
                    We may disclose your information if required by law, court order, or government request, 
                    or to protect our rights, property, or safety.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Storage and Security</h2>
                  <p className="text-gray-700 mb-3">Your data is stored securely using industry-standard encryption and security measures:</p>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Data is stored on secure AWS servers</li>
                    <li>All data transmission is encrypted using HTTPS</li>
                    <li>We implement appropriate access controls and authentication</li>
                    <li>Regular security audits and updates are performed</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights and Choices</h2>
                  
                  <h3 className="text-xl font-medium text-gray-800 mb-3">6.1 Access and Control</h3>
                  <p className="text-gray-700 mb-3">You have the right to:</p>
                  <ul className="list-disc pl-6 text-gray-700 mb-4">
                    <li>Access your personal information</li>
                    <li>Update or correct your information</li>
                    <li>Delete your account and associated data</li>
                    <li>Opt-out of certain communications</li>
                  </ul>

                  <h3 className="text-xl font-medium text-gray-800 mb-3">6.2 Location Services</h3>
                  <p className="text-gray-700">
                    You can control location access through your device settings. Disabling location services 
                    may limit certain app features.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Retention</h2>
                  <p className="text-gray-700">
                    We retain your information for as long as your account is active or as needed to provide 
                    services. You may request deletion of your data at any time.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Children's Privacy</h2>
                  <p className="text-gray-700 mb-4">
                    SquibTurf is not intended for children under 13. We do not knowingly collect personal 
                    information from children under 13. If you believe we have collected such information, 
                    please contact us immediately.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Child Safety Policy</h2>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold text-red-800 mb-4">Our Commitment to Child Safety</h3>
                    <p className="text-red-700 mb-4">
                      SquibTurf is committed to protecting children and preventing child sexual abuse and 
                      exploitation (CSAE) on our platform.
                    </p>
                    
                    <h4 className="text-lg font-medium text-red-800 mb-3">Our Commitment:</h4>
                    <ul className="list-disc pl-6 text-red-700 mb-4">
                      <li>Zero tolerance for any content involving minors in sexual contexts</li>
                      <li>Immediate reporting of any suspected CSAE content to authorities</li>
                      <li>Regular monitoring and content moderation</li>
                      <li>User reporting mechanisms for inappropriate content</li>
                      <li>Cooperation with law enforcement investigations</li>
                    </ul>

                    <h4 className="text-lg font-medium text-red-800 mb-3">Reporting:</h4>
                    <p className="text-red-700 mb-3">
                      If you encounter any content that may involve child sexual abuse or exploitation, please:
                    </p>
                    <ol className="list-decimal pl-6 text-red-700 mb-4">
                      <li>Report it immediately through our app's reporting feature</li>
                      <li>Contact us at <a href="mailto:admin@squibturf.com" className="text-red-600 underline">admin@squibturf.com</a></li>
                      <li>Report to the <a href="https://www.missingkids.org/gethelpnow/cybertipline" target="_blank" rel="noopener noreferrer" className="text-red-600 underline">National Center for Missing & Exploited Children (NCMEC)</a></li>
                    </ol>
                    
                    <p className="text-red-700 font-medium">
                      We take all reports seriously and will investigate promptly.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. International Data Transfers</h2>
                  <p className="text-gray-700">
                    Your information may be transferred to and processed in countries other than your own. 
                    We ensure appropriate safeguards are in place to protect your data.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
                  <p className="text-gray-700">
                    We may update this Privacy Policy from time to time. We will notify you of any material 
                    changes by posting the new policy in the app and updating the "Last Updated" date.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. GDPR and CCPA Compliance</h2>
                  
                  <h3 className="text-xl font-medium text-gray-800 mb-3">12.1 GDPR (European Users)</h3>
                  <p className="text-gray-700 mb-3">If you are in the European Union, you have additional rights under GDPR:</p>
                  <ul className="list-disc pl-6 text-gray-700 mb-4">
                    <li>Right to data portability</li>
                    <li>Right to restrict processing</li>
                    <li>Right to object to processing</li>
                    <li>Right to withdraw consent</li>
                  </ul>

                  <h3 className="text-xl font-medium text-gray-800 mb-3">12.2 CCPA (California Users)</h3>
                  <p className="text-gray-700 mb-3">California residents have additional rights under CCPA:</p>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Right to know what personal information is collected</li>
                    <li>Right to know whether personal information is sold or disclosed</li>
                    <li>Right to opt-out of the sale of personal information</li>
                    <li>Right to equal service and price</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contact Information</h2>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700">
                      <strong>Email:</strong> <a href="mailto:Squibturf@gmail.com" className="text-primary-600 hover:text-primary-700">Squibturf@gmail.com</a>
                    </p>
                    <p className="text-gray-700">
                      <strong>Address:</strong> Chicago, IL
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
