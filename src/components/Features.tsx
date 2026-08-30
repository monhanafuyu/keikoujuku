import React from 'react';
import { UserCheck, Lightbulb, Map, Star, MessagesSquare } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <>
      {/* Active Keio Student Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              受験を乗り越えた<br />現役慶應生が、伴走します。
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
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
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-3xl hover:bg-slate-800 transition-colors">
                <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <card.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold mb-3">{card.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Question Guidance Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-slate-100 flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 font-bold rounded-full text-sm">
                自学自習 × 個別質問指導
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                分からない問題を、<br />分からないままにしない。
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  基本となるのは、自分で問題を解く学習です。しかし、分からない問題を何時間も抱え込む必要はありません。
                </p>
                <p>
                  解説を読んでも分からない問題や、理解できない単元があれば、講師に質問できます。単に答えを教えるのではなく、
                </p>
                <ul className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-2 font-bold text-slate-800">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>『なぜそうなるのか』</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>『どこで考え方を間違えたのか』</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>『次からどう解けばいいのか』</li>
                </ul>
                <p>
                  まで理解できるように個別に解説します。
                </p>
              </div>
            </div>
            
            <div className="flex-1 w-full bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
              <h3 className="text-xl font-bold mb-6">質問可能な内容の例</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {['英語の英文解釈', '英文法', '現代文', '古文', '日本史', '世界史', '数学', 'その他対応可能科目'].map((subject) => (
                  <div key={subject} className="flex items-center gap-2 text-sm text-slate-300">
                    <UserCheck className="w-4 h-4 text-blue-400" />
                    {subject}
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-8 border-t border-slate-800 pt-4">
                ※質問対応は講師の対応可能科目・プラン・時間帯等によって異なる場合があります。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
