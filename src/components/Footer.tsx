import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">S Khan Langsir</h3>
            <p className="text-gray-400">
              Your trusted partner for premium curtains, sofas, and furniture renovation services.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white">Gallery</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <a href="tel:+60123456789" className="flex items-center text-gray-400 hover:text-white">
                <Phone className="w-5 h-5 mr-2" />
                +60 123456789
              </a>
              <a href="https://wa.me/60123456789" className="flex items-center text-gray-400 hover:text-white">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} S Khan Langsir. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}