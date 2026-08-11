import React, { useState, useEffect } from 'react';
import { X, Users, CheckCircle, Sparkles, Phone, Mail, User, ShieldCheck, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { DatePickerField } from './ui/date-picker';

export default function BookingModal({ isOpen, onClose, selectedRoom, selectedOffer, initialData }) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2 Guests');
  const [roomType, setRoomType] = useState('ocean-view');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
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

  let nightCount = 1;
  if (checkIn && checkOut) {
    const d1 = new Date(checkIn);
    const d2 = new Date(checkOut);
    const diffTime = d2.getTime() - d1.getTime();
    if (diffTime > 0) {
      nightCount = Math.ceil(diffTime / (1000 * 3600 * 24));
    }
  }

  let discountPercent = 0;
  if (selectedOffer) {
    if (selectedOffer.code === 'HONEYMOON25') discountPercent = 25;
    if (selectedOffer.code === 'EARLYBIRD20') discountPercent = 20;
  }

  const rawSubtotal = baseRate * nightCount;
  const discountAmount = (rawSubtotal * discountPercent) / 100;
  const subtotal = rawSubtotal - discountAmount;
  const taxGst = subtotal * 0.18;
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
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl border border-[#C9A24B]/40 my-auto relative"
        >
          {/* Fixed Header */}
          <div className="bg-[#0B2545] text-white p-4 sm:p-6 relative shrink-0">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-20 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            <div className="flex items-center gap-1.5 text-[#C9A24B] text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-1 font-sans">
              <Sparkles className="w-3.5 h-3.5" /> Seravella Reservations
            </div>
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-white pr-8">
              {isSubmitted ? 'Reservation Confirmed!' : 'Reserve Your Stay'}
            </h2>
            <p className="text-[11px] sm:text-xs text-gray-300 font-light mt-0.5">
              5-Star Luxury Beachfront Resort • Candolim, Goa
            </p>
          </div>

          {/* Scrollable Body */}
          <div className="overflow-y-auto p-4 sm:p-6 space-y-5">
            {isSubmitted ? (
              <div className="text-center space-y-5 py-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0B2545]">
                  Thank You, {fullName || 'Valued Guest'}!
                </h3>

                <div className="bg-[#F5EDE0] p-4 sm:p-6 rounded-2xl text-left space-y-2.5 max-w-md mx-auto border border-amber-900/10 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Accommodation:</span>
                    <span className="font-bold text-[#0B2545] text-right">{currentRoom.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Duration:</span>
                    <span className="font-medium text-slate-800">{nightCount} Night(s)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Guests:</span>
                    <span className="font-medium text-slate-800">{guests}</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-300 pt-2 font-bold text-[#0B2545] text-sm sm:text-base">
                    <span>Total Amount:</span>
                    <span className="text-[#C9A24B]">₹{grandTotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  A confirmation email & SMS has been sent with your booking ID <strong className="text-[#0B2545]">#SERA-{Math.floor(100000 + Math.random() * 900000)}</strong>. Our concierge will contact you shortly for airport transfer options.
                </p>

                <Button variant="default" size="lg" onClick={handleReset} className="w-full sm:w-auto">
                  Done
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                
                {selectedOffer && (
                  <div className="bg-[#C9A24B]/10 border border-[#C9A24B] p-3 rounded-xl flex flex-wrap items-center justify-between gap-2 text-xs text-[#0B2545]">
                    <span className="font-semibold">Applied Offer: {selectedOffer.title} ({selectedOffer.discount})</span>
                    <Badge variant="goldSolid">{selectedOffer.code}</Badge>
                  </div>
                )}

                {/* Room Selection */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Select Suite / Villa
                  </label>
                  <select
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                    className="w-full min-h-[46px] bg-slate-50 border border-slate-300 rounded-xl px-3 sm:px-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-[#2C7DA0] focus:outline-none cursor-pointer"
                  >
                    <option value="deluxe">Deluxe Garden Room — ₹12,000 / night</option>
                    <option value="ocean-view">Ocean View Suite — ₹16,000 / night</option>
                    <option value="executive">Executive Suite — ₹22,000 / night</option>
                    <option value="presidential">Presidential Ocean Villa — ₹35,000+ / night</option>
                  </select>
                </div>

                {/* Dates & Guests Mobile Stack Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  <DatePickerField
                    id="modal-check-in"
                    label="Check-In"
                    required
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                  />

                  <DatePickerField
                    id="modal-check-out"
                    label="Check-Out"
                    required
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    min={checkIn || new Date().toISOString().split('T')[0]}
                  />

                  <div className="flex flex-col gap-1.5 w-full">
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#2C7DA0]" /> Guests
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full min-h-[46px] bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-[#2C7DA0] focus:outline-none cursor-pointer"
                    >
                      <option value="1 Guest">1 Adult</option>
                      <option value="2 Guests">2 Adults</option>
                      <option value="3 Guests">3 Adults</option>
                      <option value="4+ Family">Family (2 Adults + Kids)</option>
                    </select>
                  </div>
                </div>

                {/* Guest Contact Details Stack Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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
                      className="w-full min-h-[46px] bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-[#2C7DA0] focus:outline-none"
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
                      className="w-full min-h-[46px] bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-[#2C7DA0] focus:outline-none"
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
                    className="w-full min-h-[46px] bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-[#2C7DA0] focus:outline-none"
                  />
                </div>

                {/* Price Summary Breakdown */}
                <div className="bg-[#F5EDE0] p-3.5 sm:p-4 rounded-2xl border border-amber-900/10 text-xs space-y-2 text-slate-700">
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
                  <div className="flex justify-between border-t border-slate-300 pt-2 text-xs sm:text-sm font-bold text-[#0B2545]">
                    <span>Estimated Total:</span>
                    <span className="text-[#C9A24B] font-serif text-base sm:text-lg">₹{grandTotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-slate-500 leading-tight">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Free cancellation up to 48 hours before check-in. No upfront charge required now.</span>
                </div>

                {/* Submit Button */}
                <Button variant="default" size="lg" type="submit" className="w-full min-h-[48px] text-sm hover:bg-[#C9A24B] hover:text-[#0B2545]">
                  Confirm Reservation
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
