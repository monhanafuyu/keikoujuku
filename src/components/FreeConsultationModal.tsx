import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Sparkles, Video, MessageSquare, Send } from 'lucide-react';

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
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    grade: '高2',
    name: '',
    email: '',
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/monhanafuyu@gmail.com", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            _subject: "【慶應ROUTE】無料受験戦略相談のお申し込み",
            学年: formData.grade,
            お名前: formData.name,
            メールアドレス: formData.email,
        })
      });
      
      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert("送信に失敗しました。");
      }
    } catch (error) {
      console.error(error);
      alert("通信エラーが発生しました。");
    } finally {
      setIsSubmitting(false);
    }
  };

  const gradeOptions = ['高1', '高2', '高3', '既卒', 'その他'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative my-8 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="閉じる"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          /* 送信完了画面 */
          <div className="text-center py-8 space-y-5 animate-in fade-in duration-300">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 font-display mb-3">
                お申し込み完了
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                無料受験戦略相談のお申し込みを受け付けました。<br/>
                ご入力いただいたメールアドレス宛に、担当者より日程調整のご連絡をさせていただきます。
              </p>
            </div>
            <div className="pt-6">
              <button
                onClick={onClose}
                className="w-full py-4 rounded-xl bg-slate-100 text-slate-800 font-bold text-sm hover:bg-slate-200 transition-colors"
              >
                閉じる
              </button>
            </div>
          </div>
        ) : (
          /* シンプルな申し込みフォーム */
          <div className="animate-in fade-in duration-200">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF9F5] border border-[#f3e8d3] text-[#a07c3f] text-xs font-bold mb-4 tracking-widest shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>約30秒で申し込み完了</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display mb-3 tracking-tight">
                無料学習相談を申し込む
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed px-4">
                勉強法・参考書・学習計画について、Zoomで30分無料相談できます。<br className="hidden sm:block"/>
                志望校がまだ決まっていなくても大丈夫です。
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* 学年ボタン */}
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-2">
                  学年 <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {gradeOptions.map((grade) => (
                    <button
                      key={grade}
                      type="button"
                      onClick={() => setFormData({ ...formData, grade })}
                      className={`flex-1 min-w-[70px] py-2.5 rounded-lg text-sm font-bold transition-all border ${
                        formData.grade === grade
                          ? 'bg-[#FAF9F5] border-[#b38f4f] text-[#a07c3f] shadow-sm'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {grade}
                    </button>
                  ))}
                </div>
              </div>

              {/* お名前 */}
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="山田 太郎"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3.5 rounded-xl border border-slate-200 bg-[#FAF9F5] text-slate-800 text-base focus:outline-none focus:ring-2 focus:ring-[#b38f4f] focus:bg-white transition-colors"
                />
              </div>

              {/* メールアドレス */}
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3.5 rounded-xl border border-slate-200 bg-[#FAF9F5] text-slate-800 text-base focus:outline-none focus:ring-2 focus:ring-[#b38f4f] focus:bg-white transition-colors"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#b38f4f] hover:bg-[#a07c3f] text-white font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-[#b38f4f]/25 disabled:opacity-50 transition-all active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <span>送信中...</span>
                  ) : (
                    <>
                      <span>申し込む</span>
                      <Send className="w-5 h-5 ml-1" />
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-slate-500 font-medium mt-3">
                  所要時間：約30秒・料金はかかりません
                </p>
              </div>
            </form>

            {/* 安心アイコン */}
            <div className="mt-8 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                <ShieldCheck className="w-4 h-4 text-[#b38f4f]" />
                <span>無理な勧誘なし</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                <MessageSquare className="w-4 h-4 text-[#b38f4f]" />
                <span>相談だけでもOK</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                <Video className="w-4 h-4 text-[#b38f4f]" />
                <span>オンライン 30分</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


