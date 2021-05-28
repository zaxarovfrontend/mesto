export default class Api {
    constructor(options) {
        this._headers = options.headers;
        this._url = options.url;

    }

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
                alert('Http error!');
                console.error(error);
            })
    }

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

    editUserData(name,about)
{
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

}

