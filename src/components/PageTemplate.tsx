import React, { useState } from 'react';
import { Navbar, Footer, FinalCta, FreeConsultationModal } from './Layout';

export const PageTemplate: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const openConsultation = () => setIsConsultationOpen(true);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#b38f4f] selection:text-white pb-20 sm:pb-0">
      <Navbar onOpenConsultation={openConsultation} />
      
      <main className="pt-16 sm:pt-20">
        {children}
        <FinalCta onOpenConsultation={openConsultation} />
      </main>

      <Footer onOpenConsultation={openConsultation} />

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t border-slate-200 sm:hidden flex shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
        <button
          onClick={openConsultation}
          className="w-full py-4 px-3 rounded-sm bg-[#b38f4f] text-white font-bold text-sm flex items-center justify-center gap-1.5 shadow-md active:scale-[0.98] transition-transform tracking-widest"
        >
          <span>無料で受験戦略を相談する</span>
        </button>
      </div>

      <FreeConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    </div>
  );
};
