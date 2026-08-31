import React from 'react';
import { columns } from '../data/columns';
import { Link } from 'react-router-dom';
import { BookOpen, Sparkles, ChevronRight, Clock } from 'lucide-react';

export const ColumnPreviewSection: React.FC = () => {
  // 最新の4記事をピックアップ
  const previewColumns = columns.slice(0, 4);

  return (
    <section className="py-24 bg-[#FAF9F5] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#B38F4F]/30 bg-[#B38F4F]/10 text-[#8F6E32] text-xs font-serif tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#B38F4F]" />
              EXAMINATION STRATEGY COLUMN
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold tracking-widest text-slate-900 leading-tight">
              現役慶應生による<br className="sm:hidden" />受験戦略コラム
            </h2>
          </div>
          <Link
            to="/columns/"
            className="mt-4 md:mt-0 inline-flex items-center text-xs font-bold text-[#B38F4F] hover:text-[#8F6E32] tracking-widest transition-colors"
          >
            コラム一覧をすべて見る
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewColumns.map(col => (
            <article
              key={col.id}
              className="bg-white border border-slate-200 rounded-sm p-6 flex flex-col justify-between hover:border-[#B38F4F] hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold text-[#B38F4F] border border-[#B38F4F]/30 px-2 py-0.5 rounded-sm bg-[#B38F4F]/5">
                    {col.category}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {col.readTime}
                  </span>
                </div>

                <h3 className="text-sm font-serif font-bold text-slate-900 group-hover:text-[#B38F4F] transition-colors leading-snug line-clamp-2 mb-3">
                  <Link to={`/columns/${col.id}`}>
                    {col.title}
                  </Link>
                </h3>

                <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed mb-4">
                  {col.excerpt}
                </p>
              </div>

              <Link
                to={`/columns/${col.id}`}
                className="text-xs font-bold text-[#080E1A] group-hover:text-[#B38F4F] tracking-widest flex items-center pt-3 border-t border-slate-100 transition-colors"
              >
                記事を読む
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
