import React from 'react';
import { SEO } from '../components/SEO';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FinalCta } from '../components/FinalCta';
import { FreeConsultationModal } from '../components/FreeConsultationModal';

export const GeneralRecommendation = () => {
  const [isConsultationOpen, setIsConsultationOpen] = React.useState(false);
  const openConsultation = () => setIsConsultationOpen(true);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#B38F4F] selection:text-white">
      <SEO 
        title="一般入試と推薦は両立できる？受験戦略を現役慶應生が解説｜慶應ROUTE"
        description="一般入試と推薦（FIT・SFC総合型・指定校）の併願・両立戦略について。一つの入試方式に絞らないことで慶應合格の可能性を最大化する考え方を解説します。"
        canonicalUrl="/general-recommendation"
      />
      
      <Navbar onOpenConsultation={openConsultation} />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-6 tracking-tight">
              一般入試と推薦を、<br className="sm:hidden" />最初から一つに絞らない。
            </h1>
            <p className="text-slate-300 leading-relaxed text-left sm:text-center mt-6">
              「一般入試に絞るべきか」「推薦入試に専念すべきか」<br className="hidden sm:block" />
              慶應受験において、この二者択一は大きな機会損失になり得ます。<br className="hidden sm:block" />
              慶應ROUTEでは、両者を並行して対策する「横断型受験戦略」を提案しています。
            </p>
          </div>

          <div className="space-y-12">
            <section className="bg-[#0a0a0a] p-8 rounded-2xl shadow-sm border border-white/10">
              <h2 className="text-2xl font-bold text-slate-200 mb-6 border-b border-white/10 pb-4">なぜ両立すべきなのか？</h2>
              <div className="space-y-6 text-slate-300 leading-relaxed">
                <p>
                  慶應義塾大学の一般選抜において、「小論文」は非常に大きなウエイトを占めます。そして、推薦入試（FIT入試やSFC総合型選抜など）における「志望理由書の作成」や「自己分析」のプロセスは、小論文の記述力・論理的思考力を飛躍的に向上させます。
                </p>
                <p>
                  つまり、<strong className="text-slate-200">推薦入試の対策は、一般入試の小論文対策に直結する</strong>のです。逆に、一般入試に向けた英語学習や歴史の知識は、面接での受け答えや入学後の学力の基礎として強力な武器になります。
                </p>
              </div>
            </section>

            <section className="bg-[#0a0a0a] p-8 rounded-2xl shadow-sm border border-white/10">
              <h2 className="text-2xl font-bold text-slate-200 mb-6 border-b border-white/10 pb-4">両立戦略の具体例</h2>
              
              <div className="space-y-6">
                <div className="border border-white/10 rounded-xl p-6 bg-[#050505]">
                  <h3 className="font-bold text-slate-200 mb-3 text-lg border-l-4 border-[#b38f4f] pl-3">FIT入試 × 法学部一般選抜</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    法学部FIT入試に向けて自己分析と法学研究を進めながら、一般選抜の英語と歴史を基礎から固めます。FIT入試の対策で培った論理的思考は、一般選抜の小論文で高得点を叩き出す土台となります。
                  </p>
                </div>
                
                <div className="border border-white/10 rounded-xl p-6 bg-[#050505]">
                  <h3 className="font-bold text-slate-200 mb-3 text-lg border-l-4 border-[#b38f4f] pl-3">指定校推薦 × 一般選抜</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    校内選考に向けて定期テスト対策（評定確保）を最優先としつつも、受験生としての英語長文読解や単語学習は継続します。万が一校内選考から漏れた場合でも、シームレスに一般選抜へ移行できる状態を作ります。
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-[#fcfaf5] p-8 rounded-2xl border border-[#eaddc4]">
              <h2 className="text-2xl font-bold text-slate-200 mb-6 border-b border-[#eaddc4] pb-4">オーバーワークを防ぐ「学習管理」</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                両立における最大のリスクは「どちらも中途半端になること」です。これを防ぐために、慶應ROUTEでは生徒一人ひとりの学習状況と残り時間を正確に把握し、優先順位を明確にした週間計画（学習管理）を作成します。
              </p>
              <div className="text-center mt-8">
                <a href="/study-management" className="text-[#a07c3f] font-bold hover:underline">慶應ROUTEの学習管理について詳しく見る &rarr;</a>
              </div>
            </section>
          </div>
        </div>
      </main>

      <FinalCta onOpenConsultation={openConsultation} />
      <Footer onOpenConsultation={openConsultation} />
      <FreeConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    </div>
  );
};
