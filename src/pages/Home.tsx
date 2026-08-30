import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { StudySystem } from '../components/StudySystem';
import { ExamStrategies } from '../components/ExamStrategies';
import { ComparisonAndPricing } from '../components/ComparisonAndPricing';
import { InstructorsAndFaq } from '../components/InstructorsAndFaq';
import { Navbar, Footer, FinalCta, FreeConsultationModal } from '../components/Layout';
import { SEO } from '../components/SEO';

export default function Home() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const openConsultation = () => setIsConsultationOpen(true);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#b38f4f] selection:text-white pb-20 sm:pb-0">
      <SEO 
        title="慶應コーチング｜現役慶應生による一般・推薦対応の大学受験塾"
        description="現役慶應生による大学受験コーチング。一般選抜・慶應法学部FIT入試・総合型選抜・指定校推薦に対応。学習計画・進捗管理から、分からない問題の個別解説までサポートします。"
        canonicalUrl="/"
      />
      <h1 className="sr-only">現役慶應生による、一般・推薦対応の大学受験コーチング</h1>
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
          className="w-full py-4 px-3 rounded-sm bg-[#b38f4f] text-white font-bold text-sm flex items-center justify-center gap-1.5 shadow-md active:scale-[0.98] transition-transform tracking-widest"
        >
          <span>無料で受験戦略を相談する</span>
        </button>
      </div>

      <FreeConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    </div>
  );
}
