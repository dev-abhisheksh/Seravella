import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScrollTo = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 90;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 850;
    let startTime = null;

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animationStep = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easeProgress = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * easeProgress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animationStep);
      }
    };

    requestAnimationFrame(animationStep);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Vision', href: '#vision' },
    { name: 'Rooms & Pricing', href: '#rooms' },
    { name: 'Offers', href: '#offers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto pt-3 sm:pt-4">
        
        {/* Floating Liquid Glass Navbar Capsule */}
        <div
          className={`pointer-events-auto rounded-full backdrop-blur-2xl border transition-all duration-500 ease-out flex items-center justify-between relative overflow-hidden ${
            isScrolled
              ? 'bg-[#0B2545]/90 border-white/25 shadow-[0_12px_40px_rgba(0,0,0,0.5)] py-2 sm:py-2.5 px-4 sm:px-6'
              : 'bg-[#0B2545]/70 border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.35)] py-3 sm:py-3.5 px-5 sm:px-7'
          }`}
        >
          {/* Subtle liquid sheen ambient glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer pointer-events-none" />

          {/* Brand Logo & Name */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group focus:outline-none z-10"
          >
            <div className="relative">
              <img
                src="/seravella.jpeg"
                alt="Seravella Resort Logo"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-[#C9A24B] shadow-[0_0_15px_rgba(201,162,75,0.4)] group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-widest text-white group-hover:text-[#C9A24B] transition-colors">
                SERAVELLA
              </span>
              <span className="text-[9px] sm:text-[10px] text-[#C9A24B] tracking-widest uppercase font-sans font-semibold">
                Goa • 5-Star Luxury
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with Liquid Pill Hover Highlight */}
          <nav className="hidden lg:flex items-center space-x-1 z-10 relative bg-black/25 p-1.5 rounded-full border border-white/10">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => smoothScrollTo(e, link.href)}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative text-xs font-semibold px-4 py-2 text-gray-200 hover:text-white transition-colors cursor-pointer rounded-full"
              >
                {hoveredIndex === idx && (
                  <motion.div
                    layoutId="liquid-pill"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    className="absolute inset-0 bg-gradient-to-r from-[#2C7DA0]/60 to-[#C9A24B]/50 rounded-full border border-white/30 shadow-[0_0_12px_rgba(201,162,75,0.3)] -z-10"
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Right Action CTA Buttons */}
          <div className="hidden md:flex items-center gap-3 z-10">
            <a
              href="tel:+918321234567"
              className="flex items-center gap-2 text-xs font-semibold text-gray-200 hover:text-[#C9A24B] transition-colors px-3 py-2"
              aria-label="Call Seravella resort"
            >
              <Phone className="w-3.5 h-3.5 text-[#C9A24B]" />
              <span>+91 832 123 4567</span>
            </a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenBooking}
              className="relative group overflow-hidden bg-gradient-to-r from-[#C9A24B] to-amber-300 text-[#0B2545] font-bold text-xs px-5 py-2 rounded-full shadow-lg transition-all duration-300 cursor-pointer border border-white/40 flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#0B2545]" />
              <span>Book Stay</span>
            </motion.button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-white hover:text-[#C9A24B] hover:bg-white/10 transition-colors cursor-pointer z-10 border border-white/10"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Liquid Mobile Menu Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto mt-2 lg:hidden bg-[#0B2545]/92 backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)] rounded-3xl p-6 overflow-hidden max-w-md mx-auto"
            >
              <div className="flex flex-col space-y-3">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.3 }}
                    onClick={(e) => smoothScrollTo(e, link.href)}
                    className="text-base font-serif text-white hover:text-[#C9A24B] transition-colors border-b border-white/10 pb-2 flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-[#C9A24B]">→</span>
                  </motion.a>
                ))}

                <div className="pt-3 flex flex-col gap-3">
                  <a
                    href="tel:+918321234567"
                    className="flex items-center justify-center gap-2 text-xs text-gray-300 hover:text-[#C9A24B] py-2"
                  >
                    <Phone className="w-4 h-4 text-[#C9A24B]" />
                    <span>+91 832 123 4567</span>
                  </a>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenBooking();
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#C9A24B] to-amber-300 text-[#0B2545] font-bold py-3 rounded-full shadow-lg cursor-pointer text-sm"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Your Stay</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.header>
  );
}
