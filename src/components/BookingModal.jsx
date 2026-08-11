import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, CheckCircle, Sparkles, Phone, Mail, User, ShieldCheck } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, selectedRoom, selectedOffer, initialData }) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2 Guests');
  const [roomType, setRoomType] = useState('ocean-view');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const roomPrices = {
    'deluxe': { name: 'Deluxe Garden Room', price: 12000 },
    'ocean-view': { name: 'Ocean View Suite', price: 16000 },
    'executive': { name: 'Executive Suite', price: 22000 },
    'presidential': { name: 'Presidential Ocean Villa', price: 35000 },
  };

  useEffect(() => {
    if (selectedRoom) {
      setRoomType(selectedRoom.id);
    }
    if (initialData) {
      if (initialData.checkIn) setCheckIn(initialData.checkIn);
      if (initialData.checkOut) setCheckOut(initialData.checkOut);
      if (initialData.guests) setGuests(initialData.guests);
    }
  }, [selectedRoom, initialData]);

  if (!isOpen) return null;

  const currentRoom = roomPrices[roomType] || roomPrices['ocean-view'];
  const baseRate = currentRoom.price;

  // Calculate nights
  let nightCount = 1;
  if (checkIn && checkOut) {
    const d1 = new Date(checkIn);
    const d2 = new Date(checkOut);
    const diffTime = d2.getTime() - d1.getTime();
    if (diffTime > 0) {
      nightCount = Math.ceil(diffTime / (1000 * 3600 * 24));
    }
  }

  // Discount calculation
  let discountPercent = 0;
  if (selectedOffer) {
    if (selectedOffer.code === 'HONEYMOON25') discountPercent = 25;
    if (selectedOffer.code === 'EARLYBIRD20') discountPercent = 20;
  }

  const rawSubtotal = baseRate * nightCount;
  const discountAmount = (rawSubtotal * discountPercent) / 100;
  const subtotal = rawSubtotal - discountAmount;
  const taxGst = subtotal * 0.18; // 18% GST for 5-star hotel
  const grandTotal = subtotal + taxGst;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#C9A24B]/30 relative my-8">
        
        {/* Modal Header */}
        <div className="bg-[#0B2545] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-2 text-[#C9A24B] text-xs font-semibold uppercase tracking-widest mb-1 font-sans">
            <Sparkles className="w-4 h-4" /> Seravella Reservations
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            {isSubmitted ? 'Reservation Confirmed!' : 'Reserve Your Stay'}
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 font-light mt-1">
            5-Star Luxury Beachfront Resort • Candolim, Goa
          </p>
        </div>

        {/* Modal Body */}
        {isSubmitted ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-lg">
              <CheckCircle className="w-10 h-10" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#0B2545]">
              Thank You, {fullName || 'Valued Guest'}!
            </h3>

            <div className="bg-[#F5EDE0] p-6 rounded-2xl text-left space-y-3 max-w-md mx-auto border border-amber-900/10 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Accommodation:</span>
                <span className="font-bold text-[#0B2545]">{currentRoom.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Duration:</span>
                <span className="font-medium text-slate-800">{nightCount} Night(s)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Guests:</span>
                <span className="font-medium text-slate-800">{guests}</span>
              </div>
              <div className="flex justify-between border-t border-slate-300 pt-2 font-bold text-[#0B2545]">
                <span>Total Amount:</span>
                <span className="text-[#C9A24B]">₹{grandTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              A confirmation email & SMS has been sent with your booking ID <strong className="text-[#0B2545]">#SERA-{Math.floor(100000 + Math.random() * 900000)}</strong>. Our concierge will contact you shortly for airport transfer options.
            </p>

            <button
              onClick={handleReset}
              className="bg-[#0B2545] hover:bg-[#133863] text-white font-semibold text-sm px-8 py-3 rounded-xl shadow-md transition-all cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            
            {selectedOffer && (
              <div className="bg-[#C9A24B]/10 border border-[#C9A24B] p-3 rounded-xl flex items-center justify-between text-xs text-[#0B2545]">
                <span className="font-semibold">Applied Offer: {selectedOffer.title} ({selectedOffer.discount})</span>
                <span className="font-mono bg-[#C9A24B] text-[#0B2545] px-2 py-0.5 rounded font-bold">{selectedOffer.code}</span>
              </div>
            )}

            {/* Room Selection */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                Select Suite / Villa
              </label>
              <select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 focus:ring-2 focus:ring-[#2C7DA0] focus:outline-none"
              >
                <option value="deluxe">Deluxe Garden Room — ₹12,000 / night</option>
                <option value="ocean-view">Ocean View Suite — ₹16,000 / night</option>
                <option value="executive">Executive Suite — ₹22,000 / night</option>
                <option value="presidential">Presidential Ocean Villa — ₹35,000+ / night</option>
              </select>
            </div>

            {/* Dates & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#2C7DA0]" /> Check-In
                </label>
                <input
                  type="date"
                  required
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-sm text-slate-800 focus:ring-2 focus:ring-[#2C7DA0] focus:outline-none"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#2C7DA0]" /> Check-Out
                </label>
                <input
                  type="date"
                  required
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-sm text-slate-800 focus:ring-2 focus:ring-[#2C7DA0] focus:outline-none"
                  min={checkIn || new Date().toISOString().split('T')[0]}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-[#2C7DA0]" /> Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-sm text-slate-800 focus:ring-2 focus:ring-[#2C7DA0] focus:outline-none"
                >
                  <option value="1 Guest">1 Adult</option>
                  <option value="2 Guests">2 Adults</option>
                  <option value="3 Guests">3 Adults</option>
                  <option value="4+ Family">Family (2 Adults + Kids)</option>
                </select>
              </div>
            </div>

            {/* Guest Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-[#2C7DA0]" /> Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-sm text-slate-800 focus:ring-2 focus:ring-[#2C7DA0] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-[#2C7DA0]" /> Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-sm text-slate-800 focus:ring-2 focus:ring-[#2C7DA0] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#2C7DA0]" /> Email Address
              </label>
              <input
                type="email"
                required
                placeholder="rahul@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-sm text-slate-800 focus:ring-2 focus:ring-[#2C7DA0] focus:outline-none"
              />
            </div>

            {/* Price Summary Breakdown */}
            <div className="bg-[#F5EDE0] p-4 rounded-2xl border border-amber-900/10 text-xs space-y-2 text-slate-700">
              <div className="flex justify-between">
                <span>{currentRoom.name} x {nightCount} night(s)</span>
                <span>₹{rawSubtotal.toLocaleString('en-IN')}</span>
              </div>
              {discountPercent > 0 && (
                <div className="flex justify-between text-emerald-700 font-semibold">
                  <span>Discount ({discountPercent}%)</span>
                  <span>- ₹{discountAmount.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex justify-between text-slate-500">
                <span>Taxes & 18% GST</span>
                <span>₹{taxGst.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between border-t border-slate-300 pt-2 text-sm font-bold text-[#0B2545]">
                <span>Estimated Total:</span>
                <span className="text-[#C9A24B] font-serif text-lg">₹{grandTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Free cancellation up to 48 hours before check-in. No upfront charge required now.</span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#0B2545] hover:bg-[#C9A24B] text-white hover:text-[#0B2545] font-bold text-base py-4 rounded-xl shadow-xl transition-all duration-300 cursor-pointer"
            >
              Confirm Reservation
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
