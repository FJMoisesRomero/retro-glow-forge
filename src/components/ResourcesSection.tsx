
import React from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Video, FileText, MessageSquare } from 'lucide-react';

const ResourcesSection: React.FC = () => {
  return (
    <section id="resources" className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 glow-text">
          Recursos para ayudarte a aprovechar al máximo RetroGlowForge
        </h2>
        
        {/* Resource buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <ResourceButton icon={<BookOpen className="h-5 w-5 mr-2" />} text="Documentación" />
          <ResourceButton icon={<Video className="h-5 w-5 mr-2" />} text="Video Tutoriales" />
          <ResourceButton icon={<FileText className="h-5 w-5 mr-2" />} text="Blog" />
          <ResourceButton icon={<MessageSquare className="h-5 w-5 mr-2" />} text="Foro de usuarios" />
        </div>
        
        {/* Resource cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ResourceCard
            title="RetroGlowForge Comunidad"
            iconClass="bg-blue-500"
          />
          <ResourceCard
            title="RetroGlowForge GitHub"
            iconClass="bg-purple-500"
          />
          <ResourceCard
            title="RetroGlowForge Docs"
            iconClass="bg-pink-500"
          />
          <ResourceCard
            title="RetroGlowForge Tutoriales"
            iconClass="bg-teal-500"
          />
        </div>
        
        {/* Final CTA */}
        <div className="mt-24 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3 glow-text">Comienza con RetroGlowForge</h3>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Crea letreros 3D retroiluminados impresionantes en minutos. Regístrate gratis y comienza a diseñar hoy mismo.
          </p>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-6 py-6 text-lg">
            Comienza Ahora
          </Button>
        </div>
      </div>
    </section>
  );
};

const ResourceButton: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => {
  return (
    <Button variant="outline" className="bg-gray-800/50 border-gray-700 hover:bg-gray-700 hover:border-gray-600 flex items-center">
      {icon}
      {text}
    </Button>
  );
};

const ResourceCard: React.FC<{ title: string; iconClass: string }> = ({ title, iconClass }) => {
  return (
    <div className="glass-card p-5 rounded-xl hover-scale">
      <div className={`w-10 h-10 rounded-lg ${iconClass} mb-3 flex items-center justify-center`}>
        <span className="text-white font-bold">R</span>
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <a href="#" className="text-blue-400 text-sm">Explorar →</a>
    </div>
  );
};

export default ResourcesSection;
