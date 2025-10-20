import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import HoursAndLocation from './components/HoursAndLocation.tsx';
import Services from './components/Services.tsx';
import OurWork from './components/OurWork.tsx';
import OurPurpose from './components/OurPurpose.tsx';
import Testimonials from './components/Testimonials.tsx';
import Booking from './components/Booking.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="bg-white text-zinc-800 font-sans">
      <Header />
      <main>
        <Hero />
        <HoursAndLocation />
        <Services />
        <OurWork />
        <OurPurpose />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </div>
  );
};

export default App;