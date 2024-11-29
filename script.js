// burger menu
const burger = document.querySelector('#header__burger');
const menu = document.querySelector('#header__menu');

burger.addEventListener('click', function() {
    burger.classList.toggle('header__burger-active');
    menu.classList.toggle('header__menu');
    menu.classList.toggle('header__menu-show');
});

// memuat navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header')
    const fixedHeader = header.offsetTop;

    if(window.scrollY > fixedHeader) {
        header.classList.add('header__fixed');
    } else {
        header.classList.remove('header__fixed');
    }
}

// memastikan kelas header__menu-show tidak ada
function checkScreenWidth() {
    const isMenuVisible = menu.classList.contains('header__menu-show');
    if (window.innerWidth > 480) {
        burger.classList.remove('header__burger-active');
        menu.classList.add('header__menu');
        menu.classList.remove('header__menu-show');
    } else if (window.innerWidth <= 480 && !isMenuVisible) {
        menu.classList.add('header__menu');
    }
}

checkScreenWidth();

window.addEventListener('resize', checkScreenWidth);
