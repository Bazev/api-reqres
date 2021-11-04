export class User {

  private _identifiant: number | null;
  private _email: string;
  private _first_name: string;
  private _last_name: string;
  private _avatar: string;

  constructor(email: string, first_name: string, last_name: string, avatar: string, identifiant?: number) {
    if (typeof identifiant === 'number') {
      this._identifiant = identifiant;
    } else {
      this._identifiant = null;
    }
    this._email = email;
    this._first_name = first_name;
    this._last_name = last_name;
    this._avatar = avatar;
  }


  get identifiant(): number | null {
    return this._identifiant;
  }

  set identifiant(value: number | null) {
    this._identifiant = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get first_name(): string {
    return this._first_name;
  }

  set first_name(value: string) {
    this._first_name = value;
  }

  get last_name(): string {
    return this._last_name;
  }

  set last_name(value: string) {
    this._last_name = value;
  }

  get avatar(): string {
    return this._avatar;
  }

  set avatar(value: string) {
    this._avatar = value;
  }

  static fromJson(userAsJson: any): User {
    return new User(
      userAsJson.email,
      userAsJson.first_name,
      userAsJson.last_name,
      userAsJson.avatar,
      userAsJson.id,
    );
  }

  toJson(): any {
    return {
      _email: this.email,
      _first_name: this.first_name,
      _last_name: this.last_name,
      _avatar: this.avatar,
      _identifiant: this.identifiant,
    };
  }
}
