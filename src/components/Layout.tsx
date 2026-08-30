import React from 'react';
import { X } from 'lucide-react';

// === Navbar ===
export const Navbar: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1426] border-b border-white/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
      <div className="flex flex-col cursor-pointer">
        <span className="font-serif text-xl sm:text-2xl tracking-widest text-white font-bold">慶應コーチング</span>
        <span className="text-[#b38f4f] text-[10px] sm:text-xs tracking-[0.2em] mt-0.5">KEIO COACHING</span>
      </div>
      <div className="flex items-center gap-3">
        <button onClick={onOpenConsultation} className="px-4 py-2.5 sm:px-6 sm:py-3 rounded-sm font-bold text-xs sm:text-sm bg-[#b38f4f] text-[#1a1a1a] hover:bg-[#a07c3f] transition-colors shadow-md shadow-[#b38f4f]/20">
          無料受験相談を申し込む
        </button>
      </div>
    </div>
  </nav>
);

// === Footer ===
export const Footer: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => (
  <footer className="bg-[#0B1426] border-t border-white/5 pt-16 pb-24 sm:pb-16 text-slate-400 text-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-[#b38f4f]/10 border border-[#b38f4f]/30 rounded-sm flex items-center justify-center text-[#b38f4f] font-serif font-black text-sm italic tracking-tighter">慶</div>
            <span className="font-extrabold text-xl tracking-widest text-white font-serif">慶應コーチング</span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed max-w-sm mb-6 tracking-wide">
            現役慶應生による受験戦略設計・学習管理・質問指導・推薦対策を提供する大学受験専門のオンライン塾。
          </p>
          <p className="text-[10px] text-slate-500 border border-white/10 p-4 rounded-sm bg-white/5 leading-relaxed tracking-wide">
            ※当塾は独立した民間の学習塾であり、慶應義塾大学およびその関連機関とは一切関係ありません。<br/>
            ※各入試方式の出願要件等は、必ず大学公式の最新募集要項をご確認ください。
          </p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-6 tracking-widest font-serif">Menu</h4>
          <ul className="space-y-3">
            <li><button onClick={onOpenConsultation} className="hover:text-[#b38f4f] transition-colors tracking-wide">無料受験戦略相談</button></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="tracking-wide">&copy; {new Date().getFullYear()} 慶應コーチング. All rights reserved.</p>
        <div className="flex gap-6 text-xs tracking-wide">
          <a href="#" className="hover:text-white transition-colors">特定商取引法に基づく表記</a>
          <a href="#" className="hover:text-white transition-colors">利用規約</a>
          <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
        </div>
      </div>
    </div>
  </footer>
);

// === Final CTA ===
export const FinalCta: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => (
  <section className="bg-[#1A2639] py-32 text-center relative overflow-hidden border-t border-white/5">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] pointer-events-none"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-[#b38f4f]/10 rounded-full blur-[120px] pointer-events-none"></div>
    
    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 leading-tight font-serif tracking-widest">
        受験方式を決める前に、<br />
        <span className="text-[#b38f4f]">合格への戦略</span>を決めよう。
      </h2>
      <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-12 max-w-2xl mx-auto tracking-wide">
        一般選抜、FIT、総合型選抜、指定校推薦。<br />
        現役慶應生と一緒に、現在の学力・評定・目標から、あなたの受験戦略を整理します。
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button onClick={onOpenConsultation} className="px-10 py-5 rounded-sm bg-[#b38f4f] hover:bg-[#a07c3f] text-[#1a1a1a] font-bold text-lg shadow-xl shadow-[#b38f4f]/20 transition-all hover:scale-105 active:scale-95 tracking-widest">
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
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "57b69458-85b9-4df2-91dc-7b17c3050f4c",
          subject: `【慶應コーチング】無料受験戦略相談のお申し込み - ${formData.name}様`,
          from_name: formData.name,
          "お名前": formData.name,
          "現在の学年": formData.grade,
          "志望大学・学部": formData.university || "未記入",
          "現在の悩み・相談したいこと": formData.content,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.message || "送信に失敗しました。");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("ネットワークエラーが発生しました。");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#111A2E] border border-white/10 rounded-sm max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-colors">
          <X className="w-5 h-5" />
        </button>
        <h3 className="text-2xl font-extrabold text-white mb-2 font-serif tracking-widest border-b border-white/10 pb-4">無料受験戦略相談</h3>
        
        {status === "success" ? (
          <div className="py-12 text-center">
            <div className="w-16 h-16 bg-[#b38f4f]/10 border border-[#b38f4f]/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#b38f4f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-2 tracking-widest">送信が完了しました</h4>
            <p className="text-slate-400 mb-8 text-sm tracking-wide">内容を確認次第、担当者よりご連絡いたします。</p>
            <button onClick={onClose} className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white font-bold rounded-sm border border-white/10 transition-colors tracking-widest">
              閉じる
            </button>
          </div>
        ) : (
          <>
            <p className="text-sm text-slate-400 mb-8 mt-4 tracking-wide leading-relaxed">
              現在の状況（学年、成績、評定、英検など）をヒアリングし、「今から何を優先すべきか」を整理します。
            </p>
            
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2 tracking-wide">お名前</label>
                <input 
                  type="text" 
                  className="w-full p-3 rounded-sm border border-white/10 bg-[#0B1426] text-white focus:bg-white/5 focus:border-[#b38f4f]/50 outline-none transition-colors" 
                  placeholder="慶應 太郎" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2 tracking-wide">現在の学年</label>
                <select 
                  className="w-full p-3 rounded-sm border border-white/10 bg-[#0B1426] text-white focus:bg-white/5 focus:border-[#b38f4f]/50 outline-none transition-colors"
                  value={formData.grade}
                  onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                >
                  <option>高校1年生</option><option>高校2年生</option><option>高校3年生・既卒</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2 tracking-wide">志望大学・学部 (未定でも可)</label>
                <input 
                  type="text" 
                  className="w-full p-3 rounded-sm border border-white/10 bg-[#0B1426] text-white focus:bg-white/5 focus:border-[#b38f4f]/50 outline-none transition-colors" 
                  placeholder="慶應義塾大学 法学部" 
                  value={formData.university}
                  onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2 tracking-wide">現在の悩み・相談したいこと</label>
                <textarea 
                  rows={4} 
                  className="w-full p-3 rounded-sm border border-white/10 bg-[#0B1426] text-white focus:bg-white/5 focus:border-[#b38f4f]/50 outline-none resize-none transition-colors" 
                  placeholder="一般か推薦か迷っている、勉強法がわからない等"
                  required
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                ></textarea>
              </div>

              {status === "error" && (
                <div className="text-red-400 text-sm font-bold p-4 bg-red-900/20 border border-red-500/20 rounded-sm">
                  {errorMessage}
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === "loading"}
                className="w-full py-4 mt-4 rounded-sm bg-[#b38f4f] text-[#1a1a1a] font-bold text-lg hover:bg-[#a07c3f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2 tracking-widest shadow-lg shadow-[#b38f4f]/20"
              >
                {status === "loading" && (
                  <svg className="animate-spin h-5 w-5 text-[#1a1a1a]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
