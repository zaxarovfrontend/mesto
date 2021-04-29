export default class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._image = data.link;
    this._cardSelector = cardSelector;
    this.pupupImageCard = document.querySelector('.popup__image');
    this.popupImageTitle = document.querySelector('.popup__caption');
    this._openFullImage = this._openFullImage.bind(this);
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);
    return cardElement;
}

  _setEventListeners() {
    this._element.addEventListener('click', this._openFullImage);
    this._element.addEventListener('click', this._likeCard);
    this._element.addEventListener('click', this._deleteCard);
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector(".card__image").src = this._image;
    this._element.querySelector(".card__image").alt = this._name;
    this._element.querySelector(".card__title").textContent = this._name;
    return this._element;
  }

  _openFullImage(event) {
    this.pupupImageCard.src = event.target.src;
    this.pupupImageCard.alt = event.target.closest('.card').querySelector('.card__title').textContent
    this.popupImageTitle.textContent = event.target.closest('.card').querySelector('.card__title').textContent
    this.openPopup(this.pupupImageCard)
  }

  openPopup(element) {
    element.classList.add('popup_opened');
    document.addEventListener('keydown', (event) => {
      this.closePopupEsc(event);
    });
  }

  closePopupEsc(evt) {
    if (evt.key === 'Escape') {
      const element = document.querySelector('.popup_opened');
      this.closePopup(element)
    }
  }

  closePopup(element) {
    element.classList.remove('popup_opened');
    document.removeEventListener('keydown', this.closePopupEsc);
  }

  _likeCard(evt) {
    evt.target.classList.toggle('card__like-button_active');
  }
  
  _deleteCard(evt) {
  evt.target.closest('.card').remove(); 
}
}