
import { CreditCard, Home, Car, Briefcase } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: CreditCard,
      title: "Personal Loans",
      description: "Flexible personal loans for any purpose - debt consolidation, home improvements, or unexpected expenses.",
      features: ["Up to $50,000", "Competitive rates", "Quick approval", "Flexible terms"]
    },
    {
      icon: Home,
      title: "Home Loans",
      description: "Make your dream home a reality with our comprehensive home loan solutions.",
      features: ["First-time buyer programs", "Refinancing options", "Expert guidance", "Competitive rates"]
    },
    {
      icon: Car,
      title: "Auto Loans",
      description: "Drive away with confidence with our auto financing options for new and used vehicles.",
      features: ["New & used cars", "Flexible terms", "Fast approval", "Direct dealer relationships"]
    },
    {
      icon: Briefcase,
      title: "Business Loans",
      description: "Fuel your business growth with our tailored business financing solutions.",
      features: ["Working capital", "Equipment financing", "Business expansion", "Startup funding"]
    }
  ];

  return (
    <section 
      id="services" 
      className="py-20 bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.95), rgba(59, 130, 246, 0.95)), url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Loan Products
          </h2>
          <p className="text-lg text-quickaid-blue-100 max-w-3xl mx-auto">
            Whether you're looking to consolidate debt, buy a home, finance a vehicle, or grow your business, 
            we have the right loan solution for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-quickaid rounded-full mb-4">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-quickaid-blue-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-quickaid-blue-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
