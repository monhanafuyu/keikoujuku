import React from 'react';
import { SEO } from '../components/SEO';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FreeConsultationModal } from '../components/FreeConsultationModal';

const LegalLayout = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isConsultationOpen, setIsConsultationOpen] = React.useState(false);
  const openConsultation = () => setIsConsultationOpen(true);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#B38F4F] selection:text-white">
      <SEO title={`${title}｜慶應ROUTE`} description={title} canonicalUrl="/legal" />
      <Navbar onOpenConsultation={openConsultation} />
      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold font-serif text-slate-900 mb-8">{title}</h1>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 prose prose-slate">
            {children}
          </div>
        </div>
      </main>
      <Footer onOpenConsultation={openConsultation} />
      <FreeConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    </div>
  );
};

export const About = () => (
  <LegalLayout title="運営者情報">
    <p>当サイトは、慶應ROUTE 運営事務局が運営しています。現役慶應生を中心としたチームで、慶應合格を目指す受験生をサポートしています。</p>
  </LegalLayout>
);

export const Contact = () => (
  <LegalLayout title="お問い合わせ">
    <p>サービスに関するお問い合わせ、取材等のご依頼は、以下の窓口までお願いいたします。</p>
    <p>※準備中</p>
  </LegalLayout>
);

export const Terms = () => (
  <LegalLayout title="利用規約">
    <p>当塾のサービスをご利用いただく際の規約となります。（※準備中）</p>
  </LegalLayout>
);

export const Privacy = () => (
  <LegalLayout title="プライバシーポリシー">
    <p>お客様の個人情報の取り扱いに関する方針となります。（※準備中）</p>
  </LegalLayout>
);

export const Legal = () => (
  <LegalLayout title="特定商取引法に基づく表記">
    <p>特定商取引法に基づく表記となります。（※準備中）</p>
  </LegalLayout>
);
