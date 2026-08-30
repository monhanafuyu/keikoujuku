import { FaqItem, PricingPlan, StudyPlanItem, DaySchedule } from './types';

export const WORRIES_LIST = [
  {
    id: 'worry-1',
    quote: '志望校は決まったけど、何から始めればいいかわからない',
    detail: '配点や出題傾向を調べても、自分の現在の実力から逆算して今日何をすべきかの道筋が見えない。',
    tag: '学習計画の悩み'
  },
  {
    id: 'worry-2',
    quote: '参考書を買ったものの、途中で挫折してしまう',
    detail: '評判の良い問題集を買っても、ペース配分が分からず1〜2章で止まってしまい自己嫌悪に陥る。',
    tag: '継続・自習の悩み'
  },
  {
    id: 'worry-3',
    quote: '塾に通っているのに、授業以外では勉強できていない',
    detail: '週に数時間の授業を受けて満足してしまい、合否を分ける平日の自習時間が管理できていない。',
    tag: '塾通いの悩み'
  },
  {
    id: 'worry-4',
    quote: '勉強時間は増えたのに、成績・偏差値が伸びない',
    detail: '理解したつもりで基礎が抜けているか、志望校の出題レベルに合わない勉強を繰り返している。',
    tag: '学習効率の悩み'
  },
  {
    id: 'worry-5',
    quote: 'YouTubeやSNSで勉強法を調べすぎて、何が正しいかわからない',
    detail: '人によって言うことが違い、勉強法を探すこと自体に時間を使ってしまっている。',
    tag: '情報過多の悩み'
  }
];

export const SOLUTION_STEPS = [
  {
    stepNumber: '01',
    title: '志望校・現在の学力を徹底分析',
    description: '志望校の出題傾向・科目ごとの配点と、直近の模試・定期テスト結果を比較。合格に必要な「点数ギャップ」を数値化します。',
    iconName: 'Target',
    badge: '現状把握'
  },
  {
    stepNumber: '02',
    title: '合格までの年間学習計画を作成',
    description: '受験本番から逆算し、「いつまでにどの参考書をどのレベルまで仕上げるか」のマイルストーンを月単位で策定します。',
    iconName: 'CalendarRange',
    badge: '逆算設計'
  },
  {
    stepNumber: '03',
    title: '毎週の学習計画に落とし込む',
    description: '「月曜日はターゲット1900を1〜100番、文法3ページ」のように、毎日のやるべき勉強をページ・番号単位で指定します。',
    iconName: 'ListChecks',
    badge: '日割タスク'
  },
  {
    stepNumber: '04',
    title: '進捗確認・確認テストを実施',
    description: '毎日LINEで学習報告を受け、週1回の面談時に口頭試問や確認テストを実施。「やったつもり」を徹底的に排除します。',
    iconName: 'ClipboardCheck',
    badge: '定着チェック'
  },
  {
    stepNumber: '05',
    title: '結果を分析して翌週の計画を修正',
    description: 'テスト結果や学校行事・体調に合わせて学習ペースを微調整。計画倒れを防ぎ、常に最適なペースで合格へ導きます。',
    iconName: 'RefreshCw',
    badge: '改善と進化'
  }
];

export const SAMPLE_STUDENT_PROFILE = {
  grade: '高校2年生（秋〜冬）',
  target: '明治大学 法学部（法律学科）',
  subTargets: '立教大学・法政大学・学習院大学',
  currentScore: '英語 偏差値 52.4 / 国語 55.0 / 日本史 未修範囲多数',
  goalScore: '英語 偏差値 63.0以上 / 共通テスト80%以上',
  weeklyTheme: '【第32週】MARCH基礎完成期：英文法の網羅と語彙600語の高速周回'
};

