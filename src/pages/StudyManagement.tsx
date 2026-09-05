import React from 'react';
import { SEO } from '../components/SEO';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FinalCta } from '../components/FinalCta';
import { FreeConsultationModal } from '../components/FreeConsultationModal';

export const StudyManagement = () => {
  const [isConsultationOpen, setIsConsultationOpen] = React.useState(false);
  const openConsultation = () => setIsConsultationOpen(true);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#B38F4F] selection:text-white">
      <SEO 
        title="大学受験の学習管理｜現役慶應生による個別コーチング｜慶應ROUTE"
        description="受験戦略を、毎日の勉強まで落とし込む。現役慶應生が年間計画・週間計画を作成し、参考書選定、進捗管理、質問指導まで徹底的に伴走する慶應ROUTEの学習管理。"
        canonicalUrl="/study-management"
      />
      
      <Navbar onOpenConsultation={openConsultation} />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-6 tracking-tight">
              受験戦略を、<br className="sm:hidden" />毎日の勉強まで落とし込む。
            </h1>
            <p className="text-slate-300 leading-relaxed text-left sm:text-center mt-6">
              どんなに素晴らしい受験戦略を立てても、それが日々の勉強に反映されなければ意味がありません。<br className="hidden sm:block" />
              慶應ROUTEでは、現役慶應生があなたの学習に伴走し、「何を・いつ・どれくらい」やるべきかを完全に管理します。
            </p>
          </div>

          <div className="space-y-12">
            <section className="bg-[#0a0a0a] p-8 rounded-2xl shadow-sm border border-white/10">
              <h2 className="text-2xl font-bold text-slate-200 mb-6 border-b border-white/10 pb-4">学習管理のサイクル</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-slate-200 mb-2 text-lg">1. 年間・月間計画の作成</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">志望学部と現在の学力のギャップを測り、入試本番から逆算した大きな学習スケジュール（ロードマップ）を作成します。ここで使用する参考書や問題集のルートも確定します。</p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-200 mb-2 text-lg">2. 週間計画（宿題）の提示</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">月間計画をさらに細分化し、「今週はどの参考書の何ページから何ページまでを、どのように進めるか」を明確に指示します。生徒は「今日何を勉強すべきか」迷うことがなくなります。</p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-200 mb-2 text-lg">3. 確認テストと進捗面談</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">毎週の指導時間に確認テストを行い、定着度を測ります。計画通りに進まなかった場合は原因を一緒に分析し、次週の計画を修正します。</p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-200 mb-2 text-lg">4. 質問指導と過去問分析</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">自習中に分からない問題があれば、チャットや面談でいつでも現役慶應生に質問できます。直前期には過去問の添削と分析を行い、得点力を高めます。</p>
                </div>
              </div>
            </section>

            <section className="bg-[#fcfaf5] p-8 rounded-2xl border border-[#eaddc4]">
              <h2 className="text-2xl font-bold text-slate-200 mb-6 border-b border-[#eaddc4] pb-4">普通の塾・予備校との違い</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                一般的な予備校は「授業を教えること」がメインであり、授業外の自習時間（受験勉強の大部分）は生徒任せになりがちです。一方、慶應ROUTEは「自習の質を高めること」に特化しています。最適な参考書を選び、正しいやり方で進められるよう管理し、つまずいた時にはすぐに解説する。このサイクルが最短ルートでの合格を生み出します。
              </p>
              <div className="text-center mt-8">
                <button onClick={openConsultation} className="px-8 py-4 bg-[#b38f4f] hover:bg-[#a07c3f] text-white font-bold rounded-xl transition-all shadow-md active:scale-95">
                  無料受験戦略相談で学習状況を相談する
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>

      <FinalCta onOpenConsultation={openConsultation} />
      <Footer onOpenConsultation={openConsultation} />
      <FreeConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    </div>
  );
};
