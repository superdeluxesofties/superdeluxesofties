import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete?: () => void;
  language?: 'en' | 'ta';
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete, language = 'en' }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Disable background scrolling while loader is visible
    document.body.style.overflow = 'hidden';

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Smooth progression
        const step = Math.max(3, Math.floor((100 - prev) / 5));
        return Math.min(100, prev + step);
      });
    }, 40);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const fadeTimer = setTimeout(() => {
        setIsFading(true);
      }, 250);

      const unmountTimer = setTimeout(() => {
        setIsMounted(false);
        document.body.style.overflow = '';
        if (onComplete) onComplete();
      }, 750);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(unmountTimer);
      };
    }
  }, [progress, onComplete]);

  if (!isMounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-b from-[#108DEA] via-[#0162C1] to-[#120366] text-white transition-opacity duration-500 ease-out select-none ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Loading Super Deluxe Softies"
      role="status"
    >
      {/* Background ambient radial glows */}
      <div className="absolute top-1/4 w-80 h-80 bg-[#FFCC33]/25 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 w-96 h-96 bg-[#cf0924]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-sm w-full">
        {/* Animated Brand Mascot / Swirling Softie */}
        <div className="relative mb-6">
          {/* Rotating dashed ring */}
          <div
            className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-dashed border-[#FFCC33]/80 animate-spin"
            style={{ animationDuration: '8s' }}
          ></div>

          {/* Glowing center icon container */}
          <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center shadow-2xl p-3 border-2 border-white">
            <img
              src="/images/brand/logo.png"
              alt="Super Deluxe Softies"
              className="w-full h-full object-contain animate-bounce"
              style={{ animationDuration: '2s' }}
            />
          </div>

          {/* Floating Emoji Badges */}
          <span className="absolute -top-1 -right-1 text-2xl animate-bob">🍦</span>
          <span className="absolute -bottom-1 -left-1 text-xl animate-bob-slow">✨</span>
        </div>

        {/* Brand Title */}
        <h2 className="text-2xl sm:text-3xl font-display font-black text-white drop-shadow-md">
          Super Deluxe
        </h2>
        <span className="text-xs font-display font-extrabold text-[#FFCC33] tracking-widest uppercase mt-0.5 flex items-center gap-1.5">
          <span>★</span> Softies &amp; Smiles <span>★</span>
        </span>

        {/* Cheerful Dynamic Loading Subtitle */}
        <p className="text-xs sm:text-sm text-blue-100 font-medium mt-3 min-h-[22px] animate-pulse">
          {language === 'ta'
            ? 'புதிய சாஃப்டீஸ் மற்றும் புன்னகைகளை தயார் செய்கிறோம்...'
            : 'Churning fresh softies with 100% real milk...'}
        </p>

        {/* Progress Bar Container */}
        <div className="w-full bg-white/20 rounded-full h-2.5 mt-5 p-0.5 backdrop-blur-xs overflow-hidden border border-white/25 shadow-inner">
          <div
            className="bg-gradient-to-r from-[#FFCC33] via-[#cf0924] to-[#FFCC33] h-full rounded-full transition-all duration-150 ease-out shadow-glow-yellow"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Percentage Counter & Zero Added Oils Tag */}
        <div className="w-full flex items-center justify-between text-[11px] font-bold text-blue-200 mt-2 px-1">
          <span>Made with Real Milk</span>
          <span className="text-[#FFCC33] font-black">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

