import React, { useState } from 'react';
import { 
  Calendar, 
  MessageCircle, 
  CheckCircle2, 
  BookOpen, 
  Smartphone, 
  TrendingUp, 
  Clock, 
  Sparkles, 
  ArrowUpRight, 
  Award,
  ChevronRight,
  ListTodo,
  BarChart3,
  MessageSquare
} from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
  onOpenLineModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onOpenLineModal }) => {
  const [activeTab, setActiveTab] = useState<'tasks' | 'stats' | 'feedback'>('tasks');

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />
      
      {/* Subtle Blue Glow in Corner */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top Target Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs sm:text-sm font-bold shadow-xs">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span>高校1年〜高校3年・既卒生対象｜MARCH・早慶・難関大特化</span>
          </div>
        </div>

        {/* Main Catchphrase */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.2] mb-6 font-display">
            授業を受ける塾から、<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600">
              合格まで管理する塾
            </span>へ。
          </h1>

          {/* Subcopy */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto mb-10">
            志望校から逆算した学習計画を作成。<br className="hidden sm:inline" />
            毎週の面談・進捗管理・確認テストで、<br />
            <span className="text-slate-900 font-bold bg-blue-50/80 px-1.5 py-0.5 rounded border-b-2 border-blue-400">
              「今日は何を勉強すればいい？」
            </span>
            をなくします。
          </p>

          {/* CTA Buttons Dual Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-xl mx-auto mb-12">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white text-base font-bold shadow-lg shadow-blue-700/25 transition-all hover:shadow-xl hover:shadow-blue-700/30 hover:-translate-y-0.5 active:translate-y-0"
              id="hero-consult-btn"
            >
              <Calendar className="w-5 h-5 text-blue-200" />
              <span>無料で学習相談を受ける</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenLineModal}
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-white hover:bg-emerald-50/50 text-slate-800 border-2 border-emerald-500/40 text-base font-bold transition-all hover:border-emerald-500 hover:-translate-y-0.5 shadow-sm"
              id="hero-line-btn"
            >
              <MessageCircle className="w-5 h-5 text-[#06C755]" />
              <span>LINEで相談する</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 text-xs text-slate-500 font-medium mb-14">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              オンライン個別相談（Zoom）
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              無理な勧誘なし
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              専用学習プラン無料進呈
            </span>
          </div>
        </div>

        {/* 4 Feature Badges Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 max-w-5xl mx-auto mb-16">
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3.5 hover:border-blue-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 shrink-0">
              <ListTodo className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Feature 01</p>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                一人ひとり専用の<br />学習計画
              </h3>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3.5 hover:border-blue-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Feature 02</p>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                毎週の進捗チェック<br />＆確認テスト
              </h3>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3.5 hover:border-blue-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Feature 03</p>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                参考書・問題集まで<br />ページ単位で指定
              </h3>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3.5 hover:border-blue-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 shrink-0">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Feature 04</p>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                完全オンライン対応<br />LINEでいつでも質問
              </h3>
            </div>
          </div>
        </div>

        {/* Dashboard Preview / Visual Anchor */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900 text-white rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-800">
            {/* Header of Mock Dashboard */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs font-mono text-slate-400 ml-2">PASSGATE Student Study OS</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-blue-600/30 text-blue-300 border border-blue-500/40 px-2.5 py-1 rounded-full font-bold">
                  志望校：明治大学 法学部
                </span>
                <span className="text-xs text-slate-400 font-mono hidden sm:inline">第32週目 / 達成率 94%</span>
              </div>
            </div>

            {/* Sub-tabs in Mock UI */}
            <div className="flex gap-2 pt-4 pb-3">
              <button
                onClick={() => setActiveTab('tasks')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'tasks' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <ListTodo className="w-3.5 h-3.5" />
                <span>今日のやるべきこと（日割タスク）</span>
              </button>
              <button
                onClick={() => setActiveTab('stats')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'stats' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>進捗・テストスコア</span>
              </button>
              <button
                onClick={() => setActiveTab('feedback')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'feedback' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>メンターからの週間講評</span>
              </button>
            </div>

            {/* Dashboard Mock Tab Contents */}
            <div className="bg-slate-950/70 rounded-2xl p-4 sm:p-5 border border-slate-800">
              {activeTab === 'tasks' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400 pb-1">
                    <span className="font-bold text-slate-200">本日の学習タスク (本日目標：3時間30分)</span>
                    <span className="text-emerald-400 font-mono font-bold">3 / 4 完了 (85%)</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-emerald-500/30">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 text-[10px] font-bold">英語</span>
                          <span className="text-xs font-bold text-slate-100">ターゲット1900</span>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">201〜300番（3周即答チェック・間違えた単語をチェックシートへ）</p>
                      </div>
                    </div>
                    <span className="text-xs text-emerald-400 font-bold px-2 py-1 bg-emerald-950/50 rounded-lg">完了</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-emerald-500/30">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 text-[10px] font-bold">英語</span>
                          <span className="text-xs font-bold text-slate-100">Next Stage 英文法</span>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">第3章 仮定法 1〜25問（なぜその選択肢になるか口頭説明）</p>
                      </div>
                    </div>
                    <span className="text-xs text-emerald-400 font-bold px-2 py-1 bg-emerald-950/50 rounded-lg">完了</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-blue-500/40">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full border-2 border-blue-400 flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-amber-900/60 text-amber-300 text-[10px] font-bold">日本史</span>
                          <span className="text-xs font-bold text-slate-100">金谷の日本史 なぜと流れ</span>
                        </div>
                        <p className="text-xs text-slate-300 mt-0.5">p.13〜p.18（鎌倉幕府の成立と執権政治の因果関係整理）</p>
                      </div>
                    </div>
                    <span className="text-xs text-blue-400 font-bold px-2 py-1 bg-blue-950/50 rounded-lg animate-pulse">進行中</span>
                  </div>
                </div>
              )}

              {activeTab === 'stats' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <p className="text-xs text-slate-400">今月の総学習時間</p>
                    <p className="text-2xl font-black text-white mt-1">118.5 <span className="text-sm font-normal text-slate-400">時間</span></p>
                    <p className="text-[11px] text-emerald-400 mt-1 font-bold">目標ペース＋12% 順調</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <p className="text-xs text-slate-400">週間確認テスト平均点</p>
                    <p className="text-2xl font-black text-emerald-400 mt-1">91.4 <span className="text-sm font-normal text-slate-400">点 / 100</span></p>
                    <p className="text-[11px] text-slate-400 mt-1">基準点(85点)を4週連続クリア</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <p className="text-xs text-slate-400">明治大 合格ライン到達度</p>
                    <p className="text-2xl font-black text-blue-400 mt-1">78 <span className="text-sm font-normal text-slate-400">%</span></p>
                    <p className="text-[11px] text-blue-300 mt-1">基礎完成フェーズ完了間近</p>
                  </div>
                </div>
              )}

              {activeTab === 'feedback' && (
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white text-[10px]">
                      専
                    </div>
                    <span className="font-bold text-slate-200">担当メンター（慶應大法学部所属）からの講評：</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed pl-8">
                    「今週は英文法の仮定法・関係詞の正答率が95%まで向上しました！ただ単語の第3章（形容詞）で反応速度が2秒以上かかっている語が12個あったので、明日の朝15分で再周回タスクを追加しています。このペースを維持して日曜の確認テスト満点を目指しましょう！」
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
