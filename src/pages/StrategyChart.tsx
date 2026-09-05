import React from 'react';
import { SEO } from '../components/SEO';
import { PageTemplate } from '../components/PageTemplate';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  BarChart3, CheckSquare, Target, ListTodo, ShieldCheck, BookOpen
} from 'lucide-react';

export const StrategyChart: React.FC = () => {
  return (
    <PageTemplate>
      <SEO 
        title="慶應受験戦略カルテ｜一般・推薦を一括管理｜慶應ROUTE"
        description="一般入試の学習進捗と推薦入試（FIT・総合型・指定校）の準備状況を1つのダッシュボードで一括管理。現在の状況を可視化する「受験戦略カルテ」について解説します。"
        canonicalUrl="/strategy-chart"
        breadcrumbs={[
          { name: '受験戦略カルテ', item: '/strategy-chart' }
        ]}
      />
      
      <Breadcrumbs items={[{ name: '受験戦略カルテ', path: '/strategy-chart' }]} />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-white overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-[#FAF9F5]/50"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#eaddc4] bg-white text-[#a07c3f] text-xs font-bold tracking-widest mb-6 shadow-sm">
            <span>STRATEGY DASHBOARD</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6 font-display">
            受験戦略カルテ
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-[#b38f4f] mb-8 tracking-wide">
            「受験の状況を、一つの画面に。」
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            一般選抜に向けた勉強の進捗、推薦入試の書類準備、学校の評定、英検の取得状況。<br className="hidden sm:block" />
            複雑な受験準備をすべて可視化し、一元管理する慶應ROUTE独自のシステムです。
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* 一括管理のメリット */}
        <section className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#b38f4f]/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="w-8 h-8 text-[#b38f4f]" />
              <h2 className="text-2xl sm:text-3xl font-bold font-display">
                なぜ「一括管理」が必要なのか
              </h2>
            </div>
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                慶應義塾大学を目指す場合、一般選抜と推薦入試（FIT入試、SFC総合型選抜、指定校推薦など）を併願することが合格への最適解となるケースが多くあります。
              </p>
              <p>
                しかし、一般向けの「英語長文の勉強」と、推薦向けの「志望理由書の作成」や「評定のための定期テスト勉強」は、全く異なるタスクです。これらを頭の中だけで管理しようとすると、必ずどちらかが疎かになります。
              </p>
              <p className="font-bold text-white border-l-4 border-[#C5A265] pl-4 py-1">
                「受験戦略カルテ」は、あなたがいま何をすべきで、どのルートの準備がどこまで進んでいるのかを可視化し、迷いなく勉強に集中できる環境を提供します。
              </p>
            </div>
          </div>
        </section>

        {/* 管理項目一覧 */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-6 bg-[#b38f4f] rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight m-0">
              カルテで管理する主な項目
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <Target className="w-6 h-6 text-[#b38f4f] mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">志望校・併願戦略</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2 items-center"><CheckSquare className="w-4 h-4 text-slate-400" /> 第一志望学部（一般・推薦）</li>
                <li className="flex gap-2 items-center"><CheckSquare className="w-4 h-4 text-slate-400" /> 併願校リストと日程</li>
                <li className="flex gap-2 items-center"><CheckSquare className="w-4 h-4 text-slate-400" /> 受験方式ごとの優先度</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <BarChart3 className="w-6 h-6 text-[#b38f4f] mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">学力・資格スコア</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2 items-center"><CheckSquare className="w-4 h-4 text-slate-400" /> 全統模試・駿台模試の偏差値推移</li>
                <li className="flex gap-2 items-center"><CheckSquare className="w-4 h-4 text-slate-400" /> 学校の評定平均（1年〜現在）</li>
                <li className="flex gap-2 items-center"><CheckSquare className="w-4 h-4 text-slate-400" /> 英検等資格の取得級・スコア</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <BookOpen className="w-6 h-6 text-[#b38f4f] mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">一般・推薦 準備ステータス</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2 items-center"><CheckSquare className="w-4 h-4 text-slate-400" /> 一般選抜：参考書ルートの進捗</li>
                <li className="flex gap-2 items-center"><CheckSquare className="w-4 h-4 text-slate-400" /> FIT/総合型：活動実績・書類の完成度</li>
                <li className="flex gap-2 items-center"><CheckSquare className="w-4 h-4 text-slate-400" /> 小論文・面接対策の進捗</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <ListTodo className="w-6 h-6 text-[#b38f4f] mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">日々のタスク管理</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2 items-center"><CheckSquare className="w-4 h-4 text-slate-400" /> 今週やること（週間計画）</li>
                <li className="flex gap-2 items-center"><CheckSquare className="w-4 h-4 text-slate-400" /> 1日あたりの学習達成率</li>
                <li className="flex gap-2 items-center"><CheckSquare className="w-4 h-4 text-slate-400" /> コーチからのフィードバック</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </PageTemplate>
  );
};
