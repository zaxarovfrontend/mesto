
export default class Card {
  constructor({name, link,owner,id, likes}, {handleCardClick, handleCardDelete, handleCardLike}, cardSelector, userId) {
    this._templateElement = document.querySelector(cardSelector);
    this._element = this._getTemplate();
    this._name = name;
    this._image = link;
    this._openFullImage = handleCardClick;
    this._cardImage = ".card__image";
    this._cardLike = ".card__like-button";
    this._cardDelete = ".card__delete";
    this._cardTitle = ".card__title";
    this._card = ".card";
    this._likes = likes;
    this._owner = owner.id;
    this._id = id;
    this._userId = userId;
    this._handleCardDelete = handleCardDelete;
  }

  _getTemplate() {
    const cardElement =  this._templateElement.content.children[0].cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._element.querySelector(this._cardImage).addEventListener("click", () => this._openFullImage(this._name,this._image));
    this._element.querySelector(this._cardLike).addEventListener("click", this._likeCard);
    this._element.querySelector(this._cardDelete).addEventListener("click", this._deleteCard);
  }

  generateCard() {
    this._setEventListeners();
    this._element.querySelector('.card__like-info').textContent = this._likes.length;
    this._element.querySelector(this._cardImage).src = this._image;
    this._element.querySelector(this._cardImage).alt = this._name;
    this._element.querySelector(this._cardTitle).textContent = this._name;
    if (this._userId === this._owner) {
      this._element.querySelector(this._cardDelete).classList.add('card__delete_active');
    }
    return this._element;
  }

  _likeCard(evt) {
    evt.target.classList.toggle("card__like-button_active");
  }

  _deleteCard() {
    this._handleCardDelete(this._element);
  }
}