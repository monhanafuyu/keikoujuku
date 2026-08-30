import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { PageTemplate } from '../components/PageTemplate';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { columns } from '../data/columns';
import { ChevronLeft } from 'lucide-react';

export const ColumnDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const column = columns.find(c => c.id === id);

  if (!column) {
    return <Navigate to="/column/" replace />;
  }

  return (
    <PageTemplate>
      <SEO 
        title={`${column.title}｜慶應コーチング`}
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

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-bold tracking-wider text-[#b38f4f] border border-[#b38f4f]/30 px-3 py-1 rounded-sm bg-[#b38f4f]/5">
              {column.category}
            </span>
            <time className="text-sm text-slate-500 font-mono">{column.date}</time>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold font-serif tracking-widest text-slate-900 mb-6 leading-tight">
            {column.title}
          </h1>
        </header>

        <div 
          className="prose prose-slate prose-lg md:prose-xl max-w-none prose-headings:font-serif prose-headings:tracking-widest prose-a:text-[#b38f4f]"
          dangerouslySetInnerHTML={{ __html: column.content }}
        />

        <div className="mt-16 pt-8 border-t border-slate-200">
          <Link to="/column/" className="inline-flex items-center text-[#b38f4f] font-bold hover:text-[#c4a365] transition-colors">
            <ChevronLeft className="w-5 h-5 mr-2" />
            コラム一覧へ戻る
          </Link>
        </div>
      </article>
    </PageTemplate>
  );
};
