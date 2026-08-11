import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { animate } from 'animejs';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0B2545]/95 backdrop-blur-md shadow-lg py-3 border-b border-[#C9A24B]/20'
          : 'bg-gradient-to-b from-black/70 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <img
            src="/seravella.jpeg"
            alt="Seravella Resort Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-[#C9A24B] shadow-md group-hover:scale-105 transition-transform duration-300"
          />
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-white group-hover:text-[#C9A24B] transition-colors">
              SERAVELLA
            </span>
            <span className="text-[10px] sm:text-xs text-[#C9A24B] tracking-wider uppercase font-sans">
              Goa • 5-Star Resort
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => smoothScrollTo(e, link.href)}
              className="text-sm font-medium text-gray-200 hover:text-[#C9A24B] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C9A24B] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Action */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+918321234567"
            className="flex items-center gap-2 text-xs font-semibold text-gray-200 hover:text-[#C9A24B] transition-colors px-3 py-2"
            aria-label="Call Seravella resort"
          >
            <Phone className="w-4 h-4 text-[#C9A24B]" />
            <span>+91 832 123 4567</span>
          </a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenBooking}
            className="flex items-center gap-2 bg-[#C9A24B] hover:bg-[#A88232] text-[#0B2545] font-semibold text-sm px-5 py-2.5 rounded-full shadow-lg transition-all duration-300 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Now</span>
          </motion.button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-white hover:text-[#C9A24B] hover:bg-white/10 transition-colors cursor-pointer"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu Drawer with Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-[#0B2545]/98 backdrop-blur-xl border-b border-[#C9A24B]/30 shadow-2xl py-6 px-6 overflow-hidden"
          >
            <div className="flex flex-col space-y-4 max-w-md mx-auto">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                  onClick={(e) => smoothScrollTo(e, link.href)}
                  className="text-lg font-serif text-white hover:text-[#C9A24B] transition-colors border-b border-white/10 pb-2"
                >
                  {link.name}
                </motion.a>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="tel:+918321234567"
                  className="flex items-center justify-center gap-2 text-sm text-gray-300 hover:text-[#C9A24B] py-2"
                >
                  <Phone className="w-4 h-4 text-[#C9A24B]" />
                  <span>+91 832 123 4567</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-[#C9A24B] hover:bg-[#A88232] text-[#0B2545] font-semibold py-3 rounded-xl shadow-lg cursor-pointer"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Your Stay</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
