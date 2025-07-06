document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('themeButton');
    const body = document.body;
    const menuBar = document.querySelector('.menu-bar');
    const menuDropdown = document.getElementById('menuDropdown');
    const terminal = document.querySelector('.terminal');
    const contentItems = document.querySelectorAll('.content-item'); // Select all content items

    // Function to set the theme
    const setTheme = (mode) => {
        if (mode === 'dark-mode') {
            body.classList.add('dark-mode');
            menuBar.classList.add('dark-mode');
            menuDropdown.classList.add('dark-mode');
            terminal.classList.add('dark-mode');
            themeButton.textContent = '🌙'; // Moon icon for dark mode
            contentItems.forEach(item => item.classList.add('dark-mode')); // Apply dark mode to content items
        } else {
            body.classList.remove('dark-mode');
            menuBar.classList.remove('dark-mode');
            menuDropdown.classList.remove('dark-mode');
            terminal.classList.remove('dark-mode');
            themeButton.textContent = '☀️'; // Sun icon for light mode
            contentItems.forEach(item => item.classList.remove('dark-mode')); // Remove dark mode from content items
        }
    };

    // Check for saved theme preference
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
        setTheme(savedMode);
    } else {
        // Default to light mode if no preference is saved
        setTheme('light-mode');
    }

    // Toggle theme on button click
    themeButton.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('mode', 'light-mode');
            setTheme('light-mode');
        } else {
            localStorage.setItem('mode', 'dark-mode');
            setTheme('dark-mode');
        }
    });

    // Toggle dropdown menu (already in your HTML, but good to have here too)
    document.getElementById('menuButton').addEventListener('click', function() {
        menuDropdown.style.display = menuDropdown.style.display === 'none' ? 'block' : 'none';
    });
});