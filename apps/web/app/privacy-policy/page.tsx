import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, FileText, Shield, Scale, Mail, Phone, MapPin, Clock, AlertTriangle, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service & Privacy Policy - Padma\'s Collection',
  description: 'Official Terms of Service and Privacy Policy for Padma\'s Collection. Legal document governing the use of our services and data protection practices.',
  keywords: 'terms of service, privacy policy, legal document, data protection, consumer rights, Padmas Collection',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-neutral-100">
      {/* Legal Header */}
      <div className="bg-gradient-to-r from-slate-900 via-gray-900 to-neutral-900 text-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-6">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors group text-sm sm:text-base"
            >
              <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
            <div className="bg-red-900/30 p-2 sm:p-3 rounded-lg border border-red-700/50">
              <Scale className="h-6 w-6 sm:h-8 sm:w-8 text-red-400" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold leading-tight">
                TERMS OF SERVICE & PRIVACY POLICY
              </h1>
              <p className="text-base sm:text-lg text-gray-300 mt-1 sm:mt-2">Legal Document - Padma's Collection</p>
            </div>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-slate-700/50">
            <div className="flex items-start gap-3 mb-3">
              <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <h2 className="text-base sm:text-lg font-semibold text-amber-400">IMPORTANT LEGAL NOTICE</h2>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mt-1">
                  This document constitutes a legally binding agreement between you and Padma's Collection. 
                  By accessing our website, visiting our physical store, or utilizing any of our services, 
                  you expressly acknowledge that you have read, understood, and agree to be bound by these terms.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 text-xs sm:text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
                <span><strong>Effective Date:</strong> October 17, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-3 w-3 sm:h-4 sm:w-4 text-green-400" />
                <span><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-IN', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Legal Document */}
      <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          
          {/* Document Title Header */}
          <div className="bg-gradient-to-r from-slate-800 to-gray-800 text-white p-6 sm:p-8 lg:p-10">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full mb-4">
                <Scale className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold mb-2 leading-tight">
                TERMS OF SERVICE AND PRIVACY POLICY
              </h1>
              <p className="text-base sm:text-lg lg:text-xl opacity-90 mb-2">Padma's Collection</p>
              <div className="text-xs sm:text-sm opacity-75 space-y-1">
                <p>Proprietorship: Padma Pardeshi</p>
                <p>Registration: Maharashtra, India</p>
                <p>Document Version: 2.0</p>
              </div>
            </div>
          </div>

          {/* Legal Content */}
          <div className="p-4 sm:p-6 lg:p-10 space-y-6 sm:space-y-8 text-gray-900">
            
            {/* Preamble */}
            <section className="bg-slate-50 p-4 sm:p-6 rounded-lg border-l-4 border-slate-600">
              <h2 className="text-lg sm:text-xl font-bold text-slate-800 mb-3 flex items-center gap-2">
                <FileText className="h-5 w-5 text-slate-600" />
                PREAMBLE
              </h2>
              <div className="text-sm sm:text-base leading-relaxed space-y-3 text-gray-700">
                <p>
                  <strong>WHEREAS</strong>, Padma's Collection operates as a retail establishment specializing in women's fashion, 
                  including but not limited to gowns, lingerie, and related apparel ("Services");
                </p>
                <p>
                  <strong>WHEREAS</strong>, the Company maintains both physical retail premises and digital presence 
                  for informational and promotional purposes;
                </p>
                <p>
                  <strong>NOW THEREFORE</strong>, the following terms and conditions shall govern all interactions 
                  between the Company and its customers, visitors, and service users.
                </p>
              </div>
            </section>

            {/* Article I - Definitions */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-slate-800 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-base font-bold">
                  I
                </div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-slate-800">DEFINITIONS AND INTERPRETATION</h2>
              </div>
              <div className="ml-8 sm:ml-12 bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-200">
                <div className="text-sm sm:text-base space-y-3">
                  <div className="grid grid-cols-1 gap-3">
                    <div><strong>"Company"</strong> refers to Padma's Collection, a proprietorship owned by Padma Pardeshi.</div>
                    <div><strong>"Customer"</strong> means any individual who visits our premises or website with intent to purchase or inquire about our products.</div>
                    <div><strong>"Services"</strong> encompasses all retail, consultation, and customer support activities provided by the Company.</div>
                    <div><strong>"Personal Data"</strong> means any information relating to an identified or identifiable natural person.</div>
                    <div><strong>"Premises"</strong> refers to our physical retail location at 297, Housan Road, Devlali Camp, Nashik, Maharashtra.</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Article II - Acceptance and Binding Nature */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-slate-800 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-base font-bold">
                  II
                </div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-slate-800">ACCEPTANCE AND BINDING AGREEMENT</h2>
              </div>
              <div className="ml-8 sm:ml-12 bg-red-50 p-4 sm:p-6 rounded-lg border-l-4 border-red-500">
                <div className="text-sm sm:text-base leading-relaxed space-y-3">
                  <p className="font-semibold text-red-800">
                    BY ACCESSING THIS WEBSITE, VISITING OUR PHYSICAL PREMISES, OR ENGAGING WITH OUR SERVICES IN ANY MANNER, 
                    YOU HEREBY ACKNOWLEDGE AND AGREE TO BE LEGALLY BOUND BY THESE TERMS.
                  </p>
                  <p>
                    <strong>2.1 Legal Capacity:</strong> You represent and warrant that you possess the legal capacity to enter 
                    into this agreement and are at least eighteen (18) years of age.
                  </p>
                  <p>
                    <strong>2.2 Continuing Obligation:</strong> Your continued use of our services constitutes ongoing acceptance 
                    of these terms, including any modifications made hereto.
                  </p>
                </div>
              </div>
            </section>

            {/* Article III - Scope of Services */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-slate-800 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-base font-bold">
                  III
                </div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-slate-800">SCOPE OF SERVICES AND PRODUCT INFORMATION</h2>
              </div>
              <div className="ml-8 sm:ml-12 space-y-4">
                <div className="bg-blue-50 p-4 sm:p-6 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-blue-800 mb-3 text-sm sm:text-base">3.1 Service Provision</h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    The Company operates exclusively through <strong>in-store retail sales</strong>. No online purchasing, 
                    delivery, or e-commerce transactions are currently available. All sales transactions must be completed 
                    at our physical premises during operating hours.
                  </p>
                </div>
                
                <div className="bg-amber-50 p-4 sm:p-6 rounded-lg border border-amber-200">
                  <h3 className="font-bold text-amber-800 mb-3 text-sm sm:text-base">3.2 Product Information Accuracy</h3>
                  <div className="text-sm sm:text-base text-gray-700 space-y-2">
                    <p>While the Company endeavors to ensure accuracy in all product descriptions, pricing, and imagery:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Minor variations in color, texture, or sizing may occur due to manufacturing processes or display limitations</li>
                      <li>Product images serve illustrative purposes and may not reflect exact specifications</li>
                      <li>The Company reserves the right to correct pricing errors without prior notice</li>
                      <li>All measurements and specifications are approximate and subject to industry-standard tolerances</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Article IV - Returns and Exchanges */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-slate-800 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-base font-bold">
                  IV
                </div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-slate-800">RETURNS, EXCHANGES, AND REFUND POLICY</h2>
              </div>
              <div className="ml-8 sm:ml-12 bg-green-50 p-4 sm:p-6 rounded-lg border-l-4 border-green-500">
                <div className="text-sm sm:text-base space-y-4">
                  <div>
                    <h3 className="font-bold text-green-800 mb-2">4.1 Return Period and Conditions</h3>
                    <p className="mb-2">Returns and exchanges are accepted within <strong>seven (7) calendar days</strong> from the date of purchase, subject to:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
                      <li>Items must remain in original, unused condition with all tags and packaging intact</li>
                      <li>Proof of purchase (receipt or invoice) must be presented</li>
                      <li>Items must not show signs of wear, alteration, or damage</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-green-800 mb-2">4.2 Non-Returnable Items</h3>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
                      <li>Customized, altered, or specially ordered merchandise</li>
                      <li>Intimate apparel and undergarments (unless defective)</li>
                      <li>Items damaged due to customer negligence or misuse</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-green-800 mb-2">4.3 Refund Processing</h3>
                    <p className="text-gray-700">
                      Approved refunds shall be processed within five to seven (5-7) business days via the original payment method. 
                      The Company reserves the right to inspect returned items before processing refunds.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Article V - Privacy Policy */}
            <section className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 sm:p-6 lg:p-8 rounded-xl border-2 border-purple-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-600 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-base font-bold">
                  V
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-purple-800">PRIVACY POLICY AND DATA PROTECTION</h2>
                </div>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white p-4 sm:p-6 rounded-lg border border-purple-200 shadow-sm">
                  <h3 className="font-bold text-purple-800 mb-3 flex items-center gap-2 text-sm sm:text-base">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    5.1 Information Collection and Use
                  </h3>
                  <div className="text-sm sm:text-base text-gray-700 space-y-3">
                    <p><strong>Personal Information Collected:</strong></p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Contact details (name, telephone number, email address)</li>
                      <li>Purchase history and transaction records</li>
                      <li>Communication preferences and service feedback</li>
                      <li>Any additional information voluntarily provided during consultations</li>
                    </ul>
                    <p><strong>Purpose of Collection:</strong> Information is collected solely for legitimate business purposes including transaction processing, customer service, and communication regarding products and services.</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 sm:p-6 rounded-lg border border-purple-200 shadow-sm">
                  <h3 className="font-bold text-purple-800 mb-3 flex items-center gap-2 text-sm sm:text-base">
                    <Shield className="h-4 w-4 text-blue-500" />
                    5.2 Data Protection and Security
                  </h3>
                  <div className="text-sm sm:text-base text-gray-700 space-y-2">
                    <p><strong>Security Measures:</strong> The Company implements industry-standard security measures to protect personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                    <p><strong>Data Retention:</strong> Personal information is retained only for as long as necessary to fulfill the purposes for which it was collected or as required by applicable law.</p>
                    <p><strong>Third-Party Disclosure:</strong> Personal information is <strong>NOT</strong> sold, traded, or otherwise transferred to third parties without explicit consent, except as required by law.</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 sm:p-6 rounded-lg border border-purple-200 shadow-sm">
                  <h3 className="font-bold text-purple-800 mb-3 flex items-center gap-2 text-sm sm:text-base">
                    <Scale className="h-4 w-4 text-amber-500" />
                    5.3 Customer Rights
                  </h3>
                  <div className="text-sm sm:text-base text-gray-700">
                    <p>Customers have the right to:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                      <li>Request access to their personal information</li>
                      <li>Request correction of inaccurate data</li>
                      <li>Request deletion of personal information (subject to legal requirements)</li>
                      <li>Withdraw consent for marketing communications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Article VI - Intellectual Property */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-slate-800 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-base font-bold">
                  VI
                </div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-slate-800">INTELLECTUAL PROPERTY RIGHTS</h2>
              </div>
              <div className="ml-8 sm:ml-12 bg-orange-50 p-4 sm:p-6 rounded-lg border-l-4 border-orange-500">
                <div className="text-sm sm:text-base text-gray-700 space-y-3">
                  <p>
                    <strong>6.1 Ownership:</strong> All content, including but not limited to text, graphics, logos, images, 
                    audio clips, digital downloads, and software, is the exclusive property of Padma's Collection and is 
                    protected by Indian and international copyright laws.
                  </p>
                  <p>
                    <strong>6.2 Restrictions:</strong> Unauthorized reproduction, distribution, modification, or commercial 
                    use of any proprietary content is strictly prohibited and may result in civil and criminal penalties.
                  </p>
                  <p>
                    <strong>6.3 Trademarks:</strong> "Padma's Collection" and associated marks are registered trademarks. 
                    Use without express written permission is prohibited.
                  </p>
                </div>
              </div>
            </section>

            {/* Article VII - Limitation of Liability */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-slate-800 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-base font-bold">
                  VII
                </div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-slate-800">LIMITATION OF LIABILITY AND DISCLAIMERS</h2>
              </div>
              <div className="ml-8 sm:ml-12 bg-red-50 p-4 sm:p-6 rounded-lg border border-red-200">
                <div className="text-sm sm:text-base text-gray-700 space-y-3">
                  <p className="font-semibold text-red-800">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, PADMA'S COLLECTION SHALL NOT BE LIABLE FOR ANY INDIRECT, 
                    INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
                  </p>
                  <p>
                    <strong>7.1 Product Liability:</strong> The Company's liability is limited to the replacement or repair 
                    of defective merchandise within the warranty period.
                  </p>
                  <p>
                    <strong>7.2 Force Majeure:</strong> The Company shall not be liable for any failure to perform due to 
                    circumstances beyond reasonable control, including but not limited to natural disasters, government actions, 
                    or supply chain disruptions.
                  </p>
                </div>
              </div>
            </section>

            {/* Article VIII - Governing Law */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-slate-800 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-base font-bold">
                  VIII
                </div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-slate-800">GOVERNING LAW AND JURISDICTION</h2>
              </div>
              <div className="ml-8 sm:ml-12 bg-blue-50 p-4 sm:p-6 rounded-lg border-l-4 border-blue-500">
                <div className="text-sm sm:text-base text-gray-700 space-y-3">
                  <p>
                    <strong>8.1 Applicable Law:</strong> These Terms shall be governed by and construed in accordance with 
                    the laws of India, without regard to conflict of law principles.
                  </p>
                  <p>
                    <strong>8.2 Jurisdiction:</strong> Any disputes arising from or relating to these Terms shall be subject 
                    to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra, India.
                  </p>
                  <p>
                    <strong>8.3 Consumer Rights:</strong> Nothing in these Terms shall affect statutory consumer rights 
                    under applicable Indian consumer protection laws.
                  </p>
                </div>
              </div>
            </section>

            {/* Article IX - Modifications */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-slate-800 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-base font-bold">
                  IX
                </div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-slate-800">MODIFICATIONS AND AMENDMENTS</h2>
              </div>
              <div className="ml-8 sm:ml-12 bg-yellow-50 p-4 sm:p-6 rounded-lg border-l-4 border-yellow-500">
                <div className="text-sm sm:text-base text-gray-700 space-y-3">
                  <p>
                    <strong>9.1 Right to Modify:</strong> The Company reserves the right to modify these Terms at any time 
                    without prior notice. Modifications become effective immediately upon posting.
                  </p>
                  <p>
                    <strong>9.2 Notification:</strong> Significant changes may be communicated through our website or 
                    in-store notices. Continued use of services constitutes acceptance of modified terms.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-gradient-to-r from-gray-100 to-slate-100 p-4 sm:p-6 lg:p-8 rounded-xl border-2 border-gray-300">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-2">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                OFFICIAL CONTACT INFORMATION
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-300 shadow-sm">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2 text-sm sm:text-base">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
                    REGISTERED BUSINESS ADDRESS
                  </h3>
                  <div className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    <p className="font-semibold">Padma's Collection</p>
                    <p>Proprietor: Padma Pardeshi</p>
                    <p>297, Housan Road</p>
                    <p>Opposite Bharat Cold Drinks</p>
                    <p>Devlali Camp, Nashik</p>
                    <p>Maharashtra - 422401, India</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-300 shadow-sm">
                  <h3 className="font-bold text-gray-800 mb-4 text-sm sm:text-base">CONTACT DETAILS</h3>
                  <div className="space-y-3 text-sm sm:text-base">
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 flex-shrink-0" />
                      <a href="mailto:padmapardeshi44@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors break-all">
                        padmapardeshi44@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                      <a href="tel:+918087704122" className="text-green-600 hover:text-green-800 transition-colors">
                        +91 8087704122
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500 flex-shrink-0" />
                      <a href="https://www.padmascollection.com/" className="text-purple-600 hover:text-purple-800 transition-colors break-all">
                        www.padmascollection.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">Business Hours:</h4>
                    <p className="text-sm text-gray-600">11:00 AM - 9:30 PM</p>
                    <p className="text-sm text-red-600 font-medium">Closed on Mondays</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Legal Footer */}
            <div className="text-center pt-6 sm:pt-8 border-t-2 border-gray-300 mt-8 sm:mt-12">
              <div className="bg-slate-800 text-white p-4 sm:p-6 rounded-lg">
                <p className="text-sm sm:text-base font-semibold mb-2">
                  DOCUMENT AUTHENTICATION
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-xs sm:text-sm">
                  <div><strong>Document Version:</strong> 2.0</div>
                  <div><strong>Effective Date:</strong> October 17, 2025</div>
                  <div><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-IN', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</div>
                </div>
                <p className="text-xs text-gray-300 mt-3">
                  This document has been prepared in accordance with Indian legal requirements and consumer protection laws.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Button */}
        <div className="text-center mt-8 sm:mt-12">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-slate-800 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:bg-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl group text-sm sm:text-base"
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 group-hover:-translate-x-1 transition-transform" />
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}