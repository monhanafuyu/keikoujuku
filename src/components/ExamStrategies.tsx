import React from 'react';
import { Target, PenTool, GraduationCap, Users, ArrowUpRight, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ExamStrategies: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#B38F4F]/30 bg-[#B38F4F]/5 text-[#8F6E32] text-xs font-serif tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B38F4F]" />
            EXAM STRATEGIES & DIVERSITY
          </div>
          <h2 className="text-3xl md:text-4xl font-normal text-slate-900 mb-6 leading-tight font-serif tracking-widest">
            勉強方法だけでなく、<br className="sm:hidden"/>受験方法から考える。
          </h2>
          <p className="text-lg md:text-xl font-bold text-[#B38F4F] mb-6 tracking-widest">
            「合格する方法だけでなく、合格する選択肢を増やす。」
          </p>
          <p className="text-slate-600 leading-relaxed tracking-wide text-sm md:text-base">
            大学受験には、一般選抜だけでなく、慶應法学部FIT入試、総合型選抜、指定校推薦など複数の受験方式があります。<br />
            慶應ROUTEでは、現在の成績・評定・資格・活動・志望大学をもとに、一つの方式だけに絞らず受験戦略を考えます。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-20">
          
          {/* 一般選抜 */}
          <div className="bg-slate-50 p-8 md:p-10 rounded-sm shadow-sm border border-slate-200 relative overflow-hidden group hover:border-[#B38F4F] transition-all flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 border border-slate-200 shadow-sm">
                <Target className="w-6 h-6 text-[#B38F4F]" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-wider font-serif">一般選抜も、本気で対策する。</h3>
              <p className="text-slate-600 mb-6 leading-relaxed tracking-wide text-sm">
                「推薦を検討していても、一般選抜の勉強を止めない」という方針を重視します。基礎学力の向上は全ての入試の土台となります。
              </p>
              <ul className="grid grid-cols-2 gap-3 text-xs sm:text-sm font-bold text-slate-700 mb-8">
                <li className="flex items-center gap-2"><ArrowUpRight className="w-4 h-4 text-[#B38F4F]" /> 志望校逆算の参考書選定</li>
                <li className="flex items-center gap-2"><ArrowUpRight className="w-4 h-4 text-[#B38F4F]" /> 年間・週間学習計画</li>
                <li className="flex items-center gap-2"><ArrowUpRight className="w-4 h-4 text-[#B38F4F]" /> 進捗管理と確認テスト</li>
                <li className="flex items-center gap-2"><ArrowUpRight className="w-4 h-4 text-[#B38F4F]" /> 模試・過去問分析</li>
                <li className="flex items-center gap-2 col-span-2"><ArrowUpRight className="w-4 h-4 text-[#B38F4F]" /> 分からない問題の質問対応・個別解説</li>
              </ul>
            </div>
            <Link 
              to="/general/" 
              className="inline-flex items-center text-xs font-bold text-[#080E1A] hover:text-[#B38F4F] tracking-widest pt-4 border-t border-slate-200"
            >
              一般選抜対策の詳細を見る
              <ChevronRight className="w-4 h-4 ml-1 text-[#B38F4F]" />
            </Link>
          </div>

          {/* 慶應FIT */}
          <div className="bg-white p-8 md:p-10 rounded-sm shadow-md border-2 border-[#B38F4F]/40 text-slate-900 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#B38F4F]/5 rounded-full blur-[80px] pointer-events-none"></div>
            <div>
              <div className="w-14 h-14 bg-[#B38F4F]/10 rounded-full flex items-center justify-center mb-6 border border-[#B38F4F]/20 relative z-10">
                <PenTool className="w-6 h-6 text-[#B38F4F]" />
              </div>
              <h3 className="text-2xl font-bold mb-2 relative z-10 tracking-wider font-serif">慶應法学部FIT入試対策</h3>
              <p className="text-[#B38F4F] font-bold mb-6 relative z-10 tracking-wide border-b border-slate-200 pb-3">「FIT一本勝負にしないFIT対策。」</p>
              <ul className="grid grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 mb-6 relative z-10">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#B38F4F] rotate-45"></div> A方式・B方式対策</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#B38F4F] rotate-45"></div> 志望理由書・自己推薦書</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#B38F4F] rotate-45"></div> 小論文・総合考査</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#B38F4F] rotate-45"></div> 口頭試問・面接</li>
              </ul>
              <p className="text-[11px] text-slate-400 relative z-10 mb-4">
                ※出願要件は必ず最新年度の慶應義塾大学公式募集要項をご確認ください。
              </p>
            </div>
            <Link 
              to="/keio-fit/" 
              className="inline-flex items-center text-xs font-bold text-[#B38F4F] hover:text-[#8F6E32] tracking-widest pt-4 border-t border-slate-200 relative z-10"
            >
              慶應法学部FIT入試対策の詳細を見る
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {/* 指定校推薦 */}
          <div className="bg-slate-50 p-8 md:p-10 rounded-sm shadow-sm border border-slate-200 relative overflow-hidden group hover:border-[#B38F4F] transition-all flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 border border-slate-200 shadow-sm">
                <GraduationCap className="w-6 h-6 text-[#B38F4F]" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-wider font-serif">推薦を狙う。でも、<br/>推薦だけに賭けない。</h3>
              <p className="text-slate-600 mb-6 leading-relaxed tracking-wide text-sm">
                指定校推薦を視野に入れつつも、高1・高2から一般入試の基礎学力と評定管理を並行。高3になった時に複数の選択肢を残せるようにします。
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-bold text-slate-700 mb-8">
                <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-sm">定期テスト評定対策</span>
                <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-sm">英検取得ロードマップ</span>
                <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-sm">校内選考・面接</span>
              </div>
            </div>
            <Link 
              to="/shiteikou/" 
              className="inline-flex items-center text-xs font-bold text-[#080E1A] hover:text-[#B38F4F] tracking-widest pt-4 border-t border-slate-200"
            >
              指定校推薦対策の詳細を見る
              <ChevronRight className="w-4 h-4 ml-1 text-[#B38F4F]" />
            </Link>
          </div>

          {/* 総合型選抜 */}
          <div className="bg-slate-50 p-8 md:p-10 rounded-sm shadow-sm border border-slate-200 relative overflow-hidden group hover:border-[#B38F4F] transition-all flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 border border-slate-200 shadow-sm">
                <Users className="w-6 h-6 text-[#B38F4F]" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-wider font-serif">総合型選抜対策</h3>
              <p className="text-slate-600 mb-6 leading-relaxed tracking-wide text-sm">
                「書類だけ代わりに作る」サービスではありません。生徒本人が自分の経験・考えを言語化できるように、講師が対話しながらサポートします。
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-bold text-slate-700 mb-8">
                <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-sm">自己分析</span>
                <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-sm">志望理由書添削</span>
                <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-sm">小論文・面接</span>
              </div>
            </div>
            <Link 
              to="/sougougata/" 
              className="inline-flex items-center text-xs font-bold text-[#080E1A] hover:text-[#B38F4F] tracking-widest pt-4 border-t border-slate-200"
            >
              総合型選抜対策の詳細を見る
              <ChevronRight className="w-4 h-4 ml-1 text-[#B38F4F]" />
            </Link>
          </div>
        </div>

        {/* 高1・高2向けセクション */}
        <div className="bg-[url('https://upload.wikimedia.org/wikipedia/commons/1/1a/Old_Keio_University_Library_20090725.jpg')] bg-cover bg-center rounded-sm p-8 md:p-16 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[#080E1A]/85 pointer-events-none"></div>
          
          <div className="relative z-10">
            <span className="inline-block px-5 py-2 border border-[#B38F4F]/50 bg-[#B38F4F]/10 text-[#DFCCA6] rounded-sm text-xs font-bold mb-6 tracking-widest backdrop-blur-sm shadow-xl font-serif">
              高校1年生・2年生の方へ
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight font-serif tracking-widest text-white">
              大学受験は、<br className="sm:hidden"/>高3から始まるわけではない。
            </h2>
            <p className="text-base md:text-xl font-bold text-[#C5A265] mb-12 tracking-wide font-serif">
              「高3で選べる状態を、高1・高2からつくる。」
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto text-left mb-8">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-sm">
                <div className="font-bold text-lg mb-4 text-white tracking-widest border-b border-white/10 pb-3 font-serif">高校1年</div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-300 tracking-wide">
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#B38F4F] rotate-45 shrink-0"></div>学習習慣の確立</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#B38F4F] rotate-45 shrink-0"></div>定期テストと評定対策</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#B38F4F] rotate-45 shrink-0"></div>英単語・英文法の基礎</li>
                </ul>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-sm">
                <div className="font-bold text-lg mb-4 text-white tracking-widest border-b border-white/10 pb-3 font-serif">高校2年</div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-300 tracking-wide">
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#B38F4F] rotate-45 shrink-0"></div>一般入試基礎完成</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#B38F4F] rotate-45 shrink-0"></div>英検準1級等の資格取得</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#B38F4F] rotate-45 shrink-0"></div>志望校研究と活動整理</li>
                </ul>
              </div>
              <div className="bg-[#111A2E] backdrop-blur-md border-2 border-[#B38F4F]/50 p-6 sm:p-8 rounded-sm shadow-xl relative">
                <div className="font-bold text-lg mb-4 text-[#DFCCA6] tracking-widest border-b border-[#B38F4F]/30 pb-3 font-serif">高校3年</div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-200 tracking-wide">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#B38F4F] rotate-45 shrink-0"></div>一般選抜</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#B38F4F] rotate-45 shrink-0"></div>慶應FIT / 総合型選抜</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#B38F4F] rotate-45 shrink-0"></div>指定校推薦</li>
                  <li className="pt-3 mt-3 border-t border-white/10 font-bold text-white text-xs">自分に合った戦略を選択可能</li>
                </ul>
              </div>
            </div>

            <Link
              to="/coaching/"
              className="inline-flex items-center px-6 py-3 bg-[#B38F4F] text-white text-xs font-bold tracking-widest hover:bg-[#9E7B3D] transition-all rounded-sm shadow-lg"
            >
              大学受験コーチングの詳細を見る
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
