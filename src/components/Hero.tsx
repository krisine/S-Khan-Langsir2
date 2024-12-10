import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { ContactButton } from './ContactButton';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-5rem)] flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl font-bold mb-6">
            Transform Your Space with Elegant Curtains & Furniture
          </h1>
          <p className="text-xl mb-8">
            Premium curtain installation, sofa sales, and furniture renovation services in Malaysia
          </p>
          <div className="flex flex-wrap gap-4">
            <ContactButton 
              icon={<Phone className="w-5 h-5" />}
              text="Call Now"
              href="tel:+60123456789"
            />
            <ContactButton 
              icon={<MessageCircle className="w-5 h-5" />}
              text="WhatsApp Us"
              href="https://wa.me/60123456789"
              variant="success"
            />
          </div>
        </div>
      </div>
    </section>
  );
}