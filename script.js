const menuButton = document.getElementById('menuButton');
const menuDropdown = document.getElementById('menuDropdown');
const darkModeToggle = document.getElementById('darkModeToggle');

menuButton.addEventListener('click', () => {
    menuDropdown.style.display = menuDropdown.style.display === 'none' ? 'block' : 'none';
});

darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.menu-bar').classList.toggle('dark-mode');
    menuDropdown.classList.toggle('dark-mode');
    document.querySelector('.terminal').classList.toggle('dark-mode');
});