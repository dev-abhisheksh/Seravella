import React from 'react';
import { Wifi, Tv, Coffee, ShieldCheck, Sparkles, Eye, ArrowRight, UserCheck } from 'lucide-react';

export default function Rooms({ onSelectRoom }) {
  const roomsData = [
    {
      id: 'deluxe',
      name: 'Deluxe Garden Room',
      price: 12000,
      formattedPrice: '₹12,000',
      size: '42 sq.m',
      occupancy: '2 Guests',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
      description: 'Elegant tropical room surrounded by lush resort gardens with a private terrace and luxury bath.',
      features: ['Garden View Terrace', 'King Bed', 'Rainfall Shower', 'Complimentary Breakfast'],
    },
    {
      id: 'ocean-view',
      name: 'Ocean View Suite',
      price: 16000,
      formattedPrice: '₹16,000',
      size: '60 sq.m',
      occupancy: '2 - 3 Guests',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      description: 'Panoramas of the turquoise Arabian Sea from your expansive balcony, featuring custom teak furnishings.',
      features: ['180° Arabian Sea View', 'Private Jacuzzi Balcony', 'Butler Service', 'Free Mini Bar'],
      popular: true,
    },
    {
      id: 'executive',
      name: 'Executive Suite',
      price: 22000,
      formattedPrice: '₹22,000',
      size: '85 sq.m',
      occupancy: '3 - 4 Guests',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
      description: 'Spacious living salon, master bedroom, marble bathroom, and dedicated workspace facing the ocean.',
      features: ['Separate Living Salon', 'Marble Bathroom', 'Executive Lounge Access', 'Airport Transfer'],
    },
    {
      id: 'presidential',
      name: 'Presidential Ocean Villa',
      price: 35000,
      formattedPrice: '₹35,000+',
      size: '150 sq.m',
      occupancy: 'up to 6 Guests',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
      description: 'Ultra-exclusive private villa with a private infinity plunge pool, direct beach gateway, and 24/7 personal butler.',
      features: ['Private Plunge Pool', 'Direct Beach Gate', '24/7 Personal Chef & Butler', 'Helipad Access'],
      luxuryBadge: true,
    },
  ];

  return (
    <section id="rooms" className="py-20 md:py-28 bg-[#F5EDE0] text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#2C7DA0] uppercase block mb-2 font-sans">
            Accommodations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2545] mb-6">
            Luxury Rooms & Ocean Suites
          </h2>
          <div className="w-20 h-1 bg-[#C9A24B] mx-auto mb-6 rounded-full" />
          <p className="text-base sm:text-lg text-slate-600 font-light">
            Designed for serene rest, equipped with premium linen, panoramic views, and refined Goan coastal aesthetics.
          </p>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roomsData.map((room) => (
            <div
              key={room.id}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg border hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative group ${
                room.popular ? 'border-[#C9A24B] ring-2 ring-[#C9A24B]/30' : 'border-slate-200'
              }`}
            >
              {/* Badges */}
              {room.popular && (
                <div className="absolute top-4 right-4 z-10 bg-[#C9A24B] text-[#0B2545] text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Most Popular
                </div>
              )}
              {room.luxuryBadge && (
                <div className="absolute top-4 right-4 z-10 bg-[#0B2545] text-[#C9A24B] border border-[#C9A24B] text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  ★ Flagship Villa
                </div>
              )}

              {/* Room Image Container */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Size & Occupancy Tag */}
                <div className="absolute bottom-3 left-3 text-white text-xs font-medium flex items-center gap-3">
                  <span className="bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20">
                    {room.size}
                  </span>
                  <span className="bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20 flex items-center gap-1">
                    <UserCheck className="w-3 h-3 text-[#C9A24B]" /> {room.occupancy}
                  </span>
                </div>
              </div>

              {/* Room Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#0B2545] mb-2 group-hover:text-[#2C7DA0] transition-colors">
                    {room.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2 font-light">
                    {room.description}
                  </p>

                  {/* Amenities List */}
                  <div className="space-y-1.5 mb-6 border-t border-b border-slate-100 py-3">
                    {room.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24B]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price & Action */}
                <div>
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <span className="text-xs text-slate-400 block font-sans uppercase tracking-wider">Starting at</span>
                      <span className="font-serif text-2xl font-bold text-[#0B2545]">{room.formattedPrice}</span>
                      <span className="text-xs text-slate-500 font-normal"> / night</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectRoom(room)}
                    className="w-full bg-[#0B2545] hover:bg-[#C9A24B] text-white hover:text-[#0B2545] font-semibold text-sm py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>View Details & Book</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
