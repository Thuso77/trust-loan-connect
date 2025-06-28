
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  
  const benefits = [
    "Quick response to your funding request!!!",
    "Competitive interest rates",
    "Flexible repayment terms",
    "No hidden fees"
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-quickaid-blue-50 to-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 197, 253, 0.1) 50%, rgba(255, 255, 255, 0.1) 100%)`,
        backgroundSize: '400% 400%',
        animation: 'gradientShift 15s ease infinite'
      }}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-quickaid-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-quickaid-orange-500 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-quickaid-blue-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-quickaid-orange-300 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-quickaid-blue-900 mb-6 leading-tight break-words">
              <span className="block">Get Your Personal Loan</span>
              <span className="block text-quickaid-orange-500 mt-2">Fast & Easy</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 lg:mb-8 leading-relaxed">
              Need financial assistance? QuickAid Financial Services offers personal loans 
              with competitive rates and transparent terms. Your trusted financial partner.
            </p>

            {/* Benefits List */}
            <div className="mb-6 lg:mb-8">
              <ul className="space-y-2 lg:space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center justify-center lg:justify-start">
                    <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mr-2 lg:mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start mb-6 lg:mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-quickaid hover:opacity-90 transition-opacity text-base lg:text-lg px-6 lg:px-8 py-4 lg:py-6"
                onClick={() => navigate('/application')}
              >
                Start Your Application
                <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-quickaid-blue-500 text-quickaid-blue-500 hover:bg-quickaid-blue-50 text-base lg:text-lg px-6 lg:px-8 py-4 lg:py-6"
                onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Calculate Loan
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 lg:pt-8 border-t border-gray-200">
              <p className="text-xs sm:text-sm text-gray-600 mb-3 lg:mb-4">Trusted by customers nationwide</p>
              <div className="flex items-center justify-center lg:justify-start space-x-4 lg:space-x-6">
                <div className="text-center">
                  <div className="text-lg lg:text-2xl font-bold text-quickaid-blue-900">100%</div>
                  <div className="text-xs lg:text-sm text-gray-600">Transparent</div>
                </div>
                <div className="text-center">
                  <div className="text-lg lg:text-2xl font-bold text-quickaid-blue-900">Fast</div>
                  <div className="text-xs lg:text-sm text-gray-600">Response</div>
                </div>
                <div className="text-center">
                  <div className="text-lg lg:text-2xl font-bold text-quickaid-blue-900">NCR</div>
                  <div className="text-xs lg:text-sm text-gray-600">Registered</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                alt="Happy customer using laptop for loan application" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 bg-white rounded-lg shadow-lg p-2 lg:p-4 z-20 transform rotate-3">
              <div className="text-xs lg:text-sm font-semibold text-quickaid-blue-900">Quick Response!</div>
              <div className="text-xs text-gray-600">Response in minutes</div>
            </div>
            <div className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 bg-quickaid-orange-500 text-white rounded-lg shadow-lg p-2 lg:p-4 z-20 transform -rotate-3">
              <div className="text-xs lg:text-sm font-semibold">Competitive Rates</div>
              <div className="text-xs">Transparent Terms</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
