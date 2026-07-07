// test9_data.js - JFT-Basic SSW Mock Test 9 Datastore (45 Questions)
// Aligned with CEFR A2 / Irodori & Genki Elementary Japanese
// Focus: Logistics, Warehousing & Material Handling Management (倉庫業・物流・構内運搬・荷役作業)

const jftExamData = [
    // ==========================================
    // SECTION 1: SCRIPT AND VOCABULARY (文字と語彙) - 12 Questions
    // ==========================================
    {
        id: "q1",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "工場で作られた 商品や 海外から 届いた 荷物を、出荷する まで 安全に 保管しておく 建物・施設を 【倉庫】 と 言います。【倉庫】の 正しい 読み方は どれですか。",
        promptEn: "The building/facility where factory-made goods and imported cargo are safely stored until shipping is called a 【倉庫】 (warehouse / depot). What is the reading of 【倉庫】?",
        options: [
            "そうこ (sōko - warehouse / storehouse / depot)",
            "しょこ (shoko - library bookcase / archives)",
            "しゃこ (shako - vehicle garage / train depot)",
            "けんこ (kenko - safe box / vault / false word)"
        ],
        correct: 0,
        explanation: "「倉庫（そうこ）」means warehouse, storehouse, or distribution center. The SSW Logistics & Warehousing Industry is called「倉庫業・物流業（そうこぎょう・ぶつりゅうぎょう）」."
    },
    {
        id: "q2",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "生産者から 消費者まで、トラックや 船、飛行機などで 商品を 運び、保管・分配する 全体の 流れを 【ぶつりゅう】 と 言います。正しい 漢字は どれですか。",
        promptEn: "The overall flow of transporting, storing, and distributing goods from producers to consumers via trucks, ships, and planes is called 【ぶつりゅう】 (logistics / physical distribution). Which kanji matches?",
        options: [
            "物流 (butsuryū - logistics / physical distribution of goods)",
            "交流 (kōryū - cultural exchange / interaction)",
            "直流 (chokuryū - direct current DC electricity)",
            "上流 (jōryū - upstream / upper classes)"
        ],
        correct: 0,
        explanation: "「物流（ぶつりゅう）」is the standard business term for logistics, supply chain, and physical distribution of goods."
    },
    {
        id: "q3",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "倉庫に 届いた 荷物を 開けて、注文通りの 品物か、数量は 合っているか、傷や 破損は ないかを 【検品】 します。【検品】の 読み方は どれですか。",
        promptEn: "We open incoming cargo at the warehouse to 【検品】 (inspect goods / check cargo) to verify whether items match orders, quantities are correct, and there are no scratches or damage. What is the reading?",
        options: [
            "けんぴん (kenpin - inspection of goods / incoming quality check)",
            "けんさ (kensa - general inspection / lab test)",
            "けんぶつ (kenbutsu - sightseeing / watching)",
            "たんぴん (tanpin - single item / individual article)"
        ],
        correct: 0,
        explanation: "「検品（けんぴん）」means inspecting merchandise or checking incoming shipments against invoices for defects or shortages."
    },
    {
        id: "q4",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "倉庫の どの 棚に、どの 商品が いくら （何個） 残って 保管されているか という 「品物の 残り数量」 の ことを 【ざいこ】 と 言います。正しい 漢字は どれですか。",
        promptEn: "The 'remaining quantity of goods' stored on which shelves in the warehouse is called 【ざいこ】 (inventory / stock). Which kanji matches?",
        options: [
            "在庫 (zaiko - inventory / stock / goods in store)",
            "所在 (shozai - whereabouts / location)",
            "現在 (genzai - present time / currently)",
            "材料 (zairyō - ingredients / raw materials)"
        ],
        correct: 0,
        explanation: "「在庫（ざいこ）」means inventory or stock. Inventory management is called「在庫管理（ざいこかんり）」."
    },
    {
        id: "q5",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "商品を 輸送中 に 傷つけないよう、段ボール箱の中に プチプチ（緩衝材）を入れて 荷物を 詰めて テープで 留める 作業を 【梱包】 と 言います。【梱包】の 読み方は どれですか。",
        promptEn: "The work of packing items into cardboard boxes with bubble wrap (cushioning) and taping them shut so goods aren't damaged during transport is called 【梱包】 (packing / packaging). What is the reading?",
        options: [
            "こんぽう (konpō - packing / packaging / crating)",
            "かつどう (katsudō - activity / action)",
            "ほうそう (hōsō - wrapping / broadcasting)",
            "ほぞん (hozon - preservation / storage)"
        ],
        correct: 0,
        explanation: "「梱包（こんぽう）」means packing goods into boxes or cartons for shipping and logistics transport."
    },
    {
        id: "q6",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "荷物を 届けたり 受け取ったり する とき、商品の 「品名・品番・数量・日付・お届け先」 などが 書かれた 公式の 書類（紙）を 【でんぴょう】 と 言います。正しい 漢字は どれですか。",
        promptEn: "When delivering or receiving cargo, the official document (paper) listing 'Item Name, Item Number, Quantity, Date, and Destination' is called a 【でんぴょう】 (invoice / shipping voucher / slip). Which kanji matches?",
        options: [
            "伝票 (denpyō - shipping slip / voucher / invoice receipt)",
            "切符 (kippu - passenger transport ticket)",
            "名刺 (meishi - business card)",
            "手紙 (tegami - personal letter)"
        ],
        correct: 0,
        explanation: "「伝票（でんぴょう）」means accounting or shipping slips/invoices (納品伝票、出荷伝票、受領伝票)."
    },
    {
        id: "q7",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "倉庫で ピッキングと 梱包が 終わった 商品を、トラックに 積み込んで お客様の 元へ 【出荷】 します。【出荷】の 正しい 読み方は どれですか。",
        promptEn: "We load products that finished picking and packing at the warehouse onto trucks and 【出荷】 (ship out / dispatch) them to customers. What is the reading of 【出荷】?",
        options: [
            "しゅっか (shukka - shipping out / forwarding / dispatch of goods)",
            "しゅっぱつ (shuppatsu - departure of vehicles/people)",
            "しゅっせき (shusseki - attendance / presence)",
            "にゅうか (nyūka - arrival of goods / receiving incoming shipments)"
        ],
        correct: 0,
        explanation: "「出荷（しゅっか）」means shipping goods out of the warehouse. Receiving incoming goods into the warehouse is「入荷（にゅうか）」."
    },
    {
        id: "q8",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "重い 段ボール箱や 木箱などの 【荷物】 を、手押し台車や フォークリフトに 乗せて 倉庫内の 目的の 場所まで 【運搬】 します。【運搬】の 正しい 読み方は どれですか。",
        promptEn: "We place heavy cardboard boxes and wooden crates of 【荷物】 (cargo) onto hand carts or forklifts and 【運搬】 (transport / carry / convey) them to destination spots in the warehouse. What is the reading of 【運搬】?",
        options: [
            "うんぱん (unpan - transporting / carrying / conveying loads)",
            "うんどう (undō - physical exercise / sports)",
            "うんてん (unten - driving a car/machine)",
            "さんぽ (sanpo - walking stroll)"
        ],
        correct: 0,
        explanation: "「運搬（うんぱん）」means transporting or carrying cargo/materials from one place to another within a facility (構内運搬)."
    },
    {
        id: "q9",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "倉庫や 工場で、パレットに乗せた 重い 荷物を、「２本の 鉄の 爪（フォーク）」 を 差し込んで 上下に 持ち上げたり 運んだりする 特殊な 荷役車両を 何と 言いますか。",
        promptEn: "What is the special material handling vehicle called in warehouses/factories that inserts 'two iron prongs (forks)' under heavy palletized loads to lift them up and down and transport them?",
        options: [
            "フォークリフト（Forklift truck - industrial lift truck）",
            "ブルドーザー（Bulldozer - earth-moving machine）",
            "タクシー（Taxi - passenger cab）",
            "救急車（きゅうきゅうしゃ - emergency ambulance）"
        ],
        correct: 0,
        explanation: "A forklift is called a「フォークリフト」. Operating a forklift with a maximum load of 1 ton or more in Japan requires a state-approved skill course license (フォークリフト運転技能講習)."
    },
    {
        id: "q10",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "フォークリフトの 爪（つめ）を 差し込んで 荷物を 運べるよう、段ボール箱などの 商品を 上に 積み重ねて おく 「木製 または プラスチック製の 平らな 荷台（板）」 を 何と 言いますか。",
        promptEn: "What is the 'wooden or plastic flat cargo base platform (board)' called on which cardboard boxes and goods are stacked so forklift tines can be inserted to transport them?",
        options: [
            "パレット（Pallet - wooden/plastic cargo loading pallet platform）",
            "ヘルメット（Helmet - safety hard hat）",
            "コンセント（Outlet - electrical wall socket）",
            "エスカレーター（Escalator - moving staircase）"
        ],
        correct: 0,
        explanation: "A cargo loading platform is a「パレット (Pallet)」. Standard Japanese logistics pallets measure 1,100 mm × 1,100 mm (イチイチパレット)."
    },
    {
        id: "q11",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "パレットの上に 積み重ねた 段ボール箱が 運搬中 や トラックの 揺れで 崩れ落ちないよう（荷崩れ防止の ため）、荷物の 周りに ぐるぐると 強く 巻く 「透明な 伸縮性プラスチックフィルム」 を 何と 言いますか。",
        promptEn: "What is the 'transparent elastic plastic film' called wrapped tightly around stacked cardboard boxes on a pallet to prevent cargo collapse during transport or truck vibrations?",
        options: [
            "ストレッチフィルム（Stretch film / Stretch wrap - pallet wrapping film）",
            "アルミホイル（Aluminum foil - kitchen cooking foil）",
            "セロハンテープ（Cellophane tape - small desk scotch tape）",
            "ガムテープ（Gummed cloth tape - brown packaging duct tape）"
        ],
        correct: 0,
        explanation: "Pallet shrink wrap is called「ストレッチフィルム (Stretch film)」. Wrapping it tightly catching the bottom wooden pallet base (パレット下部巻き込み) prevents cargo sliding."
    },
    {
        id: "q12",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "月に １回 や 年に １回、倉庫にある 全ての 商品の 数を １個ずつ 実際に 数えて、「パソコンの 帳簿データ（帳簿在庫）」 と 「実際の 商品の 数（実在庫）」 が 一致するか 確認する 大切な 作業を 何と 言いますか。",
        promptEn: "What is the critical task called performed monthly or yearly where workers physically count every single product in the warehouse one by one to verify whether 'computer book inventory data' matches 'actual physical stock'?",
        options: [
            "棚卸し（たなおろし - inventory stocktaking / physical inventory count）",
            "大掃除（おおそうじ - annual grand cleaning of house）",
            "引っ越し（ひっこし - moving to a new residence）",
            "宝探し（たからさがし - treasure hunt game）"
        ],
        correct: 0,
        explanation: "Physical inventory stocktaking is called「棚卸し（たなおろし）」or「実地棚卸（じっちたなおろし）」. Essential for finding theft, loss, or data entry discrepancies."
    },

    // ==========================================
    // SECTION 2: CONVERSATION AND EXPRESSION (会話と表現) - 11 Questions
    // ==========================================
    {
        id: "q13",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "工場から 届いた 商品の 段ボール箱の 数と、納品書（伝票）の 数量を 数えて チェックしました。倉庫リーダーに 何と 報告しますか。\nスタッフ：「リーダー、入荷した 荷物の 検品が 終わりました。伝票の 数量と 実際の 箱の 数に 【　　】。」",
        promptEn: "You counted and checked the number of cardboard boxes arriving from the factory against the delivery invoice. How do you report to the warehouse leader?\nStaff: 'Leader, inspection of incoming cargo is finished. Regarding the invoice quantity and actual box count, 【　　】.'"
        ,
        options: [
            "間違い（違い・不足）は ございませんでした（一致いたしました） (machigai [chigai / fusoku] wa gozaimasen deshita [icchi itashimashita] - there were no mistakes/shortages; they matched perfectly [keigo])",
            "箱を 全部 燃やして 灰に いたしました (hako o zenbu moyashite hai ni itashimashita - I burned all boxes into ashes)",
            "箱を 私の 家の 倉庫へ 盗んで 持って帰りました (hako o watashi no ie no sōko e nusunde motte kaerimashita - I stole boxes and took them home to my warehouse)",
            "箱の 中身を 全部 自分で 食べて お腹いっぱいになりました (hako no nakami o zenbu jibun de tabete onakaippai ni narimashita - I ate all contents inside boxes and got full)"
        ],
        correct: 0,
        explanation: "Standard incoming inspection report in logistics:「検品が完了いたしました。伝票の数量と実物に間違い（違い・不足）はございませんでした」."
    },
    {
        id: "q14",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "ガラスコップや お皿などの 割れやすい 「壊れ物（こわれもの）」 が 入った 段ボール箱を 倉庫の 棚に 収納します。先輩に どの 棚に 置くべきか 何と 質問しますか。\nスタッフ：「先輩、この ガラス製品が入った 壊れやすい 段ボール箱は、どの 棚に 【　　】？」",
        promptEn: "You are storing cardboard boxes containing fragile 'breakable items' (glass cups, plates) on warehouse shelves. How do you ask your senior which shelf to put them on?\nStaff: 'Senior, which shelf 【　　】 this fragile cardboard box containing glassware?'"
        ,
        options: [
            "置けば（保管すれば） よろしいでしょうか (okeba [hokan sureba] yoroshii deshō ka - should I put / store it? [polite keigo])",
            "投げつけて 割れば よろしいでしょうか (nagetsukete wareba yoroshii deshō ka - should I throw it and smash it to pieces?)",
            "トラックで 海へ 運んで 沈めれば よろしいでしょうか (torakku de umi e hakonde shizumereba yoroshii deshō ka - should I transport by truck to sea and sink it?)",
            "箱を 足の キックで 蹴り飛ばせば よろしいでしょうか (hako o ashi no kikku de keritobaseba yoroshii deshō ka - should I kick and send box flying with foot?)"
        ],
        correct: 0,
        explanation: "Asking workplace instructions politely:「〜はどの棚に置けば（保管すれば）よろしいでしょうか / どこに収納すればいいですか」."
    },
    {
        id: "q15",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "倉庫内の 通路で、フォークリフトが 重い パレットを 運んで 作業しています。新人の 作業員が フォークリフトに 近づこうとしたので、何と 叫んで 止めますか。\n先輩：「危ない！今 フォークリフトが 作業中だから、あの 黄色い 線の 内側に 【　　】！」",
        promptEn: "In a warehouse aisle, a forklift is working carrying heavy pallets. A newcomer worker tried to approach the forklift, so how do you scream to stop them?\nSenior: 'Danger! A forklift is operating right now, so inside that yellow line, 【　　】!'"
        ,
        options: [
            "絶対に入ってはいけない（立入禁止だよ） (zettai ni hatte wa ikenai [tachiirikinshi da yo] - you must NEVER enter [It's a No Entry hazard zone]!)",
            "みんなで 走って 飛び込もう（一緒に入ろう） (minna de hashitte tobikomō [issho ni hairō] - let's all run and jump inside together!)",
            "フォークリフトの 上に ジャンプして 飛び乗ろう (fōkurifuto no ue ni janpu shite tobinorō - let's jump and board onto top of forklift!)",
            "目を 閉じて 全速力で フォークリフトと 鬼ごっこしよう (me o tojite zensoroku de fōkurifuto to onigokko shiyō - let's close our eyes and play tag with forklift at full speed!)"
        ],
        correct: 0,
        explanation: "Forklift pedestrian safety (フォークリフト作業区域への立入禁止): Entering operating zones of forklifts causes fatal crushing accidents (接触・轢かれ事故). Must scream to stop."
    },
    {
        id: "q16",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "お客様からの ご注文指示書（ピッキングリスト）に 書かれた ５種類の 商品を 全て 棚から 集める 「ピッキング作業」 が 終わりました。リーダーに 何と 報告しますか。\nスタッフ：「リーダー、お疲れ様です。Ａ列３番の 棚から、ご注文商品の ピッキングが 【　　】。」",
        promptEn: "The 'picking work' of gathering all 5 types of products listed on the customer's order instruction sheet (picking list) from shelves is finished. How do you report to the leader?\nStaff: 'Good work, Leader. Regarding picking the ordered goods from Shelf A-03, 【　　】.'"
        ,
        options: [
            "全て 完了いたしました（検品台へ お運びします） (subete kanryō itashimashita [kenpindai e ohakobi shimasu] - it is completely finished; I will transport them to inspection table [keigo])",
            "全て 失敗して 商品を 壊して いたしました (subete shippai shite shōhin o kowashite itashimashita - I failed everything and destroyed all products)",
            "面倒くさいので 全て ゴミ箱に 捨てて いたしました (mendōkusai node subete gomibako ni sutete itashimashita - It was bothersome so I threw everything in trash bin)",
            "ピッキングしないで お昼寝を ３時間 して いたしました (pikkingu shinaide ohirune o sanjikan shite itashimashita - Without picking I took a 3-hour afternoon nap)"
        ],
        correct: 0,
        explanation: "Standard order picking completion report:「ご注文商品のピッキングが全て完了いたしました。次の検品・梱包作業へ移ります」."
    },
    {
        id: "q17",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "パレットの上に 積んだ 段ボールが 荷崩れしないよう、ストレッチフィルムを 強く 巻きたいですが、上手な 巻き方が 分かりません。先輩に 何と お願いしますか。\n実習生：「先輩、パレットの 荷崩れを 防ぐ ストレッチフィルムの 正しい 巻き方が 分からないので、【　　】？」",
        promptEn: "You want to wrap stretch film tightly so cardboard boxes stacked on a pallet don't collapse, but don't know the proper wrapping technique. How do you ask your senior?\nIntern: 'Senior, I don't know the proper stretch film wrapping technique to prevent pallet cargo collapse, so 【　　】?'"
        ,
        options: [
            "教えて いただけませんか（お手本を 見せて ください） (oshiete itadakemasen ka [otehon o misete kudasai] - could you please teach me? [could you show me a model demonstration?])",
            "私の 代わりに 一生 毎日 巻いて 働きなさい (watashi no kawari ni isshō mainichi maite hatarakinasai - work and wrap them every day for life instead of me)",
            "フィルムを 全部 燃やして 暖房の 代わりに しましょう (firumu o zenbu moyashite danbō no kawari ni shimashō - let's burn all film and use as heating instead)",
            "私の 体に フィルムを 巻いて ミイラ男の 遊びを しましょう (watashi no karada ni firumu o maite miira-otoko no asobi o shimashō - wrap film around my body and let's play mummy man games)"
        ],
        correct: 0,
        explanation: "Asking for technical guidance on pallet wrapping:「ストレッチフィルムの正しい巻き方を教えていただけませんか / お手本を見せていただけませんか」."
    },
    {
        id: "q18",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "商品を満載した トラックが 倉庫の 駐車場に 到着しました。荷物を 積み下ろしする ため、トラックの 運転手さんに どこへ 車を つけて（止めて）ほしいと ご案内しますか。\nスタッフ：「トラックの 運転手さん、お疲れ様です！お荷物の 積み下ろしは、あそこの 【　　】。」",
        promptEn: "A truck fully loaded with goods arrived in the warehouse parking lot. To unload cargo, where do you guide the truck driver to dock (park) their vehicle?\nStaff: 'Good work, Truck Driver! For unloading cargo, please back your truck up to 【　　】.'"
        ,
        options: [
            "２番 プラットホーム（荷物用 搬入口）へ 接車（駐車）をお願いします (niban purattohōmu [nimotsuyō han'nyūguchi] e sessha [chūsha] o onegaishimasu - please dock/park at Platform Dock #2 [cargo entrance])",
            "社長の オフィスの 窓ガラスを 突き破って オフィスの 中へ 止めてください (shachō no ofisu no madogarasu o tsukiyabutte ofisu no naka e tomete kudasai - smash through CEO's window glass and park inside office)",
            "近くの 幼稚園の 砂場の上 に トラックを 止めて 帰ってください (chikaku no yōchien no sunaba no ue ni torakku o tomete kaette kudasai - park truck on top of nearby kindergarten sandbox and go home)",
            "ビルの 屋上にある 飛行機の 弓道場の 真ん中へ 止めてください (biru no okujō ni aru hikōki no kyūdōjō no mannaka e tomete kudasai - park right in middle of airplane archery range on rooftop)"
        ],
        correct: 0,
        explanation: "Warehouse docking guidance (トラックプラットホームへの誘導): Directing drivers to specific loading bays:「〜番プラットホーム（バース）へ接車・バックをお願いいたします」."
    },
    {
        id: "q19",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "入荷した 商品の 検品中、段ボール箱の 角が ひどく 潰れていて、中の 商品が 割れて 破損しているのを 見つけました。責任者に 何と 報告しますか。\nスタッフ：「責任者、入荷した 荷物の 検品中、段ボール箱が 潰れて 中の 商品が 【　　】。」",
        promptEn: "During inspection of incoming goods, you found a cardboard box with badly crushed corners and the product inside cracked and damaged. How do you report to the supervisor?\nStaff: 'Supervisor, during incoming inspection, I found a box crushed and the product inside 【　　】.'"
        ,
        options: [
            "破損している（割れている）のを 見つけました。どう 対応すれば よろしいでしょうか (hason shite iru [warete iru] no o mitsukemashita. dō taiō sureba yoroshii deshō ka - I found it is damaged [cracked]. How should I handle this?)",
            "破損していたので、秘密で 接着剤で 貼って 新しい 箱に 隠しておきました (hason shite ita node, himitsu de setchakuzai de hatte atarashii hako ni kakushite okimashita - since it was broken, I secretly glued it together and hid it in a new box)",
            "割れていたので、そのまま お客様の 家へ 出荷して 発送しておきました (warete ita node, sonomama okyakusama no ie e shukka shite hassō shite okimashita - since it was cracked, I shipped and mailed it out as is to customer's house)",
            "壊れていたので、私の お昼ご飯として 美味しく 食べて しまいました (kowarete ita node, watashi no ohirugohan toshite oishiku tabete shimaimashita - since it was broken, I ate it deliciously for my lunch)"
        ],
        correct: 0,
        explanation: "Reporting damaged incoming goods (入荷検品時の破損品報告): Never hide or ship damaged stock (破損品・不良品). Report immediately:「箱が潰れて中の商品が破損していました。隔離エリアに移動しますか」."
    },
    {
        id: "q20",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "重い ２０キロの 荷物を 床から 持ち上げようとしている 同僚が、膝（ひざ）を 曲げずに 腰だけを 曲げて 持ち上げようと しています。腰痛（ギックリ腰）を 防ぐ ため、何と アドバイスしますか。\nスタッフ：「おい！そんな 姿勢で 持ち上げると 腰痛（ギックリ腰）に なるぞ！荷物を 持ち上げる ときは、【　　】！」",
        promptEn: "A coworker trying to lift a heavy 20kg box from the floor is bending only his waist without bending his knees. To prevent back injuries (herniated disc), what advice do you give?\nStaff: 'Hey! If you lift with that posture you'll get acute back strain! When lifting heavy loads, 【　　】!'"
        ,
        options: [
            "しっかり 膝（ひざ）を 曲げて 腰を 落とし、荷物を 体に 近づけてから 持ち上げよう (shikkari hiza o magete koshi o otoshi, nimotsu o karada ni chizukete kara mochiageyō - bend knees deeply, lower your hips, and bring load close to body before lifting)",
            "両手を使わずに、足の つま先の 指だけ で ２０キロの 箱を 持ち上げよう (ryōte o tsukawazu ni, ashi no tsumasaki no yubi dake de nijukkiro no hako o mochiageyō - without hands, lift 20kg box using only your toe tips)",
            "目を 閉じて ジャンプしながら 片手で バレーボールのように 投げ上げよう (me o tojite janpu shinagara katate de barēbōru no yō ni nageageyō - eyes closed while jumping, toss it up with one hand like a volleyball)",
            "荷物を 自分の 体から ３メートル 離した ままで、背中を 逆さまに 曲げよう (nimotsu o jibun no karada kara sanmētoru hanashita mama de, senaka o sakasama ni mageyō - keeping load 3 meters away from body, bend spine upside down)"
        ],
        correct: 0,
        explanation: "Material handling ergonomics (重量物運搬の腰痛予防アドバイス): Lifting heavy boxes with straight knees causes severe back injury. Bending knees and keeping cargo close (膝を曲げて体に近づけて持つ) is essential."
    },
    {
        id: "q21",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "倉庫の 発送管理システムの 点検メンテナンスの ため、商品の 出荷作業が 予定より １時間 遅れています。配送先の お客様に 電話で 何と お詫びして 説明しますか。\nスタッフ：「お世話になっております。システム点検の ため、商品の 出荷が １時間 遅れております。【　　】。」",
        promptEn: "Due to inspection maintenance of the warehouse shipping management system, product dispatch is delayed by 1 hour behind schedule. How do you apologize and explain by phone to destination clients?\nStaff: 'Thank you for your business. Due to system inspection, product dispatch is delayed by 1 hour. 【　　】.'"
        ,
        options: [
            "大変 申し訳ございません。本日 夕方 １６時には 確実に出荷いたします (taihen mōshiwake gozaimasen. honjitsu yūgata jūrokuji ni wa kakujitsu ni shukka itashimasu - I apologize deeply. We will reliably ship it out by 16:00 evening today [keigo])",
            "私が 遅れた のは パソコンの せいだから 私には 一切 責任が ありません (watashi ga okureta no wa pasokon no sei dakara watashi ni wa issai sekinin ga arimasen - The delay is the computer's fault so I have zero responsibility)",
            "商品が ほしければ お客様が 自分で トラックを 運転して 倉庫に取りに きなさい (shōhin ga hoshikereba okyakusama ga jibun de torakku o unten shite sōko ni tori ni kinasai - If you want goods, drive a truck yourself and come get them at warehouse)",
            "出荷は 面倒なので 今日から １０年間 ずっと 商品の 発送を 休止します (shukka wa mendō node kyō kara jūnenkan zutto shōhin no hassō o kyūshi shimasu - Shipping is a hassle so we suspend product shipping for 10 years starting today)"
        ],
        correct: 0,
        explanation: "Logistics business communication keigo (出荷遅延時のお詫び): When shipping is delayed, apologize sincerely and provide a guaranteed revised shipping time:「大変申し訳ございません。本日〜時には確実に出荷いたします」."
    },
    {
        id: "q22",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "夏の 暑い 日に 倉庫内で 段ボールの 荷下ろし作業を していて、汗が 止まらず 熱中症に なりそうです。リーダーに 水分補給の 休憩を 頼む とき、何と 言いますか。\nスタッフ：「リーダー、倉庫内が 暑くて 汗が 止まりません。熱中症予防の ため、【　　】？」",
        promptEn: "You are unloading cardboard boxes in a warehouse on a hot summer day, sweating profusely and feeling like you might get heatstroke. How do you ask your leader for a water hydration break?\nStaff: 'Leader, it's hot inside the warehouse and I can't stop sweating. To prevent heatstroke, 【　　】?'"
        ,
        options: [
            "５分間、水分と 塩分補給の 休憩を 取らせていただいても よろしいでしょうか (gofunkan, suibun to enbun hojū no kyūkei o torasete itadakitemo yoroshii deshō ka - may I please take a 5-minute break to replenish water and salt? [keigo])",
            "これから １ヶ月間、ハワイの ビーチへ 休業旅行に 行っても よろしいでしょうか (korekara ikkatsukan, hawai no bīchi e kyūgyō ryokō ni gitemo yoroshii deshō ka - may I go on a 1-month vacation trip to a Hawaii beach?)",
            "倉庫の中に 冷たい 水を １万リットル 注いで プールに しても よろしいでしょうか (sōko no naka ni tsumetai mizu o ichiman-rittoru sosoide pūru ni shitemo yoroshii deshō ka - may I pour 10,000 liters of cold water into warehouse to make a pool?)",
            "お仕事中の トラックの 荷台の上で 朝まで １２時間 爆睡しても よろしいでしょうか (oshigotochū no torakku no nidai no ue de asa made jūnijikan bakusui shitemo yoroshii deshō ka - may I fall into a deep sleep for 12 hours until morning on work truck bed?)"
        ],
        correct: 0,
        explanation: "Warehouse heatstroke prevention (倉庫内作業の熱中症対策・水分補給の許可): Proactively requesting short hydration/salt breaks:「熱中症予防のため、水分・塩分補給の休憩を取らせていただいてもよろしいでしょうか」."
    },
    {
        id: "q23",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "倉庫の センター長から、「佐藤さん、今日の 午後は Ｂ区画の 棚卸し（たなおろし・在庫の 数を １個ずつ 数える 作業）を お願いします！」 と 指示されました。何と 元気よく 答えて 作業を 始めますか。\nスタッフ：「はい、かしこまりました！ただ今から 【　　】。」",
        promptEn: "The warehouse center chief instructed you: 'Mr. Sato, please perform inventory stocktaking (tanaoroshi / counting stock one by one) for Sector B this afternoon!' How do you reply energetically and begin work?\nStaff: 'Yes, certainly! Starting right now, I will 【　　】.'"
        ,
        options: [
            "Ｂ区画の 棚卸し（在庫カウントと 帳簿チェック）を 行います (bī-kukaku no tanaoroshi [zaiko kaunto to chōbo chekku] o okonaimasu - perform Tanaoroshi [inventory count & book check] for Sector B)",
            "Ｂ区画の 商品を 全て トラックに 乗せて 海へ 投げ捨てに行きます (bī-kukaku no shōhin o subete torakku ni nosete umi e nagesute ni ikimasu - load all Sector B goods onto truck and throw them into sea)",
            "Ｂ区画の 段ボール箱に 火を つけて キャンプファイヤーを 開催します (bī-kukaku no danbōrubako ni hi o tsukete kyanpufaiyā o kaisai shimasu - set fire to Sector B cardboard boxes and hold a campfire)",
            "Ｂ区画の 通路に 布団を 敷いて 朝まで パジャマで お昼寝を します (bī-kukaku no tsūro ni futon o shiite asa made pajama de ohirune o shimasu - lay futon in Sector B aisle and nap in pajamas until morning)"
        ],
        correct: 0,
        explanation: "Acknowledging warehouse inventory tasks:「はい、かしこまりました。ただ今から〜区画の棚卸し（在庫数確認）作業を行います」."
    },

    // ==========================================
    // SECTION 3: LISTENING COMPREHENSION (聴解) - 11 Questions
    // ==========================================
    {
        id: "q24",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】物流倉庫の センター長が、午後の ピッキング（品出し）指示を 出しています。作業員は、「赤い リンゴ」 を 何箱、「緑の マスカット」 を 何箱、合計で 何箱 ピッキングしなければなりませんか。",
        promptEn: "[Audio Simulation] The center chief of a logistics warehouse is issuing afternoon picking instructions. How many boxes of 'Red Apples', how many boxes of 'Green Muscats', and how many boxes IN TOTAL must the worker pick?",
        audioScript: "センター長：「佐藤さん、午後の 出荷便の ピッキング指示だ！いいか、まず 【「Ａ列 ０５番」 の 棚に行って、「赤い リンゴの 段ボール箱」 を 「２０箱（にじゅっぽこ）」】 ピッキングして 台車に 乗せてくれ。その後、【「Ｂ列 １２番」 の 棚に行って、「緑の マスカットの 箱」 を 「１５箱（じゅうごはこ）」】 追加で ピッキングする。だから、今日 午後の ピッキング数は 【「２０箱 プラス １５箱で、合計 「３５箱（さんじゅうごはこ）」」】 に なる！数量を 絶対に 数え間違えるなよ！」",
        audioScriptEn: "Center Chief: 'Mr. Sato, afternoon dispatch picking instructions! Listen, first go to shelf 'A-05' and pick '20 BOXES' of 'Red Apple Cardboard Boxes' onto your cart. After that, go to shelf 'B-12' and pick an additional '15 BOXES' of 'Green Muscat Boxes'. Therefore, today's afternoon picking count is '20 boxes plus 15 boxes, totaling '35 BOXES''! Never miscount the quantities!'",
        options: [
            "赤いリンゴ 【２０箱】 ＋ 緑のマスカット 【１５箱】 で、【合計 「３５箱（さんじゅうごはこ）」】 ピッキングする (Red apples 【20 boxes】 + Green muscats 【15 boxes】 = Pick a 【TOTAL OF '35 BOXES'】)",
            "赤いリンゴ 【５００箱】 ＋ 緑のマスカット 【５００箱】 で、【合計 「１,０００箱」】 の 徹夜作業になる (Red apples 500 boxes + Green muscats 500 boxes = All-night work picking total 1,000 boxes)",
            "リンゴや マスカットは １箱も ピッキングせず、【代わりに 「バナナを ３箱だけ」】 食べる (Pick zero boxes of apples or muscats; instead eat 'only 3 boxes of bananas')",
            "商品を ピッキングせず、【棚ごと 全て フォークリフトで トラックに乗せて 持ち去る】 (Without picking items, lift entire shelves with forklift and carry them away on truck)"
        ],
        correct: 0,
        explanation: "Picking math (ピッキング指示の数量計算): 20 boxes of Red Apples + 15 boxes of Green Muscats = 35 boxes total (合計３５箱)."
    },
    {
        id: "q25",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】物流倉庫の 通路で、安全管理責任者が メガホンを使って 大声で 警告アナウンスを 行っています。１トンの 重い 荷物を 運んでいる 「フォークリフト」 の 作業中、周囲の 作業員は どう しなければなりませんか。",
        promptEn: "[Audio Simulation] In a logistics warehouse aisle, the safety manager is making a loud warning announcement over a megaphone. While a 'forklift' is operating carrying a heavy 1-ton load, what must surrounding workers do?",
        audioScript: "安全管理責任者：「緊急安全アナウンス！現在、中央通路（メインアイル）において、【「１トンの 重い 木製パレットを 乗せた フォークリフト」 が バックで 移動作業中】 である！いいか、フォークリフトの 運転手からは 後ろに 大きな 「死角（しかく・見えない範囲）」 が あるため、非常に 危険だ！周囲で 歩いている 作業員は、【フォークリフトの 死角に入ったり、作業中の フォークリフトに 「３メートル以内」 に 絶対に 近づかないこと！】 必ず 黄色い 停止線の 外側で 立ち止まり、フォークリフトの 通過を 待ちなさい！」",
        audioScriptEn: "Safety Manager: 'Emergency safety announcement! Currently in the central aisle, A 'FORKLIFT CARRYING A HEAVY 1-TON WOODEN PALLET' IS MOVING IN REVERSE! Listen, forklift drivers have huge 'blind spots (invisible areas)' behind them, making it extremely hazardous! Surrounding walking workers MUST NEVER ENTER FORKLIFT BLIND SPOTS OR APPROACH WITHIN '3 METERS' OF AN OPERATING FORKLIFT! Always stop and wait outside the yellow stop lines until the forklift passes!'",
        options: [
            "運転手の 死角に入らず、【作業中の フォークリフトに 「３メートル以内」 に 絶対に 近づかない（停止線で 待つ）】 (Do not enter blind spots; 【NEVER APPROACH WITHIN '3 METERS' OF OPERATING FORKLIFT (wait at stop lines)】)",
            "フォークリフトが 早く 走れるよう、【後ろから 作業員 １０人で フォークリフトを 全速力で 押し続ける】 (To make forklift run faster, 10 workers push forklift from behind at full speed)",
            "運転手を 驚かせるため、【フォークリフトの 正面から 大声で 叫んで 飛び出し、鬼ごっこを する】 (To startle driver, scream loudly and jump out right in front of forklift to play tag)",
            "フォークリフトの 【２本の 鉄の 爪（フォーク）の上 に 乗って、エレベーターのように 上下に 遊ぶ】 (Ride on top of the 2 iron forklift tines and play moving up and down like an elevator)"
        ],
        correct: 0,
        explanation: "Forklift peripheral safety (フォークリフト周辺の安全基準・死角への進入禁止): Staying outside a 3-meter safety radius (３メートル以内の接近禁止) and avoiding driver blind spots (死角) prevents crushing fatalities."
    },
    {
        id: "q26",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】倉庫の 検品担当者が、東京から 届いた 入荷便の 異常について センター長に 緊急報告しています。入荷した 荷物に どのような 問題が ありましたか。また、その 荷物は どこへ 移動させますか。",
        promptEn: "[Audio Simulation] A warehouse inspection clerk is making an emergency report to the center chief about an abnormality in an incoming shipment from Tokyo. What problem did the incoming cargo have, and where will that cargo be moved?",
        audioScript: "検品スタッフ：「センター長！大変です！先ほど 東京工場から 到着した 便の 検品を行った ところ、【「段ボール箱が ３箱、雨水で びしょ濡れになって いて、箱の 角が ひどく 破れて（潰れて） 破損」】 していました！中の お菓子も 濡れています！」\nセンター長：「なんと！雨漏りか 輸送中の 事故だな！いいか、そんな 破損品や 水濡れ品を、正常な 商品と 一緒に 倉庫の 棚（在庫）に入れては 絶対に いけない！その ３箱は 直ちに 【「黄色い テープを 貼って、「隔離エリア（不良品保管場所）」 へ 移動」】 させろ！私が 東京の トラック運送会社へ 損害賠償の 連絡を入れる！」",
        audioScriptEn: "Staff: 'Center Chief! Trouble! When I inspected the shipment that just arrived from the Tokyo factory, '3 CARDBOARD BOXES WERE SOAKED WITH RAINWATER, AND BOX CORNERS WERE SEVERELY TORN (CRUSHED) AND DAMAGED'! The snacks inside are wet too!'\nChief: 'What! Must be a leak or transport accident! Listen, never put such damaged or water-soaked items onto warehouse shelves (inventory) with normal goods! IMMEDIATELY PUT 'YELLOW TAPE ON THOSE 3 BOXES AND MOVE THEM TO THE 'QUARANTINE AREA (Defective Storage Area)''! I will contact the Tokyo trucking company for damage compensation!'",
        options: [
            "【「段ボールが ３箱 雨水で 濡れて 破れて（破損して） いた」】 ため、直ちに 【「隔離エリア（不良品置き場）」】 へ 移動させる (Because 【'3 boxes were wet with rainwater and torn/damaged'】, move immediately to 【'QUARANTINE AREA (Defective Area)'】)",
            "【「箱の中 から 黄金の 仏像と １億円の 宝石が 出てきた」】 ため、直ちに 【「銀行の 金庫室」】 へ 移動させる (Because golden Buddha statues and 100 million yen jewels appeared from boxes, move to 'bank vault room')",
            "【「箱の 色が 突然 虹色に 光って 音楽を 歌い始めた」】 ため、直ちに 【「テレビ局の 音楽スタジオ」】 へ 移動させる (Because boxes glowed rainbow and sang music, move to 'TV network music studio')",
            "【「箱の中 に 可愛い 小犬や 小猫が １０匹 入っていた」】 ため、直ちに 【「ペットショップや 動物園」】 へ 移動させる (Because 10 cute puppies and kittens were inside boxes, move to 'pet shop or zoo')"
        ],
        correct: 0,
        explanation: "Handling defective/damaged incoming cargo (入荷検品時の異常品・破損品対応): Water-soaked or crushed shipments (水濡れ・破損品) must never enter regular stock; move immediately to the Quarantine Area (隔離エリア・不良品保管場所)."
    },
    {
        id: "q27",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】物流倉庫で、先輩が 新人に 「ストレッチフィルム（荷崩れ防止用ラップ）」 の 正しい 巻き方を 指導しています。トラックの 激しい 揺れで 段ボール箱が パレットから 滑り落ちないようにする ため、フィルムを どこに 巻き付けなければなりませんか。",
        promptEn: "[Audio Simulation] At a logistics warehouse, a senior is teaching a newcomer the proper way to wrap 'Stretch Film (cargo collapse prevention wrap)'. To prevent cardboard boxes from sliding off the pallet during severe truck vibrations, where MUST the film be wrapped?",
        audioScript: "先輩：「おい、新人！パレットの上に 積んだ 段ボールに ストレッチフィルムを 巻く ときの 最重要コツだぞ！いいか、初心者が よく やる 失敗が 「上の 段ボール箱の 回り だけを ぐるぐる 巻いて 終わりにする」 ことだ。それだと トラックが 激しく 揺れた とき、段ボール箱の 塊 ごと パレットの上から すべって ズリ落ちて 大惨事になる！だから、【一番 下を 巻く ときは、必ず 【「木製パレットの 土台（板の 角・足）」】 を ３周 強く 一緒に 巻き込んで、パレットと 段ボール箱が 一体化するように 固定】 しろ！【「パレットの 土台 ごと 一緒に 巻き込む！」】 これが 鉄則だ！」",
        audioScriptEn: "Senior: 'Hey newcomer! Critical secret for wrapping stretch film around cardboard boxes stacked on pallets! Listen, a common rookie mistake is 'just wrapping around the top cardboard boxes and calling it done'. Doing that, when trucks shake violently, the entire mass of cardboard boxes slides right off the pallet causing a disaster! Therefore, WHEN WRAPPING THE BOTTOM, YOU MUST ALWAYS WRAP THE 'WOODEN PALLET BASE (board corners/feet)' TOGETHER STRONGLY FOR 3 TURNS SO THE PALLET AND CARDBOARD BOXES ARE FIXED AS ONE INTEGRATED UNIT! 'Wrap the pallet base together with the cargo!' This is the iron rule!'",
        options: [
            "一番 下は、【必ず 「木製パレットの 土台（板の 角・足）」 を ３周 強く 一緒に 巻き込んで】 パレットと 荷物を 一体化固定する (At the bottom, 【ALWAYS WRAP THE 'WOODEN PALLET BASE (board corners/feet)' TOGETHER STRONGLY FOR 3 TURNS】 integrating pallet and cargo)",
            "パレットは 巻かずに、【一番 上の 段ボールの 「フタの 上 に 小さな リボンを １個 結んで 終わり」】 に する (Don't wrap pallet; 'just tie 1 small ribbon on top lid of topmost cardboard box and finish')",
            "フィルムは 使わずに、【「強力な アロンアルファ瞬間接着剤」 を 箱と パレットの 間に まいて 固める】 (Don't use film; 'apply super glue instant bond between boxes and pallet to cement them')",
            "パレットの 荷物ではなく、【「作業員 自身の 体と 足を ぐるぐる巻きにして ミイラ男になって」】 作業する (Instead of pallet cargo, 'wrap worker's own body and legs round and round turning into a mummy man')"
        ],
        correct: 0,
        explanation: "Pallet stretch film wrapping standard (ストレッチフィルムのパレット下部巻き込み): Catching the wooden pallet base in the bottom wrap (パレット土台との一体化巻き込み) locks the cargo load to the pallet."
    },
    {
        id: "q28",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】倉庫で 月に １回の 「棚卸し（たなおろし・在庫の 実物カウント）」 を 行っています。Ｃ列３番の 棚にある 「白い Ｔシャツ（Mサイズ）」 の 数量について、パソコンの 帳簿データと、実際の 商品の 数は それぞれ いくつで、何枚の 「差異（違い・不足）」 が 出ましたか。",
        promptEn: "[Audio Simulation] Monthly 'Tanaoroshi (inventory stocktaking / physical stock count)' is underway in the warehouse. For 'White T-shirts (Size M)' on Shelf C-03, what were the computer book data and actual physical counts respectively, and how many shirts was the 'discrepancy (difference/shortage)'?",
        audioScript: "リーダー：「佐藤さん、Ｃ列 ３番の 棚にある 「白い Ｔシャツ（Mサイズ）」 の 棚卸しカウント結果を 報告してくれ！」\n佐藤さん：「はい！パソコンの 【システム帳簿データでは 「在庫数： １００枚」】 と なっています。しかし、先ほど 私が 棚にある 実際の 段ボールを 開けて １枚ずつ 実物を 数えた ところ、【実際の 在庫（実在庫）は 「９８枚（きゅうじゅうはちまい）」】 しか ありませんでした！つまり、【「２枚の 不足（差異・マイナス ２枚）」】 が 発生しています！」\nリーダー：「なに！帳簿は １００枚で、実物が ９８枚で ２枚 足りない だと！数え間違いか 万引き・紛失の 可能性がある。もう 一度 ２人で 徹底的に 再カウントしよう！」",
        audioScriptEn: "Leader: 'Mr. Sato, report the stocktaking count results for 'White T-shirts (Size M)' on Shelf C-03!'\nSato: 'Yes! IN COMPUTER SYSTEM BOOK DATA, IT SAYS 'INVENTORY: 100 SHIRTS'. However, when I opened the actual cardboard boxes on the shelf and physically counted one by one, ACTUAL PHYSICAL STOCK WAS ONLY '98 SHIRTS'! In other words, A 'SHORTAGE OF 2 SHIRTS (Discrepancy / Minus 2 shirts)' HAS OCCURRED!'\nLeader: 'What! Book is 100, actual is 98, so 2 are missing! Could be miscounting, shoplifting, or loss. Let's thoroughly recount together once more!'",
        options: [
            "帳簿データは 【「１００枚」】 だが、実際の 実物が 【「９８枚」】 しか なく、【「２枚の 不足（差異）」】 が 出た (Book data is 【100 shirts】, but actual physical stock was only 【98 shirts】, resulting in a 【'shortage of 2 shirts (discrepancy)'】)",
            "帳簿データは 【「１０枚」】 だが、実際の 実物が 【「１０,０００枚」】 も あって、倉庫が パンクした (Book data is 10 shirts, but actual stock was 10,000 shirts causing warehouse to burst)",
            "帳簿データも 実物も 【「どちらも ０枚」】 だったので、【みんなで お揃いの Ｔシャツを 買いに行った】 (Both book data and actual stock were 0 shirts, so everyone went shopping to buy matching t-shirts)",
            "Ｔシャツが 【全て 「夜中に 勝手に 歩き出して 逃亡した」】 ため、現在 警察が 捜索中である (All t-shirts 'walked out and fled on their own at midnight', so police are currently searching for them)"
        ],
        correct: 0,
        explanation: "Inventory stocktaking mathematics (棚卸し差異の計算): System book stock 100 - Physical count 98 = Discrepancy of minus 2 shirts (２枚の差異・不足). Requires recount (再カウント)."
    },
    {
        id: "q29",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】トラックプラットホームで、ドックマスター（誘導誘導責任者）が トラック運転手さんに 接車指示を出しています。１番バースに 冷凍トラックが 止まっている ため、田中運転手の トラックは 何番バースに 止めて、荷下ろし前に 何を 設置しなさいと 言いましたか。",
        promptEn: "[Audio Simulation] At the truck loading platform, the dock master (guidance supervisor) is giving docking instructions to a truck driver. Since a freezer truck is parked at Dock Bay #1, at which bay number did he tell Driver Tanaka to park, and what MUST be installed before unloading cargo?",
        audioScript: "ドックマスター：「オーライ！オーライ！田中運転手さん、お疲れ様です！現在、【「１番 バース（プラットホーム）」 には 冷凍食品の 大型トラックが 駐車して 作業中】 です。したがって、田中さんの トラックは、【あそこの 空いている 「３番 バース（３番プラットホーム）」 へ バックで 接車（駐車）】 を お願いします！そして 荷下ろしの 安全鉄則です！フォークリフトで 荷物をおろす 最中に トラックが 前に 動いて 転落しないよう、【駐車サイドブレーキを 強く 引き、必ず 後ろの タイヤの 下に 鉄の 「輪止め（車止め・チョック）」 を ２個 確実に 設置して】 から 作業に入ってください！」",
        audioScriptEn: "Dock Master: 'All right! All right! Good work Driver Tanaka! Currently, A LARGE FREEZER TRUCK IS PARKED AND WORKING AT 'DOCK BAY #1 (Platform 1)'. Therefore, please back up and dock your truck AT THE VACANT 'DOCK BAY #3 (Platform 3)' over there! And here is the iron safety rule for unloading: to prevent your truck from rolling forward while forklifts unload causing falling accidents, PULL YOUR PARKING BRAKE HARD, AND YOU MUST FIRMLY INSTALL TWO IRON 'WHEEL CHOCKS (Wadome / Tire Stoppers)' UNDER YOUR REAR TIRES before starting work!'",
        options: [
            "空いている 【「３番 バース」】 へ 駐車し、必ず 後輪の 下に 鉄の 【「輪止め（車止め）」】 を 設置する (Park at vacant 【'DOCK BAY #3'】, and ALWAYS INSTALL IRON 【'WHEEL CHOCKS (Wadome)'】 under rear tires)",
            "屋上の 【「１００番 バース」】 へ 飛行機のように 飛んで 駐車し、タイヤの 下に 【「バナナの 皮」】 を 置く (Fly and park like an airplane at rooftop Bay #100, and put 'banana peels' under tires)",
            "社長の 【「自宅の 庭の 芝生」】 の 上に 駐車し、タイヤの 下に 【「高級な ふかふか マットレス」】 を 敷く (Park on lawn of CEO's home garden, and lay 'luxury fluffy mattresses' under tires)",
            "川の中の 【「水面 ０番 バース」】 へ 沈めて 駐車し、タイヤに 【「浮き輪と シュノーケル」】 を つける (Sink and park into water surface Bay #0 in river, and attach 'swim tubes and snorkels' to tires)"
        ],
        correct: 0,
        explanation: "Truck loading platform safety (トラックプラットホーム接車誘導と輪止め設置義務): Directing to vacant Dock Bay #3 and enforcing wheel chocks (輪止め / 車止め) prevents fatal platform gap fall accidents."
    },
    {
        id: "q30",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】倉庫の 検品スタッフが、無線ハンディターミナル（バーコードリーダー）の 不具合について リーダーに 報告しています。スタッフは、ハンディが 読み取れなくなった 原因は 何だと 考えていますか。",
        promptEn: "[Audio Simulation] A warehouse inspection staff member is reporting to the leader about a malfunction in a wireless handy terminal (barcode reader). What does the staff member think is the cause of the handy not reading barcodes?",
        audioScript: "検品スタッフ：「リーダー！すいません、私の 使っている 【「無線ハンディターミナル（バーコードスキャナー）」】 が、ピピッと エラー音が 鳴って、棚の ラベルの バーコードを 全く 読み取れなくなって しまいました！電池の バッテリー残量は 画面の 表示で １００％ フル充電されています。そのため、電池切れではなく、【「バーコードを 読み取る 先端の ガラスレンズが 汚れているか、落下で レンズが 割れて 故障した」】 のが 原因だと 思います。新しい ハンディに 交換しても よろしいでしょうか？」",
        audioScriptEn: "Staff: 'Leader! Excuse me, the WIRELESS HANDY TERMINAL (barcode scanner) I'm using beeped an error sound and completely stopped reading shelf label barcodes! Battery level shows 100% full charge on screen. Therefore, rather than a dead battery, I THINK THE CAUSE IS THAT 'THE FRONT GLASS LENS READING BARCODES IS DIRTY, OR BROKEN/CRACKED FROM A FALL'. May I exchange it for a new handy terminal unit?'",
        options: [
            "電池は １００％ あるため、【先端の 「読み取りガラスレンズの 汚れ または 破損（割れ）」】 が 原因だと 考えた (Since battery is 100%, he thought cause was 【'DIRTY OR DAMAGED (cracked) FRONT READING GLASS LENS'】)",
            "ハンディの中に 【「小さな 虫や アリが １００匹 住み着いて 巣を作った」】 のが 原因だと 考えた (He thought cause was that '100 tiny bugs and ants moved inside handy and built a nest')",
            "ハンディの 【「ボディーの色が 黒色だから バーコードが 恥ずかしがって 逃げた」】 のが 原因だと 考えた (He thought cause was that 'because handy body color is black, barcodes felt shy and ran away')",
            "お昼に 食べた 【「カレーライスの 強い カレーの 匂いが ハンディについた」】 のが 原因だと 考えた (He thought cause was that 'strong curry scent from curry rice eaten at lunch stuck to handy')"
        ],
        correct: 0,
        explanation: "Logistics IT equipment troubleshooting (ハンディターミナル読み取り不良の原因特定): With 100% battery, failure to read barcodes (バーコードスキャン不良) is typically caused by optical lens dirt or drop impact cracking."
    },
    {
        id: "q31",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】倉庫管理責任者が、５S（整理・整頓・清掃）ミーティングで 通路の 片付けについて 厳しく 怒っています。空になった 木製パレットや 梱包フィルムの ゴミを フォークリフト用 メインアイル（黄色い線の 通路）に 放置すると、どんな 大事故が 起こる と 警告しましたか。",
        promptEn: "[Audio Simulation] At a 5S meeting, the warehouse supervisor is very angry about clearing aisles. If empty wooden pallets or packaging wrap debris are left abandoned in the main forklift aisle (yellow line walkway), what major accident did he warn will occur?",
        audioScript: "責任者：「おい！誰だ！空になった 木製パレットや ストレッチフィルムの 破片を、フォークリフトが 走る メインアイル（中央通路）の 真ん中に 放置した のは！いいか、重い 荷物を 積んだ フォークリフトが 通路に 放置された 木製パレットや ビニールゴミを 踏みつけると、【タイヤが スリップして ハンドルが 効かなくなり、フォークリフトが 暴走して 巨大な 在庫棚（ラック）に 激突し、数千箱の 商品が 全て 崩れ落ちて 作業員が 下敷きになって 死ぬ 大事故】 に なるんだぞ！通路には 【ピン棒 １本たりとも 物を 置くな！】 これが 物流５Sの 鉄則だ！」",
        audioScriptEn: "Supervisor: 'Hey! Who left empty wooden pallets and stretch film scraps sitting right in the middle of the main aisle where forklifts drive! Listen, if a forklift carrying heavy loads runs over abandoned wooden pallets or vinyl debris in aisles, ITS TIRES WILL SLIP, STEERING WILL FAIL, AND THE FORKLIFT WILL GO OUT OF CONTROL CRASHING INTO HUGE INVENTORY RACKS (shelves), CAUSING THOUSANDS OF BOXES TO COLLAPSE BURYING AND KILLING WORKERS IN A FATAL ACCIDENT! NEVER LEAVE EVEN A SINGLE PIN OR OBJECT in the walkways! This is the iron rule of logistics 5S!'",
        options: [
            "フォークリフトが 踏んで スリップし、【在庫棚（ラック）に 激突して 数千箱が 崩れ落ち、作業員が 下敷きになる 大事故】 になる (Forklift runs over them slipping, CRASHING INTO INVENTORY RACKS CAUSING THOUSANDS OF BOXES TO COLLAPSE BURYING WORKERS)",
            "フォークリフトが 【喜びの 音楽を 奏でて スケートダンスを 踊り始め、全員に アイスクリームが 配られる】 (Forklift plays joyful music and starts skate-dancing, and everyone receives free ice cream)",
            "木製パレットから 【魔法の 妖精が 飛び出してきて、倉庫内の 商品を 全て 黄金の 延べ棒に変えてくれる】 (A magical fairy pops out of wooden pallet transforming all warehouse goods into gold bars)",
            "放置された フィルムが 【夜中に 勝手に 空に 飛んでいき、夜空の 月と 星を きれいに お掃除してくれる】 (Abandoned film flies into sky on its own at midnight cleaning moon and stars nicely)"
        ],
        correct: 0,
        explanation: "Warehouse 5S safety (倉庫メインアイル・通路の確保義務): Debris in forklift aisles causes loss of steering control and shelf-collision collapse disasters (ラック倒壊・下敷き死亡災害)."
    },
    {
        id: "q32",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】冷凍・冷蔵倉庫（クールロジスティクス）の 責任者が、マイナス ２０度（ー２０℃）の 冷凍庫内での ピッキング作業ルールを 説明しています。防寒着や 手袋の 装備の 他に、冷凍庫の 「分厚い 断熱扉（ドア）」 を １分以上 開けっ放しにしては いけないのは、なぜですか。",
        promptEn: "[Audio Simulation] The manager of a refrigerated/frozen warehouse (cool logistics) is explaining picking rules inside a minus 20°C (-20°C) freezer room. Besides wearing thermal gear and gloves, why must you NEVER leave the freezer's 'thick insulated door' open for more than 1 minute?",
        audioScript: "責任者：「みんな、今から マイナス ２０度（ー２０℃）の 冷凍庫に入って 冷凍ピザや アイスクリームの ピッキング作業を行う！必ず 指定の 防寒コートと 厚手の 断熱手袋、耳当てを 装着すること！そして 最も 重要な 注意だ！【「冷凍庫の 分厚い 扉（ドア）を １分以上 絶対に 開けっ放しにしては いけない！」】 なぜなら、【外の 温かく 湿った 空気が 大量に 冷凍庫内に入り込むと、冷気と ぶつかって 急激に 結露・凍結し、冷却ファンや 天井に 分厚い 霜（しも・氷の塊）が びっしり 付着して 冷凍機が 故障する】 からだ！出入りしたら 必ず 即座に ドアを 閉めろ！」",
        audioScriptEn: "Manager: 'Everyone, we're entering the minus 20°C (-20°C) freezer now to pick frozen pizzas and ice cream! Always wear designated thermal coats, thick insulated gloves, and earmuffs! And here is the most critical caution: 'YOU MUST NEVER LEAVE THE FREEZER'S THICK DOOR OPEN FOR MORE THAN 1 MINUTE!' Why? Because IF MASSIVE AMOUNTS OF WARM, HUMID OUTSIDE AIR ENTER THE FREEZER, IT CLASHES WITH COLD AIR CAUSING RAPID CONDENSATION AND FREEZING, FORMING THICK FROST (ice lumps) ALL OVER COOLING FANS AND CEILINGS BREAKING DOWN THE FREEZER MACHINE! Always shut doors immediately after entering/exiting!'",
        options: [
            "外の 湿った 空気が 入り込み、【結露・凍結して 冷却ファン等に 分厚い 霜（しも・氷の塊）がつい て 冷凍機が 故障する】 から (Warm humid air enters, CONDENSING & FREEZING TO FORM THICK FROST [ice lumps] on cooling fans breaking freezer machine)",
            "扉を開けて おくと、【冷凍庫の中から 白い 北極グマや ペンギンたちが 外の ロビーに 逃げ出してしまう】 から (If door is left open, white polar bears and penguins inside freezer will escape into outdoor lobby)",
            "冷気が 外に 逃げて、【地球全体の 気温が 一瞬で マイナス ５０度になり 氷河期が 来てしまう】 から (Cold air escapes outside causing entire Earth's temperature to drop instantly to -50°C triggering an Ice Age)",
            "扉を開けて おくと、【お昼の カレーライスの 匂いが 入って アイスクリームが 全て カレー味になる】 から (If left open, lunch curry rice scent enters turning all ice cream into curry flavor)"
        ],
        correct: 0,
        explanation: "Cold storage warehouse engineering (冷凍倉庫の防熱扉開閉管理): Leaving freezer doors open lets warm humid air rush in, causing rapid frost buildup (霜付き・凍結) on cooling coils and refrigeration failure."
    },
    {
        id: "q33",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】物流センターの 運行管理者が、大雨による 高速道路の 渋滞の ため、午後の 入荷トラックの 到着予定時間が 変更になった と アナウンスしています。当初は 午後 １４：００（午後２時） 到着予定だった トラックは、何時に 到着する 見込みに変更されましたか。また、それまでの 間、作業員は 何を しますか。",
        promptEn: "[Audio Simulation] A logistics center operations manager is announcing that due to highway traffic jams from heavy rain, the scheduled arrival time of afternoon incoming trucks has changed. At what time is the truck, originally scheduled for 14:00 (2 PM), now estimated to arrive? And what will workers do until then?",
        audioScript: "運行管理者：「注目！全員 手をとめて 聞いてくれ。本日 午後 １４：００（午後２時）に 到着予定だった 大阪からの 入荷便 大型トラックだが、大雨による 高速道路の 大渋滞に 巻き込まれた！運転手からの 連絡によると、【「トラックの 到着見込み時間は、１時間半 遅れて 「午後 １５：３０（午後 ３時半）」」 に 変更】 と なった！いいか、１５時半まで トラックは 来ないので、午後 １４時から １５時半までの 間は、【「全員で 梱包エリアの 段ボール箱の 組み立て・整理（箱作り作業）」 に スケジュールを 変更】 する！時間変更に 注意して 作業してくれ！」",
        audioScriptEn: "Manager: 'Attention! Everyone stop work and listen. Regarding the large incoming truck from Osaka scheduled to arrive today at 14:00 (2 PM), it got caught in a massive highway traffic jam due to heavy rain! According to driver contact, 'THE TRUCK'S ESTIMATED ARRIVAL TIME IS CHANGED TO 1.5 HOURS LATER AT '15:30 PM (3:30 PM)''! Listen, since the truck won't arrive until 15:30, between 14:00 and 15:30 PM, WE ARE CHANGING SCHEDULES SO 'EVERYONE WILL ASSEMBLE & ORGANIZE CARDBOARD BOXES (box-making work) IN THE PACKING AREA'! Note the schedule change and proceed!'",
        options: [
            "到着見込みは 【「午後 １５：３０（午後 ３時半）」】 に変更され、それまでは 【「全員で 段ボール箱の 組み立て・整理」】 を 行う (Arrival is changed to 【'15:30 PM (3:30 PM)'】, and until then 【'everyone will assemble and organize cardboard boxes'】)",
            "到着見込みは 【「明後日の 朝 ４：００」】 に変更され、それまでは 【「全員で 倉庫の 屋上で バーベキューパーティー」】 を 行う (Arrival changed to day after tomorrow 4 AM, and until then everyone holds a BBQ party on roof)",
            "到着見込みは 【「来年の お正月」】 に変更され、それまでは 【「全員で 冬眠して ベッドで 眠り続ける」】 (Arrival changed to next New Year's Day, and until then everyone hibernates sleeping in bed)",
            "到着見込みは 【「１０秒後」】 に変更され、それまでは 【「全員で 目を 閉じて カウントダウンの 歌を 歌う」】 (Arrival changed to 10 seconds later, and until then everyone closes eyes singing countdown songs)"
        ],
        correct: 0,
        explanation: "Logistics schedule management (トラック遅延時の作業スケジュール変更): Arrival rescheduled from 14:00 to 15:30 PM (午後１５時半変更), redirecting workforce to preparatory box assembly (段ボール組み立て作業)."
    },
    {
        id: "q34",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】倉庫で、アシストスーツ（重量物運搬用の パワースーツ）の 装着説明会が 行われています。この アシストスーツを 着用して ２０キロの 重い 段ボールを 持ち上げると、腰（背骨）への 負担は 何パーセント（％） 軽減（ラクに）なりますか。",
        promptEn: "[Audio Simulation] A wearable Assist Suit (power suit for heavy lifting) briefing is being held in the warehouse. When lifting heavy 20kg cardboard boxes while wearing this Assist Suit, by what percentage (%) is the physical burden on the lower back (spine) reduced (made easier)?",
        audioScript: "指導員：「みなさん、これが 当物流センターが 導入した 最新の 【「着用型 アシストスーツ（パワーアシストスーツ）」】 だ！背中と 腰に バネと モーターが 組み込まれている。いいか、毎日 ２０キロや ３０キロの 重い 段ボール箱を 何百回も 手で 持ち上げていると、誰でも ギックリ腰や ヘルニアになる！しかし、この アシストスーツを 装着して 正しい 膝曲げ姿勢で 持ち上げると、【背中の スプリングが 筋肉の 動きを サポートし、腰（背骨）にかかる 身体的な 負担を 「約 ３０パーセント（３０％）も 軽減（カット）」】 して くれる！３割も ラクになるんだぞ！重い 荷物を 運ぶときは 必ず 装着しよう！」",
        audioScriptEn: "Instructor: 'Everyone, this is the newest 'WEARABLE ASSIST SUIT (Power Assist Suit)' introduced by our logistics center! Springs and motors are built into the back and waist. Listen, lifting heavy 20kg and 30kg cardboard boxes hundreds of times daily by hand gives anyone herniated discs! However, when you wear this Assist Suit and lift with proper knee-bending posture, THE BACK SPRINGS SUPPORT MUSCLE MOVEMENT, REDUCING (CUTTING) PHYSICAL BURDEN ON THE LOWER BACK (spine) BY 'APPROXIMATELY 30 PERCENT (30%)'! It makes lifting 30% easier! Always wear it when handling heavy cargo!'",
        options: [
            "腰（背骨）にかかる 身体的な 負担を 【「約 ３０パーセント（３０％）」 も 軽減（カット・ラクに）】 してくれる (It reduces [cuts] physical burden on lower back by 【'APPROXIMATELY 30 PERCENT (30%)'】 making lifting easier)",
            "負担が 増えて、【「１００パーセント（１００％） 体が 重くなり、一歩も 歩けなくなって 床に 倒れ込む」】 (Burden increases, making body 100% heavier so you can't walk even one step and collapse on floor)",
            "スーツを 着ると、【「空を 時速 ５００キロで 飛べるようになり、スーパーマンのように 宇宙へ 行ける」】 (Wearing suit enables flying through sky at 500 km/h, traveling to outer space like Superman)",
            "スーツを 着ると、【「自分の 体が 透明人間になり、誰からも 見えなくなって サボれるようになる」】 (Wearing suit turns your body invisible, making you unseen by anyone so you can slack off)"
        ],
        correct: 0,
        explanation: "Logistics ergonomic technology (アシストスーツ・パワースーツによる腰痛軽減効果): Wearable robotic/spring assist suits reduce lumbar compression stress by approximately 30% (腰の負担約３０％軽減)."
    },

    // ==========================================
    // SECTION 4: READING COMPREHENSION (読解) - 11 Questions
    // ==========================================
    {
        id: "q35",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【倉庫内 フォークリフト作業 安全ルール５ヶ条】 を読んで 質問に 答えてください。\n\n――― 【サクラロジスティクス： フォークリフト構内安全５ヶ条】 ―――\nフォークリフトは 便利ですが、一歩 間違えると 重大死亡事故になります。以下の ルールを 厳守すること。\n\n1. 【歩行者 優先の 厳守】 構内通路では、【常時 「歩行者（人）」 が 優先】 である。フォークリフトの 運転手は 人を 見かけたら 必ず 一時停止し、進路を 譲ること。\n2. 【フォーク爪への 「乗っての 昇降（高所作業）」 の 絶対禁止】：\n高い 棚の 商品を 取る ため、あるいは 電球を 交換する ために、【「フォークリフトの ２本の 鉄の 爪（フォーク）や パレットの 上 に 作業員が 乗って、エレベーターのように 上下に 持ち上げてもらって 高所作業を 行う こと」 は 労働安全衛生法で 「絶対禁止（違法行為）」】 です！少しの 揺れで ２メートル以上の 高さから コンクリートの 床に 墜落し、頭を 打って 即死します！高所作業は 必ず 「高所作業車」 または 固定された 脚立を 使用すること！\n――――――――――――――――――――――――――\n\n質問：高い 棚の 商品を 取ったり 電球を 交換する とき、転落・死亡事故を 防ぐ ために 法律で 「絶対に してはいけない（禁止されている）」 ことは どれですか。",
        promptEn: "Read the 【5 Golden Forklift Safety Rules in Warehouses】 below and answer the question.\n[Logistics Forklift Safety Rules] 1. Pedestrians always have right-of-way. 2. Ban on riding forklift prongs for working at heights: To grab goods from high shelves or change lightbulbs, 'HAVING A WORKER RIDE ON TOP OF THE FORKLIFT'S 2 IRON PRONGS (forks) OR PALLETS TO BE LIFTED UP AND DOWN LIKE AN ELEVATOR TO WORK AT HEIGHTS' IS STRICTLY PROHIBITED BY LAW (Illegal act)! A slight sway causes workers to fall over 2 meters onto concrete floors, striking heads and dying instantly! High work must use dedicated aerial work platforms or secure ladders!\n\nQuestion: When grabbing goods from high shelves or changing lightbulbs, what action is 'strictly prohibited by law (must never be done)' to prevent fatal falling accidents?",
        options: [
            "フォークリフトの 【「２本の 鉄の 爪（フォーク）や パレットの 上 に 人が 乗って、上下に 持ち上げてもらって 高所作業する」】 こと (Having workers 【RIDE ON TOP OF FORKLIFT'S 2 IRON PRONGS (forks) OR PALLETS TO BE LIFTED UP AND DOWN】 for high work)",
            "高所作業を 行う 際、【安全な 「高所作業台車」 または 金属の 止め金具で 固定された 安定した 脚立を 正しく 使う】 こと (When working at heights, correctly using safe aerial work platforms or stable stepladders locked with metal braces)",
            "構内通路を 運転するとき、【「常時 歩行者（人）を 優先」 し、人を 見かけたら 必ず 一時停止して 進路を 譲る】 こと (When driving in aisles, 'always prioritizing pedestrians [people]', stopping temporarily to yield way when seeing people)",
            "作業を 始める 前に、【フォークリフトの ブレーキや オイル、タイヤの 空気圧を チェックする 「日常点検」 を 行う】 こと (Before starting work, performing 'routine inspections' checking forklift brakes, oil, and tire pressure)"
        ],
        correct: 0,
        explanation: "Occupational Safety and Health Regulations (フォークリフトの用途外使用・爪への搭乗禁止): Using forklift tines or lifted pallets as a makeshift elevator for workers (フォーク爪への乗っての昇降) is strictly illegal."
    },
    {
        id: "q36",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【商品の「ピッキング（品出し）」および バーコード検品マニュアル】 を読んで 質問に 答えてください。\n\n――― 【物流センター ピッキング・検品 品質マニュアル】 ―――\nお客様の ご注文通りに 商品を 棚から 集め（ピッキング）、箱詰めして 出荷する 作業は 物流の 心臓部です。\n\n◆ 【最悪の 出荷ミス 「誤出荷（ごしゅっか・違う 商品を送る こと）」】：\n似た ような 箱だから と いって、品番を よく 見ずに 違う 商品や 違う 賞味期限の ものを 梱包して お客様へ 発送した場合、お客様からの 信用を 完全に 失い、返品・再発送の 膨大な コストが 発生します！\n\n◆ 【誤出荷を ゼロにする 「３点 バーコード照合」 ルール】：\nピッキングした 商品を 検品台の パソコン（ハンディスキャナー）で チェックする 際は、必ず 以下の 【「３つの 項目」 が 出荷伝票の データと 完全に 一致しているか】 を バーコードで 読み取って 確認すること！\n① 【「品番（商品コード・JANコード）」】 が 正しいか。\n② 【「数量（個数）」】 が 正確か。\n③ 食品や 化粧品の場合は 【「賞味期限（消費期限）または ロット番号」】 が 指示通りか。\n――――――――――――――――――――――――――\n\n質問：注文と 違う 商品を送ってしまう 「誤出荷（ごしゅっか）」 を 完全に 防ぐ ため、検品台の バーコードスキャナーでは 出荷伝票と 何の 「３つの 項目」 が 一致するか 照合チェックしなければなりませんか。",
        promptEn: "Read the 【Item Picking & Barcode Inspection Manual】 below and answer the question.\n[Quality Manual] Picking items from shelves and packing them is the heart of logistics. Worst Shipping Error 'Mis-shipment (Goshukka / Sending Wrong Items)': Packing wrong items or wrong expiration dates causes total loss of client trust and huge return costs! Rule to eliminate mis-shipments '3-Point Barcode Matching': When checking picked goods with barcode scanners at inspection tables, YOU MUST ALWAYS SCAN & VERIFY WHETHER THE FOLLOWING '3 ITEMS' COMPLETELY MATCH INVOICE DATA: 1) 'ITEM NUMBER (Product Code / JAN Code)' is correct. 2) 'QUANTITY (number of pieces)' is accurate. 3) For food/cosmetics, 'EXPIRATION DATE (or Lot Number)' matches instructions!\n\nQuestion: To completely prevent 'mis-shipment' sending wrong items to customers, what '3 items' must be scanned and verified for exact match against shipping invoices at the barcode inspection table?",
        options: [
            "① 【「品番（商品コード）」】 ② 【「数量（個数）」】 ③ 【「賞味期限 または ロット番号」】 の ３項目 (The 3 items: 1) 【'ITEM NUMBER (Product Code)'】 2) 【'QUANTITY'】 3) 【'EXPIRATION DATE OR LOT NUMBER'】)",
            "① 【「作業員の 今日の 体重」】 ② 【「作業員の 好きな アニメ」】 ③ 【「昨日の 夜ご飯の メニュー」】 の ３項目 (The 3 items: 1) Worker's weight today 2) Worker's favorite anime 3) Yesterday's dinner menu)",
            "① 【「倉庫の 社長の 年齢」】 ② 【「社長の お気に入りの ネクタイの色」】 ③ 【「社長の 愛車の 車種」】 の ３項目 (The 3 items: 1) CEO's age 2) CEO's favorite tie color 3) CEO's car model)",
            "① 【「明日の 天気予報」】 ② 【「今日の 占いラッキーカラー」】 ③ 【「宝くじの 当選番号」】 の ３項目 (The 3 items: 1) Tomorrow's weather forecast 2) Today's fortune lucky color 3) Lottery winning numbers)"
        ],
        correct: 0,
        explanation: "Logistics quality assurance (誤出荷防止の３点バーコード検品): Verifying Product Code (品番), Quantity (数量), and Lot/Expiration Date (賞味期限・ロット番号) eliminates picking and shipping errors."
    },
    {
        id: "q37",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【パレット積載「ストレッチフィルム（荷崩れ防止フィルム）」巻き方基準】 を読んで 質問に 答えてください。\n\n――― 【構内運搬・梱包技術： ストレッチフィルム 巻きつけ標準作業手順】 ―――\n木製パレットの上に 段ボール箱を ４段～５段に 積み上げた 際、フォークリフトの 運搬中 や トラック輸送中の 振動で 箱が 崩れ落ちる 「荷崩れ事故」 を 防ぐ ため、伸縮性の ある 透明な 「ストレッチフィルム」 を 巻き付けます。\n\n◆ 【フィルムを 巻く ときの 「３大 鉄則基準」】：\n1. 【下から 上へ 重ね巻き】 フィルムは 必ず 下の 段から 始め、前の フィルムと 【「幅の 半分（５０％）」 が 重なるように】 上に向かって 巻き進める。\n2. 【引っ張りテンション（張力）の 付与】 フィルムを ゆるゆるに 貼っても 意味がない。必ず 【「手で グッと 強く 引っ張って 伸ばしながら（テンションを かけながら）」】 荷物を 締め付ける ように 巻く こと！\n3. 【最重要 「パレット土台との 一体化巻き込み」】：\n一番 下の １段目を 巻く ときは、段ボール箱 だけを 巻いては 絶対にいけない！必ず 【「段ボール箱の下部と、その 下にある 『木製パレットの 土台の 角や 足』 を 一緒に ３周 以上 強く 巻き込んで、パレットと 荷物を 頑丈に 一体化固定」】 させる こと！土台を 巻き込まないと、荷物の 塊ごと パレットから すべって 滑落する！\n――――――――――――――――――――――――――\n\n質問：パレットの上に 積み上げた 段ボール箱が トラックの 振動で 滑り落ちる 「荷崩れ事故」 を 防ぐ ため、一番 下の １段目を 巻く ときは フィルムを どのように 巻き付けなければなりませんか。",
        promptEn: "Read the 【Pallet Stretch Film Wrapping Standards】 below and answer the question.\n[Technical Standards] When cardboard boxes are stacked 4-5 layers high on pallets, we wrap transparent elastic stretch film to prevent cargo collapse during forklift or truck transport. 3 Iron Rules: 1. Overlap by 50% moving from bottom to top. 2. Pull with strong tension while wrapping. 3. CRITICAL 'Integrating with Pallet Base': When wrapping the very bottom layer, NEVER WRAP ONLY THE CARDBOARD BOXES! You MUST ALWAYS WRAP 'THE BOTTOM OF THE CARDBOARD BOXES AND THE 'WOODEN PALLET BASE CORNERS/FEET' BENEATH THEM TOGETHER STRONGLY FOR OVER 3 TURNS TO STURDILY FIX AND INTEGRATE THE PALLET AND CARDBOARD BOXES AS ONE UNIT'! Without catching the pallet base, the entire load slides right off the pallet!\n\nQuestion: To prevent cardboard boxes stacked on pallets from sliding off due to truck vibration (cargo collapse accidents), how MUST the stretch film be wrapped when wrapping the bottom-most layer?",
        options: [
            "段ボール箱の 下部と、【その 下にある 「木製パレットの 土台の 角や 足」 を 一緒に ３周 以上 強く 巻き込んで】 一体化固定する (Wrap bottom boxes and 【THE 'WOODEN PALLET BASE CORNERS/FEET' BENEATH THEM TOGETHER STRONGLY FOR 3+ TURNS】 integrating them)",
            "段ボール箱 だけを ゆるゆるに 巻き、【木製パレットの 土台には フィルムを １ミリも 触れさせずに 避けて 巻く】 (Wrap only boxes loosely, avoiding the wooden pallet base without letting film touch it even 1mm)",
            "フィルムを 使わずに、【段ボールの 一番 上の フタの 中央に 「赤い バラの 花束」 を テープで 貼り付ける】 (Without using film, tape a 'red rose flower bouquet' in the center of the topmost box lid)",
            "パレットの上に 積まずに、【段ボール箱を 倉庫の 廊下に バラバラに １００個 投げ散らかして 放置する】 (Without stacking on pallets, throw and scatter 100 boxes all over warehouse hallways and leave them)"
        ],
        correct: 0,
        explanation: "Logistics packaging standard (ストレッチフィルムのパレット下部一体化巻き込み): Catching the wooden pallet base corners in the bottom film turns (パレット足と荷物の一体化) locks cargo vertically to the pallet platform."
    },
    {
        id: "q38",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【入荷・納品書チェックにおける「破損・水濡れ・数量不足」の報告規定】 を読んで 質問に 答えてください。\n\n――― 【物流センター 検品規約： 入荷荷物の 異常発見時の 必須対応ルール】 ―――\n工場や 外部メーカーから トラックで 荷物が 倉庫に 入荷した 際、検品担当者は 納品書（伝票）と 荷物の 状態を 厳格に 確認する 義務が あります。\n\n◆ 【「受領印（じゅりょういん・サイン）」 を 押してはいけない ケース】：\nトラックから 降ろされた 段ボール箱を 点検して、【「箱の 角が ひどく 潰れて 破れている（破損）」 「雨や 油で 箱が 濡れている（水濡れ）」 「伝票は ５０箱なのに 実物は ４８箱しかない（数量不足）」】 という 異常を 発見した場合、【絶対に その場 で 納品書の 「受領サイン（受取印）」 を 押して 受け取ってはいけません！】\n※ その場 で サインを 押してしまうと、「正常な 状態で 全て 受け取った」 ことになり、後から 破損や 不足の 弁償を 請求できなくなります！\n\n◆ 【正しい 報告手順】：\n必ず 【サインを 押す 前に、「納品書の 備考欄に 『２箱破損あり』『２箱不足』 と 具体的に 記入し、ドライバーと 一緒に 写真を 撮って 倉庫管理責任者へ 直ちに 報告する」】 こと！これが プロの 検品対応です。\n――――――――――――――――――――――――――\n\n質問：トラックから 届いた 入荷荷物の 検品中、段ボール箱が 破れて 破損していたり、伝票より 数量が 足りない 異常を 見つけました。この とき、検品担当者は どう しなければなりませんか。",
        promptEn: "Read the 【Incoming Inspection Damaged/Missing Goods Reporting】 below and answer the question.\n[Inspection Rules: Emergency Action for Abnormal Incoming Cargo] When cargo arrives by truck, inspection staff must verify goods against invoices. When NOT to sign/stamp receipt: If you inspect unloaded cardboard boxes and discover abnormalities such as 'box corners badly crushed/torn (Damage)', 'boxes soaked with rain/oil (Water Soaking)', or 'invoice says 50 boxes but only 48 arrived (Quantity Shortage)', YOU MUST NEVER STAMP/SIGN THE RECEIPT SIGNATURE ON THE SPOT TO ACCEPT THEM! *If you sign on the spot, it legally means 'you accepted everything in normal condition', and you cannot claim compensation for damage or shortages later! *Correct Reporting Procedure: MUST BEFORE SIGNING, 'SPECIFICALLY WRITE IN THE INVOICE REMARKS COLUMN '2 BOXES DAMAGED' OR '2 BOXES SHORT', TAKE PHOTOS TOGETHER WITH THE DRIVER, AND REPORT IMMEDIATELY TO THE WAREHOUSE MANAGER'!\n\nQuestion: During inspection of incoming cargo from a truck, you discovered abnormalities such as torn/damaged cardboard boxes or missing quantities compared to the invoice. What must inspection staff do?",
        options: [
            "サインを 押す 前に、【納品書の 備考欄に 「破損あり・数量不足」 を 記入し、写真撮影して 責任者へ 直ちに 報告する】 (BEFORE SIGNING, 【write 'Damaged/Missing' in invoice remarks, take photos, and report immediately to manager】)",
            "破損や 不足を 無視して、【すぐに 「正常に 受け取りました」 と 満面の 笑みで 受領サイン（ハンコ）を 押して 受け取る】 (Ignore damage/shortages, and immediately stamp/sign receipt with a big smile saying 'Received normally')",
            "破損した 荷物を 【トラックの 運転手さんに 投げつけて、「こんな 壊れた 箱 持ってくるな！」 と 取っ組み合いの 喧嘩をする】 (Throw damaged goods at truck driver and start a physical fistfight screaming 'Don't bring broken boxes!')",
            "数量が 足りないので、【近くの スーパーに 走って 同じ お菓子を 自分の お金で 買ってきて こっそり 補充する】 (Since quantities are short, run to a nearby supermarket, buy same snacks with your own money, and secretly replenish them)"
        ],
        correct: 0,
        explanation: "Logistics incoming receiving protocol (入荷検品時の破損・不足品の受領拒否ルール): Never sign a clear delivery receipt when cargo is damaged or missing. Document discrepancies on the bill of lading (伝票備考欄記入) and report immediately."
    },
    {
        id: "q39",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【倉庫内の「棚卸し（たなおろし・在庫カウント）」作業手順書】 を読んで 質問に 答えてください。\n\n――― 【在庫管理の 核心： 「棚卸し（たなおろし）」 の 目的と 差異分析】 ―――\n物流倉庫では、定期的に 倉庫を 一時停止し、全ての 棚に ある 商品の 数量を １個ずつ 実際に 数え上げる 「棚卸し（たなおろし・実地棚卸）」 を 実施します。\n\n◆ 【なぜ 棚卸しが 絶対に 必要なのか？（目的と 重要性）】：\n日々の 出荷や 入荷で パソコンの 在庫システム（帳簿在庫）を 更新して いても、時間が 経つと 【「ピッキングの 数え間違い」「入力ミス」「商品の 破損・紛失・盗難」】 などにより、パソコンの 数字と 実際の 商品の 数に ズレ（差異） が 必ず 生じて しまいます。\n※ もし この ズレを 放置すると、「パソコン上では 在庫が ある のに、棚に行ったら 商品が 空っぽで 出荷できない！」 という 欠品大事故が 起きます！\n\n◆ 【棚卸しの 最終ゴール】：\n全ての 実物を 正確に 数えて ズレ（差異） を 発見し、【「パソコンの 帳簿在庫データ」 を 「実際の 倉庫の 実在庫の 数」 に 正しく 修正して 一致させる こと（帳簿と 実物の １００％ 一致）」】 が 棚卸しの 最大の 目的です！\n――――――――――――――――――――――――――\n\n質問：物流倉庫で 定期的に 全ての 商品を １個ずつ 数える 「棚卸し（たなおろし・実地棚卸）」 を 実施する 最大の 目的・理由 は なんですか。",
        promptEn: "Read the 【Warehouse Inventory Stocktaking Procedures】 below and answer the question.\n[Core of Inventory Control: Purpose of Tanaoroshi & Discrepancy Analysis] Warehouses periodically halt operations to conduct 'Tanaoroshi' physically counting all item quantities one by one. Why Tanaoroshi is Absolutely Necessary (Purpose & Importance): Even if computer inventory systems (book stock) are updated daily, over time gaps (discrepancies) inevitably arise between computer numbers and actual stock due to 'picking counting errors', 'data entry mistakes', or 'breakage/loss/theft'! *If left ignored, a stock-out disaster occurs where 'computer says we have stock, but shelf is completely empty and we can't ship!' Final Goal of Tanaoroshi: The primary purpose of Tanaoroshi is to accurately count all physical stock to discover discrepancies, and 'CORRECTLY MODIFY COMPUTER BOOK INVENTORY DATA TO MATCH THE ACTUAL PHYSICAL STOCK IN THE WAREHOUSE (100% agreement between book and physical)'!\n\nQuestion: What is the primary purpose and reason for conducting periodic 'Tanaoroshi (physical inventory stocktaking)' counting every item one by one in logistics warehouses?",
        options: [
            "実際の 商品の 数を 正確に 数えて 差異を 見つけ、【「パソコンの 帳簿在庫」 を 「実際の 実在庫」 に 正しく 修正して 一致させる】 ため (Count actual stock accurately to find discrepancies, and 【'CORRECTLY MODIFY COMPUTER BOOK STOCK TO MATCH ACTUAL PHYSICAL STOCK'】)",
            "作業員が 【「誰が 一番 早く 段ボール箱を 積み上げられるか」 を 競争する 運動会ゲームを 楽しむ】 ため (For workers to enjoy an athletic sports game competing 'who can stack cardboard boxes the fastest')",
            "倉庫に 【「ネズミや ゴキブリが 何匹 住んでいるか」 を 数えて 動物図鑑を作る】 ため (To count 'how many mice and cockroaches live in warehouse' to create an animal encyclopedia)",
            "古い 商品を 【全て 倉庫の 屋上に 運び出して、太陽の 光に 当てて 日光浴させる】 ため (To carry all old products out onto warehouse rooftop and give them a sunbath in sunlight)"
        ],
        correct: 0,
        explanation: "Supply chain management principle (棚卸しの目的・帳簿在庫と実在庫の一致): Stocktaking (棚卸し) identifies shrinkage and administrative errors, reconciling software records with physical warehouse counts."
    },
    {
        id: "q40",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【重量物運搬における 腰痛予防と「アシストスーツ（パワースーツ）」着用案】 を読んで 質問に 答えてください。\n\n――― 【厚生労働省 労働衛生ガイドライン： 荷役作業における 腰痛予防】 ―――\n倉庫内の 荷役作業において、「腰痛（ギックリ腰や 椎間板ヘルニア）」 は 最も 多い 職業病です。労働者を 守る ため、以下の 基準が 定められています。\n\n◆ 【１人で 持ち上げてよい 中身の 重量制限（国の 基準値）】：\n1. 【成年男性 （満 １８歳以上の 男性）】： 【「自分の 体重の 約 ４０パーセント（４０％） 以下」】 の 重さまで！\n（例： 体重 ６０キロの 男性なら、６０ kg × ４０％ ＝ ２４キログラム 以下の 荷物まで）。\n2. 【成年女性 （満 １８歳以上の 女性）】： 【「男性の 基準の さらに ６割（自分の 体重の 約 ２４％ 以下）」】 まで！\n\n◆ 【「アシストスーツ（パワースーツ）」 および 荷役機器の 活用義務】：\nもし 体重の ４０％を 超える 重量物（５０キロの 米袋や 鉄の 部品等）を 扱う 場合は、【決して １人の 人間の 手だけで 無理に 持ち上げようとしてはいけません！】 必ず ２人以上で 協力するか、【「フォークリフト、ハンドリフト（台車）、あるいは 着用型 アシストスーツ（パワースーツ）」 などの 機械・支援機器を 活用して 腰を守ること】 が 法律で 義務付けられています。\n――――――――――――――――――――――――――\n\n質問：厚生労働省の 労働安全衛生基準により、満 １８歳以上の 「成年男性」 が、機械を使わずに １人の 手だけで 持ち上げてよい 荷物の 重さは、自分の 体重の 何パーセント（％） 以下と 定められていますか。",
        promptEn: "Read the 【Heavy Lifting Ergonomics & Power Suit Guidance】 below and answer the question.\n[Ministry of Health Guideline: Back Injury Prevention in Material Handling] Lower back pains (herniated discs) are the #1 occupational disease in warehouses. Weight Limits for 1 Person Lifting by Hand (National Standards): 1. Adult Males (18+ yrs old): UP TO 'APPROXIMATELY 40 PERCENT (40%) OR LESS OF THEIR OWN BODY WEIGHT'! (Example: For a 60kg man, 60 kg × 40% = up to 24 kg cargo). 2. Adult Females (18+ yrs old): Up to 60% of male standard (approx. 24% of body weight)! Mandatory Use of Assist Suits & Machines: If handling heavy loads exceeding 40% of body weight (50kg rice sacks, iron parts), NEVER FORCEFULLY LIFT BY 1 PERSON'S HANDS ALONE! You are legally required to cooperate with 2+ people or USE MACHINES/SUPPORT GEAR LIKE 'FORKLIFTS, HAND PALLET TRUCKS, OR WEARABLE ASSIST SUITS (Power Suits)' to protect your lower back!\n\nQuestion: Under Ministry of Health occupational safety guidelines, what is the maximum cargo weight percentage (%) of their own body weight that an 'Adult Male' (18+ yrs old) is permitted to lift by hand alone without machines?",
        options: [
            "自分の 体重の 【「約 ４０パーセント（４０％） 以下」】 の 重さまで （例：体重６０kgなら ２４kgまで） (Up to 【'APPROXIMATELY 40 PERCENT (40%) OR LESS'】 of his own body weight [e.g., up to 24kg for a 60kg man])",
            "自分の 体重の 【「１,０００パーセント（１０倍・６００キログラム）」】 の 重さまで (Up to 1,000 percent [10 times / 600 kg] of his own body weight)",
            "重さに 制限は 一切 なく、【「気合と 根性さえ あれば １トンの 鉄の 塊でも １人で 持つ」】 べきである (There is zero weight limit; 'with spirit and guts you should lift even a 1-ton iron block alone')",
            "男性は 荷物を持ってはいけないため、【「１グラムの 軽い フェザー（羽根）だけ」】 持つ ことが 許される (Males mustn't hold cargo, so they are permitted to hold 'only 1-gram light feathers')"
        ],
        correct: 0,
        explanation: "Japanese Occupational Safety Weight Lifting Guidelines (重量物取扱いにおける重量制限値): Legal maximum lifting weight for adult males without mechanical lifting aids is 40% of body weight (体重の４０％以下)."
    },
    {
        id: "q41",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【トラックプラットホーム（荷台接車）の 安全対策と「輪止め」設置義務】 を読んで 質問に 答えてください。\n\n――― 【物流バース安全規約： トラック荷下ろし中の 「輪止め（わどめ）」 義務】 ―――\nトラックが 倉庫の プラットホーム（荷物搬入口バース）に バックで 接車し、トラックの 荷台へ フォークリフトが 乗り込んで 荷下ろしを 行う 際は、極めて 危険な 事故リスクが 潜んでいます。\n\n◆ 【最悪の 死亡事故 「トラックの 突発発車・前方移動による フォークリフトの 転落・挟まれ事故」】：\n荷下ろしの 最中、フォークリフトが トラックの 荷台に 乗り込んだ 振動 や、運転手の ブレーキ忘れ により、【トラックの 車体（タイヤ）が 前に すーっと 動いて プラットホームとの 間に 「大きな 隙間（すきま）」 が 開く】 ことが あります。\n※ もし この 隙間に フォークリフトの タイヤが 落ちると、【重さ 数トンの フォークリフトが 真下の 地面に 激しく 転落し、運転手が 潰されて 即死】 します！\n\n◆ 【転落を １００％ 防ぐ 「輪止め（わどめ・車止め）」 の 鉄則】：\nこれを 絶対に 防ぐ ため、トラックが 接車したら、運転手は 【「必ず エンジンを 切り、サイドブレーキを 引いた 上 で、後ろの タイヤの 下に 頑丈な 鉄 または ゴム製の 『輪止め（わどめ・チョック）』 を ２個 確実に 設置して タイヤを 物理的に ロックする」】 ことが 法律と バース規約で 義務付けられています！輪止めなしでの フォークリフト進入は 絶対禁止！\n――――――――――――――――――――――――――\n\n質問：トラックの 荷台へ フォークリフトが 乗り込んで 荷下ろしを 行う とき、トラックが 勝手に 前に 動いて フォークリフトが 隙間に 転落する 死亡事故を 防ぐ ため、トラックの タイヤには 何を 設置しなければなりませんか。",
        promptEn: "Read the 【Truck Docking Safety & Mandatory Wheel Chocks】 below and answer the question.\n[Platform Safety Rules: Mandatory Wheel Chocks During Unloading] When trucks dock at warehouse platforms and forklifts drive into truck beds to unload, extreme hazards lurk. Worst Fatal Accident 'Truck Roll-Away Causing Forklift Gap Fall & Crushing': During unloading, vibration from forklifts entering truck beds or forgotten brakes can cause 'THE TRUCK CHASSIS (tires) TO ROLL FORWARD OPENING A 'LARGE GAP' between the truck bed and warehouse platform'! *If forklift tires fall into this gap, a multi-ton forklift crashes hard to the ground below, crushing and killing the driver instantly! Iron Rule to 100% Prevent Falls 'Wheel Chocks (Wadome / Tire Stoppers)': To prevent this absolutely, once a truck docks, drivers ARE MANDATED BY LAW AND DOCK RULES TO 'ALWAYS SHUT OFF THE ENGINE, PULL THE PARKING BRAKE, AND FIRMLY INSTALL TWO STURDY IRON OR RUBBER 'WHEEL CHOCKS (Wadome / Chocks)' UNDER REAR TIRES to physically lock the tires'! Entering without chocks is banned!\n\nQuestion: When forklifts drive into truck beds to unload cargo, what MUST be installed on truck tires to prevent fatal accidents where the truck rolls forward and the forklift falls into the gap?",
        options: [
            "後ろの タイヤの 下に、頑丈な 鉄 または ゴム製の 【「輪止め（わどめ・車止め・チョック）」 を 設置して タイヤを ロックする】 (INSTALL STURDY IRON OR RUBBER 【'WHEEL CHOCKS (Wadome / Tire Stoppers)' under rear tires to lock them】)",
            "タイヤの 下に、滑りやすい 【「バナナの 皮 や サラダ油」 を たっぷり 塗って タイヤを ツルツルにする】 (Apply plenty of slippery 'banana peels and salad oil' under tires making them super slick)",
            "タイヤを ロックせず、【トラックの 運転席で 運転手が 「アクセルを 全開に 踏み続けて」 エンジンを 吹かす】 (Without locking tires, driver sits in driver's seat and 'keeps flooring the gas pedal' revving engine)",
            "タイヤを 【４本とも レッカー車で 外して 持ち去り、トラックの 底を 地面に 着地させて 走れなくする】 (Remove and take away all 4 tires with a tow truck, letting truck bottom hit ground so it can't run)"
        ],
        correct: 0,
        explanation: "Warehouse loading dock safety (トラック接車時の輪止め・車止め設置義務): Placing physical Wheel Chocks (輪止め / Wadome) against rear wheels prevents truck roll-away and fatal forklift gap-fall accidents."
    },
    {
        id: "q42",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【冷凍・冷蔵倉庫（クールロジスティクス）防寒服と 低温作業管理】 を読んで 質問に 答えてください。\n\n――― 【労働安全衛生規則： マイナス ２０℃以下の 冷凍倉庫 作業基準】 ―――\n冷凍食品や アイスクリームを 保管する 「超低温 冷凍倉庫（マイナス ２０℃ ～ マイナス ２５℃）」 の 構内作業は、凍傷（とうしょう・皮膚が 凍って 死ぬ病気）や 低体温症の 危険と 隣り合わせです。\n\n◆ 【労働者を 守る 「防寒 ３大 装備」 の 着用義務】：\n1. 【頭部と 耳の 保護】 分厚い 防寒フード または 「耳当て（イヤーマフ）」 付きの ヘルメットを着ける こと。耳は 一番 凍傷になりやすい！\n2. 【手先の 保護】 通常の 軍手は 絶対禁止！必ず 【「厚手の 断熱冷凍庫専用 手袋（防寒グローブ）」】 を 着用すること。\n3. 【全身の 保護】 零下対応の 専用 「防寒コート・防寒ズボン」 と 断熱安全長靴を 着用すること。\n\n◆ 【冷凍庫内での 「連続作業時間の 制限」 （法律基準）】：\n極寒の 冷凍庫内での 作業は、【「１回あたりの 連続作業時間は 最大 『４５分間』 まで」】 と 厳しく 定められています！４５分 作業したら、必ず 【「暖房の 効いた ２０℃の 休憩室（暖房室）に 出て、『１５分以上』 の 暖房休憩・温かい お茶の 補給」】 を 取らなければなりません！休憩なしでの 連続冷凍庫作業は 違法行為です。\n――――――――――――――――――――――――――\n\n質問：マイナス ２０℃以下の 「超低温 冷凍倉庫」 内で 作業を行う とき、凍傷や 低体温症を 防ぐ ための 労働安全基準により、「１回の 連続作業時間」 は 最大 何分間までと 制限されていますか。",
        promptEn: "Read the 【Refrigerated/Frozen Warehouse Cold Storage Standards】 below and answer the question.\n[Occupational Safety Rules: Minus 20°C+ Freezer Warehouse Standards] Working inside ultra-low temperature freezer warehouses (-20°C to -25°C) carries severe frostbite and hypothermia risks. 3 Mandatory Thermal Gear Items: 1. Head/Ears: Hood or earmuff helmet. 2. Hands: Standard cotton gloves banned! Must wear 'thick insulated freezer gloves'. 3. Body: Subzero thermal coat/pants and insulated boots. Continuous Work Time Limits inside Freezers (Legal Standard): Work inside freezing vaults is strictly limited to 'A MAXIMUM OF '45 MINUTES' PER CONTINUOUS WORK SESSION'! After working 45 minutes, workers MUST EXIT TO A WARM 20°C REST ROOM AND TAKE 'OVER 15 MINUTES' OF WARMING BREAKS & HOT TEA HYDRATION! Continuous freezer labor without breaks is illegal.\n\nQuestion: When working inside an 'Ultra-low temperature freezer warehouse' at below minus 20°C, under occupational safety standards to prevent frostbite and hypothermia, what is the maximum restricted duration for '1 continuous work session'?",
        options: [
            "１回の 連続作業時間は 【「最大 『４５分間』 まで」】 で、その後 必ず 暖房室で １５分以上の 休憩を取る (1 continuous work session is limited to 【'A MAXIMUM OF '45 MINUTES''】, followed by 15+ mins warming break)",
            "休まずに 【「朝 ８時から 夜 ２０時まで 連続 『１２時間』」】 ずっと 冷凍庫の中に 閉じこもって 作業する (Without breaks, stay locked inside freezer working continuously for '12 hours from 8 AM to 20 PM')",
            "冷凍庫には 入らず、【「１分間 だけ」 外から 窓ガラス越しに 覗いて 終わりにする】 (Don't enter freezer; 'for just 1 minute' peek through window glass from outside and call it done)",
            "防寒服を着ずに、【「水着（ビキニ）と 裸足の 姿」 で マイナス ２０℃の 中を 走り回る】 (Without thermal gear, run around in -20°C in 'swimsuits [bikini] and bare feet')"
        ],
        correct: 0,
        explanation: "Cold storage occupational safety law (冷凍庫内作業の連続作業時間制限): Under Japanese labor regulations, working inside -20°C freezers is restricted to 45-minute sessions (連続４５分以内) followed by mandatory warming breaks."
    },
    {
        id: "q43",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【倉庫内 通路（メインアイル）の ５S管理と 段ボール処分規則】 を読んで 質問に 答えてください。\n\n――― 【物流５S 徹底マニュアル： 通路の 確保と 空き段ボールの 整理】 ―――\n倉庫の 通路は、血液が 流れる 血管と同じです。通路が ふさがれると 物流が 停止し、フォークリフトの 衝突事故が 発生します。\n\n◆ 【フォークリフト メインアイル（黄色い線の 通路）の 絶対不可侵】：\nフォークリフトが 走行する 黄色い 停止線の 通路には、【「空の 木製パレット」「使い終わった 梱包ラップ」「商品が入った 段ボール」 を １秒たりとも 放置（はみ出し） しては いけません！】 通路に 物が はみ出していると、フォークリフトの 爪や 車体が 激突し、ラック倒壊の大惨事になります。\n\n◆ 【ピッキング後の 「空き段ボール（空箱）」 の 処分 鉄則】：\n商品を 取り出して 空っぽに なった 段ボール箱を、箱の 形の まま 通路や 作業台に 放置すると、あっという間 に 倉庫が ごみで パンクします！\n※ 全ての 作業員は、【「段ボール箱が 空になったら、その場 で 即座に 底の テープを 剥がして 『平らに 折りたたみ（ペッタンコにし）』、１０枚ずつ 紐で 縛って 定位置のリサイクル置場へ 片付ける」】 ことを 徹底してください！\n――――――――――――――――――――――――――\n\n質問：倉庫で ピッキング作業をして いて、商品を 取り出した 後に 「空っぽに なった 段ボール箱（空箱）」 は、倉庫の ５Sマニュアルにより どのように 片付けなければなりませんか。",
        promptEn: "Read the 【Warehouse Aisle 5S & Cardboard Disposal Rules】 below and answer the question.\n[Logistics 5S Manual: Aisle Clearance & Empty Box Organizing] Aisle integrity: Main forklift aisles must never have pallets, wrap debris, or boxes left protruding even for 1 second! Protrusions cause rack collision disasters. Iron Rule for Discarding 'Empty Cardboard Boxes' After Picking: If empty boxes are left in box shapes sitting in aisles or tables, the warehouse bursts with trash in no time! *All workers must strictly enforce: 'AS SOON AS A CARDBOARD BOX BECOMES EMPTY, IMMEDIATELY REMOVE BOTTOM TAPE ON THE SPOT, 'FOLD IT FLAT (make it completely flat)', AND BUNDLE THEM IN GROUPS OF 10 WITH STRING to put away in designated recycling areas'!\n\nQuestion: While picking items in the warehouse, after removing products, how must you put away 'empty cardboard boxes' according to the warehouse 5S manual?",
        options: [
            "その場 で 即座に 【テープを 剥がして 「平らに 折りたたみ（ペッタンコにし）」】、定位置へ 片付ける (Immediately on the spot, 【remove tape and 'FOLD THEM FLAT (make completely flat)'】 to put in designated area)",
            "箱の 形の まま、【通路の 真ん中に １００箱 積み上げて 「大きな 秘密基地の 城」 を 作る】 (Keep in box shape, stack 100 boxes in middle of aisle to build a 'huge secret base castle')",
            "空になった 箱の中に 【自分が もぐり込んで かくれんぼを しながら お昼寝を 始める】 (Crawl inside empty box yourself and start taking an afternoon nap while playing hide and seek)",
            "空の 箱を 【バットで 叩き潰して ビリビリに 破り、オフィスの じゅうたんに 散らかす】 (Smash empty box with a baseball bat, rip to shreds, and scatter debris all over office carpet)"
        ],
        correct: 0,
        explanation: "Logistics 5S warehouse housekeeping (空き段ボールの即時折りたたみ管理): Flattening empty cardboard boxes immediately (平らに折りたたむ) prevents aisle blocking and fire hazards."
    },
    {
        id: "q44",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【ハンディターミナル（バーコードスキャナー）取り扱いおよび 保管規約】 を読んで 質問に 答えてください。\n\n――― 【物流IT機器 管理規則： 無線ハンディターミナルの 取り扱い】 ―――\n倉庫の 入出荷や 棚卸しで 毎日 使用する 「無線ハンディターミナル（バーコードリーダー）」 は、１台 １０万円以上する 高価な 精密IT機器です。\n\n◆ 【取り扱い上の 禁止事項】：\n・【落下・衝撃の 禁止】 コンクリートの 床に 落とすと、内部の 液晶画面や 赤外線スキャンセンサーが 一瞬で 破損します。作業中は 必ず 「落下防止の ストラップ（手首紐）」 を 手首に通して 使用すること！\n・【水濡れの 禁止】 飲み物を こぼしたり 雨中で 濡らす と 防水壊れします。\n\n◆ 【１日の 作業終了後（退勤時）の 必須ルール】：\n仕事が 終わって 帰る 際、使った ハンディターミナルを 作業台や 廊下に 置きっぱなしにすることは 厳禁です！\n※ 退勤時は、【必ず 「先端の スキャンレンズを 柔らかい 布で 綺麗に 拭き、所定の 『充電クレードル（充電台）』 に 確実に 差し込んで 充電ランプ（赤や 緑）が 点灯したのを確認」】 してから 帰宅してください！充電台に 戻さないと、翌朝の スタッフが 電池切れで 業務停止になります！\n――――――――――――――――――――――――――\n\n質問：１日の 倉庫作業が 終わって 退勤する とき、使用した 「無線ハンディターミナル（バーコードスキャナー）」 は どのように 片付けて 保管しなければなりませんか。",
        promptEn: "Read the 【Handy Terminal Barcode Scanner Care & Storage Rules】 below and answer the question.\n[Logistics IT Equipment Care Rules] Wireless handy terminals used daily cost over 100,000 yen each. Prohibitions: Dropping on concrete floors breaks LCD screens/sensors instantly; always wear wrist straps! Keep dry! Mandatory Rule When Finishing Daily Work (Leaving Shift): When leaving for the day, leaving used handy terminals sitting on tables or hallways is strictly forbidden! *When leaving shift, YOU MUST ALWAYS 'WIPE THE FRONT SCAN LENS CLEAN WITH A SOFT CLOTH, FIRMLY INSERT THE UNIT INTO ITS DESIGNATED 'CHARGING CRADLE (charging stand)', AND CONFIRM THAT THE CHARGING LAMP (red/green) LIGHTS UP' before going home! Failing to return to charging stands causes tomorrow morning's staff to suffer dead batteries stopping operations!\n\nQuestion: When finishing a day's warehouse work and leaving the shift, how must the used 'Wireless Handy Terminal (barcode scanner)' be put away and stored?",
        options: [
            "レンズを 綺麗に 拭き、【所定の 「充電クレードル（充電台）」 に 差し込んで 充電ランプ点灯を確認する】 (Wipe lens clean, and 【INSERT INTO DESIGNATED 'CHARGING CRADLE (charging stand)' confirming charging lamp lights up】)",
            "充電台には 戻さず、【自分の 「リュックサックに入れて 家に 持ち帰り、個人の ゲーム機として 使う」】 (Don't return to charger; 'put in your backpack, take home, and use as a personal game console')",
            "電源を 付けた ままで、【倉庫の 廊下の 床の 真ん中に 転がした ままで 家に 帰る】 (Leave power turned on, and 'leave rolling right in middle of warehouse hallway floor and go home')",
            "バケツの 【「冷たい 水の中に ボチャンと 沈めて 洗浄してから」】 ロッカーに 投げ込む (Submerge with a splash 'into a bucket of cold water to wash it' before tossing into locker)"
        ],
        correct: 0,
        explanation: "Logistics IT equipment management (ハンディターミナルの充電クレードル保管): Returning wireless handy scanners to charging cradles (充電台へのセットと充電確認) ensures battery readiness and prevents loss."
    },
    {
        id: "q45",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【倉庫業・物流「特定技能（SSW）」フォークリフト運転技能講習および 手当】 を読んで 質問に 答えてください。\n\n――― 【サクラロジスティクス： 外国人スタッフ キャリアアップ・資格手当 規約】 ―――\n当社では、特定技能（SSW）として 働く 物流スタッフの 皆さんが、日本の 国家公認資格を 取得し、将来 倉庫の 現場リーダー・フォークリフトマスターとして 活躍できるよう、全力で 支援しています！\n\n◆ 【会社が 取得費用を 全額負担する 推奨資格】：\n・【「フォークリフト運転技能講習 （３１時間 コース）」】 （※ 最大積載荷重 １トン以上の 全ての フォークリフトを 自由に 運転できる 日本全国共通の 一生モノの 国家公認ライセンス！）\n・「玉掛け技能講習」・「危険物取扱者 乙種４類」\n\n◆ 【資格取得者への 「お祝い 昇給手当（お給料アップ！）」】：\n見事 【「フォークリフト運転技能講習」】 を 修了して ライセンス証を 取得した スタッフには、会社からの 感謝と 評価として、取得した 翌月から 【毎月のお給料に 「月額 １５,０００円 （年間 １８万円）」 の 資格手当（フォークリフト手当）が ずっと 上乗せ（支給）】 されます！さらに、ピッキングリーダーに 任命されると 月額 ２万円が 追加されます！ぜひ スキルを 磨いて 挑戦してください！\n――――――――――――――――――――――――――\n\n質問：この 物流会社の 支援制度を 使って 「フォークリフト運転技能講習」 を 修了し ライセンスを 取得すると、翌月から お給料は どう なりますか。",
        promptEn: "Read the 【SSW Warehouse Forklift License & Qualification Allowance】 below and answer the question.\n[Career Up Support Notice] To help SSW logistics staff gain national licenses and advance to site leaders: Recommended Licenses: Forklift Driving Skill Course (31-hour course - universal national license to drive all forklifts over 1 ton for life!), Slinging skill course, Hazardous materials handler. Pass Bonus Raise Allowance (Salary Up!): Staff who successfully complete the 'Forklift Driving Skill Course' and gain their license card will receive a 'QUALIFICATION ALLOWANCE (Forklift Allowance) OF 15,000 YEN EVERY MONTH (180,000 yen/year) PERMANENTLY ADDED TO THEIR MONTHLY SALARY' starting the following month! Furthermore, if appointed as Picking Leader, an additional 20,000 yen/month is added! Please challenge it!\n\nQuestion: If you complete the 'Forklift Driving Skill Course' and gain the license under this logistics company's support system, what happens to your salary from the following month?",
        options: [
            "お給料に 【「毎月 １５,０００円 （年間 １８万円）」 の 資格手当（フォーク手当）が ずっと 上乗せ】 される (A 'QUALIFICATION ALLOWANCE OF 15,000 YEN EVERY MONTH [180k yen/yr]' is permanently added to your salary)",
            "フォークリフトを 運転した 罰金として、【お給料から 毎月 ５０,０００円が 引かれて 減額される】 (As a penalty fine for driving forklifts, 50,000 yen is deducted from your salary monthly)",
            "お給料のお金は 円ではなく、【全額 「古い 木製パレット ２００枚 と 破れた ビニール」】 で 支払われる (Yen salary disappears, and you are paid entirely in kind as '200 old wooden pallets and torn vinyl')",
            "ライセンス取得の 記念に、【「会社の トラックを 全て 自分の 個人名義の 愛車にもらえる」】 (To celebrate licensing, 'you are gifted ownership of all company trucks as your personal cars')"
        ],
        correct: 0,
        explanation: "Allowance clause states:「見事「フォークリフト運転技能講習」を修了してライセンス証を取得したスタッフには...【毎月のお給料に「月額１５,０００円」の資格手当がずっと上乗せ】されます！」."
    }
];
