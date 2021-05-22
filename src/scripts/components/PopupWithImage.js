import Popup from "./Popup";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._pupupImageCard = this.element.querySelector(".popup__image");
        this._popupImageTitle = this.element.querySelector(".popup__caption");

    }

    open({name, link}) {
        this._pupupImageCard.src = link;
        this._pupupImageCard.alt = name;
        this._popupImageTitle.textContent = name;
        super.open();
    }
}
