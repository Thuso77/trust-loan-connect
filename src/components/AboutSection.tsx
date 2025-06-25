
import { Shield, Clock, Users, Award } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted & Secure",
      description: "Your financial information is protected with bank-level security and encryption."
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description: "Get approved in minutes, not days. Our streamlined process gets you funded quickly."
    },
    {
      icon: Users,
      title: "Personal Service",
      description: "Dedicated loan specialists guide you through every step of the process."
    },
    {
      icon: Award,
      title: "Competitive Rates",
      description: "We offer some of the most competitive interest rates in the market."
    }
  ];

  return (
    <section 
      id="about" 
      className="py-20 bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-quickaid-blue-900 mb-6">
            About QuickAid Financial Services
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            After 1 year in business, we've established ourselves as a trusted financial partner in Cape Town. 
            Unlike competitors like Lula.co.za, we focus exclusively on personal loans with transparent terms 
            and competitive rates for South African customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-quickaid rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-quickaid-blue-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-quickaid-blue-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 mb-4">
                To provide accessible financial solutions that empower individuals to 
                achieve their goals while maintaining the highest standards of integrity and 
                customer service.
              </p>
              <p className="text-gray-700">
                After 1 year of serving Cape Town residents, we've built a reputation for 
                fast, fair, and transparent personal lending.
              </p>
            </div>
            <div className="bg-gradient-quickaid rounded-lg p-6 text-white">
              <h4 className="text-xl font-semibold mb-4">Why Choose Us?</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Licensed FSP in Cape Town
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  1 year of proven service
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Better rates than Lula.co.za
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Transparent terms and conditions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
