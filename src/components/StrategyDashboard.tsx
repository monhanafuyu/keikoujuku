import React from 'react';
import { LayoutDashboard, CheckCircle2, TrendingUp, BookOpen, PenTool, Award, Clock } from 'lucide-react';

export const StrategyDashboard: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50" id="dashboard">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-[#e4cda5] text-[#a07c3f] text-xs font-bold tracking-widest mb-6">
            独自の学習管理システム
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-6 font-serif">
            慶應受験戦略カルテ
          </h2>
          <p className="text-slate-600">
            あなたの現在の状況と、これからの戦略を一つにまとめたダッシュボード。一般と推薦の進捗を横断して管理します。
          </p>
        </div>

        {/* Dashboard Mockup UI */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden">
          {/* Header */}
          <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <LayoutDashboard className="w-5 h-5 text-[#e4cda5]" />
              <span className="text-white font-bold tracking-widest text-sm">受験戦略カルテ</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-700"></div>
              <span className="text-slate-300 text-sm font-medium">生徒アカウント</span>
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-slate-50/50 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-xs text-slate-500 font-bold mb-1">第一志望学部</div>
                  <div className="text-lg font-black text-slate-800">慶應義塾大学 法学部</div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-xs text-slate-500 font-bold mb-1">併願学部 / 併願校</div>
                  <div className="text-sm font-bold text-slate-700">慶應SFC・早稲田法学部</div>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-sm font-bold text-slate-800 mb-5 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#b38f4f]" /> 入試ルート別 準備進捗
                </h3>
                <div className="space-y-5">
                  {[
                    { label: '一般選抜', progress: '65%', color: 'bg-[#d4b783]' },
                    { label: 'FIT入試', progress: '80%', color: 'bg-[#a07c3f]' },
                    { label: '総合型選抜', progress: '40%', color: 'bg-slate-400' }
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs font-bold mb-2">
                        <span className="text-slate-600">{item.label}</span>
                        <span className="text-slate-900">{item.progress}</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2">
                        <div className={`${item.color} h-2 rounded-full`} style={{ width: item.progress }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weekly Tasks */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#b38f4f]" /> 今週やること
                </h3>
                <div className="space-y-3">
                  {[
                    { title: 'システム英単語: 1-600 復習', tag: '一般基礎' },
                    { title: '自己分析シートの作成', tag: 'FIT対策' },
                    { title: '小論文 第3回答案作成', tag: '小論文' }
                  ].map((task, i) => (
                     <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-slate-100 bg-slate-50">
                       <span className="text-sm font-medium text-slate-700">{task.title}</span>
                       <span className="text-[10px] px-2 py-1 bg-white border border-slate-200 rounded text-slate-500 font-bold">{task.tag}</span>
                     </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column */}
            <div className="space-y-6">
              
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#b38f4f]" /> 現在のスコア・実績
                </h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center border-b border-slate-50 pb-3">
                    <span className="text-xs font-bold text-slate-500">学校評定</span>
                    <span className="text-sm font-black text-slate-800">4.3</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-slate-50 pb-3">
                    <span className="text-xs font-bold text-slate-500">英検</span>
                    <span className="text-sm font-black text-slate-800">準1級取得</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-slate-50 pb-3">
                    <span className="text-xs font-bold text-slate-500">全統模試偏差値</span>
                    <span className="text-sm font-black text-slate-800">英語 62.5</span>
                  </li>
                  <li className="flex justify-between items-center pb-1">
                    <span className="text-xs font-bold text-slate-500">活動実績</span>
                    <span className="text-sm font-black text-slate-800">生徒会・ボランティア</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#b38f4f] p-6 rounded-xl shadow-md text-white">
                <h3 className="text-sm font-bold text-[#e4cda5] mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4" /> 週間学習達成率
                </h3>
                <div className="text-4xl font-black tracking-tighter mb-1">92<span className="text-xl">%</span></div>
                <p className="text-xs text-[#d4b783]">今週の学習計画は順調に進んでいます。</p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
