import { validateConfig } from "./constants.js";

export default class FormValidator {
  constructor(validateConfig, formElement) {
    this._validateConfig = validateConfig;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(validateConfig.inputSelector));
    this._buttonElement = this._formElement.querySelector(validateConfig.submitButtonSelector);
    this._formSelector = validateConfig.formSelector;
    this._inputErrorClass = validateConfig.inputErrorClass;
    this._errorMessageNullInput = validateConfig.errorMessageNullInput;
    this._errorMessageNullLink = validateConfig.errorMessageNullLink;
    this._inactiveButtonClass = validateConfig.inactiveButtonClass;
  }

  _setEventListeners = () => {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };

  enableValidation = () => {
    this._setEventListeners();
  };

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _showInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    this._setCustomError(inputElement);
    errorElement.classList.add(validateConfig.errorClass);
  };

  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(validateConfig.errorClass);
    errorElement.textContent = "";
  };

  removeInputError() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
    this._toggleButtonState();
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.setAttribute("disabled", true);
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute("disabled");
    }
  }

  _setCustomError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    if (inputElement.type === "url") {
      errorElement.textContent = this._errorMessageNullLink;
    } else !inputElement.value.length > 0 ? (errorElement.textContent = this._errorMessageNullInput) : (errorElement.textContent = inputElement.validationMessage);
  }
}