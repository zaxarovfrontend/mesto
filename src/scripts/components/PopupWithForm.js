import Popup from "./Popup";

export default class PopupWithForm extends Popup {

  constructor(popupSelector) {
    super();
    this._popupSelector = popupSelector;
    this._handleAddCardSubmit = handleAddCardSubmit;
    this._handleEditProfileFormSubmit = handleEditProfileFormSubmit;
    this._newProfileTitle = newProfileTitle;
    this._newProfileText = newProfileText;
    this._nameInput = nameInput;
    this._jobInput = jobInput;
    this._formAddCard = formAddCard;
    this._formEditProfile = this.formEditProfile;
  }  

  _getInputValues() {
    this.newProfileTitle.textContent = this.nameInput.value;
    this.newProfileText.textContent = this.jobInput.value;
  };

_setEventListeners() {
  this.formAddCard.addEventListener("submit", this._handleAddCardSubmit);
  this.formEditProfile.addEventListener("submit", this._handleEditProfileFormSubmit);
};


}
