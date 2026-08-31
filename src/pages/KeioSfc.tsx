import React from 'react';
import { SEO } from '../components/SEO';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FinalCta } from '../components/FinalCta';
import { FreeConsultationModal } from '../components/FreeConsultationModal';

export const KeioSfc = () => {
  const [isConsultationOpen, setIsConsultationOpen] = React.useState(false);
  const openConsultation = () => setIsConsultationOpen(true);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#B38F4F] selection:text-white">
      <SEO 
        title="慶應SFC総合型選抜対策｜現役慶應生による受験指導｜慶應ROUTE"
        description="SFC（総合政策学部・環境情報学部）の総合型選抜対策。現役慶應生が対話を通じてあなたの活動実績やビジョンを言語化し、志望理由書や面接対策をサポートします。"
        canonicalUrl="/keio-sfc"
      />
      
      <Navbar onOpenConsultation={openConsultation} />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 mb-6 tracking-tight">
              慶應SFC総合型選抜対策
            </h1>
            <p className="text-slate-600 leading-relaxed text-left sm:text-center mt-6">
              SFC（総合政策学部・環境情報学部）の総合型選抜では、「問題発見・解決」のプロセスが最も重視されます。<br className="hidden sm:block" />
              私たちは書類を代わりに作成（代筆）するような指導は行いません。<br className="hidden sm:block" />
              生徒自身との深い対話を通して、生徒自身の言葉で未来のビジョンを言語化するサポートに徹します。
            </p>
          </div>

          <div className="space-y-12">
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4">SFC総合型選抜の対策プロセス</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#b38f4f] text-white flex items-center justify-center font-bold shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">SFC研究と自己分析</h3>
                    <p className="text-sm">SFCの理念や教授陣の研究内容を深く理解し、自身のこれまでの経験や活動実績とどのように結びつくかを整理します。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#b38f4f] text-white flex items-center justify-center font-bold shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">志望理由書・提出書類の作成</h3>
                    <p className="text-sm">「なぜSFCなのか」「SFCで何を解決したいのか」を言語化し、説得力のある志望理由書へと昇華させるための対話型サポートを行います。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#b38f4f] text-white flex items-center justify-center font-bold shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">面接・プレゼンテーション対策</h3>
                    <p className="text-sm">自らのビジョンを他者に伝える訓練を行います。多角的な質問に対しても、自分の軸から外れずに論理的に回答できるよう模擬面接を繰り返します。</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4">一般選抜との併願戦略</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                SFCの総合型選抜は倍率も高く、決して「受かりやすい」試験ではありません。不合格になった場合に備え、SFCの一般選抜（英語＋小論文、または数学＋小論文）や他学部の一般選抜にも対応できるよう、早期から一般入試対策を並行させることが合格への最も確実なルートです。
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
