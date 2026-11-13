import React from 'react';
import { MessageCircle, Instagram, MapPin, Heart, ArrowUp } from 'lucide-react';
import { STORE_INFO } from '../data/superDeluxeData';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenEnquiry: () => void;
  language: 'en' | 'ta';
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenEnquiry,
  language,
}) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[#1C0D08] via-[#2A140D] to-[#120603] text-[#FFF4E6] pt-16 pb-8 border-t-4 border-[#FFCC33] relative overflow-hidden">
      
      {/* Decorative background ambient glows */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#2308ca]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#FFCC33]/15 rounded-full blur-3xl pointer-events-none"></div>

      {/* Decorative Ingredient Splash Watermark in Footer */}
      <div className="absolute top-0 right-0 w-80 sm:w-[420px] h-full pointer-events-none opacity-10 select-none overflow-hidden mix-blend-screen">
        <img
          src="/images/decorations/splash_swirl.jpg"
          alt=""
          className="w-full h-full object-cover object-top filter contrast-125 brightness-90"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#1C0D08]/50 to-[#1C0D08]"></div>
      </div>

      <div className="content-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Slogan (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <a href="#hero" className="inline-block group mb-4">
              <div className="bg-white/95 hover:bg-white p-2.5 rounded-2xl shadow-md border-2 border-[#FFCC33]/60 inline-flex transition-transform group-hover:scale-105">
                <img
                  src="/images/brand/logo.png"
                  alt="Super Deluxe Softies & Smiles"
                  className="h-12 sm:h-14 w-auto object-contain"
                />
              </div>
            </a>

            <p className="text-sm text-cream-300 max-w-sm font-medium leading-relaxed">
              {language === 'ta'
                ? 'உங்களை சிரிக்க வைக்கும் சாஃப்டீஸ். என்றும் நிலைக்கும் இனிமையான நினைவுகள்.'
                : 'Softies that make you smile. Memories that stay forever.'}
            </p>

            <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#FFCC33]/40 text-xs text-[#FFCC33] font-bold">
              <span>🥛 Real Milk</span>
              <span>•</span>
              <span>🌿 Pure Vegetarian</span>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#cf0924] text-white flex items-center justify-center transition-all duration-200 shadow-xs"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={STORE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-emerald-600 text-white flex items-center justify-center transition-all duration-200 shadow-xs"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={STORE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#2308ca] text-white flex items-center justify-center transition-all duration-200 shadow-xs"
                aria-label="Google Maps"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-display font-black text-[#FFCC33] uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <span>★</span> Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-cream-200">
              <li>
                <a href="#menu" className="hover:text-[#FFCC33] transition-colors">Menu</a>
              </li>
              <li>
                <a href="#todays-flavour" className="hover:text-[#FFCC33] transition-colors">Today's Flavour</a>
              </li>
              <li>
                <a href="#combos" className="hover:text-[#FFCC33] transition-colors">Combos</a>
              </li>
              <li>
                <a href="#flavours-cycle" className="hover:text-[#FFCC33] transition-colors">10 Days 10 Flavours</a>
              </li>
            </ul>
          </div>

          {/* Col 3: About Us (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-display font-black text-[#FFCC33] uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <span>★</span> About Us
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-cream-200">
              <li>
                <a href="#story" className="hover:text-[#FFCC33] transition-colors">Our Story</a>
              </li>
              <li>
                <a href="#mr-deluxe" className="hover:text-[#FFCC33] transition-colors">Mr. Deluxe</a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenEnquiry}
                  className="hover:text-[#FFCC33] transition-colors text-left font-bold text-[#FFCC33]"
                >
                  Franchise Enquiry →
                </button>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#FFCC33] transition-colors">Guest Reviews</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Corner Mascot Illustration (3 cols) */}
          <div className="lg:col-span-3 flex flex-col items-center sm:items-end justify-center relative">
            <div className="bg-white/10 rounded-3xl px-3 py-3.5 border-2 border-[#FFCC33]/40 flex flex-col items-center text-center shadow-lg max-w-[210px] w-full">
              <img
                src="/images/mascot/hero.png"
                alt="Mr. Deluxe Superhero Mascot"
                className="h-32 sm:h-36 w-auto object-contain filter drop-shadow-[0_10px_16px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:scale-105"
              />
              <span className="text-xs font-display font-extrabold text-[#FFCC33] mt-1.5">
                "See you at the parlour!"
              </span>
              <p className="text-[11px] text-cream-200/90 mt-0.5">
                Guduvanchery, Chennai
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-300/70">
          <p>
            © {currentYear} Super Deluxe Softies. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-[#FFCC33] transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={onOpenTerms}
              className="hover:text-[#FFCC33] transition-colors underline-offset-4 hover:underline"
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-[#cf0924] hover:bg-[#b0071e] text-white transition-colors shadow-glow-red"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
