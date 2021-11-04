import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: BehaviorSubject<boolean>

  constructor(private http: HttpClient) {
    this.token = new BehaviorSubject<boolean>(false);
  }

  login(email:string, password:string): Promise<any> {
    return this.http
      .post('https://reqres.in/api/login',
        {
          email,
          password,
        })
      .toPromise()
      .then(() => {
        this.token.next(true)
      });
  }
  logout(): Promise<void> {
    return new Promise<void>(
      (res, rej) => {
        this.token.next(false);
        res();
      }
    )
  }
}




