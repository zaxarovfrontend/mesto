let popup = class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popupCloseButton = ".popup__close-button";
  }

  open () {
    this._popupSelector.classList.add("popup_opened");
    document.addEventListener("keydown",  this._handleEscClose);
  }

  close () {
    this._popupSelector.classList.remove("popup_opened");
    document.removeEventListener("keydown",  this._handleEscClose);
  }

  _handleEscClose = (evt) =>{
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners(){
    this._popupSelector.addEventListener("click", (evt) => { if (evt.target.classList.contains(this._popupCloseButton))
      this.close();
    })}
};


