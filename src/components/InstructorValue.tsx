import React from 'react';
import { UserCheck, MessageSquare, Map, Award } from 'lucide-react';

export const InstructorValue: React.FC = () => {
  const values = [
    {
      icon: <Award className="w-5 h-5 text-[#b38f4f]" />,
      title: '圧倒的な実績を持つ現役慶應生',
      desc: '全国模試一位を獲得した講師や、評定平均5.0の講師、英検一級取得者など、トップクラスの実力を持つ講師陣が在籍しています。'
    },
    {
      icon: <Map className="w-5 h-5 text-[#b38f4f]" />,
      title: '一般と総合型の「並行受験」体現者',
      desc: '自身も一般入試と総合型選抜を並行して受験した経験を持つ講師陣が、並行受験のリアルな戦略を直接指導します。'
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-[#b38f4f]" />,
      title: '高校生と年齢が近く、質問しやすい',
      desc: '分からない問題を恥ずかしがらずに聞ける距離感。受験生活の不安も相談できます。大学入学後のゼミや学生生活についても直接聞くことができます。'
    },
    {
      icon: <UserCheck className="w-5 h-5 text-[#b38f4f]" />,
      title: '受験戦略から質問対応まで一貫して担当',
      desc: '面談する人と質問に答える人が別々ではありません。あなたの状況をすべて把握した担当者が継続して伴走します。'
    }
  ];

  return (
    <section className="py-24 bg-white" id="instructor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-[#FAF9F5] rounded-2xl transform -rotate-3 scale-[1.02]"></div>
            <div className="relative bg-white border border-slate-100 rounded-2xl p-8 sm:p-10 shadow-sm z-10">
              <div className="space-y-8">
                {values.map((val, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#FAF9F5] flex items-center justify-center shrink-0">
                      {val.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-800 mb-2">{val.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight mb-6 font-serif">
              慶應を知る<br className="hidden sm:block" />
              現役慶應生が、伴走する。
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-sm sm:text-base">
              <p>
                慶應ROUTEの講師は、全員が現役の慶應義塾大学の学生です。
              </p>
              <p>
                「現役慶應生」というブランドだけで選んでいるわけではありません。<br />
                実際に慶應受験という壁を乗り越え、今の入試を最もよく知る彼らだからこそ、あなたに最も現実的で効果的な戦略を提案できるのです。
              </p>
              <p>
                大学入学後のゼミや学生生活について直接聞くことができるため、志望理由書の作成や面接対策においても、圧倒的に解像度の高いサポートが可能です。
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
