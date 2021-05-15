export default class Popup {
  constructor(popupSelector) {
   this._popupSelector = popupSelector;
  }

  open () {
    this.element.classList.add("popup_opened");
    document.addEventListener("keydown", closePopupEsc);
  };

  close() {
    this.element.classList.remove("popup_opened");
    document.removeEventListener("keydown", closePopupEsc);

  }

  _handleEscClose() {
    if (this.evt.key === "Escape") {
      const element = document.querySelector(".popup_opened");
      closePopup(element);
    }
  }

  setEventListeners() {

    
  }

}

