import React from 'react';

const HoursAndLocation: React.FC = () => {
  return (
    <section id="hours-location" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3 tracking-tight text-black">Hours & Location</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-black">Opening Hours</h3>
            <div className="space-y-3 text-zinc-700">
              <div className="flex justify-between border-b border-zinc-200 pb-2">
                <span>Monday - Friday</span>
                <span className="font-medium text-black">8am - 6pm</span>
              </div>
              <div className="flex justify-between border-b border-zinc-200 pb-2">
                <span>Saturday</span>
                <span className="font-medium text-black">Closed</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium text-black">Closed</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mt-12 mb-4 text-black">Our Location</h3>
            <p className="text-zinc-700 font-medium">2553 Texas Ave S, College Station, TX 77840</p>
            <p className="text-zinc-600 mt-2">Located next door to Brown’s Shoes.</p>
            <p className="text-zinc-700 font-medium mt-4">Give us a call at <a href="tel:9796934400" className="text-black hover:underline">979-693-4400</a></p>
          </div>
          <div className="h-96 md:h-full w-full">
            <iframe
              src="https://www.google.com/maps?q=30.60586125908371,-96.30602698524862&z=17&output=embed&iwloc=q"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoursAndLocation;