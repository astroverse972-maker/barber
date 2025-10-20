import React from 'react';

const barbers = [
  { name: 'Brittany', src: 'https://i.imgur.com/uLLpeIq.jpeg' },
  { name: 'Gaby', src: 'https://i.imgur.com/GWWiVEh.jpeg' },
  { name: 'Kim', src: 'https://i.imgur.com/Ep4MtRW.jpeg' },
  { name: 'Melissa', src: 'https://i.imgur.com/MvF6uqa.jpeg' },
  { name: 'Miranda', src: 'https://i.imgur.com/l4ZLxiK.jpeg' },
  { name: 'Jared', src: 'https://i.imgur.com/LbwOZCr.jpeg' },
];

const OurPurpose: React.FC = () => {
  return (
    <section id="purpose" className="py-24 bg-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-3 tracking-tight text-black">Our Purpose</h2>
        <p className="text-2xl font-bold text-zinc-800 mb-4">
          Specializing In Men’s And Boy’s Haircuts
        </p>
        <p className="max-w-3xl mx-auto text-lg text-zinc-600 mb-16">
          We take the time to understand what you’re looking for and pride ourselves on providing top-quality haircuts in a clean, family-friendly setting.
        </p>
        
        <div className="flex justify-center space-x-12 md:space-x-24 mb-20">
          <div className="text-center">
            <p className="text-5xl font-black text-black">6</p>
            <p className="text-lg text-zinc-600 mt-2 font-medium uppercase tracking-wider">SKILLED, CERTIFIED BARBERS</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-black text-black">75k+</p>
            <p className="text-lg text-zinc-600 mt-2 font-medium uppercase tracking-wider">Happy Clients</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {barbers.map((barber) => (
            <div key={barber.name} className="text-center">
              <div className="aspect-square w-full overflow-hidden rounded-2xl mb-4 shadow-md">
                <img src={barber.src} alt={barber.name} className="w-full h-full object-cover object-center" />
              </div>
              <p className="font-bold text-lg text-black">{barber.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPurpose;