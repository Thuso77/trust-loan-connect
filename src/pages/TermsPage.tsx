
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const TermsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-quickaid-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-quickaid-blue-900 mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="prose max-w-none">
              <p className="text-sm text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
              
              <h2 className="text-2xl font-bold text-quickaid-blue-900 mb-4">1. Introduction</h2>
              <p className="mb-6">
                These Terms and Conditions ("Terms") govern your use of QuickAid Financial Services' personal loan services. By applying for a loan with us, you agree to be bound by these Terms.
              </p>

              <h2 className="text-2xl font-bold text-quickaid-blue-900 mb-4">2. About Us</h2>
              <p className="mb-6">
                QuickAid Financial Services is a registered credit provider licensed by the National Credit Regulator (NCR). We specialize in providing personal loans with transparent terms and competitive interest rates.
              </p>

              <h2 className="text-2xl font-bold text-quickaid-blue-900 mb-4">3. Loan Application Process</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>All loan applications are subject to our credit assessment and affordability checks</li>
                <li>You must provide accurate and complete information in your application</li>
                <li>We reserve the right to request additional documentation or information</li>
                <li>Loan approval is at our discretion and not guaranteed</li>
              </ul>

              <h2 className="text-2xl font-bold text-quickaid-blue-900 mb-4">4. Loan Terms</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Loan amounts range from R500 to R10,000</li>
                <li>Repayment terms range from 7 days to 12 months</li>
                <li>Interest rates vary based on loan amount and risk assessment</li>
                <li>All fees and charges will be clearly disclosed before loan agreement</li>
              </ul>

              <h2 className="text-2xl font-bold text-quickaid-blue-900 mb-4">5. Repayment Obligations</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>You must make payments according to the agreed schedule</li>
                <li>Late payments may incur additional fees and affect your credit record</li>
                <li>Early settlement options are available - contact us for settlement amounts</li>
                <li>Payment methods include EFT, debit orders, and card payments</li>
              </ul>

              <h2 className="text-2xl font-bold text-quickaid-blue-900 mb-4">6. Your Rights</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Right to receive clear information about loan terms and costs</li>
                <li>Right to a cooling-off period as per NCR regulations</li>
                <li>Right to early settlement of your loan</li>
                <li>Right to lodge complaints with us or the NCR</li>
              </ul>

              <h2 className="text-2xl font-bold text-quickaid-blue-900 mb-4">7. Your Responsibilities</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Provide accurate and truthful information</li>
                <li>Notify us of any changes to your circumstances</li>
                <li>Make payments on time according to your loan agreement</li>
                <li>Keep your contact details updated</li>
              </ul>

              <h2 className="text-2xl font-bold text-quickaid-blue-900 mb-4">8. Privacy and Data Protection</h2>
              <p className="mb-6">
                We are committed to protecting your personal information. We collect, use, and store your data in accordance with applicable privacy laws and our Privacy Policy. Your information may be shared with credit bureaus and other authorized parties as required by law.
              </p>

              <h2 className="text-2xl font-bold text-quickaid-blue-900 mb-4">9. Default and Collections</h2>
              <p className="mb-6">
                If you default on your loan, we may take legal action to recover the debt. This may include reporting to credit bureaus, engaging debt collectors, or pursuing legal remedies. Additional costs may be added to your account.
              </p>

              <h2 className="text-2xl font-bold text-quickaid-blue-900 mb-4">10. Complaints Process</h2>
              <p className="mb-6">
                If you have a complaint, please contact us first at info@quickaid.co.za. If we cannot resolve your complaint, you may escalate it to the National Credit Regulator or the relevant Ombudsman.
              </p>

              <h2 className="text-2xl font-bold text-quickaid-blue-900 mb-4">11. Changes to Terms</h2>
              <p className="mb-6">
                We may update these terms from time to time. Changes will be communicated to you and will apply to future loan agreements.
              </p>

              <h2 className="text-2xl font-bold text-quickaid-blue-900 mb-4">12. Contact Information</h2>
              <div className="bg-quickaid-blue-50 p-4 rounded-lg">
                <p><strong>QuickAid Financial Services</strong></p>
                <p>Email: info@quickaid.co.za</p>
                <p>Phone: +27 61 474 9115</p>
                <p>Address: South Africa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsPage;
