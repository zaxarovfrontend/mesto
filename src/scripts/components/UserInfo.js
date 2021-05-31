export class UserInfo {
//Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
    constructor(name, jobName, avatar) {
        this._name = name;
        this._jobName = jobName;
        this._avatar = avatar;
    }

//публичный метод getUserInfo, который возвращает объект с данными пользователя.
//Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
    getUserInfo() {
        const name = this._name.textContent;
        const jobName = this._jobName.textContent;
        const id = this._id;
        const avatar = this._avatar;
        return {name, jobName, id, avatar };
    };

    //публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.
    setUserInfo(name, about, id) {
        this._name.textContent = name;
        this._jobName.textContent = about;
        this._id = id;
    };

    setAvatar(link) {
        this._avatar.src = link;
    }

    getId() {
        return this._id;
    }
}
