import React from 'react';
import { PageTemplate } from '../components/PageTemplate';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  UserCheck, 
  Sparkles, 
  AlertCircle, 
  BookOpen, 
  Scale, 
  ChevronRight 
} from 'lucide-react';

export const KeioFit: React.FC = () => {
  return (
    <PageTemplate>
      <SEO 
        title="慶應法学部FIT入試対策｜現役慶應生によるFIT対策｜慶應ROUTE"
        description="慶應義塾大学法学部FIT入試対策と一般選抜の両立なら慶應ROUTE。A方式・B方式の出願書類、志望理由書、自己推薦書、小論文、面接・口頭試問対策から、高1・高2からの準備まで現役慶應生が徹底指導。"
        canonicalUrl="/keio-fit/"
        breadcrumbs={[
          { name: '慶應法学部FIT入試対策', item: '/keio-fit/' }
        ]}
      />
      
      <Breadcrumbs items={[{ name: '慶應法学部FIT入試対策', path: '/keio-fit/' }]} />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-[#080E1A] text-white overflow-hidden border-b border-[#B38F4F]/30">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B38F4F_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B38F4F]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B38F4F]/40 bg-[#B38F4F]/10 text-[#DFCCA6] text-xs md:text-sm font-serif tracking-widest mb-8">
            <Sparkles className="w-3.5 h-3.5 text-[#B38F4F]" />
            KEIO LAW SCHOOL FIT ADMISSION
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-widest leading-tight text-white mb-8">
            慶應義塾大学法学部<br className="hidden sm:block" />
            <span className="text-[#C5A265]">FIT入試対策</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 font-serif tracking-wider max-w-3xl mx-auto leading-relaxed mb-10">
            FIT入試だけに賭けない。<br className="sm:hidden" />
            <strong className="text-white font-bold">「一般選抜との両立」</strong>を前提とした、最も確実な慶應法学部合格戦略。
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            {[
              { title: 'A方式・B方式両対応', desc: '志望理由書・自己推薦書' },
              { title: '小論文・論述対策', desc: '法的思考力・論理的記述' },
              { title: '面接・口頭試問', desc: '現役生による模擬面接' },
              { title: '一般選抜並行指導', desc: '英語・歴史の学習管理' },
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
        
        {/* Important Notice */}
        <div className="mb-16 bg-[#B38F4F]/5 border border-[#B38F4F]/30 p-6 rounded-sm flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-[#B38F4F] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            <strong className="font-bold text-slate-900 block mb-1">【最新入試情報の確認について】</strong>
            入試日程・出願要件・選考方式・提出書類の詳細については、必ず慶應義塾大学公式Webサイトにて最新年度の「学部一般選抜・総合型選抜（FIT入試）募集要項」をご確認ください。当塾では常に最新の公式要項に基づき個別カリキュラムを設計します。
          </div>
        </div>

        {/* Section 1: FIT入試とは */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-6 bg-[#B38F4F]"></div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-widest text-slate-900 m-0">
              慶應法学部 FIT入試とは
            </h2>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-base">
            <p>
              慶應義塾大学法学部（法律学科・政治学科）が実施するFIT入試は、第一志望として同部で学びたい強い意欲と明確な問題意識を持つ学生を選抜する総合型選抜です。
            </p>
            <p>
              単なる学力試験の枠を超え、高校時代までの活動実績、知的好奇心、自己表現力、論理的思考力、そして将来の構想を多面的・総合的に評価します。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white border-2 border-[#B38F4F]/30 p-6 rounded-sm shadow-sm">
                <div className="text-xs font-bold font-serif tracking-widest text-[#B38F4F] uppercase mb-2">Method A</div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">A方式（全国ブロック選考等）</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  学業成績だけでなく、知的好奇心、課外活動、ボランティア、異文化体験など、何かに熱中し自ら行動した経験を重視。地域ブロック別の選考枠も存在します。
                </p>
                <div className="text-xs bg-slate-50 p-3 rounded text-slate-700 font-bold border border-slate-200">
                  出願書類＋第2次選考（論述試験・口頭試問等）
                </div>
              </div>

              <div className="bg-white border-2 border-[#B38F4F]/30 p-6 rounded-sm shadow-sm">
                <div className="text-xs font-bold font-serif tracking-widest text-[#B38F4F] uppercase mb-2">Method B</div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">B方式（指定評定基準型）</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  全体の評定平均4.0以上、かつ主要科目の高い成績が求められます。高校での安定した学業成績を基盤とし、法・政治への高い適性を審査します。
                </p>
                <div className="text-xs bg-slate-50 p-3 rounded text-slate-700 font-bold border border-slate-200">
                  出願書類＋第2次選考（総合考査・面接等）
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: 当塾のFIT入試対策 */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-6 bg-[#B38F4F]"></div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-widest text-slate-900 m-0">
              慶應コーチングのFIT入試対策
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                icon: FileText,
                title: "1. 志望理由書・自己推薦書の作成指導",
                desc: "「なぜ法学部なのか」「なぜ他大ではなく慶應なのか」「法・政治の視点から何を追究したいのか」。単なる自己アピールにとどまらず、教授陣を納得させる論理的一貫性と学術的深みを持つ書類へと現役生が壁打ち・推敲を重ねます。"
              },
              {
                icon: BookOpen,
                title: "2. 小論文・総合考査・論述対策",
                desc: "法学部の小論文では、高度な現代社会の課題や法規範のあり方に対する洞察が求められます。過去問演習と法学・政治学の重要テーマ解説を通じて、多角的な視点から説得力ある文章を組み立てる記述力を養成します。"
              },
              {
                icon: UserCheck,
                title: "3. 面接・口頭試問・グループ討論対策",
                desc: "書類の内容に関する深いツッコミや、法学・社会問題に関するその場の思考力を問う口頭試問。現役慶應法学部生が面接官役となり、本番さながらの模擬面接を何度も実施し、物怖じしない対話力を鍛えます。"
              },
              {
                icon: Scale,
                title: "4. 一般選抜（慶應法・他私大）との両立管理",
                desc: "FIT対策に没頭するあまり、一般選抜の英語・歴史・小論文の勉強が疎かになる受験生が後を絶ちません。当塾では週間学習計画の中で「FIT対策時間」と「一般入試の自学自習時間」を厳密に配分し、両立させます。"
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-6 sm:p-8 rounded-sm shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#080E1A] text-[#B38F4F] flex items-center justify-center shrink-0">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: 高1・高2からの準備 */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-6 bg-[#B38F4F]"></div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-widest text-slate-900 m-0">
              高校1年・高校2年からできる準備
            </h2>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-8 rounded-sm">
            <p className="text-slate-700 leading-relaxed mb-6">
              FIT入試の勝敗は、高3の直前対策だけでなく、高1・高2の過ごし方で大きく左右されます。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded border border-slate-200">
                <div className="font-serif font-bold text-slate-900 mb-2 text-sm">① 評定平均の確保</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  B方式の4.0基準を余裕でクリアするため、定期テストでの高得点を積み重ねます。
                </p>
              </div>
              <div className="bg-white p-5 rounded border border-slate-200">
                <div className="font-serif font-bold text-slate-900 mb-2 text-sm">② 英語資格の取得</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  英検準1級以上の取得を目指し、英語の基礎力を早期に確立します。
                </p>
              </div>
              <div className="bg-white p-5 rounded border border-slate-200">
                <div className="font-serif font-bold text-slate-900 mb-2 text-sm">③ 探究活動・読書</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  興味のある社会問題に関する新書を読み、課外活動や探究コンテストに参加します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: 関連コラム・内部リンク */}
        <section className="mb-20">
          <h2 className="text-xl font-serif font-bold text-slate-900 mb-6 border-b border-slate-200 pb-3">
            慶應FIT入試に関するおすすめコラム
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/column/keio-fit-ippan-ryouritsu" className="p-4 bg-white border border-slate-200 rounded-sm hover:border-[#B38F4F] transition-all group flex justify-between items-center">
              <span className="text-sm font-bold text-slate-800 group-hover:text-[#B38F4F]">慶應法学部FIT入試と一般選抜は両立できる？</span>
              <ChevronRight className="w-4 h-4 text-[#B38F4F] shrink-0" />
            </Link>
            <Link to="/column/keio-fit-preparation-kou1-kou2" className="p-4 bg-white border border-slate-200 rounded-sm hover:border-[#B38F4F] transition-all group flex justify-between items-center">
              <span className="text-sm font-bold text-slate-800 group-hover:text-[#B38F4F]">FIT入試対策はいつから始める？高1・高2でできること</span>
              <ChevronRight className="w-4 h-4 text-[#B38F4F] shrink-0" />
            </Link>
          </div>
        </section>

      </div>
    </PageTemplate>
  );
};
