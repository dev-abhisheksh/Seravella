import React, { useState } from 'react';
import { Calendar, Users, ChevronDown, Sparkles, MapPin, Star } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2 Guests');

  const handleSearch = (e) => {
    e.preventDefault();
    onOpenBooking({ checkIn, checkOut, guests });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2000&q=80"
          alt="Seravella Luxury Resort Oceanfront View"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] via-[#0B2545]/60 to-black/40" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4 flex flex-col items-center">
        {/* Rating & Location Tag */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-[#C9A24B]/40 px-4 py-1.5 rounded-full mb-6">
          <div className="flex text-[#C9A24B]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#C9A24B]" />
            ))}
          </div>
          <span className="text-xs font-medium text-amber-100 tracking-wider flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#C9A24B]" /> Candolim Beach, Goa
          </span>
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-wide leading-tight mb-4 drop-shadow-lg">
          SERAVELLA
        </h1>

        {/* Tagline */}
        <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#C9A24B] mb-4 font-light tracking-wide">
          "Where the Ocean Feels Like Home"
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl font-light mb-8 leading-relaxed">
          Experience unrivaled 5-star beachfront luxury in Goa. Indulge in private ocean-view villas, award-winning dining, and serene coastal tranquility.
        </p>

        {/* Action CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto">
          <button
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#C9A24B] hover:bg-[#A88232] text-[#0B2545] font-bold text-base px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-[#0B2545]" />
            <span>Book Your Stay</span>
          </button>
          <a
            href="#about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-medium text-base px-8 py-4 rounded-full transition-all duration-300"
          >
            <span>Explore Resort</span>
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>

        {/* Quick Booking Bar */}
        <div className="w-full max-w-4xl bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-4 sm:p-6 border border-[#C9A24B]/30 text-left text-slate-800">
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            {/* Check-In */}
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#2C7DA0]" /> Check-In
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2C7DA0]"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            {/* Check-Out */}
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#2C7DA0]" /> Check-Out
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2C7DA0]"
                min={checkIn || new Date().toISOString().split('T')[0]}
              />
            </div>

            {/* Guests */}
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#2C7DA0]" /> Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2C7DA0]"
              >
                <option value="1 Guest">1 Adult</option>
                <option value="2 Guests">2 Adults (Couple)</option>
                <option value="3 Guests">3 Adults</option>
                <option value="4+ Family">Family (2 Adults + Kids)</option>
              </select>
            </div>

            {/* Check Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#0B2545] hover:bg-[#133863] text-white font-semibold text-sm py-2.5 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Check Rates</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-1 text-white/60 animate-bounce">
        <span className="text-[10px] tracking-widest uppercase font-sans">Scroll</span>
        <ChevronDown className="w-4 h-4 text-[#C9A24B]" />
      </div>
    </section>
  );
}
