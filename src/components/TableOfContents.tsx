import React, { useEffect, useState } from 'react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface Props {
  content: string;
}

export const TableOfContents: React.FC<Props> = ({ content }) => {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // マークダウンから見出しを抽出
    const extractedHeadings: TOCItem[] = [];
    const lines = content.split('\n');
    lines.forEach(line => {
      const match = line.match(/^(#{2,3})\s+(.+)$/);
      if (match) {
        const level = match[1].length;
        const text = match[2].trim();
        // slug化（簡易版）
        const id = text.toLowerCase().replace(/[^\w\s\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/g, '').replace(/\s+/g, '-');
        extractedHeadings.push({ id, text, level });
      }
    });
    setHeadings(extractedHeadings);
  }, [content]);

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings.map(h => document.getElementById(h.id)).filter(Boolean);
      for (let i = headingElements.length - 1; i >= 0; i--) {
        const el = headingElements[i];
        if (el && el.getBoundingClientRect().top < 150) {
          setActiveId(el.id);
          return;
        }
      }
      if (headingElements.length > 0) {
        setActiveId(headingElements[0]?.id || '');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <div className="sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto hidden lg:block w-64 shrink-0 pl-8 border-l border-slate-100">
      <h3 className="font-bold text-slate-900 mb-4 text-sm flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#a07c3f]"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
        目次
      </h3>
      <ul className="space-y-2.5 text-sm">
        {headings.map((heading, index) => (
          <li 
            key={index} 
            className={`transition-colors ${heading.level === 3 ? 'ml-4 text-xs' : 'font-medium'} 
              ${activeId === heading.id ? 'text-[#b38f4f]' : 'text-slate-500 hover:text-slate-900'}`}
          >
            <a href={`#${heading.id}`} className="block leading-snug">{heading.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
