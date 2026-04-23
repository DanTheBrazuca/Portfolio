const nav = document.querySelector('.nav');
const menuBtn = document.querySelector('.menu-toggle');
const langBtn = document.getElementById('lang-toggle');
const themeBtn = document.getElementById('theme-toggle');
const colorblindBtn = document.getElementById('colorblind-toggle');
const colorblindMenu = document.getElementById('colorblind-menu');

if (menuBtn) menuBtn.setAttribute('aria-label', 'Open navigation menu');
if (langBtn) langBtn.setAttribute('aria-label', 'Change language (current: PT)');
if (themeBtn) themeBtn.setAttribute('aria-label', 'Switch to dark theme');
if (colorblindBtn) {
    colorblindBtn.setAttribute('aria-label', 'Open colorblind options');
    colorblindBtn.setAttribute('aria-expanded', 'false');
    colorblindBtn.setAttribute('aria-controls', 'colorblind-menu');
}
if (colorblindMenu) {
    colorblindMenu.setAttribute('aria-hidden', 'true');
}

const strings = {
    pt: {
        langLabel: 'EN',
        navHome: 'Início',
        navAbout: 'Sobre',
        navWork: 'Projetos',
        navContact: 'Contato',
        colorblindOff: 'Desativado',
        colorblindProtanopia: 'Protanopia',
        colorblindDeuteranopia: 'Deuteranopia',
        colorblindTritanopia: 'Tritanopia',
        colorblindAchromatopsia: 'Acromatopsia',
        heroTitle: 'Bem vindo ao meu portfólio',
        heroText: 'Sou um aluno da Fatec e esse é o meu portfólio.',
        btnWork: 'Ver meu trabalho',
        aboutTitle: 'Sobre Mim',
        aboutText: 'Olá, eu sou o Daniel. Sou aluno da Fatec, atualmente no curso de Desenvolvimento de Software Multiplataforma.',
        workTitle: 'Projetos',
        sortOldest: 'Mais antigo',
        sortNewest: 'Mais novo',
        showAllProjects: 'Mostrar todos',
        project1Title: 'Projeto 1',
        project1Text: 'Site do Corinthians, meu primeiro projeto da Fatec.',
        project2Title: 'Projeto 2',
        project2Text: 'Site Fatec AMS, meu segundo projeto da Fatec.',
        project3Title: 'Projeto 3',
        project3Text: 'Site Amazon, um projeto pessoal.',
        contactTitle: 'Contato',
        contactText: 'Emails: <a href="mailto:dars120308@gmail.com">dars120308@gmail.com</a> | <a href="mailto:daniel.silva484@fatec.sp.gov.br">daniel.silva484@fatec.sp.gov.br</a>',
        footer: '© 2026 Daniel Alves. All rights reserved.<br>Repositório: <a href="https://github.com/DanTheBrazuca/Portfolio" target="_blank"rel="noopener noreferrer">https://github.com/DanTheBrazuca/Portfolio</a>'
    },
    en: {
        langLabel: 'ES',
        navHome: 'Home',
        navAbout: 'About',
        navWork: 'Work',
        navContact: 'Contact',
        colorblindOff: 'Off',
        colorblindProtanopia: 'Protanopia',
        colorblindDeuteranopia: 'Deuteranopia',
        colorblindTritanopia: 'Tritanopia',
        colorblindAchromatopsia: 'Achromatopsia',
        heroTitle: 'Welcome to my portfolio',
        heroText: 'I am a Fatec student and this is my portfolio.',
        btnWork: 'See my work',
        aboutTitle: 'About Me',
        aboutText: 'Hi, I am Daniel. I study at Fatec in the Multiplatform Software Development course.',
        workTitle: 'Projects',
        sortOldest: 'Oldest',
        sortNewest: 'Newest',
        showAllProjects: 'Show all',
        project1Title: 'Project 1',
        project1Text: 'Corinthians website, my first project at Fatec.',
        project2Title: 'Project 2',
        project2Text: 'Fatec AMS website, my second project at Fatec.',
        project3Title: 'Project 3',
        project3Text: 'Amazon website, a personal project.',
        contactTitle: 'Contact',
        contactText: 'Emails: <a href="mailto:dars120308@gmail.com">dars120308@gmail.com</a> | <a href="mailto:daniel.silva484@fatec.sp.gov.br">daniel.silva484@fatec.sp.gov.br</a>',
        footer: '© 2026 Daniel Alves. All rights reserved.<br>Repository: <a href="https://github.com/DanTheBrazuca/Portfolio" target="_blank"rel="noopener noreferrer">https://github.com/DanTheBrazuca/Portfolio</a>'
    },
    es: {
        langLabel: 'PT',
        navHome: 'Inicio',
        navAbout: 'Sobre',
        navWork: 'Proyectos',
        navContact: 'Contacto',
        colorblindOff: 'Apagado',
        colorblindProtanopia: 'Protanopia',
        colorblindDeuteranopia: 'Deuteranopia',
        colorblindTritanopia: 'Tritanopia',
        colorblindAchromatopsia: 'Acromatopsia',
        heroTitle: 'Bienvenido a mi portafolio',
        heroText: 'Soy estudiante de Fatec y este es mi portafolio.',
        btnWork: 'Ver mi trabajo',
        aboutTitle: 'Sobre mí',
        aboutText: 'Hola, soy Daniel. Estudio en Fatec en el curso de Desarrollo de Software Multiplataforma.',
        workTitle: 'Proyectos',
        sortOldest: 'Más antiguo',
        sortNewest: 'Más nuevo',
        showAllProjects: 'Mostrar todo',
        project1Title: 'Proyecto 1',
        project1Text: 'Sitio de Corinthians, mi primer proyecto en Fatec.',
        project2Title: 'Proyecto 2',
        project2Text: 'Sitio de Fatec AMS, mi segundo proyecto en Fatec.',
        project3Title: 'Proyecto 3',
        project3Text: 'Sitio de Amazon, un proyecto personal.',
        contactTitle: 'Contacto',
        contactText: 'Emails: <a href="mailto:dars120308@gmail.com">dars120308@gmail.com</a> | <a href="mailto:daniel.silva484@fatec.sp.gov.br">daniel.silva484@fatec.sp.gov.br</a>',
        footer: '© 2026 Daniel Alves. Todos los derechos reservados.<br>Repositorio: <a href="https://github.com/DanTheBrazuca/Portfolio" target="_blank"rel="noopener noreferrer">https://github.com/DanTheBrazuca/Portfolio</a>'
    }
};

