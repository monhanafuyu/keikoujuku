import React from 'react';
import { ShieldCheck, UserCheck, BookOpen, Clock } from 'lucide-react';

export const QualityAssurance = () => {
  const items = [
    {
      icon: <UserCheck className="w-6 h-6 text-[#a07c3f]" />,
      title: '現役慶應生が指導',
      description: '合格体験を持つ現役生のみを採用。在籍状況等を確認した上で指導にあたります。'
    },
    {
      icon: <BookOpen className="w-6 h-6 text-[#a07c3f]" />,
      title: '指導前研修と共通方針',
      description: '講師個人の経験則に依存しないよう、共通の指導方針に基づいた事前研修を行っています。'
    },
    {
      icon: <Clock className="w-6 h-6 text-[#a07c3f]" />,
      title: '担当制と情報共有',
      description: '生徒一人ひとりに専属の講師がつき、「受験戦略カルテ」を通して運営側とも学習状況を共有・管理します。'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#a07c3f]" />,
      title: '指導内容の管理',
      description: '毎週の指導内容や計画の進捗は運営側でも把握し、必要に応じてサポート体制を調整します。'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-serif text-slate-900 mb-4 tracking-tight">
            指導品質への取り組み
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            質の高いサポートを継続して提供するため、講師の採用から指導管理まで、徹底した品質管理を行っています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="w-12 h-12 rounded-full bg-[#fdfaf5] flex items-center justify-center mb-5 border border-[#eaddc4]">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
