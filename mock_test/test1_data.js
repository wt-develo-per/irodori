// test1_data.js - JFT-Basic SSW Mock Test 1 Datastore (40 Questions)
// Aligned with CEFR A2 / Irodori & Genki Elementary Japanese

const jftExamData = [
    // SECTION 1: SCRIPT AND VOCABULARY (文字と語彙)
    {
        id: "q1",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "工場の入口に「危険（きけん）」と書いたポスターが貼ってあります。【危険】の読み方として正しいものはどれですか。",
        promptEn: "There is a poster that says 「危険」 at the factory entrance. What is the correct reading of 【危険】?",
        options: [
            "きけん (kiken - danger/hazard)",
            "あんぜん (anzen - safety)",
            "ちゅうい (chūi - caution)",
            "きんし (kinshi - prohibition)"
        ],
        correct: 0,
        explanation: "「危険（きけん）」means danger or hazard. This is a critical SSW safety word found in manufacturing, construction, and caregiving workplaces."
    },
    {
        id: "q2",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "佐藤さんは 明日、病院の 先生に 【相談】します。正しい 漢字は どれですか。",
        promptEn: "Mr. Sato will consult with the doctor at the hospital tomorrow. Which kanji matches 【そうだん】?",
        options: [
            "商談 (shōdan - business negotiation)",
            "相談 (sōdan - consultation/discussion)",
            "雑談 (zatsudan - small talk)",
            "面談 (mendan - interview)"
        ],
        correct: 1,
        explanation: "「相談（そうだん）」means to consult or discuss problems with supervisors, doctors, or colleagues."
    },
    {
        id: "q3",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "この機械を 使うときは、必ず 説明書を 【読ん】でください。【読ん】の 正しい 漢字は どれですか。",
        promptEn: "When using this machine, be sure to read the instruction manual. Which kanji matches 【よん】?",
        options: [
            "呼んで (yonde - call)",
            "飲んで (nonde - drink)",
            "読んで (yonde - read)",
            "頼んで (tanonde - request/ask)"
        ],
        correct: 2,
        explanation: "「読む（よむ / 読んで）」is the verb to read. An instruction manual is「説明書（せつめいしょ）」."
    },
    {
        id: "q4",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "会社の 【残業】が 多かったので、昨日は とても 疲れました。【残業】の 読み方は どれですか。",
        promptEn: "Because there was a lot of overtime at the company, I was very tired yesterday. What is the reading of 【残業】?",
        options: [
            "さぎょう (sagyō - work/operation)",
            "えいぎょう (eigyō - business/sales)",
            "ざんぎょう (zangyō - overtime work)",
            "きゅうぎょう (kyūgyō - closure/holiday)"
        ],
        correct: 2,
        explanation: "「残業（ざんぎょう）」means overtime work. Essential vocabulary for SSW employment contracts and daily work reports."
    },
    {
        id: "q5",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "仕事の 前に、必要な 道具を 【　　】しておいてください。",
        promptEn: "Before work, please make sure to 【　　】 the necessary tools in advance.",
        options: [
            "予約（よやく - reservation）",
            "準備（じゅんび - preparation / setup）",
            "約束（やくそく - promise / appointment）",
            "注文（ちゅうもん - order）"
        ],
        correct: 1,
        explanation: "In a workplace context, preparing tools before starting work is「準備（じゅんび）する」."
    },
    {
        id: "q6",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "この 部屋は 関係者以外、入ることは 【　　】されています。",
        promptEn: "Entering this room is 【　　】 for anyone other than authorized personnel.",
        options: [
            "禁止（きんし - prohibited / banned）",
            "許可（きょか - permitted）",
            "歓迎（かんげい - welcomed）",
            "招待（しょうたい - invited）"
        ],
        correct: 0,
        explanation: "「禁止（きんし）」means prohibited. Notice boards saying「立入禁止（たちいりきんし - no entry）」are ubiquitous in Japanese facilities."
    },
    {
        id: "q7",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "風邪を ひいて 熱が あるので、今日は 仕事を 【　　】してもいいですか。",
        promptEn: "Since I caught a cold and have a fever, is it okay if I 【　　】 work today?",
        options: [
            "続けて（つづけて - continue）",
            "休んで（やすんで - take a day off / rest）",
            "急いで（いそいで - hurry）",
            "覚えて（おぼえて - remember）"
        ],
        correct: 1,
        explanation: "To take a day off or rest from work due to illness is「仕事を休む（やすんで）」."
    },
    {
        id: "q8",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "お客様が 来たら、まず 応接室へ 【　　】してください。",
        promptEn: "When the guest arrives, please first 【　　】 them to the reception room.",
        options: [
            "案内（あんない - guide / show around）",
            "連絡（れんらく - contact / notify）",
            "紹介（しょうかい - introduce）",
            "報告（ほうこく - report）"
        ],
        correct: 0,
        explanation: "To guide or show a visitor or client to a room is「案内（あんない）する」."
    },
    {
        id: "q9",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "スーパーで 新鮮な 野菜と 果物を 買いました。【果物】の 読み方は どれですか。",
        promptEn: "I bought fresh vegetables and fruit at the supermarket. What is the reading of 【果物】?",
        options: [
            "のりもの (norimono - vehicle)",
            "くだもの (kudamono - fruit)",
            "えさ (esa - animal feed)",
            "かたち (katachi - shape)"
        ],
        correct: 1,
        explanation: "「果物（くだもの）」is the Japanese word for fruit. 野菜（やさい）means vegetables."
    },
    {
        id: "q10",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "電車の 時間に 【　　】ように、少し 早めに 家を 出ましょう。",
        promptEn: "Let's leave home a little early so that we won't be 【　　】 for the train time.",
        options: [
            "間に合う（まにあう - be in time）",
            "遅れる（おくれる - be late / delayed）",
            "間違う（まちがう - make a mistake）",
            "疲れる（つかれる - get tired）"
        ],
        correct: 1,
        explanation: "「電車の時間に遅れる（おくれる）」means to be late for the train. To be in time is「間に合う」."
    },

    // SECTION 2: CONVERSATION AND EXPRESSION (会話と表現)
    {
        id: "q11",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "工場で、機械の 動きが おかしいです。リーダーに 何と 言いますか。\n技能実習生：「リーダー、機械から 変な 音が するんですが、一度 【　　】。」",
        promptEn: "At the factory, a machine is acting strangely. What should you say to the team leader?\nIntern: 'Leader, the machine is making a strange sound. Could you please 【　　】 for a moment?'",
        options: [
            "見ていただけませんか (mite itadakemasen ka - Could you please look at it?)",
            "見せてもいいですか (misete mo ii desu ka - May I show you?)",
            "拝見しますか (haiken shimasu ka - Will I look at it?)",
            "見ようと思います (miyō to omoimasu - I think I will look at it)"
        ],
        correct: 0,
        explanation: "When asking a superior or supervisor to do something for you politely, use「〜ていただけませんか」(Could you please receive the favor of doing ~ for me?)."
    },
    {
        id: "q12",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "同僚と シフトを 交代したいです。何と 頼みますか。\nキム：「リンさん、実は 来週の水曜日、病院に 行きたいんだ。悪いけど、私の シフトと 【　　】？」",
        promptEn: "You want to trade shifts with a colleague. How do you ask?\nKim: 'Lin, actually I want to go to the hospital next Wednesday. I'm sorry, but could we 【　　】 my shift?'",
        options: [
            "交代してあげない？ (kōtai shite agenai - Won't I change for you?)",
            "代わってもらえない？ (kawatte moraenai - Could I get you to switch with me?)",
            "休ませてくれる？ (yasumasete kureru - Will you let me rest?)",
            "働かせてくれない？ (hatarakasete kurenai - Will you let me work?)"
        ],
        correct: 1,
        explanation: "Among colleagues, asking a favor can be expressed as「〜てもらえない？」(Could I receive the favor of you switching shifts with me?)."
    },
    {
        id: "q13",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "レストランで お客様が レジでお金を 払います。店員は 何と言いますか。\n店員：「千円のお返しでございます。またの 【　　】。」",
        promptEn: "At a restaurant, a customer pays at the cash register. What does the staff member say?\nStaff: 'Here is 1,000 yen in change. We look forward to your next 【　　】.'",
        options: [
            "ご来店をお待ちしております (goraiten o omachi shite orimasu - We await your next visit)",
            "ご出席をお願いします (goshusseki o onegai shimasu - Please attend)",
            "ごちそうさまでした (gochisōsama deshita - Thank you for the meal)",
            "いってらっしゃいませ (itterasshaimase - Have a safe trip out)"
        ],
        correct: 0,
        explanation: "In Japanese service industries (外食業 / retail), greeting departing customers with「またのご来店（らいてん）をお待ちしております」is standard professional etiquette."
    },
    {
        id: "q14",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "会社の 電話に 出ました。部長は 今、席に いません。お客様に 何と言いますか。\n社員：「申し訳ございません。部長の 田中は ただいま 【　　】。」",
        promptEn: "You answered the office phone. The department manager is not at his desk. What do you say to the caller?\nEmployee: 'I am very sorry. Manager Tanaka is currently 【　　】.'",
        options: [
            "席を外しております (seki o hazushite orimasu - away from his desk [humble])",
            "お留守でございます (orusude gozaimasu - absent [honorific for outsider])",
            "帰っていらっしゃいました (kaette irasshaimashita - returned home [honorific])",
            "いませんでした (imasen deshita - was not here [plain past])"
        ],
        correct: 0,
        explanation: "When speaking to an outside caller about an in-group manager who is temporarily away from their desk, use humble keigo:「席を外して（せきをはずして）おります」."
    },
    {
        id: "q15",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "先輩が 重い荷物を 運んでいて 大変そうです。何と 声をかけますか。\n後輩：「先輩、重そうですね。私が 【　　】。」",
        promptEn: "A senior colleague is carrying heavy boxes and looks struggling. What do you offer?\nJunior: 'Senior, that looks heavy. Let me 【　　】.'",
        options: [
            "手伝わせてください (tetsudawasete kudasai - Please let me help you)",
            "手伝ってもいいですか (tetsudatte mo ii desu ka - Is it okay if I help?)",
            "運んであげなさい (hakonde agenasai - Carry it for me)",
            "持っていきましょうか (motte ikimashō ka - Shall I take it away?)"
        ],
        correct: 0,
        explanation: "When eagerly volunteering to help a senior or supervisor in the workplace, saying「私が手伝い（てつだい）ましょうか」or the humble causative「手伝わせてください」(Please let me help) shows proactiveness and respect."
    },
    {
        id: "q16",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "駅の 窓口で、駅員に 新幹線の 切符について 尋ねます。\n旅行者：「すみません、東京までの 新幹線の 切符を 買いたいんですが、クレジットカードは 【　　】？」",
        promptEn: "At the train station window, you ask the staff about Shinkansen tickets.\nTraveler: 'Excuse me, I'd like to buy a Shinkansen ticket to Tokyo. Can I 【　　】 credit card?'",
        options: [
            "使えますか (tsukaemasu ka - Can I use / Is it usable?)",
            "使いませんか (tsukaimasen ka - Won't you use?)",
            "使ってもいいことですか (tsukatte mo ii koto desu ka - Is it a thing to use?)",
            "使わせますか (tsuawasemasu ka - Will you make someone use?)"
        ],
        correct: 0,
        explanation: "To ask if a payment method is accepted or usable, use potential form:「クレジットカードは使え（つかえ）ますか」."
    },
    {
        id: "q17",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "介護の 施設で、お年寄りに 食事を 勧めます。\n介護士：「田中さん、お昼ご飯の 準備が できましたよ。どうぞ 冷めないうちに 【　　】。」",
        promptEn: "At a caregiving facility, you encourage an elderly resident to eat.\nCaregiver: 'Mrs. Tanaka, lunch is ready! Please 【　　】 before it gets cold.'",
        options: [
            "お召し上がりください (omoshiagari kudasai - Please eat / enjoy [honorific])",
            "食べてくれ (tabete kure - Eat it [rough imperative])",
            "いただいてください (itadaite kudasai - Please receive [humble misuse])",
            "食いなさい (kuinasai - Eat [command])"
        ],
        correct: 0,
        explanation: "In SSW caregiving (介護 - Kaigo), speaking to residents with warm, respectful honorific language is required:「お召し上がり（おめしあがり）ください」."
    },
    {
        id: "q18",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "仕事で ミスをしてしまい、店長に 謝ります。\n従業員：「店長、注文の品を 間違えて 出してしまいました。今後、このような ことが ないように 【　　】。」",
        promptEn: "You made a mistake at work and apologize to the store manager.\nEmployee: 'Manager, I accidentally served the wrong order. From now on, I will 【　　】 so that this doesn't happen again.'",
        options: [
            "気をつけます (ki o tsukemasu - I will be careful / pay attention)",
            "気にしません (ki ni shimasen - I won't mind it)",
            "気がつきました (ki ga tsukimashita - I noticed it)",
            "気に入りました (ki ni irimashita - I liked it)"
        ],
        correct: 0,
        explanation: "When apologizing for a workplace error, promising to be careful moving forward is expressed as:「今後（こんご）、気をつけます」."
    },
    {
        id: "q19",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "退勤するとき（仕事を終えて帰るとき）、職場の人に 何と 挨拶しますか。",
        promptEn: "When leaving work at the end of your shift, what greeting do you say to your coworkers?",
        options: [
            "お疲れ様でした。お先に失礼します。(Otsukaresama deshita. Osaki ni shitsurei shimasu - Good job today. Excuse me for leaving first.)",
            "いってまいります。(Itte mairimasu - I am heading out and will return.)",
            "ただいま戻りました。(Tadaima modorimashita - I have just returned.)",
            "ごちそうさまでした。(Gochisōsama deshita - Thank you for the meal.)"
        ],
        correct: 0,
        explanation: "The essential Japanese workplace farewell when clocking out is「お疲れ様でした。お先に失礼します。」."
    },
    {
        id: "q20",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "道を 歩いていたら、財布を 拾いました。交番の お巡りさんに 何と言って 届けますか。\n市民：「すみません、駅前の バスのりばで これを 【　　】。」",
        promptEn: "While walking down the street, you found a wallet. What do you say when turning it in to the police officer at the Koban?\nCitizen: 'Excuse me, I 【　　】 this at the bus stop in front of the station.'",
        options: [
            "拾ったんですが、落とし物です (hirottan desu ga, otoshimono desu - I picked it up; it's a lost item)",
            "盗んだんですが、あげます (nusundan desu ga, agemasu - I stole it; I give it to you)",
            "買ったんですが、いりません (kattan desu ga, irimasen - I bought it; I don't need it)",
            "忘れたんですが、探してください (wasuretan desu ga, sagashite kudasai - I forgot it; please find it)"
        ],
        correct: 0,
        explanation: "To pick up or find a lost item is「拾う（ひろう / 拾いました）」. A lost item is an「落とし物（おとしもの）」."
    },

    // SECTION 3: LISTENING COMPREHENSION (聴解)
    {
        id: "q21",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】工場で 班長が 作業員に 指示を出しています。作業員は この後、まず 何を しなければなりませんか。",
        promptEn: "[Audio Simulation] At a factory, a group leader is giving instructions to a worker. What must the worker do FIRST immediately after this?",
        audioScript: "班長：「田中くん、午後の 作業を 始める前に、まず 機械の 安全点検を してください。点検が終わったら、記録シートに チェックを入れて、それから 部品の 組み立てを 始めてください。」\n作業員：「はい、分かりました。まず 点検ですね。」",
        audioScriptEn: "Leader: 'Tanaka, before starting afternoon work, first please do the machine safety inspection. Once the inspection is finished, check the record sheet, and then begin assembling parts.'\nWorker: 'Yes, understood. Inspection first, right?'",
        options: [
            "機械の 安全点検を する (Do the machine safety inspection)",
            "記録シートに チェックを 入れる (Put a check on the record sheet)",
            "部品の 組み立てを 始める (Begin assembling parts)",
            "午後の 休憩を とる (Take an afternoon break)"
        ],
        correct: 0,
        explanation: "The leader explicitly states:「まず機械の安全点検（あんぜんてんけん）をしてください」before filling out the sheet or starting assembly."
    },
    {
        id: "q22",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】介護の 職場で 引き継ぎを しています。鈴木さんの 今日の 体調は どうですか。",
        promptEn: "[Audio Simulation] At a caregiving workplace, staff are doing a shift handover. How is Mrs. Suzuki's physical condition today?",
        audioScript: "日勤スタッフ：「夜勤の 佐藤さん、お疲れ様です。鈴木さんの 様子ですが、朝ごはんの 後から 少し 熱が あって、37度8分 あります。咳は 出ていませんが、今日は お風呂は 中止にして、部屋で 静かに 休んでいただきます。」\n夜勤スタッフ：「分かりました。水分補給に 気をつけます。」",
        audioScriptEn: "Day staff: 'Night shift Sato, good job. Regarding Mrs. Suzuki's condition, since after breakfast she has had a slight fever of 37.8°C. She doesn't have a cough, but today we canceled her bath and will have her rest quietly in her room.'\nNight staff: 'Understood. I will be careful with her hydration.'",
        options: [
            "少し 熱が あって、お風呂を 中止に している (Has a slight fever; bath canceled)",
            "ひどい 咳が 出ていて、病院に 行った (Has a severe cough; went to hospital)",
            "熱は ないが、朝ごはんを 全然 食べなかった (No fever, but didn't eat breakfast at all)",
            "すっかり 元気になって、お風呂に 入った (Completely well; took a bath)"
        ],
        correct: 0,
        explanation: "The staff reports:「少し熱があって、37度8分あります... 今日はお風呂は中止にして休んでいただきます」."
    },
    {
        id: "q23",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】居酒屋の キッチンで 料理長が 注文を 読み上げています。次に 作る 料理は 何ですか。",
        promptEn: "[Audio Simulation] In an izakaya restaurant kitchen, the head chef is reading out orders. What dish needs to be made NEXT?",
        audioScript: "料理長：「おい、３番テーブルの 焼き鳥盛り合わせは もう 出たか？」\n調理師：「はい、ただいま お出ししました！」\n料理長：「よし、次は ５番テーブルの 海鮮サラダと 枝豆だ。ビールは ホールスタッフが 運んでいるから、急いで サラダを 頼むぞ！」",
        audioScriptEn: "Chef: 'Hey, did the assorted yakitori for table 3 go out yet?'\nCook: 'Yes, we just served it!'\nChef: 'Good, next is the seafood salad and edamame for table 5. Hall staff is bringing the beer, so hurry and prepare the salad!'",
        options: [
            "海鮮サラダと 枝豆 (Seafood salad and edamame)",
            "焼き鳥盛り合わせ (Assorted yakitori skewers)",
            "生ビール３杯 (Three draft beers)",
            "ラーメンと チャーハン (Ramen and fried rice)"
        ],
        correct: 0,
        explanation: "The chef says:「次は５番テーブルの海鮮サラダと枝豆（えだまめ）だ」."
    },
    {
        id: "q24",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】駅の ホームで アナウンスが 流れています。電車が 遅れている 理由は 何ですか。",
        promptEn: "[Audio Simulation] An announcement is playing on a station platform. What is the reason the train is delayed?",
        audioScript: "アナウンス：「お客様に ご案内いたします。ただいま、強風の ため、東海道線は 上り・下りともに １５分ほど 遅れが 出ております。お急ぎの ところ ご迷惑をおかけしますが、しばらく ホームにて お待ちください。」",
        audioScriptEn: "Announcement: 'We have an announcement for passengers. Currently, due to strong winds, the Tokaido Line is experiencing delays of about 15 minutes in both directions. We apologize for the inconvenience when you are in a hurry, but please wait on the platform for a while.'",
        options: [
            "強い 風が 吹いているから (Because strong winds are blowing [強風])",
            "大雪で 線路が 埋まったから (Because heavy snow buried the tracks)",
            "電車が 故障して 止まったから (Because a train broke down and stopped)",
            "駅前で 工事を しているから (Because construction is happening in front of the station)"
        ],
        correct: 0,
        explanation: "The announcement states:「ただいま、強風（きょうふう - strong winds）のため...１５分ほど遅れが」."
    },
    {
        id: "q25",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】農業（野菜づくり）の 現場で 先輩が 指示を しています。今日 収穫する（収穫＝とる）野菜は どれですか。",
        promptEn: "[Audio Simulation] At an agricultural site, a senior worker is giving instructions. Which vegetables are to be harvested today?",
        audioScript: "先輩：「今日は 天気が いいから、午前の うちに 赤くなった トマトを 全部 とってしまおう。隣の ビニールハウスの キュウリは、まだ 小さいから 明日 とることに するよ。」\n実習生：「分かりました。赤くなった トマトだけ ですね。」",
        audioScriptEn: "Senior: 'Since the weather is nice today, let's harvest all the tomatoes that have turned red during the morning. The cucumbers in the next greenhouse are still small, so we'll harvest them tomorrow.'\nIntern: 'Understood. Just the red tomatoes today, right?'",
        options: [
            "赤くなった トマト (Tomatoes that have turned red)",
            "ビニールハウスの キュウリ (Cucumbers in the greenhouse)",
            "じゃがいもと にんじん (Potatoes and carrots)",
            "緑色の 小さい トマト (Small green tomatoes)"
        ],
        correct: 0,
        explanation: "The senior clarifies:「赤くなったトマトを全部とってしまおう... キュウリは明日とる」."
    },
    {
        id: "q26",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】市役所の 窓口で 外国人の 住民が 相談しています。男の人は この後、どの 窓口に 行きますか。",
        promptEn: "[Audio Simulation] A foreign resident is inquiring at city hall window. Which window will the man go to next?",
        audioScript: "住民：「すみません、引っ越してきたので 住所変更の 手続きを したいんですが。」\n職員：「住所の 変更ですね。それなら、あちらの 緑色の 看板の 「３番窓口」へ 行って、番号札を 取ってお待ちください。国民健康保険の 手続きは、その後で 「５番窓口」になります。」\n住民：「分かりました、まず ３番ですね。」",
        audioScriptEn: "Resident: 'Excuse me, I just moved here and want to process my address change.'\nClerk: 'Address change, right? For that, please go to Window 3 with the green sign over there, take a numbered ticket, and wait. Procedures for National Health Insurance will be at Window 5 after that.'\nResident: 'Understood, Window 3 first.'",
        options: [
            "３番窓口 (Window 3)",
            "５番窓口 (Window 5)",
            "１番窓口 (Window 1)",
            "８番窓口 (Window 8)"
        ],
        correct: 0,
        explanation: "The clerk states that for address registration, go to Window 3 first:「緑色の看板の「３番窓口」へ行って」."
    },
    {
        id: "q27",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】ホテルの フロントで お客様が 質問しています。朝食は 何時から 何時まで ですか。",
        promptEn: "[Audio Simulation] A guest is asking a question at the hotel reception desk. From what time until what time is breakfast served?",
        audioScript: "お客様：「すみません、明日の 朝食は どこで 食べられますか。」\nフロント：「朝食は １階の レストラン「サクラ」にて、朝６時半から ９時半まで ご用意しております。チェックアウトは １０時でございます。」",
        audioScriptEn: "Guest: 'Excuse me, where can I eat breakfast tomorrow?'\nReceptionist: 'Breakfast is served at the 1st-floor restaurant Sakura from 6:30 AM to 9:30 AM. Checkout is at 10:00 AM.'",
        options: [
            "朝 ６時半から ９時半まで (6:30 AM to 9:30 AM)",
            "朝 ７時から １０時まで (7:00 AM to 10:00 AM)",
            "朝 ６時から ８時半まで (6:00 AM to 8:30 AM)",
            "朝 ５時半から ９時まで (5:30 AM to 9:00 AM)"
        ],
        correct: 0,
        explanation: "The receptionist clearly states:「朝６時半から９時半までご用意しております」."
    },
    {
        id: "q28",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】職場の 朝礼で 店長が 話しています。今週の 土曜日に クリーン作戦（掃除）をする 場所は どこですか。",
        promptEn: "[Audio Simulation] At a morning workplace meeting, the store manager is speaking. Where is the cleanup operation taking place this Saturday?",
        audioScript: "店長：「おはようございます。お知らせです。今週の 土曜日の 朝８時から、店の人 全員で お店の 周りと 駅前の 公園の 掃除を 行います。雨が 降った 場合は 来週の 土曜日に 延期になります。軍手と ゴミ袋は お店で 用意します。」",
        audioScriptEn: "Manager: 'Good morning. An announcement: This Saturday from 8:00 AM, all store staff will clean the area around the store and the park in front of the station. In case of rain, it will be postponed to next Saturday. Work gloves and trash bags will be provided by the store.'",
        options: [
            "お店の 周りと 駅前の 公園 (Around the store and the park in front of the station)",
            "駅の ホームと 電車の中 (Station platform and inside trains)",
            "市役所の 駐車場と 道路 (City hall parking lot and roads)",
            "工場の 食堂と トイレ (Factory cafeteria and restrooms)"
        ],
        correct: 0,
        explanation: "The manager mentions:「お店の周りと駅前の公園（こうえん）の掃除（そうじ）を行います」."
    },
    {
        id: "q29",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】スーパーの 店内で 割引タイムセールの 放送が 流れています。今から 半額（50%オフ）になる 商品は 何ですか。",
        promptEn: "[Audio Simulation] A time-sale discount broadcast is playing inside a supermarket. Which products are becoming half-price (50% off) starting now?",
        audioScript: "放送：「いつも ご来店いただき ありがとうございます。ただいまより １５分間、精肉売り場におきまして、本日の 国産牛肉と 豚肉を レジにて 全品 半額とさせていただきます！今夜の すき焼きや 焼肉に ぜひ ご利用くださいませ！」",
        audioScriptEn: "Broadcast: 'Thank you for shopping with us today. Starting right now for 15 minutes at the meat counter, all domestic beef and pork today will be 50% off at the register! Please take advantage of this for tonight's sukiyaki or yakiniku!'",
        options: [
            "国産の 牛肉と 豚肉 (Domestic beef and pork)",
            "新鮮な 刺身と お寿司 (Fresh sashimi and sushi)",
            "焼き立ての パンと ケーキ (Freshly baked bread and cake)",
            "牛乳と ヨーグルト (Milk and yogurt)"
        ],
        correct: 0,
        explanation: "The broadcast announces:「精肉（せいにく）売り場におきまして、国産牛肉と豚肉をレジにて全品半額（はんがく）」."
    },
    {
        id: "q30",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】病院の 受付で 看護師が 患者に 薬の 飲み方を 説明しています。薬は いつ 飲みますか。",
        promptEn: "[Audio Simulation] At a hospital reception desk, a nurse is explaining how to take medicine to a patient. When should the patient take the medicine?",
        audioScript: "看護師：「キムさん、こちらの 白い 錠剤は、朝・昼・晩の １日３回、食事の 後に ３０分以内に 飲んでください。胃が 痛くなるので、お腹が 空いている ときは 飲まないでくださいね。」\n患者：「はい、ご飯の 後ですね。」",
        audioScriptEn: "Nurse: 'Mr. Kim, please take these white pills 3 times a day—morning, lunch, and dinner—within 30 minutes AFTER meals. Since it can cause stomach ache, please don't take it when your stomach is empty.'\nPatient: 'Yes, after meals, right.'",
        options: [
            "１日３回、食事の 後 (3 times a day, after meals [食後])",
            "１日２回、食事の 前 (2 times a day, before meals [食前])",
            "夜 寝る 前だけ (Only at night before going to bed)",
            "頭が 痛い ときだけ (Only when having a headache)"
        ],
        correct: 0,
        explanation: "The nurse emphasizes:「１日３回、食事の後（しょくじのあと / 食後）に３０分以内に飲んでください」."
    },

    // SECTION 4: READING COMPREHENSION (読解)
    {
        id: "q31",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【工場の安全規則】 を読んで 質問に 答えてください。\n\n――― 【工場の安全規則（あんぜんきそく）】 ―――\n1. 工場内では、必ず 安全帽（ヘルメット）と 安全靴を 着用すること。\n2. 機械を 掃除するときや 点検するときは、必ず 電源スイッチを切ること。\n3. 工場内は 走らないこと。通路に 荷物を 置かないこと。\n4. 火災や 地震の ときは、エレベーターを 使わず、階段で 非常口（ひじょうぐち）から 外へ 避難すること。\n――――――――――――――――――――――――――\n\n質問：火災や 地震が 起こったとき、どうしなければなりませんか。",
        promptEn: "Read the 【Factory Safety Rules】 notice below and answer the question.\n[Notice] 1. Always wear safety helmet and shoes inside factory. 2. Turn off main power switch when cleaning/inspecting machines. 3. Do not run. Do not place items in walkways. 4. In case of fire or earthquake, do not use elevators; evacuate outside from emergency exits using stairs.\n\nQuestion: What must be done in the event of a fire or earthquake?",
        options: [
            "エレベーターを 使わないで、階段で 非常口から 避難する (Do not use elevators; evacuate from emergency exit via stairs)",
            "急いで エレベーターに 乗って １階へ 降りる (Hurry and take the elevator down to the 1st floor)",
            "機械の 電源を 入れてから、工場内を 走って 逃げる (Turn ON machine power, then run through factory to escape)",
            "通路に 荷物を 置いて、部屋の中で 静かに 待つ (Place luggage in walkway and wait quietly in room)"
        ],
        correct: 0,
        explanation: "Rule 4 states:「火災や地震のときは、エレベーターを使わず、階段で非常口から外へ避難すること」."
    },
    {
        id: "q32",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【アパートのゴミ出しのルール】 を読んで 質問に 答えてください。\n\n――― 【ゴミ収集日（しゅうしゅうび）のお知らせ】 ―――\n◆ 燃えるゴミ（生ゴミ、紙など）：毎週 月曜日・木曜日 （朝８時までに出す）\n◆ プラスチック容器・包装　　：毎週 水曜日\n◆ 缶・ビン・ペットボトル　　：毎月 第１・第３ 金曜日\n※ ゴミは 必ず 市が 指定した 有料ゴミ袋に入れて、アパート前の ゴミ置き場に出してください。夜中に 出さないでください。\n――――――――――――――――――――――――――\n\n質問：ジュースの 缶や ビンは いつ 出すことができますか。",
        promptEn: "Read the 【Apartment Garbage Disposal Rules】 below and answer the question.\n[Notice] Burnable garbage: Mon & Thu (put out by 8am). Plastics: Wed. Cans/Bottles/PET bottles: 1st & 3rd Friday of every month. *Must use city-designated paid trash bags and put in collection area. Do not put out late at night.\n\nQuestion: When can juice cans and glass bottles be put out for collection?",
        options: [
            "毎月 第１・第３ 金曜日 (1st and 3rd Friday of every month)",
            "毎週 月曜日と 木曜日の 朝８時まで (Every Monday and Thursday by 8:00 AM)",
            "毎週 水曜日の 夜中 (Every Wednesday late at night)",
            "毎月 第２・第４ 土曜日 (2nd and 4th Saturday of every month)"
        ],
        correct: 0,
        explanation: "The notice lists:「缶・ビン・ペットボトル：毎月 第１・第３ 金曜日」."
    },
    {
        id: "q33",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【職場のメール】 を読んで 質問に 答えてください。\n\n――― 件名：来週のシフト変更のお願い ―――\n宛先：マリアさん\n送信者：アリー\n\nマリアさん、お疲れ様です。アリーです。\n来週の ５日（火曜日）の シフトについて お願いがあります。\n実は その日、子供の 学校で 面談が あります。そのため、私の ５日の 早番（8:00-16:00）と、マリアさんの ６日（水曜日）の 早番を 交代していただけないでしょうか。\nもし ご都合が 悪ければ 他の人に 相談しますので、明日までに お返事を いただけると 助かります。よろしくお願いいたします。\n――――――――――――――――――――――――――\n\n質問：アリーさんは なぜ シフトを 交代してほしいと 頼んでいますか。",
        promptEn: "Read the 【Workplace Email】 below and answer the question.\nSubject: Request for shift change next week / To: Maria / From: Ali\nMaria, good job today. I have a request regarding next week's shift on the 5th (Tue). Actually, on that day there is a school parent-teacher interview for my child. Therefore, could we switch my early shift on the 5th with your early shift on the 6th (Wed)? If that is inconvenient, I will ask someone else, so please reply by tomorrow.\n\nQuestion: Why is Ali asking Maria to switch shifts?",
        options: [
            "子供の 学校で 面談が あるから (Because there is a parent interview at his child's school)",
            "自分が 病気になって 病院に 入院するから (Because he got sick and is being hospitalized)",
            "来週の 水曜日に 国へ 帰省するから (Because he is returning to his home country next Wednesday)",
            "工場の 研修で 出張しなければならないから (Because he has to go on a business trip for training)"
        ],
        correct: 0,
        explanation: "Ali explains his reason:「実はその日、子供の学校で面談（めんだん）があります」."
    },
    {
        id: "q34",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【レストランの割引クーポン】 を読んで 質問に 答えてください。\n\n――― 【居酒屋「富士」春の感謝クーポン】 ―――\n★ この クーポンを ご注文の 際に スタッフに お見せください。\n★ お会計の 合計金額から 【２０％割引（オフ）】 いたします！\n・有効期限（使える期間）：２０２６年 ７月 ３１日まで\n・注意：金曜日と 土曜日、祝日の 夜（17時以降）は ご利用になれません。\n・他の 割引サービスとの 併用（一緒に使うこと）は できません。\n――――――――――――――――――――――――――\n\n質問：この クーポンについて、正しい 説明は どれですか。",
        promptEn: "Read the 【Restaurant Discount Coupon】 below and answer the question.\n[Izakaya Fuji Spring Thanks Coupon] Present to staff when ordering. 20% OFF total bill! Valid until: July 31, 2026. Note: Cannot be used on Friday & Saturday nights or holidays (after 5 PM). Cannot be combined with other discount services.\n\nQuestion: Which statement is true regarding this coupon?",
        options: [
            "金曜日や 土曜日の 夜には 使うことが できない (Cannot be used on Friday or Saturday nights)",
            "お会計の 合計金額から 半額（50%オフ）になる (Provides half price [50% off] on the total bill)",
            "２０２６年の 年末（12月31日）まで いつでも 使える (Can be used anytime until the end of year Dec 31, 2026)",
            "他の 割引クーポンや サービスと 一緒に 使うことができる (Can be used together with other discount coupons/services)"
        ],
        correct: 0,
        explanation: "The notice states:「注意：金曜日と土曜日、祝日の夜（17時以降）はご利用になれません」."
    },
    {
        id: "q35",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【健康診断（けんこうしんだん）のお知らせ】 を読んで 質問に 答えてください。\n\n――― 【従業員 定期健康診断のご案内】 ―――\n日時：１０月１５日（木） 午前９時 ～ 午後４時\n場所：本社ビル ２階 大会議室\n対象：全社員および 技能実習生・特定技能スタッフ\n【注意事項】\n・当日は、受診票（チェックシート）を 忘れずに 持参してください。\n・午前に 検査を受ける人は、朝食を 食べないで 来てください。水やお茶は 飲んでも 構いません。\n・着替えやすい 服装で お越しください。\n――――――――――――――――――――――――――\n\n質問：午前中に 健康診断を 受ける人は、どうしなければなりませんか。",
        promptEn: "Read the 【Health Examination Notice】 below and answer the question.\n[Employee Health Exam Notice] Date: Oct 15 (Thu) 9am-4pm. Place: Head Office 2F Conf Room. For all staff, interns, SSW workers. [Notes] Must bring medical exam form. Those taking morning exam MUST NOT eat breakfast (water/tea is okay). Wear clothes easy to change.\n\nQuestion: What must people taking the health examination in the morning do?",
        options: [
            "朝ごはんを 食べないで 行かなければならない (Must go without eating breakfast)",
            "前日の 夜から 水も お茶も 飲んではいけない (Must not drink water or tea from the evening before)",
            "本社ビル ではなく、近くの 病院へ 行かなければならない (Must go to a nearby hospital, not head office)",
            "受診票を 会社に 置いて行かなければならない (Must leave exam form at the company)"
        ],
        correct: 0,
        explanation: "The notes explicitly state:「午前に検査を受ける人は、朝食を食べないで来てください」."
    },
    {
        id: "q36",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【食堂の営業時間変更のお知らせ】 を読んで 質問に 答えてください。\n\n――― 【社員食堂（しょくどう）からのお知らせ】 ―――\n来週 月曜日（８月１０日）から ８月１４日（金曜日）までの お盆期間中は、食堂の 営業時間が 以下のとおり 変更になります。\n・昼食（ランチ）： １１：３０ ～ １３：３０ （通常どおり）\n・夕食（ディナー）： お盆期間中は 【営業休止（休み）】 となります。\n※ 夜勤で 夕食が 必要な スタッフは、１階の 購買部（売店）で お弁当を ご予約ください。\n――――――――――――――――――――――――――\n\n質問：８月１２日（水曜日）の 夕食について、正しいものは どれですか。",
        promptEn: "Read the 【Cafeteria Hours Change Notice】 below and answer the question.\n[Notice from Staff Cafeteria] During the Obon period from Aug 10 (Mon) to Aug 14 (Fri), hours will change as follows: Lunch 11:30-13:30 (normal). Dinner: CLOSED during Obon period. *Night shift staff needing dinner should reserve bento lunchboxes at the 1F shop.\n\nQuestion: Which statement is correct regarding dinner on Wednesday, August 12?",
        options: [
            "食堂は 休みなので、必要な 人は 売店で お弁当を 予約する (Cafeteria is closed, so those who need it reserve bento at shop)",
            "通常どおり 夜 １０時まで 食堂で 夕食を 食べることができる (Can eat dinner at cafeteria as normal until 10 PM)",
            "昼食も 夕食も 両方とも 営業を お休みする (Both lunch and dinner are closed)",
            "夜勤の スタッフだけが 食堂で 無料で 夕食を 食べられる (Only night shift staff can eat free dinner in cafeteria)"
        ],
        correct: 0,
        explanation: "The notice states:「夕食：お盆期間中は【営業休止（休み）】...必要なスタッフは購買部でお弁当をご予約ください」."
    },
    {
        id: "q37",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【電車の運行情報（うんこうじょうほう）】 を読んで 質問に 答えてください。\n\n――― 【JR東日本 運行情報（午後２時１５分現在）】 ―――\n◆ 山手線（やまのてせん）：午後１時５０分頃、新宿駅で 発生した 信号機故障の ため、内回り・外回りの 全線で 運転を見合わせて（止まって）います。運転再開は 午後３時３０分頃の 見込みです。\n◆ 中央線（ちゅうおうせん）：通常どおり 運行しています。山手線の 代わりに ご利用ください。\n――――――――――――――――――――――――――\n\n質問：午後２時３０分現在、山手線は どうなっていますか。",
        promptEn: "Read the 【Train Operation Information】 below and answer the question.\n[JR East Info (as of 2:15 PM)] Yamanote Line: Due to signal failure at Shinjuku Station around 1:50 PM, all operations (inner/outer loops) are suspended. Estimated resumption is around 3:30 PM. Chuo Line: Operating normally. Please use instead of Yamanote Line.\n\nQuestion: As of 2:30 PM, what is the status of the Yamanote Line?",
        options: [
            "信号機故障の ため、運転を 止めていて 乗ることができない (Operations are stopped due to signal failure and cannot be ridden)",
            "午後２時から 運転を 再開して、通常どおり 走っている (Resumed operations at 2 PM and running normally)",
            "中央線と 同じように、朝から 一度も 止まっていません (Has not stopped even once since morning, same as Chuo Line)",
            "新宿駅から 東京駅の間 だけ、特別に 無料で 乗ることができる (Only between Shinjuku and Tokyo stations can be ridden for free)"
        ],
        correct: 0,
        explanation: "As of 2:15 PM (and up to 3:30 PM estimated), Yamanote Line is suspended:「全線で運転を見合わせて（止まって）います」."
    },
    {
        id: "q38",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【図書館の利用案内】 を読んで 質問に 答えてください。\n\n――― 【さくら市立図書館 ご利用の案内】 ―――\n・本の 貸出冊数： １人 １０冊まで\n・貸出期間　　： ２週間（１４日間）\n・返却方法　　： カウンターへ お返しください。図書館が 閉まっている 夜間や 休館日は、玄関横の 「返却ポスト」に入れてください。\n・注意　　　　： 本や 雑誌を 汚したり 破いたりした 場合は、弁償（同じ本を 買って返すこと）していただく ことがあります。\n――――――――――――――――――――――――――\n\n質問：図書館が 休みの日や 夜間に 本を 返したいとき、どうしますか。",
        promptEn: "Read the 【Library Usage Guide】 below and answer the question.\n[Sakura City Library Guide] Borrowing limit: 10 books per person for 2 weeks. Return method: Return to counter. On closed days or at night when closed, put into 'Return Post' box next to entrance. Note: Damaged/torn books may require reimbursement/replacement.\n\nQuestion: What should you do when you want to return a book at night or on a closed day?",
        options: [
            "玄関横にある 「返却ポスト」に 本を 入れる (Put the book into the 'Return Post' box next to entrance)",
            "次の 開館日まで 待って、必ず カウンターの 人に 手渡しする (Wait until next open day and give directly to staff)",
            "市役所の 郵便ポストに 切手を 貼って 郵送する (Put stamp on and mail via city hall mailbox)",
            "図書館の 窓を 開けて、部屋の中の 机に 置いておく (Open library window and put on inside desk)"
        ],
        correct: 0,
        explanation: "The guide instructs:「図書館が閉まっている夜間や休館日は、玄関横の「返却ポスト」に入れてください」."
    },
    {
        id: "q39",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【寮（りょう）の生活ルール】 を読んで 質問に 答えてください。\n\n――― 【あさひ社員寮 共同生活のルール】 ―――\n1. 【静粛時間】 夜１０時から 翌朝６時までは、テレビや 音楽の 音を 小さくして、大きな声で 騒がないこと。\n2. 【食堂・台所】 使った 食器や 調理器具は、自分で 洗って 元の 場所に 戻すこと。\n3. 【宿泊の制限】 寮生以外の 家族や 友達を 寮内の 部屋に 泊まらせることは、防犯の ため 一切 禁止します。\n――――――――――――――――――――――――――\n\n質問：この 寮で 禁止されている ことは どれですか。",
        promptEn: "Read the 【Dormitory Life Rules】 below and answer the question.\n[Asahi Dormitory Rules] 1. Quiet hours: 10 PM to 6 AM (keep TV/music quiet, no loud talking). 2. Kitchen: Wash used dishes/utensils yourself and return to original place. 3. Overnight visitors: Lodging family or friends who are not dormitory residents in your room is strictly prohibited for security reasons.\n\nQuestion: Which of the following is PROHIBITED in this dormitory?",
        options: [
            "寮に 住んでいる人 以外の 友達や 家族を 部屋に 泊まらせること (Letting non-resident friends or family stay overnight in your room)",
            "夜 １０時前に 台所で 自分で 晩ごはんを 料理すること (Cooking dinner yourself in the kitchen before 10 PM)",
            "使った お皿や フライパンを 洗ってから 戸棚に 戻すこと (Washing used dishes and frying pans and returning them to cabinet)",
            "朝 ７時に 食堂の テレビを 見ながら 朝ごはんを 食べること (Eating breakfast while watching TV in cafeteria at 7 AM)"
        ],
        correct: 0,
        explanation: "Rule 3 clearly states:「寮生以外の家族や友達を寮内の部屋に泊まらせることは、防犯のため一切禁止します」."
    },
    {
        id: "q40",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【台風接近に伴う業務連絡】 を読んで 質問に 答えてください。\n\n――― 【重要】大型台風７号接近に伴う明日の勤務について ―――\n発信：人事部\n日時：９月１日 １５：００\n\n明日 ９月２日（水）は、大型台風７号の 接近に伴い、公共交通機関が 計画運休（止まること）する 可能性が あります。\nそのため、明日の 本社および 第二工場の 業務は、【午後１時から 臨時休業（お休み）】 といたします。\n午前の 勤務（8:30～12:00）は 通常どおり 行いますが、雨や 風が 強い 場合は 無理をせず、安全第一で 出社するか どうかを 判断してください。欠勤や 遅刻の 場合は、必ず 部署の リーダーへ 電話か メールで 連絡を してください。\n――――――――――――――――――――――――――\n\n質問：明日 ９月２日（水）の 仕事について、正しい 説明は どれですか。",
        promptEn: "Read the 【Notice Regarding Approaching Typhoon】 below and answer the question.\n[Important] Notice from HR regarding tomorrow Sept 2 due to Typhoon No. 7. Public transport may suspend service. Therefore, operations at Head Office and Factory 2 will be CLOSED from 1:00 PM tomorrow. Morning work (8:30-12:00) is as normal, but if rain/wind is severe, put safety first. If absent or late, must contact department leader by phone or email.\n\nQuestion: Which statement is true regarding work tomorrow, September 2?",
        options: [
            "午前の 仕事は 行うが、午後１時からは 臨時でお休みになる (Morning work takes place, but from 1 PM operations are temporarily closed)",
            "台風が 来ても、朝から 夜まで 一日中 通常どおり 残業まで 働く (Even with typhoon, work full day from morning to night including overtime)",
            "電車が 止まっても、歩いて 必ず 会社に 出社しなければならない (Even if trains stop, must walk to company and attend work)",
            "欠勤する ときは、誰にも 連絡しないで 家で 寝ていてよい (When absent, you can sleep at home without contacting anyone)"
        ],
        correct: 0,
        explanation: "The notice states:「明日の本社および第二工場の業務は、【午後１時から臨時休業（お休み）】といたします。午前の勤務は通常どおり...」."
    }
];
