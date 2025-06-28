
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
              Over time, we've established ourselves as a trusted and reliable financial partner 
              in Cape Town. We focus exclusively on personal loans with transparent terms 
              and competitive rates for our customers.
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
              <div className="flex items-center space-x-4">
                <img 
                  src="/lovable-uploads/cebf65b4-cd0e-4a17-8b61-1ee22da4ba3c.png" 
                  alt="EFT Secure" 
                  className="h-8 w-auto"
                />
                <img 
                  src="/lovable-uploads/c9828dc0-77f0-46af-ba72-11ef5db52ed1.png" 
                  alt="Mastercard" 
                  className="h-8 w-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* NCR Logo and Description */}
        <div className="flex flex-col md:flex-row justify-center items-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
          <img 
            src="/lovable-uploads/c69d2515-ef87-4e52-81e2-81506178e0c0.png" 
            alt="National Credit Regulator" 
            className="h-8 w-auto"
          />
          <p className="text-quickaid-blue-100 text-sm text-center md:text-left">
            A registered credit provider by National Credit Regulator
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-quickaid-blue-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-quickaid-blue-100 text-sm text-center md:text-left">
              © 2024 QuickAid Financial Services. All rights reserved. | Cape Town, South Africa
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6">
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
