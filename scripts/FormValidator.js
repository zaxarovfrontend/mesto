import { validateConfig} from "./index.js";

export default class FormValidator {
  constructor(validateConfig, formElement) {
    this._validateConfig = validateConfig;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(validateConfig.inputSelector));
    this._buttonElement = this._formElement.querySelector(validateConfig.submitButtonSelector);
    this._formSelector = validateConfig.formSelector;
  };

  

  _setEventListeners = (formElement) => {
    const inputList = Array.from(this._formElement.querySelectorAll(this._validateConfig, this._inputSelector));
    const buttonElement = formElement.querySelector(this._validateConfig, this._submitButtonSelector);
    _toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(this._formElement, inputElement);
        toggleButtonState(this._inputList, this._buttonElement);
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
  
  _checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(formElement, inputElement);
    }
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
  


  _toggleButtonState(inputList,buttonElement) {
    if (hasInvalidInput(this._inputList)) {
      buttonElement.classList.add(this._validateConfig, this._inactiveButtonClass); 
      buttonElement.setAttribute('disabled', true);
    }
    else {
      buttonElement.classList.remove(this._validateConfig, this._inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }

  };
  
  setCustomError(formElement, inputElement, validateConfig) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    if (inputElement.type === 'url') {
      errorElement.textContent = validateConfig.errorMessageNullLink;
    } 
    else !inputElement.value.length > 0 ? errorElement.textContent = validateConfig.errorMessageNullInput : errorElement.textContent = inputElement.validationMessage;
  }
};