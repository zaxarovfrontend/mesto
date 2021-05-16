import Popup from "./Popup";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);

    }

    open({name, link}) {
        this._pupupImageCard = document.querySelector(".popup__image");
        this._popupImageTitle = document.querySelector(".popup__caption");
        this._pupupImageCard.src = link;
        this._pupupImageCard.alt = name;
        this._popupImageTitle.textContent = name;
        super.open();
        this.setEventListeners();
    }

}
