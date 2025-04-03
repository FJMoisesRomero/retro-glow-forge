
import React, { useEffect, useRef } from 'react';

type ParticlesProps = {
  className?: string;
};

const Particles: React.FC<ParticlesProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      glowRadius: number;
      pulseDirection: number;
      originalSize: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.originalSize = Math.random() * 4 + 1;
        this.size = this.originalSize;
        this.glowRadius = this.size * 5;
        this.speedX = Math.random() * 0.8 - 0.4;
        this.speedY = Math.random() * 0.8 - 0.4;
        this.pulseDirection = 1;
        
        // Create a gradient from purple to blue to pink
        const colors = [
          'rgba(139, 92, 246, 0.9)', // Purple
          'rgba(59, 130, 246, 0.9)', // Blue
          'rgba(236, 72, 153, 0.9)'  // Pink
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Pulse size effect
        this.size += 0.03 * this.pulseDirection;
        if (this.size > this.originalSize * 1.3 || this.size < this.originalSize * 0.7) {
          this.pulseDirection *= -1;
        }
        
        this.glowRadius = this.size * 5;
        
        // Bounce off edges with some padding
        const padding = 20;
        if (this.x > canvas.width - padding || this.x < padding) {
          this.speedX = -this.speedX;
        }
        
        if (this.y > canvas.height - padding || this.y < padding) {
          this.speedY = -this.speedY;
        }
      }
      
      draw() {
        if (!ctx) return;
        
        // Draw glow
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.glowRadius
        );
        
        const colorWithoutAlpha = this.color.replace(/[^,]+(?=\))/, '0.7');
        const colorMostTransparent = this.color.replace(/[^,]+(?=\))/, '0');
        
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(0.4, colorWithoutAlpha);
        gradient.addColorStop(1, colorMostTransparent);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.glowRadius, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw core
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Create particles - more for a richer effect
    const particles: Particle[] = [];
    const particleCount = Math.min(70, Math.floor(window.innerWidth * window.innerHeight / 15000));
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Animation loop
    const animate = () => {
      // Use a lower alpha for the clear to create trails
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (const particle of particles) {
        particle.update();
        particle.draw();
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={`fixed top-0 left-0 w-full h-full -z-10 opacity-40 ${className || ''}`}
    />
  );
};

export default Particles;
