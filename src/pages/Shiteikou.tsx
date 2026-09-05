import React from 'react';
import { PageTemplate } from '../components/PageTemplate';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Link } from 'react-router-dom';
import { 
  Award, 
  CheckCircle2, 
  BookOpen, 
  Sparkles, 
  ShieldAlert, 
  Calendar, 
  Target, 
  ChevronRight 
} from 'lucide-react';

export const Shiteikou: React.FC = () => {
  return (
    <PageTemplate>
      <SEO 
        title="指定校推薦対策｜一般入試との両立もサポート｜慶應ROUTE"
        description="指定校推薦対策と一般入試を両立する大学受験塾。高1・高2からの定期テスト評定対策、英検取得、校内選考対策から志望理由書・面接指導まで、現役慶應生が徹底サポート。"
        canonicalUrl="/shiteikou/"
        breadcrumbs={[
          { name: '指定校推薦対策', item: '/shiteikou/' }
        ]}
      />
      
      <Breadcrumbs items={[{ name: '指定校推薦対策', path: '/shiteikou/' }]} />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-[#080E1A] text-white overflow-hidden border-b border-[#B38F4F]/30">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B38F4F_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B38F4F]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B38F4F]/40 bg-[#B38F4F]/10 text-[#DFCCA6] text-xs md:text-sm font-serif tracking-widest mb-8">
            <Sparkles className="w-3.5 h-3.5 text-[#B38F4F]" />
            DESIGNATED SCHOOL RECOMMENDATION
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-widest leading-tight text-white mb-8">
            指定校推薦対策と<br className="hidden sm:block" />
            <span className="text-[#C5A265]">一般入試を両立する</span>大学受験塾
          </h1>

          <p className="text-base sm:text-xl text-slate-300 font-serif tracking-wider max-w-3xl mx-auto leading-relaxed mb-10">
            「推薦が取れなかったらどうしよう」という不安をゼロに。<br />
            高校1年・2年からの定期テスト評定対策と、一般入試の実力養成を同時に実現します。
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            {[
              { title: '定期テスト・評定管理', desc: '全科目で4.5以上を狙う' },
              { title: '英検早期取得', desc: '校内選考を有利に進める' },
              { title: '志望理由書・面接', desc: '大学提出書類の完成' },
              { title: '一般入試への保険', desc: '取れなかった時の備え' },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#0a0a0a]/5 border border-[#B38F4F]/20 p-4 rounded-sm">
                <div className="text-xs text-[#B38F4F] font-serif font-bold mb-1">{item.title}</div>
                <div className="text-xs text-slate-400">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Section 1: 指定校推薦とは */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-6 bg-[#B38F4F]"></div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-widest text-white m-0">
              指定校推薦とは｜制度の特徴と「校内選考」の壁
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-base">
            <p>
              指定校推薦（学校推薦型選抜・指定校制）は、大学が特定の高校に対して募集枠を割り当てる入試制度です。高校内の選考会議を通過して推薦枠を獲得できれば、大学側の面接や書類審査を経てほぼ確実に合格できます。
            </p>
            <p>
              しかし、最大の関門は<strong>「高校内での枠争い（校内選考）」</strong>です。早稲田・慶應・上智・GMARCHなどの難関大学の指定校推薦枠は、1つの高校に対して1〜数名程度しかなく、学年トップクラスの評定（4.5〜4.9）を持つ生徒同士のハイレベルな争いとなります。
            </p>
          </div>
        </section>

        {/* Section 2: 指定校推薦対策の3本柱 */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-6 bg-[#B38F4F]"></div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-widest text-white m-0">
              慶應コーチングの指定校推薦対策
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#0a0a0a] border border-white/10 p-6 rounded-sm shadow-sm">
              <div className="w-10 h-10 bg-[#080E1A] text-[#B38F4F] rounded-sm flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-white mb-3">① 定期テスト評定対策</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                テスト2週間前から逆算したテスト計画を策定。副教科を含めた全教科の評定を底上げし、分からない問題は現役生が個別解説。
              </p>
            </div>

            <div className="bg-[#0a0a0a] border border-white/10 p-6 rounded-sm shadow-sm">
              <div className="w-10 h-10 bg-[#080E1A] text-[#B38F4F] rounded-sm flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-white mb-3">② 英検等の資格取得</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                同等の評定でライバルと競合した際の決定打となる英検2級・準1級。高2終了時までの取得ロードマップを引きます。
              </p>
            </div>

            <div className="bg-[#0a0a0a] border border-white/10 p-6 rounded-sm shadow-sm">
              <div className="w-10 h-10 bg-[#080E1A] text-[#B38F4F] rounded-sm flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-white mb-3">③ 志望理由書・面接指導</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                校内選考後の大学提出用志望理由書の添削や、大学教授との面接対策も現役慶應生がマンツーマンで指導します。
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: 一般入試との両立（取れなかった場合への備え） */}
        <section className="mb-20 bg-[#050505] border border-white/10 p-8 rounded-sm">
          <div className="flex items-center gap-3 mb-4">
            <ShieldAlert className="w-6 h-6 text-[#B38F4F]" />
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white m-0">
              「推薦を取れなかった場合」に備える一般入試との両立
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              校内選考の結果が判明するのは高3の9月〜10月です。もし選考から漏れた場合、そこから慌てて一般入試の勉強を始めても志望校の合格は極めて困難になります。
            </p>
            <p className="font-bold text-white">
              当塾では、「推薦対策＝一般入試の基礎固め」と位置づけ、定期テスト期間外は主要科目の自学自習管理を徹底します。推薦が取れれば最高、取れなくても一般選抜で余裕で受かる実力を育てます。
            </p>
          </div>
        </section>

        {/* Section 4: 関連コラム・内部リンク */}
        <section className="mb-20">
          <h2 className="text-xl font-serif font-bold text-white mb-6 border-b border-white/10 pb-3">
            指定校推薦に関するおすすめコラム
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/column/shiteikou-ippan-ryouritsu-kou1" className="p-4 bg-[#0a0a0a] border border-white/10 rounded-sm hover:border-[#B38F4F] transition-all group flex justify-between items-center">
              <span className="text-sm font-bold text-slate-200 group-hover:text-[#B38F4F]">指定校推薦と一般入試は両立できる？高1・高2からの受験戦略</span>
              <ChevronRight className="w-4 h-4 text-[#B38F4F] shrink-0" />
            </Link>
            <Link to="/column/shiteikou-kou1-todo" className="p-4 bg-[#0a0a0a] border border-white/10 rounded-sm hover:border-[#B38F4F] transition-all group flex justify-between items-center">
              <span className="text-sm font-bold text-slate-200 group-hover:text-[#B38F4F]">指定校推薦を狙う高校1年生がやるべきこと</span>
              <ChevronRight className="w-4 h-4 text-[#B38F4F] shrink-0" />
            </Link>
          </div>
        </section>

      </div>
    </PageTemplate>
  );
};
