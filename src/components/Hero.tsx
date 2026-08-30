import React from 'react';

export const Hero: React.FC<{ onOpenConsultation: () => void }> = ({
  onOpenConsultation,
}) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0B1426] min-h-[90vh] flex flex-col justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Old_Keio_University_Library_20090725.jpg" 
          alt="Keio University Mita Campus" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-[#0B1426]/10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1426]/70 via-transparent to-[#0B1426]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Main Headline */}
        <div className="text-center mb-10 max-w-4xl mx-auto mt-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-serif tracking-widest drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
            一般も、推薦も。<br />
            現役慶應生とつくる、<br className="md:hidden" />あなただけの合格戦略。
          </h1>
          <p className="text-sm md:text-base text-slate-200 font-bold tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] bg-black/40 inline-block px-6 py-4 rounded-sm backdrop-blur-md leading-relaxed border border-white/10">
            一般選抜・慶應法FIT・総合型選抜・指定校推薦まで対応。<br className="hidden md:block"/>
            志望校から逆算した学習計画を毎週管理し、分からない問題は現役慶應生が個別に解説します。
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-4 w-full max-w-sm mx-auto mb-12">
          <button 
            onClick={onOpenConsultation} 
            className="w-full py-4 bg-[#b38f4f] hover:bg-[#a07c3f] text-white font-bold text-lg transition-colors rounded-sm shadow-xl"
          >
            無料で受験戦略を相談する
          </button>
        </div>

        {/* 4 Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full max-w-4xl mx-auto">
          {[
            '現役慶應生が指導',
            '一般・推薦の両方に対応',
            '毎週の学習管理',
            '質問・個別解説'
          ].map((feature, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-sm text-center">
              <span className="text-white font-bold text-xs md:text-sm tracking-widest drop-shadow-md">{feature}</span>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};
