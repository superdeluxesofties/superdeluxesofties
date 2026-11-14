import React from 'react';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import { DailyFlavour } from '../types';

interface HeroSectionProps {
  todayFlavour: DailyFlavour;
  onExploreMenu: () => void;
  onSelectFlavour: (flavour: DailyFlavour) => void;
  language: 'en' | 'ta';
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  todayFlavour,
  onExploreMenu,
  onSelectFlavour,
  language,
}) => {
  return (
    <section id="hero" className="relative overflow-hidden pt-5 pb-12 md:pt-8 md:pb-16 bg-[#108DEA]">
      {/* Desktop (lg+): Decorative Milk Splash from commit e9111f9 */}
      <div className="hidden lg:block absolute -bottom-6 left-0 w-[360px] pointer-events-none z-0 select-none opacity-100 filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.22)]">
        <img
          src="/images/decorations/hero_milk_splash_left.png"
          alt=""
          className="w-full h-auto object-contain"
          aria-hidden="true"
        />
      </div>

      {/* Desktop (lg+): Decorative Chocolate & Fruits Splash from commit e9111f9 */}
      <div className="hidden lg:block absolute -bottom-6 right-0 w-[390px] pointer-events-none z-0 select-none opacity-100 filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.25)]">
        <img
          src="/images/decorations/hero_choco_splash_right.png"
          alt=""
          className="w-full h-auto object-contain"
          aria-hidden="true"
        />
      </div>

      <div className="content-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* ========================================================
              LEFT COLUMN: HERO COPY & CALLS TO ACTION
              ======================================================== */}
          <div className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] font-bold uppercase tracking-wider mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#FFCC33]" />
              <span>{language === 'ta' ? 'உண்மையான பால் • பூஜ்ஜிய சேர்க்கப்பட்ட எண்ணெய்' : 'Made with Real Milk. Zero Added Oils.'}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-display font-bold text-white leading-[1.14] tracking-tight drop-shadow-sm">
              {language === 'ta' ? (
                <>
                  சாஃப்டீஸை விட மேலானது.<br />
                  <span className="text-[#FFCC33]">நாங்கள் புன்னகையை வழங்குகிறோம்.</span>
                </>
              ) : (
                <>
                  More Than Softies.<br />
                  <span className="text-[#FFCC33]">We Serve Smiles.</span>
                </>
              )}
            </h1>

            <div className="mt-3 max-w-md space-y-1.5">
              <p className="text-sm sm:text-base font-bold text-[#FFCC33]">
                {language === 'ta'
                  ? 'புதிய சாஃப்டீஸ். உண்மையான பால். அற்புதமான சுவைகள். நீங்கள் விரும்பும் விலைகள்.'
                  : "Fresh Softies. Real Milk. Exciting Flavours. Prices You'll Love."}
              </p>
              <p className="text-xs sm:text-sm text-white/95 font-medium leading-relaxed">
                {language === 'ta'
                  ? 'ஒவ்வொரு சுழற்சியும் ஒரு சாதாரண ஏக்கத்தை நினைவில் கொள்ளத்தக்க ஒரு தருணமாக மாற்றுகிறது.'
                  : 'Every swirl turns an everyday craving into a moment worth remembering.'}
              </p>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onExploreMenu}
                className="btn-primary text-sm py-2.5 px-6 shadow-xl hover:scale-105 border-2 border-white/20 group"
                id="hero-explore-menu-btn"
              >
                <span>{language === 'ta' ? 'மெனுவை பார்க்க →' : 'Explore the Menu →'}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('todays-flavour') || document.getElementById('flavours-cycle');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#FFCC33] hover:bg-[#e6b82e] text-[#1E0D08] font-extrabold text-sm py-2.5 px-5 rounded-full shadow-lg hover:scale-105 transition-all"
                id="hero-todays-flavour-btn"
              >
                <span>{language === 'ta' ? 'இன்றைய சுவை' : "Today's Flavour"}</span>
              </button>
            </div>

            {/* Quick Micro Badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-[11px] font-bold">
              <div className="flex items-center gap-1.5 bg-white/95 py-1 px-2.5 rounded-full border border-white text-[#0162C1] shadow-sm font-extrabold">
                <span>🥛</span>
                <span>Made with Real Milk</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#fee8eb] py-1 px-2.5 rounded-full border border-red-200 text-[#cf0924] shadow-sm font-extrabold">
                <span>🌿</span>
                <span>Zero Added Oils</span>
              </div>
              <div className="flex items-center gap-1.5 bg-emerald-50 py-1 px-2.5 rounded-full border border-emerald-200 text-emerald-700 shadow-sm font-extrabold">
                <span>❤️</span>
                <span>100% Pure Veg</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#FFCC33] py-1 px-2.5 rounded-full border border-white text-[#1E0D08] shadow-sm font-black">
                <span>Starts From ₹25</span>
              </div>
            </div>
          </div>

          {/* ========================================================
              CENTER COLUMN: MR. DELUXE MASCOT WITH FLANKING SPLASHES & FLOATING CHIPS
              ======================================================== */}
          <div className="lg:col-span-3 flex justify-center order-first lg:order-none my-2 lg:my-0 relative">
            
            {/* Mobile/Tablet (< lg): Left Milk Splash directly flanking hero mascot */}
            <div className="lg:hidden absolute top-1/2 -translate-y-1/2 -left-10 sm:-left-20 md:-left-28 w-28 sm:w-44 md:w-52 pointer-events-none z-0 select-none opacity-90 sm:opacity-95 filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.22)]">
              <img
                src="/images/decorations/hero_milk_splash_left.png"
                alt=""
                className="w-full h-auto object-contain"
                aria-hidden="true"
              />
            </div>

            {/* Mobile/Tablet (< lg): Right Chocolate & Fruits Splash directly flanking hero mascot */}
            <div className="lg:hidden absolute top-1/2 -translate-y-1/2 -right-10 sm:-right-20 md:-right-28 w-32 sm:w-48 md:w-56 pointer-events-none z-0 select-none opacity-90 sm:opacity-95 filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.25)]">
              <img
                src="/images/decorations/hero_choco_splash_right.png"
                alt=""
                className="w-full h-auto object-contain"
                aria-hidden="true"
              />
            </div>

            <div className="relative group cursor-pointer max-w-[260px] sm:max-w-[290px] w-full flex flex-col items-center">
              {/* Radiant Warm Golden Glow */}
              <div className="absolute inset-0 bg-[#FFCC33]/35 rounded-full filter blur-2xl scale-95 transition-transform group-hover:scale-110 pointer-events-none"></div>

              {/* Floating Element 1 (Top Right): Freshly Churned Daily */}
              <div className="absolute -top-3 -right-4 sm:-right-8 z-30 bg-white text-chocolate rounded-2xl px-3 sm:px-3.5 py-1.5 sm:py-2 shadow-floating border border-slate-100 flex items-center gap-1.5 sm:gap-2 font-bold text-xs pointer-events-none animate-bob">
                <span className="text-lg sm:text-xl">🍦</span>
                <span className="font-display font-extrabold text-[#2308ca] whitespace-nowrap">Freshly Churned Daily</span>
              </div>

              {/* Floating Element 2 (Middle Left): 4.9 Google Rating */}
              <div className="absolute top-1/2 -left-6 sm:-left-12 -translate-y-1/2 z-30 bg-white text-chocolate rounded-2xl px-3 sm:px-3.5 py-1.5 sm:py-2 shadow-floating border border-slate-100 flex items-center gap-1.5 sm:gap-2 font-bold text-xs pointer-events-none animate-bob-slow">
                <span className="text-lg sm:text-xl">⭐</span>
                <span className="font-display font-extrabold text-chocolate whitespace-nowrap">4.9 Google Rating</span>
              </div>

              {/* Floating Element 3 (Bottom Right): 10 Flavours · 10 Days */}
              <div className="absolute -bottom-2 -right-4 sm:-right-8 z-30 bg-[#FFCC33] text-[#1E0D08] rounded-2xl px-3 sm:px-3.5 py-1.5 sm:py-2 shadow-floating border-2 border-white flex items-center gap-1.5 sm:gap-2 font-bold text-xs pointer-events-none animate-bob-fast">
                <span className="text-lg sm:text-xl">🎉</span>
                <span className="font-display font-black text-[#1E0D08] whitespace-nowrap">10 Flavours · 10 Days</span>
              </div>

              {/* Character Cutout Container */}
              <div className="relative z-10 transition-transform duration-500 group-hover:scale-105 filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.4)] rounded-[2.25rem] overflow-hidden border-2 border-white/60 shadow-2xl">
                <img
                  src="/images/mascot/hero_mascot.jpg"
                  alt="Mr. Deluxe — Super Deluxe Softies superhero mascot"
                  className="w-full h-auto max-h-[380px] object-cover"
                  loading="eager"
                />
              </div>

              {/* Overlaid Mascot Badge */}
              <div className="mt-2 bg-white/95 backdrop-blur-md rounded-2xl py-1.5 px-4 shadow-xl flex items-center justify-center gap-1.5 border-2 border-[#FFCC33] relative z-20">
                <Heart className="w-3.5 h-3.5 text-[#cf0924] fill-[#cf0924]" />
                <span className="text-xs font-display font-bold text-[#0162C1]">Mr. Deluxe</span>
                <span className="text-[10px] text-[#cf0924] font-extrabold">• Super Hero</span>
              </div>
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: TODAY'S FLAVOUR HERO CARD
              ======================================================== */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            {(() => {
              const isLightBg = todayFlavour.accentColor && todayFlavour.accentColor.toUpperCase() !== '#FFFFFF';
              const cardBg = todayFlavour.accentBg || '#512D25';
              return (
                <div
                  className="w-full max-w-sm rounded-3xl p-6 sm:p-7 border-2 border-[#FFCC33]/70 shadow-2xl relative group hover:scale-[1.02] transition-all duration-300"
                  style={{
                    backgroundColor: cardBg,
                    backgroundImage: isLightBg
                      ? 'linear-gradient(155deg, rgba(255,255,255,0.45) 0%, rgba(0,0,0,0.06) 100%)'
                      : 'linear-gradient(155deg, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0.40) 100%)',
                    color: todayFlavour.accentColor || '#FFFFFF',
                  }}
                >
                  {/* Top Row: Badge & Date */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="badge-pill bg-[#cf0924] text-white text-[11px] font-bold shadow-glow-red">
                      {language === 'ta' ? 'இன்றைய சிறப்பு சுவை' : "TODAY'S FLAVOUR"}
                    </span>
                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                        isLightBg
                          ? 'text-chocolate bg-white/60 border-chocolate/20'
                          : 'text-white bg-white/15 border-white/25'
                      }`}
                    >
                      Day {todayFlavour.day} of 10
                    </span>
                  </div>

                  {/* Flavor Title & Script Subtitle */}
                  <h2
                    className="text-2xl sm:text-3xl font-display font-bold leading-tight"
                    style={{ color: todayFlavour.accentColor || '#FFFFFF' }}
                  >
                    {language === 'ta' && todayFlavour.tamilName ? todayFlavour.tamilName : todayFlavour.name}
                  </h2>

                  <p
                    className="font-playfair text-lg sm:text-xl font-semibold mt-1 leading-snug"
                    style={{ color: isLightBg ? '#2308ca' : todayFlavour.badgeColor || '#FFCC33' }}
                  >
                    {todayFlavour.tagline || 'Slow-churned royal almonds with cardamom whispers.'}
                  </p>

                  <div className="mt-3">
                    <button
                      type="button"
                      onClick={() => {
                        const el = document.getElementById('flavours-cycle');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`inline-flex items-center gap-1.5 text-xs font-bold border-b-2 pb-0.5 transition-colors ${
                        isLightBg
                          ? 'text-[#cf0924] hover:text-[#2308ca] border-[#cf0924] hover:border-[#2308ca]'
                          : 'text-[#FFCC33] hover:text-white border-[#FFCC33] hover:border-white'
                      }`}
                    >
                      <span>{language === 'ta' ? "இன்றைய சிறப்பு சுவை →" : "Try Today's Flavour →"}</span>
                    </button>
                  </div>

                  {/* Product Visual Container with softie cone cutout - zero side padding, scaled to fill */}
                  <div className="relative mt-4 aspect-square max-h-[220px] mx-auto flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-t from-slate-100 to-white border-2 border-white/80 p-0 shadow-md">
                    <img
                      src={todayFlavour.cardImage || '/images/10-day-10-flavour/Chocolate.png'}
                      alt={todayFlavour.name}
                      className="w-full h-full object-contain scale-[1.18] transition-transform duration-500 group-hover:scale-[1.25]"
                    />

                    {/* Floating Price Pill in vibrant Yellow #FFCC33 */}
                    <div className="absolute bottom-3 right-3 bg-[#FFCC33] text-[#1E0D08] font-display font-extrabold text-xs py-1 px-3 rounded-full shadow-md border-2 border-white">
                      From ₹25
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>

        </div>

        {/* ========================================================
            COMPACT OUR PROMISE BAR (Within Home Hero) — commented out for now
            ======================================================== */}
        {/*
        <div className="mt-8 pt-6 border-t border-white/25">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/25 shadow-lg text-white">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2 mb-3.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-extrabold uppercase tracking-widest bg-[#FFCC33] text-[#1E0D08] px-2.5 py-0.5 rounded-full">
                  OUR PROMISE
                </span>
                <h2 className="text-sm sm:text-base font-display font-black text-white">
                  MADE WITH REAL MILK
                </h2>
              </div>
              <p className="text-[11px] sm:text-xs text-white/90 font-medium">
                Real ingredients. Fresh preparation. Exciting flavours. Affordable indulgence.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mb-3.5">
              <div className="bg-white/15 rounded-xl p-2.5 border border-white/20">
                <div className="flex items-center justify-between text-[10px] font-bold text-[#FFCC33]">
                  <span>01</span>
                  <span>🥛</span>
                </div>
                <div className="text-xs font-display font-bold text-white mt-0.5">REAL MILK</div>
                <p className="text-[10px] text-white/90 leading-snug">Made with real milk. ZERO ADDED OILS.</p>
              </div>

              <div className="bg-white/15 rounded-xl p-2.5 border border-white/20">
                <div className="flex items-center justify-between text-[10px] font-bold text-[#FFCC33]">
                  <span>02</span>
                  <span>🍦</span>
                </div>
                <div className="text-xs font-display font-bold text-white mt-0.5">FRESH EVERY DAY</div>
                <p className="text-[10px] text-white/90 leading-snug">Prepared fresh at your outlet.</p>
              </div>

              <div className="bg-white/15 rounded-xl p-2.5 border border-white/20">
                <div className="flex items-center justify-between text-[10px] font-bold text-[#FFCC33]">
                  <span>03</span>
                  <span>✨</span>
                </div>
                <div className="text-xs font-display font-bold text-white mt-0.5">EXCITING FLAVOURS</div>
                <p className="text-[10px] text-white/90 leading-snug">Always something new to try.</p>
              </div>

              <div className="bg-white/15 rounded-xl p-2.5 border border-white/20">
                <div className="flex items-center justify-between text-[10px] font-bold text-[#FFCC33]">
                  <span>04</span>
                  <span>₹</span>
                </div>
                <div className="text-xs font-display font-bold text-white mt-0.5">POCKET-FRIENDLY</div>
                <p className="text-[10px] text-white/90 leading-snug">A premium experience without premium price.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-2.5 border-t border-white/20">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="bg-white/95 text-chocolate px-2.5 py-0.5 rounded-full font-bold text-[10px]">❤️ REAL INGREDIENTS</span>
                <span className="bg-[#FFCC33] text-[#1E0D08] px-2.5 py-0.5 rounded-full font-black text-[10px]">🥛 REAL MILK &amp; ZERO ADDED OILS</span>
                <span className="bg-white/95 text-chocolate px-2.5 py-0.5 rounded-full font-bold text-[10px]">🍦 FRESHLY PREPARED</span>
                <span className="bg-white/95 text-chocolate px-2.5 py-0.5 rounded-full font-bold text-[10px]">✨ EXCITING FLAVOURS</span>
                <span className="bg-white/95 text-chocolate px-2.5 py-0.5 rounded-full font-bold text-[10px]">₹ POCKET-FRIENDLY</span>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#FFCC33] block">
                  THAT&apos;S SUPER DELUXE SOFTIES.
                </span>
                <span className="text-xs font-display font-black text-white">
                  More Than Softies. We Serve Smiles.
                </span>
              </div>
            </div>
          </div>
        </div>
        */}
      </div>
    </section>
  );
};
