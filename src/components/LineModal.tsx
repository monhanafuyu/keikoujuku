import React from 'react';
import { X, MessageCircle, CheckCircle2, ShieldCheck, Sparkles, Smartphone } from 'lucide-react';

interface LineModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LineModal: React.FC<LineModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="閉じる"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-4">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
            <MessageCircle className="w-8 h-8 text-[#06C755]" />
          </div>

          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
              LINE Official
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1 font-display">
              PASSGATE公式LINE
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              友だち追加で、受験の悩みをチャットで気軽にご相談いただけます。
            </p>
          </div>

          {/* QR Code Mock Box */}
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 inline-block mx-auto">
            {/* SVG QR Code Simulation */}
            <div className="w-40 h-40 bg-white p-2 rounded-xl shadow-xs border border-slate-200 flex flex-col items-center justify-center relative">
              <div className="grid grid-cols-5 gap-1.5 w-full h-full p-2 opacity-80">
                <div className="bg-slate-900 rounded-xs" />
                <div className="bg-slate-900 rounded-xs" />
                <div className="bg-slate-900 rounded-xs" />
                <div className="bg-slate-200 rounded-xs" />
                <div className="bg-slate-900 rounded-xs" />
                <div className="bg-slate-900 rounded-xs" />
                <div className="bg-slate-200 rounded-xs" />
                <div className="bg-slate-900 rounded-xs" />
                <div className="bg-slate-900 rounded-xs" />
                <div className="bg-slate-200 rounded-xs" />
                <div className="bg-slate-900 rounded-xs" />
                <div className="bg-slate-900 rounded-xs" />
                <div className="bg-emerald-500 rounded-xs" />
                <div className="bg-slate-900 rounded-xs" />
                <div className="bg-slate-900 rounded-xs" />
                <div className="bg-slate-200 rounded-xs" />
                <div className="bg-slate-900 rounded-xs" />
                <div className="bg-slate-900 rounded-xs" />
                <div className="bg-slate-200 rounded-xs" />
                <div className="bg-slate-900 rounded-xs" />
                <div className="bg-slate-900 rounded-xs" />
                <div className="bg-slate-200 rounded-xs" />
                <div className="bg-slate-900 rounded-xs" />
                <div className="bg-slate-900 rounded-xs" />
                <div className="bg-slate-900 rounded-xs" />
              </div>
              <span className="text-[9px] font-bold text-slate-500 absolute bottom-1">
                @passgate_exam
              </span>
            </div>
            <p className="text-[11px] text-slate-500 mt-2">
              スマホのカメラでスキャンして追加
            </p>
          </div>

          <div className="space-y-2 text-left bg-emerald-50/50 p-4 rounded-xl border border-emerald-100 text-xs text-slate-700">
            <p className="font-bold text-emerald-950 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              LINE追加のメリット：
            </p>
            <p className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>「今の偏差値からMARCHに間に合うか」を即座に相談可能</span>
            </p>
            <p className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>おすすめ参考書ルート・年間計画テンプレートを無料プレゼント</span>
            </p>
          </div>

          <a
            href="https://line.me"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 rounded-xl bg-[#06C755] hover:bg-[#05b34c] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
          >
            <Smartphone className="w-4 h-4" />
            <span>LINEアプリを開いて友だち追加</span>
          </a>

          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>通知が多い場合はいつでもブロック・通知オフ可能です</span>
          </div>
        </div>
      </div>
    </div>
  );
};
