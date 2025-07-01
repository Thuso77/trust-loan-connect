
import { useNavigate } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useEffect, useRef } from 'react';

const TestimonialsSection = () => {
  const navigate = useNavigate();
  const carouselRef = useRef<any>(null);
  
  const testimonials = [
    {
      name: "Nomsa Mthembu",
      location: "Cape Town, Western Cape",
      text: "I wasn't sure where to start, but QuickAid guided me through every step. Within a few hours, the money was in my account. Impressive!",
      initials: "NM"
    },
    {
      name: "Thabo Mofele",
      location: "Khayelitsha, Western Cape", 
      text: "Kadimo ya ka e tlile ka lebelo. Basebetsi ba ba na le kutlwisiso, ba thusa ka pelo e phethahetseng.",
      initials: "TM"
    },
    {
      name: "Zanele Ndaba",
      location: "Khayelitsha, Western Cape",
      text: "Ndandiphoxekile yindlela endandizama ngayo ukufumana imali. Kodwa iQuickAid indincedile ngendlela endingazange ndiyicinge. Inkqubo yakhawuleza, kwaye bathetha nam ngobubele.",
      initials: "ZN"
    },
    {
      name: "Sipho Dlamini",
      location: "Paarl, Western Cape",
      text: "Ngabiza, bangisiza. Angizange ngikhokhe isikhathi sami—imali ingene masisha. Bayabonga kakhulu.",
      initials: "SD"
    },
    {
      name: "Aunty Cheryl Adams",
      location: "Mitchells Plain, Western Cape",
      text: "Ek sê, QuickAid was daar vir my toe ek regtig vasgehaak was. Hulle't nie veel gevra nie—net reguit hulp. Nou's ek reg, dankie tog!",
      initials: "CA"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current?.api) {
        carouselRef.current.api.scrollNext();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

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

        <div className="relative max-w-4xl mx-auto">
          <Carousel
            ref={carouselRef}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow h-full">
                    <div className="mb-4">
                      <h4 className="font-semibold text-quickaid-blue-900 mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.location}
                      </p>
                    </div>
                    
                    <p className="text-gray-600 italic text-sm">
                      "{testimonial.text}"
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/20 hover:bg-white/30 text-white border-white/30" />
            <CarouselNext className="right-4 bg-white/20 hover:bg-white/30 text-white border-white/30" />
          </Carousel>
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
