import React from 'react';
import { Target, PenTool, GraduationCap, Users, ArrowUpRight } from 'lucide-react';

export const ExamStrategies: React.FC = () => {
  return (
    <section className="py-24 bg-[#111A2E] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#b38f4f] mb-6 leading-tight font-serif tracking-widest">
            合格する方法だけではなく、<br className="sm:hidden"/>合格する選択肢を増やす。
          </h2>
          <p className="text-slate-300 leading-relaxed font-bold tracking-wide">
            この塾は、推薦だけ・一般だけを専門にするのではありません。<br />
            生徒の可能性を最大限に広げるため、複数の入試方式を横断した戦略を描きます。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-24">
          
          {/* 一般選抜 */}
          <div className="bg-[#0B1426] p-8 md:p-10 rounded-sm shadow-xl border border-white/10">
            <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10">
              <Target className="w-6 h-6 text-[#b38f4f]" />
            </div>
            <h3 className="text-2xl font-extrabold text-white mb-4 tracking-wider">一般選抜も、本気で対策する。</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              「推薦を検討していても、一般選抜の勉強を止めない」という方針を重視します。基礎学力の向上は全ての入試の土台となります。
            </p>
            <ul className="grid grid-cols-2 gap-4 text-sm font-bold text-slate-300">
              <li className="flex items-center gap-3"><ArrowUpRight className="w-4 h-4 text-[#b38f4f]" /> 志望校逆算の参考書選定</li>
              <li className="flex items-center gap-3"><ArrowUpRight className="w-4 h-4 text-[#b38f4f]" /> 年間・週間学習計画</li>
              <li className="flex items-center gap-3"><ArrowUpRight className="w-4 h-4 text-[#b38f4f]" /> 進捗管理と確認テスト</li>
              <li className="flex items-center gap-3"><ArrowUpRight className="w-4 h-4 text-[#b38f4f]" /> 模試・過去問分析</li>
              <li className="flex items-center gap-3 col-span-2"><ArrowUpRight className="w-4 h-4 text-[#b38f4f]" /> 分からない問題の質問対応・個別解説</li>
            </ul>
          </div>

          {/* 慶應FIT */}
          <div className="bg-[#1A2639] p-8 md:p-10 rounded-sm shadow-xl border border-[#b38f4f]/30 text-white relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#b38f4f]/10 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="w-14 h-14 bg-[#b38f4f]/10 rounded-full flex items-center justify-center mb-6 border border-[#b38f4f]/20 relative z-10">
              <PenTool className="w-6 h-6 text-[#b38f4f]" />
            </div>
            <h3 className="text-2xl font-extrabold mb-2 relative z-10 tracking-wider">慶應法学部FIT入試対策</h3>
            <p className="text-[#b38f4f] font-bold mb-8 relative z-10 tracking-wide border-b border-white/10 pb-4">「FIT一本勝負にしないFIT対策。」</p>
            <ul className="grid grid-cols-2 gap-4 text-sm text-slate-300 mb-8 relative z-10">
              <li className="flex items-center gap-3"><div className="w-1 h-1 bg-[#b38f4f] rotate-45"></div> 受験戦略と併願</li>
              <li className="flex items-center gap-3"><div className="w-1 h-1 bg-[#b38f4f] rotate-45"></div> 大学・学部研究</li>
              <li className="flex items-center gap-3"><div className="w-1 h-1 bg-[#b38f4f] rotate-45"></div> 志望理由の言語化</li>
              <li className="flex items-center gap-3"><div className="w-1 h-1 bg-[#b38f4f] rotate-45"></div> 小論文・提出書類</li>
              <li className="flex items-center gap-3"><div className="w-1 h-1 bg-[#b38f4f] rotate-45"></div> 面接対策</li>
              <li className="flex items-center gap-3"><div className="w-1 h-1 bg-[#b38f4f] rotate-45"></div> 活動実績整理</li>
            </ul>
            <p className="text-[11px] text-slate-500 relative z-10">
              ※FIT入試の出願要件や詳細は、必ず最新年度の慶應義塾大学公式募集要項をご確認ください。
            </p>
          </div>

          {/* 指定校推薦 */}
          <div className="bg-[#0B1426] p-8 md:p-10 rounded-sm shadow-xl border border-white/10">
            <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10">
              <GraduationCap className="w-6 h-6 text-[#b38f4f]" />
            </div>
            <h3 className="text-2xl font-extrabold text-white mb-4 tracking-wider">推薦を狙う。でも、<br/>推薦だけに賭けない。</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              指定校推薦を視野に入れつつも、高1・高2から一般入試の基礎学力と評定管理を並行。高3になった時に複数の選択肢を残せるようにします。
            </p>
            <div className="flex flex-wrap gap-3 text-sm font-bold text-slate-300">
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-sm tracking-wide">定期テスト対策</span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-sm tracking-wide">評定・提出物管理</span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-sm tracking-wide">英検取得</span>
            </div>
          </div>

          {/* 総合型選抜 */}
          <div className="bg-[#0B1426] p-8 md:p-10 rounded-sm shadow-xl border border-white/10">
            <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10">
              <Users className="w-6 h-6 text-[#b38f4f]" />
            </div>
            <h3 className="text-2xl font-extrabold text-white mb-4 tracking-wider">総合型選抜対策</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              「書類だけ代わりに作る」サービスではありません。生徒本人が自分の経験・考えを言語化できるように、講師が対話しながらサポートします。
            </p>
            <div className="flex flex-wrap gap-3 text-sm font-bold text-slate-300">
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-sm tracking-wide">自己分析</span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-sm tracking-wide">志望理由書・自己推薦書</span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-sm tracking-wide">面接・プレゼン</span>
            </div>
          </div>
        </div>

        {/* 高1・高2向けセクション */}
        <div className="bg-[url('https://upload.wikimedia.org/wikipedia/commons/1/1a/Old_Keio_University_Library_20090725.jpg')] bg-cover bg-center rounded-sm p-8 md:p-16 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[#0B1426]/20 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#111A2E]/80 via-transparent to-[#0B1426]/80 pointer-events-none"></div>
          
          <div className="relative z-10">
            <span className="inline-block px-5 py-2 border border-[#b38f4f]/50 bg-[#b38f4f]/10 text-[#b38f4f] rounded-sm text-sm font-bold mb-8 tracking-widest backdrop-blur-sm shadow-xl">
              高校1年生・2年生の方へ
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight font-serif tracking-widest drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] text-white">
              大学受験は、<br className="sm:hidden"/>高3から始まるわけではない。
            </h2>
            <p className="text-lg md:text-xl font-bold text-white mb-16 tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              「高3で選べる状態を、高1・高2からつくる。」
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto text-left">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-sm">
                <div className="font-bold text-xl mb-6 text-white tracking-widest border-b border-white/10 pb-4">高校1年</div>
                <ul className="space-y-4 text-sm text-slate-300 tracking-wide">
                  <li className="flex items-center gap-3"><div className="w-1 h-1 bg-[#b38f4f] rotate-45 shrink-0"></div>学習習慣の確立</li>
                  <li className="flex items-center gap-3"><div className="w-1 h-1 bg-[#b38f4f] rotate-45 shrink-0"></div>定期テストと評定対策</li>
                  <li className="flex items-center gap-3"><div className="w-1 h-1 bg-[#b38f4f] rotate-45 shrink-0"></div>英語基礎</li>
                </ul>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-sm">
                <div className="font-bold text-xl mb-6 text-white tracking-widest border-b border-white/10 pb-4">高校2年</div>
                <ul className="space-y-4 text-sm text-slate-300 tracking-wide">
                  <li className="flex items-center gap-3"><div className="w-1 h-1 bg-[#b38f4f] rotate-45 shrink-0"></div>一般入試基礎</li>
                  <li className="flex items-center gap-3"><div className="w-1 h-1 bg-[#b38f4f] rotate-45 shrink-0"></div>英検などの外部資格</li>
                  <li className="flex items-center gap-3"><div className="w-1 h-1 bg-[#b38f4f] rotate-45 shrink-0"></div>志望校研究と活動整理</li>
                </ul>
              </div>
              <div className="bg-[#1A2639] backdrop-blur-md border border-[#b38f4f]/30 p-8 rounded-sm shadow-xl relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#b38f4f]/10 rounded-full blur-[40px] pointer-events-none"></div>
                <div className="font-bold text-xl mb-6 text-[#b38f4f] tracking-widest border-b border-[#b38f4f]/20 pb-4 relative z-10">高校3年</div>
                <ul className="space-y-4 text-sm text-slate-200 tracking-wide relative z-10">
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#b38f4f] rotate-45 shrink-0"></div>一般選抜</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#b38f4f] rotate-45 shrink-0"></div>慶應FIT / 総合型</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#b38f4f] rotate-45 shrink-0"></div>指定校推薦</li>
                  <li className="pt-6 mt-6 border-t border-white/10 font-bold text-white">自分に合った戦略を選択</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
