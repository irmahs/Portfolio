const translations = {
  en: {
    'nav.home':     'Home',
    'nav.about':    'About',
    'nav.journey':  'Journey',
    'nav.skills':   'Skills',
    'nav.projects': 'Projects',

    'home.role': 'Fullstack Developer · Paris',
    'home.bio':  "Welcome to my portfolio! Here, you can check out my projects, experience, and everything I'm working on.",
    'home.card.parcours': 'My Journey',
    'home.card.skills':   'Skills',
    'home.card.projets':  'Projects',
    'home.card.contact':  'Contact me ↗',

    'about.title': 'About',

    'journey.title':      'My Journey',
    'journey.experience': 'Experience',
    'journey.education':  'Education',

    'journey.lbp.role':   'Mobile App Developer',
    'journey.lbp.date':   'Sep 2022 – Oct 2024 · Gradignan, France',
    'journey.lbp.desc':   'Developed and maintained a mobile banking app using React Native. Agile team, accessibility focus, Detox & manual testing.',
    'journey.sogeti.role': 'Agile Tester',
    'journey.sogeti.date': 'Apr 2022 – Jun 2022 · Pessac, France',
    'journey.sogeti.desc': 'Automated test scripts with Selenium, Appium & TestNG. Tracked defects using Jira and Confluence.',
    'journey.erasmus.role': 'Exchange Student — Erasmus+',
    'journey.erasmus.date': 'Feb 2021 – Jun 2021 · Horsens, Denmark',
    'journey.erasmus.desc': 'Built a solo Android travel app and a team Flutter fitness app. All coursework in English.',

    'journey.master.sub':  'Master MIAGE — Computer Science & Business Management',
    'journey.master.date': '2022 – 2024 · Université de Bordeaux',
    'journey.master.desc': 'Advanced software architecture, AI, cybersecurity, agile project management. Work-study at La Banque Postale.',
    'journey.bachelor.sub':  'Bachelor MIAGE',
    'journey.bachelor.date': '2021 – 2022 · Université de Bordeaux',
    'journey.bachelor.desc': 'Full-stack development, databases, business analysis. Internship at Sogeti.',
    'journey.dut.sub':  'DUT in Computer Science',
    'journey.dut.date': '2019 – 2021 · Université de Lorraine, Metz',
    'journey.dut.desc': 'Core CS fundamentals, web & mobile dev, networks, Erasmus+ semester in Denmark.',
    'journey.bac.sub':  'Baccalauréat Scientifique (S)',
    'journey.bac.date': '2013 – 2019 · Lycée Jean XXIII, Metz',
    'journey.bac.desc': 'Mathematics specialization, digital & computer science option.',
    'journey.nisc.sub':  'Primary & Secondary Education — IB PYP & MYP',
    'journey.nisc.date': '2003 – 2013 · NISC, Phnom Penh, Cambodia',
    'journey.nisc.desc': 'International Baccalaureate programme. Volleyball, football, basketball, arts and dance clubs.',

    'skills.title':    'Skills',
    'skills.tools':    'Tools & Methods',
    'skills.levels':   'Proficiency',
    'skills.aws':      'AWS (in progress)',

    'projects.title': 'Projects',
  },
  fr: {
    'nav.home':     'Accueil',
    'nav.about':    'À propos',
    'nav.journey':  'Parcours',
    'nav.skills':   'Skills',
    'nav.projects': 'Projets',

    'home.role': 'Développeuse fullstack · Paris',
    'home.bio':  'Bienvenue sur mon portfolio ! Retrouvez ici mes projets, mon parcours et tout ce sur quoi je travaille.',
    'home.card.parcours': 'Mon parcours',
    'home.card.skills':   'Compétences',
    'home.card.projets':  'Projets',
    'home.card.contact':  'Me contacter ↗',

    'about.title': 'À propos',

    'journey.title':      'Mon parcours',
    'journey.experience': 'Expérience',
    'journey.education':  'Formation',

    'journey.lbp.role':   'Développeuse app mobile',
    'journey.lbp.date':   'Sep 2022 – Oct 2024 · Gradignan, France',
    'journey.lbp.desc':   'Développement et maintenance d\'une app bancaire mobile en React Native. Équipe agile, accessibilité, tests Detox et manuels.',
    'journey.sogeti.role': 'Testeuse agile',
    'journey.sogeti.date': 'Avr 2022 – Juin 2022 · Pessac, France',
    'journey.sogeti.desc': 'Scripts de tests automatisés avec Selenium, Appium & TestNG. Suivi des défauts via Jira et Confluence.',
    'journey.erasmus.role': 'Étudiante en échange — Erasmus+',
    'journey.erasmus.date': 'Fév 2021 – Juin 2021 · Horsens, Danemark',
    'journey.erasmus.desc': 'App Android de voyage en solo et app fitness Flutter en équipe. Cours en anglais.',

    'journey.master.sub':  'Master MIAGE — Informatique & Gestion',
    'journey.master.date': '2022 – 2024 · Université de Bordeaux',
    'journey.master.desc': 'Architecture logicielle, IA, cybersécurité, gestion de projets agiles. Alternance à La Banque Postale.',
    'journey.bachelor.sub':  'Licence MIAGE',
    'journey.bachelor.date': '2021 – 2022 · Université de Bordeaux',
    'journey.bachelor.desc': 'Développement full-stack, bases de données, analyse métier. Stage chez Sogeti.',
    'journey.dut.sub':  'DUT Informatique',
    'journey.dut.date': '2019 – 2021 · Université de Lorraine, Metz',
    'journey.dut.desc': 'Fondamentaux informatiques, web & mobile, réseaux, semestre Erasmus+ au Danemark.',
    'journey.bac.sub':  'Baccalauréat Scientifique (S)',
    'journey.bac.date': '2013 – 2019 · Lycée Jean XXIII, Metz',
    'journey.bac.desc': 'Spécialité mathématiques, option numérique et informatique.',
    'journey.nisc.sub':  'Primaire & Secondaire — IB PYP & MYP',
    'journey.nisc.date': '2003 – 2013 · NISC, Phnom Penh, Cambodge',
    'journey.nisc.desc': 'Programme Baccalauréat International. Volleyball, football, basketball, arts et danse.',

    'skills.title':    'Compétences',
    'skills.tools':    'Outils & méthodes',
    'skills.levels':   'Niveau par domaine',
    'skills.aws':      'AWS (en cours)',

    'projects.title': 'Projets',
  },
};

function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang]?.[key]) el.textContent = translations[lang][key];
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
