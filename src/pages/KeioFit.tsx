import React from 'react';
import { SEO } from '../components/SEO';
import { PageTemplate } from '../components/PageTemplate';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  BookOpen, Target, FileText, Users, AlertTriangle, ShieldCheck, HelpCircle 
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
        
        {/* ① FIT入試とは */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-6 bg-[#b38f4f] rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight m-0">
              FIT入試とは
            </h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-600">
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

        {/* ② FIT入試で考えるべきこと */}
        <section className="bg-[#FAF9F5] rounded-2xl p-6 sm:p-8 border border-[#eaddc4]">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">
            FIT入試の軸となる4つの問い
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            提出書類や面接を突破するためには、以下の問いに対して、あなた自身の経験に基づいた明確な答え（ストーリー）を持っている必要があります。
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'これまで何をしてきたのか', icon: <Users className="w-5 h-5 text-[#b38f4f]" /> },
              { title: '大学で何を学びたいのか', icon: <BookOpen className="w-5 h-5 text-[#b38f4f]" /> },
              { title: 'なぜ"慶應"法学部なのか', icon: <Target className="w-5 h-5 text-[#b38f4f]" /> },
              { title: '過去の経験と学びがどう繋がるか', icon: <FileText className="w-5 h-5 text-[#b38f4f]" /> },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-3 shadow-sm">
                <div className="mt-0.5">{item.icon}</div>
                <div className="font-bold text-slate-800 text-sm">{item.title}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ③ FIT対策ロードマップ */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-6 bg-[#b38f4f] rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight m-0">
              FIT対策ロードマップ
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-between relative">
            <div className="hidden sm:block absolute top-6 left-10 right-10 h-0.5 bg-slate-200 z-0"></div>
            {[
              { time: '高1', desc: '学校の評定確保\n興味分野の探索' },
              { time: '高2', desc: '課外活動の実践\n自己分析の開始' },
              { time: '高3春', desc: '志望理由書の構想\n大学・学部研究' },
              { time: '出願準備', desc: '提出書類の完成\n（志望理由書等）' },
              { time: '直前期', desc: '小論文対策\n模擬面接' },
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-row sm:flex-col items-center gap-4 sm:gap-2 bg-white sm:bg-transparent p-4 sm:p-0 rounded-xl sm:rounded-none border sm:border-none border-slate-100 sm:w-1/5">
                <div className="w-12 h-12 bg-white border-4 border-[#FAF9F5] shadow-sm rounded-full flex items-center justify-center text-sm font-bold text-[#b38f4f]">
                  {step.time}
                </div>
                <p className="text-xs text-slate-600 sm:text-center whitespace-pre-line font-medium">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ④ FIT対策の内容 */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-6 bg-[#b38f4f] rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight m-0">
              当塾でのFIT対策内容
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              '自己分析', '大学・学部研究', '活動実績整理', '志望理由書作成',
              'その他提出書類', '小論文対策', '模擬面接', '学習進捗管理'
            ].map((feature, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-4 rounded-xl text-center shadow-sm">
                <span className="text-sm font-bold text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ⑤ FITと一般選抜の両立 */}
        <section className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#b38f4f]/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-6 h-6 text-[#b38f4f]" />
              <h2 className="text-xl sm:text-2xl font-bold font-display">
                FITを受けるからといって、<br className="sm:hidden"/>一般選抜を捨てる必要はありません。
              </h2>
            </div>
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                FIT入試は倍率も高く、優秀な受験生が集まるため「絶対に合格できる」という保証はありません。そのため、多くの受験生が一般選抜との併願を考えます。
              </p>
              <p>
                しかし、現実には<strong className="text-white">「FITの書類作成に追われてしまい、高3の夏以降、一般選抜のための勉強が完全にストップしてしまう」</strong>というケースが後を絶ちません。結果としてFITが不合格だった場合、一般選抜にも間に合わず全滅するリスクがあります。
              </p>
              <p>
                慶應ROUTEでは、<strong className="text-[#C5A265]">「FIT対策」と「一般選抜対策」のスケジュールを統合して管理</strong>します。週に何時間を書類作成に使い、何時間を英語長文に使うのか。現役生がバランスを調整し、「FIT一本勝負にしない」戦略的な受験をサポートします。
              </p>
            </div>
          </div>
        </section>

        {/* ⑥ ありがちな失敗 */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight m-0">
              FIT対策でありがちな失敗
            </h2>
          </div>
          <ul className="space-y-3">
            {[
              '高3になってから急に「活動実績」を作ろうとして焦る',
              '志望理由が「法律に興味があるから」など抽象的すぎる',
              '他の大学の法学部ではなく、「なぜ慶應法学部でなければならないか」が弱い',
              '書類作成だけに時間を使いすぎて、一般選抜の勉強が止まる',
              'ネット上の合格者の志望理由書を真似て、テンプレート的な文章になる'
            ].map((mistake, idx) => (
              <li key={idx} className="flex gap-3 bg-red-50 p-4 rounded-xl border border-red-100">
                <span className="text-red-500 font-bold shrink-0 mt-0.5">・</span>
                <span className="text-sm text-slate-700 font-medium">{mistake}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ⑦ FAQ */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="w-6 h-6 text-[#b38f4f]" />
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight m-0">
              FIT入試に関するよくある質問
            </h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "FIT対策はいつから始めるべきですか？", a: "早ければ早いほど良いですが、遅くとも高2の冬〜高3の春には志望理由の構想や活動の整理を始めるべきです。" },
              { q: "高3からでも間に合いますか？", a: "これまでの経験や活動内容によります。自己分析を早急に行い、一貫したストーリーが作れれば十分に可能性はあります。" },
              { q: "目立った活動実績（全国大会など）がなくても受けられますか？", a: "はい。派手な実績がなくても、日常の探究活動や問題意識から深い志望理由を構築できれば合格は可能です。" },
              { q: "一般選抜との両立は可能ですか？", a: "可能ですし、当塾では推奨しています。計画的なスケジュール管理があれば、十分両立できます。" },
              { q: "小論文はどう勉強すればいいですか？", a: "まずは法学・政治学の基礎知識をインプットし、その後は過去問や類似テーマで実際に書き、添削を受けるサイクルを繰り返します。" },
            ].map((faq, idx) => (
              <div key={idx} className="p-5 bg-white border border-slate-200 rounded-xl">
                <h3 className="font-bold text-slate-900 mb-2 flex gap-2">
                  <span className="text-[#b38f4f]">Q.</span> {faq.q}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed flex gap-2">
                  <span className="text-slate-300 font-bold">A.</span> {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </PageTemplate>
  );
};
