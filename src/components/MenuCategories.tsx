import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { MENU_CATEGORIES } from '../data/superDeluxeData';

interface MenuCategoriesProps {
  onSelectCategory: (categoryId: string) => void;
  language: 'en' | 'ta';
}

interface QuickFavourite {
  name: string;
  price: string;
  category: string;
  detail?: string;
  featured?: boolean;
}

const QUICK_FAVOURITES: QuickFavourite[] = [
  { name: 'Single Flavour Cone', price: '₹25', category: 'cones' },
  { name: 'Double Flavoured Cone', price: '₹30', category: 'cones' },
  { name: 'Dip Cone', price: '₹40', category: 'dip-cones' },
  { name: '125 ml Dip Cup', price: '₹50', category: 'dip-cups' },
  { name: '250 ml Dip Cup', price: '₹80', category: 'dip-cups' },
  { name: '125 ml Ice Cream Cup', price: '₹35', category: 'cups' },
  { name: '250 ml Ice Cream Cup', price: '₹60', category: 'cups' },
  { name: 'Sundae', price: '₹89', category: 'sundaes', featured: true },
  { name: 'Jelly Crush Cup', price: '₹60 / ₹99', detail: '125 ml / 250 ml', category: 'jelly' },
  { name: 'Hot Chocolate', price: '₹49 / ₹79 / ₹119', detail: 'Small / Medium / Large', category: 'new-launch' },
];

export const MenuCategories: React.FC<MenuCategoriesProps> = ({ onSelectCategory, language }) => {
  const [lightboxVisual, setLightboxVisual] = useState<{
    title: string;
    category: string;
    image: string;
  } | null>(null);

  useEffect(() => {
    if (!lightboxVisual) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightboxVisual(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxVisual]);

  return (
    <section id="menu" className="relative bg-[#E8F4FD] py-16 md:py-24 border-y border-sky-200/80">
      <div className="content-container">
        {/* Header Block */}
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <span className="text-xs font-extrabold uppercase tracking-[.2em] text-[#cf0924] font-display">
            {language === 'ta' ? 'எங்கள் மெனு' : 'THE SUPER DELUXE MENU'}
          </span>
          <h2 className="mt-2 text-3xl font-bold text-chocolate sm:text-4xl md:text-5xl font-display">
            {language === 'ta' ? 'உங்கள் அடுத்த விருப்பத்தைத் தேர்ந்தெடுங்கள்' : 'Find your next favourite'}
          </h2>
          <div className="flex justify-center mt-3 mb-3">
            <span className="squiggly-accent"></span>
          </div>
          <p className="mx-auto mt-2 max-w-2xl text-sm font-medium leading-relaxed text-chocolate-muted sm:text-base">
            {language === 'ta'
              ? 'எங்கள் சுவையான தயாரிப்புகளை ஆராயுங்கள் அல்லது முழு மெனுவை பார்க்க கீழே கிளிக் செய்யுங்கள்.'
              : 'Tap any category below to browse the treats, or view our quick popular picks.'}
          </p>

          {/* Category Filter Pills */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {MENU_CATEGORIES.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => onSelectCategory(category.id)}
                className="rounded-full border-2 border-slate-200 bg-white px-4 py-2 text-xs font-bold text-chocolate shadow-xs transition hover:border-[#2308ca] hover:text-[#2308ca] hover:shadow-sm"
              >
                {category.name} <span className="ml-1 text-[#2308ca]">→</span>
              </button>
            ))}
            <button
              type="button"
              onClick={() => onSelectCategory('all')}
              className="rounded-full bg-[#cf0924] px-5 py-2 text-xs font-bold text-white shadow-glow-red transition hover:bg-[#b0071e]"
            >
              Full menu &amp; prices <span className="ml-1 text-[#FFCC33]">★</span>
            </button>
          </div>
        </div>

        {/* Popular Picks Feature Banner */}
        <div className="overflow-hidden rounded-[1.75rem] bg-gradient-to-r from-[#120366] via-[#2308ca] to-[#1b069d] p-4 sm:p-6 text-white shadow-floating border-2 border-[#2308ca]/40 relative">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFCC33]/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
            {/* Left: Heading & Reduced-size Quick Picks Grid */}
            <div className="lg:col-span-8">
              <span className="text-[11px] font-extrabold uppercase tracking-[.24em] text-[#FFCC33] flex items-center gap-1.5">
                POPULAR PICKS
              </span>
              <h3 className="mt-1 text-2xl font-black tracking-tight sm:text-3xl font-display text-white">
                Simple choices. Serious cravings.
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-5">
                {QUICK_FAVOURITES.map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => onSelectCategory(item.category)}
                    aria-label={`Explore ${item.name}, ${item.price}`}
                    className={`rounded-xl sm:rounded-2xl border px-3 py-2.5 text-left transition duration-200 hover:-translate-y-0.5 hover:shadow-md flex flex-col justify-between ${
                      item.featured
                        ? 'border-[#FFCC33] bg-[#cf0924] text-white shadow-glow-red'
                        : 'border-white/20 bg-white/[.10] hover:bg-white/[.18]'
                    }`}
                  >
                    <span className="block text-xs font-extrabold leading-snug">{item.name}</span>
                    <div className="mt-2">
                      <span className="block text-base sm:text-lg font-black text-[#FFCC33] leading-tight">
                        {item.price}
                      </span>
                      {'detail' in item && item.detail && (
                        <span className="mt-0.5 block text-[10px] text-white/80 leading-tight">{item.detail}</span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Both Exploded-View Layer Visuals inside Popular Picks */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3">
              {[
                {
                  title: 'Chocolate Brownie Sundae',
                  category: 'sundaes',
                  image: '/images/menu-items/exploded-chocolate-brownie.png',
                },
                {
                  title: 'Blackcurrant Jelly Crush',
                  category: 'jelly',
                  image: '/images/menu-items/exploded-blackcurrant-jelly.png',
                },
              ].map((visual) => (
                <button
                  key={visual.title}
                  type="button"
                  onClick={() => setLightboxVisual(visual)}
                  aria-label={`View full ${visual.title} exploded image`}
                  className="group overflow-hidden rounded-2xl shadow-lg border border-white/20 hover:border-[#FFCC33] transition-all duration-200 hover:-translate-y-1 cursor-zoom-in"
                >
                  <img
                    src={visual.image}
                    alt={visual.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Full Image Lightbox Modal */}
      {lightboxVisual && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setLightboxVisual(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightboxVisual.title}
        >
          <div
            className="relative max-w-2xl w-full flex flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxVisual(null)}
              aria-label="Close full image"
              className="absolute -top-3 -right-2 sm:top-2 sm:right-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-chocolate shadow-lg hover:bg-[#cf0924] hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <img
              src={lightboxVisual.image}
              alt={lightboxVisual.title}
              className="max-h-[82vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border border-white/15"
            />

            <div className="mt-3 flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  const targetCategory = lightboxVisual.category;
                  setLightboxVisual(null);
                  onSelectCategory(targetCategory);
                }}
                className="rounded-full bg-[#FFCC33] hover:bg-[#e6b82e] text-[#1E0D08] px-5 py-2 text-xs font-extrabold shadow-lg transition-transform hover:scale-105"
              >
                Explore {lightboxVisual.title} in Menu →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
