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

function rightScroll() {
    const left = document.querySelector(".book-inner-container");
    left.scrollBy(200, 0);
}
function leftScroll() {
    const right = document.querySelector(".book-inner-container");
    right.scrollBy(-200, 0);
}


// const scrollLeftButton = document.getElementById('scroll-left');
// const scrollRightButton = document.getElementById('scroll-right');
// const bookInnerContainer = document.querySelector('.book-inner-container');

// scrollLeftButton.addEventListener('click', () => {
//   bookInnerContainer.scrollLeft -= 100; // Ändra detta värde för att justera scrollavståndet.
// });

// scrollRightButton.addEventListener('click', () => {
//   bookInnerContainer.scrollLeft += 100; // Ändra detta värde för att justera scrollavståndet.
// });

// -------------Flyttar hela bilden---
// const scrollLeftButton = document.getElementById('scroll-left');
// const scrollRightButton = document.getElementById('scroll-right');
// const bookInnerContainer = document.querySelector('.book-inner-container');
// let scrollPosition = 0; // Håll reda på den aktuella scrollpositionen

// scrollLeftButton.addEventListener('click', () => {
//   scrollPosition -= 400; // Ändra detta värde för att justera scrollavståndet.
//   updateScrollPosition();
// });

// scrollRightButton.addEventListener('click', () => {
//   scrollPosition += 400; // Ändra detta värde för att justera scrollavståndet.
//   updateScrollPosition();
// });

// function updateScrollPosition() {
//   bookInnerContainer.style.transform = `translateX(-${scrollPosition}px)`;
// }