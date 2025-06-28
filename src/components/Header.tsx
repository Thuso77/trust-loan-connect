
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
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 lg:h-32">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/7b41a6b8-ced4-41be-9652-9569d306b406.png" 
              alt="QuickAid Financial Services" 
              className="h-16 lg:h-28 w-auto cursor-pointer"
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
              onClick={() => handleNavigation('/about')}
              className="text-gray-700 hover:text-quickaid-blue-600 transition-colors text-sm lg:text-base"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-quickaid-blue-600 transition-colors text-sm lg:text-base"
            >
              Services
            </button>
            <button 
              onClick={() => handleNavigation('/faq')}
              className="text-gray-700 hover:text-quickaid-blue-600 transition-colors text-sm lg:text-base"
            >
              FAQ
            </button>
            <button 
              onClick={() => handleNavigation('/blog')}
              className="text-gray-700 hover:text-quickaid-blue-600 transition-colors text-sm lg:text-base"
            >
              Blog
            </button>
          </nav>

          {/* Apply Now Button - Desktop */}
          <div className="hidden md:block">
            <Button 
              onClick={handleApplyNow}
              className="bg-gradient-quickaid hover:opacity-90 transition-opacity text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-3"
            >
              Apply Now
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
                onClick={() => handleNavigation('/about')}
                className="text-left text-gray-700 hover:text-quickaid-blue-600 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-quickaid-blue-600 transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => handleNavigation('/faq')}
                className="text-left text-gray-700 hover:text-quickaid-blue-600 transition-colors"
              >
                FAQ
              </button>
              <button 
                onClick={() => handleNavigation('/blog')}
                className="text-left text-gray-700 hover:text-quickaid-blue-600 transition-colors"
              >
                Blog
              </button>
              <Button 
                onClick={handleApplyNow}
                className="bg-gradient-quickaid hover:opacity-90 transition-opacity w-full"
              >
                Apply Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
