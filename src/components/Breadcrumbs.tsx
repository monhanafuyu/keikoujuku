import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  items: { name: string; path: string }[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4 overflow-x-auto whitespace-nowrap bg-[#0a0a0a] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-xs md:text-sm text-slate-400">
          <li>
            <Link to="/" className="hover:text-[#b38f4f] transition-colors flex items-center">
              <Home className="w-3 h-3 md:w-4 md:h-4" />
              <span className="sr-only">ホーム</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight className="w-3 h-3 md:w-4 md:h-4 mx-1 text-slate-400" />
              {index === items.length - 1 ? (
                <span className="font-bold text-slate-200" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link to={item.path} className="hover:text-[#b38f4f] transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};
