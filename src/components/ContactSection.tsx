
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+27 21 123 4567", "+27 21 987 6543"],
      description: "Call us during business hours"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@quickaid.co.za", "loans@quickaid.co.za"],
      description: "We respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Cape Town", "South Africa"],
      description: "FSP Registered Company"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      description: "Online applications 24/7"
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-20 bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-quickaid-blue-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Have questions about our personal loan products or need assistance with your application? 
            Our friendly team in Cape Town is here to help you every step of the way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-quickaid rounded-full mb-4">
                <info.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-quickaid-blue-900 mb-2">
                {info.title}
              </h3>
              <div className="space-y-1 mb-2">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-700 font-medium">
                    {detail}
                  </p>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                {info.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-quickaid-blue-900 mb-4">
                Ready to Apply for Your Personal Loan?
              </h3>
              <p className="text-gray-700 mb-6">
                The fastest way to get started is through our online personal loan application. 
                It takes just a few minutes and you'll get an instant decision.
              </p>
              <button 
                onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-quickaid text-white hover:opacity-90 transition-opacity px-8 py-3 rounded-lg font-semibold"
              >
                Start Personal Loan Application
              </button>
            </div>
            <div className="bg-quickaid-blue-50 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-quickaid-blue-900 mb-4">
                FSP Registered & Trusted
              </h4>
              <p className="text-gray-700 mb-4">
                QuickAid Financial Services is a registered FSP (Financial Services Provider) based in Cape Town, ensuring compliance and trust.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  <strong>Free Consultation:</strong> Call us for personalized personal loan advice
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Quick Response:</strong> Email inquiries answered within 24 hours
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Secure Process:</strong> Your information is always protected
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
