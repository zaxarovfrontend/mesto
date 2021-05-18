export default class UserInfo {

    constructor(name, jobName) {
      this._name = name;
      this._jobName = jobName;
    }


    getUserInfo() {
      const name = this._name.textContent;
      const jobName = this._jobName.textContent;
      return {name, jobName};
    };

    setUserInfo(data) {
      this._name.textContent = data.name;
      this._jobName.textContent = data._jobName
    };
}
