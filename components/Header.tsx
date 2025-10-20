import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-zinc-200">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a
          href="#"
          className="flex items-center space-x-3 cursor-pointer"
        >
          <img src="https://res.cloudinary.com/dubg7bfmv/image/upload/v1760956016/result_0_pmre58.png" alt="Mel's Barbershop Logo" className="h-16" />
          <span className="text-2xl font-bold tracking-tight text-black hidden sm:inline">Mel's Barbershop</span>
        </a>
        <nav>
          <a href="#booking" className="bg-black hover:bg-zinc-800 text-white font-bold py-3 px-6 rounded-full text-sm transition-colors">
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;