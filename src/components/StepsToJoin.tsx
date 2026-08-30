import React from 'react';
import { STEPS_TO_JOIN } from '../data';
import { ShieldCheck, Calendar, ArrowRight } from 'lucide-react';

interface StepsToJoinProps {
  onOpenConsultation: () => void;
}

export const StepsToJoin: React.FC<StepsToJoinProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>安心のステップ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            入塾までのシンプルな4ステップ
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            まずは無料相談でお子様・ご自身の現状と目標をお聞かせください。
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {STEPS_TO_JOIN.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50/80 p-5 sm:p-6 rounded-2xl border border-slate-200/80 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-black px-2.5 py-1 rounded-md bg-blue-700 text-white">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                    {item.time}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {index < STEPS_TO_JOIN.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 bg-white border border-slate-200 rounded-full p-1 text-slate-400">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Reassurance Guarantee Badge Box */}
        <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-5 text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
          <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
          <p className="text-xs sm:text-sm font-bold text-emerald-950">
            無理な勧誘や後日の営業電話等は一切ございません。提案された学習計画をお持ち帰りいただき、ご家庭でじっくりご検討いただけます。
          </p>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm font-bold shadow-md shadow-blue-700/25 transition-all hover:shadow-lg active:scale-[0.99]"
          >
            <Calendar className="w-4 h-4" />
            <span>まずは無料で学習相談を予約する</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
