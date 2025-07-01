import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleApplyNow = () => {
    navigate('/application');
    setIsMenuOpen(false);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
    setIsProductsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/abeb5c36-ddb4-4182-a4c6-dc45ce76307f.png" 
              alt="QuickAid Financial Services" 
              className="h-12 lg:h-16 w-auto cursor-pointer"
              onClick={() => navigate('/')}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-quickaid-blue-600 transition-colors text-sm lg:text-base"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('/our-story')}
              className="text-gray-700 hover:text-quickaid-blue-600 transition-colors text-sm lg:text-base"
            >
              Our Story
            </button>
            <div className="relative group">
              <button 
                className="text-gray-700 hover:text-quickaid-blue-600 transition-colors text-sm lg:text-base flex items-center"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                Our Products
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isProductsOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50"
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  <button 
                    onClick={() => handleNavigation('/our-products')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    All Products
                  </button>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Loans
                  </button>
                </div>
              )}
            </div>
            <button 
              onClick={() => handleNavigation('/contact')}
              className="text-gray-700 hover:text-quickaid-blue-600 transition-colors text-sm lg:text-base"
            >
              Contact Us
            </button>
          </nav>

          {/* Apply Now Button - Desktop */}
          <div className="hidden md:block">
            <Button 
              onClick={handleApplyNow}
              className="bg-gradient-quickaid hover:opacity-90 transition-opacity text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-3"
            >
              Apply For Loan
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-quickaid-blue-600 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('/our-story')}
                className="text-left text-gray-700 hover:text-quickaid-blue-600 transition-colors"
              >
                Our Story
              </button>
              <button 
                onClick={() => handleNavigation('/our-products')}
                className="text-left text-gray-700 hover:text-quickaid-blue-600 transition-colors"
              >
                Our Products
              </button>
              <button 
                onClick={() => handleNavigation('/contact')}
                className="text-left text-gray-700 hover:text-quickaid-blue-600 transition-colors"
              >
                Contact Us
              </button>
              <Button 
                onClick={handleApplyNow}
                className="bg-gradient-quickaid hover:opacity-90 transition-opacity w-full"
              >
                Apply For Loan
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
