
let popup = document.querySelector('.popup');
let openpopupbtn = document.querySelector('.profile__edit-button');
/* Переменая крестик закрытия */
let closepopupbtn = popup.querySelector('.popup__close-button');
/* Переменая для контейнера с формой */
let popupcontainer = popup.querySelector('.popup__container');


/* действие открытие модального окна */
function openPopup() {
  popup.classList.add('popup_opened');
}


/* действие закрытие модального окна */
function closePopup() {
  popup.classList.remove('popup_opened');
}

/* Кнопка "редактировать" открывает модалку */
openpopupbtn.addEventListener('click', openPopup);
/* Кнопка "крестик" (закрыть модалку) */
closepopupbtn.addEventListener('click', closePopup);



