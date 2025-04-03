
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-10 pb-24 px-6 md:px-12 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />
      
      {/* Hero content */}
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm mb-6">
          <span className="mr-2 text-blue-400">✦</span>
          <span className="text-gray-300">Revolucionando letreros retroiluminados</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl glow-text">
          Donde el mundo crea <span className="gradient-text">modelos 3D</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl">
          Obtén modelos 3D impresionantes listos para imprimir, o personalízalos según tus necesidades para crear letreros retroiluminados únicos y cautivadores.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-6 text-lg">
            Empieza gratis ahora
          </Button>
          <Button variant="outline" className="border-gray-700 hover:bg-gray-800 text-gray-300 px-6 py-6 text-lg">
            Explorar demos <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        {/* Brands */}
        <div className="pt-12 border-t border-gray-800">
          <p className="text-sm text-gray-500 mb-6">CONFIADO POR GRANDES MARCAS</p>
          <div className="flex flex-wrap gap-8 justify-between items-center opacity-60">
            <div className="text-gray-500 text-lg font-semibold">facebook</div>
            <div className="text-gray-500 text-lg font-semibold">tinder</div>
            <div className="text-gray-500 text-lg font-semibold">airbnb</div>
            <div className="text-gray-500 text-lg font-semibold">HubSpot</div>
            <div className="text-gray-500 text-lg font-semibold">amazon</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
