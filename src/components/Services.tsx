import React from 'react';
import { SERVICES_LIST } from '../data';
import { 
  Compass, 
  Video, 
  Smartphone, 
  BookOpen, 
  CheckSquare, 
  MessageCircleQuestion, 
  LineChart, 
  GraduationCap,
  Sparkles
} from 'lucide-react';

export const Services: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Compass: <Compass className="w-6 h-6" />,
    Video: <Video className="w-6 h-6" />,
    Smartphone: <Smartphone className="w-6 h-6" />,
    BookOpen: <BookOpen className="w-6 h-6" />,
    CheckSquare: <CheckSquare className="w-6 h-6" />,
    MessageCircleQuestion: <MessageCircleQuestion className="w-6 h-6" />,
    LineChart: <LineChart className="w-6 h-6" />,
    GraduationCap: <GraduationCap className="w-6 h-6" />
  };

  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#b38f4f]/10 border border-[#b38f4f]/30/80 text-[#594226] text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#b38f4f]" />
            <span>合格に必要な全サポート</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            自習を合格へ直結させる、8つのサービス
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            学習計画から日々の質問、模試の分析まで、受験勉強のあらゆる不安と無駄を取り除きます。
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES_LIST.map((service, index) => (
            <div
              key={index}
              className="bg-slate-50/70 hover:bg-white p-6 rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-[#e4cda5] transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#b38f4f]/10 text-[#a07c3f] flex items-center justify-center group-hover:bg-[#b38f4f] group-hover:text-white transition-colors shadow-2xs">
                    {iconMap[service.icon]}
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white text-slate-600 border border-slate-200">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-[#a07c3f] font-bold">
                <span>詳細を見る</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
