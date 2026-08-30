import React from 'react';
import { Search, Compass, Calendar, BookOpen, MessageCircle, BarChart3 } from 'lucide-react';

export const StudySystem: React.FC = () => {
  const steps = [
    { num: 'STEP 1', title: '現状分析', desc: '現在の成績・模試・評定・英検・志望校などを確認。', icon: Search },
    { num: 'STEP 2', title: '受験戦略設計', desc: '一般選抜・推薦・総合型などを含めて受験戦略を考える。', icon: Compass },
    { num: 'STEP 3', title: '週間学習計画', desc: '「今週何をどこまでやるか」を具体的に決める。', icon: Calendar },
    { num: 'STEP 4', title: '自学自習', desc: '参考書・問題集を使って、自分の力で問題を解く。', icon: BookOpen },
    { num: 'STEP 5', title: '質問・個別解説', desc: '分からない問題を現役慶應生講師に質問。', icon: MessageCircle },
    { num: 'STEP 6', title: '進捗確認・計画修正', desc: '理解度・達成度を確認して翌週の計画を調整。', icon: BarChart3 },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Study Cycle */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            計画を立てて終わりではありません。
          </h2>
          <p className="text-lg text-slate-600 font-bold bg-slate-100 inline-block px-6 py-2 rounded-full">
            戦略 → 計画 → 勉強 → 質問 → 確認 → 改善
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm relative overflow-hidden group hover:border-blue-200 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-blue-600 font-black text-sm tracking-widest">{step.num}</span>
                <step.icon className="w-6 h-6 text-slate-400 group-hover:text-blue-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Dashboard UI: Strategy Karte */}
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              受験戦略カルテ
            </h2>
            <p className="text-slate-300">
              生徒一人ひとりの状況を可視化し、最適な選択肢を常にアップデートします。
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl relative z-10 mx-auto max-w-5xl border border-slate-100">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 border-b border-slate-100 pb-6 gap-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">個別ダッシュボード <span className="text-sm font-normal text-slate-400 ml-2">(デモ画面)</span></h3>
              </div>
              <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold border border-blue-100">
                高校2年生 10月時点
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 第一志望 */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <div className="text-xs font-bold text-slate-500 mb-2">第一志望</div>
                <div className="font-bold text-lg text-slate-900">慶應義塾大学 法学部</div>
              </div>
              
              {/* 一般選抜準備 */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <div className="text-xs font-bold text-slate-500 mb-2">一般選抜準備</div>
                <div className="flex text-blue-600 text-lg tracking-widest">
                  ★★★★<span className="text-slate-300">★</span>
                </div>
              </div>

              {/* FIT入試準備 */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <div className="text-xs font-bold text-slate-500 mb-2">FIT入試準備</div>
                <div className="flex text-blue-600 text-lg tracking-widest">
                  ★★★<span className="text-slate-300">★★</span>
                </div>
              </div>

              {/* 評定 */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <div className="text-xs font-bold text-slate-500 mb-2">評定平均</div>
                <div className="font-black text-3xl text-slate-900">4.3</div>
              </div>

              {/* 英検 */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <div className="text-xs font-bold text-slate-500 mb-2">外部英語資格 (英検)</div>
                <div className="font-bold text-slate-900">
                  2級取得済 <span className="text-xs text-slate-500 font-normal ml-1">/ 準1級対策中</span>
                </div>
              </div>

              {/* 達成率 */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex flex-col justify-center">
                <div className="text-xs font-bold text-slate-500 mb-3">今週の学習達成率</div>
                <div className="flex items-center gap-4">
                  <div className="flex-1 bg-slate-200 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-blue-600 h-full w-[82%] rounded-full relative">
                      <div className="absolute inset-0 bg-white/20 w-full h-full animate-pulse"></div>
                    </div>
                  </div>
                  <span className="font-black text-lg text-slate-900">82%</span>
                </div>
              </div>
            </div>

            {/* 重点課題 */}
            <div className="mt-6 bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
              <div className="text-sm font-bold text-blue-900 mb-3">今週の重点課題</div>
              <div className="flex flex-wrap gap-2">
                {['英単語', '英文解釈', '定期テスト対策', '小論文1題', '大学研究'].map((tag) => (
                  <span key={tag} className="bg-white px-4 py-1.5 rounded-full text-sm text-slate-700 border border-slate-200 font-medium shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
