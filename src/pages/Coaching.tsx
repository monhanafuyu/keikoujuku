import React from 'react';
import { PageTemplate } from '../components/PageTemplate';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Target, 
  Calendar, 
  CheckCircle2, 
  HelpCircle, 
  Shuffle, 
  GraduationCap, 
  ChevronRight 
} from 'lucide-react';

export const Coaching: React.FC = () => {
  return (
    <PageTemplate>
      <SEO 
        title="大学受験コーチング｜学習計画・進捗管理・質問対応・一般＆推薦両立｜慶應ROUTE"
        description="現役慶應生による大学受験コーチング。志望校逆算の学習計画、1日単位の週間計画・進捗管理、つまずいた問題の個別質問解説、そして一般選抜と推薦入試の両立まで徹底伴走。"
        canonicalUrl="/coaching/"
        breadcrumbs={[
          { name: '大学受験コーチング', item: '/coaching/' }
        ]}
      />
      
      <Breadcrumbs items={[{ name: '大学受験コーチング', path: '/coaching/' }]} />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-[#080E1A] text-white overflow-hidden border-b border-[#B38F4F]/30">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B38F4F_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B38F4F]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B38F4F]/40 bg-[#B38F4F]/10 text-[#DFCCA6] text-xs md:text-sm font-serif tracking-widest mb-8">
            <Sparkles className="w-3.5 h-3.5 text-[#B38F4F]" />
            ONE-ON-ONE COACHING & LEARNING MANAGEMENT
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-widest leading-tight text-white mb-8">
            現役慶應生が伴走する<br className="hidden sm:block" />
            <span className="text-[#C5A265]">大学受験コーチング</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 font-serif tracking-wider max-w-3xl mx-auto leading-relaxed mb-10">
            志望校から逆算した毎日の学習計画・進捗管理から、<br className="sm:hidden" />
            分からない問題の個別解説、一般・推薦の横断サポートまでトータルで指導します。
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            {[
              { title: '志望校逆算計画', desc: '何をいつまでにやるか明示' },
              { title: '日々の進捗管理', desc: '習慣化を徹底サポート' },
              { title: '個別質問対応', desc: '疑問を残さず即日解消' },
              { title: '一般・推薦両対応', desc: '一人ひとりに最適な戦略' },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#0a0a0a]/5 border border-[#B38F4F]/20 p-4 rounded-sm">
                <div className="text-xs text-[#B38F4F] font-serif font-bold mb-1">{item.title}</div>
                <div className="text-xs text-slate-400">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Section 1: 大学受験コーチングとは */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-6 bg-[#B38F4F]"></div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-widest text-white m-0">
              大学受験コーチングとは｜「授業」ではなく「自学自習」を変える
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-base">
            <p>
              大学受験における学習時間の9割以上は、授業以外の「自学自習」の時間です。どんなに優れた授業を受けても、自習の時間に正しい参考書を解き、復習し、定着させなければ成績は伸びません。
            </p>
            <p>
              大学受験コーチングは、志望校合格に必要なすべての自学自習を設計・管理し、生徒が迷いなく毎日机に向かえる環境をつくる指導スタイルです。
            </p>
          </div>
        </section>

        {/* Section 2: 慶應コーチングの4つの強み */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-6 bg-[#B38F4F]"></div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-widest text-white m-0">
              慶應コーチングの指導システム
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Target,
                title: "1. 志望校逆算の長期・年間計画",
                desc: "現状の学力と志望校の合格ラインのギャップを分析し、「いつまでにどの参考書を終わらせるか」のロードマップを設計します。"
              },
              {
                icon: Calendar,
                title: "2. 1日単位の週間計画＆進捗管理",
                desc: "毎週の個別面談で1週間の日割りタスクを決定。毎日の学習記録をチェックし、計画の遅れをリアルタイムでリカバリーします。"
              },
              {
                icon: HelpCircle,
                title: "3. 分からない問題の個別質問解説",
                desc: "計画管理だけでなく、数学の解法や英語の構文など、分からない問題を現役慶應生が個別指導。理解の穴を即座に埋めます。"
              },
              {
                icon: Shuffle,
                title: "4. 一般選抜・推薦入試のハイブリッド指導",
                desc: "定期テスト対策（評定）、慶應FIT・総合型・指定校推薦対策、一般入試対策のすべてをワンストップでマネジメントします。"
              }
            ].map((card, idx) => (
              <div key={idx} className="bg-[#0a0a0a] border border-white/10 p-6 rounded-sm shadow-sm">
                <div className="w-10 h-10 bg-[#080E1A] text-[#B38F4F] rounded-sm flex items-center justify-center mb-4">
                  <card.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif font-bold text-white mb-2">{card.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: 現役慶應生が伴走する意義 */}
        <section className="mb-20 bg-[#050505] border border-white/10 p-8 rounded-sm">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-6 h-6 text-[#B38F4F]" />
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white m-0">
              なぜ「現役慶應生」が伴走するのか
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              難関大学受験のリアルな壁、勉強のモチベーション維持、最新の入試トレンドを最も身近に理解しているのは、自らも難関入試を突破した現役生です。
            </p>
            <p>
              単なる指導者としてだけでなく、受験生の良き理解者・メンターとして寄り添い、合格まで二人三脚で走り抜けます。
            </p>
          </div>
        </section>

        {/* Section 4: 関連コラム・内部リンク */}
        <section className="mb-20">
          <h2 className="text-xl font-serif font-bold text-white mb-6 border-b border-white/10 pb-3">
            大学受験コーチングに関するおすすめコラム
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/column/learning-management-vs-cram-school" className="p-4 bg-[#0a0a0a] border border-white/10 rounded-sm hover:border-[#B38F4F] transition-all group flex justify-between items-center">
              <span className="text-sm font-bold text-slate-200 group-hover:text-[#B38F4F]">大学受験の学習管理塾とは？一般的な予備校との違い</span>
              <ChevronRight className="w-4 h-4 text-[#B38F4F] shrink-0" />
            </Link>
            <Link to="/column/kou1-juken-start" className="p-4 bg-[#0a0a0a] border border-white/10 rounded-sm hover:border-[#B38F4F] transition-all group flex justify-between items-center">
              <span className="text-sm font-bold text-slate-200 group-hover:text-[#B38F4F]">高1の大学受験は何から始める？評定・英検・一般入試の優先順位</span>
              <ChevronRight className="w-4 h-4 text-[#B38F4F] shrink-0" />
            </Link>
          </div>
        </section>

      </div>
    </PageTemplate>
  );
};
