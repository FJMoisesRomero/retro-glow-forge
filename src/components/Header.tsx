
import React from 'react';
import { Button } from '@/components/ui/button';
import { Cube, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="py-4 px-6 md:px-12 relative z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Cube className="h-7 w-7 text-blue-400 animate-pulse-glow" />
          <span className="text-xl font-bold gradient-text">RetroGlowForge</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-1">
          <NavItems />
          <div className="ml-4 flex space-x-2">
            <Button variant="link" className="text-gray-400 hover:text-white">
              Sign in
            </Button>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
              Sign up for free
            </Button>
          </div>
        </div>
        
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-400" />
          ) : (
            <Menu className="h-6 w-6 text-gray-400" />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 py-4 glass-card rounded-lg animate-fade-in">
          <nav className="flex flex-col space-y-4 px-6">
            <a href="#features" className="text-gray-300 hover:text-white py-2">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white py-2">Pricing</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white py-2">Testimonials</a>
            <a href="#resources" className="text-gray-300 hover:text-white py-2">Resources</a>
            <div className="pt-4 flex flex-col space-y-3">
              <Button variant="outline" className="border-gray-700">Sign in</Button>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500">Sign up for free</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavItems: React.FC = () => {
  return (
    <nav className="flex items-center space-x-6">
      <a href="#features" className="text-gray-300 hover:text-white hover:glow-text transition-all">Features</a>
      <a href="#pricing" className="text-gray-300 hover:text-white hover:glow-text transition-all">Pricing</a>
      <a href="#testimonials" className="text-gray-300 hover:text-white hover:glow-text transition-all">Testimonials</a>
      <a href="#resources" className="text-gray-300 hover:text-white hover:glow-text transition-all">Resources</a>
    </nav>
  );
};

export default Header;
