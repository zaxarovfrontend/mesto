import {cohortId, options} from "../utils/constants";

export default class Api {
    constructor(options) {
        this._headers = options.headers;
        this._url = options.url;

    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

        getData()
        {
            return Promise.all([this.getUserInfo()]);
        }

        getUserInfo()
        {
            return fetch(`${this._url}/users/me`, {
                headers: this._headers,
            })
                .then(this._checkResponse)
        }

        setUserInfo({name, job})
        {
            return fetch(`${this._url}/users/me`, {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    name: name,
                    about: job
                })
                    .then(this._checkResponse)
            })
        }

}



/*


    getInitialCards() {
        return fetch(` https://mesto.nomoreparties.co/v1/${cohortId}/cards`, {
            headers: {
                authorization: 'f12d97c5-3bd7-4a64-bc24-17e685180ee0'
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
            });``
    }
}

    // другие методы работы с API
}

const api = new Api({
    baseUrl: ` https://mesto.nomoreparties.co/v1/${cohortId}`,
    headers: {
        authorization: 'f12d97c5-3bd7-4a64-bc24-17e685180ee0',
        'Content-Type': 'application/json'
    }
}); */
