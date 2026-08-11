import React, { useEffect, useRef } from 'react';
import { Eye, Target, ShieldCheck, Leaf, Heart, Star, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { animate, stagger } from 'animejs';

export default function VisionMission() {
  const valuesRef = useRef(null);

  const values = [
    { name: 'Luxury', icon: Sparkles },
    { name: 'Hospitality', icon: Heart },
    { name: 'Safety', icon: ShieldCheck },
    { name: 'Sustainability', icon: Leaf },
    { name: 'Satisfaction', icon: Star },
  ];

  useEffect(() => {
    if (valuesRef.current) {
      const items = valuesRef.current.querySelectorAll('.value-item');
      if (items.length) {
        animate(items, {
          translateY: [-2, 2],
          direction: 'alternate',
          loop: true,
          delay: stagger(200),
          ease: 'inOutSine',
          duration: 2500,
        });
      }
    }
  }, []);

  return (
    <section id="vision" className="py-20 bg-[#F5EDE0] text-slate-800 relative overflow-hidden">
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
            Our Purpose & Ethos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2545] mb-6">
            Vision & Mission
          </h2>
          <div className="w-20 h-1 bg-[#C9A24B] mx-auto mb-6 rounded-full" />
        </motion.div>

        {/* Vision & Mission 2-Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -6 }}
            className="bg-white p-8 sm:p-10 rounded-2xl shadow-lg border-t-4 border-[#C9A24B] relative overflow-hidden group transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#0B2545] text-[#C9A24B] flex items-center justify-center mb-6 shadow-md">
              <Eye className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#0B2545] mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed text-base font-light">
              To be globally recognized as Goa's premier beachfront retreat, setting timeless benchmarks in sustainable luxury, genuine warmth, and unforgettable coastal memories where guests truly feel the ocean as home.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -6 }}
            className="bg-white p-8 sm:p-10 rounded-2xl shadow-lg border-t-4 border-[#2C7DA0] relative overflow-hidden group transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#2C7DA0] text-white flex items-center justify-center mb-6 shadow-md">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#0B2545] mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed text-base font-light">
              To deliver personalized, intuitive 5-star hospitality that celebrates Goan heritage, preserves coastal nature, and provides seamless luxury comfort, gourmet culinary art, and pristine tranquility for every guest.
            </p>
          </motion.div>

        </div>

        {/* Values Strip Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          ref={valuesRef}
          className="bg-[#0B2545] text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-[#C9A24B]/30"
        >
          <div className="text-center mb-6">
            <span className="text-xs uppercase tracking-widest text-[#C9A24B] font-semibold font-sans">
              Our Core Pillars
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div key={idx} className="value-item flex items-center gap-2 group">
                  <Icon className="w-5 h-5 text-[#C9A24B] group-hover:scale-125 transition-transform" />
                  <span className="font-serif text-base sm:text-lg font-semibold tracking-wide text-gray-200">
                    {v.name}
                  </span>
                  {idx < values.length - 1 && (
                    <span className="hidden sm:inline-block text-[#C9A24B] font-bold ml-6">•</span>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
