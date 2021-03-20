
let popup = document.querySelector('.popup')
let button = document.querySelector('.profile__edit-button')
/* Переменая крестик закрытия */
let closebutton = document.querySelector('.popup__close-button')
/* Переменая для контейнера с формой */
let popupcontainer = document.querySelector('.popup__container');


/* открытие модального окна */
function openPopup() {
  popup.classList.add('popup_opened');
}


/* закрытие модального окна */
function closePopup() {
  popup.classList.remove('popup_opened');
}

/* Кнопка редактировать открывает модалку */
button.addEventListener('click', openPopup);
/* Кнопка крестик (закрыть модалку) */
closebutton.addEventListener('click', closePopup);



