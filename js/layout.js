function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang]?.[key]) el.textContent = translations[lang][key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (translations[lang]?.[key]) el.innerHTML = translations[lang][key];
  });
}

function updateParisTime() {
  const time = new Date().toLocaleTimeString('fr-FR', {
    timeZone: 'Europe/Paris',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  document.querySelectorAll('.paris-time').forEach(el => {
    el.textContent = time + ' · Paris';
  });
}

async function loadPartials() {
  const [statusRes, navRes] = await Promise.all([
    fetch('partials/status-bar.html'),
    fetch('partials/bottom-nav.html'),
  ]);

  const statusBar = document.querySelector('.status-bar');
  const bottomNav = document.querySelector('.bottom-nav');

  if (statusBar) statusBar.innerHTML = await statusRes.text();
  if (bottomNav) bottomNav.innerHTML = await navRes.text();

  const page = location.pathname.split('/').pop().replace('.html', '') || 'index';
  document.querySelector(`.nav-btn[data-page="${page}"]`)?.classList.add('active');
  document.querySelector(`.web-nav-btn[data-page="${page}"]`)?.classList.add('active');

  updateParisTime();
  setInterval(updateParisTime, 60000);
}

function injectWebHeader() {
  const header = document.createElement('header');
  header.className = 'web-header';
  header.innerHTML = `
    <span class="paris-time web-header-time"></span>
    <nav class="web-nav">
      <a href="index.html"    class="web-nav-btn" data-page="index"    data-i18n="nav.home">Home</a>
      <a href="about.html"    class="web-nav-btn" data-page="about"    data-i18n="nav.about">About</a>
      <a href="journey.html"  class="web-nav-btn" data-page="journey"  data-i18n="nav.journey">Journey</a>
      <a href="skills.html"   class="web-nav-btn" data-page="skills"   data-i18n="nav.skills">Skills</a>
      <a href="projects.html" class="web-nav-btn" data-page="projects" data-i18n="nav.projects">Projects</a>
    </nav>
  `;
  document.querySelector('.phone')?.before(header);
}

function injectControls() {
  const controls = document.createElement('div');
  controls.className = 'controls';
  controls.innerHTML = `
    <div class="view-toggle">
      <button class="view-btn active" data-view="mobile" title="Mobile view">
        <i class="ti ti-device-mobile"></i>
      </button>
      <button class="view-btn" data-view="web" title="Web view">
        <i class="ti ti-browser"></i>
      </button>
    </div>
    <div class="lang-toggle">
      <button class="lang-btn active" data-lang="en">EN</button>
      <button class="lang-btn" data-lang="fr">FR</button>
    </div>
    <button class="theme-btn" title="Toggle theme">
      <i class="ti ti-moon"></i>
    </button>
  `;
  document.body.appendChild(controls);

  const themeBtn  = controls.querySelector('.theme-btn');
  const themeIcon = themeBtn.querySelector('i');
  if (document.documentElement.classList.contains('dark')) themeIcon.className = 'ti ti-sun';
  themeBtn.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    themeIcon.className = isDark ? 'ti ti-sun' : 'ti ti-moon';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  const savedView = localStorage.getItem('view') || 'mobile';
  if (savedView === 'web') {
    document.body.classList.add('web-view');
    controls.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
    controls.querySelector('.view-btn[data-view="web"]').classList.add('active');
  }
  controls.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      controls.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const isWeb = btn.dataset.view === 'web';
      document.body.classList.toggle('web-view', isWeb);
      localStorage.setItem('view', isWeb ? 'web' : 'mobile');
    });
  });

  const savedLang = localStorage.getItem('lang') || 'en';
  if (savedLang !== 'en') {
    controls.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    controls.querySelector(`.lang-btn[data-lang="${savedLang}"]`).classList.add('active');
  }
  applyTranslations(savedLang);

  controls.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      controls.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const lang = btn.dataset.lang;
      localStorage.setItem('lang', lang);
      applyTranslations(lang);
    });
  });
}

function interceptNavLinks() {
  document.addEventListener('click', e => {
    const link = e.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('#') || href.startsWith('tel')) return;
    e.preventDefault();
    const page = document.querySelector('.page.active');
    if (page) {
      page.classList.add('is-leaving');
      setTimeout(() => { window.location.href = href; }, 260);
    } else {
      window.location.href = href;
    }
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  injectWebHeader();
  await loadPartials();
  injectControls();
  interceptNavLinks();
});
