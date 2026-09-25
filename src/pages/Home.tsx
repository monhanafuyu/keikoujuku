import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { KeioSpecialized } from '../components/KeioSpecialized';
import { AdmissionTypes } from '../components/AdmissionTypes';
import { TargetAudience } from '../components/TargetAudience';
import { Features } from '../components/Features';
import { Roadmap } from '../components/Roadmap';
import { StudyCycle } from '../components/StudyCycle';
import { StrategyDashboard } from '../components/StrategyDashboard';
import { InstructorValue } from '../components/InstructorValue';
import { QualityAssurance } from '../components/QualityAssurance';
import { PricingAndComparison } from '../components/PricingAndComparison';
import { ColumnPreviewSection } from '../components/ColumnPreviewSection';
import { FAQ } from '../components/FAQ';
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
        title="慶應専門塾 慶應ROUTE｜一般選抜・法学部FIT入試・指定校推薦・SFC総合型選抜"
        description="現役慶應生による慶應義塾大学専門のオンライン受験戦略塾「慶應ROUTE」。一般選抜・慶應法FIT入試・指定校推薦・SFC総合型選抜に対応。評定平均4.8の獲得から独自傾向の英語・小論文・個別学習管理まで一貫指導。"
        keywords="慶應 塾, 慶應義塾大学 受験, 慶應 指定校推薦, 慶應義塾大学fit入試, 指定校推薦 一般入試 両立, 慶應 一般選抜, 大学受験 コーチング"
        canonicalUrl="/"
      />
      
      <h1 className="sr-only">一般も、推薦も。慶應合格へのルートを、一つに絞らない。</h1>
      <Navbar onOpenConsultation={openConsultation} />
      
      <main>
        <Hero onOpenConsultation={openConsultation} />
        <KeioSpecialized />
        <AdmissionTypes />
        <Roadmap />
        <StudyCycle />
        <StrategyDashboard />
        <TargetAudience />
        <Features />
        <InstructorValue />
        <QualityAssurance />
        <PricingAndComparison onOpenConsultation={openConsultation} />
        <ColumnPreviewSection />
        <FAQ />
        <FinalCta onOpenConsultation={openConsultation} />
      </main>

      <Footer onOpenConsultation={openConsultation} />

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t border-slate-200 sm:hidden flex shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
        <button
          onClick={openConsultation}
          className="w-full py-4 px-3 rounded-lg bg-[#B38F4F] text-white font-bold text-sm flex items-center justify-center gap-1.5 shadow-md active:scale-[0.98] transition-transform tracking-widest"
        >
          <span>無料受験戦略相談を申し込む</span>
        </button>
      </div>

      <FreeConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    </div>
  );
}
