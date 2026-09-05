import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { PageTemplate } from '../components/PageTemplate';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { columns } from '../data/columns';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import Markdown from 'react-markdown';

export const ColumnDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const column = columns.find(c => c.id === id);

  useEffect(() => {
    if (!column) {
      navigate('/column', { replace: true });
    }
  }, [column, navigate]);

  if (!column) return null;

  return (
    <PageTemplate>
      <SEO 
        title={`${column.title}｜慶應受験戦略コラム｜慶應ROUTE`}
        description={column.excerpt}
        canonicalUrl={`/column/${column.id}`}
        breadcrumbs={[
          { name: '受験戦略コラム', item: '/column' },
          { name: column.title, item: `/column/${column.id}` }
        ]}
      />
      
      <Breadcrumbs items={[
        { name: '受験戦略コラム', path: '/column' },
        { name: column.title, path: `/column/${column.id}` }
      ]} />
      
      <main className="pt-8 pb-20 lg:pt-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link to="/column" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#b38f4f] transition-colors mb-8 font-medium">
            <ArrowLeft className="w-4 h-4" />
            コラム一覧へ戻る
          </Link>
          
          <article className="mb-20">
            {/* Article Header */}
            <header className="mb-10 text-center border-b border-slate-200 pb-10">
              <div className="flex items-center justify-center gap-4 mb-6 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {column.date}
                </span>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {column.readTime || "約5分"}
                </span>
              </div>
              
              <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#f3e8d3] bg-[#FAF9F5] text-[#a07c3f] text-xs font-bold">
                {column.category}
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-slate-900 leading-[1.4] tracking-tight">
                {column.title}
              </h1>
            </header>
            
            {/* Article Content */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm">
              <div className="prose prose-slate prose-lg max-w-none prose-headings:font-serif prose-headings:text-slate-900 prose-h2:border-b prose-h2:border-slate-200 prose-h2:pb-3 prose-h2:mt-10 prose-h2:mb-6 prose-h2:text-2xl prose-h3:text-xl prose-p:text-slate-700 prose-p:leading-loose prose-strong:text-slate-900 prose-strong:font-bold prose-a:text-[#a07c3f] prose-a:font-bold hover:prose-a:text-[#8a6d3b] prose-a:underline prose-ul:text-slate-700 prose-li:leading-relaxed">
                <Markdown>{column.content}</Markdown>
              </div>
            </div>
            
          </article>
        </div>
      </main>
    </PageTemplate>
  );
};
