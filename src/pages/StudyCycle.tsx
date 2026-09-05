import React from 'react';
import { SEO } from '../components/SEO';
import { PageTemplate } from '../components/PageTemplate';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  BarChart, Map, LayoutList, BookOpen, MessageCircle, RefreshCw, CheckCircle2 
} from 'lucide-react';

export const StudyCycle: React.FC = () => {
  return (
    <PageTemplate>
      <SEO 
        title="慶應受験の学習管理｜計画・質問・進捗管理｜慶應ROUTE"
        description="慶應合格に向けた学習サイクル。現状分析、受験戦略設計、個別カリキュラム作成、毎日の学習管理、そして現役慶應生への24時間質問対応までを一貫して行います。"
        canonicalUrl="/study-cycle"
        breadcrumbs={[
          { name: '学習サイクル', item: '/study-cycle' }
        ]}
      />
      
      <Breadcrumbs items={[{ name: '学習サイクル', path: '/study-cycle' }]} />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-white overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-[#FAF9F5]/50"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#eaddc4] bg-white text-[#a07c3f] text-xs font-bold tracking-widest mb-6 shadow-sm">
            <span>STUDY CYCLE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6 font-display">
            慶應合格への学習サイクル
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-[#b38f4f] mb-8 tracking-wide">
            「戦略を、毎日の勉強まで落とし込む。」
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            いくら立派な戦略があっても、毎日の勉強が適切に行われなければ合格はできません。<br className="hidden sm:block" />
            計画を立てる「学習管理」だけでなく、「分からない」を解決する指導まで徹底します。
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* 学習管理だけではない */}
        <section className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold font-display mb-4">
              学習管理<span className="text-[#b38f4f]">だけではない</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              一般的な「学習管理塾」はスケジュールを立てるだけで、分からない問題の指導はしてくれません。一方、「個別指導塾」は勉強を教えますが、自習時間の管理までは手が回りません。<br />
              慶應ROUTEは、その両方を行います。
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 p-6 rounded-xl border border-white/20">
              <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                <LayoutList className="w-5 h-5 text-[#C5A265]" />
                緻密なスケジュール管理
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                志望校から逆算し、1日単位で「どの参考書の」「どのページを」「どうやって」勉強するかを具体的に指定します。
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl border border-white/20">
              <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-[#C5A265]" />
                24時間 質問・個別解説
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                分からない問題はチャットですぐに質問可能。現役慶應生が、解説を読んでも分からない部分を丁寧に個別指導します。
              </p>
            </div>
          </div>
        </section>

        {/* 6つのステップ */}
        <section>
          <div className="flex items-center gap-3 mb-10 text-center justify-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight m-0">
              成績を伸ばす 6 STEP サイクル
            </h2>
          </div>
          
          <div className="space-y-6 relative">
            <div className="hidden sm:block absolute left-8 top-10 bottom-10 w-0.5 bg-slate-200"></div>

            {[
              { 
                step: 'STEP 1', title: '現状分析', icon: <BarChart />,
                desc: '模試の成績、学校の評定、英検の取得状況、現在の学習習慣などをヒアリングし、あなたの現在地を正確に把握します。' 
              },
              { 
                step: 'STEP 2', title: '受験戦略設計', icon: <Map />,
                desc: '一般選抜、FIT入試、総合型選抜、指定校推薦の中から、あなたにとって最も合格確率が高くなるルート（併願戦略）を設計します。' 
              },
              { 
                step: 'STEP 3', title: '個別カリキュラム', icon: <LayoutList />,
                desc: '戦略に基づき、合格までに必要な参考書ルートと月間・週間の学習計画を作成。何を・いつまでに・どう終わらせるかを明確にします。' 
              },
              { 
                step: 'STEP 4', title: '自学自習', icon: <BookOpen />,
                desc: '計画に沿って毎日勉強を進めます。その日の学習記録を専用のアプリ/シートに入力し、担当コーチが進捗を確認します。' 
              },
              { 
                step: 'STEP 5', title: '質問・個別解説', icon: <MessageCircle />,
                desc: '「分からない問題を、分からないままにしない。」自習中に生じた疑問は24時間いつでもチャットで質問でき、専属コーチが解説します。' 
              },
              { 
                step: 'STEP 6', title: '確認・修正', icon: <RefreshCw />,
                desc: '週に1回の定例面談（または確認テスト）で定着度をチェック。遅れがあれば計画を修正し、常に最適なペースを保ちます。' 
              },
            ].map((item, idx) => (
              <div key={idx} className="relative flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center bg-white p-6 rounded-2xl border border-slate-200 shadow-sm z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-[#FAF9F5] border-2 border-[#eaddc4] rounded-full text-[#b38f4f] shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs font-bold text-[#b38f4f] tracking-widest mb-1">{item.step}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </PageTemplate>
  );
};
