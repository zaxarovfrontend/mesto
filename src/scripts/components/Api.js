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
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch((error) => {
                console.error(error);
            })
    }

//Получил с сервера карточки
    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            headers: this._headers,
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
            })
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
            .then(result => result.ok ? result.json() : Promise.reject(`Ошибка: ${result.status}`))
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
            .then(result => result.ok ? result.json() : Promise.reject(`Ошибка: ${result.status}`))
    }

    cardDelete(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: "DELETE",
            headers: this._headers,
        })
            .then(result => result.ok ? result.json() : Promise.reject(`Ошибка: ${result.status}`))
    }


    setAvatar({avatar}) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatar
            })
        })
            .then(result => result.ok ? result.json() : Promise.reject(`Ошибка: ${result.status}`))
    }



    setLike(cardId) {
        return fetch(`${this._url}/cards/likes/${cardId}`,
            {
                method: 'PUT',
                headers: this._headers
            })
            .then(result => result.ok ? result.json() : Promise.reject(`Ошибка: ${result.status}`))
    }

    removeLike(cardId) {
        return fetch(`${this._url}/cards/likes/${cardId}`,
            {
                method: 'DELETE',
                headers: this._headers
            })
            .then(result => result.ok ? result.json() : Promise.reject(`Ошибка: ${result.status}`))
    }


}
