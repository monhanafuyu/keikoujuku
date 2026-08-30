import React, { useState } from 'react';
import { X, ShieldCheck, Scale, FileText } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'terms' | 'privacy' | 'commercial';
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  initialType = 'commercial',
}) => {
  const [activeTab, setActiveTab] = useState<'commercial' | 'terms' | 'privacy'>(
    initialType
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[85vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="閉じる"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Tab Buttons */}
        <div className="flex gap-2 border-b border-slate-200 pb-3 mb-4 shrink-0">
          <button
            onClick={() => setActiveTab('commercial')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'commercial'
                ? 'bg-blue-600 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            特定商取引法に基づく表記
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'terms'
                ? 'bg-blue-600 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            利用規約
          </button>
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'privacy'
                ? 'bg-blue-600 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            プライバシーポリシー
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto pr-2 text-xs sm:text-sm text-slate-600 leading-relaxed space-y-4">
          {activeTab === 'commercial' && (
            <div className="space-y-3">
              <h4 className="text-base font-bold text-slate-900">
                特定商取引法に基づく表記
              </h4>
              <div className="border border-slate-200 rounded-xl divide-y divide-slate-100">
                <div className="p-3 bg-slate-50 grid grid-cols-3">
                  <span className="font-bold text-slate-700">事業者名</span>
                  <span className="col-span-2 text-slate-900">大学受験専門 学習管理塾 PASSGATE 運営事務局</span>
                </div>
                <div className="p-3 grid grid-cols-3">
                  <span className="font-bold text-slate-700">運営責任者</span>
                  <span className="col-span-2 text-slate-900">教育マネジメント事業部 責任者</span>
                </div>
                <div className="p-3 bg-slate-50 grid grid-cols-3">
                  <span className="font-bold text-slate-700">所在地</span>
                  <span className="col-span-2 text-slate-900">東京都内（完全オンライン運営）※ご請求時は遅滞なく開示いたします</span>
                </div>
                <div className="p-3 grid grid-cols-3">
                  <span className="font-bold text-slate-700">お問い合わせ</span>
                  <span className="col-span-2 text-slate-900">公式LINEまたは support@passgate-exam.jp</span>
                </div>
                <div className="p-3 bg-slate-50 grid grid-cols-3">
                  <span className="font-bold text-slate-700">サービス提供価格</span>
                  <span className="col-span-2 text-slate-900">各プラン紹介ページに明記（月額 9,800円〜29,800円 / 税込）</span>
                </div>
                <div className="p-3 grid grid-cols-3">
                  <span className="font-bold text-slate-700">お支払い方法</span>
                  <span className="col-span-2 text-slate-900">クレジットカード決済、銀行振込</span>
                </div>
                <div className="p-3 bg-slate-50 grid grid-cols-3">
                  <span className="font-bold text-slate-700">解約・休会について</span>
                  <span className="col-span-2 text-slate-900">前月20日までの申請により、当月末をもって解約・休会が可能です。違約金は一切発生いたしません。</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-3">
              <h4 className="text-base font-bold text-slate-900">利用規約</h4>
              <p>
                本利用規約（以下「本規約」）は、大学受験専門学習管理塾PASSGATE（以下「当塾」）が提供するオンライン学習管理サービス（以下「本サービス」）の利用条件を定めるものです。
              </p>
              <h5 className="font-bold text-slate-800">第1条（サービス内容）</h5>
              <p>
                当塾は、生徒の自立的な学習管理、学習計画の立案、進捗確認、質問対応等のサポートを行います。本サービスは生徒本人の自主的な学習を支援するものであり、特定の大学への合格を法的に保証するものではありません。
              </p>
              <h5 className="font-bold text-slate-800">第2条（契約及びプラン変更）</h5>
              <p>
                受講生は、希望するプランを選択し所定の手続きを行うことで契約が成立します。プラン変更および休会・退会は、月単位で随時受付いたします。
              </p>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-3">
              <h4 className="text-base font-bold text-slate-900">プライバシーポリシー</h4>
              <p>
                当塾は、お客様の個人情報の重要性を認識し、個人情報保護法に基づき適切に取り扱います。
              </p>
              <h5 className="font-bold text-slate-800">1. 個人情報の収集目的</h5>
              <p>
                無料学習相談の実施、学習指導・管理サービスの提供、受講生への連絡、及びサービス向上のための分析にのみ利用いたします。
              </p>
              <h5 className="font-bold text-slate-800">2. 第三者提供の禁止</h5>
              <p>
                法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはございません。
              </p>
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-slate-100 mt-4 text-right shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
};
