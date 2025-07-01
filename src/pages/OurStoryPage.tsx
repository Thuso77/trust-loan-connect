
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const OurStoryPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-quickaid-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <img 
              src="/lovable-uploads/abeb5c36-ddb4-4182-a4c6-dc45ce76307f.png" 
              alt="QuickAid Financial Services" 
              className="h-16 w-auto mx-auto mb-8"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-quickaid-blue-900 mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Building trust through transparent financial solutions since our inception
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-quickaid-blue-900 mb-6">
                  Who We Are
                </h2>
                <p className="text-gray-700 mb-4">
                  QuickAid Financial Services was founded with a simple mission: to provide fast, 
                  reliable, and transparent personal loan solutions to South Africans who need 
                  financial assistance.
                </p>
                <p className="text-gray-700 mb-4">
                  We understand that life can be unpredictable, and sometimes you need quick 
                  access to funds for emergencies, debt consolidation, home improvements, or 
                  special occasions.
                </p>
                <p className="text-gray-700">
                  That's why we've streamlined our application process to be as simple and 
                  efficient as possible, while maintaining the highest standards of service 
                  and transparency.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Our team" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Our values" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-quickaid-blue-900 mb-6">
                  Our Values
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-quickaid-blue-800 mb-2">
                      Transparency
                    </h3>
                    <p className="text-gray-700">
                      No hidden fees, clear terms, and honest communication in every interaction.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-quickaid-blue-800 mb-2">
                      Speed
                    </h3>
                    <p className="text-gray-700">
                      Quick responses and fast processing to get you the funds you need when you need them.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-quickaid-blue-800 mb-2">
                      Trust
                    </h3>
                    <p className="text-gray-700">
                      Building long-term relationships based on reliability and excellent service.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-quickaid-blue-50 rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold text-quickaid-blue-900 mb-4">
                Ready to Experience Our Service?
              </h2>
              <p className="text-gray-700 mb-6">
                Join thousands of satisfied customers who trust QuickAid for their financial needs.
              </p>
              <Button 
                onClick={() => navigate('/application')}
                className="bg-gradient-quickaid hover:opacity-90 transition-opacity"
              >
                Apply for a Loan Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default OurStoryPage;
