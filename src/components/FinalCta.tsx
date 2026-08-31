import React from 'react';

interface FinalCtaProps {
  onOpenConsultation: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenConsultation }) => {
  return (
    <section className="bg-gradient-to-b from-slate-900 via-[#2a1f11] to-slate-950 py-32 text-center relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-25">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#c4a365] rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#a07c3f] rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight font-serif">
          受験方式を決める前に、<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e4cda5] via-white to-[#b38f4f]">合格への戦略</span>を決めよう。
        </h2>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-12 max-w-2xl mx-auto tracking-wide">
          一般選抜、慶應FIT、総合型選抜、指定校推薦。<br />
          現役慶應生と一緒に、現在の学力・評定・目標から、あなたに合った受験戦略を整理します。
        </p>
        
        <div className="flex justify-center">
          <button onClick={onOpenConsultation} className="px-10 py-5 rounded-2xl bg-[#b38f4f] hover:bg-[#c4a365] text-white font-bold text-lg shadow-xl shadow-[#b38f4f]/30 transition-all active:scale-[0.98] border border-[#d4b783]/40 min-w-[300px]">
            無料受験戦略相談を申し込む
          </button>
        </div>
      </div>
    </section>
  );
};
