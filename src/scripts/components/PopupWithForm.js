import Popup from "./Popup";

export default class PopupWithForm extends Popup {

    constructor(popupSelector, handleEditProfileFormSubmit) {
        super(popupSelector);
        this._popupSelector = popupSelector;
        this._handleEditProfileFormSubmit = handleEditProfileFormSubmit.bind(this);
        this._formEditProfile = this._formEditProfile;
    }

    _getInputValues() {
        const values = {}
        const inputs = [...this._formEditProfile.querySelectorAll('.popup__input')]
        inputs.forEach(input => {
            values[input.name] = input.value
        })
        return values
    };

    _setEventListeners() {
        super.setEventListeners()
        this._popupSelector.querySelector(".profile__edd-button").addEventListener('click', () => {
            super.open()
        })

        close()
        {
            this._formEditProfile.reset();
            super.close()
        }
    }
}
