export default class Card {
  constructor(data, cardSelector, openFullImage) {
    this._name = data.name;
    this._link = data.link;
    this._image = data.link;
    this._cardSelector = cardSelector;
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

generateCard() {
  this._element = this._getTemplate();
  this._setEventListeners();
  this._element.querySelector(".card__image").src = this._image;
  this._element.querySelector(".card__image").alt = this._name;
  this._element.querySelector(".card__title").textContent = this._name;
  return this._element;
}

_openFullImage(event) {
  pupupImageCard.src = event.target.src;
  pupupImageCard.alt = event.target.closest('.card').querySelector('.card__title').textContent
  popupImageTitle.textContent = event.target.closest('.card').querySelector('.card__title').textContent
  openPopup(popupImage)
}


}