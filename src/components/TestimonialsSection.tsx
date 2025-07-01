import { Star } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useNavigate } from 'react-router-dom';

const TestimonialsSection = () => {
  const navigate = useNavigate();
  
  const testimonials = [
    {
      name: "Nomsa Mthembu",
      location: "Johannesburg, Gauteng",
      rating: 5,
      text: "QuickAid made getting a personal loan so easy! The process was fast, transparent, and the customer service was exceptional. I got approved within hours and had the money in my account the next day.",
      loan: "Personal Loan",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      initials: "NM"
    },
    {
      name: "Thabo Molefe",
      location: "Cape Town, Western Cape", 
      rating: 5,
      text: "As a small business owner, I needed quick funding to expand my operations. QuickAid understood my needs and provided a business loan with competitive rates. Highly recommended!",
      loan: "Business Loan",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      initials: "TM"
    },
    {
      name: "Zanele Ndaba",
      location: "Durban, KwaZulu-Natal",
      rating: 5,
      text: "I was nervous about applying for my first home loan, but the team at QuickAid guided me through every step. They made my dream of homeownership a reality!",
      loan: "Home Loan",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      initials: "ZN"
    },
    {
      name: "Sipho Dlamini",
      location: "Pretoria, Gauteng",
      rating: 5,
      text: "Excellent service! I needed an auto loan quickly, and QuickAid delivered. The entire process was smooth, and I drove away with my new car within a week.",
      loan: "Auto Loan",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      initials: "SD"
    }
  ];

  return (
    <section 
      id="testimonials" 
      className="py-20 bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.95), rgba(59, 130, 246, 0.95)), url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/abeb5c36-ddb4-4182-a4c6-dc45ce76307f.png" 
              alt="QuickAid Financial Services" 
              className="h-12 w-auto filter brightness-0 invert opacity-80"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-quickaid-blue-100 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with QuickAid.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Avatar className="w-12 h-12 mr-3">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback className="bg-quickaid-blue-500 text-white font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-quickaid-blue-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-4 italic text-sm">
                "{testimonial.text}"
              </p>
              
              <div className="border-t pt-4">
                <p className="text-sm text-quickaid-blue-600 font-medium">
                  {testimonial.loan}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white/10 rounded-lg p-6 max-w-lg mx-auto">
            <h3 className="text-xl font-semibold text-white mb-2">
              Join Our Happy Customers
            </h3>
            <p className="text-quickaid-blue-100 mb-4">
              Over 10,000 loans approved and counting!
            </p>
            <button 
              onClick={() => navigate('/application')}
              className="bg-white text-quickaid-blue-900 hover:bg-gray-100 transition-colors px-6 py-2 rounded-lg font-semibold"
            >
              Apply Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
