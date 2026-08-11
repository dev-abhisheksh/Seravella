import React, { useState } from 'react';
import { Tag, Heart, Calendar, Plane, Sparkles, Gift, CheckCircle } from 'lucide-react';

export default function Offers({ onClaimOffer }) {
  const [activeTab, setActiveTab] = useState('all');

  const offers = [
    {
      id: 'honeymoon',
      category: 'couples',
      title: 'Romantic Honeymoon Escape',
      discount: '25% OFF',
      tag: 'Most Popular',
      icon: Heart,
      desc: 'Includes romantic beachside candle-lit dinner, complimentary bottle of sparkling wine, and 60-min couples massage.',
      validity: 'Valid for stays of 3+ nights',
      code: 'HONEYMOON25',
    },
    {
      id: 'earlybird',
      category: 'advance',
      title: 'Early Bird Sun & Sea',
      discount: '20% OFF',
      tag: 'Best Value',
      icon: Calendar,
      desc: 'Book your Goan vacation 30 days in advance and enjoy guaranteed lowest direct rates plus complimentary breakfast buffet.',
      validity: 'Book 30+ days in advance',
      code: 'EARLYBIRD20',
    },
    {
      id: 'direct',
      category: 'perks',
      title: 'Direct Booking Privileges',
      discount: 'FREE Airport Pickup',
      tag: 'Exclusive Perk',
      icon: Plane,
      desc: 'Book directly on our site to receive complimentary AC airport transfers, 15% off spa treatments, and priority room upgrades.',
      validity: 'Exclusive to seravella.com',
      code: 'DIRECTSERAVELLA',
    },
    {
      id: 'weekend',
      category: 'stay',
      title: 'Extended Weekend Getaway',
      discount: '4th Night Free',
      tag: 'Stay Longer',
      icon: Gift,
      desc: 'Stay 3 consecutive nights in any Ocean Suite or Villa and get your 4th night completely complimentary.',
      validity: 'Valid Thursday to Monday stays',
      code: 'STAY4PAY3',
    },
  ];

  const filteredOffers = activeTab === 'all' ? offers : offers.filter(o => o.category === activeTab);

  return (
    <section id="offers" className="py-20 md:py-28 bg-[#0B2545] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#C9A24B] uppercase block mb-2 font-sans">
            Exclusive Packages
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Special Offers & Privileges
          </h2>
          <div className="w-20 h-1 bg-[#C9A24B] mx-auto mb-6 rounded-full" />
          <p className="text-base sm:text-lg text-gray-300 font-light">
            Enhance your luxury retreat in Goa with our handpicked promotional offers and direct booking bonuses.
          </p>
        </div>

        {/* Offers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredOffers.map((offer) => {
            const Icon = offer.icon;
            return (
              <div
                key={offer.id}
                className="bg-[#133863]/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-[#C9A24B]/30 hover:border-[#C9A24B] transition-all duration-300 shadow-xl flex flex-col justify-between relative group"
              >
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 bg-[#C9A24B]/20 text-[#C9A24B] border border-[#C9A24B]/40 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    <Tag className="w-3.5 h-3.5" /> {offer.tag}
                  </span>
                  <span className="font-serif text-2xl font-extrabold text-[#C9A24B]">
                    {offer.discount}
                  </span>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-[#0B2545] text-[#C9A24B] flex items-center justify-center border border-[#C9A24B]/30">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[#C9A24B] transition-colors">
                      {offer.title}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-300 leading-relaxed mb-4 font-light">
                    {offer.desc}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-amber-200/80 bg-[#0B2545]/60 p-2.5 rounded-lg border border-white/5">
                    <CheckCircle className="w-4 h-4 text-[#C9A24B]" />
                    <span>{offer.validity}</span>
                  </div>
                </div>

                {/* Claim Promo Button */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                  <div className="text-xs text-gray-400">
                    Promo Code: <code className="text-[#C9A24B] font-mono font-bold bg-[#0B2545] px-2 py-1 rounded">{offer.code}</code>
                  </div>
                  <button
                    onClick={() => onClaimOffer(offer)}
                    className="w-full sm:w-auto bg-[#C9A24B] hover:bg-[#A88232] text-[#0B2545] font-bold text-xs px-5 py-2.5 rounded-xl shadow-md hover:scale-105 transition-all cursor-pointer"
                  >
                    Claim Offer
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
