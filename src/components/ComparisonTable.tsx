import React from 'react';
import { COMPARISON_ITEMS } from '../data';
import { Check, X, ShieldAlert, Zap } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  return (
    <section id="comparison" className="py-20 bg-slate-50 border-y border-slate-200/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#b38f4f]/10 border border-[#b38f4f]/30/80 text-[#594226] text-xs font-bold mb-4">
            <Zap className="w-3.5 h-3.5 text-[#b38f4f]" />
            <span>一般的な塾・予備校との比較</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            授業以外の「残り160時間」をどう過ごすか。
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            1週間のうち、塾で授業を受ける時間はわずか数時間。合否を分けるのは圧倒的な「自習時間」の密度です。
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-4 px-5 text-xs font-bold text-slate-500 bg-slate-50 w-1/5">
                    項目
                  </th>
                  <th className="py-4 px-5 text-sm font-bold text-slate-600 bg-slate-100/70 w-2/5">
                    一般的な個別・集団予備校
                  </th>
                  <th className="py-4 px-5 text-sm font-black text-white bg-[#a07c3f] w-2/5">
                    <div className="flex items-center gap-2">
                      <span>慶應ROUTE（学習管理塾）</span>
                      <span className="text-[10px] bg-[#c4a365] text-white px-2 py-0.5 rounded-full font-bold">推奨</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {COMPARISON_ITEMS.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-5 font-bold text-slate-800 bg-slate-50/50">
                      {item.category}
                    </td>
                    <td className="py-4 px-5 text-slate-600 leading-relaxed bg-slate-50/20">
                      <div className="flex items-start gap-2">
                        <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-[10px] shrink-0 mt-0.5">△</span>
                        <span>{item.traditional}</span>
                      </div>
                    </td>
                    <td className="py-4 px-5 font-medium text-slate-900 leading-relaxed bg-[#b38f4f]/10/20">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#b38f4f] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-[#2a1f11] block">{item.passgate}</span>
                          <span className="text-[11px] text-[#a07c3f] block mt-0.5">{item.advantage}</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Strong Final Punchline Banner */}
        <div className="bg-gradient-to-r from-[#3f2e1a] via-slate-900 to-[#2a1f11] text-white p-8 sm:p-12 rounded-3xl shadow-xl text-center relative overflow-hidden border border-slate-800">
          <div className="max-w-3xl mx-auto relative z-10">
            <span className="text-xs font-bold text-[#e4cda5] tracking-widest uppercase mb-2 block">
              Our Core Mission
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-snug font-display">
              「授業の時間だけではなく、<br className="sm:hidden" />
              残りの1週間を変える。」
            </h3>
            <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
              合格に必要な自習時間を、無駄なく、迷いなく、最高の集中力で駆け抜ける。それが大学受験専門の学習管理塾 慶應ROUTE の提供する価値です。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
