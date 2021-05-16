
export default class Card {
  constructor(data, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._image = data.link;
    this._cardSelector = ".card-template";
    this._openFullImage = handleCardClick;
    this._cardImage = ".card__image";
    this._cardLike = ".card__like-button";
    this._cardDelete = ".card__delete";
    this._cardTitle = ".card__title";
    this._card = ".card";
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector(this._card).cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._element.querySelector(this._cardImage).addEventListener("click", () => this._openFullImage());
    this._element.querySelector(this._cardLike).addEventListener("click", this._likeCard);
    this._element.querySelector(this._cardDelete).addEventListener("click", this._deleteCard);
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector(this._cardImage).src = this._image;
    this._element.querySelector(this._cardImage).alt = this._name;
    this._element.querySelector(this._cardTitle).textContent = this._name;
    return this._element;
  }

  _likeCard(evt) {
    evt.target.classList.toggle("card__like-button_active");
  }

  _deleteCard(evt) {
    evt.target.closest(".card").remove();
  }
}