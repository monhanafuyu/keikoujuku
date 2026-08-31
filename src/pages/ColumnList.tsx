import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FinalCta } from '../components/FinalCta';
import { FreeConsultationModal } from '../components/FreeConsultationModal';
import { columns } from '../data/columns';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

export const ColumnList = () => {
  const [isConsultationOpen, setIsConsultationOpen] = React.useState(false);
  const openConsultation = () => setIsConsultationOpen(true);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#B38F4F] selection:text-white">
      <SEO 
        title="慶應受験コラム・合格戦略｜慶應ROUTE"
        description="一般選抜、FIT入試、SFC総合型選抜、指定校推薦など、慶應受験に関する戦略や学習法を現役慶應生が解説します。"
        canonicalUrl="/column"
      />
      
      <Navbar onOpenConsultation={openConsultation} />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 mb-6 tracking-tight">
              慶應受験コラム
            </h1>
            <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
              入試方式別の対策から、併願戦略、高1・高2からの学習計画まで。
              現役生ならではの視点で、慶應合格に向けた実践的なノウハウを公開しています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {columns.map((column) => (
              <Link 
                key={column.id} 
                to={`/column/${column.id}`}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col group hover:shadow-md hover:border-[#b38f4f]/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4 text-xs">
                  <span className="inline-flex items-center gap-1 text-slate-500 bg-slate-100 px-2 py-1 rounded">
                    <Calendar className="w-3 h-3" />
                    {column.date}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[#a07c3f] bg-[#fcfaf5] border border-[#f3e8d3] px-2 py-1 rounded font-bold">
                    <Tag className="w-3 h-3" />
                    {column.category}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#a07c3f] transition-colors line-clamp-2">
                  {column.title}
                </h2>
                
                <p className="text-sm text-slate-600 mb-6 flex-grow line-clamp-3 leading-relaxed">
                  {column.excerpt}
                </p>
                
                <div className="pt-4 border-t border-slate-100 mt-auto flex items-center justify-between text-sm font-bold text-[#b38f4f] group-hover:text-[#8a6d3b] transition-colors">
                  <span>記事を読む</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <FinalCta onOpenConsultation={openConsultation} />
      <Footer onOpenConsultation={openConsultation} />
      <FreeConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    </div>
  );
};
