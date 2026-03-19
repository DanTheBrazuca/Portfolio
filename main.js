const nav = document.querySelector('.nav');
const menuBtn = document.querySelector('.menu-toggle');
const langBtn = document.getElementById('lang-toggle');
const themeBtn = document.getElementById('theme-toggle');

const strings = {
    pt: {
        langLabel: 'EN',
        navHome: 'Início',
        navAbout: 'Sobre',
        navWork: 'Projetos',
        navContact: 'Contato',
        heroTitle: 'Bem vindo ao meu portfólio',
        heroText: 'Sou um aluno da Fatec e esse é o meu portfólio.',
        btnWork: 'Ver meu trabalho',
        aboutTitle: 'Sobre Mim',
        aboutText: 'Olá, eu sou o Daniel. Sou aluno da Fatec, atualmente no curso de Desenvolvimento de Software Multiplataforma.',
        workTitle: 'Projetos',
        project1Title: 'Projeto 1',
        project1Text: 'Site do Corinthians, meu primeiro projeto da Fatec.',
        project2Title: 'Projeto 2',
        project2Text: 'Site Fatec AMS, meu segundo projeto da Fatec.',
        contactTitle: 'Contato',
        contactText: 'Emails: <a href="mailto:dars120308@gmail.com">dars120308@gmail.com</a> | <a href="mailto:daniel.silva484@fatec.sp.gov.br">daniel.silva484@fatec.sp.gov.br</a>',
        footer: '© 2026 Daniel Alves. All rights reserved.<br>Repositório: <a href="https://github.com/DanTheBrazuca/Portfolio" target="_blank"rel="noopener noreferrer">https://github.com/DanTheBrazuca/Portfolio</a>'
    },
    en: {
        langLabel: 'PT',
        navHome: 'Home',
        navAbout: 'About',
        navWork: 'Work',
        navContact: 'Contact',
        heroTitle: 'Welcome to my portfolio',
        heroText: 'I am a Fatec student and this is my portfolio.',
        btnWork: 'See my work',
        aboutTitle: 'About Me',
        aboutText: 'Hi, I am Daniel. I study at Fatec in the Multiplatform Software Development course.',
        workTitle: 'Projects',
        project1Title: 'Project 1',
        project1Text: 'Corinthians website, my first project at Fatec.',
        project2Title: 'Project 2',
        project2Text: 'Fatec AMS website, my second project at Fatec.',
        contactTitle: 'Contact',
        contactText: 'Emails: <a href="mailto:dars120308@gmail.com">dars120308@gmail.com</a> | <a href="mailto:daniel.silva484@fatec.sp.gov.br">daniel.silva484@fatec.sp.gov.br</a>',
        footer: '© 2026 Daniel Alves. All rights reserved.<br>Repository: <a href="https://github.com/DanTheBrazuca/Portfolio" target="_blank"rel="noopener noreferrer">https://github.com/DanTheBrazuca/Portfolio</a>'
    }
};

function setLanguage(lang) {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.dataset.translate;
        if (strings[lang] && strings[lang][key]) {
            el.innerHTML = strings[lang][key];
        }
    });
    langBtn.textContent = strings[lang].langLabel;
    localStorage.setItem('site-lang', lang);
}

function setTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.dataset.theme = 'dark';
        themeBtn.textContent = '☀';
    } else {
        document.documentElement.removeAttribute('data-theme');
        themeBtn.textContent = '🌙';
    }
    localStorage.setItem('site-theme', theme);
}

menuBtn.addEventListener('click', () => nav.classList.toggle('open'));

langBtn.addEventListener('click', () => {
    const current = localStorage.getItem('site-lang') || 'pt';
    setLanguage(current === 'pt' ? 'en' : 'pt');
});

themeBtn.addEventListener('click', () => {
    const current = localStorage.getItem('site-theme') || 'light';
    setTheme(current === 'light' ? 'dark' : 'light');
});

setLanguage(localStorage.getItem('site-lang') || 'pt');
setTheme(localStorage.getItem('site-theme') || 'light');