import React from 'react';
import { SEO } from '../components/SEO';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FinalCta } from '../components/FinalCta';
import { FreeConsultationModal } from '../components/FreeConsultationModal';

export const Shiteiko = () => {
  const [isConsultationOpen, setIsConsultationOpen] = React.useState(false);
  const openConsultation = () => setIsConsultationOpen(true);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#B38F4F] selection:text-white">
      <SEO 
        title="指定校推薦対策｜一般入試との両立もサポート｜慶應ROUTE"
        description="推薦を狙う。でも、推薦だけに賭けない。高1・高2からの評定平均・英検対策から、校内選考後の小論文・面接対策、そして一般入試との両立まで一貫してサポートします。"
        canonicalUrl="/shiteiko"
      />
      
      <Navbar onOpenConsultation={openConsultation} />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 mb-6 tracking-tight">
              指定校推薦対策
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-[#b38f4f] mb-8 tracking-wide">
              「推薦を狙う。でも、推薦だけに賭けない。」
            </p>
            <p className="text-slate-600 leading-relaxed text-left sm:text-center">
              指定校推薦は非常に魅力的な選択肢ですが、校内選考を確実に通過できる保証はありません。<br className="hidden sm:block" />
              慶應ROUTEでは、日々の評定対策を行いながらも、万が一の際に一般選抜へ切り替えられるよう、基礎学力の養成を並行して行います。
            </p>
          </div>

          <div className="space-y-12">
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4">高1・高2からの準備</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-slate-800 mb-3 text-lg">評定平均の確保</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    定期テストの点数はもちろん、提出物や平常点など、学校の成績を最大化するための学習スケジュールを管理します。苦手科目の克服も早めに着手します。
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-3 text-lg">英検等の資格取得</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    指定校推薦の枠を勝ち取るための加点要素として、また一般入試への布石として、英検取得に向けた長文読解・単語学習・英作文対策を行います。
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4">校内選考後の対策</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-slate-800 mb-3 text-lg">志望理由書・面接</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    大学側が求める人物像を理解し、自分の言葉で志望理由を語れるよう模擬面接や書類添削を行います。
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-3 text-lg">小論文</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    指定校推薦の選考で課される小論文に対して、論理的な構成と表現力を身につけるための添削指導を実施します。
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-[#fcfaf5] p-8 rounded-2xl border border-[#eaddc4]">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b border-[#eaddc4] pb-4">一般入試との両立</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                校内選考の基準に届かなかった場合や、他の生徒に枠を取られてしまった場合に備え、受験生としての基礎学力（特に英語）は常に磨き続けます。「推薦がダメなら全滅」という精神的プレッシャーをなくすためにも、一般入試との両立は不可欠です。
              </p>
              <div className="text-center mt-8">
                <a href="/general-recommendation" className="text-[#a07c3f] font-bold hover:underline">一般入試と推薦の両立について詳しく見る &rarr;</a>
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
