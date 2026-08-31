import React from 'react';
import { ArrowDown, CheckCircle2 } from 'lucide-react';

export const Roadmap: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="roadmap">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-[#fcfaf5] text-[#a07c3f] text-xs font-bold tracking-widest mb-6">
            高1・高2からの戦略
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-6 font-serif">
            高3で選べる状態を、<br className="sm:hidden" />
            高1・高2から。
          </h2>
          <p className="text-slate-600">
            早期から一般入試と推薦入試の土台を同時に築くことで、高3になった時に最も有利なルートを選択できます。
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-0.5 bg-[#f3e8d3] transform sm:-translate-x-1/2"></div>

            {/* Grade 1 */}
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 sm:mb-20">
              <div className="hidden sm:block w-[45%] text-right pr-12">
                <h3 className="text-xl font-bold text-slate-900">高校1年</h3>
                <p className="text-[#b38f4f] font-medium text-sm mt-1">基礎固めと学習習慣の確立</p>
              </div>
              
              <div className="absolute left-8 sm:left-1/2 w-16 h-16 bg-white border-4 border-[#f3e8d3] rounded-full flex items-center justify-center transform -translate-x-1/2 shadow-sm z-10">
                <span className="font-bold text-[#b38f4f]">高1</span>
              </div>
              
              <div className="w-full sm:w-[45%] pl-24 sm:pl-12 pt-2 sm:pt-0">
                <div className="sm:hidden mb-4">
                  <h3 className="text-xl font-bold text-slate-900">高校1年</h3>
                  <p className="text-[#b38f4f] font-medium text-sm mt-1">基礎固めと学習習慣の確立</p>
                </div>
                <div className="bg-[#fcfaf5] rounded-xl p-5 border border-slate-200">
                  <ul className="space-y-3">
                    {['学習習慣の定着', '定期テスト対策', '評定の確保', '英語の基礎固め'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-[#fcfaf5]0 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Grade 2 */}
            <div className="relative flex flex-col sm:flex-row-reverse items-start sm:items-center justify-between mb-12 sm:mb-20">
              <div className="hidden sm:block w-[45%] text-left pl-12">
                <h3 className="text-xl font-bold text-slate-900">高校2年</h3>
                <p className="text-[#b38f4f] font-medium text-sm mt-1">選択肢を広げる準備期間</p>
              </div>
              
              <div className="absolute left-8 sm:left-1/2 w-16 h-16 bg-white border-4 border-[#f3e8d3] rounded-full flex items-center justify-center transform -translate-x-1/2 shadow-sm z-10">
                <span className="font-bold text-[#b38f4f]">高2</span>
              </div>
              
              <div className="w-full sm:w-[45%] pl-24 sm:pr-12 pt-2 sm:pt-0 sm:pl-0 sm:text-right">
                <div className="sm:hidden mb-4">
                  <h3 className="text-xl font-bold text-slate-900">高校2年</h3>
                  <p className="text-[#b38f4f] font-medium text-sm mt-1">選択肢を広げる準備期間</p>
                </div>
                <div className="bg-[#fcfaf5] rounded-xl p-5 border border-slate-200">
                  <ul className="space-y-3">
                    {['一般入試の基礎完成', '英検等資格の取得', '志望学部研究', '課外活動・小論文基礎'].map((item, i) => (
                      <li key={i} className="flex items-center sm:flex-row-reverse gap-3 text-slate-700 font-medium justify-start">
                        <CheckCircle2 className="w-5 h-5 text-[#fcfaf5]0 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Grade 3 */}
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="hidden sm:block w-[45%] text-right pr-12">
                <h3 className="text-xl font-bold text-slate-900">高校3年</h3>
                <p className="text-[#b38f4f] font-medium text-sm mt-1">最適なルートの選択と実行</p>
              </div>
              
              <div className="absolute left-8 sm:left-1/2 w-16 h-16 bg-[#b38f4f] border-4 border-[#d4b783] rounded-full flex items-center justify-center transform -translate-x-1/2 shadow-lg z-10">
                <span className="font-bold text-white">高3</span>
              </div>
              
              <div className="w-full sm:w-[45%] pl-24 sm:pl-12 pt-2 sm:pt-0">
                <div className="sm:hidden mb-4">
                  <h3 className="text-xl font-bold text-slate-900">高校3年</h3>
                  <p className="text-[#b38f4f] font-medium text-sm mt-1">最適なルートの選択と実行</p>
                </div>
                <div className="bg-[#fcfaf5] rounded-xl p-6 border border-[#f3e8d3] shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#f3e8d3]/50 rounded-full blur-2xl"></div>
                  
                  <p className="text-sm text-slate-600 mb-4 relative z-10">以下の選択肢から、生徒に合った受験ルートを選択・並行します。</p>
                  
                  <div className="grid grid-cols-2 gap-3 relative z-10">
                    {['一般選抜', 'FIT入試', '総合型選抜', '指定校推薦'].map((item, i) => (
                      <div key={i} className="bg-white px-3 py-2 rounded-lg text-center font-bold text-[#594226] shadow-sm border border-[#f3e8d3]/50 text-sm">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
