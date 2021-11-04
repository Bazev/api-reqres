import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user.model";
import {UserService} from "../../services/user/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  user : User | undefined;

  constructor(private userService:UserService, private route :ActivatedRoute) { }

  ngOnInit(): void {
    const identifiant = this.route.snapshot.params.identifiant;
    this.userService
      .getUserById(identifiant)
      .then((user:User)=> this.user = user);
  }
}
