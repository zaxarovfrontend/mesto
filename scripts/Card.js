export default class Card {
  constructor(data, cardSelector) {
    this._name = data.title;
    this._link = data.link;
    this._cardSelector = cardSelector;
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
  this._element.querySelector(".card__image").src = this._image;
  this._element.querySelector(".card__title").textContent = this._text;
  return this._element;
}
}



