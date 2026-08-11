import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Globe, Award, CheckCircle, Share2, Compass } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  const [inquirySent, setInquirySent] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryMsg, setInquiryMsg] = useState('');

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      setInquiryName('');
      setInquiryEmail('');
      setInquiryMsg('');
    }, 4000);
  };

  return (
    <footer id="contact" className="bg-[#0B2545] text-white pt-20 pb-12 border-t border-[#C9A24B]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Logo, Contact Info, Navigation, Quick Inquiry */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand & Logo (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/seravella.jpeg"
                alt="Seravella Resort Logo"
                className="w-12 h-12 rounded-full object-cover border-2 border-[#C9A24B] shadow-md"
              />
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-widest text-white">
                  SERAVELLA
                </span>
                <span className="text-xs text-[#C9A24B] tracking-wider uppercase font-sans">
                  5-Star Beachfront Resort • Goa
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed font-light">
              Where the Ocean Feels Like Home. Experience Goa’s ultimate luxury retreat on Candolim beach with private villas, gourmet dining, and oceanfront wellness.
            </p>

            {/* Awards & Rating Badge */}
            <div className="flex items-center gap-3 bg-[#133863] p-3 rounded-xl border border-[#C9A24B]/30 max-w-xs">
              <Award className="w-8 h-8 text-[#C9A24B]" />
              <div>
                <span className="text-xs font-bold text-white block">Tripadvisor Travelers Choice 2025</span>
                <span className="text-[11px] text-gray-300">Rated 4.9/5 by over 1,200+ guests</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="#contact"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C9A24B] hover:text-[#0B2545] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Website"
                title="Official Website"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C9A24B] hover:text-[#0B2545] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Share"
                title="Share Resort"
              >
                <Share2 className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C9A24B] hover:text-[#0B2545] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Location"
                title="Goa Guide"
              >
                <Compass className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links & Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="font-serif text-xl font-bold text-white mb-4 border-b border-[#C9A24B]/30 pb-2 inline-block">
              Contact & Location
            </h3>

            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C9A24B] shrink-0 mt-0.5" />
                <span>Seravella Beachfront Resort, Candolim Beach Road, North Goa, 403515 India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C9A24B] shrink-0" />
                <a href="tel:+918321234567" className="hover:text-[#C9A24B] transition-colors">
                  +91 832 123 4567 / +91 987 654 3210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C9A24B] shrink-0" />
                <a href="mailto:reservations@seravellagoa.com" className="hover:text-[#C9A24B] transition-colors">
                  reservations@seravellagoa.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#C9A24B] shrink-0" />
                <span>Check-In: 2:00 PM | Check-Out: 11:00 AM</span>
              </li>
            </ul>

            <button
              onClick={() => onOpenBooking()}
              className="mt-4 inline-flex items-center gap-2 bg-[#C9A24B] hover:bg-[#A88232] text-[#0B2545] font-bold text-sm px-6 py-2.5 rounded-xl shadow-lg cursor-pointer"
            >
              <span>Instant Reservation</span>
            </button>
          </div>

          {/* Col 3: Quick Inquiry Form (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-serif text-xl font-bold text-white mb-4 border-b border-[#C9A24B]/30 pb-2 inline-block">
              Send an Inquiry
            </h3>

            {inquirySent ? (
              <div className="bg-emerald-950/80 border border-emerald-500 p-4 rounded-xl text-emerald-200 text-xs flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Thank you! Your message has been sent. Our team will contact you shortly.</span>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-3">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    className="w-full bg-[#133863] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#C9A24B]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={inquiryEmail}
                    onChange={(e) => setInquiryEmail(e.target.value)}
                    className="w-full bg-[#133863] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#C9A24B]"
                  />
                </div>
                <div>
                  <textarea
                    required
                    rows="3"
                    placeholder="Inquiry / Special Request..."
                    value={inquiryMsg}
                    onChange={(e) => setInquiryMsg(e.target.value)}
                    className="w-full bg-[#133863] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#C9A24B]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#2C7DA0] hover:bg-[#1f5a75] text-white font-semibold text-xs py-2.5 rounded-lg shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Seravella Resort Goa. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#about" className="hover:text-[#C9A24B] transition-colors">Privacy Policy</a>
            <a href="#about" className="hover:text-[#C9A24B] transition-colors">Terms of Service</a>
            <a href="#about" className="hover:text-[#C9A24B] transition-colors">Cancellation Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
