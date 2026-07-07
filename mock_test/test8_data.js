// test8_data.js - JFT-Basic SSW Mock Test 8 Datastore (45 Questions)
// Aligned with CEFR A2 / Irodori & Genki Elementary Japanese
// Focus: Building Cleaning Management & Facility Maintenance (ビルクリーニング業・ビルメンテナンス・清掃管理)

const jftExamData = [
    // ==========================================
    // SECTION 1: SCRIPT AND VOCABULARY (文字と語彙) - 12 Questions
    // ==========================================
    {
        id: "q1",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "オフィスビルや 病院の 衛生環境を 保つ ため、毎日 廊下や トイレの 床を 【清掃】 します。【清掃】の 正しい 読み方は どれですか。",
        promptEn: "To maintain hygienic environments in office buildings and hospitals, we 【清掃】 (clean / sweep / scrub) corridor and restroom floors every day. What is the reading of 【清掃】?",
        options: [
            "せいそう (seisō - cleaning / scrubbing / sweeping)",
            "せいぞう (seizō - manufacturing / production)",
            "へいそう (heisō - closing down)",
            "たいそう (taisō - gymnastics / exercises)"
        ],
        correct: 0,
        explanation: "「清掃（せいそう）」means professional cleaning, scrubbing, or housekeeping. The SSW Building Cleaning Industry is called「ビルクリーニング業 / ビル清掃管理」."
    },
    {
        id: "q2",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "床や 壁の 汚れの 種類（油汚れや 水垢など）に 合わせて、適切な 【せんざい】 を 選んで 使います。正しい 漢字は どれですか。",
        promptEn: "Depending on the type of floor or wall stains (oil stains or limescale), we select and use the appropriate 【せんざい】 (detergent / cleaning agent). Which kanji matches?",
        options: [
            "洗剤 (senzai - detergent / cleaning agent / soap)",
            "洗濯 (sentaku - laundry / washing clothes)",
            "洗面 (senmen - washing face)",
            "洗車 (sensha - car wash)"
        ],
        correct: 0,
        explanation: "「洗剤（せんざい）」means cleaning detergent or chemical agents (酸性洗剤、アルカリ性洗剤、中性洗剤)."
    },
    {
        id: "q3",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "濃い 液体洗剤を 原液の まま 使う と 床を 傷める ため、水で １００倍に 【希釈】 して 使います。【希釈】の 正しい 読み方は どれですか。",
        promptEn: "Using concentrated liquid detergent as is damages floors, so we use it by 【希釈】 (diluting / thinning) it 100 times with water. What is the reading of 【希釈】?",
        options: [
            "きしゃく (kishaku - dilution / thinning out with water)",
            "きしょう (kishō - weather / climate)",
            "きそく (kisoku - rule / regulation)",
            "きせき (kiseki - miracle)"
        ],
        correct: 0,
        explanation: "「希釈（きしゃく）」means diluting a concentrated chemical with water. Dilution ratio is called「希釈倍率（きしゃくばいりつ）」."
    },
    {
        id: "q4",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "においの 強い 薬剤や スプレーを 使う ときは、中毒を防ぐため 窓や ドアを開けて 【かんき】 を します。正しい 漢字は どれですか。",
        promptEn: "When using strong-smelling chemicals or sprays, open windows and doors for 【かんき】 (ventilation / fresh air circulation) to prevent poisoning. Which kanji matches?",
        options: [
            "換気 (kanki - ventilation / airing out)",
            "寒気 (kanki - chill / cold air / shivering)",
            "歓気 (kanki - joyful spirit)",
            "間気 (kanki - false word)"
        ],
        correct: 0,
        explanation: "「換気（かんき）」means ventilation or replacing indoor air with fresh outdoor air. Mandatory when using cleaning chemicals."
    },
    {
        id: "q5",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "洗剤や 汚れた 水で 手の 皮膚が 荒れないよう、両手に ゴムの 【手袋】 を はめて 作業を 行います。【手袋】の 読み方は どれですか。",
        promptEn: "To prevent skin irritation from detergents or dirty water, we wear rubber 【手袋】 (gloves) on both hands while working. What is the reading?",
        options: [
            "てぶくろ (tebukuro - gloves / mittens / rubber gloves)",
            "てふくろ (tefukuro - unvoiced reading error)",
            "しゅたい (shutai - main body)",
            "あしぶくろ (ashibukuro - foot bag)"
        ],
        correct: 0,
        explanation: "「手袋（てぶくろ）」means gloves. In building cleaning, thick rubber gloves (ゴム手袋) or disposable nitrile gloves are essential PPE."
    },
    {
        id: "q6",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "エレベーターが 使えない ときや、細かい 隅の 清掃をする ため、モップを 持って ビルの 【かいだん】 を 上り下りします。正しい 漢字は どれですか。",
        promptEn: "When elevators cannot be used or to clean fine corners, we go up and down the building's 【かいだん】 (stairs / staircase) holding a mop. Which kanji matches?",
        options: [
            "階段 (kaidan - stairs / stairway / staircase)",
            "怪談 (kaidan - ghost story / spooky tale)",
            "会談 (kaidan - diplomatic conference)",
            "階層 (kaisō - building story level / hierarchy)"
        ],
        correct: 0,
        explanation: "「階段（かいだん）」means stairs or staircases. Stairwell cleaning requires careful footing to prevent slip-and-fall accidents."
    },
    {
        id: "q7",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "オフィスの ゴミを 回収するとき、燃える ごみと 缶・ペットボトルなどを 正しく 【分別】 して 捨てます。【分別】の 読み方は どれですか。",
        promptEn: "When collecting office trash, we correctly 【分別】 (separate / sort / classify) combustible burnables from cans and PET bottles before discarding. What is the reading?",
        options: [
            "ぶんべつ (bunbetsu - waste separation / sorting / classification)",
            "ふんべつ (funbetsu - mature judgment / discretion)",
            "わけべつ (wakebetsu - false reading)",
            "ぶんかつ (bunkatsu - division / splitting)"
        ],
        correct: 0,
        explanation: "In Japanese waste management and cleaning, separating trash by material (burnable, cans, glass, plastic) is called「ごみの分別（ぶんべつ）」."
    },
    {
        id: "q8",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "ホテルや 病院の 長い 【ろうか】 に、床の 保護と ツヤ出しの ための ワックスを 塗って 磨きます。正しい 漢字は どれですか。",
        promptEn: "In long hotel or hospital 【ろうか】 (hallways / corridors), we apply and polish wax to protect floors and add shine. Which kanji matches?",
        options: [
            "廊下 (rōka - hallway / corridor / passageway)",
            "玄関 (genkan - front entrance lobby)",
            "屋上 (okujō - rooftop)",
            "地下 (chika - basement / underground)"
        ],
        correct: 0,
        explanation: "「廊下（ろうか）」means corridor or hallway. Corridor cleaning often requires dividing the passageway in half so pedestrians can walk safely on one side."
    },
    {
        id: "q9",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "床の 頑固な 汚れを 落としたり、古い ワックスを 剥離（はくり）する ために 使う、円形の ブラシが 高速回転する 電動洗浄機を 何と 言いますか。",
        promptEn: "What is the electric floor scrubbing machine with a high-speed rotating circular brush called used to scrub stubborn floor stains or strip old wax?",
        options: [
            "ポリッシャー（床洗浄機・ポリッシャー / Floor Polisher / Scrubber）",
            "電子レンジ（でんしレンジ - microwave oven）",
            "洗濯機（せんたくき - clothes washing machine）",
            "エアコン（エアコンディショナー - air conditioner）"
        ],
        correct: 0,
        explanation: "A rotary electric floor scrubbing machine is called a「ポリッシャー (Polisher / Scrubber)」. Mastering polisher control without swinging sideways is a core SSW cleaning skill."
    },
    {
        id: "q10",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "天井の エアコンの 吹き出し口や、高い 窓ガラスの 清掃を 行う ために 上る、折りたたみ式の ２本脚の はしご（台）を 何と 言いますか。",
        promptEn: "What is the folding two-legged ladder (stand) called that you climb to clean ceiling A/C vents or high window glass?",
        options: [
            "脚立（きゃたつ / Kyatatsu - stepladder / folding ladder stand）",
            "机（つきゅう / tsukue - office desk table）",
            "椅子（いす / isu - sitting chair）",
            "本棚（ほんだな / hondana - bookshelf）"
        ],
        correct: 0,
        explanation: "A folding stepladder is called a「脚立（きゃたつ）」. For safety, standing on the very top table step (天板乗りの禁止) is strictly prohibited by law."
    },
    {
        id: "q11",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "床の 水拭き（みずぶき）や ワックス塗布に 使用する、柄（棒）の 先に 糸や 布を 取り付けた 掃除道具を 専門用語で 何と 言いますか。",
        promptEn: "What is the cleaning tool called with yarn or cloth attached to the end of a long stick used for damp mopping floors or applying wax?",
        options: [
            "モップ・ラーグ（Mop / Mop head cloth - floor wiping tool）",
            "ほうき（箒 - broom for sweeping dry leaves）",
            "ちりとり（塵取り - dustpan for scooping swept dirt）",
            "バケツ（Bucket - water pail bucket）"
        ],
        correct: 0,
        explanation: "A floor mop is「モップ」and the replaceable cloth/yarn head attached to the bottom is called a「ラーグ (Rag / Mop head)」."
    },
    {
        id: "q12",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "トイレの ドアノブや 洗面台の 蛇口に 付着した 感染症の ウイルスや 細菌を、アルコールなどで 拭いて 死滅させる（減らす） ことを 何と 言いますか。",
        promptEn: "What is it called when you wipe with alcohol to kill/reduce infectious viruses and bacteria attached to restroom doorknobs and sink faucets?",
        options: [
            "除菌・殺菌（じょきん・さっきん - disinfection / sanitization / sterilization）",
            "着色・塗装（ちゃくしょく・とそう - coloring / painting）",
            "冷凍・冷蔵（れいとう・れいぞう - freezing / refrigerating）",
            "乾燥・脱水（かんそう・だっすい - drying / dehydrating）"
        ],
        correct: 0,
        explanation: "In hygiene cleaning (衛生清掃), eliminating bacteria and viruses from high-touch surfaces (高頻度接触面) is called「除菌（じょきん）・殺菌（さっきん）」."
    },

    // ==========================================
    // SECTION 2: CONVERSATION AND EXPRESSION (会話と表現) - 11 Questions
    // ==========================================
    {
        id: "q13",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "オフィスビルの 廊下を 清掃中、仕事中の 会社の 社員さん（テナント様）が 通りかかりました。清掃スタッフとして 何と 挨拶して 丁寧にお辞儀しますか。\nスタッフ：「お仕事中、お邪魔いたします。廊下の 【　　】。」",
        promptEn: "While cleaning an office building corridor, working office employees (tenants) passed by. As a cleaning staff member, how do you greet and bow politely?\nStaff: 'Pardon the interruption during your work. We will now 【　　】 the corridor.'",
        options: [
            "清掃を 行わせていただきます (seisō o okonawasete itadakimasu - allow us to perform cleaning [humble keigo])",
            "廊下で パーティーを 開催させていただきます (rōka de pātī o kaisai sasete itadakimasu - allow us to hold a dance party in corridor)",
            "廊下で お昼寝を させていただきます (rōka de ohirune o sasete itadakimasu - allow us to take an afternoon nap in corridor)",
            "廊下を 水没させて プールに いたします (rōka o suibotsu sasete pūru ni itashimasu - allow us to flood corridor into a swimming pool)"
        ],
        correct: 0,
        explanation: "Building cleaning customer service keigo (ビル清掃の接客マナー): Respecting tenant work space:「お仕事中お邪魔いたします。清掃を行わせていただきます」."
    },
    {
        id: "q14",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "ロビーの 床を 水拭きして いて、床が 濡れて つるつる 滑りやすくなっています。通行人の 転倒事故を 防ぐため、同僚に 何と 声を かけますか。\nスタッフ：「床が 濡れていて 滑りやすいですね。お客様が 転ぶといけないので、すぐに 【　　】！」",
        promptEn: "You are damp mopping the lobby floor, making it wet and slippery. To prevent pedestrians from falling, what do you say to your coworker?\nStaff: 'The floor is wet and slippery. Customers might slip and fall, so let's immediately 【　　】!'"
        ,
        options: [
            "「足元注意（すべりやすい）」 の 黄色い 看板（サインバー）を 立てて おきましょう ('Ashimoto Chūi [Caution Slippery]' yellow warning sign stand / Let's set up a yellow hazard sign)",
            "お客様が 滑れるように、床の上に オイルと バナナの 皮を まきましょう (So customers can slide faster, scatter oil and banana peels on the floor)",
            "床が 乾くまで、みんなで 目を 閉じて ３時間 踊り続けましょう (Until floor dries, let's close our eyes and keep dancing for 3 hours)",
            "お客様を 全員 背中に おんぶして、ビルの 外まで 運びましょう (Let's piggyback all customers on our backs and carry them outside building)"
        ],
        correct: 0,
        explanation: "Floor cleaning safety (水拭き・ワックス清掃時の安全対策): Whenever floor surfaces are wet or waxed, placing yellow 'Caution Slippery / Wet Floor' signs (足元注意サイン・コーン) is mandatory."
    },
    {
        id: "q15",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "トイレの 頑固な 汚れを 落とすための 濃い 酸性洗剤を 水で 薄めて 使いますが、何倍の 濃さに すればいいか 分かりません。清掃リーダーに 何と 質問しますか。\nスタッフ：「リーダー、この 酸性洗剤は 水で 【　　】？」",
        promptEn: "You are diluting concentrated acid detergent with water to clean stubborn toilet stains, but don't know the dilution ratio. How do you ask your cleaning leader?\nStaff: 'Leader, how many times dilution with water 【　　】 for this acid detergent?'"
        ,
        options: [
            "何倍に 薄めれば（希釈すれば） よろしいでしょうか (nanbai ni usumereba [kishaku sureba] yoroshii deshō ka - how many times should I dilute / thin it?)",
            "全部 飲んで お腹の 中に 入れても よろしいでしょうか (zenbu nonde onaka no naka ni iretemo yoroshii deshō ka - is it alright if I drink all of it into my stomach?)",
            "ビルの 屋上から 外の 空中に まいても よろしいでしょうか (biru no okujō kara soto no kūchū ni maitemo yoroshii deshō ka - is it alright if I scatter it from roof into open air?)",
            "洗剤を 捨てて 代わりに 牛乳で 拭いても よろしいでしょうか (senzai o sutete kawari ni gyūnyū de fuitemo yoroshii deshō ka - is it alright if I throw away detergent and wipe with milk instead?)"
        ],
        correct: 0,
        explanation: "Asking supervisors for chemical dilution instructions:「この洗剤は水で何倍に希釈すれば（薄めれば）よろしいでしょうか」."
    },
    {
        id: "q16",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "３階の 男女トイレの 清掃と、トイレットペーパーや 石鹸（ソープ）の 補充作業が 全て 完了しました。ビルの 管理員さんに 何と 報告しますか。\nスタッフ：「管理員さん、お疲れ様です。３階トイレの 【　　】。」",
        promptEn: "Cleaning of the 3F men's/women's restrooms and replenishing toilet paper and hand soap are all finished. How do you report to the building manager?\nStaff: 'Good work, Manager. Regarding the 3F restroom, 【　　】.'"
        ,
        options: [
            "清掃と ペーパー・石鹸の 補充が 完了いたしました (seisō to pēpā sekken no hojū ga kanryō itashimashita - cleaning and paper/soap replenishment are completed [keigo])",
            "トイレットペーパーを 全部 燃やして 灰に いたしました (toiretto pēpā o zenbu moyashite hai ni itashimashita - I burned all toilet paper into ashes)",
            "トイレの 便器を 破壊して 窓から 外に 投げ捨てました (toire no benki o hakai shite mado kara soto ni nagesutemashita - I smashed toilet bowls and threw them out window)",
            "トイレを 自分の 私室に 改造して 鍵を かけました (toire o jibun no shishitsu ni kaizō shite kagi o kakemashita - I remodeled toilet into my private bedroom and locked it)"
        ],
        correct: 0,
        explanation: "Standard completion report in facility management:「〜階の清掃およびトイレットペーパー・消耗品の補充が完了いたしました」."
    },
    {
        id: "q17",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "大きな ゴミ運搬台車を 押して エレベーターに 乗った とき、一般の お客様（利用者）と 同乗することになりました。何と お詫びして 気を配りますか。\nスタッフ：「【　　】。台車が 通りまして、ご迷惑を おかけいたします。」",
        promptEn: "When pushing a large waste disposal cart into an elevator, you ended up riding together with general building visitors. How do you apologize and show consideration?\nStaff: '【　　】. Our cart is passing through, and we apologize for the inconvenience.'"
        ,
        options: [
            "恐れ入ります（お仕事中 失礼いたします） (osoreirimasu [oshigotochū shitsurei itashimasu] - Pardon me / Excuse us during your busy day)",
            "邪魔だ！お前たち 全員 エレベーターから 降りろ！ (jama da! omaetachi zen'in erebētā kara oriro! - You're in the way! All of you get out of elevator!)",
            "ゴミの 台車が 一番偉いので 私に お辞儀をしなさい (gomi no daisha ga ichiban erai node watashi ni ojigi o shinasai - Trash cart is supreme so bow to me)",
            "エレベーターの 料金として 一人 １万円 払いなさい (erebētā no ryōkin toshite hitori ichiman-en harainasai - Pay 10,000 yen each as elevator usage fee)"
        ],
        correct: 0,
        explanation: "Elevator courtesy with cleaning carts (台車運搬時のマナー): Always show humility when carts share passenger elevators:「恐れ入ります。台車が通りましてご迷惑をおかけいたします」."
    },
    {
        id: "q18",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "新人の 清掃スタッフが、トイレ掃除の ときに 「酸性洗剤」 と 「塩素系漂白剤（ハイター）」 を 一緒の バケツに 混ぜようと しています。何と 叫んで 止めますか。\n先輩：「危ない！その ２つの 洗剤を 混ぜると 【　　】 ので、絶対に 混ぜないで！」",
        promptEn: "A newcomer cleaning staff member is trying to mix 'Acid Detergent' and 'Chlorine Bleach' into the same bucket while cleaning toilets. How do you scream to stop them?\nSenior: 'Danger! If you mix those 2 detergents, 【　　】, so never mix them!'"
        ,
        options: [
            "有毒な 塩素ガスが 出て 命に関わる（中毒で 死ぬ危険がある） (yūdokuna enso gasu ga dete inochi ni kakawaru [chūdoku de shinu kiken ga aru] - deadly toxic chlorine gas erupts causing fatal poisoning!)",
            "美味しい ストロベリージュースに 変わって 飲みたくなる (oishii sutoroberī jūsu ni kawatte nomitakunaru - it turns into delicious strawberry juice and makes you want to drink)",
            "バケツから 綺麗な 虹色の 花火が 打ち上がって お祝いになる (kireina nijiiro no hanabi ga uchiagatte oiwai ni naru - beautiful rainbow fireworks shoot out of bucket celebrating)",
            "床の 汚れが 固まって ダイヤモンドの 宝石に 変わる (yuka no yogore ga katamatte daiyamondo no hōseki ni kawaru - floor dirt solidifies and turns into diamond jewels)"
        ],
        correct: 0,
        explanation: "Chemical safety (まぜるな危険・酸と塩素の混合禁止): Chlorine bleach + Acid cleaning chemicals = Toxic Chlorine Gas (有毒塩素ガス発生・死亡事故). Must stop immediately."
    },
    {
        id: "q19",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "ホテルの 客室清掃（ベッドメイキング・お部屋のお掃除）を行う ため、お客様が 滞在中の 部屋の ドアを ノックしました。何と 声を かけますか。\nスタッフ：「失礼いたします！清掃係で ございます。【　　】？」",
        promptEn: "To perform hotel guest room cleaning (bed-making), you knocked on the door of a room where a guest is staying. How do you call out?\nStaff: 'Excuse me! Housekeeping / Cleaning staff. 【　　】?'"
        ,
        options: [
            "お部屋の お掃除に 入らせていただいても よろしいでしょうか (oheya no osōji ni hairasete itadakitemo yoroshii deshō ka - May we enter to clean your room today? [keigo])",
            "あなたの 部屋の 冷蔵庫の ジュースを 全部 飲んでも よろしいですか (anata no heya no reizōko no jūsu o zenbu nonde mo yoroshii desu ka - May I drink all the juice in your room fridge?)",
            "あなたの ベッドで これから ５時間 一緒に 寝ても よろしいですか (anata no beddo de korekara gojikan issho ni netemo yoroshii desu ka - May I sleep together in your bed for 5 hours?)",
            "部屋の テレビを 持って帰って 自分の 家で 使っても よろしいですか (heya no terebi o motte kaette jibun no ie de tsukattemo yoroshii desu ka - May I take your room TV home and use it?)"
        ],
        correct: 0,
        explanation: "Hotel housekeeping entry etiquette (ホテル客室清掃入室時の挨拶): Knocking 3 times and calling out:「失礼いたします。清掃係でございます。お部屋の清掃に入らせていただいてもよろしいでしょうか」."
    },
    {
        id: "q20",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "モップで 床を 拭く とき、モップに 水分が 多すぎる と 床が びしょ濡れになって 水跡（汚れ跡）が 残って しまいます。後輩に 何と アドバイスしますか。\n先輩：「モップの 水分が 多すぎると 水跡が 残るから、絞り器で 【　　】！」",
        promptEn: "When mopping floors, if the mop has too much water, the floor gets soaking wet leaving water streaks (dirty marks). What advice do you give your junior?\nSenior: 'If the mop is too wet, it leaves water streaks, so use the wringer to 【　　】!'"
        ,
        options: [
            "しっかり（硬く） 絞ってから 拭いてください (shikkari [kataku] shibotte kara fuite kudasai - squeeze / wring it out tightly before wiping)",
            "水を さらに バケツから １０リットル かけてから 拭いてください (mizu o sarani baketsu kara jūrittoru kakete kara fuite kudasai - pour another 10 liters of water from bucket before wiping)",
            "モップの 糸を 全部 ハサミで 切って 棒だけで 拭いてください (moppu no ito o zenbu hasami de kitte bō dake de fuite kudasai - cut all mop strings with scissors and wipe with just stick)",
            "モップに オイルと 醤油を たっぷり 染み込ませて 拭いてください (moppu ni oiru to shōyu o tappuri shimikomasete fuite kudasai - soak mop heavily in oil and soy sauce before wiping)"
        ],
        correct: 0,
        explanation: "Damp mopping technique (モップ水拭き清掃の基本): To avoid water rings and slip risks, mop heads must be wrung out tightly (硬絞り・しっかり絞る) in mop wringer buckets."
    },
    {
        id: "q21",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "ショッピングモールの ロビーの ゴミ箱を 片付けて いたところ、ゴミ箱の そばで お客様の 「お財布（おさいふ）」 を 拾いました。何と 報告して どう しますか。\nスタッフ：「ロビーの ゴミ箱の そばで お財布を 拾いましたので、【　　】。」",
        promptEn: "While emptying lobby trash bins in a shopping mall, you found a customer's 'wallet (purse)' next to the trash bin. What do you report and do?\nStaff: 'I found a wallet near the lobby trash bin, so I will 【　　】.'"
        ,
        options: [
            "すぐに 防災センター（インフォメーション）へ 届けます (suguni bōsai sentā [infomēshon] e todokemasu - immediately turn it in to the Security / Disaster Prevention Center or Info Desk)",
            "私の ポケットに入れて 今日の 夜ご飯の 焼き肉代に 使います (watashi no poketto ni irete kyō no yogohan no yakiniku-dai ni tsukaimasu - put in my pocket and spend on Yakiniku BBQ for dinner today)",
            "ゴミ箱の中に 捨てて ゴミ収集車で 燃やして しまいます (gomibako no naka ni sutete gomi shūshūsha de moyashite shimaimasu - throw into trash box and burn it away in garbage truck)",
            "ビルの 屋上から お財布の お札を 紙吹雪のように まきます (biru no okujō kara osaifu no osatsu o kamifubuki no yō ni makimasu - scatter wallet bills from rooftop like confetti confetti)"
        ],
        correct: 0,
        explanation: "Handling lost property in facility maintenance (ビル清掃中の遺失物拾得対応): Found wallets, phones, or jewelry must be reported and delivered immediately to the Disaster Prevention/Security Center (防災センター・警備室)."
    },
    {
        id: "q22",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "１日の 清掃作業が 終わり、使った 雑巾（ウエス）や モップの 布を 片付けます。悪臭や カビを 防ぐ ため、同僚と 何を 確認し合いますか。\nスタッフ：「今日の 作業が終わったので、使った 雑巾や クロスは 【　　】。」",
        promptEn: "The day's cleaning shift is over, and you are putting away used rags (uesu) and mop cloths. To prevent foul odors and mold, what do you confirm with coworkers?\nStaff: 'Today's work is done, so for the used rags and cloths, let's 【　　】.'"
        ,
        options: [
            "きれいに 洗って（洗濯して） しっかり 干しておきましょう (kirei ni aratte [sentaku shite] shikkari hoshite okimashō - wash clean / launder and hang them up dry thoroughly)",
            "濡れた まま 丸めて バケツの 底に １ヶ月 放置しましょう (nureta mama marumete baketsu no soko ni ikkatsu hōchi shimashō - leave them crumpled wet at bottom of bucket for 1 month)",
            "汚れた ままで 明日の 朝の トイレ掃除に そのまま 使いましょう (yogoreta mama de ashita no asa no toire sōji ni sonomama tsukaimashō - keep dirty as is and use directly for tomorrow morning toilet cleaning)",
            "道路に 投げ捨てて 野良犬の ベッドとして 寄付しましょう (dōro ni nagesutete norainu no beddo toshite kifu shimashō - throw onto street and donate as beds for stray dogs)"
        ],
        correct: 0,
        explanation: "End of shift 5S maintenance (清掃用具の管理・洗濯乾燥): Damp rags left unwashed breed bacteria and foul mold smells (雑菌悪臭発生). Washing and hanging dry (洗濯・乾燥・保管) is mandatory."
    },
    {
        id: "q23",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "商業ビルの １階で 清掃中、お客様から 「すみません、お手洗い（トイレ）は どこに ありますか？」 と 聞かれました。何と 丁寧にご案内しますか。\nスタッフ：「お手洗いで ございますね。【　　】。」",
        promptEn: "While cleaning the 1st floor of a commercial building, a customer asked you, 'Excuse me, where is the restroom (toilet)?' How do you guide them politely?\nStaff: 'The restroom right. 【　　】.'"
        ,
        options: [
            "あの 角（かど）を 右に 曲がった 突き当たり（一番奥）に ございます (ano kado o migi ni magatta tsukiatari [ichiban oku] ni gozaimasu - Turn right at that corner and it is at the very end of the hall)",
            "トイレは ありませんので、ビルの 外の 草むらで してください (toire wa arimasen node, biru no soto no kusamura de shite kudasai - There are no toilets, so please do it in the grass bushes outside)",
            "私を １０万円で 雇ってくれたら トイレの 場所を 教えます (watashi o jūman-en de yatotte kuretara toire no basho o oshiemasu - If you hire me for 100,000 yen I will tell you where toilet is)",
            "あなたが クイズに ３問 正解するまで トイレには 行けません (anata ga kuizu ni sanmon seikai suru made toire ni wa ikemasen - You cannot go to toilet until you answer 3 quiz questions correctly)"
        ],
        correct: 0,
        explanation: "Building cleaning customer navigation (来館者への館内案内): Guiding visitors politely using building landmarks:「〜の角を曲がった突き当たりにございます」."
    },

    // ==========================================
    // SECTION 3: LISTENING COMPREHENSION (聴解) - 11 Questions
    // ==========================================
    {
        id: "q24",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】ビル清掃の 朝礼で、リーダーが 洗剤の 希釈（きしゃく・水で薄めること）について 指示を出しています。５リットル（５,０００ ml）の 「５０倍 希釈洗剤液」 を 作る ため、洗剤の 原液を 何ミリリットル（ml） 入れれば いいですか。",
        promptEn: "[Audio Simulation] At a morning cleaning assembly, the leader is giving instructions on detergent dilution (thinning with water). To make 5 Liters (5,000 mL) of '50x Diluted Detergent Solution', how many milliliters (mL) of concentrated detergent liquid should be added?",
        audioScript: "リーダー：「おはようございます！今日は オフィスの 床洗浄を 行う。使用する 床用 アルカリ洗剤だが、今日の 汚れは 中程度なので 【「５０倍（ごじゅうばい）に 希釈」】 して バケツに 作ってくれ！いいか、計算を 間違えるなよ。バケツに 【合計 ５リットル（５,０００ミリリットル）】 の 洗剤液を 作る 場合は、【洗剤の 原液を 「１００ミリリットル（１００ ml）」】 カップで 計って 入れ、そこに 【水を 「４.９リットル（４,９００ ml）」】 注いで 混ぜれば、ちょうど ５０倍 希釈の 液が ５リットル 完成する！原液を 【１００ミリリットル】 だぞ！入れすぎないように注意しろ！」",
        audioScriptEn: "Leader: 'Good morning! Today we scrub office floors. We use alkaline floor detergent, and since stains are medium today, make it diluted '50 TIMES' in buckets! Listen, don't mess up the math. To make a TOTAL OF 5 LITERS (5,000 mL) of solution in a bucket, measure and add '100 MILLILITERS (100 mL)' OF CONCENTRATED DETERGENT with a cup, and pour in '4.9 LITERS (4,900 mL)' of water and mix! That completes exactly 5 Liters of 50x dilution solution! That's '100 mL' of concentrate! Careful not to add too much!'",
        options: [
            "洗剤の 原液を 【「１００ミリリットル（１００ ml）」】 入れる (Add 【'100 MILLILITERS (100 mL)'】 of concentrated detergent)",
            "洗剤の 原液を 【「５,０００ミリリットル（５リットル全部）」】 入れる (Add 5,000 mL [all 5 Liters] of pure concentrated detergent without water)",
            "洗剤の 原液は 一切 入れず、【「ただの 水だけ（０ ml）」】 で 洗浄する (Add 0 mL of detergent and scrub using 'only plain water')",
            "洗剤の 代わりに、【「お醤油と お酢を １リットルずつ」】 バケツに入れる (Instead of detergent, put '1 Liter each of soy sauce and vinegar' into bucket)"
        ],
        correct: 0,
        explanation: "Dilution math (希釈倍率計算): Total 5,000 mL ÷ 50 times dilution = 100 mL of chemical concentrate (洗剤原液１００ミリリットル)."
    },
    {
        id: "q25",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】オフィスビルの １階ロビーで、ワックス塗布作業の 準備を 行っています。責任者は、通行人の 転倒事故を 防ぐ ため、作業を 始める 前に 必ず 何を 設置しなさいと 指示しましたか。",
        promptEn: "[Audio Simulation] In the 1F lobby of an office building, preparations for floor waxing are underway. What did the supervisor instruct MUST be set up before starting work to prevent pedestrian slipping accidents?",
        audioScript: "責任者：「よし、今から １階ロビーの 床ワックス塗り作業に 入るぞ！いいか、ワックスが 乾く までの 間、床は 氷のように ツルツル 滑る。もし ビルの 利用者が 誤って 入ってきて 転倒したら 大変な ことになる！だから、作業を 始める 前に、【必ず 廊下の 両端と エレベーター前に、「足元注意（すべりやすい）」 と 書かれた 黄色い 【「安全サインバー（警告看板・コーン）」】 を 目立つ ように 設置して】 から 作業に 入れ！絶対に サインなしで ワックスを 塗るなよ！」",
        audioScriptEn: "Supervisor: 'All right, we're starting 1F lobby floor waxing now! Listen, until wax dries, the floor is slippery like ice. If building users mistakenly walk in and slip, it's a disaster! Therefore, before starting work, ALWAYS SET UP YELLOW 'SAFETY SIGN BARS (Caution Slippery / Warning Cones)' prominently at both ends of the hallway and in front of elevators! NEVER apply wax without warning signs!'",
        options: [
            "廊下の 両端などに、【黄色い 「安全サインバー（足元注意の 警告看板・コーン）」 を 目立つように 設置する】 (Set up yellow 【'SAFETY SIGN BARS (Caution Slippery warning stands/cones)'】 prominently at both ends of hallway)",
            "お客様が 入ってこれないように、【ビルの 入り口に 爆弾を 仕掛けて 封鎖する】 (To keep customers out, set time bombs at building entrance to seal it off)",
            "床の上に 【大きな 落とし穴を 掘って、入ってきた お客様を 落とす】 (Dig a huge pit trap in the floor and drop approaching customers inside)",
            "作業員 全員で 【大きな 歌を 歌って 踊りながら お客様を 威嚇して 追い払う】 (All workers sing loud songs and dance to intimidate and chase away customers)"
        ],
        correct: 0,
        explanation: "Floor maintenance safety (ワックス清掃・足元注意看板の設置義務): Putting up yellow warning signs/cones (安全サインバー) prevents pedestrians from stepping onto wet, slippery wax."
    },
    {
        id: "q26",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】ビル清掃の 指導員が、新人に 洗剤の 取り扱いに関する 命に関わる 警告を 行っています。「酸性洗剤（サンポール等）」 と 「塩素系洗剤（ハイター・カビ取り剤）」 を 混ぜると どう なると 説明していますか。",
        promptEn: "[Audio Simulation] A building cleaning instructor is giving a life-threatening warning to a newcomer about chemical handling. What does he explain happens if you mix 'Acid Detergent' and 'Chlorine Detergent (bleach / mold remover)'?",
        audioScript: "指導員：「おい、新人！ここを よく 聞け。清掃業で 一番 多い 死亡事故が 「洗剤の 混合（まぜるな危険）」 だ！いいか、トイレの 尿石を 取る 【「酸性洗剤」】 と、カビや 黒ずみを 取る 【「塩素系漂白剤（ハイターなど）」】 を、絶対に 一緒に 混ぜては いけない！もし ２つを 混ぜると、化学反応が 起きて 【目や 肺を 焼き尽くす 「有毒な 塩素ガス」 が 大量に 発生し、呼吸が できなくなって その場で 倒れて 死亡する！】 それぞれ 別々の バケツと クロスを 使い、絶対に 混ぜるな！」",
        audioScriptEn: "Instructor: 'Hey newcomer! Listen very carefully here. The most common fatal accident in cleaning is 'mixing chemicals (Do Not Mix hazard)'! Listen, NEVER mix 'ACID DETERGENTS' removing toilet scale with 'CHLORINE BLEACH (Haiter, etc.)' removing mold! If you mix those two, a chemical reaction occurs ERUPTING MASSIVE AMOUNTS OF 'DEADLY TOXIC CHLORINE GAS' that burns your eyes and lungs, causing suffocation and death on the spot! Use separate buckets and cloths; NEVER mix them!'",
        options: [
            "化学反応で 【目や 肺を 焼き尽くす 「有毒な 塩素ガス」 が 発生し、中毒で 死亡する 危険】 が ある (A chemical reaction erupts 【'DEADLY TOXIC CHLORINE GAS' burning eyes/lungs】, carrying fatal poisoning risks!)",
            "洗剤が 化学反応で 【甘くて 美味しい 「いちご味の 炭酸ジュース」 に 変身する】 (The chemicals chemically react and transform into 'sweet, delicious strawberry carbonated soda')",
            "バケツから 【金貨や ダイヤモンドの 宝物が 湧き出てきて 大金持ちに なれる】 (Gold coins and diamond treasures spring out of bucket making you super rich)",
            "洗剤の 香りで 【体が 軽くなって、空を 飛んで 雲の上まで 行けるようになる】 (Detergent scent makes body light, enabling you to fly through sky above clouds)"
        ],
        correct: 0,
        explanation: "Fatal hazard warning (まぜるな危険・塩素系と酸性の混合禁止): Chlorine bleach + Acid detergent = Toxic chlorine gas (有毒塩素ガス発生). Never mix."
    },
    {
        id: "q27",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】高い 天井の エアコン吹き出し口を 清掃する ため、スタッフが 「脚立（きゃたつ）」 を 使おうとして います。職長は、転落事故を 防ぐ ために 脚立の 「どの 部分」 に 立って 作業しては いけない と 注意しましたか。",
        promptEn: "[Audio Simulation] To clean high ceiling A/C vents, staff are preparing to use a 'stepladder (kyatatsu)'. To prevent falling accidents, on 'which part' of the stepladder did the foreman warn workers MUST NOT stand to work?",
        audioScript: "職長：「おい、今から 天井の エアコン清掃で 脚立（きゃたつ）を 使う な！高所作業の ルールを 思い出せ。脚立を 開いたら 必ず カチッと 金具（止め金具）を ロックしろ！それから 最も 重要な ことだ！バランスを 崩して 床に 転落する 事故を 防ぐ ため、【脚立の 「一番 上の 平らな 台（天板・てんばん）」 の 上に 立つ こと、および 天板に またがって 乗る ことは、法律で 「絶対禁止」】 だ！必ず 天板より １段 か ２段 下の ステップに 立ち、下で もう １人が 脚立を 支えて ２人１組で 作業しろ！」",
        audioScriptEn: "Foreman: 'Hey, you're using a stepladder to clean ceiling A/C vents now! Remember high-work rules. When opening stepladder, always lock metal braces with a click! And most importantly: to prevent losing balance and falling to floor, STANDING ON THE 'VERY TOP FLAT TABLE STEP (Tenban / Top Plate)' OF THE LADDER, OR STRADDLING ACROSS THE TOP PLATE, IS STRICTLY PROHIBITED BY LAW! Always stand 1 or 2 steps lower than top plate, and work in pairs with 1 person supporting ladder from below!'",
        options: [
            "脚立の 【「一番 上の 平らな 台（天板・てんばん）」 の 上に 立つこと・またがること】 は 絶対禁止 (Standing on or straddling the 【'VERY TOP FLAT TABLE STEP (Tenban / Top Plate)'】 of ladder is strictly banned)",
            "脚立の 【一番 下の 「地面につく 足（ゴム脚）」 の 上に 立つこと】 は 絶対禁止 (Standing on the bottom-most 'rubber feet touching ground' is strictly banned)",
            "脚立を 使わずに、【自分の 身長が ３メートルに 伸びるまで １０年間 牛乳を 飲み続ける】 こと (Without using ladders, keep drinking milk for 10 years until your height grows to 3 meters)",
            "脚立を 【ベッドの 上に 横に 倒して、その 上で 昼寝を して 作業を サボる】 こと (Lay ladder down horizontally on bed and take a nap on top of it to slacking off)"
        ],
        correct: 0,
        explanation: "Stepladder fall prevention rules (脚立の天板乗りの禁止): Standing on the top plate (天板 / tenban) or straddling it destabilizes center of gravity causing severe falls. Must stand 1-2 steps below."
    },
    {
        id: "q28",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】ホテルの 客室清掃（ベッドメイキング）チームの リーダーが、完了確認を 行っています。４０２号室の 清掃で、シーツ交換や タオル補充の 他に、何が 完了して １５：００の チェックイン準備が 整いましたか。",
        promptEn: "[Audio Simulation] The leader of a hotel guest room cleaning (bed-making) team is checking completion. In Room 402, besides sheet changing and towel replenishment, what else was completed to be ready for 15:00 check-in?",
        audioScript: "リーダー：「よし、４０２号室の 客室清掃チェックだ。佐藤さん、ベッドの シーツと 枕カバーの 交換（ベッドメイキング）は 終わっているね。バスルームの バスタオルや シャンプーなどの アメニティ補充も バッチリだ。それから、【「部屋の 全ての ゴミ箱の ゴミを 回収・空にして 新しい 袋を セットし、エアコンの設定温度を ２２度に 調整した」】 のも 確認した！これなら 【午後 １５：００の お客様の チェックイン】 に 完璧に 間に合うぞ！お疲れ様！」",
        audioScriptEn: "Leader: 'All right, Room 402 housekeeping check. Mr. Sato, bed sheet and pillowcase changing (bed-making) is finished. Bathroom towels and shampoo amenity replenishment is perfect. Furthermore, I confirmed that 'ALL TRASH CANS IN THE ROOM WERE EMPTIED/COLLECTED AND SET WITH NEW BAGS, AND A/C TEMP WAS ADJUSTED TO 22°C'! With this, we are perfectly ready for '15:00 PM CUSTOMER CHECK-IN'! Great work!'",
        options: [
            "【「ゴミ箱の ゴミを 空にして 袋を セットし、エアコン温度を ２２度に 調整した」】 ことが 完了した (He confirmed that 【'trash cans were emptied/set with new bags, and A/C temp adjusted to 22°C'】)",
            "【「お客様の ベッドの 上に たこ焼きと お寿司を １００個 並べて 飾り付けた」】 ことが 完了した (He confirmed that '100 takoyaki balls and sushi rolls were arranged decorating guest's bed')",
            "【「部屋の 窓ガラスを 全て 割って、鳥や 虫が 自由に 入れる 部屋にした」】 ことが 完了した (He confirmed that 'all room windows were smashed so birds and insects can fly in freely')",
            "【「部屋の テレビと 冷蔵庫を 売り飛ばして 現金 ５万円を ゲットした」】 ことが 完了した (He confirmed that 'room TV and fridge were sold off to get 50,000 yen cash')"
        ],
        correct: 0,
        explanation: "Hotel housekeeping inspection (客室清掃完了チェック): Verified sheet changing, amenity replenishment, emptying garbage cans (ゴミ回収と袋セット), and setting room A/C before guest check-in."
    },
    {
        id: "q29",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】業務用 真空掃除機（バキュームクリーナー）の 使い方について、指導員が 電源コードの 注意点を 説明しています。掃除機の コードを 引っ張り出す とき、「何色の テープの マーク」 が 見えたら それ以上 引っ張ってはいけませんか。",
        promptEn: "[Audio Simulation] Regarding how to use commercial vacuum cleaners, an instructor is explaining precautions for the power cord. When pulling out the vacuum cord, when you see the tape mark of 'what color' must you STOP pulling any further?",
        audioScript: "指導員：「業務用 真空掃除機（バキューム）を 使う ときの 電源コードの 引き出しルールだ！いいか、コードを 強く 限界まで ガンガン 引っ張ると、中の 導線が ちぎれて ショートし、火災や 故障の 原因になる！掃除機の コードには ２色の テープが 巻いてある。まず 【「黄色い（イエロー）テープ」 の マークが 見えたら、「もう これ以上 引っ張るな（これにて 停止！）」 という 警告サイン】 だ！万が一、その 奥の 赤い テープまで 引き出したら 限界超過で 危険すぎる！だから、【必ず 「黄色い テープ」 が 出た ところで 止める こと！】 覚えておけよ！」",
        audioScriptEn: "Instructor: 'Power cord pulling rules when using commercial vacuum cleaners! Listen, if you yank cords hard to their physical limit, internal wires snap causing short circuits and fires! There are 2 colors of tape wrapped around vacuum cords. First, WHEN YOU SEE THE 'YELLOW TAPE' MARK, THAT IS A WARNING SIGN MEANING 'DO NOT PULL ANY FURTHER (Stop right here!)'! If by chance you pull out to the red tape behind it, it exceeds physical limits and is extremely hazardous! Therefore, ALWAYS STOP PULLING AS SOON AS THE 'YELLOW TAPE' APPEARS! Remember this!'",
        options: [
            "【「黄色い（イエロー）テープ」】 が 見えたら、もう これ以上 引っ張ってはいけない （停止サイン） (When you see the 【'YELLOW TAPE'】, you must STOP pulling any further [stop sign])",
            "【「ピンク色（ピンク）の ハートマーク」】 が 見えるまで、１００メートル 引っ張り続ける (Keep pulling for 100 meters until you see a 'pink heart symbol mark')",
            "【「緑色（グリーン）の 葉っぱの テープ」】 が 見えたら、掃除機を 窓から 投げ捨てる (When you see 'green leaf tape', throw vacuum cleaner out window)",
            "色に 関係なく、【コードが 完全に ブチッと 千切れて 切れるまで 力いっぱい 引っ張る】 (Regardless of color, yank with all your strength until cord snaps and tears off completely)"
        ],
        correct: 0,
        explanation: "Commercial vacuum cleaner cord marks (掃除機コードの黄・赤テープ): Yellow tape = Stop pulling (引き出し停止サイン / Warning). Red tape = Absolute limit danger. Stopping at yellow prevents wire tension breaks."
    },
    {
        id: "q30",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】ビルの 管理員さんが、新入社員に ゴミの 「分別（ぶんべつ）」 ルールを 説明しています。毎週 「水曜日」 の リサイクルの 日に 捨てる ペットボトルは、捨てる 前に 必ず どう しなければなりませんか。",
        promptEn: "[Audio Simulation] A building superintendent is explaining trash 'sorting (bunbetsu)' rules to a new employee. For PET bottles discarded on Wednesday recycling days, what MUST be done before throwing them in the bin?",
        audioScript: "管理員さん：「新人の 皆さん、当ビル内の 廃棄物（ごみ）の 分別ルールを 説明します。月曜と 木曜は 「燃えるごみ（紙くず等）」 です。そして、毎週 【水曜日】 は 「ペットボトルと 缶の リサイクル回収日」 です。ここで 注意！ペットボトルを 捨てる ときは、【必ず プラスチックの 「キャップ（ふた）」 と 「ラベル（シール）」 を 剥がして 取り外し、ボトルの 中を 水で きれいに すすいで 洗ってから】、専用のリサイクルボックスへ 入れてください！キャップがついた まま や 中に ジュースが 残った ままで 捨てては いけません！」",
        audioScriptEn: "Superintendent: 'Newcomers, explaining building waste sorting rules. Monday and Thursday are burnable trash. And every WEDNESDAY is 'PET Bottle & Can Recycling Day'. Attention here! When discarding PET bottles, YOU MUST REMOVE THE PLASTIC 'CAP (lid)' AND 'LABEL (sticker)', AND RINSE OUT THE INSIDE OF THE BOTTLE CLEAN WITH WATER before putting them into the recycling bin! Discarding with caps on or juice remaining inside is forbidden!'",
        options: [
            "必ず 【「キャップ（ふた）」 と 「ラベル」 を 取り外し、中を 水で すすいで 洗ってから】 捨てる (MUST 【REMOVE 'CAPS (lids)' AND 'LABELS', and rinse inside clean with water】 before discarding)",
            "キャップを 固く 閉めて、【中に 「お醤油や 泥水」 を なみなみと 満タンに入れて】 捨てる (Screw cap tight, fill bottle to the brim with 'soy sauce and muddy water', and discard)",
            "ペットボトルを 【火で 燃やして 溶かし、大きな 黒い 塊にしてから 廊下に 置く】 (Burn and melt PET bottles with fire into a huge black lump and leave in hallway)",
            "ペットボトルを 【ハサミで １,０００個の 細かい 破片に 切って、オフィスの じゅうたんに まく】 (Cut PET bottles with scissors into 1,000 tiny pieces and scatter across office carpet)"
        ],
        correct: 0,
        explanation: "Japanese recycling rules (ペットボトルの分別回収): Taking off caps and labels (キャップ・ラベル分離) and rinsing bottles clean (水すすぎ) is essential for plastic recycling."
    },
    {
        id: "q31",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】商業施設の 衛生責任者が、トイレの 感染症予防清掃について 指導しています。ノロウイルスや インフルエンザの 感染を 防ぐ ため、便座の 他に トイレの 「どの 部分（高頻度接触面）」 を 重点的に アルコール消毒しなさいと 言いましたか。",
        promptEn: "[Audio Simulation] A commercial facility hygiene manager is teaching infection prevention restroom cleaning. To prevent Norovirus and flu transmission, besides toilet seats, 'which parts (high-touch surfaces)' did he instruct to thoroughly disinfect with alcohol?",
        audioScript: "衛生責任者：「みなさん、冬は ノロウイルスや インフルエンザなどの 感染症が 流行する 季節だ！ショッピングモールの トイレ清掃では、便器や 床を 磨く だけでなく、【多くのお客様が 手で 直接 触る 「高頻度接触面（こうひんどせっしょくめん）」】 の 除菌・殺菌が 極めて 重要だ！具体的には、【「トイレの 扉の ドアノブ」 「水を流す レバーや ボタン」 そして 「洗面台の 蛇口（ハンドル）」】 だ！これらを 必ず 【８０％ エタノールアルコール消毒液を 染み込ませた 清潔な クロスで 念入りに 拭き上げろ！】 ウイルスの 伝播を ここで 止めろ！」",
        audioScriptEn: "Hygiene Manager: 'Everyone, winter is the season for Norovirus and flu epidemics! In shopping mall restroom cleaning, don't just scrub bowls and floors; disinfecting 'HIGH-TOUCH SURFACES' touched directly by many customer hands is vital! Specifically: 'TOILET DOOR KNOBS', 'FLUSH LEVERS/BUTTONS', and 'SINK FAUCETS (handles)'! MUST thoroughly wipe these down using clean cloths soaked in 80% ethanol alcohol disinfectant! Stop virus transmission right here!'",
        options: [
            "手で 触る 【「扉の ドアノブ」「水を流す レバーや ボタン」「洗面台の 蛇口（ハンドル）」】 を 重点消毒する (Thoroughly disinfect hand-touched 【'DOOR KNOBS', 'FLUSH LEVERS/BUTTONS', and 'SINK FAUCETS'】)",
            "誰も 触らない 【「トイレの 天井の 裏側の 骨組みの 鉄パイプ」】 を 重点消毒する (Thoroughly disinfect 'iron structural pipes on the back side of restroom ceiling' touched by no one)",
            "お客様の 【「履いている 靴の 底（ソール）や コートの 背中」】 を 勝手に 消毒する (Arbitrarily disinfect 'soles of shoes worn by customers or backs of their coats')",
            "トイレの 外にある 【「駐車場の コンクリートの 地面や アスファルト」】 を 全面 消毒する (Thoroughly disinfect 'concrete ground and asphalt of outdoor parking lot')"
        ],
        correct: 0,
        explanation: "Sanitary infection control (トイレの高頻度接触面の除菌清掃): Disinfecting doorknobs, flush levers, and sink handles (ドアノブ・洗浄レバー・蛇口) breaks the chain of pathogen transmission."
    },
    {
        id: "q32",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】ビル清掃の 先輩が、床洗浄機 「ポリッシャー」 の 操作方法を 指導しています。ポリッシャーを 運転中に 「右（みぎ）方向」 へ 移動させたい とき、ハンドルを どのように 動かせば よいと 説明していますか。",
        promptEn: "[Audio Simulation] A building cleaning senior is teaching how to operate the floor scrubbing machine 'Polisher'. When you want to move the polisher toward the 'Right direction' during operation, how does he explain you should move the handle?",
        audioScript: "先輩：「おい、ポリッシャー（床洗浄機）の 運転練習だ！ポリッシャーの ブラシは 高速回転しているから、力ずくで 腕で 左右に 押そうとしても 絶対に 動かないぞ。いいか、ハンドルの 高さの 調整で 移動方向が 決まるんだ！【マシンを 「左（ひだり）」 に 移動させたい ときは、ハンドルを 「少し 下に 下げる（押し下げる）」】！逆に 【マシンを 「右（みぎ）」 に 移動させたい ときは、ハンドルを 「少し 上に 持ち上げる（引き上げる）」】 と、自然と 右へ すーっと 動いていく！【「右へ 行きたいときは、ハンドルを 少し 上に 持ち上げる！」】 これが プロの 操作コツだ！」",
        audioScriptEn: "Senior: 'Hey, time for floor polisher operation practice! Polisher brushes spin at high speeds, so even if you try pushing left or right with arm strength it won't budge. Listen, handle height adjustments determine movement direction! When you want to move the machine 'LEFT', 'lower (push down) the handle slightly'! Conversely, WHEN YOU WANT TO MOVE THE MACHINE 'RIGHT', 'RAISE (LIFT UP) THE HANDLE SLIGHTLY', and it naturally glides to the right! 'To go Right, lift handle up slightly!' This is the pro control secret!'",
        options: [
            "右へ 移動させたい ときは、【ハンドルを 「少し 上に 持ち上げる（引き上げる）」】 と 自然に 右へ 動く (To move Right, 【'RAISE (LIFT UP) THE HANDLE SLIGHTLY'】 and it naturally moves right)",
            "右へ 移動させたい ときは、【ハンドルを から手を 放して、「右へ 行け！」 と 大声で 叫ぶ】 (To move Right, let go of handle with both hands and scream loudly 'Go Right!')",
            "右へ 移動させたい ときは、【マシンを 足の キックで 強く 蹴飛ばして 右へ 滑らせる】 (To move Right, kick machine hard with foot to slide it right)",
            "右へ 移動させたい ときは、【電源プラグを 抜いてから、４人がかりで 右へ 担いで 運ぶ】 (To move Right, pull out power plug and 4 workers carry machine on shoulders to right)"
        ],
        correct: 0,
        explanation: "Floor polisher physics (ポリッシャーの左右移動操作): Raising handle slightly (ハンドルを少し上げる) moves polisher right; lowering handle slightly moves it left. Fundamental practical test skill."
    },
    {
        id: "q33",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】高層ビルの 外壁・窓ガラス清掃の 責任者が、当日の 天気予報を見て 緊急指示を出しています。外の 風速が 何メートル（m/s）になったため、屋上の 吊りゴンドラによる 窓ガラス清掃作業は どう なりましたか。",
        promptEn: "[Audio Simulation] The supervisor of high-rise exterior wall & window cleaning is issuing emergency instructions after checking the weather forecast. Because outdoor wind speed reached how many meters (m/s), what happened to suspended gondola window cleaning from the roof?",
        audioScript: "責任者：「緊急連絡！作業員の みんな、直ちに 屋上の 窓ガラス清掃を 中止せよ！現在、台風接近に伴う 強風のため、【屋外の 風速が 「秒速 １０メートル（１０ m/s）以上」 に 達した！】 いいか、労働安全衛生法および ビル管理規定に基づき、【風速 １０メートル以上の 強風時における 「屋上の 吊りゴンドラや ブランコ作業による 高所窓拭き」 は、ゴンドラが 風で 煽られて ビルに 衝突・墜落する ため 「即時 全面中止（作業中止）」】 である！今日は 全員 屋内（ビルの 中）に 戻り、カーペットや トイレの 内部清掃に 変更するぞ！」",
        audioScriptEn: "Supervisor: 'Emergency broadcast! All workers, halt roof window cleaning immediately! Currently due to strong winds from an approaching typhoon, OUTDOOR WIND SPEED HAS REACHED 'OVER 10 METERS PER SECOND (10 m/s)'! Listen, under occupational safety laws and building rules, DURING STRONG WINDS OVER 10 M/S, 'SUSPENDED GONDOLA AND BOSUN CHAIR HIGH WINDOW CLEANING' IS 'IMMEDIATELY & COMPLETELY CANCELLED (Suspended)' because gondolas swing in wind crashing into buildings or falling! Today everyone return indoors to perform carpet and restroom internal cleaning instead!'",
        options: [
            "風速が 【「秒速 １０メートル（１０ m/s）以上」】 になったため、高所窓拭きは 【「危険のため 即時 全面中止」】 となった (Because wind speed reached 【'OVER 10 M/S'】, high window cleaning was 【'IMMEDIATELY CANCELLED due to danger'】)",
            "風速が 【「秒速 １００メートル」】 になったため、全員 【「パラシュートを つけて 屋上から ダイブした」】 (Because wind reached 100 m/s, everyone 'attached parachutes and dived off rooftop')",
            "風速は 【「秒速 ０メートル（無風）」】 だが、【「みんなで 映画館に 行きたいから」 窓拭きを 中止した】 (Wind is 0 m/s [calm], but cancelled window cleaning 'because everyone wants to go to movie theater')",
            "風が 強いので、【「ゴンドラの上に 帆（セイル）を 立てて ヨットのように 空を 飛んで 清掃した」】 (Because wind is strong, 'set up sails on gondola to fly through sky like a yacht cleaning')"
        ],
        correct: 0,
        explanation: "High-altitude exterior window cleaning rules (強風時のゴンドラ窓拭き中止基準): By safety standards, suspended gondola work must be cancelled when wind speed exceeds 10 m/s (風速１０m/s以上で作業中止)."
    },
    {
        id: "q34",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】ショッピングモールの 清掃スタッフが、２階の ベンチで お客様が 忘れた 「白い 紙袋（ショッピングバッグ）」 を 発見しました。スタッフは この 白い 紙袋を どう 処理するよう 指導されましたか。",
        promptEn: "[Audio Simulation] A shopping mall cleaning staff member discovered a 'white paper bag (shopping bag)' forgotten by a customer on a 2nd-floor bench. How was the staff instructed to handle this white paper bag?",
        audioScript: "清掃スタッフ：「センター長、２階 中央エレベーター前の ベンチに、お客様の 忘れ物の 【「白い 紙袋（ショッピングバッグ）」】 が 置いてありました。中には 買った ばかりの 新品の セーターが 入っています。どう すれば よろしいでしょうか？」\nセンター長：「あ！それは お買い物中の お客様が 探している はずだ！いいか、絶対に 中身を 抜き取ったり 放置しては いけない。【その 「白い 紙袋（セーター入り）」 を、直ちに １階の 「総合インフォメーションカウンター（案内所）」 へ 届けてくれ！】 インフォメーションから 館内放送を 流して、落とし主の お客様へ お返しするからな！」",
        audioScriptEn: "Staff: 'Center Chief, on the bench in front of 2F central elevators, there was an abandoned 'WHITE PAPER BAG (shopping bag)' left by a customer. Inside is a newly bought sweater. What should I do?'\nChief: 'Ah! A shopping customer must be looking for that! Listen, never take contents or leave it sitting. TAKE THAT 'WHITE PAPER BAG (with sweater)' IMMEDIATELY TO THE 1F 'GENERAL INFORMATION COUNTER (Information Desk)'! The Info Desk will make an announcement over the mall PA system to return it to the owner!'",
        options: [
            "忘れ物の 【「白い 紙袋（セーター入り）」 を、直ちに １階の 「総合インフォメーションカウンター（案内所）」 へ 届ける】 (Take the forgotten 【'WHITE PAPER BAG (with sweater)' IMMEDIATELY TO THE 1F 'GENERAL INFORMATION COUNTER'】)",
            "紙袋の 【中の セーターを 自分が 着て、残った 白い 紙袋は ハサミで 切って 捨てる】 (Wear the sweater inside yourself, and cut remaining white paper bag with scissors to discard)",
            "紙袋を 【２階の ベンチから １階の 噴水池の 中へ 全速力で 投げ捨てる】 (Throw paper bag from 2F bench at full speed into 1F fountain pond)",
            "紙袋を 【自分の 家に 持って帰って、クリスマスの お友達への プレゼントにする】 (Take bag home and give as a Christmas present to your friends)"
        ],
        correct: 0,
        explanation: "Mall cleaning lost & found protocol (商業施設の拾得物マニュアル): Found shopping bags or valuables must be promptly delivered to the General Information Counter (総合インフォメーション) for owner announcements."
    },

    // ==========================================
    // SECTION 4: READING COMPREHENSION (読解) - 11 Questions
    // ==========================================
    {
        id: "q35",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【ビルクリーニング作業 安全衛生の５大原則】 を読んで 質問に 答えてください。\n\n――― 【サクラビルメンテナンス： 清掃作業 安全衛生５大原則】 ―――\nビルクリーニング作業は、転倒事故や 腰痛、洗剤による 薬傷事故などの 危険が あります。以下の ５大原則を 厳守すること。\n\n1. 【転倒防止の ための 耐滑靴（たいかつぐつ）の 着用】：\n水や ワックスで 濡れた 床は 非常に 滑りやすいです。清掃スタッフは、【必ず 靴底が 滑りにくい ゴム製である 「耐滑安全靴（すべりにくい専用靴）」 を 着用】 して 作業してください！スニーカーや サンダルでの 作業は 禁止です。\n\n2. 【腰痛予防の ための 「荷物の 持ち上げ姿勢」】：\n重い ごみ袋や バケツを 持ち上げる とき、膝（ひざ）を 伸ばした まま 腰だけを 曲げて 持ち上げると、ギックリ腰や 重い 腰痛に なります！【必ず 「膝（ひざ）を しっかり 曲げて、腰を 落とし、荷物を 体に 近づけてから」 立ち上がる 姿勢】 で 持ち上げてください。\n――――――――――――――――――――――――――\n\n質問：重い ごみ袋や バケツを 持ち上げる とき、ギックリ腰などの 腰痛を 防ぐ ために どのような 姿勢で 持ち上げなければなりませんか。",
        promptEn: "Read the 【5 Golden Safety Principles in Building Cleaning】 below and answer the question.\n[Safety Principles] Building cleaning involves slipping, back pains, and chemical burn risks. 1. Wear non-slip rubber shoes. 2. Posture for lifting heavy loads to prevent back pains: When lifting heavy trash bags or buckets, if you keep your knees straight and bend only your back, you will suffer acute back strain (herniated disc)! You MUST LIFT WITH THE POSTURE OF 'BENDING YOUR KNEES DEEPLY, LOWERING YOUR HIPS, BRINGING THE LOAD CLOSE TO YOUR BODY', and then standing up using leg strength!\n\nQuestion: When lifting heavy trash bags or water buckets, what posture must be used to lift them in order to prevent back injuries and acute lower back pain?",
        options: [
            "【「膝（ひざ）を しっかり 曲げて、腰を 落とし、荷物を 体に 近づけてから」】 立ち上がる 姿勢で 持ち上げる (Lift with posture of 【'BENDING KNEES DEEPLY, LOWERING HIPS, BRINGING LOAD CLOSE TO BODY'】 and standing up)",
            "【「膝（ひざ）を まっすぐ 伸ばした まま、腰と 背骨だけを 急激に 折り曲げて」】 持ち上げる (Lift by 'keeping knees completely straight and sharply bending only waist and spine')",
            "【「両目を 閉じて 片足で 立ちながら、体ごと 後ろに 大きく 反り返って」】 投げ上げる (Throw load up by 'closing both eyes, standing on one foot, and bending entire body far backward')",
            "【「荷物を 体から ２メートル 離した 手先の 指の 力だけ」】 で 持ち上げる (Lift using 'only finger strength while holding load 2 meters away from body')"
        ],
        correct: 0,
        explanation: "Occupational health and safety ergonomics (腰痛予防の重量物運搬姿勢): Lifting with straight knees strains spinal discs. Bending knees (膝を曲げ腰を落とす) and keeping loads close prevents chronic lower back pain."
    },
    {
        id: "q36",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【清掃洗剤「希釈倍率（きしゃくばいりつ）」計算マニュアル】 を読んで 質問に 答えてください。\n\n――― 【ビル清掃業務： 洗剤の 希釈（水で薄めること）規則と 安全作法】 ―――\n洗剤は 濃すぎると 建物の 建材（床や 壁）を 傷め、薄すぎると 汚れが 落ちません。必ず 定められた 希釈倍率を 守ること。\n\n◆ 【「２０倍 希釈液」 を １０リットル （１０,０００ ml） 作る 計算式】：\n・全体量 １０,０００ ml ÷ ２０倍 ＝ 【洗剤原液： ５００ ml （０.５リットル）】\n・残り ＝ 【水： ９,５００ ml （９.５リットル）】\n\n◆ 【洗剤希釈時の 「安全作法（入れる 順番）」 （最重要！）】：\n濃い 酸性洗剤や アルカリ洗剤を 希釈する 際、【「バケツに入った 原液の 上に、水を 勢いよく 注ぐ」 のは 絶対に 禁止（危険）】 です！急激な 化学反応で 洗剤が 激しく 沸騰・発熱し、液が 顔や 目に 飛び散って 失明します！\n※ 【正しい 手順】： 必ず 【「バケツに 先に 『水』 を たっぷり入れて おき、その 『水の中』 へ 洗剤原液を ゆっくり 静かに 注ぎ入れる」 （水に 洗剤を入れる！）】 という 順番を 厳守してください！\n――――――――――――――――――――――――――\n\n質問：濃い 洗剤を 水で 希釈する（薄める） とき、液の 飛び散りや 失明事故を 防ぐ ため、バケツには どのような 順番で 水と 洗剤を 入れなければなりませんか。",
        promptEn: "Read the 【Cleaning Detergent Dilution Calculation Manual】 below and answer the question.\n[Dilution Rules & Safety Protocol] 20x dilution calculation: 10,000 mL ÷ 20 = 500 mL chemical, 9,500 mL water. Safety Order for Dilution (CRITICAL!): When diluting concentrated acid or alkaline detergents, POURING WATER FORCEFULLY ON TOP OF CONCENTRATED CHEMICAL IN THE BUCKET IS STRICTLY PROHIBITED (Dangerous)! Sudden chemical reactions cause violent boiling/heat, splashing chemical into eyes causing blindness! *Correct Procedure: You MUST STRICTLY FOLLOW the order of 'PUTTING PLENTY OF 'WATER' INTO THE BUCKET FIRST, AND THEN SLOWLY & QUIETLY POURING CONC. DETERGENT INTO THAT 'WATER'' (Add chemical to water)!\n\nQuestion: When diluting concentrated detergent with water, in what order must water and detergent be added to the bucket to prevent splashing and blindness accidents?",
        options: [
            "必ず 【「バケツに 先に 『水』 を入れて おき、その 『水の中』 へ 洗剤原液を ゆっくり 注ぎ入れる」】 (MUST 【'PUT 'WATER' IN BUCKET FIRST, and then slowly pour conc. detergent into that 'WATER''】)",
            "必ず 【「バケツに 先に 『洗剤原液』 を たっぷり入れて、その 上から 高圧ホースで 水を 激しく 注ぐ」】 (MUST 'put conc. detergent in bucket first, and violently blast water from above with high-pressure hose')",
            "必ず 【「洗剤と 水を 自分の 口の中に 同時に 含んで、口の中で 混ぜてから バケツに 吐き出す」】 (MUST 'hold chemical and water inside your mouth simultaneously, mix in mouth, and spit into bucket')",
            "順番は 関係ないので、【「お湯 １００度と 氷と 洗剤」 を 目を 閉じて バケツに 投げ入れる】 (Order doesn't matter, so 'throw 100°C boiling water, ice, and detergent' into bucket with eyes closed)"
        ],
        correct: 0,
        explanation: "Chemical dilution chemistry safety (洗剤希釈の順番・水に洗剤を入れる): Adding water to acid causes exothermic boiling splashes (希釈熱の突沸). Always add concentrated chemical slowly into cold water."
    },
    {
        id: "q37",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【オフィスビル 廊下・床面「ワックス剥離（はくり）清掃」手順】 を読んで 質問に 答えてください。\n\n――― 【ビル清掃技術： 「ワックス剥離（はくり・古い ワックスを 剥がす作業）」 の 安全規定】 ―――\n床に 塗られた 古い ワックスが 黒ずんだ 場合、強力な 「剥離剤（はくりざい・ケミカル）」 を まいて ポリッシャーで 古い 皮膜を 完全に 削り取る 「剥離清掃」 を 行います。\n\n◆ 【剥離作業中（はくり さぎょうちゅう）の 特殊な 危険と 対策】：\n床に まいた 「剥離剤の 液体」 は、【通常の 水や 洗剤と 比べ物にならないほど 「氷の上 や 油の 沼の ように 極度に ツルツル 滑りやすい（超高危険度スリップ）」】 という 特徴が あります！\n\n◆ 【作業員の 転倒防止 義務装備】：\nそのため、剥離作業を 行う 清掃スタッフは、通常の 運動靴ではなく、【必ず 靴底に 滑り止めピン（特殊スパイク や 耐滑ソール）が ついた 「剥離作業専用 耐滑長靴（はくり ズック・セフティシューズ）」 を 着用】 すること！普通の 靴で 剥離剤の 上に 立つと １００％ 滑って 後頭部を 強打します！\n――――――――――――――――――――――――――\n\n質問：古い 床ワックスを 剥がす 「剥離作業（はくりさぎょう）」 を 行う とき、床が 氷のように 極度に 滑りやすいため、清掃スタッフは 何を 着用しなければなりませんか。",
        promptEn: "Read the 【Office Building Floor Wax Stripping Procedures】 below and answer the question.\n[Wax Stripping Safety Rules] When old wax turns dark, we scatter strong 'Stripping Agent (Hakurizai)' and scrub with polishers to strip old films. Extreme Hazard During Stripping: The 'stripping liquid' scattered on floors has the characteristic of being 'EXTREMELY SLIPPERY LIKE ICE OR AN OIL SWAMP (Ultra-high slip hazard)', incomparably worse than normal water or detergent! Mandatory Worker PPE: Therefore, cleaning staff performing stripping work must not wear normal sneakers, but MUST WEAR 'SPECIAL NON-SLIP STRIPPING SAFETY BOOTS (Hakuri Boots with spiked/anti-slip soles)'! Standing on stripping liquid in normal shoes results in 100% slipping and striking back of head!\n\nQuestion: When performing 'Wax Stripping Work (Hakuri Sagyo)' to remove old floor wax, because the floor becomes extremely slippery like ice, what must cleaning staff wear?",
        options: [
            "靴底に 滑り止めが ついた 【「剥離作業専用 耐滑長靴（はくり専用 セフティシューズ）」】 を 着用する (Wear 【'SPECIAL NON-SLIP STRIPPING SAFETY BOOTS (Hakuri anti-slip safety shoes)'】 with non-slip soles)",
            "滑る 床で スケートを 楽しむ ため、【靴底に ローラーがついた 「ローラースケート・スケート靴」】 を 着用する (To enjoy skating on slippery floor, wear 'roller skates / ice skates' with rollers on soles)",
            "靴を 履かずに、【自分の 「素足（はだし・靴下なし）」 の ままで 剥離剤の 沼の上を 歩く】 (Without shoes, walk across stripping swamp in 'bare feet [hadashi without socks]')",
            "転んだ ときに 弾むように、【足の 裏に 「風船を ５個ずつ 縛り付けた 状態」】 で 作業する (To bounce when falling, work with '5 air balloons tied to soles of each foot')"
        ],
        correct: 0,
        explanation: "Floor stripping safety (ワックス剥離清掃の滑り止め安全靴): Stripping chemicals dissolve wax into a super-slippery slime. Specialized anti-slip stripping boots (剥離専用耐滑長靴・スパイク靴) are mandatory to prevent fatal head-striking falls."
    },
    {
        id: "q38",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【ホテル客室清掃（ベッドメイキング・アメニティ補充）チェック表】 を読んで 質問に 答えてください。\n\n――― 【サクラホテル＆リゾート： 客室清掃 品質マニュアル】 ―――\n当ホテルでは、お客様に 「また 泊まりたい」 と 感動していただける 完璧な 客室を 提供するため、以下の ベッドメイキング手順と 時間基準を 定めています。\n\n◆ 【清掃時間の 目安】：\nツインルーム １部屋あたりの 標準清掃時間（ベッド作成、風呂掃除、掃除機がけ 全て 込み）は 【「２０分間」】 です。素早く 丁寧な 作業を 心がけてください。\n\n◆ 【ベッドメイキングの 最重要ポイント 「シーツの シワ・たるみ」】：\nベッドの シーツや ピローケース（枕カバー）を 張り替える 際、【「シーツに １本でも シワや たるみ（よれ） が 残っている こと」 は 品質不良として 絶対に 許されません！】\n※ 必ず ベッドの ４つの 角（かど）を きっちり 【「三角折り（ホスピタルコーナー）」 に 折って マットレスの 下に 強く 張り込み、水面のように ピシッと シワひとつ ない 平らな 状態に 仕上げる】 こと！これが プロの ホテルベッドメイキングです。\n――――――――――――――――――――――――――\n\n質問：ホテルの 客室清掃で ベッドの シーツを 張り替える （ベッドメイキングする） とき、どのような 状態に 仕上げることが 品質上 最も 求められていますか。",
        promptEn: "Read the 【Hotel Housekeeping Bed-Making Checklist】 below and answer the question.\n[Quality Manual] Standard room cleaning time per twin room is '20 MINUTES'. Critical Bed-Making Point 'Sheet Wrinkles / Sagging': When changing bed sheets and pillowcases, HAVING EVEN A SINGLE WRINKLE OR SAGGING LEFT ON THE SHEET IS NEVER ALLOWED AS DEFECTIVE QUALITY! *You MUST tightly fold the 4 corners into 'TRIANGULAR FOLDS (Hospital Corners)', pull and tuck them firmly under mattress, and FINISH IN A COMPLETELY FLAT STATE WITH NOT A SINGLE WRINKLE LIKE A SMOOTH WATER SURFACE! This is pro hotel bed-making.\n\nQuestion: When changing bed sheets (bed-making) in hotel guest room cleaning, finishing in what state is most demanded for quality?",
        options: [
            "角を 三角折りに して 強く 張り込み、【「シワや たるみが ひとつもない ピシッと 平らな 状態」】 に 仕上げる (Tuck corners in triangular folds, finishing in a 【'COMPLETELY FLAT STATE WITH NOT A SINGLE WRINKLE OR SAGGING'】)",
            "お客様が 楽しく 遊べるように、【シーツを 丸めて 「大きなおにぎりの 形や 山の 形に シワくしゃ」】 に する (So guests can play, crumple sheets into 'huge rice ball shapes or mountain shapes all wrinkled up')",
            "シーツを 敷かずに、【「マットレスの 裸の コイルの上に 直接 枕を 置いただけ」】 の 状態に する (Without laying sheets, leave in state of 'just putting pillows directly on bare mattress coils')",
            "シーツの 上に 【「ハサミで １０個の 大きな 丸い 穴を あけて 通気性を よくした」】 状態に する (Leave in state where '10 big round holes are cut in sheet with scissors to improve ventilation')"
        ],
        correct: 0,
        explanation: "Hospitality housekeeping standards (ホテル客室ベッドメイキングの品質): Hotel sheets must be stretched tightly without wrinkles (シワ・たるみなし) using tight triangular corner tucks (三角折り / Hospital corners)."
    },
    {
        id: "q39",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【「まぜるな危険」： 塩素系漂白剤と酸性洗剤の 混合禁止規定】 を読んで 質問に 答えてください。\n\n――― 【ビル清掃の 科学と 法律： 「まぜるな危険」 の 厳格規定】 ―――\n日本の 洗剤の ボトルには、大きな 黄色い 文字で 【「まぜるな危険 （酸性タイプ・塩素系）」】 と いう 警告ラベルが 表示されています。\n\n◆ 【なぜ 混ぜてはいけないのか？（化学的な 理由）】：\nトイレの 黄ばみを 溶かす 【「酸性洗剤（塩酸・クエン酸等）」】 と、カビを 除菌する 【「塩素系漂白剤（次亜塩素酸ナトリウム・ハイター等）」】 が 混ざると、一瞬で 猛毒の 【「塩素ガス（Cl2）」】 が 発生します。\n\n◆ 【塩素ガスの 恐ろしさと 人体被害】：\n発生した 塩素ガスを 吸い込むと、目や 喉、肺の 呼吸器が 焼けただれ、【「激しい 咳、呼吸困難、意識不明、そして 死に至る」】 という 大惨事になります。過去の 清掃作業でも 複数の 死亡事故が 起きている ため、【この ２種類の 洗剤を 同じ 場所や 同じ バケツで 同時に 使う ことは、法律と 業務規約で 絶対に 禁止】 されています！\n――――――――――――――――――――――――――\n\n質問：「酸性洗剤」 と 「塩素系漂白剤（ハイター）」 を 一緒に 混ぜたり 同時に 使う ことが 絶対に 禁止されているのは、なぜですか。",
        promptEn: "Read the 【'Do Not Mix - Danger': Chlorine Bleach & Acid Ban】 below and answer the question.\n[Science & Law of Cleaning: Do Not Mix Rules] Japanese detergent bottles display 'DO NOT MIX - DANGER (Acid & Chlorine types)' labels. Why mixing is banned: When 'Acid Detergents' melt yellow scale + 'Chlorine Bleach (Sodium hypochlorite)' kill mold mix, deadly toxic 'CHLORINE GAS (Cl2)' erupts instantly. Terror of Chlorine Gas: Inhaling this gas burns eyes, throat, and lungs, leading to 'VIOLENT COUGHING, RESPIRATORY FAILURE, UNCONSCIOUSNESS, AND DEATH'. Multiple fatal accidents occurred in past cleaning work, so USING THESE 2 DETERGENTS SIMULTANEOUSLY IN THE SAME PLACE/BUCKET IS STRICTLY PROHIBITED by law and work rules!\n\nQuestion: Why is mixing or simultaneously using 'Acid Detergent' and 'Chlorine Bleach' strictly prohibited?",
        options: [
            "混ざると 猛毒の 【「有毒な 塩素ガス」 が 発生し、吸い込むと 呼吸困難や 死に至る 危険】 が ある から (Because mixing erupts deadly toxic 【'CHLORINE GAS', carrying risks of respiratory failure and death】 if inhaled)",
            "混ざると 洗剤が 【甘い キャラメルの 香りに 変わって、子供たちが 誤って 飲んでしまう】 から (Because mixing turns detergent into 'sweet caramel scent, causing children to accidentally drink it')",
            "混ざると 【ビルの 床が 透明な ガラスになって、下の 階の 人が 丸見えになって 恥ずかしい】 から (Because mixing turns building floors into transparent glass, making it embarrassing seeing downstairs people)",
            "混ざると 【洗剤の 泡が 空に向かって １００メートル 吹き出して ビルが 泡だらけになる】 から (Because mixing makes detergent foam shoot 100 meters into sky burying building in bubbles)"
        ],
        correct: 0,
        explanation: "Core chemical reaction hazard (次亜塩素酸ナトリウムと酸の混合による塩素ガス発生): Sodium hypochlorite + Acid = Chlorine gas (有毒塩素ガス発生). Standard test question on all Japanese hygiene exams."
    },
    {
        id: "q40",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【業務用 真空掃除機（バキュームクリーナー）点検および使用基準】 を読んで 質問に 答えてください。\n\n――― 【清掃機械 メンテナンス： 業務用 バキュームクリーナー 管理規定】 ―――\nオフィスの カーペット清掃に 欠かせない 業務用 真空掃除機は、正しい 使い方を しないと 吸引力が 落ちたり モーターが 焼損（発火）します。\n\n◆ 【ごみパック（集塵袋）の 交換基準】：\n掃除機の中の 布袋や 紙パックに ごみが いっぱいに なると、空気の 通り道が ふさがれて 吸引力が ゼロになり、モーターが 過熱して 火災を 起こします！そのため、【「ごみパックの 容量の 約 ８割（８０％）」 まで ごみが 溜まったら、満タンを 待たずに 必ず ごみを 捨てるか 新品パックに 交換】 してください！\n\n◆ 【水や 濡れた ゴミの 吸引禁止（乾式掃除機の場合）】：\n通常の 「乾式（ドライ）掃除機」 で、【床に こぼれた お茶や ジュースなどの 「液体（水分）」 を 絶対に 吸い込んでは いけません！】 水分が モーターに入ると 一瞬で 漏電・ショートして 壊れます（※ 液体を 吸う 場合は、必ず 「湿乾両用（ウェット＆ドライ）掃除機」 を 使う こと）。\n――――――――――――――――――――――――――\n\n質問：通常の 「乾式（ドライ）業務用 真空掃除機」 を 使う とき、モーターの 漏電や 故障事故を 防ぐ ために 何を 吸い込んでは いけませんか。",
        promptEn: "Read the 【Commercial Vacuum Cleaner Inspection & Usage Standards】 below and answer the question.\n[Vacuum Maintenance Rules] Dust Bag Replacement Standard: When dust bags get full, airflow is blocked causing zero suction and motor overheating fires! Therefore, when dust reaches 'APPROX. 80% OF CAPACITY', MUST EMPTY OR REPLACE BAG without waiting for 100% full! Prohibition of Sucking Water/Wet Debris (For Dry Vacuums): With standard 'Dry Vacuum Cleaners', YOU MUST NEVER SUCK UP 'LIQUIDS (water, spilled tea, juice)' from floors! Moisture entering motors causes instant electrical short circuits and breakdowns (*To suck liquids, must use 'Wet & Dry Vacuums').\n\nQuestion: When using a standard 'Dry Commercial Vacuum Cleaner', what must you NOT suck up in order to prevent motor short circuits and breakdown accidents?",
        options: [
            "床に こぼれた お茶や 水などの 【「液体（水分や 濡れた ゴミ）」】 を 吸い込んでは いけない (You must NOT suck up 【'LIQUIDS (moisture or wet debris)'】 like spilled tea or water on floors)",
            "オフィスの カーペットの上に 落ちている 【「乾いた ホコリや 細かい 砂、紙くず」】 を 吸ってはいけない (You must not suck up 'dry dust, fine sand, or paper scraps' fallen on office carpets)",
            "部屋の 空気に 漂っている 【「透明な 酸素と 窒素の 空気」】 を 吸ってはいけない (You must not suck up 'transparent oxygen and nitrogen air' floating in room atmosphere)",
            "床の 上に 落ちている 【「乾いた 桜の花びらや 落ち葉」】 を 吸ってはいけない (You must not suck up 'dry cherry blossom petals or fallen leaves' sitting on floors)"
        ],
        correct: 0,
        explanation: "Cleaning machinery maintenance (乾式真空掃除機の禁止事項): Using a dry-only vacuum (乾式バキューム) to suction water or liquid spills causes internal electric motor shorting and smoke/fires."
    },
    {
        id: "q41",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【脚立（きゃたつ）および 高所窓拭き作業の 安全基準】 を読んで 質問に 答えてください。\n\n――― 【厚生労働省・労働安全衛生規定： 脚立（きゃたつ）の 安全使用マニュアル】 ―――\nビル清掃において、脚立からの 墜落・転落事故は 毎年 多くの 重傷者・死亡者を 出しています。脚立を使用する 際は 以下の 禁止事項を 厳守してください。\n\n◆ 【脚立作業における 「３大 絶対禁止事項」】：\n1. 【天板乗りの 禁止】 脚立の 【「一番 上の 平らな 台（天板・てんばん）」 に 立つ ことは 絶対禁止】 です！重心が高くなり １００％ 転倒します。必ず 天板より 下の 踏み板（ステップ）に 立ってください。\n2. 【またぎ乗りの 禁止】 天板や 踏み板に 【「足を 左右に 広げて またがって 乗る（馬に乗る ような 姿勢）」 ことも 禁止】 です！\n3. 【はしご状での 使用禁止】 脚立を 開かずに １本の はしごの ように 壁に 立てかけて 上る のは 非常に 滑りやすく 危険です。必ず 【「２本の 脚を 完全に 開き、金属の 止め金具を カチッと 水平に ロックして」 使用する】 こと！\n――――――――――――――――――――――――――\n\n質問：脚立（きゃたつ）を 開いて 高い 場所の 清掃作業を 行う とき、転落事故を 防ぐ ために 法律で 「絶対に してはいけない（禁止されている）」 ことは どれですか。",
        promptEn: "Read the 【Stepladder & High Window Cleaning Safety Standards】 below and answer the question.\n[Ministry of Health, Labour and Welfare Stepladder Safety Manual] Stepladder falls cause many fatalities yearly. 3 Absolute Prohibitions: 1. Ban on standing on top plate: STANDING ON THE 'VERY TOP FLAT TABLE STEP (Tenban)' IS STRICTLY PROHIBITED! Center of gravity rises causing 100% tipping. Stand on steps below top plate. 2. Ban on straddling: STRADDLING ACROSS TOP PLATE OR STEPS WITH LEGS SPREAD LEFT AND RIGHT is also banned! 3. Ban on ladder-shape use: Always 'OPEN BOTH LEGS COMPLETELY AND LOCK METAL BRACES HORIZONTALLY WITH A CLICK'!\n\nQuestion: When opening a stepladder to clean high places, which action is 'strictly prohibited by law (must never be done)' to prevent falling accidents?",
        options: [
            "脚立の 【「一番 上の 平らな 台（天板・てんばん）」 に 立つこと・またがること】 (Standing on or straddling across the 【'VERY TOP FLAT TABLE STEP (Tenban)'】 of the stepladder)",
            "脚立の 【２本の 脚を 完全に 開き、金属の 止め金具を カチッと 水平に ロックして】 使うこと (Opening both legs completely and locking metal braces horizontally with a click before using)",
            "天板より 【１段 または ２段 下の 広い 踏み板（ステップ）」 に 安定して 立つ】 こと (Standing stably on wide steps '1 or 2 steps lower' than top plate)",
            "作業中、【下で もう １人の スタッフが 脚立の 脚を しっかり 支えて ２人１組で 作業する】 こと (Working in pairs while 'another staff member steadily supports ladder legs from below' during work)"
        ],
        correct: 0,
        explanation: "Occupational safety regulations (脚立使用時の天板乗りの禁止): Standing on the uppermost platform step of a stepladder (天板乗り) is prohibited under Japanese Occupational Safety and Health Regulations."
    },
    {
        id: "q42",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【商業施設 トイレ日常清掃および 感染症予防マニュアル】 を読んで 質問に 答えてください。\n\n――― 【衛生管理規定： カラーコーディングシステム（クロスと バケツの 色分けルール）】 ―――\nショッピングモール等の トイレ清掃では、便器の 大腸菌や ウイルスを 洗面台や ドアノブへ 広げて しまう 「交差汚染（こうさおせん・菌を 塗り広げること）」 を 絶対に 防がなければなりません！\n\n◆ 【「カラーコーディング（色分け）」 の 厳格ルール】：\n当施設では、清掃に使用する 雑巾（マイクロファイバークロス）や モップ、バケツを、清掃する 場所ごとに 「色（カラー）」 で 完全分離しています！\n・【赤色（レッド）の クロス＆バケツ】 ＝ 【「大便器・便座・小便器」 専用！】 （※ 便器以外の 場所は 絶対に 拭かない！）\n・【青色（ブルー）の クロス＆バケツ】 ＝ 【「洗面台・鏡・シンク周り」 専用！】\n・【黄色（イエロー）の クロス＆バケツ】 ＝ 【「扉の ドアノブ・手すり・ペーパーホルダー」 専用！】\n\n※ もし 作業員が 【「便座を 拭いた 赤い クロスで、そのまま 洗面台や ドアノブを 拭く」 ことは 最悪の 衛生違反（解雇対象）】 と なります！必ず 色分けを 守ってください！\n――――――――――――――――――――――――――\n\n質問：トイレの 便器の 菌を 洗面台や ドアノブに 広げる 「交差汚染（こうさおせん）」 を 防ぐ ため、この 施設では 清掃用の クロス（布）や バケツを どのように 管理していますか。",
        promptEn: "Read the 【Shopping Mall Restroom Routine Cleaning & Infection Prevention Manual】 below and answer the question.\n[Hygiene Rules: Color Coding System (Color separation of cloths and buckets)] In mall restrooms, we must prevent 'Cross-Contamination' (spreading E. coli/viruses from toilets to sinks or doorknobs)! Strict Color Coding Rules: Cloths, mops, and buckets are completely separated by COLOR depending on cleaning area! RED Cloths & Buckets = Dedicated to 'Toilet Bowls, Seats, Urinals'! BLUE Cloths & Buckets = Dedicated to 'Sinks, Mirrors, Washbasins'! YELLOW Cloths & Buckets = Dedicated to 'Door Knobs, Handrails, Paper Holders'! *If a worker wipes sinks or doorknobs using a red cloth that just wiped a toilet seat, it is the worst hygiene violation (subject to dismissal)! Must follow color coding!\n\nQuestion: To prevent 'cross-contamination' spreading bacteria from toilet bowls to sinks and doorknobs, how does this facility manage cleaning cloths and buckets?",
        options: [
            "清掃する 場所（便器用＝赤、洗面台用＝青、手すり用＝黄など） ごとに、【「色（カラー）」 で 完全に 分けて 使用する】 (Completely separate and use by 【'COLOR (Red for toilets, Blue for sinks, Yellow for handrails)'】 for each cleaning area)",
            "色分けは せず、【「１枚の 黒い 雑巾だけ」 で トイレの 便器から ロビーの レストランの 机まで 全て 拭く】 (No color coding; wipe everything from toilet bowls to restaurant lobby dining tables with 'just 1 black rag')",
            "雑巾は 使わず、【自分の 「着ている 制服の シャツの 袖（そで）」 で 便座も ドアノブも 綺麗に 拭く】 (Don't use rags; wipe both toilet seats and doorknobs clean using 'the sleeves of your own uniform shirt')",
            "毎日 朝 オフィスの 近くの 【「川や 池の 泥水に 浸した 新聞紙」】 を 使って 全ての トイレを 磨く (Every morning polish all toilets using 'newspaper sheets soaked in muddy river/pond water' near office)"
        ],
        correct: 0,
        explanation: "Hygiene control standard (カラーコーディングによる交差汚染防止): Color-coding cloths/buckets by zone (赤色＝便器、青色＝洗面台、黄色＝高頻度接触面) prevents fecal pathogen cross-contamination."
    },
    {
        id: "q43",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【オフィスビル 廃棄物「分別（ぶんべつ）」および リサイクル規定】 を読んで 質問に 答えてください。\n\n――― 【ビル環境管理室： 廃棄物・ごみ収集ルールと 火災防止規定】 ―――\nビル内で 発生する ごみは、環境保全と 収集車の 火災事故防止の ため、厳格に 分別して 排出する 義務があります。\n\n◆ 【最悪の ごみ収集車 爆発・火災事故 「スプレー缶・ライターの 混入」】：\nオフィスや 店舗の ごみを 捨てる 際、【中身（ガスや 液体）が 残った ままの 「スプレー缶（ヘアスプレー・殺虫剤等）」 や 「使い捨てライター」、「リチウムイオン電池（モバイルバッテリー）」】 を、「燃える ごみ（紙くず等）」 の 袋に 混ぜて 捨ててはいけません！\n\n※ もし これらが 燃える ごみに 混入すると、ごみ収集車（パッカー車）が ごみを 強く 圧縮・押しつぶした 瞬間、【中で ガスが 漏れて 爆発し、収集車が 大炎上する 「ごみ収集車 火災事故」 が 発生】 します！スプレー缶や ライターは、【必ず 中身を 完全に 使い切り、穴を開けずに、別袋で 「危険物・資源ごみ」 として 専用ボックスへ 分別】 してください！\n――――――――――――――――――――――――――\n\n質問：中身が 残っている 「スプレー缶」 や 「ライター」「リチウムイオン電池」 を、オフィスの 「燃える ごみ」 の 袋に 混入させて 捨ててはいけないのは、なぜですか。",
        promptEn: "Read the 【Office Building Waste Sorting & Recycling Regulations】 below and answer the question.\n[Waste Collection Rules & Fire Prevention] Worst Garbage Truck Explosion & Fire Accident 'Mixing Spray Cans & Lighters': When discarding office trash, YOU MUST NEVER MIX 'SPRAY CANS (hair spray, pesticides)', 'DISPOSABLE LIGHTERS', OR 'LITHIUM-ION BATTERIES (power banks)' WITH REMAINING GAS/LIQUID inside 'burnable trash' bags! *If these are mixed into burnable trash, the moment the garbage compression truck crushes the trash, GAS LEAKS INSIDE AND EXPLODES, CAUSING A MAJOR 'GARBAGE TRUCK INFERNO FIRE ACCIDENT'! Spray cans and lighters MUST BE COMPLETELY USED UP, NOT PUNCTURED, AND SORTED INTO SEPARATE BAGS as 'hazardous/recyclable waste' into dedicated boxes!\n\nQuestion: Why is it strictly prohibited to mix 'Spray Cans', 'Lighters', and 'Lithium-ion Batteries' with remaining contents into office 'burnable trash' bags?",
        options: [
            "ごみ収集車が 圧縮した 瞬間に、【中で ガスが 爆発して 収集車が 大炎上する 「火災事故」 が 起こる】 から (Because the moment the garbage truck crushes trash, 【GAS EXPLODES INSIDE CAUSING MAJOR 'INFERNO FIRE ACCIDENTS'】)",
            "ごみ収集車の 【運転手さんが スプレーの 香りで 眠くなって お昼寝を 始めて しまう】 から (Because spray scents make the garbage truck driver sleepy causing him to take an afternoon nap)",
            "スプレー缶が 混ざると、【ごみ袋が 空に向かって 気球のように ふわふわ 飛んでいってしまう】 から (Because mixing spray cans makes trash bags float away into sky like hot air balloons)",
            "ライターが 混ざると、【オフィスの ゴミ箱の中から カブトムシや クワガタ虫が 大量に 生まれる】 から (Because mixing lighters causes massive swarms of rhinoceros beetles and stag beetles to spawn from office trash bins)"
        ],
        correct: 0,
        explanation: "Environmental cleaning safety (ごみ収集車・パッカー車の火災防止): Aerosol cans, gas lighters, and lithium batteries mixed into ordinary trash explode when compressed in garbage trucks (塵芥車爆発火災事故)."
    },
    {
        id: "q44",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【床洗浄機「ポリッシャー」の 安全操作と コード取り扱い規則】 を読んで 質問に 答えてください。\n\n――― 【清掃機械 安全運転ガイド： 電動ポリッシャー 電源コードの 取り扱い】 ―――\nポリッシャー（床洗浄機）は、円形の パッドや ブラシが 毎分 ２００回転以上の 高速で 回転し、床を 強力に 洗浄・磨き上げる プロ専用機械です。\n\n◆ 【最悪の 運転事故 「電源コードの 巻き込み・切断事故」】：\nポリッシャーを 運転する 際、最も 注意しなければならないのが 【「機械の 電源コードを、高速回転する ポリッシャーの ブラシの下に 巻き込んで 踏んでしまう（轢いてしまう） 事故」】 です！\n\n※ もし 回転ブラシで 自分の 電源コードを 巻き込んで 切断した場合、【一瞬で 火花が 飛び散り、高圧電流による 「重大な 感電事故（感電死）」 や 「ビルの ブレーカーが 落ちて ビル全館が 停電する 大パニック」】 を 引き起こします！\n◆ 【予防作法】： コードは 常時 【「作業員の 肩や 肩口に かけて 浮かせた 状態」】 で 保持し、絶対に 床の ポリッシャーの 進行方向に コードを 這わせない（落とさない） こと！\n――――――――――――――――――――――――――\n\n質問：電動ポリッシャー（床洗浄機）を 運転するとき、高速回転する ブラシの下に 「機械の 電源コード」 を 巻き込んで 切断すると、どのような 重大事故が 起こりますか。",
        promptEn: "Read the 【Floor Scrubber 'Polisher' Safety & Power Cord Rules】 below and answer the question.\n[Polisher Safety Guide: Power Cord Handling] Polishers spin brushes at over 200 rpm. Worst Operation Accident 'Power Cord Entanglement / Cutting Accident': When driving polishers, the most dangerous risk is 'RUNNING OVER AND ENTANGLING THE MACHINE'S OWN POWER CORD UNDER THE HIGH-SPEED SPINNING BRUSH'! *If the rotating brush entangles and cuts the power cord, INSTANT SPARKS FLY CAUSING A 'MAJOR ELECTRIC SHOCK ACCIDENT (electrocution death)' OR 'TRIPPING BUILDING BREAKERS CAUSING TOTAL BUILDING BLACKOUT PANIC'! Preventive Protocol: Always hold cords 'draped over worker's shoulder to keep them raised off the floor', and never let cords lie in polisher's path!\n\nQuestion: When operating an electric floor polisher, what major accident occurs if the high-speed spinning brush entangles and cuts the 'machine's power cord'?",
        options: [
            "火花が 散って 【高圧電流による 「重大な 感電事故（感電死）」 や 「ビルの 全館停電」】 を 引き起こす (Sparks fly causing 【'MAJOR ELECTRIC SHOCK ACCIDENTS (electrocution)' OR 'TOTAL BUILDING BLACKOUTS'】)",
            "ポリッシャーが 【可愛い 音楽を 奏でながら、自動で 美味しい コーヒーを 淹れて くれる】 (Polisher plays cute music while automatically brewing delicious hot coffee for you)",
            "切れた コードの 先から 【きれいな シャボン玉が １万個 飛び出して ロビーが メルヘンになる】 (10,000 pretty soap bubbles fly out of severed cord turning lobby into a fairytale world)",
            "ポリッシャーが 【ロボットに変身して、夜空へ 飛んでいって お星様になる】 (Polisher transforms into a robot, flies into night sky, and turns into a star)"
        ],
        correct: 0,
        explanation: "Floor polisher electrical safety (ポリッシャーのコード巻き込み・感電事故防止): Running over and slicing the machine's live power cord with the spinning brush causes fatal electrocutions (感電事故) and building short circuits."
    },
    {
        id: "q45",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【ビルクリーニング業「特定技能（SSW）」技能検定および手当規約】 を読んで 質問に 答えてください。\n\n――― 【サクラビルメンテナンス： 外国人スタッフ 資格取得支援および 手当規約】 ―――\n当ビル管理会社では、特定技能（SSW）として 活躍する 清掃スタッフの 皆さんが 国家資格を 取得し、現場の リーダー・現場責任者として キャリアアップできるよう 全力で 応援しています！\n\n◆ 【会社が 取得を 奨励する 資格】：\n・「ビルクリーニング技能士 ３級・２級・１級」（国家試験）\n・「清掃作業監督者」・「建築物環境衛生管理技術者（ビル管）」\n\n◆ 【合格者への 「資格お祝い 昇給手当（お給料アップ！）」】：\n見事 【「ビルクリーニング技能士 ２級」】 の 国家試験に 合格した スタッフには、お祝いおよび 評価として、合格した 翌月から 【毎月のお給料に 「月額 １２,０００円 （年間 １４万４千円）」 の 資格手当が ずっと 支給（上乗せ）】 されます！さらに、現場責任者（リーダー）に 任命されると 【「役職手当 月額 ２０,０００円」】 が 追加で プラスされます！ぜひ スキルを 磨いて 挑戦してください！\n――――――――――――――――――――――――――\n\n質問：この ビル管理会社の 支援制度で 「ビルクリーニング技能士 ２級」 の 国家試験に 合格すると、翌月から お給料は どう なりますか。",
        promptEn: "Read the 【SSW Building Cleaning Skill Certification & Allowance Terms】 below and answer the question.\n[Career Up Support Notice] To help SSW cleaning staff gain national licenses and advance to site leaders: Recommended Licenses: Building Cleaning Technician Grade 3, 2, 1 (National exam), Sanitation Supervisor. Pass Bonus Raise Allowance (Salary Up!): Staff who successfully pass the 'Building Cleaning Technician Grade 2' national exam will receive a 'QUALIFICATION ALLOWANCE OF 12,000 YEN EVERY MONTH (144,000 yen/year) PERMANENTLY ADDED TO THEIR MONTHLY SALARY' starting the following month! Furthermore, if appointed as Site Leader, an additional 'Leadership Allowance of 20,000 yen/month' is added! Please polish your skills and challenge it!\n\nQuestion: If you pass the 'Building Cleaning Technician Grade 2' national exam under this building management company's support system, what happens to your salary from the following month?",
        options: [
            "お給料に 【「毎月 １２,０００円 （年間 １４万４千円）」 の 資格手当が ずっと 支給（上乗せ）】 される (A 'QUALIFICATION ALLOWANCE OF 12,000 YEN EVERY MONTH [144k yen/yr]' is permanently added to your salary)",
            "資格を 取った 罰として、【お給料が 減らされ、毎月 「ビル内の ゴミ箱 ５０個を 家に 持ち帰る」】 義務がつく (As punishment for passing, salary is reduced and you must take home 50 building trash bins monthly)",
            "お給料のお金は なくなり、【全額 「使い終わった 古い モップと 雑巾 ３００枚」】 で 現物支給される (Yen salary disappears, and you are paid entirely in kind as '300 used old mops and dirty rags')",
            "合格記念として、【ビルの オーナーが 所有する 無人島へ 強制的に 片道切符で 送り飛ばされる】 (To celebrate passing, you are forcibly banished to the building owner's deserted island on a one-way ticket)"
        ],
        correct: 0,
        explanation: "Allowance clause states:「見事「ビルクリーニング技能士２級」の国家試験に合格したスタッフには...【毎月のお給料に「月額１２,０００円」の資格手当がずっと支給（上乗せ）】されます！」."
    }
];
