import React from 'react';
import { Search, Compass, Target, BookOpen, MessageCircleQuestion, RefreshCw } from 'lucide-react';

export const StudyCycle: React.FC = () => {
  const steps = [
    { num: 'STEP 1', title: '現状分析', icon: <Search className="w-5 h-5" />, desc: '現在の学力・評定・活動実績を把握' },
    { num: 'STEP 2', title: '受験戦略設計', icon: <Compass className="w-5 h-5" />, desc: '一般・推薦の可能性を総合的に検討' },
    { num: 'STEP 3', title: '個別カリキュラム作成', icon: <Target className="w-5 h-5" />, desc: '志望校から逆算した計画を立案' },
    { num: 'STEP 4', title: '自学自習', icon: <BookOpen className="w-5 h-5" />, desc: '指定された参考書・範囲を進める' },
    { num: 'STEP 5', title: '質問・個別解説', icon: <MessageCircleQuestion className="w-5 h-5" />, desc: '分からない問題は慶應生が解説' },
    { num: 'STEP 6', title: '進捗確認・計画修正', icon: <RefreshCw className="w-5 h-5" />, desc: 'テスト結果から戦略をアップデート' }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="study-cycle">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#2a1f11]/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#a07c3f]/10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black mb-8 font-serif leading-tight">
            戦略を作る。<br className="sm:hidden" />
            勉強する。<br />
            分からなければ聞く。<br className="sm:hidden" />
            そして、また戦略を修正する。
          </h2>
          <p className="text-slate-300 text-lg">
            管理だけでは、終わらない。分からない問題を、分からないままにしない。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#fcfaf5]0/20 flex items-center justify-center text-[#e4cda5]">
                  {step.icon}
                </div>
                <div>
                  <div className="text-xs font-bold text-[#e4cda5] tracking-wider mb-1">{step.num}</div>
                  <h3 className="text-lg font-bold text-slate-100">{step.title}</h3>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed pl-16">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
