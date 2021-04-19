const validateConfig = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
  errorMessageNullInput: 'Вы пропустили это поле.',
  errorMessageNullLink: 'Введите адрес сайта.',
};

const showInputError = (validateConfig, formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(validateConfig.inputErrorClass);
  setCustomError(formElement, inputElement, validateConfig)
  errorElement.classList.add(validateConfig.errorClass);
};

const hideInputError = (validateConfig, formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(validateConfig.inputErrorClass);
  errorElement.classList.remove(validateConfig.errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (validateConfig, formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(validateConfig.inputSelector));
  const buttonElement = formElement.querySelector(validateConfig.submitButtonSelector);
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
}; 

const enableValidation = (validateConfig) => {
  const formList = Array.from(document.querySelectorAll(validateConfig.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });  
    setEventListeners(formElement);
  });     
};

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  }); 
}

function toggleButtonState(validateConfig, inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validateConfig.inactiveButtonClass); 
    buttonElement.setAttribute('disabled', true);
  }
  else {
    buttonElement.classList.remove(validateConfig.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
}

function setCustomError(formElement, inputElement, validateConfig) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  if (inputElement.type === 'url') {
    errorElement.textContent = validateConfig.errorMessageNullLink;
  }
  else !inputElement.value.length > 0 ? errorElement.textContent = validateConfig.errorMessageNullInput : errorElement.textContent = inputElement.validationMessage;
}

enableValidation(validateConfig);