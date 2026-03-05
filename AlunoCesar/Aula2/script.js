// ==========================================
// 1. Controle do Dark Mode
// ==========================================
const btnDarkMode = document.getElementById('btn-dark-mode');
const body = document.body;

// Verifica a preferência salva
if (localStorage.getItem('tema') === 'escuro') {
    body.classList.add('dark-mode');
    btnDarkMode.textContent = '☀️';
}

btnDarkMode.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        btnDarkMode.textContent = '☀️';
        localStorage.setItem('tema', 'escuro');
    } else {
        btnDarkMode.textContent = '🌙';
        localStorage.setItem('tema', 'claro');
    }
});

// ==========================================
// 2. Controle de Idiomas (i18n)
// ==========================================
const btnLang = document.getElementById('btn-lang');

// Dicionário de traduções
const traducoes = {
    pt: {
        "title-about": "Sobre",
        "title-skills": "Habilidades",
        "title-projects": "Projetos",
        "title-exp": "Experiências",
        "title-interests": "Interesses",
        // Adicione aqui os IDs dos seus parágrafos e os textos em português
    },
    en: {
        "title-about": "About",
        "title-skills": "Skills",
        "title-projects": "Projects",
        "title-exp": "Experiences",
        "title-interests": "Interests",
        // Adicione aqui os IDs dos seus parágrafos e os textos em inglês
    }
};

let idiomaAtual = localStorage.getItem('idioma') || 'pt';

function aplicarIdioma(idioma) {
    // Atualiza o texto do botão
    btnLang.textContent = idioma === 'pt' ? 'EN' : 'PT';
    
    // Percorre o dicionário e atualiza os textos na tela baseados nos IDs
    for (const [id, texto] of Object.entries(traducoes[idioma])) {
        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.innerHTML = texto;
        }
    }
    localStorage.setItem('idioma', idioma);
}

// Inicializa com o idioma salvo
aplicarIdioma(idiomaAtual);

// Alterna o idioma ao clicar
btnLang.addEventListener('click', () => {
    idiomaAtual = idiomaAtual === 'pt' ? 'en' : 'pt';
    aplicarIdioma(idiomaAtual);
});