import React from 'react';
import { columns } from '../data/columns';
import { Link } from 'react-router-dom';
import { ChevronRight, Clock, Calendar } from 'lucide-react';

export const ColumnPreviewSection: React.FC = () => {
  // 最新の4記事をピックアップ
  const previewColumns = columns.slice(0, 4);

  return (
    <section className="py-24 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-slate-100 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F5] border border-[#f3e8d3] text-[#a07c3f] text-xs font-serif font-bold tracking-widest mb-4">
              Strategic Insights
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-slate-900 leading-tight">
              現役慶應生による<br className="sm:hidden" />受験戦略コラム
            </h2>
          </div>
          <Link
            to="/column"
            className="mt-6 md:mt-0 inline-flex items-center text-sm font-bold text-[#b38f4f] hover:text-[#8a6d3b] tracking-wider transition-colors"
          >
            コラム一覧をすべて見る
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewColumns.map(col => (
            <article
              key={col.id}
              className="bg-[#FAF9F5] border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between hover:border-[#b38f4f]/50 hover:shadow-lg hover:bg-white transition-all group relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold text-[#a07c3f] bg-white border border-[#f3e8d3] px-2.5 py-0.5 rounded-md">
                    {col.category}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {col.readTime}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-800 group-hover:text-[#a07c3f] transition-colors leading-[1.6] line-clamp-2 mb-3">
                  <Link to={`/column/${col.id}`} className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {col.title}
                  </Link>
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-6">
                  {col.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200/60 mt-auto">
                <span className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <Calendar className="w-3 h-3" />
                  {col.date}
                </span>
                <span className="inline-flex items-center text-xs font-bold text-[#b38f4f] group-hover:text-[#8a6d3b] transition-colors">
                  詳しく読む
                  <ChevronRight className="w-3.5 h-3.5 ml-0.5 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
