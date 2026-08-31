import React from 'react';
import { PageTemplate } from '../components/PageTemplate';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  BookOpen, 
  CalendarCheck, 
  HelpCircle, 
  BarChart3, 
  CheckCircle2, 
  CheckSquare, 
  ChevronRight 
} from 'lucide-react';

export const General: React.FC = () => {
  return (
    <PageTemplate>
      <SEO 
        title="一般選抜対策｜参考書ルート・学習管理・個別質問解説｜慶應ROUTE"
        description="一般選抜（一般入試）で難関大逆転合格を目指すなら慶應ROUTE。志望校別の参考書選定、1日単位の学習計画と進捗管理、週次の確認テスト、分からない問題の個別質問解説まで現役慶應生が徹底サポート。"
        canonicalUrl="/general/"
        breadcrumbs={[
          { name: '一般選抜対策', item: '/general/' }
        ]}
      />
      
      <Breadcrumbs items={[{ name: '一般選抜対策', path: '/general/' }]} />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-[#080E1A] text-white overflow-hidden border-b border-[#B38F4F]/30">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B38F4F_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B38F4F]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B38F4F]/40 bg-[#B38F4F]/10 text-[#DFCCA6] text-xs md:text-sm font-serif tracking-widest mb-8">
            <Sparkles className="w-3.5 h-3.5 text-[#B38F4F]" />
            GENERAL ADMISSION EXAM STRATEGY
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-widest leading-tight text-white mb-8">
            志望校合格から逆算する<br className="hidden sm:block" />
            <span className="text-[#C5A265]">一般選抜の完全攻略</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 font-serif tracking-wider max-w-3xl mx-auto leading-relaxed mb-10">
            授業を受けるだけでは伸びない。<br className="sm:hidden" />
            最適な参考書選定、1日単位の学習管理、そして分からない問題の個別解説で自学自習を極めます。
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            {[
              { title: '個別参考書ルート', desc: '現状学力から逆算選定' },
              { title: '1日単位の学習管理', desc: '迷わず机に向かえる' },
              { title: '確認テスト', desc: '理解度を客観的に測定' },
              { title: '個別質問解説', desc: '分からない問題を即解消' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-[#B38F4F]/20 p-4 rounded-sm">
                <div className="text-xs text-[#B38F4F] font-serif font-bold mb-1">{item.title}</div>
                <div className="text-xs text-slate-400">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Section 1: 一般選抜で最も重要なこと */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-6 bg-[#B38F4F]"></div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-widest text-slate-900 m-0">
              一般選抜の本質｜なぜ「自学自習の管理」が勝敗を分けるのか
            </h2>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-base">
            <p>
              難関大学の一般選抜で合否を分けるのは、予備校で何時間の授業を聞いたかではありません。「自分のレベルに合った参考書を、正しい順番で、何回復習して完璧にしたか」という<strong>自学自習の質と量</strong>です。
            </p>
            <p>
              多くの受験生が「どの参考書をいつまでにやればいいかわからない」「計画倒れになってしまう」「解説を読んでも理解できない問題で手が止まる」という壁にぶつかります。慶應コーチングは、そのすべてのボトルネックを解消します。
            </p>
          </div>
        </section>

        {/* Section 2: 当塾の一般選抜指導システム */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-6 bg-[#B38F4F]"></div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-widest text-slate-900 m-0">
              慶應コーチングの一般選抜指導システム
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                icon: BookOpen,
                title: "1. 志望校逆算の個別参考書ルート設計",
                desc: "難関国公立・早慶上智・GMARCHなど、志望校の出題傾向と現在の学力（模試成績等）を分析。市販の良質な参考書の中から、最短距離で合格点に届く個別カリキュラムを作成します。"
              },
              {
                icon: CalendarCheck,
                title: "2. 1日単位の週間計画＆毎日の進捗管理",
                desc: "「月曜日は単語帳P50〜100、英文解釈例題1〜5」のように、毎日やるべきページ数を指定。勉強の迷いをなくし、習慣化を徹底サポートします。"
              },
              {
                icon: CheckSquare,
                title: "3. 週次の確認テストで定着度をチェック",
                desc: "「やったつもり」を防ぐため、計画通り進めた範囲から確認テストを実施。80%以上の正答率で次のステージへ進む仕組みで、基礎の抜け漏れを許しません。"
              },
              {
                icon: HelpCircle,
                title: "4. 分からない問題の個別質問解説",
                desc: "一般的な管理塾とは異なり、現役慶應生が数学の記述や英語長文の解釈、歴史の因果関係など、つまずいた問題を個別指導・徹底解説します。"
              },
              {
                icon: BarChart3,
                title: "5. 模試分析と過去問演習の最適化",
                desc: "模試の結果から弱点単元を特定して計画を即座に修正。高3秋以降は志望校の過去問を徹底分析し、時間配分や捨て問の判断など実戦力を鍛えます。"
              }
            ].map((card, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-6 sm:p-8 rounded-sm shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#080E1A] text-[#B38F4F] flex items-center justify-center shrink-0">
                    <card.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 mb-2">{card.title}</h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: 推薦入試との併願メリット */}
        <section className="mb-20 bg-slate-50 border border-slate-200 p-8 rounded-sm">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-[#B38F4F]" />
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 m-0">
              推薦入試（FIT・指定校・総合型）との併願メリット
            </h2>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              一般選抜の学力がある生徒は、推薦入試の小論文や面接でも論理的な思考力を発揮しやすく、合格率が高まります。
            </p>
            <p>
              「一般選抜の実力という確固たる土台」を持ちながら、推薦入試にもチャレンジすることで、合格のチャンスを2倍・3倍に増やすことができます。
            </p>
          </div>
        </section>

        {/* Section 4: 関連コラム・内部リンク */}
        <section className="mb-20">
          <h2 className="text-xl font-serif font-bold text-slate-900 mb-6 border-b border-slate-200 pb-3">
            一般選抜に関するおすすめコラム
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/column/learning-management-vs-cram-school" className="p-4 bg-white border border-slate-200 rounded-sm hover:border-[#B38F4F] transition-all group flex justify-between items-center">
              <span className="text-sm font-bold text-slate-800 group-hover:text-[#B38F4F]">大学受験の学習管理塾とは？一般的な予備校との違い</span>
              <ChevronRight className="w-4 h-4 text-[#B38F4F] shrink-0" />
            </Link>
            <Link to="/column/kou2-juken-strategy" className="p-4 bg-white border border-slate-200 rounded-sm hover:border-[#B38F4F] transition-all group flex justify-between items-center">
              <span className="text-sm font-bold text-slate-800 group-hover:text-[#B38F4F]">高2から大学受験を始めるなら何をする？現役慶應生の学習戦略</span>
              <ChevronRight className="w-4 h-4 text-[#B38F4F] shrink-0" />
            </Link>
          </div>
        </section>

      </div>
    </PageTemplate>
  );
};
