import React from 'react';
import { PageTemplate } from '../components/PageTemplate';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const Shiteikou: React.FC = () => {
  return (
    <PageTemplate>
      <SEO 
        title="指定校推薦対策｜一般入試との両立もサポート｜慶應コーチング"
        description="指定校推薦対策と一般入試を両立する大学受験塾。高1・高2からの評定対策、英検取得、校内選考を突破するための戦略を現役慶應生がアドバイスします。"
        canonicalUrl="/shiteikou/"
        breadcrumbs={[
          { name: '指定校推薦対策', item: '/shiteikou/' }
        ]}
      />
      
      <Breadcrumbs items={[{ name: '指定校推薦対策', path: '/shiteikou/' }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-16 text-center">
          <h1 className="text-3xl md:text-5xl font-bold font-serif tracking-widest text-slate-900 mb-8 leading-tight">
            指定校推薦対策と<br />一般入試を両立する大学受験塾
          </h1>
          <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
            「推薦が取れなかったらどうしよう」<br />
            その不安を、両立戦略で解決します。
          </p>
        </header>

        <div className="prose prose-slate prose-lg max-w-none prose-headings:font-serif prose-headings:tracking-widest prose-a:text-[#b38f4f]">
          <h2>指定校推薦における「評定」と「一般入試」の両立</h2>
          <p>
            指定校推薦を狙う上で最も重要なのは「評定平均」です。しかし、指定校推薦の校内選考は高校3年生の秋に行われるため、万が一漏れてしまった場合、そこから一般入試の勉強を始めても間に合わない可能性が高いです。
          </p>
          
          <p>
            当塾では、定期テストで高得点を取るための勉強を「一般入試の基礎固め」へと繋げる学習計画を作成します。
          </p>

          <h2>高校1年・2年からの準備</h2>
          <ul>
            <li><strong>定期テスト対策：</strong>テスト2週間前からの短期記憶に頼らず、根本的な理解を深める学習。</li>
            <li><strong>英検取得：</strong>校内選考で有利になる英検などの外部英語資格の早期取得サポート。</li>
            <li><strong>志望校選定：</strong>指定校枠の確認と、一般入試との併願シミュレーション。</li>
          </ul>

          <div className="bg-slate-50 p-6 rounded-sm border border-slate-200 my-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4 mt-0">両立を実現するコーチング</h3>
            <p className="mb-0">
              生徒一人ひとりの「推薦への熱量」と「現在の評定」を見極め、定期テスト期間とそうでない期間の学習バランス（推薦対策：一般対策の比率）を毎週調整します。
            </p>
          </div>
        </div>
      </article>
    </PageTemplate>
  );
};
