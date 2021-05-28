import Popup from "./Popup";

export class popupWithDelete extends Popup {
constructor(popup, {submitHandler}) {
    super(popup);
    this._submitHandler = submitHandler;
}
 open(cardId) {
     super.open();
     this._cardId = cardId;
 }

 setEventListeners() {
     super.setEventListeners();
     this._popup.addEventListener('submit', (evt) => {
         evt.preventDefault()
         this._submitHandler()
     })
 }
   cardId() {
    return this._cardId;
   }
}
