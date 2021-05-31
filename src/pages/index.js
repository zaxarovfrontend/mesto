import {cohortId, popupDelete} from "../scripts/utils/constants"
import Api from "../scripts/components/Api"
import Card from "../scripts/components/Card.js";
import {initialCards} from "../scripts/utils/initialCards.js";
import FormValidator from "../scripts/components/FormValidator";
import {validateConfig} from "../scripts/utils/constants.js";
import "./index.css";
import Section from "../scripts/components/Section.js";
import PopupWithImage from "../scripts/components/PopupWithImage";
import PopupWithForm from "../scripts/components/PopupWithForm";
import {UserInfo} from "../scripts/components/UserInfo";
import {PopupWithDelete} from "../scripts/components/PopupWithDelete";

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
const popupAvatarEdit = document.querySelector('.profile__edit-button-avatar');
const avatarUploadContainer = document.querySelector('.popup_type_avatar-update');
const validatorAvatarUpload = new FormValidator(validateConfig, avatarUploadContainer);
const popupCaption = ('.popup_type_image');
const popupImage = new PopupWithImage(popupCaption);
const profile = ('.popup_type_edit-profile');
const popFormAdd = ('.popup_type_add');
const popFormUpdate = ('.popup_type_avatar-update');

const api = new Api({
    url: `https://mesto.nomoreparties.co/v1/${cohortId}`,
    headers: {
        authorization: 'f12d97c5-3bd7-4a64-bc24-17e685180ee0',
        'Content-Type': 'application/json',
    }
});


validatorAddCard.enableValidation();
validatorEditProfile.enableValidation();
validatorAvatarUpload.enableValidation();


// создание нового элеменита карточки. Где мы из массива берем ссылку, название картинки и альт.
const section = new Section({
    renderer: (item) => {
        const card = addCard(item);
        section.addItem(card, 'append');
    },
}, '.cards');


/* Переменая для текста работы куда будет добавляться новый текст */
const newProfileTitle = document.querySelector(".profile__title"),
    newProfileText = document.querySelector(".profile__text"),
    newAvatar = document.querySelector(".profile__avatar"),
    userInfo = new UserInfo(newProfileTitle, newProfileText, newAvatar);


//Функция открытия попапа редактирования
function openProfilePopup() {
    const getProfileData = userInfo.getUserInfo();
    nameInput.value = getProfileData.name;
    jobInput.value = getProfileData.jobName;
    validatorEditProfile.removeInputError();
    popupEditProfile.open();
}


//Попап профиля рекадирования
const popupEditProfile = new PopupWithForm(profile, {
    handlerSubmit: (data) => {
        api.editUserData(data.name, data.job)
            .then(result => {
                userInfo.setUserInfo(result.name, result.about);
                popupEditProfile.close();
            })
            .catch((err) => {
                console.log(err);
    })
    }
});


//Попап добавления карточки
const popupAddCard = new PopupWithForm(popFormAdd, {
    handlerSubmit: (data) => {
        api.addCard(data.title, data.link)
            .then(result => {
                const element = addCard(result)
                section.addItem(element, 'prepend');
            })
            .catch((err) => {
                console.log(err);
            })
        popupAddCard.close();
    }
});

//Попап удаления карточки
const popupDel = new  PopupWithDelete(popupDelete, {
    submitHandler: (cardId) => {
        api.cardDelete(cardId)
            .then((data) => {
                popupDel.cardElement.remove()
                popupDel.close();
            })
            .catch((err) => {
                console.log(err);
            })
    }

})


const popupAvatar = new PopupWithForm(popFormUpdate, {
    handlerSubmit: ({link}) => {
        api.updateAvatar(link)
            .then(({avatar}) => {
                userInfo.setAvatar(link);
                popupAvatar.close();
            })
            .catch((err) => {
                console.log(err);
            })
    }
})


function addCard(item) {
    const userId = userInfo.getId()
    const card = new Card(item,
        {
            handleCardClick: (name, link) => {
                popupImage.open({name, link});
            },
            handleCardDelete: (cardId, elem) => {
                popupDel.open(cardId, elem);
            },
            handleCardLike: (cardId) => {
                api.setLike(cardId)
                    .then(({likes}) => {
                        card._likes = likes;
                        card.updateLikeCount();
                    })
            },
            handleCardDislike: (cardId) => {
                api.removeLike(cardId)
                    .then(({likes}) => {
                        card._likes = likes;
                        card.updateLikeCount();
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
        }, '.card-template', userId)
    return card.generateCard();
};

//Получаение инфорации от профиля
api.getUserInfo()
    .then((data) => {
        userInfo.setUserInfo(data.name, data.about, data._id)
        userInfo.setAvatar(data.avatar);
    })
    .catch((err) => {
        console.log(err);
    })


//Получаение инфорации по карточкам
api.getInitialCards()

    .then(data => {
        section.renderer(data)
    })
    .catch((err) => {
        console.log(err);
    })

popupEditProfile.setEventListeners();
popupAddCard.setEventListeners();
popupImage.setEventListeners();
popupDel.setEventListeners();
popupAvatar.setEventListeners();

/* Кнопка "редактировать" открывает модалку */
openEditProfilePopupBtn.addEventListener("click", openProfilePopup);
openAddCardPopupBtn.addEventListener("click", () => {
    validatorAddCard.removeInputError();
    popupAddCard.open()
});

popupAvatarEdit.addEventListener('click', () => {
    validatorAvatarUpload.removeInputError();
    popupAvatar.open();
})
