import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { KeioSpecialized } from '../components/KeioSpecialized';
import { AdmissionTypes } from '../components/AdmissionTypes';
import { Roadmap } from '../components/Roadmap';
import { StudyCycle } from '../components/StudyCycle';
import { StrategyDashboard } from '../components/StrategyDashboard';
import { InstructorValue } from '../components/InstructorValue';
import { PricingAndComparison } from '../components/PricingAndComparison';
import { ColumnPreviewSection } from '../components/ColumnPreviewSection';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FinalCta } from '../components/FinalCta';
import { FreeConsultationModal } from '../components/FreeConsultationModal';
import { SEO } from '../components/SEO';

export default function Home() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const openConsultation = () => setIsConsultationOpen(true);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#B38F4F] selection:text-white pb-20 sm:pb-0">
      <SEO 
        title="慶應ROUTE｜一般も、推薦も。慶應合格へのルートを、一つに絞らない。"
        description="現役慶應生とつくる、あなただけの慶應合格戦略。一般選抜・慶應法FIT・総合型選抜・指定校推薦まで対応。受験戦略の設計から毎週の学習管理、分からない問題の個別解説まで、慶應合格に向けて一貫してサポートします。"
        keywords="慶應, 慶應義塾大学, 受験, 合格, 一般選抜, 推薦入試, FIT入試, 総合型選抜, 慶應ROUTE, オンライン塾"
        canonicalUrl="/"
      />
      
      <h1 className="sr-only">一般も、推薦も。慶應合格へのルートを、一つに絞らない。慶應ROUTE</h1>
      <Navbar onOpenConsultation={openConsultation} />
      
      <main>
        <Hero onOpenConsultation={openConsultation} />
        <KeioSpecialized />
        <AdmissionTypes />
        <Roadmap />
        <StudyCycle />
        <StrategyDashboard />
        <InstructorValue />
        <ColumnPreviewSection />
        <PricingAndComparison onOpenConsultation={openConsultation} />
        <FinalCta onOpenConsultation={openConsultation} />
      </main>

      <Footer onOpenConsultation={openConsultation} />

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t border-slate-200 sm:hidden flex shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
        <button
          onClick={openConsultation}
          className="w-full py-4 px-3 rounded-lg bg-[#B38F4F] text-white font-bold text-sm flex items-center justify-center gap-1.5 shadow-md active:scale-[0.98] transition-transform tracking-widest"
        >
          <span>無料相談・体験を申し込む</span>
        </button>
      </div>

      <FreeConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    </div>
  );
}
