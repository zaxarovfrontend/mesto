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

export class Card {
  constructor(data, cardSelector) {
    this._title = data.title;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector('.card-template')
    .content
    .querySelector('.card')
    .cloneNode(true);
  
    return cardElement;
}

generateCard() {
  this._element = this._getTemplate();
  this._element.querySelectorAll('.card__image').src = this._image;
  this._element.querySelectorAll('.card__title').textContent = this._title;
  return this._element;
}
}

initialCards.forEach((item) => {
  const card = new Card(item, '.card-template');
  const cardElement = card.generateCard();
  

  document.querySelector('.cards').append(cardElement);
}); 


