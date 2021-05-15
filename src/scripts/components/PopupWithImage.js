import Popup from "./Popup";

export default class PopupWithImage extends Popup {
    constructor(name, link ) {
        super();
        this._name = name;
        this._link = link;

    }

    open() {
        this._pupupImageCard = document.querySelector(".popup__image");
        this._popupImageTitle = document.querySelector(".popup__caption");
        this.element = document.querySelector(".popup_type_image");
        this._pupupImageCard.src = this._link;
        this._pupupImageCard.alt = this._name;
        this._popupImageTitle.textContent = this._name;
        super.open();
    }

}
