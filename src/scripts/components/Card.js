
export default class Card {
  constructor({name, link, owner, _id, likes}, {
    handleCardClick,
    handleCardDislike,
    handleCardLike, handleCardDelete
  }, cardSelector, userId) {
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
    this._owner = owner._id;
    this._id = _id;
    this._userId = userId;
    this._handleCardDislike = handleCardDislike;
    this._handleCardLike = handleCardLike;
    this._handleCardDelete = handleCardDelete;
  }

  _getTemplate() {
    const cardElement = this._templateElement.content.children[0].cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._element.querySelector(this._cardImage).addEventListener("click", () => this._openFullImage(this._name, this._image));
    this._element.querySelector(this._cardLike).addEventListener("click", () => {
      const trigger = this._element.querySelector(this._cardLike).classList.contains("card__like-button_active");

      if (trigger) {
        this._dislikeCard();
      } else {
        this._likeCard();
      }
    });
    this._element.querySelector(this._cardDelete).addEventListener("click", () => this._deleteCard());
  }

  generateCard() {
    this._setEventListeners();
    this.updateLikeCount();
    this._element.querySelector(this._cardImage).src = this._image;
    this._element.querySelector(this._cardImage).alt = this._name;
    this._element.querySelector(this._cardTitle).textContent = this._name;
    if (this._userId === this._owner) {
      this._element.querySelector(this._cardDelete).classList.add('card__delete_active');
    }

    this._likes.forEach((like) => {
      if (like._id === this._userId) {
        this._element.querySelector(this._cardLike).classList.toggle("card__like-button_active");
        return;
      }
    })

    return this._element;
  }

  updateLikeCount() {
    this._element.querySelector('.card__like-info').textContent = this._likes.length;
  }

  _likeCard() {
    this._handleCardLike(this._id);
    this._element.querySelector(this._cardLike).classList.toggle("card__like-button_active");
  }

  _dislikeCard() {
    this._handleCardDislike(this._id);
    this._element.querySelector(this._cardLike).classList.toggle("card__like-button_active");
  }

  _deleteCard() {
    this._handleCardDelete(this._id, this._element);
  }
}

