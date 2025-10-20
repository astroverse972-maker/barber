import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-zinc-200">
      <div className="container mx-auto py-12 px-4 text-left">
        <div className="flex justify-start items-center space-x-3 mb-6">
          <img src="https://res.cloudinary.com/dubg7bfmv/image/upload/v1760956016/result_0_pmre58.png" alt="Mel's Barbershop Logo" className="h-16" />
          <span className="text-2xl font-bold tracking-tight text-black">Mel's Barbershop</span>
        </div>
        <p className="text-zinc-600 mb-1">2553 Texas Ave S, College Station, TX 77840</p>
        <p className="text-zinc-600 mb-6">
          <a href="tel:9796934400" className="hover:underline text-zinc-800">979-693-4400</a>
        </p>
        <div className="mt-8 border-t border-zinc-200 pt-8">
          <p className="text-sm text-zinc-500">&copy; {new Date().getFullYear()} Mel's Barbershop. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;