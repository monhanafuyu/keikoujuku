import React from 'react';
import { BookOpen, Target, CalendarCheck, MessageCircleQuestion } from 'lucide-react';

export const Hero: React.FC<{ onOpenConsultation: () => void; onOpenLine: () => void }> = ({
  onOpenConsultation,
  onOpenLine,
}) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-slate-50 rounded-full blur-3xl opacity-70"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-bold mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          高1・高2からの受験戦略
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
          高3で、<span className="text-blue-600">選べる</span>受験生へ。
        </h1>

        <p className="text-lg md:text-2xl font-bold text-slate-700 mb-6 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          一般も、推薦も。<br className="md:hidden" />
          現役慶應生とつくる、あなただけの合格戦略。
        </p>

        <p className="max-w-2xl mx-auto text-slate-500 text-sm md:text-base leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          一般選抜・慶應FIT・総合型選抜・指定校推薦まで対応。<br />
          志望校から逆算した学習計画を作成し、毎週の進捗管理と個別質問対応で、<br className="hidden md:block" />
          受験勉強を最後まで伴走します。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-xl shadow-blue-600/20 transition-all hover:scale-105 active:scale-95"
          >
            無料で受験戦略を相談する
          </button>
          <button
            onClick={onOpenLine}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#06C755] hover:bg-[#05b34c] text-white font-bold text-lg shadow-xl shadow-[#06C755]/20 transition-all hover:scale-105 active:scale-95"
          >
            LINEで気軽に相談する
          </button>
        </div>

        {/* 4 Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
          {[
            { icon: User, title: '現役慶應生が担当', color: 'text-blue-600', bg: 'bg-blue-50' },
            { icon: Target, title: '一般＆推薦の両方に対応', color: 'text-indigo-600', bg: 'bg-indigo-50' },
            { icon: CalendarCheck, title: '毎週の学習管理', color: 'text-emerald-600', bg: 'bg-emerald-50' },
            { icon: MessageCircleQuestion, title: 'いつでも質問・個別解説', color: 'text-amber-600', bg: 'bg-amber-50' },
          ].map((feature, idx) => (
            <div key={idx} className="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm flex flex-col items-center text-center gap-3">
              <div className={`p-3 rounded-xl ${feature.bg}`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <span className="font-bold text-slate-800 text-sm">{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Dummy icon for User since it wasn't imported above to save line space
const User = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);
