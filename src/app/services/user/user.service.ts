import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../../models/user.model";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: BehaviorSubject<Array<User>>

  constructor(private http: HttpClient, private authService : AuthService) {

    this.users = new BehaviorSubject<Array<User>>([]);
    this.getUsers();
  }

  getUsers(): void {
    this.http
      .get('https://reqres.in/api/users?')
      .pipe(
        map((data:any) => data.data.map((userAsJson: any) => User.fromJson(userAsJson)))
      )
      .toPromise()
      .then((users: Array<User>) => {
        this.users.next(users);
      })
  }

  getUserById(identifiant: string) : Promise<User> {

    return this.http
      .get('https://reqres.in/api/users/'+identifiant)
      .pipe(
        map((data:any)=> User.fromJson(data.data))
      )
      .toPromise();
  }
}
