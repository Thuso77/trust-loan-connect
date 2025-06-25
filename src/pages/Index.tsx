
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import ApplicationForm from '@/components/ApplicationForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ContactSection />
      <ApplicationForm />
      <Footer />
    </div>
  );
};

export default Index;
