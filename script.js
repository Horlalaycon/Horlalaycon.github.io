const menuButton = document.getElementById('menuButton');
const menuDropdown = document.getElementById('menuDropdown');
const themeButton = document.getElementById('themeButton'); // New line

menuButton.addEventListener('click', () => {
    menuDropdown.style.display = menuDropdown.style.display === 'none' ? 'block' : 'none';
});

// Check if the user has already chosen a mode
const mode = localStorage.getItem('mode');

// If the user has chosen a mode, set it
if (mode) {
    document.body.classList.add(mode);
    document.querySelector('.menu-bar').classList.add(mode);
    menuDropdown.classList.add(mode);
    document.querySelector('.terminal').classList.add(mode);
    updateThemeIcon(mode); // New line
}

themeButton.addEventListener('click', () => { // Modified line
    document.body.classList.toggle('dark-mode');
    document.querySelector('.menu-bar').classList.toggle('dark-mode');
    menuDropdown.classList.toggle('dark-mode');
    document.querySelector('.terminal').classList.toggle('dark-mode');

    // Store the user's preference
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('mode', 'dark-mode');
    } else {
        localStorage.setItem('mode', '');
    }
    updateThemeIcon(localStorage.getItem('mode')); // New line
});

function updateThemeIcon(mode) { // New function
    if (mode === 'dark-mode') {
        themeButton.textContent = '🌙';
    } else {
        themeButton.textContent = '☀️';
    }
}