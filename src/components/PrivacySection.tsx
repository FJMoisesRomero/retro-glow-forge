
import React from 'react';
import { Shield } from 'lucide-react';

const PrivacySection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 glow-text">
          Usa tus imágenes sin sacrificar la privacidad
        </h2>
        
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Encriptamos y protegemos tus archivos originales, para que no tengas que preocuparte mientras creas tus diseños.
        </p>
        
        {/* Image/demo area */}
        <div className="relative rounded-xl overflow-hidden max-w-2xl mx-auto aspect-video glass-card p-1">
          <div className="absolute top-3 left-3 flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          
          <div className="rounded-lg overflow-hidden h-full bg-gray-900 p-4">
            <div className="text-xs text-left text-gray-500 mb-2">// Visualización segura de modelos 3D</div>
            <div className="flex justify-center items-center h-full">
              <div className="w-32 h-32 relative">
                <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-pulse-glow blur-md"></div>
                <Shield className="w-full h-full text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