export const SAMPLE_STUDY_PLAN_ITEMS: StudyPlanItem[] = [
  {
    subject: '英単語',
    material: '英単語ターゲット1900（6訂版）',
    scope: '1〜600番（毎日100語＋週末全復習）',
    dailyDetail: '1日100単語（即答チェック1秒1単語）',
    tag: '暗記・語彙',
    progressPercent: 92
  },
  {
    subject: '英文法',
    material: '指定問題集（Next Stage / Vintage）',
    scope: '第1章〜第5章（時制・助動詞・仮定法・態・準動詞）',
    dailyDetail: '各章20問ずつ、理由付きで口頭説明できるまで反復',
    tag: '文法体系化',
    progressPercent: 85
  },
  {
    subject: '英文解釈',
    material: '入門英文解釈の技術70',
    scope: '1日2題（計14題精読・構文振り）',
    dailyDetail: 'SVOC振りと直訳作成。音読5回必須',
    tag: '構文把握',
    progressPercent: 78
  },
  {
    subject: '英語長文',
    material: '大学入試英語長文ハイパートレーニング Level 2',
    scope: '週5題（月・火・木・金・土 各1題）',
    dailyDetail: '30分計測で解いた後、音読10回＆スラッシュリーディング',
    tag: '読解・演習',
    progressPercent: 80
  },
  {
    subject: '日本史',
    material: '金谷の日本史 なぜと流れがわかる本（古代〜中世）',
    scope: '指定範囲20ページ（院政期〜室町幕府の成立）',
    dailyDetail: '用語の丸暗記ではなく因果関係を図解ノートで整理',
    tag: '通史理解',
    progressPercent: 90
  },
  {
    subject: '確認テスト',
    material: '毎週日曜日 週間オリジナル定着確認テスト',
    scope: '今週指定した全範囲からランダム80問抽出',
    dailyDetail: '合格基準：85%以上（不合格の場合は翌週前半に追試）',
    tag: '客観測定',
    progressPercent: 100
  }
];

export const SAMPLE_WEEKLY_SCHEDULE: DaySchedule[] = [
  {
    day: '月曜日',
    label: 'Mon',
    focus: '基礎のインプット＆週初めスタートダッシュ',
    tasks: [
      { subject: '英語', task: 'ターゲット1900 (1〜100番 3周)', estimatedMinutes: 40, completed: true },
      { subject: '英語', task: '英文法問題集 第1章 時制 (1〜25問)', estimatedMinutes: 45, completed: true },
      { subject: '英語', task: '英文解釈70 例題1・2（構文分析＋音読）', estimatedMinutes: 35, completed: true },
      { subject: '日本史', task: '古代通史 講義本 p.1〜p.6 精読', estimatedMinutes: 50, completed: true }
    ]
  },
  {
    day: '火曜日',
    label: 'Tue',
    focus: '文法定着と長文初見演習',
    tasks: [
      { subject: '英語', task: 'ターゲット1900 (101〜200番 3周)', estimatedMinutes: 40, completed: true },
      { subject: '英語', task: '英文法問題集 第2章 助動詞 (1〜20問)', estimatedMinutes: 45, completed: true },
      { subject: '英語', task: '長文ハイパー2 第1題（時間を測って解答）', estimatedMinutes: 50, completed: true },
      { subject: '日本史', task: '古代通史 講義本 p.7〜p.12＋一問一答', estimatedMinutes: 50, completed: true }
    ]
  },
  {
    day: '水曜日',
    label: 'Wed',
    focus: '中だるみ防止・前日までの総復習日',
    tasks: [
      { subject: '英語', task: 'ターゲット1900 (1〜200番 復習テスト)', estimatedMinutes: 30, completed: true },
      { subject: '英語', task: '英文法 第1〜2章 間違えた問題の解き直し', estimatedMinutes: 40, completed: true },
      { subject: '英語', task: '英文解釈70 例題3・4（音読各5回）', estimatedMinutes: 35, completed: true },
      { subject: '日本史', task: '講義本 p.1〜p.12の因果関係セルフ説明', estimatedMinutes: 45, completed: true }
    ]
  },
  {
    day: '木曜日',
    label: 'Thu',
    focus: '後半範囲の加速と長文音読',
    tasks: [
      { subject: '英語', task: 'ターゲット1900 (201〜300番)', estimatedMinutes: 40, completed: true },
      { subject: '英語', task: '英文法問題集 第3章 仮定法', estimatedMinutes: 45, completed: false },
      { subject: '英語', task: '長文ハイパー2 第2題（復習・構文チェック）', estimatedMinutes: 50, completed: false },
      { subject: '日本史', task: '中世通史 講義本 p.13〜p.18', estimatedMinutes: 50, completed: false }
    ]
  },
  {
    day: '金曜日',
    label: 'Fri',
    focus: '週末テストに向けた仕上げ',
    tasks: [
      { subject: '英語', task: 'ターゲット1900 (301〜400番)', estimatedMinutes: 40, completed: false },
      { subject: '英語', task: '英文法問題集 第4章 態 (受動態・能動態)', estimatedMinutes: 45, completed: false },
      { subject: '英語', task: '英文解釈70 例題5・6', estimatedMinutes: 35, completed: false },
      { subject: '日本史', task: '中世通史 講義本 p.19〜p.20', estimatedMinutes: 40, completed: false }
    ]
  },
  {
    day: '土曜日',
    label: 'Sat',
    focus: '全範囲総復習と弱点補強',
    tasks: [
      { subject: '英語', task: 'ターゲット1900 1〜600番 総点検（苦手単語抽出）', estimatedMinutes: 60, completed: false },
      { subject: '英語', task: '英文法 第1〜5章 弱点問題アタック', estimatedMinutes: 60, completed: false },
      { subject: '英語', task: '長文ハイパー2 第3・4題 実戦演習', estimatedMinutes: 70, completed: false },
      { subject: '日本史', task: '今週の20ページ分 一問一答テスト', estimatedMinutes: 60, completed: false }
    ]
  },
  {
    day: '日曜日',
    label: 'Sun',
    focus: '【確認テスト＆個別面談日】成果の測定と次週計画',
    tasks: [
      { subject: 'テスト', task: '今週の週間確認テスト（80問・制限時間60分）', estimatedMinutes: 60, completed: false },
      { subject: '面談', task: '専属メンターとのオンライン個別面談（45分）', estimatedMinutes: 45, completed: false },
      { subject: '計画', task: '翌週の学習計画確認とタスク登録', estimatedMinutes: 20, completed: false }
    ]
  }
];

