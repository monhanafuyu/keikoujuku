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
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white pb-20 sm:pb-0">
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
      <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t border-slate-200 sm:hidden flex shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
        <button
          onClick={openConsultation}
          className="w-full py-4 px-3 rounded-xl bg-blue-700 text-white font-bold text-sm flex items-center justify-center gap-1.5 shadow-lg shadow-blue-700/30 active:scale-[0.98] transition-transform"
        >
          <span>無料で受験戦略を相談する</span>
        </button>
      </div>

      <FreeConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    </div>
  );
}
