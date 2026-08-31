import React from 'react';
import { SEO } from '../components/SEO';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FinalCta } from '../components/FinalCta';
import { FreeConsultationModal } from '../components/FreeConsultationModal';

export const KeioIppan = () => {
  const [isConsultationOpen, setIsConsultationOpen] = React.useState(false);
  const openConsultation = () => setIsConsultationOpen(true);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#B38F4F] selection:text-white">
      <SEO 
        title="慶應一般選抜対策｜現役慶應生による慶應専門塾｜慶應ROUTE"
        description="一般選抜も、本気で。現役慶應生による慶應一般入試に特化した受験戦略と学習管理。学部別の英語・小論文対策から過去問分析まで徹底サポート。"
        canonicalUrl="/keio-ippan"
      />
      
      <Navbar onOpenConsultation={openConsultation} />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 mb-6 tracking-tight">
              慶應一般選抜対策
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-[#b38f4f] mb-8 tracking-wide">
              「一般選抜も、本気で。」
            </p>
            <p className="text-slate-600 leading-relaxed text-left sm:text-center">
              推薦入試の志望者であっても、一般選抜の対策を妥協することは推奨しません。<br className="hidden sm:block" />
              慶應ROUTEでは、圧倒的な英語力と小論文の記述力を軸に、一般入試での合格を確実なものにするための学習計画を設計します。
            </p>
          </div>

          {/* 掲載内容 */}
          <div className="space-y-12">
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4">慶應一般入試の特徴と学部別対策</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  慶應義塾大学の一般選抜は、他大学と異なり「英語・小論文・選択科目」という特殊な配点・科目構成が特徴です。学部によって出題傾向が全く異なるため、早期からの志望学部特化型の対策が必須となります。
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <h3 className="font-bold text-slate-800 mb-2">英語・小論文</h3>
                    <p className="text-sm">圧倒的な語彙力と速読力が求められる英語、そして論理的思考力が試される小論文。この2科目が合否を分けます。</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <h3 className="font-bold text-slate-800 mb-2">社会・数学</h3>
                    <p className="text-sm">歴史の深い知識や、数学の正確な計算力。得点源にするための参考書選定と学習法を指導します。</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4">学習管理と過去問演習</h2>
              <ul className="space-y-4 text-slate-600 list-disc pl-5">
                <li><strong className="text-slate-800">年間・週間学習計画：</strong> 現在の学力から逆算し、「何を・いつまでに・どれくらい」やるべきかを明確にします。</li>
                <li><strong className="text-slate-800">参考書選定：</strong> 慶應合格に本当に必要な参考書だけを厳選。無駄な勉強を省きます。</li>
                <li><strong className="text-slate-800">過去問対策・模試分析：</strong> 過去問の徹底的な分析と添削。模試の結果から弱点を可視化し、次の一手を打ちます。</li>
                <li><strong className="text-slate-800">質問指導：</strong> 分からない問題はチャットや面談でいつでも質問可能。現役生が分かりやすく解説します。</li>
              </ul>
            </section>

            <section className="bg-[#fcfaf5] p-8 rounded-2xl border border-[#eaddc4]">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b border-[#eaddc4] pb-4">推薦入試との併願戦略</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                総合型選抜や指定校推薦と一般選抜は、決して対立するものではありません。小論文対策は両方に活き、英語力は大学入学後も強力な武器になります。私たちは、リスクを分散しながら慶應合格の可能性を最大化する戦略をご提案します。
              </p>
              <div className="text-center">
                <button onClick={openConsultation} className="px-8 py-4 bg-[#b38f4f] hover:bg-[#a07c3f] text-white font-bold rounded-xl transition-all shadow-md active:scale-95">
                  あなたの一般選抜戦略を相談する（無料）
                </button>
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
