import React from 'react';
import { HelpCircle, AlertCircle, CheckCircle2, ArrowDown } from 'lucide-react';
import { WORRIES_LIST } from '../data';

export const Worries: React.FC = () => {
  return (
    <section id="worries" className="py-20 bg-[#0a0a0a] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80 text-red-700 text-xs font-bold mb-4">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>高校生・受験生のつまずきポイント</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-display">
            こんな悩み、ありませんか？
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            多くの受験生が「勉強のやる気はあるのに、やり方が定まらない」ことで貴重な時間を浪費してしまっています。
          </p>
        </div>

        {/* Worries Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {WORRIES_LIST.map((worry, index) => (
            <div
              key={worry.id}
              className={`p-5 sm:p-6 rounded-2xl border transition-all duration-200 bg-[#050505]/70 hover:bg-[#0a0a0a] hover:shadow-md border-white/10/90 ${
                index === WORRIES_LIST.length - 1 ? 'md:col-span-2 max-w-2xl md:mx-auto w-full' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0 font-bold text-sm">
                  0{index + 1}
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-200/70 text-slate-300">
                      {worry.tag}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                    「{worry.quote}」
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {worry.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Down Arrow Indicator */}
        <div className="flex justify-center mb-6">
          <div className="w-10 h-10 rounded-full bg-[#b38f4f]/10 border border-[#b38f4f]/30 flex items-center justify-center text-[#b38f4f] animate-bounce">
            <ArrowDown className="w-5 h-5" />
          </div>
        </div>

        {/* Essential Core Insight Box */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-[#2a1f11] text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#b38f4f]/10 rounded-full blur-2xl pointer-events-none" />
          
          <span className="inline-block text-[#d4b783] text-xs sm:text-sm font-bold tracking-wider uppercase mb-3">
            The Truth of College Entrance Exam
          </span>

          <p className="text-lg sm:text-2xl md:text-3xl font-extrabold leading-relaxed sm:leading-snug max-w-3xl mx-auto font-display">
            大学受験で重要なのは、<br className="sm:hidden" />
            <span className="text-slate-400 line-through decoration-red-400/80 decoration-2">
              授業を何時間受けたか
            </span>
            ではありません。
          </p>

          <div className="my-4 w-16 h-1 bg-[#c4a365] mx-auto rounded-full" />

          <p className="text-xl sm:text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#b38f4f]/30 via-white to-sky-200 max-w-3xl mx-auto leading-relaxed">
            合格までに必要な勉強を、<br />
            正しい順番で、最後までやり切れるかです。
          </p>

          <p className="mt-6 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            授業を聞くだけで偏差値が上がるなら、全員が合格できるはずです。実際の合否を分けるのは、授業以外の「自習時間でどれだけ質の高い問題演習を積み上げたか」です。
          </p>
        </div>
      </div>
    </section>
  );
};
