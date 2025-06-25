
import { Mail, Phone, MapPin, CreditCard } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-quickaid-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/500e89ea-11dc-4f27-98af-4e0e71bbaf5d.png" 
              alt="QuickAid Financial Services" 
              className="h-12 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-quickaid-blue-100 mb-4">
              After 1 year of serving Cape Town residents, QuickAid Financial Services has become 
              a trusted FSP for fast, reliable, and transparent personal loan solutions. 
              Better rates and service than competitors like Lula.co.za.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">+27 21 123 4567</span>
              </div>
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
                <CreditCard className="w-6 h-6 text-quickaid-blue-100" />
                <span className="text-sm text-quickaid-blue-100">Visa Cards</span>
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
