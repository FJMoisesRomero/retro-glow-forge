import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  useEffect(() => {
    const gradientAnimation = `
      @keyframes borderGlow {
        0% { background-position: 0 0; }
        50% { background-position: 400% 0; }
        100% { background-position: 0 0; }
      }

      .animate-border-glow {
        position: relative;
      }

      .animate-border-glow::before,
      .animate-border-glow::after {
        content: '';
        position: absolute;
        left: -2px;
        top: -2px;
        background: linear-gradient(45deg, 
          #3b82f6,
          #ec4899,
          #2563eb,
          #db2777,
          #1d4ed8,
          #ec4899,
          #3b82f6
        );
        background-size: 400%;
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        z-index: -1;
        animation: borderGlow 20s linear infinite;
        border-radius: 9999px;
      }

      .animate-border-glow::after {
        filter: blur(12px);
        opacity: 0.6;
      }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.textContent = gradientAnimation;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <section className="relative pt-10 pb-24 px-6 md:px-12 overflow-hidden mt-10">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />
      
      {/* Hero content */}
      <div className="max-w-6xl mx-auto relative">
        
        <div className="animate-border-glow inline-flex items-center px-3 py-1.5 rounded-full relative z-10">
          <div className="absolute inset-0 rounded-full bg-black/90"></div>
          <span className="mr-2 text-blue-400 relative z-10">✦</span>
          <span className="text-gray-300 relative z-10">Revolucionando letreros retroiluminados</span>
        </div>
        <img src="https://us.123rf.com/450wm/itana/itana1706/itana170600103/80395056-el-fondo-colorido-de-la-flecha-de-neón-vector-el-ejemplo-abstracto.jpg" alt="Fondo de neón abstracto" className="absolute top-0 right-0 w-1/2 h-auto hidden sm:block" style={{ transform: 'scaleX(-1)' }} />
        <h1 className="text-4xl md:text-7xl font-bold mb-6 max-w-3xl text-left">
          <span className="neon-glow neon-teal block mb-1">Donde el</span>
          <span className="neon-glow neon-blue block mb-1">mundo crea</span>
          <span className="neon-glow neon-pink relative">modelos 3D</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl text-left">
          Obtén modelos 3D impresionantes listos para imprimir, o personalízalos según tus necesidades para crear letreros retroiluminados únicos y cautivadores.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-6 text-lg hover:translate-y-[-2px] transition duration-300">
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
