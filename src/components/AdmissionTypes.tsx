import React from 'react';
import { ArrowRight, BookOpen, FileSignature, Presentation, School } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AdmissionTypes: React.FC = () => {
  const types = [
    {
      icon: <BookOpen className="w-6 h-6 text-[#b38f4f]" />,
      title: '慶應一般選抜対策',
      description: '一般選抜も、本気で。推薦を検討している生徒であっても、一般選抜の勉強を安易に止めません。',
      points: ['志望学部別カリキュラム', '参考書選定・年間計画', '週間計画・進捗管理', '確認テスト・模試分析', '過去問分析・各科目質問指導'],
      href: '/keio-ippan'
    },
    {
      icon: <FileSignature className="w-6 h-6 text-[#b38f4f]" />,
      title: '慶應法学部FIT入試対策',
      description: 'FIT一本勝負にしないFIT対策。※最新年度の要件は公式募集要項をご確認ください。',
      points: ['FITを含めた受験戦略', '法学部研究・自己分析', '活動実績整理・志望理由', '提出書類・小論文・面接', '一般選抜との併願戦略'],
      href: '/keio-fit'
    },
    {
      icon: <Presentation className="w-6 h-6 text-[#b38f4f]" />,
      title: '慶應SFC総合型選抜対策',
      description: '書類を代わりに作るのではなく、対話によって生徒自身の経験や考えを言語化します。',
      points: ['志望学部研究・自己分析', '活動実績・志望理由書', '自己推薦書・小論文', '面接・プレゼンテーション', '英検等の資格・併願戦略'],
      href: '/keio-sfc'
    },
    {
      icon: <School className="w-6 h-6 text-[#b38f4f]" />,
      title: '指定校推薦対策',
      description: '推薦を狙う。でも、推薦だけに賭けない。一般選抜へ移行できる状態を目指します。',
      points: ['学校の定期テスト対策', '評定の管理', '提出物・英検のサポート', '校内選考・小論文', '一般入試基礎の並行'],
      href: '/shiteiko'
    }
  ];

  return (
    <section id="admission-types" className="py-24 bg-[#fcfaf5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-black text-slate-900 mb-6 font-serif">
            あらゆるルートから、慶應を狙う。
          </h2>
          <p className="text-slate-600">
            それぞれの入試方式の特性を理解し、生徒の強みを最大限に活かせる戦略を組み合わせます。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {types.map((type, idx) => (
            <div key={idx} className="group flex flex-col bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300 hover:border-[#b38f4f]/30">
              <div className="w-12 h-12 rounded-xl bg-[#fcfaf5] flex items-center justify-center mb-6">
                {type.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{type.title}</h3>
              <p className="text-sm text-slate-600 mb-6 min-h-[40px]">{type.description}</p>
              
              <div className="pt-6 border-t border-slate-100 flex-grow">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mb-6">
                  {type.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#b38f4f] mt-1.5 shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-4 mt-auto">
                <Link 
                  to={type.href} 
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#b38f4f] group-hover:text-[#8a6d3b] transition-colors"
                >
                  <span>{type.title}を見る</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/general-recommendation" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all shadow-md active:scale-95"
          >
            <span>一般入試と推薦の両立戦略について詳しく見る</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
