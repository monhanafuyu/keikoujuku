import React from 'react';
import { PageTemplate } from '../components/PageTemplate';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const General: React.FC = () => {
  return (
    <PageTemplate>
      <SEO 
        title="大学受験・一般選抜対策｜学習管理と質問指導｜慶應コーチング"
        description="志望校から逆算する一般選抜対策。参考書選定、学習計画・進捗管理から、現役慶應生による分からない問題の個別解説まで。"
        canonicalUrl="/general/"
        breadcrumbs={[
          { name: '一般選抜対策', item: '/general/' }
        ]}
      />
      
      <Breadcrumbs items={[{ name: '一般選抜対策', path: '/general/' }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-16 text-center">
          <h1 className="text-3xl md:text-5xl font-bold font-serif tracking-widest text-slate-900 mb-8 leading-tight">
            志望校から逆算する<br className="sm:hidden" />一般選抜対策
          </h1>
          <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
            何を、いつまでに、どうやるか。<br />
            迷わず勉強に集中できる環境をつくります。
          </p>
        </header>

        <div className="prose prose-slate prose-lg max-w-none prose-headings:font-serif prose-headings:tracking-widest prose-a:text-[#b38f4f]">
          <h2>自学自習の質を極限まで高める</h2>
          <p>
            一般選抜において最も成績が伸びるのは、「授業を聞いている時間」ではなく「自分で問題を解いている時間（自学自習）」です。慶應コーチングでは、この自学自習の質と量を最大化するためのサポートを行います。
          </p>

          <h3>1. 志望校別の参考書ルートと学習計画</h3>
          <p>
            現在の学力と志望校のレベル差を分析し、「どの参考書を」「どの順番で」「いつまでに」終わらせるべきか、具体的な年間計画と週間計画を作成します。
          </p>

          <h3>2. 確認テストと学習管理</h3>
          <p>
            毎週の面談で確認テストを実施し、「本当に身についているか」をチェックします。計画通りに進んでいない場合は、原因を分析し、翌週の計画を修正します。
          </p>

          <h3>3. 分からない問題の「個別解説（質問対応）」</h3>
          <p>
            一般的な学習管理塾の弱点は、「分からない問題があったときに放置されがち」な点です。当塾では、現役の慶應生がLINEやオンライン通話を通じて、解説を読んでも分からない問題の個別指導を行います。
          </p>

          <div className="bg-slate-50 p-6 rounded-sm border border-slate-200 my-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4 mt-0">過去問・模試分析</h3>
            <p className="mb-0">
              秋以降は過去問演習にシフトします。単に解いて点数を出すだけでなく、「どこで失点したのか」「合格最低点を超えるために、あとどの分野を強化すべきか」をコーチと一緒に分析し、直前期の戦略を練り上げます。
            </p>
          </div>
        </div>
      </article>
    </PageTemplate>
  );
};
