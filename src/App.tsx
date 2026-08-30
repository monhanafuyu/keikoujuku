import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { StudySystem } from './components/StudySystem';
import { ExamStrategies } from './components/ExamStrategies';
import { ComparisonAndPricing } from './components/ComparisonAndPricing';
import { InstructorsAndFaq } from './components/InstructorsAndFaq';
import { Navbar, Footer, FinalCta, FreeConsultationModal, LineModal } from './components/Layout';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const openConsultation = () => setIsConsultationOpen(true);

  return (
    <div className="min-h-screen bg-[#0B1426] text-slate-200 font-sans selection:bg-[#b38f4f] selection:text-[#1a1a1a] pb-20 sm:pb-0">
      <Navbar onOpenConsultation={openConsultation} />
      
      <main>
        <Hero onOpenConsultation={openConsultation} />
        <Features />
        <StudySystem />
        <ExamStrategies />
        <ComparisonAndPricing onOpenConsultation={openConsultation} />
        <InstructorsAndFaq />
        <FinalCta onOpenConsultation={openConsultation} />
      </main>

      <Footer onOpenConsultation={openConsultation} />

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#0B1426]/95 backdrop-blur-md border-t border-white/10 sm:hidden flex shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.5)]">
        <button
          onClick={openConsultation}
          className="w-full py-4 px-3 rounded-sm bg-[#b38f4f] text-[#1a1a1a] font-bold text-sm flex items-center justify-center gap-1.5 shadow-lg shadow-[#b38f4f]/20 active:scale-[0.98] transition-transform"
        >
          <span>無料受験相談に申し込む</span>
        </button>
      </div>

      <FreeConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    </div>
  );
}
