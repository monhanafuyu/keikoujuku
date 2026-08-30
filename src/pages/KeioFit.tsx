import React from 'react';
import { PageTemplate } from '../components/PageTemplate';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const KeioFit: React.FC = () => {
  return (
    <PageTemplate>
      <SEO 
        title="慶應法学部FIT入試対策｜現役慶應生によるFIT対策｜慶應コーチング"
        description="慶應義塾大学法学部FIT入試の対策と一般選抜との両立なら慶應コーチング。志望理由書から小論文、面接まで現役慶應生が徹底サポート。"
        canonicalUrl="/keio-fit/"
        breadcrumbs={[
          { name: '慶應法学部FIT入試対策', item: '/keio-fit/' }
        ]}
      />
      
      <Breadcrumbs items={[{ name: '慶應法学部FIT入試対策', path: '/keio-fit/' }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-16 text-center">
          <span className="inline-block px-4 py-1.5 border border-[#b38f4f] text-[#b38f4f] rounded-sm text-sm font-bold tracking-widest mb-6">
            FIT入試対策
          </span>
          <h1 className="text-3xl md:text-5xl font-bold font-serif tracking-widest text-slate-900 mb-8 leading-tight">
            慶應義塾大学法学部<br className="sm:hidden" />FIT入試対策
          </h1>
          <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
            FIT一本勝負にしない、<br className="sm:hidden" />「一般選抜との両立」を前提とした<br className="sm:hidden" />新しいFIT対策。
          </p>
        </header>

        <div className="prose prose-slate prose-lg max-w-none prose-headings:font-serif prose-headings:tracking-widest prose-a:text-[#b38f4f]">
          <h2>慶應FIT入試とは</h2>
          <p>
            慶應義塾大学法学部が実施するFIT入試（総合型選抜）は、第一志望として強く入学を希望する学生を対象とした入試制度です。A方式とB方式があり、それぞれ求められる出願要件や課題が異なります。
          </p>

          <div className="bg-slate-50 p-6 rounded-sm border border-slate-200 my-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4 mt-0">当塾のFIT対策の特長</h3>
            <ul className="space-y-2 m-0 list-none pl-0">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#b38f4f] rotate-45"></div>大学・学部研究、自己分析のサポート</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#b38f4f] rotate-45"></div>志望理由の言語化・提出書類対策</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#b38f4f] rotate-45"></div>小論文対策、面接・口頭試問対策</li>
              <li className="flex items-center gap-2 font-bold text-[#b38f4f]"><div className="w-1.5 h-1.5 bg-[#b38f4f] rotate-45"></div>一般選抜との並行学習管理</li>
            </ul>
          </div>

          <h2>一般選抜との両立を推奨する理由</h2>
          <p>
            FIT入試は倍率が高く、これ一本に絞ることはリスクを伴います。当塾では、FIT入試の準備と並行して一般選抜に向けた英語・歴史などの学習計画を立てます。両立することで、心の余裕を持ってFIT入試に臨めるだけでなく、推薦入試の小論文などで活きる教養も身につきます。
          </p>
          
          <p className="text-sm text-slate-500 mt-12 p-4 bg-slate-50 border border-slate-200">
            ※最新年度の出願要件や入試日程については、必ず慶應義塾大学公式の募集要項をご確認ください。
          </p>
        </div>
      </article>
    </PageTemplate>
  );
};
