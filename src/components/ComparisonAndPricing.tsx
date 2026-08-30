import React from 'react';
import { Check, X, Minus } from 'lucide-react';

export const ComparisonAndPricing: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Comparison Table */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              授業だけでも、学習管理だけでもない。
            </h2>
            <p className="text-slate-600">
              一般的な塾との違いは「横断的な受験戦略」と「個別の質問指導」までカバーしている点です。
            </p>
          </div>

          <div className="overflow-x-auto pb-6">
            <table className="w-full min-w-[800px] border-collapse">
              <thead>
                <tr>
                  <th className="w-1/5 p-4 text-left font-bold text-slate-500 border-b-2 border-slate-200">項目</th>
                  <th className="w-1/5 p-4 text-center font-bold text-slate-700 bg-slate-50 border-b-2 border-slate-200 rounded-tl-xl">一般的な予備校</th>
                  <th className="w-1/5 p-4 text-center font-bold text-slate-700 bg-slate-50 border-b-2 border-slate-200">一般的な学習管理塾</th>
                  <th className="w-1/5 p-4 text-center font-bold text-slate-700 bg-slate-50 border-b-2 border-slate-200">推薦専門塾</th>
                  <th className="w-1/5 p-5 text-center font-black text-blue-700 bg-blue-50 border-b-2 border-blue-200 rounded-t-xl text-lg relative shadow-[0_-5px_20px_rgba(0,0,0,0.02)]">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] px-3 py-1 rounded-full whitespace-nowrap">この塾</div>
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
                  <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 font-bold text-slate-800 bg-white">{row.label}</td>
                    <td className="p-4 text-center text-slate-600 bg-slate-50/50">{row.a}</td>
                    <td className="p-4 text-center text-slate-600 bg-slate-50/50">{row.b}</td>
                    <td className="p-4 text-center text-slate-600 bg-slate-50/50">{row.c}</td>
                    <td className="p-4 text-center font-bold text-blue-900 bg-blue-50/50 border-x border-blue-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">{row.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              料金プラン
            </h2>
            <p className="text-slate-600">
              生徒の目標や必要なサポートレベルに合わせて選べる3つのプラン。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-end">
            
            {/* Light Plan */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-2">ライト</h3>
              <div className="mb-6 pb-6 border-b border-slate-100">
                <span className="text-3xl font-black text-slate-900">準備中</span>
                <span className="text-sm text-slate-500 ml-1">/ 月額 (例)</span>
              </div>
              <ul className="space-y-4 text-sm text-slate-700 mb-8 font-medium">
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-blue-500 shrink-0" /> 受験戦略作成</li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-blue-500 shrink-0" /> 学習計画</li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-blue-500 shrink-0" /> 定期面談</li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-blue-500 shrink-0" /> 進捗管理</li>
                <li className="flex items-start gap-3 text-slate-300"><Minus className="w-5 h-5 shrink-0" /> 質問対応</li>
              </ul>
            </div>

            {/* Standard Plan (Recommended) */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white font-bold text-sm px-4 py-1 rounded-full">
                おすすめ
              </div>
              <h3 className="text-xl font-bold text-white mb-2">スタンダード</h3>
              <div className="mb-6 pb-6 border-b border-slate-700">
                <span className="text-4xl font-black text-white">準備中</span>
                <span className="text-sm text-slate-400 ml-1">/ 月額 (例)</span>
              </div>
              <ul className="space-y-4 text-sm text-slate-200 mb-8 font-medium">
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-blue-400 shrink-0" /> ライトの全サービス</li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-blue-400 shrink-0" /> 週1面談</li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-blue-400 shrink-0" /> 毎日の進捗管理</li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-blue-400 shrink-0" /> 質問対応・確認テスト</li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-blue-400 shrink-0" /> 一般選抜対策・推薦戦略相談</li>
              </ul>
              <button onClick={onOpenConsultation} className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-colors">
                無料相談に申し込む
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-2">プレミアム</h3>
              <div className="mb-6 pb-6 border-b border-slate-100">
                <span className="text-3xl font-black text-slate-900">準備中</span>
                <span className="text-sm text-slate-500 ml-1">/ 月額 (例)</span>
              </div>
              <ul className="space-y-4 text-sm text-slate-700 mb-8 font-medium">
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-blue-500 shrink-0" /> スタンダードの全サービス</li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-blue-500 shrink-0" /> 個別指導・答案添削</li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-blue-500 shrink-0" /> 小論文・志望理由書サポート</li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-blue-500 shrink-0" /> 面接対策</li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-blue-500 shrink-0" /> より詳細な受験戦略設計</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
