import React from 'react';
import { MessageCircle, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: 'terms' | 'privacy' | 'commercial') => void;
  onOpenLineModal: () => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onOpenLineModal, onOpenConsultation }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-900">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#8a6d3b] to-[#c5a059] flex items-center justify-center text-white font-black text-base shadow-lg shadow-[#a07c3f]/10">
                慶
              </div>
              <span className="text-lg font-black text-white tracking-tight bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] bg-clip-text text-transparent">
                慶應ROUTE
              </span>
              <span className="text-[10px] text-[#d4b783] font-bold bg-[#2a1f11]/80 border border-[#594226]/60 px-2 py-0.5 rounded">
                現役慶應生による逆算コーチング
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              慶應義塾大学の現役生が、自身の合格体験と最新の入試分析に基づき、志望校合格までの「最短ルート」を共に歩む学習管理塾です。
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
                <a href="#worries" className="hover:text-white transition-colors">高校生の悩み</a>
              </li>
              <li>
                <a href="#solution" className="hover:text-white transition-colors">逆算ステップ</a>
              </li>
              <li>
                <a href="#plan-demo" className="hover:text-white transition-colors">学習計画例</a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-white transition-colors">他塾との違い</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">料金プラン</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">よくある質問</a>
              </li>
            </ul>
          </div>

          {/* Legal and Inquiries */}
          <div>
            <p className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              規約・ポリシー
            </p>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onOpenLegal('commercial')}
                  className="hover:text-white transition-colors text-left"
                >
                  特定商取引法に基づく表記
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-white transition-colors text-left"
                >
                  利用規約
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-white transition-colors text-left"
                >
                  プライバシーポリシー
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenLineModal}
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-bold"
                >
                  <MessageCircle className="w-4 h-4 text-[#06C755]" />
                  <span>公式LINEお問い合わせ</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} 慶應ROUTE All Rights Reserved.</p>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#c4a365]" />
            <span>大学受験専門オンライン学習管理プラットフォーム</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
