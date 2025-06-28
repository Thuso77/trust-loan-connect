
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQPage = () => {
  const faqs = [
    {
      question: "How quickly can I get a response to my loan application?",
      answer: "We pride ourselves on our quick response time. Most applications receive a response within minutes to a few hours during business hours."
    },
    {
      question: "What documents do I need to apply for a personal loan?",
      answer: "You'll need a valid ID or passport, proof of address (utility bill), your 3 latest payslips, and 3 months of bank statements."
    },
    {
      question: "What are your interest rates?",
      answer: "Our interest rates are competitive and vary based on the loan amount: 28% for loans up to R500, 26% for R500-R2,000, 24% for R2,000-R5,000, and 22% for amounts above R5,000."
    },
    {
      question: "How much can I borrow?",
      answer: "We offer personal loans ranging from R500 to R10,000, depending on your affordability assessment and credit profile."
    },
    {
      question: "What are the repayment terms?",
      answer: "We offer flexible repayment terms ranging from 7 days to 12 months, allowing you to choose what works best for your budget."
    },
    {
      question: "Are there any hidden fees?",
      answer: "No, we believe in complete transparency. All fees and charges are clearly outlined in your loan agreement before you sign."
    },
    {
      question: "Do you check my credit record?",
      answer: "Yes, as a responsible lender, we conduct credit checks as part of our affordability assessment to ensure the loan is suitable for you."
    },
    {
      question: "Can I apply if I'm blacklisted?",
      answer: "We assess each application individually. While having adverse credit history may affect your application, we encourage you to apply as we consider various factors."
    },
    {
      question: "How do I make repayments?",
      answer: "We accept various payment methods including EFT, debit orders, and card payments. We'll set up a convenient payment method during your application process."
    },
    {
      question: "What happens if I can't make a payment?",
      answer: "If you're experiencing financial difficulties, please contact us immediately. We'll work with you to find a suitable solution and discuss possible arrangements."
    },
    {
      question: "Is QuickAid Financial Services registered?",
      answer: "Yes, we are a registered credit provider licensed by the National Credit Regulator (NCR), ensuring we operate within all legal requirements."
    },
    {
      question: "Can I pay off my loan early?",
      answer: "Yes, you can settle your loan early. Please contact us to get your settlement amount, and there may be early settlement benefits."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-quickaid-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-quickaid-blue-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Get answers to common questions about our personal loan services, application process, and terms.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm border">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold text-quickaid-blue-900 hover:text-quickaid-blue-700">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-12 text-center bg-quickaid-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-quickaid-blue-900 mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-700 mb-6">
                Can't find the answer you're looking for? Our friendly customer service team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:info@quickaid.co.za"
                  className="bg-gradient-quickaid text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Email Us
                </a>
                <a 
                  href="https://wa.me/27614749115"
                  className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;
