
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import InterestRateCalculator from '@/components/InterestRateCalculator';
import HowItWorksSection from '@/components/HowItWorksSection';
import ApplicationForm from '@/components/ApplicationForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <InterestRateCalculator />
      <HowItWorksSection />
      <ApplicationForm />
      <Footer />
    </div>
  );
};

export default Index;
