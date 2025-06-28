
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Shield, Clock, Users, Award, CheckCircle } from 'lucide-react';

const AboutPage = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted & Secure",
      description: "Your financial information is protected with bank-level security and encryption."
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description: "Get response in minutes, not days. Our streamlined process gets you funded quickly."
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

  const achievements = [
    "Over 10,000 satisfied customers",
    "R50 million+ in loans disbursed",
    "98% customer satisfaction rate",
    "Average 2-hour response time"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-quickaid-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-quickaid-blue-900 mb-6">
              About QuickAid Financial Services
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Your trusted financial partner, dedicated to providing accessible and transparent personal loan solutions across South Africa.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                alt="Professional team at QuickAid Financial Services" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-quickaid-blue-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                QuickAid Financial Services was founded with a simple mission: to make personal loans accessible, transparent, and affordable for everyone. We understand that financial emergencies don't wait for convenient times, which is why we've built a service that responds quickly to your needs.
              </p>
              <p className="text-gray-700 mb-6">
                As a registered credit provider licensed by the National Credit Regulator (NCR), we operate with the highest standards of integrity and professionalism. Our team of financial experts works tirelessly to ensure that every customer receives personalized service and competitive rates.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-quickaid-blue-900 mb-6">
              Why Choose QuickAid?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-quickaid-blue-900 mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To simplify and fast-track loans and make them more accessible, transparent, and affordable for our customers.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-quickaid-blue-900 mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  To provide accessible financial solutions that empower individuals to achieve their goals and improve their quality of life.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-quickaid-blue-900 mb-4">Our Values</h3>
                <p className="text-gray-700">
                  The core values on which our business rests are integrity, professionalism, transparency, customer-focus, and diligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
