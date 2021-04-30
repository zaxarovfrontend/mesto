export default class FormValidator {
  constructor(validateConfig) {
    this._validateConfig = validateConfig;
    this._formSelector = '.popup__container';
    this._inputSelector = '.popup__input';
    this._submitButtonSelector = '.popup__submit-button';
    this._inactiveButtonClass = 'popup__submit-button_disabled';
    this._inputErrorClass = 'popup__input_type_error';
    this._errorClass = 'popup__error_visible';
    this._errorMessageNullInput = 'Вы пропустили это поле.';
    this._errorMessageNullLink = 'Введите адрес сайта.';
    this._popupСontainerAdd = '.popup__container_add';
    this._errorMessage = errorMessage;
  };


  _showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(validateConfig.inputErrorClass);
    setCustomError(formElement, inputElement, validateConfig)
    errorElement.classList.add(validateConfig.errorClass);
  };
  
  _hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._validateConfig.inputErrorClass);
    errorElement.classList.remove(validateConfig.errorClass);
    errorElement.textContent = '';
  };
  
  _checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(formElement, inputElement);
    }
  };
  
  _setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(this._validateConfig, this._inputSelector));
    const buttonElement = formElement.querySelector(this._validateConfig.this._submitButtonSelector);
    this_toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  }; 
  
  _enableValidation = (this._validateConfig) => {
    const formList = Array.from(document.querySelectorAll(this._validateConfig, this._formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });  
      setEventListeners(formElement);
    });     
  };
  
  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    }); 
  };
  
  
  _toggleButtonState(inputList,buttonElement) {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._validateConfig, this._inactiveButtonClass); 
      buttonElement.setAttribute('disabled', true);
    }
    else {
      buttonElement.classList.remove(this._validateConfig, this._inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }
  };
  
  _setCustomError(formElement, inputElement, this._validateConfig) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    if (inputElement.type === 'url') {
      errorElement.textContent = validateConfig.errorMessageNullLink;
    }
    else !inputElement.value.length > 0 ? errorElement.textContent = validateConfig.errorMessageNullInput : errorElement.textContent = inputElement.validationMessage;
  };
  
  _enableValidation(this._validateConfig);

}









