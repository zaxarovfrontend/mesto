import Card from "./Card.js";
import { initialCards } from "./initialCards.js";
import FormValidator from "./FormValidator.js";
import { validateConfig } from "./constants.js";


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
const cardTemplate = document.querySelector(".card-template").content;
const popupImage = document.querySelector(".popup_type_image");
const pupupImageCard = document.querySelector(".popup__image");
const closeBtnpopupImage = document.querySelector(".popup__close-button_type_image");
const popupImageTitle = document.querySelector(".popup__caption");
const newCardTitle = document.querySelector('[name="title"]');
const newLink = document.querySelector('[name="link"]');
const formAddCard = document.querySelector(".popup__container_add");
const deleteCardBtn = document.querySelector(".card__delete");
const buttonElement = document.querySelector(validateConfig.submitButtonSelector);
const popupСontainerAdd = document.querySelector(".popup__container_add");
const popupContAdd = new FormValidator(validateConfig, popupСontainerAdd);
popupContAdd.enableValidation();
const popupСontainerEdit = document.querySelector(".popup__container_type_edit-profile");
const popupCont = new FormValidator(validateConfig, popupСontainerEdit);
popupCont.enableValidation();


/* действие открытие модального окна */
function openPopup(element) {
  element.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc);
}

function openEditProfilePopup() {
  nameInput.value = newProfileTitle.textContent;
  jobInput.value = newProfileText.textContent;
  openPopup(popupEditProfile);
  popupCont.removeInputError();
}

/* действие закрытие модального окна */
function closePopup(element) {
  element.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEsc);
}

function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    const element = document.querySelector(".popup_opened");
    closePopup(element);
  }
}

function closePopupClick(evt) {
  if (evt.target.classList.contains("popup__overlay")) {
    const element = document.querySelector(".popup_opened");
    closePopup(element);
  }
}

/* функция с обработчиком кнопки */
function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();
  newProfileTitle.textContent = nameInput.value;
  newProfileText.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

function createElement(item) {
  const card = new Card(item, ".card-template", openFullImage);
  const cardElement = card.generateCard();
  return cardElement;
}
function renderInitialCards() {
  initialCards.forEach((item) => {
    const cardElement = createElement(item);
    document.querySelector(".cards").append(cardElement);
  });
}

renderInitialCards();

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  cardOnline.prepend(createElement({ name: newCardTitle.value, link: newLink.value }));
  closePopup(popupAdd);
  formAddCard.reset();
}

function openAddCardPopup(element) {
  formAddCard.reset();
  openPopup(popupAdd);
  popupContAdd.removeInputError();
}

function openFullImage(name, link) {
  document.querySelector(".popup__image").src = link;
  document.querySelector(".popup__caption").alt = name;
  document.querySelector(".popup__caption").textContent = name;
  openPopup(popupImage);
}

closeBtnpopupImage.addEventListener("click", () => closePopup(popupImage));
formAddCard.addEventListener("submit", handleAddCardSubmit);
document.addEventListener("click", closePopupClick);
/* Кнопка "редактировать" открывает модалку */
openEditProfilePopupBtn.addEventListener("click", openEditProfilePopup);
/* Кнопка "крестик" (закрыть модалку) */
closeEditProfilePopupBtn.addEventListener("click", () => closePopup(popupEditProfile));
formEditProfile.addEventListener("submit", handleEditProfileFormSubmit);
openAddCardPopupBtn.addEventListener("click", openAddCardPopup);
closeAddCardPopupBtn.addEventListener("click", () => closePopup(popupAdd));