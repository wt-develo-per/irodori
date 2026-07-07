// test6_data.js - JFT-Basic SSW Mock Test 6 Datastore (45 Questions)
// Aligned with CEFR A2 / Irodori & Genki Elementary Japanese
// Focus: Construction Industry (建設業 - Civil Engineering, Building Construction, Scaffolding, Heavy Machinery, & Site Safety)

const jftExamData = [
    // ==========================================
    // SECTION 1: SCRIPT AND VOCABULARY (文字と語彙) - 12 Questions
    // ==========================================
    {
        id: "q1",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "新しい ビルの 【建設】現場で、たくさんの 作業員が 働いています。【建設】の 正しい 読み方は どれですか。",
        promptEn: "Many workers are working at the new building 【建設】 (construction) site. What is the correct reading of 【建設】?",
        options: [
            "けんせつ (kensetsu - construction / building)",
            "けんきゅう (kenkyū - research / study)",
            "けんさく (kensaku - search / lookup)",
            "けんこう (kenkō - health / fitness)"
        ],
        correct: 0,
        explanation: "「建設（けんせつ）」means construction or building work. The SSW Construction Industry is officially called「建設業（けんせつぎょう）」."
    },
    {
        id: "q2",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "高い 所で 作業するときは、落ちる 事故を 防ぐ ため、必ず フルハーネス型の 【あんぜんたい】（墜落制止用器具）を 装着してください。正しい 漢字は どれですか。",
        promptEn: "When working at heights, to prevent falling accidents, always wear a full-harness type 【あんぜんたい】 (safety harness / fall arrest gear). Which kanji matches?",
        options: [
            "安全帯 (anzentai - safety harness / safety belt)",
            "安全靴 (anzengutsu - steel-toed safety boots)",
            "安全帽 (anzenbō - safety helmet / hard hat)",
            "安全網 (anzenmō - safety net)"
        ],
        correct: 0,
        explanation: "「安全帯（あんぜんたい）」is the traditional term for safety harnesses/belts (now officially called「墜落制止用器具 / tsuiraku seishiyō kigu」). Wearing full-harness gear is mandatory at heights over 2m."
    },
    {
        id: "q3",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "ビルの 外壁（外側の壁）を 工事する ため、鉄の パイプを 組み立てて 高い 【あしば】を 作りました。正しい 漢字は どれですか。",
        promptEn: "To work on the building's outer wall, we assembled iron pipes to create high 【あしば】 (scaffolding / staging). Which kanji matches?",
        options: [
            "足場 (ashiba - scaffolding / footing / staging)",
            "手場 (teba - false word)",
            "立場 (tachiba - standpoint / position)",
            "広場 (hiroba - public square / plaza)"
        ],
        correct: 0,
        explanation: "「足場（あしば）」means scaffolding—the temporary metal pipe structures erected around buildings for construction workers to stand on."
    },
    {
        id: "q4",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "建設現場の 中では、頭の上から 物が 落ちてくる 危険があるため、常に 【保護帽】 を かぶらなければなりません。【保護帽】 の カタカナの 呼び名は どれですか。",
        promptEn: "Inside construction sites, there is a danger of items falling from above, so you must always wear a 【保護帽】 (hard hat). What is the katakana name for 【保護帽】?",
        options: [
            "ヘルメット (herumetto - safety helmet / hard hat)",
            "ゴーグル (gōguru - protective eye goggles)",
            "マスク (masuku - breathing mask)",
            "イヤホン (iyahon - earphones)"
        ],
        correct: 0,
        explanation: "「保護帽（ほごぼう）」is the official legal term for a construction safety helmet or hard hat (ヘルメット). Fastening the chin strap (あご紐) is strictly required."
    },
    {
        id: "q5",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "ショベルカーや クレーンなどの 【重機】が 動いている 周りには、絶対に 近づいてはいけません。【重機】の 読み方は どれですか。",
        promptEn: "Never approach the area around moving 【重機】 (heavy machinery) such as excavators and cranes. What is the reading of 【重機】?",
        options: [
            "じゅうき (jūki - heavy machinery / construction equipment)",
            "おもき (omoki - false reading)",
            "ちょうき (chōki - long period)",
            "だいき (daiki - large machine)"
        ],
        correct: 0,
        explanation: "「重機（じゅうき）」is the standard construction abbreviation for heavy construction machinery (建設機械 / kensetsu kikai) like excavators, bulldozers, and mobile cranes."
    },
    {
        id: "q6",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "台風の 日は 風が 強く、足場から 転落（落ちること）する 【危険】が あるため、屋外の 工事を 中止します。【危険】の 読み方は どれですか。",
        promptEn: "On typhoon days, wind is strong and there is a 【危険】 (danger / hazard) of falling from scaffolding, so outdoor work is stopped. What is the reading?",
        options: [
            "きけん (kiken - danger / hazard / risk)",
            "あんぜん (anzen - safety / security)",
            "ちゅうい (chūi - caution / warning)",
            "あんしん (anshin - peace of mind / relief)"
        ],
        correct: 0,
        explanation: "「危険（きけん）」means danger or hazard. In construction safety, anticipating hazards before they happen is called「危険予知（きけんよち / KY）」."
    },
    {
        id: "q7",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "作業を 始める 前に、道具の 安全と 自分の 体調を 「ヨシ！」 と 声を 出して 指差し呼称で 【かくにん】します。正しい 漢字は どれですか。",
        promptEn: "Before starting work, we perform pointing and calling (shouting 'Yoshi!') to 【かくにん】 (confirm / verify) tool safety and health. Which kanji matches?",
        options: [
            "確認 (kakunin - confirmation / verification / check)",
            "確実 (kakujitsu - certainty / reliability)",
            "正確 (seikaku - accuracy / correctness)",
            "明確 (meikaku - clarity / distinctness)"
        ],
        correct: 0,
        explanation: "「確認（かくにん）」means confirmation or checking. Pointing and calling (指差呼称 / Shisa Koshō: pointing at an item and shouting 'よし！ / OK!') is standard Japanese industrial safety."
    },
    {
        id: "q8",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "トラックで 運ばれてきた 木材や 鉄骨などの 建築 【しざい】を、クレーンを 使って 荷下ろしします。正しい 漢字は どれですか。",
        promptEn: "We use a crane to unload construction 【しざい】 (materials / supplies) such as timber and steel beams brought by truck. Which kanji matches?",
        options: [
            "資材 (shizai - construction materials / supplies)",
            "取材 (shuzai - news coverage / interview)",
            "題材 (daizai - subject / theme)",
            "機材 (kizai - equipment / machinery)"
        ],
        correct: 0,
        explanation: "「資材（しざい）」means construction materials, raw supplies, or building components (lumber, pipes, steel frames, scaffolding parts)."
    },
    {
        id: "q9",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "毎朝 作業を 開始する 前（朝８時）に 全員が 広場に 集まり、当日の 作業内容や 安全注意事項を 確認し合う ミーティングを 何と 言いますか。",
        promptEn: "What is the daily morning meeting called where everyone gathers in the plaza before starting work (8:00 AM) to confirm the day's tasks and safety notices?",
        options: [
            "朝礼（ちょうれい - morning assembly / daily safety meeting）",
            "夜食（やしょく - late night meal / snack）",
            "昼寝（ひるね - afternoon nap / siesta）",
            "残業（ざんぎょう - overtime work）"
        ],
        correct: 0,
        explanation: "In Japanese construction and manufacturing, the morning assembly (朝礼 / chōrei) at 8:00 AM is mandatory for site coordination and health checks."
    },
    {
        id: "q10",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "作業を 開始する 直前に、仲間と一緒に 「今日、この作業で どんな 危険が 起こるか」 を 話し合い、事故を 未然に 防ぐ 活動を 何と 言いますか。",
        promptEn: "What is the activity called where workers discuss together right before starting work 'What kinds of hazards could happen in this task today' to prevent accidents beforehand?",
        options: [
            "KY活動（危険予知活動 / Kiken Yochi - Hazard Prediction Activity）",
            "PR活動（パブリックリレーションズ - Public relations / marketing）",
            "DJ活動（ディスクジョッキー - Music DJ performance）",
            "SNS活動（ソーシャルメディア - Social media posting）"
        ],
        correct: 0,
        explanation: "「KY活動 (危険予知活動 / Kiken Yochi)」or KYT (Kiken Yochi Training) is a cornerstone of Japanese construction safety where teams anticipate hazards before touching tools."
    },
    {
        id: "q11",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "クレーンで 重い 荷物を 吊り上げている 場所や、足場の 上から 物が 落ちる 恐れが ある エリアの 周りに 貼られる、「ここに入ってはいけない」 という 漢字標識は どれですか。",
        promptEn: "Which kanji sign means 'Do not enter here', posted around areas where cranes lift heavy loads or where items might drop from scaffolding?",
        options: [
            "立入禁止（たちいりきんし - No Entry / Keep Out / Unauthorized entry prohibited）",
            "土足禁止（どそくきんし - No shoes allowed / Take off footwear）",
            "駐車禁止（ちゅうしゃきんし - No parking）",
            "撮影禁止（さつえいきんし - No photography / cameras prohibited）"
        ],
        correct: 0,
        explanation: "「立入禁止（たちいりきんし）」is the universal warning sign for restricted hazard zones on construction sites."
    },
    {
        id: "q12",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "クレーンの フックに、ワイヤーロープや チェーンを 使って 重い 荷物を 掛けたり 外したり する 専門の 作業を 何と 言いますか。",
        promptEn: "What is the specialized work called where you attach or detach heavy loads to a crane hook using wire ropes or chains?",
        options: [
            "玉掛け（たまがけ - slinging / rigging loads to cranes）",
            "壁掛け（かべかけ - wall hanging / tapestry）",
            "声掛け（こえかけ - calling out to someone / greeting）",
            "命掛け（いのちがけ - risking one's life / life-or-death）"
        ],
        correct: 0,
        explanation: "In Japanese construction, slinging or rigging loads onto crane hooks is called「玉掛け（たまがけ）」. It requires a mandatory legal qualification (玉掛け技能講習)."
    },

    // ==========================================
    // SECTION 2: CONVERSATION AND EXPRESSION (会話と表現) - 11 Questions
    // ==========================================
    {
        id: "q13",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "朝礼の とき、職長（現場のリーダー）に 今日の 体調と 安全装備の 確認を 報告します。\n実習生：「職長、おはようございます！体調は 良好で、ヘルメットと 安全帯の 着用も 【　　】！」",
        promptEn: "At morning assembly, you report your health status and safety gear confirmation to the foreman.\nIntern: 'Foreman, good morning! My health is excellent, and my helmet and safety harness wearing are 【　　】!'",
        options: [
            "確認いたしました（確認よし！） (kakunin itashimashita [kakunin yoshi!] - confirmed / checked OK!)",
            "忘れて 家に 置いてきました (wasurete ie ni oite kimashita - forgot and left them at home)",
            "面倒くさいので 捨ててしまいました (mendōkusai node sutete shimaimashita - they were bothersome so I threw them away)",
            "誰かに 盗まれて なくなりました (dareka ni nusumarete nakunarimashita - they were stolen by someone and disappeared)"
        ],
        correct: 0,
        explanation: "In construction morning safety checks, reporting readiness clearly:「体調良好、安全帯着用確認いたしました（確認よし！）」is standard protocol."
    },
    {
        id: "q14",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "トラックから 下ろした 木材（資材）を どこに 積み重ねて 置けばいいか、職長に 質問します。\nスタッフ：「職長、トラックから 下ろした この 木材は、どこに 【　　】？」",
        promptEn: "You ask the foreman where to stack and store the lumber (materials) unloaded from the truck.\nStaff: 'Foreman, where 【　　】 this lumber unloaded from the truck?'",
        options: [
            "置けば いいですか (okeba ii desu ka - should I put / store them?)",
            "燃やせば いいですか (moyaseba ii desu ka - should I burn them up?)",
            "川に 投げ捨てれば いいですか (kawa ni nagesutereba ii desu ka - should I throw them away into the river?)",
            "家に 持って帰れば いいですか (ie ni motte kaereba ii desu ka - should I take them home to my house?)"
        ],
        correct: 0,
        explanation: "When asking for instructions on where to place or store construction materials, use conditional advice form:「どこに置けばいいですか / どこに保管したらいいですか」."
    },
    {
        id: "q15",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "現場で 一緒に 働いている 同僚の ヘルメットの 「あご紐（ひも）」 が 緩んで ぶら下がっています。何と 注意しますか。\nスタッフ：「グエンさん、ヘルメットの あご紐が 緩んでいますよ。危ない から しっかり 【　　】！」",
        promptEn: "The 'chin strap' on the helmet of a coworker working with you is loose and dangling. How do you warn them?\nStaff: 'Nguyen, your helmet chin strap is loose! It's dangerous, so please tightly 【　　】!'",
        options: [
            "締めてください (shimete kudasai - fasten / tighten it)",
            "ハサミで 切って捨てってください (hasami de kitte sutete kudasai - cut it off with scissors and throw away)",
            "首に ３回 巻きつけて 首を 絞めてください (kubi ni sankai makitsukete kubi o shimete kudasai - wrap around your neck 3 times and strangle neck)",
            "ヘルメットを 脱いで 裸足で 歩いてください (herumetto o nuide hadashi de aruite kudasai - take off helmet and walk barefoot)"
        ],
        correct: 0,
        explanation: "In construction safety, an unfastened chin strap (あご紐の緩み) means the helmet falls off during a stumble. Warn them:「あご紐をしっかり締めてください」."
    },
    {
        id: "q16",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "足場の 鉄パイプを 止めている ネジ（金具）が 緩んでいるのを 見つけました。放置すると 崩れる 危険があります。同僚に 何と 提案しますか。\nスタッフ：「あそこの 足場の パイプが 緩んでいますね。危険だから すぐに 【　　】！」",
        promptEn: "You noticed that a screw (joint fitting) holding a scaffolding iron pipe is loose. If left alone, it risks collapsing. What do you propose to your coworker?\nStaff: 'That scaffolding pipe over there is loose. It's dangerous, so let's immediately 【　　】!'",
        options: [
            "締め直しましょう (shimenaoshi mashō - re-tighten / fasten it again together)",
            "パイプを 全部 引き抜いて 壊しましょう (paipu o zenbu hikinuitte kowashimashō - pull out all pipes and destroy it)",
            "見なかった ことにして 早く 逃げましょう (minakatta koto ni shite hayaku nigemashō - pretend we didn't see it and run away fast)",
            "緩んだ パイプの上で 跳び箱をして 遊びましょう (yurunda paipu no ue de tobibako o shite asobimashō - play vaulting horse jumps on top of loose pipe)"
        ],
        correct: 0,
        explanation: "When spotting loose scaffolding clamps or bolts, immediate re-tightening (増し締め・締め直し) is required:「すぐに締め直しましょう / 職長に報告しましょう」."
    },
    {
        id: "q17",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "クレーンの 運転手が 「今から 重い 鉄骨を 吊り上げるぞ！吊り荷の 下に入らないで 離れて！」 と 大声で 叫びました。何と 返事をして 行動しますか。",
        promptEn: "The crane operator shouted loudly, 'We're lifting a heavy steel beam now! Don't get under the suspended load, stay clear!' How do you reply and act?",
        options: [
            "「はい！わかりました！」 と 返事をして、【ただちに 吊り荷の 下から 遠くへ 離れる】 ('Yes! Understood!' and IMMEDIATELY STEP FAR AWAY from under the suspended load)",
            "「うるさいな！」 と 文句を 言って、【わざと 吊り荷の 真下に 走っていき 寝転がる】 (Complain 'You're noisy!' and deliberately run directly under suspended load and lie down)",
            "「私に 挑戦する気か！」 と 叫び、【吊り上がった 鉄骨に ジャンプして 飛びつく】 (Scream 'Are you challenging me!' and jump up to grab onto the suspended steel beam)",
            "何も 返事を せずに、【耳を ふさいで その場で 目を 閉じて 立ち尽くす】 (Give no reply, plug your ears, close your eyes on the spot, and stand completely still)"
        ],
        correct: 0,
        explanation: "Never stand under a suspended load (吊り荷の下への立入禁止). Acknowledge warnings immediately and evacuate the drop zone."
    },
    {
        id: "q18",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "クレーンの フックに 荷物を 掛ける 「玉掛け」 の ワイヤーロープの 正しい 結び方が 分かりません。先輩に 何と お願いしますか。\n実習生：「先輩、この ワイヤーの 安全な 掛け方が 分からないので、【　　】。」",
        promptEn: "You don't know the correct knotting/attaching method for the 'slinging' wire rope to hang a load on the crane hook. How do you ask your senior?\nIntern: 'Senior, I don't know the safe way to attach this wire, so could you please 【　　】?'",
        options: [
            "教えて いただけませんか (oshiete itadakemasen ka - teach / show me?)",
            "代わりに 私を クレーンで 吊っていただきませんか (kawari ni watashi o kurēn de tsutte itadakimasen ka - hang me with the crane instead?)",
            "ワイヤーを ハサミで 細かく 切っていただきませんか (waiyā o hasami de komakaku kitte itadakimasen ka - cut the wire into tiny pieces with scissors?)",
            "クレーンを 今すぐ 爆破していただきませんか (kurēn o imasugu bakuha shite itadakimasen ka - blow up the crane right now?)"
        ],
        correct: 0,
        explanation: "When unsure about safety procedures or rigging methods, always ask a senior for instruction using polite respectful form:「教えていただけませんか / ご指導お願いします」."
    },
    {
        id: "q19",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "電車の 事故で 朝の 朝礼（８：００）に １５分 遅刻して 現場に着きました。職長に 会ったら 最初になんと 謝罪と 説明を しますか。\n実習生：「職長、【　　】。電車が 事故で 止まってしまい、遅刻いたしました。」",
        promptEn: "Due to a train accident, you arrived at the site 15 minutes late for the morning assembly (8:00 AM). When you see the foreman, what apology and explanation do you give first?\nIntern: 'Foreman, 【　　】. The train stopped due to an accident, and I arrived late.'",
        options: [
            "大変 申し訳ございません (taihen mōshiwake gozaimasen - I am extremely sorry / accept my sincere apologies)",
            "おはよう！今日も 元気だね (ohayō! kyō mo genki da ne - Morning! You're energetic today too huh)",
            "私が 遅刻したのは 電車の 責任だから 私を 褒めろ (watashi ga chikoku shita no wa densha no sekinin dakara watashi o homero - My lateness is train's fault so praise me)",
            "さあ、今すぐ 私の ために もう一度 朝礼を やり直せ (sā, imasugu watashi no tame ni mō ichido chōrei o yarinaose - Now, redo morning assembly all over again for me right now)"
        ],
        correct: 0,
        explanation: "When arriving late to a construction job site, immediately offer a sincere business apology:「大変申し訳ございません。〜で遅れてしまいました」."
    },
    {
        id: "q20",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "クレーンの 運転手と 合図（合図の笛と手旗）の ルールを 事前に 確認します。\n合図者：「私が 笛を 「ピーッ！」 と 長く 鳴らして 手を 上げたら、すぐに クレーンを 【　　】。」",
        promptEn: "You confirm the signal rules (whistle and hand flag signals) with the crane operator in advance.\nSignalman: 'When I blow the whistle 'Peeeep!' long and raise my hand, please immediately 【　　】 the crane.'",
        options: [
            "停止してください（止めてください） (teishi shite kudasai [tomete kudasai] - stop / halt)",
            "１００キロの スピードで 全速力で 走らせてください (hyakukiro no supīdo de zensoroku de hasirasete kudasai - run at full speed 100 km/h)",
            "空に向かって ロケットのように 飛んでください (sora ni mukatte roketto no yō ni tonde kudasai - fly toward the sky like a rocket)",
            "エンジンを 壊して 大爆発させてください (enjin o kowashite daibakuha sasete kudasai - destroy engine and cause huge explosion)"
        ],
        correct: 0,
        explanation: "In crane signalman operations (玉掛け・クレーン誘導合図), a long whistle blast with a raised hand is the emergency stop signal:「すぐに停止してください（止めてください）」."
    },
    {
        id: "q21",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "夏の 炎天下で 穴を 掘る 作業中、頭が クラクラして めまいが してきました。熱中症の 危険があります。職長に 何と 許可を 求めますか。\n実習生：「職長、めまいがして 体調が 悪いので、木陰の テントで 【　　】？」",
        promptEn: "While digging a hole under scorching summer sun, your head felt dizzy and spinning. There is a danger of heatstroke. How do you ask the foreman for permission?\nIntern: 'Foreman, I feel dizzy and sick, so could I please 【　　】 in the shaded tent?'",
        options: [
            "少し 休憩して 水分を 取っても よろしいでしょうか (sukoshi kyūkei shite suibun o totte mo yoroshii deshō ka - rest a little and drink water?)",
            "このまま 倒れて 死ぬまで 穴を 掘り続けても よろしいでしょうか (kono mama taorete shinu made ana o horitsuzukete mo yoroshii deshō ka - keep digging holes until I collapse and die?)",
            "あなたの ヘルメットを 奪って 投げ捨てても よろしいでしょうか (anata no herumetto o ubatte nagesutete mo yoroshii deshō ka - snatch your helmet and throw it away?)",
            "ショベルカーを 運転して 外の コンビニへ ドライブに行っても よろしいでしょうか (shoberukā o unten shite soto no konbini e doraibu ni itte mo yoroshii deshō ka - drive excavator to outdoor convenience store for a joyride?)"
        ],
        correct: 0,
        explanation: "Never hide symptoms of heatstroke (熱中症の初期症状: めまい、頭痛、吐き気). Immediately report to the foreman and request to rest and hydrate:「休憩して水分補給してもよろしいでしょうか」."
    },
    {
        id: "q22",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "雨が 降ってきて、ビルの 足場の 鉄板が とても 滑りやすくなりました。隣を 歩く 同僚に 何と 声を かけて 注意し合いますか。\nスタッフ：「雨で 足場の 板が 滑りやすくなっているので、走らないで 【　　】！」",
        promptEn: "Rain started falling, and the iron floorplates of the building scaffolding became very slippery. How do you call out to the coworker walking next to you to caution each other?\nStaff: 'The scaffolding plates are slippery from rain, so don't run and 【　　】!'",
        options: [
            "足元に 十分 注意して ゆっくり 歩きましょう (ashimoto ni jūbun chūi shite yukkuri arukimashō - watch your step carefully and walk slowly)",
            "目を 閉じて ダンスを 踊りながら ジャンプしましょう (me o tojite dansu o odorinagara janpu shimashō - close eyes and jump while dancing)",
            "安全帯の 命綱を 外して スケートのように 滑りましょう (anzentai no inochizuna o hazushite sukēto no yō ni suberimashō - unhook safety harness lifeline and slide like skating)",
            "足場の 外側の 空中に 向かって 飛び込みましょう (ashiba no sotogawa no kūchū ni mukatte tobikomimashō - dive out into mid-air outside scaffolding)"
        ],
        correct: 0,
        explanation: "Rainy scaffolding floors (雨天時の足場作業) cause fatal slip-and-fall accidents. Remind coworkers:「足元に十分注意してゆっくり歩きましょう / 転落に気をつけましょう」."
    },
    {
        id: "q23",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "ビルの ３階から ダクト（シューター筒）を通って、１階の 廃材置き場へ 木の 破片や コンクリートの ゴミを 落とします。１階に いる 人に 何と 大声で 叫んで 警告しますか。\n作業員：「【　　】！今から 上から 廃材を 落としますよ！危険だから 離れて！」",
        promptEn: "You are dropping wood scraps and concrete debris from the 3rd floor down a chute duct to the 1st floor waste area. What do you shout loudly to warn people on the 1st floor?\nWorker: '【　　】! I'm dropping debris from above now! It's dangerous so stay back!'",
        options: [
            "下の人、気をつけて（下に いる人、離れて！） (shita no hito, ki o tsukete [shita ni iru hito, hanarete!] - Watch out below! / People below, step away!)",
            "空を 飛ぶ 鳥さん、こっちへ おいで！ (sora o tobu tori-san, kotchi e oide! - Birds flying in sky, come over here!)",
            "お腹が 減りました、お昼ご飯は まだですか！ (onaka ga herimashita, ohirugohan wa mada desu ka! - I'm hungry, is lunch ready yet!)",
            "静かに してください、今から 私は 昼寝を します！ (shizuka ni shite kudasai, imakara watashi wa hirune o shimasu! - Be quiet, I am taking an afternoon nap now!)"
        ],
        correct: 0,
        explanation: "When dropping materials or debris from higher floors (高所からの投下作業), always shout a clear warning to ground workers:「下の人、気をつけて！ / 下にいる人、離れて！」before dropping."
    },

    // ==========================================
    // SECTION 3: LISTENING COMPREHENSION (聴解) - 11 Questions
    // ==========================================
    {
        id: "q24",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】建設現場の 朝礼（８：００）で、所長が 今日の 作業安全について 指示を出しています。今日 ５階の 窓枠工事を する とき、工具（スパナやハンマー）に 何を つけなければなりませんか。",
        promptEn: "[Audio Simulation] At the construction site morning assembly (8:00 AM), the superintendent is giving today's safety instructions. When installing window frames on the 5th floor today, what must be attached to tools (wrenches/hammers)?",
        audioScript: "所長：「おはようございます！今日の 重点 安全目標を 伝えます。本日は ビル 【５階の外壁で 窓枠の 取付け工事】 を 行います。高い 場所からの 【「工具（スパナやハンマー）の 落下事故」】 が 一番 危険です！もし ５階から 鉄の スパナが 落ちたら、下に いる 人の 命に関わります。だから、今日 ５階で 作業する 人は 全員、必ず スパナや ハンマーに 【「落下防止用ロープ（工具用ストラップ・命綱）」 を 確実に 接続して、腰の ベルトに 繋ぐ】 ことを 徹底してください！」",
        audioScriptEn: "Superintendent: 'Good morning! Here is today's primary safety target. Today we will conduct WINDOW FRAME INSTALLATION ON THE 5TH FLOOR OUTER WALL. TOOL FALLING ACCIDENTS (wrenches/hammers) from high places are the most dangerous! If an iron wrench falls from the 5th floor, it threatens the lives of people below. Therefore, everyone working on the 5th floor today MUST ATTACH FALL-PREVENTION ROPES (tool lanyards/tethers) securely to wrenches and hammers and connect them to your waist belts!'",
        options: [
            "工具が 下に 落ちないよう、【「落下防止用ロープ（工具用ストラップ）」 を 確実に つけて 腰ベルトに 繋ぐ】 (To prevent tools falling below, ATTACH FALL-PREVENTION ROPES [tool lanyards] securely and connect to waist belt)",
            "工具を 軽く するため、【スパナや ハンマーの 取っ手を ハサミで 半分に 切って 短く 改造する】 (To make tools lighter, cut wrench and hammer handles in half with scissors to modify them shorter)",
            "工具が 汚れないよう、【スパナ全体に 油や バターを 塗って ヌルヌルに しておいて から 使う】 (To prevent tools getting dirty, coat entire wrench with oil or butter to make it slippery before using)",
            "工具を使わずに、【素手と 自分の 歯だけで ５階の 窓枠の 鉄の ネジを 強く 締め付ける】 (Without using tools, tighten 5th floor iron window frame screws using only bare hands and your own teeth)"
        ],
        correct: 0,
        explanation: "Preventing tool drops from high scaffolds (工具の飛来落下防止): Attaching tool lanyards/tethers (落下防止ワイヤー・ストラップ) is mandatory safety practice."
    },
    {
        id: "q25",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】作業直前の 「KYT（危険予知トレーニング）ミーティング」 で、ショベルカーで 深い 溝を 掘る 作業の 危険について 話し合っています。土の 崩落（崩れること）を 防ぐ ために、溝の中に 何を 設置しますか。",
        promptEn: "[Audio Simulation] In the 'KYT (Hazard Prediction Training) meeting' right before work, workers are discussing hazards in digging a deep ditch with an excavator. To prevent soil collapse, what will they install inside the ditch?",
        audioScript: "職長：「これから 水道管を 埋める ため、ショベルカーで 地面に 【深さ ２メートルの 溝（縦穴）】 を 掘るよ。この 作業で どんな 危険が 予測されるかな？」\n実習生：「はい！深い 溝の 中に 人が入って 作業している とき、周りの 【土の 壁が 崩れて（崩落して）、人が 生き埋めになる 危険】 が あります！」\n職長：「その通り！よし、その 事故を 防ぐ ために、溝を 掘ったら すぐに 【土の 壁が 崩れないように、木や 鉄の 「土止め板（どどめいた・支保工）」 を 溝の 両側に 強く 設置してから】 中に入ろう！ヨシ！」",
        audioScriptEn: "Foreman: 'We're going to dig a 2-METER DEEP DITCH in the ground with an excavator now to bury water pipes. What hazards can be predicted in this task?'\nIntern: 'Yes! When a person enters the deep ditch to work, there is a DANGER THAT SURROUNDING SOIL WALLS COLLAPSE and bury the person alive!'\nForeman: 'Exactly! Okay, to prevent that accident, as soon as we dig the ditch, BEFORE ENTERING LET'S INSTALL WOODEN OR IRON 'SHORING BOARDS' (Dodome-ita / Earth retaining shoring) firmly on both sides so soil walls don't collapse! Yoshi!'",
        options: [
            "土の 壁が 崩れないように、【木や 鉄の 「土止め板（どどめいた・支保工）」 を 溝の 両側に 設置する】 (To prevent soil wall collapse, INSTALL WOODEN OR IRON 'SHORING BOARDS' [earth retaining shoring] on both sides of ditch)",
            "土の 壁を 固める ために、【溝の 中に 大量の 水を 流し込んで プールのように 水没させる】 (To harden soil walls, pour massive water into ditch and submerge it like a swimming pool)",
            "人が 埋まっても すぐ 見つかるように、【作業員の 頭の上で 大きな 赤い 風船を ぶら下げて おく】 (So people can be found fast if buried, hang large red balloons above workers' heads)",
            "土が 崩れる 音が 聞こえないように、【作業員 全員の 耳に 分厚い 耳栓を して 目を 閉じさせる】 (So they can't hear soil collapsing sounds, put thick earplugs in all workers' ears and close eyes)"
        ],
        correct: 0,
        explanation: "Excavation safety (掘削作業の崩壊防止): In trenches deeper than 1.5m, shoring boards/earth retaining shoring (土止め支保工 / 止め板) must be installed to prevent fatal soil cave-ins."
    },
    {
        id: "q26",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】クレーンで ２トンの 鉄骨を 吊り上げる 作業中、合図者（誘導係）が 周りの 作業員に 警告の 笛を 吹いて 叫んでいます。作業員は どこから 外へ 出なければなりませんか。",
        promptEn: "[Audio Simulation] During work lifting a 2-ton steel beam with a crane, the signalman (guide) is blowing a warning whistle and shouting to surrounding workers. Where must workers step out from?",
        audioScript: "合図者：「ピーッ！ピーッ！（笛の音） 周りの みんな、聞いてくれ！今から クレーンで 【重さ ２トンの 鉄骨】 を ビルの ４階へ 吊り上げるぞ！もし ワイヤーが 切れて 鉄骨が 落ちたら 大惨事になる！だから、全員 今すぐ 【黄色と 黒の コーンバー（立ち入り禁止テープ）で 囲まれた 「吊り荷の 下の 危険エリア」 から 完全に 外へ 出て離れてくれ！】 吊り荷の 真下には 絶対に 足を踏み入れるな！」",
        audioScriptEn: "Signalman: 'Peeeep! Peeeep! (Whistle) Everyone around, listen! We are now lifting a 2-TON STEEL BEAM to the building's 4th floor with the crane! If the wire snaps and the beam falls, it's a disaster! Therefore, everyone right now STEP COMPLETELY OUTSIDE AND AWAY FROM THE 'DANGER AREA UNDER THE SUSPENDED LOAD' surrounded by yellow and black cone bars (no entry tape)! NEVER step foot directly under a suspended load!'",
        options: [
            "黄色と 黒の テープで 囲まれた 【「吊り荷の 下の 危険エリア（立入禁止区域）」 から 完全に 外へ 出て離れる】 (STEP COMPLETELY OUTSIDE AND AWAY from the 'Danger Area under the suspended load [No Entry Zone]' surrounded by yellow/black tape)",
            "鉄骨が 落ちてこないか 下から 支えるため、【吊り上がった ２トンの 鉄骨の 真下に 集まって 両手を 上げる】 (To support beam from falling from below, gather directly under suspended 2-ton beam and raise both hands)",
            "クレーンの 運転手を 応援するため、【クレーン車の 屋根の上によじ登って 旗を 振って 踊る】 (To cheer on crane driver, climb up onto roof of crane vehicle and wave flags and dance)",
            "危険エリアの 真ん中に 椅子を 置いて、【お弁当を 広げて のんびりと お昼ご飯を食べ始める】 (Put a chair in middle of danger area, spread out lunch bento, and leisurely start eating lunch)"
        ],
        correct: 0,
        explanation: "Never stand or walk under a moving crane load (吊り荷下への立入禁止徹底). Barricaded drop zones must be evacuated immediately upon whistle warnings."
    },
    {
        id: "q27",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】高さ １０メートルの 足場に 登る 前、先輩が 新人の 「フルハーネス（墜落制止用器具）」 を 点検しています。新人の ハーネスには 何が 足りていませんでしたか。",
        promptEn: "[Audio Simulation] Before climbing a 10-meter high scaffold, a senior is inspecting a newcomer's 'Full Harness' (fall arrest gear). What was missing/wrong with the newcomer's harness?",
        audioScript: "先輩：「おい、今から １０メートルの 足場の上で 作業するんだぞ。登る 前に お前の フルハーネス（安全帯）を チェックさせてくれ。ん？おいおい！背中の 命綱の 【「フック（金具）」 が １個しか ついていないじゃないか！高所作業では、移動中も 常に どちらか １つの フックが 手すりに 掛かっている 「２丁掛け（ダブルランヤード・フック２個）」】 が 法律で 絶対義務なんだよ！すぐに 予備の ダブルフック式ハーネスに 交換してこい！」",
        audioScriptEn: "Senior: 'Hey, you're going to work on a 10-meter scaffold now. Let me check your full harness before you climb. Hmm? Hey hey! YOU ONLY HAVE 1 HOOK (metal fitting) attached to your back lifeline! In high-altitude work, having TWO HOOKS ('2-Cho-Gake' / Double Lanyard) so that at least one hook is constantly attached to handrails even while moving is an absolute legal duty! Go swap it for a spare double-hook harness right now!'",
        options: [
            "命綱の 【「フック」 が １個しか なく、移動中も 常に 接続できる 「２丁掛け（フック２個）」 に なっていなかった】 (He only had 1 lifeline 'hook', and it wasn't a 'Double Lanyard [2 hooks]' that allows constant connection even while moving)",
            "ヘルメットの 色が 【黄色ではなく ピンク色で、現場の ファッショオルールに 合っていなかった】 (His helmet color was pink instead of yellow, and didn't match site fashion rules)",
            "安全靴の 【靴紐が ピンク色の リボンで 結ばれていて、可愛すぎた】 (His safety boot laces were tied with pink ribbons and were too cute)",
            "作業服の 【背中に 大きな 竜（ドラゴン）の 刺繍が 入っていて 派手すぎた】 (His work uniform had a giant dragon embroidery on the back and was too flashy)"
        ],
        correct: 0,
        explanation: "Under Japanese occupational safety law, working at heights over 2m requires a Full-Body Harness with Double Lanyards (フルハーネス型・２丁掛け) so workers never unclip completely when moving around scaffolding."
    },
    {
        id: "q28",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】ショベルカーの 運転手が、地上で 働く 作業員に 注意を お願いしています。ショベルカーが バック（後退）するとき、運転席からは 何が見えませんか。",
        promptEn: "[Audio Simulation] An excavator driver is asking ground workers for caution. When the excavator reverses (backs up), what cannot be seen from the driver's seat?",
        audioScript: "運転手：「地上の 作業員の みんなに お願いだ。私が ショベルカー（油圧ショベル）を 運転して バック（後退・後ろへ進むこと）するとき、運転席の 後ろ側には 【「死角（しかく・ミラーでも 全く 見えない 広い エリア）」】 が あるんだ。だから、もし 私に 用事があって 話しかけたい ときは、絶対に ショベルカーの 後ろや 死角に 立つな！必ず 【私の 目が見える 正面（前）に 立ち、私が エンジンを 止めて 手を 上げるまで】 待ってくれ！」",
        audioScriptEn: "Driver: 'A request to all ground workers. When I am driving the excavator (hydraulic shovel) and reversing (backing up), there is a HUGE BLIND SPOT (Shikaku - wide area completely invisible even in mirrors) behind the driver's cab. Therefore, if you need to talk to me, NEVER stand behind the excavator or in blind spots! Always STAND IN FRONT WHERE I CAN SEE YOUR EYES, and wait until I turn off the engine and raise my hand!'",
        options: [
            "運転席の 後ろ側には 【ミラーでも 全く 見えない 広い 「死角（しかく・見えないエリア）」】 が ある (There is a wide 'BLIND SPOT' [Shikaku - invisible area] behind the cab that cannot be seen at all even in mirrors)",
            "運転席の 後ろ側には 【美味しい ケーキが おいてある 「冷蔵庫」】 が あって 邪魔で見えない (There is a 'refrigerator' with delicious cake behind the cab that blocks the view)",
            "運転手が 【ずっと 目を 閉じて 居眠り運転を している】 から 何も 見えない (Because the driver keeps his eyes closed and drives while sleeping so he sees nothing)",
            "ショベルカーの 窓ガラスが 【全部 黒い ペンキで 塗られていて 真っ暗】 だから 見えない (Because excavator windows are painted completely black with paint and are pitch dark)"
        ],
        correct: 0,
        explanation: "Heavy construction machinery blind spots (重機の死角・後方視界不良): Workers must never enter the rear blind spots of operating excavators or bulldozers without eye contact and engine shutoff."
    },
    {
        id: "q29",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】鉄の パイプを 切る ため、電動工具 「ディスクグラインダー（刃が高速回転する切断機）」 を 使います。職長は 何の 保護具を 必ず ２つ 着用するよう 指示しましたか。",
        promptEn: "[Audio Simulation] To cut iron pipes, workers will use the power tool 'Disc Grinder' (high-speed spinning cutting machine). What 2 protective gear items did the foreman instruct everyone to wear?",
        audioScript: "職長：「これから ディスクグラインダーで 鉄パイプの 切断作業を 行うぞ！いいか、グラインダーの 刃は 毎分 １万回転以上の 高速で 回っている。切断の ときに 【火花（赤い火の粉）が 目に入ったり、金属の 破片が 飛んでくる 危険】 が ある！だから、作業する 人は 必ず 【「保護メガネ（安全ゴーグル）」 と 「分厚い 革手袋（かわてぶくろ）」】 の ２つを 確実に 装着すること！普通の 薄い 軍手（綿の手袋）は 刃に 巻き込まれるから 絶対禁止だぞ！」",
        audioScriptEn: "Foreman: 'We're cutting iron pipes with disc grinders now! Listen, grinder blades spin at high speed over 10,000 RPM. When cutting, THERE IS A DANGER OF SPARKS FLYING INTO EYES OR METAL SHARDS SHATTERING! Therefore, operators MUST securely wear BOTH 'PROTECTIVE GOGGLES (Safety Glasses)' AND 'THICK LEATHER GLOVES'! Normal thin cotton work gloves are strictly banned because they get caught and twisted in spinning blades!'",
        options: [
            "目を 守る 【「保護メガネ（ゴーグル）」】 と、刃に 巻き込まれない 【「分厚い 革手袋（かわてぶくろ）」】 ('PROTECTIVE GOGGLES' to protect eyes, and 'THICK LEATHER GLOVES' that won't get caught in blades)",
            "耳を 飾る 【「金の ピアス」】 と、首を 温める 【「羊毛の ピンク色の マフラー」】 ('Gold earrings' to decorate ears, and a 'pink wool muffler scarf' to warm neck)",
            "お腹を 守る 【「革の ベルト」】 と、足を 飾る 【「おしゃれな サンダル」】 ('Leather belt' to protect stomach, and 'fashionable sandals' to decorate feet)",
            "何も つけずに 【「素手（裸の手）」】 と 【「裸眼（メガネなし）」】 で 気合で 切断する (Wear nothing and cut with fighting spirit using 'bare hands' and 'naked eyes [no glasses]')"
        ],
        correct: 0,
        explanation: "Power tool safety (電動工具・グラインダー作業): Cutting metal requires eye goggles (保護メガネ) against flying sparks and leather gloves (革手袋) to prevent blade entanglement."
    },
    {
        id: "q30",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】夏の 炎天下の 建設現場で、午後の 休憩時間（１５：００）の 放送が 流れました。熱中症を 防ぐ ため、休憩所（詰所）で どう しなければなりませんか。",
        promptEn: "[Audio Simulation] At a construction site under scorching summer sun, the afternoon break (15:00) broadcast played. To prevent heatstroke, what must be done inside the break room (Tsumesho)?",
        audioScript: "所長：「現場の 皆さん、午後３時（１５：００）の 休憩時間です！現在の 屋外の 気温は 【３６度、暑さ指数（WBGT）は ３２ の 「危険レベル」】 に 達しています！今すぐ 作業を 中止し、冷房（エアコン）が 効いた 【休憩所（詰所）に入ったら すぐに ヘルメットと 安全帯を 脱いで 体を 涼しくして】 ください。そして、必ず 【スポーツドリンクや 水と一緒に 「塩分タブレット（塩の飴）」 を ２粒以上 飲んで 水分・塩分補給】 を 徹底してください！」",
        audioScriptEn: "Superintendent: 'Everyone on site, it is 3 PM (15:00) break time! Current outdoor temp is 36°C, and Heat Index (WBGT) has reached 32 'DANGER LEVEL'! Stop work immediately; once you enter the air-conditioned BREAK ROOM, IMMEDIATELY TAKE OFF HELMETS AND HARNESSES TO COOL YOUR BODIES DOWN. And be sure to THOROUGHLY REPLENISH WATER AND SALT BY TAKING AT LEAST 2 SALT TABLETS (salt candies) along with sports drinks or water!'",
        options: [
            "冷房の 効いた 部屋で 【ヘルメットや 安全帯を 脱いで 体を 涼しくし、水分と 「塩分タブレット」 を 補給する】 (In air-conditioned room, TAKE OFF HELMETS/HARNESSES to cool body, and replenish water and 'SALT TABLETS')",
            "休憩時間中も 【分厚い 上着と ヘルメットを かぶった まま、外の 太陽の下で 腕立て伏せを １００回 行う】 (During break time too, wear thick jacket and helmet and do 100 push-ups outside under the sun)",
            "熱い 体を 冷やす ため、【建設用の コンクリートミキサー車の 中の 水槽に 全員で 飛び込んで 泳ぐ】 (To cool hot bodies, everyone jump into water tank inside concrete mixer truck and swim)",
            "お茶や 水は 飲まずに、【冷たい ビールや アルコール飲料を 大量に 飲んで 酔っ払う】 (Don't drink tea or water; drink massive cold beer and alcoholic beverages and get drunk)"
        ],
        correct: 0,
        explanation: "Summer site heatstroke prevention (熱中症予防の鉄則): Cooling the body down in air-conditioned rest rooms and taking both fluids and salt tablets (水分・塩分補給)."
    },
    {
        id: "q31",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】ビルの 基礎工事で、コンクリートポンプ車から 型枠（かたわく）に ドロドロの コンクリートを 流し込んでいます。コンクリートの 中の 空気（気泡）を 抜いて 丈夫にする ため、何という 振動機械を 使いますか。",
        promptEn: "[Audio Simulation] In building foundation work, liquid concrete is being poured into formworks from a concrete pump truck. What vibrating machine is used to remove air bubbles inside the concrete and make it strong?",
        audioScript: "職長：「おい！ポンプ車の パイプから 型枠の 中に コンクリートが 流れ込んできたぞ！そのまま 固めると 中に 空気の 泡（気泡）が 残って、地震に 弱い スカスカの 欠陥ビルになってしまう！だから、流し込んだら すぐに 【棒の 形をした 振動機 「バイブレーター（コンクリート振動機）」 を コンクリートの中に 差し込んで、ブルブルと 振動させて 空気を 完全に 追い出して】 くれ！頼むぞ！」",
        audioScriptEn: "Foreman: 'Hey! Concrete is pouring into the formwork from the pump truck pipe! If hardened as is, air bubbles will remain inside, creating a hollow defective building weak to earthquakes! Therefore, as soon as it pours, INSERT THE ROD-SHAPED VIBRATING MACHINE 'VIBRATOR (Concrete Vibrator)' into the concrete, vibrate it rapidly, and completely expel all air bubbles! Count on you!'",
        options: [
            "棒の 形をした 振動機 【「バイブレーター（コンクリート振動機）」】 を 差し込んで 振動させる (Insert rod-shaped vibrating machine 【'VIBRATOR (Concrete Vibrator)'】 to vibrate and expel air)",
            "家庭用の 【「ヘアドライヤー」】 の 熱い 風を 当てて コンクリートの 表面を 乾かす (Apply hot wind from a domestic 'Hair Dryer' to dry the concrete surface)",
            "キッチンの 【「巨大な スプーンと フォーク」】 を 使って 手作業で カレーのように 混ぜ合わせる (Use a kitchen 'giant spoon and fork' to manually stir and mix like curry)",
            "作業員が 【足で 直接 コンクリートの 沼の中に 飛び込んで 踏みつける】 (Workers jump directly into concrete swamp with feet and stomp around)"
        ],
        correct: 0,
        explanation: "In concrete placing operations (コンクリート打設工事), using a concrete vibrator (バイブレーター / 締め固め機械) to eliminate voids and air bubbles is vital for structural integrity."
    },
    {
        id: "q32",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】作業員が 「荷物を 運びやすく するために、足場の 手すり（柵）を 一時的に 外そう」 と しています。それを見た 職長は どう 注意しましたか。",
        promptEn: "[Audio Simulation] A worker is trying to 'temporarily remove a scaffolding handrail (guardrail) to make carrying materials easier'. Seeing this, how did the foreman warn them?",
        audioScript: "作業員：「よいしょ。この 長い パイプを 運ぶのに、足場の 手すり（柵）が 邪魔だな。少しの間だけ、ボルトを 緩めて 手すりを 勝手に 外しておこうっと。」\n職長：「こらーッ！何をしてるんだ！【足場の 手すりや 安全ネットを、作業員の 勝手な 判断で 取り外す ことは 「絶対禁止（法律違反）」】 だぞ！もし 手すりがない 場所から 仲間が 足を 滑らせたら、１０メートル下へ 墜落して 即死するんだ！絶対に 外すな！」",
        audioScriptEn: "Worker: 'Heave-ho. This scaffolding handrail (guardrail) is in the way for carrying this long pipe. I'll just loosen the bolts and remove the handrail on my own for a little while.'\nForeman: 'Heeyyy! What are you doing! REMOVING SCAFFOLDING HANDRAILS OR SAFETY NETS ON A WORKER'S OWN UNAUTHORIZED JUDGMENT IS STRICTLY PROHIBITED (Law violation)! If a coworker slips from a spot without handrails, they plunge 10 meters down to instant death! NEVER REMOVE THEM!'",
        options: [
            "【足場の 手すりや 安全ネットを 勝手に 取り外す ことは 「絶対禁止（転落の危険）」】 だと 強く 注意した (He strongly warned that REMOVING SCAFFOLDING HANDRAILS OR SAFETY NETS WITHOUT PERMISSION IS STRICTLY PROHIBITED [falling hazard])",
            "「邪魔なら 手すりだけでなく、【足場の 床の 板も 全部 外して 捨ててしまえ】」 と 応援した (He cheered him on saying 'If in the way, remove not only handrails but ALSO ALL SCAFFOLDING FLOOR BOARDS and throw away')",
            "「手すりを 外した 記念に、【２人で 足場の 端っこに 立って 記念写真を 撮ろう】」 と 提案した (He proposed 'To celebrate removing handrails, let's both stand on edge of scaffolding and take a souvenir photo')",
            "職長も 一緒に なって、【鉄の ハンマーで 手すりを 叩き壊して １階へ 投げ落とした】 (The foreman joined in and smashed handrails with iron hammer and threw them down to 1st floor)"
        ],
        correct: 0,
        explanation: "Unauthorized modification of scaffolding (足場の勝手な改造・手すり等の取外し禁止) is illegal under Japanese industrial safety law and is a primary cause of fatal falls."
    },
    {
        id: "q33",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】夕方 １７：００ の 作業終了時、現場の 整理・整頓・清掃（５S活動）の 指示が あります。明日の 事故を 防ぐ ために、床や 通路から 何を 完全に 掃除しますか。",
        promptEn: "[Audio Simulation] At 17:00 work completion, instructions are given for site sorting, arranging, and cleaning (5S activities). To prevent accidents tomorrow, what must be completely swept from floors and walkways?",
        audioScript: "所長：「お疲れ様でした！１７時なので 今日の 作業は 終了です。帰る 前に 【現場の 「５S（整理・整頓・清掃・清潔・しつけ）」】 を 行います。特に 通路や 床の上に 【「釘（くぎ）や 尖った 鉄の ワイヤーの 破片」 が 落ちていると、明日 踏みづけて 足の裏に 刺さる 貫通事故】 に なります！全員で ほうきと 磁石を持って、床に 落ちている 釘や 金属片を １本残らず きれいに 拾って 掃除してください！」",
        audioScriptEn: "Superintendent: 'Good job today! It's 17:00 so today's work is finished. Before leaving, we will conduct SITE '5S (Sort, Set in Order, Shine, Standardize, Sustain)'. Especially on walkways and floors, IF NAILS OR SHARP IRON WIRE SCRAPS ARE LEFT DROPPED, Tomorrow someone will step on them causing puncture accidents piercing boot soles! Everyone take brooms and magnets, cleanly pick up every single nail and metal piece on the floor, and clean up!'",
        options: [
            "足に 刺さる 事故を 防ぐため、床の 【「釘（くぎ）や 尖った 鉄の ワイヤーの 破片」 を きれいに 拾って 掃除する】 (To prevent puncture accidents, CLEANLY PICK UP AND SWEEP ALL 'NAILS AND SHARP IRON WIRE SCRAPS' from floor)",
            "明日の 朝 すぐに 使えるように、【尖った 釘や カッターナイフを 通路の 真ん中に 散らかした ままにして おく】 (Leave sharp nails and cutter knives scattered around middle of walkway so they can be used fast tomorrow morning)",
            "現場の 床を 綺麗にする ため、【床の上に 高級な ペルシャ絨毯（じゅうたん）を 敷き詰めて 香水を まく】 (To make site floor beautiful, spread luxury Persian carpets all over floor and spray perfume)",
            "掃除をする のは 面倒くさいので、【床に 落ちた 釘の上から セメントを 流して 埋めて 隠してしまう】 (Cleaning is bothersome, so pour wet cement over dropped nails on floor to bury and hide them)"
        ],
        correct: 0,
        explanation: "Site 5S housekeeping (現場の５S活動・整理整頓): Removing nails and sharp wire scraps (釘や番線の片付け) prevents stepping puncture injuries (踏み抜き事故)."
    },
    {
        id: "q34",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】実習生が 鉄板を 運ぶ とき、指先を 少し 切って 出血する 「ヒヤリ・ハット（小さなケガ）」 を しました。職長に 報告した とき、職長は どう 指導しましたか。",
        promptEn: "[Audio Simulation] When an intern was carrying an iron plate, he suffered a 'Hiyari-Hatto / Near-Miss (minor injury)' cutting his fingertip slightly and bleeding. When reported to the foreman, how did the foreman instruct him?",
        audioScript: "実習生：「職長、すみません。さっき 鉄板の 鋭い フチで 親指を 少し 切ってしまい、血が出ました。小さな ケガだから 黙っていようと 思ったのですが...」\n職長：「報告してくれて ありがとう！いいか、【例え 小さな 擦り傷や 切り傷でも、絶対に 隠してはいけない！】 傷口から バイ菌が入って 破傷風（病気）になる 恐れがある。すぐに 水道水で 洗って 消毒し、救急箱の 絆創膏（ばんそうこう）を 貼ろう。そして、【なぜ 切ったのか 原因を 「ヒヤリ・ハット報告書」 に 書いて みんなで 共有し、次から 革手袋を ２重に する】 対策を 立てよう！」",
        audioScriptEn: "Intern: 'Foreman, sorry. I just cut my thumb slightly on the sharp edge of an iron plate and bled. It's a small cut so I thought about keeping quiet, but...' \nForeman: 'Thank you for reporting! Listen, NEVER HIDE EVEN SMALL SCRATCHES OR CUTS! Bacteria can enter wounds causing tetanus (serious disease). Let's immediately wash with tap water, disinfect, and apply a bandage from the first aid kit. And LET'S WRITE THE CAUSE ON A 'NEAR-MISS REPORT' TO SHARE WITH EVERYONE, and establish counter-measures like double-layering leather gloves next time!'",
        options: [
            "【小さな ケガでも 隠さずに 消毒・手当てをし、原因を 「ヒヤリ・ハット報告書」 に 書いて 再発防止策を 立てる】 よう 指導した (Instructed to never hide even small cuts, disinfect/treat them, write cause on 'Near-Miss Report', and establish prevention measures)",
            "「小さな ケガぐらいで 報告するな！男なら 【血を なめて 絆創膏も 貼らずに １０時間 連続で 働け！】」 と 怒った (He got angry saying 'Don't report trivial cuts! If you're a man, lick your blood and work 10 hours straight without bandages!')",
            "「指を切った のは お前が バカだからだ」 と 言っって、【実習生を クレーンに 縛り付けて 吊り上げた】 (Saying 'You cut your finger because you're stupid', he tied intern to crane and lifted him up)",
            "ケガをした 実習生に 【「罰金 ５万円を 今すぐ 現金で 会社に 払え」 と 請求書を 突きつけた】 (He thrust an invoice at injured intern demanding 'Pay 50,000 yen fine in cash to company right now')"
        ],
        correct: 0,
        explanation: "Near-Miss reporting (ヒヤリ・ハット報告の徹底): Never hiding minor injuries (隠蔽防止) and investigating causes prevents major lost-time industrial accidents (労働災害)."
    },

    // ==========================================
    // SECTION 4: READING COMPREHENSION (読解) - 11 Questions
    // ==========================================
    {
        id: "q35",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【建設現場 入場時の安全装備（保護具）５大義務】 を読んで 質問に 答えてください。\n\n――― 【建設現場 入場時の 安全保護具 着用規定】 ―――\n当現場に 立ち入る 全ての 労働者・見学者は、自身の 命を守る ため、以下の ５大 安全装備（PPE）を 完全着用すること。１つでも 欠けている 人は ゲートで 入場をお断りする。\n\n1. 【保護帽（ヘルメット）】： 頭部保護のため着用し、あご紐は 指が １本入る 程度の 固さで 確実に 締めること。\n2. 【墜落制止用器具（フルハーネス型安全帯）】： 高さ ２メートル以上の 箇所で 作業する 全員が 着用すること。\n3. 【安全靴（あんぜんぐつ）】： つま先に 鉄板（先芯）が入っており、重い 資材が 足の上に 落ちても 指がつぶれない 専用の 工事靴を 履くこと（※ スニーカーや サンダルは 絶対禁止！）。\n4. 【高視認性ベスト（反射チョッキ）】： 重機の 運転手から よく 見えるよう、蛍光黄色や オレンジ色の 反射ベストを 着ること。\n5. 【保護メガネ・安全手袋】： 作業内容（切断・溶接・資材運搬）に 応じた ゴーグルと 革手袋を 装着すること。\n――――――――――――――――――――――――――\n\n質問：建設現場で 履く 「安全靴（あんぜんぐつ）」 には、なぜ つま先（足の指先）に 硬い 鉄板（先芯）が 入っていますか。",
        promptEn: "Read the 【5 Mandatory PPE Items for Entering Construction Sites】 below and answer the question.\n[Mandatory PPE] All workers/visitors must wear 5 items: 1. Helmet with chin strap fastened. 2. Full-body safety harness (at heights 2m+). 3. Safety Boots (Anzengutsu): MUST WEAR SPECIAL CONSTRUCTION BOOTS WITH IRON PLATES IN TOES SO TOES WON'T BE CRUSHED EVEN IF HEAVY MATERIALS FALL ON FEET (*Sneakers/sandals strictly banned!). 4. High-visibility reflective vest. 5. Goggles & leather gloves.\n\nQuestion: Why do 'Safety Boots (Anzengutsu)' worn on construction sites contain hard iron plates in the toes?",
        options: [
            "重い 木材や 鉄骨などの 【資材が 足の上に 落ちても、足の 指がつぶれて ケガをするのを 防ぐ ため】 (So that even if heavy materials like timber or steel beams fall on feet, TOES WON'T BE CRUSHED and injured)",
            "靴を 非常に 重くして、【作業員が 現場から 走って 逃げ出したり サボったり するのを 防ぐ ため】 (To make boots extremely heavy so workers cannot run away from site or slack off)",
            "冬の 寒い 現場で、【鉄板に 電気を 通して 足の 指先を ヒーターのように 温かく する ため】 (In freezing winter sites, to conduct electricity through iron plates and warm toes like a heater)",
            "歩く たびに 「ガチャン、ガチャン」 と 【大きな 音を 立てて、熊や ネズミを 追い払う ため】 (To make loud clicking noises every time you walk to chase away bears and rats)"
        ],
        correct: 0,
        explanation: "Rule 3 defines Safety Boots (安全靴):「つま先に鉄板（先芯）が入っており、重い資材が足の上に落ちても指がつぶれない専用の工事靴」."
    },
    {
        id: "q36",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【高所作業における「墜落制止用器具（フルハーネス）」使用マニュアル】 を読んで 質問に 答えてください。\n\n――― 【高所墜落防止：フルハーネス型安全帯の 正しい 使用基準】 ―――\n建設現場での 死亡事故の 約４０％は 「高所からの 墜落（落ちること）」 が 原因である。これを 撲滅する ため、以下の ルールを 厳守すること。\n\n◆ 【着用義務の 高さ】： 足場や 屋根など、【「高さ ２メートル（２ｍ）以上」】 で 作業床の 端や 手すりがない 場所で 作業する 場合は、胴ベルト型ではなく、【必ず 肩・胸・ももを 支える 「フルハーネス型」】 を 装着しなければならない。\n\n◆ 【２丁掛け（ダブルランヤード）の 徹底】：\n背中から 伸びる 命綱（ランヤード）の フックは 必ず ２つある （ダブルランヤード）。足場の上を 歩いて 移動する 際も、【常に どちらか １つの フックが 親綱（安全ロープ）や 手すりに 掛かっている 「常時接続（２丁掛け）」】 を 行う こと。フックを ２つとも 外して 移動した 瞬間が 一番 墜落しやすい！\n――――――――――――――――――――――――――\n\n質問：足場など 高さ ２メートル以上の 場所を 歩いて 移動する とき、「２丁掛け（ダブルランヤード）」 の フックは どう しなければなりませんか。",
        promptEn: "Read the 【Full-Body Harness Manual for Working at Heights】 below and answer the question.\n[Fall Prevention Standards] About 40% of construction deaths are from falls. Mandatory Height: At heights 2 METERS (2m) OR HIGHER without handrails, MUST wear Full-Body Harness supporting shoulders/chest/thighs. Double Lanyard Rule (2-Cho-Gake): The lifeline from back has 2 hooks. Even when walking/moving across scaffolding, MUST PERFORM 'CONTINUOUS CONNECTION (2-Cho-Gake)' WHERE AT LEAST ONE HOOK IS CONSTANTLY ATTACHED TO LIFELINES OR HANDRAILS. The moment both hooks are detached while moving is when fatal falls happen most!\n\nQuestion: When walking and moving across scaffolding at heights over 2 meters, what must be done with the '2-Cho-Gake (Double Lanyard)' hooks?",
        options: [
            "移動中も、【常に どちらか １つの フックが 親綱や 手すりに 掛かっている 「常時接続」】 を 行うこと (Even while moving, perform 'CONTINUOUS CONNECTION' where at least one hook is constantly attached to lifelines/handrails)",
            "歩きやすく するため、【移動中は フックを ２つとも 外して 自分の 腰の ベルトに 引っ掛けておく】 こと (To make walking easier, while moving detach both hooks and hook them onto your own waist belt)",
            "仲間と 絆を 深める ため、【自分の フックを 隣を 歩く 同僚の ズボンの ベルトに 引っ掛けて 歩く】 こと (To deepen bonds with friends, hook your own hook onto the pants belt of coworker walking next to you)",
            "フックを 【足場の 空中に 向かって ブンブンと 振り回しながら 走って 移動する】 こと (Run and move across scaffolding while swinging hooks around wildly into mid-air)"
        ],
        correct: 0,
        explanation: "The Double Lanyard rule (２丁掛けの徹底) requires continuous connection (常時接続) so a worker is never 100% unhooked when moving at heights."
    },
    {
        id: "q37",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【クレーン・玉掛け作業の安全ゴールデンルール】 を読んで 質問に 答えてください。\n\n――― 【移動式クレーンおよび 玉掛け誘導の 絶対遵守事項】 ―――\nクレーンによる 吊り上げ作業は、資材の 落下や クレーンの 転倒など、大事故に 直結する。以下の ３原則を 厳守せよ。\n\n1. 【吊り荷の 下への 立入禁止の 徹底】 吊り上げている 鉄骨や コンクリートパネルの 真下 および 落下予想範囲は 【「立入禁止区域」 とし、カラーコーンと バーで 囲む】 こと。例え １秒でも 吊り荷の 真下に 人が入る ことを 絶対に 禁止する。\n2. 【合図者の １人指定】 クレーン運転手へ 合図を送る 人（誘導係）は 【必ず 現場で 「１人だけ」 指定する】 こと。複数の 人間が 勝手に 笛を 吹いたり 手を 振ったり すると、運転手が 混乱して 事故になる。\n3. 【ワイヤーロープの 事前点検】 玉掛けに 使う ワイヤーの 針金が 切れかけていたり、サビて 傷んでいる 場合は、【絶対に 使用せず、ただちに 新品に 交換し、古い ロープは 切断して 破棄する】 こと。\n――――――――――――――――――――――――――\n\n質問：クレーンの 運転手へ 合図（笛や手旗の誘導）を送る 人は、現場で どのように 決めなければなりませんか。",
        promptEn: "Read the 【Crane & Slinging Safety Golden Rules】 below and answer the question.\n[Crane 3 Golden Rules] 1. No entry under suspended loads: Area under lifted steel beams/panels MUST BE A 'NO ENTRY ZONE' surrounded by cones/bars. Entering under suspended loads even for 1 second is banned. 2. Designate ONLY ONE Signalman: The person sending signals to crane driver MUST BE DESIGNATED AS 'ONLY ONE PERSON' on site. If multiple people freely blow whistles or wave hands, driver gets confused causing accidents! 3. Inspect wire ropes: If slinging wires are frayed or rusted, never use; replace immediately with new ones and destroy old ropes.\n\nQuestion: How must the person who sends signals (whistle/flag guidance) to the crane operator be designated on the construction site?",
        options: [
            "運転手が 混乱するのを 防ぐ ため、【必ず 現場で 「１人だけ」 を 指定して 合図を行わせる】 (To prevent confusing driver, MUST DESIGNATE 'ONLY ONE PERSON' on site to conduct signals)",
            "全員で 一斉に 誘導する ため、【現場に いる 作業員 ３０人が 全員で 勝手に 笛を 吹いて 叫ぶ】 (To guide all together, all 30 workers on site freely blow whistles and scream at same time)",
            "現場の 人は 誰も 誘導せず、【近所を 通りかかった 小学生の 子供に 旗を 振って 誘導させる】 (No site workers guide; let an elementary school child walking by in neighborhood wave flags to guide)",
            "クレーンの 運転手が 【自分の 目を 閉じて、第六感（テレパシー）だけで 自由に レバーを 動かす】 (Crane driver closes his eyes and moves levers freely using only 6th sense telepathy)"
        ],
        correct: 0,
        explanation: "Rule 2 states:「クレーン運転手へ合図を送る人は【必ず現場で「１人だけ」指定する】こと。複数の人間が勝手に笛を吹いたりすると...事故になる」."
    },
    {
        id: "q38",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【建設機械（ショベルカー・ブルドーザー）の周辺安全規定】 を読んで 質問に 答えてください。\n\n――― 【重機・車両系建設機械 接触事故・はされ事故 防止基準】 ―――\n油圧ショベル（ショベルカー）、ブルドーザー、ダンプカーなどの 重機が 稼働している エリアは 極めて 危険である。\n\n◆ 【立入禁止措置と 誘導員の 配置】：\n重機が 旋回（ぐるりと 回ること）する アームの 範囲内は 【「立入禁止」】 とし、トラロープ（黄黒ロープ）で 囲むこと。また、重機が バック（後退）する 際は、必ず 後方に 【誘導員（合図係）を 配置し、笛の 合図で ゆっくり 後退させる】 こと。\n\n◆ 【運転手と 地上作業員の コミュニケーション ルール】：\n地上の 作業員が 重機の 運転手に 話しかけたり、重機の すぐ 近くを 通行したい 場合は、【① 必ず 運転手の 視界に入る 正面に 立ち、目と目を 合わせる（アイコンタクト）。 ② 運転手が 「重機の エンジンを 完全に 停止し、安全レバーを ロックして 手を 上げた」 のを 確認してから】、初めて 重機の 近くに 近づいて よい。\n――――――――――――――――――――――――――\n\n質問：地上の 作業員が、動いている ショベルカーの 運転手に 話しかけたい とき、どう なってから 重機に 近づいて よいですか。",
        promptEn: "Read the 【Heavy Machinery Peripheral Safety Rules】 below and answer the question.\n[Preventing Heavy Machinery Contact/Crush Accidents] Operating areas of excavators, bulldozers, dump trucks are hazardous. Barricades & Guides: Excavator swinging arm radius is NO ENTRY surrounded by yellow/black rope. When reversing, MUST PLACE A GUIDE IN REAR TO GUIDE BACKWARD SLOWLY WITH WHISTLE. Communication Rule: If ground worker wants to talk to driver or pass near machine: 1) Stand in front where driver sees you and make eye contact. 2) YOU MAY APPROACH ONLY AFTER CONFIRMING THAT THE DRIVER HAS 'COMPLETELY STOPPED THE ENGINE, LOCKED THE SAFETY LEVER, AND RAISED HIS HAND'.\n\nQuestion: When a ground worker wants to talk to the driver of a moving excavator, after what condition is it safe to approach the machine?",
        options: [
            "運転手が 【「重機の エンジンを 完全に 停止し、安全レバーを ロックして 手を 上げた」】 のを 確認してから (Only after confirming that the driver has 'COMPLETELY STOPPED THE ENGINE, LOCKED THE SAFETY LEVER, AND RAISED HIS HAND')",
            "ショベルカーが 高速で 動いている 最中に、【後ろから 走って 近づいて キャタピラに 飛び乗ってから】 (While excavator is moving at high speed, run up from behind and jump onto moving caterpillar tracks)",
            "ショベルカーの 鉄の アームが 回ってきた とき、【自分の ヘルメットで 強く アームを 突き飛ばしてから】 (When iron excavator arm swings around, headbutt and push iron arm away hard with your helmet)",
            "何も 合図せずに、【ショベルカーの バケット（シャベルの 爪）の 真下に もぐり込んで 叫んでから】 (Without signaling, crawl directly underneath the iron excavator bucket claw and scream)"
        ],
        correct: 0,
        explanation: "Communication protocol with heavy machinery (重機運転手との合図・接近ルール): Never approach until the operator acknowledges, stops the engine, and locks the hydraulic safety lever (安全レバーロック確認)."
    },
    {
        id: "q39",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【ヒヤリ・ハット（危険予知）報告のルール】 を読んで 質問に 答えてください。\n\n――― 【ハインリッヒの法則と 「ヒヤリ・ハット」 報告書の 提出義務】 ―――\n安全管理の世界には 「ハインリッヒの法則」 が ある。それは、【「１件の 重大な 死亡・重傷事故」 の 裏には、「２９件の 軽傷事故」 が あり、さらに その 裏には 「３００件の ヒヤリ・ハット（ケガはしなかったが、ヒヤッとしたり ハッとした 危険な 経験）」 が 隠れている】 という 法則である。\n\n◆ 【報告の 目的と ルール】：\n当現場では、この 「３００件の ヒヤリ・ハット」 を 早期に 発見して 改善することで、重大事故を ゼロにする。\n例え ケガが なかった 場合でも、\n・「足場の 階段で 足を 滑らせて 転びそうになった（ヒヤリ）」\n・「上から 落ちてきた ボルトが 肩の 横を かすめて ハッとした」\nなどの 危険を 経験したら、【絶対に 「ケガがないから いいや」 と 隠さず、当日の うちに 「ヒヤリ・ハット報告書」 に 記入し、安全掲示板で 全員に 共有する】 こと。報告した 人は 評価され、表彰される！\n――――――――――――――――――――――――――\n\n質問：「ヒヤリ・ハット（ケガは しなかったが、ヒヤッとしたり ハッとした 危険な 経験）」 を した とき、なぜ 報告書に 書いて 全員で 共有しなければなりませんか。",
        promptEn: "Read the 【Near-Miss 'Hiyari-Hatto' Reporting Rules】 below and answer the question.\n[Heinrich's Law & Near-Miss Duty] In safety management, Heinrich's Law states: Behind '1 major fatal/serious accident', there are '29 minor injury accidents', and behind those lie '300 NEAR-MISSES (Hiyari-Hatto: experiences where you didn't get injured, but felt startled or chilled by a near-accident)'. Purpose & Rule: By finding and fixing these 300 Near-Misses early, we make major accidents ZERO. Even if NO INJURY occurred (e.g., almost slipping on scaffolding stairs, or a falling bolt brushing past your shoulder), NEVER HIDE IT THINKING 'I WASN'T HURT SO WHATEVER'. You must fill out a Near-Miss Report the same day and share it on the safety board! Reporters are praised and rewarded!\n\nQuestion: When you experience a 'Near-Miss (Hiyari-Hatto - near accident without injury)', why must you write a report and share it with everyone?",
        options: [
            "ヒヤリ・ハットを 早期に 発見して 改善策を 共有することで、【将来の 「重大な 死亡・重傷事故」 を 未然に 防いで ゼロに するため】 (By finding near-misses early and sharing fixes, TO PREVENT FUTURE 'MAJOR FATAL/SERIOUS ACCIDENTS' beforehand and make them zero)",
            "報告書を 書いた 作業員の お給料を 【罰金として 半分に 減らして、現場から 追い出す 理由に するため】 (To use report as a reason to reduce reporter's salary in half as a fine and kick them off site)",
            "現場の 掲示板に 【面白い ギャグや スリル満点の 冒険小説として 貼り出して みんなで 大笑いする ため】 (To post on site bulletin board as a funny gag or thrilling adventure novel for everyone to laugh at)",
            "紙の 報告書を たくさん 印刷して、【冬の 寒い 日に たき火の 燃料にして 暖をとる ため】 (To print lots of paper reports and burn them as campfire fuel on cold winter days to get warm)"
        ],
        correct: 0,
        explanation: "The purpose of Near-Miss reporting (ヒヤリ・ハット報告の目的) based on Heinrich's Law is eliminating unsafe conditions before they escalate into major accidents (重大災害の未然防止)."
    },
    {
        id: "q40",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【足場（あしば）上での作業禁止事項】 を読んで 質問に 答えてください。\n\n――― 【労働安全衛生規則： 足場作業における 禁止・中止規定】 ―――\n高所足場上での 作業は 転落・資材落下リスクが 高いため、以下の 状況および 行為を 禁止する。\n\n1. 【悪天候時の 作業中止基準】：\n以下の 天候に 達した 場合は、足場からの 転落や 資材の 飛散の 危険があるため、【ただちに 屋外の 足場作業を 全面中止】 しなければならない！\n・強風　： 【「１０分間の 平均風速が １０メートル（１０ｍ/ｓ） 以上」】 の 強風\n・大雨　： 【「１回の 降雨量が ５０ミリメートル 以上」】 の 激しい 雨\n・大雪　： 【「１回の 降雪量が ２５センチメートル 以上」】 の 雪\n\n2. 【資材・工具の 投げ下ろし禁止】：\n足場の上から 地上へ、あるいは 地上から 足場の上へ、【木材、パイプ、工具などの 資材を 「投げて 渡すこと（投げ下ろし・投げ上げ）」 は 法律で 絶対禁止】 されている！資材の 上下移動は、必ず 「クレーン」 または 「ロープと 滑車（ホイスト）」 を 使って 安全に 昇降させる こと。\n――――――――――――――――――――――――――\n\n質問：足場の上から 地上の 仲間に 向かって、木材や パイプや 工具を 【投げて 下ろす（投げ下ろし）】 ことについて、正しい ルールは どれですか。",
        promptEn: "Read the 【Prohibited Actions on Scaffolding】 below and answer the question.\n[Scaffolding Prohibitions] 1. Weather Stop Standards: Must STOP ALL OUTDOOR SCAFFOLDING WORK IMMEDIATELY under these weather conditions due to fall/wind hazards: Strong wind: Average wind speed of 10 meters/second (10m/s) or more over 10 mins. Heavy rain: Rainfall of 50mm+. Heavy snow: Snowfall of 25cm+. 2. Ban on throwing materials/tools: THROWING MATERIALS OR TOOLS (timber, pipes, wrenches) DOWN FROM SCAFFOLDING TO GROUND, OR THROWING UP FROM GROUND TO SCAFFOLDING, IS STRICTLY PROHIBITED BY LAW! To move materials up and down, ALWAYS use a 'Crane' or 'Ropes and pulleys (hoists)' to lower/raise them safely.\n\nQuestion: What is the correct rule regarding throwing materials, pipes, or tools down from the scaffolding to coworkers on the ground?",
        options: [
            "資材や 工具を 投げて 渡すことは 【法律で 「絶対禁止（投げ下ろし禁止）」 であり、必ず クレーンや ロープと 滑車を 使って 下ろす】 (Throwing materials/tools is STRICTLY PROHIBITED BY LAW; MUST use cranes or ropes and pulleys to lower them)",
            "下に いる 仲間が 【「キャッチボールの グローブ」 を はめて いれば、どんなに 重い 鉄パイプでも 自由に 投げて 下ろして よい】 (As long as coworker below wears baseball catching gloves, you can freely throw down any heavy iron pipe)",
            "足場の 【高さが ５０メートル以上の 超高層ビルであれば、下まで 遠いので 力を 込めて 思いきり 投げて よい】 (If scaffolding is on a 50m+ skyscraper, it's far to the ground so you can throw with all your might)",
            "職長が 【見ていない お昼休みの 時間帯であれば、何個でも 連続で 地面に向かって 投げ落として よい】 (During lunch break when foreman isn't watching, you can throw down as many pieces as you want to the ground)"
        ],
        correct: 0,
        explanation: "Article 563 of the Ordinance on Industrial Safety and Health (安衛則第５６３条): Throwing materials from scaffolding (投下・投上の禁止) is illegal; ropes, hoists, or cranes must be used."
    },
    {
        id: "q41",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【電動工具（グラインダー・丸ノコ）の点検と安全使用表】 を読んで 質問に 答えてください。\n\n――― 【電動工具 安全取扱基準表】 ―――\nディスクグラインダーや 電動丸ノコは、わずかな 油断で 指の 切断や 失明に至る 重大事故を 起こす。以下の ルールを 遵守せよ。\n\n1. 【使用前の コード・刃の 点検】 コンセントに プラグを 差し込む 前に、電気コードに 「傷や 破れ」 が ないか、刃に 「ヒビや 欠け」 が ないか 確認すること。コードが 破れていると 感電死する。\n2. 【安全カバー（接触予防装置）の 装着義務】 回転する 刃の 上を 覆う 【「安全カバー」 を 外して 作業することは 絶対禁止】 である！「カバーがあると 見えにくいから」 と 外した 作業員は 即日 現場入場停止とする。\n3. 【手袋の 選択ルール】：\n・ボール盤や 丸ノコなど 【「回転する 刃物の 近く」】 で 作業する 際は、【薄い 綿の 軍手（ぐんて）や 手編みの 手袋は、繊維が 刃に 巻き込まれて 指を引きちぎられる ため 「使用禁止（素手または 密着した 革手袋を 使用）」】 とする！\n――――――――――――――――――――――――――\n\n質問：電動丸ノコなどの 「回転する 刃物」 を 使う とき、【安全カバー（接触予防装置）】 について 守らなければならない ルールは どれですか。",
        promptEn: "Read the 【Power Tool Grinder/Circular Saw Safe Use Table】 below and answer the question.\n[Power Tool Standards] Disc grinders & circular saws cause severed fingers or blindness if careless. 1. Pre-use inspect cords and blades before plugging in. 2. Safety Cover Duty: WORKING WITH THE 'SAFETY COVER' (blade contact guard) REMOVED OVER SPINNING BLADES IS STRICTLY PROHIBITED! Workers who remove covers saying 'it's hard to see' are banned from site immediately. 3. Glove Rule: Near spinning blades (saws/drills), THIN COTTON WORK GLOVES (Gunte) OR KNITTED GLOVES ARE PROHIBITED because fibers get caught in blades tearing off fingers! Use bare hands or tight leather gloves.\n\nQuestion: When using 'spinning blades' like electric circular saws, what rule must be observed regarding the 'Safety Cover' (contact prevention guard)?",
        options: [
            "回転刃の 上を 覆う 【「安全カバー」 を 外して 作業することは 絶対禁止（必ず 装着して 使う）】 (WORKING WITH THE 'SAFETY COVER' REMOVED IS STRICTLY PROHIBITED [must always use with cover attached])",
            "切る 場所が 【よく 見えて 作業が 早く なるから、安全カバーは 最初から ハサミで 外して 捨てておく】 (Since removing it makes cutting easier to see and faster, remove safety cover with scissors and throw away from start)",
            "安全カバーの 代わりに、【自分の 古い ヘルメットや ペットボトルを テープで 貼り付けて 改造して 使う】 (Instead of safety cover, modify and attach your own old helmet or plastic bottle with tape to use)",
            "安全カバーを 【隣で 働いている 同僚の 頭の上に かぶせて、おもしろい 帽子にして 遊ぶ】 (Put the safety cover on top of coworker's head working next to you to play with as a funny hat)"
        ],
        correct: 0,
        explanation: "Rule 2 mandates:「回転する刃の上を覆う【「安全カバー」を外して作業することは絶対禁止】である！」."
    },
    {
        id: "q42",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【建設現場の熱中症予防と「WBGT（暑さ指数）」管理基準】 を読んで 質問に 答えてください。\n\n――― 【夏季 現場作業における WBGT（暑さ指数）基準表】 ―――\n当現場では、気温・湿度・日差しを 総合計算した 【「WBGT（暑さ指数）」】 の 数値に基づき、以下の 休憩・作業制限を 自動発令する。\n\n◆ 【WBGT ２５ ～ ２８ （警戒レベル）】： １時間ごとに １０分間の 水分補給休憩を 行う。\n◆ 【WBGT ２８ ～ ３１ （厳重警戒レベル）】： １時間ごとに １５分間の 休憩。炎天下での 重労働を 避ける。\n◆ 【WBGT ３１ 以上 （危険・原則運動中止レベル）】：\n熱中症による 死亡リスクが 極めて 高い！現場内に 設置した パトライト（赤色回転灯）を 回し、【「屋外の 日なたでの 重労働（穴掘りや 資材運搬など）は 原則 全面中止！」】 とする。作業を行う 場合は、冷房服（ファン付き作業着）を 義務付け、【３０分 作業したら １５分 冷房部屋で 休憩】 させなければならない。\n――――――――――――――――――――――――――\n\n質問：現場の 暑さ指数 【「WBGT が ３１ 以上 （危険レベル）」】 に 達した場合、屋外の 日なたでの 重労働（穴掘りなど）は どう なりますか。",
        promptEn: "Read the 【Site Heatstroke Prevention & WBGT Heat Index Standards】 below and answer the question.\n[Summer WBGT Standards] Our site enforces automatic break/work restrictions based on WBGT (Heat Index combining temp/humidity/sun): WBGT 25-28 (Caution): 10-min hydration break every hour. WBGT 28-31 (Severe Caution): 15-min break every hour; avoid heavy labor under sun. WBGT 31 OR HIGHER (DANGER - PRINCIPLE WORK STOP LEVEL): Extreme risk of heatstroke death! Red revolving sirens on site spin, and 'HEAVY LABOR IN OUTDOOR SUNLIGHT (digging, carrying materials) IS IN PRINCIPLE TOTALLY STOPPED!' If work must be done, cooling fan jackets are mandatory, requiring 15 mins air-conditioned rest for every 30 mins work.\n\nQuestion: When the site heat index reaches 【'WBGT 31 OR HIGHER (Danger Level)'】, what happens to heavy labor in outdoor sunlight (digging holes, etc.)?",
        options: [
            "熱中症の 死亡リスクが 高いため、【「屋外の 日なたでの 重労働は 原則 全面中止！」】 と なる (Because heatstroke death risk is high, 'HEAVY LABOR IN OUTDOOR SUNLIGHT IS IN PRINCIPLE TOTALLY STOPPED!')",
            "暑さに 慣れる 絶好の チャンスなので、【普段の ２倍の スピードで 休まずに １０時間 連続で 穴を 掘る】 (Great chance to get used to heat, so dig holes at double normal speed for 10 hours straight without resting)",
            "太陽の 光を 全身で 浴びる ため、【作業着と ヘルメットを 全て 脱いで 海水浴のように 水着姿で 働く】 (To bathe in sunlight, strip off uniform and helmet and work in swimsuit like at the beach)",
            "暑さを 忘れる ため、【現場の スピーカーで 大音量の ロック音楽を 流して みんなで 踊りながら 施工する】 (To forget heat, blast loud rock music from site speakers and build while everyone dances)"
        ],
        correct: 0,
        explanation: "When WBGT heat index exceeds 31 (暑さ指数３１以上・危険), heavy outdoor manual labor in direct sunlight must be halted in principle (原則中止) under SSW construction labor standards."
    },
    {
        id: "q43",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【新規入場者教育（現場初日の講習）の案内】 を読んで 質問に 答えてください。\n\n――― 【新規入場時等 安全衛生教育のご案内】 ―――\n日本の 建設現場で 初めて 働く 全ての 作業員（日本人・外国人問わず）は、労働安全衛生法に基づき、作業初日に 【「新規入場者教育（しんきにゅうじょうしゃきょういく）」】 を 受講することが 義務付けられています。\n\n◆ 【受講の 日時と 場所】：\n作業初日の 朝、【「午前 ７：３０ （朝礼の ３０分前）」】 に、現場事務所の １階 会議室に 集合してください。\n◆ 【教育の 内容（約３０分間）】：\n① 現場の ルール、立入禁止区域、トイレ・喫煙所の 場所の 説明\n② 【「血圧の 測定」 および 健康状態の 確認】 （※ 血圧が 異常に 高い 人は 当日 作業できません）\n③ 緊急避難場所と 消火器の 案内の 確認\n④ 【「新規入場者 誓約書（ルールを守る 誓いの 紙）」 への ご本人による 署名（サイン）】\n――――――――――――――――――――――――――\n\n質問：新しい 建設現場で 初めて 働く 初日、作業員は 朝 何時に どこへ 行って 「新規入場者教育」 を 受けなければなりませんか。",
        promptEn: "Read the 【Newcomer Safety Induction Notice】 below and answer the question.\n[Newcomer Safety Education Notice] All workers (Japanese or foreign) working for the first time at a Japanese construction site are required by Industrial Safety Law to attend 'Newcomer Induction Education (Shinki Nyūjōsha Kyōiku)' on their first day. Time & Place: On the morning of your first day, gather at the 1st floor conference room of the Site Office at '7:30 AM (30 minutes before morning assembly)'. Contents (30 mins): 1) Site rules, no entry zones, toilets/smoking areas. 2) 'Blood pressure check' and health check (*abnormally high blood pressure cannot work). 3) Evacuation & fire extinguishers. 4) 'Signing the Newcomer Safety Pledge' by your own hand.\n\nQuestion: On the first day working at a new construction site, at what time in the morning and where must a worker go to receive 'Newcomer Induction Education'?",
        options: [
            "朝礼の ３０分前である 【「午前 ７：３０」 に、現場事務所の １階 会議室】 に 行く (Go to the 1st floor conference room of the Site Office at '7:30 AM' which is 30 mins before morning assembly)",
            "お昼休みの 終わる 【「午後 １３：００」 に、現場の 近くの コンビニの 駐車場】 に 行く (Go to convenience store parking lot near site at '13:00 PM' when lunch break ends)",
            "夜の 閉店時間である 【「深夜 ２３：００」 に、所長の 自宅の アパートの 玄関】 に 行く (Go to entrance of superintendent's home apartment at '23:00 PM' late night)",
            "時間は 関係なく 【「自分の 好きな 時間」 に、ビルの 屋上の クレーン車の 運転席】 に 行く (Go to crane cab on building rooftop at 'any time you like' regardless of schedule)"
        ],
        correct: 0,
        explanation: "The notice specifies:「作業初日の朝、【「午前７：３０（朝礼の３０分前）」】に、現場事務所の１階会議室に集合」."
    },
    {
        id: "q44",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【台風・大雨時の建設現場 緊急点検手順】 を読んで 質問に 答えてください。\n\n――― 【緊急防災マニュアル： 台風接近に伴う 現場養生手順】 ―――\n大型台風の 接近に伴い、本日 １６：００ までに 全作業員で 以下の 防災・養生（ようじょう）作業を 完了させる こと。\n\n1. 【足場シートの たぐり寄せ（風対策）】 足場の 外側に 張られている 「メッシュシート（緑や青の網）」 が 風をはらんで 足場ごと 倒壊するのを 防ぐため、【全ての メッシュシートの 紐を 解いて、パイプの 柱に ぐるぐると 巻きつけて 縛り付け、風が 通り抜けるように する（たぐり寄せ・折りたたみ）】 こと！\n2. 【掘削溝の 水没・崩落防止】 ショベルカーで 掘った 溝の 周りに 土のやまなみを 作り、【ブルーシートを 被せて 土のう袋（砂が入った袋）で 重石をして、雨水で 土の壁が 崩れるのを 防ぐ】 こと。\n3. 【仮設電源の 遮断】 現場の 仮設分電盤の メインブレーカーを 【「OFF（切）」】 にし、漏電火災を 防止すること。\n――――――――――――――――――――――――――\n\n質問：台風の 強い 風が 来る 前に、ビルの 足場の 外側に 張られている 「メッシュシート（網シート）」 は どう しなければなりませんか。",
        promptEn: "Read the 【Typhoon Emergency Site Reinforcement & Inspection】 below and answer the question.\n[Emergency Typhoon Manual] With a major typhoon approaching, all workers finish emergency reinforcement (Yōjō) by 16:00 today: 1. Scaffolding Sheet Folding (Wind Measure): To prevent the outer scaffolding 'mesh sheets' from catching wind and collapsing the entire scaffold, UNTIE ALL MESH SHEETS, WRAP AND TIE THEM AROUND THE PIPE COLUMNS SO WIND BLOWS FREELY THROUGH THEM (folding/furling back)! 2. Excavation Trench Protection: Cover dug ditches with blue tarps weighted down with sandbags so rainwater doesn't collapse soil walls. 3. Power Shutoff: Turn site main electrical circuit breaker to 'OFF' to prevent electrical short fires.\n\nQuestion: Before typhoon strong winds arrive, what must be done with the 'mesh sheets' stretched around the outside of the building scaffolding?",
        options: [
            "風で 足場が 倒れるのを 防ぐため、【紐を 解いて パイプの 柱に 巻きつけて 縛り、風が 通り抜けるように する（たぐり寄せ）】 (To prevent scaffolding collapse from wind, UNTIE AND WRAP AROUND PIPE COLUMNS so wind blows through [furling back])",
            "雨水が 入らないように、【さらに 上から 分厚い ベニヤ板と 鉄の 板を １０重に 釘で 打ち付けて 密閉する】 (To keep rain out, nail down 10 thick plywood and iron plates over them to seal completely airtight)",
            "シートを ハサミで 【細かい サイコロ状に 切り刻んで、隣の ビルの 屋上に 向かって 投げ捨てる】 (Cut sheets into tiny dice shapes with scissors and throw them onto roof of neighboring building)",
            "シートの 表面に 【ペンキで 巨大な 「台風さん、あっち行け！」 という 文字を 書いて お祈りする】 (Write giant words 'Typhoon, go away!' on sheet surface with paint and pray)"
        ],
        correct: 0,
        explanation: "Rule 1 mandates folding/furling back scaffolding mesh sheets (足場シートのたぐり寄せ・折りたたみ) during typhoons so wind gusts do not blow down the scaffold tower."
    },
    {
        id: "q45",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【建設業「技能検定・安全衛生責任者」資格取得奨励制度】 を読んで 質問に 答えてください。\n\n――― 【外国人建設技能者 資格取得支援および キャリアアップ手当 の ご案内】 ―――\n当社では、特定技能（SSW）として 働く 皆さんが 一生 モノの 技術と 日本の 国家資格を 取得し、将来 現場の リーダー（職長）として 活躍できるよう、以下の 奨励制度を スタートします！\n\n◆ 【対象となる 資格・講習】：\n・「玉掛け技能講習」 （※ クレーンに 荷物を 掛ける 資格）\n・「足場の組立て等作業主任者」\n・「職長・安全衛生責任者教育」\n・「建設技能検定 ３級・２級」\n\n◆ 【会社の ３大 サポート特典】：\n① 【受験料・講習費用】： 会社が 【全額（１００％） 会社負担で 支給】 します！（自分のお金は ０円で OK）\n② 【試験日の 給料】： 試験を受ける 日は 「出勤（仕事）」 と 同じ 扱いになり、【お給料が １日分 全額 出ます】！\n③ 【合格お祝い キャリアアップ手当】： 見事 試験に 合格して 資格を 取得した 方には、翌月から 【お給料に 「毎月 １０,０００円 （年間 １２万円）」 の 資格手当が ずっと 上乗せ（アップ）】 されます！みんなで チャレンジしましょう！\n――――――――――――――――――――――――――\n\n質問：この 会社の 支援制度を 使って 「玉掛け」 や 「足場の作業主任者」 の 資格試験に 合格すると、翌月から お給料は どう なりますか。",
        promptEn: "Read the 【Construction Skill Test & Safety Leader Certification Incentive】 below and answer the question.\n[Support & Career Up Allowance Notice for Foreign Construction Workers] To help SSW workers gain lifelong skills/national licenses and become site foremen, our company starts an incentive program! Eligible Licenses: Slinging skill course (Tamagake), Scaffolding chief, Foreman safety leader, Construction skill test Grade 3/2. Company's 3 Big Support Benefits: 1) Exam & course fees: COMPANY PAYS 100% IN FULL (0 yen out of pocket). 2) Exam day salary: Exam day is treated as a paid work day with FULL 1-DAY SALARY PAID. 3) Pass Bonus Career Up Allowance: Those who pass the exam and get the license will receive a 'LICENSE ALLOWANCE OF 10,000 YEN EVERY MONTH (120,000 yen/year) ADDED ON TOP OF THEIR SALARY' starting the following month! Let's all challenge it!\n\nQuestion: If you use this company's support program to pass certification exams for 'Tamagake (slinging)' or 'Scaffolding Chief', what happens to your salary from the following month?",
        options: [
            "お給料に 【「毎月 １０,０００円 （年間 １２万円）」 の 資格手当が 上乗せ（アップ）】 される (A 'LICENSE ALLOWANCE OF 10,000 YEN EVERY MONTH [120k yen/yr]' is added on top of your salary)",
            "資格を 取ると 偉そうになるから という 理由で、【お給料が 毎月 ３０,０００円 減らされる】 (For the reason that getting licenses makes you arrogant, your salary is reduced by 30,000 yen every month)",
            "お給料は 変らないが、代わりに 【会社から 毎日 お昼ご飯として 「カップラーメン １個」 が もらえる】 (Salary doesn't change, but instead you get '1 Cup Noodle' every day from company as lunch)",
            "資格の テストに 合格した 翌日に、【自動的に 会社の 「最高経営責任者（会長）」 に 任命される】 (The day after passing license test, you are automatically appointed 'Chief Executive Chairman' of company)"
        ],
        correct: 0,
        explanation: "Benefit 3 promises:「見事試験に合格して資格を取得した方には、翌月から【お給料に「毎月１０,０００円」の資格手当がずっと上乗せ】されます！」."
    }
];
