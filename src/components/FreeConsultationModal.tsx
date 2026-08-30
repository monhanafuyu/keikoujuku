import React, { useState } from 'react';
import { X, Calendar, Clock, User, CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, Sparkles } from 'lucide-react';
import { ConsultationFormData } from '../types';

interface FreeConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlanName?: string;
}

export const FreeConsultationModal: React.FC<FreeConsultationModalProps> = ({
  isOpen,
  onClose,
  selectedPlanName,
}) => {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const [formData, setFormData] = useState<ConsultationFormData>({
    name: '',
    grade: '高校2年生',
    targetUniversity: '',
    currentDeviation: '50〜55程度',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '19:00〜20:00',
    concerns: ['志望校までの計画がない'],
    message: '',
    isParent: false,
  });

  if (!isOpen) return null;

  const handleConcernToggle = (item: string) => {
    setFormData((prev) => {
      const exists = prev.concerns.includes(item);
      return {
        ...prev,
        concerns: exists
          ? prev.concerns.filter((c) => c !== item)
          : [...prev.concerns, item],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API reservation request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const concernOptions = [
    '志望校合格までに何をすればいいかわからない',
    '参考書を買っても途中で挫折してしまう',
    '授業以外で勉強する習慣がついていない',
    '勉強時間は取っているのに成績が伸びない',
    '英語の長文・単語の覚え方が定まらない',
    '部活と受験勉強の両立に悩んでいる',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="閉じる"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          /* Completion Screen */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 font-display">
              無料学習相談のご予約を受け付けました
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
              ご入力いただいたメールアドレス（{formData.email || 'ご登録アドレス'}）に、当日のZoom参加URLおよび事前アンケートをお送りいたしました。
            </p>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-left space-y-1.5 max-w-md mx-auto">
              <p className="font-bold text-slate-800">ご予約内容の確認：</p>
              <p className="text-slate-600">お名前：{formData.name} 様</p>
              <p className="text-slate-600">学年：{formData.grade} / 志望校：{formData.targetUniversity || '未定・相談中'}</p>
              <p className="text-slate-600">希望日程：{formData.preferredDate || '直近の日程で調整'} {formData.preferredTime}</p>
              {selectedPlanName && <p className="text-blue-700 font-bold">検討中のプラン：{selectedPlanName}</p>}
            </div>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="w-full py-3.5 rounded-xl bg-blue-700 text-white font-bold text-sm hover:bg-blue-800 transition-colors shadow-md"
              >
                トップページに戻る
              </button>
            </div>
          </div>
        ) : (
          /* Step-by-Step Form */
          <div>
            {/* Modal Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>無料・オンライン（Zoom 30分）</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
                無料学習相談のお申し込み
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                志望校から逆算したあなた専用の学習計画を無料でお作りします。
              </p>

              {/* Progress Steps */}
              <div className="flex items-center gap-2 mt-4">
                <div
                  className={`h-1.5 flex-1 rounded-full ${
                    step >= 1 ? 'bg-blue-600' : 'bg-slate-200'
                  }`}
                />
                <div
                  className={`h-1.5 flex-1 rounded-full ${
                    step >= 2 ? 'bg-blue-600' : 'bg-slate-200'
                  }`}
                />
                <div
                  className={`h-1.5 flex-1 rounded-full ${
                    step >= 3 ? 'bg-blue-600' : 'bg-slate-200'
                  }`}
                />
              </div>
              <p className="text-[11px] text-slate-400 mt-1 font-mono">
                STEP {step} / 3
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1: Student Information */}
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      学年 <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.grade}
                      onChange={(e) =>
                        setFormData({ ...formData, grade: e.target.value })
                      }
                      className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      <option value="高校1年生">高校1年生</option>
                      <option value="高校2年生">高校2年生</option>
                      <option value="高校3年生">高校3年生</option>
                      <option value="既卒生・浪人生">既卒生・浪人生</option>
                      <option value="中学生・その他">中学生・その他</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      志望校・学部（決まっている範囲で）
                    </label>
                    <input
                      type="text"
                      placeholder="例：明治大学法学部、早稲田大学商学部"
                      value={formData.targetUniversity}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          targetUniversity: e.target.value,
                        })
                      }
                      className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      現在のおおよその偏差値
                    </label>
                    <select
                      value={formData.currentDeviation}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          currentDeviation: e.target.value,
                        })
                      }
                      className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      <option value="〜45（基礎から固めたい）">〜45（基礎から固めたい）</option>
                      <option value="45〜50程度">45〜50程度</option>
                      <option value="50〜55程度">50〜55程度</option>
                      <option value="55〜60程度">55〜60程度</option>
                      <option value="60以上">60以上</option>
                      <option value="模試未受験・わからない">模試未受験・わからない</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-700/20"
                    >
                      <span>次へ：現在のお悩みを選択</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Concerns */}
              {step === 2 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    現在のお悩み（複数選択可）
                  </label>

                  <div className="space-y-2">
                    {concernOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => handleConcernToggle(opt)}
                        className={`w-full p-3 rounded-xl border text-left text-xs font-medium transition-all flex items-center justify-between ${
                          formData.concerns.includes(opt)
                            ? 'bg-blue-50 border-blue-600 text-blue-950 font-bold'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <span>{opt}</span>
                        <div
                          className={`w-4 h-4 rounded-md border flex items-center justify-center ${
                            formData.concerns.includes(opt)
                              ? 'bg-blue-600 border-blue-600 text-white'
                              : 'border-slate-300'
                          }`}
                        >
                          {formData.concerns.includes(opt) && (
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>戻る</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="flex-1 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-700/20"
                    >
                      <span>次へ：日程とお名前のご入力</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Contact & Preferred Schedule */}
              {step === 3 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="例：山田 太郎"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        メールアドレス <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="example@mail.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        電話番号 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="090-1234-5678"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        ご希望日
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            preferredDate: e.target.value,
                          })
                        }
                        className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        ご希望の時間帯
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            preferredTime: e.target.value,
                          })
                        }
                        className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        <option value="17:00〜18:00">17:00〜18:00</option>
                        <option value="18:00〜19:00">18:00〜19:00</option>
                        <option value="19:00〜20:00">19:00〜20:00（人気）</option>
                        <option value="20:00〜21:00">20:00〜21:00（人気）</option>
                        <option value="21:00〜22:00">21:00〜22:00</option>
                        <option value="土日の日中希望">土日の日中希望</option>
                        <option value="いつでも調整可能">いつでも調整可能</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="parent-check"
                      checked={formData.isParent}
                      onChange={(e) =>
                        setFormData({ ...formData, isParent: e.target.checked })
                      }
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                    <label htmlFor="parent-check" className="text-xs text-slate-600">
                      保護者様からのご予約・お問い合わせ
                    </label>
                  </div>

                  <div className="flex gap-3 pt-3">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>戻る</span>
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-700/25 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>予約処理中...</span>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4" />
                          <span>無料で学習相談を予約する</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                    <span>個人情報はSSLで暗号化され安全に送信されます</span>
                  </div>
                </div>
              )}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
