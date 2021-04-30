export default class Card {
  constructor(data, cardSelector, openFullImage) {
    this._name = data.name;
    this._link = data.link;
    this._image = data.link;
    this._cardSelector = cardSelector;
    this._openFullImage = openFullImage;
    this._cardImage = ".card__image";
    this._cardLike = ".card__like-button";
    this._cardDelete = ".card__delete";
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._element.querySelector(this._cardImage).addEventListener("click", () => this._openFullImage(this._name, this._link));
    this._element.querySelector(this._cardLike).addEventListener("click", this._likeCard);
    this._element.querySelector(this._cardDelete).addEventListener("click", this._deleteCard);
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector(".card__image").src = this._image;
    this._element.querySelector(".card__image").alt = this._name;
    this._element.querySelector(".card__title").textContent = this._name;
    return this._element;
  }

  _likeCard(evt) {
    evt.target.classList.toggle("card__like-button_active");
  }

  _deleteCard(evt) {
    evt.target.closest(".card").remove();
  }
}
