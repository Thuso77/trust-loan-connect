import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useNavigate } from 'react-router-dom';

const TestimonialsSection = () => {
  const navigate = useNavigate();
  
  const testimonials = [
    {
      name: "Nomsa Mthembu",
      location: "Cape Town, Western Cape",
      text: "QuickAid helped me get my personal loan quickly and easily. The process was smooth and professional.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      initials: "NM"
    },
    {
      name: "Thabo Mofele",
      location: "Khayelitsha, Western Cape", 
      text: "Ke fumane kalimo ya ka ka potlako ebile ba ne ba le mosa haholo.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      initials: "TM"
    },
    {
      name: "Zanele Ndaba",
      location: "Stellenbosch, Western Cape",
      text: "The team at QuickAid made everything simple for me. I got my personal loan without any stress.",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      initials: "ZN"
    },
    {
      name: "Sipho Dlamini",
      location: "Paarl, Western Cape",
      text: "Ngithole imali engiyidingayo kalula kakhulu ku-QuickAid.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
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
              
              <p className="text-gray-600 mb-4 italic text-sm">
                "{testimonial.text}"
              </p>
              
              <div className="border-t pt-4">
                <p className="text-sm text-quickaid-blue-600 font-medium">
                  Personal Loan
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
              Over 10,000 personal loans approved and counting!
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
