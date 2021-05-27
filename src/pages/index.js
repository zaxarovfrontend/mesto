
import { cohortId } from "../scripts/utils/constants"
import Api from "../scripts/components/Api"
import Card from "../scripts/components/Card.js";
import { initialCards } from "../scripts/utils/initialCards.js";
import FormValidator from "../scripts/components/FormValidator";
import { validateConfig } from "../scripts/utils/constants.js";
import "./index.css";
import Section from "../scripts/components/Section.js";
import PopupWithImage from "../scripts/components/PopupWithImage";
import PopupWithForm from "../scripts/components/PopupWithForm";
import { UserInfo } from  "../scripts/components/UserInfo";

const cardSelector = document.querySelector('.card-template');
/* кнопка открытия профиля редактирования */
const openEditProfilePopupBtn = document.querySelector(".profile__edit-button");
/* кнопка открытия профиля добавления карточки */
const openAddCardPopupBtn = document.querySelector(".profile__add-button");

const popupContainerAdd = document.querySelector(".popup__container_add");
const validatorAddCard = new FormValidator(validateConfig, popupContainerAdd);

const popupContainerEdit = document.querySelector(".popup__container_type_edit-profile");
const validatorEditProfile = new FormValidator(validateConfig, popupContainerEdit);
const nameInput = document.querySelector('.popup__input_type-name');
const jobInput = document.querySelector('.popup__input_type-job');

const api = new Api({
    url: `https://mesto.nomoreparties.co/v1/${cohortId}`,
    headers: {
        authorization: 'f12d97c5-3bd7-4a64-bc24-17e685180ee0',
        'Content-Type': 'application/json',
    }
});

api.getUserInfo();






validatorAddCard.enableValidation();
validatorEditProfile.enableValidation();

const popupImage = new PopupWithImage('.popup_type_image');

// создание нового элеменита карточки. Где мы из массива берем ссылку, название картинки и альт.
const section = new Section({ items:initialCards, renderer: (item) => {
        const card = addCard(item);
        section.addItem(card, 'append');
    },}, '.cards');
section.renderer();



/* Переменая для текста работы куда будет добавляться новый текст */
const newProfileTitle = document.querySelector(".profile__title"),
    newProfileText = document.querySelector(".profile__text"), userInfo = new UserInfo(newProfileTitle, newProfileText);



//Функция открытия попапа редактирования
function openProfilePopup() {

    const getProfileData = userInfo.getUserInfo();
    nameInput.value = getProfileData.name;
    jobInput.value = getProfileData.jobName;
    validatorEditProfile.removeInputError();
    popupEditProfile.open();
}


const popupEditProfile = new PopupWithForm('.popup_type_edit-profile', {
    handlerSubmit: (name, about) => {
        userInfo.setUserInfo(name, about);
        popupEditProfile.close();
    }
});

 const popupAddCard = new PopupWithForm('.popup_type_add', {
    handlerSubmit: (data) => {
        const element = addCard({
            name: data.title,
            link: data.link
        })
      section.addItem(element, 'prepend');
      popupAddCard.close();
    }
});



function addCard(item) {
  const card = new Card(item,
    {handleCardClick: (name, link) => {
      popupImage.open({name, link});
      }}, '.card-template')
    return card.generateCard();
};








popupEditProfile.setEventListeners();
popupAddCard.setEventListeners();
popupImage.setEventListeners();

/* Кнопка "редактировать" открывает модалку */
openEditProfilePopupBtn.addEventListener("click", openProfilePopup);
openAddCardPopupBtn.addEventListener("click", () => {
  validatorAddCard.removeInputError();
  popupAddCard.open()
});

