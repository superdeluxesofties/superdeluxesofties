import React, { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Sparkles, Calendar, CheckCircle2 } from 'lucide-react';
import { DAILY_FLAVOURS } from '../data/superDeluxeData';
import { DailyFlavour } from '../types';

const FLAVOUR_GRADIENTS: Record<string, string> = {
  'Belgian Chocolate': 'linear-gradient(145deg, #6A4028, #3B2317)',
  'Strawberry': 'linear-gradient(145deg, #FF9FB2, #FF5C7A)',
  'Alphonso Mango': 'linear-gradient(145deg, #FFD074, #FF9E2C)',
  'Black Currant': 'linear-gradient(145deg, #9B6AD1, #6B3FA0)',
  'Butterscotch': 'linear-gradient(145deg, #E8B773, #C78A3C)',
  'Pistachio': 'linear-gradient(145deg, #A8E6BE, #5FBE86)',
  'Badam Kulfi': 'linear-gradient(145deg, #F3E3C0, #D9B877)',
  'Coffee Bean': 'linear-gradient(145deg, #8A5A3C, #4A2E1C)',
  'Pineapple': 'linear-gradient(145deg, #FFE169, #FFAE19)',
  'Creamy French Vanilla': 'linear-gradient(145deg, #FFF3D6, #F0DCA8)',
  'Rosemilk': 'linear-gradient(145deg, #FFC2D1, #FF8FB0)',
};

interface FlavourCarouselProps {
  currentFlavour: DailyFlavour;
  onSelectFlavour: (flavour: DailyFlavour) => void;
  language: 'en' | 'ta';
}

