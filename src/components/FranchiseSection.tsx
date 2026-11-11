import React from 'react';
import { CheckCircle2, ArrowRight, Sparkles, Building2 } from 'lucide-react';
import { STORE_INFO } from '../data/superDeluxeData';

interface FranchiseSectionProps {
  onOpenEnquiryModal: () => void;
  language: 'en' | 'ta';
}

export const FranchiseSection: React.FC<FranchiseSectionProps> = ({
  onOpenEnquiryModal,
  language,
}) => {
  const points = [
    {
      title: language === 'ta' ? 'வலுவான பிராண்ட் அடையாளம்' : 'Strong Brand & Loved Mascot',
      desc: language === 'ta' ? 'அனைவராலும் விரும்பப்படும் மிஸ்டர் டீலக்ஸ்' : 'Instant recognition with Mr. Deluxe & vibrant parlour design',
    },
    {
      title: language === 'ta' ? 'உயர் தர தயாரிப்புகள்' : 'High Quality Products',
      desc: language === 'ta' ? 'உண்மையான பால், பூஜ்ஜிய சேர்க்கப்பட்ட எண்ணெய்' : 'Made with real milk & zero added oils, 10-day flavour rotation',
    },
    {
      title: language === 'ta' ? 'நிரூபிக்கப்பட்ட வணிக முறை' : 'Proven Business Model',
      desc: language === 'ta' ? 'குறைந்த முதலீடு, அதிக லாபம்' : 'Compact footprint, rapid turnaround, and robust gross margins',
    },
    {
      title: language === 'ta' ? 'முழுமையான ஆதரவு' : 'End-to-End Operational Support',
      desc: language === 'ta' ? 'இயந்திரம், பயிற்சி, மூலப்பொருட்கள்' : 'Machinery setup, barista training, supply chain & marketing aid',
    },
  ];

  return (
    <section id="partner" className="py-16 md:py-24 bg-[#E8F4FD] relative">
      <div className="content-container">
        
        {/* Main Franchise Container Card with vibrant ambient border */}
        <div className="bg-gradient-to-br from-white via-blue-50/20 to-white rounded-[2.5rem] p-8 sm:p-12 lg:p-16 border-2 border-[#FFCC33]/90 shadow-medium relative overflow-hidden">
          {/* Ambient colorful glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#2308ca]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFCC33]/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            {/* Left: Headline, Bullets & Enquire CTA */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#cf0924] font-display flex items-center gap-1.5 bg-[#fee8eb] px-3 py-1 rounded-full border border-[#cf0924]/20 shadow-2xs">
                  <Building2 className="w-3.5 h-3.5 text-[#cf0924]" />
                  <span>FRANCHISE & PARTNERSHIPS</span>
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-chocolate leading-tight">
                {language === 'ta' ? (
                  <>சூப்பர் டீலக்ஸ் உடன் இணையுங்கள்<br /><span className="text-[#2308ca]">இனிய வணிகத்தை தொடங்குங்கள்.</span></>
                ) : (
                  <>PARTNER WITH SUPER DELUXE<br /><span className="text-[#2308ca]">Build a sweet business with us.</span></>
                )}
              </h2>

              <p className="mt-4 text-sm sm:text-base text-chocolate-muted max-w-lg font-medium leading-relaxed">
                {language === 'ta'
                  ? 'எங்கள் வளரும் ஐஸ்கிரீம் குடும்பத்தில் இணையுங்கள். கியோஸ்க், பார்லர் அல்லது எக்ஸ்பிரஸ் விற்பனை நிலையங்களுக்கு இன்றே விண்ணப்பிக்கவும்.'
                  : 'Bring the joy of Super Deluxe Softies & Smiles to your neighbourhood. We offer scalable parlour and kiosk models with full operational guidance.'}
              </p>

              {/* 4 Key Points Checklist */}
              <div className="mt-8 space-y-4 w-full">
                {points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2308ca] shrink-0 mt-0.5 fill-[#ece8fc]" />
                    <div>
                      <h4 className="text-sm font-bold text-chocolate font-display">
                        {pt.title}
                      </h4>
                      <p className="text-xs text-chocolate-muted mt-0.5">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enquire Now CTA */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onOpenEnquiryModal}
                  className="btn-primary text-base py-3.5 px-8 shadow-glow-red group"
                  id="franchise-enquire-now-btn"
                >
                  <span>{language === 'ta' ? 'இன்றே விண்ணப்பிக்க →' : 'Enquire Now →'}</span>
                </button>

                <a
                  href={STORE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm py-3 px-6"
                >
                  <span>Direct WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Right: Visual of Parlour + Mascot Banner */}
            <div className="lg:col-span-5 relative group">
              <div className="relative rounded-3xl overflow-hidden shadow-floating border-4 border-[#FFCC33] bg-white">
                <img
                  src="/images/storefront/storefront.jpg"
                  alt="Super Deluxe Storefront & Franchise Setup"
                  className="w-full h-[380px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-chocolate-darker/80 via-transparent to-transparent"></div>

                {/* Overlaid Mascot Badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border-2 border-[#2308ca] flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-[#cf0924] bg-slate-100">
                    <img
                      src="/images/expressions/happy_card.jpg"
                      alt="Mr. Deluxe"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="text-xs font-display font-bold text-[#2308ca]">
                      Franchise Support Guarantee
                    </h5>
                    <p className="text-[11px] text-chocolate-muted">
                      Full staff training & daily dairy mix supply.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-3 -right-3 bg-amber-400 text-chocolate font-display font-bold text-xs py-1.5 px-3.5 rounded-full shadow-md border-2 border-white">
                Fast Setup: 2-3 Weeks
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
