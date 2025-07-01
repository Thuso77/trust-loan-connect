
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Clock } from 'lucide-react';

const BranchesPage = () => {
  const branches = [
    {
      city: "Cape Town",
      address: "123 Main Street, Cape Town Central, 8001",
      phone: "+27 21 123 4567",
      hours: "Monday - Friday: 8:00 AM - 5:00 PM, Saturday: 9:00 AM - 2:00 PM"
    },
    {
      city: "Johannesburg",
      address: "456 Commissioner Street, Johannesburg CBD, 2001",
      phone: "+27 11 234 5678",
      hours: "Monday - Friday: 8:00 AM - 5:00 PM, Saturday: 9:00 AM - 2:00 PM"
    },
    {
      city: "Durban",
      address: "789 West Street, Durban Central, 4001",
      phone: "+27 31 345 6789",
      hours: "Monday - Friday: 8:00 AM - 5:00 PM, Saturday: 9:00 AM - 2:00 PM"
    },
    {
      city: "Pretoria",
      address: "321 Church Street, Pretoria Central, 0002",
      phone: "+27 12 456 7890",
      hours: "Monday - Friday: 8:00 AM - 5:00 PM, Saturday: 9:00 AM - 2:00 PM"
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
              Our Branches
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Visit us at any of our convenient locations across South Africa
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {branches.map((branch, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-quickaid-blue-900 flex items-center">
                    <MapPin className="w-6 h-6 mr-2 text-quickaid-blue-500" />
                    {branch.city}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 text-gray-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{branch.address}</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-gray-500" />
                    <p className="text-gray-700">{branch.phone}</p>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 mr-3 text-gray-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{branch.hours}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-quickaid-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-quickaid-blue-900 mb-4">
              Can't Visit a Branch?
            </h2>
            <p className="text-gray-700 mb-6">
              Apply online from the comfort of your home. Our digital application process is fast, secure, and available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/application"
                className="bg-quickaid-blue-600 hover:bg-quickaid-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Apply Online
              </a>
              <a 
                href={`https://wa.me/27614749115?text=${encodeURIComponent("Hi, I'd like to know more about your branch locations.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BranchesPage;
