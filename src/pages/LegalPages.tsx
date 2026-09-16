import React from 'react';
import { SEO } from '../components/SEO';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FreeConsultationModal } from '../components/FreeConsultationModal';

const LegalLayout = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isConsultationOpen, setIsConsultationOpen] = React.useState(false);
  const openConsultation = () => setIsConsultationOpen(true);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#B38F4F] selection:text-white">
      <SEO title={`${title}｜慶應ROUTE`} description={title} canonicalUrl="/legal" />
      <Navbar onOpenConsultation={openConsultation} />
      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold font-serif text-white mb-8">{title}</h1>
          <div className="bg-[#0a0a0a] rounded-2xl shadow-sm border border-white/10 p-8 prose prose-slate prose-invert max-w-none">
            {children}
          </div>
        </div>
      </main>
      <Footer onOpenConsultation={openConsultation} />
      <FreeConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    </div>
  );
};

export const Contact = () => (
  <LegalLayout title="お問い合わせ">
    <p>当塾のサービスに関するお問い合わせや、受験に関するご相談は、随時オンラインにて承っております。</p>
    <p>画面右上の<strong>「無料相談」</strong>ボタン、または画面下部の<strong>「無料受験戦略相談」</strong>のリンクよりお申し込みください。</p>
    
    <h3>お問い合わせ対応時間</h3>
    <p>平日 10:00 〜 18:00（土日祝日を除く）</p>
    <p>※ご相談へのご案内には、最大3営業日ほどお時間をいただく場合がございます。あらかじめご了承ください。</p>
  </LegalLayout>
);

export const Terms = () => (
  <LegalLayout title="利用規約">
    <p>この利用規約（以下、「本規約」といいます。）は、慶應ROUTE（以下、「当塾」といいます。）が提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。</p>

    <h3>第1条（適用）</h3>
    <p>本規約は、ユーザーと当塾との間の本サービスの利用に関わる一切の関係に適用されるものとします。</p>

    <h3>第2条（サービス内容）</h3>
    <p>当塾は、ユーザーに対し、オンライン学習コーチング、情報提供、添削指導等のサービスを提供します。具体的なサービス内容および料金等は別途定める通りとします。</p>

    <h3>第3条（禁止事項）</h3>
    <p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
    <ul>
      <li>法令または公序良俗に違反する行為</li>
      <li>犯罪行為に関連する行為</li>
      <li>当塾、他のユーザー、または第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
      <li>当塾のサービスの運営を妨害するおそれのある行為</li>
      <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
      <li>不正アクセスをし、またはこれを試みる行為</li>
    </ul>

    <h3>第4条（免責事項）</h3>
    <p>当塾は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。当塾は志望校への合格を確約するものではありません。</p>

    
  </LegalLayout>
);

export const Privacy = () => (
  <LegalLayout title="プライバシーポリシー">
    <p>慶應ROUTE（以下、「当塾」といいます。）は、本ウェブサイト上で提供するサービス（以下,「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。</p>

    <h3>第1条（個人情報）</h3>
    <p>「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報、及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。</p>

    <h3>第2条（個人情報の収集方法）</h3>
    <p>当塾は、ユーザーが利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレスなどの個人情報をお尋ねすることがあります。また、ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を、当塾の提携先（情報提供元、広告主、広告配信先などを含みます。）などから収集することがあります。</p>

    <h3>第3条（個人情報を収集・利用する目的）</h3>
    <p>当塾が個人情報を収集・利用する目的は、以下のとおりです。</p>
    <ul>
      <li>当塾サービスの提供・運営のため</li>
      <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
      <li>ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等及び当塾が提供する他のサービスの案内のメールを送付するため</li>
      <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
      <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
    </ul>

    <h3>第4条（第三者提供）</h3>
    <p>当塾は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。</p>

    
  </LegalLayout>
);
