import React, { useState } from 'react';
import { Heart, Sparkles, MessageCircle } from 'lucide-react';
import { MASCOT_EXPRESSIONS } from '../data/superDeluxeData';
import { MascotExpression } from '../types';
import { YouTubeAutoplayEmbed } from './YouTubeAutoplayEmbed';

interface MascotShowcaseProps {
  language: 'en' | 'ta';
}

export const MascotShowcase: React.FC<MascotShowcaseProps> = ({ language }) => {
  const [selectedExpression, setSelectedExpression] = useState<MascotExpression>(MASCOT_EXPRESSIONS[0]);

  const renderExpressionCard = (expr: MascotExpression) => {
    const isSelected = selectedExpression.id === expr.id;
    return (
      <div
        key={expr.id}
        onClick={() => setSelectedExpression(expr)}
        className={`group rounded-2xl p-2.5 border transition-all duration-300 flex flex-col items-center text-center cursor-pointer relative ${
          isSelected
            ? 'bg-white border-2 border-[#2308ca] shadow-medium scale-[1.03] ring-2 ring-[#2308ca]/30'
            : 'bg-white border-2 border-slate-200 shadow-soft hover:shadow-medium hover:-translate-y-1 hover:border-[#2308ca]/60'
        }`}
      >
        <div className="aspect-square w-full rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center mb-2 group-hover:bg-white transition-colors border border-slate-200/80 p-1.5">
          <img
            src={expr.image}
            alt={`Mr. Deluxe ${expr.label}`}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        <h4 className="text-xs font-display font-bold text-chocolate group-hover:text-[#2308ca] transition-colors leading-tight">
          {expr.label}
        </h4>

        <span className="text-[9px] text-chocolate-muted mt-0.5 leading-tight font-semibold">
          {expr.tag}
        </span>

        {isSelected && (
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#cf0924] animate-ping"></span>
        )}
      </div>
    );
  };

  return (
    <section id="mr-deluxe" className="py-16 md:py-24 bg-[#E8F4FD] relative border-y border-sky-200/80">
      <div className="content-container">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#2308ca] font-display flex items-center justify-center gap-1.5">
              {language === 'ta' ? 'எங்கள் சின்னம்' : 'OUR ICONIC MASCOT'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-chocolate">
            {language === 'ta' ? 'வணக்கம் சொல்லுங்கள் — மிஸ்டர் டீலக்ஸ்' : 'SAY HELLO TO Mr. Deluxe'}
          </h2>

          <div className="flex justify-center mt-3 mb-4">
            <span className="squiggly-accent-blue"></span>
          </div>

          <p className="text-chocolate-muted text-sm sm:text-base font-medium">
            {language === 'ta'
              ? 'பல உணர்வுகள், ஒரே தூய இதயம்! ஒவ்வொரு நாளும் உங்கள் முகத்தில் புன்னகையை கொண்டு வர இங்கே இருக்கிறார்.'
              : 'Many expressions, one pure heart! Churning happiness, pure milk, and cheerful smiles everyday.'}
          </p>
        </div>

        {/* Mascot Interactive Dialogue Bubble */}
        <div className="max-w-xl mx-auto mb-8 bg-gradient-to-r from-white via-blue-50/25 to-white border-2 border-[#FFCC33] rounded-3xl p-4 sm:p-5 shadow-soft flex items-center gap-4 transition-all duration-300">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-[#2308ca] shadow-xs shrink-0 bg-slate-50 p-1">
            <img
              src={selectedExpression.image}
              alt={selectedExpression.label}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-display font-extrabold text-[#2308ca] uppercase tracking-wider">
                Mr. Deluxe says ({selectedExpression.label}):
              </span>
            </div>
            <p className="text-sm font-bold text-chocolate mt-0.5 italic">
              "{selectedExpression.quote}"
            </p>
          </div>
        </div>

        {/* 3 Left Emojis + Center Compact Video + 3 Right Emojis */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px_1fr] gap-4 items-center">
          {/* Left 3 Expression Cards */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
            {MASCOT_EXPRESSIONS.slice(0, 3).map(renderExpressionCard)}
          </div>

          {/* Center Reduced-Size Video Feature (zero padding, no header) */}
          <div className="rounded-2xl overflow-hidden border-2 border-[#2308ca]/25 shadow-soft bg-slate-950 order-first lg:order-none max-w-[260px] lg:max-w-none mx-auto w-full aspect-video">
            <YouTubeAutoplayEmbed
              videoId="iz_7lt_ay-A"
              title="Mr. Deluxe Mascot Showcase Video"
            />
          </div>

          {/* Right 3 Expression Cards */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
            {MASCOT_EXPRESSIONS.slice(3, 6).map(renderExpressionCard)}
          </div>
        </div>

      </div>
    </section>
  );
};
