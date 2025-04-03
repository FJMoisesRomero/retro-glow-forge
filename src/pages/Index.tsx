
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import PrivacySection from '@/components/PrivacySection';
import EnvironmentsSection from '@/components/EnvironmentsSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ResourcesSection from '@/components/ResourcesSection';
import Footer from '@/components/Footer';
import Particles from '@/components/Particles';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Particles />
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PrivacySection />
        <EnvironmentsSection />
        <PricingSection />
        <TestimonialsSection />
        <ResourcesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
