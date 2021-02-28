export class User {
  // tslint:disable-next-line:variable-name
  constructor(public email: string, public id: string, public _token: string, public _tokenExpirationDate: Date) {

  }

  get getToken() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }
}
