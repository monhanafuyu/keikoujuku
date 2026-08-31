import React from 'react';
import { SEO } from '../components/SEO';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FinalCta } from '../components/FinalCta';
import { FreeConsultationModal } from '../components/FreeConsultationModal';

export const KeioFit = () => {
  const [isConsultationOpen, setIsConsultationOpen] = React.useState(false);
  const openConsultation = () => setIsConsultationOpen(true);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#B38F4F] selection:text-white">
      <SEO 
        title="慶應法学部FIT入試対策｜現役慶應生が指導｜慶應ROUTE"
        description="FIT一本勝負にしないFIT対策。慶應法学部FIT入試に向けた自己分析、志望理由書、小論文、面接対策を、一般選抜と並行してサポートします。"
        canonicalUrl="/keio-fit"
      />
      
      <Navbar onOpenConsultation={openConsultation} />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 mb-6 tracking-tight">
              慶應法学部FIT入試対策
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-[#b38f4f] mb-8 tracking-wide">
              「FIT一本勝負にしないFIT対策。」
            </p>
            <p className="text-slate-600 leading-relaxed text-left sm:text-center">
              FIT入試は魅力的な制度ですが、それだけに頼るのは危険です。<br className="hidden sm:block" />
              慶應ROUTEでは、FIT対策の質を高めつつも、一般選抜へ向けた学力向上を並行させる「リスクを抑えた併願戦略」を推奨しています。
            </p>
          </div>

          <div className="space-y-12">
            <div className="bg-[#fcfaf5] border border-[#eaddc4] p-6 rounded-xl text-sm text-slate-700">
              <span className="font-bold text-[#a07c3f]">※ご注意：</span>
              最新年度の要項・日程・出願条件等については、必ず慶應義塾大学公式の募集要項をご確認ください。
            </div>

            <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4">FIT入試に向けたサポート内容</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  FIT入試において求められるのは、小手先のテクニックではなく、「なぜ慶應法学部でなければならないのか」という強い必然性と論理的思考力です。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <h3 className="font-bold text-slate-800 mb-2">自己分析・法学部研究</h3>
                    <p className="text-sm">あなたのこれまでの活動実績を整理し、慶應法学部の理念（半学半教など）やカリキュラムと結びつけます。</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <h3 className="font-bold text-slate-800 mb-2">提出書類（志望理由書等）</h3>
                    <p className="text-sm">対話を重ねることで、あなた自身の言葉で熱意と論理性を表現できる書類の作成をサポートします。</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <h3 className="font-bold text-slate-800 mb-2">小論文対策</h3>
                    <p className="text-sm">法学部特有のテーマに対する論理的思考力と文章構成力を、過去問添削を通じて鍛え上げます。</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <h3 className="font-bold text-slate-800 mb-2">面接対策</h3>
                    <p className="text-sm">想定問答の暗記ではなく、どんな角度から問われても自身の軸で回答できる本質的な対話力を養います。</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4">一般選抜との併願戦略</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                FIT入試の対策（特に小論文や論理的思考の訓練）は、一般選抜の小論文にも直結します。
                英語・歴史などの一般入試科目の学習時間を確保しながら、計画的にFIT対策を組み込むスケジュール管理を行います。
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
