import React from 'react';
import { UserCheck, Lightbulb, Map, Star, MessagesSquare } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <>
      {/* Active Keio Student Section */}
      <section className="py-24 bg-white text-slate-900 overflow-hidden relative border-t border-slate-200">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#b38f4f] via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-normal mb-6 leading-tight font-serif tracking-widest text-slate-900">
              受験を乗り越えた<br />現役慶應生が、伴走します。
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-sans tracking-wide">
              参考書や勉強法を知っているだけでは、受験を乗り越えるのは簡単ではありません。
              <br /><br />
              この塾では、実際に大学受験を経験した現役慶應義塾大学生が、生徒一人ひとりの学習をサポートします。
              勉強方法、志望校選び、模試の結果、学校との両立など、受験生に近い視点から相談できる環境を提供します。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MessagesSquare, title: '質問しやすい距離感', desc: '高校生と比較的年齢が近いため、授業・勉強だけでなく、受験生活についても相談しやすい。' },
              { icon: Lightbulb, title: '実体験に基づくアドバイス', desc: '大学受験を経験した講師が、勉強の進め方や受験生活について実体験からアドバイス。' },
              { icon: Map, title: '難関大学を目指す学習環境', desc: '早慶・MARCHなどを目指す生徒に、大学受験を意識した学習管理と基準を提供。' },
              { icon: Star, title: 'ロールモデルになる講師', desc: '大学生活や大学での学びについて直接聞くことで、大学進学後のイメージも持ちやすくする。' },
            ].map((card, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-8 rounded-sm hover:shadow-md transition-shadow relative">
                {/* Top Gold Accent */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#b38f4f]"></div>
                
                <h3 className="text-lg font-serif font-bold mb-4 tracking-widest text-slate-900 mt-2">
                  <span className="text-[#b38f4f] text-sm mr-2 font-serif">0{idx + 1}</span>
                  <br className="sm:hidden" />
                  {card.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed tracking-wide">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Question Guidance Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-sm p-8 md:p-16 shadow-lg border border-slate-200 flex flex-col lg:flex-row gap-12 items-center relative overflow-hidden">

            <div className="flex-1 space-y-6 relative z-10">
              <div className="inline-block px-4 py-2 border border-[#b38f4f]/30 text-[#b38f4f] font-bold rounded-sm text-sm tracking-widest bg-white">
                管理だけでは、終わらない。
              </div>
              <h2 className="text-3xl md:text-4xl font-normal text-slate-900 leading-tight font-serif tracking-widest">
                分からない問題を、<br />分からないままにしない。
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed tracking-wide">
                <p>
                  慶應コーチングでは、自学自習を中心に勉強を進めます。しかし、解説を読んでも理解できない問題を一人で何時間も抱える必要はありません。
                </p>
                <p>
                  分からない問題や苦手な単元は、現役慶應生講師へ質問できます。単に答えを教えるのではなく、
                </p>
                <ul className="bg-slate-50 p-6 rounded-sm border border-slate-200 space-y-3 font-bold text-slate-700">
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#b38f4f] rotate-45"></div>『なぜそうなるのか』</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#b38f4f] rotate-45"></div>『どこで考え方を間違えたのか』</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#b38f4f] rotate-45"></div>『次に同じ問題が出たときどう考えるのか』</li>
                </ul>
                <p>
                  まで理解できるよう個別に解説します。
                </p>
              </div>
            </div>
            
            <div className="flex-1 w-full bg-slate-50 border border-slate-200 rounded-sm p-8 text-slate-900 relative z-10">
              <div className="absolute left-0 top-0 w-[2px] h-full bg-[#b38f4f]"></div>
              
              <h3 className="text-xl font-serif font-bold mb-8 text-slate-900 tracking-widest border-b border-slate-200 pb-4">質問可能な科目例</h3>
              <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
                {['英語', '現代文', '古文', '日本史', '世界史', '数学', 'その他'].map((subject) => (
                  <div key={subject} className="flex items-center gap-2 text-sm text-slate-600 tracking-wide">
                    <UserCheck className="w-4 h-4 text-[#b38f4f]" />
                    {subject}
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-8 border-t border-slate-200 pt-4">
                ※質問対応は講師の対応可能科目・プラン・時間帯等によって異なる場合があります。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
