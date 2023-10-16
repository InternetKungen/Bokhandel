function toggleMenu() {
    const section_menu = document.querySelector('.menu-container');
    const menuButton = document.querySelector('.menu-button');
    section_menu.classList.toggle('hidden');
    menuButton.classList.toggle('open'); // Lägg till eller ta bort CSS-klassen 'open'
}

function toggleSubMenu(link) {
    const submenuId = link.getAttribute('data-submenu');
    const subMenu = document.getElementById(submenuId);

    if (subMenu) {
        const otherSubmenus = document.querySelectorAll('.sub-navigation:not(#' + submenuId + ')');
        otherSubmenus.forEach(function (submenu) {
        submenu.classList.add('hidden-sub');
        });

        subMenu.classList.toggle('hidden-sub');
    }
}
