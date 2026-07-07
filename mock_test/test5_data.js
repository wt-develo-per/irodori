// test5_data.js - JFT-Basic SSW Mock Test 5 Datastore (45 Questions)
// Aligned with CEFR A2 / Irodori & Genki Elementary Japanese
// Focus: Hospitality (Hotel Lodging / 宿泊業) & Restaurant Management (Food Service / 外食業)

const jftExamData = [
    // ==========================================
    // SECTION 1: SCRIPT AND VOCABULARY (文字と語彙) - 12 Questions
    // ==========================================
    {
        id: "q1",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "観光客が 東京の ホテルに ３日間 【宿泊】します。【宿泊】の 正しい 読み方は どれですか。",
        promptEn: "Tourists will stay at a hotel in Tokyo for 3 days. What is the correct reading of 【宿泊】 (lodging / staying)?",
        options: [
            "しゅくはく (shukuhaku - lodging / hotel stay)",
            "しゅくじつ (shukujitsu - national holiday)",
            "しゅっぱつ (shuppatsu - departure)",
            "しゅっきん (shukkin - going to work)"
        ],
        correct: 0,
        explanation: "「宿泊（しゅくはく）」means lodging or staying overnight at a hotel/ryokan. The SSW Hotel industry is called「宿泊業（しゅくはくぎょう）」."
    },
    {
        id: "q2",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "金曜日の 夜は 混雑するので、電話で レストランの 席を 【よやく】しました。正しい 漢字は どれですか。",
        promptEn: "Friday nights are crowded, so I booked a restaurant table by phone. Which kanji matches 【よやく】 (reservation)?",
        options: [
            "予約 (yoyaku - reservation / booking)",
            "予定 (yotei - schedule / plan)",
            "約束 (yakusoku - promise / appointment)",
            "予報 (yohō - forecast)"
        ],
        correct: 0,
        explanation: "「予約（よやく）」is the standard term for booking or reserving hotel rooms, restaurant tables, or tickets."
    },
    {
        id: "q3",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "申し訳ございません。本日は ホテルの 全ての 部屋が 予約で 埋まっており、【まんしつ】と なっております。正しい 漢字は どれですか。",
        promptEn: "We are very sorry. All rooms in the hotel are booked today, and we are 【まんしつ】 (fully booked / no vacancies). Which kanji matches?",
        options: [
            "満室 (manshitsu - fully booked / no vacant rooms)",
            "空室 (kūshitsu - vacant room / vacancy)",
            "客室 (kyakushitsu - guest room)",
            "和室 (washitsu - Japanese tatami room)"
        ],
        correct: 0,
        explanation: "「満室（まんしつ）」means 100% occupancy or no vacancies. A vacant or available room is「空室（くうしつ）」."
    },
    {
        id: "q4",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "レストランで 食事が 終わった 後は、レジ（フロント）で お金の 【精算】を お願いいたします。【精算】の 読み方は どれですか。",
        promptEn: "After finishing your meal at the restaurant, please make the 【精算】 (payment / bill settlement) at the cash register. What is the reading?",
        options: [
            "せいさん (seisan - bill settlement / payment / checkout)",
            "かいけい (kaikei - bill / accounting)",
            "けいさん (keisan - calculation)",
            "よさん (yosan - budget)"
        ],
        correct: 0,
        explanation: "「精算（せいさん）」means settling a bill, payment, or checkout accounting at hotels and restaurants. (Also interchangeable with「お会計 / kaikei」)."
    },
    {
        id: "q5",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "お客様が チェックアウトした 後、ハウスキーピングの スタッフが 客室を きれいに 【せいそう】します。正しい 漢字は どれですか。",
        promptEn: "After the guest checks out, housekeeping staff cleanly 【せいそう】 (clean / housekeeping) the guest room. Which kanji matches?",
        options: [
            "清掃 (seisō - cleaning / housekeeping)",
            "清潔 (seiketsu - hygiene / cleanliness)",
            "整理 (seiri - sorting / organizing)",
            "整頓 (seiton - arranging neatly)"
        ],
        correct: 0,
        explanation: "In hotels and facility maintenance, professional cleaning and room making is called「清掃（せいそう）」."
    },
    {
        id: "q6",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "レストランの ウェイターは、お客様の 【注文】を ハンディ端末に 正確に 入力します。【注文】の 読み方は どれですか。",
        promptEn: "The restaurant waiter accurately enters the customer's 【注文】 (order) into the handheld terminal. What is the reading?",
        options: [
            "ちゅうもん (chūmon - order / ordering)",
            "ちゅうい (chūi - caution / attention)",
            "ちゅうしゃ (chūsha - injection / parking)",
            "ちょうり (chōri - cooking)"
        ],
        correct: 0,
        explanation: "「注文（ちゅうもん）」means ordering food or goods. Taking an order at a restaurant table is「ご注文を伺う（うかがう）」."
    },
    {
        id: "q7",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "タバコの 煙が 苦手な お客様には、「【きんえん】席と 喫煙席、どちらが よろしいでしょうか」 と 聞いて ご案内します。正しい 漢字は どれですか。",
        promptEn: "For guests who dislike cigarette smoke, ask 'Would you prefer a 【きんえん】 (non-smoking) seat or smoking seat?' Which kanji matches?",
        options: [
            "禁煙 (kin'en - non-smoking / prohibition of smoking)",
            "喫煙 (kitsu'en - smoking permitted)",
            "満席 (manseki - all seats full)",
            "空席 (kūseki - empty seat)"
        ],
        correct: 0,
        explanation: "「禁煙（きんえん）」means non-smoking. A seat where smoking is permitted is「喫煙（きつえん）席」."
    },
    {
        id: "q8",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "「会社の 経費で お金を 落とす ので、レシートではなく 【領収書】を ください」 と 言われました。【領収書】の 読み方は どれですか。",
        promptEn: "The guest said, 'I'm expensing this to my company, so please give me a 【領収書】 (tax receipt / invoice) instead of a cash tape receipt.' What is the reading?",
        options: [
            "りょうしゅうしょ (ryōshūsho - official tax receipt / payment voucher)",
            "せいきゅうしょ (seikyūsho - billing invoice)",
            "みつもりしょ (mitsumorisho - quotation estimate)",
            "めいさいしょ (meisaisho - detailed statement)"
        ],
        correct: 0,
        explanation: "「領収書（りょうしゅうしょ）」is an official hand-signed or printed payment receipt with the customer's name, required for corporate tax expense claims in Japan."
    },
    {
        id: "q9",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "日本の レストランや 居酒屋では、お客様が 席に 触ったら、まず 最初にお冷（水）と 一緒に 手を 拭く ための 【　　】を お渡しします。",
        promptEn: "In Japanese restaurants and izakayas, when a customer sits down, you first hand them a glass of water along with a 【　　】 to wipe their hands.",
        options: [
            "おしぼり (oshibori - wet hand towel)",
            "おはし (ohashi - chopsticks)",
            "おさげ (osage - clearing dishes)",
            "おつり (otsuri - change / money)"
        ],
        correct: 0,
        explanation: "Handing out a clean, warm or cold wet hand towel (おしぼり / oshibori) is fundamental Japanese hospitality (おもてなし / omotenashi)."
    },
    {
        id: "q10",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "ホテルの 客室の バスルームに 置いてある、歯ブラシ、カミソリ、シャンプー、石鹸などの 消耗品（備品）の ことを 何と 言いますか。",
        promptEn: "What is the collective term for consumable items placed in hotel guest bathrooms such as toothbrushes, razors, shampoo, and soap?",
        options: [
            "アメニティ (ameniti - hotel guest room amenities)",
            "バイキング (baikingu - all-you-can-eat buffet)",
            "ルームサービス (rūmu sābisu - room service)",
            "フロントデスク (furonto desuku - front desk reception)"
        ],
        correct: 0,
        explanation: "In the lodging industry (宿泊業), guest room toiletry sets and complimentary items are called「アメニティ (Amenities)」."
    },
    {
        id: "q11",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "レストランで 閉店時間（お店が閉まる時間）の ３０分前に 行う、「最後の お料理と お飲み物の ご注文」 のことを 何と 言いますか。",
        promptEn: "What is the restaurant term for taking the 'final food and drink orders' conducted 30 minutes before closing time?",
        options: [
            "ラストオーダー (rasuto ōdā - last order)",
            "ハッピーアワー (happī awā - happy hour discount time)",
            "テーブルチェック (tēburu chekku - paying bill at table)",
            "テイクアウト (teiku auto - take-out / food to go)"
        ],
        correct: 0,
        explanation: "「ラストオーダー (Last Order / L.O.)」is standard in Japanese food service; servers must visit every table to ask if guests want any final orders."
    },
    {
        id: "q12",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "ホテルの 宿泊客が 「明日の 朝 ６時に 起きたいので、客室の 電話を 鳴らして 起こしてください」 と 頼む サービスの ことを 何と 言いますか。",
        promptEn: "What is the hotel service where a guest requests, 'I want to wake up at 6 AM tomorrow morning, so please ring my room phone to wake me up'?",
        options: [
            "モーニングコール (mōningu kōru - wake-up call)",
            "エキストラベッド (ekisutora beddo - extra spare bed)",
            "レイトチェックアウト (reito chekku auto - late checkout extension)",
            "バゲージダウン (bagēji daun - bringing luggage down from room)"
        ],
        correct: 0,
        explanation: "In Japanese hotels, a telephone wake-up call service requested by a guest is called「モーニングコール (Morning Call)」."
    },

    // ==========================================
    // SECTION 2: CONVERSATION AND EXPRESSION (会話と表現) - 11 Questions
    // ==========================================
    {
        id: "q13",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "ホテルの フロントに お客様が キャリーケースを持って やって来ました。フロントスタッフとして 最初になんと ご挨拶しますか。\nスタッフ：「いらっしゃいませ。本日 ご宿泊の 【　　】。」",
        promptEn: "A guest arrived at the hotel front desk with a suitcase. As front desk staff, how do you greet them first?\nStaff: 'Welcome. Are you here for 【　　】 today?'",
        options: [
            "チェックインで ございますか (chekku in de gozaimasu ka - check-in?)",
            "お掃除で ございますか (osōji de gozaimasu ka - room cleaning?)",
            "おつまみで ございますか (otsumami de gozaimasu ka - drinking snacks?)",
            "お留守番で ございますか (orusuban de gozaimasu ka - house sitting?)"
        ],
        correct: 0,
        explanation: "In hotel hospitality (宿泊業の敬語), greeting arriving guests politely with:「いらっしゃいませ。チェックインでございますか」is standard."
    },
    {
        id: "q14",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "お客様の 予約の名前を パソコンの システムで お調べします。少し 待っていただく とき、何と お願いしますか。\nスタッフ：「すぐに ご予約を お調べいたしますので、少々 【　　】。」",
        promptEn: "You are searching for the guest's reservation name in the computer system. How do you ask them to wait a moment?\nStaff: 'I will look up your reservation right away, so please 【　　】 a moment.'",
        options: [
            "お待ちくださいませ (omachi kudasai mase - please kindly wait)",
            "座って 寝てください (suwatte nete kudasai - please sit and sleep)",
            "外に出て 走ってください (soto ni dete hashitte kudasai - please go outside and run)",
            "自分で 探してください (jibun de sagashite kudasai - please search by yourself)"
        ],
        correct: 0,
        explanation: "When asking a customer or guest to wait while processing checks, use polite business keigo:「少々（しょうしょう）お待ちくださいませ」."
    },
    {
        id: "q15",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "レストランで お客様が 「本日の 特製ランチセット」 を 注文しましたが、既に 全部 売れてしまい 残っていません。何と 謝りますか。\nスタッフ：「大変 申し訳ございません。本日の 特製ランチは 【　　】。」",
        promptEn: "A customer ordered 'Today's Special Lunch Set' at the restaurant, but it is already completely sold out and none remain. How do you apologize?\nStaff: 'I am extremely sorry. Today's special lunch is 【　　】.'",
        options: [
            "売り切れて しまいました (urikirete shimaimashita - completely sold out)",
            "腐って しまいました (kusatte shimaimashita - rotted away)",
            "私が 全部 食べてしまいました (watashi ga zenbu tabete shimaimashita - I ate it all up)",
            "明日から 作り始めます (ashita kara tsukurihajimemasu - we will start making it from tomorrow)"
        ],
        correct: 0,
        explanation: "When a dish is sold out or out of stock, apologize politely using:「申し訳ございません。あいにく〜は売り切れてしまいました / 品切れでございます」."
    },
    {
        id: "q16",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "レストランの 入口に グループのお客様が 来店しました。人数の 確認を する とき、何と 質問しますか。\nスタッフ：「いらっしゃいませ！本日は 【　　】。」",
        promptEn: "A group of customers arrived at the restaurant entrance. How do you ask to confirm the number of people in their party?\nStaff: 'Welcome! For how many people today? / 【　　】?'",
        options: [
            "何名様で いらっしゃいますか (nanmeisama de irasshaimasu ka - How many guests are in your party?)",
            "何個の 人間で きましたか (nanko no ningen de kimashita ka - How many pieces of humans came?)",
            "誰と 一緒に ご飯を 食べますか (dare to issho ni gohan o tabemasu ka - Who will you eat rice with?)",
            "お腹は 減っていますか (onaka wa hette imasu ka - Are your stomachs hungry?)"
        ],
        correct: 0,
        explanation: "Asking the number of guests using respectful customer service keigo (接客敬語) is:「何名様（なんめいさま）でいらっしゃいますか」."
    },
    {
        id: "q17",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "ホテルの チェックインで、朝食バイキングの 時間と 場所を 宿泊客に ご案内します。\nスタッフ：「朝食は １階の レストランで、朝６時半から ９時まで 【　　】。」",
        promptEn: "At hotel check-in, you inform the guest of the breakfast buffet time and location.\nStaff: 'Breakfast is served at the 1F restaurant from 6:30 AM to 9:00 AM. You can 【　　】.'",
        options: [
            "お召し上がりいただけます (omeshia gari itadakemasu - enjoy / eat [respectful keigo])",
            "食べ込んでも いいですよ (tabekonde mo ii desu yo - you can stuff yourselves eat [casual/rude])",
            "自分で 作って 食べなさい (jibun de tsukutte tabenasai - make it yourself and eat [command])",
            "持って帰って 売ってください (motte kaette utte kudasai - take it home and sell it)"
        ],
        correct: 0,
        explanation: "Respectful keigo (尊敬語) for 'customers eating/drinking' is「お召し上がりになる / お召し上がりいただけます」."
    },
    {
        id: "q18",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "お客様から 「運ばれてきた スープが 冷たくなっているよ」 と クレーム（苦情）を 受けました。何と 対応しますか。\nスタッフ：「大変 申し訳ございません。すぐに 温かいものと 【　　】。」",
        promptEn: "You received a complaint from a customer saying, 'The soup you served is cold.' How do you respond?\nStaff: 'I am extremely sorry. I will immediately 【　　】 with a warm one.'",
        options: [
            "お取替え（作り直し）して 参ります (otorikae [tsukurinaoshi] shite mairimasu - replace / remake and bring right away)",
            "電子レンジで ご自分で 温めてください (denshi renji de gojibun de atatamete kudasai - heat it up in the microwave by yourself)",
            "冷たい スープの 方が 体に 良いですよ (tsumetai sūpu no hō ga karada ni ii desu yo - cold soup is better for your health, you know)",
            "そのまま 息を 吹きかけて 飲んでください (sono mama iki o fukikakete nonde kudasai - just blow your breath on it and drink as is)"
        ],
        correct: 0,
        explanation: "In SSW Food Service (外食業), when food is served cold or incorrect, apologize deeply immediately and offer to replace/remake it:「すぐに温かいものとお取替え（お作り直し）いたします」."
    },
    {
        id: "q19",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "レストランの お会計（レジ）で、お金の 支払い方法を お客様に お伺いします。\nスタッフ：「お支払いは、現金と クレジットカードの 【　　】？」",
        promptEn: "At the restaurant cashier desk, you ask the customer for their payment method.\nStaff: 'For payment, which 【　　】 between cash and credit card?'",
        options: [
            "どちらが よろしいでしょうか (dochira ga yoroshii deshō ka - which would you prefer?)",
            "どれを 捨てましょうか (dore o sutemashō ka - which shall we throw away?)",
            "どこで 盗んできましたか (doko de nusonde kimashita ka - where did you steal them from?)",
            "いつ 払ってくれますか (itsu haratte kuremasu ka - when will you pay me?)"
        ],
        correct: 0,
        explanation: "Asking a customer to choose an option (cash vs. credit card, smoking vs. non-smoking) in polite keigo is:「〜と〜のどちらがよろしいでしょうか」."
    },
    {
        id: "q20",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "レストランで お客様を テーブル席へ ご案内しました。メニューを 渡して 何と お伝えしますか。\nスタッフ：「こちらのお席へ どうぞ。メニューを ご覧になって 【　　】。」",
        promptEn: "You guided a customer to a table seat in the restaurant. Handing them a menu, what do you say?\nStaff: 'Please have this seat. Please look at the menu and 【　　】.'",
        options: [
            "少々 お待ちくださいませ (shōshō omachi kudasai mase - kindly wait a moment [I will return to take your order])",
            "すぐに 全部 決めて 大声で 叫べ (sugu ni zenbu kimete ōgoe de sakebe - decide everything instantly and scream loudly)",
            "自分で キッチンに行って 作ってください (jibun de kitchin ni itte tsukutte kudasai - go to kitchen yourself and cook)",
            "食べたら すぐに 帰ってください (tabetara sugu ni kaette kudasai - leave immediately after eating)"
        ],
        correct: 0,
        explanation: "When seating guests, hand them the menu and say:「メニューをご覧になって少々お待ちくださいませ（お決まりになりましたらお呼びください）」."
    },
    {
        id: "q21",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "ホテルの 客室清掃（ハウスキーピング）を 始める ため、部屋の ドアを ノックしました。何と 声を かけて 入室しますか。\nスタッフ：「失礼いたします。【　　】。お部屋に入っても よろしいでしょうか。」",
        promptEn: "To begin hotel guest room housekeeping, you knocked on the room door. What do you announce as you enter?\nStaff: 'Excuse me. This is 【　　】. May I enter your room?'",
        options: [
            "清掃（ハウスキーピング）で ございます (seisō [hausukīpingu] de gozaimasu - Housekeeping service)",
            "警察（けいさつ）の 逮捕で ございます (keisatsu no taiho de gozaimasu - Police arrest)",
            "郵便局（ゆうびんきょく）の 配達で ございます (yūbinkyoku no haitatsu de gozaimasu - Post office delivery)",
            "怪盗（かいとう）の 泥棒で ございます (kaitō no dorobō de gozaimasu - Phantom thief robber)"
        ],
        correct: 0,
        explanation: "In hotel housekeeping, always knock 3 times and clearly announce:「失礼いたします。清掃（ハウスキーピング）でございます」before opening the door."
    },
    {
        id: "q22",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "ホテルの チェックインで、宿泊者名簿（レジストレーションカード）に 名前と 住所を 書いていただきます。\nスタッフ：「恐れ入りますが、こちらの 用紙に 【　　】。」",
        promptEn: "At hotel check-in, you have the guest write their name and address on the registration card.\nStaff: 'Excuse me, but on this form, could you please 【　　】?'",
        options: [
            "お名前と ご住所の ご記入を お願いいたします (onamae to gojūsho no gokinyū o onegai itashimasu - fill in your name and address)",
            "あなたの 秘密の 暗証番号を 全部 書いとけ (anata no himitsu no anshō bangō o zenbu kaitoke - write down all your secret PIN passwords)",
            "あなたの お気に入りの 歌の 歌詞を 書いてくれ (anata no okiniri no uta no kashi o kaite kure - write down the lyrics to your favorite song)",
            "紙を ビリビリに 破って 捨ててください (kami o biribiri ni yabutte sutete kudasai - rip the paper to shreds and throw away)"
        ],
        correct: 0,
        explanation: "Polite customer service request to fill out hotel check-in registration forms:「こちらの用紙にお名前とご住所のご記入をお願いいたします」."
    },
    {
        id: "q23",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "チェックアウトした 後の お客様から、「夕方まで この スーツケースを ホテルで 預かってほしい」 と 頼まれました。何と 答えますか。\nスタッフ：「かしこまりました。お荷物は こちらの 【　　】。」",
        promptEn: "A guest who just checked out asked, 'Could you keep this suitcase at the hotel until this evening?' How do you reply?\nStaff: 'Certainly. We will keep your luggage here at the 【　　】.'",
        options: [
            "クローク（手荷物預かり所）で お預かりいたします (kurōku [tenimotsu azukarijo] de oazukari itashimasu - cloakroom / luggage storage desk)",
            "外の ごみ置場に 投げ捨てて おきます (soto no gomiokiba ni nagesutete okimasu - throw it away at outdoor garbage dump)",
            "私の アパートに 持って帰って 使います (watashi no apāto ni motte kaette tsukaimasu - take home to my apartment and use it)",
            "お風呂の 浴槽の 中に 沈めて おきます (ofuro no yokusō no naka ni shizumete okimasu - sink it inside the bath tub)"
        ],
        correct: 0,
        explanation: "Storing guest luggage before check-in or after checkout is a core hotel service handled at the cloakroom (クローク):「クロークで大切にお預かりいたします。番号札をお持ちください」."
    },

    // ==========================================
    // SECTION 3: LISTENING COMPREHENSION (聴解) - 11 Questions
    // ==========================================
    {
        id: "q24",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】ホテルの フロントで、チェックイン中の お客様が 夕食について 質問しています。夕食バイキングは どこで、何時から 食べられますか。",
        promptEn: "[Audio Simulation] At the hotel front desk, a guest checking in is asking about dinner. Where and from what time can they eat the dinner buffet?",
        audioScript: "お客様：「すみません。今夜の 夕食は ついていない 予約なんですが、ホテルの中で 夕食バイキングを 追加で 食べることは できますか？」\nフロント：「はい、可能でございます。夕食バイキングは 【２階の 「レストラン・サクラ」】 にて、今夜 【１８：００（午後６時）】 から 営業いたします。料金は お一人様 税込 ３,５００円で ございます。」\nお客様：「わかりました。では、今夜 １８時に ２階の レストランへ 行きますね。」",
        audioScriptEn: "Guest: 'Excuse me. My reservation doesn't include dinner tonight, but can I add and eat the dinner buffet inside the hotel?'\nClerk: 'Yes, certainly. The dinner buffet is open at the 2F RESTAURANT SAKURA starting tonight from 18:00 (6:00 PM). The price is 3,500 yen tax included per person.'\nGuest: 'Understood. Then I will go to the 2nd floor restaurant tonight at 18:00.'",
        options: [
            "【２階の レストラン】 で、今夜 【１８：００（午後６時）】 から (At the 2nd floor restaurant, starting tonight from 18:00 [6:00 PM])",
            "【１階の ロビー】 で、今すぐ 【１５：００（午後３時）】 から (In the 1st floor lobby, starting right now from 15:00 [3:00 PM])",
            "【屋上の スカイガーデン】 で、深夜 【２３：００（午後１１時）】 から (On the rooftop sky garden, starting late night from 23:00 [11:00 PM])",
            "ホテル内では 夕食は 一切 食べられないので、外の コンビニへ 行く (Cannot eat dinner anywhere in hotel, so go to outdoor convenience store)"
        ],
        correct: 0,
        explanation: "The clerk states clearly:「夕食バイキングは【２階の「レストラン・サクラ」】にて、今夜【１８：００（午後６時）】から営業いたします」."
    },
    {
        id: "q25",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】居酒屋で ウェイターが テーブルの お客様から ご注文を 伺っています。お客様が 頼んだ 焼き鳥の 味付けは 「塩（しお）」 ですか、それとも 「タレ（しょうゆ味のソース）」 ですか。",
        promptEn: "[Audio Simulation] At an izakaya, a waiter is taking an order from a customer at a table. Is the yakitori seasoning ordered by the customer 'Salt' (Shio) or 'Sauce' (Tare - soy sauce glaze)?",
        audioScript: "お客様：「すみません！注文 お願いします。まずは 生ビール ２つと、枝豆を １つ。それから、「焼き鳥 盛り合わせ ５本」 を ください。」\nウェイター：「かしこまりました。焼き鳥の 味付けは、「塩（しお）」 と 「タレ」、どちらに なさいますか？」\nお客様：「んー、今日は 甘辛い 【「タレ」 の 味付け】 で お願いします。塩は いらないよ。」\nウェイター：「承知いたしました！焼き鳥 盛り合わせは 【「タレ」】 ですね。すぐにお持ちします！」",
        audioScriptEn: "Customer: 'Excuse me! Order please. First, 2 draft beers and 1 edamame. Also, give me 'Assorted Yakitori 5 skewers'.' \nWaiter: 'Certainly. For the yakitori seasoning, would you prefer 'Salt' (Shio) or 'Sauce' (Tare)?'\nCustomer: 'Hmm, today please make it with sweet and savory TARE SAUCE seasoning. I don't need salt.'\nWaiter: 'Understood! Assorted Yakitori with TARE SAUCE. I will bring them right away!'",
        options: [
            "甘辛い しょうゆ味の 【「タレ（ソース）」】 の 味付け (Sweet and savory soy-sauce glaze 【TARE (Sauce)】 seasoning)",
            "しょっぱくて 白い 【「塩（しお）」】 の 味付け (Salty white 【SALT (Shio)】 seasoning)",
            "激辛の 赤い 【「唐辛子（ハバネロ）」】 の 味付け (Super spicy red chili pepper [Habanero] seasoning)",
            "何も 味を つけない 【「生のお肉の まま」】 (No seasoning at all, served completely raw)"
        ],
        correct: 0,
        explanation: "The customer explicitly specifies:「今日は甘辛い【「タレ」の味付け】でお願いします。塩はいらないよ」."
    },
    {
        id: "q26",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】ホテルの 客室清掃（ハウスキーピング）の 研修で、リーダーが バスルーム清掃の 注意点を 指導しています。洗面台の 排水口（お水が流れる穴）で 何を 注意しなければなりませんか。",
        promptEn: "[Audio Simulation] At a hotel housekeeping training session, the leader is teaching bathroom cleaning points. What must be checked carefully at the sink drain (hole where water flows)?",
        audioScript: "リーダー：「客室の バスルームを 掃除する ときの 重要ポイントだよ。特に 洗面台や お風呂の 【排水口（お水が流れる穴）に、前のお客様の 「髪の毛」 が １本でも 残っていると】、次に入った お客様は とても 不快な 気持ちになり、大きな クレームになります。だから、必ず 排水口の フタを開けて、【髪の毛や ゴミを 完全に 取り除いて ピカピカに する】 ことを 徹底してください！」",
        audioScriptEn: "Leader: 'Here is a critical point when cleaning guest bathrooms. Especially at the sink and bath DRAIN (where water drains), if EVEN A SINGLE STRAND OF HAIR from the previous guest remains, the next guest will feel very uncomfortable and cause a major complaint. Therefore, always open the drain cover, COMPLETELY REMOVE ALL HAIR AND DIRT, and make it spotless!'",
        options: [
            "排水口の フタを開けて、【前のお客様の 「髪の毛」 や ゴミを 完全に 取り除く】 こと (Open drain cover and COMPLETELY REMOVE ALL HAIR and dirt from the previous guest)",
            "排水口の中に 洗剤を １０本のせて、【フタを 接着剤で 開かないように 固めておく】 こと (Put 10 bottles of detergent in drain and glue the cover shut with adhesive so it won't open)",
            "排水口の 掃除は 面倒くさいので、【見て見ぬふりをして 何も 洗わずに 放置する】 こと (Drain cleaning is bothersome, so pretend not to see and leave it dirty without washing)",
            "排水口の中に お客様向けの 【ウェルカムフルーツの リンゴや バナナを 詰め込んでおく】 こと (Stuff welcome fruit apples and bananas inside the water drain for the next guest)"
        ],
        correct: 0,
        explanation: "In hotel housekeeping (客室清掃), hair left in drains or tubs (毛髪残留) is the #1 cause of guest complaints."
    },
    {
        id: "q27",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】中華レストランで、お客様が アレルギーについて 質問しています。お客様は なぜ 「海鮮チャーハン」 を 注文しませんでしたか。",
        promptEn: "[Audio Simulation] At a Chinese restaurant, a customer is asking about allergies. Why did the customer NOT order the 'Seafood Fried Rice'?",
        audioScript: "お客様：「すみません。私、重い 【エビと カニの アレルギー（甲殻類アレルギー）】 が あるんです。メニューにある 「海鮮チャーハン」 には、エビや カニは 入っていますか？」\nウェイター：「確認いたしましたところ、海鮮チャーハンには 【大きな エビと カニの身が たくさん 入って】 おります。アレルギーのお客様には 危険ですので、エビや カニを 一切 使っていない 【「五目（ごもく）卵チャーハン」】 を おすすめいたします！」\nお客様：「ありがとう！危なかった。では、その 「五目卵チャーハン」 を ください。」",
        audioScriptEn: "Customer: 'Excuse me. I have a severe SHRIMP AND CRAB ALLERGY (crustacean allergy). Does the 'Seafood Fried Rice' on the menu contain shrimp or crab?'\nWaiter: 'I checked with the chef, and the Seafood Fried Rice CONTAINS LOTS OF LARGE SHRIMP AND CRAB MEAT. It is dangerous for customers with allergies, so I recommend the 'Gomoku Egg Fried Rice' which uses no shrimp or crab whatsoever!'\nCustomer: 'Thank you! That was close. Then give me that 'Gomoku Egg Fried Rice'.'",
        options: [
            "お客様には 重い 【エビと カニの アレルギー】 が あり、海鮮チャーハンに 【エビ・カニが入っていた】 ため (Because the customer has a severe SHRIMP AND CRAB ALLERGY, and the seafood fried rice contained shrimp and crab)",
            "海鮮チャーハンは 値段が 【１万円以上も して とても 高すぎた】 ため (Because the seafood fried rice cost over 10,000 yen and was way too expensive)",
            "海鮮チャーハンは 激辛の 唐辛子が たくさん 入っていて 【辛すぎて 食べられない】 ため (Because the seafood fried rice contained tons of super spicy chili peppers and was too hot to eat)",
            "お客様は 今日は ご飯ではなく、【甘い チョコレートケーキだけを 食べたかった】 ため (Because today the customer wanted to eat only sweet chocolate cake instead of rice)"
        ],
        correct: 0,
        explanation: "Allergen inquiry handling (アレルギー対応): The waiter correctly checks ingredients and prevents an anaphylactic accident by recommending a safe alternative."
    },
    {
        id: "q28",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】ホテルの ハウスキーピング中、チェックアウトした 後の ４０２号室の ベッドの 下に、「お客様が 忘れた 財布（お財布）」 を 見つけました。どう しなければなりませんか。",
        promptEn: "[Audio Simulation] During hotel housekeeping, you found a 'guest's forgotten wallet' under the bed in Room 402 after checkout. What must you do?",
        audioScript: "マネージャー：「客室清掃の 皆さん、もし お客様が 部屋に 忘れていった 【忘れ物・遺失物（財布やスマホ、時計など）】 を 見つけた 場合の 絶対ルールです。例え １円の 現金でも、【絶対に 自分の ポケットに入れたり、勝手に 中身を 開けて 見てはいけません】。見つけたら ただちに 触らずに 【フロント責任者へ 届け出を行い、「部屋番号・発見時間・品物名」 を 遺失物台帳に 記録】 してください。ホテルから お客様へ すぐに ご連絡します。」",
        audioScriptEn: "Manager: 'Housekeeping team, here is the absolute rule when you find LOST & FOUND ITEMS (wallets, smartphones, watches) forgotten by guests in rooms. Even if it's just 1 yen cash, NEVER put it in your pocket or open inside to look. When found, immediately without touching inside REPORT IT TO THE FRONT DESK MANAGER AND LOG room number, time found, and item name in the Lost Property Book. The hotel will contact the guest right away.'",
        options: [
            "勝手に 開けずに、【ただちに フロント責任者へ 届け出し、「部屋番号・時間・品物」 を 遺失物台帳に 記録する】 (Without opening it, IMMEDIATELY REPORT TO FRONT DESK MANAGER and log room, time, and item in Lost Property Book)",
            "誰も 見ていないから ラッキーと 思って、【財布の 中の お金を 全部 自分の ポケットに入れる】 (Think you're lucky since no one is looking, and PUT ALL MONEY from wallet into your own pocket)",
            "財布は 汚い ゴミだと 判断して、【客室の ゴミ箱に 捨てて ゴミ収集車に 燃やさせる】 (Judge wallet to be dirty trash, throw it in room trash box, and let garbage truck burn it)",
            "お財布を ホテルの 屋上に 持っていき、【空に向かって 遠くの 道路へ 投げ捨てる】 (Take wallet to hotel rooftop and throw it far out into the road toward the sky)"
        ],
        correct: 0,
        explanation: "Handling Lost & Found (忘れ物・遺失物管理): Any item found in guest rooms must be logged and turned over to front desk management immediately without snooping."
    },
    {
        id: "q29",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】居酒屋の 店内で、夕方の お得な 割引サービス（タイムセール）の 店内放送が 流れました。何時 から 何時 まで、何が 半額（５０パーセント引き）に なりますか。",
        promptEn: "[Audio Simulation] Inside an izakaya, an in-store broadcast announced an evening discount service (time sale). From what time to what time, and what becomes half price (50% off)?",
        audioScript: "店内放送：「ご来店の お客様に お得な 【タイムセール・ハッピーアワー】 の お知らせです！本日 ただいま 【夕方 １７：００ から １９：００ までの ２時間 限定】 で、なんともべての 【「生ビール」 と 「ハイボール」 を 通常価格の 半額（５０％ OFF）】 にて ご提供いたします！何杯 飲んでも 半額です！ご注文は テーブルの タッチパネルより どうぞ！」",
        audioScriptEn: "Broadcast: 'Notice of our special TIME SALE / HAPPY HOUR to all customers! Limited to the 2 HOURS TODAY FROM 17:00 TO 19:00 EVENING, all DRAFT BEER AND HIGHBALLS are offered at HALF PRICE (50% OFF) normal price! No matter how many drinks, it's half price! Please order via your table touch panel!'",
        options: [
            "【夕方 １７：００ から １９：００ まで】 の ２時間、【「生ビール」 と 「ハイボール」】 が 半額 (For 2 hours from 17:00 to 19:00 evening, DRAFT BEER AND HIGHBALLS are half price)",
            "【朝 ８：００ から １０：００ まで】 の ２時間、【「甘い アイスクリームと ケーキ」】 が 半額 (For 2 hours from 8:00 to 10:00 morning, sweet ice cream and cake are half price)",
            "【深夜 ２４：００ から 翌朝 ６：００ まで】 の ６時間、【「高級 ステーキ肉と お寿司」】 が 半額 (For 6 hours from midnight 24:00 to 6:00 AM, luxury steak and sushi are half price)",
            "時間は 関係なく １年中 ずっと、【「お店の テーブルと 椅子」】 が 半額で 買える (Regardless of time all year round, store tables and chairs can be bought at half price)"
        ],
        correct: 0,
        explanation: "The announcement advertises:「【夕方１７：００から１９：００までの２時間限定】で、全ての【「生ビール」と「ハイボール」を通常価格の半額】にてご提供」."
    },
    {
        id: "q30",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】レストランで ウェイターが 誤って（間違えて）お水を お客様の コートに こぼして 濡らしてしまいました。この後、ウェイターは どう しなければなりませんか。",
        promptEn: "[Audio Simulation] At a restaurant, a waiter accidentally spilled water on a customer's coat and got it wet. What must the waiter do after this?",
        audioScript: "ウェイター：「あっ！大変 申し訳ございません！私の 不注意で お客様の コートに お水を こぼしてしまいました！」\nお客様：「ええっ！冷たい！買ったばかりの コートなのに、濡れちゃったじゃないか！」\nウェイター：「【誠に 申し訳ございません。ただちに きれいな 乾いた タオルをお持ちして お拭きいたします。また、すぐに 店長を 呼びまして、クリーニング代の 補償などについて 責任を持って ご対応】 させていただきます！」",
        audioScriptEn: "Waiter: 'Ah! I am so extremely sorry! Through my carelessness I spilled water on your coat!'\nCustomer: 'What! It's cold! I just bought this coat and now it's soaked!'\nWaiter: 'I am truly deeply sorry. I WILL IMMEDIATELY BRING CLEAN DRY TOWELS TO WIPE IT. ALSO, I WILL CALL THE STORE MANAGER RIGHT AWAY to responsibly handle dry cleaning compensation and follow-up!'",
        options: [
            "【深く 謝罪し、きれいな 乾いた タオルで 拭き、すぐに 店長（マネージャー）を 呼んで 対応を引き継ぐ】 (Apologize deeply, wipe with clean dry towels, and immediately call Store Manager to take over handling)",
            "「あなたの コートが 水を 飲みたがっていたんですよ」 と 冗談を 言って 【笑って ごまかす】 (Make a joke saying 'Your coat wanted a drink of water' and laugh to brush it off)",
            "「ここは 私の 責任ではないので 知りません」 と 言って 【無視して 逃げ出す】 (Say 'This is not my responsibility so I don't know' and ignore them and run away)",
            "お客様の 濡れた コートを 強制的に 脱がせて、【キッチンの ガスコンロの 火で 燃やして 乾かす】 (Forcibly strip off customer's wet coat and hold over kitchen gas stove flames to burn dry)"
        ],
        correct: 0,
        explanation: "In food service customer relations (クレーム・トラブル対応), when staff cause property damage/spills, immediate sincere apology, towel assistance, and manager escalation (店長報告) is mandatory."
    },
    {
        id: "q31",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】ホテルの フロントで、宿泊客から モーニングコール（起床の電話予約）の 依頼を 受けました。何部屋の お客様を、明日の 朝 何時に 電話で 起こしますか。",
        promptEn: "[Audio Simulation] At the hotel front desk, you received a wake-up call request from a guest. Which room number must be woken up by phone at what time tomorrow morning?",
        audioScript: "お客様：「もしもし、フロントですか？こちらは 【５０５号室】 の スミスです。明日の 朝、空港へ向かう ６時４５分発の リムジンバスに 乗りたいんです。だから、【明日の 朝 ６時 ちょうど（０６：００）】 に、部屋の 電話を 鳴らして モーニングコールを お願いできますか？」\nフロント：「かしこまりました！【５０５号室】 の スミス様ですね。【明日の 朝 ６：００ ちょうど】 に お電話を 鳴らします。ごゆっくり おやすみくださいませ。」",
        audioScriptEn: "Guest: 'Hello, front desk? This is Smith in ROOM 505. Tomorrow morning I want to catch the 6:45 AM limousine bus to the airport. So, could you please give me a wake-up call by ringing my room phone TOMORROW MORNING AT 6:00 AM SHARP (06:00)?'\nClerk: 'Certainly! Mr. Smith in ROOM 505. We will ring your phone TOMORROW MORNING AT 6:00 AM SHARP. Have a restful good night.'",
        options: [
            "【５０５号室】 の お客様を、【明日の 朝 ６時 ちょうど（０６：００）】 に 起こす (Wake up guest in Room 505 tomorrow morning at 6:00 AM sharp [06:00])",
            "【１０１号室】 の お客様を、【今夜 深夜 １２時（２４：００）】 に 起こす (Wake up guest in Room 101 tonight at midnight 12:00 [24:00])",
            "【９９９号室】 の お客様を、【明後日の お昼 １２時（１２：００）】 に 起こす (Wake up guest in Room 999 the day after tomorrow at noon 12:00 [12:00])",
            "【３０３号室】 の お客様を、【来週の日曜日の 夕方 １７時】 に 起こす (Wake up guest in Room 303 next week Sunday evening at 17:00)"
        ],
        correct: 0,
        explanation: "The front desk clerk confirms:「【５０５号室】のスミス様ですね。【明日の朝６：００ちょうど】にお電話を鳴らします」."
    },
    {
        id: "q32",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】ホテルの 朝食バイキング会場で、マネージャーが 料理の 補充（おかわりを追加すること）の 衛生ルールを 指導しています。大皿の 料理が 少なくなった とき、どう しなければなりませんか。",
        promptEn: "[Audio Simulation] At a hotel breakfast buffet venue, the manager is teaching hygiene rules for replenishing dishes (adding food refills). When food on a platter runs low, what must be done?",
        audioScript: "マネージャー：「バイキングの お料理の 補充ルールを 教えます。例えば、スクランブルエッグの お皿が 残り少なくなった とき、絶対に 【古い お皿の上に、新しく 作った 温かい 卵を 上から 継ぎ足して（乗せて）はいけません】！古い 料理と 新しい 料理が 混ざると 食中毒の原因になります。必ず 【キッチンで 洗浄消毒済みの 「新しい きれいな お皿」 に 新しい 料理を 盛り付けて、古い お皿と 丸ごと 交換】 してください！」",
        audioScriptEn: "Manager: 'I'll teach you buffet food replenishment rules. For example, when the scrambled egg tray runs low, NEVER POUR NEWLY COOKED WARM EGGS ON TOP OF THE OLD LEFTOVER TRAY! Mixing old and new food causes bacteria growth and food poisoning. Always PUT THE NEW FOOD IN A BRAND NEW SANITIZED SERVING DISH prepared in the kitchen, and SWAP OUT THE ENTIRE OLD DISH completely!'",
        options: [
            "古い お皿に 継ぎ足さず、【洗浄済みの 「新しい きれいな お皿」 に 盛られた 料理と 丸ごと 交換する】 (Never top off old dish; SWAP OUT ENTIRE DISH with new food plated on a brand new clean sanitized dish)",
            "古い 冷たくなった 卵の 上に、【新しく 作った 熱い 卵を 上から そのまま ドバっと 継ぎ足す】 (Pour newly made hot eggs directly on top of old cold eggs in the same tray)",
            "お客様が 自分で キッチンに 入ってきて、【好きな だけ 鍋から 直接 手で 掴んで 食べさせる】 (Let customers enter kitchen themselves and grab food directly from pots with their bare hands)",
            "料理が なくなったら 補充は 一切 せず、【空っぽの お皿を １日中 ずっと そのまま 置いておく】 (When food runs out never refill, and leave empty dish sitting there all day long)"
        ],
        correct: 0,
        explanation: "In hotel buffet hygiene (バイキング・ブッフェ衛生), topping off existing trays (継ぎ足し陳列) is prohibited; entire container replacement (容器ごと交換) is mandatory."
    },
    {
        id: "q33",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】ホテルの 大浴場（温泉）の 受付で、スタッフが 外国人観光客に 温泉の 正しい マナーを 説明しています。お風呂の お湯（湯船）に入る 前に、何 を しなければなりませんか。",
        promptEn: "[Audio Simulation] At the reception of a hotel public hot spring (onsen), staff are explaining correct onsen manners to foreign tourists. What must you do before entering the hot bathwater (tub)?",
        audioScript: "スタッフ：「当ホテルの 温泉大浴場へ ようこそ！日本の 温泉に入る ときの 大切な マナーを ご案内します。洋服を 完全に 脱いだ 後、いきなり お風呂の お湯（湯船）に入ってはいけません。必ず 【お湯に入る 前に、シャワーの 洗い場に 座って、石鹸と シャンプーで 体と 髪を きれいに 洗ってください】。体が きれいになった 後で、湯船に入って ゆっくり 温まってくださいね。また、小さい タオルを 湯船のお湯の中に 入れることも 禁止です。」",
        audioScriptEn: "Staff: 'Welcome to our hotel's public hot spring! Here are important manners for taking Japanese onsens. After completely taking off clothes, DO NOT jump directly into the bathwater tub. Be sure to BEFORE ENTERING THE BATH, SIT AT THE SHOWER WASHING AREA AND CLEANLY WASH YOUR BODY AND HAIR WITH SOAP AND SHAMPOO. Once your body is clean, step into the tub and soak leisurely. Also, putting small towels into bathwater is prohibited.'",
        options: [
            "お湯（湯船）に入る 前に、【シャワーの 洗い場に 座って、石鹸で 体を きれいに 洗わなければならない】 (Before entering hot tub, MUST SIT AT SHOWER AREA AND CLEANLY WASH BODY WITH SOAP)",
            "洋服や 靴を 着た まま、【スーツや スニーカー姿で いきなり 温泉のお湯の中に 飛び込む】 (Jump directly into onsen hot water wearing business suit and sneakers without taking clothes off)",
            "温泉のお湯の中で、【洗剤を 使って 自分の 汚れた 衣服の 洗濯や バタ足水泳を 始める】 (Start washing your dirty clothes with laundry detergent or swimming butterfly strokes inside onsen tub)",
            "温泉のお湯を コップに 汲んで、【ジュースのように ゴクゴクと 全部 飲み干してしまう】 (Scoop up onsen bathwater in a cup and gulp it all down like drinking fruit juice)"
        ],
        correct: 0,
        explanation: "Japanese Onsen etiquette (温泉入浴マナー): Guests must always wash their body first at the shower stalls (掛け湯・体の洗浄) before entering the communal bath tub."
    },
    {
        id: "q34",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】レストランの レジで、４人グループの お客様が 「割り勘（わりかん・お金を 平等に 分けて 払うこと）」 を 希望しています。合計金額が １２,０００円の 場合、お一人様 いくらずつ 支払いますか。",
        promptEn: "[Audio Simulation] At a restaurant cashier desk, a group of 4 customers wants to do 'Warikan' (split the bill equally). If the total bill is 12,000 yen, how much does each person pay?",
        audioScript: "お客様：「ごちそうさま！お会計 お願いします。合計金額の 【１２,０００円】 を、私たち 【４人 グループで 平等に 「割り勘（わりかん）」】 で 払いたいんです。一人ずつ レシートも 分けて 出せますか？」\nレジスタッフ：「かしこまりました！合計 １２,０００円 を ４名様で 割り勘で ございますので、【お一人様 「３,０００円」 ずつ】 の お支払いで ございますね。現金や カードで お一人ずつ お伺いし、領収書も ４枚に 分けて 発行いたします！」",
        audioScriptEn: "Customer: 'Thanks for the meal! Bill please. We want to take the total 12,000 YEN and split it equally among our 4-PERSON GROUP as 'WARIKAN' (split bill). Can you issue separate receipts for each person too?'\nCashier: 'Certainly! Total 12,000 yen split equally among 4 guests means EACH PERSON PAYS 3,000 YEN. I will process cash/card one by one and issue 4 separate receipts for you!'",
        options: [
            "４人で 平等に 分けるので、【お一人様 「３,０００円」 ずつ】 支払う (Split equally among 4 people, so EACH PERSON PAYS 3,000 YEN)",
            "４人で 分けるので、【お一人様 「１０,０００円」 ずつ】 で 合計 ４万円 支払う (Split among 4 people, so each person pays 10,000 yen totaling 40,000 yen)",
            "リーダーの １人だけが 【全額 「１２０,０００円（１２万円）」】 を 罰金として 支払う (Only 1 leader pays the entire 120,000 yen [120k] as a fine)",
            "レストランの 店長が 【お客様 ４人に 「３,０００円」 ずつ 現金を プレゼントする】 (The restaurant manager gives a 3,000 yen cash gift to each of the 4 customers)"
        ],
        correct: 0,
        explanation: "Bill splitting (割り勘 / warikan): 12,000 yen ÷ 4 people = 3,000 yen per person (お一人様３,０００円)."
    },

    // ==========================================
    // SECTION 4: READING COMPREHENSION (読解) - 11 Questions
    // ==========================================
    {
        id: "q35",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【ホテルフロント チェックイン受付対応マニュアル】 を読んで 質問に 答えてください。\n\n――― 【宿泊フロント業務：チェックイン接客の ４基本ステップ】 ―――\n当ホテルでは、全てのお客様に 最高の おもてなしを 提供するため、以下の ステップで チェックイン対応を 行うこと。\n\n1. 【笑顔でのお迎え】 お客様が ロビーに見えたら、立ち上がり、「いらっしゃいませ。ようこそ ホテル・サクラへ」 と 笑顔で 挨拶する。\n2. 【予約確認と 宿泊者名簿の ご記入】 お名前を 伺い、予約システムと 照合する。その後、宿泊者名簿（レジストレーションカード）に 【「お名前・ご住所・お電話番号」】 を ご記入いただく。\n※ 【重要法律規定】： 日本に 住所を 持たない 【外国籍の 観光客の お客様】 からは、日本の 法律に基づき、名簿記入に加えて 【必ず 「パスポート（旅券）」 を 提示してもらい、コピー（写真撮影）を取って 保管】 しなければならない。\n3. 【館内案内と ルームキーのお渡し】 朝食会場の 時間や 大浴場の 場所を 説明し、部屋番号が 書かれた ルームキーと 朝食券を お渡しする。\n4. 【エレベーターへの ご案内】 「ごゆっくり お過ごしくださいませ」 と 一礼し、エレベーターまで お見送りする。\n――――――――――――――――――――――――――\n\n質問：日本に 住所を 持たない 【外国籍の 観光客】 が ホテルに チェックインする とき、日本の 法律により 必ず 何を 提示してもらい コピーを取らなければなりませんか。",
        promptEn: "Read the 【Hotel Front Desk Check-in Manual】 below and answer the question.\n[Front Desk 4 Steps] 1. Greet with smile. 2. Confirm booking & fill out Registration Card (Name, address, phone). *CRITICAL LAW: For foreign tourists without a residence in Japan, by Japanese law, in addition to registration card, YOU MUST REQUIRE THEM TO SHOW THEIR PASSPORT AND TAKE A PHOTOCOPY TO KEEP ON FILE. 3. Explain breakfast/facilities and hand room key. 4. Bow and guide to elevator.\n\nQuestion: When a foreign tourist who does not live in Japan checks into a hotel, what MUST be presented and photocopied according to Japanese law?",
        options: [
            "名簿の 記入に加えて、【必ず 「パスポート（旅券）」 を 提示してもらい コピーを取って 保管する】 (In addition to reg card, MUST REQUIRE PASSPORT PRESENTATION AND TAKE A PHOTOCOPY to keep on file)",
            "パスポートは 確認せず、【クレジットカードと 運転免許証の 秘密番号だけを 聞き出す】 (Don't check passport; just demand credit card and driver license PIN numbers)",
            "お客様の 【スーツケースを 無断で こじ開けて、中の 洋服や お土産を 全部 検査する】 (Open guest's suitcase without permission and inspect all clothes and souvenirs inside)",
            "何も 確認せず、【「お名前なんて 誰でも いいですよ」 と 言って 鍵を 投げ渡す】 (Check nothing and throw room key saying 'Anyone's name is fine whatever')"
        ],
        correct: 0,
        explanation: "Article 6 of the Japanese Hotel Business Act (旅館業法第６条) legally mandates lodging facilities to verify and photocopy passports (パスポートの提示・コピー保存) for non-resident foreign guests."
    },
    {
        id: "q36",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【客室清掃（ベッドメイキング）完了チェックリスト】 を読んで 質問に 答えてください。\n\n――― 【ハウスキーピング：客室清掃 最終確認項目】 ―――\n清掃スタッフは、お部屋の 清掃が 終わったら、部屋を 出る 前に 以下の ５項目を 必ず 指差し確認（ポイント・アンド・コール）してください。\n\n□ 1. 【ベッドの シーツ・枕カバー】 シーツに シワや 汚れ、髪の毛が 一切 なく、美しく 張られているか。\n□ 2. 【バスルーム・トイレ】 鏡に 水滴の 跡が なく、タオル ３点セット（バスタオル・フェイスタオル・バスマット）が 新しい ものに 交換されているか。\n□ 3. 【冷蔵庫・ゴミ箱】 冷蔵庫の中に 前のお客様の 忘れ物（ペットボトルなど）が なく、ゴミ箱が からっぽで 新しい ポリ袋が セットされているか。\n□ 4. 【エアコンと 電源】 空室の 電気代を 節約するため、【エアコンと 照明の スイッチが 完全に 「OFF（消灯・停止）」 に なっているか】。\n□ 5. 【施錠（鍵締め）】 ドアを 閉めた 後、外から ハンドルを 引っ張って、確実に 鍵が かかっているか 確認すること。\n――――――――――――――――――――――――――\n\n質問：客室清掃が 全て 終わって 部屋を 出る とき、電気代を 節約する ために エアコンや 電気（照明）は どう しなければなりませんか。",
        promptEn: "Read the 【Guest Room Housekeeping Checklist】 below and answer the question.\n[Housekeeping Final Checks] Before leaving cleaned room, verify 5 items: 1. Bed sheets/pillowcases wrinkle-free and hair-free. 2. Bathroom mirrors dry, 3 fresh towels set. 3. Refrigerator empty of leftover drinks, trash box emptied with fresh bag. 4. AC & Lights: To save electricity in vacant rooms, MUST TURN OFF AIR CONDITIONER AND LIGHT SWITCHES COMPLETELY (OFF). 5. Lock door securely and pull handle from outside.\n\nQuestion: When room cleaning is finished and you leave the room, what must be done with the air conditioner and lights to save electricity?",
        options: [
            "空室の 電気代を 節約するため、【エアコンと 照明の スイッチを 完全に 「OFF（消灯・停止）」 に する】 (To save electricity, TURN OFF AIR CONDITIONER AND LIGHT SWITCHES COMPLETELY [OFF])",
            "部屋を 一日中 明るく 暖かく しておくため、【エアコンを ３０度の 暖房にして、電気を 全開に 点けておく】 (To keep room bright and warm all day, set AC to 30°C heat and turn on all lights full blast)",
            "テレビの 画面を つけて、【大音量で 音楽や 映画の チャンネルを ずっと 流しっぱなしにする】 (Turn on TV screen and leave loud music and movie channels running continuously)",
            "客室の 窓の ガラスを 全て 割り、【外の 冷たい 風と 雨が 部屋に入り放題に する】 (Break all guest room glass windows so freezing outside wind and rain pour inside)"
        ],
        correct: 0,
        explanation: "Rule 4 states:「空室の電気代を節約するため、【エアコンと照明のスイッチが完全に「OFF（消灯・停止）」になっているか】」."
    },
    {
        id: "q37",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【外食業：お客様からの「クレーム（苦情）」対応の３原則】 を読んで 質問に 答えてください。\n\n――― 【接客サービス研修：クレーム対応マニュアル】 ―――\nお客様から 料理の 遅れ、異物混入、スタッフの 態度などについて クレーム（苦情や お叱り）を いただいた 場合、以下の 「３原則」 を 守って 対応すること。\n\n1. 【第一に 「お詫び（謝罪）」】 まずは 不快な 思いを させた ことについて、「大変 申し訳ございません」 と 深く 頭を下げて 謝る。言い訳（デモ・ダッテなど）を 絶対に 言わないこと！\n2. 【お話を 真剣に 「傾聴（聞くこと）」】 お客様の お言葉を 途中で 遮らずに、最後まで 相手の 目を見て 真剣に 話を 聞く。\n3. 【ただちに 「店長（責任者）への 報告」】 スタッフ 個人の 判断で 「お金を 返します」 「割引します」 などと 勝手に 約束してはいけない。謝罪した後、【必ず 「すぐに 店長（責任者）を 呼んで 参ります」 と 伝え、店長に 対応を 引き継ぐ】 こと！\n――――――――――――――――――――――――――\n\n質問：レストランで お客様から クレーム（苦情）を 受けた とき、スタッフが 個人の 判断で やってはいけない ことは どれですか。",
        promptEn: "Read the 【3 Rules for Handling Customer Complaints in Restaurants】 below and answer the question.\n[Complaint Manual] 1. First, Apologize deeply without excuses! 2. Listen empathetically to the end without interrupting! 3. Immediate report to Store Manager: Staff MUST NEVER MAKE PROMISES ON THEIR OWN JUDGMENT such as 'I will refund your money' or 'I will give you a discount'. Always apologize, say 'I will call the store manager immediately', and hand over handling to the manager!\n\nQuestion: When receiving a customer complaint at a restaurant, what is something staff MUST NOT do on their own individual judgment?",
        options: [
            "個人の 判断で 【「お金を 返金します」 「無料にします」 などと 勝手に 約束する】 こと (Making unauthorized promises on your own judgment such as 'I will refund your money' or 'I will make it free')",
            "お客様に 不快な 思いを させた ことについて、【まずは 深く 頭を 下げて 「大変申し訳ございません」 と 謝る】 こと (First bowing deeply and apologizing saying 'I am extremely sorry' for making them uncomfortable)",
            "お客様の 話を 途中で 遮らずに、【最後まで 相手の 目を 見て 真剣に お話を 傾聴する】 こと (Listening empathetically to the end while looking in their eyes without interrupting their story)",
            "お詫びをした 後、【すぐに 店長（責任者）を 呼んで 事情を 報告し、対応を 引き継ぐ】 こと (After apologizing, immediately calling the Store Manager, reporting details, and handing over handling)"
        ],
        correct: 0,
        explanation: "Rule 3 warns:「スタッフ個人の判断で「お金を返します」「割引します」などと勝手に約束してはいけない」."
    },
    {
        id: "q38",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【居酒屋「飲み放題・食べ放題」の利用ルール】 を読んで 質問に 答えてください。\n\n――― 【居酒屋サクラ： 「１２０分 飲み・食べ放題コース」 ご案内規約】 ―――\n1. 【ご利用時間】 本コースは ご来店より 【「１２０分間（２時間）」 制】 となっております。\n2. 【ラストオーダー】 お飲み物および お料理の 最終ご注文（ラストオーダー）は、終了時間の 【３０分前 （スタートから ９０分後）】 に スタッフが お席まで 伺います。\n3. 【グラス交換制】 お飲み物のおかわりは、空になった グラスと 交換（グラス交換制）で お願いいたします。\n4. 【食べ残し・飲み残しへの 罰金規定】： お料理を 注文しすぎて テーブルに 【大量の 「食べ残し（残飯）」】 が あった 場合、食品ロス防止のため、【残った お料理 １皿につき 「税込 ５００円」 の 追加罰金料金】 を 請求させていただきます。食べられる 分量だけ ご注文ください。\n――――――――――――――――――――――――――\n\n質問：この 居酒屋の 「食べ放題コース」 で、お料理を 注文しすぎて テーブルに 大量の 「食べ残し」 を してしまった 場合、どう なりますか。",
        promptEn: "Read the 【Izakaya All-You-Can-Drink/Eat Rules】 below and answer the question.\n[120-Min Course Rules] 1. Time limit: 120 mins (2 hrs). 2. Last Order: Taken 30 mins before end (at 90 min mark). 3. Glass swap: Must trade empty glass for new drink. 4. Penalty for Leftovers: If you order too much and leave MASSIVE FOOD LEFTOVERS on the table, to prevent food waste, YOU WILL BE CHARGED AN ADDITIONAL PENALTY FEE OF 500 YEN TAX INCLUDED PER LEFTOVER PLATE! Order only what you can eat.\n\nQuestion: In this izakaya's 'All-You-Can-Eat course', what happens if you order too much and leave massive food leftovers on your table?",
        options: [
            "食品ロス防止のため、【残った お料理 １皿につき 「税込 ５００円」 の 追加罰金料金】 を 請求される (To prevent food waste, YOU ARE CHARGED AN ADDITIONAL PENALTY FEE OF 500 YEN PER LEFTOVER PLATE)",
            "食べ残した 料理は 全て 【きれいな お持ち帰り用 タッパーに入れて、無料で プレゼント】 してもらえる (All leftover food is packed in nice takeout tupperware and gifted to you for free)",
            "お店の 料理を たくさん 注文して 偉いと 褒められ、【お会計が 全額 無料（タダ）】 に なる (Praise for ordering so much store food, and your entire bill becomes completely free)",
            "罰金はないが、食べ残した 料理を 【お店の 厨房で ウェイターの スタッフが 代わりに 全部 食べる】 (No fine, but waiter staff in store kitchen eat all your leftover food in your place)"
        ],
        correct: 0,
        explanation: "Rule 4 clearly states:「残ったお料理１皿につき「税込５００円」の追加罰金料金を請求させていただきます」."
    },
    {
        id: "q39",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【ホテル大浴場・温泉の利用ルールポスター】 を読んで 質問に 答えてください。\n\n――― 【ホテル温泉大浴場 ご利用のお願い】 ―――\n全てのお客様に 気持ちよく 温泉を お楽しみいただく ため、以下の ルールを ご協力お願いいたします。\n\n1. 【タトゥー（入れ墨・刺青）の 規制】 当ホテルでは、タトゥー（入れ墨）を されている 方の 大浴場の ご入浴を お断りしています。ただし、ホテル売店で 販売している 【「タトゥー隠しカバーシール（防水シール）」 を 貼って、タトゥーが 完全に 隠れている 場合に 限り、ご入浴が 可能】 です。\n2. 【かけ湯・体の 洗浄】 湯船に入る 前は、必ず シャワーで 体を 洗ってください。\n3. 【タオルの 湯船への 持ち込み禁止】 フェイスタオルや バスタオルを 浴槽（お湯の中）に 浸さないでください。\n4. 【脱衣所への 水滴持ち込み防止】 お風呂から 上がって 更衣室の 畳や カーペットに戻る 際は、必ず 浴室の 出口で 【体の 水分を タオルで きれいに 拭き取ってから】 脱衣所へ お戻りください。\n――――――――――――――――――――――――――\n\n質問：タトゥー（入れ墨）が ある 人が この ホテルの 温泉大浴場に 入りたい とき、どう すれば 入る ことができますか。",
        promptEn: "Read the 【Hotel Onsen Bath Rules Poster】 below and answer the question.\n[Onsen Bath Rules] 1. Tattoo Regulations: We refuse public bath entry to guests with tattoos. HOWEVER, ENTRY IS PERMITTED ONLY IF YOU APPLY A 'TATTOO COVER SEAL (Waterproof Sticker)' SOLD AT OUR HOTEL SHOP SO THE TATTOO IS COMPLETELY HIDDEN. 2. Wash body before soaking. 3. Do not put towels in bathwater. 4. Wipe body dry before re-entering dressing room carpet.\n\nQuestion: If a person with a tattoo wants to enter this hotel's public hot spring bath, what must they do to be allowed to enter?",
        options: [
            "ホテル売店で 売っている 【「タトゥー隠しカバーシール」 を 貼って、タトゥーを 完全に 隠す】 こと (APPLY A 'TATTOO COVER SEAL' sold at hotel shop to COMPLETELY HIDE THE TATTOO)",
            "タトゥーが よく 見えるように、【洋服を 完全に 脱いですぐに 裸の まま 大浴場に 飛び込む】 こと (Strip naked and jump into bath immediately so everyone can see tattoo clearly)",
            "お風呂の お湯を 自分の 部屋の お風呂に 【バケツで １００回 運んで １人で 入る】 こと (Carry bathwater to own room bath 100 times in buckets and bathe alone)",
            "タトゥーのある 人は 日本の 法律で 【ホテルに 泊まること 自体が 一切 禁止されている】 (People with tattoos are banned from even staying at hotels by Japanese law)"
        ],
        correct: 0,
        explanation: "Rule 1 explains:「「タトゥー隠しカバーシール（防水シール）」を貼って、タトゥーが完全に隠れている場合に限り、ご入浴が可能」."
    },
    {
        id: "q40",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【飲食店における食中毒防止・手洗いと検便の義務】 を読んで 質問に 答えてください。\n\n――― 【外食企業 衛生管理マニュアル：従業員の 検便実施規定】 ―――\n飲食店（レストラン・カフェ・居酒屋）では、お客様に 食中毒菌（ノロウイルス、サルモネラ菌、O157など）を うつす 事故を 防ぐため、全従業員に 以下の 衛生検査を 義務付けています。\n\n◆ 【定期 「検便（けんべん・うんちの 検査）」 の 実施】：\nキッチンで 調理する 人だけでなく、ホールで 料理を 運ぶ ウェイターも 含め、【全ての 従業員は 「毎月 １回」、必ず 検便キットで 自分の 便（便検体）を 採取し、会社へ 提出して 検査を受ける】 こと。\n※ 【陽性（菌が見つかった）場合の 禁止事項】： もし 検便の 結果で 「ノロウイルス や サルモネラ菌が 陽性（プラス）」 と 判明した場合、本人は 元気で 症状が なくても、【菌が 完全になくなる（陰性になる）まで、店舗で 働くこと（出勤・調理・接客）が 一切 禁止】 されます！\n――――――――――――――――――――――――――\n\n質問：レストランの 従業員が 毎月 行う 「検便（便の検査）」 で、もし 「ノロウイルス 陽性（菌が見つかった）」 に なった 場合、どう なりますか。",
        promptEn: "Read the 【Food Hygiene & Mandatory Stool Testing in Restaurants】 below and answer the question.\n[Hygiene Manual: Employee Stool Testing] To prevent spreading Norovirus/Salmonella to guests, all staff must follow: Periodic Stool Testing (Kenben): ALL EMPLOYEES (both kitchen chefs and hall waiters) MUST SUBMIT STOOL SAMPLES ONCE EVERY MONTH for testing. *RULE IF POSITIVE: If stool test results show Norovirus or Salmonella POSITIVE (+), even if employee feels healthy with no symptoms, WORKING AT THE STORE (going to work, cooking, serving) IS STRICTLY BANNED until the virus completely clears (negative)!\n\nQuestion: In the monthly stool test (Kenben) for restaurant employees, what happens if an employee tests 'Norovirus POSITIVE' (virus found)?",
        options: [
            "本人は 元気でも、【菌が 完全になくなる（陰性になる）まで、店舗で 働くこと（出勤・調理・接客）が 一切 禁止】 される (Even if feeling healthy, WORKING AT STORE IS STRICTLY BANNED until virus completely clears [negative])",
            "マスクと 手袋を ２重に 重ねて 装着すれば、【普段通り キッチンで お肉や 野菜の 調理を 続けて よい】 (As long as wearing double masks and gloves, okay to keep cooking meat/veg in kitchen as usual)",
            "お客様に うつらないように、【夜中の 深夜 １２時以降の 時間帯だけに 限定して お店で 働く】 (To avoid infecting customers, restricted to working in store only after midnight 12 AM)",
            "菌を お腹から 出す ために、【お店の お酒を 大量に 飲んで アルコール消毒すれば すぐ 働ける】 (To flush virus out, drink massive store alcohol to disinfect stomach and work immediately)"
        ],
        correct: 0,
        explanation: "Japanese food hygiene law (食品衛生法): Employees testing positive for Norovirus or pathogenic bacteria in mandatory monthly stool tests (検便陽性) are prohibited from food handling work (就業制限) until negative."
    },
    {
        id: "q41",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【ホテルの手荷物預かり（クローク）規約】 を読んで 質問に 答えてください。\n\n――― 【ホテル・サクラ： クローク（手荷物預かり所）利用規約】 ―――\n宿泊のお客様の ご旅行を 快適にする ため、フロント横の クロークにて お荷物をお預かりいたします。\n\n1. 【お預かりできる 時間】\n・チェックイン前： 当日の 朝 ８：００ 以降、お預かり可能です。\n・チェックアウト後： チェックアウト当日の 夜 ２０：００（午後８時） まで お預かり可能です。\n2. 【お預かりできない 品物（お断りするもの）】\n以下の 貴重品や 危険物は、クロークの 棚で 預かることができません！\n× 【貴重品】： 現金、宝石・貴金属、パスポート、クレジットカード、高価な パソコンや カメラ\n× 【危険物・生もの】： 引火する ガソリン・花火、においが 強い 生魚や ドリアン、ペット（動物）\n※ 【貴重品の 保管方法】： 現金や パスポートなどの 貴重品は クロークではなく、【必ず 客室の 金庫（セーフティボックス）に入れるか、フロント専用の 貴重品金庫（セーフ・デポジット・ボックス）へ お預け】 ください。\n――――――――――――――――――――――――――\n\n質問：宿泊客が 「現金 １０万円と 高級な 宝石ブレスレット」 を 預けたい と 言いました。どこに 保管するよう ご案内しますか。",
        promptEn: "Read the 【Hotel Luggage Cloakroom Terms】 below and answer the question.\n[Cloakroom Terms] 1. Hours: Before check-in: from 8:00 AM. After checkout: until 20:00 (8 PM) same day. 2. Items we CANNOT keep in cloakroom: Valuables (Cash, jewelry, passport, credit cards, expensive laptops/cameras). Hazardous/Perishables (gasoline, raw fish, pets). *WHERE TO STORE VALUABLES: Cash, passports, and valuables cannot be kept in cloakroom; MUST BE PLACED IN GUEST ROOM SAFE or DEPOSITED IN FRONT DESK SAFE DEPOSIT BOX.\n\nQuestion: A guest wants to store '100,000 yen cash and luxury jewelry bracelets'. Where should you guide them to store these?",
        options: [
            "クロークでは 預かれないため、【客室の 金庫に入れるか、フロント専用の 貴重品金庫（セーフ・デポジット）に 預ける】 よう 案内する (Cannot keep in cloakroom; guide to put in GUEST ROOM SAFE or DEPOSIT IN FRONT DESK SAFE DEPOSIT BOX)",
            "スーツケースの 最下部に 隠して、【誰にも 言わずに ロビーの クロークの 普通の 棚の上に 置いておく】 (Hide at bottom of suitcase and put on normal open cloakroom shelf in lobby without telling anyone)",
            "安全のため、【ホテルの 中庭の 芝生を 掘って 土の中に 埋め、宝の 地図を 書いておく】 よう 案内する (For safety, guide them to dig up courtyard lawn, bury in soil, and draw a treasure map)",
            "スタッフが 安全に 守る ため、【ウェイターが 首から ネックレスとして １日中 ぶら下げて おく】 (To keep safe, waiter wears jewelry hanging around neck all day long)"
        ],
        correct: 0,
        explanation: "Rule 2 warns:「現金やパスポートなどの貴重品はクロークではなく、【必ず客室の金庫に入れるか、フロント専用の貴重品金庫へお預け】ください」."
    },
    {
        id: "q42",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【レストラン予約のキャンセルポリシー】 を読んで 質問に 答えてください。\n\n――― 【高級和食レストラン・サクラ： ご予約キャンセル料金規定】 ―――\n当店では、お客様の ご予約時間に合わせて 高級な 新鮮魚介類や 松阪牛を 仕入れて 準備しております。そのため、お客様の ご都合で 予約を キャンセル（取り消し）される 場合は、以下の キャンセル料（違約金）を お支払いいただきます。\n\n◆ 【ご予約日の ３日前まで の キャンセル】： 【無料（０円・キャンセル料なし）】\n◆ 【ご予約日の ２日前 ～ 前日 の キャンセル】： 【お料理コース料金の ５０％ （半額）】\n◆ 【ご予約 当日（その日） の キャンセル】： 【お料理コース料金の １００％ （全額）】\n◆ 【ご連絡なしの 無断キャンセル（No-Show）】： 【お料理コース料金の １００％ （全額） および 次回からの ご来店お断り】\n※ 例： １人 １０,０００円の コースを ４人分（合計 ４０,０００円） 予約し、「予約 当日」 に 急に キャンセルした場合、キャンセル料は 【４０,０００円（全額１００％）】 となります。\n――――――――――――――――――――――――――\n\n質問：１人 １０,０００円の 料理コースを ４人分（合計 ４万円） 予約していた お客様が、【ご予約 当日（その日）】 に 電話で 急に キャンセルしました。キャンセル料金は いくら 請求されますか。",
        promptEn: "Read the 【Restaurant Reservation Cancellation Policy】 below and answer the question.\n[Cancellation Policy] We buy fresh luxury seafood and beef matching booking times. Therefore, cancellations incur fees: 3+ days before: FREE (0 yen). 2 days before to day before: 50% of course fee. ON THE DAY OF RESERVATION (Today): 100% OF COURSE FEE (Full amount). No-Show without notice: 100% full amount and future ban. *Example: Booked 10k yen course for 4 people (total 40,000 yen). If cancelled ON THE DAY, cancellation fee is 40,000 YEN (100% full amount).\n\nQuestion: A customer who booked a 10,000 yen course for 4 people (total 40,000 yen) suddenly called to cancel ON THE DAY OF THE RESERVATION (today). How much cancellation fee will be charged?",
        options: [
            "当日の キャンセルは コース料金の １００％（全額） なので、【「４０,０００円（４万円）」】 を 請求する (Day-of cancellation is 100% full amount, so CHARGE 40,000 YEN [40k yen])",
            "当日の キャンセルは 半額の ５０％ なので、【「２０,０００円（２万円）」】 を 請求する (Day-of cancellation is 50% half price, so charge 20,000 yen)",
            "電話で 謝罪してくれたので 特別サービスとして、【「無料（０円）」】 にして 請求しない (Since they apologized by phone, make it 0 YEN FREE as special service)",
            "罰金として コース料金の １０倍の 【「４００,０００円（４０万円）」】 を 警察を 呼んで 請求する (Call police and charge 10 times course fee 400,000 yen as penalty fine)"
        ],
        correct: 0,
        explanation: "The policy clearly rules:「【ご予約当日（その日）のキャンセル】：【お料理コース料金の１００％（全額）】」. For 40,000 yen total, 100% = 40,000 yen."
    },
    {
        id: "q43",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【ホテル館内 停電・火災時の避難誘導マニュアル】 を読んで 質問に 答えてください。\n\n――― 【ホテル緊急災害対応マニュアル：火災発生時の お客様誘導手順】 ―――\nホテル内で 火災報知器の ベルが 鳴り、火災（火事）が 発生した 際、ホテルスタッフは 人命救助を 第一とし、以下の 手順で 宿泊客を 安全な 外へ 避難誘導してください。\n\n1. 【大声での 誘導案内】 懐中電灯（ハンドライト）を 持ち、廊下で 「火事です！落ち着いて 私の 後に 続いてください！」 と 日本語と 英語で 大声で 叫びながら 誘導する。\n2. 【エレベーター使用の 絶対禁止】： 火災時や 地震時は、エレベーターが 途中の 階で 停止して 閉じ込められたり、煙が 充満する 危険がある！そのため、【「エレベーターは 絶対に使わず、必ず 非常階段（階段）を使って 降りてください！」 と 強く 案内する】 こと。\n3. 【低い 姿勢と タオルの 使用】 煙を 吸い込まないよう、「姿勢を 低くして、濡れた タオルや ハンカチで 口と 鼻を 覆って 進んでください」 と 指示する。\n――――――――――――――――――――――――――\n\n質問：ホテルで 火事（火災）が 発生して、お客様を 外へ 避難誘導するとき、絶対に 使わせてはいけない ものは どれですか。",
        promptEn: "Read the 【Hotel Fire Evacuation Manual】 below and answer the question.\n[Fire Emergency Guidance] When fire bells ring, prioritize lives: 1. Shout guidance loudly with flashlight. 2. NEVER USE ELEVATORS: In fires/earthquakes, elevators get trapped between floors or fill with smoke! Therefore, STRONGLY INSTRUCT: 'NEVER USE ELEVATORS! ALWAYS USE EMERGENCY STAIRS TO GO DOWN!' 3. Low posture & towels: Instruct guests to stay low and cover mouth/nose with wet towels.\n\nQuestion: When a fire occurs at a hotel and you guide guests to evacuate outside, what is something you MUST NEVER allow them to use?",
        options: [
            "途中で 閉じ込められたり 煙が 充満する 危険が あるため、【「エレベーター」 を 絶対に 使わせてはいけない】 (MUST NEVER ALLOW USE OF 'ELEVATORS' due to danger of getting trapped or smoke filling in)",
            "安全に １階まで 降りる ための 【「非常階段（外にある 避難用の 階段）」】 (The 'Emergency Stairs' [outdoor evacuation stairs] used to go down safely to 1F)",
            "煙を 吸い込まないように 口と 鼻を 覆う ための 【「濡れた タオル や ハンカチ」】 ('Wet towels and handkerchiefs' used to cover mouth and nose against smoke)",
            "暗い 停電の 廊下を 明るく 照らす ための 【「懐中電灯（ハンドライト）」】 ('Flashlights' [hand lights] used to illuminate dark blackout corridors)"
        ],
        correct: 0,
        explanation: "Rule 2 commands:「【エレベーター使用の絶対禁止】...「エレベーターは絶対に使わず、必ず非常階段を使って降りてください！」と強く案内すること」."
    },
    {
        id: "q44",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【外食店舗の閉店後（クローズ）清掃・火の元チェック表】 を読んで 質問に 答えてください。\n\n――― 【居酒屋サクラ： 閉店（クローズ）作業 完了チェックシート】 ―――\n夜 ２４時の 閉店後、最後の 退店スタッフ（店長・リーダー）は、火災事故と 害虫（ゴキブリや ネズミ）の 発生を 防ぐため、退店前に 必ず 以下の ４項目を チェックし、サインすること。\n\n1. 【キッチンの グリストラップ清掃】 厨房の 床下にある 排水の 油受け槽（グリストラップ）の ゴミと 油を 全て すくい取り、洗剤で 洗うこと。放置すると 悪臭と ゴキブリの 巣になります。\n2. 【火の元・ガスバルブの 遮断】 全ての ガスコンロの 火が 消えていることを 確認し、【壁の 元栓（メイン・ガスバルブ）を 必ず 「閉（クローズ）」 に 回して 締める】 こと。ガスの 締め忘れは 大爆発事故に 繋がります。\n3. 【ゴミ置き場の 施錠】 勝手口の ごみバケツに 蓋をして、外の 野良猫や カラスに 荒らされないよう 鍵を 締めること。\n4. 【セキュリティー警戒システムの セット】 入口の ドアで セキュリティの 警報ボタンを 押し、赤い ランプが 点灯したのを確認して カギを 閉めること。\n――――――――――――――――――――――――――\n\n質問：夜の 閉店後（クローズ）、ガス漏れや 大爆発事故を 防ぐ ために、キッチンの ガスは どう しなければなりませんか。",
        promptEn: "Read the 【Restaurant Closing Checklist】 below and answer the question.\n[Closing Checklist] After midnight closing, final staff must check 4 items: 1. Clean Grease Trap: Scoop out all oil/debris from kitchen floor drain trap. 2. Fire/Gas Valve Shutoff: Confirm stove flames out, and MUST TURN WALL MAIN GAS VALVE TO 'CLOSED' TO SHUT OFF GAS. Forgetting to shut gas leads to massive explosions. 3. Lock outdoor garbage area against cats/crows. 4. Set security alarm and lock front door.\n\nQuestion: After store closing at night, what must be done with the kitchen gas to prevent gas leaks and explosion accidents?",
        options: [
            "全ての コンロの 火が 消えていることを 確認し、【壁の 元栓（メイン・ガスバルブ）を 必ず 「閉（クローズ）」 に 回して 締める】 (Confirm stove flames out, and MUST TURN WALL MAIN GAS VALVE TO 'CLOSED' TO SHUT OFF GAS)",
            "明日の 朝 すぐに お湯が 沸かせるように、【ガスの 元栓を 全開に 開けたままにして、コンロの 弱火をつけて おく】 (Leave main gas valve wide open and leave low stove flame burning so water boils fast tomorrow morning)",
            "ガスの パイプを ハサミや ナイフで 切断して、【キッチンの 床中に ガスを たくさん 漏らしておいて から 帰る】 (Cut gas pipes with scissors/knife and let gas leak all over kitchen floor before going home)",
            "ガスコンロの上で キャンプ用の 【大きな たき火（たき火台）を 燃やしたままにして 夜間 暖房代わりに する】 (Leave a large camping campfire burning on top of gas stove as nighttime heating)"
        ],
        correct: 0,
        explanation: "Rule 2 specifies:「【壁の元栓（メイン・ガスバルブ）を必ず「閉（クローズ）」に回して締める】こと。ガスの締め忘れは大爆発事故に繋がります」."
    },
    {
        id: "q45",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【ホテルの環境保護（エコ清掃）プログラムのご案内】 を読んで 質問に 答えてください。\n\n――― 【地球に優しい ホテル・エコ清掃（連泊のお客様へのお願い）】 ―――\n当ホテルでは、地球環境保護と 水・電気エネルギーの 節約のため、２泊以上 連泊（続けて泊まること）される お客様に 「エコ清掃プログラム」 を ご案内しております。\n\n◆ 【エコ清掃とは？】：\n「ベッドシーツ・枕カバー・パジャマの 交換」 および 「客室の 掃除機かけ」 を 行わず、前日と同じ シーツを そのまま ご利用いただく 節約清掃です。\n※ （お風呂の タオルの 交換、ゴミ箱の ゴミ回収、歯ブラシ等の アメニティ補充は 毎日 通常通り 行います！）\n\n◆ 【ご協力いただいた お客様への 特典（プレゼント）】：\n朝 １０：００ までに、客室ドアの外側に 【緑色の 「エコ清掃 希望マグネットカード」】 を 貼って ご協力いただいた お客様には、感謝の 気持ちとして、【ホテル １階 売店 および コンビニで 使える 「お買い物割引券 ５００円分」 を プレゼント】 いたします！\n――――――――――――――――――――――――――\n\n質問：連泊する お客様が 朝 １０時までに 緑色の 「エコ清掃 希望カード」 を ドアに 貼って 協力すると、ホテルから 何が プレゼントされますか。",
        promptEn: "Read the 【Hotel Eco-Housekeeping Program Notice】 below and answer the question.\n[Eco-Housekeeping for Multi-Night Guests] To protect environment & save water/energy, we offer Eco-Housekeeping for guests staying 2+ nights: What is it? We DO NOT change bed sheets/pillowcases/pajamas or vacuum room (we still replace towels, empty trash, refill toothbrushes daily as usual!). Bonus Gift: Guests who apply the GREEN 'ECO-HOUSEKEEPING DESIRED MAGNET CARD' to outside of room door by 10:00 AM receive an 'SHOPPING VOUCHER WORTH 500 YEN' usable at 1F hotel shop & convenience store as thanks!\n\nQuestion: If a multi-night guest cooperates by putting the green 'Eco-Housekeeping Card' on their door by 10 AM, what gift do they receive from the hotel?",
        options: [
            "ホテル売店や コンビニで 使える 【「お買い物割引券 ５００円分」 が プレゼント】 される (An 'SHOPPING VOUCHER WORTH 500 YEN' usable at hotel shop & convenience store is gifted)",
            "ホテルの 最高級の 【「大統領 プレジデンシャル・スイートルーム（１泊 ２０万円）」 に 無料で 部屋が 変更】 される (Your room is upgraded for free to hotel's top luxury 'Presidential Suite [200k yen/night]')",
            "ホテルスタッフ 全員が 部屋に やってきて、【「１時間の 無料 マッサージと ギターの 演奏会」】 を 開催してくれる (All hotel staff come to room and hold a '1-hour free massage and guitar concert')",
            "何も プレゼントされず、逆に エコ清掃の 手数料として 【「追加で 現金 ３,０００円」 を ホテルに 請求される】 (Nothing gifted, and instead hotel charges an 'additional 3,000 yen cash' handling fee for eco cleaning)"
        ],
        correct: 0,
        explanation: "The notice offers:「協力いただいたお客様には、感謝の気持ちとして、【ホテル１階売店およびコンビニで使える「お買い物割引券５００円分」をプレゼント】いたします！」."
    }
];
