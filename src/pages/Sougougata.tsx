import React from 'react';
import { PageTemplate } from '../components/PageTemplate';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const Sougougata: React.FC = () => {
  return (
    <PageTemplate>
      <SEO 
        title="総合型選抜対策｜一般選抜との両立までサポート｜慶應コーチング"
        description="総合型選抜と一般選抜を両立する大学受験対策。自己分析、志望理由書、活動実績から小論文・面接までサポート。"
        canonicalUrl="/sougougata/"
        breadcrumbs={[
          { name: '総合型選抜対策', item: '/sougougata/' }
        ]}
      />
      
      <Breadcrumbs items={[{ name: '総合型選抜対策', path: '/sougougata/' }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-16 text-center">
          <h1 className="text-3xl md:text-5xl font-bold font-serif tracking-widest text-slate-900 mb-8 leading-tight">
            総合型選抜と一般選抜を<br className="sm:hidden" />両立する大学受験対策
          </h1>
          <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
            自己分析から面接対策まで。<br />
            そして、一般選抜の学力も同時に鍛える。
          </p>
        </header>

        <div className="prose prose-slate prose-lg max-w-none prose-headings:font-serif prose-headings:tracking-widest prose-a:text-[#b38f4f]">
          <h2>総合型選抜（旧AO入試）の現状と課題</h2>
          <p>
            総合型選抜は、受験生の熱意やこれまでの活動実績、大学とのマッチングを重視する入試方式です。志望理由書や自己推薦書、小論文、面接など、対策すべき項目が多岐にわたります。
          </p>
          <p>
            最大の課題は、<strong>「総合型選抜の準備に時間を取られすぎて、一般選抜の勉強が疎かになること」</strong>です。
          </p>

          <h2>慶應コーチングの総合型選抜対策</h2>
          <ul>
            <li><strong>自己分析と大学研究：</strong>現役大学生が壁打ち相手となり、深みのある志望理由を言語化します。</li>
            <li><strong>書類添削：</strong>志望理由書や自己推薦書の構成案作成から添削まで行います。</li>
            <li><strong>面接・小論文：</strong>模擬面接や小論文の添削を通じ、論理的思考力と表現力を鍛えます。</li>
          </ul>

          <div className="bg-[#b38f4f]/5 p-6 rounded-sm border border-[#b38f4f]/20 my-8">
            <h3 className="text-xl font-bold text-[#b38f4f] mb-4 mt-0">併願戦略の重要性</h3>
            <p className="mb-0 text-slate-700">
              当塾では、「総合型選抜で合格できればベストだが、ダメでも一般選抜で合格できる学力をつける」ことを目標に学習計画を立てます。毎週の面談で、推薦準備と一般勉強の時間配分を厳密に管理します。
            </p>
          </div>
        </div>
      </article>
    </PageTemplate>
  );
};
