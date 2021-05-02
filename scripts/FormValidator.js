import { validateConfig } from "./index.js";

export default class FormValidator {
  constructor(validateConfig, formElement) {
    this._validateConfig = validateConfig;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(validateConfig.inputSelector));
    this._buttonElement = this._formElement.querySelector(validateConfig.submitButtonSelector);
    this._formSelector = validateConfig.formSelector; 
  };

  

  _setEventListeners = () => {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(this._inputList, this._buttonElement);
      });
    });
  };
  
  enableValidation = () => {
   this._setEventListeners();
    };

  
  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    }); 
  };
  
  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };
  
  _showInputError = (inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(validateConfig.inputErrorClass);
    setCustomError(inputElement)
    errorElement.classList.add(validateConfig.errorClass);
  };
  
  _hideInputError = (inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._validateConfig.inputErrorClass);
    errorElement.classList.remove(validateConfig.errorClass);
    errorElement.textContent = '';
  };
  


  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._buttonElement.classList.add(this._validateConfig.inactiveButtonClass); 
      this._buttonElement.setAttribute('disabled', true);
    }
    else {
      this._buttonElement.classList.remove(this._validateConfig.inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    }

  };
  
  setCustomError(inputElement, validateConfig) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    if (inputElement.type === 'url') {
      errorElement.textContent = validateConfig.errorMessageNullLink;
    } 
    else !inputElement.value.length > 0 ? errorElement.textContent = validateConfig.errorMessageNullInput : errorElement.textContent = inputElement.validationMessage;
  }
};