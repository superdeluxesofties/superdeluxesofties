import React from 'react';

interface MarqueeTickerProps {
  language?: 'en' | 'ta';
}

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({ language }) => {
  const items = language === 'ta'
    ? [
        'உண்மையான பால்',
        'பூஜ்ஜிய சேர்க்கப்பட்ட எண்ணெய்',
        '100% தூய சைவம்',
        'விலை ₹25 முதல்',
        'தினமும் புதிதாக தயாரிக்கப்படுகிறது',
        'புன்னகையை பரிமாறுகிறோம்',
      ]
    : [
        'REAL MILK',
        'ZERO ADDED OILS',
        '100% PURE VEG',
        'FROM ₹25',
        'FRESH CHURNED DAILY',
        'SERVING SMILES',
      ];

  const renderSegment = (keyPrefix: string) => (
    <span
      key={keyPrefix}
      className="inline-flex items-center gap-8 sm:gap-10 shrink-0 font-display font-extrabold text-sm sm:text-base tracking-wider text-white"
    >
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <span className="whitespace-nowrap drop-shadow-xs">{item}</span>
          <span className="text-[#FFCC33] text-base sm:text-lg select-none">✦</span>
        </React.Fragment>
      ))}
    </span>
  );

  return (
    <div
      className="bg-[#1E0D08] py-3 sm:py-3.5 overflow-hidden relative border-y-2 border-[#FFCC33]/50 shadow-md z-20 group"
      aria-hidden="true"
    >
      <div className="flex w-max gap-8 sm:gap-10 animate-marquee group-hover:[animation-play-state:paused] cursor-default">
        {renderSegment('seg-1')}
        {renderSegment('seg-2')}
        {renderSegment('seg-3')}
        {renderSegment('seg-4')}
      </div>
    </div>
  );
};

