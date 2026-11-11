import React from 'react';
import { ArrowRight, Sparkles, Clock, MapPin, Heart } from 'lucide-react';
import { STORE_INFO } from '../data/superDeluxeData';
import { DailyFlavour } from '../types';

interface FeaturedFlavourProps {
  flavour: DailyFlavour;
  onTryToday: () => void;
  language: 'en' | 'ta';
}

export const FeaturedFlavour: React.FC<FeaturedFlavourProps> = ({
  flavour,
  onTryToday,
  language,
}) => {
  const isLightBg = flavour.accentColor && flavour.accentColor.toUpperCase() !== '#FFFFFF';
  const cardBg = flavour.accentBg || '#512D25';

  return (
    <section id="todays-flavour" className="py-16 md:py-24 bg-[#E8F4FD] relative">
      <div className="content-container">
        
        {/* Main Flavour-Themed Feature Card Container */}
        <div
          className="relative overflow-hidden rounded-[2.5rem] shadow-floating border-4 border-[#FFCC33]/50 transition-colors duration-500"
          style={{
            backgroundColor: cardBg,
            backgroundImage: isLightBg
              ? 'linear-gradient(135deg, rgba(255,255,255,0.45) 0%, rgba(0,0,0,0.08) 100%)'
              : 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.42) 100%)',
            color: flavour.accentColor || '#FFFFFF',
          }}
        >
          {/* Ambient Glows tinted to active flavour */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-30"
            style={{ backgroundColor: flavour.badgeColor || '#FFCC33' }}
          ></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#FFCC33]/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Flavour Copy & Details */}
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                {/* Badge Row */}
                <div className="flex flex-wrap items-center gap-2.5 mb-4">
                  <span className="badge-pill bg-[#cf0924] text-white text-xs font-bold shadow-glow-red">
                    {language === 'ta' ? 'இன்றைய சிறப்பு சுவை' : "TODAY'S FLAVOUR"}
                  </span>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full border flex items-center gap-1.5 shadow-xs ${
                      isLightBg
                        ? 'text-chocolate bg-white/70 border-chocolate/20'
                        : 'text-[#FFCC33] bg-white/10 backdrop-blur-xs border-white/15'
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5" />
                    <span>Day {flavour.day} of 10-Day Rotation</span>
                  </span>
                </div>

                {/* Main Script Headline */}
                <h2
                  className="text-4xl sm:text-5xl lg:text-6xl font-script font-bold tracking-wide leading-tight"
                  style={{ color: flavour.accentColor || '#FFFDF8' }}
                >
                  {language === 'ta' && flavour.tamilName ? flavour.tamilName : flavour.name}
                </h2>

                <p
                  className="mt-3 text-lg sm:text-xl font-display font-bold"
                  style={{ color: isLightBg ? '#2308ca' : flavour.badgeColor || '#FFCC33' }}
                >
                  {flavour.tagline}
                </p>

                <p
                  className={`mt-4 text-sm sm:text-base max-w-lg leading-relaxed font-medium ${
                    isLightBg ? 'text-chocolate/90' : 'text-white/90'
                  }`}
                >
                  {flavour.description}
                </p>

                {/* Highlights */}
                <div className="mt-6 flex flex-wrap gap-3 sm:gap-4 text-xs font-bold">
                  <div
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border ${
                      isLightBg
                        ? 'bg-white/70 text-chocolate border-chocolate/15'
                        : 'bg-black/30 text-amber-100 border-white/15'
                    }`}
                  >
                    <span>🍦</span>
                    <span>
                      {flavour.name.toLowerCase().includes('chocolate')
                        ? 'European Dark Cocoa'
                        : 'Fresh Artisan Churn'}
                    </span>
                  </div>
                  <div
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border ${
                      isLightBg
                        ? 'bg-white/70 text-chocolate border-chocolate/15'
                        : 'bg-black/30 text-amber-100 border-white/15'
                    }`}
                  >
                    <span>🥛</span>
                    <span>Made with Real Milk &amp; Zero Added Oils</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#FFCC33] text-[#1E0D08] px-3 py-1.5 rounded-xl border border-white font-black shadow-xs">
                    <span>★</span>
                    <span>From ₹25 / Cone</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={onTryToday}
                    className="btn-primary text-base py-3.5 px-8 shadow-glow-red group"
                    id="try-todays-flavour-btn"
                  >
                    <span>{language === 'ta' ? 'இன்றே சுவைக்க →' : "Try Today's Flavour →"}</span>
                  </button>

                  <a
                    href={STORE_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-xs font-bold transition-colors py-2 px-3.5 rounded-full border ${
                      isLightBg
                        ? 'text-chocolate hover:text-[#2308ca] bg-white/60 border-chocolate/15'
                        : 'text-[#FFCC33] hover:text-white hover:bg-white/10 border-white/15'
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#cf0924]" />
                    <span>Get Directions to Store</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Large Flavour Product Image */}
              <div className="lg:col-span-6 flex justify-center relative">
                <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden p-4 flex items-center justify-center bg-white/95 shadow-2xl border-2 border-white/70">
                  
                  {/* Subtle flavour glow */}
                  <div
                    className="absolute inset-4 rounded-full filter blur-2xl opacity-35"
                    style={{ backgroundColor: flavour.badgeColor || '#FFCC33' }}
                  ></div>

                  <img
                    src={flavour.cardImage || '/images/10-day-10-flavour/Chocolate.png'}
                    alt={flavour.name}
                    className="relative z-10 w-full h-full object-contain rounded-2xl drop-shadow-xl transition-transform duration-500 hover:scale-105"
                  />

                  {/* Pure Milk Guarantee Floating Badge */}
                  <div className="absolute bottom-5 left-5 z-20 bg-white/95 backdrop-blur-md text-chocolate rounded-2xl py-2 px-4 shadow-xl border-2 border-[#FFCC33] flex items-center gap-2">
                    <span className="text-xl">🍦</span>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-strawberry">Artisanal Soft-Serve</p>
                      <p className="text-xs font-display font-bold">Churned Every Morning</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