const projects = [
    { id: 1, titleKey: 'project1Title', descKey: 'project1Text', url: 'https://danthebrazuca.github.io/PRIMEIROSITE/', date: '2026-03-5' },
    { id: 2, titleKey: 'project2Title', descKey: 'project2Text', url: 'https://danthebrazuca.github.io/SiteFatec1/', date: '2026-03-10' },
    { id: 3, titleKey: 'project3Title', descKey: 'project3Text', url: 'https://danthebrazuca.github.io/Amazon/', date: '2026-03-15' }
];

function renderProjects(order = 'newest') {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    const sorted = [...projects].sort((a, b) => {
        if (order === 'oldest') return new Date(a.date) - new Date(b.date);
        return new Date(b.date) - new Date(a.date);
    });

    const currentLang = document.documentElement.lang.startsWith('pt') ? 'pt' : document.documentElement.lang.startsWith('es') ? 'es' : 'en';
    grid.innerHTML = sorted.map(project => {
        const title = strings[currentLang][project.titleKey];
        const desc = strings[currentLang][project.descKey];

        return `
            <article class="card" role="listitem">
                <h3>${title}</h3>
                <p><a href="${project.url}" target="_blank" rel="noopener noreferrer">${desc}</a></p>
                <p class="project-date">${new Date(project.date).toLocaleDateString(document.documentElement.lang)}</p>
            </article>
        `;
    }).join('');
}

function setupProjectControls() {
    const oldest = document.getElementById('sort-oldest');
    const newest = document.getElementById('sort-newest');
    if (oldest) oldest.addEventListener('click', () => renderProjects('oldest'));
    if (newest) newest.addEventListener('click', () => renderProjects('newest'));
}

function setLanguage(lang) {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang === 'es' ? 'es' : 'en';
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.dataset.translate;
        if (strings[lang] && strings[lang][key]) {
            el.innerHTML = strings[lang][key];
        }
    });
    langBtn.textContent = strings[lang].langLabel;
    langBtn.setAttribute('aria-label', `Change language (current: ${lang.toUpperCase()})`);
    localStorage.setItem('site-lang', lang);
    renderProjects();
    setupProjectControls();
    announce(`Language changed to ${lang.toUpperCase()}`);
}

function setTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.dataset.theme = 'dark';
        themeBtn.textContent = '☀';
        themeBtn.setAttribute('aria-label', 'Switch to light theme');
        announce('Theme changed to dark mode');
    } else {
        document.documentElement.removeAttribute('data-theme');
        themeBtn.textContent = '🌙';
        themeBtn.setAttribute('aria-label', 'Switch to dark theme');
        announce('Theme changed to light mode');
    }
    localStorage.setItem('site-theme', theme);
}

