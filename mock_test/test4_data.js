// test4_data.js - JFT-Basic SSW Mock Test 4 Datastore (45 Questions)
// Aligned with CEFR A2 / Irodori & Genki Elementary Japanese
// Focus: Agriculture (Crop & Livestock), Food Processing, Hygiene Management (HACCP), & Quality Control

const jftExamData = [
    // ==========================================
    // SECTION 1: SCRIPT AND VOCABULARY (文字と語彙) - 12 Questions
    // ==========================================
    {
        id: "q1",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "農場で 新鮮な 【野菜】を 朝早く 収穫します。【野菜】の 正しい 読み方は どれですか。",
        promptEn: "We harvest fresh 【野菜】 early in the morning at the farm. What is the correct reading of 【野菜】?",
        options: [
            "やさい (yasai - vegetables)",
            "くだもの (kudamono - fruit)",
            "しょくぶつ (shokubutsu - plants)",
            "のうさく (nōsaku - crops)"
        ],
        correct: 0,
        explanation: "「野菜（やさい）」means vegetables. Fruit is「果物（くだもの）」and farm crops are「農作物（のうさくもつ）」."
    },
    {
        id: "q2",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "お肉や 魚の 鮮度を 保つ ため、５度以下の 【れいぞう】庫で 保存してください。正しい 漢字は どれですか。",
        promptEn: "To maintain the freshness of meat and fish, store them in a 【れいぞう】 refrigerator below 5°C. Which kanji matches?",
        options: [
            "冷蔵 (reizō - refrigeration / chilling)",
            "冷凍 (reitō - freezing / freezer)",
            "冷気 (reiki - cold air)",
            "冷温 (reion - cold temperature)"
        ],
        correct: 0,
        explanation: "「冷蔵（れいぞう）」means chilling or refrigeration (usually 0°C to 5°C). A freezer below -18°C is「冷凍（れいとう）」."
    },
    {
        id: "q3",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "食品製造の 工場では、食中毒を 防ぐ ための 【衛生】管理が 一番 大切です。【衛生】の 読み方は どれですか。",
        promptEn: "In food manufacturing factories, 【衛生】 management to prevent food poisoning is most important. What is the reading?",
        options: [
            "えいせい (eisei - hygiene / sanitation)",
            "えいぎょう (eigyō - business / sales)",
            "あんぜん (anzen - safety)",
            "けんこう (kenkō - health)"
        ],
        correct: 0,
        explanation: "「衛生（えいせい）」means hygiene or sanitation. In SSW Food Processing (飲食料品製造業), hygiene management (衛生管理) is rule #1."
    },
    {
        id: "q4",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "泥が ついた ニンジンや ジャガイモを、きれいな 水で 十分に 【せんじょう】します。正しい 漢字は どれですか。",
        promptEn: "We thoroughly 【せんじょう】 muddy carrots and potatoes with clean water. Which kanji matches?",
        options: [
            "洗浄 (senjō - washing / cleansing)",
            "洗面 (senmen - washing face)",
            "洗濯 (sentaku - laundry)",
            "清掃 (seisō - facility cleaning)"
        ],
        correct: 0,
        explanation: "「洗浄（せんじょう）」is the technical/industrial term for washing or cleaning food ingredients, machines, or containers."
    },
    {
        id: "q5",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "トレーに 入れた お肉を、機械で ラップフィルムで きれいに 【包装】します。【包装】の 読み方は どれですか。",
        promptEn: "We cleanly 【包装】 meat placed in trays using plastic wrap on a machine. What is the reading of 【包装】?",
        options: [
            "ほうそう (hōsō - packaging / wrapping)",
            "はっそう (hassō - shipping / sending)",
            "せいそう (seisō - cleaning)",
            "たいそう (taisō - gymnastics / exercise)"
        ],
        correct: 0,
        explanation: "「包装（ほうそう）」means packaging or wrapping food products for sale or shipment."
    },
    {
        id: "q6",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "食品の 中に 髪の毛や 金属の 破片などの 【異物】が 入らないように 注意してください。【異物】の 読み方は どれですか。",
        promptEn: "Be careful so that 【異物】 such as hair or metal fragments do not get into the food. What is the reading?",
        options: [
            "いぶつ (ibutsu - foreign matter / contamination)",
            "いもつ (imotsu - false reading)",
            "よぶつ (yobutsu - spare items)",
            "かいぶつ (kaibutsu - monster)"
        ],
        correct: 0,
        explanation: "「異物（いぶつ）」means foreign matter or contaminants (hair, insects, plastic, metal). Preventing contamination is called「異物混入防止（いぶつこんにゅうぼうし）」."
    },
    {
        id: "q7",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "畑の 虫を 殺す ために 【のうやく】を まく ときは、マスクと ゴーグルを つけてください。正しい 漢字は どれですか。",
        promptEn: "When spraying 【のうやく】 to kill insects in the field, wear a mask and goggles. Which kanji matches?",
        options: [
            "農薬 (nōyaku - pesticide / agricultural chemicals)",
            "農具 (nōgu - farming tools)",
            "農業 (nōgyō - agriculture)",
            "肥料 (hiryō - fertilizer)"
        ],
        correct: 0,
        explanation: "「農薬（のうやく）」means pesticides or agricultural chemicals. Plant nutrients or fertilizers are called「肥料（ひりょう）」."
    },
    {
        id: "q8",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "ビニールハウスで 育てた 赤い トマトを 一つずつ 丁寧に 【しゅうかく】します。正しい 漢字は どれですか。",
        promptEn: "We carefully 【しゅうかく】 red tomatoes grown in the greenhouse one by one. Which kanji matches?",
        options: [
            "収穫 (shūkaku - harvest / crop picking)",
            "収納 (shūnō - storage / putting away)",
            "収集 (shūshū - collection / gathering)",
            "出荷 (shukka - shipping / forwarding)"
        ],
        correct: 0,
        explanation: "To harvest or pick crops (tomatoes, strawberries, rice, vegetables) is「収穫（しゅうかく）する」."
    },
    {
        id: "q9",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "食品加工の 作業室に 入る 前には、石鹸（せっけん）と 消毒液で ３０秒以上 【　　】を 行わなければなりません。",
        promptEn: "Before entering the food processing room, you must perform 【　　】 for over 30 seconds using soap and disinfectant.",
        options: [
            "手洗い（てあらい - handwashing）",
            "うがい（ugai - gargling / rinsing mouth）",
            "歯磨き（はみがき - teeth brushing）",
            "お風呂（おふろ - taking a bath）"
        ],
        correct: 0,
        explanation: "Hygienic handwashing (手洗い / tearai) for 30+ seconds is the mandatory first step before food handling."
    },
    {
        id: "q10",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "作業着の 上に ついた 髪の毛や ほこりを 取る ために、部屋の 入口で 【　　】を 体の 全体に かけました。",
        promptEn: "To remove hair and dust attached to the work uniform, I applied a 【　　】 all over my body at the room entrance.",
        options: [
            "粘着ローラー（コロコロ） (nenchaku rōrā - adhesive lint roller)",
            "掃除機（そうじき - vacuum cleaner）",
            "モップ（moppu - floor mop）",
            "消火器（しょうかき - fire extinguisher）"
        ],
        correct: 0,
        explanation: "Adhesive lint rollers (粘着ローラー / コロコロ) are universally used in food plants to strip hair and lint from uniforms before entering."
    },
    {
        id: "q11",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "お弁当や 生肉などの 傷みやすい 食品に 表示される、「安全に 食べられる 期限（日にち）」 のことを 何と 言いますか。",
        promptEn: "What is the term for the 'safe-to-eat deadline date' displayed on perishable foods like lunch bento and raw meat?",
        options: [
            "消費期限（しょうひきげん - use-by date / expiration date for perishables）",
            "賞味期限（しょうみきげん - best-by date / flavor shelf life for snacks/canned goods）",
            "製造年月日（せいぞうねんがっぴ - manufacturing date）",
            "出荷予定日（しゅっかよていび - scheduled shipping date）"
        ],
        correct: 0,
        explanation: "消費期限 (Use-by date) is for rapidly spoiling foods (bento, meat, milk); eating after this date is hazardous. 賞味期限 (Best-by date) is for long-lasting foods (snack foods, canned goods)."
    },
    {
        id: "q12",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "冬でも 暖かい 温度を 保って 野菜や 花を 育てる ための、透明な シートで作られた 農業用の 建物を 何と 言いますか。",
        promptEn: "What is the agricultural structure made of transparent sheets used to grow vegetables and flowers by maintaining warm temperatures even in winter?",
        options: [
            "ビニールハウス (binīru hausu - plastic greenhouse)",
            "アパート (apāto - apartment building)",
            "ガレージ (garēji - car garage)",
            "コインランドリー (koinrandorī - laundromat)"
        ],
        correct: 0,
        explanation: "In Japanese agriculture, plastic greenhouses are called「ビニールハウス」or simply「ハウス」."
    },

    // ==========================================
    // SECTION 2: CONVERSATION AND EXPRESSION (会話と表現) - 11 Questions
    // ==========================================
    {
        id: "q13",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "野菜カットの ラインで、キャベツを 切る 大きさが 分かりません。リーダーに 何と 質問しますか。\n実習生：「リーダー、この キャベツは どのくらいの 大きさに 【　　】。」",
        promptEn: "On the vegetable cutting line, you don't know what size to cut the cabbage. How do you ask the leader?\nIntern: 'Leader, what size 【　　】 this cabbage?'",
        options: [
            "切れば いいですか (kireba ii desu ka - should I cut?)",
            "切る ことが できませんか (kiru koto ga dekimasen ka - can you not cut?)",
            "切らせて あげましょうか (kirasete agemashō ka - shall I let you cut?)",
            "切った ことが ありませんか (kitta koto ga arimasen ka - have you never cut?)"
        ],
        correct: 0,
        explanation: "When asking a supervisor for instruction on specifications or methods, use the conditional advice form:「〜ばいいですか / 〜たらいいですか」."
    },
    {
        id: "q14",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "包装機械で ラップされた 食品パックの シールが ちゃんと 閉まっていません。班長に 何と 報告しますか。\n作業員：「班長、パックの シールが うまく 閉まっていませんが、【　　】。」",
        promptEn: "The seal on a food pack wrapped by the packaging machine is not closing properly. How do you report to the leader?\nWorker: 'Leader, the pack seal is not closing well. What 【　　】?'",
        options: [
            "どう しましょうか (dō shimashō ka - what shall we do / how should I handle this?)",
            "どうでも いいですよ (dōdemo ii desu yo - it doesn't matter / anything is fine)",
            "勝手に 捨てておきます (katte ni sutete okimasu - I'll throw it away without asking)",
            "明日の 朝 直します (ashita no asa naoshimasu - I'll fix it tomorrow morning)"
        ],
        correct: 0,
        explanation: "When discovering a packaging defect or equipment glitch, immediately reporting and asking for instructions is expressed as:「どうしましょうか / どうすればいいですか」."
    },
    {
        id: "q15",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "食品を 触る ときに つけている ゴム手袋に 穴が 開いて 破れてしまいました。リーダーに 何と 許可を 求めますか。\nスタッフ：「手袋が 破れてしまったので、新しい ものに 【　　】？」",
        promptEn: "A hole opened and tore the rubber gloves you wear when handling food. How do you ask the leader for permission?\nStaff: 'My gloves tore, so could I please 【　　】 with new ones?'",
        options: [
            "交換しても いいですか (kōkan shite mo ii desu ka - is it okay if I exchange/replace?)",
            "投げ捨てても いいですか (nagesutete mo ii desu ka - is it okay if I throw them away?)",
            "素手で 触っても いいですか (sude de sawatte mo ii desu ka - is it okay if I touch with bare hands?)",
            "隠しておいても いいですか (kakushite oite mo ii desu ka - is it okay if I hide them?)"
        ],
        correct: 0,
        explanation: "Torn gloves in food processing are a major contamination risk. Asking permission to replace them is:「新しいものに交換してもいいですか」."
    },
    {
        id: "q16",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "届いた 生のお肉を 保管する 場所を、先輩の 指示を 繰り返して 確認します。\n実習生：「確認させてください。この 生肉は、冷凍庫ではなく 【　　】。」",
        promptEn: "You repeat back the senior's instruction to confirm where to store delivered raw meat.\nIntern: 'Please let me confirm. This raw meat goes into the refrigerator, NOT the freezer, 【　　】?'",
        options: [
            "冷蔵庫に 入れるんですね (reizōko ni irerun desu ne - put into the refrigerator, right?)",
            "ゴミ箱に 捨てるんですね (gomibako ni suterun desu ne - throw into trash box, right?)",
            "私の アパートへ 持って帰るんですね (watashi no apāto e motte kaerun desu ne - take home to my apartment, right?)",
            "外の 駐車場に 置くんですね (soto no chūshajō ni okun desu ne - put in outdoor parking lot, right?)"
        ],
        correct: 0,
        explanation: "Repeating back temperature and storage instructions using「〜んですね / 〜ですね」ensures food safety compliance."
    },
    {
        id: "q17",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "ビニールハウスで トマトを 収穫するとき、どのくらい 赤くなったものを 採ればいいか 聞きます。\nスタッフ：「先輩、トマトは このくらい 赤くなったら、【　　】？」",
        promptEn: "When harvesting tomatoes in the greenhouse, you ask how red they should be before picking.\nStaff: 'Senior, once the tomatoes turn about this red, is it okay if I 【　　】?'",
        options: [
            "収穫しても いいですか (shūkaku shite mo ii desu ka - harvest them?)",
            "足で 踏み潰しても いいですか (ashi de fumitsubushite mo ii desu ka - crush them with my feet?)",
            "ペンキで 赤く 塗っても いいですか (penki de akaku nutte mo ii desu ka - paint them red with paint?)",
            "来年まで 放っておいても いいですか (rainen made hōtte oite mo ii desu ka - leave them alone until next year?)"
        ],
        correct: 0,
        explanation: "Asking permission to harvest crops when they reach maturity is expressed as:「収穫（しゅうかく）してもいいですか / 採（と）ってもいいですか」."
    },
    {
        id: "q18",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "食品工場の 床が 洗浄水で 濡れていて とても 滑りやすくなっています。通る 人に 何と 注意を 呼びかけますか。\nスタッフ：「皆さん、床が 水で 滑りますから、走らないで 【　　】！」",
        promptEn: "The food factory floor is wet with washing water and very slippery. What warning do you give to passersby?\nStaff: 'Everyone, the floor is slippery with water, so please don't run and 【　　】!'",
        options: [
            "気をつけて 歩いてください (ki o tsukete aruite kudasai - please walk carefully / watch your step)",
            "目を 閉じて ジャンプしてください (me o tojite janpu shite kudasai - close your eyes and jump)",
            "スケートのように 滑って遊んでください (sukēto no yō ni subette asonde kudasai - slide and play like skating)",
            "靴を 脱いで 泳いでください (kutsu o nuide oyoide kudasai - take off your shoes and swim)"
        ],
        correct: 0,
        explanation: "Wet floors in food processing plants cause slips and falls. Warning people to walk carefully is:「走らないで気をつけて歩いてください / 足元に気をつけてください」."
    },
    {
        id: "q19",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "午前の 作業だった 「ニンジンの 洗浄」 が 全て 終わりました。リーダーに 次の 指示を 仰ぎます。\n作業員：「リーダー、ニンジンの 洗浄が 終わりましたが、次は 【　　】。」",
        promptEn: "The morning task of 'washing carrots' is all finished. How do you ask the leader for your next instruction?\nWorker: 'Leader, washing the carrots is finished. What 【　　】 next?'",
        options: [
            "箱詰めを 始めましょうか (hakozume o hajime mashō ka - shall I begin boxing / packing?)",
            "家に 帰って 寝ましょうか (ie ni kaette nemashō ka - shall I go home and sleep?)",
            "ニンジンを 全部 捨てましょうか (ninjin o zenbu sutemashō ka - shall I throw all carrots away?)",
            "ここで パーティーを 始めましょうか (koko de pātī o hajime mashō ka - shall we start a party here?)"
        ],
        correct: 0,
        explanation: "Proactively volunteering to start the next processing step (e.g. boxing/packing / 箱詰め) shows great SSW teamwork:「次は〜を始めましょうか」."
    },
    {
        id: "q20",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "リーダーが 「作業室に入る 前は、石鹸をつけて 指の間まで しっかり 手洗いをしてね」 と 指導してくれました。何と 答えますか。",
        promptEn: "The leader instructed: 'Before entering the workroom, be sure to wash your hands thoroughly between your fingers using soap.' How do you respond?",
        options: [
            "はい、石鹸を つけて 指の間まで しっかり 洗います (Hai, sekken o tsukete yubi no aida made shikkari araimasu - Yes, I will wash thoroughly between my fingers with soap)",
            "いいえ、面倒くさいから 水だけで ３秒 洗います (Iie, mendōkusai kara mizu dake de sanbyō araimasu - No, it's bothersome so I'll wash for 3 seconds with just water)",
            "あなたが 私の 手を 洗ってください (Anata ga watashi no te o araite kudasai - YOU wash my hands for me)",
            "手袋を するから 手は 一生 洗いません (Tebukuro o suru kara te wa isshō araimasen - I wear gloves so I will never wash my hands in my life)"
        ],
        correct: 0,
        explanation: "Acknowledge hygiene rules clearly and repeat the key action:「はい、しっかり洗います」."
    },
    {
        id: "q21",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "収穫した キャベツが入った 箱は ２５キログラム以上あり、とても 重いです。隣の 同僚に 何と 頼んで 運びますか。\n実習生：「グエンさん、この キャベツの 箱は とても 重いので、一緒に 【　　】？」",
        promptEn: "The box containing harvested cabbage weighs over 25 kg and is very heavy. How do you ask the coworker next to you to help carry it?\nIntern: 'Nguyen, this cabbage box is very heavy, so could we together 【　　】?'",
        options: [
            "運んでもらえませんか (hakonde moraemasen ka - Could I get you to carry it with me?)",
            "投げてみませんか (nagete mimasen ka - Shall we try throwing it?)",
            "食べてしまいましょうか (tabete shimaimashō ka - Shall we eat it all up?)",
            "燃やしてしまいましょうか (moyashite shimaimashō ka - Shall we burn it up?)"
        ],
        correct: 0,
        explanation: "Asking for teamwork to carry heavy farm harvest crates safely is:「一緒に運んでもらえませんか / 一緒に持ってください」."
    },
    {
        id: "q22",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "昼間に 太陽の 光が 強く、ビニールハウスの 中の 温度が ３５度を 超えて 暑くなりました。農場長に 何と 相談しますか。\nスタッフ：「ハウスの中が とても 暑いので、温度を 下げるために サイドの 窓シートを 【　　】？」",
        promptEn: "The sunlight is strong during the day, and the temperature inside the greenhouse exceeded 35°C and got very hot. How do you consult the farm manager?\nStaff: 'It's very hot inside the greenhouse, so to lower the temp, could I please 【　　】 the side window sheets?'",
        options: [
            "開けても いいですか (akete mo ii desu ka - is it okay if I open?)",
            "ハサミで 全部 切って捨てても いいですか (hasami de zenbu kitte sutete mo ii desu ka - is it okay if I cut them all off with scissors and throw away?)",
            "ストーブを まだ つけても いいですか (sutōbu o mada tsukete mo ii desu ka - is it okay if I turn on more heaters?)",
            "トマトの 苗を 引き抜いても いいですか (tomato no nae o hikinuitte mo ii desu ka - is it okay if I pull out the tomato plants?)"
        ],
        correct: 0,
        explanation: "In agriculture, regulating greenhouse temperature via side vents (換気 / サイド巻上げ) is critical. Ask:「開けてもいいですか」."
    },
    {
        id: "q23",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "レタスの 検品作業中、葉っぱの 裏に 小さな 虫が １匹 ついているのを 見つけました。リーダーに 何と 報告しますか。\n作業員：「リーダー、レタスに 虫が ついていたので、虫を 取り除いて 【　　】。」",
        promptEn: "During lettuce inspection, you found a small insect on the back of a leaf. How do you report to the leader?\nWorker: 'Leader, there was an insect on the lettuce, so I removed the insect and 【　　】.'",
        options: [
            "別の 「再洗浄（もう一度洗う）カゴ」 に 入れました (put it into the separate 're-washing basket')",
            "そのまま 正常な 出荷用パックに 詰め込みました (stuffed it directly into the normal shipping pack as is)",
            "私の お昼ご飯の サラダとして 食べました (ate it as my own lunch salad)",
            "工場の 床の上に 投げ捨てて 踏み潰しました (threw it onto factory floor and crushed it with my foot)"
        ],
        correct: 0,
        explanation: "When finding insects or dirt on vegetables during inspection, removing the contaminant and sending the item for re-washing (再洗浄) is proper protocol."
    },

    // ==========================================
    // SECTION 3: LISTENING COMPREHENSION (聴解) - 11 Questions
    // ==========================================
    {
        id: "q24",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】食品製造工場の 入室前の 洗面室で、リーダーが 新人に 衛生手順を 説明しています。エアシャワーに入る 前に、何分間 コロコロ（粘着ローラー）を かけますか。",
        promptEn: "[Audio Simulation] In the washroom before entering the food processing plant, the leader is explaining hygiene procedures to a newcomer. For how many minutes must you use the adhesive lint roller (Korokoro) before entering the air shower?",
        audioScript: "リーダー：「これから 食品加工室に入る ルールを 教えるよ。まず、石鹸で ３０秒以上 手を 洗って アルコール消毒を すること。次に、作業服に ついた 髪の毛や ほこりを 取る ために、鏡を 見ながら 【少なくとも １分間（６０秒）】、体の 前も 後ろも 丁寧に 粘着ローラー（コロコロ）を かけてくれ。それが 終わったら エアシャワーの 部屋に入っていいよ。」",
        audioScriptEn: "Leader: 'I'll teach you the rules for entering the food processing room now. First, wash hands with soap for over 30 secs and disinfect with alcohol. Next, to remove hair and dust on your uniform, look in the mirror and apply the adhesive lint roller (Korokoro) carefully over your front and back FOR AT LEAST 1 MINUTE (60 SECONDS). Once finished, you can enter the air shower room.'",
        options: [
            "少なくとも 【１分間（６０秒）】 (For at least 1 minute [60 seconds])",
            "ほんの 【５秒間】 だけ (For only just 5 seconds)",
            "１時間以上 ずっと (For over 1 hour continuously)",
            "コロコロは 使わなくてよい (No need to use the lint roller at all)"
        ],
        correct: 0,
        explanation: "The leader instructs:「少なくとも【１分間（６０秒）】、体の前も後ろも丁寧に粘着ローラーをかけてくれ」."
    },
    {
        id: "q25",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】農場で 先輩が キュウリの 収穫方法を 指導しています。どんな キュウリを 収穫しなければなりませんか。",
        promptEn: "[Audio Simulation] At a farm, a senior is teaching how to harvest cucumbers. Which kind of cucumbers must be harvested?",
        audioScript: "先輩：「今日の キュウリの 収穫基準を 説明するよ。まだ 小さい キュウリを 採ってはいけない。こちらの 【長さが ２０センチメートル以上 に 大きくなった キュウリ】 だけを 選んで、ハサミで 茎を 切って 黄色い カゴに入れてくれ。２０センチ以下の 短い ものは 明日まで 畑に 残して 大きくするんだよ。」\n実習生：「はい！２０センチ以上の 長い キュウリだけを 収穫ですね！」",
        audioScriptEn: "Senior: 'Here are the cucumber harvesting standards today. Do not pick small cucumbers yet. Choose only CUCUMBERS THAT HAVE GROWN LONGER THAN 20 CENTIMETERS, cut the stem with scissors, and put them in the yellow basket. Leave short ones under 20cm in the field until tomorrow to grow.'\nIntern: 'Yes! Harvest only long cucumbers over 20cm!'",
        options: [
            "長さが 【２０センチメートル以上】 に 大きくなった キュウリ (Cucumbers that have grown longer than 20 centimeters)",
            "長さが 【１０センチ以下の 短くて 小さい】 キュウリ (Short and small cucumbers under 10 centimeters)",
            "黄色く 枯れて 腐ってしまった 古い キュウリ (Old cucumbers that turned yellow, withered, and rotted)",
            "畑の 土の中に 埋まっている 根っこだけの キュウリ (Only cucumber roots buried underground in field soil)"
        ],
        correct: 0,
        explanation: "The senior specifies:「【長さが２０センチメートル以上になったキュウリ】だけを選んで...収穫してくれ」."
    },
    {
        id: "q26",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】お弁当製造工場の キッチンで、品質管理の 人が ハンバーグの 加熱温度を チェックしています。食中毒を 防ぐために、お肉の 中心の 温度を 何度以上に しなければなりませんか。",
        promptEn: "[Audio Simulation] In the kitchen of a bento plant, quality control is checking hamburger patty cooking temperatures. To prevent food poisoning, what minimum temperature must the center of the meat reach?",
        audioScript: "品質管理：「お疲れ様です。お弁当に 入れる ハンバーグを 焼く ときは、O157などの 食中毒菌を 完全に 殺す ために、必ず 温度計を お肉の 真ん中に 刺して、【中心温度が ７５度以上 で、１分間以上 加熱されている】 ことを 確認して 記録してください。７５度より 低い と 食中毒の 危険が ありますから 厳守してくださいね。」",
        audioScriptEn: "Quality Control: 'Good job. When grilling hamburger patties for lunch boxes, to completely kill food poisoning bacteria like O157, always insert a thermometer into the center of the meat and verify that the CORE TEMPERATURE REACHES 75°C OR HIGHER FOR AT LEAST 1 MINUTE, and log it. Below 75°C poses food poisoning risks so follow this strictly.'",
        options: [
            "お肉の 中心の 温度が 【７５度以上】 で、１分間以上 加熱する (Core temperature of 75°C or higher, heated for at least 1 minute)",
            "お肉の 中心の 温度が 【３０度】 程度の 生温かい 温度 (Lukewarm temperature around 30°C in the center of meat)",
            "お肉の 中心の 温度が 【０度以下】 で 凍っている 状態 (Frozen state below 0°C in the center of meat)",
            "温度計は 使わずに、お肉の 表面の 焦げ目だけの 見た目で 判断する (Judge by surface browning appearance alone without using thermometer)"
        ],
        correct: 0,
        explanation: "HACCP core temperature regulation (中心温度７５℃以上・１分間以上加熱) is universal in Japanese food processing."
    },
    {
        id: "q27",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】包装ラインで 金属探知機（きんぞくたんちき）の ブザーが 鳴りました。作業員は どう しなければなりませんか。",
        promptEn: "[Audio Simulation] The metal detector buzzer sounded on the packaging line. What must the worker do?",
        audioScript: "班長：「いいかい、もし 包装コンベアの 金属探知機が 「ピピピ！」 と ブザーを 鳴らして 自動停止したら、パックの中に 金属の 破片が 入っている 可能性がある。だから、絶対に その パックを 出荷箱に入れないで、コンベアの上から 取り出して 【赤い 「保留（ほりゅう）ボックス」】 に 入れてくれ。すぐに 品質リーダーが 中身を エックス線で 調べるからね。」",
        audioScriptEn: "Leader: 'Listen, if the metal detector on the packaging conveyor beeps 'Pi-Pi-Pi!' and stops automatically, there may be metal fragments inside the pack. Therefore, NEVER put that pack into the shipping box; remove it from the conveyor and put it into the RED 'HOLD BOX' (Horyu box). The quality leader will immediately check inside using X-ray.'",
        options: [
            "パックを 取り出して 【赤い 「保留（ほりゅう）ボックス」】 に 入れて、リーダーを 呼ぶ (Remove the pack, put it into the red 'Hold Box', and call the leader)",
            "ブザーの 音を 無視して、そのまま 正常な 完成品の 出荷箱に 詰め込む (Ignore buzzer sound and stuff pack into normal shipping box as is)",
            "金属探知機が 壊れている と 思って、探知機の 電源を 切って 作業を 続ける (Assume detector is broken, turn off detector power, and keep working)",
            "パックの ビニールを ハサミで 破って、素手で 中のお肉を かき回して 探す (Tear open plastic pack with scissors and dig around barehanded inside meat to search)"
        ],
        correct: 0,
        explanation: "When automated inspection alarms (金属探知機反応), the affected pack must be isolated (保留ボックス / 隔離) and investigated by QC."
    },
    {
        id: "q28",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】畜産農場（牛を飼う牧場）で、先輩が 子牛に あげる ミルクの 準備を 指示しています。ミルクの 温度は 何度ぐらいに 温めなければなりませんか。",
        promptEn: "[Audio Simulation] At a livestock farm (cattle ranch), a senior is instructing how to prepare milk for baby calves. To what temperature should the milk be warmed?",
        audioScript: "先輩：「おはよう。今から 生まれたばかりの 子牛に ミルクを 飲ませるよ。冷たい 水のような ミルクを あげると、子牛が お腹を 壊して 下痢（げり）を してしまうんだ。だから、必ず 鍋で 温めて、牛のお母さんの おっぱいの 温度と同じ 【約３８度（人肌より少し暖かい温度）】 に 調整してから 哺乳瓶（ほにゅうびん）に入れて 飲ませてくれ。」",
        audioScriptEn: "Senior: 'Good morning. We are going to feed milk to the newborn baby calves now. If you give them cold water-like milk, their stomachs will get sick and cause diarrhea. Therefore, be sure to warm it in a pot, adjust it to ABOUT 38°C (slightly warmer than human body temp) matching the mother cow's milk temp, put it in nursing bottles, and feed them.'",
        options: [
            "牛のお母さんと同じ 【約３８度（人肌より少し暖かい温度）】 (About 38°C [slightly warmer than human body temp] matching mother cow)",
            "冷蔵庫から 出したばかりの 【０度 〜 ４度】 の 冷たい 温度 (Cold temperature between 0°C and 4°C fresh out of refrigerator)",
            "沸騰（ふっとう）させたばかりの 【１００度】 の 熱湯の 温度 (Boiling hot water temperature of 100°C right after boiling)",
            "電子レンジで 加熱した 【６０度以上】 の とても 熱い 温度 (Very hot temperature over 60°C heated in microwave)"
        ],
        correct: 0,
        explanation: "In SSW Livestock farming (畜産業), feeding calves milk at body temperature (約３８℃) prevents digestive illness and diarrhea."
    },
    {
        id: "q29",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】イチゴ農園で、収穫した イチゴの 仕分け作業を しています。傷が なくて 大きく 綺麗な イチゴは、どの パックに入れますか。",
        promptEn: "[Audio Simulation] At a strawberry farm, harvested strawberries are being sorted. Which pack do large, beautiful strawberries without scratches go into?",
        audioScript: "農園長：「採って来た イチゴを 今から ２つの 種類に 分けるよ。まず、傷が 一つもなく、大きくて 形が 綺麗な イチゴは、デパートで 売る 【赤い ギフト用パック（Aランク）】 に 丁寧に 並べてくれ。少し 形が 曲がっていたり、小さい イチゴは、スーパーの 割引セールで 売るから 「白い パック（Bランク）」 に 入れてね。」",
        audioScriptEn: "Farm Manager: 'We're going to sort harvested strawberries into two types now. First, large, beautifully shaped strawberries without a single scratch should be carefully arranged in RED GIFT PACKS (Rank A) sold at department stores. Small ones or slightly bent shapes will be sold on supermarket discount sales, so put them in WHITE PACKS (Rank B).'",
        options: [
            "デパートで 売る 【赤い ギフト用パック（Aランク）】 (RED GIFT PACKS [Rank A] sold at department stores)",
            "スーパーの 割引セールで 売る 「白い パック（Bランク）」 (White Packs [Rank B] sold at supermarket discount sales)",
            "ジュース工場へ 運ぶ ための 「大きな 青い ポリバケツ」 (Large blue plastic buckets to transport to juice plant)",
            "動物の えさ（えさ用）として 捨てる 「黄色い ビニール袋」 (Yellow plastic bags to throw away as animal feed)"
        ],
        correct: 0,
        explanation: "The manager specifies:「傷が一つもなく、大きくて形が綺麗なイチゴは、デパートで売る【赤いギフト用パック（Aランク）】に並べてくれ」."
    },
    {
        id: "q30",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】パン製造工場で、工場長が アレルギー事故を 防ぐ ための アナウンスを しています。「米粉（こめこ）パン」 を 作る 前に 何を しなければなりませんか。",
        promptEn: "[Audio Simulation] At a bread factory, the plant manager is announcing measures to prevent allergy accidents. What must be done before making 'Rice Flour Bread'?",
        audioScript: "工場長：「従業員の 皆さんに 連絡します。午前中の 「小麦粉（コムギ）」 を 使った 食パンの 製造が 今 終わりました。午後からは 小麦アレルギーの お客様向けの 【米粉（こめこ）パン】 を 作ります。アレルギー事故を 防ぐ ため、これから ３０分間、ミキサーや 作業台に 残っている 【小麦粉の 粉を 全て 水で 完全に 洗い流して 掃除する】 ことを 徹底してください。小麦粉が １粒でも 混ざると 大事故になります！」",
        audioScriptEn: "Manager: 'Notice to all employees. Morning production of wheat flour bread has just finished. In the afternoon we will make RICE FLOUR BREAD for customers with wheat allergies. To prevent allergy accidents, spend the next 30 minutes COMPLETELY WASHING AWAY AND CLEANING ALL WHEAT FLOUR POWDER remaining on mixers and tables with water. Even one grain of wheat mixed in causes a major accident!'",
        options: [
            "ミキサーや 作業台に 残っている 【小麦粉の 粉を 水で 完全に 洗い流して 掃除する】 (Completely wash away and clean all WHEAT FLOUR powder remaining on mixers/tables with water)",
            "小麦粉が 残った ままの 汚れた 作業台の上で、すぐに 米粉パンの 生地を 練り始める (Start kneading rice flour bread dough immediately on dirty tables with wheat flour still left)",
            "小麦粉と 米粉を ５０パーセントずつ 混ぜ合わせて、新しい 種類の パンを作る (Mix 50% wheat flour and 50% rice flour together to make a new kind of bread)",
            "午後からは パンの 製造を 全部 中止して、全員で 外の 公園に 遊びに行っていく (Cancel all bread production in afternoon and everyone go play in outside park)"
        ],
        correct: 0,
        explanation: "Preventing allergen cross-contamination (アレルゲン交差汚染防止) requires thorough cleaning between different product runs."
    },
    {
        id: "q31",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】リンゴ農園の 朝礼で、今日の 作業安全についての 注意が あります。西側の リンゴ畑には なぜ 入ってはいけませんか。",
        promptEn: "[Audio Simulation] At an apple orchard morning meeting, there is a notice on operational safety today. Why must nobody enter the West Apple Orchard?",
        audioScript: "リーダー：「おはよう。今日の 注意事項だ。今朝 朝６時から、虫を 殺す ために 【西側の リンゴ畑に 強い 「農薬（のうやく・消毒薬）」 を 散布（スプレー）した】 ばかりだ。農薬を 吸い込むと 体に とても 悪い から、今日は １日中、絶対に 【西側の リンゴ畑には 立ち入らない（入らない）】 でくれ。今日の 収穫作業は、農薬を まいていない 「東側の 畑」 だけで行うよ。」",
        audioScriptEn: "Leader: 'Good morning. Here is today's caution. Since 6 AM this morning, we sprayed strong PESTICIDES (disinfectants) in the WEST APPLE ORCHARD to kill insects. Inhaling pesticides is very bad for your body, so NEVER ENTER THE WEST APPLE ORCHARD all day today. Today's harvesting work will be done only in the EAST ORCHARD where no chemicals were sprayed.'",
        options: [
            "朝から 虫を 殺す ための 【農薬（のうやく）を 散布した ばかりで、吸い込むと 危険】 だから (Because PESTICIDES were just sprayed this morning to kill insects, and inhaling them is hazardous)",
            "西側の 畑には 獰猛な（怖い）野生の クマや イノシシが たくさん 出現して 走っているから (Because many ferocious wild bears and wild boars have appeared and are running around west orchard)",
            "西側の 畑は 大雨による 洪水で 水没して、深い 池のようになっているから (Because west orchard is submerged by heavy rain flood and turned into a deep pond)",
            "西側の リンゴは 誰か 別の 会社の 人が お金を 払って 全部 買い取ったから (Because someone from another company paid money and bought up all west apples)"
        ],
        correct: 0,
        explanation: "After spraying agricultural chemicals / pesticides (農薬散布), entry into the sprayed field is strictly restricted for safety."
    },
    {
        id: "q32",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】水産加工工場（魚を調理する工場）で、冷凍庫の 警報ランプが 点滅しています。何が 原因でしたか。",
        promptEn: "[Audio Simulation] At a seafood processing plant (fish processing), the freezer alarm lamp is flashing. What was the cause?",
        audioScript: "品質リーダー：「おい！魚を 保存している 第２冷凍庫の 温度が マイナス１０度に 上がって 警報ランプが 光っているぞ！誰か 冷凍庫に入ったか？」\n作業員：「あ！すみません！さっき 魚の 箱を 運んだ ときに、【冷凍庫の 重い ドアが 完全に 閉まっていなくて、少し 開いたまま（半開き）に なっていました】！」\n品質リーダー：「やっぱり！ドアが開いたままだと 冷気が 逃げて 魚が 腐ってしまう。必ず 最後に 「カチャッ」 と 音が するまで 強く 閉めてくれ！」",
        audioScriptEn: "QC Leader: 'Hey! The temp in Freezer No. 2 storing fish rose to -10°C and the alarm lamp is flashing! Did someone enter the freezer?'\nWorker: 'Ah! Sorry! When carrying fish boxes earlier, THE HEAVY FREEZER DOOR WASN'T CLOSED COMPLETELY AND WAS LEFT SLIGHTLY OPEN!'\nQC Leader: 'I knew it! If the door is open, cold air escapes and fish spoil. Always push hard until it clicks shut!'",
        options: [
            "【冷凍庫の ドアが 完全に 閉まっておらず、少し 開いたまま】 に なっていた ため (Because the freezer door wasn't completely closed and was left slightly open)",
            "冷凍庫の 中の 電球が 切れて、部屋の中が 真っ暗になって しまった ため (Because the light bulb inside freezer burned out and room went pitch black)",
            "冷凍庫の中で 従業員が 秘密で パーティーを 開いて 踊っていた ため (Because employees were secretly holding a party and dancing inside freezer)",
            "冷凍庫の 冷却機械に 落雷（カミナリ）が 落ちて 大爆発を 起こした ため (Because lightning struck the freezer cooling machine and caused a massive explosion)"
        ],
        correct: 0,
        explanation: "In cold chain food processing (冷蔵・冷凍管理), doors left unlatched (半開き / 開けっ放し) ruin storage temperature and spoil inventory."
    },
    {
        id: "q33",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】鶏卵工場（卵をパックに詰める工場）で、検品スタッフが 話しています。殻に ヒビ（割れ目）が入った 卵を 見つけたら どう しますか。",
        promptEn: "[Audio Simulation] At an egg processing plant (packing eggs), inspection staff are talking. What do you do when you find an egg with a cracked shell?",
        audioScript: "先輩：「卵を パックに 詰める ときの 注意だよ。光を 当てて 検査する ときに、もし 卵の 殻に 小さな 【ヒビ（割れ目や亀裂）】 が 入っているものを 見つけたら、生食用の パックには 絶対に 入れないでね。ヒビがある 卵は サルモネラ菌の 危険があるから、【赤い バケツに 分けて、加熱調理用（お菓子やマヨネーズを作る工場用）】 に 回すんだよ。」",
        audioScriptEn: "Senior: 'Caution when packing eggs into packs. When inspecting under light, if you find any eggs with small CRACKS (fissures) in the shell, NEVER put them in packs for raw consumption. Cracked eggs pose Salmonella bacteria risks, so SEPARATE THEM INTO THE RED BUCKET TO SEND FOR COOKED PROCESSING (for cake and mayonnaise factories).'",
        options: [
            "生食用パックに入れず、【赤い バケツに 分けて 加熱調理用（お菓子工場用など）】 に 回す (Do not put in raw packs; separate into red bucket for cooked processing [for cake/mayo plants])",
            "ヒビを セロハンテープや 接着剤で きれいに 貼って 隠し、生食用パックに 入れる (Hide crack by taping neatly with scotch tape or glue and put in raw pack)",
            "ヒビが入った 卵を その場で 割って、生卵のまま 全員で 飲み干して 消費する (Crack open the cracked egg on the spot and everyone drink it raw to consume it)",
            "工場の 裏の 山に行って、土の中に 穴を 掘って 卵を 埋めて 隠す (Go to mountain behind factory, dig a hole in soil, and bury egg to hide it)"
        ],
        correct: 0,
        explanation: "Cracked eggs (破卵・ヒビ卵) cannot be sold for raw consumption (生食用) in Japan due to Salmonella risk; they must be routed to heated processing (加熱加工用)."
    },
    {
        id: "q34",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】夏の 炎天下の 畑で、農園の オーナーが 作業員に 休憩の 放送を しています。なぜ ２０分間 作業を 中止して 休まなければなりませんか。",
        promptEn: "[Audio Simulation] In a farm field under scorching summer sun, the farm owner is broadcasting a break notice to workers. Why must work be stopped for 20 minutes to rest?",
        audioScript: "オーナー：「畑で 作業中の 皆さん！ただいま 午後１時ですが、外の 気温が 【３６度を 超える 猛烈な 暑さ（危険な温度）】 に なっています！これ以上 連続で 畑作業を 続けると 【熱中症（体に熱がこもって倒れる病気）】 に なって 命の 危険が あります！今すぐ 手を 止めて、全員 木の 陰の テントに 集まり、【２０分間 作業を 中止して 水分と 塩分タブレットを 補給】 してください！」",
        audioScriptEn: "Owner: 'Everyone working in the field! It's 1:00 PM now, and outside temp has REACHED AN INTENSE HEAT EXCEEDING 36°C (dangerous temp)! If you keep working continuously in the field any longer, you risk HEATSTROKE which is life-threatening! Stop work right now, everyone gather under the tree shade tent, STOP WORK FOR 20 MINUTES, and replenish water and salt tablets!'",
        options: [
            "気温が 【３６度を超える 危険な 暑さ】 で、【熱中症で 倒れる 危険】 が あるため (Because temp reached dangerous heat over 36°C, creating a risk of collapsing from HEATSTROKE)",
            "畑の 近くに 大きな 台風が 来ていて、今すぐ 空から 激しい 雪と 氷が 降るため (Because a massive typhoon is near and severe snow and ice will fall from sky right now)",
            "畑の 収穫作業が １年分 全て 終了して、これから 長い 冬休みに入るため (Because 1 year's worth of harvesting finished completely and long winter vacation begins)",
            "テレビ局の 記者が 取材に来て、全員で カメラの 前で ダンスを 踊らなければならないため (Because TV reporters arrived for an interview and everyone must dance before cameras)"
        ],
        correct: 0,
        explanation: "In SSW Agriculture, heatstroke prevention (熱中症予防 / hydration and resting in shaded areas when temps exceed 35°C) is mandatory labor safety."
    },

    // ==========================================
    // SECTION 4: READING COMPREHENSION (読解) - 11 Questions
    // ==========================================
    {
        id: "q35",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【食品工場 入室前の５段階衛生ルール】 を読んで 質問に 答えてください。\n\n――― 【クリーンエリア入室・衛生徹底規定】 ―――\n1. 【装飾品の 取外し】 指輪、時計、ネックレス、ピアスは 異物混入の 原因になるため、更衣室で 全て 外すこと。\n2. 【手洗い・消毒】 専用洗剤を 使い、手首と 指の間を ３０秒以上 洗い、ペーパータオルで 拭いた 後、アルコール消毒液を すり込むこと。\n3. 【粘着ローラー（コロコロ）】 作業着の 表面、背中、帽子の 周りに、鏡を 見ながら 【１分間以上】 粘着ローラーを かけ、毛髪や ほこりを 除去すること。\n4. 【エアシャワー】 エアシャワー室に 入り、両手を 挙げて 体を 回転させながら ３０秒間 風を 浴びること。\n5. 【長靴の 洗浄・消毒】 入口の 消毒水槽（薬剤のプール）に 長靴を 浸し、靴底の 汚れを 落としてから 作業エリアに進むこと。\n――――――――――――――――――――――――――\n\n質問：食品加工エリアに 入る とき、指輪や 時計や ネックレスなどの アクセサリー（装飾品）は どう しなければなりませんか。",
        promptEn: "Read the 【5-Step Hygiene Rules Before Entering Food Plant】 below and answer the question.\n[Clean Area Rules] 1. Remove jewelry: Rings, watches, necklaces, earrings cause contamination; MUST remove all in locker room. 2. Handwashing: Wash wrists/between fingers for 30+ secs, dry, apply alcohol. 3. Lint Roller: Apply roller over front, back, and cap for over 1 minute looking in mirror. 4. Air shower: Enter, raise arms and spin for 30 secs. 5. Boots: Step into disinfectant bath to sanitize boot soles.\n\nQuestion: When entering the food processing area, what must you do with jewelry like rings, watches, and necklaces?",
        options: [
            "異物混入の 原因になるため、作業着に 着替える 更衣室で 【全て 外さなければならない】 (MUST REMOVE ALL in locker room because they cause foreign matter contamination)",
            "きれいに アルコールで 消毒すれば、指輪や 時計を 【つけた まま 作業して よい】 (As long as disinfected with alcohol, it is okay to work WHILE WEARING rings/watches)",
            "アクセサリーが 落ちないように、上から 透明な セロハンテープを 強く 巻きつけて 固定する (Wrap transparent scotch tape tightly over jewelry to fix them in place so they don't fall)",
            "ポケットの 中に入れておけば、工場の中で いつでも 取り出して 眺めて よい (As long as kept in pockets, you can take them out to look at anytime inside factory)"
        ],
        correct: 0,
        explanation: "Rule 1 states:「指輪、時計、ネックレス、ピアスは異物混入の原因になるため、更衣室で全て外すこと」."
    },
    {
        id: "q36",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【HACCPに基づく加熱温度管理マニュアル】 を読んで 質問に 答えてください。\n\n――― 【重要管理点（CCP）：お弁当用ハンバーグ・唐揚げの加熱殺菌基準】 ―――\n当工場では、食中毒菌（腸管出血性大腸菌O157、カンピロバクター、サルモネラ菌など）を 完全に 死滅させる ため、加熱調理工程において 以下の HACCP（ハサップ）基準を 厳守しています。\n\n◆ 【加熱の 合格基準】： 調理後の 商品の 中心の 温度を 芯温計（針状の温度計）で 測定し、【中心温度が ７５度（℃）以上 で、かつ １分間以上】 の 加熱が 継続されている こと。\n※ ノロウイルス汚染が 疑われる 二枚貝（カキやアサリなど）の 加熱調理の 場合は、【中心温度 ８５度以上 で、１分間以上】 加熱すること。\n※ 測定した 温度と 時間は、１バッチ（１回の調理）ごとに 必ず 「加熱記録シート」 に 記録し、責任者の 承認サインを受ける こと。\n――――――――――――――――――――――――――\n\n質問：通常の お弁当用ハンバーグや 唐揚げを 調理するとき、食中毒菌を 殺すための 加熱合格基準は どれですか。",
        promptEn: "Read the 【HACCP Heating Temperature Manual】 below and answer the question.\n[Critical Control Point: Cooking Patty & Fried Chicken] To destroy food poisoning bacteria (O157, Salmonella), follow HACCP rules: Standard: Measure product core temp with needle thermometer; CORE TEMP MUST REACH 75°C OR HIGHER FOR AT LEAST 1 MINUTE continuously. (*For bivalves like oysters suspected of Norovirus, heat to core temp 85°C+ for 1 min+). MUST log measured temp and time on heating record sheet for every batch.\n\nQuestion: When cooking normal bento hamburgers or fried chicken, what is the heating standard to destroy food poisoning bacteria?",
        options: [
            "商品の 【中心温度が ７５度（℃）以上】 で、かつ 【１分間以上】 加熱すること (Core temperature of the product is 75°C OR HIGHER for AT LEAST 1 MINUTE)",
            "商品の 【中心温度が ５０度（℃）程度】 の お風呂の お湯ぐらいの 温度に 暖めること (Warming product to around 50°C core temperature resembling bathwater)",
            "商品の 表面だけが 黒く 焦げるまで、強火で 【１０秒間】 急速加熱すること (Rapidly heating over high flame for 10 seconds until only product surface burns black)",
            "温度計は 使わずに、調理する 人の 指を お肉の 中に入れて 熱さを 確かめること (Testing heat by putting chef's finger inside meat without using thermometer)"
        ],
        correct: 0,
        explanation: "The HACCP Critical Control Point (CCP) standard specifies:「【中心温度が７５度（℃）以上で、かつ１分間以上】の加熱が継続されていること」."
    },
    {
        id: "q37",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【消費期限と賞味期限の違いガイド】 を読んで 質問に 答えてください。\n\n――― 【食品表示：２つの 「きげん」 の 正しい 理解】 ―――\n日本の 食品の パッケージには、品質が悪くなる 早さに 応じて、以下の どちらかの 期限が 表示されています。\n\n1. 【消費期限（しょうひきげん）】： 「安全に 食べられる 期限」\n・対象食品： お弁当、サンドイッチ、生肉、お刺身、ケーキ、牛乳など （※ 傷みやすい 食品）\n・ルール　： この 期限を 過ぎた 食品は、食中毒や お腹を 壊す 危険が 高いため、【絶対に 食べてはいけません（販売・提供も 一切 禁止）】。\n\n2. 【賞味期限（しょうみきげん）】： 「美味しく 食べられる 期限」\n・対象食品： スナック菓子、缶詰、カップ麺、ペットボトル飲料など （※ 長持ちする 食品）\n・ルール　： この 期限を 過ぎても、すぐに 食べられなくなる わけではありません。見た目や においが 正常なら 食べられる ことがあります。\n――――――――――――――――――――――――――\n\n質問：お弁当や サンドイッチなどの 傷みやすい 食品に 表示されている 【消費期限（しょうひきげん）】 が 過ぎてしまった 場合、どうしなければなりませんか。",
        promptEn: "Read the 【Guide to Use-By vs Best-By Dates】 below and answer the question.\n[Food Labels: 2 Expiration Types] 1. Consumption Date (消費期限 - Use-By): Safe-to-eat deadline. For perishable foods (bento, sandwiches, raw meat, sashimi, milk). Rule: Once passed, high risk of food poisoning; NEVER EAT OR SELL. 2. Flavor Date (賞味期限 - Best-By): Delicious-to-eat deadline. For long-lasting foods (snacks, canned goods, cup noodles). Rule: Even if passed, doesn't immediately become uneatable; can be eaten if smell/appearance is normal.\n\nQuestion: What must be done if the 【Consumption Date (消費期限 - Use-By)】 displayed on perishable food like bento or sandwiches has passed?",
        options: [
            "食中毒の 危険が 高いため、【絶対に 食べてはいけません（販売・提供も 一切 禁止）】 (NEVER EAT OR SELL IT because of high food poisoning risk)",
            "においを 嗅いで 臭くなければ、１週間 過ぎていても お弁当として お店で 売ってよい (If you smell it and it doesn't stink, it's okay to sell in store as bento even 1 week past)",
            "電子レンジで ５分間 加熱すれば、１年前の 生肉でも 完全に 新品に 復活して 食べられる (If microwaved for 5 mins, even 1-year-old raw meat revives as brand new and can be eaten)",
            "パッケージの 「期限の シール」 を 剥がして、新しい 日付の シールを 貼り直して 出荷する (Peel off expiration sticker on pack, attach a sticker with a new date, and ship it out)"
        ],
        correct: 0,
        explanation: "Rule 1 states:「この期限を過ぎた食品は...【絶対に食べてはいけません（販売・提供も一切禁止）】」."
    },
    {
        id: "q38",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【農薬の安全散布ルール】 を読んで 質問に 答えてください。\n\n――― 【果樹園・野菜畑における 農薬（消毒薬）使用規定】 ―――\n農薬を 散布する 際は、作業者の 健康を守り、周辺環境への 影響を 防ぐため、以下の 事項を 遵守すること。\n\n1. 【正しい 希釈倍率（薄め方）の 厳守】 農薬は 必ず 説明書に 書かれた 「希釈倍率（例：水で１,０００倍に薄める）」 を 正確に 計量して 作ること。効果を 強くしたいからと 勝手に 濃く してはいけない。\n2. 【風が 強い 日の 散布中止】 風速が 強い 日や 雨の 日は、農薬が 隣の 住宅や 別の 畑に 飛んで行く （ドリフト現象） 危険があるため、散布を 中止すること。風が 穏やかな 朝夕に 行うのが 望ましい。\n3. 【散布後の 体の 洗浄】 散布作業が 終わったら、ただちに 作業服を 脱いで 着替え、石鹸で 手、顔、目を 十分に 洗い、うがいを 行う こと。\n――――――――――――――――――――――――――\n\n質問：風が 非常に 強い 日に、畑で 農薬を まこうと しています。どう しなければなりませんか。",
        promptEn: "Read the 【Pesticide Safe Spraying Rules】 below and answer the question.\n[Pesticide Rules in Orchards & Fields] 1. Proper dilution: Always measure accurately according to manual (e.g. dilute 1,000x with water). Never make it more concentrated to increase effect. 2. Stop spraying on windy days: On windy or rainy days, chemicals blow into neighboring homes or other fields (drift phenomenon), so STOP SPRAYING. Calm mornings/evenings are best. 3. Wash body after spraying: When finished, immediately change clothes, wash hands, face, eyes with soap, and gargle.\n\nQuestion: You are about to spray pesticides in the field on a very windy day. What must you do?",
        options: [
            "農薬が 隣の 住宅などに 飛んで行く 危険が あるため、【散布作業を 中止する】 (STOP SPRAYING because there is a risk that pesticides will blow into neighboring houses)",
            "風に 負けないように、普段の １０倍 濃い 濃度の 農薬を作って 大量に 散布する (To beat the wind, make pesticide 10 times more concentrated than usual and spray heavily)",
            "マスクを 外して 大きく 深呼吸しながら、風の 吹く 方向に向かって スプレーを 噴射する (Take off mask, take deep breaths, and spray chemical liquid facing into wind direction)",
            "近所の 住民に 見られないように、夜中の １２時に 暗闇の中で こっそり まき始める (Start spraying secretly in pitch black darkness at midnight so neighbors don't see)"
        ],
        correct: 0,
        explanation: "Rule 2 mandates:「風速が強い日や雨の日は...危険があるため、散布を中止すること」."
    },
    {
        id: "q39",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【アレルゲン混入・交差汚染防止規定】 を読んで 質問に 答えてください。\n\n――― 【食品加工場：まな板と包丁のカラー分け利用ルール】 ―――\n食中毒菌の クロスコンタミネーション（交差汚染）および アレルギー物質の 混入を 防ぐため、当工場では 食材ごとに まな板と 包丁の 「色（カラー）」 を 厳格に 分けて 使用しています。\n\n◆ 【赤色（レッド）の まな板・包丁】　： 「生の 牛肉・豚肉・鶏肉」 専用 （※ 加熱前の お肉）\n◆ 【青色（ブルー）の まな板・包丁】　： 「生の 魚・貝類・お刺身」 専用 （※ 水産物）\n◆ 【緑色（グリーン）の まな板・包丁】： 「生で 食べる 野菜・果物・サラダ」 専用\n◆ 【黄色（イエロー）の まな板・包丁】： 「加熱調理が 終わった 後の 調理済み食品」 専用\n\n※ 例え 洗った 後でも、「赤色（生肉用）」 の まな板で、生で 食べる サラダ用の レタスや トマトを 切る ことは 絶対に 禁止です！\n――――――――――――――――――――――――――\n\n質問：生で 食べる サラダ用の レタスや トマトを 切るとき、どの 色の まな板と 包丁を 使わなければなりませんか。",
        promptEn: "Read the 【Allergen Cross-Contamination Prevention Rules】 below and answer the question.\n[Color-Coded Cutting Board & Knife Rules] To prevent cross-contamination and allergens, color tools are strictly separated: RED: Raw beef, pork, chicken. BLUE: Raw fish, shellfish, sashimi. GREEN: Vegetables, fruit, salad eaten raw. YELLOW: Cooked foods after heating finished. *Even after washing, NEVER cut raw salad lettuce or tomatoes on RED (raw meat) cutting boards!\n\nQuestion: When cutting lettuce and tomatoes for salads eaten raw, which color cutting board and knife MUST be used?",
        options: [
            "「生で 食べる 野菜・果物・サラダ」 専用の 【緑色（グリーン）の まな板・包丁】 (GREEN cutting board/knife designated for vegetables, fruits, and salads eaten raw)",
            "「生の 牛肉・豚肉・鶏肉」 専用の 【赤色（レッド）の まな板・包丁】 (RED cutting board/knife designated for raw beef, pork, and chicken)",
            "「生の 魚・貝類・お刺身」 専用の 【青色（ブルー）の まな板・包丁】 (BLUE cutting board/knife designated for raw fish, shellfish, and sashimi)",
            "どの 色の まな板でも 自由に 使ってよく、床の 上で 直接 切っても よい (Any color cutting board can be used freely, and you can even cut directly on the floor)"
        ],
        correct: 0,
        explanation: "The color code specifies:「【緑色（グリーン）のまな板・包丁】：「生で食べる野菜・果物・サラダ」専用」."
    },
    {
        id: "q40",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【ビニールハウスの換気・温度管理表】 を読んで 質問に 答えてください。\n\n――― 【春季 トマトハウス 温度管理基準表】 ―――\n美味しい トマトを 栽培する には、昼と 夜の 温度管理が 極めて 重要です。気温計を チェックし、以下の 基準で ハウスの 窓（サイド巻上げシート）を 開閉してください。\n\n1. 【昼間の 管理（午前９時 ～ 午後４時）】： ハウス内の 温度が 【２８度 を 超えたら、サイド窓を 開けて 換気】 を 開始すること。３０度以上が 続くと トマトの花が 落ちて 実が 成らなくなります。\n2. 【夕方・夜間の 管理（午後５時 以降）】： 夕方 １７：００ に なったら、夜間の 冷え込みを 防ぐため、温度に関係なく 【必ず サイド窓を 完全に 閉める】 こと。夜間の 温度が １０度以下になると トマトの 苗が 凍傷で 枯れてしまいます。\n――――――――――――――――――――――――――\n\n質問：夕方の １７：００ （午後５時） に なったら、ビニールハウスの 窓（サイドシート）は どう しなければなりませんか。",
        promptEn: "Read the 【Greenhouse Ventilation & Temp Schedule】 below and answer the question.\n[Spring Tomato Greenhouse Temp Standards] Daytime (9 AM - 4 PM): When temp exceeds 28°C, OPEN side windows for ventilation. Over 30°C causes flowers to drop. Evening/Night (After 5 PM): At 17:00 evening, to prevent night chill, MUST COMPLETELY CLOSE side windows regardless of temp. If night temp drops below 10°C, tomato plants wither from frost.\n\nQuestion: When evening 17:00 (5:00 PM) arrives, what must be done to the greenhouse windows (side sheets)?",
        options: [
            "夜間の 冷え込みを 防ぐため、温度に 関係なく 【必ず サイド窓を 完全に 閉める】 (To prevent night chill, MUST COMPLETELY CLOSE side windows regardless of temp)",
            "夜の 新鮮な 空気を たくさん 入れる ため、【窓を 全開に 大きく 開けたままにする】 (Leave windows wide open to let in lots of fresh night air)",
            "ビニールハウスの 透明な ビニールシートを ハサミで 全て 剥がして 取り除く (Strip off and remove all transparent plastic sheets from greenhouse using scissors)",
            "ハウスの中に 水を 大量に まいて、床を プールのように 水没させておく (Spray massive water inside greenhouse and submerge floor like a swimming pool)"
        ],
        correct: 0,
        explanation: "Rule 2 states:「夕方１７：００になったら、夜間の冷え込みを防ぐため...【必ずサイド窓を完全に閉める】こと」."
    },
    {
        id: "q41",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【金属探知機・エックス線検査機の作動チェック規定】 を読んで 質問に 答えてください。\n\n――― 【品質管理基準：検査機器の始業前点検および定期チェック】 ―――\n包装ラインに 設置された 金属探知機 および エックス線検査機は、正しく 作動しているか どうか、以下の ルールで 必ず 点検を 実施すること。\n\n◆ 【点検を行う タイミング】：\n① 毎朝の 作業開始前 （朝 ８：００）\n② 午後の 作業再開前 （お昼 １３：００）\n③ 商品の 種類が変わる タイミング および 作業終了時\n\n◆ 【点検の 方法】： 専用の 「テストピース（テスト用テスト玉：鉄Fe 1.2mm、ステンレスSUS 1.5mm）」 を コンベアに 流し、探知機の 警報ブザーが 鳴り、コンベアが 正しく 停止する ことを 確認する。\n※ もし テストピースを 流しても ブザーが 鳴らない（反応しない）場合は、【ただちに ラインを 停止し、品質管理責任者を 呼ぶ】 こと！探知機が 壊れたまま 生産した 商品は 全て 自主回収（出荷停止）となります。\n――――――――――――――――――――――――――\n\n質問：テストピース（テスト玉）を 流しても 金属探知機の 警報ブザーが 鳴らない（反応しない）場合、どうしなければなりませんか。",
        promptEn: "Read the 【Metal Detector & X-ray Inspection Protocol】 below and answer the question.\n[QC Standards: Machine Pre-Start & Periodic Checks] Check Timing: 1) Before start (8:00 AM), 2) Before afternoon restart (13:00 PM), 3) Product change & closing. Method: Pass dedicated 'Test Pieces' (Iron Fe 1.2mm, Stainless SUS 1.5mm) on conveyor and confirm alarm sounds and conveyor stops. *If buzzer DOES NOT SOUND when test piece passes, STOP LINE IMMEDIATELY AND CALL QC MANAGER! Products made with broken detector face recall/ban.\n\nQuestion: If the metal detector alarm buzzer DOES NOT SOUND (no reaction) when passing the test piece, what must you do?",
        options: [
            "【ただちに 作業ラインを 停止し、品質管理責任者を 呼んで 指示を 仰ぐ】 (STOP LINE IMMEDIATELY and call Quality Control Manager for instructions)",
            "探知機の 音が うるさくなくて ちょうど いいと 思って、【そのまま 作業を 続ける】 (Think it's nice without loud buzzer noise and CONTINUE WORKING as is)",
            "テストピースが 壊れている と 勝手に 判断し、テスト玉を ゴミ箱に 捨てておく (Assume test piece is broken, throw test ball into trash box, and keep going)",
            "金属探知機の 横を 足で 強く 蹴飛ばして、無理やり ブザーを 鳴らせようとする (Kick side of metal detector hard with foot to force buzzer to ring)"
        ],
        correct: 0,
        explanation: "The notice explicitly warns:「もしテストピースを流してもブザーが鳴らない場合は、【ただちにラインを停止し、品質管理責任者を呼ぶ】こと！」."
    },
    {
        id: "q42",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【家畜（牛・豚・鶏）の防疫ルール】 を読んで 質問に 答えてください。\n\n――― 【家畜伝染病（鳥インフルエンザ・豚熱）侵入防止の徹底】 ―――\n農場内への 病気や ウイルスの 侵入を 防ぐ ため、全ての 従業員および 来訪者は 以下の 防疫規定を 遵守すること。\n\n1. 【車両の 消毒】 飼料運搬トラックや 従業員の マイカーが 農場の ゲートに入る 際は、必ず 消毒用スプレーで タイヤと 車体下部を 完全に 消毒すること。\n2. 【専用衣服・長靴への 着替え】 外部から 来た 私服や 私物の 靴の まま 畜舎（動物がいる小屋）に 入ることは 法律で 禁じられている。必ず 更衣室で 【農場専用の 消毒済みつなぎ（作業服）と 専用長靴】 に 履き替える こと。\n3. 【海外からの 持ち込み禁止】 海外の 肉製品（ハムやソーセージなど）を お弁当として 農場内へ 持ち込むことは 一切 禁止する。\n――――――――――――――――――――――――――\n\n質問：農場の 畜舎（動物がいる小屋）に 入る とき、靴や 服は どう しなければなりませんか。",
        promptEn: "Read the 【Livestock Hygiene & Epidemic Prevention Rules】 below and answer the question.\n[Preventing Bird Flu & Swine Fever] To prevent virus invasion, observe rules: 1. Vehicle disinfection: Disinfect tires/undercarriage with spray at farm gate. 2. Dedicated clothes/boots: Entering animal barns in street clothes/shoes from outside is banned by law. MUST change into FARM-DESIGNATED STERILIZED COVERALLS AND SPECIAL BOOTS in locker room. 3. No foreign meat: Bringing overseas meat products (ham/sausage) into farm is banned.\n\nQuestion: When entering the farm's animal barns (where cattle/pigs/chickens live), what must you do regarding clothes and shoes?",
        options: [
            "必ず 更衣室で 【農場専用の 消毒済みつなぎ（作業服）と 専用長靴】 に 履き替える (MUST change into FARM-DESIGNATED STERILIZED COVERALLS AND SPECIAL BOOTS in locker room)",
            "外を 歩いて きた 自分の お気に入りの 【スニーカーと 私服の まま 自由に入る】 (Enter freely while wearing your favorite sneakers and street clothes walked in outside)",
            "靴を 脱いで 【素足（裸足）に なり、上半身 裸の 状態】 で 畜舎の中を 走る (Take off shoes, go BAREFOOT, and run inside animal barn shirtless)",
            "海外のお土産で 買ってきた 【外国製の 牛革の ロングブーツ】 を 自慢して 履く (Proudly wear foreign-made cow leather long boots bought as souvenirs abroad)"
        ],
        correct: 0,
        explanation: "Rule 2 mandates:「必ず更衣室で【農場専用の消毒済みつなぎと専用長靴】に履き替えること」."
    },
    {
        id: "q43",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【食品ロス削減・不良品廃棄の分別記録表ルール】 を読んで 質問に 答えてください。\n\n――― 【製造工程における 廃棄物管理規定】 ―――\nパン・お菓子製造ラインにおいて、床に 落ちたり、焦げたりして 不良品となった 食品を 廃棄（捨てる）する 際は、以下の ルールで 処理すること。\n\n◆ 【勝手な 廃棄の 禁止】： 不良品が出ても、作業員が 自分の 判断で 一般ごみ箱に 捨ててはいけない。\n◆ 【正しい 処理手順】：\n① 床に 落ちた パンや 焦げた 生地の 【重量（グラム数や個数）を はかり（秤）で 正確に 計量する】。\n② 食堂の 横にある 「廃棄物記録シート（赤色表）」 に、【日時・ライン名・廃棄理由・重量】 を 記入し、リーダーの 確認印を もらう。\n③ 記入後、蓋がついた 【「食品リサイクル用・有機肥料専用の 青い ポリバケツ」】 に 投入する。\n※ これらの 記録は、食品ロス削減と コスト改善の 大切な データになります。\n――――――――――――――――――――――――――\n\n質問：製造ラインで 床に 落ちて 不良品となった パンを 捨てたいとき、まず 何を しなければなりませんか。",
        promptEn: "Read the 【Food Waste Reduction & Disposal Logging Rules】 below and answer the question.\n[Waste Management in Production] When discarding dropped or burnt defective food on bread/snack lines, follow rules: No unauthorized disposal: Workers cannot throw defects into general trash on their own. Procedure: 1) Accurately weigh dropped bread or burnt dough on scales (weight/pieces). 2) Fill in date, line, reason, weight on red Waste Log Sheet and get leader's stamp. 3) Put into blue sealed bin for food recycling / organic compost.\n\nQuestion: When you want to throw away bread that dropped on the floor and became defective, what must you do first?",
        options: [
            "はかりで 【重量（グラム数など）を 正確に 計量し、「廃棄物記録シート」 に 記入する】 (Accurately WEIGH on scales [grams, etc.] and log on the 'Waste Log Sheet')",
            "誰にも 見られないように 素早く 拾い上げて、【自分の ポケットに入れて 家に 持ち帰る】 (Quickly pick it up without being seen, put it in your pocket, and take home)",
            "ごみ箱に 捨てずに、床に 落ちた 汚い パンを 【そのまま 正常な 袋に入れて お店に 出荷する】 (Don't throw in trash; put dirty dropped bread directly into normal bag and ship to stores)",
            "工場の 窓から 【外の 道路や 川に向かって 思いきり 投げ捨てる】 (Throw it out factory window with all your might onto outside road or river)"
        ],
        correct: 0,
        explanation: "Step 1 specifies:「【重量（グラム数や個数）をはかり（秤）で正確に計量する】...「廃棄物記録シート」に記入し」."
    },
    {
        id: "q44",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【台風接近に伴う農業設備の緊急対策指示】 を読んで 質問に 答えてください。\n\n――― 【緊急指令：台風１０号接近に伴う 農場被害防止対策】 ―――\n明日の 夜半から 明後日にかけて、非常に 強い 台風１０号が 当地方を 直撃する 見込みです。本日の 夕方 １７時までに、全従業員は 以下の 対策作業を 完了させてください。\n\n1. 【ビニールハウスの 補強】 ハウスの ビニールシートが 強風で 飛ばされないよう、マイカ線（固定ロープ）を 強く 締め直し、天窓と サイド窓を 【完全に 閉鎖・密閉】 すること。\n2. 【強風対策・収穫の前倒し】 畑の リンゴや ナシなど、強風で 木から 落ちて 傷がつく 恐れがある 熟した 果実は、【本日の 午後中に 可能な 限り 早めて 全て 収穫する】 こと。\n3. 【危険箇所の 立入禁止】 台風による 大雨の 間、畑の 周りの 水路や 川は 増水して 極めて 危険です。見回りなどの ためであっても、【大雨や 強風の 最中に 屋外へ 出る ことは 絶対に 禁止】 します。\n――――――――――――――――――――――――――\n\n質問：台風が 来る 前に、畑の 熟した リンゴや ナシなどの 果実は どう しなければなりませんか。",
        promptEn: "Read the 【Emergency Typhoon Measures for Farm Facilities】 below and answer the question.\n[Emergency: Typhoon No. 10 Prevention Measures] Very strong Typhoon No. 10 will hit tomorrow night. By 17:00 today, finish following: 1. Greenhouse reinforcement: Tighten ropes and seal all windows tightly so plastic sheets don't blow away. 2. Wind protection / Early harvest: Ripe fruit like apples and pears that may blow off trees in wind MUST BE HARVESTED AS MUCH AS POSSIBLE THIS AFTERNOON BEFORE HAND. 3. No entry to danger zones: Rivers/ditches flood dangerously. NEVER GO OUTSIDE DURING HEAVY RAIN AND WIND even to check fields.\n\nQuestion: Before the typhoon arrives, what must be done with ripe fruits like apples and pears in the orchard?",
        options: [
            "強風で 木から 落ちるのを 防ぐため、【本日の 午後中に 早めて 全て 収穫する】 (To prevent falling from trees in wind, HARVEST ALL AS EARLY AS POSSIBLE THIS AFTERNOON)",
            "台風の 雨で 果実が きれいに 洗える と 思って、【収穫しないで 木に ぶら下げた ままにする】 (Think typhoon rain will wash fruit nicely and LEAVE HANGING ON TREES without harvesting)",
            "果実の上に 重い 金属の コインロッカーを 乗せて、強風で 飛ばないように 押し潰す (Put heavy metal coin lockers on top of fruit to crush and prevent blowing away)",
            "リンゴの 木を チェーンソーで 根っこから 全部 切り倒して、畑の 水路に 投げ捨てる (Cut down all apple trees from roots with chainsaw and throw into irrigation ditch)"
        ],
        correct: 0,
        explanation: "Rule 2 states:「熟した果実は、【本日の午後中に可能な限り早めて全て収穫する】こと」."
    },
    {
        id: "q45",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【外国人社員向け 食品衛生講習会のお知らせ】 を読んで 質問に 答えてください。\n\n――― 【食品衛生管理 特別セミナー受講のご案内】 ―――\n当工場では、食中毒防止と 日本の 食品安全法律（HACCP）を 学ぶため、外国人技能実習生および 特定技能スタッフを 対象とした 「食品衛生セミナー」 を 開催します。\n\n◆ 【日時】　　： ２０２６年 ８月 ５日（水） 【午後 １４：００ ～ １５：００ （１時間）】\n◆ 【場所】　　： 本社工場 ２階 大食堂 （※ オンラインZOOM受講も 可）\n◆ 【対象者】　： 外国人スタッフ 全員 （※ 参加は 「必須・業務時間内扱い」 となります。お給料が出ます！）\n◆ 【内容】　　： 正しい 手洗い方法の 実践、異物混入防止ルール、食中毒菌の 基礎知識\n◆ 【特典（プレゼント）】： 講習を 最後まで 受講し、ミニテストに 合格した 方 全員に、【「食品衛生アドバンス修了証書」 および コンビニで 使える QUOカード５００円分】 を 差し上げます！\n――――――――――――――――――――――――――\n\n質問：この 「食品衛生セミナー」 を 最後まで 受けて ミニテストに 合格すると、何が もらえますか。",
        promptEn: "Read the 【Food Hygiene Seminar Notice for Foreign Staff】 below and answer the question.\n[Food Hygiene Special Seminar] To learn food poisoning prevention & HACCP laws, we hold a seminar for interns & SSW staff. Date: Wed Aug 5, 14:00-15:00 (1 hour). Place: 2F Main Cafeteria (Zoom OK). Target: All foreign staff (*Mandatory attendance counted as paid work hours!). Contents: Handwashing, foreign matter prevention, bacteria knowledge. Bonus: All who complete seminar and pass mini test receive 'Food Hygiene Certificate' and a 500 YEN QUO CARD usable at convenience stores!\n\nQuestion: If you complete this Food Hygiene Seminar and pass the mini test, what do you receive?",
        options: [
            "【「食品衛生修了証書」 と コンビニで 使える ５００円分の QUOカード】 が もらえる (You receive a 'Food Hygiene Certificate' and a 500 YEN QUO CARD usable at convenience stores)",
            "本社工場の ２階 大食堂で 毎日 ずっと 【無料で お寿司と 焼き肉が 食べ放題】 に なる (You get free all-you-can-eat sushi and yakiniku every day in 2F cafeteria)",
            "その日から あなたが 工場の 【「最高食品責任者（社長）」 に 即日 昇進する】 (From that day, you are immediately promoted to 'Chief Food Officer [President]')",
            "何も もらえなくて、逆に 講習の 参加費用として 【現金 ５,０００円を 会社に 払う】 (You receive nothing and instead must pay 5,000 yen cash attendance fee to company)"
        ],
        correct: 0,
        explanation: "The notice highlights the bonus:「【「食品衛生アドバンス修了証書」およびコンビニで使えるQUOカード５００円分】を差し上げます！」."
    }
];
