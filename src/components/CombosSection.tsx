import React from 'react';
import { ArrowRight, Sparkles, Tag, Plus } from 'lucide-react';
import { COMBOS_LIST } from '../data/superDeluxeData';
import { ComboItem } from '../types';

interface CombosSectionProps {
  onSelectCombo: (combo: ComboItem) => void;
  onViewAllCombos: () => void;
  language: 'en' | 'ta';
}

export const CombosSection: React.FC<CombosSectionProps> = ({
  onSelectCombo,
  onViewAllCombos,
  language,
}) => {
  return (
    <section id="combos" className="py-10 md:py-14 bg-[#E8F4FD] border-y border-sky-200/80 relative">
      <div className="content-container">
        
        {/* Header Block */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 mb-1.5">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#cf0924] font-display flex items-center gap-1.5">
              <span>★</span> {language === 'ta' ? 'இணைந்த மகிழ்ச்சி' : 'BETTER TOGETHER'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-chocolate">
            {language === 'ta' ? 'புன்னகை சேர்க்கும் காம்போஸ்' : 'Combos Made for Joy'}
          </h2>

          <div className="flex justify-center mt-2 mb-2.5">
            <span className="squiggly-accent"></span>
          </div>

          <p className="text-chocolate-muted text-xs sm:text-sm font-medium">
            {language === 'ta'
              ? 'ஒன்றாக சுவைத்தால் இன்னும் இனிமை! குடும்பத்தினருடனும் நண்பர்களுடனும் பகிர்ந்து மகிழுங்கள்.'
              : 'Pair your favourite softies, loaded sundaes, and crunchy dips for double the delight.'}
          </p>
        </div>

        {/* Compact 3 Combo Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5 max-w-5xl mx-auto">
          {COMBOS_LIST.map((combo: ComboItem) => (
            <div
              key={combo.id}
              onClick={() => onSelectCombo(combo)}
              className="group bg-white rounded-2xl p-4 border-2 border-slate-200 hover:border-[#2308ca] shadow-soft hover:shadow-floating hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden"
            >
              {/* Savings Badge in vibrant Red #cf0924 */}
              <div className="absolute top-3 right-3 z-10">
                <span className="badge-pill bg-[#cf0924] text-white text-[10px] font-black shadow-glow-red px-2.5 py-0.5">
                  {combo.tag}
                </span>
              </div>

              <div>
                {/* Visual Area */}
                <div className="h-36 sm:h-40 w-full rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center p-2 mb-3 group-hover:bg-blue-50/20 transition-colors border border-slate-200/80">
                  <img
                    src={combo.image}
                    alt={combo.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Combo Title */}
                <h3 className="text-base sm:text-lg font-display font-bold text-chocolate group-hover:text-[#2308ca] transition-colors">
                  {combo.name}
                </h3>
                <p className="text-[11px] font-bold text-[#2308ca] mt-0.5 uppercase tracking-wider">
                  {combo.subtitle}
                </p>

                {/* Included Items Checklist */}
                <div className="mt-2.5 space-y-1 text-[11px] text-chocolate-muted font-medium">
                  {combo.itemsIncluded.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#cf0924]"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing & CTA Row */}
              <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl font-display font-black text-chocolate">
                      ₹{combo.price}
                    </span>
                    {combo.originalPrice && (
                      <span className="text-[11px] text-chocolate-muted line-through font-semibold">
                        ₹{combo.originalPrice}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-emerald-700 font-bold block">
                    Instant savings of ₹{combo.savings}
                  </span>
                </div>

                <button
                  type="button"
                  className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#2308ca] group-hover:text-white text-chocolate flex items-center justify-center transition-all duration-300 shadow-xs"
                  aria-label={`Select ${combo.name}`}
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Combos Action */}
        <div className="mt-7 text-center">
          <button
            type="button"
            onClick={onViewAllCombos}
            className="inline-flex items-center gap-2 text-xs font-bold text-chocolate hover:text-[#2308ca] py-2 px-5 rounded-full bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-[#2308ca] transition-colors group shadow-2xs"
          >
            <span>View All Combos</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#cf0924]" />
          </button>
        </div>

      </div>
    </section>
  );
};
