import React from 'react';
import { X } from 'lucide-react';

// === Navbar ===
export const Navbar: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-xl italic tracking-tighter">慶</div>
        <span className="font-extrabold text-xl tracking-tight text-slate-900">慶應コーチング</span>
      </div>
      <div className="hidden md:flex items-center gap-3">
        <button onClick={onOpenConsultation} className="px-5 py-2.5 rounded-xl font-bold text-sm bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm">
          無料受験戦略相談
        </button>
      </div>
    </div>
  </nav>
);

// === Footer ===
export const Footer: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => (
  <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-24 sm:pb-16 text-slate-600 text-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-slate-300 rounded flex items-center justify-center text-white font-black text-xs italic tracking-tighter">慶</div>
            <span className="font-extrabold text-lg tracking-tight text-slate-900">慶應コーチング</span>
          </div>
          <p className="text-slate-500 text-xs leading-relaxed max-w-sm mb-4">
            現役慶應生による受験戦略設計・学習管理・質問指導・推薦対策を提供する大学受験専門のオンライン塾。
          </p>
          <p className="text-[10px] text-slate-400 border border-slate-200 p-3 rounded-lg bg-white">
            ※当塾は独立した民間の学習塾であり、慶應義塾大学およびその関連機関とは一切関係ありません。<br/>
            ※各入試方式の出願要件等は、必ず大学公式の最新募集要項をご確認ください。
          </p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-4">Menu</h4>
          <ul className="space-y-2">
            <li><button onClick={onOpenConsultation} className="hover:text-blue-600 transition-colors">無料受験戦略相談</button></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} 慶應コーチング. All rights reserved.</p>
        <div className="flex gap-4 text-xs">
          <a href="#" className="hover:text-slate-900">特定商取引法に基づく表記</a>
          <a href="#" className="hover:text-slate-900">利用規約</a>
          <a href="#" className="hover:text-slate-900">プライバシーポリシー</a>
        </div>
      </div>
    </div>
  </footer>
);

// === Final CTA ===
export const FinalCta: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => (
  <section className="bg-slate-900 py-24 text-center relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
    
    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
        受験方式を決める前に、<br />
        合格への戦略を決めよう。
      </h2>
      <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-12 max-w-2xl mx-auto">
        一般選抜、FIT、総合型選抜、指定校推薦。<br />
        現役慶應生と一緒に、現在の学力・評定・目標から、あなたの受験戦略を整理します。
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button onClick={onOpenConsultation} className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg shadow-xl shadow-blue-600/20 transition-all hover:scale-105 active:scale-95">
          無料受験戦略相談を申し込む
        </button>
      </div>
    </div>
  </section>
);

// === Modals ===
export const FreeConsultationModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = React.useState({
    name: "",
    grade: "高校1年生",
    university: "",
    content: "",
  });
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "送信に失敗しました。");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("ネットワークエラーが発生しました。");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:bg-slate-100">
          <X className="w-5 h-5" />
        </button>
        <h3 className="text-2xl font-extrabold text-slate-900 mb-2">無料受験戦略相談</h3>
        
        {status === "success" ? (
          <div className="py-12 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">送信が完了しました</h4>
            <p className="text-slate-600 mb-6 text-sm">内容を確認次第、担当者よりご連絡いたします。</p>
            <button onClick={onClose} className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-colors">
              閉じる
            </button>
          </div>
        ) : (
          <>
            <p className="text-sm text-slate-600 mb-6">
              現在の状況（学年、成績、評定、英検など）をヒアリングし、「今から何を優先すべきか」を整理します。
            </p>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">お名前</label>
                <input 
                  type="text" 
                  className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none" 
                  placeholder="慶應 太郎" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">現在の学年</label>
                <select 
                  className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                  value={formData.grade}
                  onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                >
                  <option>高校1年生</option><option>高校2年生</option><option>高校3年生・既卒</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">志望大学・学部 (未定でも可)</label>
                <input 
                  type="text" 
                  className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none" 
                  placeholder="慶應義塾大学 法学部" 
                  value={formData.university}
                  onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">現在の悩み・相談したいこと</label>
                <textarea 
                  rows={3} 
                  className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none resize-none" 
                  placeholder="一般か推薦か迷っている、勉強法がわからない等"
                  required
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                ></textarea>
              </div>

              {status === "error" && (
                <div className="text-red-500 text-sm font-bold p-3 bg-red-50 rounded-xl">
                  {errorMessage}
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === "loading"}
                className="w-full py-4 mt-2 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
              >
                {status === "loading" && (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
                相談を申し込む
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
