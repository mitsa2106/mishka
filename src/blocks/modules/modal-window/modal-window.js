// ПОКАЗЫВАЕМ-СКРЫВАЕМ МОДАЛЬНОЕ ОКНО

var orderBtn = document.querySelector(".best-product__btn");
var modal = document.querySelector(".modal-window");
var closeModal = document.querySelector(".modal-window__close");

orderBtn.addEventListener("click", function (evt) {
    evt.preventDefault();  //отменяем действие по умолчанию
    modal.classList.add("modal-show");
});

closeModal.addEventListener("click",function (evt) {
    evt.preventDefault();
    modal.classList.remove("modal-show");
});

// закрытие клавишей Esc
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
    }

    if (modal.classList.contains("modal-show")) {
        modal.classList.remove("modal-show");
    }
});
