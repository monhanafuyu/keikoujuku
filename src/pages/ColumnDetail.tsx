import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FinalCta } from '../components/FinalCta';
import { FreeConsultationModal } from '../components/FreeConsultationModal';
import { columns } from '../data/columns';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';

export const ColumnDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isConsultationOpen, setIsConsultationOpen] = React.useState(false);
  const openConsultation = () => setIsConsultationOpen(true);

  const column = columns.find(c => c.id === id);

  useEffect(() => {
    if (!column) {
      navigate('/column', { replace: true });
    }
  }, [column, navigate]);

  if (!column) return null;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#B38F4F] selection:text-white">
      <SEO 
        title={`${column.title}｜慶應受験コラム｜慶應ROUTE`}
        description={column.excerpt}
        canonicalUrl={`/column/${column.id}`}
      />
      
      <Navbar onOpenConsultation={openConsultation} />
      
      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/column" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#a07c3f] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            コラム一覧へ戻る
          </Link>
          
          <article className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12 mb-16">
            <div className="flex items-center gap-3 mb-6 text-sm">
              <span className="inline-flex items-center gap-1.5 text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg">
                <Calendar className="w-4 h-4" />
                {column.date}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[#a07c3f] bg-[#fcfaf5] border border-[#f3e8d3] px-3 py-1.5 rounded-lg font-bold">
                <Tag className="w-4 h-4" />
                {column.category}
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mb-8 leading-tight">
              {column.title}
            </h1>
            
            <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed whitespace-pre-wrap">
              {column.content}
            </div>
          </article>
        </div>
      </main>

      <FinalCta onOpenConsultation={openConsultation} />
      <Footer onOpenConsultation={openConsultation} />
      <FreeConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    </div>
  );
};
