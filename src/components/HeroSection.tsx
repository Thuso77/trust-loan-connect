
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToApplication = () => {
    const element = document.getElementById('application');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.7), rgba(59, 130, 246, 0.7)), url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Quick & Reliable
            <span className="block text-quickaid-blue-200">Personal Loans</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Get the personal funding you need with our fast, transparent, and customer-focused loan services in South Africa. 
            Your financial goals are our priority.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={scrollToApplication}
              className="bg-white text-quickaid-blue-900 hover:bg-gray-100 transition-colors text-lg px-8 py-4"
            >
              Apply Now - Quick Process
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-white text-white hover:bg-white hover:text-quickaid-blue-900 transition-colors text-lg px-8 py-4"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
