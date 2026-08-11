import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Waves } from 'lucide-react';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsLoading(false);
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        const increment = Math.floor(Math.random() * 15) + 8;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-[#0B2545] text-white flex flex-col items-center justify-center p-6 overflow-hidden selection:bg-[#C9A24B]"
        >
          {/* Glowing background ambient lights */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2C7DA0]/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C9A24B]/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />

          {/* Logo with pulsing glowing gold rings */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative mb-8"
          >
            {/* Outer expanding ring */}
            <motion.div
              animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -inset-4 rounded-full border border-[#C9A24B]/50 blur-sm pointer-events-none"
            />
            {/* Inner ring */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 border-2 border-[#C9A24B] shadow-[0_0_30px_rgba(201,162,75,0.4)] bg-[#0B2545] overflow-hidden flex items-center justify-center">
              <img
                src="/seravella.jpeg"
                alt="Seravella Luxury Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>

          {/* Brand Title with Staggered Character Motion */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center mb-4"
          >
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-[0.25em] text-white uppercase drop-shadow-md">
              SERAVELLA
            </h1>
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="h-[1px] w-8 bg-[#C9A24B]/60" />
              <span className="text-xs sm:text-sm font-sans tracking-[0.2em] text-[#C9A24B] uppercase font-semibold">
                Goa • 5-Star Beachfront Retreat
              </span>
              <span className="h-[1px] w-8 bg-[#C9A24B]/60" />
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-serif italic text-sm sm:text-base text-gray-300 mb-10 text-center font-light"
          >
            "Where the Ocean Feels Like Home"
          </motion.p>

          {/* Progress Bar & Percentage Counter */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="w-full max-w-xs flex flex-col items-center gap-2"
          >
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden p-0.5 border border-[#C9A24B]/30">
              <motion.div
                className="h-full bg-gradient-to-r from-[#2C7DA0] via-[#C9A24B] to-amber-200 rounded-full shadow-[0_0_10px_#C9A24B]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
            <div className="flex justify-between w-full text-[11px] font-mono text-[#C9A24B]/90 font-medium px-1">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#C9A24B]" /> Preparing Luxury Experience
              </span>
              <span>{progress}%</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
