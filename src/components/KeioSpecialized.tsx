import React from 'react';
import { Target, Layers, ArrowRight } from 'lucide-react';

export const KeioSpecialized: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="admission-types">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAF9F5] border border-[#f3e8d3] text-[#a07c3f] text-xs font-bold tracking-widest mb-6">
              <Target className="w-4 h-4 text-[#b38f4f]" />
              <span>慶應義塾大学 専門指導</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight mb-8 font-serif">
              慶應に受かるためなら、<br />
              <span className="text-[#a07c3f]">入試方式を問わない。</span>
            </h2>
            
            <div className="space-y-6 text-slate-600 leading-relaxed text-sm sm:text-base">
              <p>
                慶應義塾大学には、一般選抜だけでなく、FIT入試、総合型選抜、学校推薦型選抜など複数の入試方式があります。
              </p>
              <p>
                慶應ROUTEでは、『一般か推薦か』という二者択一ではなく、一人ひとりの学力・評定・経験・志望学部から、慶應合格につながる最適な受験戦略を考えます。
              </p>
            </div>
            
            <div className="mt-10 p-6 bg-[#FAF9F5] border-l-4 border-[#b38f4f] rounded-r-lg">
              <p className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                慶應専門だから、<br className="sm:hidden" />
                入試方式まで横断して考える。
              </p>
            </div>
          </div>
          
          <div className="relative">
            {/* Visual representation of intersecting paths */}
            <div className="aspect-square sm:aspect-[4/3] bg-[#FAF9F5] rounded-2xl border border-slate-100 p-8 flex flex-col justify-center relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#f3e8d3] rounded-full blur-[80px] -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FAF9F5] rounded-full blur-[80px] -ml-20 -mb-20"></div>
              
              <div className="relative z-10 flex flex-col gap-4">
                {['一般選抜', '法学部 FIT入試', 'SFC 総合型選抜', '指定校推薦'].map((type, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100 transform transition-transform hover:translate-x-2">
                    <div className="w-10 h-10 rounded-full bg-[#FAF9F5] flex items-center justify-center shrink-0">
                      <Layers className="w-5 h-5 text-[#b38f4f]" />
                    </div>
                    <span className="font-bold text-slate-800 flex-1">{type}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </div>
                ))}
              </div>
              
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-32 h-32 bg-[#b38f4f] rounded-full flex items-center justify-center shadow-xl border-4 border-white z-20">
                <span className="text-white font-black text-xl font-serif">慶應<br/>合格</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
