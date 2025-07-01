
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Home, Car, Building, Briefcase, Gift } from 'lucide-react';

const OurProductsPage = () => {
  const navigate = useNavigate();

  const products = [
    {
      icon: CreditCard,
      title: "Personal Loans",
      description: "Quick personal loans for any purpose",
      features: ["R500 - R10,000", "Flexible repayment terms", "Quick approval", "No hidden fees"],
      color: "bg-blue-500"
    },
    {
      icon: Home,
      title: "Debt Consolidation",
      description: "Combine multiple debts into one manageable payment",
      features: ["Lower monthly payments", "Single payment", "Reduced interest", "Simplified finances"],
      color: "bg-green-500"
    },
    {
      icon: Car,
      title: "Emergency Loans",
      description: "Fast funding for unexpected expenses",
      features: ["Same-day approval", "Emergency processing", "24/7 support", "Instant decisions"],
      color: "bg-red-500"
    },
    {
      icon: Building,
      title: "Home Improvement",
      description: "Finance your home renovation projects",
      features: ["Competitive rates", "Extended terms", "Large amounts", "Flexible use"],
      color: "bg-yellow-500"
    },
    {
      icon: Briefcase,
      title: "Business Loans",
      description: "Support your business growth and expansion",
      features: ["Business funding", "Working capital", "Equipment finance", "Growth support"],
      color: "bg-purple-500"
    },
    {
      icon: Gift,
      title: "Special Occasion",
      description: "Fund your special moments and celebrations",
      features: ["Wedding finance", "Holiday funding", "Event planning", "Celebration loans"],
      color: "bg-pink-500"
    }
  ];

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
              Our Products
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Comprehensive loan solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 ${product.color} rounded-lg flex items-center justify-center mb-4`}>
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-quickaid-blue-900">
                    {product.title}
                  </CardTitle>
                  <CardDescription>
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-quickaid-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => navigate('/application')}
                    className="w-full mt-6 bg-gradient-quickaid hover:opacity-90 transition-opacity"
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-quickaid-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-quickaid-blue-900 mb-4">
              Not Sure Which Product is Right for You?
            </h2>
            <p className="text-gray-700 mb-6">
              Our financial advisors are here to help you choose the best loan option for your situation.
            </p>
            <Button 
              onClick={() => navigate('/application')}
              className="bg-gradient-quickaid hover:opacity-90 transition-opacity"
            >
              Get Personalized Advice
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default OurProductsPage;
