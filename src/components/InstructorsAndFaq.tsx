import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const InstructorsAndFaq: React.FC = () => {
  const faqs = [
    { q: '学習管理塾との違いは何ですか？', a: '学習計画を立てるだけでなく、「分からない問題の個別の質問対応や解説」まで行い、一般選抜と推薦入試の双方を見据えた横断的な受験戦略を作成する点が最大の違いです。' },
    { q: '授業はありますか？', a: '一斉授業や映像授業はありません。自学自習を基本とし、分からない部分に対するピンポイントの個別解説・質問対応を行います。' },
    { q: '分からない問題は質問できますか？', a: 'はい、可能です。単なる答え合わせではなく、「なぜ間違えたのか」「次どう解くか」まで丁寧に指導します。' },
    { q: '質問できる科目は何ですか？', a: '英語（文法・解釈・長文）、現代文、古文、日本史、世界史、数学など幅広く対応しています。※担当講師やプランにより一部異なる場合があります。' },
    { q: '講師は全員慶應生ですか？', a: '現役慶應生を中心とした講師陣で構成されています。実体験に基づくリアルなアドバイスを提供します。' },
    { q: '一般選抜だけでも受講できますか？', a: 'もちろん可能です。一般選抜に向けた基礎学力向上と志望校対策を徹底的にサポートします。' },
    { q: '推薦対策だけでも受講できますか？', a: '推薦（総合型・指定校・FIT）のみに特化した対策も可能です。ただし、推薦の不合格リスクも考慮し、最低限の一般入試基礎力の維持をご提案する場合があります。' },
    { q: '慶應FIT入試に対応していますか？', a: '対応しています。ただし、最新の出願要件等は必ず大学の公式募集要項をご自身でご確認ください。' },
    { q: '指定校推薦を考えていても一般入試の勉強は必要ですか？', a: '指定校の枠が取れなかった場合のリスクヘッジとして、また大学入学後の学力維持のために、一般入試の基礎学習を並行することをおすすめしています。' },
    { q: '高校1年生から入塾できますか？', a: 'はい。高1・高2から学習習慣を確立し、評定を維持することで、高3になった時の選択肢（一般・推薦）が大きく広がります。' },
    { q: 'まだ志望校が決まっていなくても大丈夫ですか？', a: '問題ありません。講師との定期面談や大学研究を通じて、一緒に志望校を見つけていくことができます。' },
    { q: 'オンライン受講はできますか？', a: 'はい、完全オンラインで全国どこからでも受講可能です。' },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-normal text-slate-900 mb-4 font-serif tracking-widest">
              よくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200 shadow-sm rounded-sm overflow-hidden transition-all duration-200 hover:border-[#b38f4f]/30">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="font-bold text-slate-900 tracking-wide pr-4">{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-[#b38f4f] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === idx ? 'max-h-60 pb-5 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4 tracking-wide">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
