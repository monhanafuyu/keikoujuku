import React from 'react';
import { PRICING_PLANS } from '../data';
import { Check, X, Sparkles, HelpCircle, ShieldCheck, ArrowRight } from 'lucide-react';

interface PricingProps {
  onOpenConsultation: (planName?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenConsultation }) => {
  return (
    <section id="pricing" className="py-20 bg-slate-50 border-b border-slate-200/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#b38f4f]/10 border border-[#b38f4f]/30/80 text-[#594226] text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#b38f4f]" />
            <span>明朗な月額定額制</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            目的に合わせて選べる、3つの料金プラン
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            大手予備校や大手管理塾の半額以下の水準で、圧倒的に手厚い完全個別マネジメントを提供します。
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-12">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 relative ${
                plan.isPopular
                  ? 'bg-white border-2 border-[#b38f4f] shadow-xl shadow-[#3f2e1a]/5 lg:-translate-y-2'
                  : 'bg-white border border-slate-200 shadow-xs hover:border-slate-300'
              }`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-black tracking-wider uppercase shadow-xs ${
                    plan.isPopular
                      ? 'bg-[#b38f4f] text-white shadow-[#b38f4f]/30'
                      : 'bg-slate-800 text-slate-200'
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="text-center pb-6 border-b border-slate-100">
                  <h3 className="text-xl font-extrabold text-slate-900 mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-500 min-h-[32px] flex items-center justify-center">
                    {plan.targetAudience}
                  </p>

                  <div className="mt-4 flex items-baseline justify-center gap-1">
                    <span className="text-xs text-slate-500 font-bold">月額</span>
                    <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                      ¥{plan.price.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">（税込）</span>
                  </div>

                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="py-6 space-y-3">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    プランに含まれる内容
                  </p>
                  {plan.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start gap-2.5 text-xs sm:text-sm ${
                        feature.included ? 'text-slate-800' : 'text-slate-400 opacity-60'
                      }`}
                    >
                      {feature.included ? (
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            feature.highlight ? 'text-[#b38f4f] font-bold' : 'text-emerald-600'
                          }`}
                        />
                      ) : (
                        <X className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                      )}
                      <span className={feature.highlight ? 'font-bold text-slate-900' : ''}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => onOpenConsultation(plan.name)}
                  className={`w-full py-3.5 px-4 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                    plan.isPopular
                      ? 'bg-[#a07c3f] hover:bg-[#594226] text-white shadow-md shadow-[#a07c3f]/25 hover:shadow-lg'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                  }`}
                >
                  <span>無料相談でこのプランを相談</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Guarantee Notes */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 text-xs text-slate-600 max-w-4xl mx-auto space-y-1.5">
          <p className="font-bold text-slate-800 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#b38f4f]" />
            料金とご契約に関するご案内
          </p>
          <ul className="list-disc list-inside space-y-1 pl-1 text-slate-500">
            <li>入会金・年会費・施設維持費・季節講習の強制購入などは一切ございません。</li>
            <li>参考書は市販の最適なもの（1冊1,000円〜1,500円程度）をご自身でご購入いただきます。</li>
            <li>いつでもプランの変更・休会が月単位で可能です。違約金等は一切かかりません。</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
