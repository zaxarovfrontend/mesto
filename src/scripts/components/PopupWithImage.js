import Popup from "./Popup";

export default class PopupWithImage extends Popup {

    constructor(pupupImageCard, popupImageTitle, name, link ) {
        super();
        this._pupupImageCard = pupupImageCard;
        this._popupImageTitle = popupImageTitle;
        this._name = name;
        this._link = link;

    }

    open() {
        this._pupupImageCard.src = this._link;
        this._pupupImageCard.alt = this._name;
        this._popupImageTitle.textContent = this._name;
    }
}
