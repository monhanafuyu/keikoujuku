import React from 'react';
import { Link } from 'react-router-dom';
import { PageTemplate } from '../components/PageTemplate';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { columns } from '../data/columns';
import { ChevronRight } from 'lucide-react';

export const ColumnList: React.FC = () => {
  return (
    <PageTemplate>
      <SEO 
        title="大学受験戦略コラム｜一般入試・推薦入試の両立｜慶應コーチング"
        description="指定校推薦、総合型選抜、慶應FIT入試と一般選抜の両立戦略について、現役慶應生が解説する大学受験コラム・ブログ。"
        canonicalUrl="/column/"
        breadcrumbs={[
          { name: '受験戦略コラム', item: '/column/' }
        ]}
      />
      
      <Breadcrumbs items={[{ name: '受験戦略コラム', path: '/column/' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-16 text-center">
          <h1 className="text-3xl md:text-5xl font-bold font-serif tracking-widest text-slate-900 mb-8 leading-tight">
            大学受験戦略コラム
          </h1>
          <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
            一般選抜と推薦入試（指定校推薦・総合型選抜・FIT入試）の両立に関するノウハウや、<br className="hidden md:block" />
            各学年での学習の進め方について、現役慶應生が解説します。
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {columns.map((column) => (
            <article key={column.id} className="bg-white border border-slate-200 rounded-sm overflow-hidden flex flex-col hover:shadow-lg transition-all hover:border-[#b38f4f]/30 group">
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold tracking-wider text-[#b38f4f] border border-[#b38f4f]/30 px-2.5 py-1 rounded-sm bg-[#b38f4f]/5">
                    {column.category}
                  </span>
                  <time className="text-xs text-slate-400 font-mono">{column.date}</time>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3 font-serif leading-snug group-hover:text-[#b38f4f] transition-colors line-clamp-2">
                  <Link to={`/column/${column.id}`} className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {column.title}
                  </Link>
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3 flex-1">
                  {column.excerpt}
                </p>
                <div className="flex items-center text-sm font-bold text-[#b38f4f] mt-auto">
                  記事を読む
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
};
