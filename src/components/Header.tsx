
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img 
              src="/lovable-uploads/abeb5c36-ddb4-4182-a4c6-dc45ce76307f.png" 
              alt="QuickAid Financial Services" 
              className="h-10 lg:h-14 w-auto cursor-pointer"
              onClick={() => navigate('/')}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8 flex-1 justify-center">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-quickaid-blue-600 transition-colors text-sm xl:text-base whitespace-nowrap"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('/our-story')}
              className="text-gray-700 hover:text-quickaid-blue-600 transition-colors text-sm xl:text-base whitespace-nowrap"
            >
              Our Story
            </button>
            <button 
              onClick={() => handleNavigation('/contact')}
              className="text-gray-700 hover:text-quickaid-blue-600 transition-colors text-sm xl:text-base whitespace-nowrap"
            >
              Contact Us
            </button>
          </nav>

          {/* Apply Now Button - Desktop */}
          <div className="hidden lg:block flex-shrink-0">
            <Button 
              onClick={handleApplyNow}
              className="bg-gradient-quickaid hover:opacity-90 transition-opacity text-sm xl:text-base px-3 xl:px-6 py-2 xl:py-3 whitespace-nowrap"
            >
              Apply For Loan
            </Button>
          </div>

          {/* Mobile/Tablet Navigation Toggle */}
          <div className="flex items-center space-x-2 lg:hidden">
            <Button 
              onClick={handleApplyNow}
              className="bg-gradient-quickaid hover:opacity-90 transition-opacity text-xs px-3 py-2 whitespace-nowrap"
            >
              Apply Now
            </Button>
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
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
                onClick={() => handleNavigation('/contact')}
                className="text-left text-gray-700 hover:text-quickaid-blue-600 transition-colors"
              >
                Contact Us
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
