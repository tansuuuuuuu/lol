let currentTheme = 'light'; 
const availableThemes = ['light', 'dark']; 

const themes = {
    light: {
        backgroundColor: '#fff5cc',
        textColor: '#333',
        headerColor: '#ffcc00',
        footerColor: '#ffcc00',
        accentColor: '#444',
        logoColor: '#333' 
    },
    dark: {
        backgroundColor: '#1c1c1c',
        textColor: '#f1f1f1',
        headerColor: '#2d2d2d',
        footerColor: '#2d2d2d',
        accentColor: '#ffcc00',
        logoColor: '#ffffff' 
    }
};

function toggleTheme() {
    const themeToggleButton = document.getElementById('theme-toggle');
    
    let themeText = '';

    let selectedTheme;
    if (currentTheme === 'light') {
        selectedTheme = 'dark';
        themeText = 'Switch to Light Theme';
    } else {
        selectedTheme = 'light';
        themeText = 'Switch to Dark Theme';
    }

    applyTheme(selectedTheme);
    themeToggleButton.textContent = themeText;
}

function applyTheme(theme) {
    currentTheme = theme; 

    const body = document.body;
    body.className = theme + '-theme';

    const headers = document.querySelectorAll('h1, h2, h3');
    headers.forEach(header => {
        header.style.color = themes[theme].accentColor;
    });

    const logo = document.querySelector('nav .logo'); 
    logo.style.color = themes[theme].logoColor; 

    switch (theme) {
        case 'light':
            console.log('Applied light theme');
            break;
        case 'dark':
            console.log('Applied dark theme');
            break;
        default:
            console.log('Unknown theme');
            break;
    }
}

function logSections() {
    const sections = document.querySelectorAll('section');
    let i = 0; 
    while (i < sections.length) {
        console.log(`Section ${i + 1}: ${sections[i].id}`);
        if (sections[i].id === '') {
            i++; 
            continue;
        }
        if (i === 4) {
            break;
        }
        i++; 
    }
}

document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

logSections();