export const COMPARISON_ITEMS = [
  {
    category: '授業',
    traditional: '週1〜3回の集団講義または映像視聴がメイン（受け身になりがち）',
    passgate: '授業は行わず、自習で最短で進める参考書学習を徹底管理',
    advantage: 'インプットの時間を最小化し、演習・暗記量を最大化'
  },
  {
    category: '学習計画',
    traditional: '「予習・復習してきてね」と生徒任せで、具体的な日割指定がない',
    passgate: '志望校から逆算し、「今日どの本の何番を解くか」まで日割で完全指定',
    advantage: '「今日何を勉強すればいいか」の迷いがゼロになる'
  },
  {
    category: '参考書選び',
    traditional: '塾オリジナルの分厚いテキストや一律の教材を使用',
    passgate: '市販の優れた名著から、生徒の学力と志望校に最も合う本を厳選',
    advantage: '無駄な教材費をカットし、最短ルートで実力を底上げ'
  },
  {
    category: '自習管理',
    traditional: '自習室はあるが、実際に何をどう勉強しているかはノータッチ',
    passgate: '毎日の勉強開始・終了、勉強時間、完了タスクをLINEで徹底把握',
    advantage: 'サボれない環境と勉強の習慣化を構築'
  },
  {
    category: '進捗確認',
    traditional: '月1回の保護者面談や数ヶ月に1回の模試でのみ確認',
    passgate: '毎週専属メンターが面談し、毎日の進捗率をリアルタイム集計',
    advantage: '遅れが生じた瞬間に軌道修正が可能'
  },
  {
    category: '確認テスト',
    traditional: '定期テスト前や学期末にしか行われず、定着度が測れない',
    passgate: '毎週「指定した範囲」から確認テストを実施（合格基準85%以上）',
    advantage: '「やったつもり」を根絶し、本番で解ける実力を定着'
  },
  {
    category: '勉強方法の改善',
    traditional: '「もっと勉強しなさい」という精神論になりがち',
    passgate: '「なぜ解けなかったか」「ノートの取り方」「暗記の回数」まで具体的に改善',
    advantage: '勉強の質そのものを高め、かけた時間がそのまま結果に出る'
  }
];

