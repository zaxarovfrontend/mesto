
let popup = document.querySelector('.popup');
let openPopupBtn = document.querySelector('.profile__edit-button');
/* Переменая крестик закрытия */
let closePopupBtnEdit = popup.querySelector('.popup__close-button_type_edit');
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
const openBtnAdd = document.querySelector('.profile__add-button');
const closeBtnAdd = document.querySelector('.popup__close-button_type_add');



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
closePopupBtnEdit.addEventListener('click', closePopup);

popupСontainer.addEventListener('submit', formSubmitHandler);


/* код для спринта 5) */

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },

  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

let popupAdd = document.querySelector('.popup_type_add');

function openPopupAdd() {
  popupAdd.classList.add('popup_opened');

}


function closePopupAdd() {
  popupAdd.classList.remove('popup_opened');
}

openBtnAdd.addEventListener('click', openPopupAdd);
closeBtnAdd.addEventListener('click', closePopupAdd);


const cardOnline = document.querySelector('.cards');
const cardTemplate = document.querySelector('.card-template').content;

function createElement (item) {
const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
const cardTemplateTitle = cardTemplate.querySelector('.card__title');
const cardTemplateImage = cardTemplate.querySelector('.card__image');

cardTemplateTitle.textContent = item.name
cardTemplateImage.src = item.link

cardElement.querySelector('.card__like-button').addEventListener('click', likeCard);
cardElement.querySelector('.card__delete').addEventListener('click',deleteCard);
cardElement.querySelector('.card__image').addEventListener('click',onCardImagePopup);

return cardElement;
}

function render() {
  initialCards.forEach((cardElement) => {
    cardOnline.append(createElement(cardElement))
  })
}

render()

const newCardTitle = document.querySelector('[name="title"]');
const newLink = document.querySelector('[name="link"]');
const popupСontainerAdd = document.querySelector('.popup__container_add');
const deleteCardBtn = document.querySelector('.card__delete');

function handlerNewCard (evt) {
  evt.preventDefault();  
  cardOnline.prepend(createElement({title:newCardTitle.value, link:newLink.value}))

  closePopupAdd();
}

popupСontainerAdd.addEventListener('submit', handlerNewCard);

function likeCard (evt) {
  evt.target.classList.toggle('card__like-button_active');
}
 
function deleteCard (evt) {
  evt.target.closest('.card').remove(); 
}

const popupImage = document.querySelector('.popup_type_image');
const closeBtnpopupImage = document.querySelector('.popup__close-button_type_image');
const popupImageTitle = document.querySelector('.popup__caption');


function openPopupImage() {
  popupImage.classList.add('popup_opened');  
}

function closePopupImage() {
  popupImage.classList.remove('popup_opened');
}

function onCardImagePopup(event) {
  popupImage.src = event.target.src;
  popupImageTitle.textContent = event.target.closest('.card').querySelector('.card__title').textContent
  openPopupImage() 
}


closeBtnpopupImage.addEventListener('click', closePopupImage);


