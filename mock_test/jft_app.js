// jft_app.js - Interactive CBT Testing Engine for JFT-Basic SSW Mock Exam

let currentMode = null; // 'exam' or 'practice'
let filteredQuestions = [];
let currentIndex = 0;
let userAnswers = {}; // { qId: optionIndex }
let flaggedQuestions = {}; // { qId: true/false }
let timerInterval = null;
let remainingSeconds = 3600; // 60 minutes for JFT-Basic CBT

// Initialize application on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    setupEventListeners();
});

function initTheme() {
    const savedTheme = localStorage.getItem('jft_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeBtnText(savedTheme);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('jft_theme', next);
    updateThemeBtnText(next);
}

function updateThemeBtnText(theme) {
    const btn = document.getElementById('themeToggleBtn');
    if (btn) {
        btn.innerHTML = theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
    }
}

function setupEventListeners() {
    document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);
    
    document.getElementById('startExamBtn').addEventListener('click', () => startMode('exam', 'all'));
    document.getElementById('startPracticeBtn').addEventListener('click', () => startMode('practice', 'all'));
    
    // Section tab filtering in practice mode
    document.querySelectorAll('.sec-tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const sec = e.currentTarget.getAttribute('data-sec');
            document.querySelectorAll('.sec-tab-btn').forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            filterAndReload(sec);
        });
    });

    document.getElementById('prevBtn').addEventListener('click', () => navigateQuestion(-1));
    document.getElementById('nextBtn').addEventListener('click', () => navigateQuestion(1));
    document.getElementById('flagBtn').addEventListener('click', toggleFlag);
    document.getElementById('submitExamBtn').addEventListener('click', confirmSubmitExam);
    document.getElementById('restartBtn').addEventListener('click', returnToHome);
}

function startMode(mode, sectionFilter) {
    currentMode = mode;
    userAnswers = {};
    flaggedQuestions = {};
    currentIndex = 0;
    
    // Hide home hero & modes, show CBT arena
    document.getElementById('homeIntro').style.display = 'none';
    document.getElementById('modeSelection').style.display = 'none';
    document.getElementById('resultsArena').classList.remove('active');
    document.getElementById('cbtArena').classList.add('active');
    
    // Show section filter bar only in practice mode
    const secFilterBar = document.getElementById('sectionFilterBar');
    if (mode === 'practice') {
        secFilterBar.style.display = 'flex';
        document.querySelector('.timer-box').style.display = 'none';
        document.getElementById('submitExamBtn').innerHTML = '🏁 Finish Practice & See Score';
    } else {
        secFilterBar.style.display = 'none';
        document.querySelector('.timer-box').style.display = 'flex';
        document.getElementById('submitExamBtn').innerHTML = '📥 Submit Exam for Grading';
        startTimer(3600);
    }

    filterAndReload(sectionFilter);
}

function filterAndReload(sectionFilter) {
    if (sectionFilter === 'all') {
        filteredQuestions = [...jftExamData];
    } else {
        filteredQuestions = jftExamData.filter(q => q.section === sectionFilter);
    }
    currentIndex = 0;
    buildSidebarNavigator();
    renderQuestion();
}

