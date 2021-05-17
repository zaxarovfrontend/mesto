import Card from "../scripts/components/Card.js";
import { initialCards } from "../scripts/utils/initialCards.js";
import FormValidator from "../scripts/components/FormValidator";
import { validateConfig } from "../scripts/utils/constants.js";
import "./index.css";
import Section from "../scripts/components/Section.js";
import PopupWithImage from "../scripts/components/PopupWithImage";



const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const openEditProfilePopupBtn = document.querySelector(".profile__edit-button");
/* Переменая крестик закрытия */
const closeEditProfilePopupBtn = popupEditProfile.querySelector(".popup__close-button_type_edit");
/* Переменая для контейнера с формой */
const formEditProfile = popupEditProfile.querySelector(".popup__container_type_edit-profile");
/* Переменая для name */
const nameInput = formEditProfile.querySelector('[name="name-input"]');
/* Переменая для job */
const jobInput = formEditProfile.querySelector('[name="job-input"]');
/* Переменая для заголовка куда будет добавляться новый текст */
const newProfileTitle = document.querySelector(".profile__title");
/* Переменая для текста работы куда будет добавляться новый текст */
const newProfileText = document.querySelector(".profile__text");
const openAddCardPopupBtn = document.querySelector(".profile__add-button");
const closeAddCardPopupBtn = document.querySelector(".popup__close-button_type_add");
const popupAdd = document.querySelector(".popup_type_add");
const cardOnline = document.querySelector(".cards");
const popupTypeImage = document.querySelector(".popup_type_image");
const pupupImageCard = document.querySelector(".popup__image");
const closeBtnpopupImage = document.querySelector(".popup__close-button_type_image");
const popupImageTitle = document.querySelector(".popup__caption");
const newCardTitle = document.querySelector('[name="title"]');
const newLink = document.querySelector('[name="link"]');
const formAddCard = document.querySelector(".popup__container_add");
const popupСontainerAdd = document.querySelector(".popup__container_add");
const validatorAddCard = new FormValidator(validateConfig, popupСontainerAdd);

const popupСontainerEdit = document.querySelector(".popup__container_type_edit-profile");
const validatorEditProfile = new FormValidator(validateConfig, popupСontainerEdit);


validatorAddCard.enableValidation();
validatorEditProfile.enableValidation();

const popupImage = new PopupWithImage('.popup_type_image');


// создание нового элеменита карточки. Где мы из массива берем ссылку, название картинки и альт.
const section = new Section({ items:initialCards, renderer: (item) => {
        const handlerCardClick = () => popupImage.open(item);

        const card = new Card(item, handlerCardClick)
        const cardElement = card.generateCard();
        return cardElement;
    }}, '.cards');
section.renderer();






/* действие открытие модального окна 
function openPopup(element) {
  element.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc);
}

function openEditProfilePopup() {
  nameInput.value = newProfileTitle.textContent;
  jobInput.value = newProfileText.textContent;
  openPopup(popupEditProfile);
  validatorEditProfile.removeInputError();
}

действие закрытие модального окна
function closePopup(element) {
  element.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEsc);
}
/*
function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    const element = document.querySelector(".popup_opened");
    closePopup(element);
  }
}
*/


 //функция с обработчиком кнопки
function handleEditProfileFormSubmit(name) {
  newProfileTitle.textContent = nameInput.value;
  newProfileText.textContent = jobInput.value;
  close();
}


function handleAddCardSubmit(evt) {
  evt.preventDefault();
  //cardOnline.prepend(createElement({ name: newCardTitle.value, link: newLink.value }));
  closePopup(popupAdd);
  formAddCard.reset();
}

function openAddCardPopup(element) {
  formAddCard.reset();
  openPopup(popupAdd);
  validatorAddCard.removeInputError();
}

//setEventListeners(){
    //this._popupSelector.addEventListener("keydown", () => {
        //this._handleEscClose();
    //})


formAddCard.addEventListener("submit", handleAddCardSubmit);
//document.addEventListener("click", closePopupClick);
/* Кнопка "редактировать" открывает модалку */
//openEditProfilePopupBtn.addEventListener("click", openEditProfilePopup);
/* Кнопка "крестик" (закрыть модалку) */
//closeEditProfilePopupBtn.addEventListener("click", () => closePopup(popupEditProfile));
formEditProfile.addEventListener("submit", handleEditProfileFormSubmit);
openAddCardPopupBtn.addEventListener("click", openAddCardPopup);
//closeAddCardPopupBtn.addEventListener("click", () => closePopup(popupAdd));
closeBtnpopupImage.addEventListener("click",close);