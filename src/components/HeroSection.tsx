
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  const benefits = [
    "Quick response to your funding request!!!",
    "Competitive interest rates",
    "Flexible repayment terms",
    "No hidden fees"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-quickaid-blue-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-quickaid-blue-500 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-quickaid-orange-500 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-quickaid-blue-300 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-quickaid-orange-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-quickaid-blue-900 mb-6 leading-tight">
              Get Your Personal Loan
              <span className="block text-quickaid-orange-500">Fast & Easy</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Need financial assistance? QuickAid Financial Services offers personal loans 
              with competitive rates and transparent terms. Your trusted financial partner in Cape Town.
            </p>

            {/* Benefits List */}
            <div className="mb-8">
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center justify-center lg:justify-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-quickaid hover:opacity-90 transition-opacity text-lg px-8 py-6"
                onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-quickaid-blue-500 text-quickaid-blue-500 hover:bg-quickaid-blue-50 text-lg px-8 py-6"
                onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Calculate Loan
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-4">Trusted by Cape Town residents</p>
              <div className="flex items-center justify-center lg:justify-start space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-quickaid-blue-900">1+</div>
                  <div className="text-sm text-gray-600">Years in Business</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-quickaid-blue-900">100%</div>
                  <div className="text-sm text-gray-600">Transparent</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-quickaid-blue-900">Fast</div>
                  <div className="text-sm text-gray-600">Approval</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                alt="Happy customer using laptop for loan application" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 z-20 transform rotate-3">
              <div className="text-sm font-semibold text-quickaid-blue-900">Quick Approval!</div>
              <div className="text-xs text-gray-600">Response in minutes</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-quickaid-orange-500 text-white rounded-lg shadow-lg p-4 z-20 transform -rotate-3">
              <div className="text-sm font-semibold">Competitive Rates</div>
              <div className="text-xs">Transparent Terms</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
