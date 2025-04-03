
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-24 px-6 md:px-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/10 to-background -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 glow-text">
          Encuentra un plan adecuado para ti
        </h2>
        
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Elige el plan perfecto para tus necesidades de diseño, con opciones para todos los presupuestos y volúmenes de proyectos.
        </p>
        
        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard 
            title="Básico"
            price="49"
            description="Por mes, facturación mensual"
            buttonText="Empieza con Básico"
            features={[
              "20 modelos por mes",
              "Biblioteca básica de plantillas",
              "Exportación en formatos estándar",
              "1GB de almacenamiento en la nube"
            ]}
          />
          
          <PricingCard 
            title="Profesional"
            price="79"
            description="Por mes, facturación anual"
            buttonText="Empieza con Profesional"
            features={[
              "Modelos ilimitados",
              "Biblioteca completa de plantillas",
              "Exportación en todos los formatos",
              "10GB de almacenamiento en la nube",
              "Soporte prioritario por email"
            ]}
            featured
          />
          
          <PricingCard 
            title="Empresarial"
            price="129"
            description="Por mes, facturación anual"
            buttonText="Empieza con Empresarial"
            features={[
              "Modelos ilimitados",
              "Biblioteca completa + exclusivos",
              "Exportación en todos los formatos",
              "50GB de almacenamiento en la nube",
              "API para integración con tus sistemas",
              "Soporte técnico dedicado 24/7"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

const PricingCard: React.FC<{ 
  title: string;
  price: string;
  description: string;
  buttonText: string;
  features: string[];
  featured?: boolean;
}> = ({ title, price, description, buttonText, features, featured = false }) => {
  return (
    <div className={`rounded-xl overflow-hidden hover-scale transition-all duration-500 ${
      featured ? 'glass-card gradient-border ring-1 ring-purple-500/20 relative z-10 my-4 md:-my-2' : 'glass-card'
    }`}>
      {featured && (
        <div className="absolute top-0 right-0 -mt-1 -mr-1">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-xs px-3 py-1 rounded-bl-lg rounded-tr-lg text-white font-medium">
            Más popular
          </div>
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        
        <div className="mb-4">
          <div className="flex items-baseline">
            <span className="text-3xl font-bold">$</span>
            <span className="text-5xl font-bold">{price}</span>
          </div>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
        
        <Button 
          className={`w-full ${
            featured 
              ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600' 
              : 'bg-gray-800 hover:bg-gray-700'
          } mb-6`}
        >
          {buttonText}
        </Button>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-500/20 mr-3 mt-0.5">
                <Check className="h-3 w-3 text-blue-400" />
              </div>
              <span className="text-sm text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingSection;
