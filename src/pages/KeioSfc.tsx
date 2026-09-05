import React from 'react';
import { SEO } from '../components/SEO';
import { PageTemplate } from '../components/PageTemplate';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  Lightbulb, Search, Edit3, Speech, Target, ShieldCheck, AlertTriangle, HelpCircle 
} from 'lucide-react';

export const KeioSfc: React.FC = () => {
  return (
    <PageTemplate>
      <SEO 
        title="慶應SFC総合型選抜対策｜志望理由・活動・面接｜慶應ROUTE"
        description="慶應義塾大学SFC（総合政策学部・環境情報学部）の総合型選抜対策。志望理由書の作成から、問題意識の設定、面接対策、一般選抜との両立までサポート。"
        canonicalUrl="/keio-sfc"
        breadcrumbs={[
          { name: '慶應SFC総合型選抜対策', item: '/keio-sfc' }
        ]}
      />
      
      <Breadcrumbs items={[{ name: '慶應SFC総合型選抜対策', path: '/keio-sfc' }]} />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-white overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-[#FAF9F5]/50"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#eaddc4] bg-white text-[#a07c3f] text-xs font-bold tracking-widest mb-6 shadow-sm">
            <span>SFC AO ADMISSION</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6 font-display">
            慶應SFC総合型選抜対策
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-[#b38f4f] mb-8 tracking-wide">
            「SFCで何をしたいのか。そこから逆算する。」
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            派手な実績よりも、深い「問題意識」と論理的な「言語化」を。<br className="hidden sm:block" />
            あなた自身の経験から、SFCが求める学びの軸を一緒に見つけ出します。
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* ① SFC総合型選抜とは */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-6 bg-[#b38f4f] rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight m-0">
              SFC総合型選抜とは
            </h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-600">
            <p>
              慶應義塾大学 湘南藤沢キャンパス（SFC：総合政策学部・環境情報学部）が実施する総合型選抜は、AO入試の先駆けとして知られています。
            </p>
            <p>
              高校までの成績や偏差値だけで評価するのではなく、受験生が持つ<strong>「社会に対する問題意識」</strong>や<strong>「それを解決するための実践力・探究心」</strong>を、提出書類（志望理由書や自由記述など）と面接を通して総合的に評価します。
            </p>
            <p className="text-xs text-slate-500 mt-4 p-4 bg-slate-50 rounded-lg border border-slate-100 font-bold">
              ※年度によって出願資格や方式、提出書類の形式が変更される可能性があります。最新年度の詳細は必ず慶應SFC公式の募集要項をご確認ください。
            </p>
          </div>
        </section>

        {/* ② SFCが求める学びの考え方 */}
        <section className="bg-[#FAF9F5] rounded-2xl p-6 sm:p-8 border border-[#eaddc4]">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">
            SFCが求める学びの考え方
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            SFCは「未来からの留学生」を求めています。よくある誤解ですが、<strong>「起業経験がある」「全国大会で優勝した」といった派手な活動実績がなければ合格できないわけではありません。</strong>
          </p>
          <div className="bg-white p-5 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-3 text-sm">重要なのは「言語化」の深さ</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              日常の些細な疑問や、個人的な原体験から出発し、「なぜその問題が起きているのか」「SFCのリソース（研究会や授業）を使ってどう解決したいのか」を、誰が見ても論理的で納得感のある形に言語化することが最も重要です。
            </p>
          </div>
        </section>

        {/* ③〜⑧ 対策のプロセス（グリッド） */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-6 bg-[#b38f4f] rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight m-0">
              SFC対策のプロセス
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: '自己分析', desc: '過去の経験を洗い出し、あなたの価値観の原点を探ります。', icon: <Search /> },
              { title: '問題意識の設定', desc: '社会や身の回りの課題の中から、あなたが取り組むべきテーマを定めます。', icon: <Lightbulb /> },
              { title: '活動実績の整理', desc: 'テーマに関連するこれまでの活動を、論理的なストーリーに整理します。', icon: <Target /> },
              { title: '大学・学部研究', desc: 'SFCのどの研究会に入り、どの教員の下で学びたいかを具体化します。', icon: <Search /> },
              { title: '志望理由書の作成', desc: '2000字の志望理由書や自由記述を、何度も推敲して完成させます。', icon: <Edit3 /> },
              { title: '面接対策', desc: '提出書類に基づいた厳しいツッコミを想定し、模擬面接を繰り返します。', icon: <Speech /> },
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 flex gap-4 shadow-sm">
                <div className="text-[#b38f4f] mt-1 shrink-0">{step.icon}</div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ⑨ 一般選抜との両立 */}
        <section className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="w-6 h-6 text-[#b38f4f]" />
            <h2 className="text-xl sm:text-2xl font-bold font-display">
              一般選抜との両立戦略
            </h2>
          </div>
          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              SFCの総合型選抜は準備に膨大な時間と労力がかかります。そのため、一般選抜（英語・小論文、または数学・小論文）の対策がおろそかになりがちです。
            </p>
            <p>
              しかし、SFCの一般選抜で課される「小論文」は、総合型選抜の志望理由書を作成する過程で培われる「論理的思考力」や「問題解決能力」と強くリンクしています。
            </p>
            <p className="font-bold text-white">
              当塾では、総合型選抜の書類作成を進めつつ、一般選抜に向けた「超長文英語」の読解力強化を並行して進めるスケジュールを設計します。
            </p>
          </div>
        </section>

        {/* ⑩ 高1・高2からできること */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-6 bg-[#b38f4f] rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight m-0">
              高1・高2からできること
            </h2>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-[#b38f4f] font-bold">1.</span>
                <div>
                  <strong className="text-slate-800 text-sm">興味のある分野の「本」を読む</strong>
                  <p className="text-xs text-slate-600 mt-1">ネット記事だけでなく、専門書や新書を読み、知識の解像度を上げましょう。</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-[#b38f4f] font-bold">2.</span>
                <div>
                  <strong className="text-slate-800 text-sm">小さなアクションを起こす</strong>
                  <p className="text-xs text-slate-600 mt-1">興味のあるイベントに参加する、ボランティアをする、アンケートをとるなど、行動から気づきを得ることが重要です。</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-[#b38f4f] font-bold">3.</span>
                <div>
                  <strong className="text-slate-800 text-sm">英語と評定の確保</strong>
                  <p className="text-xs text-slate-600 mt-1">出願要件を満たすため、あるいは一般選抜への保険として、英検取得や学校の成績確保は必須です。</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* ⑪ よくある失敗 */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight m-0">
              SFC対策のよくある失敗
            </h2>
          </div>
          <ul className="space-y-3">
            {[
              '「アプリ開発」や「SDGs」など、流行りのテーマを表面だけなぞる',
              '他大学でもできるような内容になっており、「なぜSFCか」が抜けている',
              '過去の自分の体験と、大学でやりたいテーマが論理的に繋がっていない',
              '書類作成に没頭しすぎて、学校の成績や一般受験の勉強がボロボロになる',
              '面接で、書類に書いたこと以上の深掘りに答えられない（自分で深く考えていない）'
            ].map((mistake, idx) => (
              <li key={idx} className="flex gap-3 bg-red-50 p-4 rounded-xl border border-red-100">
                <span className="text-red-500 font-bold shrink-0 mt-0.5">・</span>
                <span className="text-sm text-slate-700 font-medium">{mistake}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ⑫ FAQ */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="w-6 h-6 text-[#b38f4f]" />
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight m-0">
              SFC総合型選抜に関するよくある質問
            </h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "実績が何もないのですが、受けられますか？", a: "可能です。SFCが評価するのは「実績の派手さ」ではなく、「問題意識の深さと、それを解決しようとする思考プロセス」です。日常の疑問を深く探究することで十分勝負できます。" },
              { q: "総合政策学部と環境情報学部、どちらを受けるべきですか？", a: "研究内容やアプローチの仕方（社会科学的アプローチか、テクノロジー・デザイン的アプローチか）によって異なります。自己分析を通じて最適な学部を選択します。" },
              { q: "いつから準備を始めるのが理想ですか？", a: "探究活動や読書などを含めると、高1・高2から始めるのが理想です。書類の本格的な執筆は高3の春〜夏にかけて行います。" },
              { q: "一般選抜との両立はできますか？", a: "はい。当塾では、一般選抜に向けた英語・小論文対策と、総合型選抜の書類作成を並行して進める学習計画を提供しています。" },
              { q: "「自由記述」はどうやって作ればいいですか？", a: "文字だけでなく、図解や写真、グラフを用いて、あなたの思考や活動を視覚的に伝える工夫が必要です。アイデア出しから構成までサポートします。" },
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
