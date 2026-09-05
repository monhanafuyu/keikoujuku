import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { PageTemplate } from '../components/PageTemplate';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { columns } from '../data/columns';
import { Calendar, ChevronRight, Clock } from 'lucide-react';

export const ColumnList: React.FC = () => {
  return (
    <PageTemplate>
      <SEO 
        title="慶應受験戦略コラム｜一般選抜・FIT入試・指定校推薦の対策｜慶應ROUTE"
        description="現役慶應生による受験戦略コラム。一般選抜、FIT入試、SFC総合型、指定校推薦など、多様なルートからの慶應合格戦略を論理的に解説します。"
        canonicalUrl="/column"
        breadcrumbs={[
          { name: '受験戦略コラム', item: '/column' }
        ]}
      />
      
      <Breadcrumbs items={[{ name: '受験戦略コラム', path: '/column' }]} />

      <main className="pt-8 pb-24 lg:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 border-b border-slate-200 pb-12">
            <span className="text-[#a07c3f] font-bold tracking-widest text-xs uppercase block mb-3">Strategic Insights</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight mb-4 font-display">
              慶應受験戦略コラム
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              現役慶應生が語る、合格への論理的アプローチとリアルな受験戦略。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {columns.map((column) => (
              <article 
                key={column.id}
                className="group relative bg-white border border-slate-200/80 rounded-2xl p-8 flex flex-col justify-between hover:border-[#b38f4f]/50 hover:shadow-xl transition-all duration-300 shadow-sm overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 text-xs">
                    <span className="text-[#a07c3f] font-bold border border-[#f3e8d3] bg-[#FAF9F5] px-3 py-1 rounded-md">
                      {column.category}
                    </span>
                    <span className="text-slate-400 font-medium flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {column.readTime || "約5分"}
                    </span>
                  </div>
                  
                  <h2 className="text-lg sm:text-xl font-bold font-serif text-slate-900 mb-3 leading-snug group-hover:text-[#a07c3f] transition-colors">
                    <Link to={`/column/${column.id}`} className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {column.title}
                    </Link>
                  </h2>
                  
                  <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed mb-6">
                    {column.excerpt}
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-5 border-t border-slate-100 mt-auto">
                  <span className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    {column.date}
                  </span>
                  <span className="inline-flex items-center text-xs font-bold text-[#b38f4f] group-hover:text-[#8a6d3b] transition-colors">
                    詳しく読む
                    <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </article>
            ))}
          </div>

        </div>
      </main>
    </PageTemplate>
  );
};
