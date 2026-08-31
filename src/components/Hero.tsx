import React from 'react';

export const Hero: React.FC<{ onOpenConsultation: () => void }> = ({
  onOpenConsultation,
}) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden min-h-[90vh] flex flex-col justify-center items-center">
      {/* Background Image with Brightened Campus Photo & Balanced Atmospheric Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Old_Keio_University_Library_20090725.jpg" 
          alt="慶應義塾大学 三田キャンパス 旧図書館" 
          className="w-full h-full object-cover object-center brightness-95 contrast-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080E1A]/45 via-[#080E1A]/40 to-[#080E1A]/70"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Main H1 Headline in Serif */}
        <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-serif font-bold text-white mb-8 leading-[1.35] tracking-widest drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
          一般も、推薦も。<br />
          現役慶應生とつくる、あなた<br />
          だけの合格戦略。
        </h1>

        {/* Lead Description Box */}
        <div className="max-w-3xl mx-auto mb-10 w-full">
          <div className="bg-black/60 border border-white/15 px-6 py-5 sm:px-8 sm:py-6 rounded-lg backdrop-blur-md shadow-2xl">
            <p className="text-sm sm:text-base md:text-lg text-slate-100 font-sans tracking-wide leading-relaxed">
              <span className="font-semibold block sm:inline">一般選抜・慶應法FIT・総合型選抜・指定校推薦まで対応。</span>
              <span className="block mt-1 sm:mt-0 text-slate-200">志望校から逆算した学習計画を毎週管理し、分からない問題は現役慶應生が個別に解説します。</span>
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center w-full mb-14">
          <button 
            onClick={onOpenConsultation} 
            className="w-full sm:w-auto min-w-[280px] sm:min-w-[320px] px-10 py-4 bg-[#b58b47] hover:bg-[#a07a38] text-white font-bold text-base sm:text-lg transition-all rounded-md shadow-2xl tracking-widest active:scale-[0.98] border border-[#d4ab63]/40"
          >
            無料で受験戦略を相談する
          </button>
        </div>

        {/* 4 Feature Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl mx-auto">
          {[
            '現役慶應生が指導',
            '一般・推薦の両方に対応',
            '毎週の学習管理',
            '質問・個別解説'
          ].map((title, idx) => (
            <div 
              key={idx} 
              className="bg-[#0B1426]/60 backdrop-blur-md border border-white/15 py-3.5 px-4 rounded-md text-center hover:border-white/30 transition-colors shadow-lg"
            >
              <span className="text-white font-medium text-xs sm:text-sm tracking-wider block">
                {title}
              </span>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

