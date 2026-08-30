import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Worries } from './components/Worries';
import { SolutionCycle } from './components/SolutionCycle';
import { StudyPlanDemo } from './components/StudyPlanDemo';
import { ComparisonTable } from './components/ComparisonTable';
import { Services } from './components/Services';
import { ParentBenefitSection } from './components/ParentBenefitSection';
import { Pricing } from './components/Pricing';
import { StepsToJoin } from './components/StepsToJoin';
import { Faq } from './components/Faq';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { FreeConsultationModal } from './components/FreeConsultationModal';
import { LineModal } from './components/LineModal';
import { LegalModal } from './components/LegalModal';
import { Calendar, MessageCircle } from 'lucide-react';

export default function App() {
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [lineModalOpen, setLineModalOpen] = useState(false);
  const [legalModalState, setLegalModalState] = useState<{
    isOpen: boolean;
    type: 'terms' | 'privacy' | 'commercial';
  }>({
    isOpen: false,
    type: 'commercial',
  });
  const [selectedPlanForConsultation, setSelectedPlanForConsultation] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (planName?: string) => {
    setSelectedPlanForConsultation(planName);
    setConsultationModalOpen(true);
  };

  const handleOpenLine = () => {
    setLineModalOpen(true);
  };

  const handleOpenLegal = (type: 'terms' | 'privacy' | 'commercial') => {
    setLegalModalState({
      isOpen: true,
      type,
    });
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white pb-20 sm:pb-0">
      {/* Fixed Navigation Bar */}
      <Navbar
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenLineModal={handleOpenLine}
      />

      {/* Main Landing Page Sections */}
      <main>
        {/* ① Hero Section */}
        <Hero
          onOpenConsultation={() => handleOpenConsultation()}
          onOpenLineModal={handleOpenLine}
        />

        {/* ② High School Students' Worries & True Problem */}
        <Worries />

        {/* ③ Solution: 5-Step Reverse Calculation Management & PDCA */}
        <SolutionCycle />

        {/* ④ Concrete Study Plan Example (High School 2nd year -> Meiji Law Model) */}
        <StudyPlanDemo />

        {/* ⑤ Comparison Matrix (Traditional Cram School vs PASSGATE) */}
        <ComparisonTable />

        {/* ⑥ 8 Comprehensive Study Services */}
        <Services />

        {/* Dedicated Value for Parents (Progress Visualization) */}
        <ParentBenefitSection />

        {/* ⑦ Pricing (Light / Standard [Recommended] / Premium) */}
        <Pricing onOpenConsultation={handleOpenConsultation} />

        {/* ⑧ 4 Steps to Join */}
        <StepsToJoin onOpenConsultation={() => handleOpenConsultation()} />

        {/* ⑨ Frequently Asked Questions (Accordion) */}
        <Faq />

        {/* ⑩ Deep Navy Final CTA */}
        <FinalCta
          onOpenConsultation={() => handleOpenConsultation()}
          onOpenLineModal={handleOpenLine}
        />
      </main>

      {/* ⑪ Official Footer */}
      <Footer
        onOpenLegal={handleOpenLegal}
        onOpenLineModal={handleOpenLine}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Mobile Sticky Floating CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 p-2.5 bg-white/95 backdrop-blur-md border-t border-slate-200/80 sm:hidden flex gap-2">
        <button
          onClick={handleOpenLine}
          className="flex-1 py-3 px-2 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-300 font-bold text-xs flex items-center justify-center gap-1.5 shadow-2xs active:scale-[0.98]"
        >
          <MessageCircle className="w-4 h-4 text-[#06C755]" />
          <span>LINEで相談</span>
        </button>
        <button
          onClick={() => handleOpenConsultation()}
          className="flex-2 py-3 px-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-blue-700/25 active:scale-[0.98]"
        >
          <Calendar className="w-4 h-4" />
          <span>無料学習相談を予約</span>
        </button>
      </div>

      {/* Interactive Modals */}
      <FreeConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        selectedPlanName={selectedPlanForConsultation}
      />

      <LineModal
        isOpen={lineModalOpen}
        onClose={() => setLineModalOpen(false)}
      />

      <LegalModal
        isOpen={legalModalState.isOpen}
        initialType={legalModalState.type}
        onClose={() =>
          setLegalModalState((prev) => ({ ...prev, isOpen: false }))
        }
      />
    </div>
  );
}
