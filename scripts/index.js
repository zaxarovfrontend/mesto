
let popup = document.querySelector('.popup');
let openPopupBtn = document.querySelector('.profile__edit-button');
/* Переменая крестик закрытия */
let closePopupBtn = popup.querySelector('.popup__close-button');
/* Переменая для контейнера с формой */
let popupСontainer = popup.querySelector('.popup__container');
/* Переменая для name */
let nameInput = popupСontainer.querySelector('[name="name-input"]');
/* Переменая для job */
let jobInput = popupСontainer.querySelector('[name="job-input"]');
/* Переменая для заголовка куда будет добавляться новый текст */
let newProfileTitle = document.querySelector('.profile__title');
/* Переменая для текста работы куда будет добавляться новый текст */
let newProfileText = document.querySelector('.profile__text');


/* действие открытие модального окна */
function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value =  newProfileTitle.textContent;
  jobInput.value = newProfileText.textContent;
}


/* действие закрытие модального окна */
function closePopup() {
  popup.classList.remove('popup_opened');
}

/* функция с обработчиком кнопки */
function formSubmitHandler (evt) {
  evt.preventDefault();   
  newProfileTitle.textContent = nameInput.value;
  newProfileText.textContent = jobInput.value; 
  closePopup();                            
}

/* Кнопка "редактировать" открывает модалку */
openPopupBtn.addEventListener('click', openPopup);
/* Кнопка "крестик" (закрыть модалку) */
closePopupBtn.addEventListener('click', closePopup);

popupСontainer.addEventListener('submit', formSubmitHandler);
