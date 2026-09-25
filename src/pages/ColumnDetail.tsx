import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { PageTemplate } from '../components/PageTemplate';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { columns } from '../data/columns';
import { ArrowLeft, Calendar, Clock, ChevronRight } from 'lucide-react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { TableOfContents } from '../components/TableOfContents';

// slug生成関数
const generateSlug = (text: string) => {
  return text.toLowerCase().replace(/[^\w\s\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/g, '').replace(/\s+/g, '-');
};

// URLエイリアスマッピング（過去のインデックスや表記揺れを正規URLへ統合）
const COLUMN_ALIASES: Record<string, string> = {
  'keio-fit-ippan-ryouritsu': 'keio-fit-general-exams',
  'fit-ippan-ryouritsu': 'keio-fit-general-exams',
  'recommendation-and-general-exam': 'shiteiko-ippan-ryouritsu',
  'keio-ippan-when-to-start': 'keio-when-start',
  'keio-high2-plan': 'keio-grade2-schedule',
  'kou2-juken-strategy': 'keio-grade2-schedule',
  'shiteiko-high1': 'shiteikou-kou1-todo',
  'fit-when-to-start': 'keio-fit-when-start',
  'kou1-juken-start': 'keio-when-start',
  'keio-high1-start': 'keio-when-start',
};

// MarkdownからFAQ項目を自動抽出して構造化データ（FAQPage）を生成
const extractFaqFromContent = (content: string) => {
  const faqMatch = content.match(/## FAQ[^\n]*\n+([\s\S]*?)(?=\n## |$)/);
  if (!faqMatch) return [];
  const faqText = faqMatch[1];
  const qas: { question: string; answer: string }[] = [];
  const regex = /\*\*Q\.\s*([^\*]+?)\*\*\s*\n+A\.\s*([^\n]+)/g;
  let m;
  while ((m = regex.exec(faqText)) !== null) {
    qas.push({ question: m[1].trim(), answer: m[2].trim() });
  }
  return qas;
};

export const ColumnDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // エイリアス解決
  const resolvedId = id && COLUMN_ALIASES[id] ? COLUMN_ALIASES[id] : id;
  const column = columns.find(c => c.id === resolvedId);

  useEffect(() => {
    if (!column) {
      navigate('/column', { replace: true });
    }
  }, [column, navigate]);

  if (!column) return null;

  const faqItems = extractFaqFromContent(column.content);

  return (
    <PageTemplate>
      <SEO 
        title={`${column.title}｜慶應受験戦略コラム｜慶應ROUTE`}
        description={column.excerpt}
        canonicalUrl={`/column/${column.id}`}
        type="article"
        faqItems={faqItems}
        breadcrumbs={[
          { name: '受験戦略コラム', item: '/column' },
          { name: column.title, item: `/column/${column.id}` }
        ]}
      />
      
      <Breadcrumbs items={[
        { name: '受験戦略コラム', path: '/column' },
        { name: column.title, path: `/column/${column.id}` }
      ]} />
      
      <main className="pt-8 pb-20 lg:pt-12 bg-slate-50/50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link to="/column" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#b38f4f] transition-colors mb-8 font-medium bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
            <ArrowLeft className="w-4 h-4" />
            コラム一覧へ戻る
          </Link>
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start relative">
            <article className="flex-1 min-w-0 w-full mb-20">
              {/* Article Header */}
              <header className="mb-10 text-center pb-10 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-[#b38f4f]"></div>
                <div className="flex items-center justify-center gap-4 mb-6 text-xs text-slate-500 font-medium">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {column.date}
                  </span>
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                  <span className="inline-flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-md">
                    <Clock className="w-3.5 h-3.5" />
                    {column.readTime || "約5分"}
                  </span>
                </div>
                
                <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f3e8d3] bg-[#FAF9F5] text-[#a07c3f] text-sm font-bold shadow-sm">
                  {column.category}
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-slate-900 leading-[1.5] tracking-tight">
                  {column.title}
                </h1>
              </header>
              
              {/* Article Content */}
              <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
                <div className="prose prose-slate prose-lg max-w-none 
                  prose-headings:font-serif prose-headings:text-slate-900 
                  prose-h2:border-b prose-h2:border-slate-100 prose-h2:pb-4 prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-2xl prose-h2:font-bold prose-h2:relative prose-h2:pl-4
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:font-bold prose-h3:text-slate-800
                  prose-p:text-slate-700 prose-p:leading-loose 
                  prose-strong:text-slate-900 prose-strong:font-bold prose-strong:bg-yellow-50 prose-strong:px-1
                  prose-a:text-[#a07c3f] prose-a:font-bold hover:prose-a:text-[#8a6d3b] prose-a:underline prose-a:underline-offset-4
                  prose-ul:text-slate-700 prose-li:leading-relaxed prose-li:marker:text-[#b38f4f]
                  prose-blockquote:border-l-4 prose-blockquote:border-[#b38f4f] prose-blockquote:bg-slate-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:text-slate-600 prose-blockquote:font-normal prose-blockquote:rounded-r-lg prose-blockquote:not-italic
                  prose-table:w-full prose-th:bg-slate-100 prose-th:p-4 prose-th:text-slate-900 prose-td:p-4 prose-td:border-b prose-td:border-slate-100">
                  <Markdown 
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h2: ({node, children, ...props}) => {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const text = (node as any).children?.[0]?.value || '';
                        return <h2 id={generateSlug(text)} {...props} className="before:content-[''] before:absolute before:left-0 before:top-1 before:bottom-1 before:w-1.5 before:bg-[#b38f4f] before:rounded-full">{children}</h2>;
                      },
                      h3: ({node, children, ...props}) => {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const text = (node as any).children?.[0]?.value || '';
                        return <h3 id={generateSlug(text)} {...props}>{children}</h3>;
                      }
                    }}
                  >
                    {column.content}
                  </Markdown>
                </div>
                
                {/* CTA Box in Article Footer */}
                <div className="mt-16 pt-10 border-t border-slate-100">
                  <div className="bg-[#FAF9F5] border border-[#eaddc4] rounded-2xl p-8 text-center shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full blur-3xl -mr-10 -mt-10"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#b38f4f]/10 rounded-full blur-2xl -ml-10 -mb-10"></div>
                    
                    <h4 className="text-xl font-bold text-slate-900 mb-3 relative z-10 font-serif">今の学力から、あなただけの合格戦略を。</h4>
                    <p className="text-slate-600 mb-6 text-sm leading-relaxed relative z-10 max-w-lg mx-auto">
                      記事を読んで「自分にはどの方式が合っているのか」「今から何を始めればいいのか」迷った方は、無料の受験戦略相談をご利用ください。
                    </p>
                    <button className="relative z-10 bg-slate-900 text-white font-bold py-3.5 px-8 rounded-full hover:bg-slate-800 transition-all shadow-md flex items-center justify-center gap-2 mx-auto">
                      無料受験戦略相談に申し込む
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar TOC */}
            <TableOfContents content={column.content} />
          </div>
        </div>
      </main>
    </PageTemplate>
  );
};
