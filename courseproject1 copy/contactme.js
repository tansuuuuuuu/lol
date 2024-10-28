const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        themeToggleButton.textContent = 'Switch to Light Theme';
    } else {
        themeToggleButton.textContent = 'Switch to Dark Theme';
    }
});
