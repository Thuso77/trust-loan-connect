
import { FileText, Search, CheckCircle, DollarSign } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: FileText,
      title: "Apply Online",
      description: "Fill out our simple application form in just a few minutes.",
      step: "01"
    },
    {
      icon: Search,
      title: "Quick Review",
      description: "Our team reviews your application and checks your eligibility.",
      step: "02"
    },
    {
      icon: CheckCircle,
      title: "Get Approved",
      description: "Receive your approval decision within minutes, not days.",
      step: "03"
    },
    {
      icon: DollarSign,
      title: "Receive Funds",
      description: "Get your funds deposited directly into your account.",
      step: "04"
    }
  ];

  return (
    <section 
      id="how-it-works" 
      className="py-20 bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-quickaid-blue-900 mb-6">
            How It Works
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Getting a loan with QuickAid is simple, fast, and transparent. 
            Follow these four easy steps to get the funding you need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-quickaid rounded-full flex items-center justify-center text-white font-bold text-sm">
                {step.step}
              </div>
              
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-quickaid-blue-50 rounded-full mb-6 mt-4">
                <step.icon className="w-10 h-10 text-quickaid-blue-600" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-quickaid-blue-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-quickaid-blue-200 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-quickaid rounded-lg p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="mb-6">
              Join thousands of satisfied customers who have trusted QuickAid for their financial needs.
            </p>
            <button 
              onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-quickaid-blue-900 hover:bg-gray-100 transition-colors px-8 py-3 rounded-lg font-semibold"
            >
              Start Your Application
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
