export default class Popup {
  constructor(popupSelector) {
    this.element = document.querySelector(popupSelector);
  }

  open() {
    this.element.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close = () => {
    this.element.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  };

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this.element.querySelector(".popup__close-button")
    const closeBtn = this.element.querySelector(".popup__close-button");
    closeBtn.addEventListener('click', this.close);

    document.addEventListener('click', (evt) => {
      if (evt.target.classList.contains("popup__overlay")) {
        this.close();
      }
    })
    }
}


