export default class Api {
    constructor(options) {
        this._headers = options.headers;
        this._url = options.url;

    }

//Получил информациб о профиле с сервера
    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: this._headers,
        })
            .then(this._checkRes)

    }

//Получил с сервера карточки
    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            headers: this._headers,
        })
            .then(this._checkRes)

    }

//Добавил новую информацию о профиле на сервер
    editUserData(name, about) {
        return fetch(`${this._url}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                about: about
            })
        })
            .then(this._checkRes)
    }

    addCard(name, link) {
        return fetch(`${this._url}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
            .then(this._checkRes)
    }

    cardDelete(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: "DELETE",
            headers: this._headers,
        })
            .then(this._checkRes)
    }


    setLike(cardId) {
        return fetch(`${this._url}/cards/likes/${cardId}`,
            {
                method: 'PUT',
                headers: this._headers
            })
            .then(this._checkRes)
    }

    removeLike(cardId) {
        return fetch(`${this._url}/cards/likes/${cardId}`,
            {
                method: 'DELETE',
                headers: this._headers
            })
            .then(this._checkRes)
    }

    updateAvatar(link) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: link,
            })
        })
            .then(this._checkRes)
    }

    _checkRes(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }
}
