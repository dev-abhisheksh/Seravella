import React, { useState, useEffect, useRef } from 'react';
import { Users, ChevronDown, Sparkles, MapPin, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { animate } from 'animejs';
import { DatePickerField } from './ui/date-picker';
import { Button } from './ui/button';

export default function Hero({ onOpenBooking }) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2 Guests');

  const handleSearch = (e) => {
    e.preventDefault();
    onOpenBooking({ checkIn, checkOut, guests });
  };

  const smoothScrollToAbout = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector('#about');
    if (!targetElement) return;

    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 90;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2000&q=80"
          alt="Seravella Luxury Resort Oceanfront View"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] via-[#0B2545]/60 to-black/40" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4 flex flex-col items-center">
        
        {/* Rating & Location Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-[#C9A24B]/40 px-4 py-1.5 rounded-full mb-6"
        >
          <div className="flex text-[#C9A24B]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#C9A24B]" />
            ))}
          </div>
          <span className="text-xs font-medium text-amber-100 tracking-wider flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#C9A24B]" /> Candolim Beach, Goa
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-wide leading-tight mb-4 drop-shadow-lg"
        >
          SERAVELLA
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#C9A24B] mb-4 font-light tracking-wide"
        >
          "Where the Ocean Feels Like Home"
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl font-light mb-8 leading-relaxed"
        >
          Experience unrivaled 5-star beachfront luxury in Goa. Indulge in private ocean-view villas, award-winning dining, and serene coastal tranquility.
        </motion.p>

        {/* Action CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto"
        >
          <Button
            variant="gold"
            size="lg"
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto text-[#0B2545]"
          >
            <Sparkles className="w-5 h-5 text-[#0B2545]" />
            <span>Book Your Stay</span>
          </Button>

          <a
            href="#about"
            onClick={smoothScrollToAbout}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-medium text-base px-8 py-3.5 rounded-full transition-all duration-300"
          >
            <span>Explore Resort</span>
            <ChevronDown className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Dark Luxury Availability Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="w-full max-w-4xl bg-[#0B2545]/90 backdrop-blur-xl rounded-3xl shadow-2xl p-4 sm:p-6 border border-[#C9A24B]/40 text-left text-white"
        >
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            
            {/* Styled Dark Check-In Date */}
            <DatePickerField
              id="hero-check-in"
              label="Check-In Date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
            />

            {/* Styled Dark Check-Out Date */}
            <DatePickerField
              id="hero-check-out"
              label="Check-Out Date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              min={checkIn || new Date().toISOString().split('T')[0]}
            />

            {/* Dark Guests Select */}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-xs font-semibold text-[#C9A24B] uppercase tracking-wider flex items-center gap-1.5 font-sans">
                <Users className="w-3.5 h-3.5 text-[#C9A24B] shrink-0" /> Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full min-h-[48px] bg-[#0B2545] hover:bg-[#133863] border border-[#C9A24B]/40 focus:border-[#C9A24B] focus:ring-2 focus:ring-[#C9A24B]/30 rounded-xl px-3.5 py-2.5 text-sm font-medium text-white transition-all duration-200 outline-none cursor-pointer"
              >
                <option value="1 Guest" className="bg-[#0B2545] text-white">1 Adult</option>
                <option value="2 Guests" className="bg-[#0B2545] text-white">2 Adults (Couple)</option>
                <option value="3 Guests" className="bg-[#0B2545] text-white">3 Adults</option>
                <option value="4+ Family" className="bg-[#0B2545] text-white">Family (2 Adults + Kids)</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="w-full">
              <Button type="submit" variant="gold" className="w-full min-h-[48px] text-sm text-[#0B2545]">
                <span>Check Rates</span>
              </Button>
            </div>

          </form>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        onClick={smoothScrollToAbout}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-1 text-white/60 hover:text-[#C9A24B] transition-colors cursor-pointer"
      >
        <span className="text-[10px] tracking-widest uppercase font-sans">Scroll</span>
        <ChevronDown className="w-4 h-4 text-[#C9A24B]" />
      </a>
    </section>
  );
}
