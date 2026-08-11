import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: 'Dr. Ananya & Vikram Roy',
      location: 'Mumbai, India',
      stay: 'Honeymoon in Ocean Suite',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      comment: 'Seravella exceeded every expectation. Waking up to the ocean sound, candlelight dinners on Candolim beach, and the warm hospitality made our honeymoon unforgettable.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Marcus & Sophia Vance',
      location: 'London, UK',
      stay: 'Presidential Villa Stay',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      comment: 'The private plunge pool villa with direct beach gate is pure paradise! World-class seafood dining and butler service that rivals 5-star resorts in the Maldives.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Rajesh & Meera Agarwal',
      location: 'Bengaluru, India',
      stay: 'Family Vacation',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      comment: 'An ideal retreat for families. Safe private beach access, immaculate infinity pool, and kid-friendly dining. The staff treated us like royalty throughout our stay.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0B2545] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#C9A24B] uppercase block mb-2 font-sans">
            Guest Testimonials
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Stories from Our Guests
          </h2>
          <div className="w-20 h-1 bg-[#C9A24B] mx-auto mb-6 rounded-full" />
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#133863]/60 backdrop-blur-md rounded-2xl p-8 border border-[#C9A24B]/20 hover:border-[#C9A24B] transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                <Quote className="w-10 h-10 text-[#C9A24B]/40 mb-4" />
                
                {/* Rating */}
                <div className="flex text-[#C9A24B] mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C9A24B]" />
                  ))}
                </div>

                <p className="text-sm text-gray-200 leading-relaxed font-light italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#C9A24B]"
                />
                <div>
                  <h3 className="font-serif font-bold text-white text-base">{rev.name}</h3>
                  <span className="text-xs text-[#C9A24B] block">{rev.stay}</span>
                  <span className="text-[11px] text-gray-400 block">{rev.location}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
