
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function start() {
    const menu = $(".header__navigation--menu");
    const navBlock = $(".header__navigation--list");
    const nav = $(".header__navigation");

    menu.onclick = function toggleshowNavigation() {
        navBlock.classList.toggle("showNavigation");
    }
    navBlock.onclick = function toggleshowNavigation() {
        navBlock.classList.remove("showNavigation");
    }

    window.onscroll = function (e) {
        const high = (70 - Math.floor(window.scrollY) / 10) + "px";
        nav.style.height = high;
    }
}
start();