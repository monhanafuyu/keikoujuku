import React from 'react';

export const TargetAudience: React.FC = () => {
  const items = [
    {
      num: '01',
      title: '慶應義塾大学に何としても合格したい方',
      desc: '慶應ROUTEは慶應合格を第一目標とし、慶應に特化したカリキュラム・受験戦略をねっていきます。また、慶應義塾大学の様々な入試方式に対応しているため、入試は一発勝負という概念をなくし合格するチャンスを増やすことができます。'
    },
    {
      num: '02',
      title: '一般入試だけでなく、総合型選抜も視野に入れている方',
      subtitle: 'または、\n総合型選抜が第1志望であるが、もしものために一般入試対策も進めたい方',
      desc: '「一般で受けるつもりだけど総合型でいけたりしないかな・・」\n「総合型を受けるけど落ちたらどうしよう。一般に切り替えても間に合うのかな・・」\nそう考えている生徒さんは多いのではないでしょうか。\n2つの入試方式を並行するということは難しいように思われますが、慶應ROUTEでは並行受験に対応したカリキュラム・受験戦略のもとで指導していくことができます。'
    },
    {
      num: '03',
      title: '慶應義塾大学に現役合格した講師からサポートしてほしい方',
      desc: '講師は全員、現役慶應生です。慶應合格のための入試情報のみならず、慶應の雰囲気やゼミ・教授情報など、入学後に必要な様々な情報提供のサポートも行えます。\n実際に合格した慶應生が、受験時代にやっておいて良かったこと、やらなければ良かったことを伝えます。'
    }
  ];

  return (
    <section className="py-24 bg-[#0a192f] text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight">こんな生徒さんにおすすめ</h2>
        </div>
        <div className="space-y-16">
          {items.map((item, idx) => (
            <div key={idx} className="border-t border-white/20 pt-16">
              <div className="text-center mb-8">
                <span className="text-5xl font-black text-white">{item.num}</span>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-center leading-relaxed">{item.title}</h3>
              {item.subtitle && (
                <p className="text-center font-bold mb-8 text-slate-300 leading-relaxed whitespace-pre-wrap">{item.subtitle}</p>
              )}
              <p className="text-slate-300 leading-relaxed whitespace-pre-wrap">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
