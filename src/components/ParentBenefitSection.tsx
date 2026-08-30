import React from 'react';
import { ShieldCheck, FileText, Smartphone, Users, CheckCircle2 } from 'lucide-react';

export const ParentBenefitSection: React.FC = () => {
  return (
    <section className="py-16 bg-blue-50/50 border-b border-blue-100 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-blue-100 shadow-sm">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>保護者の皆さまへ</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug font-display">
                「家でちゃんと勉強しているか分からない」という不安を解消します。
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                高額な授業料を払っているのに、子どもが今どのレベルで何を頑張っているのか見えないのは大きなストレスです。PASSGATEでは、毎日の自習とテスト結果をすべてデータで見える化し、保護者の方へ定期共有します。
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>毎月の学習進捗・確認テスト結果レポートをご送付</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>保護者様専用LINEで学習状況や進路の相談が可能</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>「勉強しなさい」と言わなくても自走する環境を構築</span>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 w-full">
              {/* Mock Parent Report Preview Card */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-lg border border-slate-800 space-y-4 text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-400" />
                    <span className="font-bold text-slate-200">月次学習進捗レポート（サンプル）</span>
                  </div>
                  <span className="text-[10px] bg-blue-600/30 text-blue-300 px-2 py-0.5 rounded border border-blue-500/40">
                    保護者様共有
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-800/80 rounded-xl">
                    <p className="text-[11px] text-slate-400">当月学習目標達成率</p>
                    <p className="text-lg font-black text-emerald-400 mt-0.5">96.8%</p>
                    <p className="text-[10px] text-slate-400">計画通り完璧に進行中</p>
                  </div>
                  <div className="p-3 bg-slate-800/80 rounded-xl">
                    <p className="text-[11px] text-slate-400">週間確認テスト平均点</p>
                    <p className="text-lg font-black text-blue-400 mt-0.5">92点</p>
                    <p className="text-[10px] text-slate-400">全4回すべて合格基準達成</p>
                  </div>
                </div>

                <div className="p-3 bg-slate-800/50 rounded-xl border border-slate-700/60">
                  <span className="text-[10px] font-bold text-slate-300 block mb-1">
                    担当メンターからの総評：
                  </span>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    「平日部活後の1時間単語暗記ルーティンが完全に習慣化しました。明治大レベルの文法演習に入っても失点が少なく、非常に順調です。」
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
