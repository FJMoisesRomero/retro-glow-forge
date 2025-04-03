
import React from 'react';
import { Cube, Layers, ImagePlus } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 md:px-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-950/20 to-background -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 glow-text">
          Enfócate en crear proyectos más impactantes
        </h2>
        
        {/* Feature circles */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-24">
          <FeatureCircle icon={<Cube size={30} />} />
          <FeatureCircle icon={<Layers size={30} />} classes="scale-110" />
          <FeatureCircle icon={<ImagePlus size={30} />} />
        </div>
        
        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            title="Listo para tus ideas"
            description="Una biblioteca de modelos 3D personalizables lista para transformar tu visión en un letrero impactante"
          />
          <FeatureCard 
            title="Adaptable a tu marca"
            description="Personaliza cada detalle para reflejar perfectamente la identidad de tu marca con opciones ilimitadas"
          />
          <FeatureCard 
            title="Rápido y eficiente"
            description="Genera modelos 3D para letreros en minutos, no días, gracias a nuestra avanzada tecnología de IA"
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCircle: React.FC<{ icon: React.ReactNode; classes?: string }> = ({ icon, classes = "" }) => {
  return (
    <div className={`relative w-32 h-32 rounded-full flex items-center justify-center ${classes}`}>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 animate-pulse-glow" />
      <div className="absolute inset-1 rounded-full bg-gray-900" />
      <div className="relative z-10 text-blue-400 animate-float">{icon}</div>
    </div>
  );
};

const FeatureCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <div className="glass-card p-6 rounded-xl hover-scale">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default FeaturesSection;
