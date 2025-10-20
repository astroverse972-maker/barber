import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-[70vh] md:h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1621932643509-5d2f6243343a?q=80&w=2970&auto=format&fit=crop')" }}>
      <div className="relative z-10 p-8 max-w-3xl">
        <h2 className="text-5xl md:text-7xl font-bold mb-4 text-black tracking-tight">Clean Cuts, Rich Tradition – 60 Years of Excellence!</h2>
        <p className="text-lg md:text-xl mb-8 text-zinc-700">
          Honoring Generations with Every Trim, From Classic Styles to Modern Looks.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#booking" className="bg-black hover:bg-zinc-800 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors inline-block w-full sm:w-auto">
            Book an Appointment
          </a>
          <a href="tel:9796934400" className="bg-white hover:bg-zinc-200 text-black font-bold py-3 px-8 rounded-full text-lg transition-colors inline-block w-full sm:w-auto border border-zinc-300">
            Give Us A Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;