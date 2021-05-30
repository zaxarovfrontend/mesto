export default class Popup {
    constructor(popupSelector) {
        this.element = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this.element.classList.add("popup_opened");
        document.addEventListener("keydown", this._handleEscClose);
    }

    close() {
        this.element.classList.remove("popup_opened");
        document.removeEventListener("keydown", this._handleEscClose);
    };

    _handleEscClose = (evt) => {
        if (evt.key === "Escape") {
            this.close();
        }
    }

    _renderLoading() {
        const prevTextBtn = this.element.querySelector('button').textContent;
        this.element.querySelector('button').textContent = 'Сохранение...';

        setTimeout(() => {
            this.element.querySelector('button').textContent = prevTextBtn;
        }, 1500)
    }

    setEventListeners() {
        this.element.addEventListener('click', (evt) => {
            if (evt.target.classList.contains("popup__overlay")) {
                this.close();
            }
            if (evt.target.classList.contains("popup__close-button")) {
                this.close();
            }
        })
    }
}



