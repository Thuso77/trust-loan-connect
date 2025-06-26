
import { Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-quickaid-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/7b41a6b8-ced4-41be-9652-9569d306b406.png" 
              alt="QuickAid Financial Services" 
              className="h-12 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-quickaid-blue-100 mb-4">
              After 1 year of serving Cape Town residents, QuickAid Financial Services has become 
              a trusted FSP for fast, reliable, and transparent personal loan solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">info@quickaid.co.za</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">Cape Town, South Africa</span>
              </div>
            </div>
          </div>

          {/* Personal Loan Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Personal Loans</h4>
            <ul className="space-y-2 mb-6">
              <li>
                <span className="text-quickaid-blue-100">Debt Consolidation</span>
              </li>
              <li>
                <span className="text-quickaid-blue-100">Emergency Expenses</span>
              </li>
              <li>
                <span className="text-quickaid-blue-100">Home Improvements</span>
              </li>
              <li>
                <span className="text-quickaid-blue-100">Special Occasions</span>
              </li>
            </ul>
            
            {/* Payment Methods */}
            <div className="border-t border-quickaid-blue-700 pt-4">
              <h5 className="text-sm font-semibold mb-2">We Accept</h5>
              <div className="flex items-center space-x-2">
                <div className="flex">
                  <div className="w-8 h-5 bg-red-600 rounded-l-sm flex items-center justify-center mr-1">
                    <span className="text-white text-xs font-bold">M</span>
                  </div>
                  <div className="w-8 h-5 bg-yellow-500 rounded-r-sm flex items-center justify-center">
                    <span className="text-white text-xs font-bold">C</span>
                  </div>
                </div>
                <span className="text-sm text-quickaid-blue-100">Mastercard</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-quickaid-blue-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-quickaid-blue-100 text-sm">
              © 2024 QuickAid Financial Services (FSP). All rights reserved. | Cape Town, South Africa | 1 Year in Business
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-quickaid-blue-100 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-quickaid-blue-100 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-quickaid-blue-100 hover:text-white text-sm transition-colors">
                Responsible Lending
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
