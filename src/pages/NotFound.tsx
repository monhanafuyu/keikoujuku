import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { PageTemplate } from '../components/PageTemplate';
import { Home } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <PageTemplate>
      <SEO 
        title="ページが見つかりません｜慶應ROUTE"
        description="お探しのページは見つかりませんでした。削除されたか、URLが間違っている可能性があります。"
        canonicalUrl="/404"
        noindex={true}
      />
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center max-w-xl mx-auto">
          <h1 className="text-6xl sm:text-8xl font-black font-serif text-slate-200 mb-6 tracking-tighter">404</h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 font-serif">ページが見つかりません</h2>
          <p className="text-slate-600 mb-10 leading-relaxed">
            お探しのページは削除されたか、URLが変更された可能性があります。<br className="hidden sm:block" />
            トップページから再度お探しください。
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-slate-900 text-white font-bold py-3.5 px-8 rounded-full hover:bg-slate-800 transition-all shadow-md"
          >
            <Home className="w-5 h-5" />
            トップページへ戻る
          </Link>
        </div>
      </div>
    </PageTemplate>
  );
};
