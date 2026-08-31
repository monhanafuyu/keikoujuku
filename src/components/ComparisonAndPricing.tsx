import React from 'react';
import { Check, X, Minus } from 'lucide-react';

export const ComparisonAndPricing: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  return (
    <section className="py-24 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Comparison Table */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-normal text-slate-900 mb-6 font-serif tracking-widest">
              授業だけでも、学習管理だけでもない。
            </h2>
            <p className="text-slate-600 tracking-wide">
              一般的な塾との違いは「横断的な受験戦略」と「個別の質問指導」までカバーしている点です。
            </p>
          </div>

          <div className="overflow-x-auto pb-6">
            <table className="w-full min-w-[800px] border-collapse bg-white shadow-sm border border-slate-200">
              <thead>
                <tr>
                  <th className="w-1/5 p-4 text-left font-bold text-slate-500 border-b-2 border-slate-200">項目</th>
                  <th className="w-1/5 p-4 text-center font-bold text-slate-500 bg-slate-50 border-b-2 border-slate-200">一般的な予備校</th>
                  <th className="w-1/5 p-4 text-center font-bold text-slate-500 bg-slate-50 border-b-2 border-slate-200">一般的な学習管理塾</th>
                  <th className="w-1/5 p-4 text-center font-bold text-slate-500 bg-slate-50 border-b-2 border-slate-200">推薦専門塾</th>
                  <th className="w-1/5 p-5 text-center font-bold text-white bg-[#b38f4f] border-b-2 border-[#a07c3f] text-lg relative shadow-md">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-4 py-1 rounded-sm whitespace-nowrap font-bold tracking-widest shadow-sm">当塾</div>
                    慶應ROUTE
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { label: '授業', a: '◯ 中心', b: '✕', c: '✕', d: '✕ (自学自習)' },
                  { label: '学習管理', a: '✕', b: '◯ 中心', c: '△', d: '◯ 徹底管理' },
                  { label: '質問対応', a: '△ 順番待ち', b: '△ 科目限定', c: '✕', d: '◯ いつでも' },
                  { label: '個別解説', a: '△', b: '✕', c: '◯ 書類', d: '◯ 学習+書類' },
                  { label: '一般選抜', a: '◯', b: '◯', c: '✕', d: '◯' },
                  { label: '総合型選抜', a: '✕', b: '✕', c: '◯', d: '◯' },
                  { label: '慶應FIT', a: '✕', b: '✕', c: '△', d: '◯' },
                  { label: '指定校推薦', a: '✕', b: '✕', c: '△', d: '◯' },
                  { label: '評定管理', a: '✕', b: '△', c: '◯', d: '◯' },
                  { label: '英検', a: '◯ 集団', b: '◯', c: '△', d: '◯' },
                  { label: '小論文 / 面接', a: '◯ 集団', b: '✕', c: '◯', d: '◯' },
                  { label: '受験戦略', a: '△', b: '◯', c: '△', d: '◯ 横断的戦略' },
                  { label: '講師', a: 'プロ/学生', b: '学生', c: 'プロ/学生', d: '現役慶應生中心' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-700 bg-white">{row.label}</td>
                    <td className="p-4 text-center text-slate-500 bg-slate-50/50">{row.a}</td>
                    <td className="p-4 text-center text-slate-500 bg-slate-50/50">{row.b}</td>
                    <td className="p-4 text-center text-slate-500 bg-slate-50/50">{row.c}</td>
                    <td className="p-4 text-center font-bold text-[#b38f4f] bg-[#b38f4f]/5 border-x border-[#b38f4f]/10 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">{row.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="plans" className="pt-24 border-t border-slate-200">
          <div className="text-center mb-16">
            <p className="text-[#b38f4f] font-serif tracking-[0.3em] text-sm font-bold mb-4">COURSE</p>
            <h2 className="text-3xl md:text-4xl font-normal text-slate-900 mb-6 font-serif tracking-widest">
              コース・料金案内
            </h2>
            <p className="text-slate-600 tracking-wide text-sm md:text-base">
              慶應合格に向けて、1対1でじっくり取り組む個別指導コースです。
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-0 relative bg-white border border-slate-200 shadow-sm p-8 md:p-12 rounded-sm">
            
            {/* Horizontal Course List */}
            <div className="border-b border-slate-100 pb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative pl-6">
              {/* Left Gold Border */}
              <div className="absolute left-0 top-6 md:top-1/2 md:-translate-y-1/2 w-[3px] h-12 bg-[#b38f4f]"></div>

              <div className="flex-1 max-w-2xl">
                <h3 className="text-xl font-serif text-slate-900 font-bold mb-4 tracking-widest">個別指導コース</h3>
                <p className="text-slate-600 text-sm leading-relaxed tracking-wide">
                  1対1で弱点科目をじっくり克服。英語・小論文の添削から志望校の過去問演習まで対応します。一般選抜と推薦入試（FIT/総合型）の両方を見据えた対策が可能です。
                </p>
              </div>

              <div className="md:text-right shrink-0 mt-4 md:mt-0">
                <div className="text-3xl font-serif text-[#b38f4f] tracking-wider mb-2 font-bold">¥29,800<span className="text-sm text-slate-500 font-sans tracking-normal font-normal ml-1">(税込)</span></div>
                <div className="text-sm text-slate-500 tracking-wide">月4回・1回60分</div>
              </div>
            </div>

            <div className="pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative pl-6">
              {/* Left Gold Border */}
              <div className="absolute left-0 top-12 md:top-1/2 md:-translate-y-1/2 w-[3px] h-12 bg-[#b38f4f]"></div>

              <div className="flex-1 max-w-2xl">
                <h3 className="text-xl font-serif text-slate-900 font-bold mb-4 tracking-widest">学習管理サポートコース</h3>
                <p className="text-slate-600 text-sm leading-relaxed tracking-wide">
                  24時間以内返信のチャットで、学習の疑問や不安をいつでも相談できる伴走型サポート。毎日の学習計画の作成と進捗管理で、自学自習の質を落とさず合格まで並走します。
                </p>
              </div>

              <div className="md:text-right shrink-0 mt-4 md:mt-0">
                <div className="text-3xl font-serif text-[#b38f4f] tracking-wider mb-2 font-bold">¥10,000<span className="text-sm text-slate-500 font-sans tracking-normal font-normal ml-1">(税込)</span></div>
                <div className="text-sm text-slate-500 tracking-wide">月額</div>
              </div>
            </div>

          </div>

          <div className="text-center mt-8">
             <p className="text-slate-500 text-xs tracking-wide">
              ※入塾金・教材費は別途となります。詳細はお問い合わせください。
             </p>
          </div>
          
          <div className="mt-16 flex justify-center">
            <button onClick={onOpenConsultation} className="px-12 py-5 rounded-sm bg-[#b38f4f] hover:bg-[#a07c3f] text-white font-bold transition-colors shadow-lg shadow-[#b38f4f]/20 tracking-widest text-lg">
              無料受験相談を申し込む
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
