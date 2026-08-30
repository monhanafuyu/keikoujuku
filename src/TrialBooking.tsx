import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, MessageCircle, CheckCircle2, AlertCircle, ChevronLeft } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';
import { Link } from 'react-router-dom';

export default function TrialBooking({ siteContent }: { siteContent: any }) {
  const [formData, setFormData] = useState({
    studentName: '',
    grade: '',
    email: '',
    phone: '',
    preferredDate: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      await addDoc(collection(db, 'trialBookings'), {
        ...formData,
        createdAt: serverTimestamp(),
        status: 'pending'
      });
      setSuccess(true);
    } catch (err) {
      console.error("Error submitting trial booking:", err);
      setError('送信に失敗しました。時間をおいて再度お試しいただくか、直接メールよりご連絡ください。');
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-slate-50 py-20 px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-emerald-600" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-4">お申し込みありがとうございます！</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            体験授業の仮予約を受け付けました。<br />
            <span className="font-bold text-red-500">※まだ予約は完了していません。</span><br />
            日程調整のため、必ず下記のボタンから公式メールを友だち追加し、<br />
            <span className="font-bold">「体験授業希望：{formData.studentName}」</span>とメッセージをお送りください。
          </p>
          <a
            href={siteContent?.emailUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#06C755] hover:bg-[#05b34c] text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all shadow-lg shadow-[#06C755]/20 mb-8 w-full sm:w-auto"
          >
            <MessageCircle className="w-6 h-6" />
            公式メールを追加して予約を完了する
          </a>
          <div>
            <Link to="/" className="text-emerald-600 font-medium hover:underline flex items-center justify-center gap-1">
              <ChevronLeft className="w-4 h-4" />
              トップページに戻る
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-600 mb-8 transition-colors">
          <ChevronLeft className="w-5 h-5" />
          トップページに戻る
        </Link>
        
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="bg-emerald-600 p-8 text-white text-center">
            <h1 className="text-3xl font-black mb-2">無料体験授業のお申し込み</h1>
            <p className="text-emerald-100">まずは1回、慶廣ゼミナールの指導を体感してください。</p>
          </div>
          
          <div className="p-8 md:p-12">
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-8 flex items-start gap-3 border border-red-100">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <p className="text-sm font-medium">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    生徒様のお名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.studentName}
                    onChange={e => setFormData({...formData, studentName: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="山田 太郎"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    学年 <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={formData.grade}
                    onChange={e => setFormData({...formData, grade: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-white"
                  >
                    <option value="">選択してください</option>
                    <option value="高1">高校1年生</option>
                    <option value="高2">高校2年生</option>
                    <option value="高3">高校3年生</option>
                    <option value="既卒">既卒生</option>
                    <option value="その他">その他</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="example@studysync.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    電話番号 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="090-1234-5678"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  体験授業の希望日時（複数可）
                </label>
                <input
                  type="text"
                  value={formData.preferredDate}
                  onChange={e => setFormData({...formData, preferredDate: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  placeholder="例：平日の19時以降、土日の午後など"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  現在の学習の悩み・目標など（任意）
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none"
                  placeholder="定期テストの点数が伸び悩んでいる、指定校推薦を狙いたいなど、ご自由にお書きください。"
                ></textarea>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      送信中...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      入力内容を送信する
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-slate-500 mt-4">
                  送信後、公式メールへのご案内が表示されます。
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
