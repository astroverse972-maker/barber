import React, { useState } from 'react';
import { Service } from '../types.ts';

// User's specified service list.
const services: Service[] = [
  { name: 'Regular Haircut', price: '$22' },
  { name: 'Buzz Haircut', price: '$20' },
  { name: 'First Responders', price: '$22' },
  { name: 'Corps Haircut', price: '$23' },
  { name: 'Flattops', price: '$25' },
  {
    name: 'Specialty Haircut',
    description: 'Includes: Drop Fade, Taper Fade, Burst Fade, Bald Fade, Tapered Mullet.',
    price: '$28',
  },
  { name: 'Long Haircut', price: '$26+' },
  { name: 'Goatee Trim', price: '$6' },
  { name: 'Beard Trim', price: '$11' },
  { name: 'Shampoo', price: '$6' },
  { name: 'Edgeup', price: '$6' },
  { name: 'Haircut w/ Sides Shaved*', price: '$28' },
];

const Services: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Determine which services to display
  const servicesToShow = isExpanded ? services : services.slice(0, 5);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="services" className="py-24 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-3 tracking-tight text-black">Our Services</h2>
          <p className="text-lg text-zinc-600 mb-16">*With Select Barbers Only</p>
        </div>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
          {/* Table Header */}
          <div className="flex justify-between items-center pb-4 border-b-2 border-zinc-200">
              <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Service</h3>
              <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Rate</h3>
          </div>
          
          {/* Table Body */}
          <div className="divide-y divide-zinc-200">
            {servicesToShow.map((service, index) => (
              <div key={index} className="flex justify-between items-start py-5">
                <div>
                  <h4 className="text-lg font-bold text-black">{service.name}</h4>
                  {service.description && (
                    <p className="text-zinc-600 text-sm mt-1 max-w-md">{service.description}</p>
                  )}
                </div>
                <p className="text-lg font-bold text-black ml-4 whitespace-nowrap">{service.price}</p>
              </div>
            ))}
          </div>
        </div>

        {services.length > 5 && (
          <div className="text-center mt-12">
            <button
              onClick={toggleExpansion}
              className="bg-black hover:bg-zinc-800 text-white font-bold py-3 px-8 rounded-full transition-colors text-sm flex items-center mx-auto"
            >
              {isExpanded ? 'Show Less' : 'Show All Services'}
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-2 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;