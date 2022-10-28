
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function start() {
    const menu = $(".header__navigation--menu");
    const navBlock = $(".header__navigation--list");
    const nav = $(".header__navigation");
    const homeDownBtn = $(".home__button .down-btn");
    const downNotifBtn = $(".home__button .home__button--guide");
    const finishNotifBtn = $(".main .device-notif-block__btn a");
    const closeNotifBtn = $(".main .device-notif-block__close-icon");
    
    function closeNotification(e) {
        $(".main .device-notif").style.display = "none";
    }

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

    homeDownBtn.onclick = function () {
        downNotifBtn.style.opacity = "0";
    }

    finishNotifBtn.onclick = closeNotification;
    closeNotifBtn.onclick = closeNotification;
}
start();