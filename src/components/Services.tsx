import React from 'react';
import { Dices, Sofa, Wrench } from 'lucide-react';

const services = [
  {
    icon: <Dices className="w-12 h-12" />,
    title: "Curtain Sales & Installation",
    description: "Premium quality curtains with professional measurement and installation services."
  },
  {
    icon: <Sofa className="w-12 h-12" />,
    title: "Sofa Sales",
    description: "Wide range of modern and classic sofas to suit your home décor needs."
  },
  {
    icon: <Wrench className="w-12 h-12" />,
    title: "Furniture Renovation",
    description: "Expert furniture repair and renovation services to give your pieces a new life."
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive solutions for your home furnishing needs</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-600 mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}