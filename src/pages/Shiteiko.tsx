import React from 'react';
import { SEO } from '../components/SEO';
import { PageTemplate } from '../components/PageTemplate';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  Award, BookOpen, ShieldCheck, Target, CheckCircle2, AlertTriangle, HelpCircle
} from 'lucide-react';

export const Shiteiko: React.FC = () => {
  return (
    <PageTemplate>
      <SEO 
        title="指定校推薦対策｜評定・定期テスト・一般入試との両立｜慶應ROUTE"
        description="指定校推薦対策と一般入試を両立する大学受験塾。高1・高2からの定期テスト評定対策、英検取得、校内選考対策から志望理由書・面接指導まで、現役慶應生が徹底サポート。"
        canonicalUrl="/shiteiko"
        breadcrumbs={[
          { name: '指定校推薦対策', item: '/shiteiko' }
        ]}
      />
      
      <Breadcrumbs items={[{ name: '指定校推薦対策', path: '/shiteiko' }]} />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-white overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-[#FAF9F5]/50"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#eaddc4] bg-white text-[#a07c3f] text-xs font-bold tracking-widest mb-6 shadow-sm">
            <span>DESIGNATED SCHOOL RECOMMENDATION</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6 font-display">
            指定校推薦対策
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-[#b38f4f] mb-8 tracking-wide">
            「推薦を狙う。でも、推薦だけに賭けない。」
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            高1・高2からの評定平均・英検対策から、校内選考後の小論文・面接対策、<br className="hidden sm:block" />
            そして一般入試との両立まで、現役生が一貫してサポートします。
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* ① 指定校推薦とは & ② 高1・高2から考えるべき理由 */}
        <section className="space-y-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-6 bg-[#b38f4f] rounded-full"></div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight m-0">
                指定校推薦とは
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              指定校推薦は、大学が特定の高校に対して募集枠を与え、高校内の選考（校内選考）を通過した生徒が受験できる制度です。校内選考を通れば高い確率で合格できるため、非常に人気の高い入試方式です。しかし、早慶やGMARCHなどの難関大の枠は少なく、学年トップクラスの成績が求められます。
            </p>
          </div>
          
          <div className="bg-[#FAF9F5] rounded-2xl p-6 sm:p-8 border border-[#eaddc4]">
            <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
              高1・高2から考えるべき理由
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              指定校推薦の校内選考で最も重視される「評定平均」は、<strong>高校1年生の1学期から高校3年生の1学期までの全科目の成績</strong>で決まります。「高3になってから頑張る」のでは手遅れになることが多く、高1・高2の段階から定期テスト対策を戦略的に行う必要があります。
            </p>
          </div>
        </section>

        {/* ③〜⑧ 指定校推薦対策の要素 */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-6 bg-[#b38f4f] rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight m-0">
              指定校推薦 獲得に向けた対策
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <BookOpen className="w-6 h-6 text-[#b38f4f] mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">定期テスト対策と評定</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                テスト2週間前から逆算した学習計画を作成。主要科目だけでなく、副教科も含めた全科目で4.5以上（早慶レベル）を狙うためのスケジュール管理を行います。
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <CheckCircle2 className="w-6 h-6 text-[#b38f4f] mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">提出物・学校生活</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                テストの点数だけでなく、平常点や課題の提出状況、授業態度も評定に大きく影響します。日々の学習習慣を整えることからサポートします。
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <Award className="w-6 h-6 text-[#b38f4f] mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">英検などの資格取得</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                校内選考において、同じ評定のライバルと競合した際、英検2級や準1級の有無が決定打になることがあります。早期取得に向けた対策を行います。
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <Target className="w-6 h-6 text-[#b38f4f] mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">校内選考後の書類・面接</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                見事校内選考を突破した後は、大学に提出する志望理由書の添削や、面接・小論文の対策を現役生がマンツーマンで指導します。
              </p>
            </div>
          </div>
        </section>

        {/* ⑨ 一般入試との両立（最重要） */}
        <section className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#b38f4f]/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="w-8 h-8 text-[#b38f4f]" />
              <h2 className="text-2xl sm:text-3xl font-bold font-display">
                指定校推薦を狙う人ほど、<br className="hidden sm:block"/>一般入試の勉強を止めない。
              </h2>
            </div>
            <div className="space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                指定校推薦は魅力的ですが、<strong className="text-[#C5A265]">絶対に枠が取れる保証はありません。</strong>
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>希望する大学・学部の枠が、今年度も高校に来るとは限らない</li>
                <li>自分より0.1でも評定が高いライバルがいれば、枠を取られてしまう</li>
                <li>途中で本当にやりたいことが変わり、志望校を変えたくなる可能性がある</li>
              </ul>
              <p>
                校内選考の結果が分かるのは、多くの場合<strong className="text-white">高3の9月頃</strong>です。もし推薦が取れなかった場合、そこから慌てて一般入試の勉強を始めても、早慶や難関大には到底間に合いません。
              </p>
              <div className="p-5 bg-white/10 rounded-xl border border-white/20 mt-6">
                <p className="font-bold text-white mb-2">慶應ROUTEの戦略</p>
                <p className="text-sm">
                  定期テスト期間（2〜3週間前）は学校の勉強に100%集中し、それ以外の期間は「一般入試に向けた英語・数学等の基礎固め」を進めます。推薦が取れれば最高。取れなくても一般選抜で余裕で受かる実力を、高1・高2から育てます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ⑩ 高1・高2ロードマップ */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-6 bg-[#b38f4f] rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight m-0">
              指定校・一般両立ロードマップ
            </h2>
          </div>
          <div className="relative border-l-2 border-slate-200 ml-3 md:ml-6 space-y-8 pb-4">
            {[
              { period: '高校1年', title: '評定 ＋ 学習習慣 ＋ 英語', desc: 'まずは全教科で高得点を取る習慣をつける。空いた時間で英単語や文法の基礎を固める。' },
              { period: '高校2年', title: '評定 ＋ 英検 ＋ 一般基礎', desc: '文理選択や受験科目を意識しつつ、英検取得を目指す。定期テスト外の期間は一般入試の基礎学習。' },
              { period: '高校3年 春〜夏', title: '評定仕上げ ＋ 過去問準備', desc: '高3の1学期（最後の評定）に全力を注ぐ。同時に、一般入試向けの発展学習も並行。' },
              { period: '高校3年 秋', title: 'ルートの確定', desc: '校内選考の結果次第で、指定校の面接・書類対策に移行するか、一般入試の過去問演習にフルコミットするかを決定。' }
            ].map((step, idx) => (
              <div key={idx} className="relative pl-6 md:pl-8">
                <div className="absolute w-4 h-4 bg-white border-2 border-[#b38f4f] rounded-full -left-[9px] top-1"></div>
                <div className="text-sm font-bold text-[#b38f4f] mb-1">{step.period}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ⑪ FAQ */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="w-6 h-6 text-[#b38f4f]" />
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight m-0">
              指定校推薦に関するよくある質問
            </h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "評定はいつから重要ですか？", a: "高校1年生の1学期からです。指定校推薦の評定平均は「高1の1学期〜高3の1学期までの全科目の平均」で算出されるため、1年生の最初から気を抜かないことが重要です。" },
              { q: "指定校推薦を狙う場合、一般入試対策も必要ですか？", a: "絶対に必要です。希望する枠が来ない、校内選考で落ちるといったリスクに備え、基礎学力（特に英語）は常に鍛えておく必要があります。" },
              { q: "英検は必要ですか？", a: "必須ではありませんが、同じ評定の生徒同士で枠を争った場合、英検2級や準1級を持っていることが有利に働く（または条件になっている）大学が多いです。" },
              { q: "指定校推薦の枠が取れなかったらどうすればいいですか？", a: "すぐに一般選抜や総合型選抜（AO）へ切り替えます。当塾では、その事態を想定して普段から一般入試に向けた基礎固めを行っているため、スムーズに移行できます。" },
              { q: "高1から塾に通う意味はありますか？", a: "大いにあります。学習習慣の確立、効率的な定期テスト対策、英検の早期取得など、高1からの積み重ねが、高3になった時の「選択肢の広さ」に直結します。" },
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
