
let popup = document.querySelector('.popup');
let openPopupBtn = document.querySelector('.profile__edit-button');
/* Переменая крестик закрытия */
let closePopupBtn = popup.querySelector('.popup__close-button');
/* Переменая для контейнера с формой */
let popupСontainer = popup.querySelector('.popup__container');


/* действие открытие модального окна */
function openPopup() {
  popup.classList.add('popup_opened');
}


/* действие закрытие модального окна */
function closePopup() {
  popup.classList.remove('popup_opened');
}

/* Кнопка "редактировать" открывает модалку */
openPopupBtn.addEventListener('click', openPopup);

/* Кнопка "крестик" (закрыть модалку) */
closePopupBtn.addEventListener('click', closePopup);



