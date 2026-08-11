import React from 'react';
import { BedDouble, Utensils, Sparkles, Waves, SunMedium, PartyPopper, Clock, ChevronRight } from 'lucide-react';

export default function Services({ onSelectService }) {
  const servicesList = [
    {
      id: 'rooms',
      icon: BedDouble,
      title: 'Luxury Rooms & Suites',
      desc: 'Sumptuously furnished suites featuring ocean balconies, king-size beds, rainfall showers, and smart amenities.',
      bgImg: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'dining',
      icon: Utensils,
      title: 'Fine Dining & Bar',
      desc: 'Authentic Goan seafood, international gourmet cuisine, and handcrafted beachside cocktails curated by world chefs.',
      bgImg: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'spa',
      icon: Sparkles,
      title: 'Spa & Wellness',
      desc: 'Rejuvenate your senses with traditional Ayurvedic therapies, soothing ocean-breeze massages, and yoga pavilions.',
      bgImg: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'pool',
      icon: Waves,
      title: 'Infinity Swimming Pool',
      desc: 'Temperature-controlled oceanfront infinity pool complete with sunken sunbeds, jacuzzis, and poolside cocktail bar.',
      bgImg: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'beach',
      icon: SunMedium,
      title: 'Private Beach Access',
      desc: 'Direct private shore access with reserved luxury cabanas, towel service, beach volleyball, and water sports.',
      bgImg: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'events',
      icon: PartyPopper,
      title: 'Events & Weddings',
      desc: 'Dream beachfront wedding setups, corporate retreats, and private celebrations with full catering support.',
      bgImg: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'concierge',
      icon: Clock,
      title: '24/7 Butler & Room Service',
      desc: 'Round-the-clock personalized butler assistance, in-room gourmet dining, airport transfers, and private tours.',
      bgImg: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-[#0B2545] text-white relative overflow-hidden">
      {/* Decorative Subtle Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2C7DA0]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9A24B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#C9A24B] uppercase block mb-2 font-sans">
            Curated Experiences
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            World-Class Services & Amenities
          </h2>
          <div className="w-20 h-1 bg-[#C9A24B] mx-auto mb-6 rounded-full" />
          <p className="text-base sm:text-lg text-gray-300 font-light">
            Every detail at Seravella is thoughtfully crafted to pamper your senses and deliver an effortless 5-star luxury experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-[#133863]/60 backdrop-blur-md rounded-2xl overflow-hidden border border-[#C9A24B]/20 hover:border-[#C9A24B] transition-all duration-500 shadow-xl flex flex-col justify-between"
              >
                {/* Background Image Preview Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.bgImg}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#133863] via-transparent to-black/30" />
                  
                  {/* Service Icon Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-[#0B2545]/90 border border-[#C9A24B]/40 text-[#C9A24B] flex items-center justify-center shadow-lg group-hover:bg-[#C9A24B] group-hover:text-[#0B2545] transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-[#C9A24B] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 font-light">
                      {service.desc}
                    </p>
                  </div>

                  <a
                    href="#rooms"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#C9A24B] hover:text-white transition-colors uppercase tracking-wider group/link"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
