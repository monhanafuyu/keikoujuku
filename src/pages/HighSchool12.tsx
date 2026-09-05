import React from 'react';
import { SEO } from '../components/SEO';
import { PageTemplate } from '../components/PageTemplate';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  Compass, Map, BookOpen, Award, PenTool, Target, Calendar, CheckCircle2 
} from 'lucide-react';

export const HighSchool12: React.FC = () => {
  return (
    <PageTemplate>
      <SEO 
        title="高1・高2から始める慶應受験｜受験戦略と勉強法｜慶應ROUTE"
        description="高1・高2から慶應合格を目指す高校生向け。一般・FIT・総合型・指定校推薦すべての選択肢を残すための受験戦略、英語学習、評定対策、活動実績づくりをサポートします。"
        canonicalUrl="/high-school-1-2"
        breadcrumbs={[
          { name: '高1・高2からの受験戦略', item: '/high-school-1-2' }
        ]}
      />
      
      <Breadcrumbs items={[{ name: '高1・高2からの受験戦略', path: '/high-school-1-2' }]} />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-white overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-[#FAF9F5]/50"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#eaddc4] bg-white text-[#a07c3f] text-xs font-bold tracking-widest mb-6 shadow-sm">
            <span>FOR 1st & 2nd GRADE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6 font-display">
            高1・高2から始める慶應受験
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-[#b38f4f] mb-8 tracking-wide">
            「高3で選べる状態を、高1・高2から。」
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            「まだ早い」「高2の後半からでいい」は大きな間違いです。<br className="hidden sm:block" />
            早く始める最大のメリットは、一般・推薦すべての選択肢を残せることにあります。
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* 早期準備の最大のメリット */}
        <section className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#b38f4f]/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold font-display mb-6">
              高1・高2から準備を始める<br className="sm:hidden"/>最大のメリット
            </h2>
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                高校3年生になってから受験勉強を始めると、現実的に選べるルートは「一般選抜」のみになることがほとんどです。なぜなら、指定校推薦に必要な「高1からの評定」や、総合型選抜に必要な「長期間の活動実績」は、高3になってからでは取り返しがつかないからです。
              </p>
              <div className="bg-white/10 p-5 rounded-xl border border-white/20 my-6">
                <p className="font-bold text-white mb-3">高1・高2から動けば、4つのルートを全て残せる</p>
                <div className="grid grid-cols-2 gap-3 text-sm font-medium">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#b38f4f]"/> 一般選抜</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#b38f4f]"/> 慶應法学部 FIT入試</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#b38f4f]"/> SFC 総合型選抜</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#b38f4f]"/> 指定校推薦</div>
                </div>
              </div>
              <p>
                当塾では、高1・高2の段階から「評定確保」「英検取得」「課外活動」をバランス良く進め、高3になった時に<strong className="text-[#C5A265]">最も合格可能性の高いルートを自由に選べる状態</strong>を作ることを目標としています。
              </p>
            </div>
          </div>
        </section>

        {/* 高1・高2でやるべき6つのこと */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-6 bg-[#b38f4f] rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight m-0">
              高1・高2でやるべき6つのこと
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <BookOpen className="w-6 h-6 text-[#b38f4f] mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">1. 学校評定の確保（4.5以上）</h3>
              <p className="text-sm text-slate-600 leading-relaxed">指定校推薦やFIT入試B方式を視野に入れるため、定期テストは全教科で高得点を狙います。テスト2週間前は学校の勉強にコミットします。</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <Award className="w-6 h-6 text-[#b38f4f] mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">2. 英検の早期取得</h3>
              <p className="text-sm text-slate-600 leading-relaxed">英語力の客観的証明として、また校内選考を有利に進めるため、高2の冬までに英検2級〜準1級の取得を目指します。</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <Target className="w-6 h-6 text-[#b38f4f] mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">3. 一般選抜に向けた基礎固め</h3>
              <p className="text-sm text-slate-600 leading-relaxed">「推薦がダメだった場合」に備え、定期テスト期間外は受験に向けた英単語・英文法・数学などの基礎を徹底的に固めます。</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <Compass className="w-6 h-6 text-[#b38f4f] mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">4. 課外活動・探究活動</h3>
              <p className="text-sm text-slate-600 leading-relaxed">FIT入試やSFC総合型選抜を見据え、自分の興味のある分野の本を読んだり、イベントに参加したりして、問題意識を育てます。</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <Map className="w-6 h-6 text-[#b38f4f] mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">5. 大学研究・志望学部選び</h3>
              <p className="text-sm text-slate-600 leading-relaxed">なんとなく「慶應に行きたい」から、「慶應の〇〇学部で〇〇を学びたい」と言える状態になるよう、大学や学部の情報を集めます。</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <PenTool className="w-6 h-6 text-[#b38f4f] mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">6. 活字に触れ、小論文の土台を作る</h3>
              <p className="text-sm text-slate-600 leading-relaxed">すぐに小論文を書く必要はありませんが、新聞や新書を読み、社会問題に対して自分なりの意見を持つ訓練を始めます。</p>
            </div>
          </div>
        </section>

        {/* 学年別のアクションプラン */}
        <section className="bg-[#FAF9F5] rounded-2xl p-6 sm:p-8 border border-[#eaddc4]">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight text-center">
            学年別 アクションプラン
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl border border-[#eaddc4] shadow-sm relative">
              <div className="absolute -top-4 left-6 bg-[#b38f4f] text-white font-bold text-sm px-4 py-1.5 rounded-full shadow-md">
                高校1年生
              </div>
              <div className="pt-2">
                <h3 className="font-bold text-slate-900 mb-3">「学習習慣の確立」と「評定貯金」</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#b38f4f] shrink-0 mt-0.5" /> まずは定期テストの勉強法を確立し、全科目で評定4.5以上を取る</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#b38f4f] shrink-0 mt-0.5" /> 英単語帳（ターゲット1900やシス単など）の基礎部分を暗記する</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#b38f4f] shrink-0 mt-0.5" /> 興味のあるニュースや本を読み、自分の好きな分野を探す</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#eaddc4] shadow-sm relative">
              <div className="absolute -top-4 left-6 bg-[#b38f4f] text-white font-bold text-sm px-4 py-1.5 rounded-full shadow-md">
                高校2年生
              </div>
              <div className="pt-2">
                <h3 className="font-bold text-slate-900 mb-3">「英検取得」と「志望校の解像度アップ」</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#b38f4f] shrink-0 mt-0.5" /> 定期テストの評定を維持しつつ、英検2級〜準1級を取得する</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#b38f4f] shrink-0 mt-0.5" /> 英文法の全範囲を終わらせ、長文読解の練習に入る</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#b38f4f] shrink-0 mt-0.5" /> オープンキャンパスに行き、一般・推薦どちらのルートを主軸にするか考える</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageTemplate>
  );
};
