import React from 'react';
import { Star, ExternalLink, Heart, CheckCircle2 } from 'lucide-react';
import { CUSTOMER_REVIEWS, STORE_INFO } from '../data/superDeluxeData';
import { CustomerReview } from '../types';
import { YouTubeAutoplayEmbed } from './YouTubeAutoplayEmbed';

interface ReviewsSectionProps {
  language: 'en' | 'ta';
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ language }) => {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-[#E8F4FD] relative">
      <div className="content-container">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#cf0924] font-display flex items-center gap-1.5">
              <span>REAL GOOGLE REVIEWS</span>
              <span className="text-[#2308ca] font-extrabold">• 4.9 ★ Rating</span>
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-chocolate flex items-center justify-center gap-2">
            <span>{language === 'ta' ? 'வாடிக்கையாளர்களின் அன்பு' : 'LOVED BY OUR GUESTS'}</span>
            <span className="text-[#cf0924]">❤️</span>
          </h2>

          <div className="flex justify-center mt-3 mb-4">
            <span className="squiggly-accent"></span>
          </div>

          <p className="text-chocolate-muted text-sm sm:text-base font-medium">
            {language === 'ta'
              ? 'கூடுவாஞ்சேரி சூப்பர் டீலக்ஸ் சாஃப்டீஸ் பற்றிய எங்கள் அன்பான விருந்தினர்களின் உண்மையான கருத்துக்கள்.'
              : 'Real, unedited feedback from our sweet guests at our Guduvanchery parlour.'}
          </p>
        </div>

        {/* Reviews Cards Grid (1 col on mobile, 2 on tablet, 3 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CUSTOMER_REVIEWS.slice(0, 3).map((rev: CustomerReview) =>
            rev.id === 'rev-2' ? (
              <div
                key={rev.id}
                className="bg-white rounded-3xl p-4 sm:p-5 border-2 border-slate-200 hover:border-[#cf0924] shadow-soft hover:shadow-floating transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="badge-pill bg-[#cf0924] text-white text-[10px] font-extrabold">
                      REEL HIGHLIGHT
                    </span>
                    <span className="text-[11px] font-bold text-[#2308ca]">
                      @SuperDeluxeSofties
                    </span>
                  </div>
                  <div className="w-full h-[195px] sm:h-[210px] rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 shadow-inner">
                    <YouTubeAutoplayEmbed
                      videoId="TYzVoPrmA-w"
                      title="Super Deluxe Softies Customer Short"
                    />
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-chocolate-muted">
                  <span className="text-[#cf0924]">Taste the Swirl Live</span>
                  <span className="text-[#2308ca]">YouTube Shorts ★</span>
                </div>
              </div>
            ) : (
              <div
                key={rev.id}
                className="bg-white rounded-3xl p-6 border-2 border-slate-200 hover:border-[#FFCC33] shadow-soft hover:shadow-floating transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Author Info & Avatar */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full text-white font-bold text-sm flex items-center justify-center shadow-xs"
                        style={{ backgroundColor: rev.avatarBg }}
                      >
                        {rev.avatarLetter}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-chocolate leading-tight flex items-center gap-1">
                          <span>{rev.authorName}</span>
                          {rev.isVerified && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#2308ca] inline fill-blue-50" />
                          )}
                        </h4>
                        <p className="text-[11px] text-chocolate-muted">{rev.timeAgo}</p>
                      </div>
                    </div>

                    {/* Google G icon */}
                    <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-xs font-black text-[#2308ca] border border-slate-200">
                      G
                    </div>
                  </div>

                  {/* 5 Vibrant Gold Stars (#FFCC33) */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-[#FFCC33] fill-[#FFCC33]"
                      />
                    ))}
                  </div>

                  {/* Review Body */}
                  <p className="text-xs sm:text-sm text-chocolate/90 leading-relaxed font-medium">
                    "{rev.text}"
                  </p>
                </div>

                {/* Bottom tag */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-chocolate-muted font-bold">
                  <span className="text-[#2308ca]">Verified Google Review</span>
                  <span className="text-[#FFCC33] font-black">★★★★★</span>
                </div>
              </div>
            )
          )}
        </div>

        {/* View All Reviews on Google Link */}
        <div className="mt-10 text-center">
          <a
            href={STORE_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-chocolate hover:text-[#2308ca] py-2.5 px-6 rounded-full bg-white border-2 border-slate-200 hover:border-[#2308ca] shadow-soft hover:shadow-md transition-all group"
          >
            <span className="text-[#2308ca] font-black font-sans">G</span>
            <span>View All Reviews on Google</span>
            <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 text-[#cf0924]" />
          </a>
        </div>

      </div>
    </section>
  );
};
