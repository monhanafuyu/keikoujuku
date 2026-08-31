import React, { useState } from 'react';
import { PageTemplate } from '../components/PageTemplate';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { columns } from '../data/columns';
import { Link } from 'react-router-dom';
import { BookOpen, Sparkles, Clock, ChevronRight, Search } from 'lucide-react';

export const ColumnList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['ALL', '指定校推薦', '総合型選抜', '慶應FIT入試', '受験戦略', '学習管理塾'];

  const filteredColumns = columns.filter(col => {
    const matchCat = selectedCategory === 'ALL' || col.category === selectedCategory;
    const matchSearch = col.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        col.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <PageTemplate>
      <SEO 
        title="受験戦略コラム一覧｜指定校推薦・FIT入試・総合型・一般選抜｜慶應ROUTE"
        description="現役慶應生による大学受験戦略コラム。指定校推薦と一般入試の両立、慶應法学部FIT入試対策、総合型選抜の志望理由書、学習管理塾の活用法など合格に直結する情報を発信。"
        canonicalUrl="/column/"
        breadcrumbs={[
          { name: '受験戦略コラム', item: '/column/' }
        ]}
      />
      
      <Breadcrumbs items={[{ name: '受験戦略コラム', path: '/column/' }]} />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-[#080E1A] text-white overflow-hidden border-b border-[#B38F4F]/30">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B38F4F_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B38F4F]/40 bg-[#B38F4F]/10 text-[#DFCCA6] text-xs md:text-sm font-serif tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#B38F4F]" />
            EXAMINATION STRATEGY COLUMNS
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-widest leading-tight text-white mb-6">
            大学受験戦略コラム
          </h1>

          <p className="text-sm sm:text-base text-slate-300 font-serif tracking-wider max-w-2xl mx-auto leading-relaxed">
            指定校推薦・慶應法FIT・総合型選抜・一般選抜。<br />
            現役慶應生が教える、合格確率を最大化する受験戦略と勉強法。
          </p>
        </div>
      </section>

      {/* Main List */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 pb-6 border-b border-slate-200">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-sm text-xs font-bold tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#080E1A] text-[#B38F4F] border border-[#B38F4F]'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="キーワードで検索..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-sm text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#B38F4F]"
            />
          </div>
        </div>

        {/* Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredColumns.map(col => (
            <article 
              key={col.id} 
              className="bg-white border border-slate-200 rounded-sm p-6 sm:p-8 flex flex-col justify-between hover:border-[#B38F4F] hover:shadow-lg transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-bold tracking-wider text-[#B38F4F] border border-[#B38F4F]/40 px-3 py-0.5 rounded-sm bg-[#B38F4F]/5">
                    {col.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    {col.readTime}
                  </div>
                </div>

                <h2 className="text-lg sm:text-xl font-serif font-bold text-slate-900 group-hover:text-[#B38F4F] transition-colors leading-snug mb-3">
                  <Link to={`/column/${col.id}`}>
                    {col.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6">
                  {col.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">{col.date}</span>
                <Link 
                  to={`/column/${col.id}`}
                  className="inline-flex items-center text-xs font-bold text-[#080E1A] group-hover:text-[#B38F4F] transition-colors tracking-widest"
                >
                  記事を読む
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredColumns.length === 0 && (
          <div className="text-center py-16 text-slate-500">
            該当する記事が見つかりませんでした。
          </div>
        )}

      </div>
    </PageTemplate>
  );
};
