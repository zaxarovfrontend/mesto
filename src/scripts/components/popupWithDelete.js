import Popup from "./Popup";

export class popupWithDelete extends Popup {
    constructor(popup, {submitHandler}) {
        super(popup);
        this._submitHandler = submitHandler;
    }

    open(cardId, element) {
        super.open();
        this._cardId = cardId;
        this.cardElement = element;
    }

    setEventListeners() {
        super.setEventListeners();
        this.element.addEventListener('submit', (evt) => {
            evt.preventDefault()
            this._renderLoading();
            this._submitHandler(this._cardId);
        })
    }

}
