// test2_data.js - JFT-Basic SSW Mock Test 2 Datastore (45 Questions)
// Aligned with CEFR A2 / Irodori & Genki Elementary Japanese
// Focus: Customer Service, Healthcare/Kaigo, Food Service, Emergency Drill, & Daily Etiquette

const jftExamData = [
    // ==========================================
    // SECTION 1: SCRIPT AND VOCABULARY (文字と語彙) - 12 Questions
    // ==========================================
    {
        id: "q1",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "会社や 病院の 入り口にある 【受付】の 正しい 読み方は どれですか。",
        promptEn: "What is the correct reading of 【受付】 found at the entrance of offices and hospitals?",
        options: [
            "うけつけ (uketsuke - reception desk)",
            "うけとり (uketori - receipt / receiving)",
            "とりつけ (toritsuke - installation)",
            "かけつけ (kaketsuke - rushing over)"
        ],
        correct: 0,
        explanation: "「受付（うけつけ）」means reception desk or front desk. It is the first point of contact in Japanese workplaces and medical facilities."
    },
    {
        id: "q2",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "作業を 始める 前に、必ず 機械の 安全装置を 【確認】してください。正しい 読み方は どれですか。",
        promptEn: "Before starting work, be sure to 【確認】 the machine's safety device. What is the correct reading?",
        options: [
            "かくにん (kakunin - confirmation / check)",
            "かくなっとう (kaku nattō - false reading)",
            "こうにん (kōnin - approval)",
            "かくしん (kakushin - conviction)"
        ],
        correct: 0,
        explanation: "「確認（かくにん）する」means to confirm, check, or verify. In SSW workplace safety (安全第一), performing 'kakunin' is mandatory."
    },
    {
        id: "q3",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "こちらの 休憩室は、全従業員が 自由に 【りよう】することができます。正しい 漢字は どれですか。",
        promptEn: "This break room can be freely 【りよう】 by all employees. Which kanji matches?",
        options: [
            "使用 (shiyō - use/application)",
            "利用 (riyō - utilization / use)",
            "適用 (tekiyō - application / adoption)",
            "採用 (saiyō - hiring / employment)"
        ],
        correct: 1,
        explanation: "「利用（りよう）する」means to make use of a facility, service, or system (e.g., 利用時間, 利用案内)."
    },
    {
        id: "q4",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "食品を 保管する 冷蔵庫の 【温度】を 毎日 チェックして 記録してください。【温度】の 読み方は どれですか。",
        promptEn: "Please check and record the 【温度】 of the refrigerator where food is stored every day. What is the reading?",
        options: [
            "おんど (ondo - temperature)",
            "あったか (attaka - warm)",
            "たかさ (takasa - height)",
            "しつど (shitsudo - humidity)"
        ],
        correct: 0,
        explanation: "「温度（おんど）」means temperature. In food processing and restaurant kitchens, managing temperature (温度管理) prevents foodborne illness."
    },
    {
        id: "q5",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "仕事が 終わったら、自分の 担当場所を 綺麗に 【せいそう】してください。正しい 漢字は どれですか。",
        promptEn: "When work is finished, please cleanly 【せいそう】 your assigned area. Which kanji matches?",
        options: [
            "清掃 (seisō - cleaning / cleanup)",
            "整理 (seiri - sorting / organization)",
            "整頓 (seiton - arranging / order)",
            "清潔 (seiketsu - cleanliness)"
        ],
        correct: 0,
        explanation: "「清掃（せいそう）」is the formal workplace word for cleaning (掃除 / そうじ). It forms the 'Seiso' part of the famous 5S methodology."
    },
    {
        id: "q6",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "問題が 発生した ときは、自分で 判断しないで すぐに 上司へ 【報告】してください。【報告】の 読み方は どれですか。",
        promptEn: "When a problem occurs, do not decide on your own; immediately give a 【報告】 to your superior. What is the reading?",
        options: [
            "ほうこく (hōkoku - report)",
            "れんらく (renraku - contact)",
            "そうだん (sōdan - consultation)",
            "こうこく (kōkoku - advertisement)"
        ],
        correct: 0,
        explanation: "「報告（ほうこく）」means to report information or status to a superior. Along with 連絡 (renraku) and 相談 (sōdan), it forms 'Ho-Ren-So', the golden rule of Japanese business communication."
    },
    {
        id: "q7",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "重い 【荷物】を 運ぶ ときは、腰を 痛めないように 気をつけてください。【荷物】の 読み方は どれですか。",
        promptEn: "When carrying heavy 【荷物】, please be careful not to hurt your lower back. What is the reading?",
        options: [
            "かもつ (kamotsu - freight / cargo)",
            "にもつ (nimotsu - luggage / package / load)",
            "おもに (omoni - heavy burden)",
            "しなもの (shinamono - goods / merchandise)"
        ],
        correct: 1,
        explanation: "「荷物（にもつ）」means luggage, packages, or heavy loads carried in logistics, agriculture, or daily life."
    },
    {
        id: "q8",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "新幹線は 定刻どおり（予定の時間の通りに）東京駅を 【しゅっぱつ】しました。正しい 漢字は どれですか。",
        promptEn: "The Shinkansen 【しゅっぱつ】 Tokyo Station on schedule. Which kanji matches?",
        options: [
            "出発 (shuppatsu - departure)",
            "到着 (tōchaku - arrival)",
            "出社 (shussha - arriving at office)",
            "外出 (gaishutsu - going out)"
        ],
        correct: 0,
        explanation: "「出発（しゅっぱつ）」means departure. Its opposite is 到着（とうちゃく - arrival）."
    },
    {
        id: "q9",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "この ホテルの Wi-Fiは、宿泊客なら 誰でも 【　　】で 使うことができます。お金は かかりません。",
        promptEn: "This hotel's Wi-Fi can be used for 【　　】 by any staying guest. It does not cost money.",
        options: [
            "無料（むりょう - free of charge）",
            "有料（ゆうりょう - toll / paid）",
            "半額（はんがく - half price）",
            "割引（わりびき - discount）"
        ],
        correct: 0,
        explanation: "Since the sentence states「お金はかかりません」(does not cost money), the correct word is「無料（むりょう - free）」."
    },
    {
        id: "q10",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "工場で ダンボール箱を 組み立てる ときは、手が 傷つかないように 【　　】を してください。",
        promptEn: "When assembling cardboard boxes at the factory, please wear 【　　】 so your hands don't get injured.",
        options: [
            "軍手（ぐんて - work gloves）",
            "帽子（ぼうし - hat / cap）",
            "眼鏡（めがね - glasses）",
            "靴下（くつした - socks）"
        ],
        correct: 0,
        explanation: "Thick cotton work gloves used in factories, farming, and cleanup operations are called「軍手（ぐんて）」."
    },
    {
        id: "q11",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "エアコンが 【　　】してしまい、冷たい 風が 全然 出なくなりました。",
        promptEn: "The air conditioner has 【　　】, and no cold air comes out at all anymore.",
        options: [
            "故障（こしょう - breakdown / out of order）",
            "修理（しゅうり - repair）",
            "点検（てんけん - inspection）",
            "運転（うんてん - operation / driving）"
        ],
        correct: 0,
        explanation: "When a machine or equipment breaks down or stops working properly, it is「故障（こしょう）する」."
    },
    {
        id: "q12",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "工場の 照明（電気のランプ）が 切れたので、新しい ものと 【　　】しました。",
        promptEn: "Since the factory light bulb burned out, I 【　　】 it with a new one.",
        options: [
            "交換（こうかん - exchange / replacement）",
            "交替（こうたい - taking turns / relief）",
            "交流（こうりゅう - cultural exchange）",
            "交通（こうつう - traffic / transportation）"
        ],
        correct: 0,
        explanation: "To replace an old or broken item (like a light bulb, towel, or parts) with a new one is「交換（こうかん）する」."
    },

    // ==========================================
    // SECTION 2: CONVERSATION AND EXPRESSION (会話と表現) - 11 Questions
    // ==========================================
    {
        id: "q13",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "頼まれた 荷物の 梱包（箱詰め）が 終わりました。リーダーに 何と 指示を 仰ぎますか。\nスタッフ：「リーダー、頼まれた 箱詰めが 終わりましたが、次は 【　　】。」",
        promptEn: "You finished packing the boxes as requested. How do you ask the leader for your next instruction?\nStaff: 'Leader, the requested packing is finished. What 【　　】 next?'",
        options: [
            "何を しましょうか (nani o shimashō ka - What shall I do?)",
            "何を させますか (nani o sasemasu ka - What will you make me do?)",
            "何を した方がいいですか (nani o shita hō ga ii desu ka - What should you do?)",
            "何でも いいですよ (nandemo ii desu yo - Anything is fine)"
        ],
        correct: 0,
        explanation: "When reporting task completion and eagerly asking a supervisor for the next task, use the polite volunteering form:「次は何をしましょうか」."
    },
    {
        id: "q14",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "子供が 急に 熱を出したので、今日 少し 早めに 帰りたいです。上司に 何と 許可を 求めますか。\n社員：「部長、すみません。子供が 熱を出してしまって……今日、少し 早めに 【　　】？」",
        promptEn: "Your child suddenly got a fever, and you want to leave work a little early today. How do you ask your manager for permission?\nEmployee: 'Manager, excuse me. My child ran a fever... Could I please 【　　】 a little early today?'",
        options: [
            "早退させていただいてもよろしいでしょうか (sōtai sasete itadaite mo yoroshii deshō ka - May I receive permission to leave early? [humble])",
            "早退してあげましょうか (sōtai shite agemashō ka - Shall I leave early for you?)",
            "帰ってもかまいませんよ (kaette mo kamaimasen yo - I don't mind if you go home)",
            "帰らせなさい (kaerasenasai - Make someone go home)"
        ],
        correct: 0,
        explanation: "When asking a manager for permission to leave work early (早退 / sōtai) due to an emergency, using formal humble causative-passive keigo is best:「早退（そうたい）させていただいてもよろしいでしょうか」."
    },
    {
        id: "q15",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "居酒屋の キッチンで 調理中に、冷蔵庫の 卵が 残り少なく なっていることに 気づきました。店長に 何と言いますか。\nスタッフ：「店長、冷蔵庫の 卵が 【　　】。追加で 注文した 方が いいですか。」",
        promptEn: "While cooking in the izakaya kitchen, you notice the eggs in the fridge are running low. What do you say to the manager?\nStaff: 'Manager, the eggs in the fridge are 【　　】. Should we order more?'",
        options: [
            "もうすぐ なくなりそうです (mōsugu nakunarisō desu - look like they will run out soon)",
            "すっかり なくなりました (sukkari nakunarimashita - are completely gone)",
            "まだ たくさん あります (mada takusan arimasu - there are still plenty)",
            "全然 使っていません (zenzen tsukatte imasen - we haven't used any at all)"
        ],
        correct: 0,
        explanation: "To report that an ingredient or inventory item is running low and about to run out soon, use the conjecture form:「もうすぐなくなりそうです」."
    },
    {
        id: "q16",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "ホテルの 客室清掃中に、お客様から 新しい バスタオルが 欲しいと 頼まれました。何と 答えますか。\nお客様：「すみません、新しい バスタオルを １枚 もらえますか。」\n清掃スタッフ：「かしこまりました。すぐに 【　　】。」",
        promptEn: "While cleaning a hotel guest room, a guest asks for a new bath towel. How do you reply?\nGuest: 'Excuse me, could I get one new bath towel?'\nStaff: 'Certainly. I will 【　　】 right away.'",
        options: [
            "お持ちいたします (omochi itashimasu - bring it [humble])",
            "持ってこさせます (motte kosasemasu - make someone bring it)",
            "お持ちになってください (omochi ni natte kudasai - please hold it [honorific])",
            "持ってあげます (motte agemasu - bring it for you [informal])"
        ],
        correct: 0,
        explanation: "In hospitality (ホテル・外食業), promising to bring something to a customer requires humble keigo:「すぐにお持ちいたします」."
    },
    {
        id: "q17",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "お店が 満席で、お客様に 待合スペースで 待っていただく ときに 何と言いますか。\n店員：「申し訳ございません。ただいま 満席となっております。あちらの ソファで 【　　】。」",
        promptEn: "The restaurant is full, and you need to ask a customer to wait in the waiting area. What do you say?\nStaff: 'We are very sorry. All tables are currently full. Please 【　　】 on the sofa over there.'",
        options: [
            "少々 お待ちくださいませ (shōshō omachi kudasaimase - please wait a moment [honorific])",
            "待っていてくれ (matte ite kure - wait there [rough])",
            "待たせてあげます (matasete agemasu - I will let you wait)",
            "お待ちしております (omachi shite orimasu - We are awaiting you [humble])"
        ],
        correct: 0,
        explanation: "Asking a customer to wait politely in a service environment is expressed as:「少々（しょうしょう）お待ちくださいませ」."
    },
    {
        id: "q18",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "会社の 電話で、取引先から 「担当の 佐藤さんに 伝言を お願いできますか」と 頼まれました。何と 応じますか。\n社員：「はい、【　　】。どうぞ おっしゃってください。」",
        promptEn: "On the office phone, a client asks: 'Could I leave a message for Mr. Sato in charge?' How do you respond?\nEmployee: 'Yes, I will 【　　】. Please go ahead.'",
        options: [
            "かしこまりました。伝言を 承ります (Kashikomarimashita. Dengon o uketamawarimasu - Certainly. I will take the message [humble])",
            "分かりました。伝言を 聞いてあげます (Wakarimashita. Dengon o kiite agemasu - Understood. I will listen for you)",
            "いいですよ。伝言を 言いなさい (Ii desu yo. Dengon o iinasai - Sure. Say the message)",
            "だめです。自分で 電話してください (Dame desu. Jibun de denwa shite kudasai - No. Call him yourself)"
        ],
        correct: 0,
        explanation: "When taking a telephone message (伝言 / dengon) from a client or business partner, use humble keigo:「伝言を承り（うけたまわり）ます」."
    },
    {
        id: "q19",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "自分が 書いた レポートの 日本語に 間違いがないか、先輩に チェックしてほしいです。何と 頼みますか。\n後輩：「先輩、お忙しいところ すみません。この レポートの 日本語を 一度 【　　】。」",
        promptEn: "You want a senior coworker to check if there are any Japanese mistakes in a report you wrote. How do you ask?\nJunior: 'Senior, sorry to bother you when you are busy. Could I get you to once 【　　】 the Japanese in this report?'",
        options: [
            "チェックしていただけないでしょうか (chekku shite itadakenai deshō ka - Could I receive the favor of you checking it?)",
            "チェックしてあげましょうか (chekku shite agemashō ka - Shall I check it for you?)",
            "チェックさせてあげなさい (chekku sasete agenasai - Make me check it)",
            "チェックしたことがありませんか (chekku shita koto ga arimasen ka - Have you never checked it?)"
        ],
        correct: 0,
        explanation: "Asking a senior coworker to check or proofread your work politely is expressed as:「チェックしていただけないでしょうか」."
    },
    {
        id: "q20",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "仕事で 大変だった ときに、同僚が 手伝ってくれました。お礼を 言うとき 何と言いますか。\n従業員：「鈴木さん、さっきは 忙しいときに 【　　】、本当に 助かりました。ありがとうございました。」",
        promptEn: "When you were struggling at work, a colleague helped you. What do you say when thanking them?\nEmployee: 'Suzuki, earlier when I was busy, thank you for 【　　】; it really helped me out.'",
        options: [
            "手伝ってくれて (tetsudatte kurete - giving me the favor of helping)",
            "手伝わせてあげて (tetsudawasete agete - letting me help you)",
            "手伝うつもりで (tetsudau tsumori de - intending to help)",
            "手伝わないで (tetsudawanaide - without helping)"
        ],
        correct: 0,
        explanation: "To express gratitude to a colleague for giving you their help, use「〜てくれてありがとう」(Thank you for giving me the favor of helping me):「手伝ってくれて、本当に助かりました」."
    },
    {
        id: "q21",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "食堂の 床が 水で 濡れていて 滑りやすくなっています。通る 人に 何と 注意を 呼びかけますか。\nスタッフ：「皆さん、床が 濡れていますから、転ばないように 【　　】！」",
        promptEn: "The cafeteria floor is wet with water and slippery. What warning do you give to passersby?\nStaff: 'Everyone, the floor is wet, so please 【　　】 so that you don't slip and fall!'",
        options: [
            "足元に 気をつけてください (ashimoto ni ki o tsukete kudasai - watch your step / be careful with your feet)",
            "急いで 走ってください (isoide hashitte kudasai - please hurry and run)",
            "靴を 脱いで 歩いてください (kutsu o nuide aruite kudasai - take off your shoes and walk)",
            "目を 閉じて 通ってください (me o tojite tōtte kudasai - close your eyes and pass through)"
        ],
        correct: 0,
        explanation: "When warning people about slippery floors, stairs, or obstacles, saying「足元（あしもと）に気をつけてください」(Please watch your step) is standard Japanese safety etiquette."
    },
    {
        id: "q22",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "駅の ホームで、自分が 乗る 電車が どの 乗り場から 出るか 分かりません。駅員に 何と 聞きますか。\n旅行者：「すみません、１０時発の 新大阪行きは、どの 【　　】から 出ますか。」",
        promptEn: "On a station platform, you don't know which track your train departs from. What do you ask the station staff?\nTraveler: 'Excuse me, which 【　　】 does the 10:00 train bound for Shin-Osaka depart from?'",
        options: [
            "ホーム（乗り場） (hōmu - platform / track)",
            "レジ（お会計） (reji - cash register)",
            "エスカレーター (esukarētā - escalator)",
            "コインロッカー (koinrokkā - coin locker)"
        ],
        correct: 0,
        explanation: "Train platforms or boarding tracks in Japanese stations are called「ホーム」or「乗り場（のりば）」."
    },
    {
        id: "q23",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "ハンバーガーショップで 注文するとき、店内で 食べずに 家へ 持って帰りたいです。店員に 何と言いますか。\nお客様：「チーズバーガーセットを １つ、ここで 食べないで 【　　】。」",
        promptEn: "When ordering at a hamburger shop, you want to take it home without eating in the store. What do you say to the clerk?\nCustomer: 'One cheeseburger set, I won't eat here, so please make it 【　　】.'",
        options: [
            "持ち帰りで お願いします (mochikaeri de onegai shimasu - for takeout / to-go, please)",
            "店内で 食べます (tennai de tabemasu - I will eat in the store)",
            "配達してあげます (haitatsu shite agemasu - I will deliver it for you)",
            "自分で 作ります (jibun de tsukurimasu - I will make it myself)"
        ],
        correct: 0,
        explanation: "In Japanese fast food and restaurants, taking food home is called「持ち帰り（もちかえり / テイクアウト）」. Eating inside is「店内飲食（てんないいんしょく）」."
    },

    // ==========================================
    // SECTION 3: LISTENING COMPREHENSION (聴解) - 11 Questions
    // ==========================================
    {
        id: "q24",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】工場で 休憩時間の 終わりに 班長が 話しています。午後の 作業で 「鈴木さん」は 何を しますか。",
        promptEn: "[Audio Simulation] At the end of break time at a factory, the group leader is speaking. What will 'Mr. Suzuki' do during afternoon work?",
        audioScript: "班長：「皆さん、休憩 終わりです。午後の 作業ですが、少し 交代します。午前中に 検品（チェック）を していた 鈴木さんは、午後は 箱詰め（梱包）の ラインへ 回ってください。検品は 佐藤さんと キムさんが 担当します。」\n鈴木：「はい、分かりました。午後は 箱詰めですね。」",
        audioScriptEn: "Leader: 'Everyone, break is over. For afternoon work, we will switch around slightly. Suzuki, who was doing inspection in the morning, please move to the boxing/packing line for the afternoon. Inspection will be handled by Sato and Kim.'\nSuzuki: 'Yes, understood. Boxing in the afternoon, right?'",
        options: [
            "箱詰め（梱包）の ラインで 作業する (Work on the boxing/packing line)",
            "午前中と 同じように 検品（チェック）を する (Do inspection just like in the morning)",
            "佐藤さんと 一緒に 機械の 掃除を する (Clean the machines together with Sato)",
            "事務所で 記録シートを パソコンに入力する (Enter record sheets into PC in the office)"
        ],
        correct: 0,
        explanation: "The leader explicitly instructs:「鈴木さんは、午後は箱詰め（はこづめ）のラインへ回ってください」."
    },
    {
        id: "q25",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】介護の 職場で 栄養士と 介護士が 食事について 話しています。「高橋さん」の 今日の お昼ご飯は どう 変更になりましたか。",
        promptEn: "[Audio Simulation] At a caregiving facility, a dietitian and caregiver are talking about meals. How was 'Mr. Takahashi's' lunch changed today?",
        audioScript: "栄養士：「お疲れ様です。205号室の 高橋さんですが、最近 少し 飲み込みにくそうに しているので、今日の お昼から 普通の ご飯ではなく、【刻み食（小さく刻んだおかず）】 に 変更しました。お茶には とろみ（トロトロにする粉）を つけてください。」\n介護士：「分かりました。おかずは 刻み食で、お茶には とろみですね。」",
        audioScriptEn: "Dietitian: 'Good job. Regarding Mr. Takahashi in Room 205, since he has seemed to have some difficulty swallowing recently, starting from today's lunch we changed him from normal meals to minced food (finely chopped dishes). Please add thickening powder to his tea.'\nCaregiver: 'Understood. Minced food for side dishes, and thickener for tea.'",
        options: [
            "普通食から 【刻み食（小さく刻んだおかず）】 に 変更になった (Changed from normal food to minced food)",
            "ご飯ではなく、パンと 牛乳に 変更になった (Changed from rice to bread and milk)",
            "熱が あるので、お昼ご飯は 全部 中止になった (Lunch completely canceled due to fever)",
            "自分で 食べられないので、点滴（注射）に 変更になった (Changed to IV drip because he can't eat by himself)"
        ],
        correct: 0,
        explanation: "In SSW Kaigo, modifying textures for residents with difficulty swallowing (嚥下障害) is critical:「普通の ご飯ではなく、【刻み食】 に変更しました」."
    },
    {
        id: "q26",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】居酒屋で 店員が お客様から 注文を 聞いています。お客様は ラーメンを どう やって 注文しましたか。",
        promptEn: "[Audio Simulation] At an izakaya, a waiter is taking an order from a customer. How did the customer order their ramen?",
        audioScript: "お客様：「すみません、醤油ラーメンを １つ お願いします。あ、私、ネギが 苦手なので、【ネギ抜き（ネギを入れないこと）】で お願いできますか。」\n店員：「かしこまりました。醤油ラーメン、ネギ抜きが お一つですね。チャーシューや メンマは お入れしても よろしいですか。」\nお客様：「はい、お肉と メンマは 大好きなので 入れてください！」",
        audioScriptEn: "Customer: 'Excuse me, one soy sauce ramen please. Oh, I don't like green onions, so could you make it WITHOUT green onions (negi-nuki)?'\nWaiter: 'Certainly. One soy sauce ramen without green onions. Are roast pork and bamboo shoots okay to include?'\nCustomer: 'Yes, I love pork and bamboo shoots so please put them in!'",
        options: [
            "ネギを 入れないで（ネギ抜きで）注文した (Ordered without green onions [negi-nuki])",
            "お肉（チャーシュー）を 全部 抜いて 注文した (Ordered without any roast pork)",
            "スープを 辛くして、大盛りで 注文した (Ordered spicy soup and extra large portion)",
            "ラーメンではなく、焼きそばに 変更して 注文した (Changed order from ramen to yakisoba)"
        ],
        correct: 0,
        explanation: "To request that an ingredient be omitted due to allergy or preference, use「〜抜きで（ぬきで）」:「ネギ抜きでお願いできますか」."
    },
    {
        id: "q27",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】駅の ホームで アナウンスが 流れています。特急電車に 乗る 人は、どの ホームへ 行かなければなりませんか。",
        promptEn: "[Audio Simulation] An announcement is playing on a station platform. Which platform must passengers taking the express train go to?",
        audioScript: "アナウンス：「お客様に ご案内いたします。本日、線路の 点検工事の ため、午後３時発の 特急「さくら」号は、いつもの ２番ホームではなく、【４番ホーム】 から 出発いたします。ご利用の お客様は、階段や エスカレーターを ご利用のうえ、４番ホームへ お越しください。」",
        audioScriptEn: "Announcement: 'We have an announcement for passengers. Today, due to track inspection work, the 3:00 PM Express Sakura will depart from Platform 4 instead of the usual Platform 2. Passengers using this train, please use stairs or elevators to come to Platform 4.'",
        options: [
            "４番ホーム (Platform 4)",
            "２番ホーム (Platform 2)",
            "１番ホーム (Platform 1)",
            "３番ホーム (Platform 3)"
        ],
        correct: 0,
        explanation: "The announcement states the platform change:「いつもの２番ホームではなく、【４番ホーム】から出発いたします」."
    },
    {
        id: "q28",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】スーパーの レジで 店員が お客様に ポイントカードについて 説明しています。今日 ポイントは どう なりますか。",
        promptEn: "[Audio Simulation] At a supermarket register, a cashier is explaining point cards to a customer. What happens to points today?",
        audioScript: "店員：「お会計 ２,５００円になります。お店の ポイントカードは お持ちですか。」\nお客様：「はい、これです。」\n店員：「ありがとうございます。本日は 毎月 １０日の 【ポイント５倍デー】 ですので、通常より ５倍の １２５ポイントが ついております！来週の お買い物から １ポイント１円として お使いいただけます。」",
        audioScriptEn: "Cashier: 'Your total is 2,500 yen. Do you have our store point card?'\nCustomer: 'Yes, here it is.'\nCashier: 'Thank you. Today is the 10th of the month 5x Point Day, so 125 points (5 times normal) have been added! Starting from next week's shopping, you can use them as 1 yen per point.'",
        options: [
            "通常の ５倍の ポイントが もらえる (Receive 5 times the normal points [ポイント５倍])",
            "ポイントカードが 使えないので、ポイントは ゼロになる (Point card cannot be used, so zero points)",
            "今日 たまった ポイントで、今回のお会計が 半額になる (Today's accumulated points make this bill half price immediately)",
            "ポイントが 全部 消滅して（なくなって）しまう (All points expire and disappear completely)"
        ],
        correct: 0,
        explanation: "The cashier announces:「本日は毎月１０日の【ポイント５倍デー】ですので、通常より５倍の...」."
    },
    {
        id: "q29",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】果物の 農場（りんご畑）で 先輩が 仕分け（サイズ別に分けること）の 指示を しています。「大きいサイズ（Lサイズ）」の りんごは どの 箱に 入れますか。",
        promptEn: "[Audio Simulation] At a fruit farm (apple orchard), a senior worker is instructing how to sort by size. Which box should 'Large size (L size)' apples be put into?",
        audioScript: "先輩：「とってきた りんごを 今から サイズごとに 箱に 分けるよ。一番 大きい 【Lサイズ】の りんごは、あちらの 「赤い箱」 に 入れてくれ。中くらいの 【Mサイズ】は 「青い箱」、小さい ものや 傷がある ものは ジュース用にするから 「黄色い箱」 だよ。」\n実習生：「はい！大きい Lサイズは 赤い箱ですね！」",
        audioScriptEn: "Senior: 'We're going to sort the harvested apples into boxes by size now. Put the largest L size apples into the RED BOX over there. Medium M size goes into the BLUE BOX, and small or scratched ones will be used for juice so put them in the YELLOW BOX.'\nIntern: 'Yes! Large L size goes into the red box!'",
        options: [
            "赤い 箱 (Red box)",
            "青い 箱 (Blue box)",
            "黄色い 箱 (Yellow box)",
            "白い 箱 (White box)"
        ],
        correct: 0,
        explanation: "The senior explicitly explains:「一番大きい【Lサイズ】のりんごは、あちらの「赤い箱」に入れてくれ」."
    },
    {
        id: "q30",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】病院の 薬局で 薬剤師が 目薬（めぐすり）の 使い方を 説明しています。目薬を 差した後、何分間 目を 閉じますか。",
        promptEn: "[Audio Simulation] At a hospital pharmacy, a pharmacist is explaining how to use eye drops. How many minutes should you close your eyes after applying the drops?",
        audioScript: "薬剤師：「こちらの 目薬は、１日 ４回、朝・昼・夕方・寝る前に 両目に １滴ずつ 差してください。目薬を 差した 後は、すぐに 瞬き（パチパチすること）を しないで、目を 閉じて 【約１分間（６０秒）】 静かに 待ってください。そうすると 薬が よく 目に 浸透します。」",
        audioScriptEn: "Pharmacist: 'Please apply these eye drops 4 times a day—morning, lunch, evening, and before sleep—1 drop in each eye. After dropping the medicine, do not blink immediately; close your eyes and wait quietly for about 1 minute (60 seconds). That allows the medicine to absorb well into your eye.'",
        options: [
            "約 １分間（６０秒） (About 1 minute [60 seconds])",
            "約 １０分間 (About 10 minutes)",
            "約 ３０秒間だけ (Only about 30 seconds)",
            "１時間以上 ずっと (For over 1 hour continuously)"
        ],
        correct: 0,
        explanation: "The pharmacist instructs:「目薬を差した後は...目を閉じて【約１分間（６０秒）】静かに待ってください」."
    },
    {
        id: "q31",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】アパートの 管理人が 自転車置き場の ルールを 説明しています。自転車を 置く ときに 必ず しなければならない ことは 何ですか。",
        promptEn: "[Audio Simulation] An apartment manager is explaining the rules for the bicycle parking area. What MUST be done when parking a bicycle?",
        audioScript: "管理人：「アパートの 住民の 皆さんへ お願いです。最近、自転車置き場に 無断で 止める 人が 増えています。自転車を 止める ときは、必ず 管理人が 渡した 【黄色い 駐輪シール（ステッカー）】 を 自転車の ハンドルの 見えやすい 場所に 貼ってください。シールが ない 自転車は 来月 撤去（片付けること）します。」",
        audioScriptEn: "Manager: 'A request to all apartment residents. Recently, unauthorized parking in the bicycle area is increasing. When parking your bicycle, you MUST attach the yellow parking sticker provided by the manager on a visible part of the handlebars. Bicycles without stickers will be removed next month.'",
        options: [
            "管理人が 渡した 【黄色い 駐輪シール】 を 自転車に 貼る (Attach the yellow parking sticker provided by the manager onto the bicycle)",
            "自転車の 鍵を 毎日 管理人室の カウンターに 預けて行く (Leave bicycle keys at the manager's office counter every day)",
            "１カ月に １回、自転車置き場の 掃除と 洗車を 自分で する (Clean the bicycle parking area and wash your bike yourself once a month)",
            "夜 ８時以降は 自転車置き場に 入らないで、部屋の 前に 置く (Do not enter bike area after 8 PM; put bike in front of your room)"
        ],
        correct: 0,
        explanation: "The manager emphasizes:「必ず管理人が渡した【黄色い駐輪シール（ステッカー）】を自転車のハンドルの見えやすい場所に貼ってください」."
    },
    {
        id: "q32",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】会社の 朝礼で 総務部の 人が 発表しています。今週の 金曜日の 午後３時から 何が ありますか。",
        promptEn: "[Audio Simulation] At a company morning meeting, an HR/General Affairs staff member is making an announcement. What is happening this Friday at 3:00 PM?",
        audioScript: "総務部：「お知らせします。今週の 金曜日、午後３時から 本社ビル 全体で 【火災を 想定した 避難訓練（ひなんくんれん）】 を 行います。午後３時に 非常ベルが 鳴りますので、慌てずに ヘルメットを かぶって、エレベーターは 使わずに 階段で 南側の 駐車場へ 集まってください。」",
        audioScriptEn: "General Affairs: 'An announcement: This Friday from 3:00 PM, a fire evacuation drill will be held throughout the head office building. The emergency alarm will ring at 3:00 PM, so do not panic; put on your helmet and assemble in the south parking lot using the stairs, without using elevators.'",
        options: [
            "火災を 想定した 【避難訓練（ひなんくんれん）】 がある (There will be a fire evacuation drill [避難訓練])",
            "社員 全員で 新年会・忘年会の パーティーを する (There will be a New Year / Year-End party for all staff)",
            "インフルエンザの 予防接種（注射）を 病院の 先生にしてもらう (Doctor will come to give influenza vaccination injections)",
            "新しい パソコンと 機械の 使い方についての 勉強会がある (There will be a study session on how to use new PCs and machines)"
        ],
        correct: 0,
        explanation: "The speaker announces:「今週の金曜日、午後３時から...【火災を想定した避難訓練】を行います」."
    },
    {
        id: "q33",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】コンビニの 店長が 新しい アルバイトの 人に レジの 決まりを 教えています。お酒や タバコを 売るとき、どう しなければなりませんか。",
        promptEn: "[Audio Simulation] A convenience store manager is teaching a new part-time staff member the rules of the cash register. What must be done when selling alcohol or tobacco?",
        audioScript: "店長：「いいかい、うちの お店で ビールなどの お酒や タバコを 売るときは、法律で ２０歳 未満の 人には 売ってはいけないことになっている。もし 若い お客様が 来たら、必ず レジの 画面で 【年齢確認の ボタンを 押してもらう】 ことと、【身分証明書（IDや免許証）で 年齢を 確認する】 ことを 忘れないでね。」",
        audioScriptEn: "Manager: 'Listen, when selling alcohol like beer or tobacco at our store, by law we must not sell to people under 20. If a young-looking customer comes, never forget to have them press the age confirmation button on the screen AND check their age using ID or driver's license.'",
        options: [
            "画面の ボタンを 押してもらい、【身分証明書（ID）】 で 年齢を確認する (Have them press screen button and verify age using ID / driver's license)",
            "若い 人が 来たら、質問しないで いつでも 自由に 売ってよい (If young people come, sell freely without asking questions)",
            "お酒や タバコは、夜 １０時以降しか 売る ことが できない (Alcohol and tobacco can only be sold after 10 PM)",
            "購入する 人の 親に 電話をかけて 許可を 楽しみに 待つ (Call the purchaser's parents on the phone and wait for permission)"
        ],
        correct: 0,
        explanation: "In Japanese retail/convenience stores, age verification for alcohol and tobacco is strictly enforced:「必ずレジの画面で年齢確認のボタン...身分証明書で年齢を確認すること」."
    },
    {
        id: "q34",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】テレビの 天気予報で アナウンサーが 話しています。今日の 午後から 出かける 人は、何を 持っていった方が いいですか。",
        promptEn: "[Audio Simulation] An announcer is speaking on a TV weather forecast. What should people going out from this afternoon take with them?",
        audioScript: "アナウンサー：「今日の 関東地方は、午前中は 青空が 広がって 暖かいですが、午後から 急に 雲が 増えて、夕方には 雷を 伴う 激しい 夕立（急な大雨）が 降る 見込みです。これから お出かけになる 方は、今は 晴れていても、必ず 【折りたたみ傘（かさ）】 を カバンに入れて お出かけください。」",
        audioScriptEn: "Announcer: 'In the Kanto region today, the morning will be warm with blue skies, but clouds will suddenly increase in the afternoon, with severe thunderstorms and heavy sudden rain expected by evening. Those heading out from now, even if it is sunny now, be sure to put a folding umbrella in your bag when you go out.'",
        options: [
            "急な 雨に 備えて、【折りたたみ傘（かさ）】 を 持って行く (Take a folding umbrella [折りたたみ傘] to prepare for sudden rain)",
            "とても 寒くなるので、厚い コートと 手袋を して行く (Wear a thick coat and gloves because it will get very cold)",
            "強い 日差しが 続くので、サングラスと 帽子を 必ず 忘れない (Don't forget sunglasses and hat because strong sunlight will continue)",
            "雪が 積もるので、滑らない 長靴（ブーツ）に 履き替える (Change into non-slip snow boots because snow will accumulate)"
        ],
        correct: 0,
        explanation: "The forecaster advises:「夕方には雷を伴う激しい夕立が降る見込みです...必ず【折りたたみ傘】をカバンに入れてお出かけください」."
    },

    // ==========================================
    // SECTION 4: READING COMPREHENSION (読解) - 11 Questions
    // ==========================================
    {
        id: "q35",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【工場の非常時対応マニュアル】 を読んで 質問に 答えてください。\n\n――― 【怪我（けが）や 事故が 起こったときの 対応】 ―――\n1. 【応急処置（ファーストエイド）】 指や 手を 切ったり、やけどを したりした ときは、すぐに 現場の 「救急箱」の 消毒液や 絆創膏で 応急処置を すること。\n2. 【上司への報告】 小さな 怪我でも、必ず ５分以内に 班長・リーダーに 報告すること。自分で 「大丈夫」と 勝手に 判断しないこと。\n3. 【病院への搬送】 骨折や 出血が 止まらない 重い 怪我の 場合は、すぐに 事務所へ 連絡し、会社の 車か 救急車（１１９番）を 呼んで 病院へ 搬送すること。\n――――――――――――――――――――――――――\n\n質問：工場で 小さな 怪我（指を少し切ったなど）をした とき、どうしなければなりませんか。",
        promptEn: "Read the 【Factory Emergency Response Manual】 below and answer the question.\n[Response to Injury/Accident] 1. First aid: When cutting hand or getting burn, treat immediately using first-aid kit. 2. Report to superior: Even for minor injuries, MUST report to team leader within 5 minutes. Do not decide 'I'm okay' on your own. 3. Hospital transport: For heavy injuries/fractures, call office immediately and arrange hospital transport or ambulance (119).\n\nQuestion: What must you do when you get a minor injury (e.g., slight cut on finger) at the factory?",
        options: [
            "救急箱で 応急処置をして、小さな 怪我でも 必ず リーダーに 報告する (Treat with first-aid kit and MUST report even minor injury to leader)",
            "小さな 怪我なら 誰にも 言わないで、そのまま 我慢して 作業を 続ける (If it's minor, don't tell anyone and endure it while continuing work)",
            "すぐに １１９番に 電話して、消防車と 救急車を 工場の 中に 呼ぶ (Immediately call 119 and summon fire trucks and ambulance inside factory)",
            "その日は 仕事を やめて、無断で 家へ 帰って 寝る (Quit work for the day and go home to sleep without permission)"
        ],
        correct: 0,
        explanation: "Rule 2 states:「小さな怪我でも、必ず５分以内に班長・リーダーに報告すること。自分で勝手に判断しないこと」."
    },
    {
        id: "q36",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【介護施設のスケジュール変更のお知らせ】 を読んで 質問に 答えてください。\n\n――― 【入浴介助（お風呂）の日程変更について】 ―――\n来週の １０月１８日（火曜日）の 午後２時から、施設の １階ホールにて 「地域の 小学生による 音楽演奏会（ピアノと合唱）」 が 開催されます。\nそのため、通常は 火曜日の 午後に行っている 【２階入居者の 入浴介助】 を、以下のとおり 【火曜日の 午前中（9:30～11:30）】 に 変更いたします。\nスタッフの 皆さんは、午前中の うちに お風呂の 準備と 介助を 終え、午後は 入居者様を １階ホールへ ご案内してください。\n――――――――――――――――――――――――――\n\n質問：来週の １０月１８日（火曜日）、２階の 入居者のお風呂は いつ 行われますか。",
        promptEn: "Read the 【Caregiving Facility Schedule Change Notice】 below and answer the question.\n[Regarding Bath Assistance Schedule Change] Next week Tuesday Oct 18 from 2 PM, a musical concert by local elementary students will be held in 1F hall. Therefore, the 2nd-floor residents' bath assistance normally done on Tue afternoons will be CHANGED to TUESDAY MORNING (9:30-11:30 AM). Staff should finish bathing in the morning and guide residents to 1F hall in afternoon.\n\nQuestion: Next week on Tuesday, Oct 18, when will the 2nd-floor residents take their baths?",
        options: [
            "火曜日の 午前中（９時３０分 ～ １１時３０分） (Tuesday morning from 9:30 AM to 11:30 AM)",
            "通常どおり 火曜日の 午後２時から 音楽会と 一緒に (Tuesday afternoon from 2 PM as normal during the concert)",
            "火曜日ではなく、次の日の 水曜日の 夜８時から (Not Tuesday, but the next day Wednesday night from 8 PM)",
            "音楽演奏会が あるため、来週は お風呂が 一度も ない (Because of the concert, there are no baths at all next week)"
        ],
        correct: 0,
        explanation: "The notice explains the shift:「通常は火曜日の午後に行っている入浴介助を、【火曜日の午前中（9:30～11:30）】に変更いたします」."
    },
    {
        id: "q37",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【居酒屋のアルバイト募集の貼り紙】 を読んで 質問に 答えてください。\n\n――― 【居酒屋「さくら」ホール＆キッチンスタッフ募集！】 ―――\n・時給　　： １,２００円 （※ 夜２２：００以降は 深夜手当として 時給 １,５００円に なります！）\n・勤務時間： １７：００ ～ ２４：００ （週に ２日以上、１日 ３時間から OK！）\n・待遇　　： 交通費 全額支給、制服貸与（ユニフォーム無料）、【美味しい 「まかない（食事）」 付き！】\n・応募条件： 外国人留学生・特定技能の方 大歓迎！（日常会話ができる日本語レベル N4・A2以上）\n――――――――――――――――――――――――――\n\n質問：この アルバイトの 待遇（働くメリット）について、正しいものは どれですか。",
        promptEn: "Read the 【Izakaya Part-Time Staff Recruitment Poster】 below and answer the question.\n[Izakaya Sakura Hiring] Hourly wage: 1,200 yen (*After 22:00 night allowance makes it 1,500 yen/hr!). Hours: 17:00-24:00 (from 2 days/wk, 3 hrs/day OK). Benefits: Full transport paid, free uniform provided, delicious staff meal ('makanai') included! Conditions: International students and SSW workers welcome! (N4/A2 conversational level).\n\nQuestion: Which statement is true regarding the working benefits of this part-time job?",
        options: [
            "交通費が お店から 全額 もらえて、美味しい 食事（まかない）も ついている (Full transport fee paid by store, and delicious staff meal [makanai] is included)",
            "時給は 朝も 夜中も ずっと 同じで、夜 １０時を 過ぎても 変わらない (Hourly wage is identical morning and night without changing after 10 PM)",
            "働くための 制服（ユニフォーム）は、自分で お金を出して 買わなければならない (You must pay your own money to buy the working uniform)",
            "日本語の 能力試験 N1を持っていない 外国人は 応募することが できない (Foreigners without Japanese JLPT N1 level cannot apply at all)"
        ],
        correct: 0,
        explanation: "The poster highlights:「待遇：交通費全額支給...美味しい「まかない（食事）」付き！」."
    },
    {
        id: "q38",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【アパートの断水（だんすい）のお知らせ】 を読んで 質問に 答えてください。\n\n――― 【重要】水道管点検工事に伴う一時断水のお知らせ ―――\nアパート入居者 各位\n\n平素より アパートの 管理にご協力いただき ありがとうございます。\nこのたび、老朽化した 水道管の 取り替えおよび 点検工事を 行うことになりました。\n工事の ため、以下の 日時におきまして、【アパート全室で 断水（水が 出なくなること）】 となります。\n\n・断水日時： ２０２６年 ８月 ２６日（水） 【午後１時００分 ～ 午後５時００分】\n※ 断水期間中は、トイレ・お風呂・台所の 水が 一切 使えません。\n※ 水洗トイレの 故障の原因になりますので、断水中は トイレの レバーを 回さないでください。\n※ 必要な 飲料水や 生活用水は、工事が 始まる 午前中の うちに ヤカンや バケツに 汲み置いて（ためておいて）ください。\n――――――――――――――――――――――――――\n\n質問：８月２６日（水曜日）の 工事について、住民は どう 準備しなければなりませんか。",
        promptEn: "Read the 【Water Suspension Notice】 below and answer the question.\n[Important Notice of Temporary Water Suspension due to Plumbing Work] To all residents: Due to pipe replacement, water will be stopped in all rooms on Wed Aug 26 from 1:00 PM to 5:00 PM. *During suspension, toilets, baths, and kitchen tap water cannot be used at all. Do not flush toilet lever during suspension as it causes malfunction. Please store necessary drinking and utility water in kettles and buckets during the morning before work starts.\n\nQuestion: How should residents prepare for the plumbing work on Wednesday, August 26?",
        options: [
            "水が 出なくなるので、工事が 始まる 前の 午前中に 必要な 水を 容器に ためておく (Store necessary water in containers during the morning before water stops)",
            "午後１時から 午後５時まで、アパートの 部屋の中の 電気と テレビを 全部 切っておく (Turn off all electricity and TV in apartment room from 1 PM to 5 PM)",
            "工事中も 台所の 水だけは 出るので、お風呂の 代わりに 台所で 洗濯を する (Since kitchen water works during construction, do laundry in kitchen instead of bath)",
            "水が 止まっている 間も、トイレの レバーを 何度も 回して 洗浄し続ける (Keep turning toilet flush lever repeatedly even while water is stopped)"
        ],
        correct: 0,
        explanation: "The notes instruct:「必要な飲料水や生活用水は、工事が始まる午前中のうちにヤカンやバケツに汲み置いて（ためておいて）ください」."
    },
    {
        id: "q39",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【社内メール：健康診断結果の受け取り】 を読んで 質問に 答えてください。\n\n――― 件名：【重要】定期健康診断の結果報告書について ―――\n全社員・特定技能スタッフ 各位\n発信：人事部 健康管理室\n\n先月 実施いたしました 定期健康診断の 「結果報告書（封筒）」 が 病院より 届きました。\n個人の プライバシー保護の ため、各部署での 配布ではなく、【人事部 窓口での 直接手渡し】 といたします。\n\n◆ 受け取り場所： 本社ビル １階 人事部 カウンター\n◆ 受け取り期間： 今週 １１月 １０日（月） ～ １１月 １４日（金） の 10:00～17:00\n※ 受け取る 際は、必ず ご本人の 「社員証（IDカード）」 を 提示してください。代理人（友達や同僚）による 受け取りは できません。\n――――――――――――――――――――――――――\n\n質問：社員が 健康診断の 結果報告書を もらうとき、何が 必要ですか。",
        promptEn: "Read the 【Internal Email: Receiving Health Exam Results】 below and answer the question.\nSubject: [Important] Regarding Health Exam Results Report / To all staff. Results envelopes have arrived from hospital. For privacy protection, results will NOT be distributed in departments, but handed over directly at HR window. Place: 1F HR counter. Period: Nov 10 (Mon) to Nov 14 (Fri) 10:00-17:00. *When receiving, you MUST present your own Employee ID card. Pickup by proxy (friends/colleagues) is strictly not allowed.\n\nQuestion: What is required when an employee picks up their health examination results report?",
        options: [
            "本人が １階の 人事部 カウンターへ 行き、「社員証（IDカード）」 を 見せる (Go in person to 1F HR counter and show Employee ID card)",
            "友達や 同僚に 自分の 社員証を 渡して、代わりに もらってきてもらう (Give Employee ID card to a friend or coworker to pick it up instead)",
            "毎月のお給料の 明細書と 健康保険証を 病院の 受付へ 持って行く (Bring monthly pay stub and health insurance card to hospital reception)",
            "人事部に 電話をかけて、自分の アパートの 住所へ 郵送してもらう (Call HR department and ask them to mail results to your apartment address)"
        ],
        correct: 0,
        explanation: "The rules state:「人事部窓口での直接手渡し...必ずご本人の「社員証（IDカード）」を提示してください。代理人による受け取りはできません」."
    },
    {
        id: "q40",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【市役所のごみ分別ガイド：粗大ごみの出し方】 を読んで 質問に 答えてください。\n\n――― 【さくら市 粗大ごみ（そだいごみ）の出し方】 ―――\n布団、テーブル、ソファ、自転車などの 「大きな ごみ（粗大ごみ）」 は、通常の ごみ収集日には 出せません。以下の 手順で 捨ててください。\n\n1. 【申し込み】 市の 「粗大ごみ受付センター」 へ 電話 または インターネットで 収集日を 予約する。\n2. 【処理券の購入】 コンビニや スーパーで、予約した 金額分の 「粗大ごみ処理券（有料シール）」 を 買う。\n3. 【シールの貼り付け】 買った シールに 自分の 名前または 受付番号を 書き、ごみの 見えやすい 場所に 貼る。\n4. 【ごみ出し】 予約した 日の 朝 ８時３０分までに、自宅の 玄関前または 指定場所に ごみを 出す。\n――――――――――――――――――――――――――\n\n質問：テーブルや 自転車などの 大きな ごみを 捨てたいとき、どうしますか。",
        promptEn: "Read the 【City Hall Bulky Garbage Guide】 below and answer the question.\n[How to dispose of bulky garbage (futons, tables, sofas, bicycles)] Cannot be put out on regular garbage days. Follow these steps: 1. Apply: Reserve pickup date by phone or internet with city disposal center. 2. Buy ticket: Purchase paid recycling sticker at convenience store. 3. Attach sticker: Write name/receipt number on sticker and attach to furniture. 4. Put out: Put in front of entrance by 8:30 AM on reserved day.\n\nQuestion: What should you do when you want to throw away large bulky garbage like a table or bicycle?",
        options: [
            "センターに 予約してから コンビニで 有料シールを 買い、ごみに 貼って 指定日に 出す (Reserve with center, buy paid sticker at convenience store, attach to garbage, and put out on reserved day)",
            "予約は しないで、毎週 月曜日の 燃えるごみの 日に 有料ごみ袋に入れて 出す (Put into regular paid bags and put out on burnable trash Mondays without making a reservation)",
            "夜中の うちに、近所の 公園や 川の 近くに 誰にも 見られないように 捨てておく (Throw away secretly in nearby park or near river late at night without being seen)",
            "市役所の １階の 窓口に 直接 テーブルや 自転車を 持って行き、現金を 払う (Bring table or bicycle directly inside city hall 1F window and pay cash there)"
        ],
        correct: 0,
        explanation: "The guide outlines the formal steps:「予約する ➡ 処理券（有料シール）を買う ➡ ごみに貼る ➡ 予約した日の朝に出す」."
    },
    {
        id: "q41",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【駅のコインロッカー利用案内】 を読んで 質問に 答えてください。\n\n――― 【駅 コインロッカーのご利用規約】 ―――\n・利用料金： 小型 ４００円 / 中型 ６００円 / 大型 ８００円 （※ １日１回の 料金です）\n・利用時間： 始発（朝5:00）から 終電（深夜0:30）まで\n【重要注意事項】\n1. ロッカーの 使用期間は、利用開始日から 【最大 ３日間（７２時間）まで】 です。\n2. ４日目以降も 荷物が 残っている 場合は、管理会社が 荷物を ロッカーから 取り出し、別の 倉庫で ３０日間 保管します。\n3. ロッカーの 鍵を 紛失した（なくした）場合は、鍵の 交換代金として 【３,０００円】 を ご請求いたします。\n――――――――――――――――――――――――――\n\n質問：コインロッカーの 鍵を なくしてしまった 場合、どうなりますか。",
        promptEn: "Read the 【Station Coin Locker Usage Guide】 below and answer the question.\n[Coin Locker Terms] Small 400 yen, Med 600 yen, Large 800 yen (per day). Hours: 5:00 AM to 12:30 AM. [Important Notes] 1. Maximum locker use period is 3 DAYS (72 hours). 2. If left from 4th day, management company removes items to warehouse for 30 days. 3. If locker key is lost, a replacement key fee of 3,000 YEN will be charged.\n\nQuestion: What happens if you accidentally lose the coin locker key?",
        options: [
            "鍵の 交換代金として、３,０００円を 払わなければならない (Must pay 3,000 yen as a key replacement fee)",
            "警察署に 行かないと、ロッカーの 荷物を 二度と 返して もらえない (Unless you go to police station, luggage will never be returned)",
            "小型・中型・大型の ロッカーの 利用料金が 全部 無料になる (Usage fees for small, med, and large lockers become completely free)",
            "荷物が 自動的に ゴミとして 処分されて、すぐに 捨てられる (Luggage is automatically disposed of as trash and discarded immediately)"
        ],
        correct: 0,
        explanation: "Rule 3 clearly states:「鍵を紛失した（なくした）場合は、鍵の交換代金として【３,０００円】をご請求いたします」."
    },
    {
        id: "q42",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【ホテルの大浴場（温泉）利用ルール】 を読んで 質問に 答えてください。\n\n――― 【大浴場・露天風呂 ご利用のマナー】 ―――\n日本の 温泉や 大浴場を 皆様に 気持ちよく ご利用いただくため、以下の ルールを お守りください。\n\n1. 【入浴前の かけ湯・シャワー】 湯船（お湯のプール）に入る 前には、必ず 洗い場で 体を 洗うか、シャワーを 浴びてから 入ってください。\n2. 【タオルの 持ち込み禁止】 体を 拭く タオルや バスタオルを 湯船の お湯の中に 入れないでください。タオルは 頭の上に 乗せるか、湯船の 外に 置いてください。\n3. 【走る・泳ぐことの 禁止】 浴室内は 滑りやすいので 走らないでください。また、湯船の中で プールのように 泳が ないでください。\n――――――――――――――――――――――――――\n\n質問：お風呂の 湯船（お湯の中）に 入るとき、やってはいけない ことは どれですか。",
        promptEn: "Read the 【Hotel Public Bath (Onsen) Rules】 below and answer the question.\n[Public Bath Manners] 1. Wash first: Before entering bathtub, MUST wash body or take shower at washing area. 2. No towels in tub: Do not put body towels or bath towels into bathwater. Keep on head or outside tub. 3. No running/swimming: Floor is slippery so don't run. Do not swim in bathtub like a pool.\n\nQuestion: Which of the following is PROHIBITED when entering the bathtub water?",
        options: [
            "体を 拭く タオルや バスタオルを、お湯の 中に 一緒に 入れること (Putting body towels or bath towels into the bathwater together with you)",
            "湯船（お湯の中）に 入る 前に、シャワーを 浴びて 体を 綺麗に 洗うこと (Taking a shower and washing your body cleanly BEFORE entering bathtub)",
            "お風呂の 床が 濡れているので、走らないで ゆっくり 歩いて 通ること (Walking slowly without running because bath floor is wet)",
            "使った シャンプーや 石鹸の 泡を きれいに 水で 洗い流すこと (Rinsing away shampoo and soap bubbles cleanly with water after use)"
        ],
        correct: 0,
        explanation: "Rule 2 states:「タオルやバスタオルを湯船のお湯の中に入れないでください」. Keeping towels out of bathwater is a primary Japanese onsen manner."
    },
    {
        id: "q43",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【農業研修のスケジュール表】 を読んで 質問に 答えてください。\n\n――― 【春の農業技能研修スケジュール（５月１２日）】 ―――\n・08:30 ～ 09:00　 朝礼、安全確認、本日の 作業説明 （場所：第１倉庫）\n・09:00 ～ 11:30　 【実習①】 トマトの 苗の 植え付け作業 （場所：東側 ビニールハウス）\n・11:30 ～ 12:30　 昼食・休憩 （場所：食堂）\n・12:30 ～ 15:00　 【実習②】 野菜の 収穫と 箱詰め作業 （場所：出荷作業場）\n・15:00 ～ 15:30　 使った 道具の 洗浄（洗うこと）と 片付け、終礼\n※ 雨が 降った 場合は、【実習①】の 苗の 植え付けは 中止とし、午前中から 倉庫内で ダンボール組み立て作業を 行います。\n――――――――――――――――――――――――――\n\n質問：もし ５月１２日が 「雨」 だった 場合、午前中（09:00～11:30）に 何を しますか。",
        promptEn: "Read the 【Agricultural Training Schedule】 below and answer the question.\n[Spring Agriculture Schedule (May 12)] 8:30-9:00 Morning meeting/safety. 9:00-11:30 [Practice 1] Tomato seedling planting in East Greenhouse. 11:30-12:30 Lunch break. 12:30-15:00 [Practice 2] Vegetable harvesting and boxing. 15:00-15:30 Tool washing/cleanup. *If it rains, Practice 1 seedling planting will be CANCELED, and cardboard box assembly will be done inside warehouse from morning.\n\nQuestion: If it rains on May 12, what will be done during the morning (09:00-11:30)?",
        options: [
            "ビニールハウスでの 植え付けは 中止して、倉庫の中で ダンボール組み立てを する (Seedling planting in greenhouse is canceled; cardboard box assembly in warehouse)",
            "雨でも 予定を変えないで、東側の ビニールハウスで トマトの 苗を 植え付ける (Keep schedule without change even in rain and plant tomatoes in east greenhouse)",
            "午前中は 一切 作業を しないで、食堂で 昼食の時間（11:30）まで 自由に 休む (Do no work at all in morning and rest freely in cafeteria until lunch at 11:30)",
            "午後からの 【実習②】 野菜の 収穫と 箱詰めを 午前中に 早めて 行う (Move afternoon Practice 2 vegetable harvesting and boxing earlier to morning)"
        ],
        correct: 0,
        explanation: "The note states:「雨が降った場合は、【実習①】の苗の植え付けは中止とし、午前中から倉庫内でダンボール組み立て作業を行います」."
    },
    {
        id: "q44",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【社員寮のエアコン（冷暖房）使用ルール】 を読んで 質問に 答えてください。\n\n――― 【あさひ社員寮 エアコンの節電対策のお願い】 ―――\n電気代の 高騰および 地球環境保護の ため、寮の 部屋で エアコンを 使う ときは、以下の 設定温度を お守りください。\n\n◆ 夏の 冷房（クーラー）設定温度： 【２８度】 に 設定すること。\n◆ 冬の 暖房（ヒーター）設定温度： 【２０度】 に 設定すること。\n\n※ 部屋に 誰も いない ときや、仕事で 外出する ときは、必ず エアコンの 電源を 消してください。\n※ 窓や ドアを 開けたまま エアコンを 運転させないでください。冷たい風や 暖かい風が 逃げて、電力を 無駄に 消費します。\n――――――――――――――――――――――――――\n\n質問：この 寮で エアコンを 使うとき、正しい マナーは どれですか。",
        promptEn: "Read the 【Dormitory AC Usage Guidelines】 below and answer the question.\n[Asahi Dormitory Power Saving Request] To save electricity, keep following temperature settings: Summer cooling (cooler): Set to 28°C. Winter heating (heater): Set to 20°C. *When room is empty or when going out for work, MUST turn off AC power. *Do not operate AC while leaving windows or doors open, as conditioned air escapes and wastes power.\n\nQuestion: Which of the following is correct manner when using the air conditioner in this dormitory?",
        options: [
            "仕事で 部屋を 出る ときは、必ず エアコンの 電源を 消す (When leaving room for work, MUST turn off air conditioner power)",
            "夏の 冷房は いつも 【１８度】 の 涼しい 温度に 設定して 運転させ続ける (Always set summer cooler to a cool 18°C and keep it running constantly)",
            "新鮮な 空気が 入るように、窓や ドアを 大きく 開けたまま 暖房を つける (Turn on heater while keeping windows and doors wide open for fresh air)",
            "冬の 暖房は 電気代が かかるので、夜は エアコンの 代わりに 部屋の中で 炭火を 燃やす (Since winter heating costs money, burn charcoal indoors at night instead of AC)"
        ],
        correct: 0,
        explanation: "The guidelines instruct:「仕事で外出するときは、必ずエアコンの電源を消してください」."
    },
    {
        id: "q45",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【健康相談室（メンタルヘルス）のお知らせ】 を読んで 質問に 答えてください。\n\n――― 【外国人社員の ための 無料 健康・悩み相談室】 ―――\n日本での 仕事や 生活で、体調が 悪い ときや、人間関係で 困っている ときは、一人で 悩まないで 「健康相談室」 に ご相談ください。\n\n・相談曜日： 毎週 水曜日と 金曜日 （午後１時 ～ 午後６時）\n・相談場所： 本社ビル ３階 ３０２号室 （※ オンライン相談も 可能です）\n・対応言語： 日本語、英語、ベトナム語、タガログ語、インドネシア語\n・費用　　： 【無料（お金は かかりません）】\n・秘密守秘： 相談した 内容は、本人の 許可なく 会社の上司や 同僚に 伝えることは 絶対に ありません。プライバシーは 完全に 守られます。\n――――――――――――――――――――――――――\n\n質問：この 「健康・悩み相談室」 について、正しい 説明は どれですか。",
        promptEn: "Read the 【Health & Counseling Office Notice】 below and answer the question.\n[Free Health & Counseling for Foreign Staff] If struggling with health or relationships in Japan, consult us without worrying alone. Days: Wed & Fri (1-6 PM). Place: Head Office 3F Room 302 (Online also OK). Languages: Japanese, English, Vietnamese, Tagalog, Indonesian. Cost: FREE. Privacy: Contents of consultation will NEVER be told to supervisors or coworkers without your permission. Privacy is 100% protected.\n\nQuestion: Which statement is true regarding this Health & Counseling Office?",
        options: [
            "お金は かからなくて、相談した 内容は 会社の上司や 同僚には 秘密に される (It does not cost money, and what you consult about is kept secret from supervisors and coworkers)",
            "日本語しか 使えないので、日本語が 上手な 外国人しか 相談する ことが できない (Only Japanese can be used, so only foreigners skilled in Japanese can consult)",
            "相談する ためには、１回 ５,０００円の 有料チケットを お店で 買わなければならない (To consult, you must buy a paid 5,000 yen ticket at a store each time)",
            "相談した 内容は 全て、次の日の 朝礼で 社員全員の前で マイクで 発表される (Everything consulted about is announced on microphone in front of all staff at next day's meeting)"
        ],
        correct: 0,
        explanation: "The notice guarantees:「費用：【無料】...秘密守秘：相談した内容は、本人の許可なく会社の上司や同僚に伝えることは絶対にありません」."
    }
];