export const SERVICES_LIST = [
  {
    icon: 'Compass',
    title: '志望校別学習計画',
    description: '早慶・MARCH・難関国公立の出題傾向と現在の学力差を分析。受験本番までに必要な全タスクを年間・月間・日単位で設計します。',
    tag: '完全オーダーメイド'
  },
  {
    icon: 'Video',
    title: '週1回の個別面談',
    description: '専属メンターが毎週マンツーマンで面談。学習進捗の振り返り、口頭試問による理解度チェック、翌週の計画調整を行います。',
    tag: '1対1の伴走'
  },
  {
    icon: 'Smartphone',
    title: '毎日の進捗管理',
    description: 'LINEや専用フォームで毎日の勉強開始・終了や達成タスクを報告。サボり癖や中だるみを防ぎ、毎日の勉強習慣を定着させます。',
    tag: 'サボらせない仕組み'
  },
  {
    icon: 'BookOpen',
    title: '参考書・問題集選定',
    description: '無数にある市販参考書の中から、あなたの現在の偏差値と志望校レベルに最適な「最短で伸びるルート」を指定します。',
    tag: '教材の迷いを解消'
  },
  {
    icon: 'CheckSquare',
    title: '確認テスト',
    description: '毎週指定した学習範囲からオリジナル確認テストを実施。85%以上の合格ラインを設けることで、「やったつもり」を徹底排除します。',
    tag: '理解度の可視化'
  },
  {
    icon: 'MessageCircleQuestion',
    title: '24時間質問対応',
    description: '自習中にわからない問題や解説の疑問点は、LINEで写真を送ればいつでも質問可能。つまずきをその日のうちに解消します。',
    tag: '疑問を放置しない'
  },
  {
    icon: 'LineChart',
    title: '模試分析・戦略立案',
    description: '学校や予備校で受けた模試の結果を徹底分析。単なる判定ではなく、「どの分野で失点したか」「次は何を補強すべきか」を特定します。',
    tag: 'データに基づく改善'
  },
  {
    icon: 'GraduationCap',
    title: '受験戦略相談',
    description: '共通テスト利用、全学部日程、個別日程、併願校の組み合わせなど、合格可能性を最大化する受験戦略を一緒に組み立てます。',
    tag: '合格率を最大化'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'light',
    name: 'ライトプラン',
    price: 9800,
    targetAudience: '部活が忙しい高1・高2生や、まずは自習習慣をつけたい方向け',
    description: '学習計画の設計と隔週の面談で、勉強の正しい方向性を保つ基本プラン。',
    features: [
      { text: '月2回 オンライン個別面談（40分）', included: true },
      { text: '月間・週間学習計画の作成', included: true },
      { text: '志望校別 参考書・問題集の選定', included: true },
      { text: '定期的な進捗チェック', included: true },
      { text: '毎日のLINE進捗管理', included: false },
      { text: 'いつでもLINE質問対応', included: false },
      { text: '毎週の週間確認テスト', included: false },
      { text: '答案添削・個別指導', included: false }
    ]
  },
  {
    id: 'standard',
    name: 'スタンダードプラン',
    price: 19800,
    badge: 'おすすめ・一番人気',
    isPopular: true,
    targetAudience: 'MARCH・早慶・難関国公立を本気で目指す高1〜高3・既卒生',
    description: '合格に必要な全ての管理を網羅。勉強の迷いを完全になくす王道プラン。',
    features: [
      { text: '週1回 オンライン個別面談（45分）', included: true, highlight: true },
      { text: '一人ひとりに合わせた日割学習計画', included: true, highlight: true },
      { text: '毎日のLINE進捗報告＆モチベーション管理', included: true, highlight: true },
      { text: '24時間いつでもLINE質問対応', included: true, highlight: true },
      { text: '毎週のオリジナル週間確認テスト', included: true, highlight: true },
      { text: '志望校別 参考書・問題集の選定', included: true },
      { text: '模試分析＆受験戦略アドバイス', included: true },
      { text: '保護者向け月次学習レポート共有', included: true }
    ]
  },
  {
    id: 'premium',
    name: 'プレミアムプラン',
    price: 29800,
    badge: '徹底伴走',
    targetAudience: '苦手科目の直接指導や記述対策までトータルで任せたい方',
    description: 'スタンダードの全機能に加え、個別指導・答案添削まで対応する最上位プラン。',
    features: [
      { text: 'スタンダードプランの全サービス', included: true, highlight: true },
      { text: '週1回の個別指導・口頭試問（60分）', included: true, highlight: true },
      { text: '英語・国語・小論文の答案添削指導（無制限）', included: true, highlight: true },
      { text: '難関大特化の二次試験・個別試験対策', included: true },
      { text: '緊急時・直前のZoom質問対応', included: true },
      { text: 'メンターとの優先LINE相談', included: true }
    ]
  }
];

