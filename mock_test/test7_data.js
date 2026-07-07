// test7_data.js - JFT-Basic SSW Mock Test 7 Datastore (45 Questions)
// Aligned with CEFR A2 / Irodori & Genki Elementary Japanese
// Focus: Automobile Repair & Maintenance (自動車整備業) & Transportation / Rail / Aviation / Logistics (鉄道・運送・航空業)

const jftExamData = [
    // ==========================================
    // SECTION 1: SCRIPT AND VOCABULARY (文字と語彙) - 12 Questions
    // ==========================================
    {
        id: "q1",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "自動車の 安全を 守る ため、工場で プロの メカニックが 車を 【整備】します。【整備】の 正しい 読み方は どれですか。",
        promptEn: "To protect vehicle safety, professional mechanics 【整備】 (maintain / service / repair) cars at the workshop. What is the reading of 【整備】?",
        options: [
            "せいび (seibi - maintenance / servicing / overhaul)",
            "じゅんび (junbi - preparation / setup)",
            "せつび (setsubi - equipment / facilities)",
            "けいび (keibi - security / guard)"
        ],
        correct: 0,
        explanation: "「整備（せいび）」means maintenance, servicing, or mechanics repair. The SSW Automobile Repair Industry is called「自動車整備業（じどうしゃせいびぎょう）」."
    },
    {
        id: "q2",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "日本の 法律では、自家用車は ２年に １回、国が 定めた 定期検査である 【しゃけん】を 受けなければなりません。正しい 漢字は どれですか。",
        promptEn: "Under Japanese law, private cars must undergo 【しゃけん】 (statutory vehicle inspection), a regular national checkup, once every 2 years. Which kanji matches?",
        options: [
            "車検 (shaken - statutory vehicle inspection / automobile registration check)",
            "車輪 (sharin - car wheel)",
            "車庫 (shako - garage / car depot)",
            "車道 (shadō - roadway / street)"
        ],
        correct: 0,
        explanation: "「車検（しゃけん）」is the standard Japanese term for the mandatory automobile inspection and registration system (自動車検査登録制度)."
    },
    {
        id: "q3",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "エンジンの 調子が 悪くなったので、工場で 古くなった 【部品】を 新品に 交換しました。【部品】の 読み方は どれですか。",
        promptEn: "The engine was malfunctioning, so we replaced old 【部品】 (parts / components) with new ones at the workshop. What is the reading?",
        options: [
            "ぶひん (buhin - parts / components / accessories)",
            "しょひん (shohin - false word)",
            "さくひん (sakuhin - artwork / piece)",
            "よひん (yohin - spare items)"
        ],
        correct: 0,
        explanation: "「部品（ぶひん）」means mechanical parts, components, or spare pieces (brakes, filters, spark plugs, belts)."
    },
    {
        id: "q4",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "車の エアコンが 【こしょう】して、冷たい 風が 出なくなって しまいました。正しい 漢字は どれですか。",
        promptEn: "The car air conditioner suffered a 【こしょう】 (breakdown / failure) and stopped blowing cold air. Which kanji matches?",
        options: [
            "故障 (koshō - breakdown / failure / out of order)",
            "事故 (jiko - accident / incident)",
            "修理 (shūri - repair / mending)",
            "改造 (kaizō - remodeling / modification)"
        ],
        correct: 0,
        explanation: "「故障（こしょう）」means mechanical failure, breakdown, or being out of order. Repairing a broken car is「修理（しゅうり）する」."
    },
    {
        id: "q5",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "長距離の ドライブに 行く 前に、タイヤの 空気圧と ブレーキの 効き具合を 【点検】します。【点検】の 読み方は どれですか。",
        promptEn: "Before going on a long-distance drive, we 【点検】 (inspect / check up) tire air pressure and brake performance. What is the reading?",
        options: [
            "てんけん (tenken - inspection / examination / checkup)",
            "けんさ (kensa - medical or laboratory inspection)",
            "じっけん (jikken - scientific experiment)",
            "はっけん (hakken - discovery)"
        ],
        correct: 0,
        explanation: "「点検（てんけん）」means inspecting, checking, or examining machinery/vehicles to ensure safety. Pre-drive inspection is called「日常点検（にちじょうてんけん）」."
    },
    {
        id: "q6",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "駅の 自動券売機で、目的地までの 電車の 【うんちん】を お金で 支払って 切符を 買います。正しい 漢字は どれですか。",
        promptEn: "At the station automatic ticket machine, you pay money for the train 【うんちん】 (fare / passenger fee) to your destination and buy a ticket. Which kanji matches?",
        options: [
            "運賃 (unchin - passenger fare / shipping fee / transport charge)",
            "給料 (kyūryō - salary / wages)",
            "税金 (zeikin - tax)",
            "家賃 (yachin - apartment house rent)"
        ],
        correct: 0,
        explanation: "「運賃（うんちん）」means transportation fares (train, bus, taxi) or freight shipping charges."
    },
    {
        id: "q7",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "大雪の影響で、新幹線の 到着に ３０分の 【遅延】が 発生して います。【遅延】の 正しい 読み方は どれですか。",
        promptEn: "Due to heavy snow, a 30-minute 【遅延】 (delay / running late) is occurring in Shinkansen arrivals. What is the correct reading of 【遅延】?",
        options: [
            "ちえん (chien - delay / running behind schedule)",
            "ちこく (chikoku - personal lateness / tardiness)",
            "はっしゃ (hassha - departure of train/bus)",
            "きゅうこう (kyūkō - express train)"
        ],
        correct: 0,
        explanation: "「遅延（ちえん）」is the official transportation term for trains, flights, or buses running late or delayed. A delay certificate is「遅延証明書（ちえんしょうめいしょ）」."
    },
    {
        id: "q8",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "空港の チェックインカウンターで、飛行機の 貨物室に 入れる 大きな スーツケースなどの 【にもつ】を 預けます。正しい 漢字は どれですか。",
        promptEn: "At the airport check-in counter, you check in large suitcases and 【にもつ】 (luggage / baggage / packages) to be put in the cargo hold. Which kanji matches?",
        options: [
            "荷物 (nimotsu - luggage / baggage / package / cargo)",
            "品物 (shinamono - goods / merchandise)",
            "建物 (tatemono - building / structure)",
            "乗物 (norimono - vehicle / transport)"
        ],
        correct: 0,
        explanation: "「荷物（にもつ）」means baggage, luggage, packages, or cargo transported by rail, air, or delivery trucks."
    },
    {
        id: "q9",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "車の 修理を 始める 前に、「工賃や 部品代の お金が 合計で いくらかかるか」 を お客様に 提示する 計算書を 何と 言いますか。",
        promptEn: "What is the document called presented to customers before car repairs begin showing 'how much labor and parts will cost in total'?",
        options: [
            "見積書（みつもりしょ - written cost estimate / quotation estimate）",
            "領収書（りょうしゅうしょ - tax receipt / proof of payment）",
            "請求書（せいきゅうしょ - billing invoice after completion）",
            "説明書（せつめいしょ - instruction manual）"
        ],
        correct: 0,
        explanation: "In auto repair customer service (自動車整備接客), presenting a detailed cost estimate (見積書 / mitsumorisho) and getting customer approval before touching the car is mandatory."
    },
    {
        id: "q10",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "タイヤ交換や 車の 底（下回り）の 点検をする ため、車体を 地面から 上に 持ち上げる 道具を 何と 言いますか。",
        promptEn: "What is the tool called used to lift the vehicle body up off the ground to change tires or inspect underneath the car?",
        options: [
            "ジャッキ（ジャッキアップ / Jakki - hydraulic car jack / lifting jack）",
            "ハンマー（かなづち - iron hammer / pounding tool）",
            "ペンチ（pliers - wire cutting pliers）",
            "ドライバー（screwdriver - screw turning tool）"
        ],
        correct: 0,
        explanation: "Lifting a car is called「ジャッキアップ (Jacking up)」using a hydraulic floor jack (ジャッキ). For safety, rigid jack stands (リジッドラック / ウマ) must always be placed underneath."
    },
    {
        id: "q11",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "駅や 病院の 駐車場で、「車を 止める スペースが 全部 埋まっていて、１台も 止められない 状態」 を 表す 漢字の 標識は どれですか。",
        promptEn: "At station or hospital parking lots, which kanji sign indicates 'all parking spaces are full and not even 1 car can park'?",
        options: [
            "満車（まんしゃ - Parking Full / All Spaces Taken）",
            "空車（くうしゃ - Vacant / Spaces Available / Empty Taxi）",
            "新車（しんしゃ - Brand new car）",
            "中古車（ちゅうこしゃ - Used / second-hand car）"
        ],
        correct: 0,
        explanation: "In Japanese parking lots and transportation,「満車（まんしゃ / Red sign）」means full/no vacancy, while「空車（くうしゃ / Green sign）」means vacant spots available."
    },
    {
        id: "q12",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "電車や タクシーの 中に、傘や お財布などの 自分の 持ち物を 忘れて 置いてきて しまった 品物の ことを 専門用語で 何と 言いますか。",
        promptEn: "What is the technical term for personal belongings like umbrellas or wallets that a passenger forgot and left behind inside a train or taxi?",
        options: [
            "忘れ物・遺失物（わすれもの・いしつぶつ - lost property / forgotten items left behind）",
            "お土産（おみやげ - travel souvenirs / gifts）",
            "特別費（とくべつひ - special expenses）",
            "非常食（ひじょうしょく - emergency relief rations）"
        ],
        correct: 0,
        explanation: "Railway stations and transport companies operate dedicated Lost & Found counters called「忘れ物センター / 遺失物取扱所（いしつぶつとりあつかいじょ）」."
    },

    // ==========================================
    // SECTION 2: CONVERSATION AND EXPRESSION (会話と表現) - 11 Questions
    // ==========================================
    {
        id: "q13",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "自動車整備工場の 受付に お客様が 車を 運転して やって来ました。フロントメカニックとして 最初になんと 挨拶しますか。\nスタッフ：「いらっしゃいませ！本日は オイル交換と 車検の 【　　】？」",
        promptEn: "A customer drove their car to the auto repair shop reception. As the front desk mechanic, how do you greet them first?\nStaff: 'Welcome! Are you here today for an oil change or Shaken 【　　】?'",
        options: [
            "お見積もり（ご相談）で ございますか (omitsumori [gosōdan] de gozaimasu ka - cost estimate / consultation?)",
            "お散歩で ございますか (osanpo de gozaimasu ka - walking stroll?)",
            "お昼寝で ございますか (ohirune de gozaimasu ka - afternoon nap?)",
            "かくれんぼで ございますか (kakurenbo de gozaimasu ka - playing hide and seek?)"
        ],
        correct: 0,
        explanation: "Greeting workshop customers politely in business keigo:「いらっしゃいませ。本日は車検のお見積もり（ご相談）でございますか」is standard."
    },
    {
        id: "q14",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "車の 点検中、ブレーキパッドの ゴムが すり減って 薄くなっているのを見つけました。お客様に 何と 提案しますか。\nメカニック：「ブレーキパッドが すり減っています。安全のため、新品への 【　　】。」",
        promptEn: "During vehicle inspection, you found that the brake pads are worn down and thin. What do you propose to the customer?\nMechanic: 'Your brake pads are worn down. For safety, I recommend 【　　】 with new ones.'",
        options: [
            "交換を おすすめいたします (kōkan o osusume itashimasu - I recommend replacement / replacing them)",
            "破壊を おすすめいたします (hakai o osusume itashimasu - I recommend destruction / destroying them)",
            "放置を おすすめいたします (hōchi o osusume itashimasu - I recommend ignoring and leaving them alone)",
            "塗装を おすすめいたします (tosō o osusume itashimasu - I recommend painting them with colors)"
        ],
        correct: 0,
        explanation: "When safety components (brakes, tires, belts) are worn out (摩耗・消耗), advise customers politely:「新品への交換をおすすめいたします / 交換が必要です」."
    },
    {
        id: "q15",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "タイヤを 正しい 力で 締め付ける ための 専門工具 「トルクレンチ」 の 置いてある 場所が 分かりません。先輩に 何と 質問しますか。\n実習生：「先輩、タイヤ締め付け用の トルクレンチは どこに 【　　】？」",
        promptEn: "You don't know where the 'torque wrench', a specialized tool for tightening tires with correct force, is kept. How do you ask your senior?\nIntern: 'Senior, where is the torque wrench for tire tightening 【　　】?'",
        options: [
            "保管されて いますか（置いてありますか） (hokan sarete imasu ka [oite arimasu ka] - kept / stored / located?)",
            "捨てられて いますか (suterarete imasu ka - thrown away into trash?)",
            "埋められて いますか (umerarete imasu ka - buried in the dirt?)",
            "燃やされて いますか (moyasarete imasu ka - burned in a fire?)"
        ],
        correct: 0,
        explanation: "Asking where garage tools are stored using respectful workplace form:「〜はどこに保管されていますか / どこに置いてありますか」."
    },
    {
        id: "q16",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "車の 点検と オイル交換が 全て 終わり、お客様に お車の 鍵（キー）を お返しします。\nメカニック：「お待たせいたしました。点検が 完了しましたので、お車の 鍵を 【　　】。」",
        promptEn: "All car inspections and oil changes are finished, and you hand the vehicle key back to the customer.\nMechanic: 'Thank you for waiting. The inspection is completed, so I will 【　　】 your car key.'",
        options: [
            "お返しいたします (okaeshi itashimasu - return / hand back to you [humble keigo])",
            "投げ捨てます (nagesutemasu - throw away far away)",
            "私が 盗んで 使います (watashi ga nusunde tsukaimasu - I will steal and use it)",
            "川の中に 沈めます (kawa no naka ni shizumemasu - sink into the river water)"
        ],
        correct: 0,
        explanation: "When returning customer property (keys, registration documents, credit cards), use humble keigo (謙譲語):「お車の鍵をお返しいたします / お渡しいたします」."
    },
    {
        id: "q17",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "駅の ホームで、迷子になった 外国人観光客から 「東京行きの 新幹線は どこから 乗りますか？」 と 聞かれました。何と 案内しますか。\n駅員：「東京行きの 新幹線は、あそこの 階段を 上がって 【　　】！」",
        promptEn: "On the station platform, a lost foreign tourist asked you, 'Where do I board the Shinkansen to Tokyo?' How do you guide them?\nStation Attendant: 'The Shinkansen to Tokyo departs from 【　　】 up those stairs over there! / 【　　】!'"
        ,
        options: [
            "３番線ホームから 発車いたします (sanbansen hōmu kara hassha itashimasu - departs from Platform 3)",
            "駅の トイレの 個室から 発車いたします (eki no toire no koshitsu kara hassha itashimasu - departs from inside the station toilet stall)",
            "駅長さんの アパートの 部屋から 発車いたします (ekichō-san no apāto no heya kara hassha itashimasu - departs from the stationmaster's home apartment)",
            "空の上 の 雲の上 から 発車いたします (sora no ue no kumo no ue kara hassha itashimasu - departs from above the clouds in the sky)"
        ],
        correct: 0,
        explanation: "In Japanese railway passenger guidance (鉄道旅客案内), directing passengers to track numbers:「〜番線ホームから発車いたします」is standard keigo."
    },
    {
        id: "q18",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "道路の 大渋滞の ため、バスの 到着が 予定より １５分 遅れています。バス停で 待っている お客様に 何と 謝罪して 説明しますか。\n運転手：「道路が 渋滞しており、バスの 到着が １５分 遅れております。【　　】。」",
        promptEn: "Due to a heavy traffic jam, bus arrival is 15 minutes behind schedule. How do you apologize and explain to waiting passengers at the bus stop?\nDriver: 'The road is congested, and bus arrival is delayed by 15 minutes. 【　　】.'"
        ,
        options: [
            "大変 申し訳ございません（ご迷惑を おかけします） (taihen mōshiwake gozaimasen [gomeiwaku o okakeshimasu] - I am extremely sorry / apologize for the inconvenience)",
            "私が 遅れた のは 道路が 悪いから 私を 褒めなさい (watashi ga okureta no wa dōro ga warui kara watashi o homenasai - Road is bad so praise me for being late)",
            "バスに 乗りたければ 全員で 走って 追いかけてきなさい (basu ni noritakereba zen'in de hashitte oikaketeki nasai - If you want to ride, all of you run and chase after bus)",
            "今日は もう 疲れたので バスの 運転を 中止します (kyō wa mō tsukareta node basu no unten o chūshi shimasu - I'm tired today so I cancel driving the bus)"
        ],
        correct: 0,
        explanation: "When buses or trains experience delays (運行遅延時の謝罪アナウンス), apologize sincerely for the inconvenience:「大変申し訳ございません。ご迷惑をおかけいたします」."
    },
    {
        id: "q19",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "宅配便の 配達員が お客様の 家へ 荷物を 届けましたが、留守（誰もいない）でした。郵便受け（ポスト）に 何という 紙を入れて 帰りますか。\n配達員：「ご不在でしたので、郵便受けに 【　　】 を 入れさせていただきます。」",
        promptEn: "A courier delivery driver brought a package to a customer's house, but they were absent (no one home). What slip/paper do you put in the mailbox before leaving?\nDriver: 'Since you were not home, I will put an 【　　】 into your mailbox.'"
        ,
        options: [
            "不在連絡票（ふざいれんらくひょう - Absence Delivery Notice / Redelivery Request Slip）",
            "退職届（たいしょくとどけ - Letter of resignation from company）",
            "婚姻届（こんいんとどけ - Marriage registration certificate）",
            "合格証書（ごうかくしょうしょ - Exam passing diploma certificate）"
        ],
        correct: 0,
        explanation: "In Japanese courier logistics (宅配便・運送業), when a recipient is not home, dropping an Absence Notice (不在連絡票 / fuzai renrakuhyō) into the mailbox is mandatory."
    },
    {
        id: "q20",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "車の 修理内容と 見積もり金額に お客様が 同意しました。作業承諾書（契約書）に サインを もらう とき、何と お願いしますか。\nスタッフ：「ありがとうございます。それでは、こちらの 作業承諾書に 【　　】。」",
        promptEn: "The customer agreed to the repair details and estimated cost. When asking for their signature on the repair authorization form, how do you ask?\nStaff: 'Thank you. Then on this authorization form, could you please 【　　】?'"
        ,
        options: [
            "お名前と ご住所の ご記入を お願いいたします (onamae to gojūsho no gokinyū o onegai itashimasu - fill in / write your name and address)",
            "紙を ビリビリに 破って ゴミ箱に 捨ててください (kami o biribiri ni yabutte gomibako ni sutete kudasai - rip paper to pieces and throw in trash box)",
            "あなたの お気に入りの アニメの 絵を 描いてください (anata no okiniri no anime no e o kaite kudasai - draw a picture of your favorite anime)",
            "紙の上に 目を 閉じて 醤油を こぼしてください (kami no ue ni me o tojite shōyu o koboshite kudasai - close your eyes and spill soy sauce on the paper)"
        ],
        correct: 0,
        explanation: "Polite customer service request to fill out agreement forms:「こちらの作業承諾書に、お名前とご住所のご記入をお願いいたします」."
    },
    {
        id: "q21",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "整備工場の 床の コンクリートに、エンジンオイルが こぼれて ぬるぬる 滑りやすくなっています。同僚に 何と 声を かけて 掃除し合いますか。\nスタッフ：「床に オイルが こぼれていて 危ないですね。転ぶ と いけないので、すぐに 【　　】！」",
        promptEn: "Engine oil spilled on the workshop concrete floor, making it slimy and slippery. How do you call out to your coworker to clean it up together?\nStaff: 'Oil is spilled on the floor and it's dangerous. Someone might slip and fall, so let's immediately 【　　】!'"
        ,
        options: [
            "ウエス（布）や 吸着剤で きれいに 拭き取りましょう (uesu [nuno] ya kyūchakuzai de kirei ni fukitorimashō - wipe it clean with waste rags or oil-absorbing powder)",
            "オイルの上で スケートのように 滑って 競争しましょう (oiru no ue de sukēto no yō ni subette kyōsō shimashō - slide on the oil like skating and race each other)",
            "こぼれた オイルの上に 水を １００リットル まきましょう (koboreta oiru no ue ni mizu o hyakurittoru makimashō - scatter 100 liters of water on top of spilled oil)",
            "目を 閉じて オイルの 沼の上を 全速力で 走りましょう (me o tojite oiru no numa no ue o zensoroku de hashirimashō - close eyes and run across oil swamp at full speed)"
        ],
        correct: 0,
        explanation: "Workshop 5S safety (整備工場の５S): Oil spills on garage floors cause bone-breaking slip accidents. Wipe up immediately with waste cloths (ウエス) or oil absorbent."
    },
    {
        id: "q22",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "空港の 搭乗手続き（チェックイン）カウンターで、お客様の スーツケースの 中に 飛行機に 乗せられない 危険物が ないか 確認します。\nグランドスタッフ：「スーツケースの中に、スプレー缶や ライターなどの 【　　】？」",
        promptEn: "At the airport check-in counter, you check whether there are any hazardous materials that cannot be put on the airplane inside the customer's suitcase.\nGround Staff: 'Inside your suitcase, are there any 【　　】 such as spray cans or lighters?'"
        ,
        options: [
            "危険物は 入っていませんか (kikenbutsu wa hatte imasen ka - hazardous materials / prohibited items inside?)",
            "美味しい チョコレートケーキは 入っていませんか (oishii chokorēto kēki wa hatte imasen ka - delicious chocolate cake inside?)",
            "可愛い 猫ちゃんや ワンちゃんは 入っていませんか (kawaii neko-chan ya wan-chan wa hatte imasen ka - cute cats or dogs inside?)",
            "私の お給料の 現金 １００万円は 入っていませんか (watashi no okyūryō no genkin hyakuman-en wa hatte imasen ka - 1 million yen cash of my salary inside?)"
        ],
        correct: 0,
        explanation: "In aviation ground handling (航空旅客サービス), verifying hazardous items (危険物の確認: スプレー、ライター、バッテリー) at check-in is a mandatory safety question."
    },
    {
        id: "q23",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "タクシーの 運転手が、乗ってきた お客様に 行き先（目的地）を お伺いします。\n運転手：「ご乗車 ありがとうございます。【　　】。」",
        promptEn: "A taxi driver asks the boarding passenger for their destination.\nDriver: 'Thank you for boarding. Where would you like to go today? / 【　　】.'"
        ,
        options: [
            "行き先は どちらまで 行かれますか（目的地は どちらですか） (ikisaki wa dochira made ikaremasu ka [mokutekichi wa dochira desu ka] - Where is your destination today?)",
            "あなたは 今から 私と 一緒に どこへ 逃亡しますか (anata wa imakara watashi to issho ni doko e tōbō shimasu ka - Where will you escape and flee with me now?)",
            "タクシー代として １００万円を 今すぐ 現金で 払いなさい (takushī-dai toshite hyakuman-en o imasugu genkin de harainasai - Pay 1 million yen cash right now as taxi fee)",
            "今日は 運転したくないので あなたが 運転してください (kyō wa unten shitakunai node anata ga unten shite kudasai - I don't want to drive today so you drive the taxi)"
        ],
        correct: 0,
        explanation: "Standard Japanese taxi courtesy (タクシー接客敬語): Confirming passenger destination politely:「ご乗車ありがとうございます。行き先（目的地）はどちらまで行かれますか」."
    },

    // ==========================================
    // SECTION 3: LISTENING COMPREHENSION (聴解) - 11 Questions
    // ==========================================
    {
        id: "q24",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】自動車整備工場で、メカニックが お客様に 修理の 見積もり金額を 説明しています。オイル交換と タイヤ２本の 交換で、合計 いくら かかりますか。",
        promptEn: "[Audio Simulation] At an auto repair shop, a mechanic is explaining estimated repair costs to a customer. How much will it cost in total for an oil change and replacing 2 front tires?",
        audioScript: "メカニック：「田中様、お車の 点検が 終わりました。今回の お見積もりですが、【「エンジンオイルの 交換」 が 工賃込みで ４,０００円】 で ございます。それから、【前輪の 「タイヤ ２本の 新品交換」 が ２０,０００円】 と なります。したがって、【合計金額は 税込で 「２４,０００円（２万４千円）」】 で ございます。この 内容で 作業を進めても よろしいでしょうか？」\nお客様：「はい、わかりました。合計 ２４,０００円ですね。安全第一ですので、その 内容で 交換 お願いします！」",
        audioScriptEn: "Mechanic: 'Mr. Tanaka, your car inspection is finished. Regarding the estimate, the ENGINE OIL CHANGE is 4,000 yen including labor. Also, REPLACING 2 FRONT TIRES with new ones is 20,000 yen. Therefore, THE TOTAL AMOUNT IS 24,000 YEN tax included. Shall we proceed with this work?'\nCustomer: 'Yes, understood. Total 24,000 yen right. Safety is number one, so please replace them with that plan!'",
        options: [
            "オイル交換と タイヤ２本交換で、【合計 「２４,０００円（２万４千円）」】 かかる (Oil change and 2 tires replacement cost 【TOTAL 24,000 YEN [24k yen]】)",
            "オイル交換だけで、【合計 「４００,０００円（４０万円）」】 の 高額料金が かかる (Just for oil change, an expensive fee of total 400,000 yen [400k] is charged)",
            "特別 割引サービスなので、【全額 「無料（０円・タダ）」】 で 全て 交換してもらえる (Since it's a special discount service, everything is replaced for total 0 YEN FREE)",
            "お客様が 工場に 【お車を 無料で 寄付して 帰らなければならない】 (The customer must donate their car to the workshop for free and go home on foot)"
        ],
        correct: 0,
        explanation: "The mechanic sums up the estimate:「オイル交換が４,０００円...タイヤ２本交換が２０,０００円...【合計金額は税込で「２４,０００円」】でございます」."
    },
    {
        id: "q25",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】駅の ホームで、電車の 運転見合わせ（遅延・運休）の 構内放送が 流れました。山手線（やまのてせん）の 運転は、何時に 再開する 予定ですか。",
        promptEn: "[Audio Simulation] On a station platform, an announcement played regarding train service suspension (delays/cancellations). At what time is Yamanote Line train service scheduled to resume?",
        audioScript: "駅内放送：「お客様に 運行情報のお知らせを いたします。本日、午後 １３時１５分頃に 発生した 地震の 安全点検のため、現在、【山手線（やまのてせん）は 全線で 運転を見合わせて（ストップして）】 おります。線路の 点検作業が 順調に進めば、【運転の 再開予定時刻は 「午後 １４：３０（午後２時半）」 の 見込み】 で ございます。お急ぎの お客様は、地下鉄線への 振替輸送（別の電車への乗り換え）を ご利用ください。ご迷惑をおかけして 大変申し訳ございません。」",
        audioScriptEn: "Station Broadcast: 'Notice of train service information to all passengers. Due to safety inspections following an earthquake around 13:15 PM today, currently THE YAMANOTE LINE IS STOPPED ALONG ALL SECTIONS. If track inspection work proceeds smoothly, THE SCHEDULED RESUMPTION TIME IS ESTIMATED AT '14:30 PM (2:30 PM)'. For passengers in a hurry, please use transfer transportation to subway lines. We apologize deeply for the inconvenience.'",
        options: [
            "【「午後 １４：３０ （午後 ２時半）」】 に 運転を 再開する 予定（見込み） ('14:30 PM [2:30 PM]' is the estimated time scheduled to resume train service)",
            "【「明日の 朝 ８：００」】 まで、１日間 ずっと 運転を 休止する 予定 (Scheduled to suspend service for a full day until 'tomorrow morning at 8:00 AM')",
            "【「来週の 日曜日の 夜中」】 まで、１週間 ずっと 電車を 止める 予定 (Scheduled to stop trains for a full week until 'next week Sunday midnight')",
            "線路が 壊れたため、【「これから １０年間」 山手線は 一切 走らない】 予定 (Because tracks broke, Yamanote Line is scheduled to never run for 'the next 10 years')"
        ],
        correct: 0,
        explanation: "The broadcast announces:「【運転の再開予定時刻は「午後１４：３０（午後２時半）」の見込み】でございます」."
    },
    {
        id: "q26",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】自動車整備工場で、先輩メカニックが タイヤ交換の 安全ルールを 指導しています。タイヤの ホイールナットを 締め付ける とき、最後は 必ず 何の 工具で 締めなければなりませんか。",
        promptEn: "[Audio Simulation] At an auto repair shop, a senior mechanic is teaching safety rules for tire changing. When tightening tire wheel nuts, what tool MUST always be used to finish tightening at the end?",
        audioScript: "先輩：「おい、タイヤ交換の 最後の 仕上げ作業だぞ！いいか、エアーインパクトレンチ（空気銃）だけで ガガガッと 締めて 終わりにしては 絶対にいけない！力が 弱すぎると 走行中に タイヤが 外れて 飛んでいくし、強すぎると ボルトが 折れて 大事故になるんだ！だから、【最後は 必ず カチンと 音が 鳴るまで、「トルクレンチ（正確な力で締める専用工具）」 を 使って、規定の 力で 確実に 締め付け確認】 を 行え！絶対に 忘れるな！」",
        audioScriptEn: "Senior: 'Hey, this is the final finishing task for tire changing! Listen, NEVER just finish by blasting it with an air impact wrench! If force is too weak, the tire flies off while driving; if too strong, studs break causing fatal accidents! Therefore, ALWAYS AT THE END USE A 'TORQUE WRENCH' (special tool measuring exact torque force) UNTIL IT CLICKS, AND THOROUGHLY CONFIRM TIGHTENING to the specified torque force! Never forget!'",
        options: [
            "最後は 必ず カチンと 音が 鳴るまで、【「トルクレンチ」 を 使って 規定の 力で 確実に 締め付け確認する】 (At the end, always USE A 'TORQUE WRENCH' until it clicks to thoroughly confirm tightening to specified torque force)",
            "最後は 工具を使わずに、【自分の 「手先の 指の 力だけ」 で 軽く ネジを 回して 終わりにする】 (At the end without tools, lightly turn screws using only 'your own finger strength' and finish)",
            "タイヤが 外れないように、【強力な 「瞬間接着剤（ボンド）」 を 塗って ナットを 固めて ２度と 取れないように する】 (So tire won't come off, apply super glue [bond] to cement nuts so they can never be removed again)",
            "締め付けは せず、【ネジを 全く 締めずに ゆるゆるの ままでお客様に 車を 渡す】 (Do no tightening at all; hand car to customer with screws completely loose and wobbling)"
        ],
        correct: 0,
        explanation: "Tire wheel nut tightening safety (ホイールナットのトルクレンチ締付義務): To prevent wheels detaching while driving (車輪脱落事故防止), final torque wrench check is legally required."
    },
    {
        id: "q27",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】空港の チェックインカウンターで、グランドスタッフが お客様の スーツケースの 重さを 測っています。スーツケースは 何キログラム 重量オーバー（無料規定より 重い）していて、いくら 追加料金が かかりますか。",
        promptEn: "[Audio Simulation] At an airport check-in counter, ground staff are weighing a customer's suitcase. How many kilograms overweight (heavier than free limit) is the suitcase, and how much additional fee is required?",
        audioScript: "グランドスタッフ：「お客様、スーツケースの 計量を行いましたところ、現在の 重さが 【２８キログラム】 ございまして、当便の 無料預け入れ荷物の 規定である 【「２３キログラム」 より、ちょうど 「５キログラム」 重量オーバー（重すぎ）】 しております。このまま 預ける 場合は、【「３,０００円」 の 超過荷物料金（追加料金）】 が 発生いたします。もしくは、重い お荷物を いくつか 手荷物として 機内にお持ち込みの バッグへ 移し替えて 軽く なさいますか？」",
        audioScriptEn: "Ground Staff: 'Sir, we weighed your suitcase and current weight is 28 kg, which is EXACTLY '5 KG' OVERWEIGHT (too heavy) compared to our flight's free checked baggage limit of '23 kg'. To check it in as is, an EXCESS BAGGAGE FEE (additional fee) OF '3,000 YEN' will be charged. Alternatively, would you like to transfer some heavy items into your carry-on bag to make it lighter?'",
        options: [
            "規定より 【「５キログラム」】 重量オーバーしていて、【「３,０００円」 の 追加料金】 が かかる (Overweight by 【'5 KG'】 over limit, requiring an 【additional fee of '3,000 YEN'】)",
            "規定より 【「５０キログラム」】 重量オーバーしていて、【「５００,０００円（５０万円）」 の 罰金】 が かかる (Overweight by 50 kg over limit, requiring a penalty fine of 500,000 yen [500k])",
            "スーツケースが 【軽すぎて 風で 飛ぶため、「無料で １０キロの 鉄の 塊を 中に入れる」】 (Suitcase is too light and will blow away in wind, so put a 10 kg iron block inside for free)",
            "重量は 問題ないが、【スーツケースの色が 「ピンク色だから 飛行機に乗せられない」】 と 断られる (Weight is fine, but refused saying 'because suitcase color is pink it cannot be put on plane')"
        ],
        correct: 0,
        explanation: "Airport excess baggage handling (超過荷物料金のご案内): 28kg - 23kg limit = 5kg overweight (５キロ重量オーバー), requiring 3,000 yen fee."
    },
    {
        id: "q28",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】宅配便の 再配達（さいはいたつ）受付センターに、お客様から 電話が かかってきました。お客様は、今日の 何時 から 何時 までの 間に 荷物を 届けてほしいと 頼んでいますか。",
        promptEn: "[Audio Simulation] A customer called the courier redelivery reception center. Between what hours today is the customer requesting their package to be redelivered?",
        audioScript: "お客様：「もしもし、サクラ宅配便ですか？ポストに 田中ドライバーの 「不在連絡票」 が 入っていました。私の お問い合わせ番号は 「１２３４番」 です。今、仕事から 家に 帰ってきましたので、【今夜の 「１８：００ から ２０：００ まで （午後６時から ８時の 間）」】 の 時間帯指定で、荷物の 再配達を お願いできますか？」\nセンターオペレーター：「かしこまりました！お問い合わせ番号 １２３４番の スミス様ですね！本日、【今夜の 「１８時から ２０時の 間」】 に、担当の 田中ドライバーが ご自宅へ お届けに 伺います！」",
        audioScriptEn: "Customer: 'Hello, Sakura Courier? There was an 'Absence Notice' from Driver Tanaka in my mailbox. My tracking number is #1234. I just returned home from work now, so could you please redeliver my package with time slot delivery tonight BETWEEN '18:00 AND 20:00' (between 6 PM and 8 PM)?'\nOperator: 'Certainly! Mr. Smith with tracking #1234 right! Today tonight BETWEEN '18:00 AND 20:00', Driver Tanaka will deliver it to your home!'",
        options: [
            "【今夜の 「１８：００ から ２０：００ まで （午後６時 ～ ８時）」】 の 間 (Between tonight's 【'18:00 and 20:00' (6 PM to 8 PM)】)",
            "【明日の 早朝 「午前 ３：００ から ５：００ まで （深夜）」】 の 間 (Between tomorrow early morning '3:00 AM and 5:00 AM [midnight]')",
            "【来月の日曜日の 「お昼の １２：００ ちょうど」】 の １分間 だけ (For only 1 minute at 'noon 12:00 sharp next month on Sunday')",
            "【１年後の お正月の 「朝 ９：００」】 に、サンタクロースに 届けてほしい (Want Santa Claus to deliver it on 'New Year's Day morning at 9:00 AM 1 year later')"
        ],
        correct: 0,
        explanation: "The customer specifies redelivery time slot:「今夜の【「１８：００から２０：００まで（午後６時から８時の間）」】の時間帯指定で、荷物の再配達をお願いできますか」."
    },
    {
        id: "q29",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】自動車整備工場で、先輩が 車の バッテリー交換の 安全ルールを 指導しています。古い バッテリーを 外す とき、ケーブルは 「プラス（＋）端子」 と 「マイナス（ー）端子」、どちらから 先に 外さなければなりませんか。",
        promptEn: "[Audio Simulation] At an auto repair workshop, a senior is teaching safety rules for car battery replacement. When removing an old battery, which cable must be disconnected first between 'Positive (+)' and 'Negative (-)' terminals?",
        audioScript: "先輩：「おい、今から 車の バッテリーを 新品に 交換するぞ！いいか、バッテリーの ケーブルを 外す 順番を 間違えると、ショートして 火花が 散り、最悪の場合は 車両火災（火事）になる！だから、古い バッテリーを 外す ときは、【必ず 黒い 「マイナス（ー）端子の ケーブル」 から 先に 外すこと！】 マイナス（ー）を 外した 後で、赤い プラス（＋）を 外す。逆に 新しい バッテリーを つける ときは、プラス（＋）から 先につけて、最後が マイナス（ー）だ！絶対に 順番を 守れよ！」",
        audioScriptEn: "Senior: 'Hey, we're replacing the car battery with a new one now! Listen, if you mistake the order of disconnecting battery cables, it short-circuits scattering sparks, and worst case causes vehicle fires! Therefore, when removing an old battery, ALWAYS DISCONNECT THE BLACK 'NEGATIVE (-) TERMINAL CABLE' FIRST! After removing negative (-), remove red positive (+). Conversely when attaching new battery, attach positive (+) first, and negative (-) last! Always follow this order!'",
        options: [
            "古い バッテリーを 外すときは、【必ず 黒い 「マイナス（ー）端子」 から 先に 外す】 (When removing old battery, ALWAYS DISCONNECT BLACK 'NEGATIVE (-) TERMINAL' FIRST)",
            "古い バッテリーを 外すときは、【必ず 赤い 「プラス（＋）端子」 から 先に 外す】 (When removing old battery, always disconnect red 'Positive (+) terminal' first)",
            "順番は 関係ないので、【プラス（＋）と マイナス（ー）を 両手で 同時に 強く 引っ張って ちぎる】 (Order doesn't matter, so yank and rip off both (+) and (-) simultaneously with both hands)",
            "ケーブルを 外さずに、【バッテリーの 上に バケツの 水を まいて 冷却してから ハサミで 切る】 (Without disconnecting cables, pour a bucket of water over battery to cool down and cut with scissors)"
        ],
        correct: 0,
        explanation: "Automotive electrical safety (バッテリー交換の鉄則): Removing negative (-) first when disconnecting, and attaching positive (+) first when connecting prevents chassis short-circuit fires."
    },
    {
        id: "q30",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】タクシーが 目的地に 到着し、運転手が お会計と 安全確認を行っています。メーターの 料金は ３,２００円で、お客様は ５,０００円札を 出しました。運転手は おつりを いくら 渡して、何に 注意するよう 伝えましたか。",
        promptEn: "[Audio Simulation] A taxi arrived at the destination, and the driver is handling payment and safety confirmation. Meter fare is 3,200 yen, and customer paid with a 5,000 yen bill. How much change did the driver return, and what caution did he give?",
        audioScript: "運転手：「目的地に 到着いたしました！メーターの お料金は 【３,２００円】 で ございます。」\nお客様：「ありがとう。じゃあ、この 【５,０００円札】 から お願いします。」\n運転手：「５,０００円 お預かりいたします！おつりが 【「１,８００円 （千八百円）」】 と 領収書で ございます。お客様、左後ろの ドアを 自動で 開けますが、【後ろから 「自転車や バイク」 が 走ってきておりますので、ドアを開ける 際は 足元と 後方の 自転車に 十分 ご注意】 くださいませ。お忘れ物の ないよう、行ってらっしゃいませ！」",
        audioScriptEn: "Driver: 'We have arrived at your destination! Meter fare is 3,200 yen.' \nCustomer: 'Thank you. Then take it out of this 5,000 yen bill.'\nDriver: '5,000 yen received! Here is your change of '1,800 YEN' and your receipt. Sir, I will open the left rear door automatically, but A BICYCLE AND MOTORCYCLE ARE APPROACHING FROM BEHIND, SO PLEASE WATCH YOUR STEP AND BE CAREFUL OF REAR BICYCLES when opening the door. Please make sure you leave no belongings behind. Have a wonderful day!'",
        options: [
            "おつりは 【「１,８００円」】 で、【後ろから 来る 「自転車や バイク（後方安全）」 に 注意するよう 伝えた】 (Change is 【'1,800 YEN'】, and he warned to watch out for 【'bicycles and motorcycles approaching from behind [rear safety]'】)",
            "おつりは 【「１０,０００円」】 で、【タクシーから 飛び降りて そのまま 全速力で 走るよう 伝えた】 (Change is 10,000 yen, and he told customer to jump out of taxi and run at full speed)",
            "おつりは 【「０円（なし）」】 で、【運転手の 歌う カラオケを １時間 聴いてから 降りるよう 伝えた】 (Change is 0 yen [none], and he told customer to listen to driver sing karaoke for 1 hour before leaving)",
            "おつりは 【「３００円」】 で、【タクシーの 屋根に 登って 空に向かって ジャンプするよう 伝えた】 (Change is 300 yen, and he told customer to climb onto taxi roof and jump toward sky)"
        ],
        correct: 0,
        explanation: "Fare math: 5,000 yen - 3,200 yen = 1,800 yen change (おつり千八百円). In taxi safety (ドア開閉時の後方確認), warning passengers of approaching bicycles/motorbikes prevents door-opening collision accidents."
    },
    {
        id: "q31",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】自動車整備工場で、お客様へ 車を 返却する 前の 「最終検査（完成検査）」 を 行っています。職長は、タイヤの 溝（みぞ）の 深さと 何を 重点的に 点検確認しましたか。",
        promptEn: "[Audio Simulation] At an auto repair shop, 'Final Inspection (Completion Check)' is being conducted before returning a car to a customer. What did the foreman inspect and confirm along with tire tread depth?",
        audioScript: "職長：「佐藤様の 車検整備が 全て 終わったぞ！お客様へ お渡しする 前の 最終チェックだ。いいか、タイヤの 溝の 深さが １.６ミリ以上あるかどうかに 加えて、【ヘッドライトや ブレーキランプなどの 「全ての ライト（灯火類）が 正常に 点灯するか」】、そして 【「ブレーキオイルの 量が 規定の ラインまで 入っているか」】 を 必ず ２人１組で 声を 出して 確認しろ！ライトが つかない 車を お客様に 返したら 重大な 整備不良（法律違反）になるからな！」",
        audioScriptEn: "Foreman: 'Mr. Sato's Shaken maintenance is all finished! Time for final checks before handing back to customer. Listen, in addition to checking whether tire tread depth is over 1.6mm, MUST CONFIRM IN PAIRS WITH VOICES THAT 'ALL LIGHTS (headlights, brake lamps) TURN ON NORMALLY' AND THAT 'BRAKE FLUID LEVEL IS FILLED TO THE SPECIFIED LINE'! If we return a car with broken lights to a customer, it's a major maintenance defect (law violation)!'",
        options: [
            "【「全ての ライト（灯火類）の 点灯」 と 「ブレーキオイルの 量」】 が 正常か 重点的に 点検確認した (He inspected and confirmed that 【'ALL LIGHTS turn on normally' and 'BRAKE FLUID LEVEL'】 are normal)",
            "【「車の 運転席に 美味しい バナナや みかん」】 が １０個 置いてあるか 重点的に 確認した (He checked whether 10 delicious bananas and oranges were placed in driver's seat)",
            "【「車の ボディの 色が 突然 ピンクと 虹色に 変わっているか」】 を 重点的に 確認した (He checked whether car body color suddenly changed to pink and rainbow colors)",
            "【「車の トランクの中に 隠し扉が あって 宇宙へ 飛べるか」】 を 重点的に 確認した (He checked whether there was a secret door in car trunk to fly into outer space)"
        ],
        correct: 0,
        explanation: "Statutory completion inspection (車検完成検査の必須項目): Checking lighting equipment (灯火類の点灯確認) and brake fluid/tire tread depth is legally mandated before releasing vehicles."
    },
    {
        id: "q32",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】路線バスの 車内で、運転手が 乗車中の お客様へ 安全案内の マイク放送を 行っています。お客様の 転倒事故を 防ぐ ため、バスが 止まる 前に どう しては いけませんか。",
        promptEn: "[Audio Simulation] Inside a local route bus, the driver is making a microphone safety announcement to boarding passengers. To prevent passenger falling accidents, what must passengers NOT do before the bus stops?",
        audioScript: "バス運転手：「ご乗車 ありがとうございます。次は 「さくら総合病院前」 に 止まります。お降りの お客様は お近くの 降車ボタンを 押して お知らせください。なお、車内での 転倒事故を 防ぐためのお願いです。【「バスが 完全に 停止し、ドアが開く までの 間は、危険ですので 絶対に 席を 立ち上がらない（立って 歩かない）」】 よう お願いいたします。バスが 止まるまで どうぞ そのまま 座って お待ちください！」",
        audioScriptEn: "Bus Driver: 'Thank you for riding. Next stop is 'Sakura General Hospital'. Passengers getting off please press a nearby stop button to notify us. Also, a request to prevent falling accidents inside the bus: UNTIL THE BUS HAS COME TO A COMPLETE HALT AND THE DOORS OPEN, IT IS HAZARDOUS SO PLEASE NEVER STAND UP FROM YOUR SEAT (or walk around)! Please remain seated and wait until the bus stops completely!'",
        options: [
            "転倒事故を 防ぐため、【バスが 完全に 停止し ドアが 開くまでは、「席を 立ち上がらない（立って歩かない）」】 こと (To prevent falls, UNTIL BUS STOPS COMPLETELY and doors open, 'DO NOT STAND UP FROM SEATS [or walk around]')",
            "バスが 早く 止まるように、【走行中の バスの 窓ガラスを あけて 全員で 外に向かって 叫ぶ】 こと (To make bus stop faster, open moving bus windows and everyone scream outside)",
            "運転手を 応援するため、【走行中の バスの 通路で 全員で ジャンプして ダンスを 踊る】 こと (To cheer driver, everyone jump and dance in walkway of moving bus)",
            "降りる 準備をする ため、【バスが 時速 ５０キロで 走っている 最中に ドアを こじ開けて 外に 飛び降りる】 こと (To prepare to leave, pry doors open and jump outside while bus runs at 50 km/h)"
        ],
        correct: 0,
        explanation: "Bus passenger safety (車内転倒事故防止アナウンス): Standing up while a bus is moving or braking causes severe elderly falls. Remaining seated until complete stop (完全停止までの着席) is enforced."
    },
    {
        id: "q33",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】整備工場の ５S（整理・整頓・清掃）ミーティングで、職長が オイル受け受け皿の 片付けについて 厳しく 注意しています。使い終わった オイル受け受け皿（ドレンパン）を 通路に 放置すると、どんな 事故が 起こりますか。",
        promptEn: "[Audio Simulation] At a workshop 5S meeting, the foreman is strictly warning about putting away oil drain pans. If used oil drain pans are left sitting in walkways, what accident will happen?",
        audioScript: "職長：「おい！誰だ、使い終わった エンジンオイルの オイル受け皿（ドレンパン）を、工場の 通路の 真ん中に 放置した のは！いいか、黒い 廃油が入った お皿を 通路に 置きっぱなしにすると、【他の 作業員が 誤って 足で 蹴飛ばして オイルを 床一面に こぼし、そこを 歩いた 仲間が つるんと 滑って 転倒し、骨折や 頭を 打つ 大事故】 に なってしまうんだ！使い終わった 工具や オイル皿は、【必ず すぐに 指定の 場所へ 片付けろ！】 ５Sを 守れない 人は 工場に 立つ 資格はないぞ！」",
        audioScriptEn: "Foreman: 'Hey! Who left a used engine oil drain pan sitting right in the middle of the workshop walkway! Listen, if you leave pans filled with black waste oil sitting in walkways, OTHER WORKERS WILL ACCIDENTALLY KICK THEM OVER SPILLING OIL ALL OVER THE FLOOR, AND COWORKERS WALKING THERE WILL SLIP AND FALL CAUSING MAJOR ACCIDENTS LIKE BROKEN BONES OR HEAD INJURIES! Used tools and oil pans MUST ALWAYS BE PUT AWAY IMMEDIATELY in designated places! People who can't follow 5S have no right to stand in workshops!'",
        options: [
            "オイルが 床に こぼれ、【そこを 歩いた 仲間が つるんと 滑って 転倒し、骨折や 頭を 打つ 大事故】 に なる (Oil spills on floor, and COWORKERS WALKING THERE WILL SLIP AND FALL CAUSING MAJOR ACCIDENTS like broken bones/head injuries)",
            "オイルの 香りが 工場中に 広がり、【みんなの お腹が 空いて カレーライスが 食べたくなる 事故】 に なる (Oil scent spreads across workshop, making everyone hungry and wanting to eat curry rice)",
            "放置された オイル皿から 【魔法の 妖精が 飛び出してきて、メカニックの お給料を １０倍にして くれる】 (A magical fairy pops out of abandoned oil pan and multiplies mechanic salaries by 10 times)",
            "オイル皿が 【夜中に 自分で 勝手に 走り出し、近所の 犬と 一緒に 散歩に行く】 (The oil pan runs away by itself at midnight and goes for a walk with neighborhood dogs)"
        ],
        correct: 0,
        explanation: "Workshop housekeeping (自動車整備の５S活動): Abandoning drain pans or hoses in walkways causes tripping and oil-spill slip hazards (転倒・スリップ災害)."
    },
    {
        id: "q34",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】駅の 「忘れ物センター（遺失物取扱所）」 で、お客様が 電車内に 忘れた 傘について 問い合わせています。お客様の 「青い 傘」 は どこで 見つかりましたか。",
        promptEn: "[Audio Simulation] At a station 'Lost & Found Center', a customer is inquiring about an umbrella forgotten inside a train. Where was the customer's 'blue umbrella' found?",
        audioScript: "お客様：「すみません！先ほど ９：１５発 上野駅から 秋葉原駅まで 乗った 山手線の 電車の中に、私の 【「青い 傘（かさ）」】 を 置き忘れて しまいました。見つかりましたでしょうか？」\n駅員：「お調べいたしますので、少々お待ちください。...あ！お客様、見つかりました！９時１５分の 電車の ３両目で、車掌が 【「青い 傘」】 を 回収し、現在は 終点の 【「東京駅の 忘れ物取扱所（遺失物センター）」 に 届いて 保管】 されて おります。身分証明書（パスポート等）をお持ちになって、東京駅へ お受け取りに 行ってください！」",
        audioScriptEn: "Customer: 'Excuse me! I left my 'BLUE UMBRELLA' behind inside the Yamanote Line train I rode from Ueno to Akihabara departing at 9:15 earlier. Has it been found?'\nStation Attendant: 'I will check our system, please wait a moment... Ah! Sir, it was found! The conductor recovered your 'blue umbrella' in the 3rd car of the 9:15 train, and currently IT HAS ARRIVED AND IS KEPT AT THE 'TOKYO STATION LOST & FOUND OFFICE (Ishitsubutsu Center)' at the terminal. Please bring your ID (passport, etc.) and go to Tokyo Station to pick it up!'",
        options: [
            "終点の 【「東京駅の 忘れ物取扱所（遺失物センター）」】 に 届いて 保管されている (It has arrived and is kept at the 【'TOKYO STATION LOST & FOUND OFFICE'】 at the terminal)",
            "駅員が 【自分の 家の お風呂場に 持って帰って 洗濯物干しとして 使っている】 (The attendant took it home to his bathroom and uses it as a laundry hanging rod)",
            "電車の 【窓から 外の 海へ 飛んでいき、太平洋の 魚たちが 使っている】 (It flew out train window into open sea and Pacific Ocean fish are using it)",
            "見つからず、【代わりに 駅の 売店で 売っている １万円の 高級傘を 買わされた】 (Not found, and instead customer was forced to buy a 10,000 yen luxury umbrella sold at station shop)"
        ],
        correct: 0,
        explanation: "Railway lost property tracing (鉄道遺失物検索システム): The station attendant locates the umbrella logged in the database and directs the passenger to the Tokyo Station Lost Property Office."
    },

    // ==========================================
    // SECTION 4: READING COMPREHENSION (読解) - 11 Questions
    // ==========================================
    {
        id: "q35",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【自動車整備工場 安全作業の５大ルール】 を読んで 質問に 答えてください。\n\n――― 【サクラ自動車整備工場： メカニック安全作業規約】 ―――\n自動車整備は 危険と 隣り合わせである。自身の 命を守り、お客様の 愛車を 事故なく 整備する ため、以下の ５大ルールを 絶対に 守ること。\n\n1. 【保護メガネの 装着】 ブレーキクリーナーや パーツクリーナーの スプレーを 噴射する 際、および エアーで ゴミを 飛ばす 際は、【必ず 「保護メガネ（ゴーグル）」 を 装着】 すること。薬液や 金属片が 目に入ると 失明する！\n2. 【リジッドラック（ウマ）の 使用義務】：\n車体を ジャッキで 上に 持ち上げた （ジャッキアップした） 後、車の 底（下回り）に もぐり込んで オイル交換や 点検作業を 行う 場合は、【「油圧ジャッキで 支えた だけの 状態」 で 車の 底に入っては 絶対にいけない（法律違反）！】 油圧が 抜けて 車が 落ちたら 即死する。必ず 頑丈な 鉄の 台である 【「リジッドラック（ウマ・安全スタンド）」 を 車体の 下の 確実な 位置に 設置し、車を 固定してから】 作業に入ること！\n――――――――――――――――――――――――――\n\n質問：ジャッキで 車を 持ち上げて 車の 底（下回り）に もぐり込んで 作業する とき、車の 落下事故を 防ぐ ために 何を しなければなりませんか。",
        promptEn: "Read the 【5 Golden Safety Rules in Auto Repair Workshops】 below and answer the question.\n[Mechanic Safety Rules] Auto repair is hazardous. To protect lives: 1. Wear protective goggles when spraying brake cleaner or blowing air. 2. Mandatory Rigid Jack Stand (Uma) Use: After lifting vehicle up with a hydraulic jack, when crawling underneath to change oil or inspect, NEVER ENTER UNDER THE CAR WHEN SUPPORTED ONLY BY A HYDRAULIC JACK (law violation)! If hydraulics fail and car drops, it's instant death. ALWAYS PLACE STURDY IRON STANDS CALLED 'RIGID JACK STANDS (Uma / Safety Stands)' under secure positions of chassis to fix car in place before entering to work!\n\nQuestion: When lifting a car with a jack and crawling underneath to work, what must be done to prevent the vehicle from falling on you?",
        options: [
            "油圧ジャッキの 支えだけでなく、【必ず 頑丈な 鉄の 台 「リジッドラック（ウマ・安全スタンド）」 を 設置して 固定する】 (Not just hydraulic jack support; ALWAYS PLACE AND FIX STURDY IRON STANDS CALLED 'RIGID JACK STANDS [Uma / Safety Stands]')",
            "油圧ジャッキは 危険なので、【作業員 ４人 が 自分の 肩と 頭で 車体を 持ち上げて 支えた まま 作業する】 (Since hydraulic jacks are dangerous, 4 workers lift and support chassis on their own shoulders and heads while working)",
            "車が 落ちてきても 大丈夫なように、【自分の 頭に 分厚い ふとんと 枕を 乗せてから 車の 底に入って 寝る】 (So it's fine even if car drops, put thick futon blankets and pillows on your head before crawling under car and sleeping)",
            "車を 持ち上げずに、【車を 完全に ひっくり返して 屋根を 地面につけた 逆さまの 状態で オイル交換する】 (Without lifting car, flip car completely upside down with roof on ground to change oil in inverted state)"
        ],
        correct: 0,
        explanation: "Automotive undercarriage safety (下回り作業・ウマかけの絶対義務): Working under a vehicle supported only by a hydraulic floor jack is illegal; solid mechanical jack stands (リジッドラック / ウマ) are mandatory."
    },
    {
        id: "q36",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【エンジンオイルおよびオイルフィルター交換時期の目安】 を読んで 質問に 答えてください。\n\n――― 【定期メンテナンス基準： エンジンオイル交換ガイド】 ―――\nエンジンオイルは、人間の 体で 例えると 「血液」 の 役割を 果たしています。オイル交換を 怠る（サボる）と、エンジン内部に 汚れ（スラッジ）が 溜まり、最悪の場合は エンジンが 焼き付いて 壊れ、数十万円の 修理費用が かかります。\n\n◆ 【エンジンオイル 交換の 目安（タイミング）】：\n前回の オイル交換から、【「走行距離が ５,０００キロメートル（５,０００ km）に 達した とき」 または 「期間が ６ヶ月（半年） 経過した とき」】 の どちらか 早い 方で 必ず 交換してください。\n\n◆ 【オイルフィルター（エレメント） 交換の ルール】：\nオイル内の ゴミを ろ過する 「オイルフィルター」 は、【「エンジンオイル交換の ２回に １回の 割合 （約１０,０００ kmごと）」】 に、オイルと 一緒に 新品へ 交換してください。毎回 交換する必要は ありませんが、２回に １回は 必ず 換えてください。\n――――――――――――――――――――――――――\n\n質問：車の 「オイルフィルター（エレメント）」 は、どのくらいの 頻度（タイミング）で 新品に 交換するよう 推奨されていますか。",
        promptEn: "Read the 【Engine Oil & Filter Replacement Schedule Guide】 below and answer the question.\n[Maintenance Standards] Engine oil is like blood for cars. Neglecting it causes engine seizure and expensive repairs. Engine Oil Timing: Replace whenever either 'DRIVING DISTANCE REACHES 5,000 KM' OR '6 MONTHS ELAPSE', whichever comes first. Oil Filter (Element) Rule: The oil filter filtering debris must be replaced with new ones 'ONCE EVERY TWO ENGINE OIL CHANGES (approx. every 10,000 km)'. You don't need to change it every time, but must change it once every two oil changes.\n\nQuestion: How often (timing) is it recommended to replace the car's 'Oil Filter (Element)' with a new one?",
        options: [
            "【「エンジンオイル交換の ２回に １回の 割合 （約 １０,０００キロメートル ごと）」】 に 交換する (Replace 【'ONCE EVERY TWO ENGINE OIL CHANGES (approx. every 10,000 km)'】)",
            "【「毎日 朝 起きる たびに １日 １回」】、必ず 新品の オイルフィルターに 交換する (Replace with a new oil filter 'every single day once a day every morning when you wake up')",
            "【「車を 買ってから １０年間、１回も 交換せずに ずっと 同じ フィルター」】 を 使い続ける (Keep using 'the exact same filter without replacing even once for 10 years after buying car')",
            "【「ガソリンスタンドで ガソリンを 給油する たびに 毎回」】、必ず フィルターを 捨てる (Throw away filter 'every single time you refuel gasoline at gas station')"
        ],
        correct: 0,
        explanation: "Automotive maintenance schedule (消耗品交換目安): Engine oil is replaced every 5,000km/6 months, and the oil filter (オイルエレメント) is replaced every two oil changes (オイル交換２回に１回)."
    },
    {
        id: "q37",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【駅の券売機と「ICカード（Suica/PASMO）」利用案内】 を読んで 質問に 答えてください。\n\n――― 【鉄道ご利用ガイド： ICカード チャージ（入金）および 自動改札機ルール】 ―――\n当鉄道では、タッチする だけで 改札を 通過できる 交通系ICカード（Suica、PASMO、ICOCAなど）を ご利用いただけます。\n\n◆ 【自動券売機での チャージ（入金）】：\nICカードの 残高が 少なくなった 場合は、駅の 「自動券売機」 または 「のりこし精算機」 で 現金を 入れて チャージ（お金を 補充）する ことが できます。\n\n◆ 【自動改札機で 扉が 閉まる（ブザーが鳴る） 原因と 対策】：\n改札を 出る（降りる 駅の 改札を 通る） 際、【「ICカードの 残高が、乗った 区間の 運賃より 足りない（残高不足）」】 の 場合、自動改札機の 赤い 扉（フラップ）が 「パタン！」 と 閉まり、「ピンポーン！」 と ブザーが 鳴って 通過できません！\n※ 【解決方法】： 扉が 閉まったら、無理に 通ろうとせず、改札の すぐ 内側にある 【「のりこし精算機（精算機）」 に カードを 挿入して、足りない 運賃分の 現金を チャージ（精算）】 してから、再度 改札機を タッチして 通過してください。\n――――――――――――――――――――――――――\n\n質問：電車を 降りる 駅の 自動改札機で、ICカードの 「お金（残高）が 足りない（残高不足）」 ため 改札の 扉が 閉まって ブザーが 鳴りました。どう すれば 改札を 出る ことができますか。",
        promptEn: "Read the 【Train Station IC Card Guide】 below and answer the question.\n[Railway IC Card & Fare Gate Rules] Charging: Can recharge card balance at station automatic ticket machines or fare adjustment machines. Why automated fare gate doors close (buzzer sounds): When exiting gates, if 'CARD BALANCE IS LESS THAN THE FARE FOR YOUR RIDE (Insufficient Balance)', the red gate doors slam shut and a buzzer sounds preventing passage! Solution: If doors close, don't force your way through; go to the 'FARE ADJUSTMENT MACHINE (Seisanki)' located right inside the gates, insert your card, recharge cash for the missing fare amount, and then touch the ticket gate again to exit!\n\nQuestion: At the exit automatic ticket gate where you get off the train, the gate doors closed and buzzed because your IC card had 'insufficient balance (not enough money)'. What must you do to exit the ticket gate?",
        options: [
            "改札内にある 【「のりこし精算機（精算機）」 に カードを入れて 足りない お金を チャージ（精算）】 してから 通る (Go to 【'FARE ADJUSTMENT MACHINE (Seisanki)'】 inside gates, recharge cash for missing fare, and then pass through)",
            "改札の 扉を 【キックで 蹴り壊して、駅員の 制止を 無視して 全速力で 走って 逃げ出す】 (Kick and destroy gate doors with foot, ignore station attendants' stops, and run away at full speed)",
            "ICカードが 壊れたと 怒って、【カードを 改札機に 投げつけて、新幹線の 屋根によじ登る】 (Get angry thinking card is broken, throw card at gate machine, and climb onto Shinkansen roof)",
            "お金が ないので、【駅の ホームで ギターを 弾いて 歌い、他の 乗客から お恵みの 運賃を 寄付してもらう】 (Since you have no money, play guitar and sing on platform to get charity fare donations from passengers)"
        ],
        correct: 0,
        explanation: "Railway fare adjustment (自動改札・乗り越し精算): When an IC card lacks sufficient balance (残高不足), passengers must settle the deficit at the fare adjustment machine (のりこし精算機) before exiting."
    },
    {
        id: "q38",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【宅配便の「時間帯指定配送」および「置き配」規約】 を読んで 質問に 答えてください。\n\n――― 【サクラ運送： 「置き配（おきはい・非対面での お届け）」 サービス 利用規約】 ―――\n昨今、お客様が お留守の ときや、非対面を 希望される 際に、玄関前などに 荷物を 置いて お届けを 完了する 「置き配（おきはい）」 が 広く 利用されています。\n\n◆ 【「置き配」 を 利用するための 必須ルール】：\n1. 【事前の 場所指定】： お客様は 配達前に 必ず ネットまたは アプリで、【「玄関ドアの前」「自転車のカゴ」「ガスメーターボックスの中」「宅配ボックス」】 など、荷物を 置く 場所を 事前に 指定してください。\n2. 【配達完了の 写真撮影と 送信】：\n配達ドライバーは、指定された 場所に 荷物を 置いた 後、必ず 【「荷物が 指定場所に 置かれた 状態の 写真」 を 専用端末で 撮影し、お客様の スマホアプリへ 「配達完了通知・写真データ」 を 送信】 しなければなりません！この 写真が 「確かにお届けした 証拠（証明）」 と なります。写真を 撮らずに 勝手に 置いて 帰る ことは 業務違反です。\n――――――――――――――――――――――――――\n\n質問：宅配便の ドライバーが お客様の 家の 玄関前に 荷物を 置いて 「置き配（おきはい）」 を 行う とき、配達を 完了した 証拠として 必ず 何を しなければなりませんか。",
        promptEn: "Read the 【Courier 'Okihai' Doorstep Delivery Terms】 below and answer the question.\n[Okihai Contactless Delivery Rules] 'Okihai' (leaving package at doorstep without face-to-face contact) is widely used. Mandatory Rules: 1. Advance location choice: Customer must specify spot in app (front door, bike basket, gas meter box, delivery box). 2. Delivery Completion Photo & Transmission: After placing package in designated spot, DELIVERY DRIVER MUST ALWAYS TAKE A 'PHOTO OF THE PACKAGE SITTING IN THE DESIGNATED SPOT' USING THEIR TERMINAL AND SEND THE 'DELIVERY COMPLETION NOTICE & PHOTO DATA' TO CUSTOMER'S APP! This photo serves as legal proof of delivery. Leaving packages without taking photos is a work violation.\n\nQuestion: When a courier delivery driver performs 'Okihai' (doorstep delivery) by placing a package in front of a customer's door, what must they do as proof of delivery completion?",
        options: [
            "指定場所に 置いた 【「荷物の 写真」 を 専用端末で 撮影し、お客様の アプリへ 完了通知と 写真を送る】 (TAKE A 'PHOTO OF THE PACKAGE' in designated spot with terminal, and send completion notice and photo to customer's app)",
            "玄関の ドアを 【大声で １００回 叩き、「荷物を 置いたぞー！」 と 近所中に 叫び回る】 (Bang front door loudly 100 times and scream around neighborhood 'I left the package!')",
            "荷物が 盗まれないように、【玄関前で ドライバーが 朝まで １２時間 ずっと 座り込んで 徹夜で 警備する】 (So package isn't stolen, driver sits down in front of door and guards it overnight for 12 hours until morning)",
            "お客様の 家の 【庭に ある 花壇の 土を 掘って、荷物を 土の中に 埋めて 宝の 地図を ポストに入れる】 (Dig soil of flower bed in customer's garden, bury package in dirt, and drop treasure map in mailbox)"
        ],
        correct: 0,
        explanation: "Japanese logistics contactless delivery protocol (置き配の配達完了ルール): Taking a time-stamped digital photo of the parcel placed at the designated location (置き配完了写真撮影) is required to verify delivery."
    },
    {
        id: "q39",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【自動車の「車検（自動車検査登録制度）」の有効期間】 を読んで 質問に 答えてください。\n\n――― 【国土交通省 規定： 自動車 車検有効期間（期間の長さ） 一覧】 ―――\n日本の 公道を 走る 全ての 自動車は、安全と 環境を 守る ため、国が 定める 定期検査 「車検（しゃけん）」 を 受けなければ 道路を 走る ことが できません（※ 車検切れの 車を 運転すると 警察に 逮捕され、免許取り消しになります）。\n\n◆ 【自家用 乗用車 （普通の 個人の マイカー）】：\n・新車を購入した ときの 初回車検 ： 【３年間 （３年目）】\n・２回目 以降の 継続車検　　　　 ： 【２年ごと （２年ごと）】\n\n◆ 【事業用 自動車 （タクシー・路線バス・大型トラック・レンタカー）】：\n人を 乗せたり 重い 荷物を 運ぶ 商用車・事業用車両は、走行距離が 長く 事故リスクが 高いため、新車でも 古い車でも、【必ず 「毎年 １回 （１年ごと）」 に、車検を受けて 合格しなければならない】 という 非常に 厳しい 法律になっています！\n――――――――――――――――――――――――――\n\n質問：タクシー、路線バス、大型トラックなどの 「事業用 自動車（商用の車）」 は、日本の 法律により 何年ごとに 車検を受けなければなりませんか。",
        promptEn: "Read the 【Statutory Vehicle Inspection 'Shaken' Validity Periods】 below and answer the question.\n[Ministry of Land, Infrastructure, Transport and Tourism Shaken Rules] All cars on public roads must undergo Shaken inspection (driving an expired Shaken car leads to arrest and license cancellation). Private Passenger Cars (personal cars): First Shaken for new cars: 3 years. Subsequent renewals: every 2 years. Commercial Vehicles (Taxis, buses, heavy trucks, rental cars): Commercial vehicles carrying passengers/cargo drive long distances with high accident risk. Therefore, whether brand new or old, THE LAW STRICTLY MANDATES THAT THEY MUST UNDERGO AND PASS SHAKEN INSPECTION 'ONCE EVERY YEAR (Every 1 Year / 毎年)' without fail!\n\nQuestion: According to Japanese law, how often (every how many years) must commercial vehicles like taxis, route buses, and heavy trucks undergo statutory Shaken inspection?",
        options: [
            "走行距離が 長く 危険なため、【必ず 「毎年 １回 （１年ごと・１年周期）」】 に 車検を受けなければならない (Because they drive long distances and are risky, they MUST undergo Shaken inspection 【'ONCE EVERY YEAR (Every 1 Year)'】)",
            "個人の マイカーと 同じで、【ずっと 「１０年に １回」】 だけ 車検を受ければ 自由に 走れる (Same as personal cars, they can drive freely by taking Shaken only 'once every 10 years')",
            "バスや タクシーは 丈夫なので、【車検を受ける 必要は 一切 なく、「一生涯 ０回（免除）」】 である (Since buses/taxis are tough, there is NO need for Shaken at all; they are 'exempt for life [0 times]')",
            "毎日 朝 起きたら、【「１日 １回 毎日 ３６５回」】 国土交通省に 車を持っていき 検査を受ける (Every single morning when waking up, must take car to Ministry of Transport '365 times a year once a day')"
        ],
        correct: 0,
        explanation: "Road Transport Vehicle Act (道路運送車両法): Commercial transport vehicles (タクシー・バス・トラック等の事業用自動車) are legally mandated to undergo annual Shaken inspections (１年車検 / 毎年検査)."
    },
    {
        id: "q40",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【航空機内への「持ち込み禁止・制限品目」一覧】 を読んで 質問に 答えてください。\n\n――― 【空港セキュリティ・航空機 搭乗手荷物ルールの ご案内】 ―――\n飛行機の 安全運航のため、以下の 品目は 航空法により 厳しく 制限されています。\n\n1. 【機内持ち込みも、チェックイン荷物（預け入れ）も 「両方とも 絶対禁止」 なもの】：\n× 花火、爆竹、ガソリン、キャンプ用ガスボンベ、漂白剤などの 危険物・引火性液体。\n\n2. 【「モバイルバッテリー（リチウムイオン電池）」 の 特殊な 持ち込みルール】：\nスマホ充電用の 「モバイルバッテリー（予備バッテリー）」 は、貨物室の 中で 押しつぶされると 激しく 発火・爆発する 危険があります！そのため、【カウンターで 預ける 「チェックインスーツケースの中に入れて 預ける ことは 「絶対禁止（お預け不可）」」】 です！\n※ 【正しい 持ち込み方法】： モバイルバッテリーは、【必ず お客様 ご自身の 「手荷物（ハンドバッグ等）」 の 中に入れて、飛行機の 客室（キャビン）内へ 直接 持ち込まなければならない】 という 厳格な ルールになっています。\n――――――――――――――――――――――――――\n\n質問：スマホ充電用の 「モバイルバッテリー（予備バッテリー）」 を 飛行機に 持っていく とき、どう しなければなりませんか。",
        promptEn: "Read the 【Airport Prohibited & Restricted In-Flight Items】 below and answer the question.\n[Airport Security Baggage Rules] 1. Absolutely prohibited in both carry-on and checked bags: Fireworks, gasoline, camping gas canisters, bleach. 2. Special Rule for 'Mobile Power Banks (Lithium-ion Batteries)': Smartphone charging power banks carry extreme risk of catching fire/exploding if crushed inside cargo holds! Therefore, PUTTING THEM INSIDE CHECKED SUITCASES AT THE COUNTER IS STRICTLY PROHIBITED (Cannot be checked in)! *Correct Method: Power banks MUST ALWAYS BE PUT INSIDE YOUR OWN 'CARRY-ON HAND LUGGAGE' AND BROUGHT DIRECTLY INTO THE AIRPLANE CABIN with you!\n\nQuestion: When bringing a smartphone charging 'Mobile Power Bank (spare battery)' onto an airplane, what must be done with it?",
        options: [
            "スーツケースに入れて 預けるのは 絶対禁止であり、【必ず 「手荷物（バッグ）」 に入れて 客室内に 直接 持ち込む】 (Putting in checked suitcases is banned; MUST ALWAYS PUT IN 'CARRY-ON HAND BAGS' and bring directly into cabin)",
            "手荷物に するのは 禁止なので、【必ず カウンターで 預ける 「大きな スーツケースの 底」 に 隠して 預ける】 (Carry-on is banned, so MUST ALWAYS hide at bottom of large suitcase checked in at counter)",
            "飛行機には 持っていけないため、【空港の ごみ箱に 全部 捨ててから 飛行機に乗らなければならない】 (Cannot bring on planes at all, so must throw all of them in airport trash boxes before boarding)",
            "バッテリーを 解体して、【中の リチウム電池を 自分の 口の中に 含んで 飲み込んでから 搭乗する】 (Dismantle battery, put lithium cells in your mouth and swallow them before boarding plane)"
        ],
        correct: 0,
        explanation: "Civil Aeronautics Act (航空法・手荷物保安規則): Lithium-ion mobile power banks (モバイルバッテリー・予備電池) cannot be checked into cargo holds (預け入れ不可); they must be carried onboard into the cabin (機内持ち込み限定)."
    },
    {
        id: "q41",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【整備工場における「ヒヤリ・ハット」および工具管理規定】 を読んで 質問に 答えてください。\n\n――― 【自動車整備業： 「工具の 員数確認（いんすうかくにん）」 義務】 ―――\n整備工場では、お客様の 車の エンジンルームや ブレーキ周りを 分解・組み立てする 際、様々な 工具（スパナ、ソケット、ドライバー等）を 使用します。\n\n◆ 【最悪の 整備ミス 「工具の 置き忘れ（エンジン内への 置き去り）」】：\nもし 作業員が エンジンルームの 中に 鉄の スパナや ネジを 置き忘れた まま ボンネットを 閉めて お客様に 車を 返却した場合、走行中に 工具が エンジンの ベルトや ギアに 噛み込み、エンジンが大爆発・車両火災を 起こす 大惨事になります！\n\n◆ 【事故を 防ぐための 「員数確認（個数チェック）」 ルール】：\nこれを 絶対に 防ぐ ため、全ての メカニックは、【作業を 始める 前と、作業が 終わって ボンネットを 閉める 直前の 「合計 ２回」、必ず 自分の 工具箱の 工具の 数を 数えて 「工具が １個も 不足していないか（員数確認）」 を 徹底チェック】 しなければなりません！\n――――――――――――――――――――――――――\n\n質問：自動車整備の 作業が 終わって ボンネットを 閉める 直前、メカニックは 車両火災や 故障事故を 防ぐ ために 何を 徹底チェックしなければなりませんか。",
        promptEn: "Read the 【Workshop Near-Miss & Tool Accountability Rules】 below and answer the question.\n[Tool Accountability Duty] When overhauling engines/brakes, mechanics use many tools. Worst Maintenance Error 'Leaving Tools Behind in Engine': If a mechanic forgets an iron wrench or screws inside the engine bay, closes the hood, and returns the car, the tool will get caught in spinning belts/gears while driving, causing catastrophic engine explosions and vehicle fires! Tool Accountability Rule: To prevent this absolutely, all mechanics MUST PERFORM 'TOOL ACCOUNTABILITY CHECKS (counting tool numbers)' A TOTAL OF 2 TIMES—before starting work and right before closing the hood after finishing—TO VERIFY THAT NOT A SINGLE TOOL IS MISSING from their toolbox!\n\nQuestion: Right before closing the hood after car maintenance is finished, what must mechanics thoroughly check to prevent vehicle fires and breakdown accidents?",
        options: [
            "エンジンルームの中に 工具を 置き忘れていないか、【工具箱の 工具の 数を 数えて 「員数確認（個数チェック）」 を 行う】 (Verify no tools were left inside engine bay by COUNTING TOOLBOX TOOLS to perform 'Tool Accountability Check')",
            "お客様の 車の エンジンの 【上に 自分の お昼ご飯の 焼きそばパンが 温かく 焼けているか】 を 確認する (Check whether your lunch yakisoba bread is baking warmly on top of customer's car engine)",
            "ボンネットの 裏側に 【自分の 好きな 歌手の サインポスターが 綺麗に 貼られているか】 を 確認する (Check whether an autograph poster of your favorite singer is pasted nicely on underside of hood)",
            "エンジンの 中に 【野良猫や 鳩が 巣を作って 卵を 産んでいないか】 を １時間かけて 観察する (Spend 1 hour observing whether stray cats or pigeons built nests and laid eggs inside engine)"
        ],
        correct: 0,
        explanation: "Automotive maintenance quality control (工具の員数管理・置き忘れ防止): Counting tools before and after repair work (員数確認) is vital to ensure no wrenches or sockets are left inside the engine compartment."
    },
    {
        id: "q42",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【電車・新幹線の「遅延証明書（ちえんしょうめいしょ）」発行ガイド】 を読んで 質問に 答えてください。\n\n――― 【鉄道旅客案内： 「遅延証明書」 の 役割と 受け取り方】 ―――\n日本の 電車・地下鉄は 世界で 一番 時間に 正確だと 言われていますが、台風や 地震、車両故障などにより 電車が 遅れる（遅延する） ことが あります。\n\n◆ 【遅延証明書とは？】：\n電車が 【「５分以上」 遅延した】 場合に 鉄道会社が 発行する 公式の 証明書類です。これがあれば、電車が 遅れて 学校や 会社の 朝礼に 遅刻して しまった とき、【学校の 先生や 会社の 上司に 提出することで、「自分の 寝坊ではなく、電車の 遅れが 原因の 遅刻である」 ことを 公式に 証明してもらえる（欠席や 罰則を 免除してもらえる）】 大切な 紙です。\n\n◆ 【受け取り方法】：\n① 電車を 降りた 駅の 改札口で、駅員から 直接 「紙の 遅延証明書」 を もらう。\n② または、鉄道会社の 公式スマートフォンアプリ・ホームページから 「WEB遅延証明書」 を ダウンロードする。\n――――――――――――――――――――――――――\n\n質問：日本の 鉄道で 電車が ５分以上 遅れた ときに もらえる 「遅延証明書（ちえんしょうめいしょ）」 は、何のために 使いますか。",
        promptEn: "Read the 【Railway Delay Certificate Issuance Guide】 below and answer the question.\n[Railway Guide: Role & How to Get Delay Certificates] Japanese trains are extremely punctual, but delays occur due to typhoons, earthquakes, or breakdowns. What is a Delay Certificate? An official proof document issued when trains DELAY BY 5 MINUTES OR MORE. When you arrive late to school or work morning assembly due to train delays, SUBMITTING THIS TO TEACHERS OR BOSSES OFFICIALLY PROVES THAT YOUR LATENESS WAS CAUSED BY TRAIN DELAY (not personal oversleeping), exempting you from penalties or absences! How to receive: 1) Get paper certificate directly from station attendants at exit gates. 2) Download 'WEB Delay Certificate' from railway smartphone apps/websites.\n\nQuestion: What is the 'Delay Certificate (Chien Shōmeisho)' issued when Japanese trains delay by 5 minutes or more used for?",
        options: [
            "学校や 会社に 提出することで、【自分の 寝坊ではなく、電車の 遅れが 原因の 遅刻である ことを 公式に 証明してもらう】 ため (By submitting to school/work, TO OFFICIALLY PROVE THAT LATENESS WAS CAUSED BY TRAIN DELAYS and not personal oversleeping)",
            "駅の 券売機に入れることで、【新幹線や 特急電車の １万円の 切符が 一生 全て 無料で 買えるように する】 ため (By putting in ticket machines, to be able to buy 10,000 yen Shaken and express tickets completely free for life)",
            "スーパーや レストランで見せることで、【お昼ご飯の 牛丼や ラーメンが 毎日 半額で 食べられるように する】 ため (By showing at supermarkets/restaurants, to eat gyudon bowls and ramen for lunch at half price every day)",
            "警察官に 見せることで、【赤信号を 無視して スピード違反を しても 一切 逮捕されないように する】 ため (By showing to police officers, to never get arrested even if you ignore red lights and speed illegally)"
        ],
        correct: 0,
        explanation: "In Japanese corporate and educational culture (遅延証明書の役割), public transport delay certificates (遅延証明書) are official documents validating excusable lateness beyond personal control."
    },
    {
        id: "q43",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【タイヤ交換における「トルクレンチ規定トルク締め付け」義務】 を読んで 質問に 答えてください。\n\n――― 【自動車整備 技術マニュアル： タイヤの ホイールナット締め付け手順】 ―――\nタイヤ交換作業において、ホイールナットの 締め付け不良は、高速道路等での 「車輪脱落（タイヤが外れて飛ぶ）」 という 死亡重大事故に 直結します。以下の 手順を 厳守すること。\n\n1. 【仮締め（手締め）】 最初は 工具を使わず、指の 力で ナットが 止まるまで 回す。\n2. 【対角線締付け（たいかくせんしめつけ）】 エアー工具等で 軽く 締める 際は、隣同士の 順ではなく、【星の 形を描くように 「対角線（斜め向かいの ナット）」 の 順番で 均等に 締め付ける】 こと。片寄り締めは ホイールが 歪む！\n3. 【トルクレンチによる 本締め確認（最重要！）】：\n最後は 必ず カチンと 音が 鳴るまで、【「トルクレンチ」 を 使用し、自動車メーカーが 定めた 「規定トルク（普通用車は 約 １０３ N・m 等）」 の 力で 正確に 本締めを行う】 こと！感覚や カンに 頼った 締め付けは 絶対禁止！\n――――――――――――――――――――――――――\n\n質問：タイヤの ホイールナットを 締め付ける とき、「隣同士の ナットを 順番に 締める」 のではなく、どのような 順番で 締め付けなければなりませんか。",
        promptEn: "Read the 【Mandatory Torque Wrench Tightening in Tire Replacement】 below and answer the question.\n[Technical Manual: Tire Wheel Nut Tightening Procedures] Improper nut tightening leads to fatal wheel detachment accidents on highways. 1. Temporary hand tightening. 2. Diagonal Tightening Pattern (Taikakusen Shimetsuke): When lightly tightening with air tools, DO NOT tighten nuts next to each other in a circle; MUST TIGHTEN EVENLY IN A 'DIAGONAL PATTERN (nuts diagonally opposite each other)' DRAWING A STAR SHAPE! Uneven tightening warps wheels! 3. Final torque wrench check: Always finish with a 'torque wrench' to exact manufacturer specified torque (e.g., 103 N·m)! Guesswork is banned!\n\nQuestion: When tightening car tire wheel nuts, instead of tightening adjacent nuts one after another in a circle, in what pattern/order must they be tightened?",
        options: [
            "ホイールが 歪まないよう、【星の 形を描くように 「対角線（斜め向かいの ナット）」 の 順番で 均等に 締め付ける】 (To prevent wheel warping, TIGHTEN EVENLY IN A 'DIAGONAL PATTERN [nuts diagonally opposite each other]' drawing a star shape)",
            "時計の 針と 同じように、【左隣から 右隣へ 順番に ぐるぐると 丸い 円を描くように 一方向に 締め付ける】 (Like clock hands, tighten in one direction in a circle one after another from left neighbor to right)",
            "一番 上の ナットを 【１個だけ 鉄の ハンマーで 強く 叩き潰して、他の ４個の ナットは 全く 締めずに 捨てる】 (Crush only the top 1 nut hard with an iron hammer, and discard the other 4 nuts without tightening at all)",
            "目隠しをして、【サイコロを 振って 出た 目の 番号の ナットだけを カンで 自由に 選んで 締める】 (Blindfolded, roll dice and freely choose to tighten only the nut matching the rolled number by guesswork)"
        ],
        correct: 0,
        explanation: "Automotive mechanical engineering standard (タイヤホイールナットの対角線締付): Tightening wheel studs diagonally across from each other in a star pattern (対角線締付け) ensures even seating and prevents wheel warping."
    },
    {
        id: "q44",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【バスターミナルでの車椅子・高齢者のお客様介助マニュアル】 を読んで 質問に 答えてください。\n\n――― 【路線バス・観光バス： 車椅子（くるまいす）お客様 乗車サポートマニュアル】 ―――\n車椅子をご利用のお客様が バス停で お待ちの 際は、運転手は 以下の 手順で 安全に 車内へ ご案内してください。\n\n1. 【バスの 停止と ニーリング（車体傾斜）】 バスの 入り口を 歩道に 近づけ、車体を 斜めに 下げる 「ニーリング機能」 で 車高を 低くする。\n2. 【スロープ板の 設置】 中扉（後扉）を 開け、車内に 収納されている 【「スロープ板（橋・坂道の板）」 を 歩道との 間に 確実に 架ける】。\n3. 【車椅子の 誘導と 固定（最重要ステップ！）】：\n車椅子の お客様を ゆっくり 車内へ 押し入れ、専用の 車椅子スペースに ご案内する。走行中の 転倒・衝突事故を 防ぐため、【必ず 「車椅子の 車輪の ブレーキを お客様にかけてもらい」、さらに バス床の 【「４本の 固定用ベルト（車椅子固定装置）」 で 車椅子の 前後左右を 車体に 頑丈に 固定する】】 こと！固定せずに バスを 発車させることは 絶対禁止である！\n――――――――――――――――――――――――――\n\n質問：車椅子の お客様を バスの 車内に ご案内した後、バスが 発車する 前に 運転手は 車椅子を どのように 固定しなければなりませんか。",
        promptEn: "Read the 【Bus Terminal Wheelchair Assistance Manual】 below and answer the question.\n[Bus Driver Wheelchair Support Manual] When a wheelchair passenger is waiting, drivers guide them safely: 1. Kneeling: Lower bus chassis toward sidewalk. 2. Install slope bridge board. 3. Guiding & Securing Wheelchair (CRITICAL STEP!): Push wheelchair into bus wheelchair space. To prevent tipping/collisions while driving, YOU MUST HAVE THE CUSTOMER LOCK THEIR WHEELCHAIR WHEEL BRAKES, AND FURTHERMORE USE THE '4 FLOOR FIXING BELTS (Wheelchair Securing System)' TO STURDILY FIX THE FRONT, BACK, LEFT, AND RIGHT OF THE WHEELCHAIR TO THE BUS CHASSIS! Departing without securing is strictly prohibited!\n\nQuestion: After guiding a wheelchair passenger inside the bus, how must the driver secure the wheelchair before the bus departs?",
        options: [
            "車輪ブレーキを かけてもらい、【床の 「４本の 固定用ベルト（固定装置）」 で 車椅子の 前後左右を 車体に 頑丈に 固定する】 (Have wheel brakes locked, and STURDILY FIX FRONT/BACK/LEFT/RIGHT OF WHEELCHAIR TO CHASSIS WITH '4 FLOOR FIXING BELTS')",
            "固定ベルトは 使わず、【運転手が 自分の 片手で 車椅子の ハンドルを 握った まま、もう 片手で バスの ハンドルを 運転する】 (Don't use belts; driver drives bus steering wheel with one hand while holding wheelchair handle with the other hand)",
            "車椅子を 【バスの 屋根の 上の 荷物置き場に クレーンで 吊り上げて、ロープで 縛り付けて 走る】 (Lift wheelchair up onto bus roof luggage rack with crane, tie with rope, and drive)",
            "車椅子の 【タイヤを 全て パンクさせて 動かないようにしてから、バスの 通路の 真ん中に 放置する】 (Puncture all wheelchair tires so it can't move, and leave abandoned in middle of bus walkway)"
        ],
        correct: 0,
        explanation: "Public transport accessibility rules (バリアフリー・車椅子乗車サポート): Operating a bus carrying a wheelchair passenger requires engaging brakes and securing the chair with 4 chassis tie-down belts (４点固定ベルトの装着義務)."
    },
    {
        id: "q45",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【自動車整備業「特定技能（SSW）」技能検定および手当規約】 を読んで 質問に 答えてください。\n\n――― 【サクラ自動車整備： 外国人メカニック 資格取得および キャリアアップ支援】 ―――\n当社では、特定技能（SSW）として 働く メカニックの 皆さんが 日本の 国家資格を 取得し、将来 一流の 自動車整備士として 活躍できるよう、以下の 支援制度を 行っています！\n\n◆ 【推奨する 資格試験】：\n・「３級 自動車整備士（ガソリン・エンジン / シャシ）」\n・「２級 自動車整備士」\n・「低圧電気取扱業務 特別教育」 （※ ハイブリッド車・EV電気自動車の 整備資格）\n\n◆ 【会社の 特典および キャリアアップ手当】：\n① 【試験費用・教科書代の 全額負担】： 資格の テスト代や 日本語の 整備士テキスト代は、【全額 会社が お支払い】 します！\n② 【合格お祝い 資格手当（お給料アップ！）】：\n見事 「３級 自動車整備士」 の 国家試験に 合格した 方には、お祝いとして 翌月から 【毎月のお給料に 「月額 １５,０００円 （年間 １８万円）」 の 資格手当が ずっと 上乗せ（アップ）】 されます！さらに ２級に 合格すると 月額 ３０,０００円に アップします！ぜひ 挑戦してください！\n――――――――――――――――――――――――――\n\n質問：この 整備工場の 支援制度を 使って 「３級 自動車整備士」 の 国家試験に 合格すると、翌月から お給料は どう なりますか。",
        promptEn: "Read the 【SSW Auto Repair Skill Certification & Allowance Terms】 below and answer the question.\n[Mechanic Career Up Support Notice] To help SSW mechanics gain national licenses and thrive: Recommended Licenses: Grade 3 Auto Mechanic (Gasoline/Chassis), Grade 2 Mechanic, Low-voltage electrical handling (for EV/Hybrid cars). Company Benefits: 1) 100% covered exam & textbook costs! 2) Pass Bonus Qualification Allowance (Salary Up!): Those who pass the 'Grade 3 Auto Mechanic' national exam will receive a 'QUALIFICATION ALLOWANCE OF 15,000 YEN EVERY MONTH (180,000 yen/year) PERMANENTLY ADDED TO THEIR MONTHLY SALARY' starting the following month! Passing Grade 2 increases it to 30,000 yen! Please challenge it!\n\nQuestion: If you use this workshop's support program to pass the 'Grade 3 Auto Mechanic' national exam, what happens to your salary from the following month?",
        options: [
            "お給料に 【「毎月 １５,０００円 （年間 １８万円）」 の 資格手当が ずっと 上乗せ（アップ）】 される (A 'QUALIFICATION ALLOWANCE OF 15,000 YEN EVERY MONTH [180k yen/yr]' is permanently added to your salary)",
            "資格を 取ると 転職しやすくなるという 理由で、【お給料が 罰金として 毎月 ５０,０００円 減らされる】 (For the reason that licensed workers change jobs easily, your salary is reduced by 50,000 yen monthly as a fine)",
            "お給料のお金は 円ではなく、【全額 「車の 使えない 古い 中古タイヤ １００本」 で 現物支給される】 (Salary is not paid in Yen money, but paid entirely in kind as '100 unusable old used car tires')",
            "テストに 合格した 記念に、【工場の 社長の 愛車である １,０００万円の 高級スポーツカーを もらえる】 (To celebrate passing test, you are gifted the president's 10 million yen luxury sports car)"
        ],
        correct: 0,
        explanation: "Benefit 2 states:「見事「３級自動車整備士」の国家試験に合格した方には...【毎月のお給料に「月額１５,０００円」の資格手当がずっと上乗せ】されます！」."
    }
];
