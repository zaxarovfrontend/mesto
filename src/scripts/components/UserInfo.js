export class UserInfo {
//Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
    constructor(name, jobName) {
      this._name = name;
      this._jobName = jobName;
      //this._avatar = document.querySelector(avatarSelector);
    }

//публичный метод getUserInfo, который возвращает объект с данными пользователя.
//Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
    getUserInfo() {
      const name = this._name.textContent;
      const jobName = this._jobName.textContent;
      return {name, jobName};
    };

    // получил аватар
   // setUserAvatar({avatar}) {
    //    this._avatar.src = avatar;
    //}

    //публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.
    setUserInfo(name, about) {
      this._name.textContent = name;
      this._jobName.textContent = about;
    };
}
