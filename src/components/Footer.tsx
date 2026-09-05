import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <footer className="bg-[#0B1426] text-slate-400 py-16 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 inline-flex">
              <div className="w-8 h-8 rounded-lg bg-slate-800 border border-[#b38f4f]/30 flex items-center justify-center text-white font-black text-base shadow-lg shadow-[#b38f4f]/10">
                <span className="font-serif">慶</span>
              </div>
              <span className="text-lg font-black text-white tracking-tight">
                慶應ROUTE
              </span>
              <span className="text-[10px] text-[#d4b783] font-bold bg-[#14233C] border border-[#d4b783]/30 px-2 py-0.5 rounded ml-2">
                一般・推薦対応の慶應合格戦略塾
              </span>
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              一般も、推薦も。慶應合格へのルートを一つに絞らない。現役慶應生とつくる、あなただけの慶應合格戦略。
            </p>
            <p className="text-slate-500 text-[11px]">
              運営：慶應ROUTE 運営事務局
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              ナビゲーション
            </p>
            <ul className="space-y-2.5">
              <li>
                <Link to="/keio-ippan" className="hover:text-white transition-colors">一般選抜対策</Link>
              </li>
              <li>
                <Link to="/keio-fit" className="hover:text-white transition-colors">FIT入試対策</Link>
              </li>
              <li>
                <Link to="/keio-sfc" className="hover:text-white transition-colors">SFC総合型選抜対策</Link>
              </li>
              <li>
                <Link to="/shiteiko" className="hover:text-white transition-colors">指定校推薦対策</Link>
              </li>
              <li>
                <Link to="/high-school-1-2" className="hover:text-white transition-colors">高1・高2からの準備</Link>
              </li>
              <li>
                <Link to="/study-cycle" className="hover:text-white transition-colors">学習サイクル</Link>
              </li>
              <li>
                <Link to="/strategy-chart" className="hover:text-white transition-colors">受験戦略カルテ</Link>
              </li>
              <li>
                <Link to="/column" className="hover:text-white transition-colors">受験コラム</Link>
              </li>
              <li>
                <a href={isHome ? "#pricing" : "/#pricing"} className="hover:text-white transition-colors">料金プラン</a>
              </li>
            </ul>
          </div>

          {/* Legal and Inquiries */}
          <div>
            <p className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              サポート・運営情報
            </p>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={onOpenConsultation}
                  className="text-[#d4b783] hover:text-white transition-colors font-bold mb-2 block"
                >
                  無料受験戦略相談
                </button>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors block">運営者情報</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors block">お問い合わせ</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors block">利用規約</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors block">プライバシーポリシー</Link>
              </li>
              <li>
                <Link to="/legal" className="hover:text-white transition-colors block">特定商取引法に基づく表記</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and Disclaimer */}
        <div className="pt-8 flex flex-col space-y-4">
          <div className="p-4 bg-[#070D18] rounded-lg text-[11px] text-slate-400 border border-slate-800/80 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              慶應ROUTEは、慶應義塾および慶應義塾大学が運営・公認するサービスではありません。当塾は独立した教育サービスであり、慶應義塾の公式ロゴやペンマーク等の商標は一切使用しておりません。
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 pt-2">
            <p>© {new Date().getFullYear()} 慶應ROUTE All Rights Reserved.</p>
            <div className="flex items-center gap-2">
              <span>大学受験専門 一般・推薦横断型戦略プラットフォーム</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
