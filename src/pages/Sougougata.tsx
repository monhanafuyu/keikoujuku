import React from 'react';
import { PageTemplate } from '../components/PageTemplate';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Compass, 
  FileEdit, 
  Users, 
  Presentation, 
  Layers, 
  CheckCircle2, 
  ChevronRight 
} from 'lucide-react';

export const Sougougata: React.FC = () => {
  return (
    <PageTemplate>
      <SEO 
        title="総合型選抜対策｜志望理由書・小論文・面接と一般入試の両立｜慶應ROUTE"
        description="総合型選抜（旧AO入試）対策と一般選抜の両立をサポート。志望理由書、自己分析、活動実績の言語化、小論文添削、面接・プレゼン対策から併願戦略まで現役慶應生が個別指導。"
        canonicalUrl="/sougougata/"
        breadcrumbs={[
          { name: '総合型選抜対策', item: '/sougougata/' }
        ]}
      />
      
      <Breadcrumbs items={[{ name: '総合型選抜対策', path: '/sougougata/' }]} />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-[#080E1A] text-white overflow-hidden border-b border-[#B38F4F]/30">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B38F4F_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B38F4F]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B38F4F]/40 bg-[#B38F4F]/10 text-[#DFCCA6] text-xs md:text-sm font-serif tracking-widest mb-8">
            <Sparkles className="w-3.5 h-3.5 text-[#B38F4F]" />
            COMPREHENSIVE ADMISSION EXAM
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-widest leading-tight text-white mb-8">
            総合型選抜対策と<br className="hidden sm:block" />
            <span className="text-[#C5A265]">一般入試の両立指導</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 font-serif tracking-wider max-w-3xl mx-auto leading-relaxed mb-10">
            志望理由書・小論文・面接指導はもちろん、<br className="sm:hidden" />
            一般選抜の勉強時間を崩さない独自のタイムマネジメントで合格可能性を最大化します。
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            {[
              { title: '志望理由書・自己分析', desc: '独自の強みを言語化' },
              { title: '小論文添削', desc: '論理的思考力と文章力' },
              { title: '面接・プレゼン', desc: '本番想定の模擬面接' },
              { title: '併願戦略・一般両立', desc: '合格チャンスを増やす' },
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

        {/* Section 1: 総合型選抜とは */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-6 bg-[#B38F4F]"></div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-widest text-white m-0">
              総合型選抜（旧AO入試）とは
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-base">
            <p>
              総合型選抜は、大学が求める学生像（アドミッション・ポリシー）に合致しているかを、学力試験だけでなく書類選考（志望理由書、自己推薦書、活動報告書等）、小論文、面接、プレゼンテーションなどを通じて多面的に評価する入試方式です。
            </p>
            <p>
              今や私立大学の入学者の半数以上が推薦・総合型選抜経由となっており、慶應・早稲田・上智・GMARCHなどでも枠が拡大しています。
            </p>
          </div>
        </section>

        {/* Section 2: 当塾の総合型選抜指導プログラム */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-6 bg-[#B38F4F]"></div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-widest text-white m-0">
              慶應コーチングの総合型選抜対策
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Compass,
                title: "1. 徹底した自己分析と志望動機の確立",
                desc: "「これまで何に打ち込んできたか」「大学で何を学び、将来社会で何を成し遂げたいか」を対話を通じて引き出し、唯一無二のストーリーを構築します。"
              },
              {
                icon: FileEdit,
                title: "2. 志望理由書・出願書類の完成",
                desc: "大学ごとのアドミッション・ポリシーに合わせた論理構成を現役慶應生が添削。何十回もの推敲を重ね、圧倒的な説得力を持つ書類へ仕上げます。"
              },
              {
                icon: Presentation,
                title: "3. 面接・プレゼンテーション・口頭試問",
                desc: "志望理由に対する想定問答はもちろん、突発的な質問や知的好奇心を問う口頭試問に対応できる対話力を模擬面接で養成します。"
              },
              {
                icon: Layers,
                title: "4. 小論文添削と論理的記述力",
                desc: "現代社会の課題に関するインプットと過去問演習。要約力・論理構成力・多角的視点を身につけ、合格答案の書き方を伝授します。"
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

        {/* Section 3: 一般選抜との両立・併願戦略 */}
        <section className="mb-20 bg-[#050505] border border-white/10 p-8 rounded-sm">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-[#B38F4F]" />
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white m-0">
              一般選抜との両立と併願戦略
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              総合型選抜対策だけに全エネルギーを使ってしまい、不合格になった時に一般入試の学力が残っていないという事態は絶対に防がなければなりません。
            </p>
            <p>
              当塾では、志望校の出願日程・試験日程を考慮した無理のない併願計画を立案し、一般入試の主要科目（英・数・国・地歴等）の学習時間を日次レベルでキープします。
            </p>
          </div>
        </section>

        {/* Section 4: 関連コラム・内部リンク */}
        <section className="mb-20">
          <h2 className="text-xl font-serif font-bold text-white mb-6 border-b border-white/10 pb-3">
            総合型選抜に関するおすすめコラム
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/column/sougougata-ippan-ryouritsu" className="p-4 bg-[#0a0a0a] border border-white/10 rounded-sm hover:border-[#B38F4F] transition-all group flex justify-between items-center">
              <span className="text-sm font-bold text-slate-200 group-hover:text-[#B38F4F]">総合型選抜と一般選抜は両立できる？メリットと注意点</span>
              <ChevronRight className="w-4 h-4 text-[#B38F4F] shrink-0" />
            </Link>
            <Link to="/column/recommendation-and-general-exam" className="p-4 bg-[#0a0a0a] border border-white/10 rounded-sm hover:border-[#B38F4F] transition-all group flex justify-between items-center">
              <span className="text-sm font-bold text-slate-200 group-hover:text-[#B38F4F]">推薦を狙いながら一般入試の勉強を続けるべき理由</span>
              <ChevronRight className="w-4 h-4 text-[#B38F4F] shrink-0" />
            </Link>
          </div>
        </section>

      </div>
    </PageTemplate>
  );
};
