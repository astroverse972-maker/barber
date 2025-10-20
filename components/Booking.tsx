import React from 'react';

const barbers = ['Brittany', 'Gaby', 'Kim', 'Melissa', 'Miranda', 'Jared', 'Any Barber'];

const Booking: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your request! We will contact you shortly to confirm your appointment.');
  };

  return (
    <section id="booking" className="py-24 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-3 tracking-tight text-black">Book Your Appointment</h2>
          <p className="text-lg text-zinc-600 mb-12">
            Schedule your next visit with us online. Quick, easy, and convenient.
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-white p-8 sm:p-10 rounded-2xl border border-zinc-200 shadow-sm">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-zinc-700 mb-2">Full Name</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-zinc-700 mb-2">Phone Number</label>
                <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="barber" className="block text-sm font-bold text-zinc-700 mb-2">Preferred Barber</label>
                <select id="barber" name="barber" required className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black appearance-none">
                  {barbers.map(barber => (
                    <option key={barber} value={barber}>{barber}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="datetime" className="block text-sm font-bold text-zinc-700 mb-2">Preferred Date & Time</label>
                <input type="datetime-local" id="datetime" name="datetime" required className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
              </div>
            </div>
            <div className="mt-8">
              <button type="submit" className="w-full bg-black hover:bg-zinc-800 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors">
                Request Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;