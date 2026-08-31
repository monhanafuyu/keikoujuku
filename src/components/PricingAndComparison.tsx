import React from 'react';
import { Check, X, Calendar } from 'lucide-react';

export const PricingAndComparison: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  return (
    <section className="py-24 bg-[#fcfaf5]" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Comparison Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-black text-slate-900 mb-6 font-serif">
            授業だけでも、<br className="sm:hidden" />
            学習管理だけでもない。
          </h2>
        </div>

        <div className="max-w-5xl mx-auto mb-24 overflow-x-auto pb-4">
          <div className="min-w-[800px] bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-5 text-sm">
              {/* Header */}
              <div className="col-span-1 bg-[#fcfaf5] p-4 border-b border-slate-200 font-bold text-slate-500">特徴</div>
              <div className="col-span-1 bg-[#fcfaf5] p-4 border-b border-slate-200 font-bold text-slate-700 text-center">一般的な<br/>予備校</div>
              <div className="col-span-1 bg-[#fcfaf5] p-4 border-b border-slate-200 font-bold text-slate-700 text-center">一般的な<br/>学習管理塾</div>
              <div className="col-span-1 bg-[#fcfaf5] p-4 border-b border-slate-200 font-bold text-slate-700 text-center">総合型・推薦<br/>専門塾</div>
              <div className="col-span-1 bg-[#b38f4f] p-4 border-b border-[#a07c3f] font-bold text-white text-center flex flex-col justify-center items-center">
                <span>慶應ROUTE</span>
              </div>

              {/* Rows */}
              {[
                { label: '得意な指導', a: '授業中心', b: '参考書・進捗管理', c: '書類・小論文', d: '横断型受験戦略' },
                { label: '一般・推薦の並行', a: '× 難しい', b: '△ 一般寄り', c: '△ 推薦寄り', d: '◎ 両方に対応' },
                { label: '分からない問題の解説', a: '△ 質問待ちが必要', b: '× 管理のみ', c: '× 専門外', d: '◎ 個別解説あり' },
                { label: '慶應への専門性', a: '△ 全大学向け', b: '△ 全大学向け', c: '△ 全大学向け', d: '◎ 慶應特化' },
              ].map((row, idx) => (
                <React.Fragment key={idx}>
                  <div className="col-span-1 p-4 border-b border-slate-100 font-bold text-slate-600 bg-[#fcfaf5]/50 flex items-center">{row.label}</div>
                  <div className="col-span-1 p-4 border-b border-slate-100 text-slate-600 text-center flex items-center justify-center">{row.a}</div>
                  <div className="col-span-1 p-4 border-b border-slate-100 text-slate-600 text-center flex items-center justify-center">{row.b}</div>
                  <div className="col-span-1 p-4 border-b border-slate-100 text-slate-600 text-center flex items-center justify-center">{row.c}</div>
                  <div className="col-span-1 p-4 border-b border-[#f3e8d3] font-bold text-[#a07c3f] bg-[#fcfaf5]/50 text-center flex items-center justify-center">{row.d}</div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-6 font-serif">
            料金プラン
          </h2>
          <p className="text-slate-600">
            入会金は不要です。生徒の希望するペースに合わせて柔軟に選択できます。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          
          {/* 4 Koma */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col relative shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2">毎週スタディ<br/><span className="text-base text-slate-500 font-normal">月4コマ</span></h3>
            <div className="my-6">
              <span className="text-3xl font-black text-slate-900">32,000</span>
              <span className="text-slate-500 font-medium ml-1">円 / 月(税込)</span>
            </div>
            <p className="text-xs text-slate-600 mb-6 bg-[#fcfaf5] p-3 rounded-lg border border-slate-100">
              自分で勉強を進められるが、定期的に戦略・進捗を確認してほしい人
            </p>
            <ul className="space-y-3 mb-8 flex-1 text-sm text-slate-700">
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#fcfaf5]0 mt-0.5 shrink-0" /><span>慶應特化 個別カリキュラム</span></li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#fcfaf5]0 mt-0.5 shrink-0" /><span>学習管理・進捗面談</span></li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#fcfaf5]0 mt-0.5 shrink-0" /><span>質問送信・個別解説</span></li>
            </ul>
            <button onClick={onOpenConsultation} className="w-full py-3 rounded-xl border-2 border-slate-200 text-slate-700 font-bold hover:border-slate-300 hover:bg-[#fcfaf5] transition-colors">相談する</button>
          </div>

          {/* 6 Koma (Recommended) */}
          <div className="bg-white rounded-2xl border-2 border-[#b38f4f] p-6 sm:p-8 flex flex-col relative shadow-lg transform md:-translate-y-4 z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#b38f4f] text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-widest shadow-sm">
              おすすめ
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">毎週スタディ<br/><span className="text-base text-slate-500 font-normal">月6コマ</span></h3>
            <div className="my-6">
              <span className="text-3xl font-black text-[#b38f4f]">42,000</span>
              <span className="text-slate-500 font-medium ml-1">円 / 月(税込)</span>
            </div>
            <p className="text-xs text-[#594226] mb-6 bg-[#fcfaf5] p-3 rounded-lg border border-[#f3e8d3] font-medium">
              学習管理・質問・一般推薦対策をバランスよく受けたい人
            </p>
            <ul className="space-y-3 mb-8 flex-1 text-sm text-slate-700">
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#fcfaf5]0 mt-0.5 shrink-0" /><span>月4コマの全内容</span></li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#fcfaf5]0 mt-0.5 shrink-0" /><span>小論文・英作文 添削</span></li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#fcfaf5]0 mt-0.5 shrink-0" /><span>志望理由書 サポート</span></li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#fcfaf5]0 mt-0.5 shrink-0" /><span>模擬面接</span></li>
            </ul>
            <button onClick={onOpenConsultation} className="w-full py-3 rounded-xl bg-[#b38f4f] text-white font-bold hover:bg-[#a07c3f] transition-colors shadow-md shadow-[#b38f4f]/20">無料相談に申し込む</button>
          </div>

          {/* 8 Koma */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col relative shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2">毎週スタディ<br/><span className="text-base text-slate-500 font-normal">月8コマ</span></h3>
            <div className="my-6">
              <span className="text-3xl font-black text-slate-900">51,400</span>
              <span className="text-slate-500 font-medium ml-1">円 / 月(税込)</span>
            </div>
            <p className="text-xs text-slate-600 mb-6 bg-[#fcfaf5] p-3 rounded-lg border border-slate-100">
              慶應対策をより密に進めたい人、直前期や複数方式を本格的に並行する人
            </p>
            <ul className="space-y-3 mb-8 flex-1 text-sm text-slate-700">
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#fcfaf5]0 mt-0.5 shrink-0" /><span>月6コマの全内容</span></li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#fcfaf5]0 mt-0.5 shrink-0" /><span>高頻度な面談・進捗管理</span></li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#fcfaf5]0 mt-0.5 shrink-0" /><span>複数の入試方式の同時並行</span></li>
            </ul>
            <button onClick={onOpenConsultation} className="w-full py-3 rounded-xl border-2 border-slate-200 text-slate-700 font-bold hover:border-slate-300 hover:bg-[#fcfaf5] transition-colors">相談する</button>
          </div>

          {/* Chat Study */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col relative shadow-sm lg:mt-0">
            <h3 className="text-xl font-bold text-slate-900 mb-2">チャット<br/><span className="text-base text-slate-500 font-normal">スタディコース</span></h3>
            <div className="my-6">
              <span className="text-3xl font-black text-slate-900">16,000</span>
              <span className="text-slate-500 font-medium ml-1">円 / 月(税込)</span>
            </div>
            <p className="text-xs text-slate-600 mb-6 bg-[#fcfaf5] p-3 rounded-lg border border-slate-100">
              自学自習ができ、質問・添削・受験相談を中心に利用したい人
            </p>
            <ul className="space-y-3 mb-8 flex-1 text-sm text-slate-700">
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#fcfaf5]0 mt-0.5 shrink-0" /><span>24時間いつでも質問送信可能</span></li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#fcfaf5]0 mt-0.5 shrink-0" /><span>小論文・英作文 添削</span></li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#fcfaf5]0 mt-0.5 shrink-0" /><span>入試方式別教材</span></li>
            </ul>
            <button onClick={onOpenConsultation} className="w-full py-3 rounded-xl border-2 border-slate-200 text-slate-700 font-bold hover:border-slate-300 hover:bg-[#fcfaf5] transition-colors">相談する</button>
          </div>

        </div>

        <div className="text-center mt-8">
          <p className="text-xs text-slate-500">※追加1コマ: 6,950円(税込)</p>
          <p className="text-xs text-slate-500 mt-1">※原則として一定時間以内に回答を行いますが、24時間即時回答をお約束するものではありません。</p>
        </div>

      </div>
    </section>
  );
};
