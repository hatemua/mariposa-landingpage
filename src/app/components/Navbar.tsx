import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { ButterflyLogo } from './ButterflyLogo';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Product', href: '#product' },
    { name: 'Components', href: '#components' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-navy/90 backdrop-blur-md border-b border-navy-light/50 py-2 lg:py-3' : 'bg-transparent py-3 lg:py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo Style: Orange butterfly + "mariposa" text */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <ButterflyLogo className="w-14 h-14 lg:w-24 lg:h-24 group-hover:scale-110 transition-transform" />
          {null}
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="https://calendly.com/hatemazaiez1/mariposa-demo" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-md text-sm font-semibold transition-all shadow-lg shadow-primary/20 active:scale-95 inline-flex items-center justify-center">
            Book a Demo
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy border-t border-navy-light overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/70 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a href="https://calendly.com/hatemazaiez1/mariposa-demo" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-6 py-3 rounded-md text-sm font-semibold w-full inline-flex items-center justify-center">
                Book a Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
