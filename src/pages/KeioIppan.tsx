import React from 'react';
import { SEO } from '../components/SEO';
import { PageTemplate } from '../components/PageTemplate';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Target, Clock, AlertTriangle, CheckCircle2, ChevronRight, HelpCircle
} from 'lucide-react';

export const KeioIppan: React.FC = () => {
  return (
    <PageTemplate>
      <SEO 
        title="慶應一般選抜対策｜学部別の勉強法・受験戦略｜慶應ROUTE"
        description="慶應義塾大学の一般選抜対策を現役慶應生がサポート。学部別の受験戦略、参考書選定、学習計画、過去問対策、質問指導まで一貫して対応します。"
        canonicalUrl="/keio-ippan"
        breadcrumbs={[
          { name: '慶應一般選抜対策', item: '/keio-ippan' }
        ]}
      />
      
      <Breadcrumbs items={[{ name: '慶應一般選抜対策', path: '/keio-ippan' }]} />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-white overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-[#FAF9F5]/50"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#eaddc4] bg-white text-[#a07c3f] text-xs font-bold tracking-widest mb-6 shadow-sm">
            <span>GENERAL ADMISSION</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6 font-display">
            慶應一般選抜対策
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-[#b38f4f] mb-8 tracking-wide">
            「一般選抜も、本気で。」
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            推薦対策に力を入れるからこそ、一般選抜の対策も決して手を抜きません。<br className="hidden sm:block" />
            学部ごとの特殊な出題傾向に合わせた、無駄のない受験戦略と学習計画を提供します。
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* ① 慶應一般選抜とは */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-6 bg-[#b38f4f] rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight m-0">
              慶應一般選抜とは
            </h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-600">
            <p>
              慶應義塾大学の一般選抜は、他大学とは一線を画す独自の特徴を持っています。最大の特徴は「国語（現代文・古文・漢文）」が課されず、代わりに「小論文」が多くの学部で必須となる点です。
            </p>
            <p>
              また、慶應対策は「全学部共通」ではありません。法学部の超長文英語、経済学部の英作文、商学部の空所補充、文学部の超長文記述など、<strong>学部ごとに求められる力と問題傾向が全く異なります。</strong>そのため、自分の志望学部に特化した「学部別戦略」を早期に立てることが合格への絶対条件となります。
            </p>
            <p className="text-xs text-slate-500 mt-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
              ※年度によって入試科目や配点、出題形式が変更される可能性があります。最新年度の詳細は必ず慶應義塾大学公式の募集要項をご確認ください。
            </p>
          </div>
        </section>

        {/* ② 学部別対策 */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-6 bg-[#b38f4f] rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight m-0">
              学部別対策
            </h2>
          </div>
          <p className="text-slate-600 mb-6 text-sm">
            各学部の特徴に合わせた専用の対策が必要です。詳細な対策ページは順次公開予定です。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: '法学部', desc: '超長文英語・独特な小論文', path: '/keio-law' },
              { name: '経済学部', desc: '自由英作文・足切り制度', path: '/keio-economics' },
              { name: '商学部', desc: '文法・語彙の正確性重視', path: '/keio-commerce' },
              { name: '文学部', desc: '超長文の和訳と記述力', path: '/keio-literature' },
              { name: 'SFC (総合/環境)', desc: '超長文英語・独自小論文', path: '/keio-sfc' },
              { name: '理工学部', desc: '高度な理系科目力', path: '/keio-science' },
              { name: 'その他学部', desc: '薬・医・看護など', path: '/keio-others' },
            ].map((faculty, idx) => (
              <div key={idx} className="block p-5 bg-white border border-slate-200 rounded-xl hover:border-[#b38f4f] hover:shadow-md transition-all group">
                <h3 className="font-bold text-slate-900 group-hover:text-[#b38f4f] transition-colors mb-2">{faculty.name}</h3>
                <p className="text-xs text-slate-500 mb-3">{faculty.desc}</p>
                <div className="text-[10px] text-[#b38f4f] font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  詳細を見る <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ③ 慶應一般選抜で重要なこと */}
        <section className="bg-[#FAF9F5] rounded-2xl p-6 sm:p-8 border border-[#eaddc4]">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">
            慶應一般選抜で重要な4つの要素
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <BookOpen className="w-6 h-6 text-[#b38f4f] mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">1. 圧倒的な英語力</h3>
              <p className="text-sm text-slate-600">全学部において英語の配点が高く、難易度も最難関レベル。単語・文法から超長文読解まで、早い段階で完成させる必要があります。</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <Target className="w-6 h-6 text-[#b38f4f] mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">2. 早期の学部別戦略</h3>
              <p className="text-sm text-slate-600">夏前には志望学部の過去問に目を通し、その学部に特化した参考書ルートや対策（英作文や記述など）に切り替える必要があります。</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <Clock className="w-6 h-6 text-[#b38f4f] mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">3. 過去問分析と時間配分</h3>
              <p className="text-sm text-slate-600">慶應の試験は時間が非常にタイトです。解く順番や捨てる問題の見極めなど、過去問を通じた実践的な訓練が合否を分けます。</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <CheckCircle2 className="w-6 h-6 text-[#b38f4f] mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">4. 推薦対策との賢い両立</h3>
              <p className="text-sm text-slate-600">FITや指定校を狙う場合でも、一般選抜の勉強を決して止めないこと。相乗効果を生む並行学習プランが重要です。</p>
            </div>
          </div>
        </section>

        {/* ④ 学習計画 */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-6 bg-[#b38f4f] rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight m-0">
              慶應合格に向けたロードマップ
            </h2>
          </div>
          <div className="relative border-l-2 border-slate-200 ml-3 md:ml-6 space-y-8 pb-4">
            {[
              { period: '高校1年', title: '基礎学力の徹底と英検取得', desc: '英単語・英文法を固め、定期テストで高評定を狙う。英検2級〜準1級の取得を目指す。' },
              { period: '高校2年', title: '主要科目の完成と志望学部選定', desc: '英語の長文読解力を引き上げ、選択科目（歴史・数学など）の通史・基礎を終わらせる。' },
              { period: '高校3年 春', title: '過去問への接続準備', desc: '早慶レベルの参考書を固める。この時期からFIT入試などの推薦書類準備も本格化。' },
              { period: '高校3年 夏', title: '過去問演習と弱点補強', desc: '志望学部の過去問を解き始め、傾向を掴む。推薦組は書類の最終仕上げと小論文・面接対策。' },
              { period: '高校3年 秋以降', title: '学部特化対策と時間配分訓練', desc: '過去問を徹底的にやり込み、時間内に合格点を取る戦略を完成させる。' }
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

        {/* ⑤ よくある失敗 */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight m-0">
              慶應一般選抜のよくある失敗
            </h2>
          </div>
          <ul className="space-y-4">
            {[
              'SNS等の情報に振り回され、参考書を増やしすぎる（1冊の完成度が低い）',
              '「まだ実力が足りないから」と過去問演習の開始を冬まで遅らせる',
              '学部ごとの出題傾向の違いを無視し、全学部同じ対策をしてしまう',
              '英語だけに時間をかけすぎ、選択科目（歴史・数学）や小論文で足元をすくわれる',
              '推薦対策（FITや総合型）に没頭しすぎて、一般選抜の対策が完全にストップする'
            ].map((mistake, idx) => (
              <li key={idx} className="flex gap-3 bg-red-50 p-4 rounded-xl border border-red-100">
                <XCircleIcon className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 font-medium">{mistake}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ⑥ 慶應ROUTEでの一般選抜対策 */}
        <section className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 font-display">
            慶應ROUTEでの一般選抜対策
          </h2>
          <p className="text-slate-300 mb-8 text-sm sm:text-base leading-relaxed">
            一人ひとりの現状学力と志望学部に合わせ、現役慶應生が伴走します。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              '学部別の個別カリキュラム作成',
              '1日単位の週間学習計画',
              '迷わない参考書選定',
              '毎日の進捗管理とチャットサポート',
              '分からない問題の質問・個別解説',
              '定着度を測る確認テスト',
              '模試の成績分析とリカバリー策',
              '過去問の解き方・分析指導'
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A265]" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center sm:text-left">
            <button className="px-6 py-3 bg-[#b38f4f] hover:bg-[#a07c3f] rounded-xl text-white font-bold text-sm transition-colors shadow-lg shadow-[#b38f4f]/20">
              無料相談で学習計画を作成する
            </button>
          </div>
        </section>

        {/* ⑦ FAQ */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="w-6 h-6 text-[#b38f4f]" />
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight m-0">
              一般選抜対策に関するよくある質問
            </h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "慶應一般選抜対策はいつから始めるべき？", a: "早ければ早いほど有利ですが、目安として高2の秋〜冬には受験を意識した基礎固め（特に英語）を開始すべきです。" },
              { q: "高3からでも間に合う？", a: "現在の学力と学習に割ける時間によります。基礎が固まっていれば十分可能ですが、無駄のない最適なルートを引くことが必須です。" },
              { q: "FIT入試や総合型選抜と一般選抜は両立できる？", a: "可能です。むしろ当塾では両立を強く推奨しています。推薦対策で培った思考力は、一般選抜の小論文にも直結します。" },
              { q: "志望学部をまだ決めていなくても大丈夫？", a: "高1・高2の段階であれば問題ありません。まずは全学部に共通して重要となる「英語」の基礎力向上からスタートします。" },
              { q: "小論文対策はいつから始めればいい？", a: "国語力や志望学部によりますが、一般的な目安としては高3の夏頃から過去問演習と並行して書き始めるケースが多いです。" },
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

function XCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  );
}