export const FlavourCarousel: React.FC<FlavourCarouselProps> = ({
  currentFlavour,
  onSelectFlavour,
  language,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardElementsRef = useRef<Map<number, HTMLDivElement>>(new Map());
  const prevScrollLeft = useRef<number>(0);
  const prevVisibleSet = useRef<Set<number>>(new Set());
  const [poppingCards, setPoppingCards] = useState<Record<number, 'left' | 'right'>>({});

  // Remove animation class after animation completes so hover effects remain crisp
  const clearPop = (day: number) => {
    setPoppingCards((prev) => {
      if (!prev[day]) return prev;
      const next = { ...prev };
      delete next[day];
      return next;
    });
  };

  // Track cards entering visible viewport on scroll and trigger pop animation
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const checkVisibleCards = () => {
      const containerRect = container.getBoundingClientRect();
      const currentScroll = container.scrollLeft;
      const isScrollingRight = currentScroll > prevScrollLeft.current;
      const isScrollingLeft = currentScroll < prevScrollLeft.current;

      const newVisibleSet = new Set<number>();
      const newPops: Record<number, 'left' | 'right'> = {};

      cardElementsRef.current.forEach((el, day) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // Visible if card is within visible bounds of carousel track
        const isVisible = rect.right > containerRect.left + 25 && rect.left < containerRect.right - 25;

        if (isVisible) {
          newVisibleSet.add(day);
          // If the card was not visible previously, trigger a pop from the direction it arrived
          if (!prevVisibleSet.current.has(day) && prevVisibleSet.current.size > 0) {
            newPops[day] = isScrollingRight ? 'right' : isScrollingLeft ? 'left' : 'right';
          }
        }
      });

      if (Object.keys(newPops).length > 0) {
        setPoppingCards((prev) => ({ ...prev, ...newPops }));
      }

      prevVisibleSet.current = newVisibleSet;
      prevScrollLeft.current = currentScroll;
    };

    // Pre-populate initially visible cards so they don't fire an initial false pop
    const timer = setTimeout(() => {
      const containerRect = container.getBoundingClientRect();
      cardElementsRef.current.forEach((el, day) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.right > containerRect.left + 25 && rect.left < containerRect.right - 25) {
          prevVisibleSet.current.add(day);
        }
      });
      prevScrollLeft.current = container.scrollLeft;
    }, 150);

    let rafId: number;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(checkVisibleCards);
    };

    container.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(rafId);
      container.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = direction === 'left' ? -300 : 300;
    const containerRect = container.getBoundingClientRect();

    // Anticipate incoming cards from left or right and immediately activate pop
    const immediatePops: Record<number, 'left' | 'right'> = {};
    cardElementsRef.current.forEach((el, day) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (direction === 'right') {
        if (rect.left >= containerRect.right - 60 && rect.left <= containerRect.right + 360) {
          immediatePops[day] = 'right';
        }
      } else {
        if (rect.right <= containerRect.left + 60 && rect.right >= containerRect.left - 360) {
          immediatePops[day] = 'left';
        }
      }
    });

    if (Object.keys(immediatePops).length > 0) {
      setPoppingCards((prev) => ({ ...prev, ...immediatePops }));
    }

    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section id="flavours-cycle" className="py-16 md:py-24 bg-gradient-to-br from-[#120366] via-[#2308ca] to-[#14047a] text-white relative overflow-hidden">
      {/* Radiant ambient glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[#FFCC33]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="content-container relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#FFCC33] font-display flex items-center gap-1.5 bg-black/20 px-3 py-1 rounded-full border border-[#FFCC33]/30">
                <Calendar className="w-3.5 h-3.5 text-[#FFCC33]" />
                <span>{language === 'ta' ? '10-நாள் சுவை பிரச்சாரம்' : 'THE 10-DAY FLAVOUR CAMPAIGN'}</span>
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white">
              {language === 'ta' ? 'பத்து நாட்கள். புன்னகைக்க பத்து காரணங்கள்.' : 'Ten Days. Ten Reasons to Smile.'}
            </h2>

            <p className="text-blue-100 text-sm sm:text-base font-semibold mt-1.5">
              {language === 'ta'
                ? 'ஒவ்வொரு நாளும் புதிய சுவை. புன்னகைக்க ஒரு புதிய காரணம்.'
                : 'A new flavour every day. A new reason to smile.'}
            </p>
            <p className="text-xs sm:text-sm text-white/80 mt-1">
              {language === 'ta'
                ? 'எங்கள் சுவை வரிசையை உருட்டி உங்கள் அடுத்த விருப்பத்தை கண்டறியவும்.'
                : 'Swipe through our flavour lineup and discover your next favourite.'}
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              className="w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 border border-white/25 text-white flex items-center justify-center transition-colors shadow-sm"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              className="w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 border border-white/25 text-white flex items-center justify-center transition-colors shadow-sm"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto pb-6 pt-3 snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {DAILY_FLAVOURS.map((item: DailyFlavour) => {
            const isToday = currentFlavour.day === item.day;
            const popDir = poppingCards[item.day];
            const popAnimClass = popDir === 'right'
              ? 'animate-card-pop-right'
              : popDir === 'left'
                ? 'animate-card-pop-left'
                : '';

            return (
              <div
                key={item.day}
                ref={(el) => {
                  if (el) cardElementsRef.current.set(item.day, el);
                  else cardElementsRef.current.delete(item.day);
                }}
                onAnimationEnd={() => clearPop(item.day)}
                onClick={() => onSelectFlavour(item)}
                className={`snap-start shrink-0 w-[190px] sm:w-[220px] rounded-[28px] overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] relative group select-none ${popAnimClass} ${
                  isToday
                    ? 'bg-white text-chocolate ring-4 ring-[#FFCC33] shadow-glow-yellow -translate-y-1 hover:-translate-y-2.5 hover:shadow-2xl'
                    : 'bg-white text-chocolate border border-slate-200/90 shadow-md hover:-translate-y-2.5 hover:shadow-floating hover:border-[#FFCC33]'
                }`}
              >
                {/* Scoop Visual Container */}
                <div
                  className="h-[195px] sm:h-[220px] w-full relative overflow-hidden flex items-center justify-center p-2 sm:p-2.5"
                  style={{ background: FLAVOUR_GRADIENTS[item.name] || 'linear-gradient(145deg, #6A4028, #3B2317)' }}
                >
                  {/* Top Badge: Today or Day X */}
                  <span
                    className={`absolute top-3 left-3 z-10 text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full transition-transform duration-300 group-hover:scale-105 ${
                      isToday
                        ? 'bg-[#FFCC33] text-[#1E0D08] font-black shadow-xs'
                        : 'bg-black/35 backdrop-blur-md text-white border border-white/20'
                    }`}
                  >
                    {isToday ? "★ TODAY'S STAR" : item.dayLabel}
                  </span>

                  {/* Product Visual with smooth lift & slight scale from reference */}
                  <img
                    src={item.cardImage}
                    alt={item.name}
                    className="w-full h-full object-contain filter drop-shadow-[0_12px_14px_rgba(0,0,0,0.22)] transition-transform duration-350 ease-out group-hover:scale-108 group-hover:-translate-y-1.5"
                    loading="lazy"
                  />
                </div>

                {/* Flavor Title & Details */}
                <div className="p-3.5 pt-3 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-sm sm:text-base font-display font-bold leading-tight text-chocolate group-hover:text-[#2308ca] transition-colors">
                      {language === 'ta' && item.tamilName ? item.tamilName : item.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-chocolate-muted mt-1 line-clamp-2 leading-relaxed min-h-[32px] font-medium">
                      {item.tagline}
                    </p>
                  </div>

                  {/* Bottom Action Row with Sliding Arrow */}
                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                    <span className={isToday ? 'text-[#cf0924]' : 'text-[#2308ca] group-hover:text-[#cf0924] transition-colors'}>
                      {isToday ? 'Serving Now' : 'Preview'}
                    </span>
                    <span className="text-sm font-black transition-transform duration-300 ease-out group-hover:translate-x-1.5 text-[#cf0924]">
                      →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <a
            href="#todays-flavour"
            className="btn-primary text-sm py-3 px-8 shadow-glow-red"
          >
            <span>Check Today's Flavour →</span>
          </a>
          <span className="text-xs text-blue-200/90 font-medium">
            🕚 Churned fresh at 11:00 AM everyday in Our Master Outlet .
          </span>
        </div>

      </div>
    </section>
  );
};
