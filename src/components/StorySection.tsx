import React from 'react';
import { Milk, Sparkles, Heart, Smile, Users, Award, Star, RefreshCw, MapPin } from 'lucide-react';
import { STORE_INFO } from '../data/superDeluxeData';

interface StorySectionProps {
  language: 'en' | 'ta';
}

export const StorySection: React.FC<StorySectionProps> = ({ language }) => {
  // 08 Visually Separated Cards for "WHAT WE BELIEVE IN"
  const beliefs = [
    {
      num: '01',
      title: 'REAL MILK. REAL GOODNESS.',
      desc: 'Creamy softies made with real milk.',
      icon: Milk,
      color: 'text-[#2308ca]',
      bg: 'bg-blue-50',
    },
    {
      num: '02',
      title: 'FRESHNESS IN EVERY SERVE.',
      desc: 'Freshly Prepared. Every Day.',
      icon: Sparkles,
      color: 'text-[#cf0924]',
      bg: 'bg-rose-50',
    },
    {
      num: '03',
      title: 'FLAVOURS THAT SPARK JOY.',
      desc: 'Exciting flavours for every kind of craving.',
      icon: Heart,
      color: 'text-[#e69500]',
      bg: 'bg-amber-50',
    },
    {
      num: '04',
      title: 'HAPPINESS FOR EVERYONE.',
      desc: 'Premium Indulgence. Prices for Everyone.',
      icon: Smile,
      color: 'text-[#2308ca]',
      bg: 'bg-blue-50',
    },
    {
      num: '05',
      title: 'MADE FOR EVERY GENERATION.',
      desc: 'From childhood favourites to timeless treats.',
      icon: Users,
      color: 'text-[#cf0924]',
      bg: 'bg-rose-50',
    },
    {
      num: '06',
      title: 'MORE THAN A DESSERT.',
      desc: 'Little treats. Big smiles. Lasting memories.',
      icon: Award,
      color: 'text-[#e69500]',
      bg: 'bg-amber-50',
    },
    {
      num: '07',
      title: 'EVERY VISIT MATTERS.',
      desc: 'Every customer deserves a reason to smile.',
      icon: Star,
      color: 'text-[#2308ca]',
      bg: 'bg-blue-50',
    },
    {
      num: '08',
      title: 'ALWAYS SOMETHING NEW.',
      desc: 'New Flavours. Fresh Cravings. Endless Reasons to Smile.',
      icon: RefreshCw,
      color: 'text-[#cf0924]',
      bg: 'bg-rose-50',
    },
  ];

  return (
    <section id="story" className="py-10 md:py-16 bg-[#E8F4FD] border-y border-sky-200/80 relative overflow-hidden">
      {/* Decorative Ingredient Splash Background Watermark on Right */}
      <div className="absolute top-0 right-0 w-72 sm:w-96 lg:w-[480px] h-full pointer-events-none opacity-10 select-none overflow-hidden mix-blend-multiply">
        <img
          src="/images/decorations/splash_swirl.jpg"
          alt=""
          className="w-full h-full object-cover object-top filter contrast-125"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#E8F4FD]/40 to-[#E8F4FD]"></div>
      </div>

      {/* Decorative Ingredient Splash Background Accent on Bottom-Left */}
      <div className="absolute -bottom-24 -left-20 w-64 sm:w-80 h-96 pointer-events-none opacity-10 select-none overflow-hidden rotate-180 mix-blend-multiply">
        <img
          src="/images/decorations/splash_swirl.jpg"
          alt=""
          className="w-full h-full object-cover filter contrast-125"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#E8F4FD]"></div>
      </div>

      <div className="content-container space-y-12 md:space-y-14 relative z-10">
        
        {/* ========================================================
            PART 1: ABOUT THE BRAND (Narrative & Storefront)
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left: Storefront Photo */}
          <div className="lg:col-span-5 relative group max-w-[420px] mx-auto lg:max-w-none w-full">
            <div className="relative overflow-hidden rounded-2xl shadow-md border-3 border-white bg-slate-900 flex items-center justify-center aspect-[3/4]">
              <img
                src="/images/storefront/outlet.png"
                alt="Super Deluxe Softies Parlour Storefront"
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none"></div>

              {/* Verified Storefront Badge */}
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-md border border-slate-200 flex items-center justify-between z-10">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-chocolate">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[#2308ca] font-extrabold">SUPER DELUXE PARLOUR</span>
                  </div>
                  <p className="text-[10px] text-chocolate-muted mt-0.5">
                    Guduvanchery, Chennai • Open 11 AM - 11 PM
                  </p>
                </div>
                <a
                  href={STORE_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2308ca] hover:bg-[#1b069d] text-white text-[11px] font-bold py-1.5 px-2.5 rounded-lg flex items-center gap-1 transition-colors shadow-xs"
                >
                  <MapPin className="w-3 h-3 text-[#FFCC33]" />
                  <span>Visit</span>
                </a>
              </div>
            </div>

            <div className="absolute -top-2.5 -left-2.5 bg-[#FFCC33] text-[#1E0D08] text-[10px] font-display font-extrabold py-1 px-3 rounded-full shadow-md border border-white z-20">
              Made with Real Milk. Zero Added Oils.
            </div>
          </div>

          {/* Right: Brand Origin Story */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#cf0924] font-display bg-white px-3 py-0.5 rounded-full border border-[#cf0924]/20 shadow-2xs">
                {language === 'ta' ? 'பிராண்ட் பற்றி' : 'ABOUT THE BRAND'}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-chocolate leading-tight">
              We Didn't Start with Ice Cream.<br />
              <span className="text-[#cf0924]">We Started with a Craving.</span>
            </h2>

            <div className="mt-3.5 space-y-2.5 text-sm sm:text-base text-chocolate-muted font-medium leading-relaxed">
              <p className="text-chocolate font-semibold text-base sm:text-lg">
                That little moment after a meal. That sudden craving for something sweet. A feeling we all know.
              </p>
              <p>
                At Super Deluxe Softies, we believe every craving deserves something special.
              </p>
              <p>
                Made with real milk, freshly prepared, and bursting with exciting flavours, our softies turn everyday moments into little memories of happiness.
              </p>
              <p className="text-[#2308ca] font-bold text-base sm:text-lg pt-1 font-display">
                Because we don't just serve desserts. We serve smiles.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================
            PART 2: WHAT WE BELIEVE IN (8 Compact Separated Cards)
            ======================================================== */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#2308ca] font-display bg-white px-3 py-0.5 rounded-full border border-[#2308ca]/25 shadow-2xs">
              {language === 'ta' ? 'நாங்கள் நம்புவது' : 'WHAT WE BELIEVE IN'}
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-chocolate mt-2">
              Eight Pillars That Guide Every Serve
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {beliefs.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.num}
                  className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-black tracking-wider text-slate-400 font-display">
                        {item.num}
                      </span>
                      <div className={`w-7 h-7 rounded-lg ${item.bg} ${item.color} flex items-center justify-center`}>
                        <IconComp className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <h4 className="font-display font-bold text-xs sm:text-sm text-chocolate leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-chocolate-muted font-medium mt-1 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
