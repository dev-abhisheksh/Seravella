import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import VisionMission from './components/VisionMission';
import Rooms from './components/Rooms';
import Offers from './components/Offers';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [initialBookingData, setInitialBookingData] = useState(null);

  const handleOpenBooking = (initialData = null) => {
    setSelectedRoom(null);
    setSelectedOffer(null);
    if (initialData) {
      setInitialBookingData(initialData);
    }
    setIsBookingOpen(true);
  };

  const handleSelectRoom = (room) => {
    setSelectedRoom(room);
    setSelectedOffer(null);
    setIsBookingOpen(true);
  };

  const handleClaimOffer = (offer) => {
    setSelectedOffer(offer);
    setSelectedRoom(null);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedRoom(null);
    setSelectedOffer(null);
    setInitialBookingData(null);
  };

  return (
    <div className="min-h-screen bg-[#F5EDE0] text-slate-800 font-sans selection:bg-[#C9A24B] selection:text-white">
      {/* Sticky Header Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main>
        {/* Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* About Section */}
        <About />

        {/* Services Section */}
        <Services onSelectService={() => handleOpenBooking()} />

        {/* Vision & Mission Section */}
        <VisionMission />

        {/* Rooms & Pricing Section */}
        <Rooms onSelectRoom={handleSelectRoom} />

        {/* Special Offers Section */}
        <Offers onClaimOffer={handleClaimOffer} />

        {/* Gallery Section with Lightbox */}
        <Gallery />

        {/* Testimonials Section */}
        <Testimonials />
      </main>

      {/* Footer Section */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Reservation Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        selectedRoom={selectedRoom}
        selectedOffer={selectedOffer}
        initialData={initialBookingData}
      />
    </div>
  );
}
