import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { PageTemplate } from '../components/PageTemplate';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { columns } from '../data/columns';
import { ChevronLeft, Clock, Calendar, Share2, Sparkles, ChevronRight, BookOpen } from 'lucide-react';

export const ColumnDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const column = columns.find(c => c.id === id);

  if (!column) {
    return <Navigate to="/column/" replace />;
  }

  // 関連記事（同カテゴリまたは他の記事から3件抽出）
  const relatedArticles = columns
    .filter(c => c.id !== column.id)
    .slice(0, 3);

  return (
    <PageTemplate>
      <SEO 
        title={`${column.title}｜慶應ROUTE`}
        description={column.excerpt}
        canonicalUrl={`/column/${column.id}`}
        type="article"
        breadcrumbs={[
          { name: '受験戦略コラム', item: '/column/' },
          { name: column.title, item: `/column/${column.id}` }
        ]}
      />
      
      <Breadcrumbs items={[
        { name: '受験戦略コラム', path: '/column/' },
        { name: column.title, path: `/column/${column.id}` }
      ]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Article Header */}
        <header className="mb-12 border-b border-slate-200 pb-10">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="text-xs font-bold tracking-wider text-[#B38F4F] border border-[#B38F4F]/40 px-3.5 py-1 rounded-sm bg-[#B38F4F]/5">
              {column.category}
            </span>
            <div className="flex items-center gap-4 text-xs text-slate-500 font-mono">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {column.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                所要時間: {column.readTime}
              </span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-serif font-bold tracking-widest text-slate-900 leading-tight mb-6">
            {column.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed bg-slate-50 border-l-4 border-[#B38F4F] p-4 rounded-r-sm">
            {column.excerpt}
          </p>
        </header>

        {/* Article Body */}
        <div 
          className="prose prose-slate prose-lg max-w-none 
            prose-headings:font-serif prose-headings:tracking-widest prose-headings:text-slate-900
            prose-h2:text-2xl prose-h2:border-b prose-h2:border-slate-200 prose-h2:pb-3 prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-xl prose-h3:text-[#080E1A] prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-slate-700 prose-p:leading-relaxed prose-p:text-base
            prose-li:text-slate-700 prose-li:text-base
            prose-strong:text-[#080E1A] prose-strong:font-bold
            prose-a:text-[#B38F4F] prose-a:font-bold hover:prose-a:text-[#8F6E32]"
          dangerouslySetInnerHTML={{ __html: column.content }}
        />

        {/* Related Internal Links Block */}
        {column.relatedLinks && column.relatedLinks.length > 0 && (
          <div className="mt-16 p-6 bg-[#080E1A] text-white rounded-sm border border-[#B38F4F]/30">
            <div className="flex items-center gap-2 text-xs font-serif tracking-widest text-[#C5A265] mb-4">
              <BookOpen className="w-4 h-4 text-[#B38F4F]" />
              この記事に関連するおすすめページ・対策
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {column.relatedLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.url}
                  className="p-3 bg-white/5 border border-[#B38F4F]/20 rounded-sm hover:border-[#B38F4F] hover:bg-white/10 transition-all flex items-center justify-between group"
                >
                  <span className="text-xs sm:text-sm text-slate-200 group-hover:text-white font-medium">
                    {link.title}
                  </span>
                  <ChevronRight className="w-4 h-4 text-[#B38F4F] shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Navigation & Back to List */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link 
            to="/column/" 
            className="inline-flex items-center text-sm font-bold text-slate-700 hover:text-[#B38F4F] transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            コラム一覧へ戻る
          </Link>
          <Link
            to="/#consultation"
            className="inline-flex items-center px-6 py-3 bg-[#080E1A] text-white text-xs font-bold tracking-widest hover:bg-[#1A2639] border border-[#B38F4F]/40 rounded-sm transition-all"
          >
            無料で受験戦略を相談する
            <ChevronRight className="w-4 h-4 ml-2 text-[#B38F4F]" />
          </Link>
        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <section className="mt-20 pt-12 border-t border-slate-200">
            <h2 className="text-xl font-serif font-bold text-slate-900 tracking-widest mb-6">
              その他の受験戦略コラム
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map(rel => (
                <Link 
                  key={rel.id} 
                  to={`/column/${rel.id}`}
                  className="bg-white border border-slate-200 p-5 rounded-sm hover:border-[#B38F4F] hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-[#B38F4F] border border-[#B38F4F]/30 px-2 py-0.5 rounded-sm bg-[#B38F4F]/5 inline-block mb-3">
                      {rel.category}
                    </span>
                    <h3 className="text-sm font-serif font-bold text-slate-900 group-hover:text-[#B38F4F] transition-colors leading-snug line-clamp-2 mb-2">
                      {rel.title}
                    </h3>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono mt-4 pt-3 border-t border-slate-100 flex justify-between items-center">
                    <span>{rel.readTime}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#B38F4F]" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

      </article>
    </PageTemplate>
  );
};
