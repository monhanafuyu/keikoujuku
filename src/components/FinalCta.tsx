import React from 'react';
import { Calendar, MessageCircle, ChevronRight, ShieldCheck } from 'lucide-react';

interface FinalCtaProps {
  onOpenConsultation: () => void;
  onOpenLineModal: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenConsultation, onOpenLineModal }) => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-950 text-white relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-25">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-sky-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/60 border border-blue-400/30 text-blue-200 text-xs font-bold mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span>完全無料・オンライン個別相談受付中</span>
        </div>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-6 font-display">
          受験勉強を、<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-sky-300">
            「何をすればいいかわからない」
          </span>
          から始めない。
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
          まずは現在の成績・志望校・勉強方法についてお聞かせください。<br className="hidden sm:inline" />
          無料学習相談で、あなた専用の逆算学習プランをご提案します。
        </p>

        {/* Dual Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-8">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-base font-bold shadow-xl shadow-blue-600/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
            id="final-consult-btn"
          >
            <Calendar className="w-5 h-5 text-blue-200" />
            <span>無料学習相談を申し込む</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenLineModal}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-white hover:bg-emerald-50 text-slate-900 border border-emerald-400 text-base font-bold transition-all hover:-translate-y-0.5 shadow-lg"
            id="final-line-btn"
          >
            <MessageCircle className="w-5 h-5 text-[#06C755]" />
            <span>LINEで気軽に相談する</span>
          </button>
        </div>

        <div className="flex items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            無理な勧誘は一切ありません
          </span>
          <span>•</span>
          <span>所要時間 約30分</span>
          <span>•</span>
          <span>保護者同席歓迎</span>
        </div>
      </div>
    </section>
  );
};
