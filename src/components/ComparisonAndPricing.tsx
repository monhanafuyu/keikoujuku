import React from 'react';
import { Check, X, Minus } from 'lucide-react';

export const ComparisonAndPricing: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  return (
    <section className="py-24 bg-[#0B1426] border-t border-white/5 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Comparison Table */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 font-serif tracking-widest">
              授業だけでも、学習管理だけでもない。
            </h2>
            <p className="text-slate-300 tracking-wide">
              一般的な塾との違いは「横断的な受験戦略」と「個別の質問指導」までカバーしている点です。
            </p>
          </div>

          <div className="overflow-x-auto pb-6">
            <table className="w-full min-w-[800px] border-collapse">
              <thead>
                <tr>
                  <th className="w-1/5 p-4 text-left font-bold text-slate-400 border-b-2 border-white/10">項目</th>
                  <th className="w-1/5 p-4 text-center font-bold text-slate-400 bg-white/5 border-b-2 border-white/10 rounded-tl-sm">一般的な予備校</th>
                  <th className="w-1/5 p-4 text-center font-bold text-slate-400 bg-white/5 border-b-2 border-white/10">一般的な学習管理塾</th>
                  <th className="w-1/5 p-4 text-center font-bold text-slate-400 bg-white/5 border-b-2 border-white/10">推薦専門塾</th>
                  <th className="w-1/5 p-5 text-center font-black text-[#1a1a1a] bg-[#b38f4f] border-b-2 border-[#a07c3f] rounded-t-sm text-lg relative shadow-xl">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[#1a1a1a] text-[10px] px-4 py-1 rounded-sm whitespace-nowrap font-bold tracking-widest shadow-md">当塾</div>
                    慶應コーチング
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
                  <tr key={idx} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                    <td className="p-4 font-bold text-slate-300 bg-transparent">{row.label}</td>
                    <td className="p-4 text-center text-slate-500 bg-white/[0.02]">{row.a}</td>
                    <td className="p-4 text-center text-slate-500 bg-white/[0.02]">{row.b}</td>
                    <td className="p-4 text-center text-slate-500 bg-white/[0.02]">{row.c}</td>
                    <td className="p-4 text-center font-bold text-[#b38f4f] bg-[#b38f4f]/10 border-x border-[#b38f4f]/20 shadow-[0_4px_20px_rgba(0,0,0,0.1)]">{row.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="plans" className="pt-24 border-t border-white/10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#b38f4f] mb-4 font-serif tracking-widest">
              料金プラン
            </h2>
            <p className="text-slate-300 tracking-wide">
              生徒一人ひとりに合わせた完全オーダーメイドの学習管理を提供します。
            </p>
          </div>

          <div className="max-w-md mx-auto">
            {/* Standard Plan (Recommended) */}
            <div className="bg-[#111A2E] border border-[#b38f4f]/30 rounded-sm p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#b38f4f]/10 rounded-full blur-[80px] pointer-events-none"></div>
              
              <h3 className="text-xl font-bold text-white mb-2 text-center tracking-widest font-serif relative z-10">慶應合格コーチングプラン</h3>
              
              <div className="mb-8 pb-8 border-b border-white/10 text-center mt-8 relative z-10">
                <span className="text-4xl font-black text-[#b38f4f] font-serif">29,800</span><span className="text-2xl text-[#b38f4f] font-bold">円</span>
                <span className="text-sm text-slate-400 ml-2 tracking-widest">/ 月額 (税込)</span>
              </div>
              
              <ul className="space-y-5 text-sm text-slate-200 mb-10 font-bold px-2 relative z-10">
                <li className="flex items-start gap-4 tracking-wide"><Check className="w-5 h-5 text-[#b38f4f] shrink-0" /> 月4回の個別面談・指導</li>
                <li className="flex items-start gap-4 tracking-wide"><Check className="w-5 h-5 text-[#b38f4f] shrink-0" /> 横断的受験戦略作成 (一般/推薦)</li>
                <li className="flex items-start gap-4 tracking-wide"><Check className="w-5 h-5 text-[#b38f4f] shrink-0" /> 毎日の進捗管理</li>
                <li className="flex items-start gap-4 tracking-wide"><Check className="w-5 h-5 text-[#b38f4f] shrink-0" /> いつでも質問対応</li>
                <li className="flex items-start gap-4 tracking-wide"><Check className="w-5 h-5 text-[#b38f4f] shrink-0" /> 確認テストの実施</li>
              </ul>
              
              <button onClick={onOpenConsultation} className="w-full py-4 rounded-sm bg-[#b38f4f] hover:bg-[#a07c3f] text-[#1a1a1a] font-bold transition-colors shadow-lg shadow-[#b38f4f]/20 tracking-widest relative z-10">
                無料受験相談に申し込む
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
