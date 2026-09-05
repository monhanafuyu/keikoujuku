import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { PageTemplate } from '../components/PageTemplate';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  BookOpen, Target, FileText, Users, AlertTriangle, ShieldCheck, HelpCircle, ChevronRight 
} from 'lucide-react';

export const KeioFit: React.FC = () => {
  return (
    <PageTemplate>
      <SEO 
        title="慶應法学部FIT入試対策｜志望理由・小論文・面接｜慶應ROUTE"
        description="慶應義塾大学法学部FIT入試対策。志望理由、自己分析、活動整理、小論文、面接から一般選抜との併願戦略まで現役慶應生がサポートします。"
        canonicalUrl="/keio-fit"
        breadcrumbs={[
          { name: '慶應法学部FIT入試対策', item: '/keio-fit' }
        ]}
      />
      
      <Breadcrumbs items={[{ name: '慶應法学部FIT入試対策', path: '/keio-fit' }]} />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-white overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-[#FAF9F5]/50"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#eaddc4] bg-white text-[#a07c3f] text-xs font-bold tracking-widest mb-6 shadow-sm">
            <span>FIT ADMISSION</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6 font-display">
            慶應法学部FIT入試対策
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-[#b38f4f] mb-8 tracking-wide">
            「FIT一本勝負にしないFIT対策。」
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            書類・面接・小論文の徹底指導はもちろん、<br className="hidden sm:block" />
            一般選抜との両立を見据えた戦略的な学習計画で、慶應法学部への道を切り拓きます。
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* FIT入試とは */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-6 bg-[#b38f4f] rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight m-0">
              FIT入試とは
            </h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-600 mb-6">
            <p>
              FIT入試は、慶應義塾大学法学部が実施する総合型選抜（旧AO入試）です。
              単なる学力テストではなく、「慶應法学部で何を学びたいのか」「これまでどのような活動をしてきたのか」という受験生の熱意や適性を多角的に評価する入試制度です。
            </p>
            <p>
              方式にはA方式（自己推薦）とB方式（指定地域・評定要件あり）があり、それぞれ出願条件や試験内容が異なります。
            </p>
            <p className="text-xs text-slate-500 mt-4 p-4 bg-slate-50 rounded-lg border border-slate-100 font-bold">
              ※年度によって出願資格、募集人数、評定条件、提出書類、試験内容などが変更される可能性があります。最新年度の詳細は必ず慶應義塾大学公式の募集要項をご確認ください。
            </p>
          </div>
        </section>

        {/* 評定 */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4">FIT入試に評定は必要か</h2>
          <p className="text-slate-600 text-sm mb-6">
            A方式には出願するための評定要件はありませんが、B方式では明確な評定要件が定められています。どちらの方式であっても、高1・高2から高い評定をキープすることは受験を有利に進めるための強力な武器になります。
          </p>
          <Link to="/column/keio-fit-hyotei" className="inline-flex items-center text-sm font-bold text-[#b38f4f] hover:text-[#8a6d3b] transition-colors">
            FIT入試の評定について詳しく見る
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </section>

        {/* いつから */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4">対策はいつから始めるべきか</h2>
          <p className="text-slate-600 text-sm mb-6">
            FIT対策は「早ければ早いほど良い」のが鉄則です。高1・高2で種まきを行い、高3の春から本格的な志望理由書の構想に入ります。しかし、正しい方向性で進めれば高3からでも十分に間に合う可能性があります。
          </p>
          <Link to="/column/keio-fit-when-start" className="inline-flex items-center text-sm font-bold text-[#b38f4f] hover:text-[#8a6d3b] transition-colors">
            学年別の対策時期について詳しく見る
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </section>

        {/* 志望理由と活動実績 */}
        <section className="bg-[#FAF9F5] rounded-2xl p-6 sm:p-8 border border-[#eaddc4]">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">
            志望理由と活動実績の整理
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            提出書類を突破するためには、「目立った実績」そのものではなく、「なぜその活動をしたのか」「そこから何を得たのか」という思考のプロセスと、大学での学びへの一貫性が求められます。
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-3 shadow-sm">
              <div className="mt-0.5"><Users className="w-5 h-5 text-[#b38f4f]" /></div>
              <div>
                <div className="font-bold text-slate-800 text-sm mb-1">これまで何をしてきたのか</div>
                <div className="text-xs text-slate-500">活動実績と思考プロセスの言語化</div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-3 shadow-sm">
              <div className="mt-0.5"><Target className="w-5 h-5 text-[#b38f4f]" /></div>
              <div>
                <div className="font-bold text-slate-800 text-sm mb-1">なぜ"慶應"法学部なのか</div>
                <div className="text-xs text-slate-500">他大学ではなく慶應を選ぶ必然性の構築</div>
              </div>
            </div>
          </div>
        </section>

        {/* 小論文・面接・過去問 */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-6 bg-[#b38f4f] rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight m-0">
              第2次選考（小論文・面接・過去問）
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col h-full">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#b38f4f]" /> 小論文対策
              </h3>
              <p className="text-xs text-slate-600 mb-4 flex-grow">
                小論文は感想文ではありません。論点を正確に読み取り、論理的に記述する構成力が求められます。
              </p>
              <Link to="/column/keio-fit-essay" className="text-xs font-bold text-[#b38f4f] hover:text-[#8a6d3b] mt-auto">
                小論文対策を詳しく見る →
              </Link>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col h-full">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#b38f4f]" /> 面接対策
              </h3>
              <p className="text-xs text-slate-600 mb-4 flex-grow">
                暗記した台本を読み上げるのではなく、教授との知的な対話力が試されます。
              </p>
              <Link to="/column/keio-fit-interview" className="text-xs font-bold text-[#b38f4f] hover:text-[#8a6d3b] mt-auto">
                面接対策を詳しく見る →
              </Link>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col h-full">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#b38f4f]" /> 過去問演習
              </h3>
              <p className="text-xs text-slate-600 mb-4 flex-grow">
                過去問はいきなり解くのではなく、まずは「出題傾向」を分析するために活用します。
              </p>
              <Link to="/column/keio-fit-kakomon" className="text-xs font-bold text-[#b38f4f] hover:text-[#8a6d3b] mt-auto">
                過去問の使い方を詳しく見る →
              </Link>
            </div>
          </div>
        </section>

        {/* 一般選抜との両立 */}
        <section className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#b38f4f]/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-6 h-6 text-[#b38f4f]" />
              <h2 className="text-xl sm:text-2xl font-bold font-display">
                FITを受けるからといって、<br className="sm:hidden"/>一般選抜を捨てる必要はありません。
              </h2>
            </div>
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              <p>
                「FITの書類作成に追われてしまい、一般選抜の勉強が完全にストップしてしまう」ケースが後を絶ちません。結果としてFITが不合格だった場合、一般選抜にも間に合わず全滅するリスクがあります。
              </p>
              <p>
                慶應ROUTEでは、<strong className="text-[#C5A265]">「FIT対策」と「一般選抜対策」のスケジュールを統合して管理</strong>し、「FIT一本勝負にしない」戦略的な受験をサポートします。
              </p>
            </div>
            <Link to="/column/keio-fit-general-exams" className="inline-flex items-center px-6 py-3 bg-[#b38f4f] text-white text-sm font-bold rounded-xl hover:bg-[#8a6d3b] transition-colors">
              一般選抜との両立戦略を詳しく見る
            </Link>
          </div>
        </section>
        
        {/* 無料受験相談CTA */}
        <section className="bg-white border-2 border-[#b38f4f]/20 rounded-2xl p-8 text-center mt-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">自分の場合はどのルートがいい？</h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            現在の学力・評定・英検・活動実績や志望学部から、一般選抜、FIT、SFC総合型、指定校推薦の選択肢を比較し、今から優先すべき勉強を一緒に整理します。
          </p>
          <Link to="/coaching" className="inline-flex items-center px-8 py-4 bg-[#a07c3f] text-white font-bold rounded-xl hover:bg-[#8a6d3b] transition-colors shadow-md">
            無料で慶應受験戦略を相談する
          </Link>
        </section>

      </div>
    </PageTemplate>
  );
};
