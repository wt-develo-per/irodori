
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.createElement('nav');
    nav.className = 'floating-nav';
    nav.innerHTML = `
        <div class="nav-container">
            <a href="index.html" class="nav-brand">📚 Irodori / Genki Kanji</a>
            <div class="nav-links">
                <a href="index.html" class="nav-link">Home / Index</a>
                <div class="nav-dropdown">
                    <button class="nav-dropbtn">Volumes ▾</button>
                    <div class="nav-dropdown-content">
                        ${[
                            {f: "kanji_vol1_001_040.html", t: "Vol 1: 001-040 (L3-5)"},
                            {f: "kanji_vol2_041_080.html", t: "Vol 2: 041-080 (L6-8)"},
                            {f: "kanji_vol3_081_120.html", t: "Vol 3: 081-120 (L9-11)"},
                            {f: "kanji_vol4_121_152.html", t: "Vol 4: 121-152 (L12-14)"},
                            {f: "kanji_vol5_153_192.html", t: "Vol 5: 153-192 (L15-17)"},
                            {f: "kanji_vol6_193_232.html", t: "Vol 6: 193-232 (L18-19)"},
                            {f: "kanji_vol7_233_272.html", t: "Vol 7: 233-272 (L20-21)"},
                            {f: "kanji_vol8_273_317.html", t: "Vol 8: 273-317 (L22-23)"}
                        ].map(item => `<a href="${item.f}" class="${window.location.pathname.endsWith(item.f) ? 'active' : ''}">${item.t}</a>`).join('')}
                    </div>
                </div>
            </div>
            <button class="theme-toggle" id="themeToggle" title="Toggle Theme">🌓</button>
        </div>
    `;
    document.body.prepend(nav);

    const toggleBtn = document.getElementById('themeToggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const html = document.documentElement;
            const current = html.getAttribute('data-theme') || 'dark';
            const next = current === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', next);
            localStorage.setItem('kanji_theme', next);
        });
    }
    const savedTheme = localStorage.getItem('kanji_theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }
});
