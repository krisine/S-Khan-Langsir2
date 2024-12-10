import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { ContactButton } from './ContactButton';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-800">S Khan Langsir</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#services" className="text-gray-600 hover:text-gray-900">Services</a>
            <a href="#gallery" className="text-gray-600 hover:text-gray-900">Gallery</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ContactButton 
              icon={<Phone className="w-4 h-4" />}
              text="+60 123456789"
              href="tel:+60123456789"
            />
            <ContactButton 
              icon={<MessageCircle className="w-4 h-4" />}
              text="WhatsApp"
              href="https://wa.me/60123456789"
              variant="success"
            />
          </div>

          <button className="md:hidden z-50" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <a href="#home" className="text-xl text-gray-800" onClick={toggleMenu}>Home</a>
            <a href="#services" className="text-xl text-gray-800" onClick={toggleMenu}>Services</a>
            <a href="#gallery" className="text-xl text-gray-800" onClick={toggleMenu}>Gallery</a>
            <a href="#contact" className="text-xl text-gray-800" onClick={toggleMenu}>Contact</a>
            <div className="flex flex-col space-y-4 mt-8">
              <ContactButton 
                icon={<Phone className="w-4 h-4" />}
                text="+60 123456789"
                href="tel:+60123456789"
              />
              <ContactButton 
                icon={<MessageCircle className="w-4 h-4" />}
                text="WhatsApp"
                href="https://wa.me/60123456789"
                variant="success"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}