import React from 'react';
import { Testimonial } from '../types.ts';
import { StarIcon } from './icons/StarIcon.tsx';

const testimonials: Testimonial[] = [
  {
    quote: "I've been going to Mel's for several years now. They always do a great job. All of the barbers are friendly and professional. I highly recommend them.",
    name: 'Michael Lee',
    rating: 5,
  },
  {
    quote: "Best barber shop in College Station. All the barbers are really good and very consistent. Great prices as well. It's the only place I will go.",
    name: 'Tyler J.',
    rating: 5,
  },
  {
    quote: "First time visiting today and Brittany did an awesome job! Very friendly and professional! My son loved his haircut! We will definitely be back!",
    name: 'Monica G.',
    rating: 5,
  },
];

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <StarIcon key={i} className={`h-5 w-5 ${i < rating ? 'text-black' : 'text-zinc-300'}`} />
  ));
};

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-zinc-50">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-3 tracking-tight text-black">What Our Clients Say</h2>
        <p className="text-lg text-zinc-600 mb-16">Your satisfaction is our priority.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-zinc-200">
              <div className="flex justify-center mb-4">{renderStars(testimonial.rating)}</div>
              <p className="text-zinc-700 mb-6 text-lg">"{testimonial.quote}"</p>
              <p className="font-bold text-md text-black">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;