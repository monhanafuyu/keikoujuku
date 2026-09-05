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
        <div className="absolute inset-0 bg-gradient-to-b from-[#080E1A]/60 via-[#080E1A]/50 to-[#080E1A]/80"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Sub-badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3f2e1a]/80 border border-[#d4b783]/40 text-[#d4b783] text-xs font-bold tracking-widest shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c4a365] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4b783]"></span>
          </span>
          慶應ROUTE
        </div>

        {/* Main H1 Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-[4rem] font-serif font-bold text-white mb-6 leading-[1.25] tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
          一般も、推薦も。<br />
          慶應合格へのルートを、<br />
          一つに絞らない。
        </h1>
        
        <p className="text-xl sm:text-2xl font-bold text-[#d4b783] mb-8 tracking-wide drop-shadow-md">
          現役慶應生とつくる、あなただけの慶應合格戦略。
        </p>

        {/* Lead Description */}
        <div className="max-w-3xl mx-auto mb-10 w-full">
          <div className="bg-black/60 border border-white/15 px-6 py-5 sm:px-8 sm:py-6 rounded-lg backdrop-blur-md shadow-2xl">
            <p className="text-sm sm:text-base md:text-lg text-slate-100 font-sans tracking-wide leading-relaxed">
              <span className="font-semibold block sm:inline">一般選抜・慶應法FIT・総合型選抜・指定校推薦まで対応。</span>
              <span className="block mt-1 sm:mt-0 text-slate-200">受験戦略の設計から毎週の学習管理、分からない問題の個別解説まで、慶應合格に向けて一貫してサポートします。</span>
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center w-full mb-14">
          <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto min-w-[280px] sm:min-w-[320px] px-10 py-4 sm:py-5 bg-[#b58b47] hover:bg-[#a07a38] text-white font-bold text-base sm:text-lg transition-all rounded-md shadow-2xl tracking-widest active:scale-[0.98] border border-[#d4ab63]/40"
          >
            無料受験戦略相談を申し込む
          </button>
        </div>

        {/* 5 Feature Badges */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 w-full max-w-4xl mx-auto">
          {[
            '慶應専門',
            '現役慶應生が指導',
            '一般・推薦両対応',
            '1対1サポート',
            '質問・個別解説'
          ].map((title, idx) => (
            <div 
              key={idx} 
              className="bg-[#0B1426]/70 backdrop-blur-md border border-white/15 py-3.5 px-4 rounded-md text-center hover:border-white/30 transition-colors shadow-lg"
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
