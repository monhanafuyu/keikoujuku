import React, { useState } from 'react';
import { X, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

// === Navbar ===
export const Navbar: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        <div className="flex flex-col cursor-pointer">
          <Link to="/" className="font-serif text-xl sm:text-2xl tracking-widest text-[#0B1426] font-bold hover:text-[#b38f4f] transition-colors">
            慶應コーチング
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-bold tracking-widest text-slate-700">
          <Link to="/keio-fit/" className="hover:text-[#b38f4f] transition-colors">FIT対策</Link>
          <Link to="/shiteikou/" className="hover:text-[#b38f4f] transition-colors">指定校推薦</Link>
          <Link to="/sougougata/" className="hover:text-[#b38f4f] transition-colors">総合型選抜</Link>
          <Link to="/general/" className="hover:text-[#b38f4f] transition-colors">一般選抜</Link>
          <Link to="/column/" className="hover:text-[#b38f4f] transition-colors">受験コラム</Link>
          <button onClick={onOpenConsultation} className="px-6 py-3 rounded-sm font-bold text-sm bg-[#0B1426] text-white hover:bg-[#1A2639] transition-colors shadow-sm tracking-widest ml-4">
            無料で受験戦略を相談する
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <button onClick={onOpenConsultation} className="px-4 py-2.5 rounded-sm font-bold text-xs bg-[#0B1426] text-white hover:bg-[#1A2639] transition-colors shadow-sm tracking-widest">
            無料相談
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-900 p-1">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-lg py-4 px-4 flex flex-col gap-4 text-sm font-bold tracking-widest">
          <Link to="/keio-fit/" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-700 hover:text-[#b38f4f]">FIT入試対策</Link>
          <Link to="/shiteikou/" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-700 hover:text-[#b38f4f]">指定校推薦対策</Link>
          <Link to="/sougougata/" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-700 hover:text-[#b38f4f]">総合型選抜対策</Link>
          <Link to="/general/" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-700 hover:text-[#b38f4f]">一般選抜対策</Link>
          <Link to="/coaching/" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-700 hover:text-[#b38f4f]">大学受験コーチング</Link>
          <Link to="/column/" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-700 hover:text-[#b38f4f]">受験戦略コラム</Link>
        </div>
      )}
    </nav>
  );
};

// === Footer ===
export const Footer: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => (
  <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-24 sm:pb-16 text-slate-500 text-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <Link to="/" className="font-extrabold text-xl tracking-widest text-slate-900 font-serif hover:text-[#b38f4f] transition-colors">
              慶應コーチング
            </Link>
          </div>
          <p className="text-slate-600 text-xs leading-relaxed max-w-sm mb-6 tracking-wide">
            現役慶應生による一般・推薦対応の大学受験塾。<br/>受験戦略・学習管理・質問指導・推薦対策まで横断的にサポートします。
          </p>
          <p className="text-[10px] text-slate-500 border border-slate-200 p-4 rounded-sm bg-white leading-relaxed tracking-wide">
            ※慶應コーチングは、慶應義塾および慶應義塾大学が運営・公認するサービスではありません。<br/>
            ※各入試方式の出願要件等は、必ず大学公式の最新募集要項をご確認ください。
          </p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-6 tracking-widest font-serif">コース・対策</h4>
          <ul className="space-y-3">
            <li><Link to="/keio-fit/" className="hover:text-[#b38f4f] transition-colors tracking-wide">慶應FIT入試対策</Link></li>
            <li><Link to="/shiteikou/" className="hover:text-[#b38f4f] transition-colors tracking-wide">指定校推薦対策</Link></li>
            <li><Link to="/sougougata/" className="hover:text-[#b38f4f] transition-colors tracking-wide">総合型選抜対策</Link></li>
            <li><Link to="/general/" className="hover:text-[#b38f4f] transition-colors tracking-wide">一般選抜対策</Link></li>
            <li><Link to="/coaching/" className="hover:text-[#b38f4f] transition-colors tracking-wide">大学受験コーチング</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-6 tracking-widest font-serif">お役立ち情報</h4>
          <ul className="space-y-3">
            <li><Link to="/column/" className="hover:text-[#b38f4f] transition-colors tracking-wide">受験戦略コラム</Link></li>
            <li><button onClick={onOpenConsultation} className="hover:text-[#b38f4f] transition-colors tracking-wide">無料受験戦略相談</button></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="tracking-wide">&copy; {new Date().getFullYear()} 慶應コーチング. All rights reserved.</p>
        <div className="flex gap-6 text-xs tracking-wide">
          <Link to="/" className="hover:text-slate-900 transition-colors">特定商取引法に基づく表記</Link>
          <Link to="/" className="hover:text-slate-900 transition-colors">利用規約</Link>
          <Link to="/" className="hover:text-slate-900 transition-colors">プライバシーポリシー</Link>
        </div>
      </div>
    </div>
  </footer>
);

// === Final CTA ===
export const FinalCta: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => (
  <section className="bg-[#0B1426] py-32 text-center relative overflow-hidden">
    
    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-5xl font-normal text-white mb-8 leading-tight font-serif tracking-widest">
        受験方式を決める前に、<br />
        <span className="text-[#b38f4f]">合格への戦略</span>を決めよう。
      </h2>
      <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-12 max-w-2xl mx-auto tracking-wide">
        一般選抜、慶應FIT、総合型選抜、指定校推薦。<br />
        現役慶應生と一緒に、現在の学力・評定・目標から、あなたに合った受験戦略を整理します。
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button onClick={onOpenConsultation} className="px-10 py-5 rounded-sm bg-[#b38f4f] hover:bg-[#a07c3f] text-white font-bold text-lg shadow-xl transition-all hover:scale-105 active:scale-95 tracking-widest">
          無料で受験戦略を相談する
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
    grades: "",
    examTypes: "",
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
          "志望校": formData.university || "未記入",
          "現在の成績・模試・評定・英検など": formData.grades,
          "一般選抜・推薦への関心": formData.examTypes,
          "現在困っていること": formData.content,
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
      <div className="bg-white border border-slate-200 rounded-sm max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors">
          <X className="w-5 h-5" />
        </button>
        <h3 className="text-2xl font-bold text-slate-900 mb-2 font-serif tracking-widest border-b border-slate-200 pb-4">無料受験戦略相談</h3>
        
        {status === "success" ? (
          <div className="py-12 text-center">
            <div className="w-16 h-16 bg-[#b38f4f]/10 border border-[#b38f4f]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#b38f4f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2 tracking-widest">送信が完了しました</h4>
            <p className="text-slate-600 mb-8 text-sm tracking-wide">内容を確認次第、担当者よりご連絡いたします。</p>
            <button onClick={onClose} className="px-8 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold rounded-sm border border-slate-200 transition-colors tracking-widest">
              閉じる
            </button>
          </div>
        ) : (
          <>
            <p className="text-sm font-bold text-[#b38f4f] mt-6 tracking-wide">まずは、あなたの受験戦略を整理します。</p>
            <p className="text-sm text-slate-600 mb-8 mt-2 tracking-wide leading-relaxed">
              現在の学力・評定・目標などから、「今から何を優先すべきか」を一緒に整理します。
            </p>
            
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 tracking-wide">お名前</label>
                <input 
                  type="text" 
                  className="w-full p-3 rounded-sm border border-slate-300 bg-white text-slate-900 focus:bg-white focus:border-[#c4a365] outline-none transition-colors" 
                  placeholder="慶應 太郎" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 tracking-wide">現在の学年</label>
                  <select 
                    className="w-full p-3 rounded-sm border border-slate-300 bg-white text-slate-900 focus:bg-white focus:border-[#c4a365] outline-none transition-colors"
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                  >
                    <option>高校1年生</option><option>高校2年生</option><option>高校3年生・既卒</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 tracking-wide">志望校</label>
                  <input 
                    type="text" 
                    className="w-full p-3 rounded-sm border border-slate-300 bg-white text-slate-900 focus:bg-white focus:border-[#c4a365] outline-none transition-colors" 
                    placeholder="慶應義塾大学 法学部 など" 
                    value={formData.university}
                    onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 tracking-wide">現在の成績・模試・評定・英検・得意苦手科目など</label>
                <textarea 
                  rows={2} 
                  className="w-full p-3 rounded-sm border border-slate-300 bg-white text-slate-900 focus:bg-white focus:border-[#c4a365] outline-none resize-none transition-colors" 
                  placeholder="例：評定平均4.2、英検2級、英語が得意で数学が苦手"
                  value={formData.grades}
                  onChange={(e) => setFormData({ ...formData, grades: e.target.value })}
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 tracking-wide">一般選抜・推薦への関心</label>
                <input 
                  type="text" 
                  className="w-full p-3 rounded-sm border border-slate-300 bg-white text-slate-900 focus:bg-white focus:border-[#c4a365] outline-none transition-colors" 
                  placeholder="例：指定校推薦を狙いつつ一般も考えている" 
                  value={formData.examTypes}
                  onChange={(e) => setFormData({ ...formData, examTypes: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 tracking-wide">現在困っていること</label>
                <textarea 
                  rows={3} 
                  className="w-full p-3 rounded-sm border border-slate-300 bg-white text-slate-900 focus:bg-white focus:border-[#c4a365] outline-none resize-none transition-colors" 
                  placeholder="一般か推薦か迷っている、勉強計画の立て方がわからない等"
                  required
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                ></textarea>
              </div>

              {status === "error" && (
                <div className="text-red-600 text-sm font-bold p-4 bg-red-50 border border-red-200 rounded-sm">
                  {errorMessage}
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === "loading"}
                className="w-full py-4 mt-4 rounded-sm bg-[#b38f4f] text-white font-bold text-lg hover:bg-[#a07c3f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2 tracking-widest shadow-md"
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
