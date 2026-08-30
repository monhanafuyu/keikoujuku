import React from 'react';
import { Target, PenTool, GraduationCap, Users, ArrowUpRight } from 'lucide-react';

export const ExamStrategies: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
            合格する方法だけではなく、<br className="sm:hidden"/>合格する選択肢を増やす。
          </h2>
          <p className="text-slate-600 leading-relaxed">
            この塾は、推薦だけ・一般だけを専門にするのではありません。<br />
            生徒の可能性を最大限に広げるため、複数の入試方式を横断した戦略を描きます。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-24">
          
          {/* 一般選抜 */}
          <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-slate-200">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-4">一般選抜も、本気で対策する。</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              「推薦を検討していても、一般選抜の勉強を止めない」という方針を重視します。基礎学力の向上は全ての入試の土台となります。
            </p>
            <ul className="grid grid-cols-2 gap-3 text-sm font-bold text-slate-700">
              <li className="flex items-center gap-2"><ArrowUpRight className="w-4 h-4 text-blue-500" /> 志望校逆算の参考書選定</li>
              <li className="flex items-center gap-2"><ArrowUpRight className="w-4 h-4 text-blue-500" /> 年間・週間学習計画</li>
              <li className="flex items-center gap-2"><ArrowUpRight className="w-4 h-4 text-blue-500" /> 進捗管理と確認テスト</li>
              <li className="flex items-center gap-2"><ArrowUpRight className="w-4 h-4 text-blue-500" /> 模試・過去問分析</li>
              <li className="flex items-center gap-2 col-span-2"><ArrowUpRight className="w-4 h-4 text-blue-500" /> 分からない問題の質問対応・個別解説</li>
            </ul>
          </div>

          {/* 慶應FIT */}
          <div className="bg-slate-900 p-8 md:p-10 rounded-[2rem] shadow-sm border border-slate-800 text-white relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-600/30 rounded-full blur-3xl pointer-events-none"></div>
            <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 border border-slate-700 relative z-10">
              <PenTool className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-2xl font-extrabold mb-2 relative z-10">慶應法学部FIT入試対策</h3>
            <p className="text-blue-400 font-bold mb-6 relative z-10">「FIT一本勝負にしないFIT対策。」</p>
            <ul className="grid grid-cols-2 gap-3 text-sm text-slate-300 mb-8 relative z-10">
              <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-400"></div> 受験戦略と併願</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-400"></div> 大学・学部研究</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-400"></div> 志望理由の言語化</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-400"></div> 小論文・提出書類</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-400"></div> 面接対策</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-400"></div> 活動実績整理</li>
            </ul>
            <p className="text-[11px] text-slate-500 relative z-10">
              ※FIT入試の出願要件や詳細は、必ず最新年度の慶應義塾大学公式募集要項をご確認ください。
            </p>
          </div>

          {/* 指定校推薦 */}
          <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-slate-200">
            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
              <GraduationCap className="w-7 h-7 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-4">推薦を狙う。でも、<br/>推薦だけに賭けない。</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              指定校推薦を視野に入れつつも、高1・高2から一般入試の基礎学力と評定管理を並行。高3になった時に複数の選択肢を残せるようにします。
            </p>
            <div className="flex flex-wrap gap-2 text-sm font-bold text-slate-700">
              <span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg">定期テスト対策</span>
              <span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg">評定・提出物管理</span>
              <span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg">英検取得</span>
            </div>
          </div>

          {/* 総合型選抜 */}
          <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-slate-200">
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-4">総合型選抜対策</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              「書類だけ代わりに作る」サービスではありません。生徒本人が自分の経験・考えを言語化できるように、講師が対話しながらサポートします。
            </p>
            <div className="flex flex-wrap gap-2 text-sm font-bold text-slate-700">
              <span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg">自己分析</span>
              <span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg">志望理由書・自己推薦書</span>
              <span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg">面接・プレゼン</span>
            </div>
          </div>
        </div>

        {/* 高1・高2向けセクション */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] p-8 md:p-16 text-white text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 bg-white/20 rounded-full text-sm font-bold backdrop-blur-sm mb-6">
              高校1年生・2年生の方へ
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              大学受験は、<br className="sm:hidden"/>高3から始まるわけではない。
            </h2>
            <p className="text-lg md:text-2xl font-bold text-blue-100 mb-12">
              「高3で選べる状態を、高1・高2からつくる。」
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto text-left">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                <div className="font-black text-xl mb-3">高校1年</div>
                <ul className="space-y-2 text-sm text-blue-50">
                  <li>・学習習慣の確立</li>
                  <li>・定期テストと評定対策</li>
                  <li>・英語基礎</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                <div className="font-black text-xl mb-3">高校2年</div>
                <ul className="space-y-2 text-sm text-blue-50">
                  <li>・一般入試基礎</li>
                  <li>・英検などの外部資格</li>
                  <li>・志望校研究と活動整理</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                <div className="font-black text-xl mb-3 text-white">高校3年</div>
                <ul className="space-y-2 text-sm text-blue-50">
                  <li>・一般選抜</li>
                  <li>・慶應FIT / 総合型</li>
                  <li>・指定校推薦</li>
                  <li className="pt-2 mt-2 border-t border-white/20 font-bold">自分に合った戦略を選択</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