export const STEPS_TO_JOIN = [
  {
    step: 'STEP 1',
    title: '無料学習相談に申し込み',
    description: 'サイトの予約フォームまたはLINEから、希望の日時を選択して簡単1分でお申し込みいただけます。',
    time: '所要時間 1分'
  },
  {
    step: 'STEP 2',
    title: 'オンラインで現状・志望校をヒアリング',
    description: 'Zoomにて、現在の成績や使っている参考書、志望校、日頃の勉強の悩みを詳しくお伺いします。',
    time: '面談時間 30〜45分'
  },
  {
    step: 'STEP 3',
    title: 'あなた専用の学習プランをご提案',
    description: '志望校合格までに必要な参考書ルートと、今週から取り組むべき具体的な勉強計画を無料でお作りします。',
    time: '無料でご提案'
  },
  {
    step: 'STEP 4',
    title: '納得した場合のみ入塾',
    description: '提案内容にご納得いただけた場合のみご入塾手続きに進みます。無理な勧誘や押し売りは一切ありません。',
    time: '即日スタート可能'
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    question: '授業をしないのですか？',
    answer: 'はい、従来の「講義を聞く授業」は行いません。大学受験の合否を分けるのは、授業を聞いている時間ではなく、自分で問題集を解き、暗記し、復習する「自習時間」です。当塾では、その自習時間を最も効率的なものにするために、何を・いつ・どう勉強するかを細かく設計し、毎週のテストと面談で確実に定着させます。'
  },
  {
    question: '普通の個別指導塾や予備校との違いは何ですか？',
    answer: '一般的な塾は「通塾している週数時間」しか面倒を見てくれません。しかし合格に必要な勉強時間は年間1,000〜2,000時間です。当塾は「塾以外の残り160時間の自習」を完全管理する点が決定的に異なります。参考書の指定、毎日の進捗確認、質問対応までトータルで伴走します。'
  },
  {
    question: 'オンラインだけでも受講できますか？地方在住でも大丈夫ですか？',
    answer: 'はい、完全オンラインで全国どこからでも受講可能です。面談や確認テストはZoomを使用し、日々の進捗管理や質問対応はLINEで行います。通塾にかかる移動時間をゼロにできるため、部活動や日々の学校生活と両立しやすくなっています。'
  },
  {
    question: '高校1年生や2年生から入っても早すぎませんか？',
    answer: 'むしろ高1・高2からの受講を強くおすすめしています。早い段階で「正しい勉強法」と「毎日の学習習慣」を身につけることで、高3になった時点で圧倒的なリードを作ることができます。特に英語と数学（または国語・地歴）の基礎を高1・2で固めることが難関大合格の最大の鍵です。'
  },
  {
    question: 'まだ明確な志望校が決まっていなくても大丈夫ですか？',
    answer: 'もちろん大丈夫です。「なんとなくMARCHに行きたい」「理系・文系どちらにするか迷っている」という段階でも、無料相談で適性や興味を整理し、将来の選択肢を狭めない汎用性の高い学習計画からスタートできます。'
  },
  {
    question: '部活や学校行事と両立できますか？',
    answer: 'はい、一人ひとりのスケジュールに合わせて無理のない日割計画を立てます。「平日は部活で2時間しか取れない」「休日にまとめて演習したい」「テスト期間は学校の勉強を優先したい」といった個別事情に柔軟に対応します。'
  },
  {
    question: '途中でプランを変更することはできますか？',
    answer: 'はい、月単位でいつでもプラン変更が可能です。例えば「高2の間はライトプランで基礎習慣をつけ、高3の春からスタンダードやプレミアムに切り替える」といった使い方も歓迎しています。'
  },
  {
    question: '保護者への学習状況の報告はありますか？',
    answer: 'はい、スタンダードプランおよびプレミアムプランでは、月次の学習進捗レポート（確認テストの得点率、タスク達成度、メンターコメント）をご送付します。また、ご希望に応じて三者面談やLINEでのご相談にも対応しておりますので、安心してお任せいただけます。'
  }
];
