import React from 'react';
import { PageTemplate } from '../components/PageTemplate';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const Coaching: React.FC = () => {
  return (
    <PageTemplate>
      <SEO 
        title="大学受験コーチング・学習管理塾｜現役慶應生が伴走｜慶應コーチング"
        description="現役慶應生による大学受験コーチング。オンラインで学習計画・週間計画・進捗管理から質問対応まで、一般選抜・推薦入試を見据えてサポート。"
        canonicalUrl="/coaching/"
        breadcrumbs={[
          { name: '大学受験コーチング', item: '/coaching/' }
        ]}
      />
      
      <Breadcrumbs items={[{ name: '大学受験コーチング', path: '/coaching/' }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-16 text-center">
          <h1 className="text-3xl md:text-5xl font-bold font-serif tracking-widest text-slate-900 mb-8 leading-tight">
            現役慶應生による<br className="sm:hidden" />大学受験コーチング
          </h1>
          <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
            教えるだけの塾でも、管理するだけの塾でもない。<br />
            あなたの受験戦略をトータルでプロデュースします。
          </p>
        </header>

        <div className="prose prose-slate prose-lg max-w-none prose-headings:font-serif prose-headings:tracking-widest prose-a:text-[#b38f4f]">
          <h2>オンライン大学受験コーチングとは？</h2>
          <p>
            厳しい受験戦争を勝ち抜くためには、質の高い授業を受けること以上に、「自分自身が勉強する時間をどうマネジメントするか」が重要です。慶應コーチングは、全国どこからでもオンラインで受講できる次世代の学習管理塾です。
          </p>

          <h3>コーチ（現役慶應生）の役割</h3>
          <ul>
            <li><strong>戦略立案：</strong>一般選抜・推薦（総合型・指定校）の可能性を探り、最適な併願戦略を提示します。</li>
            <li><strong>計画策定：</strong>年間計画から、「今日どの参考書の何ページをやるべきか」という日々の週間計画まで落とし込みます。</li>
            <li><strong>進捗管理とモチベーション維持：</strong>毎週のオンライン面談で進捗を確認し、モチベーションの低下を防ぎます。</li>
            <li><strong>疑問の解消：</strong>勉強中に生じた疑問を、チャットや通話で迅速に解決します。</li>
          </ul>

          <div className="bg-slate-50 p-6 rounded-sm border border-slate-200 my-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4 mt-0">なぜ「現役慶應生」なのか</h3>
            <p className="mb-0">
              近年、大学受験の制度は急速に変化しており、特に総合型選抜や指定校推薦の枠組みは数年前と大きく異なります。数年前に実際に厳しい受験を乗り越え、最新の入試傾向を肌で知っている現役生だからこそ、高校生の悩みにリアルに寄り添い、具体的で実用的なアドバイスを提供できます。
            </p>
          </div>
        </div>
      </article>
    </PageTemplate>
  );
};
