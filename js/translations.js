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

    'journey.efor.role':  'Consultant — Analyst Developer',
    'journey.efor.date':  'Aug 2025 – Apr 2026 · Strasbourg, France',
    'journey.efor.desc':  'Developed and maintained C modules and C# Devbooster web applications for health professionals. QA activities including writing and executing test cases.',

    'journey.lbp.role':   'Concept Developer',
    'journey.lbp.date':   'Sep 2022 – Sep 2024 · Gradignan, France',
    'journey.lbp.desc':   'Developed and maintained La Banque Postale\'s mobile app (TypeScript, React Native) for over 10 million clients. Agile Scrum, RGAA accessibility standards.',

    'journey.sogeti.role': 'Agile Tester',
    'journey.sogeti.date': 'Apr 2022 – Jun 2022 · Pessac, France',
    'journey.sogeti.desc': 'Automated test scripts with Selenium, Appium and TestNG. Test plans and suites based on business requirements. Jira and Confluence.',

    'journey.erasmus.role': 'Exchange Student — Erasmus+',
    'journey.erasmus.date': 'Feb 2021 – Jun 2021 · Horsens, Denmark',
    'journey.erasmus.desc': 'Exchange program at University of Horsens with courses in English.',

    'journey.master.sub':  'Master MIAGE — Computer Science and Business Management',
    'journey.master.date': '2022 – 2024 · Université de Bordeaux',
    'journey.master.desc': 'Multidisciplinary training combining advanced computer science with business management. Junior MIAGE Bordeaux and MIAGE Bordeaux Association.',

    'journey.bachelor.sub':  'Bachelor MIAGE',
    'journey.bachelor.date': '2021 – 2022 · Université de Bordeaux',
    'journey.bachelor.desc': 'Full-stack development, databases, business analysis. Internship at Sogeti.',

    'journey.dut.sub':  'DUT in Computer Science',
    'journey.dut.date': '2019 – 2021 · Université de Lorraine, Metz',
    'journey.dut.desc': 'Foundations of software development, systems, networks, and databases. Erasmus IT exchange at the University of Horsens, Denmark.',

    'journey.bac.sub':  'Baccalauréat Scientifique (S)',
    'journey.bac.date': '2013 – 2019 · Lycée Jean XXIII, Metz',
    'journey.bac.desc': 'Baccalauréat scientifique with life sciences option and mathematics specialization.',

    'journey.nisc.sub':  'Primary and Secondary Education — IB PYP and MYP',
    'journey.nisc.date': '2003 – 2013 · NISC, Phnom Penh, Cambodia',
    'journey.nisc.desc': 'International programme following IB PYP and MYP. Sports and arts clubs.',

    'skills.title':     'Skills',
    'skills.frontend':  'Front-End',
    'skills.backend':   'Back-End',
    'skills.tools':     'Tools and Methods',
    'skills.databases': 'Databases',
    'skills.ai':        'AI-Augmented Development',
    'skills.levels':    'Proficiency',

    'projects.title': 'Projects',

    'about.bio1':  'My name is <strong>Irma</strong> (pronounced <em>/ˈiː.mə/</em> or <em>eema</em>). Born in <strong>Phnom Penh, Cambodia</strong> in 2000, based in <strong>France</strong> since 2013.',
    'about.bio2':  'I like to <strong>create things and see them come to life</strong>. Learning new technology to make things even <strong>prettier and flashier</strong> is what drives me. When I\'m not coding, you\'ll find me traveling or creating something just for the joy of it.',

    'about.section.goals':       '🎯 Goals',
    'about.goals1': 'Doing what <strong>I love</strong>, proud of what <strong>I create</strong>, and surrounded by <strong>amazing people</strong>. Someday, I\'d love to win an award for <strong>Best Website</strong> — dreams fuel the grind 💫',
    'about.goals2': 'I\'m part of the <strong>newer generation</strong>, driven by hunger to learn. Extremely <strong>flexible</strong> and ready to <strong>adapt</strong> — who knows, I might be your <strong>new favourite colleague</strong>!',

    'about.section.values':      '🌟 Values',
    'about.value1': '<strong>Diversity and inclusion</strong> — Passionate about visibility of women and APAC women in tech.',
    'about.value2': '<strong>Responsibility</strong> — Aspires to be a role model for underrepresented groups.',
    'about.value3': '<strong>Adaptability</strong> — Multicultural upbringing, thrives in diverse teams.',
    'about.value4': '<strong>Collaboration</strong> — Values cross-functional teamwork and shared goals.',
    'about.value5': '<strong>User-centered design</strong> — Dedicated to meaningful, accessible digital solutions.',
    'about.value6': '<strong>Lifelong learning</strong> — Open to relocation, travel, and continuous growth.',

    'about.section.story':       '🎮 How It All Started',
    'about.story1': 'It started with editing <strong>Tumblr</strong> and <strong>DeviantArt</strong> themes. Then video games sparked an interest in <strong>game development</strong>, which evolved into building web and mobile applications.',
    'about.story2': 'I wasn\'t the best at drawing, but I could still create the <strong>worlds in my head</strong> through code — and that felt amazing. From the <strong>art community</strong> to the <strong>dev community</strong>.',

    'about.section.hobbies':     '🌈 Interests and Hobbies',
    'about.hobby.games':   '🎮 Tactical games',
    'about.hobby.voice':   '🎙️ Voice acting',
    'about.hobby.design':  '🎨 Graphic design',
    'about.hobby.cats':    '🐱 Cats',
    'about.hobby.dnd':     '🐉 D and D',
    'about.hobby.crafts':  '🧶 Arts and crafts',
    'about.hobby.reading': '📚 Reading',
    'about.hobby.makeup':  '💄 Makeup art',
    'about.hobby.coding':  '💻 Side projects',
    'about.hobby.esports': '🎯 Esports coaching',

    'about.section.inspiration': '✨ Creative Inspiration',
    'about.inspiration': 'Fairytales · Myths and Legends · Nature · Origami · Superheroes · Fairies · Avatar the Last Airbender',

    'about.section.connect':     '🌞 Let\'s Connect',
    'about.connect': 'If you\'ve made it this far — <strong>thank you</strong>. If our ideals align, let\'s create something amazing together — something that brings a <strong>little bit of sunshine</strong> into the world. ✨',
    'about.contact': 'Contact me ↗',

    'projects.euroinformations.desc': 'Development on in-house C modules to enhance workflow. New features in C# DevBooster for certain in-house applications.',
    'projects.portfolio26.desc': 'Webpage with updated content and design, built while learning Claude Code integration.',
    'projects.portfolio25.desc': 'An updated personal portfolio built using Jekyll and hosted on GitHub Pages.',
    'projects.tictactoe.desc':   'A mini desktop game built with Electron — two players, alternating turns on a single desktop.',
    'projects.louetavoiture.desc': 'Car reservation website with a Spring Boot back-end and Angular front-end.',
    'projects.lbp2.desc':        'Developed front-end features for La Banque Postale\'s new mobile banking application using React Native.',
    'projects.lbp1.desc':        'Developed front-end features for La Banque Postale\'s mobile banking application using Angular.',
    'projects.android.desc':     'Small Android games and apps built to learn Kotlin and Android Compose.',
    'projects.data.desc':        'Experience using data analysis and visualization tools to explore datasets.',
    'projects.greenheart.desc':  'Vegan meal app focused on weight goals — proposed meal plans and tracked dietary progress.',
    'projects.travelbuddy.desc': 'Android digital wallet for travel documents — trip organizer, to-do lists, and document storage.',
    'projects.colourit.desc':    'Responsive webpage with a clean design using HTML, JS, and Bootstrap.',
    'projects.skillxt.desc':     'Skill-matching app — connects people who want to learn with people who can teach.',
    'projects.library.desc':     'Logistics and stock management app for a library and a sweater shop, built with JavaFX.',
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

    'journey.efor.role':  'Consultante — Développeuse analyste',
    'journey.efor.date':  'Août 2025 – Avr 2026 · Strasbourg, France',
    'journey.efor.desc':  'Développement et maintenance de modules C et applications web C# Devbooster pour des professionnels de santé. Activités QA incluant rédaction et exécution de cas de test.',

    'journey.lbp.role':   'Concept Developer',
    'journey.lbp.date':   'Sep 2022 – Sep 2024 · Gradignan, France',
    'journey.lbp.desc':   'Développement et maintenance de l\'application mobile La Banque Postale (TypeScript, React Native) pour plus de 10 millions de clients. Agile Scrum, normes d\'accessibilité RGAA.',

    'journey.sogeti.role': 'Testeuse agile',
    'journey.sogeti.date': 'Avr 2022 – Juin 2022 · Pessac, France',
    'journey.sogeti.desc': 'Scripts de tests automatisés avec Selenium, Appium et TestNG. Plans et suites de tests. Jira et Confluence.',

    'journey.erasmus.role': 'Étudiante en échange — Erasmus+',
    'journey.erasmus.date': 'Fév 2021 – Juin 2021 · Horsens, Danemark',
    'journey.erasmus.desc': 'Programme d\'échange à l\'Université de Horsens avec des cours en anglais.',

    'journey.master.sub':  'Master MIAGE — Informatique et Gestion',
    'journey.master.date': '2022 – 2024 · Université de Bordeaux',
    'journey.master.desc': 'Formation pluridisciplinaire combinant informatique avancée et gestion d\'entreprise. Junior MIAGE Bordeaux et Association MIAGE Bordeaux.',

    'journey.bachelor.sub':  'Licence MIAGE',
    'journey.bachelor.date': '2021 – 2022 · Université de Bordeaux',
    'journey.bachelor.desc': 'Développement full-stack, bases de données, analyse métier. Stage chez Sogeti.',

    'journey.dut.sub':  'DUT Informatique',
    'journey.dut.date': '2019 – 2021 · Université de Lorraine, Metz',
    'journey.dut.desc': 'Fondamentaux du développement logiciel, systèmes, réseaux et bases de données. Programme Erasmus à l\'Université de Horsens, Danemark.',

    'journey.bac.sub':  'Baccalauréat Scientifique (S)',
    'journey.bac.date': '2013 – 2019 · Lycée Jean XXIII, Metz',
    'journey.bac.desc': 'Baccalauréat scientifique avec option sciences de la vie et de la terre et spécialité mathématiques.',

    'journey.nisc.sub':  'Primaire et Secondaire — IB PYP et MYP',
    'journey.nisc.date': '2003 – 2013 · NISC, Phnom Penh, Cambodge',
    'journey.nisc.desc': 'Programme international IB PYP et MYP. Clubs sportifs et artistiques.',

    'skills.title':     'Compétences',
    'skills.frontend':  'Front-End',
    'skills.backend':   'Back-End',
    'skills.tools':     'Outils et méthodes',
    'skills.databases': 'Bases de données',
    'skills.ai':        'Développement assisté par IA',
    'skills.levels':    'Niveau par domaine',

    'projects.title': 'Projets',

    'about.bio1':  'Je m\'appelle <strong>Irma</strong> (prononcé <em>/ˈiː.mə/</em> ou <em>eema</em>). Née à <strong>Phnom Penh, Cambodge</strong> en 2000, basée en <strong>France</strong> depuis 2013.',
    'about.bio2':  'J\'aime <strong>créer des choses et les voir prendre vie</strong>. Apprendre de nouvelles technologies pour les rendre encore <strong>plus belles et plus percutantes</strong>, c\'est ce qui me motive. Quand je ne code pas, je voyage ou je crée quelque chose juste pour le plaisir.',

    'about.section.goals':       '🎯 Objectifs',
    'about.goals1': 'Faire ce que <strong>j\'aime</strong>, être fière de ce que <strong>je crée</strong>, et être entourée de <strong>gens formidables</strong>. Un jour, j\'adorerais remporter un prix pour le <strong>Meilleur Site Web</strong> — les rêves alimentent l\'effort 💫',
    'about.goals2': 'Je fais partie de la <strong>nouvelle génération</strong>, portée par la soif d\'apprendre. Extrêmement <strong>flexible</strong> et prête à <strong>m\'adapter</strong> — qui sait, je pourrais être votre <strong>nouvelle collègue préférée</strong> !',

    'about.section.values':      '🌟 Valeurs',
    'about.value1': '<strong>Diversité et inclusion</strong> — Passionnée par la visibilité des femmes et des femmes APAC dans la tech.',
    'about.value2': '<strong>Responsabilité</strong> — Aspire à être un modèle pour les groupes sous-représentés.',
    'about.value3': '<strong>Adaptabilité</strong> — Éducation multiculturelle, s\'épanouit dans des équipes diverses.',
    'about.value4': '<strong>Collaboration</strong> — Apprécie le travail transversal et les objectifs partagés.',
    'about.value5': '<strong>Design centré utilisateur</strong> — Dédiée à des solutions numériques significatives et accessibles.',
    'about.value6': '<strong>Apprentissage continu</strong> — Ouverte à la mobilité, aux voyages et à la croissance personnelle.',

    'about.section.story':       '🎮 Comment tout a commencé',
    'about.story1': 'Tout a commencé avec la personnalisation de thèmes <strong>Tumblr</strong> et <strong>DeviantArt</strong>. Puis les jeux vidéo ont éveillé un intérêt pour le <strong>game development</strong>, qui a évolué vers la création d\'applications web et mobiles.',
    'about.story2': 'Je n\'étais pas la meilleure en dessin, mais je pouvais quand même créer les <strong>mondes dans ma tête</strong> grâce au code — et cette sensation était incroyable. De la <strong>communauté artistique</strong> à la <strong>communauté dev</strong>.',

    'about.section.hobbies':     '🌈 Centres d\'intérêt',
    'about.hobby.games':   '🎮 Jeux tactiques',
    'about.hobby.voice':   '🎙️ Doublage',
    'about.hobby.design':  '🎨 Design graphique',
    'about.hobby.cats':    '🐱 Chats',
    'about.hobby.dnd':     '🐉 D et D',
    'about.hobby.crafts':  '🧶 Arts et artisanat',
    'about.hobby.reading': '📚 Lecture',
    'about.hobby.makeup':  '💄 Maquillage artistique',
    'about.hobby.coding':  '💻 Projets personnels',
    'about.hobby.esports': '🎯 Coaching esports',

    'about.section.inspiration': '✨ Sources d\'inspiration',
    'about.inspiration': 'Contes de fées · Mythes et Légendes · Nature · Origami · Super-héros · Fées · Avatar, le dernier maître de l\'air',

    'about.section.connect':     '🌞 Connectons-nous',
    'about.connect': 'Si vous êtes arrivé jusqu\'ici — <strong>merci</strong>. Si nos idéaux s\'alignent, créons quelque chose d\'incroyable ensemble — quelque chose qui apporte un <strong>peu de soleil</strong> dans le monde. ✨',
    'about.contact': 'Me contacter ↗',

    'projects.euroinformations.desc': 'Développement de modules C internes pour améliorer les processus. Nouvelles fonctionnalités en C# dans DevBooster pour certaines applications internes.',
    'projects.portfolio26.desc': 'Page web avec contenu et design mis à jour, créée en apprenant l\'intégration de Claude Code.',
    'projects.portfolio25.desc': 'Portfolio personnel mis à jour, construit avec Jekyll et hébergé sur GitHub Pages.',
    'projects.tictactoe.desc':   'Mini jeu de bureau créé avec Electron — deux joueurs, tours alternés sur un seul ordinateur.',
    'projects.louetavoiture.desc': 'Site de réservation de voitures avec un back-end Spring Boot et un front-end Angular.',
    'projects.lbp2.desc':        'Développement de fonctionnalités front-end pour la nouvelle application bancaire mobile de La Banque Postale avec React Native.',
    'projects.lbp1.desc':        'Développement de fonctionnalités front-end pour l\'application bancaire mobile de La Banque Postale avec Angular.',
    'projects.android.desc':     'Petits jeux Android et applications créés pour apprendre Kotlin et Android Compose.',
    'projects.data.desc':        'Expérience avec des outils d\'analyse et de visualisation de données.',
    'projects.greenheart.desc':  'Application de repas végans axée sur les objectifs nutritionnels — plans de repas et suivi diététique.',
    'projects.travelbuddy.desc': 'Portefeuille numérique Android pour les documents de voyage — organisateur, listes de tâches et stockage.',
    'projects.colourit.desc':    'Page web responsive avec un design épuré en HTML, JS et Bootstrap.',
    'projects.skillxt.desc':     'Application de mise en relation par compétences — connecte ceux qui veulent apprendre avec ceux qui peuvent enseigner.',
    'projects.library.desc':     'Application de gestion des stocks pour une bibliothèque et une boutique de pulls, construite avec JavaFX.',
  },
};
