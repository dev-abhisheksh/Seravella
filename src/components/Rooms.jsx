import React from 'react';
import { Sparkles, ArrowRight, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="rooms" className="py-20 md:py-28 bg-[#F5EDE0] text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
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
        </motion.div>

        {/* Room Cards Grid using Shadcn Components */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {roomsData.map((room) => (
            <motion.div key={room.id} variants={cardVariants} whileHover={{ y: -10 }}>
              <Card
                className={`overflow-hidden h-full flex flex-col justify-between relative group ${
                  room.popular ? 'border-[#C9A24B] ring-2 ring-[#C9A24B]/30 shadow-xl' : 'border-slate-200'
                }`}
              >
                {/* Badges */}
                {room.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="goldSolid">
                      <Sparkles className="w-3 h-3" /> Most Popular
                    </Badge>
                  </div>
                )}
                {room.luxuryBadge && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="default" className="border border-[#C9A24B] text-[#C9A24B]">
                      ★ Flagship Villa
                    </Badge>
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
                  
                  <div className="absolute bottom-3 left-3 text-white text-xs font-medium flex items-center gap-3">
                    <span className="bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20">
                      {room.size}
                    </span>
                    <span className="bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20 flex items-center gap-1">
                      <UserCheck className="w-3 h-3 text-[#C9A24B]" /> {room.occupancy}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <CardHeader className="pb-3">
                  <CardTitle className="group-hover:text-[#2C7DA0] transition-colors">
                    {room.name}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {room.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pb-4">
                  <div className="space-y-1.5 border-t border-b border-slate-100 py-3">
                    {room.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24B]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex-col items-stretch pt-0">
                  <div className="flex items-baseline justify-between mb-4 w-full">
                    <div>
                      <span className="text-xs text-slate-400 block font-sans uppercase tracking-wider">Starting at</span>
                      <span className="font-serif text-2xl font-bold text-[#0B2545]">{room.formattedPrice}</span>
                      <span className="text-xs text-slate-500 font-normal"> / night</span>
                    </div>
                  </div>

                  <Button
                    variant="default"
                    onClick={() => onSelectRoom(room)}
                    className="w-full hover:bg-[#C9A24B] hover:text-[#0B2545]"
                  >
                    <span>View Details & Book</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardFooter>

              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
