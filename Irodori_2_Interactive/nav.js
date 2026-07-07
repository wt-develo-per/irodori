/**
 * Irodori Elementary 2 (A2-2) • Universal Chapter Navigation Controller
 * Injects a sleek Glassmorphism floating navigation bar into every chapter page.
 */
(function() {
    const chapters = [
        { file: "chapter_01.html", num: "01", title: "きょうのできごと", en: "Daily Happenings & Reactions" },
        { file: "chapter_02.html", num: "02", title: "きもち", en: "Feelings & Emotions" },
        { file: "chapter_03.html", num: "03", title: "くらしとでんとう", en: "Life & Tradition" },
        { file: "chapter_04.html", num: "04", title: "しょくじとたべもの", en: "Meals & Food Culture" },
        { file: "chapter_05.html", num: "05", title: "じかんとよてい", en: "Time & Schedules" },
        { file: "chapter_06.html", num: "06", title: "ひっこしとすまい", en: "Moving & Housing" },
        { file: "chapter_07.html", num: "07", title: "おしらせとあんない", en: "Information & Notices" },
        { file: "chapter_08.html", num: "08", title: "ともだちとのかいわ", en: "Casual Speech & Friends" },
        { file: "chapter_09.html", num: "09", title: "まちとサービス", en: "In Town & Public Services" },
        { file: "chapter_10.html", num: "10", title: "けんこうとびょうき", en: "Health & Medical Advice" },
        { file: "chapter_11.html", num: "11", title: "しごと", en: "Workplace & Basic Keigo" },
        { file: "chapter_12.html", num: "12", title: "わたしのまち", en: "My Town & Geography" },
        { file: "chapter_13.html", num: "13", title: "りょこう", en: "Travel & Reservations" },
        { file: "chapter_14.html", num: "14", title: "しょうらい", en: "Future, Dreams & Career" },
        { file: "chapter_15.html", num: "15", title: "にほんごとわたし", en: "Japanese Study & Review" },
        { file: "chapter_16.html", num: "16", title: "こまったとき", en: "Trouble & Emergency Help" },
        { file: "chapter_17.html", num: "17", title: "ルールとあんぜん", en: "Community Rules & Safety" },
        { file: "chapter_18.html", num: "18", title: "ふりかえりとこれから", en: "Reflection & Course Finale" }
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
            background: rgba(15, 23, 42, 0.88);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 50px;
            padding: 8px 14px;
            display: flex;
            align-items: center;
            gap: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(59, 130, 246, 0.2);
            font-family: 'Inter', 'Noto Sans JP', sans-serif;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        #irodori-floating-nav:hover {
            border-color: rgba(59, 130, 246, 0.5);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.7), 0 0 25px rgba(59, 130, 246, 0.3);
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
            background: linear-gradient(135deg, #3b82f6, #6366f1);
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
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.2));
            border-color: rgba(16, 185, 129, 0.4);
            color: #34d399;
        }
        .irodori-nav-home:hover {
            background: linear-gradient(135deg, #10b981, #059669) !important;
            color: #fff !important;
        }
        .irodori-nav-select-wrapper {
            position: relative;
            display: inline-block;
        }
        #irodori-chapter-select {
            appearance: none;
            background: rgba(30, 41, 59, 0.9);
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
            border-color: #3b82f6;
            background: rgba(30, 41, 59, 1);
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
        .irodori-nav-toggle {
            display: none;
            background: transparent;
            border: none;
            color: #f8fafc;
            font-size: 1.2rem;
            cursor: pointer;
            padding: 4px;
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
