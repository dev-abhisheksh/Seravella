import React from 'react';
import { Waves, Heart, HeartHandshake, Briefcase, Award, ShieldCheck, Sun } from 'lucide-react';

export default function About() {
  const targetAudience = [
    { icon: Waves, title: 'Beach Lovers', desc: 'Direct steps to Candolim beach soft golden sands & panoramic ocean views.' },
    { icon: Heart, title: 'Couples & Honeymoons', desc: 'Romantic candle-lit dinners by the shore, private plunge pools & couples spa sessions.' },
    { icon: HeartHandshake, title: 'Families', desc: 'Spacious interconnecting suites, kid-friendly pools, and curated Goan cultural tours.' },
    { icon: Briefcase, title: 'Business Travellers', desc: 'High-speed Fiber Wi-Fi, executive meeting lounges, and peaceful oceanfront work environments.' },
  ];

  const highlights = [
    {
      title: 'Direct Beach Access',
      desc: 'Step off your suite balcony directly onto a secluded, private strip of Candolim Beach with private cabanas.',
      icon: Sun,
    },
    {
      title: '5-Star Hospitality',
      desc: 'Warm Goan warmth combined with world-class butler service tailored around your every comfort.',
      icon: Award,
    },
    {
      title: 'Safe & Sustainable',
      desc: 'Eco-conscious practices, solar energy utilization, and zero-single-use plastics for clean luxury.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#F5EDE0] text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#2C7DA0] uppercase block mb-2 font-sans">
            Welcome to Seravella
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2545] mb-6">
            Where the Ocean Feels Like Home
          </h2>
          <div className="w-20 h-1 bg-[#C9A24B] mx-auto mb-6 rounded-full" />
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Nestled along the pristine coastline of Goa, <strong className="text-[#0B2545]">Seravella</strong> is a sanctuary of refined elegance. Combining Portuguese-inspired architecture with modern tropical luxury, we offer a peaceful refuge where ocean breezes, sun-drenched private beaches, and world-class hospitality align.
          </p>
        </div>

        {/* Image & Text Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
                alt="Seravella Resort Exterior and Luxury Pool"
                className="w-full h-[400px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Floating Highlight Card */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-[#0B2545] text-white p-5 rounded-2xl shadow-xl border border-[#C9A24B]/40 max-w-xs hidden sm:block">
              <p className="font-serif text-2xl font-bold text-[#C9A24B] mb-1">100% Beachfront</p>
              <p className="text-xs text-gray-300">Overlooking the Arabian Sea in Candolim, North Goa.</p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B2545]">
              Tailored Luxury for Every Journey
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Whether you seek a serene coastal honeymoon, a revitalizing family holiday, or a peaceful remote workspace by the waves, Seravella provides bespoke experiences crafted for your unique desires.
            </p>

            {/* Target Audience Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {targetAudience.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-amber-900/10 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#2C7DA0]/10 flex items-center justify-center mb-3">
                      <IconComponent className="w-5 h-5 text-[#2C7DA0]" />
                    </div>
                    <h4 className="font-serif font-semibold text-[#0B2545] text-base mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-normal">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3 Column Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0B2545] text-[#C9A24B] flex items-center justify-center mb-6 shadow-md">
                  <Icon className="w-7 h-7" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#0B2545] mb-3">{h.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{h.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
