import React from 'react';
import { Target, CalendarRange, ListChecks, ClipboardCheck, RefreshCw, ArrowRight, RotateCw, CheckCircle } from 'lucide-react';
import { SOLUTION_STEPS } from '../data';

export const SolutionCycle: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Target: <Target className="w-6 h-6" />,
    CalendarRange: <CalendarRange className="w-6 h-6" />,
    ListChecks: <ListChecks className="w-6 h-6" />,
    ClipboardCheck: <ClipboardCheck className="w-6 h-6" />,
    RefreshCw: <RefreshCw className="w-6 h-6" />
  };

  return (
    <section id="solution" className="py-20 bg-slate-50 border-y border-slate-200/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs font-bold mb-4">
            <RotateCw className="w-3.5 h-3.5 text-blue-600" />
            <span>逆算型マネジメントシステム</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            合格から逆算して、毎日の勉強まで設計します。
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            曖昧な「がんばる」を排除し、科学的なPDCAサイクルで合格までの最短ルートを常に維持します。
          </p>
        </div>

        {/* 5 Steps Linear & Cyclic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative mb-14">
          {SOLUTION_STEPS.map((step, index) => (
            <div
              key={step.stepNumber}
              className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between relative group"
            >
              {/* Top Step Number */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-blue-600">
                    {step.stepNumber}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                    {step.badge}
                  </span>
                </div>

                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {iconMap[step.iconName]}
                </div>

                <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecting indicator on desktop */}
              {index < SOLUTION_STEPS.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 bg-white border border-slate-200 rounded-full p-1 text-slate-400">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* PDCA Loop Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-1">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
                Sustainable PDCA
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-2">
                「計画 → 実行 → 確認 → 改善」を毎週回し続ける
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                1人では三日坊主になりがちな学習計画も、専属メンターが毎週のテストと面談で確実に伴走するため、計画倒れになることがありません。
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 text-center">
                <span className="text-xs font-bold text-blue-800 block">PLAN</span>
                <span className="text-sm font-black text-slate-900 mt-1 block">計画</span>
                <span className="text-[11px] text-slate-500 mt-1 block">日割タスク指定</span>
              </div>
              <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100 text-center">
                <span className="text-xs font-bold text-emerald-800 block">DO</span>
                <span className="text-sm font-black text-slate-900 mt-1 block">実行</span>
                <span className="text-[11px] text-slate-500 mt-1 block">LINE自習報告</span>
              </div>
              <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-100 text-center">
                <span className="text-xs font-bold text-amber-800 block">CHECK</span>
                <span className="text-sm font-black text-slate-900 mt-1 block">確認</span>
                <span className="text-[11px] text-slate-500 mt-1 block">週間確認テスト</span>
              </div>
              <div className="p-3.5 rounded-xl bg-purple-50/70 border border-purple-100 text-center">
                <span className="text-xs font-bold text-purple-800 block">ACTION</span>
                <span className="text-sm font-black text-slate-900 mt-1 block">改善</span>
                <span className="text-[11px] text-slate-500 mt-1 block">次週計画の最適化</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
