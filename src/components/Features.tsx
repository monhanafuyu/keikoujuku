import React from 'react';

export const Features: React.FC = () => {
  const features = [
    {
      num: '01',
      title: '慶應義塾大学に特化したカリキュラム',
      desc: '「慶應に合格すること」を第一目標とし\nそのための受験戦略を練っていきます。\n講師は全員現役慶應生。\n1:1でコミュニケーションを行い、あなたの進捗度合いを把握した上で、個々に合った”やるべきこと”を導きます。'
    },
    {
      num: '02',
      title: '日本初！一般入試と総合型選抜の並行授業',
      desc: '一般入試、総合型選抜のどちらかに\n絞るのではなく、2つの入試方式に対応した\nカリキュラムで勉強することができます。\n両方の入試方式を並行することで\n慶應に合格する可能性を大きく高めます。'
    },
    {
      num: '03',
      title: '地方生にも対応したオンライン指導',
      desc: '地方では、慶應義塾大学に関する情報が少なく正しい受験戦略が立てられない学生も多いのが現状。\nまた、従来のような箱型の塾では24時間質問対応や日程調整の変更など、柔軟な対応ができません。\n慶應ROUTEでは、24時間質問対応が可能で柔軟に受験戦略を練っていきます。'
    }
  ];

  return (
    <section className="bg-white">
      {/* ヒーローメッセージ部分 */}
      <div className="relative py-24 px-4 bg-[#2f4b6d] text-white">
        <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-6">
          <p className="text-lg sm:text-xl leading-loose font-medium">
            慶應ROUTEでは、1つの入試方式に限定せず、一般入試と総合型選抜入試の並行授業を展開しています。
          </p>
          <p className="text-lg sm:text-xl leading-loose font-medium">
            慶應義塾大学に一般または総合型選抜で現役合格を果たした講師陣が、どんな科目でも各生徒の知識と習熟度を向上させるために一丸となって指導いたします。生徒一人ひとりに対応した学習カリキュラムを作成し、合格へ導きます。
          </p>
        </div>
      </div>

      {/* 特徴3つ */}
      <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {features.map((feature, idx) => (
            <div key={idx} className="border-b border-slate-200 pb-16 last:border-0 last:pb-0">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1e40af] mb-8 flex items-baseline gap-3">
                <span className="text-2xl">{feature.num}.</span>
                {feature.title}
              </h3>
              <p className="text-slate-800 leading-loose whitespace-pre-wrap sm:text-lg">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
