// test3_data.js - JFT-Basic SSW Mock Test 3 Datastore (45 Questions)
// Aligned with CEFR A2 / Irodori & Genki Elementary Japanese
// Focus: Manufacturing, Machine Operations, 5S Methodology, Safety Equipment, & Factory Line Work

const jftExamData = [
    // ==========================================
    // SECTION 1: SCRIPT AND VOCABULARY (文字と語彙) - 12 Questions
    // ==========================================
    {
        id: "q1",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "工場内では、マニュアルに従って 安全に 【作業】を 行ってください。【作業】の 読み方は どれですか。",
        promptEn: "Inside the factory, please carry out the 【作業】 safely according to the manual. What is the reading?",
        options: [
            "さぎょう (sagyō - work / operation)",
            "えいぎょう (eigyō - business / sales)",
            "さんぎょう (sangyō - industry)",
            "じゅぎょう (jugyō - class / lesson)"
        ],
        correct: 0,
        explanation: "「作業（さぎょう）」means physical work, operations, or tasks performed on factory assembly lines or construction sites."
    },
    {
        id: "q2",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "毎朝、仕事を 始める 前に 機械の 始業前 【てんけん】を します。正しい 漢字は どれですか。",
        promptEn: "Every morning before starting work, we perform a pre-start machine 【てんけん】. Which kanji matches?",
        options: [
            "点検 (tenken - inspection / check)",
            "点数 (tensū - score / points)",
            "検品 (kenpin - product inspection)",
            "探検 (tanken - exploration)"
        ],
        correct: 0,
        explanation: "「点検（てんけん）」means safety inspection or equipment check. A pre-start inspection is called「始業前点検（しぎょうまえてんけん）」."
    },
    {
        id: "q3",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "こちらの ラインでは、自動車の エンジンの 【部品】を 組み立てています。【部品】の 読み方は どれですか。",
        promptEn: "On this line, we assemble engine 【部品】 for automobiles. What is the reading of 【部品】?",
        options: [
            "しょくひん (shokuhin - food products)",
            "ぶひん (buhin - parts / components)",
            "せいひん (seihin - finished goods)",
            "よひん (yohin - spare items)"
        ],
        correct: 1,
        explanation: "「部品（ぶひん）」means machine parts or components. Finished manufactured products are「製品（せいひん）」."
    },
    {
        id: "q4",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "ドライバーや レンチなど、使った 【工具】は 必ず 元の 場所に 戻してください。【工具】の 読み方は どれですか。",
        promptEn: "Please make sure to return used 【工具】 such as screwdrivers and wrenches to their original place. What is the reading?",
        options: [
            "どうぐ (dōgu - general tools / instruments)",
            "こうぐ (kōgu - industrial tools / hand tools)",
            "かぐ (kagu - furniture)",
            "きぐ (kigu - utensils / apparatus)"
        ],
        correct: 1,
        explanation: "While 道具 (dōgu) means tools in general, industrial/mechanical hand tools like wrenches and pliers are specifically called「工具（こうぐ）」."
    },
    {
        id: "q5",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "この クレーンで 運べる 荷物の 【重量】は 最大 ５００キログラムまで です。【重量】の 読み方は どれですか。",
        promptEn: "The maximum 【重量】 of cargo that can be lifted by this crane is 500 kg. What is the reading of 【重量】?",
        options: [
            "たいじゅう (taijū - body weight)",
            "じゅうりょう (jūryō - weight / heavy mass)",
            "おもさ (omosa - weight [plain])",
            "ぶんりょう (bunryō - quantity / amount)"
        ],
        correct: 1,
        explanation: "「重量（じゅうりょう）」is the technical industrial term for weight or heavy mass (e.g., 重量制限 - weight limit)."
    },
    {
        id: "q6",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "傷がある 【不良品】を 見つけたら、絶対に 出荷しないで 赤い 箱に 入れてください。【不良品】の 読み方は どれですか。",
        promptEn: "If you find a scratched 【不良品】, never ship it; put it into the red box. What is the reading?",
        options: [
            "ふりょうひん (furyōhin - defective product)",
            "ふうりょうひん (fūryōhin - false reading)",
            "ひじょうひん (hijōhin - emergency goods)",
            "きずもの (kizumono - damaged goods [informal])"
        ],
        correct: 0,
        explanation: "「不良品（ふりょうひん）」means a defective or rejected product. Good, acceptable products are called「良品（りょうひん）」."
    },
    {
        id: "q7",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "この ボタンを 押して 機械を 【そうさ】するときは、濡れた 手で 触らないでください。正しい 漢字は どれですか。",
        promptEn: "When you push this button to 【そうさ】 the machine, do not touch it with wet hands. Which kanji matches?",
        options: [
            "操作 (sōsa - operation / control)",
            "創作 (sōsaku - creation / production)",
            "捜査 (sōsa - criminal investigation)",
            "走査 (sōsa - scanning)"
        ],
        correct: 0,
        explanation: "To operate or control a machine, computer, or control panel is「操作（そうさ）する」."
    },
    {
        id: "q8",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "部品を 組み立てる ときは、マニュアルに 書いてある 【順番】を 守ってください。【順番】の 正しい 読み方は どれですか。",
        promptEn: "When assembling components, please follow the 【順番】 written in the manual. What is the correct reading?",
        options: [
            "じゅんばん (junban - turn / order / sequence)",
            "じゅんじょ (junjo - order / procedure)",
            "ばんごう (bangō - number)",
            "てじゅん (tejun - process / sequence of steps)"
        ],
        correct: 0,
        explanation: "「順番（じゅんばん）」means the correct order, sequence, or turn. Assembling out of order causes defects."
    },
    {
        id: "q9",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "工場の 【５Ｓ】の中で、必要な ものを いつでも すぐに 取り出せるように、「決められた 場所に きちんと 置くこと」 を 何と 言いますか。",
        promptEn: "In the factory '5S' methodology, what is the term for 'arranging necessary items neatly in designated places so they can be retrieved immediately'?",
        options: [
            "整頓（せいとん - Set in Order / neat arrangement）",
            "整理（せいり - Sort / disposing of unnecessary items）",
            "清掃（せいそう - Shine / cleaning work area）",
            "清潔（せいけつ - Standardize / maintaining hygienic state）"
        ],
        correct: 0,
        explanation: "In 5S: 整理 (Seiri) = throwing away unnecessary things; 整頓 (Seiton) = arranging necessary items in fixed places for instant retrieval; 清掃 (Seiso) = cleaning."
    },
    {
        id: "q10",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "工場内では、重い 金属が 足に 落ちても 怪我を しないように、つま先が 硬い 【　　】を 履かなければなりません。",
        promptEn: "Inside the factory, to prevent injury even if heavy metal drops on your feet, you must wear hard-toed 【　　】.",
        options: [
            "安全靴（あんぜんぐつ - safety shoes / steel-toe boots）",
            "長靴（ながぐつ - rubber rain boots）",
            "スリッパ（surippa - indoor slippers）",
            "運動靴（うんどうぐつ - running sneakers）"
        ],
        correct: 0,
        explanation: "Industrial safety shoes with reinforced steel or composite toe caps are called「安全靴（あんぜんぐつ）」."
    },
    {
        id: "q11",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "この ラインでは、細かい 電子部品を ネジで 【　　】て、スマートフォンの 基板を 作ります。",
        promptEn: "On this line, we 【　　】 tiny electronic parts with screws to make smartphone circuit boards.",
        options: [
            "組み立て（くみたて - assemble / put together）",
            "分解し（ぶんかいし - disassemble / take apart）",
            "破壊し（はかいし - destroy / demolish）",
            "切断し（せつだんし - cut off / sever）"
        ],
        correct: 0,
        explanation: "To put components together or assemble parts into a device is「組み立てる（くみたてる / 組み立て）」."
    },
    {
        id: "q12",
        section: "sec1",
        sectionName: "Script and Vocabulary (文字と語彙)",
        promptJp: "運転中の 機械から いつもと 違う 変な 音や 煙などの 【　　】を感じたら、すぐに 赤い 停止ボタンを 押してください。",
        promptEn: "If you notice an 【　　】 such as an unusual sound or smoke from an operating machine, press the red stop button immediately.",
        options: [
            "異常（いじょう - abnormality / unusual condition）",
            "正常（せいじょう - normal / regular condition）",
            "日常（にちじょう - daily routine / everyday）",
            "非常（ひじょう - emergency / extraordinary）"
        ],
        correct: 0,
        explanation: "An abnormal sound, smell, vibration, or temperature in industrial equipment is termed an「異常（いじょう）」. Reporting 'ijō' immediately prevents industrial accidents."
    },

    // ==========================================
    // SECTION 2: CONVERSATION AND EXPRESSION (会話と表現) - 11 Questions
    // ==========================================
    {
        id: "q13",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "機械を 使っていたら、焦げた（焼けた）においが してきました。班長に 何と 相談しますか。\n作業員：「班長！機械から 焦げた においが するんですが、一度 機械を 【　　】。」",
        promptEn: "While using a machine, you smell a burning odor. What do you say to the group leader?\nWorker: 'Leader! There's a burning smell from the machine. Should we 【　　】 for a moment?'",
        options: [
            "止めた 方がいいでしょうか (tometa hō ga ii deshō ka - Should we stop it?)",
            "止めなくても かまいませんか (tomenakute mo kamaimasen ka - Do you mind if we don't stop it?)",
            "止める つもりは ありませんか (tomeru tsumori wa arimasen ka - Do you have no intention to stop it?)",
            "止まらせて あげましょうか (tomarasete agemashō ka - Shall I make it stop for you?)"
        ],
        correct: 0,
        explanation: "When sensing danger or equipment abnormality, asking a supervisor for immediate confirmation on stopping operations is expressed as:「止めた方がいいでしょうか」."
    },
    {
        id: "q14",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "新しい 電動ドライバーの 使い方や 操作方法が 分かりません。先輩に 何と 頼みますか。\n後輩：「先輩、すみません。この 電動ドライバーの 使い方が 分からないので、【　　】。」",
        promptEn: "You don't know how to use or operate a new electric screwdriver. How do you ask a senior coworker?\nJunior: 'Senior, excuse me. I don't know how to use this electric screwdriver, so 【　　】.'",
        options: [
            "教えていただけませんか (oshiete itadakemasen ka - Could you please teach / show me?)",
            "教えさせてあげなさい (oshiesasete agenasai - Make someone teach me)",
            "教えてやってもいいですよ (oshiete yatte mo ii desu yo - I can teach you if you want)",
            "教えた ことが ありますか (oshieta koto ga arimasu ka - Have you ever taught it?)"
        ],
        correct: 0,
        explanation: "When asking a senior or leader to demonstrate or teach how to use a tool, use polite request forms:「教えていただけませんか」or「教えてもらえませんか」."
    },
    {
        id: "q15",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "部品の 向きを 間違えて 組み立ててしまい、不良品を 出してしまいました。リーダーに 謝り、反省を 伝えます。\n実習生：「リーダー、申し訳ありません。部品の 向きを 間違えてしまいました。今後は 二度と 間違えないように 【　　】。」",
        promptEn: "You assembled parts facing the wrong direction and produced a defect. You apologize to the leader.\nIntern: 'Leader, I am very sorry. I put the part facing the wrong way. From now on, I will 【　　】 so I never make this mistake again.'",
        options: [
            "しっかり 確認して 作業します (shikkari kakunin shite sagyō shimasu - carefully confirm and do my work)",
            "別に 気にしないで 続けます (betsuni kinishinaide tsuzukemasu - not really mind it and continue)",
            "誰かの せいに しておきます (dareka no sei ni shite okimasu - blame it on someone else)",
            "明日から 工場を 休みます (ashita kara kōjō o yasumimasu - take off from the factory starting tomorrow)"
        ],
        correct: 0,
        explanation: "When acknowledging a manufacturing error, pledging to perform strict verification (確認) moving forward demonstrates responsibility:「しっかり確認して作業します」."
    },
    {
        id: "q16",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "リーダーからの 仕分け（分ける作業）の 指示が 正しいか、自分の 理解を 復唱して（繰り返して）確認します。\n作業員：「確認させてください。つまり、青い 箱には 完成品を、赤い 箱には 【　　】。」",
        promptEn: "You repeat back the leader's sorting instructions to confirm your understanding.\nWorker: 'Please let me confirm. In other words, finished goods go into the blue box, and into the red box go 【　　】?'",
        options: [
            "不良品を 入れるんですね (furyōhin o irerun desu ne - defective products are put in, right?)",
            "自分の お弁当を 入れるんですね (jibun no obento o irerun desu ne - my own lunchbox is put in, right?)",
            "何も 入れなくて いいんですね (nanimo irenakute iin desu ne - nothing should be put in, right?)",
            "ごみを 捨てて いいんですね (gomi o sutete iin desu ne - trash can be thrown away, right?)"
        ],
        correct: 0,
        explanation: "In Japanese manufacturing, repeating instructions back (復唱確認 / fukushō kakunin) using「〜ですね / 〜んですね」prevents costly miscommunication."
    },
    {
        id: "q17",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "重い 金属の 金型（かながた）を 隣の 作業台へ 運びたいですが、一人では 重すぎます。同僚に 何と 頼みますか。\nスタッフ：「鈴木さん、この 金型は 一人では 重すぎるので、反対側を 持って 【　　】？」",
        promptEn: "You want to move a heavy metal mold to the next workbench, but it is too heavy for one person. How do you ask a coworker?\nStaff: 'Suzuki, this mold is too heavy for one person, so could we 【　　】 by holding the other side?'",
        options: [
            "一緒に 運んでもらえませんか (issho ni hakonde moraemasen ka - Could I get you to carry it together with me?)",
            "自分で 運んであげなさい (jibun de hakonde agenasai - Carry it yourself for me)",
            "私を 運んでくれませんか (watashi o hakonde kuremasen ka - Will you carry me?)",
            "一回 投げてみませんか (ikkai nagete mimasen ka - Shall we try throwing it once?)"
        ],
        correct: 0,
        explanation: "Asking a coworker to assist in lifting or carrying heavy objects together safely is expressed as:「一緒に運んでもらえませんか / 一緒に持ってください」."
    },
    {
        id: "q18",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "溶接（金属を熱で溶かしてつなぐこと）をしたばかりの 金属は とても 熱いです。近くに 来た 新人に 何と 注意しますか。\n先輩：「そこは 溶接したばかりで 非常に 熱いですから、やけどしないように 【　　】！」",
        promptEn: "Metal that was just welded is extremely hot. What warning do you give to a newcomer walking near it?\nSenior: 'That part was just welded and is extremely hot, so please 【　　】 so that you don't get burned!'",
        options: [
            "絶対に 素手で 触らないでください (zettai ni sude de sawaranaide kudasai - NEVER touch it with bare hands)",
            "思いきり 握りしめてください (omoikiri nigirishimete kudasai - grab and hold it tightly with all your might)",
            "顔を 近づけて においを 嗅いでください (kao o chikazukete nioi o kaide kudasai - bring your face close and smell it)",
            "冷たい 水の 中に 飛び込んでください (tsumetai mizu no naka ni tobikonde kudasai - jump into cold water)"
        ],
        correct: 0,
        explanation: "Warning someone not to touch hazardous hot or moving machine parts is expressed with strong prohibition:「絶対に触らないで（さわらないで）ください」."
    },
    {
        id: "q19",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "今日の 目標だった １００個の 部品加工が 予定より 早く 終わりました。班長に 次の 指示を 仰ぎます。\n作業員：「班長、目標の １００個が終わりましたが、次は 【　　】。」",
        promptEn: "Your daily target of processing 100 parts finished earlier than scheduled. How do you ask the group leader for your next instruction?\nWorker: 'Leader, the target 100 pieces are done. For the next step, 【　　】?'",
        options: [
            "明日の 分の 準備を 始めましょうか (ashita no bun no junbi o hajime mashō ka - shall I begin preparing for tomorrow's portion?)",
            "勝手に 帰っても かまいませんか (katte ni kaette mo kamaimasen ka - do you mind if I leave and go home without permission?)",
            "ここで 昼寝を させてもらいます (koko de hirune o sasete moraimasu - I will take a nap right here)",
            "機械を 壊しても いいですか (kikai o kowashite mo ii desu ka - is it okay if I break the machine?)"
        ],
        correct: 0,
        explanation: "When completing a quota early, proactively asking if you should prepare for the next step or clean up (「〜始めましょうか」) exemplifies excellent SSW work ethic."
    },
    {
        id: "q20",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "午前の 連続作業が 終わり、リーダーが 「鈴木くん、よく 頑張ったね。もう 休憩していいよ」 と 言ってくれました。何と 答えますか。",
        promptEn: "Continuous morning work ended, and the leader says: 'Suzuki, good job working hard. You can take a break now.' How do you respond?",
        options: [
            "ありがとうございます。それでは、お先に 休憩させていただきます (Arigatō gozaimasu. Soredeha, osaki ni kyūkei sasete itadakimasu - Thank you. I will take my break now [humble])",
            "うるさいな、命令しないでくれ (Urusaina, meirei shinaide kure - Shut up, don't give me orders)",
            "いいえ、私は 休憩が大嫌いです (Iie, watashi wa kyūkei ga daikirai desu - No, I hate breaks)",
            "あなたが 休憩しなさい (Anata ga kyūkei shinasai - YOU take a break [command])"
        ],
        correct: 0,
        explanation: "When given permission to take a break by a supervisor, replying with thanks and polite humble keigo:「お先に休憩（きゅうけい）させていただきます」is standard etiquette."
    },
    {
        id: "q21",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "工場内で ペイント塗装を していて、塗料（ペンキ）の においが 強く こもっています。同僚に 何と 相談して 窓を開けますか。\nスタッフ：「ペンキの においが 強いですね。空気の 換気（かんき）の ために、あそこの 窓を 【　　】？」",
        promptEn: "While painting inside the factory, the smell of paint is strong and trapped. How do you ask a coworker before opening a window?\nStaff: 'The paint smell is strong. To ventilate the air, could we 【　　】 that window over there?'",
        options: [
            "開けても いいですか (akete mo ii desu ka - is it okay if I open?)",
            "割っても いいですか (watte mo ii desu ka - is it okay if I break/smash?)",
            "外して 捨てましょうか (hazushite sutemashō ka - shall we remove and throw it away?)",
            "閉めたままに しておきなさい (shimetamama ni shite okinasai - keep it shut tightly)"
        ],
        correct: 0,
        explanation: "Asking permission to open a window or door for ventilation (換気 / kanki) is expressed as:「窓を開け（あけ）てもいいですか」."
    },
    {
        id: "q22",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "作業台の ネジと ボルトが なくなってしまいました。隣の 同僚に 何と言って 席を 外しますか。\n実習生：「作業台の ボルトが 切れてしまったので、今から 第２倉庫へ 行って 【　　】。」",
        promptEn: "You ran out of screws and bolts at your workbench. What do you say to the coworker next to you when leaving your workstation?\nIntern: 'I ran out of bolts at my workbench, so I'm going to Warehouse 2 now to 【　　】.'",
        options: [
            "新しい ボルトを 取ってきますね (atarashii boruto o totte kimasu ne - go and get some new bolts and come back)",
            "二度と 工場へ 戻ってきませんね (nido to kōjō e modotte kimasen ne - never return to the factory again)",
            "他人の 工具を 盗んできますね (tanin no kōgu o nusunde kimasu ne - steal someone else's tools)",
            "ここで 静かに 泣いて過ごしますね (koko de shizuka ni naite sugoshimasu ne - spend time quietly crying here)"
        ],
        correct: 0,
        explanation: "To go somewhere to fetch parts or tools and return is expressed with the compound verb「取ってくる（とってくる / 取ってきます）」."
    },
    {
        id: "q23",
        section: "sec2",
        sectionName: "Conversation and Expression (会話と表現)",
        promptJp: "ライン作業中、どうしても お手洗い（トイレ）へ 行きたくなりました。勝手に ラインを 止められないので、リーダーに 何と 頼みますか。\n作業員：「リーダー、すみません。少し お腹が 痛いので、３分ほど お手洗いに 【　　】？」",
        promptEn: "During line work, you urgently need to go to the restroom. You can't stop the line on your own, so how do you ask the leader?\nWorker: 'Leader, excuse me. My stomach hurts slightly, so could I please 【　　】 for about 3 minutes to go to the restroom?'",
        options: [
            "行かせていただいてもよろしいでしょうか (ikasete itadaite mo yoroshii deshō ka - May I receive permission to go? [humble])",
            "トイレを ここに 持ってきなさい (toire o koko ni motte kinasai - Bring the toilet here to me)",
            "あなたが トイレに 行ってらっしゃい (anata ga toire ni itterasshai - YOU go to the toilet instead of me)",
            "ラインを 全部 破壊しましょうか (rain o zenbu hakai shimashō ka - Shall I destroy the entire assembly line?)"
        ],
        correct: 0,
        explanation: "When asking permission to step away from a running production line for the restroom or emergency, use humble causative keigo:「お手洗いに行かせていただいてもよろしいでしょうか / 席を外させてください」."
    },

    // ==========================================
    // SECTION 3: LISTENING COMPREHENSION (聴解) - 11 Questions
    // ==========================================
    {
        id: "q24",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】工場の 朝礼で 班長が 本日の 生産目標について 話しています。今日、午後３時までに 何個の 製品を 作らなければなりませんか。",
        promptEn: "[Audio Simulation] At a factory morning meeting, the group leader is speaking about today's production target. How many products must be made today by 3:00 PM?",
        audioScript: "班長：「おはようございます。本日の 生産目標をお伝えします。今日は 夕方 ４時から トラックで 出荷が あるため、午後３時までに 【５００個】 の 製品を 完成させなければなりません。午前中に ３０0個、午後に ２００個の ペースで 進めますので、皆さん 協力して お願いします。」",
        audioScriptEn: "Leader: 'Good morning. Here is today's production target. Because there is a truck shipment starting at 4:00 PM today, we MUST finish 500 units of products by 3:00 PM. We will proceed at a pace of 300 units in the morning and 200 in the afternoon, so please cooperate.'",
        options: [
            "午後３時までに 【５００個】 (500 units by 3:00 PM)",
            "午後４時までに 【３００個】 (300 units by 4:00 PM)",
            "午前中だけで 【１,０００個】 (1,000 units during the morning alone)",
            "夜の 残業時間まで 【２００個】 (200 units by night overtime)"
        ],
        correct: 0,
        explanation: "The leader explicitly states:「午後３時までに【５００個】の製品を完成させなければなりません」."
    },
    {
        id: "q25",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】プレス機械の 前で 先輩が 新人に 安全な 操作方法を 教えています。機械を 動かす（スタートする）とき、どう やって ボタンを 押さなければなりませんか。",
        promptEn: "[Audio Simulation] In front of a press machine, a senior worker is teaching a newcomer safe operating procedures. How must the buttons be pressed when starting the machine?",
        audioScript: "先輩：「いいかい、この プレス機械は 上から 重い 鉄板が 降りてくるから、片手が 機械の中に 残っていると 大怪我をする。だから、スタートさせるときは 必ず 【両手（右と左の手）で 同時に ２つの 緑色ボタンを 押す】 仕組みになっているんだ。片手だけでは 絶対に 動かないからね。」",
        audioScriptEn: "Senior: 'Listen, because a heavy steel plate comes down from above on this press machine, if one hand is left inside you'll get seriously injured. Therefore, when starting it, the mechanism requires pushing the TWO GREEN BUTTONS SIMULTANEOUSLY WITH BOTH HANDS (right and left). It will never move with just one hand.'",
        options: [
            "両手（右と左の手）で 同時に ２つの 緑色ボタンを 押す (Push two green buttons simultaneously with BOTH right and left hands)",
            "片手（右手だけ）で ボタンを 押し、左手は 機械の中に入れる (Push button with one hand while putting left hand inside machine)",
            "足で ペダルを 踏みながら、目をつぶって レバーを 引く (Step on pedal with foot while pulling lever with eyes closed)",
            "音声認証（「動け」と大声で叫ぶこと）だけで 自動で スタートさせる (Start automatically using voice recognition by shouting 'Move!')"
        ],
        correct: 0,
        explanation: "Two-hand control (両手操作式安全装置) is universal in SSW press and stamping operations:「必ず両手で同時に２つの緑色ボタンを押す」."
    },
    {
        id: "q26",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】検品ラインで 班長が 傷のある 部品の 扱い方について 指示を出しています。傷がある 部品を見つけたら、どう 処理しますか。",
        promptEn: "[Audio Simulation] On the inspection line, the group leader is giving instructions on how to handle scratched parts. When you find a scratched part, what is the procedure?",
        audioScript: "班長：「検品作業中に、もし 金属部品の 表面に 傷や 凹み（へこみ）がある ものを 見つけたら、まず 傷がある 場所に 【赤い 丸い シール（目印ステッカー）】 を 貼ってくれ。そして、正常な 箱には 入れず、足元にある 【黄色い 不良品ボックス】 に 入れること。後で リーダーが 理由を 調べるからね。」",
        audioScriptEn: "Leader: 'During inspection, if you find any metal parts with scratches or dents on the surface, first put a RED ROUND STICKER (marker) on the scratched spot. Then, do not put it in the normal box; put it into the YELLOW DEFECT BOX at your feet. The leader will investigate the cause later.'",
        options: [
            "傷の 場所に 【赤い シール】 を 貼り、【黄色い 不良品ボックス】 に 入れる (Attach a red sticker to the scratch and put into the yellow defect box)",
            "傷を 自分の ハンカチで 隠して、正常な 完成品の 箱に 混ぜておく (Hide scratch with your handkerchief and mix into normal finished goods box)",
            "傷がある 部品を ハンマーで 叩いて 自分で 勝手に 修理する (Beat scratched part with a hammer to repair it yourself without permission)",
            "工場の 窓から 外の 草むらへ 力いっぱい 投げ捨てる (Throw part out the factory window into the grass with all your strength)"
        ],
        correct: 0,
        explanation: "The leader outlines the defect protocol:「傷がある場所に【赤い丸いシール】を貼って...【黄色い不良品ボックス】に入れること」."
    },
    {
        id: "q27",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】仕事が終わる １５分前に、放送で ５Ｓ清掃の 指示が 流れています。油が ついた 汚い ウエス（拭き取り布）は どの ごみ箱に 捨てますか。",
        promptEn: "[Audio Simulation] 15 minutes before work ends, a broadcast gives 5S cleanup instructions. Which trash can should dirty, oil-soaked rags (wipes) be thrown into?",
        audioScript: "放送：「従業員の 皆さん、本日の ライン作業 お疲れ様でした。これより １５分間の ５Ｓ清掃タイムに入ります。機械の 油を 拭き取った 白い ウエス（布）は、自然発火（自然に火がつくこと）の 危険があるため、一般的な 紙ごみの 箱には 絶対に 捨てないでください。必ず 蓋（ふた）がついた 【赤い 金属製の 「油ウエス専用缶」】 に 捨ててください。」",
        audioScriptEn: "Broadcast: 'All employees, good job on today's line work. We will now begin our 15-minute 5S cleanup time. White rags used to wipe oil off machines pose a spontaneous combustion fire hazard, so NEVER throw them into regular paper trash bins. You MUST throw them into the RED METAL CAN WITH A LID designated for oily rags.'",
        options: [
            "蓋（ふた）がついた 【赤い 金属製の 「油ウエス専用缶」】 に 捨てる (Throw into the RED METAL CAN WITH A LID designated for oily rags)",
            "事務所の パソコンの 横にある 【紙・プラスチック用の 一般ごみ箱】 に 捨てる (Throw into general paper/plastic trash box next to office PC)",
            "食堂の 生ごみや 食べ残しの お弁当と 一緒に ビニール袋に まとめる (Bundle into plastic bag together with cafeteria food waste and leftover bento)",
            "自分の 作業服の ポケットに 詰め込んで、自宅のアパートに 持ち帰る (Stuff into your work uniform pocket and take home to your apartment)"
        ],
        correct: 0,
        explanation: "Oil-soaked industrial rags (油ウエス) are a major combustion hazard in manufacturing; they must go into a dedicated metal container:「赤い金属製の「油ウエス専用缶」に捨ててください」."
    },
    {
        id: "q28",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】クリーンルーム（ほこりやゴミがない特別な部屋）に入る 前に、リーダーが 身だしなみの チェックを しています。新人の 「キムさん」は、何を 直さなければなりませんか。",
        promptEn: "[Audio Simulation] Before entering the cleanroom, the leader is checking staff appearance. What must newcomer 'Mr. Kim' fix?",
        audioScript: "リーダー：「よし、これから クリーンルームに入って 精密電子部品の 組み立てを するぞ。おっと、キムくん！帽子の 横から 【髪の毛（かみのけ）が 少し 外に はみ出している】 よ。髪の毛が 落ちたら 不良品になるから、もう一度 鏡を 見て、髪を 全て 帽子の 中に 完全に しまってから エアーシャワーを 浴びてくれ。」\nキム：「すみません！今すぐ 髪の毛を 帽子の 中に しまいます！」",
        audioScriptEn: "Leader: 'Okay, we're going into the cleanroom now to assemble precision electronic parts. Wait, Kim! A little bit of your HAIR IS STICKING OUT from the side of your cap! Dropped hair causes defects, so check the mirror again and put all your hair completely inside the cap before taking the air shower.'\nKim: 'Sorry! I'll tuck my hair inside the cap right now!'",
        options: [
            "帽子の 横から はみ出している 【髪の毛】 を、完全に 帽子の 中に しまう (Tuck the HAIR sticking out from his cap completely inside the cap)",
            "汚れた 運動靴を 脱いで、素足（裸足）の まま クリーンルームに 駆け込む (Take off dirty sneakers and run barefoot into cleanroom)",
            "顔に つけていた マスクを 外して、大きな 声で 歌いながら 作業台に向かう (Take off face mask and sing loudly while walking to workbench)",
            "手袋を 両手とも 破り捨てて、素手で 精密な 基板に 触る (Tear off both gloves and touch precision circuit boards with bare hands)"
        ],
        correct: 0,
        explanation: "In semiconductor and electronics cleanrooms, preventing foreign matter (異物混入 / hair or dust) is rule #1:「髪の毛が少し外にはみ出しているよ...全て帽子の中に完全にしまってから」."
    },
    {
        id: "q29",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】工場内の スピーカーから 安全注意のアナウンスが 流れています。歩行者（工場内を歩いている人）は、どう しなければなりませんか。",
        promptEn: "[Audio Simulation] A safety announcement is playing over the factory speakers. What must pedestrians (people walking in the factory) do?",
        audioScript: "アナウンス：「安全管理室より お知らせします。ただいま、第１倉庫から 出荷作業場の 間におきまして、フォークリフトが 重い パレットを 連続で 運搬しております。工場内を 通行する 方は、必ず 【緑色で 塗られた 歩行者通路（緑色のラインの中）】 を 歩いてください。交差点では、フォークリフトが 優先ですので、一時停止して 左右を 確認してください。」",
        audioScriptEn: "Announcement: 'Notice from Safety Management. Currently, forklifts are continuously transporting heavy pallets between Warehouse 1 and the shipping area. Anyone walking in the factory MUST walk strictly INSIDE THE GREEN-PAINTED PEDESTRIAN WALKWAY (inside green lines). At intersections, forklifts have right of way, so stop and check left and right.'",
        options: [
            "必ず 【緑色で 塗られた 歩行者通路（緑色のラインの中）】 を 歩き、交差点で 確認する (Walk strictly inside the GREEN-PAINTED PEDESTRIAN WALKWAY and check intersections)",
            "フォークリフトの 荷台の 上に 飛び乗って、楽をして 倉庫まで 運んでもらう (Jump onto forklift cargo pallet to get an easy ride to warehouse)",
            "黄色い フォークリフトの 走行通路の 真ん中に 座り込んで お弁当を 食べる (Sit right in the middle of yellow forklift traffic lane to eat bento)",
            "耳に イヤホンをつけて 音楽を 聞きながら、目をつぶって 工場内を 走る (Run through factory with eyes closed while listening to music with earphones)"
        ],
        correct: 0,
        explanation: "Segregating pedestrian walkways (歩行者通路 / green lines) from vehicle lanes (車両通路) is mandatory SSW safety practice."
    },
    {
        id: "q30",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】作業終了時の 工具点検で、リーダーが 皆に 呼びかけています。何が 起こっていますか。",
        promptEn: "[Audio Simulation] During post-work tool inspection, the leader is calling out to everyone. What is happening?",
        audioScript: "リーダー：「おい、ちょっと 待ってくれ！終業時の 工具箱の チェックを したら、【１０ミリの スパナ（レンチ）が １本 足りない（なくなっている）】 ぞ！機械の 中や コンベアの 上に 工具が 置き忘れられていると、明日の 朝 機械を 動かした ときに 大故障や 事故になる。帰る 前に、全員で もう一度 自分の 作業台の 周りを 探してくれ！」",
        audioScriptEn: "Leader: 'Hey, wait a minute! When checking the tool box at closing, ONE 10MM SPANNER (WRENCH) IS MISSING! If a tool is left inside a machine or on a conveyor, it will cause a major breakdown or accident when starting up tomorrow morning. Before leaving, everyone must search around their workbench again!'",
        options: [
            "【１０ミリの スパナ（レンチ）が １本 なくなっている】 ので、全員で 作業台を探す (One 10mm spanner is missing, so everyone must search their workbenches)",
            "新しい パソコンが 届いたので、全員で 事務所に 行って ゲームで 遊ぶ (New computers arrived, so everyone goes to office to play games)",
            "今日の 給料が 現金で 配られるので、全員で レジの 前に 並んで 喜ぶ (Today's wages are distributed in cash, so everyone lines up at register happily)",
            "工場の 屋根に 穴が 開いて 雨が 漏れているので、全員で 屋根に 登って 直る (Factory roof leaked rain from a hole, so everyone climbs roof to fix it)"
        ],
        correct: 0,
        explanation: "In industrial manufacturing, strict tool accounting (工具管理 / checking nothing is left inside machinery) prevents catastrophic mechanical failures."
    },
    {
        id: "q31",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】工場で 日勤チームと 夜勤チームが 引き継ぎを しています。今日の 午後、Bラインの ベルトコンベアは なぜ １０分間 止まりましたか。",
        promptEn: "[Audio Simulation] At a factory, day shift and night shift teams are doing a handover. Why did the B-Line conveyor belt stop for 10 minutes this afternoon?",
        audioScript: "日勤リーダー：「夜勤の 皆さん、お疲れ様です。本日の 日勤の 引き継ぎ事項です。午後２時頃、Bラインの 【センサーに 小さな ごみ（ほこり）が 詰まって、ベルトコンベアが 約１０分間 自動停止】 しました。整備士が ごみを エアーで 吹き飛ばして 掃除した ところ、すぐに 正常に 動き始めました。夜勤でも センサーの 汚れには 注意してください。」\n夜勤リーダー：「了解です。センサーの ごみ詰まりですね。監視を 強化します。」",
        audioScriptEn: "Day Leader: 'Night shift team, good job. Here is the day shift handover. Around 2 PM, small dust clogged the B-Line sensor, causing the conveyor belt to automatically stop for about 10 minutes. When maintenance blew out the dust with air, it started working normally right away. Watch out for dirty sensors during night shift too.'\nNight Leader: 'Roger. Dust clogging the sensor. We will increase monitoring.'",
        options: [
            "【センサーに 小さな ごみ（ほこり）が 詰まった】 ため、約１０分間 自動で 止まった (Stopped automatically for ~10 mins because small dust clogged the sensor)",
            "大地震が 起きて 本社ビルが 倒れた ため、一日中 電気が 消えて 止まった (Stopped all day because major earthquake collapsed head office building)",
            "作業員が 全員で 職場放棄して ストライキ（デモ）を 起こした ため 止まった (Stopped because all workers abandoned workplace and went on strike)",
            "ベルトコンベアの 金属が 熱で 溶けて 跡形もなく 消滅した ため 止まった (Stopped because conveyor metal melted completely from heat and vanished)"
        ],
        correct: 0,
        explanation: "The day shift leader reports:「センサーに小さなごみ（ほこり）が詰まって、ベルトコンベアが約１０分間自動停止しました」."
    },
    {
        id: "q32",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】化学部品を 洗浄する 部屋で、先輩が 有機溶剤（特別な洗浄液）の 扱い方を 注意しています。この 洗浄液を 使う とき、目を 守る ために 何を しますか。",
        promptEn: "[Audio Simulation] In the chemical washing room, a senior is warning about handling organic solvents (special cleaning fluids). When using this fluid, what must be done to protect your eyes?",
        audioScript: "先輩：「いいかい、この 青い ボトルの 洗浄液は、金属の 油を 強く 落とす 有機溶剤だ。もし 液体が はねて 【目に入ると、激しい 痛みがあり 失明（目が見えなくなること）の 危険】 が ある。だから、この 液を 使う ときは、通常の メガネではなく、必ず 目の 周りを 完全に 覆う 【保護メガネ（ゴーグル）】 を 装着すること。手には 耐薬品の ゴム手袋も 忘れないでね。」",
        audioScriptEn: "Senior: 'Listen, the cleaning liquid in this blue bottle is an organic solvent that powerfully removes grease. If it splashes and gets into your eyes, there is severe pain and risk of blindness. Therefore, when using this liquid, do not wear normal glasses; you MUST wear protective goggles that completely cover around your eyes. Don't forget chemical-resistant rubber gloves either.'",
        options: [
            "目の 周りを 完全に 覆う 【保護メガネ（ゴーグル）】 を 必ず 装着する (MUST wear protective goggles [保護メガネ] that completely cover around eyes)",
            "目を 目薬で 洗ってから、サングラスを おでこの 上に カッコよく 乗せる (Wash eyes with eye drops, then rest sunglasses coolly on your forehead)",
            "目をつぶった まま、においだけで 洗浄液の 場所を 探して 素手で 洗う (Keep eyes closed and search for solvent using smell alone, washing barehanded)",
            "普通の 紙の マスクを 目の 上まで 引き上げて、前が 見えないように する (Pull regular paper mask up over your eyes so you can't see forward)"
        ],
        correct: 0,
        explanation: "When handling hazardous chemicals or solvents (有機溶剤 / 薬品), eye protection via goggles (保護メガネ / ゴーグル) is legally mandated."
    },
    {
        id: "q33",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】電子基板の はんだ付け（ハンダゴテで金属をつなぐ作業）の 指導を しています。先輩が 言う 「芋はんだ（いもはんだ・不良品）」 とは どんな 状態ですか。",
        promptEn: "[Audio Simulation] Giving instructions on electronic circuit board soldering. What condition is the 'Imo-handa (potato solder / defect)' mentioned by the senior?",
        audioScript: "先輩：「ハンダ付けの コツを 教えるよ。ハンダを 溶かす ときに、金属を 十分に 温めないで ハンダを 大量に つけすぎると、ハンダが 丸い ボールのように 固まってしまう。これを 【芋はんだ（いもはんだ）】 と 呼んでいて、中身が しっかり つながっていない から 【通電不良（電気が通らない不良品）】 に なるんだ。富士山のように 綺麗な 三角形に 広がるように 溶かすのが 正解だよ。」",
        audioScriptEn: "Senior: 'I'll teach you soldering tips. When melting solder, if you don't heat the metal enough and apply too much solder, it hardens into a round ball shape. We call this 'Imo-handa' (potato solder), and because the inside isn't connected properly, it becomes a non-conducting defect. The correct way is melting it so it spreads into a clean triangle slope like Mount Fuji.'",
        options: [
            "ハンダが 大量に つきすぎて 丸い ボールのようになり、【電気が 通らない 不良品】 のこと (Solder applied too heavily forming a round ball, causing a non-conducting defect)",
            "本物の 美味しい 焼き芋（やきいも）を、工場の ハンダゴテの 熱で 焼いて 食べること (Roasting real delicious sweet potatoes using factory soldering iron heat to eat)",
            "ハンダが １滴も ついていなくて、基板から 部品が 風で 飛んで行ってしまう こと (Zero solder applied at all, causing parts to blow away from board in wind)",
            "はんだごての 温度が 冷たすぎて、水になって 床に 流れ落ちて しまう こと (Soldering iron so cold that it turns into water and flows onto floor)"
        ],
        correct: 0,
        explanation: "In Japanese electronics assembly (電気電子製造), 'Imo-handa' (芋はんだ - cold solder joint resembling a lumpy potato) is a critical quality defect."
    },
    {
        id: "q34",
        section: "sec3",
        sectionName: "Listening Comprehension (聴解)",
        promptJp: "【音声シミュレーション】工場の 非常ベルが 鳴り響いた ときの 指示が アナウンスされています。作業員が 最初に 行わなければならない 「第１の アクション」 は 何ですか。",
        promptEn: "[Audio Simulation] Instructions are being announced as the factory emergency alarm sounds. What is the 'First Action' workers MUST take?",
        audioScript: "アナウンス：「【緊急事態発生・緊急事態発生】！ただいま、第２製造棟で 異常警報が 作動しました。作業中の 皆さんは、慌てて 外へ 走り出さないでください。まず 最初に、【自分が 使っている 機械の 「赤い 非常停止ボタン」 を 押して 機械の 電源を切る】 こと！機械を 止めてから、リーダーの 指示に従って ヘルメットを 着用し、屋外の グランドへ 避難してください。」",
        audioScriptEn: "Announcement: 'EMERGENCY ALERT! An alarm activated in Manufacturing Building 2. Workers, do not panic and run outside. FIRST OF ALL, PUSH THE RED EMERGENCY STOP BUTTON on the machine you are using to turn off power! After stopping machines, follow leader instructions, put on helmets, and evacuate to outdoor sports ground.'",
        options: [
            "自分が 使っている 機械の 【赤い 非常停止ボタン】 を 押して 電源を 切る (Push the RED EMERGENCY STOP BUTTON on your machine to shut off power)",
            "機械の 電源を つけたまま、誰にも 連絡しないで １人で 外の 道路へ 逃げる (Leave machine running and run away alone to outside road without telling anyone)",
            "事務所に 駆け込んで、自分の スマホと お財布だけを 探して ポケットに入れる (Run into office and search only for your smartphone and wallet to put in pocket)",
            "消火器（しょうかき）を 両手に 持って、火が ない 食堂や トイレに 白い粉を 撒く (Hold fire extinguishers in both hands and spray white powder in cafeteria/toilets where there is no fire)"
        ],
        correct: 0,
        explanation: "In SSW disaster protocols, immediately shutting down machinery via Emergency Stop (非常停止ボタン) prevents secondary electrical or fire fires."
    },

    // ==========================================
    // SECTION 4: READING COMPREHENSION (読解) - 11 Questions
    // ==========================================
    {
        id: "q35",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【プレス機械の安全作業マニュアル】 を読んで 質問に 答えてください。\n\n――― 【産業用プレス機械 安全取扱規定】 ―――\n1. 【両手操作の徹底】 プレス加工を行う際は、必ず 両手操作ボタンを 使用すること。片手ボタンへの 改造や、ボタンに 重りを 置いて 固定する 危険行為は 一切 禁止する。\n2. 【金型内の 異物除去】 加工中に 金型（金属の型）の 中に ごみや 不良部品が 詰まった 場合は、絶対に 手を入れて 取ろうと しないこと。必ず 【メイン電源スイッチを 「切（OFF）」 に してから、専用の 「安全手工具（長いハサミや棒）」】 を 使って 異物を 取り出すこと。\n3. 【安全保護具】 作業中は、防音耳栓、安全メガネ、安全靴を 常時 着用すること。\n――――――――――――――――――――――――――\n\n質問：機械の 金型（かながた）の 中に ごみが 詰まった とき、どうしなければなりませんか。",
        promptEn: "Read the 【Press Machine Safety Operating Manual】 below and answer the question.\n[Industrial Press Rules] 1. Two-hand operation: Always use two-hand buttons. Modifying to one-hand or fixing buttons with weights is strictly banned. 2. Removing foreign matter from mold: If trash or jammed parts get stuck inside mold during operation, NEVER insert your hand to reach it. You MUST turn main power switch to 'OFF', then use special 'Safety Hand Tools' (long pliers/rods) to remove objects. 3. PPE: Wear earplugs, safety glasses, safety shoes constantly.\n\nQuestion: What must be done when trash or components get jammed inside the machine's metal mold?",
        options: [
            "必ず 電源スイッチを 【切（OFF）】 にしてから、専用の 【安全手工具（棒など）】 で 取る (Turn main power switch to OFF, then remove using special Safety Hand Tools [rods, etc.])",
            "機械の 電源を 入れて 動かした まま、素早く 素手（裸の手）を 突っ込んで ごみを 掴み出す (Leave machine power ON and running, quickly thrusting bare hand inside to grab trash)",
            "隣で 作業している 同僚に 足で スタートボタンを 踏んでもらいながら、２人で 手を 入れる (Have a coworker step on start button with their foot while both of you insert hands)",
            "詰まった ごみは 無視して、上から 新しい 金属板を 被せて そのまま 強く 押し潰す (Ignore jammed trash, put new metal sheet over it, and crush it down forcefully)"
        ],
        correct: 0,
        explanation: "Rule 2 states:「絶対に手を入れて取ろうとしないこと。必ずメイン電源スイッチを切にしてから、専用の「安全手工具」を使って異物を取り出すこと」."
    },
    {
        id: "q36",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【５Ｓ徹底チェックシート】 を読んで 質問に 答えてください。\n\n――― 【工場内 ５Ｓ（整理・整頓・清掃・清潔・しつけ）定義と実践】 ―――\n◆ 【整理（せいり - Seiri）】 職場にある 道具や 部品を 「必要な もの」 と 「不要な（いらない）もの」 に 分けて、不要な ものを 完全に 捨てる（処分する）こと。\n◆ 【整頓（せいとん - Seiton）】 必要な ものを、必要な ときに 誰でも すぐに 取り出せるように、「決められた 場所に、決められた 表示（ラベル）をつけて、正しく 置く」 こと。\n◆ 【清掃（せいそう - Seiso）】 職場の 床や 機械の ほこり・ごみ・油を 綺麗に 掃除し、常に 点検できる 状態に 磨き上げること。\n――――――――――――――――――――――――――\n\n質問：５Ｓの 中で、「不要な（いらない）ものを 捨てて、必要な ものだけを 残すこと」 は どれですか。",
        promptEn: "Read the 【5S Implementation Checklist】 below and answer the question.\n[5S Definitions in Factory] Sort (Seiri): Separate items into 'necessary' and 'unnecessary' and completely throw away unnecessary ones. Set in Order (Seiton): Arrange necessary items in designated places with labels so anyone can take them out instantly. Shine (Seiso): Clean floors and machines of dust, trash, and oil so they can be inspected anytime.\n\nQuestion: Among the 5S steps, which term means 'throwing away unnecessary items and keeping only what is needed'?",
        options: [
            "整理（せいり - Seiri / Sort）",
            "整頓（せいとん - Seiton / Set in Order）",
            "清掃（せいそう - Seiso / Shine）",
            "しつけ（shitsuke - Sustain / Discipline）"
        ],
        correct: 0,
        explanation: "In Japanese manufacturing, separating needed vs unneeded items and discarding the waste is defined as「整理（せいり）」."
    },
    {
        id: "q37",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【不良品発生時の報告ルール】 を読んで 質問に 答えてください。\n\n――― 【品質管理部より：不良品・異常品 発生時の３原則】 ―――\n加工ラインで 傷や 寸法間違いなどの 不良品が 発生した 場合は、以下の ３原則を 厳守してください。\n\n1. 【すぐに 止める】 不良品が 出たら、すぐに 自分の ラインを 停止させる。そのまま 作り続けないこと。\n2. 【赤札（あかふだ）をつける】 不良品の 箱に 目立つ 「赤札タグ（不良品マーク）」 を 取り付け、正常な 製品と 完全に 区別する。\n3. 【３分以内に 報告する】 自分で 勝手に 直したり、ゴミ箱に 隠して 捨てたりしないこと。必ず 発生から 【３分以内】 に 班長または 品質リーダーへ 報告し、指示を受けること。\n――――――――――――――――――――――――――\n\n質問：不良品を 見つけた とき、やってはいけない （禁止されている） ことは どれですか。",
        promptEn: "Read the 【Reporting Protocol for Defective Products】 below and answer the question.\n[Quality Dept: 3 Rules for Defects] 1. Stop immediately: Stop your line; do not keep producing. 2. Attach Red Tag: Attach conspicuous red defect tag to distinguish from normal goods. 3. Report within 3 mins: DO NOT repair on your own or hide in trash. Must report to leader within 3 mins and get instructions.\n\nQuestion: Which of the following is PROHIBITED when you find a defective product?",
        options: [
            "自分で 勝手に 直そうと したり、ゴミ箱に 隠して 捨てたりすること (Trying to repair it yourself without permission or hiding it in the trash can to throw away)",
            "不良品が 出たら、すぐに 自分の 作業ラインを 停止させること (Stopping your own production line immediately when a defect occurs)",
            "不良品の 箱に 目立つ 「赤札タグ（不良品マーク）」 を 取り付けること (Attaching a conspicuous red defect tag onto the defect box)",
            "発生から ３分以内に 班長や 品質リーダーへ 報告して 指示を受けること (Reporting to group leader or quality leader within 3 minutes of occurrence)"
        ],
        correct: 0,
        explanation: "Rule 3 explicitly forbids hiding or unauthorized rework:「自分で勝手に直したり、ゴミ箱に隠して捨てたりしないこと」."
    },
    {
        id: "q38",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【残業申請（ざんぎょうしんせい）メール】 を読んで 質問に 答えてください。\n\n――― 件名：本日（１０月１５日）の残業申請について ―――\n宛先：高橋製造課長\n送信者：グエン・バン・ミン（組み立て第２係）\n\n高橋課長、お疲れ様です。グエンです。\n本日、午後２時頃に 納入された 「A-108」 部品の 検品作業に 遅れが生じております。\n明日の 朝 ８時の 出荷便に 間に合わせる ため、本日の 定時（17:00）の後、【１７：１５ ～ １９：１５ までの ２時間】、残業を させていただきたく 申請いたします。\nなお、一緒に 作業を行う 佐藤さんも 同様に ２時間の 残業が 可能です。\nご承認のほど、よろしくお願いいたします。\n――――――――――――――――――――――――――\n\n質問：グエンさんは 今日、何時から 何時まで 残業を したいと 申請していますか。",
        promptEn: "Read the 【Overtime Request Email】 below and answer the question.\nSubject: Overtime Request for today Oct 15 / To: Section Chief Takahashi / From: Nguyen (Assembly Section 2). Chief Takahashi, good job. There is a delay in inspecting parts delivered around 2 PM today. To meet tomorrow morning's 8:00 AM shipping shipment, I request permission to work TWO HOURS OF OVERTIME today after regular hours (17:00), from 17:15 to 19:15. Coworker Sato is also available for 2 hours. Please approve.\n\nQuestion: From what time until what time is Nguyen requesting to work overtime today?",
        options: [
            "夕方 １７：１５ から 夜 １９：１５ までの 【２時間】 (From 17:15 to 19:15 [2 hours])",
            "午後の １４：００ から 夕方 １７：００ までの 【３時間】 (From 14:00 to 17:00 [3 hours])",
            "明日の 朝 ０８：００ から お昼 １２：００ までの 【４時間】 (Tomorrow morning from 08:00 to 12:00 [4 hours])",
            "夜の ２２：００ から 深夜 ２４：００ までの 【２時間】 (Late night from 22:00 to 24:00 [2 hours])"
        ],
        correct: 0,
        explanation: "Nguyen states the exact overtime window:「【１７：１５ ～ １９：１５ までの ２時間】、残業をさせていただきたく申請いたします」."
    },
    {
        id: "q39",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【工場内 保護具（ほごぐ）着用義務ポスター】 を読んで 質問に 答えてください。\n\n――― 【安全第一】エリア別 必須 保護具のご案内 ―――\n当工場では、労働安全衛生法に基づき、エリアごとに 以下の 保護具の 着用を 義務付けています。\n\n◆ 【一般加工エリア（全域）】： ヘルメット、安全靴 （※ 全員 必須）\n◆ 【研削・溶接エリア（A棟）】： 一般保護具 ＋ 【安全メガネ（または防塵面）】 および 溶接用革手袋\n◆ 【高騒音プレスエリア（B棟）】： 一般保護具 ＋ 【防音耳栓（イヤーマフ）】\n※ B棟は 機械の 音が ８５デシベルを 超えるため、耳栓を しないで 作業すると 難聴（耳が聞こえなくなる病気）の 危険が あります。耳栓は 入口の ボックスから 自由に 取ってください。\n――――――――――――――――――――――――――\n\n質問：機械の 音が 大きい 【高騒音プレスエリア（B棟）】 で 作業するとき、必ず つけなければならない 特別な 保護具は どれですか。",
        promptEn: "Read the 【Mandatory PPE Poster】 below and answer the question.\n[Safety First - Required PPE by Area] General Area: Helmet, safety shoes (required for all). Grinding/Welding (Bld A): General PPE + Safety glasses/shield & welding leather gloves. High Noise Press Area (Bld B): General PPE + EARPLUGS (EAR MUFFS). *Bld B noise exceeds 85dB; working without earplugs causes hearing loss. Take free earplugs from entrance box.\n\nQuestion: When working in the noisy 【High Noise Press Area (Building B)】 , what special protective gear MUST be worn?",
        options: [
            "大きな 音から 耳を守る 【防音耳栓（イヤーマフ）】 (Sound-insulating EARPLUGS [ear muffs] to protect ears from loud noise)",
            "有害な ガスや 煙を 吸い込まないための 【酸素ガスマスク】 (Oxygen gas mask to avoid inhaling hazardous gases and smoke)",
            "高い 場所から 落ちたときに 命を守る 【安全帯（ハーネス）】 (Safety harness to save your life when falling from high places)",
            "冷たい 水の中に 入っても 濡れない 【潜水用の ウェットスーツ】 (Diving wetsuit so you don't get wet even when entering cold water)"
        ],
        correct: 0,
        explanation: "The poster specifies for Building B:「【高騒音プレスエリア（B棟）】：一般保護具 ＋ 【防音耳栓（イヤーマフ）】」."
    },
    {
        id: "q40",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【熱中症（ねっちゅうしょう）予防のお知らせ】 を読んで 質問に 答えてください。\n\n――― 【夏季の工場内 熱中症対策について】 ―――\n７月から ８月は、工場内の 気温と 湿度が高くなり、熱中症（体に熱がこもって倒れる病気）が 多発します。以下の 対策を 実践してください。\n\n1. 【こまめな 水分・塩分補給】 のどが 渇いたと感じる 前に、３０分ごとに 給水機の 水と 「塩分タブレット（塩飴）」 を 摂取すること。\n2. 【体調不良時の 速やかな 休息】 めまい、頭痛、吐き気などの 症状を感じたら、絶対に 無理を して 作業を 続けないこと。すぐに リーダーへ 申し出のうえ、冷房が 効いた 【１階の 休憩室または 医務室】 へ 移動して 横になること。\n――――――――――――――――――――――――――\n\n質問：作業中に めまいや 頭痛などの 熱中症の 症状を感じた とき、どうしなければなりませんか。",
        promptEn: "Read the 【Heatstroke Prevention Notice】 below and answer the question.\n[Summer Heatstroke Measures] From July to Aug, heatstroke occurs frequently. Practice the following: 1. Hydration/salt: Before feeling thirsty, take water and salt tablets every 30 mins. 2. Resting when feeling unwell: If feeling dizziness, headache, or nausea, NEVER force yourself to continue working. Report to leader immediately and move to air-conditioned 1st floor break room or medical room to lie down.\n\nQuestion: What must you do if you feel heatstroke symptoms like dizziness or headache during work?",
        options: [
            "無理をしないで リーダーに 報告し、冷房が 効いた 【休憩室や 医務室】 へ 行って 休む (Do not force yourself; report to leader and go rest in air-conditioned break room or medical room)",
            "お茶や 水は 一切 飲まないで、サウナのように 暑い ボイラー室で 汗を かき続ける (Drink no tea or water at all and keep sweating in boiler room hot as a sauna)",
            "頭が 痛くても 誰にも 言わないで、定時の 夕方５時まで 倒れるまで 走り続ける (Even with headache, tell no one and keep running until collapsing until 5 PM closing)",
            "工場の 外にある 冷たい 川の 水の中に、服と 安全靴を 来たまま 飛び込む (Jump into cold river outside factory while wearing uniform and safety shoes)"
        ],
        correct: 0,
        explanation: "Rule 2 mandates:「すぐにリーダーへ申し出のうえ、冷房が効いた【１階の休憩室または医務室】へ移動して横になること」."
    },
    {
        id: "q41",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【フォークリフト通行帯ルール】 を読んで 質問に 答えてください。\n\n――― 【構内安全管理：車両と歩行者の分離ルール】 ―――\n工場構内での 交通事故を 防止するため、歩行者および フォークリフト運転者は 以下の 区分を守ること。\n\n◆ 【黄色い 塗装ライン（幅２メートル）】： フォークリフトおよび 運搬トラック 専用道路。歩行者の 立ち入り・歩行は 一切 禁止。\n◆ 【緑色の 塗装ライン（幅１メートル）】： 歩行者 専用通路。作業員や ゲストは 必ず この 緑色の ラインの中を 一列で 歩くこと。\n◆ 【交差点（横断歩道）での ルール】： 黄色と 緑色の ラインが 交差する 場所では、【フォークリフトが 優先】 となる。歩行者は 必ず 一時停止し、運転者と 目を 合わせて（アイコンタクトをとって）車両の 停止を 確認してから 横断すること。\n――――――――――――――――――――――――――\n\n質問：交差点（黄色と緑のラインが交わる場所）で、歩行者は どう しなければなりませんか。",
        promptEn: "Read the 【Forklift Traffic Lane Rules】 below and answer the question.\n[Safety: Separation of Vehicles and Pedestrians] Yellow Line (2m wide): Dedicated road for forklifts and trucks. Pedestrian entry strictly banned. Green Line (1m wide): Dedicated pedestrian walkway. Must walk inside green line in single file. Intersection Rules: Where yellow and green lines cross, FORKLIFTS HAVE RIGHT OF WAY. Pedestrians MUST stop, make eye contact with driver, and confirm vehicle has stopped before crossing.\n\nQuestion: At an intersection (where yellow and green lines cross), what must pedestrians do?",
        options: [
            "必ず 一時停止して 運転者と 目を 合わせ、フォークリフトの 停止を 確認してから 横断する (MUST stop, make eye contact with driver, and confirm forklift has stopped before crossing)",
            "歩行者の方が 常に 優先なので、左右を 見ないで 全速力で 走り抜けて 横断する (Since pedestrians always have right of way, run across at top speed without looking left/right)",
            "フォークリフトの 運転手に 向かって 石や 工具を 投げつけて、無理やり ブレーキを かけさせる (Throw rocks or tools at forklift driver to force them to slam on brakes)",
            "交差点の 真ん中に 立って、スマホで 記念写真を 撮影してから ゆっくり 渡る (Stand in middle of intersection, take commemorative photo with smartphone, then walk slowly)"
        ],
        correct: 0,
        explanation: "The intersection rule specifies:「歩行者は必ず一時停止し、運転者と目を合わせて（アイコンタクト）車両の停止を確認してから横断すること」."
    },
    {
        id: "q42",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【危険物・有機溶剤の保管ルール】 を読んで 質問に 答えてください。\n\n――― 【安全衛生委員会より：危険物保管庫の使用規定】 ―――\nシンナー、ガソリン、塗料、接着剤などの 有機溶剤および 可燃性液体は、引火（火がついて爆発すること）の 危険が 極めて 高いため、以下の 保管ルールを 厳守すること。\n\n1. 【専用保管庫への 収納】 使用後は、蓋（ふた）を 完全に 閉めて、必ず 屋外の 耐火構造 「第１危険物保管庫（黄色いロッカー）」 に 鍵をかけて 保管すること。作業台や 廊下に 放置しないこと。\n2. 【火気厳禁（かきげんきん）】 危険物保管庫の 周囲 【１０メートル 以内】 では、ライターの使用、喫煙（タバコを吸うこと）、溶接の 火花を 散らす 作業は 一切 禁止する。\n3. 【換気の徹底】 保管庫内および 使用場所では、揮発ガスが こもらないよう、換気ファンを 常時 運転させること。\n――――――――――――――――――――――――――\n\n質問：シンナーや 塗料などの 危険物を 保管する 庫の 周り （１０メートル以内） で、禁止されている ことは どれですか。",
        promptEn: "Read the 【Hazardous Materials Storage Rules】 below and answer the question.\n[Safety Committee: Hazardous Storage Rules] Thinner, gasoline, paints, and adhesives have extremely high fire/explosion risk. 1. Storage: Keep tightly closed in outdoor fireproof 'Hazardous Locker No. 1' locked with key. Never leave on tables. 2. Strictly No Fire: Within 10 METERS of hazardous storage, lighter use, SMOKING (tobacco), and welding sparks are strictly banned. 3. Ventilation: Keep ventilation fans running constantly.\n\nQuestion: Within 10 meters around the hazardous materials storage locker (for thinner/paint), which action is PROHIBITED?",
        options: [
            "ライターを 使ったり、タバコ（喫煙）を 吸ったり、溶接の 火花を 散らしたりすること (Using lighters, smoking tobacco, or scattering welding sparks)",
            "安全靴と ヘルメットを 着用して、緑色の 通路を 歩いて 通行すること (Walking along green walkways wearing safety shoes and helmet)",
            "保管庫の 蓋（ふた）が 閉まっているか どうか、目で 見て 点検すること (Visually inspecting whether locker lid is closed tightly)",
            "換気ファンが 正常に 回っているか どうか、音を 聞いて 確認すること (Listening to confirm whether ventilation fan is spinning normally)"
        ],
        correct: 0,
        explanation: "Rule 2 explicitly forbids ignition sources:「危険物保管庫の周囲【１０メートル以内】では、ライターの使用、喫煙、溶接の火花を散らす作業は一切禁止する」."
    },
    {
        id: "q43",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【社内食堂のお弁当注文ルール改定】 を読んで 質問に 答えてください。\n\n――― 【社員食堂（購買部）より：昼食お弁当の注文方法変更】 ―――\n来月 ６月 １日（月）より、食品ロス削減のため、昼食の 「日替わりお弁当（１食４００円）」 の 注文方法が変わります。\n\n◆ 【変更後の 注文締め切り時間】： 当日の 【朝 ９：００ まで】\n◆ 【注文方法】： 工場入口または 休憩室にある 「お弁当予約専用タッチパネル端末」 に 自分の 社員証（IDカード）を かざして、画面で 「注文ボタン」 を 押してください。\n※ 朝 ９時を 過ぎると システムが 自動終了し、当日の お弁当は 注文できなくなります。\n※ 注文を キャンセルしたい 場合も、朝 ９時までに 端末で 取消処理を してください。９時以降の キャンセルは 返金できません。\n――――――――――――――――――――――――――\n\n質問：来月 ６月 １日から、工場で お弁当を 注文したい とき、どうしなければなりませんか。",
        promptEn: "Read the 【Cafeteria Bento Ordering Revision】 below and answer the question.\n[From Cafeteria: Change in Lunch Bento Ordering] From June 1, ordering method for daily bento (400 yen) changes. Deadline: By 9:00 AM ON THE DAY. Method: Touch Employee ID card on dedicated touch-panel terminal at entrance/break room and press 'Order'. *After 9:00 AM system locks and no orders can be placed. Cancellations also must be done by 9:00 AM, or no refund.\n\nQuestion: Starting June 1, what must you do when you want to order a lunch bento at the factory?",
        options: [
            "当日の 【朝 ９：００ まで】 に、専用端末に 社員証を かざして 注文ボタンを押す (By 9:00 AM on the day, touch Employee ID card on terminal and press order button)",
            "お昼休みの １２時ちょうどに、食堂の レジに 並んで 現金 １,０００円札を 手渡しする (At exactly 12:00 lunch break, line up at cafeteria register and hand over a 1,000 yen cash bill)",
            "前日の 夜中の うちに、店長のアパートの 郵便受けに 手紙を 入れて 予約しておく (During the night before, put a paper letter into the cafeteria manager's apartment mailbox)",
            "朝 １０時を 過ぎてから、自分の スマホで 食堂の キッチンへ 直接 電話を かけて頼む (After 10:00 AM, call cafeteria kitchen directly using your smartphone to order)"
        ],
        correct: 0,
        explanation: "The notice states:「当日の【朝９：００まで】...「お弁当予約専用タッチパネル端末」に社員証をかざして注文ボタンを押してください」."
    },
    {
        id: "q44",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【定期メンテナンスによるライン停止のお知らせ】 を読んで 質問に 答えてください。\n\n――― 【設備保全課より：週末の定期点検に伴うライン停止のお知らせ】 ―――\n今週末の 土曜日、以下の 予定で 組み立てラインの 設備の 定期メンテナンス（点検・部品交換・給油）を 実施いたします。\n\n◆ 【停止する ライン】： 第１工場 「組み立てAライン」 および 「自動塗装ライン」\n◆ 【停止日時】　　　： ２０２６年 ７月 １８日（土） 【午前 ０８：００ ～ お昼 １２：００ まで （４時間）】\n※ メンテナンス中は、対象ラインの 電源を 完全遮断（ロックアウト）しますので、機械には 絶対に 触らないでください。\n※ 午後 １３：００ からは 通常どおり 運転を 再開し、生産作業を 行います。\n――――――――――――――――――――――――――\n\n質問：７月 １８日（土曜日）の 午前中（8:00～12:00）、第１工場の 「組み立てAライン」 は どうなりますか。",
        promptEn: "Read the 【Assembly Line Shutdown Notice for Scheduled Maintenance】 below and answer the question.\n[From Maintenance Dept: Line Shutdown Notice] This Saturday, scheduled maintenance (inspection, parts replacement, lubrication) will take place. Stopped Lines: Factory 1 'Assembly Line A' and 'Auto Paint Line'. Stop Time: Sat July 18, 08:00 to 12:00 (4 hours). *During maintenance, power is locked out; NEVER touch machines. From 13:00 PM, normal operation and production resume.\n\nQuestion: On Saturday, July 18 during the morning (8:00-12:00), what will happen to 'Assembly Line A' in Factory 1?",
        options: [
            "定期メンテナンス（点検や給油）のため、４時間 運転が 止まる (Operations stop for 4 hours due to scheduled maintenance [inspection/lubrication])",
            "いつもより 倍の スピードで 高速運転して、午前中だけで １万個の 部品を作る (Operates at double speed, making 10,000 parts during the morning alone)",
            "古い 機械を 全て 捨てて、新しい アメリカ製の ロボットを １００台 設置する (All old machines are thrown away and 100 new American robots are installed)",
            "社長と 工場長が 遊びに来て、ラインの 上で バッフェパーティー（宴会）を開く (Company president and plant manager visit to hold a buffet party on top of assembly line)"
        ],
        correct: 0,
        explanation: "The notice states:「７月１８日（土）【午前０８：００～お昼１２：００まで（４時間）】...定期メンテナンスを実施いたします」."
    },
    {
        id: "q45",
        section: "sec4",
        sectionName: "Reading Comprehension (読解)",
        promptJp: "以下の 【提案制度（改善提案・カイゼン）のお知らせ】 を読んで 質問に 答えてください。\n\n――― 【業務改善提案（カイゼン提案）募集と奨励金のご案内】 ―――\n当工場では、職場の 安全向上、作業の 効率化（スピードアップ）、無駄の 削減（コストカット）を 目指して、全従業員から 「改善提案（カイゼン）」 を 募集しています。\n\n◆ 【応募資格】： 全社員、技能実習生、特定技能スタッフ（アルバイト・パートも 応募可！）\n◆ 【応募方法】： 食堂の 横にある 「改善提案用紙」 に アイデアを 書き、「提案ボックス」 に 投函してください。\n◆ 【報奨金（ご褒美）】：\n・提出した 提案が 採用された 場合： 【５００円分の 食堂お食事券】 を プレゼント！\n・さらに 年間で 最も 素晴らしい 「優秀賞」 に 選ばれた 方には： 【現金 ３０,０００円 と 賞状】 を 授与します！\n日頃の 作業で 「ここを 直せば もっと 安全になる」「こうすれば 楽になる」 と 思う アイデアを どんどん 提案してください！\n――――――――――――――――――――――――――\n\n質問：提出した 改善アイデアが 会社に 「採用」 された 場合、何が もらえますか。",
        promptEn: "Read the 【Kaizen Suggestion System Notice】 below and answer the question.\n[Recruiting Kaizen Proposals & Rewards] To improve safety, efficiency, and cost cutting, we invite Kaizen suggestions from all staff, interns, and SSW workers. Method: Write ideas on proposal sheet next to cafeteria and drop into Suggestion Box. Rewards: If your proposal is ACCEPTED: 500 YEN CAFETERIA MEAL VOUCHER! Furthermore, annual Best Idea Award winner receives 30,000 YEN CASH & CERTIFICATE! Submit any ideas to make work safer or easier!\n\nQuestion: If the Kaizen improvement idea you submit is 'Accepted (adopted)' by the company, what do you receive?",
        options: [
            "【５００円分の 食堂お食事券】 が プレゼントされる (You are rewarded with a 500 YEN CAFETERIA MEAL VOUCHER)",
            "会社から ハワイへの １ヶ月間 無料旅行の チケットが プレゼントされる (You are given a free 1-month vacation ticket to Hawaii from the company)",
            "その日から あなたが 工場の 「最高経営責任者（社長）」 に 昇進する (From that day, you are promoted to 'Chief Executive Officer [President]' of the factory)",
            "何も もらえなくて、逆に 会社に 罰金として １万円を 払わなければならない (You receive nothing and instead must pay a 10,000 yen fine to the company)"
        ],
        correct: 0,
        explanation: "The notice promises:「提出した提案が採用された場合：【５００円分の食堂お食事券】をプレゼント！」."
    }
];
