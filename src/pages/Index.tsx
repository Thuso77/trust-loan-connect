
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import InterestRateCalculator from '@/components/InterestRateCalculator';
import HowItWorksSection from '@/components/HowItWorksSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <InterestRateCalculator />
      <HowItWorksSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
