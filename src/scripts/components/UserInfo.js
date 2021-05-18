export class UserInfo {

    constructor(name, jobName) {
      this._name = name;
      this._jobName = jobName;
    }


    getUserInfo() {
      const name = this._name.textContent;
      const jobName = this._jobName.textContent;
      return {name, jobName};
    };

    setUserInfo(options) {
      this._name.textContent = options.name;
      this._jobName.textContent = options._jobName
    };
}