const colorblindModes = ['off', 'protanopia', 'deuteranopia', 'tritanopia', 'achromatopsia'];

function setColorblindMode(mode) {
    colorblindModes.forEach(m => document.body.classList.remove(`colorblind-${m}`));

    if (mode && mode !== 'off') {
        document.body.classList.add(`colorblind-${mode}`);
        colorblindBtn.textContent = '🟩';
        colorblindBtn.setAttribute('aria-label', `Colorblind mode selected: ${mode}. Close selection to continue.`);
        announce(`Colorblind mode set to ${mode}`);
    } else {
        document.body.classList.add('colorblind-off');
        colorblindBtn.textContent = '🟦';
        colorblindBtn.setAttribute('aria-label', 'Colorblind mode off. Open options to select mode.');
        announce('Colorblind mode off');
    }

    if (colorblindMenu) {
        colorblindMenu.querySelectorAll('[data-mode]').forEach(button => {
            button.classList.toggle('active', button.dataset.mode === mode);
            button.setAttribute('aria-current', button.dataset.mode === mode ? 'true' : 'false');
        });
    }

    localStorage.setItem('site-colorblind', mode);
}

function openColorblindMenu() {
    if (!colorblindMenu || !colorblindBtn) return;
    const open = !colorblindMenu.classList.contains('open');
    colorblindMenu.classList.toggle('open', open);
    colorblindMenu.hidden = !open;
    colorblindBtn.setAttribute('aria-expanded', String(open));
    colorblindMenu.setAttribute('aria-hidden', String(!open));
    if (open) announce('Colorblind option menu opened. Use arrows or tab to pick.');
    else announce('Colorblind option menu closed.');
}



menuBtn.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelectorAll('.nav a').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

langBtn.addEventListener('click', () => {
    const current = localStorage.getItem('site-lang') || 'pt';
    let next;
    if (current === 'pt') next = 'en';
    else if (current === 'en') next = 'es';
    else next = 'pt';
    setLanguage(next);
});

themeBtn.addEventListener('click', () => {
    const current = localStorage.getItem('site-theme') || 'light';
    setTheme(current === 'light' ? 'dark' : 'light');
});

function cycleColorblindMode() {
    const current = localStorage.getItem('site-colorblind') || 'off';
    const currentIndex = colorblindModes.indexOf(current);
    const nextIndex = (currentIndex + 1) % colorblindModes.length;
    const nextMode = colorblindModes[nextIndex];
    setColorblindMode(nextMode);
    announce(`Available colorblind modes: ${colorblindModes.join(', ')}`);
}

if (colorblindBtn) {
    colorblindBtn.addEventListener('click', () => {
        openColorblindMenu();
    });
}

if (colorblindMenu) {
    colorblindMenu.querySelectorAll('[data-mode]').forEach(button => {
        button.addEventListener('click', () => {
            const mode = button.dataset.mode;
            setColorblindMode(mode);
            colorblindMenu.classList.remove('open');
            colorblindMenu.hidden = true;
            colorblindBtn.setAttribute('aria-expanded', 'false');
            colorblindMenu.setAttribute('aria-hidden', 'true');
            announce(`Colorblind mode set to ${mode}.`);
        });
    });
}

document.addEventListener('click', (event) => {
    if (!colorblindMenu || !colorblindBtn) return;
    if (!colorblindMenu.classList.contains('open')) return;

    const target = event.target;
    if (target === colorblindBtn || colorblindMenu.contains(target)) return;

    colorblindMenu.classList.remove('open');
    colorblindMenu.hidden = true;
    colorblindBtn.setAttribute('aria-expanded', 'false');
    colorblindMenu.setAttribute('aria-hidden', 'true');
    announce('Colorblind options closed');
});


document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});

document.addEventListener('click', (event) => {
    if (!colorblindMenu || !colorblindBtn) return;
    if (!colorblindMenu.classList.contains('open')) return;

    const target = event.target;
    if (target === colorblindBtn || colorblindMenu.contains(target)) return;

    colorblindMenu.classList.remove('open');
    colorblindMenu.hidden = true;
    colorblindBtn.setAttribute('aria-expanded', 'false');
    announce('Colorblind options closed');
});

function announce(message) {
    const liveRegion = document.getElementById('aria-live');
    if (liveRegion) {
        liveRegion.textContent = message;
    }
}

setLanguage(localStorage.getItem('site-lang') || 'pt');
setTheme(localStorage.getItem('site-theme') || 'dark');
setColorblindMode(localStorage.getItem('site-colorblind') || 'off');