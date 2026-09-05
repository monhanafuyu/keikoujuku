import React, { useState } from 'react';
import { 
  SAMPLE_STUDENT_PROFILE, 
  SAMPLE_STUDY_PLAN_ITEMS, 
  SAMPLE_WEEKLY_SCHEDULE 
} from '../data';
import { 
  User, 
  Target, 
  BookOpen, 
  CalendarDays, 
  CheckCircle2, 
  Clock, 
  Sparkles,
  ChevronRight,
  TrendingUp,
  FileCheck
} from 'lucide-react';

export const StudyPlanDemo: React.FC = () => {
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0);
  const selectedDay = SAMPLE_WEEKLY_SCHEDULE[selectedDayIndex];

  return (
    <section id="plan-demo" className="py-20 bg-[#0a0a0a] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#b38f4f]/10 border border-[#b38f4f]/30/80 text-[#594226] text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#b38f4f]" />
            <span>実際の指導イメージ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-display">
            「今日何をすればいいか」が一目でわかる学習計画
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            高校2年生・明治大学法学部志望の生徒への実際の週間プラン例です。参考書名・ページ数・解き方まで細かく指定します。
          </p>
        </div>

        {/* Student Profile Overview Card */}
        <div className="bg-gradient-to-r from-slate-900 to-[#2a1f11] text-white rounded-3xl p-5 sm:p-7 shadow-lg border border-slate-800 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#b38f4f]/30 border border-[#c4a365]/50 flex items-center justify-center text-[#e4cda5] font-bold">
                <User className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] text-[#e4cda5] font-bold uppercase tracking-wider block">
                  Model Case
                </span>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg sm:text-xl font-bold">{SAMPLE_STUDENT_PROFILE.grade}</h3>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">私立文系志望</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
              <div className="bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-700">
                <span className="text-slate-400">志望校：</span>
                <span className="font-bold text-amber-300 ml-1">{SAMPLE_STUDENT_PROFILE.target}</span>
              </div>
              <div className="bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-700">
                <span className="text-slate-400">現在の学力：</span>
                <span className="font-bold text-[#e4cda5] ml-1">英語 偏差値52.4</span>
              </div>
            </div>
          </div>

          <div className="pt-4 flex items-center gap-2 text-xs sm:text-sm text-slate-300">
            <Target className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="font-bold text-white">今週のテーマ：</span>
            <span className="truncate">{SAMPLE_STUDENT_PROFILE.weeklyTheme}</span>
          </div>
        </div>

        {/* Two-Column UI: Left is Subject Breakdown, Right is Interactive Daily Tasks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Weekly Target Assignment List (7 Cols) */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between pb-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#b38f4f]" />
                <span>今週の指定参考書と到達目標</span>
              </h3>
              <span className="text-xs text-slate-400">6科目・分野を指定</span>
            </div>

            <div className="space-y-3">
              {SAMPLE_STUDY_PLAN_ITEMS.map((item, i) => (
                <div
                  key={i}
                  className="bg-[#050505]/70 p-4 sm:p-5 rounded-2xl border border-white/10 hover:bg-[#0a0a0a] hover:border-[#e4cda5] transition-all shadow-2xs"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black px-2.5 py-0.5 rounded-md bg-[#a07c3f] text-white">
                        {item.subject}
                      </span>
                      <span className="text-sm font-bold text-white">
                        {item.material}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-200/80 text-slate-300">
                      {item.tag}
                    </span>
                  </div>

                  <div className="bg-[#0a0a0a] p-3 rounded-xl border border-white/10/80 text-xs space-y-1 mb-2">
                    <div className="flex items-start gap-2">
                      <span className="text-slate-400 font-bold shrink-0">指定範囲:</span>
                      <span className="font-bold text-slate-200">{item.scope}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-slate-400 font-bold shrink-0">勉強手順:</span>
                      <span className="text-slate-300">{item.dailyDetail}</span>
                    </div>
                  </div>

                  {/* Progress Line */}
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>進捗状況</span>
                    <span className="font-bold text-[#a07c3f]">{item.progressPercent}% 完了</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 rounded-full mt-1 overflow-hidden">
                    <div
                      className="h-full bg-[#b38f4f] rounded-full"
                      style={{ width: `${item.progressPercent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Day Selector (5 Cols) */}
          <div className="lg:col-span-5 bg-[#0a0a0a] p-5 sm:p-6 rounded-3xl border-2 border-[#b38f4f]/20 shadow-md sticky top-24">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#b38f4f]">Daily Execution</span>
                <h3 className="text-base font-bold text-white flex items-center gap-1.5 mt-0.5">
                  <CalendarDays className="w-4 h-4 text-[#b38f4f]" />
                  <span>曜日ごとの日割スケジュール</span>
                </h3>
              </div>
            </div>

            {/* Day Selector Buttons */}
            <div className="grid grid-cols-7 gap-1 my-4">
              {SAMPLE_WEEKLY_SCHEDULE.map((schedule, idx) => (
                <button
                  key={schedule.day}
                  onClick={() => setSelectedDayIndex(idx)}
                  className={`py-2 rounded-xl text-xs font-bold transition-all text-center ${
                    selectedDayIndex === idx
                      ? 'bg-[#a07c3f] text-white shadow-xs'
                      : 'bg-white/5 text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  <span className="block text-[10px] opacity-75">{schedule.label}</span>
                  <span className="block">{schedule.day.replace('曜日', '')}</span>
                </button>
              ))}
            </div>

            {/* Selected Day's Focus */}
            <div className="p-3 rounded-xl bg-[#b38f4f]/10/80 border border-[#b38f4f]/20 mb-4">
              <span className="text-[10px] font-bold text-[#a07c3f] uppercase tracking-wider block">
                {selectedDay.day}の学習方針
              </span>
              <p className="text-xs font-bold text-slate-200 mt-0.5">
                {selectedDay.focus}
              </p>
            </div>

            {/* Task list for selected day */}
            <div className="space-y-2.5">
              {selectedDay.tasks.map((t, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xl border transition-all text-xs ${
                    t.completed
                      ? 'bg-emerald-50/40 border-emerald-200 text-slate-200'
                      : 'bg-[#050505] border-white/10 text-slate-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2
                        className={`w-4 h-4 mt-0.5 shrink-0 ${
                          t.completed ? 'text-emerald-600' : 'text-slate-300'
                        }`}
                      />
                      <div>
                        <span className="font-bold text-[11px] px-1.5 py-0.2 rounded bg-slate-200 text-slate-300 mr-1.5">
                          {t.subject}
                        </span>
                        <p className="font-medium text-white mt-1 leading-snug">
                          {t.task}
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono shrink-0 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {t.estimatedMinutes}分
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 text-center">
              <p className="text-xs text-slate-400 leading-relaxed">
                ※生徒の学校行事や部活の休養日に合わせて、曜日ごとの負担量を個別に最適化します。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
