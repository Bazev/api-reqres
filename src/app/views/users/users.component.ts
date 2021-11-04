import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {User} from "../../models/user.model";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersSubs : Subscription;
  users: Array<User>

  constructor(private userServive: UserService) {
    this.users = [];
    this.usersSubs = new Subscription();
  }

  ngOnInit(): void {
    this.usersSubs = this.userServive
      .users
      .subscribe(users =>{
        console.log(users);
        this.users = users;
      });
  }

  ngOnDestroy(): void {
    this.usersSubs.unsubscribe();
  }

}
