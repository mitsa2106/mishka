//ОТКРЫТИЕ-ЗАКРЫТИЕ МЕНЮ БУРГЕР на мобильной версии

var toggleWrapper = document.getElementsByClassName("main-menu__toggle-wrapper")[0];
var toggle = document.getElementsByClassName("main-menu__toggle")[0];
var menuList = document.getElementsByClassName("main-menu__list")[0];

function showMenu() {
    menuList.classList.remove("main-menu__list--hidden");
    menuList.classList.add("main-menu__list");
    toggle.classList.add("main-menu__toggle--crossed");
}

function hideMenu() {
    menuList.classList.remove("main-menu__list");
    menuList.classList.add("main-menu__list--hidden");
    toggle.classList.remove("main-menu__toggle--crossed");
}

menuList.classList.remove("main-menu__list--hidden");
toggle.classList.add("main-menu__toggle--crossed");

toggleWrapper.addEventListener("click", function(evt){
    evt.preventDefault(); //отменяем действие по умолчанию

    if (menuList.classList.contains("main-menu__list")) {
        hideMenu();
    } else {
        showMenu();
    }
});