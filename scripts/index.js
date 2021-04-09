
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

const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const openEditProfilePopupBtn = document.querySelector('.profile__edit-button');
/* Переменая крестик закрытия */
const closeEditProfilePopupBtn = popupEditProfile.querySelector('.popup__close-button_type_edit');
/* Переменая для контейнера с формой */
const popupСontainer = popupEditProfile.querySelector('.popup__container');
/* Переменая для name */
const nameInput = popupСontainer.querySelector('[name="name-input"]');
/* Переменая для job */
const jobInput = popupСontainer.querySelector('[name="job-input"]');
/* Переменая для заголовка куда будет добавляться новый текст */
const newProfileTitle = document.querySelector('.profile__title');
/* Переменая для текста работы куда будет добавляться новый текст */
const newProfileText = document.querySelector('.profile__text');
const openAddCardPopupBtn = document.querySelector('.profile__add-button');
const closeAddCardPopupBtn = document.querySelector('.popup__close-button_type_add');


/* действие открытие модального окна */
function openPopup(element) {
  element.classList.add('popup_opened');
}

function getValuePopupEdit(element) {
  nameInput.value =  newProfileTitle.textContent;
  jobInput.value = newProfileText.textContent;
  openPopup(popupEditProfile);
}

/* действие закрытие модального окна */
function closePopup(element) {
  element.classList.remove('popup_opened'); 
}


/* функция с обработчиком кнопки */
function formSubmitHandler (evt) {
  evt.preventDefault();   
  newProfileTitle.textContent = nameInput.value;
  newProfileText.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

/* Кнопка "редактировать" открывает модалку */
openEditProfilePopupBtn.addEventListener('click', getValuePopupEdit);
/* Кнопка "крестик" (закрыть модалку) */
closeEditProfilePopupBtn.addEventListener('click', ()=>closePopup(popupEditProfile));
popupСontainer.addEventListener('submit', formSubmitHandler);


/* код для спринта 5) */
const popupAdd = document.querySelector('.popup_type_add');
openAddCardPopupBtn.addEventListener('click', ()=>openPopup(popupAdd));
closeAddCardPopupBtn.addEventListener('click', ()=>closePopup(popupAdd));

const cardOnline = document.querySelector('.cards');
const cardTemplate = document.querySelector('.card-template').content;

function createElement (item) {
const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
const cardTemplateTitle = cardTemplate.querySelector('.card__title');
const cardTemplateImage = cardTemplate.querySelector('.card__image');

cardTemplateTitle.textContent = item.name
cardTemplateImage.src = item.link
cardTemplateImage.alt = item.textContent

cardElement.querySelector('.card__like-button').addEventListener('click', likeCard);
cardElement.querySelector('.card__delete').addEventListener('click',deleteCard);
cardElement.querySelector('.card__image').addEventListener('click',openFullImage);
/* если меняю на cardTemplateImage не открывается popup*/
return cardElement;
}

function renderInitialCards() {
  initialCards.forEach((cardElement) => {
    cardOnline.append(createElement(cardElement))
  })
}

renderInitialCards()

const newCardTitle = document.querySelector('[name="title"]');
const newLink = document.querySelector('[name="link"]');
const popupСontainerAdd = document.querySelector('.popup__container_add');
const deleteCardBtn = document.querySelector('.card__delete');


function handleAddCard (evt) {
  evt.preventDefault();  
  cardOnline.prepend(createElement({title:newCardTitle.value, link:newLink.value}))
  popupСontainerAdd.reset();
  closePopup(popupAdd);
}

function likeCard (evt) {
  evt.target.classList.toggle('card__like-button_active');
}
 
function deleteCard (evt) {
  evt.target.closest('.card').remove(); 
}

const popupImage = document.querySelector('.popup_type_image');
const pupupImageCard = document.querySelector('.popup__image');
const closeBtnpopupImage = document.querySelector('.popup__close-button_type_image');
const popupImageTitle = document.querySelector('.popup__caption');


function openFullImage(event) {
  pupupImageCard.src = event.target.src;
  pupupImageCard.alt = event.target.closest('.card').querySelector('.card__title').textContent
  popupImageTitle.textContent = event.target.closest('.card').querySelector('.card__title').textContent
  openPopup(popupImage)
}

closeBtnpopupImage.addEventListener('click', ()=>closePopup(popupImage));
popupСontainerAdd.addEventListener('submit', handleAddCard);