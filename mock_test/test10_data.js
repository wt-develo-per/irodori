// test10_data.js - JFT-Basic SSW Mock Test 10 Datastore (50 Questions Grand Finale!)
// Aligned with CEFR A2 / Irodori & Genki Elementary Japanese
// Focus: Comprehensive SSW Master Capstone & Emergency/Disaster Management (総合・特定技能全分野マスター・災害緊急対応)

const jftExamData = [
    // ==========================================
    // SECTION 1: SCRIPT AND VOCABULARY (文字と語彙) - 13 Questions
    // ==========================================
    {
        id: "q1",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "日本は 災害が 多い 国です。強い 【地震】 が 発生した ときは、慌てて 外に 飛び出さず、まず 机の 下に 隠れて 頭を 守ります。【地震】の 正しい 読み方は どれですか。",
        promptEn: "Japan is a country with many disasters. When a strong 【地震】 (earthquake) occurs, do not rush outside in a panic; first hide under a desk and protect your head. What is the reading of 【地震】?",
        options: [
            "じしん (jishin - earthquake / seismic tremor)",
            "じけん (jiken - incident / crime / event)",
            "じこ (jiko - accident / mishap)",
            "じかん (jikan - time / hours)"
        ],
        correct: 0,
        explanation: "「地震（じしん）」means earthquake. Earthquake disaster prevention and safety drills are called「地震防災・避難訓練（じしんぼうさい・ひなんくんれん）」."
    },
    {
        id: "q2",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "火災や 台風の とき、危険な 場所から 安全な 公園や 学校の 体育館などの 場所へ 逃げる ことを 【ひなん】 と 言います。正しい 漢字は どれですか。",
        promptEn: "When fires or typhoons occur, escaping from dangerous places to safe spots like parks or school gymnasiums is called 【ひなん】 (evacuation / taking refuge). Which kanji matches?",
        options: [
            "避難 (hinan - evacuation / taking refuge / finding shelter)",
            "非難 (hinan - criticism / blame / censure)",
            "悲難 (hinan - false word)",
            "飛難 (hinan - flying hazard)"
        ],
        correct: 0,
        explanation: "「避難（ひnan）」means evacuation or taking shelter during emergencies. An evacuation shelter is called a「避難所（ひなんじょ）」."
    },
    {
        id: "q3",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "ビルや 工場で 火事が 起きた とき、緑色の 人が 走っている マークが 光っている 【非常口】 の ドアから 外へ 逃げます。【非常口】の 正しい 読み方は どれですか。",
        promptEn: "When a fire breaks out in a building or factory, escape outside through the door of the 【非常口】 (emergency exit) illuminated by a green running man symbol. What is the reading of 【非常口】?",
        options: [
            "ひじょうぐち (hijōguchi - emergency exit / fire exit)",
            "にちじょうぐち (nichijōguchi - daily entrance)",
            "つうじょうぐち (tsūjōguchi - normal door)",
            "せいじょうぐち (seijōguchi - clean entrance)"
        ],
        correct: 0,
        explanation: "「非常口（ひじょうぐち）」means emergency exit. The green illuminated running man sign (誘導灯) guiding to exits is standard across all Japanese buildings."
    },
    {
        id: "q4",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "小さな 火事（初期消火）を 消す ために 使う、赤い 鉄の ボトルに 消化薬剤が 詰まった 消防用具を 【しょうかき】 と 言います。正しい 漢字は どれですか。",
        promptEn: "The firefighting tool packed with extinguishing agent in a red iron cylinder used to put out small fires (initial firefighting) is called a 【しょうかき】 (fire extinguisher). Which kanji matches?",
        options: [
            "消火器 (shōkaki - fire extinguisher)",
            "消化器 (shōkaki - digestive organs / stomach & intestines)",
            "消火栓 (shōkasen - fire hydrant)",
            "焼火器 (shōkaki - burning tool)"
        ],
        correct: 0,
        explanation: "「消火器（しょうかき）」means fire extinguisher (using kanji 器 for apparatus/tool). Notice that 消化器 means human digestive organs."
    },
    {
        id: "q5",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "職場で 作業員が 倒れて 意識がない ときや、大怪我を した ときは、すぐに １１９番 に 電話して 【救急車】 を 呼びます。【救急車】の 正しい 読み方は どれですか。",
        promptEn: "When a worker collapses unconscious at work or suffers a major injury, immediately call 119 to summon a 【救急車】 (ambulance / emergency vehicle). What is the reading of 【救急車】?",
        options: [
            "きゅうきゅうしゃ (kyūkyūsha - ambulance / medical emergency vehicle)",
            "しょうぼうしゃ (shōbōsha - fire engine / fire truck)",
            "パトカー (patokā - police patrol car)",
            "きゅうこうしゃ (kyūkōsha - express train car)"
        ],
        correct: 0,
        explanation: "「救急車（きゅうきゅうしゃ）」is an ambulance. In Japan, calling 119 summons both ambulances (救急) and fire trucks (火事)."
    },
    {
        id: "q6",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "病院で 診察や 治療を 受ける とき、医療費が ３割負担（７割割引き）に なるよう、窓口で 必ず 健康 【ほけんしょう】 を 提示します。正しい 漢字は どれですか。",
        promptEn: "When receiving examinations or treatment at a hospital, you must present your health 【ほけんしょう】 (insurance card) at the counter so medical fees become a 30% co-pay (70% discount). Which kanji matches?",
        options: [
            "保険証 (health insurance card - hokenshō)",
            "保証書 (hoshōsho - warranty card for appliances)",
            "証明書 (shōmeisho - official certificate / proof document)",
            "学生証 (gakuseishō - student ID card)"
        ],
        correct: 0,
        explanation: "「保険証（ほけんしょう）」or「健康保険証」is the health insurance card. Carrying it is essential for living and working in Japan."
    },
    {
        id: "q7",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "毎月の お給料から、国や 市役所に 納める 所得税や 住民税などの 【税金】 が 控除（引かれる こと）されます。【税金】の 正しい 読み方は どれですか。",
        promptEn: "From your monthly salary, 【税金】 (taxes) such as income tax and resident tax paid to the government or city hall are deducted (withheld). What is the reading of 【税金】?",
        options: [
            "ぜいきん (zeikin - taxes / duties / levies)",
            "よきん (yokin - bank deposit / savings)",
            "そうきん (sōkin - remittance / sending money)",
            "しゃっきん (shakkin - debt / loan / borrowing money)"
        ],
        correct: 0,
        explanation: "「税金（ぜいきん）」means taxes. In Japanese payroll, Income Tax is「所得税（しょとくぜい）」and Resident Tax is「住民税（じゅうみんぜい）」."
    },
    {
        id: "q8",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "入社から ６ヶ月が 経つと、体調が 悪い ときや 国へ 一時帰国する ときに、お給料が 減らされずに 休める 【ゆうきゅう】 休暇が 付与されます。正しい 漢字は どれですか。",
        promptEn: "After 6 months from joining the company, you are granted 【ゆうきゅう】 (paid leave / vacation) allowing you to rest without salary deduction when sick or visiting your home country. Which kanji matches?",
        options: [
            "有給（年次有給休暇 - Yūkyū / paid vacation / paid leave）",
            "無給 (mukyu - unpaid leave / work without pay)",
            "永久 (eikyū - eternity / permanence / forever)",
            "支給 (shikyū - payment / allowance provision)"
        ],
        correct: 0,
        explanation: "「有給（ゆうきゅう）」or「有給休暇（ゆうきゅうきゅうか）」is legally guaranteed paid annual leave under Article 39 of the Japanese Labor Standards Act."
    },
    {
        id: "q9",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "会社に入って 働く とき、給料の 金額や 労働時間、仕事内容などが 書かれた 雇用 【けいやく】 書を よく 読んで サインします。正しい 漢字は どれですか。",
        promptEn: "When joining a company to work, you carefully read and sign the employment 【けいやく】 (contract / agreement) detailing salary amounts, work hours, and job descriptions. Which kanji matches?",
        options: [
            "契約 (keiyaku - contract / compact / employment agreement)",
            "計画 (keikaku - plan / project / schedule)",
            "計算 (keisan - calculation / arithmetic / computation)",
            "経過 (keika - passage of time / progress / development)"
        ],
        correct: 0,
        explanation: "「契約（けいやく）」means contract. An employment contract is called a「雇用契約書（こようけいやくしょ）」."
    },
    {
        id: "q10",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "建設現場や 工場、倉庫などの 現場において、落下物や 転倒から 頭部を 保護する ために 必ず かぶる 「硬い プラスチック製の 安全帽子」 を 何と 言いますか。",
        promptEn: "What is the 'hard plastic safety hat' called that must always be worn at construction sites, factories, and warehouses to protect the head from falling objects or falls?",
        options: [
            "ヘルメット・安全帽（Safety helmet / Hard hat - head protective gear）",
            "ネクタイ（Necktie - formal suit tie）",
            "サングラス（Sunglasses - tinted sun glasses）",
            "マフラー（Muffler / Scarf - winter neck wrap）"
        ],
        correct: 0,
        explanation: "A hard hat safety helmet is called a「ヘルメット」or「安全帽（あんぜんぼう）」. Wearing chin straps tightly (あご紐を締める) is mandatory across all SSW industrial sectors."
    },
    {
        id: "q11",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "労働安全衛生法により、年に １回 必ず 病院や 診療所で 身長・体重・血圧・胸部レントゲンや 血液検査などを 受けて 体の 状態を 調べる ことを 何と 言いますか。",
        promptEn: "Under the Industrial Safety and Health Act, what is it called when you undergo mandatory examination once a year at a hospital/clinic checking height, weight, blood pressure, chest X-ray, and blood tests to check body condition?",
        options: [
            "健康診断（けんこうしんだん - statutory annual medical checkup / health exam）",
            "運転免許試験（うんてんめんきょしけん - driver's license driving exam）",
            "料理教室（りょうりきょうしつ - cooking class / culinary school）",
            "音楽会（おんがくかい - music concert / recital）"
        ],
        correct: 0,
        explanation: "The statutory annual medical exam is called「健康診断（けんこうしんだん）」or「定期健診（ていきけんしん）」. Both employers and workers have a legal duty to conduct/receive it."
    },
    {
        id: "q12",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "日本の 職場で 最も 大切な チームワークの ３大原則、「報告（ほうこく）」「連絡（れんらく）」「相談（そうだん）」 の ３つの 言葉の 頭文字を 組み合わせた 有名な ビジネス標語を 何と 言いますか。",
        promptEn: "What is the famous business slogan combining the first letters of the 3 Golden Rules of Japanese workplace teamwork: 'Hokoku (Report)', 'Renraku (Contact)', and 'Sodan (Consult)'?",
        options: [
            "ホウレンソウ（報告・連絡・相談 - Horenso / Report, Contact, Consult teamwork principle）",
            "キャベツ・レタス（Cabbage & Lettuce - vegetable names）",
            "スキヤキ・テンプラ（Sukiyaki & Tempura - Japanese traditional beef and fried food）",
            "カラオケ・マイク（Karaoke & Microphone - singing entertainment system）"
        ],
        correct: 0,
        explanation: "「ホウレンソウ (Horenso)」stands for 報告 (Report), 連絡 (Contact), and 相談 (Consult). It is the #1 fundamental rule of communication in all Japanese companies."
    },
    {
        id: "q13",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "仕事中（業務中） や 通勤中 に 事故に あって ケガを したり 病気になった とき、病院の 医療費が 全額 無料（０円）に なり、休んだ 期間のお給料の 一部が 国から 補償される 労働保険を 何と 言いますか。",
        promptEn: "What is the labor insurance called where if you suffer an accident, injury, or illness during work or commuting, hospital medical costs become 100% free (0 yen), and a portion of lost wages during leave is compensated by the government?",
        options: [
            "労災保険（労働者災害補償保険 - Rosai / Worker's Accident Compensation Insurance）",
            "生命保険（せいめいほけん - private life insurance policy）",
            "火災保険（かさいほけん - house fire property insurance policy）",
            "自動車保険（じどうしゃほけん - car driving accident insurance policy）"
        ],
        correct: 0,
        explanation: "Worker's Accident Compensation Insurance is called「労災保険（ろうさいほけん）」or「労災 (Rosai)」. By law, using personal health insurance for on-the-job injuries is prohibited; Rosai must be applied."
    },

    // ==========================================
    // SECTION 2: CONVERSATION AND EXPRESSION (会話と表現) - 12 Questions
    // ==========================================
    {
        id: "q14",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "職場で 同僚の 作業員が 倒れて 意識が ありません。あなたが １１９番 に 緊急通報した ところ、消防署の オペレーターから 「火事ですか、救急ですか？」 と 聞かれました。何と 答えて 説明しますか。\nスタッフ：「【　　】！工場の 作業員が 倒れて 意識が ありません！すぐに 来てください！」",
        promptEn: "A coworker collapsed unconscious at work. When you called 119 for an emergency, the fire department dispatcher asked, 'Is this a fire or an ambulance?' How do you answer and explain?\nStaff: '【　　】! A factory worker collapsed and is unconscious! Please come immediately!'"
        ,
        options: [
            "救急です（救急車をお願いします） (kyūkyū desu [kyūkyūsha o onegaishimasu] - It's a medical emergency! [Please send an ambulance!])",
            "火事です（消防車をお願いします） (kaji desu [shōbōsha o onegaishimasu] - It's a fire! [Please send a fire truck!])",
            "ピザの デリバリーを Ｌサイズ ３枚 お願いします (piza no deribarī o eru-saizu sanmai onegaishimasu - Please deliver three L-size pepperoni pizzas)",
            "今の 時間は 午後 ３時のおやつの 時間でございます (ima no jikan wa gogo sanji no oyatsu no jikan de gozaimasu - The current time is 3:00 PM afternoon snack time)"
        ],
        correct: 0,
        explanation: "Emergency 119 communication (119番通報の最初の受け答え): When someone is sick or injured, answer clearly:「救急です！（きゅうきゅうです）人が倒れています！」."
    },
    {
        id: "q15",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "仕事中 に 突然、大きな 地震が 発生して ビルが 激しく 揺れ始めました。防災責任者として、周囲の 作業員や お客様に 大声で 何と 指示を出して 命を守らせますか。\n責任者：「地震だ！みんな 慌てて 走らないで！揺れが 収まる まで、【　　】！」",
        promptEn: "During work, a massive earthquake suddenly hit and the building began shaking violently. As the disaster manager, what instructions do you shout to workers and customers to save their lives?\nManager: 'Earthquake! Everyone don't run in a panic! Until the shaking stops, 【　　】!'"
        ,
        options: [
            "机の 下に 隠れて、頭を 保護して（守って）！ (tsukue no shita ni kakurete, atama o hogo shite [mamotte]! - Hide under desks and protect your heads!)",
            "窓ガラスを 全く 割って、３階の 窓から 外に 飛び降りて！ (madogarasu o zenbu watte, sangai no mado kara soto ni tobiorite! - Smash all windows and jump out from 3rd floor windows!)",
            "エレベーターに ぎゅうぎゅうに 乗って、屋上へ 全速力で 上がって！ (erebētā ni gyūgyū ni notte, okujō e zensoroku de agatte! - Pack tightly into elevators and go up to roof at full speed!)",
            "目を 閉じて みんなで 手を 繋いで、大きな 歌を 歌って 踊り続けて！ (me o tojite minna de te o tsunaide, ōkina uta o utatte odoritsuzukete! - Close eyes, hold hands, sing loud songs and keep dancing!)"
        ],
        correct: 0,
        explanation: "Earthquake emergency survival instructions (地震発生時の安全指示): Protecting the head under desks (机の下に隠れて頭を守る) and never rushing to elevators or windows is the universal #1 rule."
    },
    {
        id: "q16",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "来月、母国の 両親が 日本へ 旅行に 来ることになりました。両親の 案内をする ために ３日間の 有給休暇を 取りたいです。上司（課長）に 何と 丁寧にお願いして 申請しますか。\nスタッフ：「課長、来月 両親が 日本に 来る ので、３日間 【　　】？」",
        promptEn: "Next month, your parents from your home country are coming to Japan for a trip. You want to take 3 days of paid leave to guide them. How do you politely ask and apply to your boss (section manager)?\nStaff: 'Section Manager, next month my parents are visiting Japan, so for 3 days, 【　　】?'"
        ,
        options: [
            "有給休暇を 取らせていただいても よろしいでしょうか (yūkyū kyūka o torasete itadakitemo yoroshii deshō ka - would it be alright if I take paid vacation leave? [keigo])",
            "会社の お金で 私たち 家族の ホテル代と 飛行機代を 全額 払いなさい (kaisha no okane de watashitachi kazoku no hoterudai to hikōkidai o zengaku harainasai - Pay our family's entire hotel and flight bills with company money)",
            "会社を 辞めて 明日から もう 二度と 日本に戻って きません (kaisha o yamete ashita kara mō nidoto nihon ni modotte kimasen - I quit company and will never return to Japan starting tomorrow)",
            "課長の ご自宅の 部屋を 私の 両親のために ３週間 無料で 貸しなさい (kachō no gojitaku no heya o watashi no ryōshin no tame ni sanshūkan muryō de kashinasai - Lend your home bedroom to my parents free for 3 weeks)"
        ],
        correct: 0,
        explanation: "Polite paid leave application (有給休暇の取得申請マナー): Asking permission humbly using causative keigo:「〜日間、有給休暇を取らせていただいてもよろしいでしょうか」."
    },
    {
        id: "q17",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "朝礼で 職長から、「今日から 新しい 機械を 使うから、安全第一で 作業し、もし 異常音や 故障が あったら 自分で 修理せず、すぐに 報告すること！」 と 指示されました。何と 答えますか。\nスタッフ：「【　　】。安全第一で 作業し、異常があれば すぐに 報告いたします。」",
        promptEn: "At morning assembly, the foreman instructed: 'We start using a new machine today, so work safety-first, and if there is any abnormal noise or breakdown, do not repair it yourself; report immediately!' How do you reply?\nStaff: '【　　】. I will work safety-first, and report immediately if there is any abnormality.'"
        ,
        options: [
            "はい、承知いたしました（かしこまりました） (hai, shōchi itashimashita [kashikomarimashita] - Yes, I understand / certainly [humble keigo])",
            "うるさいな！そんな 命令を 聞く 気は 全く ありません (urusai na! sonna meirei o kiku ki wa mattaku arimasen - Shut up! I have zero intention of listening to such orders)",
            "機械が 壊れたら、私が ハンマーで 叩き潰して 爆発させます (kikai ga kowaretara, watashi ga hanmā de tatakitsubushite bakuhatsu sasemasu - If machine breaks, I will smash it with a hammer and make it explode)",
            "異常が あったら、黙って 誰にも 言わずに 帰宅します (ijō ga attara, damatte darenimo iwazu ni kitaku shimasu - If there's an abnormality, I will stay silent, tell no one, and go home)"
        ],
        correct: 0,
        explanation: "Workplace compliance acknowledgement (安全指示への承諾・ホウレンソウの徹底): Humbly confirming supervisor safety orders:「はい、承知いたしました（かしこまりました）」."
    },
    {
        id: "q18",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "あなたは 今日から 新しい 部署（または 新しい 会社）へ 配属される ことになりました。初日の 朝、新しい 職場の上司や 同僚たちの 前で、何と 自己紹介して 挨拶しますか。\nスタッフ：「本日から こちらの 部署で お世話になります、タイ出身の ソムチャイと 申します。【　　】。」",
        promptEn: "You are assigned to a new department (or new company) starting today. On the morning of your first day, how do you introduce yourself and greet your new boss and coworkers?\nStaff: 'Starting today I will be working in this department; my name is Somchai from Thailand. 【　　】.'"
        ,
        options: [
            "一生懸命 頑張りますので、よろしく お願いいたします (isshōkenmei ganbarimasu node, yoroshiku onegai itashimasu - I will work my very hardest, so I look forward to working with you [pleased to meet you])",
            "私は 働きたくないので、今日から 毎日 デスクで お昼寝を します (watashi wa hatarikitakunai node, kyō kara mainichi desuku de ohirune o shimasu - I don't want to work, so I will take afternoon naps at my desk every day starting today)",
            "私が この 会社で 一番 偉いので、皆さん 私に お茶を 淹れなさい (watashi ga kono kaisha de ichiban erai node, minasama watashi ni ocha o irenasai - I am the most supreme person in this company, so all of you brew tea for me)",
            "明日には 辞めて 別の 国へ 行くから、私の 名前を 覚えなくて いいです (ashita ni wa yamete betsu no kuni e iku kara, watashi no namae o oboenakute ii desu - I will quit tomorrow and go to another country, so you don't need to remember my name)"
        ],
        correct: 0,
        explanation: "First day self-introduction etiquette (新職場着任時の自己紹介挨拶): Standard professional greeting:「本日からお世話になります〜と申します。一生懸命頑張りますので、よろしくお願いいたします」."
    },
    {
        id: "q19",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "今月のお給料明細書を 見た ところ、「健康保険料」 と 「厚生年金保険料」 で 思った より お金が 控除（引かれて）されて いました。理由が 知りたいです。店長に 何と 質問しますか。\nスタッフ：「店長、お疲れ様です。この 給料明細の 「健康保険」 と 「厚生年金」 の 控除について、【　　】？」",
        promptEn: "Looking at this month's salary slip, more money than expected was deducted (withheld) for 'Health Insurance' and 'Employee Pension Insurance'. You want to know the reason. How do you ask the store manager?\nStaff: 'Good work, Store Manager. Regarding the Health Insurance and Pension deductions on this salary slip, 【　　】?'"
        ,
        options: [
            "少し 詳しく 教えて（説明して） いただけないでしょうか (sukoshi kuwashiku oshiete [setsumei shite] itadakenai deshō ka - could you please teach [explain] it to me in a little detail? [keigo])",
            "私の お金を 盗んだ 泥棒店長！今すぐ 警察に 逮捕させます (watashi no okane o nusunda dorobō tenchō! imasugu keisatsu ni taiho sasemasu - Thief manager who stole my money! I'll have police arrest you right now)",
            "保険と 年金なんて いらないから、会社の 金庫を 破壊して 奪い取ります (hoken to nenkin nante iranai kara, kaisha no kinko o hakai shite ubaitorimasu - I don't need insurance or pension, so I'll smash company safe and rob it)",
            "給料が 少ないので、お店の レジから 現金を 勝手に １０万円 もらいました (kyūryō ga sukunai node, omise no reji kara genkin o katte ni jūman-en moraimashita - Since salary is low, I arbitrarily took 100,000 yen cash out of store register)"
        ],
        correct: 0,
        explanation: "Asking HR/managers about payroll deductions (給与明細・社会保険控除の質問マナー): Asking calmly for clarification in polite keigo without accusations:「こちらの控除の仕組みについて詳しく教えていただけないでしょうか」."
    },
    {
        id: "q20",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "お客様から、「注文した 商品（または 料理）が 違っている！」 と お叱りの クレームを 受けました。スタッフ（お店や 会社）側の ミスだった 場合、第一声として 何と 深く お詫びしますか。\nスタッフ：「【　　】。こちらの 不手際（ミス）で 大変 ご迷惑を おかけいたしました。」",
        promptEn: "A customer scolded you with a complaint: 'The product (or dish) I ordered is wrong!' When it was a mistake on the staff (store/company) side, what do you say as your first words to apologize deeply?\nStaff: '【　　】. We caused you great inconvenience due to our mistake / clumsiness.'"
        ,
        options: [
            "大変 申し訳ございません（心より 深く お詫び申し上げます） (taihen mōshiwake gozaimasen [kokoro yori fukaku owabi mōshiagemasu] - I am deeply and truly sorry [I offer my heartfelt apologies in keigo])",
            "私の せいじゃない！注文を 間違えた お客様が １００％ 悪いんだ！ (watashi no sei janai! chūmon o machigaeta okyakusama ga hyaku-pāsento waruin da! - Not my fault! The customer who ordered wrong is 100% bad!)",
            "違う 商品でも 同じ 食べ物なんだから、文句を 言わずに 食べなさい！ (chigau shōhin demo onaji tabemono nan dakara, monku o iwazu ni tabenasai! - Even if wrong it's same food, so eat it without complaining!)",
            "文句が ある なら、店から 出ていって 二度と 来ないで ください！ (monku ga aru nara, mise kara dete itte nidoto konaide kudasai! - If you have complaints, get out of store and never come back!)"
        ],
        correct: 0,
        explanation: "Universal customer service complaint apology (クレーム対応・謝罪の第一声): Admitting staff errors humbly with profound keigo:「大変申し訳ございません。こちらの不手際で大変ご迷惑をおかけいたしました」."
    },
    {
        id: "q21",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "朝 起きたら 体温が ３８度の 高熱があり、体が だるくて 咳が 止まりません。出勤できそうに ない ため、始業時間の 前に 職場の上司へ 電話を かけました。何と 報告して 休みの 許可をもらいますか。\nスタッフ：「おはようございます。朝から ３８度の 熱と 咳が ありまして、【　　】？」",
        promptEn: "When you woke up, you had a high fever of 38°C, felt sluggish, and couldn't stop coughing. Since you cannot work, you phoned your boss before work starting hours. How do you report and get permission for sick leave?\nStaff: 'Good morning. Since this morning I have had a 38°C fever and cough, so 【　　】?'"
        ,
        options: [
            "本日は お休みを いただいても よろしいでしょうか（病院で 診察を 受けます） (honjitsu wa oyasumi o itadakitemo yoroshii deshō ka [byōin de shinsatsu o ukemasu] - would it be alright if I take the day off today? [I will visit hospital for examination])",
            "これから １週間、お友達と ディズニーランドへ 遊びに 行っても よろしいでしょうか (korekara isshūkan, otomodachi to dizunīrando e asobi ni gitemo yoroshii deshō ka - may I go play at Disneyland with friends for 1 week?)",
            "私の 代わりに 上司が ２人分の 労働をして、私に 倍のお給料を 払いなさい (watashi no kawari ni jōshi ga futaribun no rōdō o shite, watashi ni bai no okyūryō o harainasai - Boss work 2 people's labor instead of me and pay me double salary)",
            "熱が ４０度 あっても、病院に行かずに 会社へ 走って 出勤すべきでしょうか (netsu ga yonjū-do attemo, byōin ni ikazu ni kaisha e hashitte shukkin subeki deshō ka - even with 40°C fever, should I run to work without visiting hospital?)"
        ],
        correct: 0,
        explanation: "Sick leave telephone notification (体調不良・欠勤連絡のマナー): Proactively calling before shift start:「３８度の熱がありまして、本日はお休みをいただいてもよろしいでしょうか。病院を受診してまた結果を報告します」."
    },
    {
        id: "q22",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "あなたの 「在留カード（特定技能ビザ）」 の 有効期限が あと ２ヶ月で 切れます。出入国在留管理局（入管）へ 「在留期間更新申請」 を 行う ため、会社が 発行する 所属証明書などが 必要です。人事担当者に 何と お願いしますか。\nスタッフ：「人事の ご担当者様、ビザの 在留期間の 更新申請を 行う ので、【　　】？」",
        promptEn: "Your 'Residence Card (SSW visa)' expiration date expires in 2 months. To apply for 'Extension of Period of Stay' at Immigration, you need employment certificates issued by the company. How do you ask HR?\nStaff: 'HR Manager, I will be applying for visa residence period renewal, so 【　　】?'"
        ,
        options: [
            "会社から 必要な 証明書や 書類を 発行して いただけないでしょうか (kaisha kara hitsuyōna shōmeisho ya shorui o hakkō shite itadakenai deshō ka - could you please issue the necessary certificates and documents from company? [keigo])",
            "入管に行く のが 面倒だから、不法滞在で ビザなしで 日本に 住み続けても いいですか (nyūkan ni iku no ga mendō dakara, fuhō taizai de bizanashi de nihon ni sumitsuzuketemo ii desu ka - going to immigration is a pain, so can I live illegally without visa?)",
            "私の 代わりに 社長が 私の 偽物の 在留カードを １万円で 手作りしてください (watashi no kawari ni shachō ga watashi no nisemono no zairyū kādo o ichiman-en de tezukuri shite kudasai - CEO handmake a fake residence card for me for 10,000 yen)",
            "ビザの 更新代として、会社から 私に ボーナス １００万円を いますぐ 振り込んでください (biza no kōshindai toshite, kaisha kara watashi ni bōnasu hyakuman-en o imasugu furikonde kudasai - As visa renewal fee, transfer 1 million yen bonus into my bank now)"
        ],
        correct: 0,
        explanation: "SSW visa renewal administrative request (在留資格更新の手続きと書類依頼): Requesting statutory corporate certificates politely:「ビザ更新申請のため、所属機関の証明書を発行していただけないでしょうか」."
    },
    {
        id: "q23",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "施設内で 突然、「ジリリリリ！」 と けたたましい 非常ベル（火災報知器）が 鳴り響きました。周囲の 作業員が パニックになって 走り出そうとしています。何と 声を かけて 避難させますか。\n責任者：「非常ベルが 鳴っている！火災かもしれない！みんな 【　　】！」",
        promptEn: "Inside the facility, a loud emergency alarm bell (fire alarm) suddenly rang 'Jriririri!' Surrounding workers are panicking and about to start running. How do you call out to evacuate them?\nManager: 'The emergency alarm is ringing! Might be a fire! Everyone, 【　　】!'"
        ,
        options: [
            "慌てて 走らないで！落ち着いて 誘導灯の 緑の 非常口から 階段で 避難しよう！ (awatete hashiranaide! ochitsuite yūdōtō no midori no hijōguchi kara kaidan de hinan shiyō! - Don't run in a panic! Stay calm and evacuate via stairs through green exit lights!)",
            "火事が 終わる まで、みんなで エレベーターの中に 閉じこもって 眠り続けよう！ (kaji ga owaru made, minna de erebētā no naka ni tojikomotte nemuritsuzukeyō! - Until fire ends, let's lock ourselves in elevators and keep sleeping!)",
            "火事の 炎が きれいだから、スマホで 動画を 撮って SNSに ライブ配信しよう！ (kaji no honō ga kirei dakara, sumaho de dōga o totte esuenuesu ni raibu haishin shiyō! - Since fire flames are pretty, let's record smartphone videos and livestream on social media!)",
            "倉庫の 段ボールと 扇風機を 持ってきて、火を さらに 大きく 燃え上がらせよう！ (sōko no danbōru to senpūki o mottekite, hi o sarani ōkiku moeagaraseyō! - Bring cardboard and electric fans to make fire burn even bigger!)"
        ],
        correct: 0,
        explanation: "Fire alarm emergency leadership (火災報知器発報時の避難誘導): Preventing panic running and elevator usage; guiding calmly to green emergency exits and staircases (非常口から階段で避難)."
    },
    {
        id: "q24",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "自分の 担当していた 梱包や 清掃の 作業が 予定より 早く 終わりました。隣の レーンを見ると、同僚が たくさんの 荷物に 追われて とても 忙しそうに しています。何と 声を かけて チームワークを発揮しますか。\nスタッフ：「佐藤さん、私の 作業が 全て 終わりましたので、【　　】？」",
        promptEn: "Your assigned packing or cleaning work finished earlier than scheduled. Looking at the next lane, your coworker is overwhelmed with heaps of work looking very busy. How do you offer help displaying teamwork?\nStaff: 'Mr. Sato, all my work is finished, so 【　　】?'"
        ,
        options: [
            "何か 私に お手伝いできる ことは ございますか（一緒に行いましょうか） (nanika watashi ni otetsudai dekiru koto wa gozaimasu ka [issho ni okonaimashō ka] - is there anything I can do to help you? [shall we do it together?])",
            "佐藤さんが 苦しそうに 働いている のを見る と、私は とても 気持ちがいいです (satō-san ga kurushisō ni hataraite iru no o miru to, watashi wa totemo kimochi ga ii desu - Watching Mr. Sato working in suffering makes me feel so wonderful)",
            "私は 仕事が終わったので、佐藤さんの 隣の 椅子で ３時間 漫画を 読みます (watashi wa shigoto ga owatta node, satō-san no tonari no isu de sanjikan manga o yomimasu - My work is done, so I will sit in chair next to you reading manga for 3 hours)",
            "佐藤さんの 動きが 遅いから 罰金として 私に お昼ご飯の 牛丼を おごりなさい (satō-san no ugoki ga osoi kara bakkin toshite watashi ni ohirugohan no gyūdon o ogorinasai - You move too slow, so as a penalty pay for my beef bowl lunch)"
        ],
        correct: 0,
        explanation: "Workplace teamwork and mutual assistance (職場内協力・応援の申し出): Proactively offering help when personal tasks finish:「私の作業が終わりましたので、何かお手伝いできることはございますか」."
    },
    {
        id: "q25",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "仕事終わり に、先輩から 「今夜、みんなで 居酒屋に 飲みに行かない？」 と 誘われました。しかし、あなたは 今夜、日本語の 資格試験の 勉強をする 予定がある ため 行けません。関係を 壊さずに 何と 丁寧に 断りますか。\nスタッフ：「お誘い ありがとうございます。あいにく 今夜は 予定（勉強）が ございまして、【　　】。」",
        promptEn: "After work, a senior invited you: 'Want to go drinking at an izakaya tonight with everyone?' However, you cannot go because you planned to study for a Japanese qualification exam tonight. How do you decline politely without hurting relationships?\nStaff: 'Thank you so much for the invitation. Unfortunately I have plans (studying) tonight, so 【　　】.'"
        ,
        options: [
            "大変 申し訳ございません。また 次の 機会に ぜひ よろしくお願いいたします (taihen mōshiwake gozaimasen. mata tsugi no kikai ni zehi yoroshiku onegai itashimasu - I apologize deeply. Please definitely invite me again on the next opportunity [keigo])",
            "あなたたち みたいな 嫌いな 人たちと 一緒に お酒を 飲む 気は 一切 ありません (anatatachi mitaina kiraina hitotachi to issho ni osake o nomu ki wa issai arimasen - I have zero intention of drinking alcohol with people I hate like you guys)",
            "私が 居酒屋に行く 代わりに、お酒の お金を 全て 現金 １万円で 私に ください (watashi ga izakaya ni iku kawari ni, osake no okane o subete genkin ichiman-en de watashi ni kudasai - Instead of me going to izakaya, give me all drinking money in 10,000 yen cash)",
            "お酒は 飲まないから、先輩の 家の 部屋で 朝まで 一緒に テレビゲームを しましょう (osake wa nomanai kara, senpai no ie no heya de asa made issho ni terebi gēmu o shimashō - I don't drink alcohol, so let's play video games together in your bedroom until morning)"
        ],
        correct: 0,
        explanation: "Polite invitation refusal etiquette (業務外の誘い・飲み会の丁寧な断り方): Thanking for the invite and softening the refusal with 'another opportunity':「お誘いありがとうございます。あいにく用事がありまして、また次の機会にお願いいたします」."
    },

    // ==========================================
    // SECTION 3: LISTENING COMPREHENSION (聴解) - 12 Questions
    // ==========================================
    {
        id: "q26",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】工場の 建設現場で 作業員が 足場から 転落しました。あなたが １１９番 に 緊急通報した ところ、消防署の オペレーターから 質問されています。オペレーターに 何市 何町 の どこへ 救急車を 呼んで、作業員は どんな 状態だ と 伝えましたか。",
        promptEn: "[Audio Simulation] A worker fell from scaffolding at a factory construction site. When you called 119 for an emergency, the fire department dispatcher asked questions. To what City and Town address did you summon the ambulance, and in what condition did you report the worker was?",
        audioScript: "オペレーター：「１１９番 消防署です。火事ですか、救急ですか？」\n通報者：「【「救急（きゅうきゅう）」】 です！人が 落ちて 倒れました！」\nオペレーター：「落ち着いて ください。場所（住所）は どこですか？」\n通報者：「場所は、【「千代田市 桜町 １丁目 ２番３号」 にある 「サクラ建設の 工事現場」】 です！」\nオペレーター：「分かりました。倒れた 方は どう されましたか。意識や 呼吸は ありますか？」\n通報者：「作業員が 【「３メートルの 足場から 転落して 頭を 打ちました！声を かけても 返事が なく、「意識が ありません（意識不明）」！」】 呼吸は 少し しています！急いで 救急車を お願いします！」",
        audioScriptEn: "Dispatcher: '119 Fire Dept. Is this a fire or ambulance?'\nCaller: ''AMBULANCE'! A person fell and collapsed!'\nDispatcher: 'Please stay calm. Where is the location (address)?'\nCaller: 'The location is the 'SAKURA CONSTRUCTION SITE' located at '1-2-3 SAKURACHO, CHIYODA CITY'!'\nDispatcher: 'Understood. What happened to the victim? Does he have consciousness and breathing?'\nCaller: 'A worker 'FELL FROM 3-METER SCAFFOLDING AND HIT HIS HEAD! Even when called he doesn't answer; 'HE IS UNCONSCIOUS (unresponsive)'!' He is breathing slightly! Hurry send an ambulance!'",
        options: [
            "【「千代田市 桜町 １丁目」 の 工事現場】 で、作業員が 足場から 落ちて 【「意識が ない（意識不明）」】 状態 (At construction site in 【'SAKURACHO, CHIYODA CITY'】, worker fell from scaffolding and is in 【'UNCONSCIOUS'】 state)",
            "【「東京タワーの 屋上」】 で、作業員が 【「お昼の ラーメンを食べすぎて お腹がいっぱいになって 眠っている」】 状態 (At top of Tokyo Tower, worker 'ate too much ramen for lunch, got full, and is sleeping')",
            "【「ハワイの 海の ビーチ」】 で、作業員が 【「サーフィンをして 楽しんで 踊っている」】 状態 (At Hawaii ocean beach, worker is 'enjoying surfing and dancing around')",
            "【「富士山の 山頂の 氷の上」】 で、作業員が 【「ペンギンと 一緒に かくれんぼをして 遊んでいる」】 状態 (On ice at Mt. Fuji summit, worker is 'playing hide and seek with penguins')"
        ],
        correct: 0,
        explanation: "Emergency 119 call protocol (119番通報時の正確な住所・状態の伝達): Providing exact address (千代田市桜町) and critical medical signs (足場から転落・意識なし) ensures rapid paramedic response."
    },
    {
        id: "q27",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】商業ビル内で 震度５強の 地震が 発生しました。館内放送（PAアナウンス）で、防災センターから 緊急の 避難指示が 流れています。ビル内の お客様や スタッフは、「何を使って」 どこへ 避難しなさい と アナウンスされましたか。",
        promptEn: "[Audio Simulation] An earthquake of intensity 5-strong occurred in a commercial building. Over the PA announcement, emergency evacuation instructions are broadcasting from the disaster center. What did the announcement tell building customers and staff to 'use' to evacuate to where?",
        audioScript: "館内放送：「緊急地震速報！ただいま 当ビル周辺で 大きな 地震が 発生しました。お客様、スタッフの 皆様は 落ち着いて 指示に従ってください。いいか、【地震や 火災の 発生時、ビルの 「エレベーター」 は 途中の 階で 停止して 閉じ込められる 危険があるため、「使用は 絶対に 禁止」】 です！皆様は、【必ず 誘導灯のある 「非常階段（階段）」 を 使って、歩いて １階まで 降り、「ビルの 外にある 公園の 避難広場」 へ 集合・避難】 してください！走ったり 押したり せず、階段で 落ち着いて 避難してください！」",
        audioScriptEn: "PA Broadcast: 'Early Earthquake Warning! A large earthquake just occurred around this building. Customers and staff please stay calm and follow instructions. Listen, DURING EARTHQUAKES OR FIRES, BUILDING 'ELEVATORS' CARRY HAZARDS OF STOPPING ON MID-FLOORS TRAPPING PEOPLE inside, so 'ELEVATOR USE IS STRICTLY PROHIBITED'! Everyone MUST USE 'EMERGENCY STAIRCASES (stairs)' WITH EXIT LIGHTS, WALK DOWN TO THE 1ST FLOOR, AND GATHER/EVACUATE AT THE 'EVACUATION PLAZA IN THE OUTDOOR PARK OUTSIDE THE BUILDING'! Do not run or push; evacuate calmly via stairs!'",
        options: [
            "【「エレベーターは 使用禁止」】 であり、必ず 【「非常階段（階段）」】 を 使って 【「ビルの 外の 公園（広場）」】 へ 避難する (【'ELEVATOR USE IS BANNED'】; MUST use 【'EMERGENCY STAIRCASES (stairs)'】 to evacuate to 【'OUTDOOR PARK PLAZA'】)",
            "【「エレベーターに １００人 乗り込んで」】、ビルの 【「一番 高い 屋上の ヘリポート」】 へ 全速力で 上がって 避難する (Pack 100 people into elevators, go up at full speed to 'highest rooftop heliport' to evacuate)",
            "【「窓ガラスを まどから 全て 割って」】、用意した 【「パラシュートや 風船を使って 空中へ 飛び降りて」】 避難する (Smash all windows and evacuate by 'jumping out into midair using parachutes and balloons')",
            "【「非常口の ドアを 全て 鍵で ロックして 封鎖」】 し、全員 【「トイレの 個室の中に 閉じこもって 朝まで 待つ」】 (Lock and seal all emergency exit doors, and everyone 'locks themselves inside toilet stalls waiting until morning')"
        ],
        correct: 0,
        explanation: "Earthquake/fire evacuation rules (地震火災時のエレベーター使用禁止と非常階段避難): Elevators stop during power outages trapping occupants. Evacuating on foot via emergency stairs to open parks is standard."
    },
    {
        id: "q28",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】会社の 人事部長が、特定技能（SSW）の 従業員に 給与明細の 計算を 説明しています。今月の 「総支給額（お給料の 総額）」 から、社会保険料や 税金などで 合計 いくら が 「控除（ひかれて）」 され、実際に 銀行に 振り込まれる 「手取り額（てどりがく）」 は いくら に なりましたか。",
        promptEn: "[Audio Simulation] The company HR director is explaining salary slip calculations to an SSW employee. From this month's 'Total Gross Salary', how much IN TOTAL was 'deducted (withheld)' for social insurance and taxes, and how much became the 'Take-Home Pay (Tedorigaku)' actually transferred to the bank?",
        audioScript: "人事部長：「グエンさん、今月の お給料明細の 説明だよ。まず 基本給や 残業代を 合わせた 今月の 【「総支給額（総額）」 は 「２５０,０００円 （２５万円）」】 だね。そして ここから 国の 法律に基づき、【「健康保険料」「厚生年金」「雇用保険」「所得税」「住民税」 の 社会保険と 税金が、【合計 「４０,０００円 （４万円）」 控除（マイナス）】】 される。したがって、【２５万円から ４万円を 引いた、【実際に 銀行口座に 振り込まれる 「手取り額（てどりがく）」 は、「２１０,０００円 （２１万円）」】】 に なるんだ！保険証も 使えるから 安心して 働いてね！」",
        audioScriptEn: "HR Director: 'Mr. Nguyen, explaining this month's salary slip. First, combining base pay and overtime, this month's 'TOTAL GROSS SALARY IS 250,000 YEN (250k)'. And from here under national laws, social insurance and taxes comprising 'Health Insurance, Pension, Employment Insurance, Income Tax, and Resident Tax' ARE 'DEDUCTED (minus) BY A TOTAL OF 40,000 YEN (40k)'. Therefore, subtracting 40k from 250k, THE 'TAKE-HOME PAY (Tedorigaku)' ACTUALLY TRANSFERRED TO YOUR BANK ACCOUNT BECOMES '210,000 YEN (210k)'! You can use your insurance card too, so work with peace of mind!'",
        options: [
            "総支給 ２５万円 から、【社会保険・税金が 合計 「４万円」 控除（引かれ）】、実際の 【手取り額は 「２１万円」】 になった (From gross 250k, 【social insurance/taxes total '40k yen' were deducted】, making actual 【Take-Home Pay '210,000 yen'】)",
            "総支給 ２５万円 から、【税金が 「２４万円」 引かれ】、実際の 【手取り額は 「１万円」】 しか 残らず 破産した (From gross 250k, 240k was deducted for taxes, leaving actual Take-Home Pay at only 10,000 yen causing bankruptcy)",
            "控除は 一切 ０円で、【社長から ボーナス 「１,０００万円」 が 追加されて 手取りが １,０２５万円】 になった (Zero deductions; CEO added a 10 million yen bonus making Take-Home Pay 10.25 million yen)",
            "お給料のお金は なくなり、【全額 「会社の 売れ残った 白菜と 大根 ５００キログラム」】 で 現物支給された (Yen salary disappeared, and you were paid entirely in kind as '500 kg of unsold company napa cabbage and radishes')"
        ],
        correct: 0,
        explanation: "Understanding Japanese payroll math (給与明細・総支給と控除・手取り額の計算): Gross pay 250,000 yen - Statutory deductions (控除合計４万円) = Take-home pay of 210,000 yen (手取り額２１万円)."
    },
    {
        id: "q29",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】消防署の 指導員が、消火器を使った 「初期消火（しょきしょうか）」 の 正しい 手順を 熱血指導しています。消火器の 黄色い ピンを 抜いて ホースを 構えた 後、火の 「どの 部分」 に 向けて レバーを 強く 握りなさい と 説明しましたか。",
        promptEn: "[Audio Simulation] A fire department instructor is passionately teaching proper procedures for 'Initial Firefighting' using a fire extinguisher. After pulling the yellow pin and aiming the hose, toward 'which part' of the fire did he explain you must aim when strongly squeezing the lever?",
        audioScript: "指導員：「おい！消火器の 訓練だ！いいか、火事を発見したら まず 大声で 「火事だー！」 と 叫んで 周りに 知らせろ！そして 消火器を持って 火に 近づき、手順 ①： 上の 黄色い 「安全ピン」 を 上に 引き抜く！手順 ②： ホースを 外して 火に向ける！ここで 最重要コツだ！【ホースの ノズルを、炎の 上の 煙や 赤い 火の先 に 向けても 絶対に 火は 消えないぞ！必ず 火が 燃え上がっている 大元の 【「火の 根元（ねもと・燃えている 物体の 付け根）」】 を 狙って ホースを 向け、レバーを 強く 握って 消化薬剤を ほうきで 掃くように 吹きかけろ！】 【「火の 根元（大元）を 狙え！」】 覚えておけ！」",
        audioScriptEn: "Instructor: 'Hey! Fire extinguisher drill time! Listen, if you discover a fire, first shout loudly 'Fire!' to alert everyone around! Then grab extinguisher, approach fire: Step 1: Pull out top yellow 'safety pin'! Step 2: Detach hose and aim at fire! Here is the critical secret! IF YOU AIM THE HOSE NOZZLE AT THE SMOKE OR RED FLAME TIPS IN THE AIR, THE FIRE WILL NEVER GO OUT! YOU MUST ALWAYS AIM AT THE VERY SOURCE OF THE FIRE, THE 'BASE OF THE FIRE (Nemoto / root where the object is burning)', and squeeze the lever hard sweeping the extinguishing agent like a broom! 'Aim at the BASE of the fire!' Remember this!'",
        options: [
            "炎の 上の 煙や 火の先 ではなく、必ず 【「火の 根元（ねもと・燃えている 物体の 付け根・大元）」】 を 狙って 噴射する (Not smoke or flame tips; ALWAYS aim at the 【'BASE OF THE FIRE (Nemoto / root where object is burning)'】 and spray)",
            "火の 根元ではなく、【「天井の 上に 漂っている 黒い 煙の 天井部分」】 だけ を 狙って 噴射する (Not fire base; aim and spray only at 'the ceiling area where black smoke is floating above')",
            "火には 向けず、【「自分の 顔と 作業着の 上」 に 消火剤を 全面 吹きかけて 真っ白な 雪男になる】 (Don't aim at fire; spray extinguishing powder all over 'your own face and work clothes' turning into a white snowman)",
            "消火器を 使わずに、【「自分の 口の 中に 含んだ １口の お茶を 火に向かって プッと 吹きかける」】 (Don't use extinguisher; 'take a sip of tea in your mouth and spit it pfft toward the fire')"
        ],
        correct: 0,
        explanation: "Fire extinguisherPASS technique (消火器の正しい使い方・火の根元を狙う): Aiming at flames or smoke is ineffective. You must sweep the extinguishing agent at the base/root of the burning fuel (火の根元を狙う)."
    },
    {
        id: "q30",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】会社の 産業看護師さんが、来週 行われる 「定期健康診断（けんこうしんだん）」 の 受診ルールについて 説明しています。正確な 血液検査や 胃の 検査を 行う ため、受診する 「前日の 夜 何時」 以降は 朝ごはんや ジュースを 一切 飲んだり 食べては いけませんか。",
        promptEn: "[Audio Simulation] The company occupational nurse is explaining rules for next week's 'Statutory Annual Health Checkup'. To conduct accurate blood tests and stomach examinations, after 'what time on the night before' must you completely stop eating breakfast or drinking juice?",
        audioScript: "看護師さん：「みなさん、来週 水曜日は 年に １回の 【「法定 定期健康診断」】 の 日です！当日は サクラ病院へ 朝 ９時までに 集合してください。ここで 検査を 正しく 行う ための 絶対の 約束（注意事項）です！血液の 血糖値や 胃の レントゲン検査を 行う ため、【「前日の 夜 ２１：００（午後 ９時）」 以降は、当日の 朝の 健診が終わる まで、【お食事（朝ごはん）や お菓子、ジュース、コーヒーなどを 一切 口にしてはいけません（絶食ルール）！】】 ※ お水 や お茶だけは 飲んでも 大丈夫です。もし 朝ご飯を 食べてしまうと 検査結果が 異常値になって 再検査になるので、【「前日 夜 ２１時 以降は 絶食！」】 を 必ず 守ってください！」",
        audioScriptEn: "Nurse: 'Everyone, next Wednesday is our annual 'Statutory Health Checkup' day! Please gather at Sakura Hospital by 9 AM that day. Here is an absolute promise (caution) to perform examinations accurately! To check blood sugar levels and stomach X-rays, AFTER '21:00 PM (9 PM) ON THE NIGHT BEFORE', UNTIL THE CHECKUP FINISHES ON THE MORNING OF THE EXAM, YOU MUST NOT EAT ANY MEALS (breakfast), SNACKS, JUICE, OR COFFEE AT ALL (Fasting rule)! *Drinking plain water or tea is okay. If you eat breakfast, test results show abnormal values requiring re-testing, so strictly follow 'FASTING AFTER 21:00 PM THE NIGHT BEFORE'!'",
        options: [
            "【「前日の 夜 ２１：００（午後 ９時）」】 以降は、健診が終わる まで 【お食事や ジュースは 一切 禁止（お水・お茶のみ 可）】 (After 【'21:00 PM (9 PM) ON THE NIGHT BEFORE'】, meals/juice are banned until exam finishes [only plain water/tea OK])",
            "【「当日の 朝 ８：５９（健診 １分前）」】 までなら、【焼肉ステーキと ケーキを ５人前 お腹いっぱい 食べてよい】 (Up until 8:59 AM on exam day [1 min before], you can eat 5 servings of BBQ steak and cake full)",
            "健診の 前日は、【「夜通し 朝まで お酒を １０リットル 飲み続けて、徹夜で カラオケを 歌い続ける」】 べきである (On night before checkup, you should drink 10 liters of alcohol all night until morning singing karaoke all night)",
            "お食事は 自由だが、【「健診の ３日前から お水や お茶などの 水分を 一滴も 飲まずに ミイラになる」】 べきである (Meals are free, but you should drink zero drops of water/tea for 3 days before exam turning into a dehydrated mummy)"
        ],
        correct: 0,
        explanation: "Medical checkup fasting instructions (健康診断前日の絶食注意事項): To avoid false blood sugar and stomach cholesterol spikes, fasting after 21:00 PM the night before (前日夜２１時以降の飲食禁止) is statutory."
    },
    {
        id: "q31",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】工場の 工場長が、大型台風の 接近に伴い、当日の 勤務時間の 変更と 帰宅指示を 全館アナウンスしています。電車や バスが 夕方 １８：００に 全面運休する ため、工場長は 何時に 仕事を 切り上げて どう しなさい と 指示しましたか。",
        promptEn: "[Audio Simulation] Due to an approaching major typhoon, the plant manager is making a facility-wide announcement changing today's work hours and ordering evacuation home. Since trains and buses will suspend all service at 18:00 PM evening, at what time did the plant manager order work to end and what should everyone do?",
        audioScript: "工場長：「緊急全館アナウンス！従業員の 皆さん、手をとめて 聞いてくれ。現在、超大型の 台風 １０号が 関東地方に 猛スピードで 接近している！気象庁の 暴風警報に基づき、【JR電車や 路線バスの 公共交通機関は、「本日 夕方 １８：００（午後６時） 以降、全ての 運転を 取りやめる（計画運休）」】 と 発表した！いいか、夜まで 働くと 帰宅難民になって 帰れなくなる！したがって、【当工場の 本日の 業務は、「午後 １５：００（午後３時）」 で 「即時 全面終了（終業）」 とする！】 １５時になったら 直ちに 機械を 停止し、【「寄り道を せず、電車が 動いている うちに 寄り道しないで まっすぐ 自宅へ 帰宅」】 しなさい！」",
        audioScriptEn: "Plant Manager: 'Emergency facility broadcast! All employees stop work and listen. Currently, Super Typhoon No. 10 is approaching the Kanto region at high speeds! Under the Weather Agency storm warning, PUBLIC TRANSIT INCLUDING JR TRAINS AND BUSES ANNOUNCED THEY WILL 'SUSPEND ALL SERVICE (planned cancellation) AFTER 18:00 PM (6 PM) TONIGHT'! Listen, if you work until night you'll become stranded commuters and can't go home! Therefore, TODAY'S OPERATIONS AT THIS PLANT WILL 'IMMEDIATELY & COMPLETELY END (close) AT '15:00 PM (3 PM)'! At 15:00 stop machines immediately and 'GO STRAIGHT HOME TO YOUR HOUSES WITHOUT STOPPING BY ANYWHERE while trains are still running'!'",
        options: [
            "本日の 業務は 【「午後 １５：００（午後３時）」 で 全面終了】 となり、【「電車が 動いている うちに 寄り道せず 直帰（帰宅）」】 する (Work ends completely at 【'15:00 PM (3 PM)'】; everyone must 【'go straight home without stops while trains run'】)",
            "本日の 業務は 【「夜中 ２４時まで ９時間 延長」】 され、【「台風の 暴風の 中、工場の 屋上で 踊り続ける」】 (Work is extended 9 hours until midnight 24:00, and everyone keeps dancing on factory rooftop in typhoon storm winds)",
            "電車が 止まるので、【「会社の トラックを 奪って、みんなで 高速道路を 時速 １８０キロで 暴走して 帰る」】 (Since trains stop, hijack company trucks and everyone race home down highway at 180 km/h)",
            "帰れなくなるので、【「工場の 食堂の 床に デンツを 張って、これから １ヶ月間 工場に 住み込みで 暮らす」】 (Since you can't go home, pitch camping tents on factory cafeteria floor and live inside factory for 1 month)"
        ],
        correct: 0,
        explanation: "Disaster emergency work closure (台風・自然災害時の計画運休に伴う早期帰宅指示): Responding to public transit 18:00 suspensions by closing operations early at 15:00 PM (午後１５時終業・直帰指示) ensures worker safety."
    },
    {
        id: "q32",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】建設現場で、職長が 「労災（労働災害補償保険・ろうさい）」 の 申請ルールについて 説明しています。仕事中 に ケガをした とき、自分で 治療費を 払ったり 隠したりしてはいけない理由として、労災保険を 使う と 病院の 医療費は どう なると 言いましたか。",
        promptEn: "[Audio Simulation] At a construction site, the foreman is explaining rules for applying for 'Rosai (Worker's Accident Compensation Insurance)'. When injured during work, as the reason why you must never pay medical bills yourself or hide injuries, what did he say happens to hospital medical costs when using Rosai insurance?",
        audioScript: "職長：「おい、みんな！仕事中 の ケガについての 最重要ルールだ！いいか、もし 作業中 に 指を 切ったり、転んで 骨折したり、どんな 小さな ケガでも、【決して 自分の 個人の 健康保険証を使って 病院を受診したり、自分で お金を 払ったり、ケガを 隠したり しては いけない！】 なぜなら、仕事中 や 通勤中 の ケガは、【国が 定める 「労災保険（労働者災害補償保険）」 が 適用され、病院での 診察料・治療費・お薬代が 「全額 １００％ 無料（自己負担 ０円！）」】 で 受けられる からだ！その 上、休んだ 期間のお給料も 国から 補償される！ケガを したら 即座に 会社（職長）に 報告しろ！会社から 労災の 公式書類を 発行する からな！」",
        audioScriptEn: "Foreman: 'Hey everyone! Most critical rule regarding on-the-job injuries! Listen, if during work you cut your finger, fall and break a bone, or suffer any small injury, NEVER USE YOUR PERSONAL HEALTH INSURANCE CARD AT HOSPITALS, NEVER PAY MONEY YOURSELF, AND NEVER HIDE INJURIES! Why? Because injuries during work or commuting are covered by government 'ROSAI INSURANCE (Worker's Accident Compensation)', making hospital examination fees, treatment bills, and medicine costs '100% COMPLETELY FREE (0 yen out-of-pocket co-pay)!' Furthermore, lost wages during rest periods are compensated by the state! If injured, report instantly to the company (foreman)! We will issue official Rosai vouchers!'",
        options: [
            "仕事中 の ケガは 【「労災保険」 が 適用され、病院の 医療費・治療費が 「全額 １００％ 無料（自己負担 ０円）」】 で 受けられる (Work injuries are covered by 【'ROSAI INSURANCE', making hospital medical/treatment fees '100% FREE (0 yen co-pay)'】)",
            "仕事中 の ケガは 【「罰金対象」 になり、治療費の 他に 「会社へ １００万円の 罰金を 払って 即座に クビになる」】 (Work injuries are subject to fines; besides medical bills you pay a 1 million yen fine to company and get fired instantly)",
            "病院には 行かせてもらえず、【「ケガをした 傷口に お醤油と お酢を 塗って 痛みに 耐えながら １０時間 働く」】 (You aren't allowed to visit hospital; you apply soy sauce and vinegar to wounds and work 10 hours enduring pain)",
            "労災を 使う と、【「自分の お給料が 毎月 半分に 減らされ、一生 会社の トイレ掃除を する 刑罰がつく」】 (Using Rosai causes your salary to be halved monthly, with a lifetime punishment of cleaning company toilets)"
        ],
        correct: 0,
        explanation: "Worker's Accident Compensation law (労災保険の補償内容・医療費自己負担ゼロ): On-the-job injuries (`業務災害`) are covered 100% by Rosai insurance (医療費全額無料・自己負担０円). Hiding workplace accidents (`労災隠し`) is a criminal offense."
    },
    {
        id: "q33",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】工場の 上司が、日本の 職場で 最も 重要な チームワークの 鉄則 「ホウレンソウ（報告・連絡・相談）」 について 新入社員を 指導しています。作業中 に 「機械の 異常音や 自分の ミス」 に 気づいた とき、最も してはいけない 「最悪の 行動」 は なんだと 叱りましたか。",
        promptEn: "[Audio Simulation] A factory boss is teaching newcomers about 'Horenso (Report, Contact, Consult)', the most critical iron rule of teamwork in Japanese workplaces. When noticing 'abnormal machine noises or your own mistakes' during work, what did he scold is the 'worst possible action' that must NEVER be done?",
        audioScript: "上司：「佐藤君！なぜ ２時間も 前に 機械から 変な 異音（カラカラ音）が 出ていた のに、私に 報告しなかったんだ！いいか、日本の 職場において、【最も 重要な のは 「ホウレンソウ（報告・連絡・相談）」 の 徹底】 だ！仕事中 に 機械の 異常に 気づいた ときや、自分が 注文を 間違える ミスをした とき、【「上司に 怒られる のが 怖いから と いって、黙って 隠したり、自分１人の 判断で 勝手に 修理しようとしたり 放置すること」 は 絶対に 許されない 最悪の 行動】 だ！隠すと 後から 大爆発や 数百万円の大損失になる！異常や ミスに 気づいたら、【「１秒でも 早く、ありのままを 正直に 上司に 報告・相談する」】！いいな！」",
        audioScriptEn: "Boss: 'Mr. Sato! Why didn't you report to me when the machine was making a weird clattering noise 2 hours ago! Listen, in Japanese workplaces, THE MOST IMPORTANT THING IS ENFORCING 'HORENSO' (Report, Contact, Consult)! When you notice machine abnormalities during work, or make a mistake confusing orders, 'BEING AFRAID OF BEING SCOLDED BY THE BOSS AND THUS STAYING SILENT, HIDING IT, TRYING TO FIX IT ARBITRARILY ON YOUR OWN JUDGMENT, OR LEAVING IT' IS THE WORST POSSIBLE ACTION NEVER ALLOWED! Hiding things leads to major explosions or multi-million yen losses later! When you notice abnormalities or mistakes, 'REPORT & CONSULT THE BOSS HONESTLY AS IT IS WITHOUT A SECOND DELAY'! Understand!'",
        options: [
            "【「怒られる のが 怖いから と 黙って 隠したり、自分１人の 判断で 勝手に 修理しようとしたり 放置する」】 こと (【STAYING SILENT/HIDING IT out of fear of scolding, trying to fix arbitrarily on your own judgment, or leaving it】)",
            "異常や ミスに 気づいた とき、【「１秒でも 早く、ありのままの 状態を 正直に 上司へ 報告・相談する」】 こと (When noticing abnormalities or mistakes, 'reporting and consulting the boss honestly as it is without a second delay')",
            "仕事中 に 【「分からない ことが あれば、先輩や リーダーに 遠慮せずに 「教えてください」 と 質問する」】 こと (During work, 'if there is something you don't know, asking seniors/leaders without hesitation saying 'Please teach me'')",
            "チームの 仲間と 【「毎日の 朝礼で 「おはようございます！」 と 明るい 元気な 挨拶を 交わし合う」】 こと (With team members, 'exchanging bright, energetic greetings saying 'Good morning!' at daily morning assembly')"
        ],
        correct: 0,
        explanation: "Japanese Horenso teamwork ethics (ホウレンソウの徹底・隠蔽の禁止): Trying to hide mistakes or fix machine failures alone without reporting to superiors (自己判断での隠蔽・放置) is the worst breach of trust in Japanese business."
    },
    {
        id: "q34",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】会社の 総務担当者が、特定技能（SSW）の 従業員に 「在留期間更新（ビザ更新）」 の スケジュールについて アドバイスしています。出入国在留管理局（入管）への ビザ更新の 申請手続きは、「在留カードの 有効期限の 何ヶ月前」 から 申請（提出）を する ことが できますか。",
        promptEn: "[Audio Simulation] The company general affairs staff is advising an SSW employee about the 'Visa Residence Period Renewal' schedule. Starting from 'how many months before the Residence Card expiration date' can visa renewal applications be submitted to the Immigration Services Agency?",
        audioScript: "総務担当者：「ガルシアさん、お疲れ様！あなたの 【「在留カード（特定技能ビザ）」 の 有効期限を 確認したら、「今年の ８月 ３１日」】 に なっているね。ビザの 更新は とても 大切だから 準備を 始めよう！いいか、出入国在留管理局（入管）への 【「在留期間の 更新申請手続」 は、有効期限が 切れる 当日ではなく、【「有効期限の 『３ヶ月前』 の 日から、入管へ 申請書類を 提出する ことが 可能」】】 なんだよ！つまり、８月３１日の ３ヶ月前である 【「５月 ３１日」 から 申請できる】！ギリギリに なると 不法滞在の リスクがあるから、来週中 に 納税証明書と 雇用契約書を 準備して 早く 申請しようね！」",
        audioScriptEn: "General Affairs: 'Ms. Garcia, good work! Checking your 'RESIDENCE CARD (SSW visa)' expiration date, it says 'AUGUST 31ST OF THIS YEAR'. Visa renewal is vital so let's start preparing! Listen, regarding 'Residence Period Extension Applications' to Immigration, instead of waiting for the expiration day, 'YOU CAN SUBMIT APPLICATION DOCUMENTS TO IMMIGRATION STARTING FROM THE DAY '3 MONTHS BEFORE' THE EXPIRATION DATE'! In other words, 3 months before Aug 31st means you can apply starting 'MAY 31ST'! Waiting until the last minute carries illegal overstay risks, so let's prepare tax certificates and employment contracts next week and apply early!'",
        options: [
            "在留カードの 有効期限の 【「『３ヶ月前』 の 日から」】、入管へ 更新申請書類を 提出する ことが 可能である (It is possible to submit renewal documents to Immigration starting from the day 【'3 MONTHS BEFORE'】 the expiration date)",
            "有効期限が 【「完全に 切れて 不法滞在になってから 『３年後』」】 に、初めて 警察署へ 行って 申請する (You apply at the police station for the first time '3 YEARS AFTER the expiration date completely expires and you become an illegal overstayer')",
            "日本に 【「入国した その日の 午後」】 に、空港の トイレの 中で 自分で 在留カードに ハンコを押して 更新する (On 'the afternoon of the day you enter Japan', you update it by stamping your residence card yourself inside airport toilet)",
            "更新は なので、【「１回 ビザを取ったら 一生 １００年間 死ぬまで 何もしなくても 永遠に 日本に 住める」】 (No renewal needed; 'once you get a visa you can live in Japan forever for 100 years until death without doing anything')"
        ],
        correct: 0,
        explanation: "Immigration legal compliance (在留期間更新申請の受付期間): Applications for Extension of Period of Stay (`在留期間更新許可申請`) are accepted by Immigration starting 3 months prior to expiration (有効期限の３ヶ月前から受付開始)."
    },
    {
        id: "q35",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】社員寮の 管理人さんが、寮に 住む 外国人スタッフたちに ゴミ出しの ルールと 不法投棄の 警告を 行っています。月曜日の 朝 ８時までに 出す 「燃える ごみ（紙くず・生ごみ）」 の 袋の中に、何を 絶対に 混ぜて 捨てては いけないと 警告しましたか。",
        promptEn: "[Audio Simulation] The dormitory manager is warning foreign staff living in the dorm about garbage collection rules and illegal dumping. In the 'burnable trash (paper/food waste)' bags put out by Monday 8 AM, what did he warn MUST NEVER be mixed inside?",
        audioScript: "管理人さん：「寮生のみんな、今週も ゴミ出しの マナーを守ってくれて ありがとう！ここで 命に関わる 重大な 注意だ！毎週 【月曜と 木曜の 朝 ８時までは 「燃える ごみ（生ごみ・紙くず）」】 の 収集日だ。しかし、先週 誰かが 燃える ごみの 袋の中に、【「スプレー缶（殺虫剤・ヘアスプレー）」 や 「使い捨てライター」、「リチウムイオン電池（モバイルバッテリー）」 を 分別せずに 隠して 捨てていた！】 いいか、これらを 燃えるごみに 混ぜると、ごみ収集車（パッカー車）が 圧縮した 瞬間、【中で ガスが 漏れて 大爆発し、収集車と 運転手さんが 大炎上する 「火災死亡事故」 が 起きる！】 スプレー缶や 電池は 必ず 別袋で 「危険物・資源ごみ」 に 分別しろ！絶対だぞ！」",
        audioScriptEn: "Manager: 'Dorm residents, thanks for following garbage manners this week! Here is a life-threatening major warning! Every MONDAY AND THURSDAY BY 8 AM IS 'BURNABLE TRASH (food/paper waste)' collection day. However, last week someone secretly threw 'SPRAY CANS (pesticides, hairspray)', 'DISPOSABLE LIGHTERS', and 'LITHIUM-ION BATTERIES (power banks)' mixed into burnable trash bags without sorting! Listen, if you mix these into burnable trash, the moment the garbage compression truck crushes the bags, GAS LEAKS INSIDE AND EXPLODES CAUSING A MAJOR 'INFERNO FIRE FATALITY ACCIDENT' burning the truck and driver! Spray cans and batteries must ALWAYS be sorted into separate bags as hazardous/recyclable waste! Absolutely follow this!'",
        options: [
            "【「スプレー缶」 や 「ライター」、「リチウムイオン電池（モバイルバッテリー）」】 （※ 収集車の中で 爆発・火災する ため） (【'SPRAY CANS', 'LIGHTERS', and 'LITHIUM-ION BATTERIES (power banks)'】 [*Because they explode and catch fire in garbage trucks])",
            "お昼のお弁当の 【「残った ご飯粒 や キャベツの 葉っぱ、リンゴの 皮」】 などの 生ごみ (Food waste like 'leftover rice grains, cabbage leaves, and apple peels' from lunch bento boxes)",
            "鼻を かんだ 【「使用済みの 柔らかい ティッシュペーパーや オフィスの コピー用紙くず」】 (Used soft tissue paper from blowing nose and office photocopying paper scraps)",
            "スーパーの レジで もらった 【「紙製の お買い物袋や 汚れた 紙コップ」】 ('Paper shopping bags and dirty paper cups' received at supermarket registers)"
        ],
        correct: 0,
        explanation: "Community dormitory waste rules (ごみ収集車火災防止・スプレー缶と電池の分別禁止): Aerosol cans, gas lighters, and rechargeable lithium-ion batteries mixed into burnable trash explode in compression trucks (パッカー車爆発火災事故)."
    },
    {
        id: "q36",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】職場で 作業員が 突然 倒れ、心臓が 停止（心肺停止）しました。救護リーダーが 「AED（自動体外式除細動器・エーイーディー）」 を 持ってきて 救命措置を 指示しています。AEDの 電源を入れた 後、２枚の 「電極パッド（シール）」 を 倒れた 患者の 「どこの 部分」 に 貼り付けなさいと 指示しましたか。",
        promptEn: "[Audio Simulation] A worker suddenly collapsed at work with cardiac arrest (heart stopped). The rescue leader brought an 'AED (Automated External Defibrillator)' and is ordering life-saving measures. After turning on the AED power, to 'which part' of the collapsed patient did he instruct to attach the 2 'electrode pads (stickers)'?",
        audioScript: "救護リーダー：「大変だ！鈴木さんが 倒れて 心臓と 呼吸が 止まっている！誰か １１９番 通報と、玄関の 【「AED（自動体外式除細動器）」】 を 持ってきて！よし、AEDが 届いた ぞ！私が 今から 胸骨圧迫（心臓マッサージ）を 続ける！佐藤さん、手順 ①： 【まず AEDの 「フタを開けて 電源ボタンを押して！」】 手順 ②： 【患者の 「シャツを 脱がせて 素肌（胸の 皮膚）を 直接 出して！」】 そして 手順 ③： 【パッドの 絵（イラスト）に 描いて ある 通り、【「１枚目の パッドを 『患者の 右胸（右の 鎖骨の 下）』 に 貼り、２枚目の パッドを 『患者の 左胸の 斜め下（左の 脇腹の 近く）』 の 素肌に 直接 強く 貼り付けて！」】】 パッドを 貼ったら AEDが 自動で 音声指示を 出す から、絶対に 患者から 手を 離せ！」",
        audioScriptEn: "Leader: 'Emergency! Mr. Suzuki collapsed and his heart and breathing stopped! Someone call 119 and bring the 'AED (Automated External Defibrillator)' from the entrance! Okay, AED is here! I will continue chest compressions (heart massage)! Mr. Sato, Step 1: 'OPEN AED LID AND PRESS POWER BUTTON!' Step 2: 'TAKE OFF HIS SHIRT EXPOSING HIS BARE SKIN (chest skin) DIRECTLY!' Step 3: Exactly as drawn in the pad illustrations, 'ATTACH THE 1ST PAD TO 'THE PATIENT'S RIGHT CHEST (below right collarbone)', AND ATTACH THE 2ND PAD STRONGLY DIRECTLY ONTO THE BARE SKIN OF 'THE PATIENT'S LOWER LEFT CHEST (near left ribcage/flank)'!' Once pads are attached AED gives voice instructions automatically, so everyone stand clear of patient!'",
        options: [
            "シャツを 脱がせて 素肌を 出し、【１枚を 「右胸（右鎖骨の下）」、２枚目を 「左胸の 斜め下（脇腹近辺）」】 の 直接 皮膚に 貼る (Remove shirt exposing bare skin; attach 1 directly to 【'RIGHT CHEST (below collarbone)' and 2nd to 'LOWER LEFT CHEST (near flank)'】)",
            "シャツや コートを 着た ままで、【「服の 背中と お尻の ポケットの 上」】 に テープで 貼り付ける (Leave shirt and coat on; tape them onto 'the back of his clothes and over his back hip pockets')",
            "患者の 体ではなく、【「救護作業をしている 佐藤さん 自身の おでこと 両手」】 に パッドを 貼り付ける (Not on patient's body; attach pads onto 'the forehead and hands of Mr. Sato who is performing rescue')",
            "パッドを 貼らずに、【「患者の 顔の 上 に 冷たい アイスクリームと 氷水を たっぷり 乗せる」】 (Don't attach pads; 'put plenty of cold ice cream and ice water on top of the patient's face')"
        ],
        correct: 0,
        explanation: "Emergency AED defibrillator protocol (AED電極パッドの正しい貼付位置): Electrode pads must be applied directly to bare skin: upper right chest (右鎖骨下) and lower left chest/flank (左脇腹近辺) so electricity flows diagonally through the heart."
    },
    {
        id: "q37",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】会社の 創立記念式典で、社長が 「特定技能（SSW）２号」 への 昇格を果たした 外国人リーダーたちへ 祝辞と 将来への 期待を 述べています。特定技能 １号（上限 ５年）と 違い、「特定技能 ２号（SSW No. 2）」 の 国家試験に 合格して ビザを 取得すると、どのような 素晴らしい 特典（権利）が 得られますか。",
        promptEn: "[Audio Simulation] At the company anniversary ceremony, the CEO is giving a congratulatory address and expressing future expectations to foreign leaders who achieved promotion to 'Specified Skilled Worker Grade 2 (SSW No. 2)'. Unlike SSW No. 1 (5-year limit), when you pass national exams and acquire the 'SSW No. 2 visa', what amazing benefits (rights) do you obtain?",
        audioScript: "社長：「本日、当社の 特定技能スタッフ １０名が、介護、ビル清掃、製造、建設、農業、外食、物流などの 各分野において、【難関の 「特定技能 ２号（技能検定 １級・現場監督者）」 の 国家試験に 見事 合格】 された ことを 心から お祝い申し上げます！本当に おめでとう！いいか、これまでの 「特定技能 １号」 は、日本で 働ける 期間が 「最長 ５年間 まで」 で、家族を 呼ぶ ことも できませんでした。しかし、皆さんが 取得した 【「特定技能 ２号（SSW No. 2）」 は違います！【「在留期間の 上限が なく（何度でも ビザ更新が可能！）」】 に なり、さらに 【国に いる 「配偶者（夫・妻）や 子供たち（家族）」 を 日本に 呼び寄せて 一緒に 暮らす ことが 認められ、将来は 「日本の 永住権（永住ビザ）」 を 取得する 道】】 が 開かれる のです！日本の 未来を 担う リーダーとして、これからも 共に 頑張りましょう！」",
        audioScriptEn: "CEO: 'Today, I offer my heartfelt congratulations to our 10 SSW staff members who successfully passed the difficult national exams for 'SPECIFIED SKILLED WORKER GRADE 2 (SSW No. 2 / Grade 1 skill test & Site Supervisor)' across Kaigo, Building Cleaning, Manufacturing, Construction, Agriculture, Hospitality, and Logistics! Congratulations! Listen, conventional 'SSW No. 1' restricted working periods in Japan to 'up to 5 years max' without family sponsorship. However, the 'SSW NO. 2' YOU ACQUIRED IS DIFFERENT! You obtain 'NO UPWARD LIMIT ON RESIDENCE PERIOD (you can renew visas an unlimited number of times!)', furthermore 'YOU ARE PERMITTED TO BRING YOUR 'SPOUSE (husband/wife) AND CHILDREN (family)' FROM YOUR HOME COUNTRY TO LIVE TOGETHER IN JAPAN, OPENING THE PATH TO ACQUIRING 'JAPANESE PERMANENT RESIDENCY (Permanent Visa)' in the future'! As leaders shouldering Japan's future, let's keep doing our best together!'",
        options: [
            "【「在留期間の 上限が なくなり（更新制限なし）」】、【「配偶者や 子供（家族）を 日本に 呼び寄せて 一緒に 暮らし、将来 永住権を目指す 道」】 が開かれる (【'NO LIMIT ON RESIDENCE PERIOD (unlimited renewals)'】; can 【BRING SPOUSE/CHILDREN (family) to live together in Japan, opening path to Permanent Residency】)",
            "合格した 翌日に、【「強制的に 日本の ビザが 取り消され、二度と 日本に入国できなくなる 片道切符で 追放される」】 (On day after passing, your Japanese visa is forcibly cancelled and you are deported on a one-way ticket never able to enter Japan again)",
            "お給料は なくなり、【「毎日 ２４時間 休まずに 会社の 寮の 監視塔に 立って 無給で 警備する 義務」】 がつく (Salary disappears, and you get an unpaid obligation to stand on dormitory watchtowers guarding 24 hours daily without rest)",
            "特典はなく、【「ただ 会社の 社長の 個人名義の 借金 １億円を 自分の 代わりに 返済する 義務」】 だけがつく (No benefits; you only gain an obligation to pay back CEO's personal debt of 100 million yen on your own shoulders)"
        ],
        correct: 0,
        explanation: "SSW Visa Capstone (特定技能２号の特権・在留期間上限撤廃と家族帯同・永住への道): SSW No. 2 removes the 5-year limit (`在留期間上限なし`), allows bringing spouses/children (`家族帯同可能`), and leads to Permanent Residency (`永住権取得`)."
    },

    // ==========================================
    // SECTION 4: READING COMPREHENSION (読解) - 13 Questions
    // ==========================================
    {
        id: "q38",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【地震・火災発生時の 緊急避難マニュアル】 を読んで 質問に 答えてください。\n\n――― 【総務省消防庁・防災安全規定： 地震・火災時の 避難行動４原則】 ―――\nビルや 工場において 地震や 火災などの 災害に 遭遇した 際は、パニックによる 将棋倒しや 煙の中毒死を 防ぐ ため、以下の 「お・か・し・も」 の ４大原則を 厳守してください。\n\n◆ 【避難時の 標語 「お・か・し・も」】：\n・【お】 ＝ 【「おさない（押さない）」】 前の 人を 強く 押し倒すと 将棋倒しになって 圧死します。\n・【か】 ＝ 【「かけない（駆けない・走らない）」】 建物内を 慌てて 走ると 転倒・衝突します。\n・【し】 ＝ 【「しゃべらない（喋らない）」】 大声で 叫ぶと 指示アナウンスが 聞こえなくなります。\n・【も】 ＝ 【「もどらない（戻らない・最重要！）」】 一度 外へ 避難した 後、【「お財布や 携帯電話（スマホ）、パスポートなどの 貴重品を 部屋に 忘れた から と いって、燃えている 建物や 揺れている ビルの 中に 絶対に 「戻ってはいけない（取りに戻らない）」！」】 忘れ物を取りに 戻って 炎や 煙に 巻かれ、死亡する 事故が 後を 絶ちません！命が 最優先です。\n――――――――――――――――――――――――――\n\n質問：地震や 火災の ときに 逃げる 標語 「お・か・し・も」 の 「も（もどらない）」 とは、どのような 意味で 絶対に してはいけない と 規定されていますか。",
        promptEn: "Read the 【Emergency Evacuation Manual for Earthquakes & Fires】 below and answer the question.\n[Fire & Disaster Management Agency 4 Principles] To prevent stampedes and smoke poisoning during disasters, strictly follow 'O-Ka-Shi-Mo': O = Osanai (Don't push), Ka = Kakenai (Don't run inside), Shi = Shaberanai (Don't talk). Mo = Modoranai (Never Turn Back - CRITICAL!): Once evacuated outside, 'EVEN IF YOU FORGOT YOUR WALLET, MOBILE PHONE (smartphone), OR PASSPORT IN THE ROOM, YOU MUST NEVER 'GO BACK (turn back to retrieve them)' INTO THE BURNING OR SHAKING BUILDING!' Fatalities where people return for forgotten belongings and get trapped by flames/smoke never end! Life is #1 priority!\n\nQuestion: What is the meaning of 'Mo (Modoranai / Never turn back)' in the evacuation slogan 'O-Ka-Shi-Mo' during earthquakes and fires, defined as something that must NEVER be done?",
        options: [
            "一度 外へ 避難した 後、【「お財布や スマホなどの 忘れ物を取りに、燃えている 建物の中に 絶対に 戻ってはいけない」】 (Once evacuated outside, 【'YOU MUST NEVER GO BACK INTO BURNING BUILDINGS TO RETRIEVE FORGOTTEN WALLETS/PHONES'】)",
            "避難の ときに、【「お昼ご飯の 焼き肉と ケーキを 食べる のを もったいないから と 諦めてはいけない」】 (When evacuating, 'you mustn't give up eating your BBQ steak and cake lunch because it's a waste')",
            "避難した 後、【「自分の 部屋の ベッドに戻って、朝まで １０時間 もう 一度 お昼寝をしてはいけない」】 (After evacuating, 'you mustn't return to your room bed and take another 10-hour nap until morning')",
            "避難の 途中で、【「友達と 一緒に ビルの 屋上で もも太郎の 劇や ダンスを 踊って 遊んではいけない」】 (Mid-evacuation, 'you mustn't play around dancing Peach Boy theater plays with friends on building rooftop')"
        ],
        correct: 0,
        explanation: "Disaster evacuation rules (避難標語「おかしも」の徹底・戻らないルール): 'Mo' stands for Modoranai (`戻らない`). Returning into burning or earthquake-damaged structures to retrieve valuables causes smoke inhalation deaths."
    },
    {
        id: "q39",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【１１９番 通報ガイド： 「火事ですか？救急ですか？」 の正しい答え方】 を読んで 質問に 答えてください。\n\n――― 【日本の 緊急通報マニュアル： １１９番 と １１０番 の 違い】 ―――\n日本で 事故や 災害に あった 際、１分 １秒を 争う 緊急通報の 番号を 正しく 使い分ける ことが 命を 救う 鍵です。\n\n◆ 【緊急電話番号の 使い分け （絶対に 間違えない こと！）】：\n1. 【「１１９番 （消防署・救急隊）」】：\n・【「火事（火災）」】 を 消してもらう 消防車を 呼ぶ とき。\n・【「急病・ケガ人・倒れた 人・交通事故の 負傷者」】 を 病院へ 運ぶ 【「救急車（きゅうきゅうしゃ）」】 を 呼ぶ とき！\n\n2. 【「１１０番 （警察署・ポリス）」】：\n・【「泥棒・強盗・万引き・空き巣・喧嘩・不審者」】 などの 【「犯罪・事件」】 や、ケガ人の ない 交通事故の 警察調査を 依頼する とき！\n\n※ もし 作業員が 大ケガをして 倒れている のに、【「間違えて １１０番 （警察） に 電話を かけてしまうと、警察から 消防署へ 転送される ため、救急車の 到着が 数分間も 遅れて 死亡する」】 ことになります！「急病・大けが・火事 ＝ １１９番！」 を 徹底してください。\n――――――――――――――――――――――――――\n\n質問：職場で 作業員が 機械に 挟まれて 大けがをし、意識不明で 倒れています。すぐに 病院へ 運ぶ 「救急車（きゅうきゅうしゃ）」 を 呼ぶ ためには、何番に 緊急電話を かけなければなりませんか。",
        promptEn: "Read the 【119 Emergency Call Guide】 below and answer the question.\n[Japan Emergency Call Manual: Difference Between 119 and 110] 1. '119 (Fire Dept / Paramedics)': When calling fire trucks to put out 'Fires'. When calling 'Ambulances (Kyūkyūsha)' to transport 'Sudden illness, injured persons, collapsed people, traffic accident victims' to hospitals! 2. '110 (Police Dept / Police)': When reporting 'Crimes / Incidents' like 'Thieves, robbers, shoplifting, burglary, fistfights, suspicious persons', or requesting police investigation for traffic accidents without injuries! *If a worker suffers a major injury and is collapsed, 'CALLING 110 (Police) BY MISTAKE CAUSES CALL TRANSFER TO FIRE DEPT, DELAYING AMBULANCE ARRIVAL BY SEVERAL CRITICAL MINUTES CAUSING DEATH'! Enforce 'Illness/Major Injury/Fire = 119!'\n\nQuestion: A worker at your workplace suffered a major injury trapped in a machine and is collapsed unconscious. To summon an 'Ambulance (Kyūkyūsha)' to rush him to the hospital immediately, what emergency number must you dial?",
        options: [
            "【「１１９番」 （消防署・救急車・火事の 通報番号）」】 に 電話を かける (Dial 【'119' (Fire Dept / Ambulance / Fire reporting emergency number)】)",
            "【「１１０番」 （警察署・泥棒や 強盗事件の 通報番号）」】 に 電話を かける (Dial '110' [Police Dept / thief and robbery crime reporting number])",
            "【「１１７番」 （時報・現在の 正しい 時刻を 音声で 教えてくれる 番号）」】 に 電話を かける (Dial '117' [Time service / number telling you current correct time by voice])",
            "【「１７７番」 （天気予報・明日の お天気を 教えてくれる 番号）」】 に 電話を かける (Dial '177' [Weather forecast / number telling you tomorrow's weather condition])"
        ],
        correct: 0,
        explanation: "Japan emergency dialing numbers (119番と110番の使い分け): Medical emergencies (`救急・急病・ケガ`) and building fires (`火災`) require calling **119** (`消防署`). Calling 110 (`警察署`) is only for crimes/robberies."
    },
    {
        id: "q40",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【給与明細書（きゅうよめいさいしょ）の見方と「控除（こうじょ）」の仕組み】 を読んで 質問に 答えてください。\n\n――― 【外国人労働者の ための 労働法・税金ガイド： 給与明細の 見方】 ―――\n日本の 会社で 働く と、毎月のお給料日に 「給与明細書」 が 配布されます。明細書には ３つの 大きな 柱が あります。\n\n1. 【支給の 部 （総支給額・総額）】： 基本給、残業手当（時間外手当）、夜勤手当、資格手当、通勤交通費などの 合計金額。\n2. 【控除の 部 （こうじょ・引かれる お金）】： 法律に基づいて 給料から 差し引かれる お金。\n・【「社会保険料」】： 「健康保険料（病院３割負担）」 「厚生年金保険料（将来の年金・帰国時の脱退一時金）」 「雇用保険料（失業手当）」\n・【「税金」】： 「所得税（国への税）」 「住民税（住んでいる 市役所・区役所への税）」\n3. 【差引支給額 （手取り額・てどりがく）】：\n【「総支給額（総額）」 から、社会保険料や 税金などの 「控除額合計」 を 差し引いた（マイナスした）、『実際に あなたの 銀行口座に 振り込れて あなたが 自由に 使える お金』】 の こと！これを 一般的に 【「手取り（てどり）」】 と 呼びます。\n――――――――――――――――――――――――――\n\n質問：給与明細書において、基本給や 残業代を 合わせた 「総支給額」 から、社会保険料や 所得税・住民税などの 「控除額」 を 引いた 後に、実際に 銀行口座に 振り込まれる あなたが 自由に 使える お金の ことを 何と 呼びますか。",
        promptEn: "Read the 【Understanding Japanese Salary Slips & Deductions】 below and answer the question.\n[Labor Law & Tax Guide for Foreign Workers] On payday you receive a 'Salary Slip'. It has 3 main pillars: 1. Payments Section (Total Gross Pay): Base pay, overtime pay, night shift allowance, qualification allowance, commuting expenses. 2. Deductions Section (Kōjo / Withheld money): Money subtracted by law. Social Insurance: Health Insurance (30% hospital co-pay), Employee Pension (future pension/Lump-sum Withdrawal Payment upon return), Employment Insurance. Taxes: Income Tax (state), Resident Tax (city hall). 3. Net Payment Amount (Take-Home Pay / Tedorigaku): 'THE MONEY SUBTRACTING 'TOTAL DEDUCTIONS' (social insurance/taxes) FROM 'TOTAL GROSS PAY', WHICH IS 'ACTUALLY TRANSFERRED TO YOUR BANK ACCOUNT AND AVAILABLE FOR YOU TO FREELY USE''! This is commonly called 【'Take-Home Pay (Tedori)'】!\n\nQuestion: On a salary slip, what is the money called that remains after subtracting social insurance and tax 'Deductions' from the 'Total Gross Pay' (base pay + overtime), representing the actual money transferred to your bank account that you can freely spend?",
        options: [
            "差引支給額・【「手取り額（てどりがく・手取り）」】 (Net Payment Amount / 【'TAKE-HOME PAY (Tedorigaku / Tedori)'】)",
            "会社の 借金・【「大赤字 負債額（ふさいがく）」】 (Company Debt / 'Massive Deficit Liability Amount')",
            "銀行の 【「住宅ローン 返済利息額（りそくがく）」】 (Bank's 'Mortgage Loan Repayment Interest Amount')",
            "スーパーの 【「お買い物 ポイント 還元カード残高」】 (Supermarket's 'Shopping Reward Point Card Balance')"
        ],
        correct: 0,
        explanation: "Japanese payroll accounting terminology (給与明細書の構造・総支給額・控除額・手取り額): Gross pay minus statutory tax/insurance deductions (`控除`) equals net take-home pay (`手取り額 / 差引支給額`)."
    },
    {
        id: "q41",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【初期消火における 消火器の正しい使い方（ピン・ホース・レバー）】 を読んで 質問に 答えてください。\n\n――― 【消防防災訓練テキスト： 消火器による 初期消火の 限界基準】 ―――\n火災が発生した場合、炎が 小さいうちであれば 消火器を使って 自分で 火を 消す 「初期消火（しょきしょうか）」 が 有効です。しかし、消火器の 性能と 限界を 知っておかなければ 命を 落とします。\n\n◆ 【消火器の 噴射時間と 射程距離】：\n通常の 業務用 粉末消火器が 消化薬剤を 噴射できる 時間は、【「わずか 約 １５秒間」】 しか ありません！距離は ３～５メートル程度です。\n\n◆ 【「初期消火の 限界」 と 避難開始の 決定基準 （最重要！）】：\n消火器で 消せる のは、火が 床や 机、カーテンの下の方で 燃えている 最初の 段階 だけです！もし 【「燃え上がった 炎の 高さ が、部屋の 『天井（てんじょう）』 に 届いて（到達して） しまった 場合」】 や、煙が 部屋いっぱいに 充満した場合、【もう 消火器では 絶対に 火は 消せません（初期消火の 限界超過）！】\n※ 【炎が 天井に 届いたら、直ちに 消火活動を 諦め（中止し）、消火器を 捨てて 「非常口から 外へ 全速力で 避難して 自分の 命を守る」】 こと！これが 消防庁が 定める 命の 鉄則です。\n――――――――――――――――――――――――――\n\n質問：消火器を使って 火災を 消そうと している とき、どのような 状態になったら 「初期消火の 限界」 と 判断し、火を 消す のを 諦めて すぐに 避難しなければなりませんか。",
        promptEn: "Read the 【Proper Fire Extinguisher Usage in Initial Firefighting】 below and answer the question.\n[Firefighting Drill Text: Limit Standards of Initial Firefighting] When fires occur, if flames are small, 'Initial Firefighting' using extinguishers is effective. However, ignorant of extinguisher limits you lose your life. Spray Duration: Standard commercial powder extinguishers can spray powder for 'ONLY ABOUT 15 SECONDS'! Limit of Initial Firefighting & Decision to Evacuate (CRITICAL!): Extinguishers can only put out fires burning on floors, tables, or bottom of curtains in early stages! If 'THE HEIGHT OF THE BURNING FLAMES REACHES (touches) THE ROOM'S 'CEILING (Tenjō)'' or smoke fills the room, 'EXTINGUISHERS CAN NO LONGER PUT OUT THE FIRE (Exceeds limit of initial firefighting)!' *When flames reach the ceiling, IMMEDIATELY GIVE UP (cancel) FIREFIGHTING, DROP THE EXTINGUISHER, AND 'EVACUATE OUTSIDE AT FULL SPEED THROUGH EMERGENCY EXITS TO SAVE YOUR LIFE'! This is the fire agency iron rule for survival.\n\nQuestion: When trying to extinguish a fire using a fire extinguisher, reaching what state means you must judge it is the 'Limit of Initial Firefighting', give up fighting the fire, and evacuate immediately?",
        options: [
            "燃え上がった 【「炎（ひ）が 部屋の 『天井（てんじょう）』 に 届いて（到達して） しまった」】 とき (When the burning 【'FLAMES REACH (touch) THE ROOM'S 'CEILING (Tenjō)''】)",
            "炎の 高さが 【「自分の ひざ（膝）の 高さ の １０センチ メートル」】 くらいで まだ 小さい とき (When flame height is 'about 10 cm around your knee height' and still very small)",
            "消火器の 【「黄色い 安全ピンを 抜いてから ちょうど 『３秒』 が 経った」】 とき (When exactly '3 seconds' have passed after pulling the extinguisher's yellow safety pin)",
            "火災の 【「炎の色が 赤色から キラキラ 光る ピンク色に 変わって 美しくなった」】 とき (When the fire's 'flame color changes from red to sparkly pink looking beautiful')"
        ],
        correct: 0,
        explanation: "Firefighting survival decision limit (初期消火の限界基準・炎が天井に届いたら避難): Handheld fire extinguishers cannot extinguish room-engulfing flashovers. Once flames reach ceiling height (天井に火が燃え移った時点), abandon firefighting and run to emergency exits."
    },
    {
        id: "q42",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【日本の 労働保険「労災（労働者災害補償保険）」の補償範囲と申請規定】 を読んで 質問に 答えてください。\n\n――― 【厚生労働省 労働基準局： 外国人労働者の 労災保険 適用規約】 ―――\n日本で 働く 全ての 労働者（特定技能、技能実習生、アルバイト、パートを含む 全員！）は、国が 定める 「労働者災害補償保険（労災保険・ろうさい）」 に 法律で 強制加入しています。保険料は 全額 「会社が １００％ 負担」 しています。\n\n◆ 【労災保険が 適用される ２大 災害ケース】：\n1. 【業務災害 （ぎょうむさいがい・仕事中 の 事故）】：\n工場での 機械の 挟まれ、建設現場での 足場からの 転落、介護中 の 腰痛、調理場での やけど・切創など、【「仕事をしている 最中 や 業務が 原因」 で 発生した ケガや 病気】！\n2. 【通勤災害 （つうきんさいがい・会社への 行き帰りの 事故）】：\n自宅から 会社へ 向かう 途中の 電車・バスの 事故や、退勤して 自宅へ 帰る 途中に 自転車で 転倒して 骨折した などの 【「合理的な 通勤経路の 途中」 で 発生した 事故】！\n\n※ これら 仕事中 や 通勤中 の 事故において、【「病院の 治療費・薬代は １００％ 無料（自己負担 ０円）」】 と なり、さらに 【仕事を 休んで お給料が出ない 期間は、お給料の 「約 ８割（８０％）」 が 休業補償給付として 国から 支給】 されます！ケガを したら 決して 隠さず 会社に 申請してください。\n――――――――――――――――――――――――――\n\n質問：国の 労働保険「労災保険（ろうさいほけん）」 が 適用され、病院の 医療費が 全額 無料になり 給付金が もらえる のは、どのような ときに 発生した ケガや 事故ですか。",
        promptEn: "Read the 【Worker's Accident Compensation Insurance 'Rosai' Coverage】 below and answer the question.\n[Labor Standards Bureau Guide] All workers in Japan (including SSW, technical interns, part-timers!) are compulsorily enrolled in 'Rosai Insurance'. Employers pay 100% of premiums. Two Major Accident Cases Covered by Rosai: 1. On-the-job Accidents (Gyōmu Saigai / Accidents during work): Machine entanglements in factories, falls from scaffolding, caregiving back pains, kitchen burns/cuts — 'injuries or illness occurring DURING WORK OR CAUSED BY WORK DUTIES'! 2. Commuting Accidents (Tsūkin Saigai / Accidents going to/from work): Train/bus accidents heading from home to work, or falling off a bicycle and breaking bones while returning home after work — 'accidents occurring on REASONABLE COMMUTING ROUTES'! *For these work or commuting accidents, 'HOSPITAL TREATMENT/MEDICINE FEES BECOME 100% FREE (0 yen co-pay)', and furthermore 'during rest periods without salary, ABOUT 80% (80%) OF SALARY IS PAID BY THE STATE as compensation benefits'! Never hide injuries; apply to company.\n\nQuestion: Under what circumstances must injuries or accidents occur in order for national 'Rosai Insurance' to apply, making hospital medical fees 100% free and providing wage compensation benefits?",
        options: [
            "【「業務中（仕事をしている 最中）」】 または 自宅と 会社を 往復する 【「通勤中（行き帰りの 途中）」】 に 発生した ケガや 事故 (Injuries or accidents occurring 【'DURING WORK (while doing job duties)'】 OR during 【'COMMUTING (traveling to/from home and work)'】)",
            "会社や 仕事とは 全く 関係のない、【「日曜日 の 休日に 友達と 海水浴に 行って 溺れた」】 ときの 事故 (Accidents completely unrelated to work, like 'going swimming at sea with friends on Sunday holiday and drowning')",
            "会社とは 関係のない、【「夜中 に お酒に 酔っ払って キャバクラや バーの 店内で 喧嘩をして 殴られた」】 事故 (Accidents unrelated to work, like 'getting drunk at midnight and being punched in a fistfight inside a bar')",
            "仕事とは 関係のない、【「自宅で お部屋の お掃除をして いて タンスに 足の 小指を ぶつけた」】 ときの ケガ (Injuries unrelated to work, like 'stubbing your pinky toe on a wardrobe while cleaning your bedroom at home')"
        ],
        correct: 0,
        explanation: "Scope of Worker's Accident Compensation Insurance (`業務災害`と`通勤災害`の適用範囲): Rosai insurance covers both accidents during official work duties (`業務上`) and travel accidents on normal commuting routes (`通勤中`)."
    },
    {
        id: "q43",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【「報告・連絡・相談（ホウレンソウ）」： 日本の職場におけるチームワークの鉄則】 を読んで 質問に 答えてください。\n\n――― 【サクラグループ： 職場の コミュニケーション・ホウレンソウ 規定】 ―――\n日本の ビジネスや 現場作業において、最も 評価される のは 個人の 力ではなく 「チームワークと 信頼関係」 です。その 基礎となる のが 【「ホウレンソウ（報告・連絡・相談）」】 の 徹底です。\n\n◆ 【それぞれの 意味と 役割】：\n・【「報告 （ほうこく・Report）」】：\n上司から 指示された 仕事が 終わった ときや、作業の 進み具合（途中経過）、あるいは 【「仕事中 に ミスを したり トラブルや 異常が発生した ときに、その 結果や 状況を 隠さずに 上司へ 伝える」】 こと！\n・【「連絡 （れんらく・Contact）」】：\n自分の 体調不良で 遅刻や 欠勤をする ときや、スケジュール変更の 事実を 【「自分の 感情や 意見を 入れず、客観的な 事実だけを 関係者や 同僚たちへ 迅速に 知らせる」】 こと！\n・【「相談 （そうだん・Consult）」】：\n仕事の やり方が 分からない ときや、判断に 迷った とき、あるいは 職場の 人間関係や 悩みを 【「自分１人で 悩んで 勝手に 決めず、上司や 先輩へ アドバイスや 解決策を もらいに 行く」】 こと！\n――――――――――――――――――――――――――\n\n質問：仕事中 に 機械の 操作方法が 分からなくなったり、トラブルへの 判断に 迷って どう すればいいか 分からない とき、自分１人で 勝手に 決めずに 上司や 先輩へ アドバイスを もらいに行く 行動を、「ホウレンソウ」 の どの 言葉で 表しますか。",
        promptEn: "Read the 【Horenso: The Iron Rule of Japanese Workplace Teamwork】 below and answer the question.\n[Workplace Communication Rules] In Japanese business/workplaces, what is most valued is not individual strength but 'teamwork and trust'. The foundation is enforcing 'Horenso'. Meanings and Roles: 'Hokoku (Report)': Sharing when instructed tasks finish, progress, or 'telling the boss without hiding when you make a mistake or trouble/abnormalities occur'! 'Renraku (Contact)': 'Swiftly informing stakeholders/coworkers of objective facts without personal emotions' when calling in sick, running late, or schedule changes! 'Sodan (Consult)': When you don't know how to do a job, are unsure of judgments, or face workplace worries, 'NOT WORRYING OR DECIDING ARBITRARY BY YOURSELF, BUT GOING TO BOSSES/SENIORS TO ASK FOR ADVICE AND SOLUTIONS'!\n\nQuestion: During work, when you don't know how to operate a machine or are unsure of judgments facing trouble and don't know what to do, which word of 'Horenso' describes the action of going to bosses or seniors to ask for advice without deciding arbitrarily by yourself?",
        options: [
            "相談 （そうだん・Consult / Asking seniors or bosses for advice and guidance）",
            "報告 （ほうこく・Report / Reporting task completion or mistakes to superiors）",
            "連絡 （れんらく・Contact / Informing coworkers of schedule changes or lateness facts）",
            "逃亡 （とうぼう・Escape / Running away from company silently without telling anyone）"
        ],
        correct: 0,
        explanation: "Teamwork communication definitions (ホウレンソウの意味分類・「相談」の役割): Asking supervisors or experienced seniors for advice when facing uncertainty or operational problems is defined as Sodan (`相談` / Consultation)."
    },
    {
        id: "q44",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【労働基準法に基づく「年次有給休暇（ゆうきゅうきゅうか）」の権利と取得ルール】 を読んで 質問に 答えてください。\n\n――― 【厚生労働省： 外国人労働者の ための 年次有給休暇 取得ガイド】 ―――\n日本の 労働基準法 第３９条に基づき、「年次有給休暇（ゆうきゅうきゅうか・有給）」 は 全ての 労働者に 平等に 与えられている 大切な 法律上の 権利です。\n\n◆ 【有給休暇が もらえる 「２つの 法律条件」 （いつ何日もらえる か？）】：\n会社に 入社してから、【① 「６ヶ月間（半年） 継続して 勤務し」、かつ ② 「全労働日の ８割（８０％） 以上 出勤した」】 場合、法律により 入社 ６ヶ月目の 日から 【「年間で １０日間 の 有給休暇」】 が 必ず 付与（プレゼント） されます！（※ 勤務年数が増える ごとに 最大 年間 ２０日まで 日数が増えます）。\n\n◆ 【有給休暇の 「使い道（利用目的）」 の 自由】：\n有給休暇は、お給料を 減らされずに １日 休める 制度です。休む 理由は、【「病気や ケガの 療養」 だけでなく、「母国への 一時帰国」「旅行や リフレッシュ」「家族の 世話」「資格勉強」 など、どのような 理由（私用）で 取得しても 労働者の １００％ 自由】 です！会社は 休む 理由を 理由に 取得を 拒否することは 法律で できません。\n――――――――――――――――――――――――――\n\n質問：日本の 労働基準法により、会社に入社してから 「何ヶ月間」 継続して 働き、出勤率が ８割を超えた 労働者に対して、最初に 「何日間」 の 年次有給休暇が 付与されますか。",
        promptEn: "Read the 【Paid Leave Rights under the Labor Standards Act】 below and answer the question.\n[Paid Vacation Guide for Foreign Workers] Under Article 39 of the Labor Standards Act, 'Paid Annual Vacation (Yūkyū)' is an important legal right granted equally to all workers. 2 Legal Conditions to Receive Paid Leave (When and how many days?): After joining a company, if you 1) 'WORK CONTINUOUSLY FOR 6 MONTHS (half year)', and 2) 'ATTEND OVER 80 PERCENT (80%) OF TOTAL WORK DAYS', by law starting from your 6th month you are unconditionally granted '10 DAYS OF PAID LEAVE PER YEAR'! (*Increases up to 20 days/yr with tenure). Freedom of Purpose for Using Leave: You rest without salary reduction. The reason for resting is '100% THE WORKER'S FREEDOM for any private reason including 'recovering from illness/injury', 'visiting home country', 'travel/refreshment', 'caring for family', or 'exam study'!' Employers cannot legally deny leave based on reasons.\n\nQuestion: Under the Japanese Labor Standards Act, after working continuously for 'how many months' after joining a company with over 80% attendance, 'how many days' of paid annual leave are initially granted to the worker?",
        options: [
            "入社から 【「６ヶ月間（半年）」】 継続勤務すると、最初に 【「１０日間」】 の 有給休暇が 付与される (After working continuously for 【'6 MONTHS'】, you are initially granted 【'10 DAYS'】 of paid leave)",
            "入社から 【「５０年間」】 継続勤務して 初めて、最初に 【「半日（０.５日）」】 だけ 有給が もらえる (Only after working continuously for 50 years are you granted just half a day [0.5 days] of paid leave)",
            "入社した 【「その日の 朝 １時間目」】 に、いきなり 【「３６５日間 全部」】 の 有給休暇が もらえる (On the morning of the very 1st hour you join, you immediately get 365 days of paid leave for entire year)",
            "外国人は 有給を取ってはいけないため、【「１０年間 働いても 有給は ずっと ０日（ゼロ）」】 である (Foreigners aren't allowed paid leave, so even working 10 years paid leave is forever 0 days)"
        ],
        correct: 0,
        explanation: "Labor Standards Act statutory paid annual leave (年次有給休暇の法定付与要件): Under Article 39 of the Japanese Labor Standards Act, 10 days of paid leave (`１０日間`) are granted after 6 months (`６ヶ月継続勤務`) with 80%+ attendance."
    },
    {
        id: "q45",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【自動体外式除細動器「AED（エーイーディー）」による救命措置手順】 を読んで 質問に 答えてください。\n\n――― 【日本赤十字社・救急蘇生マニュアル： AEDの 使い方 ３ステップ】 ―――\n職場で 人が 倒れ、心臓が ビクビクと 痙攣して 血液を 送り出せない 「心室細動（しんしつさいどう・心肺停止）」 を 起こしている とき、電気ショックを 与えて 心臓の 正常な リズムを取り戻す 救命装置が 【「AED（自動体外式除細動器）」】 です。\n\n◆ 【AED使用の 最重要 ３大 ステップ】：\n1. 【電源を 入れる】 AEDの フタを開けると 自動で 電源が 入る（または 緑の 電源ボタンを押す）。以降は 全て 日本語の 「音声アナウンス（指示）」 が 流れる ので、その 指示通りに 動くこと！\n2. 【電極パッドを 素肌に 貼る】 患者の 衣服を 脱がせ、胸の 素肌に 直接 パッドを 強く 貼る（右鎖骨の下 と 左脇腹）。\n3. 【最重要注意 「電気ショック ボタンの 押下と 離れ（クリア）」】：\nAEDの 音声が 「心電図を 解析中 です。体に 触れないでください」 と 言ったら、全員 患者から 手を 離す！解析後、【「ショックが必要です。充電中 です。離れてください！オレンジ色の ショックボタンを押してください！」 と アナウンスが 流れたら、【『必ず 周囲の 人が 誰も 患者の 体に 触れていない こと（クリア！・離れている こと）』 を 目で見て 確認してから、オレンジ色の 電気ショックボタンを押す】】 こと！\n※ もし 他の 人が 患者の 体に 触れている 状態で ボタンを押すと、触れている 救助者まで 高圧電流で 感電して 心臓停止する 大惨事になります！\n――――――――――――――――――――――――――\n\n質問：AEDの 音声アナウンスで 「ショックが必要です。オレンジ色の ショックボタンを押してください」 と 指示が出た とき、感電事故を 防ぐ ため、ボタンを押す 前に 必ず 何を 確認しなければなりませんか。",
        promptEn: "Read the 【Life-Saving Procedures Using Automated External Defibrillators】 below and answer the question.\n[Red Cross Resuscitation Manual: 3 Steps to Use AED] When someone collapses in cardiac arrest (ventricular fibrillation), an 'AED (Automated External Defibrillator)' gives electrical shocks restoring normal heart rhythms. 3 Critical Steps: 1. Turn on power: Open lid or press green button. Follow voice prompts! 2. Attach pads to bare skin: Remove shirt, attach to right collarbone & left flank. 3. CRITICAL 'Pressing Shock Button & Standing Clear': When AED says 'Analyzing rhythm, do not touch patient,' everyone stand clear! After analysis, when the voice says 'Shock advised. Charging. Stand clear! Press the orange shock button!', YOU MUST 'CONFIRM WITH YOUR EYES THAT 'NO ONE AROUND IS TOUCHING THE PATIENT'S BODY (All clear / Stand clear!)' BEFORE PRESSING THE ORANGE SHOCK BUTTON'! *If you press the button while someone is touching the patient, the rescuer touching them will suffer a high-voltage electrical shock and cardiac arrest!\n\nQuestion: When the AED voice announcement instructs 'Shock advised. Press the orange shock button', what MUST you confirm before pressing the button to prevent electrocution accidents?",
        options: [
            "必ず 【「周囲の 人が 誰も 患者の 体に 触れていない こと（クリア・離れている こと）」】 を 目視確認する (ALWAYS confirm visually that 【'NO ONE AROUND IS TOUCHING THE PATIENT'S BODY (All clear / stand clear!)'】)",
            "必ず 【「患者の 両手と 両足を 救助者 ４人で 力いっぱい 強く 握りしめて 押さえる」】 こと (Always 'have 4 rescuers forcefully hold and squeeze the patient's hands and feet tightly')",
            "必ず 【「患者の 顔の 上に 会社の バケツに入った 水を なみなみと １０リットル ぶちまける」】 こと (Always 'splash 10 liters of water from a company bucket all over the top of the patient's face')",
            "ボタンは 押さずに、【「AEDの 機械を 窓から 全速力で 外の アスファルトに 投げ捨てる」】 こと (Don't press button; 'throw the AED machine out the window onto outdoor asphalt at full speed')"
        ],
        correct: 0,
        explanation: "Emergency resuscitation AED safety (AED電気ショック時の通電感電防止・クリア確認): Before delivering a defibrillation shock (`ショックボタン押下`), the operator must loudly declare 'Stand clear!' and confirm visually (`誰も患者に触れていないことの確認`) to prevent accidental electrocution of rescuers."
    },
    {
        id: "q46",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【特定技能（SSW）全１４分野 技能検定合格と キャリアパス総括規約】 を読んで 質問に 答えてください。\n\n――― 【出入国在留管理庁・厚生労働省： 特定技能ビザ 総合マスターガイド】 ―――\n日本で 活躍する 外国人労働者の 皆さんは、「特定技能 １号（SSW No. 1）」 として 介護、ビルクリーニング、製造業、建設、農業、飲食料品製造、外食、自動車整備、航空、宿泊、物流・倉庫などの 全 １４分野において、日本の 産業を 支える 掛け替えのない 宝物です。\n\n◆ 【「特定技能 １号」 から 「特定技能 ２号（SSW No. 2）」 への キャリアアップ】：\n特定技能 １号は 最長 ５年間 の 在留ですが、日々の 業務で 日本語（JFT-Basic A2以上 または N4以上）を 磨き、各分野の 【「技能検定 １級」 や 「現場責任者・監督者 評価試験」 に 合格】 することで、【「特定技能 ２号（SSW No. 2）」 への 在留資格変更】 が 認められます！\n\n◆ 【「特定技能 ２号（SSW No. 2）」 の ３大 特権と 素晴らしい 未来】：\n1. 【在留期間の 上限 撤廃！】 何度でも ビザ更新が 可能になり、一生 日本で 働き続ける ことができます。\n2. 【家族帯同の 許可！】 母国に いる 「配偶者（夫・妻）」 や 「子供たち」 を 日本に 呼び寄せ、家族みんなで 日本で 一緒に 幸せに 暮らす ことが できます！\n3. 【永住への 道！】 継続して 日本で １０年以上 暮らし 働く ことで、【「日本の 永住権（永住ビザ・永住者）」 の 取得申請を行う 権利】 が 開かれます！\n\n私たち 日本社会は、皆さんが 安心して 働き、技術を 磨き、日本で 素晴らしい キャリアと 夢を 実現できるよう 全力で 応援しています。１０回の 模擬試験をお疲れ様でした！本番の 合格を 心より 祈っています！\n――――――――――――――――――――――――――\n\n質問：日本の 「特定技能 １号（SSW No. 1）」 で 働き、技能検定などに 合格して 「特定技能 ２号（SSW No. 2）」 へ ステップアップすると、将来 どのような 特典や 未来が 得られますか。",
        promptEn: "Read the 【SSW 14-Sector Master Capstone & Career Advancement Terms】 below and answer the question.\n[Immigration & Health Ministry Guide: SSW Visa Capstone] Foreign workers under SSW No. 1 supporting Japan across all 14 sectors (Kaigo, Building Cleaning, Mfg, Construction, Agriculture, Food Processing, Hospitality, Auto Repair, Aviation, Hotel, Logistics/Warehousing) are irreplaceable treasures supporting Japanese industry. Career Up from SSW No. 1 to SSW No. 2: SSW No. 1 is up to 5 years, but by polishing Japanese and passing 'Grade 1 Skill Exams / Site Supervisor Exams', you can change visa status to 'SSW No. 2'! 3 Great Privileges of SSW No. 2: 1. Removal of Residence Period Limit: Unlimited visa renewals; can work in Japan for life! 2. Family Sponsorship Permitted: Can bring spouse (husband/wife) and children from home country to live together happily in Japan! 3. Path to Permanent Residency: By living/working in Japan continuously for over 10 years, you gain the right to apply for 'Japanese Permanent Residency (Permanent Visa / Eijūsha)'! We support your dreams! Congratulations on finishing 10 mock tests! We pray for your success on the official exam!\n\nQuestion: When working under Japanese 'SSW No. 1' and stepping up to 'SSW No. 2' after passing skill exams, what privileges and future prospects do you gain?",
        options: [
            "【「在留期間の 上限が なくなり（更新制限なし）」】、【「配偶者や 子供（家族）を 日本に 呼んで 一緒に 暮らし、将来 永住権を目指す 道」】 が開かれる (【'NO LIMIT ON RESIDENCE PERIOD (unlimited renewals)'】; can 【BRING SPOUSE/CHILDREN (family) to live together in Japan, opening path to Permanent Residency】)",
            "特定技能 ２号に なると、【「日本から 強制的に 片道切符で 追放され、二度と アジアに入れなくなる」】 (Becoming SSW No. 2 causes you to be forcibly deported from Japan on a one-way ticket never able to enter Asia again)",
            "お給料は なくなり、【「毎日 ２４時間 休まずに 会社の ビルの 屋上で 旗を 振り続ける 無給の 警備員」】 になる (Salary disappears, and you become an unpaid watchman waving flags on the company rooftop 24 hours daily without rest)",
            "特典はなく、【「会社の 借金 ５億円を 自分の 個人名義の 借金として 支払い続ける 義務」】 だけがつく (No privileges; you only gain an obligation to pay back company debt of 500 million yen as your personal debt)"
        ],
        correct: 0,
        explanation: "Comprehensive SSW Capstone Finale (`特定技能ビザ制度の最終到達点・特定技能２号と永住への道`): Achieving SSW No. 2 (`特定技能２号`) is the pinnacle achievement of the Specified Skilled Worker program, granting unlimited stay (`在留期間上限なし`), family sponsorship (`家族帯同`), and a direct pathway to Japanese Permanent Residency (`永住権`)."
    },
    {
        id: "q47",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【健康診断（けんこうしんだん）受診義務と予防医学の重要性】 を読んで 質問に 答えてください。\n\n――― 【労働安全衛生法： 定期健康診断 受診義務規定】 ―――\n日本の 労働安全衛生法 第６６条において、会社（事業者）は 労働者に対して 【「１年に １回 必ず 『定期健康診断』 を 実施する 義務」】 が あり、同時に 労働者（スタッフ）側にも 【「会社の 定期健康診断を 必ず 受診する 法律上の 義務」】 が 定められています。\n\n◆ 【健康診断の 主な 検査項目】：\n身長・体重・視力・聴力・血圧測定、血液検査（血糖値・コレステロール・肝機能）、胸部Ｘ線レントゲン（結核や 肺炎の チェック）、尿検査、心電図検査。\n\n◆ 【なぜ 毎年 必ず 受診しなければならないのか？（最大の 目的）】：\n高血圧や 糖尿病、高脂血症、あるいは 肺結核などの 重大な 病気は、【「最初の うちは 自覚症状（痛みや 苦しみ）が 全く ない まま こっそり 進行し、気づいた ときには 突然 倒れて 死に至る」】 という 恐ろしい 特徴が あります！\n※ そのため、毎年 定期的に 健康診断を受ける ことで、【「病気や 異常を 早期に（早く） 発見し、早期に 治療を行って、労働者の 大切な 命と 健康・これからの 働き続ける キャリアを守る」】 ことが 健康診断の 最大の 目的・理由です！「元気だから 受けない」 は 通用しません。\n――――――――――――――――――――――――――\n\n質問：日本の 労働安全衛生法により、会社で 働く 全ての 労働者に対して 年に １回の 「定期健康診断（けんこうしんだん）」 の 受診を 義務付けている 最大の 目的・理由は なんですか。",
        promptEn: "Read the 【Mandatory Annual Statutory Health Checkups & Preventive Medicine】 below and answer the question.\n[Industrial Safety & Health Act Article 66] Employers have a legal duty to provide, and workers have a legal duty to undergo, 'Statutory Annual Health Checkups' once a year. Why Must You Undergo It Every Year? (Primary Purpose): Major diseases like high blood pressure, diabetes, high cholesterol, or tuberculosis carry the terrifying characteristic of 'PROGRESSING SECRETLY AT FIRST WITHOUT ANY SUBJECTIVE SYMPTOMS (pain or suffering), AND BY THE TIME YOU NOTICE, YOU SUDDENLY COLLAPSE AND DIE'! *Therefore, by undergoing annual regular checkups, the primary purpose and reason is to 'DISCOVER DISEASES AND ABNORMALITIES AT AN EARLY STAGE (early detection), PERFORM EARLY TREATMENT, AND PROTECT THE WORKER'S PRECIOUS LIFE, HEALTH, AND FUTURE WORKING CAREER'! Saying 'I won't take it because I feel fine' is not permitted.\n\nQuestion: Under the Japanese Industrial Safety and Health Act, what is the primary purpose and reason for mandating all workers to undergo an annual 'Statutory Health Checkup (Kenkō Shindan)'?",
        options: [
            "自覚症状のない 病気や 異常を 【「早期に（早く） 発見して 早期治療を行い、労働者の 命と 健康・キャリアを守る」】 ため (To 【'DISCOVER DISEASES/ABNORMALITIES EARLY without subjective symptoms for early treatment, protecting worker life, health, and career'】)",
            "体重の 重い 作業員を 見つけて、【「お給料を 半分に 減らしたり、お昼ご飯を取り上げて 食べさせなくする」】 ため (To find heavy workers, 'reducing their salary in half or confiscating their lunch so they can't eat')",
            "お医者さんが 【「誰が 一番 背が高いか を 競う スタイルコンテストを 開催して 賞金を 配る」】 ため (For doctors to hold a 'style contest competing who is the tallest worker and distributing prize money')",
            "病院で 【「みんなの 血を １０リットル 抜いて、お化け屋敷の 赤い ペンキの 代わりに 使う」】 ため (At hospital, 'drawing 10 liters of everyone's blood to use as red paint for a haunted house attraction')"
        ],
        correct: 0,
        explanation: "Preventive medicine and occupational health law (定期健康診断の法的義務と早期発見の重要性): Under Article 66 of the Industrial Safety and Health Act (`労働安全衛生法第６６条`), annual medical checkups protect worker health through early disease detection (`疾病の早期発見と早期治療`)."
    },
    {
        id: "q48",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【日本の ゴミ分別・不法投棄の禁止および共同生活マニュアル】 を読んで 質問に 答えてください。\n\n――― 【市区町村 環境保全条例： 不法投棄の 厳罰規定】 ―――\n日本で アパートや 社員寮に 住む 際、地域の ゴミ出しルールを守る ことは 住民としての 最低限の 義務です。\n\n◆ 【最も 厳しく 処罰される 犯罪 「不法投棄（ふほうとうき）」】：\n引っ越しをする ときや、壊れた 家具を 捨てる 際、【「ベッドや マットレス、テレビ、冷蔵庫、洗濯機、自転車などの 大型家具・家電（粗大ごみ）」】 を、市役所の 許可なく 勝手に 道路の 隅や 公園、山の中、あるいは ゴミ置き場に 放置して 捨てる ことを 【「不法投棄（ふほうとうき・違法な 捨て方）」】 と 言います。\n\n◆ 【不法投棄の 厳罰（法律の 刑罰）】：\n不法投棄は、日本の 「廃棄物処理法 第２５条」 に 違反する 重大な 【「刑事犯罪（たいほ・前科が つく 犯罪）」】 です！もし 警察に見つかったり 防犯カメラで 特定された 場合、【「５年 以下の 懲役 （刑務所に入る こと） または １,０００万円 以下の 罰金」】 という 極めて 重い 刑罰が 科され、即座に ビザが 取り消されて 母国へ 強制送還（追放） されます！\n※ 粗大ごみを 捨てる ときは、必ず 【「市役所・区役所へ 事前に 電話申し込み を 行い、コンビニで 『粗大ごみ処理券（有料の シール）』 を 買って 貼って 指定の 日に 出す」】 ことを 厳守してください！\n――――――――――――――――――――――――――\n\n質問：ベッドや 冷蔵庫、自転車などの 大型家具・家電を、ルールを守らずに 道路や 山の中に 勝手に 捨てる 「不法投棄（ふほうとうき）」 を 行った 場合、日本の 法律で どのような 重い 処罰が 科されますか。",
        promptEn: "Read the 【Garbage Separation, Ban on Illegal Dumping & Dormitory Living】 below and answer the question.\n[Municipal Environmental Ordinance: Severe Punishment for Illegal Dumping] When living in apartments/dorms, following garbage rules is a duty. Most Severely Punished Crime 'Illegal Dumping (Fuhō Tōki)': When moving or discarding broken furniture, dumping 'large furniture/appliances (bed, mattress, TV, fridge, washing machine, bicycle - Bulky Waste)' on roadsides, parks, mountains, or trash areas without city permission is called 'Illegal Dumping'. Severe Criminal Punishment (Law): Illegal dumping is a serious 'CRIMINAL OFFENSE (arrest/criminal record)' violating Article 25 of the Waste Management Law! If caught by police or security cameras, YOU FACE EXTREMELY SEVERE PENALTIES OF 'UP TO 5 YEARS IN PRISON OR A FINE OF UP TO 10 MILLION YEN (approx. $70,000 USD)', followed by instant visa cancellation and deportation! *To discard bulky waste, MUST 'call city hall in advance to apply, buy a 'Bulky Waste Ticket (paid sticker)' at a convenience store, attach it, and put it out on the designated day'!\n\nQuestion: If you commit 'Illegal Dumping (Fuhō Tōki)' arbitrarily abandoning large furniture or appliances like beds, refrigerators, or bicycles on roads or in mountains without following rules, what severe punishment is imposed under Japanese law?",
        options: [
            "【「５年 以下の 懲役（刑務所） または １,０００万円 以下の 罰金」】 が 科され、ビザ取り消しで 強制送還される (You face 【'UP TO 5 YEARS IN PRISON OR A FINE OF UP TO 10 MILLION YEN'】, visa cancellation, and deportation)",
            "罰金はなく、【「市役所の 市長さんが あなたの 家まで 来て、「お掃除してくれて ありがとう！」 と お礼を 言ってくれる」】 (No fine; 'the city mayor comes to your house and thanks you saying 'Thank you for cleaning!'')",
            "警察から、【「新しい 高級な テレビと 冷蔵庫が 無料で プレゼントされ、ホームパーティーが開かれる」】 (Police 'gift you a new luxury TV and refrigerator for free and hold a house party celebrating')",
            "不法投棄は 自由な ので、【「毎日 会社の トラックで ゴミを 富士山の 山頂に 捨てて 富士山を 大きく する」】 べき (Illegal dumping is free, so 'you should dump trash on Mt. Fuji summit daily with company trucks to make Mt. Fuji bigger')"
        ],
        correct: 0,
        explanation: "Japanese environmental criminal law (廃棄物処理法違反・粗大ごみの不法投棄の重罰規定): Under Article 25 of the Waste Management and Public Cleansing Law (`廃棄物処理法第２５条`), illegal dumping (`不法投棄`) carries criminal prison sentences up to 5 years or criminal fines up to 10 million yen (`５年以下の懲役または１０００万円以下の罰金`)."
    },
    {
        id: "q49",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【台風・豪雨・洪水時の「警戒レベル（避難指示）」と企業の休業基準】 を読んで 質問に 答えてください。\n\n――― 【気象庁・市区町村 防災ガイド： 避難警戒レベル５段階の 意味】 ―――\n大雨や 台風により 川の 氾濫（洪水）や 土砂崩れの 危険が高まった 際、市区町村から 「警戒レベル（レベル １ ～ レベル ５）」 で 避難情報が 発表されます。特に 命に関わる レベル ３ ～ ５ の 違いを 覚えておいてください。\n\n◆ 【警戒レベル ３ ： 「高齢者等避難 （こうれいしゃとうひなん）」】：\nお年寄りや 障害のある 方、赤ちゃんを 連れた 家族など、避難に 時間がかかる 人たちは この 段階で 避難を 開始する レベル。\n\n◆ 【警戒レベル ４ ： 「避難指示 （ひなんしじ・全員避難！）」】 （※ 最重要！）：\n危険な 場所に 住む 【「全ての人（一般の 住民 全員）」 が、直ちに 安全な 避難所や 安全な 高い 建物へ 「避難を開始しなければならない（全員避難！）」】 という 極めて 重要な 命令レベル！※ この レベル ４ が 出たら、会社や 工場も 作業を 中止し、安全な 場所へ 避難しなければなりません。\n\n◆ 【警戒レベル ５ ： 「緊急安全確保 （きんきゅうあんぜんかくほ）」】：\nすでに 洪水や 土砂崩れが 目の前 で 起きている 最悪の 状態！この 段階で 外の 避難所へ 走って 逃げる のは 逆に 手遅れで 死ぬ 危険が あります。自分の 家や ビルの 「２階以上の 高い 階の 窓から 離れた 安全な 部屋」 へ 移動して 命を守る 最後の 手段をとる レベル。\n――――――――――――――――――――――――――\n\n質問：気象庁や 市区町村が 発表する 防災情報において、危険な 場所に いる 「一般の 全ての 住民 全員」 に対して、直ちに 安全な 場所への 避難を 命令する 【「避難指示（全員避難！）」】 は、警戒レベルの 何番（レベルいくつ） ですか。",
        promptEn: "Read the 【Typhoon Alert Levels & Work Suspension Standards】 below and answer the question.\n[Weather Agency & Municipal Disaster Guide: 5 Evacuation Alert Levels] When heavy rains/typhoons increase flood and landslide hazards, municipalities issue Alert Levels 1 to 5. Note differences in Levels 3-5: Alert Level 3: 'Evacuation of Elderly, etc.' - Elderly, handicapped, and families with babies start evacuating. Alert Level 4: 'Evacuation Instruction (Hinan Shiji / Evacuate All People!)' (*CRITICAL!): An extremely important order level where 'ALL PEOPLE (all general residents) living in hazardous areas MUST IMMEDIATELY START EVACUATING TO SAFE SHELTERS OR SAFE HIGH BUILDINGS (All Evacuate!)'! *When Level 4 is issued, companies/factories must halt work and evacuate! Alert Level 5: 'Emergency Safety Assurance' - Worst state where floods/landslides are already occurring right in front of you! Running outside to shelters at this point is too late and fatal. Take final survival steps moving to 'safe rooms on 2nd+ floors away from windows' inside your building!\n\nQuestion: In disaster prevention information announced by the Weather Agency and municipalities, which Alert Level number corresponds to 【'Evacuation Instruction (Hinan Shiji / Evacuate All People!)'】, ordering 'all general residents' in hazardous areas to immediately evacuate to safe locations?",
        options: [
            "警戒レベル 【「４」 （レベル ４ ： 避難指示・全員避難！）」】 (Alert Level 【'4' (Level 4: Evacuation Instruction / Evacuate All People!)】)",
            "警戒レベル 【「１」 （レベル １ ： 天気が よくて 空に 虹が 出ている お散歩日和）」】 (Alert Level '1' [Level 1: Weather is fine with a rainbow in the sky, perfect strolling weather])",
            "警戒レベル 【「１００」 （レベル １００ ： 地球が 爆発して 宇宙へ 飛んでいってしまう 日）」】 (Alert Level '100' [Level 100: The day the Earth explodes and flies off into outer space])",
            "警戒レベル 【「０」 （レベル ０ ： 毎日 会社の カフェテリアで お昼寝ができる ボーナス日）」】 (Alert Level '0' [Level 0: Bonus day where you can take afternoon naps in company cafeteria daily])"
        ],
        correct: 0,
        explanation: "Japan Meteorological Agency Disaster Evacuation Alert Levels (`気象庁・自治体の避難警戒レベル５段階の定義`): **Alert Level 4** (`警戒レベル４：避難指示`) is the statutory instruction mandating that all general residents (`一般住民全員`) evacuate immediately from hazardous zones to emergency shelters."
    },
    {
        id: "q50",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【特定技能（SSW）全１４分野 総合グランドフィナーレ 誓約と お祝い】 を読んで 最後の 質問に 答えてください。\n\n――― 【JFT-Basic 模擬試験全１０回 総合グランドフィナーレ： 日本で 働く あなたへの 称賛と エール】 ―――\nあなたは これまで、「模擬試験 １： 職場安全一般」「模擬試験 ２： 介護・接客」「模擬試験 ３： 製造業」「模擬試験 ４： 農業・食品加工」「模擬試験 ５： ホテル・外食」「模擬試験 ６： 建設業」「模擬試験 ７： 自動車・交通」「模擬試験 ８： ビルクリーニング」「模擬試験 ９： 物流・倉庫」、そして この 「模擬試験 １０： 総合マスター・災害対応」 という、全 １０回・合計 ４５０問以上の 膨大な 模擬試験プログラムを 全て 完走しました！\n\n◆ 【あなたが 身につけた 「素晴らしい 力（日本語と 専門知識）」】：\nあなたは もはや、単なる 外国人労働者ではありません。日本の 職場ルールを守り、安全第一（ホウレンソウ・５S・指差呼称）を 徹底し、敬語を 使いこなし、地震や 火災の 際にも 落ち着いて 仲間の 命を守ることができる 【「日本の 産業を リードする 頼もしい プロフェッショナル（現場の 宝・未来の 現場監督者）」】 です！\n\n◆ 【これからの あなたの 挑戦と 未来への 約束】：\n公式の JFT-Basic（国際交流基金 日本語基礎テスト）の本番でも、あなたの これまでの 努力と 勉強量は 必ず １００％ の 実力となって 現れます！自信を持って、笑顔で 胸を 張って 本番の 試験に 挑んでください！\n――――――――――――――――――――――――――\n\n最終質問：全 １０回・合計 ４５０問以上の 模擬試験プログラムを 全て やり遂げた あなたは、公式 JFT-Basic 本番試験 と これから 日本で 働く 未来に向けて、どのような 気持ちと 姿勢で 挑戦しますか。",
        promptEn: "Read the 【Comprehensive SSW Grand Finale Congratulatory Pledge】 below and answer the final question.\n[JFT-Basic 10-Test Suite Grand Finale: Praise and Cheers for You Working in Japan] You have now completed the entire massive 10-part, 450+ question mock exam suite covering Test 1: Gen Safety, Test 2: Kaigo/Service, Test 3: Mfg, Test 4: Agri/Food, Test 5: Hotel/Food, Test 6: Const, Test 7: Auto/Transport, Test 8: Bldg Cleaning, Test 9: Logistics, and this Test 10: Capstone/Disaster! The Amazing Strength You Have Acquired: You are no longer just a foreign worker. You are an 'INSPIRING PROFESSIONAL LEADING JAPANESE INDUSTRY (a treasure of the workplace and future site supervisor)' who follows workplace rules, enforces safety-first (Horenso, 5S, Point and Call), masters keigo, and calmly protects colleagues' lives during earthquakes and fires! Your Challenge and Promise for the Future: On the official JFT-Basic exam, your effort and study volume will 100% show as your true capability! Challenge the official exam with confidence, a smile, and pride!\n\nQuestion: Having accomplished the entire 10-part, 450+ question mock test program, with what mindset and posture will you challenge the official JFT-Basic exam and your future working in Japan?",
        options: [
            "これまでの 努力と 知識に 【「自信を持って、笑顔で 胸を 張って 公式 JFT-Basic 本番試験と 日本での 未来に 挑む！」】 (With confidence in my efforts and knowledge, 【'I WILL CHALLENGE THE OFFICIAL JFT-BASIC EXAM AND MY FUTURE IN JAPAN WITH A SMILE AND PRIDE!'】)",
            "試験が 怖いから、【「試験の 当日に 朝寝坊を して、パスポートを 川に 捨てて 国へ 逃げ帰る！」】 (Because the exam is scary, 'I will oversleep on exam day, throw my passport in the river, and run back to my country!')",
            "勉強した ことを 全部 忘れて、【「試験会場で 解答用紙に バナナの 絵と アニメの キャラクターを描いて 帰る！」】 (Forget everything studied, and 'draw pictures of bananas and anime characters on the answer sheet at the test center and go home!')",
            "日本で 働く のを やめて、【「無人島へ 引っ越して 毎日 野生の サルと 一緒に 木の実を 食べて 暮らす！」】 (Quit working in Japan, and 'move to a deserted island eating nuts with wild monkeys every day for life!')"
        ],
        correct: 0,
        explanation: "🎉 **THE GRAND FINALE CELEBRATION!** 🎉 You have completed the entire **JFT-Basic (SSW Visa) 10-Test Master Suite (450+ Questions)**! You have mastered the vocabulary, grammar, reading notices, workplace keigo, safety protocols, and industrial knowledge required to succeed as a Specified Skilled Worker in Japan. Be proud of what you have accomplished, step into the exam center with total confidence, and achieve your dreams in Japan! **おめでとうございます！本番試験での 大合格を 心より 応援しています！**"
    }
];
