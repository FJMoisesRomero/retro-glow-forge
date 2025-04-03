import React from 'react';
import { Button } from '@/components/ui/button';
import { Box, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navigation = [
    { name: 'Características', href: '#features' },
    { name: 'Precios', href: '#pricing' },
    { name: 'Documentación', href: '#docs' },
    { name: 'Sobre Nosotros', href: '#about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-blur:bg-background/60">
      <div className="container mx-auto px-6 flex h-14 items-center">
        <div className="mr-4 flex items-center space-x-2">
          <Box className="h-6 w-6 text-blue-400" />
          <span className="hidden font-bold sm:inline-block gradient-text">RetroGlowForge</span>
        </div>

        {/* Desktop navigation */}
        <div className="flex-1 hidden md:flex">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative transition-colors hover:text-foreground/80 text-foreground/60 py-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:transition-all after:duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" className="hidden md:flex">
              Iniciar Sesión
            </Button>
            <Button className="hidden md:flex bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
              Empezar Gratis
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 z-50">
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Box className="h-6 w-6 text-blue-400" />
                  <span className="font-bold gradient-text">RetroGlowForge</span>
                </div>
                <Button
                  variant="ghost"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <div className="mt-6 flow-root">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground/60 hover:bg-accent"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="space-y-2 border-t border-gray-900/10 pt-4">
                  <Button variant="ghost" className="w-full justify-start">
                    Iniciar Sesión
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                    Empezar Gratis
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
