import React from 'react';
import { Tag, Heart, Calendar, Plane, Gift, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export default function Offers({ onClaimOffer }) {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const offerVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="offers" className="py-20 md:py-28 bg-[#0B2545] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
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
        </motion.div>

        {/* Offers Grid with Shadcn Card styling */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {offers.map((offer) => {
            const Icon = offer.icon;
            return (
              <motion.div key={offer.id} variants={offerVariants} whileHover={{ y: -6 }}>
                <Card className="bg-[#133863]/80 border-[#C9A24B]/30 hover:border-[#C9A24B] text-white backdrop-blur-md h-full flex flex-col justify-between p-6 sm:p-8">
                  
                  <div>
                    {/* Header Row */}
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="gold">
                        <Tag className="w-3.5 h-3.5" /> {offer.tag}
                      </Badge>
                      <span className="font-serif text-2xl font-extrabold text-[#C9A24B]">
                        {offer.discount}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-[#0B2545] text-[#C9A24B] flex items-center justify-center border border-[#C9A24B]/30">
                        <Icon className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-white text-xl sm:text-2xl font-serif">
                        {offer.title}
                      </CardTitle>
                    </div>

                    <CardDescription className="text-gray-300 text-sm mb-4 font-light leading-relaxed">
                      {offer.desc}
                    </CardDescription>

                    <div className="flex items-center gap-2 text-xs text-amber-200/80 bg-[#0B2545]/60 p-2.5 rounded-lg border border-white/5 mb-6">
                      <CheckCircle className="w-4 h-4 text-[#C9A24B]" />
                      <span>{offer.validity}</span>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10 w-full">
                    <div className="text-xs text-gray-400">
                      Promo Code: <code className="text-[#C9A24B] font-mono font-bold bg-[#0B2545] px-2 py-1 rounded">{offer.code}</code>
                    </div>
                    <Button
                      variant="gold"
                      size="sm"
                      onClick={() => onClaimOffer(offer)}
                      className="w-full sm:w-auto"
                    >
                      Claim Offer
                    </Button>
                  </div>

                </Card>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
