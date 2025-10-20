import React from 'react';

const galleryImages = [
  {
    src: 'https://res.cloudinary.com/dubg7bfmv/image/upload/v1760957641/530204453_1353851593409493_8680618693309683006_n_lvisor.jpg',
    alt: 'A clean and modern haircut with a fade.',
  },
  {
    src: 'https://res.cloudinary.com/dubg7bfmv/image/upload/v1760957638/530366935_1353851536742832_429918737487573082_n_vcop0d.jpg',
    alt: 'A fresh haircut style for a young man.',
  },
  {
    src: 'https://res.cloudinary.com/dubg7bfmv/image/upload/v1760957637/530444535_1353989876728998_5172145980939833600_n_ueo1ec.jpg',
    alt: 'A side profile of a stylish mens haircut.',
  },
];

const OurWork: React.FC = () => {
  return (
    <section id="our-work" className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-3 tracking-tight text-black">Our Work</h2>
        <p className="text-lg text-zinc-600 mb-16">Crafting confidence, one cut at a time.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-md bg-zinc-100">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-contain object-center transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;