function startTimer(seconds) {
    clearInterval(timerInterval);
    remainingSeconds = seconds;
    updateTimerDisplay();
    
    timerInterval = setInterval(() => {
        remainingSeconds--;
        updateTimerDisplay();
        if (remainingSeconds <= 0) {
            clearInterval(timerInterval);
            alert("⏰ Time is up! The exam will now be submitted automatically.");
            submitExam();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const mins = Math.floor(remainingSeconds / 60);
    const secs = remainingSeconds % 60;
    const display = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    document.getElementById('timerDisplay').textContent = display;
    
    if (remainingSeconds < 300) { // Last 5 minutes warning
        document.getElementById('timerDisplay').style.color = '#ef4444';
    } else {
        document.getElementById('timerDisplay').style.color = 'inherit';
    }
}

function buildSidebarNavigator() {
    const navGrid = document.getElementById('qGridNav');
    navGrid.innerHTML = '';
    
    filteredQuestions.forEach((q, idx) => {
        const dot = document.createElement('div');
        dot.className = 'q-nav-dot';
        dot.textContent = idx + 1;
        dot.setAttribute('data-idx', idx);
        dot.addEventListener('click', () => {
            currentIndex = idx;
            renderQuestion();
        });
        navGrid.appendChild(dot);
    });
    updateSidebarNavigator();
}

function updateSidebarNavigator() {
    const dots = document.querySelectorAll('.q-nav-dot');
    dots.forEach((dot, idx) => {
        const qId = filteredQuestions[idx].id;
        dot.className = 'q-nav-dot';
        
        if (idx === currentIndex) dot.classList.add('current');
        if (userAnswers[qId] !== undefined) dot.classList.add('answered');
        if (flaggedQuestions[qId]) dot.classList.add('flagged');
    });
}

function renderQuestion() {
    if (filteredQuestions.length === 0) return;
    if ('speechSynthesis' in window && window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }
    const q = filteredQuestions[currentIndex];
    
    // Header tags
    document.getElementById('qBadge').textContent = `Question ${currentIndex + 1} of ${filteredQuestions.length}`;
    document.getElementById('qSecName').textContent = q.sectionName;
    
    // Flag status
    const flagBtn = document.getElementById('flagBtn');
    if (flaggedQuestions[q.id]) {
        flagBtn.classList.add('flagged');
        flagBtn.innerHTML = '🚩 Flagged for Review';
    } else {
        flagBtn.classList.remove('flagged');
        flagBtn.innerHTML = '🏳️ Flag for Review';
    }
    
    // Prompt & Audio/Scenario render
    document.getElementById('qPromptJp').textContent = q.promptJp;
    document.getElementById('qPromptEn').textContent = q.promptEn;
    
    const scenarioContainer = document.getElementById('scenarioContainer');
    scenarioContainer.innerHTML = '';
    
    // If Listening Section, inject simulated audio script toggle
    if (q.section === 'sec3' && q.audioScript) {
        const audioDiv = document.createElement('div');
        audioDiv.className = 'audio-player-sim';
        audioDiv.innerHTML = `
            <div>
                <strong>🔊 Listening Dialogue Simulation</strong>
                <div style="font-size:0.85rem; color:var(--text-secondary);">Click button to listen to audio or view dialogue text</div>
            </div>
            <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:8px;">
                <button class="audio-btn" style="background:var(--accent-gradient); color:#fff; border:none; padding:8px 16px; border-radius:6px; cursor:pointer; font-weight:700;" onclick="playCurrentQuestionAudio(this)">🔊 Play Japanese Audio</button>
                <button class="audio-btn" onclick="toggleAudioTranscript(this)">▶️ Show Dialogue Script</button>
            </div>
        `;
        const transcriptDiv = document.createElement('div');
        transcriptDiv.className = 'audio-transcript';
        transcriptDiv.innerHTML = `
            <div style="margin-bottom:8px; color:var(--accent-cyan); font-weight:700;">[Japanese Dialogue]</div>
            <div style="white-space:pre-line; margin-bottom:12px;">${q.audioScript}</div>
            <div style="color:var(--accent-blue); font-weight:700;">[English Translation]</div>
            <div style="white-space:pre-line; color:var(--text-secondary); font-size:0.9rem;">${q.audioScriptEn}</div>
        `;
        audioDiv.appendChild(transcriptDiv);
        scenarioContainer.appendChild(audioDiv);
    }
    
    // Options
    const optionsList = document.getElementById('optionsList');
    optionsList.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    
    q.options.forEach((optText, optIdx) => {
        const item = document.createElement('div');
        item.className = 'option-item';
        
        // If already selected
        if (userAnswers[q.id] === optIdx) {
            item.classList.add('selected');
            // If practice mode, immediately show correct/wrong state
            if (currentMode === 'practice') {
                if (optIdx === q.correct) {
                    item.classList.add('correct');
                } else {
                    item.classList.add('wrong');
                }
            }
        } else if (currentMode === 'practice' && userAnswers[q.id] !== undefined && optIdx === q.correct) {
            item.classList.add('correct');
        }
        
        item.innerHTML = `
            <span class="opt-letter">${letters[optIdx]}</span>
            <span class="opt-text">${optText}</span>
        `;
        
        item.addEventListener('click', () => selectOption(optIdx));
        optionsList.appendChild(item);
    });
    
    // Explanation box handling
    const expBox = document.getElementById('explanationBox');
    if (currentMode === 'practice' && userAnswers[q.id] !== undefined) {
        expBox.classList.add('show');
        const isCorrect = userAnswers[q.id] === q.correct;
        document.getElementById('expTitle').innerHTML = isCorrect 
            ? '✅ Correct! (正解 / Seikai)' 
            : `❌ Incorrect! Correct answer is Option ${letters[q.correct]}.`;
        document.getElementById('expTitle').style.color = isCorrect ? 'var(--success-color)' : 'var(--danger-color)';
        document.getElementById('expText').textContent = q.explanation;
    } else {
        expBox.classList.remove('show');
    }
    
    // Navigation arrows state
    document.getElementById('prevBtn').disabled = currentIndex === 0;
    document.getElementById('nextBtn').disabled = currentIndex === filteredQuestions.length - 1;
    
    updateSidebarNavigator();
}

function selectOption(optIdx) {
    const q = filteredQuestions[currentIndex];
    userAnswers[q.id] = optIdx;
    renderQuestion();
}

function toggleFlag() {
    const q = filteredQuestions[currentIndex];
    flaggedQuestions[q.id] = !flaggedQuestions[q.id];
    renderQuestion();
}

function navigateQuestion(step) {
    const nextIdx = currentIndex + step;
    if (nextIdx >= 0 && nextIdx < filteredQuestions.length) {
        currentIndex = nextIdx;
        renderQuestion();
    }
}

function toggleAudioTranscript(btn) {
    const transcript = btn.parentElement.querySelector('.audio-transcript') || btn.parentElement.parentElement.querySelector('.audio-transcript');
    if (transcript) {
        transcript.classList.toggle('show');
        btn.innerHTML = transcript.classList.contains('show') ? '⏹️ Hide Dialogue Script' : '▶️ Show Dialogue Script';
    }
}

function playCurrentQuestionAudio(btn) {
    if (!('speechSynthesis' in window)) {
        alert("Sorry, your browser does not support text-to-speech audio playback.");
        return;
    }
    const q = filteredQuestions[currentIndex];
    if (!q || !q.audioScript) return;
    
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        if (btn) btn.innerHTML = '🔊 Play Japanese Audio';
        return;
    }
    
    // Clean text for speaking: remove bracket markup and formatting symbols
    let cleanText = q.audioScript
        .replace(/【「|」】|【|】|『|』|「|」/g, ' ')
        .replace(/（[^）]*）|\([^)]*\)/g, ' ')
        .replace(/▶️|🔊|※/g, '')
        .trim();
    
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.95;
    
    const voices = window.speechSynthesis.getVoices();
    const jaVoice = voices.find(v => v.lang === 'ja-JP' || v.lang === 'ja_JP' || v.lang.includes('ja'));
    if (jaVoice) {
        utterance.voice = jaVoice;
    }
    
    if (btn) btn.innerHTML = '⏹️ Stop Audio';
    
    utterance.onend = () => {
        if (btn) btn.innerHTML = '🔊 Play Japanese Audio';
    };
    utterance.onerror = () => {
        if (btn) btn.innerHTML = '🔊 Play Japanese Audio';
    };
    
    window.speechSynthesis.speak(utterance);
}

function confirmSubmitExam() {
    const total = filteredQuestions.length;
    const answered = Object.keys(userAnswers).length;
    const unanswered = total - answered;
    
    let msg = `You have answered ${answered} of ${total} questions.`;
    if (unanswered > 0) {
        msg += `\n⚠️ You have ${unanswered} unanswered questions left!`;
    }
    msg += `\n\nAre you ready to finish and submit for grading?`;
    
    if (confirm(msg)) {
        submitExam();
    }
}

function submitExam() {
    clearInterval(timerInterval);
    
    let correctCount = 0;
    let secScores = { sec1: { correct: 0, total: 0 }, sec2: { correct: 0, total: 0 }, sec3: { correct: 0, total: 0 }, sec4: { correct: 0, total: 0 } };
    
    filteredQuestions.forEach(q => {
        const sec = q.section;
        if (secScores[sec]) {
            secScores[sec].total++;
            if (userAnswers[q.id] === q.correct) {
                secScores[sec].correct++;
                correctCount++;
            }
        }
    });
    
    // Calculate JFT official scaled score out of 250 (Pass mark is 200 / 80% for SSW Visa standard)
    const totalQ = filteredQuestions.length;
    const percent = Math.round((correctCount / totalQ) * 100);
    const scaledScore = Math.round((correctCount / totalQ) * 250);
    const passed = scaledScore >= 180; // 180-200 is standard JFT A2 pass threshold
    
    // Render Scorecard
    document.getElementById('cbtArena').classList.remove('active');
    document.getElementById('resultsArena').classList.add('active');
    
    const badge = document.getElementById('scoreBadge');
    if (passed) {
        badge.className = 'score-badge pass';
        badge.innerHTML = '🎉 CONGRATULATIONS! YOU PASSED THE SSW VISA BENCHMARK!';
    } else {
        badge.className = 'score-badge fail';
        badge.innerHTML = '⚠️ ADDITIONAL PRACTICE NEEDED FOR SSW VISA PASS MARK';
    }
    
    document.getElementById('scoreNum').textContent = `${scaledScore} / 250 (${percent}%)`;
    document.getElementById('scoreSub').textContent = `You correctly answered ${correctCount} out of ${totalQ} questions across all sections.`;
    
    // Render section breakdown
    const secGrid = document.getElementById('sectionScoresGrid');
    secGrid.innerHTML = '';
    
    const secNames = {
        sec1: "1. Script & Vocabulary (文字と語彙)",
        sec2: "2. Conversation & Expression (会話と表現)",
        sec3: "3. Listening Comprehension (聴解)",
        sec4: "4. Reading Comprehension (読解)"
    };
    
    for (let secKey in secScores) {
        const s = secScores[secKey];
        if (s.total > 0) {
            const sPercent = Math.round((s.correct / s.total) * 100);
            const card = document.createElement('div');
            card.className = 'sec-score-card';
            card.innerHTML = `
                <div class="sec-score-title">${secNames[secKey] || secKey}</div>
                <div class="sec-score-bar-bg">
                    <div class="sec-score-bar-fill" style="width: ${sPercent}%; background: ${sPercent >= 75 ? 'var(--success-color)' : 'var(--warning-color)'};"></div>
                </div>
                <div class="sec-score-val">${s.correct} / ${s.total} (${sPercent}%)</div>
            `;
            secGrid.appendChild(card);
        }
    }
}

function returnToHome() {
    if ('speechSynthesis' in window && window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }
    clearInterval(timerInterval);
    document.getElementById('cbtArena').classList.remove('active');
    document.getElementById('resultsArena').classList.remove('active');
    document.getElementById('homeIntro').style.display = 'block';
    document.getElementById('modeSelection').style.display = 'block';
}
