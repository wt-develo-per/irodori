/**
 * Irodori Elementary 1 (A2-1) • Universal Chapter Navigation Controller
 * Injects a vibrant Coral/Sunset Glassmorphism floating navigation bar into every chapter page.
 */
(function() {
    const chapters = [
        { file: "chapter_01.html", num: "01", title: "はじめまして", en: "Nice to meet you & Greetings" },
        { file: "chapter_02.html", num: "02", title: "これから おせわに なります", en: "I will be in your care & Workplace Intro" },
        { file: "chapter_03.html", num: "03", title: "すてきな おへやですね", en: "What a lovely room & Home Visits" },
        { file: "chapter_04.html", num: "04", title: "かぞくは どこに いますか", en: "Where is your family & Relationships" },
        { file: "chapter_05.html", num: "05", title: "おうどん、すきですか", en: "Do you like udon & Food Preferences" },
        { file: "chapter_06.html", num: "06", title: "いつが いいですか", en: "When is good for you & Scheduling" },
        { file: "chapter_07.html", num: "07", title: "これ、いくらですか", en: "How much is this & Shopping" },
        { file: "chapter_08.html", num: "08", title: "映画を 見に行きませんか", en: "Shall we go see a movie & Invitations" },
        { file: "chapter_09.html", num: "09", title: "おみやげを あげます", en: "Giving Souvenirs & Gifts" },
        { file: "chapter_10.html", num: "10", title: "電車で 行きます", en: "Going by Train & Transportation" },
        { file: "chapter_11.html", num: "11", title: "どのぐらい かかりますか", en: "How long does it take & Duration" },
        { file: "chapter_12.html", num: "12", title: "どんな ところですか", en: "What kind of place is it & Descriptions" },
        { file: "chapter_13.html", num: "13", title: "写真を 撮っても いいですか", en: "May I take a photo & Permissions" },
        { file: "chapter_14.html", num: "14", title: "バドミントンが できますか", en: "Can you play badminton & Hobbies" },
        { file: "chapter_15.html", num: "15", title: "どんな 音楽を よく 聞きますか", en: "Music, Entertainment & Frequency" },
        { file: "chapter_16.html", num: "16", title: "頭が 痛いんです", en: "I have a headache & Medical Symptoms" },
        { file: "chapter_17.html", num: "17", title: "ここは 予約が いりますか", en: "Reservations, Dining & Rules" },
        { file: "chapter_18.html", num: "18", title: "もっと 上手に なりたいです", en: "Becoming Skilled & Course Finale" }
    ];

    // Identify current file
    const currentPath = window.location.pathname.split('/').pop() || "chapter_01.html";
    let currentIndex = chapters.findIndex(c => c.file === currentPath);
    if (currentIndex === -1) currentIndex = 0;

    const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
    const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

    // Inject CSS
    const navStyle = document.createElement('style');
    navStyle.textContent = `
        #irodori-floating-nav {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 99999;
            background: rgba(18, 22, 31, 0.92);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 75, 114, 0.3);
            border-radius: 50px;
            padding: 8px 14px;
            display: flex;
            align-items: center;
            gap: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 75, 114, 0.2);
            font-family: 'Inter', 'Noto Sans JP', sans-serif;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        #irodori-floating-nav:hover {
            border-color: rgba(255, 75, 114, 0.7);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.7), 0 0 25px rgba(255, 75, 114, 0.35);
            transform: translateY(-2px);
        }
        .irodori-nav-btn {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: rgba(255, 255, 255, 0.08);
            color: #f8fafc;
            text-decoration: none;
            padding: 8px 14px;
            border-radius: 30px;
            font-size: 0.85rem;
            font-weight: 600;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.2s ease;
            white-space: nowrap;
            cursor: pointer;
        }
        .irodori-nav-btn:hover:not(.disabled) {
            background: linear-gradient(135deg, #ff4b72, #ff8f70);
            border-color: transparent;
            color: #fff;
            transform: scale(1.03);
        }
        .irodori-nav-btn.disabled {
            opacity: 0.35;
            cursor: not-allowed;
            pointer-events: none;
        }
        .irodori-nav-home {
            background: linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(129, 140, 248, 0.2));
            border-color: rgba(56, 189, 248, 0.4);
            color: #38bdf8;
        }
        .irodori-nav-home:hover {
            background: linear-gradient(135deg, #38bdf8, #818cf8) !important;
            color: #fff !important;
        }
        .irodori-nav-select-wrapper {
            position: relative;
            display: inline-block;
        }
        #irodori-chapter-select {
            appearance: none;
            background: rgba(27, 34, 48, 0.95);
            color: #f8fafc;
            border: 1px solid rgba(255, 255, 255, 0.2);
            padding: 8px 32px 8px 16px;
            border-radius: 30px;
            font-size: 0.85rem;
            font-weight: 600;
            cursor: pointer;
            outline: none;
            max-width: 240px;
            text-overflow: ellipsis;
            white-space: nowrap;
            transition: all 0.2s ease;
        }
        #irodori-chapter-select:hover, #irodori-chapter-select:focus {
            border-color: #ff4b72;
            background: rgba(27, 34, 48, 1);
        }
        .irodori-select-arrow {
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%);
            pointer-events: none;
            color: #94a3b8;
            font-size: 0.7rem;
        }
        @media (max-width: 768px) {
            #irodori-floating-nav {
                bottom: 12px;
                right: 12px;
                left: 12px;
                justify-content: space-between;
                border-radius: 20px;
                padding: 10px;
            }
            .irodori-nav-btn span.label-text {
                display: none;
            }
            #irodori-chapter-select {
                max-width: 160px;
                font-size: 0.78rem;
            }
        }
    `;
    document.head.appendChild(navStyle);

    // Build Navigation UI
    const navBar = document.createElement('div');
    navBar.id = 'irodori-floating-nav';
    
    // Portal Home Button
    const homeBtn = document.createElement('a');
    homeBtn.href = "index.html";
    homeBtn.className = "irodori-nav-btn irodori-nav-home";
    homeBtn.title = "Return to Course Master Portal (Alt + H)";
    homeBtn.innerHTML = `<span>🏠</span><span class="label-text">Portal</span>`;
    navBar.appendChild(homeBtn);

    // Prev Button
    const prevBtn = document.createElement('a');
    prevBtn.href = prevChapter ? prevChapter.file : "#";
    prevBtn.className = `irodori-nav-btn ${!prevChapter ? 'disabled' : ''}`;
    prevBtn.title = prevChapter ? `Previous: Ch ${prevChapter.num} (Alt + ←)` : "First Chapter";
    prevBtn.innerHTML = `<span>⬅️</span><span class="label-text">Prev</span>`;
    navBar.appendChild(prevBtn);

    // Dropdown Select
    const selectWrapper = document.createElement('div');
    selectWrapper.className = "irodori-nav-select-wrapper";
    
    const select = document.createElement('select');
    select.id = "irodori-chapter-select";
    select.title = "Jump directly to any chapter";
    
    chapters.forEach((c, idx) => {
        const opt = document.createElement('option');
        opt.value = c.file;
        opt.selected = idx === currentIndex;
        opt.textContent = `Ch ${c.num}: ${c.title} (${c.en})`;
        select.appendChild(opt);
    });

    select.addEventListener('change', function() {
        window.location.href = this.value;
    });

    selectWrapper.appendChild(select);
    const arrow = document.createElement('span');
    arrow.className = "irodori-select-arrow";
    arrow.innerHTML = "▼";
    selectWrapper.appendChild(arrow);
    navBar.appendChild(selectWrapper);

    // Next Button
    const nextBtn = document.createElement('a');
    nextBtn.href = nextChapter ? nextChapter.file : "#";
    nextBtn.className = `irodori-nav-btn ${!nextChapter ? 'disabled' : ''}`;
    nextBtn.title = nextChapter ? `Next: Ch ${nextChapter.num} (Alt + →)` : "Final Chapter";
    nextBtn.innerHTML = `<span class="label-text">Next</span><span>➡️</span>`;
    navBar.appendChild(nextBtn);

    // Append to DOM when ready
    if (document.body) {
        document.body.appendChild(navBar);
    } else {
        window.addEventListener('DOMContentLoaded', () => document.body.appendChild(navBar));
    }

    // Keyboard navigation
    window.addEventListener('keydown', function(e) {
        if (e.altKey && e.key === 'ArrowLeft' && prevChapter) {
            e.preventDefault();
            window.location.href = prevChapter.file;
        } else if (e.altKey && e.key === 'ArrowRight' && nextChapter) {
            e.preventDefault();
            window.location.href = nextChapter.file;
        } else if (e.altKey && (e.key === 'h' || e.key === 'H')) {
            e.preventDefault();
            window.location.href = "index.html";
        }
    });
})();
