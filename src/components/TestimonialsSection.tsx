
import React from 'react';

type Testimonial = {
  id: number;
  name: string;
  company: string;
  image: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Méndez",
    company: "Señalética Pro",
    image: "/placeholder.svg",
    quote: "RetroGlowForge ha transformado nuestra forma de diseñar. Ahora creamos letreros 3D que realmente impactan y atraen a nuestros clientes."
  },
  {
    id: 2,
    name: "Laura Sánchez",
    company: "Visual Impact",
    image: "/placeholder.svg",
    quote: "La facilidad de uso junto con los resultados profesionales que logramos con RetroGlowForge es incomparable. Ha revolucionado nuestra producción."
  },
  {
    id: 3,
    name: "Javier Rodríguez",
    company: "Creative Signs",
    image: "/placeholder.svg",
    quote: "Nuestros clientes quedan fascinados con los letreros retroiluminados que diseñamos gracias a esta plataforma. El efecto es simplemente espectacular."
  },
  {
    id: 4,
    name: "María González",
    company: "Luminous Design",
    image: "/placeholder.svg",
    quote: "Lo que más me gusta es la rapidez. Antes dedicábamos días a crear un modelo 3D para nuestros letreros, ahora lo hacemos en minutos con excelente calidad."
  },
  {
    id: 5,
    name: "David Herrera",
    company: "Neon Concepts",
    image: "/placeholder.svg",
    quote: "RetroGlowForge nos ha permitido expandir nuestra oferta con diseños personalizados que antes eran imposibles de lograr. Nuestros ingresos han aumentado un 40%."
  },
  {
    id: 6,
    name: "Sofía Torres",
    company: "Bright Signs",
    image: "/placeholder.svg",
    quote: "La biblioteca de plantillas es extensa y la personalización es intuitiva. RetroGlowForge es esencial para cualquier negocio de señalización moderna."
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 glow-text">
          ¿Suena demasiado bueno? Escucha lo que nuestros clientes dicen
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="glass-card p-6 rounded-xl hover-scale">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gradient-to-r from-blue-500 to-purple-500">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-medium text-white">{testimonial.name}</h4>
          <p className="text-sm text-blue-400">{testimonial.company}</p>
        </div>
      </div>
      
      <p className="text-gray-300 text-sm">{testimonial.quote}</p>
      
      <div className="mt-4 text-blue-400 text-sm">Ver más →</div>
    </div>
  );
};

export default TestimonialsSection;
