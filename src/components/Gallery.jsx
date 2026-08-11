import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const galleryItems = [
    {
      id: 1,
      category: 'beach',
      title: 'Golden Sunset at Candolim Shore',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      caption: 'Private beachfront view during sunset',
    },
    {
      id: 2,
      category: 'resort',
      title: 'Oceanfront Infinity Pool',
      image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
      caption: 'Temperature controlled infinity pool overlooking the Arabian Sea',
    },
    {
      id: 3,
      category: 'suites',
      title: 'Presidential Ocean Villa Interior',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      caption: 'Luxurious suite master bedroom with ocean view terrace',
    },
    {
      id: 4,
      category: 'dining',
      title: 'Candlelight Shoreline Dining',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      caption: 'Private romantic dinner setup on golden sands',
    },
    {
      id: 5,
      category: 'spa',
      title: 'Ayurvedic Wellness Spa',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80',
      caption: 'Holistic massage pavilion with soothing natural aromas',
    },
    {
      id: 6,
      category: 'suites',
      title: 'Ocean View Balcony & Jacuzzi',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      caption: 'Private ocean-view jacuzzi balcony in Ocean Suite',
    },
    {
      id: 7,
      category: 'dining',
      title: 'Tropical Sunken Cocktail Bar',
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80',
      caption: 'Signature mixology drinks at poolside lounge bar',
    },
    {
      id: 8,
      category: 'resort',
      title: 'Lush Portuguese Gardens',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
      caption: 'Manicured palm garden pathways connecting suites',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'beach', label: 'Beach & Sea' },
    { id: 'resort', label: 'Resort & Pool' },
    { id: 'suites', label: 'Rooms & Villas' },
    { id: 'dining', label: 'Fine Dining' },
    { id: 'spa', label: 'Spa & Wellness' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#F5EDE0] text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#2C7DA0] uppercase block mb-2 font-sans">
            Visual Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2545] mb-6">
            Resort Gallery
          </h2>
          <div className="w-20 h-1 bg-[#C9A24B] mx-auto mb-6 rounded-full" />
          <p className="text-base sm:text-lg text-slate-600 font-light">
            Take a glance at the captivating beauty, sunlit oceanfront vistas, and timeless luxury waiting for you at Seravella.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#0B2545] text-[#C9A24B] shadow-md scale-105'
                  : 'bg-white text-slate-700 hover:bg-[#0B2545]/10 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative h-72 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer border border-white/60"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] text-[#C9A24B] font-extrabold uppercase tracking-widest font-sans mb-1 flex items-center gap-1">
                  <Camera className="w-3 h-3" /> {item.title}
                </span>
                <p className="text-xs text-white/90 font-light">{item.caption}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-[#C9A24B] font-semibold">
                  <Maximize2 className="w-3.5 h-3.5" /> Enlarge
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 cursor-pointer"
            aria-label="Close image modal"
          >
            <X className="w-7 h-7" />
          </button>

          {/* Prev Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Image & Caption Display */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full flex flex-col items-center justify-center"
          >
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[75vh] w-auto object-contain rounded-2xl shadow-2xl border border-white/20"
            />
            <div className="mt-4 text-center">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-sm text-amber-200/90 font-light">
                {filteredItems[lightboxIndex].caption}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
}
