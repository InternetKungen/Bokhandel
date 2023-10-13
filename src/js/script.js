function toggleMenu() {
    const section_menu = document.querySelector('.menu-container');
    const menuButton = document.querySelector('.menu-button');
    section_menu.classList.toggle('hidden');
    menuButton.classList.toggle('open'); // Lägg till eller ta bort CSS-klassen 'open'
}