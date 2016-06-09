var bigLogo = document.getElementById('bigLogo');
var btn = document.getElementById('btn');
var main = document.getElementById('main');
var menuBg = document.getElementById('menuBg');
var menu = document.getElementById('menu');
var hiMenu = document.getElementById('hiMenu');
var byeMenu = document.getElementById('byeMenu');
var menuItemContainer = document.getElementById('menuItemContainer');
var allMenuItem = document.getElementsByClassName('menuItem');
var buyTicket = document.getElementById('buyTicket');
var whyTicket = document.getElementById('whyTicket');
var mainCont = document.getElementById('mainCont');
var menuItems = ['Glance', 'Photolife', 'Timetable', 'Orator', 'Guide', 'Moreinfo', 'About', 'Partners'];
var goneTop = 0;
var menuOff = 1;
var menuOn = 0;
var goTop;
var reset = function () {
    var clientWidth = document.documentElement.clientWidth;
    var clientHeight = document.documentElement.clientHeight;
    var bg = document.getElementById('bg');
    if ((clientWidth / clientHeight) < (2000 / 1284)) {
        bg.style.backgroundSize = 'auto ' + (clientHeight * 1.2) + 'px';
    } else {
        bg.style.backgroundSize = (clientWidth * 1.2) + 'px' + ' auto';
    }
    bigLogo.style.height = clientHeight + 'px';
}
reset();
window.onresize = reset;
btn.ontouchstart = function () {
    if (menuOff == 1 && menuOn == 0) {
        goTop = setTimeout(function () {
            mainCont.className = 'switch';
            setTimeout(function () {
                mainCont.className = '';
            }, 500);
            setTimeout(function () {
                location.hash = '';
                location.hash = 'Glance';
            }, 400);
            hiMenu.className = 'goTop';
            setTimeout(function () {
                hiMenu.className = ''
            }, 1000);
            goneTop = 1;
        }, 1000)
    }
}
btn.ontouchend = function () {
    if (menuOff == 1 && menuOn == 0) {
        if (goneTop == 1) {
            goneTop = 0;
        } else {
            clearTimeout(goTop);
            main.className = 'hideMain';
            hiMenu.className = 'hideHiMenu';
            byeMenu.className = 'showByeMenu';
            menuBg.className = 'showMenuBg';
            menu.className = 'showMenu';
            menuOff = 0;
            setTimeout(function () {
                menuOn = 1
            }, 1250);
        }
    }
    if (menuOff == 0 && menuOn == 1) {
        menu.className = 'hideMenu';
        menuOn = 0;
        setTimeout(function () {
            byeMenu.className = 'hideByeMenu';
            hiMenu.className = 'showHiMenu';
            menuBg.className = 'hideMenuBg';
            main.className = 'showMain';
        }, 250);
        setTimeout(function () {
            byeMenu.className = '';
            hiMenu.className = '';
            menuBg.className = '';
            main.className = '';
            menu.className = '';
            menuOff = 1;
        }, 1250)
    }
}
for (var i = 0; i < menuItems.length; i++) (function (i) {
    allMenuItem[i].onclick = function () {
        if (document.documentElement.clientWidth > 768) {
            mainCont.className = 'switch';
            setTimeout(function () {
                mainCont.className = '';
            }, 500);
            setTimeout(function () {
                location.hash = '';
                location.hash = menuItems[i];
            }, 400);
        } else {
            menu.className = 'hideMenu';
            menuOn = 0;
            setTimeout(function () {
                byeMenu.className = 'hideByeMenu';
                hiMenu.className = 'showHiMenu';
                menuBg.className = 'hideMenuBg';
                main.className = 'showMain';
                location.hash = '';
                location.hash = menuItems[i];
            }, 250);
            setTimeout(function () {
                byeMenu.className = '';
                hiMenu.className = '';
                menuBg.className = '';
                main.className = '';
                menu.className = '';
                menuOff = 1;
            }, 1250)
        }
    }
})(i);
whyTicket.onmouseover = function () {
    whyTicketPopup.style.display = 'inherit';
    whyTicketPopup.className = 'whyTicketPopup';
}
whyTicket.onmouseout = function () {
    whyTicketPopup.className = 'whyTicketPopdown';
    setTimeout(function () {
        whyTicketPopup.style.display = 'none';
    }, 500);
}
window.onload = function () {
    if (document.documentElement.clientWidth > 768) {
        for (var i = 0; i < menuItems.length; i++) (function (i) {
            new Waypoint({
                element: document.getElementById(menuItems[i]),
                handler: function (direction) {
                    for (var j = 0; j < menuItems.length; j++) {
                        document.getElementsByClassName('menuItem')[j].className = 'menuItem';
                    }
                    if (direction == 'down') {
                        document.getElementsByClassName('menuItem')[i].className = 'menuItem current';
                    }
                    if (direction == 'up') {
                        if (i > 0) {
                            document.getElementsByClassName('menuItem')[i - 1].className = 'menuItem current';
                        }
                    }
                },
                offset: '64px'
            })
        })(i)
    }
}
var showBuyTicket;
window.onscroll = function () {
    if (document.documentElement.clientWidth <= 768) {
        buyTicket.style.display = 'none';
        clearTimeout(showBuyTicket);
        showBuyTicket = setTimeout(function () {
            buyTicket.style.display = 'inherit';
            buyTicket.className = 'showBuyTicket';
        }, 3000);
    }
}
var guideCards = ['1DX2', '80D', 'A6300', 'A7R2', 'RX1R2', 'GM', 'K1'];
var guideCardOff = [1, 1, 1, 1, 1, 1, 1];
var guideCardOn = [0, 0, 0, 0, 0, 0, 0];
for (var i = 0; i < guideCards.length; i++) (function (i) {
    document.getElementById(guideCards[i]).onclick = function () {
        if (guideCardOff[i] == 1 && guideCardOn[i] == 0) {
            guideCardOff[i] = 0;
            document.getElementById(guideCards[i] + 'Guide').style.display = 'inherit';
            document.getElementById(guideCards[i] + 'Guide').className = 'guideCard showGuide';
            setTimeout(function () {
                guideCardOn[i] = 1;
            }, 500);
        }
    }
    document.getElementById(guideCards[i] + 'Guide').onclick = function () {
        if (guideCardOff[i] == 0 && guideCardOn[i] == 1) {
            guideCardOn[i] = 0;
            document.getElementById(guideCards[i] + 'Guide').className = 'guideCard hideGuide';
            setTimeout(function () {
                document.getElementById(guideCards[i] + 'Guide').style.display = 'none';
                guideCardOff[i] = 1;
            }, 500);
        }
    }
})(i)