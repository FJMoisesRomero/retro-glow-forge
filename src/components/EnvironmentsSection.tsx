
import React from 'react';
import { Layers, Check } from 'lucide-react';

const EnvironmentsSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 glow-text">
              Entornos de diseño estandarizados
            </h2>
            
            <p className="text-gray-400 mb-8">
              Crea letreros 3D perfectos en cualquier dispositivo, con consistencia garantizada en la visualización e impresión final de tus diseños.
            </p>
            
            <ul className="space-y-4">
              <FeatureListItem text="Pre-visualización realista" />
              <FeatureListItem text="Creación en la nube para mayor potencia" />
              <FeatureListItem text="Múltiples ángulos de vista" />
            </ul>
          </div>
          
          {/* Right column - Code/demo display */}
          <div className="relative rounded-xl overflow-hidden glass-card p-1">
            <div className="absolute top-3 left-3 flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            
            <div className="rounded-lg overflow-hidden h-full bg-gray-900 p-4">
              <div className="text-xs text-left text-gray-500 mb-2">// vista previa.js</div>
              
              <div className="flex flex-col h-full space-y-4">
                <div className="flex-1 flex flex-col space-y-3">
                  <CodeLine text="import { renderModel } from 'retroglow/core';" />
                  <CodeLine text="" />
                  <CodeLine text="// Renderiza el modelo 3D" />
                  <CodeLine text="const model = renderModel({" />
                  <CodeLine text="  texture: 'neon_glow'," indent={1} highlight />
                  <CodeLine text="  depth: 45," indent={1} />
                  <CodeLine text="  backlight: true," indent={1} highlight />
                  <CodeLine text="  intensity: 0.8," indent={1} />
                  <CodeLine text="  color: '#8b5cf6'" indent={1} highlight />
                  <CodeLine text="});" />
                </div>
                
                {/* Bottom terminal output */}
                <div className="bg-gray-950 rounded p-3 text-sm text-left">
                  <div className="flex items-center mb-1">
                    <Layers className="h-4 w-4 text-blue-400 mr-2" />
                    <span className="text-blue-400 text-xs">Generando modelo...</span>
                  </div>
                  <div className="text-green-400 text-xs">✓ Modelo generado con éxito</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureListItem: React.FC<{ text: string }> = ({ text }) => {
  return (
    <li className="flex items-start">
      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-500/20 mr-3 mt-0.5">
        <Check className="h-3.5 w-3.5 text-blue-400" />
      </div>
      <span className="text-gray-300">{text}</span>
    </li>
  );
};

const CodeLine: React.FC<{ 
  text: string; 
  indent?: number;
  highlight?: boolean;
}> = ({ text, indent = 0, highlight = false }) => {
  return (
    <div className={`text-left font-mono text-sm ${highlight ? 'text-blue-400' : 'text-gray-300'}`}>
      <span style={{ marginLeft: `${indent * 1.5}rem` }}>{text}</span>
    </div>
  );
};

export default EnvironmentsSection;
