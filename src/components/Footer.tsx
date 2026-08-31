import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-900">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#8a6d3b] to-[#c5a059] flex items-center justify-center text-white font-black text-base shadow-lg shadow-[#a07c3f]/10">
                <span className="font-serif">慶</span>
              </div>
              <span className="text-lg font-black text-white tracking-tight bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] bg-clip-text text-transparent">
                慶應ROUTE
              </span>
              <span className="text-[10px] text-[#d4b783] font-bold bg-[#2a1f11]/80 border border-[#594226]/60 px-2 py-0.5 rounded">
                一般・推薦対応の慶應合格戦略塾
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              一般も、推薦も。慶應合格へのルートを一つに絞らない。現役慶應生とつくる、あなただけの慶應合格戦略。
            </p>
            <p className="text-slate-500 text-[11px]">
              運営：慶應ROUTE 運営事務局
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              ナビゲーション
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#admission-types" className="hover:text-white transition-colors">一般・推薦の横断戦略</a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-white transition-colors">高1からのロードマップ</a>
              </li>
              <li>
                <a href="#study-cycle" className="hover:text-white transition-colors">学習サイクル</a>
              </li>
              <li>
                <a href="#dashboard" className="hover:text-white transition-colors">受験戦略カルテ</a>
              </li>
              <li>
                <a href="#instructor" className="hover:text-white transition-colors">現役慶應生の指導</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">料金プラン</a>
              </li>
            </ul>
          </div>

          {/* Legal and Inquiries */}
          <div>
            <p className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              お問い合わせ・各種設定
            </p>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={onOpenConsultation}
                  className="text-[#d4b783] hover:text-[#e4cda5] transition-colors font-bold"
                >
                  無料相談・体験のお申し込み
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and Disclaimer */}
        <div className="pt-8 flex flex-col space-y-4">
          <div className="p-4 bg-slate-900 rounded-lg text-[11px] text-slate-400 border border-slate-800 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
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
