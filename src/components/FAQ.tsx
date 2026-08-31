import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQ = () => {
  const faqs = [
    {
      question: '地方に住んでいますが受講可能ですか？',
      answer: 'はい、完全オンラインのため全国どこからでも受講可能です。'
    },
    {
      question: 'まだ志望学部が明確に決まっていませんが大丈夫ですか？',
      answer: '問題ありません。無料受験戦略相談や入塾後の面談を通して、あなたの適性や目標に合わせた学部選び・受験方式選びからサポートします。'
    },
    {
      question: '推薦入試（FIT・SFC総合型・指定校）の対策だけでも受講できますか？',
      answer: 'はい、可能です。ただし、慶應ROUTEでは一般入試との両立を推奨しており、リスクヘッジを含めた全体戦略をご提案します。'
    },
    {
      question: '現在、他の塾や予備校に通っていますが併用は可能ですか？',
      answer: '可能です。予備校の授業進度も含めて学習計画を立て、オーバーワークにならないようスケジュールを調整・管理します。'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-serif text-slate-900 mb-4 tracking-tight">
            よくあるご質問
          </h2>
          <p className="text-slate-600">
            FAQ
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors text-left"
      >
        <span className="font-bold text-slate-800 pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-6 py-4 text-slate-600 border-t border-slate-100 leading-relaxed text-sm">
          {answer}
        </div>
      )}
    </div>
  );
};
